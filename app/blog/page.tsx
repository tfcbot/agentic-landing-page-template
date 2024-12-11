import React from 'react';
import { BlogPost } from '../types/blog';
import BlogCard from '../components/blog/BlogCard';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const ALL_POSTS: BlogPost[] = [
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
  },
  {
    id: '3',
    title: 'The Art of Conversion',
    excerpt: 'Understanding user psychology and how it affects landing page success.',
    date: 'Mar 8, 2024',
    readTime: '6 min'
  }
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#0A0118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-5xl font-bold text-white mb-12">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ALL_POSTS.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
