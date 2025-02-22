'use client';
import React, { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const selfHostedFeatures = [
    "Deploy on AWS",
    "Commercial Use Allowed",
  ];

  const managedFeatures = [
    "1000 Credits / Month",
    "Fully Managed Infrastructure",
    "Chat Support",
    "API Access (Coming Soon)",
  ];

  const monthlyPrice = 299;
  const annualPrice = 249; // $2,988/year = $249/month
  console.log(process.env.NEXT_PUBLIC_APP_URL);
  return (
    <section className="py-32 bg-[#0A0118] relative overflow-hidden" id="pricing">
      {/* Premium background effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0A0118] to-[#0A0118]" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent top-0" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 text-lg">
            Self-host or get everything managed for you
          </p>
        </div>
        <div className="flex justify-end items-center space-x-4 mb-16 w-full max-w-xs mx-auto">
          <span className={`text-sm font-medium transition-colors duration-300 ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-12 items-center rounded-full bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/20 mx-1"
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-all duration-300 ease-in-out ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`} />
          </button>
          <span className={`text-sm font-medium transition-colors duration-300 ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Annual</span>
          <span className={`text-xs font-medium text-purple-400/90 transition-opacity duration-300 ml-1 ${isAnnual ? 'opacity-100' : 'opacity-0'}`}>
            Save 17%
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Self Hosted Plan */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]" />
            <div className="relative p-8 rounded-2xl border border-purple-500/10 bg-[#0c0118]/40 backdrop-blur-xl
              transition-all duration-300 flex flex-col h-full">
              <div>
                <h3 className="text-xl font-medium text-white text-center mb-8">Self-Hosted</h3>
                <ul className="space-y-4 mb-8">
                  {selfHostedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300/90">
                      <svg className="w-5 h-5 text-purple-400/90 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <a
                  href="https://github.com/blurware/agenticteamos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-8 py-3 rounded-xl text-sm font-medium 
                    text-white border border-purple-500/20 hover:bg-purple-500/10
                    transition-all duration-300"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Managed Plan */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/10 rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]" />
            <div className="relative p-8 rounded-2xl border border-purple-500/20 bg-[#0c0118]/40 backdrop-blur-xl
              transition-all duration-300 flex flex-col h-full">
              <div>
                <div className="absolute top-0 right-4 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-purple-500/80 to-blue-500/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Recommended
                  </span>
                </div>
                <h3 className="text-xl font-medium text-white text-center mb-2">Managed</h3>
                <div className="text-center mb-8">
                  <div className="relative h-16 flex items-center justify-center">
                    <div className={`absolute transition-all duration-300 transform ${isAnnual ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <span className="text-4xl font-medium text-white">${annualPrice}</span>
                      <span className="text-gray-400 ml-2 text-sm">/month</span>
                    </div>
                    <div className={`absolute transition-all duration-300 transform ${!isAnnual ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <span className="text-4xl font-medium text-white">${monthlyPrice}</span>
                      <span className="text-gray-400 ml-2 text-sm">/month</span>
                    </div>
                  </div>
                  <div className="h-6 relative overflow-hidden">
                    <div className={`text-sm text-purple-400/90 transition-all duration-300 transform ${isAnnual ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      Billed annually at $2,988
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {managedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300/90">
                      <svg className="w-5 h-5 text-purple-400/90 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <a
                  href={process.env.NEXT_PUBLIC_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-8 py-3 rounded-xl text-sm font-medium 
                    bg-gradient-to-r from-purple-500 to-blue-500 text-white
                    hover:from-purple-600 hover:to-blue-600
                    transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                >
                  Start Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 