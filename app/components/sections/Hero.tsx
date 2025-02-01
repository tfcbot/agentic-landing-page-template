import Link from 'next/link';
import Pill from '../ui/Pill';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-[#0A0118] relative overflow-hidden">
      {/* Premium background effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0A0118] to-[#0A0118]" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent top-0" />
        <div className="absolute w-[800px] h-[800px] -top-1/2 left-1/2 -translate-x-1/2 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(168,85,247,0.1)_360deg)] animate-[spin_8s_linear_infinite]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Pill />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 leading-tight md:leading-tight max-w-4xl mx-auto">
           Your Personal Growth Team of AI Agents
          </h1>
          <p className="text-xl text-gray-400/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Save 20+ hours per month while our AI agents create high-converting content that builds your authority and attracts premium clients on autopilot.
          </p>
          <div className="flex justify-center">
            <a
              href="#pricing"
              className="group relative inline-flex items-center px-12 py-3 rounded-xl text-sm font-medium 
                bg-gradient-to-r from-purple-500 to-blue-500 text-white
                hover:from-purple-600 hover:to-blue-600
                transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]
                overflow-hidden"
            >
              <span className="relative z-10">Start Now</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/0 via-purple-600/40 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 