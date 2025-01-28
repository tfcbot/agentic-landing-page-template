export default function FAQ() {
  const faqs = [
    {
      question: "How do I start building my AI team?",
      answer: "Getting started is easy. Clone our templates from GitHub, customize your agents using our documentation, and deploy them to your infrastructure."
    },
    {
      question: "Do I have to build the agents myself?",
      answer: "No you can use the agents example agents as a starting point. You can also modify their prompts and code to fit your needs."
    },
    {
      question: "How much support do I get from the commmunity?",
      answer: "You get best effort support in the community. Annual members get a private slack channel and dedicated support to help you get started"
    },
    {
      question: "How much does it cost?",
      answer: "The DIY plan is free. The annual plan is $52/month and the monthly plan is $65/month"
    },
    {
      question: "Can I get a refund?",
      answer: "No refunds are offered as the code is open source. You can cancel your subscription at any time. You will have access to the community until the end of your billing cycle."
    },
    {
      question: "Do you take requests for bulding new agents?",
      answer: "Not at this time. Although this may change in the future. If you want strategic help you can purchase dedicated support through an annual membership."
    }
  ];

  return (
    <section className="py-32 bg-[#0A0118] relative overflow-hidden" id="faq">
      {/* Premium background effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0A0118] to-[#0A0118]" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent top-0" />
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 rounded-xl transform transition-transform duration-300 group-hover:scale-[1.01]" />
              <div className="relative p-6 rounded-xl border border-purple-500/10 bg-[#0c0118]/40 backdrop-blur-xl
                transition-all duration-300">
                <h3 className="text-lg font-medium text-white mb-3 group-hover:text-purple-400/90 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-400/90 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 