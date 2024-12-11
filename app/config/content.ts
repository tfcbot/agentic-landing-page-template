/**
 * Configuration types for landing page content
 */

export type HeroContent = {
  title: string;
  subtitle: string;
  ctaText: string;
};

export type BenefitItem = {
  title: string;
  description: string;
  iconType: 'efficiency' | 'collaboration' | 'analytics';
};

export type BenefitsContent = {
  title: string;
  items: BenefitItem[];
};

export type HeadacheItem = {
  title: string;
  description: string;
};

export type HeadachesContent = {
  title: string;
  items: HeadacheItem[];
};

export type TimelineStep = {
  title: string;
  description: string;
};

export type TimelineContent = {
  title: string;
  steps: TimelineStep[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQContent = {
  title: string;
  items: FAQItem[];
};

export type CTAContent = {
  title: string;
  subtitle: string;
  buttonText: string;
};

export type ContentConfig = {
  hero: HeroContent;
  benefits: BenefitsContent;
  headaches: HeadachesContent;
  timeline: TimelineContent;
  faq: FAQContent;
  cta: CTAContent;
};

/**
 * Default content configuration
 * Uses current content as default values
 */
export const defaultContent: ContentConfig = {
  hero: {
    title: "Create High-Converting\nLanding Pages",
    subtitle: "Build beautiful, responsive landing pages in minutes. No coding required. Drive more conversions with this template.",
    ctaText: "Start Free Trial"
  },
  benefits: {
    title: "Transform Your Business",
    items: [
      {
        title: "Mobile-First Design",
        description: "Every landing page is optimized for all devices, ensuring maximum reach and engagement",
        iconType: "efficiency"
      },
      {
        title: "Conversion-Optimized",
        description: "Use templates and layouts that drive results",
        iconType: "collaboration"
      },
      {
        title: "Fast Loading Speed",
        description: "Lightning-fast pages that keep visitors engaged and improve your SEO ranking",
        iconType: "analytics"
      }
    ]
  },
  headaches: {
    title: "Common Challenges We Solve",
    items: [
      {
        title: "Complex Setup Process",
        description: "Traditional landing page builders require extensive setup and configuration"
      },
      {
        title: "Poor Mobile Experience",
        description: "Many landing pages look broken or perform poorly on mobile devices"
      },
      {
        title: "Limited Customization",
        description: "Most templates are rigid and don't allow for brand customization"
      }
    ]
  },
  timeline: {
    title: "How It Works",
    steps: [
      {
        title: "Choose Your Template",
        description: "Select from our collection of conversion-optimized templates"
      },
      {
        title: "Customize Design",
        description: "Easily modify colors, content, and layout to match your brand"
      },
      {
        title: "Launch & Convert",
        description: "Publish your page and start converting visitors into customers"
      }
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
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
        answer: "Simply update the prompt in the specifications folder with your idea, and use AI agents to customize the entire landing page, optimizing content and design for your specific needs."
      }
    ]
  },
  cta: {
    title: "Ready to Get Started?",
    subtitle: "Join thousands of businesses creating high-converting landing pages",
    buttonText: "Start Your Free Trial"
  }
};
