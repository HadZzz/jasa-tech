import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import BlogPostContent from './BlogPostContent';
import { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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

export default async function BlogPost({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);
  return <BlogPostContent post={post} />;
}