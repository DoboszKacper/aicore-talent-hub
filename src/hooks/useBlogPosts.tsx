import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  author_id: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  is_published: boolean | null;
}

export interface CreateBlogPost {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  cover_image_url?: string;
  is_published?: boolean;
}

export interface UpdateBlogPost extends Partial<CreateBlogPost> {
  id: string;
}

export function useBlogPosts(publishedOnly = true) {
  return useQuery({
    queryKey: ['blog-posts', publishedOnly],
    queryFn: async () => {
      let query = supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });
      
      if (publishedOnly) {
        query = query.eq('is_published', true);
      }
      
      const { data, error } = await query;
      
      if (error) throw error;
      return data as BlogPost[];
    },
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      
      if (error) throw error;
      return data as BlogPost | null;
    },
    enabled: !!slug,
  });
}

export function useCreateBlogPost() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (post: CreateBlogPost) => {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { data, error } = await supabase
        .from('blog_posts')
        .insert({
          ...post,
          author_id: user?.id,
          published_at: post.is_published ? new Date().toISOString() : null,
        })
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      toast({ title: 'Post created successfully' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error creating post', description: error.message, variant: 'destructive' });
    },
  });
}

export function useUpdateBlogPost() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async ({ id, ...updates }: UpdateBlogPost) => {
      const { data, error } = await supabase
        .from('blog_posts')
        .update({
          ...updates,
          published_at: updates.is_published ? new Date().toISOString() : null,
        })
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      toast({ title: 'Post updated successfully' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error updating post', description: error.message, variant: 'destructive' });
    },
  });
}

export function useDeleteBlogPost() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      toast({ title: 'Post deleted successfully' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error deleting post', description: error.message, variant: 'destructive' });
    },
  });
}
