'use client';
import React from 'react';

export default function Pricing() {
  const freePlanFeatures = [
    "Access to all templates",
    "Host in your own AWS Account",
    "GitHub source code",
    "Infrastructure as code"
  ];

  const paidPlanFeatures = [
    "ATOS Prompt Library",
    "Premium AI Coding Courses",
    "Early Access to the Hosted Version with Credits",
  ];

  return (
    <section className="py-20 bg-[#0A0118] relative overflow-hidden" id="pricing">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          Choose Your Plan
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="w-full p-8 rounded-2xl border border-purple-500/10 
            bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm
            hover:border-purple-500/20 transition-all duration-300 flex flex-col">
            <div>
              <h3 className="text-2xl font-bold text-white text-center mb-8">DIY</h3>
              
              <ul className="space-y-4 mb-8">
                {freePlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <a
                href="https://docs.agenticteamos.com/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-8 py-3 rounded-lg text-lg font-semibold 
                  bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-700 
                  hover:to-gray-600 transition-all duration-200 shadow-lg"
              >
                Go to Docs
              </a>
            </div>
          </div>

          {/* Paid Plan */}
          <div className="w-full p-8 rounded-2xl border border-purple-500/20 
            bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-sm
            hover:border-purple-500/30 transition-all duration-300
            transform hover:-translate-y-1 flex flex-col relative">
            <div>
              <div className="absolute top-0 right-4 -translate-y-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Recommended
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-2">Agent Entrepreneur</h3>
              <div className="text-center mb-8">
                <span className="text-5xl font-bold text-white">$65</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {paidPlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <a
                href="https://www.skool.com/agent-toolkit/about"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-8 py-3 rounded-lg text-lg font-semibold 
                  bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 
                  hover:to-blue-700 transition-all duration-200 shadow-lg shadow-purple-500/25
                  relative
                  before:absolute before:inset-[-4px] before:rounded-lg before:bg-gradient-to-r 
                  before:from-purple-500/50 before:to-blue-500/50 before:animate-pulse before:-z-[1] before:blur-md
                  after:absolute after:inset-[-1px] after:rounded-lg after:bg-gradient-to-r 
                  after:from-purple-400/40 after:to-blue-400/40 after:animate-pulse after:-z-[1] after:blur-[2px]"
              >
                Join Program
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 