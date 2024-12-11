'use client';
import React from 'react';

export default function Pricing() {
  const features = [
    "Unlimited Landing Pages",
  ];

  return (
    <section className="py-20 bg-[#0A0118] relative overflow-hidden" id="pricing">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          Simple, Transparent Pricing
        </h2>
        
        <div className="flex justify-center">
          <div className="w-full max-w-md p-8 rounded-2xl border border-purple-500/10 
            bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm
            hover:border-purple-500/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white text-center mb-2">Business Plan</h3>
            <div className="text-center mb-8">
              <span className="text-5xl font-bold text-white">Free</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#get-started"
              className="block w-full text-center px-8 py-3 rounded-lg text-lg font-semibold 
                bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 
                hover:to-blue-700 transition-all duration-200 shadow-lg shadow-purple-500/25"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 