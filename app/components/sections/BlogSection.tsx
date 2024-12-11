import React from 'react';
import { BlogPost } from '../../types/blog';
import BlogCard from '../blog/BlogCard';

const SAMPLE_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Landing Pages',
    excerpt: 'Learn how to create effective landing pages that convert.',
    date: 'Mar 1, 2024',
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Optimizing Your Landing Page',
    excerpt: 'Tips and tricks for improving your landing page performance.',
    date: 'Mar 5, 2024',
    readTime: '7 min'
  }
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-[#0A0118]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SAMPLE_POSTS.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
