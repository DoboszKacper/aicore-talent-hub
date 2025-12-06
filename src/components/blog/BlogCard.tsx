import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/hooks/useBlogPosts';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const publishedDate = post.published_at 
    ? format(new Date(post.published_at), 'MMM d, yyyy')
    : format(new Date(post.created_at), 'MMM d, yyyy');

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group hover:border-primary/30 transition-all duration-300"
    >
      {post.cover_image_url && (
        <div className="aspect-video overflow-hidden rounded-t-xl -mx-6 -mt-6 mb-4">
          <img
            src={post.cover_image_url}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      
      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
        <Calendar size={14} />
        <time dateTime={post.published_at || post.created_at}>{publishedDate}</time>
      </div>
      
      <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {post.title}
      </h2>
      
      {post.excerpt && (
        <p className="text-muted-foreground line-clamp-3 mb-4">
          {post.excerpt}
        </p>
      )}
      
      <Link
        to={`/blog/${post.slug}`}
        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
      >
        Read more
        <ArrowRight size={16} />
      </Link>
    </motion.article>
  );
}
