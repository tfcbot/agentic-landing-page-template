import { IconEfficiency, IconCollaboration, IconAnalytics } from './icons';

export default function Benefits() {
  const benefits = [
    {
      title: "Instant Access",
      description: "Start working with your AI team immediately. No setup, no HR headaches - just instant productivity from day one.",
      icon: <IconEfficiency className="w-12 h-12 text-purple-400/90" />
    },
    {
      title: "Add Your Context",
      description: "Easily add your context to your Agents to make them more effective.",
      icon: <IconCollaboration className="w-12 h-12 text-purple-400/90" />
    },
    {
      title: "24/7 Availability",
      description: "Your Agents work in the background while you focus on your business.",
      icon: <IconAnalytics className="w-12 h-12 text-purple-400/90" />
    }
  ];

  return (
    <section className="py-32 bg-[#0A0118] relative overflow-hidden" id="benefits">
      {/* Premium background effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0A0118] to-[#0A0118]" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent top-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Ready When You Are
          </h2>
          <p className="text-gray-400 text-lg">
            A complete team at your fingertips
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 rounded-xl transform transition-transform duration-300 group-hover:scale-[1.02]" />
              <div className="relative p-8 rounded-xl border border-purple-500/10 bg-[#0c0118]/40 backdrop-blur-xl
                transition-all duration-300 h-full text-center">
                <div className="flex justify-center items-center mb-8 w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl p-3 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-4 group-hover:text-purple-400/90 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400/90 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 