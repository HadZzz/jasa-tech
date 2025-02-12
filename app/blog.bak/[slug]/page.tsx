import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import BlogPostContent from './BlogPostContent';
import { Metadata } from 'next';

interface GenerateMetadataProps {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: GenerateMetadataProps
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  return <BlogPostContent post={post} />;
}