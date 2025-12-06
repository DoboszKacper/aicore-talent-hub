import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogNavbar } from '@/components/blog/BlogNavbar';
import { Button } from '@/components/ui/button';
import { useBlogPosts, useDeleteBlogPost, BlogPost } from '@/hooks/useBlogPosts';
import { useAuth } from '@/hooks/useAuth';
import { Plus, Edit, Trash2, Loader2, Eye, EyeOff } from 'lucide-react';
import { format } from 'date-fns';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function AdminBlog() {
  const { data: posts, isLoading } = useBlogPosts(false);
  const deletePost = useDeleteBlogPost();
  const { isAdmin, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <BlogNavbar />
        <main className="pt-24 pb-16">
          <div className="container-wide mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Access Denied</h1>
            <p className="text-muted-foreground mb-6">
              You need admin privileges to access this page.
            </p>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const handleDelete = async () => {
    if (deleteId) {
      await deletePost.mutateAsync(deleteId);
      setDeleteId(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      
      <main className="pt-24 pb-16">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">
                <span className="gradient-text">Manage Posts</span>
              </h1>
              <Button onClick={() => navigate('/admin/blog/new')} className="gap-2">
                <Plus size={16} />
                New Post
              </Button>
            </div>

            {isLoading && (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}

            {!isLoading && posts?.length === 0 && (
              <div className="text-center py-12 glass-card">
                <p className="text-muted-foreground mb-4">No posts yet. Create your first one!</p>
                <Button onClick={() => navigate('/admin/blog/new')} className="gap-2">
                  <Plus size={16} />
                  Create Post
                </Button>
              </div>
            )}

            {posts && posts.length > 0 && (
              <div className="glass-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Title</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden md:table-cell">Slug</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden sm:table-cell">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden lg:table-cell">Date</th>
                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((post: BlogPost) => (
                        <tr key={post.id} className="border-b border-border/50 hover:bg-card/50">
                          <td className="py-3 px-4">
                            <span className="font-medium text-foreground">{post.title}</span>
                          </td>
                          <td className="py-3 px-4 hidden md:table-cell">
                            <span className="text-muted-foreground text-sm">/blog/{post.slug}</span>
                          </td>
                          <td className="py-3 px-4 hidden sm:table-cell">
                            {post.is_published ? (
                              <span className="inline-flex items-center gap-1 text-sm text-green-400">
                                <Eye size={14} />
                                Published
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                                <EyeOff size={14} />
                                Draft
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 hidden lg:table-cell">
                            <span className="text-muted-foreground text-sm">
                              {format(new Date(post.created_at), 'MMM d, yyyy')}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => navigate(`/admin/blog/edit/${post.slug}`)}
                              >
                                <Edit size={16} />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setDeleteId(post.id)}
                                className="text-destructive hover:text-destructive"
                              >
                                <Trash2 size={16} />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Post</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this post? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
