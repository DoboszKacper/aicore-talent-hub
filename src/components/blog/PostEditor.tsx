import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Save } from 'lucide-react';
import { BlogPost, CreateBlogPost, useCreateBlogPost, useUpdateBlogPost } from '@/hooks/useBlogPosts';
import { RichTextEditor } from './RichTextEditor';

interface PostEditorProps {
  post?: BlogPost | null;
  isEditing?: boolean;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function PostEditor({ post, isEditing = false }: PostEditorProps) {
  const navigate = useNavigate();
  const createPost = useCreateBlogPost();
  const updatePost = useUpdateBlogPost();
  
  const [title, setTitle] = useState(post?.title || '');
  const [slug, setSlug] = useState(post?.slug || '');
  const [excerpt, setExcerpt] = useState(post?.excerpt || '');
  const [content, setContent] = useState(post?.content || '');
  const [coverImageUrl, setCoverImageUrl] = useState(post?.cover_image_url || '');
  const [isPublished, setIsPublished] = useState(post?.is_published || false);
  const [autoSlug, setAutoSlug] = useState(!isEditing);

  useEffect(() => {
    if (autoSlug && title) {
      setSlug(generateSlug(title));
    }
  }, [title, autoSlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const postData: CreateBlogPost = {
      title,
      slug,
      excerpt: excerpt || undefined,
      content,
      cover_image_url: coverImageUrl || undefined,
      is_published: isPublished,
    };
    
    if (isEditing && post) {
      await updatePost.mutateAsync({ id: post.id, ...postData });
    } else {
      await createPost.mutateAsync(postData);
    }
    
    navigate('/admin/blog');
  };

  const isPending = createPost.isPending || updatePost.isPending;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between">
        <Button
          type="button"
          variant="ghost"
          onClick={() => navigate('/admin/blog')}
          className="gap-2"
        >
          <ArrowLeft size={16} />
          Back
        </Button>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch
              id="published"
              checked={isPublished}
              onCheckedChange={setIsPublished}
            />
            <Label htmlFor="published">Published</Label>
          </div>
          
          <Button type="submit" disabled={isPending} className="gap-2">
            <Save size={16} />
            {isPending ? 'Saving...' : 'Save Post'}
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            required
            className="bg-card"
          />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="slug">Slug *</Label>
            {!isEditing && (
              <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoSlug}
                  onChange={(e) => setAutoSlug(e.target.checked)}
                  className="rounded"
                />
                Auto-generate
              </label>
            )}
          </div>
          <Input
            id="slug"
            value={slug}
            onChange={(e) => {
              setAutoSlug(false);
              setSlug(e.target.value);
            }}
            placeholder="post-url-slug"
            required
            className="bg-card"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Brief summary of the post"
            rows={2}
            className="bg-card"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="coverImage">Cover Image URL</Label>
          <Input
            id="coverImage"
            type="url"
            value={coverImageUrl}
            onChange={(e) => setCoverImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="bg-card"
          />
          {coverImageUrl && (
            <img
              src={coverImageUrl}
              alt="Cover preview"
              className="mt-2 rounded-lg max-h-48 object-cover"
            />
          )}
        </div>

        <div className="grid gap-2">
          <Label>Content *</Label>
          <RichTextEditor
            content={content}
            onChange={setContent}
            placeholder="Write your post content here..."
          />
        </div>
      </div>
    </form>
  );
}
