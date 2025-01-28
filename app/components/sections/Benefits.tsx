import { IconEfficiency, IconCollaboration, IconAnalytics } from './icons';

export default function Benefits() {
  const benefits = [
    {
      title: "Productize Your Automations",
      description: "Break free from endless client work by turning your automations into AI agents that generate revenue while you sleep.",
      icon: <IconEfficiency className="w-12 h-12 text-purple-400/90" />
    },
    {
      title: "Get Back Your Time",
      description: "Skip the painful setup process and launch your self-service Agent platform in days with pre-built auth, billing, and infrastructure",
      icon: <IconCollaboration className="w-12 h-12 text-purple-400/90" />
    },
    {
      title: "Unlimited Growth",
      description: "Focus on delighting customers while your AI agents handle the workload. Scale without hiring an army of freelancers and contractors.",
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
            The Benefits of Building Your Team
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to succeed
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 rounded-xl transform transition-transform duration-300 group-hover:scale-[1.02]" />
              <div className="relative p-8 rounded-xl border border-purple-500/10 bg-[#0c0118]/40 backdrop-blur-xl
                transition-all duration-300 h-full">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
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