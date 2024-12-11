import React from 'react';
import { HeadachesContent } from '../../config/content';

interface HeadachesProps {
  content: HeadachesContent;
}

export default function Headaches({ content }: HeadachesProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          {content.title}
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">
          {content.items.map((item, index) => (
            <div
              key={index}
              className={`${index === 0 ? 'md:col-span-2' : ''} ${index === 1 ? 'md:row-span-2' : ''}
                group p-8 rounded-2xl border border-primary/10 backdrop-blur-sm
                bg-gradient-background hover:border-primary/20 transition-all duration-300 relative overflow-hidden`}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                bg-gradient-primary/10" />

              {/* Content */}
              <div className="h-full flex flex-col relative z-10">
                <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 