import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import BlogPostContent from './BlogPostContent';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return <BlogPostContent post={post} />;
}