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
    <section className="py-20 bg-[#0A0118] relative overflow-hidden" id="faq">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
         FAQs
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