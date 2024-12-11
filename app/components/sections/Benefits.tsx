import React from 'react';
import { IconEfficiency, IconCollaboration, IconAnalytics } from './icons';
import { BenefitsContent } from '../../config/content';

interface BenefitsProps {
  content: BenefitsContent;
}

const IconMap = {
  efficiency: IconEfficiency,
  collaboration: IconCollaboration,
  analytics: IconAnalytics,
};

export default function Benefits({ content }: BenefitsProps) {
  return (
    <section className="py-20 bg-background" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-primary">
          {content.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((benefit, index) => {
            const Icon = IconMap[benefit.iconType];
            return (
              <div key={index} className="p-8 rounded-2xl border border-primary/10
                bg-gradient-background backdrop-blur-sm
                hover:border-primary/20 transition-all duration-300 group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-secondary">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 