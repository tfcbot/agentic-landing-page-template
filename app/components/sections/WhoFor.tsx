export default function WhoFor() {
  const idealUsers = [
    {
      title: "AI Automation Agencies",
      description: "10x your agency revenue with AI agents that work 24/7, delivering consistent results while you sleep"
    },
    {
      title: "AI Consultants & Strategists",
      description: "Become the go-to AI expert in your field by delivering enterprise-grade solutions in half the time"
    },
    {
      title: "AI Coaches", 
      description: "Create premium, personalized experiences that wow your clients and command higher rates"
    }
  ];

  return (
    <section className="py-32 bg-[#0A0118] relative overflow-hidden">
      {/* Premium background effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0A0118] to-[#0A0118]" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent top-0" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Built For Technical Entrepreneurs
          </h2>
          <p className="text-gray-400 text-lg">
            Take your expertise to the next level
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {idealUsers.map((user, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 rounded-xl transform transition-transform duration-300 group-hover:scale-[1.02]" />
              <div className="relative p-8 rounded-xl border border-purple-500/10 bg-[#0c0118]/40 backdrop-blur-xl
                transition-all duration-300 h-full">
                <h3 className="text-xl font-medium text-white mb-4 group-hover:text-purple-400/90 transition-colors">
                  {user.title}
                </h3>
                <p className="text-gray-400/90 text-sm leading-relaxed">
                  {user.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 