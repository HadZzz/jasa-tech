'use server';

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import React from 'react'

const postsDirectory = join(process.cwd(), 'content/blog')

interface BlogPostMetadata {
  title: string;
  date: string;
  image?: string;
  tags?: string[];
  description?: string;
}

interface BlogPost {
  meta: BlogPostMetadata;
  content: React.ReactNode;
  slug: string;
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const result = await compileMDX({
    source: content,
    options: { 
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeSlug]
      }
    }
  })

  return {
    meta: {
      title: data.title,
      date: data.date,
      image: data.image,
      tags: data.tags,
      description: data.description,
    },
    content: result.content,
    slug: realSlug,
  }
}

export async function getAllPosts(): Promise<Omit<BlogPost, 'content'>[]> {
  const slugs = readdirSync(postsDirectory)
  const posts = slugs
    .map((slug) => {
      const realSlug = slug.replace(/\.mdx$/, '')
      const filePath = join(postsDirectory, slug)
      const fileContents = readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        meta: {
          title: data.title,
          date: data.date,
          image: data.image,
          tags: data.tags,
          description: data.description,
        },
        slug: realSlug,
      }
    })
    .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1))

  return posts
}
