import React from 'react';
import { TimelineContent } from '../../config/content';

interface TimelineProps {
  content: TimelineContent;
}

export default function Timeline({ content }: TimelineProps) {
  return (
    <section className="py-20 bg-background" id="how-it-works">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-primary">
          {content.title}
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform -translate-x-1/2 hidden md:block" />

          <div className="relative space-y-8 md:space-y-24">
            {content.steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="md:hidden w-4 h-4 rounded-full bg-primary border-4 border-background mb-4" />

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} text-center md:text-left mb-4 md:mb-0`}>
                  <div className="bg-gradient-background p-6 rounded-2xl
                    border border-primary/10 backdrop-blur-sm hover:border-primary/20
                    transition-all duration-300 group">
                    <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-secondary text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                </div>

                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#get-started"
            className="inline-flex items-center px-8 py-3 rounded-lg text-lg font-semibold
              bg-gradient-primary text-white hover:opacity-90
              transition-all duration-200 shadow-lg shadow-primary/25"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  );
} 