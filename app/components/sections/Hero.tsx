import Link from 'next/link';
import Pill from '../ui/Pill';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-[#0A0118] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Pill />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 leading-tight md:leading-tight">
            Create High-Converting<br />
            Landing Pages
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Build beautiful, responsive landing pages in minutes. No coding required. Drive more conversions with this template.
          </p>
          <div>
            <a
              href="#get-started"
              className="inline-flex items-center px-8 py-3 rounded-lg text-lg font-semibold 
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