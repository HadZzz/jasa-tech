import { ReactNode } from 'react';

export interface BlogPostMetadata {
  title: string;
  date: string;
  image?: string;
  tags?: string[];
  description?: string;
}

export interface BlogPost {
  meta: BlogPostMetadata;
  content?: ReactNode;
  slug: string;
}
