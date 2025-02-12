'use client';

import { motion } from 'framer-motion';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose dark:prose-invert max-w-4xl mx-auto"
        >
          {post.meta.image && (
            <div className="relative h-[400px] -mx-6 mb-6 rounded-xl overflow-hidden">
              <img
                src={post.meta.image}
                alt={post.meta.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.meta.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <time dateTime={post.meta.date}>
                {new Date(post.meta.date).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </time>
              <div className="flex gap-2">
                {post.meta.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mdx-content">
            {post.content}
          </div>
        </motion.article>
      </div>
    </section>
  );
} 