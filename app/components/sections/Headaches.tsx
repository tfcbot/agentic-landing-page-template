export default function Headaches() {
  const challenges = [
    {
      title: "Complex Website Builders",
      description: "Say goodbye to confusing interfaces and steep learning curves",
      className: "md:col-span-2 md:row-span-1 bg-gradient-to-br from-purple-900/50 to-blue-900/50"
    },
    {
      title: "Poor Conversion Rates",
      description: "Stop losing visitors with ineffective landing pages",
      className: "md:col-span-1 md:row-span-2 bg-gradient-to-br from-indigo-900/50 to-purple-900/50"
    },
    {
      title: "Slow Time to Market",
      description: "Launch campaigns faster without waiting for developers",
      className: "md:col-span-1 md:row-span-1 bg-gradient-to-br from-blue-900/50 to-indigo-900/50"
    },
    {
      title: "Limited Customization",
      description: "Create unique designs that match your brand perfectly",
      className: "md:col-span-1 md:row-span-1 bg-gradient-to-br from-purple-900/50 to-blue-900/50"
    }
  ];

  return (
    <section className="py-20 bg-[#0A0118]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Common Headaches
        </h2>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">
          {challenges.map((challenge, index) => (
            <div 
              key={index} 
              className={`${challenge.className} group p-8 rounded-2xl border border-purple-500/10 backdrop-blur-sm
                hover:border-purple-500/20 transition-all duration-300 relative overflow-hidden`}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                bg-gradient-to-br from-purple-600/10 to-blue-600/10" />
              
              {/* Content */}
              <div className="h-full flex flex-col relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {challenge.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 