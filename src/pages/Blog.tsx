import { motion } from 'framer-motion';
import { BlogNavbar } from '@/components/blog/BlogNavbar';
import { BlogCard } from '@/components/blog/BlogCard';
import { Footer } from '@/components/Footer';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { Loader2 } from 'lucide-react';

export default function Blog() {
  const { data: posts, isLoading, error } = useBlogPosts(true);

  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      
      <main className="pt-24 pb-16">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and updates from our AI engineering team
            </p>
          </motion.div>

          {isLoading && (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-destructive">Error loading posts. Please try again.</p>
            </div>
          )}

          {!isLoading && !error && posts?.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts published yet. Check back soon!</p>
            </div>
          )}

          {posts && posts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
