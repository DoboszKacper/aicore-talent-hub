import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogNavbar } from '@/components/blog/BlogNavbar';
import { Footer } from '@/components/Footer';
import { useBlogPost } from '@/hooks/useBlogPosts';
import { Loader2, Calendar, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || '');

  const publishedDate = post?.published_at 
    ? format(new Date(post.published_at), 'MMMM d, yyyy')
    : post?.created_at 
      ? format(new Date(post.created_at), 'MMMM d, yyyy')
      : '';

  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      
      <main className="pt-24 pb-16">
        <div className="container-wide mx-auto px-6 lg:px-8">
          {isLoading && (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-destructive">Error loading post. Please try again.</p>
            </div>
          )}

          {!isLoading && !error && !post && (
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
              <p className="text-muted-foreground mb-6">
                The post you're looking for doesn't exist or has been removed.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
            </div>
          )}

          {post && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>

              {post.cover_image_url && (
                <div className="aspect-video overflow-hidden rounded-xl mb-8">
                  <img
                    src={post.cover_image_url}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <header className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {post.title}
                </h1>
                
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <time dateTime={post.published_at || post.created_at}>
                      {publishedDate}
                    </time>
                  </div>
                </div>
              </header>

              <div 
                className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-li:text-muted-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:rounded prose-hr:border-border"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
