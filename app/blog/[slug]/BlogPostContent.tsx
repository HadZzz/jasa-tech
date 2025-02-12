'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BlogPost } from '@/lib/types';

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg dark:prose-invert max-w-4xl mx-auto"
        >
          {post.meta.image && (
            <div className="relative h-[400px] -mx-6 mb-6 rounded-xl overflow-hidden">
              <Image
                src={post.meta.image}
                alt={post.meta.title}
                fill
                className="object-cover"
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
