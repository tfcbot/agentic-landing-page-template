export default function Timeline() {
  const steps = [
    {
      title: "Define Your Ideal Avatar",
      description: "Tell our AI agents about your ideal customers, their pain points, and the type of content that will resonate with them."
    },
    {
      title: "Create Magnetic Content",
      description: "Watch as AI agents produce targeted blog posts, social media content, and lead magnets that speak directly to your ideal customers."
    },
    {
      title: "Attract Your Dream Clients",
      description: "Build a steady stream of clients who are ready to work with you."
    }
  ];

  return (
    <section className="py-32 bg-[#0A0118] relative overflow-hidden" id="how-it-works">
      {/* Premium background effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0A0118] to-[#0A0118]" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent top-0" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Your Path to Customer Attraction
          </h2>
          <p className="text-gray-400 text-lg">
            Three steps to consistently attract your ideal customers
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/20 via-purple-500/10 to-transparent transform -translate-x-1/2 hidden md:block" />
          
          <div className="relative space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`group flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Mobile dot */}
                <div className="md:hidden w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-ping opacity-75" />
                </div>
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} text-center md:text-left mb-4 md:mb-0`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 rounded-xl transform transition-transform duration-300 group-hover:scale-[1.02]" />
                    <div className="relative p-6 rounded-xl border border-purple-500/10 bg-[#0c0118]/40 backdrop-blur-xl
                      transition-all duration-300">
                      <h3 className="text-xl font-medium text-white mb-4 group-hover:text-purple-400/90 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400/90 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                  <div className="relative w-3 h-3">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-ping opacity-75" />
                  </div>
                </div>

                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <a
            href="#pricing"
            className="group relative inline-flex items-center px-12 py-3 rounded-xl text-sm font-medium 
              bg-gradient-to-r from-purple-500 to-blue-500 text-white
              hover:from-purple-600 hover:to-blue-600
              transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]
              overflow-hidden"
          >
            <span className="relative z-10">Get an Invite</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/0 via-purple-600/40 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
} 