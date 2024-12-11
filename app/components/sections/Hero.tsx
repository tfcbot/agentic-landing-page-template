import React from 'react';
import Link from 'next/link';
import { HeroContent } from '../../config/content';

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="pt-32 pb-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-primary leading-tight md:leading-tight">
            {content.title}
          </h1>
          <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
          <div>
            <a
              href="#get-started"
              className="inline-flex items-center px-8 py-3 rounded-lg text-lg font-semibold
                bg-gradient-primary text-white hover:opacity-90
                transition-all duration-200 shadow-lg shadow-primary/25"
            >
              {content.ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 