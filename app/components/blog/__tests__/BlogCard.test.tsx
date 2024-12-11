/// <reference types="@testing-library/jest-dom" />
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogCard from '../BlogCard';
import { BlogPost } from '../../../types/blog';

describe('BlogCard', () => {
  const mockPost: BlogPost = {
    id: '1',
    title: 'Test Post',
    excerpt: 'Test excerpt',
    date: 'Mar 1, 2024',
    readTime: '5 min'
  };

  it('renders post information correctly', () => {
    render(<BlogCard post={mockPost} />);

    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('Test excerpt')).toBeInTheDocument();
    expect(screen.getByText('Mar 1, 2024')).toBeInTheDocument();
    expect(screen.getByText('5 min read')).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<BlogCard post={mockPost} />);
    const card = container.firstChild as HTMLElement;

    expect(card).toHaveClass('bg-black/20', 'backdrop-blur-sm', 'rounded-lg', 'p-6');
  });
});
