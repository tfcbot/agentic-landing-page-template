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
    <section className="py-20 bg-[#0A0118] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          Built For Technical Entrepreneurs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {idealUsers.map((user, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-lg
                border border-purple-500/10 backdrop-blur-sm hover:border-purple-500/20 
                transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {user.title}
              </h3>
              <p className="text-gray-400">
                {user.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 