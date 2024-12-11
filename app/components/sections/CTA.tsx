import React from 'react';
import Link from 'next/link';
import { CTAContent } from '../../config/content';

interface CTAProps {
  content: CTAContent;
}

export default function CTA({ content }: CTAProps) {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-primary">
          {content.title}
        </h2>
        <p className="text-xl text-secondary mb-8">
          {content.subtitle}
        </p>
        <div>
          <Link
            href="#get-started"
            className="inline-flex items-center px-8 py-3 rounded-lg text-lg font-semibold
              bg-gradient-primary text-white hover:opacity-90
              transition-all duration-200 shadow-lg shadow-primary/25"
          >
            {content.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
} 