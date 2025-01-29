export default function FAQ() {
  const faqs = [
    {
      question: "How do the AI agents create content?",
      answer: "Our AI agents analyze your brand voice, target audience, and content goals to create engaging content. They handle everything from research and ideation to writing and formatting, ensuring consistency across all your content."
    },
    {
      question: "Can I customize the content creation process?",
      answer: "Yes! You can provide specific guidelines, topics, and preferences. The AI agents learn from your feedback and adapt to your brand's unique style and requirements."
    },
    {
      question: "What types of content can the AI agents create?",
      answer: "Our AI agents can create blog posts, social media content, newsletters, lead magnets, and more. They're designed to maintain consistent quality across different content formats and platforms."
    },
    {
      question: "How does the self-hosted version work?",
      answer: "The self-hosted version allows you to deploy the AI agents on your own infrastructure. You'll have full control over the setup while maintaining all core content creation capabilities."
    },
    {
      question: "What's included in the managed version?",
      answer: "The managed version includes fully hosted infrastructure, advanced AI agent capabilities, scheduled content creation, priority support, and upcoming API access for seamless integration with your tools."
    },
    {
      question: "Do you provide support for self-hosting?",
      answer: "No, we do not provide support for self-hosted deployments. The self-hosted version is provided as-is for teams who prefer to manage their own infrastructure."
    },
    {
      question: "Is your platform secure?",
      answer: "Yes, our managed platform implements industry-standard security practices. However, if you need additional security controls, consider self-hosting on a VPC inside AWS and implementing your own security measures."
    },
    {
      question: "How do I get started?",
      answer: "The hosted version is currently invite only. Grab an Invite and once a spot opens up, you'll be notified by email to create your account."
    }
  ];

  return (
    <section className="py-32 bg-[#0A0118] relative overflow-hidden">
      {/* Premium background effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0A0118] to-[#0A0118]" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent top-0" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about our AI content team
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 rounded-xl transform transition-transform duration-300 group-hover:scale-[1.02]" />
                <div className="relative p-8 rounded-xl border border-purple-500/10 bg-[#0c0118]/40 backdrop-blur-xl
                  transition-all duration-300">
                  <h3 className="text-xl font-medium text-white mb-4 group-hover:text-purple-400/90 transition-colors">
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
      </div>
    </section>
  );
} 