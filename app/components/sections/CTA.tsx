import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-32 bg-[#0A0118] relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0A0118] to-[#0A0118]" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent top-0" />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative p-8 rounded-2xl border border-purple-500/10 bg-[#0c0118]/40 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 rounded-2xl" />
          
          <div className="relative text-center">
            <h2 className="text-4xl sm:text-5xl font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-200">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join innovative teams already using AI agents to scale their operations and delight their customers.
            </p>
            <div className="flex justify-center">
              <a
                href="#pricing"
                className="group relative inline-flex items-center px-12 py-4 rounded-xl text-lg font-medium 
                  bg-gradient-to-r from-purple-500 to-blue-500 text-white
                  hover:from-purple-600 hover:to-blue-600
                  transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.25)]
                  overflow-hidden transform hover:scale-[1.02]"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/0 via-purple-600/40 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </a>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
} 