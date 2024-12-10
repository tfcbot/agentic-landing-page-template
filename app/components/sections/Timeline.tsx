export default function Timeline() {
  const steps = [
    {
      title: "Clone from Github",
      description: "Start with a template repository and clone it to your workspace"
    },
    {
      title: "Customize with AI Agents",
      description: "Let AI agents help you personalize content, design, and optimize for your audience"
    },
    {
      title: "Launch & Convert",
      description: "Publish your page and start generating leads"
    }
  ];

  return (
    <section className="py-20 bg-[#0A0118]" id="how-it-works">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          Three Steps to Your Perfect Landing Page
        </h2>
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2 hidden md:block" />
          
          <div className="relative space-y-8 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Mobile dot */}
                <div className="md:hidden w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0A0118] mb-4" />
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} text-center md:text-left mb-4 md:mb-0`}>
                  <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-2xl 
                    border border-purple-500/10 backdrop-blur-sm hover:border-purple-500/20 
                    transition-all duration-300 group">
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0A0118]" />
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
              bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 
              hover:to-blue-700 transition-all duration-200 shadow-lg shadow-purple-500/25"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  );
} 