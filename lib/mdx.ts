import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const mdxSource = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          [rehypePrettyCode, { theme: 'github-dark' }],
        ],
      },
    },
  })

  return {
    meta: {
      ...data,
      slug: realSlug,
    },
    content: mdxSource,
  }
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs
    .map((slug) => {
      const realSlug = slug.replace(/\.mdx$/, '')
      const filePath = path.join(postsDirectory, slug)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        ...data,
        slug: realSlug,
      }
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
} 