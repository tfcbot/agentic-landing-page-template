export default function FAQ() {
  const faqs = [
    {
      question: "What makes your landing page builder different?",
      answer: "Our platform combines drag-and-drop simplicity with powerful conversion optimization tools, helping you create beautiful pages that convert better."
    },
    {
      question: "How long does it take to create a landing page?",
      answer: "Most users create their first landing page in under 30 minutes. Our intuitive builder and pre-built templates make the process quick and easy."
    },
    {
      question: "Can I customize the design to match my brand?",
      answer: "Yes, every element is fully customizable. Change colors, fonts, layouts, and more to perfectly match your brand identity."
    },
    {
      question: "How do the AI agents help with customization?",
      answer: "Simply update the prompt in the specifications folder with your idea, and  use AI agents to customize the entire landing page, optimizing content and design for your specific needs."
    }
  ];

  return (
    <section className="py-20 bg-[#0A0118] relative overflow-hidden" id="faq">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          Frequently Asked Questions
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