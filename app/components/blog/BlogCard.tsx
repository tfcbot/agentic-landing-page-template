import React from 'react';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 hover:bg-black/30 transition-all">
      <h3 className="text-2xl font-bold text-white mb-2">{post.title}</h3>
      <p className="text-gray-400 mb-4">{post.excerpt}</p>
      <div className="flex items-center text-sm text-gray-500">
        <span>{post.date}</span>
        <span className="mx-2">•</span>
        <span>{post.readTime} read</span>
      </div>
    </div>
  );
}
