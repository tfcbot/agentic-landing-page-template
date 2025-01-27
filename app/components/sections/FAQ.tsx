export default function FAQ() {
  const faqs = [
    {
      question: "How do I start building my AI team?",
      answer: "Getting started is easy. Clone our templates from GitHub, customize your agents using our documentation, and deploy them to your infrastructure. Our community is here to help you every step of the way."
    },
    {
      question: "What types of AI team members can I create?",
      answer: "You can create any type of AI agent - from customer support and data analysis to development and strategy. Our templates provide a foundation that you can extend for your specific needs."
    },
    {
      question: "How do I manage my AI team?",
      answer: "Our platform includes built-in tools for monitoring agent performance, managing workloads, and optimizing team coordination. You can easily track metrics, set permissions, and scale your team as needed."
    },
  ];

  return (
    <section className="py-20 bg-[#0A0118] relative overflow-hidden" id="faq">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          Building Your Team
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg p-6 
                border border-purple-500/10 backdrop-blur-sm hover:border-purple-500/20 
                transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {faq.question}
              </h3>
              <p className="text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 