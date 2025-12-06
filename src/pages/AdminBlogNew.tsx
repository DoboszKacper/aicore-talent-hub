import { motion } from 'framer-motion';
import { BlogNavbar } from '@/components/blog/BlogNavbar';
import { PostEditor } from '@/components/blog/PostEditor';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export default function AdminBlogNew() {
  const { isAdmin, isLoading } = useAuth();

  if (isLoading) {
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
            <h1 className="text-3xl font-bold mb-8">
              <span className="gradient-text">New Post</span>
            </h1>
            
            <div className="glass-card">
              <PostEditor />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
