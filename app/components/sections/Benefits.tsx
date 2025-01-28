import { IconEfficiency, IconCollaboration, IconAnalytics } from './icons';

export default function Benefits() {
  const benefits = [
    {
      title: "Productize Your Automations",
      description: "Break free from endless client work by turning your automations into AI agents that generate revenue while you sleep.",
      icon: <IconEfficiency className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Get Back Your Time",
      description: "Skip the painful setup process and launch your self-service Agent platform in days with pre-built auth, billing, and infrastructure",
      icon: <IconCollaboration className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Unlimited Growth",
      description: "Focus on delighting customers while your AI agents handle the workload. Scale without hiring an army of freelancers and contractors.",
      icon: <IconAnalytics className="w-12 h-12 text-purple-400" />
    }
  ];

  return (
    <section className="py-20 bg-[#0A0118]" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          The Benefits of Building Your Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 rounded-2xl border border-purple-500/10 
              bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm
              hover:border-purple-500/20 transition-all duration-300 group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 