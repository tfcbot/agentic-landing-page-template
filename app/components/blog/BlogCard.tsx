import React from 'react';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-[var(--color-background-secondary)] backdrop-blur-sm rounded-lg p-6 hover:bg-[var(--color-background-hover)] transition-all">
      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{post.title}</h3>
      <p className="text-[var(--text-secondary)] mb-4">{post.excerpt}</p>
      <div className="flex items-center text-sm text-[var(--text-tertiary)]">
        <span>{post.date}</span>
        <span className="mx-2">•</span>
        <span>{post.readTime} read</span>
      </div>
    </div>
  );
}
