import { IconEfficiency, IconCollaboration, IconAnalytics } from './icons';

export default function Benefits() {
  const benefits = [
    {
      title: "Mobile-First Design",
      description: "Every landing page is optimized for all devices, ensuring maximum reach and engagement",
      icon: <IconEfficiency className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Conversion-Optimized",
      description: "Use templates and layouts that drive results",
      icon: <IconCollaboration className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Fast Loading Speed",
      description: "Lightning-fast pages that keep visitors engaged and improve your SEO ranking",
      icon: <IconAnalytics className="w-12 h-12 text-purple-400" />
    }
  ];

  return (
    <section className="py-20 bg-[#0A0118]" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          Transform Your Business
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