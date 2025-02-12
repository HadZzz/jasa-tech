'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/mdx';
import { BlogPost } from '@/lib/types';
import { Suspense, useEffect, useState } from 'react';

// Client Component for rendering
export default function BlogPage() {
  const [posts, setPosts] = useState<Omit<BlogPost, 'content'>[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const fetchedPosts = await getAllPosts();
      setPosts(fetchedPosts);
    }
    loadPosts();
  }, []);

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog & Tutorial</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tips dan tutorial seputar website, teknologi, dan bisnis digital di Sukoharjo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: Omit<BlogPost, 'content'>) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              {post.meta.image && (
                <div className="relative h-48">
                  <Image
                    src={post.meta.image}
                    alt={post.meta.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                    {post.meta.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-4">{post.meta.description}</p>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.meta.date).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  {post.meta.tags && (
                    <div className="flex gap-2">
                      {post.meta.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}