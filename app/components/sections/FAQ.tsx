import React from 'react';
import { FAQContent } from '../../config/content';

interface FAQProps {
  content: FAQContent;
}

export default function FAQ({ content }: FAQProps) {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="faq">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-primary">
          {content.title}
        </h2>
        <div className="space-y-6">
          {content.items.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-background rounded-lg p-6
                border border-primary/10 backdrop-blur-sm hover:border-primary/20
                transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary transition-colors">
                {faq.question}
              </h3>
              <p className="text-secondary">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 