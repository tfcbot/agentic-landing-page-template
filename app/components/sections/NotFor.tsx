export default function NotFor() {
  const notIdealUsers = [
    {
      title: "Looking for a No-Code Solution",
      description: "If you want a complete no-code solution without any development work, this might not be the right fit."
    },
    {
      title: "Want a Simple Chatbot",
      description: "If you just need a basic chatbot interface, there are simpler solutions available that might better suit your needs."
    },
    {
      title: "Need Instant Results",
      description: "If you're looking for instant plug-and-play AI agents without customization or infrastructure setup, consider other platforms."
    }
  ];

  return (
    <section className="py-20 bg-[#0A0118] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          Not the Right Fit If...
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {notIdealUsers.map((user, index) => (
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