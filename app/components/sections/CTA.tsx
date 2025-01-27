import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-[#0A0118] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          Start Building Your Team
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Join the movement to change the future of work with AI Agents.
        </p>
        <div className="flex justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center px-12 py-3 rounded-lg text-lg font-semibold 
              bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 
              hover:to-blue-700 transition-all duration-200 shadow-lg shadow-purple-500/25"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
} 