import { ThemeConfig } from '../theme';
import { ContentConfig } from '../content';

/**
 * Modern theme with blue and teal color scheme
 */
export const modernTheme: ThemeConfig = {
  colors: {
    primary: '#3B82F6',    // Blue
    secondary: '#10B981',  // Teal
    background: '#0A0118', // Dark background
    text: {
      primary: '#FFFFFF',   // White text
      secondary: '#9CA3AF'  // Gray text
    },
    gradients: {
      primary: {
        from: '#3B82F6',   // Blue
        to: '#10B981'      // Teal
      },
      background: {
        from: 'rgba(59, 130, 246, 0.5)', // Blue with opacity
        to: 'rgba(16, 185, 129, 0.5)'    // Teal with opacity
      }
    }
  },
  darkMode: {
    colors: {
      primary: '#60A5FA',    // Lighter blue
      secondary: '#34D399',  // Lighter teal
      background: '#000000', // Black
      text: {
        primary: '#FFFFFF',   // White
        secondary: '#9CA3AF'  // Gray
      },
      gradients: {
        primary: {
          from: '#60A5FA',   // Lighter blue
          to: '#34D399'      // Lighter teal
        },
        background: {
          from: 'rgba(96, 165, 250, 0.5)', // Lighter blue with opacity
          to: 'rgba(52, 211, 153, 0.5)'    // Lighter teal with opacity
        }
      }
    }
  }
};

/**
 * Modern SaaS content example
 */
export const modernContent: ContentConfig = {
  hero: {
    title: "Build Better Software\nFaster Than Ever",
    subtitle: "Streamline your development process with AI-powered tools and automated workflows.",
    ctaText: "Start Building Now"
  },
  benefits: {
    title: "Why Choose Our Platform",
    items: [
      {
        title: "AI-Powered Development",
        description: "Let AI handle the repetitive tasks while you focus on innovation",
        iconType: "efficiency"
      },
      {
        title: "Team Collaboration",
        description: "Built-in tools for seamless team coordination and code review",
        iconType: "collaboration"
      },
      {
        title: "Real-Time Analytics",
        description: "Monitor your development metrics and optimize performance",
        iconType: "analytics"
      }
    ]
  },
  headaches: {
    title: "Common Development Challenges",
    items: [
      {
        title: "Complex Tooling",
        description: "Simplify your development environment with our integrated platform"
      },
      {
        title: "Team Communication",
        description: "Break down silos with built-in collaboration features"
      },
      {
        title: "Quality Assurance",
        description: "Automated testing and validation for confident deployments"
      }
    ]
  },
  timeline: {
    title: "Your Journey to Better Development",
    steps: [
      {
        title: "Connect Your Tools",
        description: "Integrate with your existing development workflow"
      },
      {
        title: "Train AI Models",
        description: "Customize AI assistance for your specific needs"
      },
      {
        title: "Scale Development",
        description: "Deploy faster with automated processes"
      }
    ]
  },
  faq: {
    title: "Common Questions",
    items: [
      {
        question: "How does the AI integration work?",
        answer: "Our platform uses advanced machine learning to understand your codebase and automate repetitive tasks."
      },
      {
        question: "Can I use my existing tools?",
        answer: "Yes, we integrate with most popular development tools and platforms."
      },
      {
        question: "What about data security?",
        answer: "Your code and data are encrypted and never shared with third parties."
      }
    ]
  },
  cta: {
    title: "Ready to Transform Your Development?",
    subtitle: "Join thousands of developers building better software faster",
    buttonText: "Get Started Free"
  }
};
