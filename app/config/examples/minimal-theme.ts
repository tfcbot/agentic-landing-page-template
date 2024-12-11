import { ThemeConfig } from '../theme';
import { ContentConfig } from '../content';

/**
 * Minimal theme with monochromatic color scheme
 */
export const minimalTheme: ThemeConfig = {
  colors: {
    primary: '#000000',    // Black
    secondary: '#404040',  // Dark gray
    background: '#FFFFFF', // White background
    text: {
      primary: '#000000',   // Black text
      secondary: '#666666'  // Gray text
    },
    gradients: {
      primary: {
        from: '#000000',   // Black
        to: '#404040'      // Dark gray
      },
      background: {
        from: 'rgba(0, 0, 0, 0.05)',    // Black with low opacity
        to: 'rgba(64, 64, 64, 0.05)'    // Dark gray with low opacity
      }
    }
  },
  darkMode: {
    colors: {
      primary: '#FFFFFF',    // White
      secondary: '#E5E5E5',  // Light gray
      background: '#000000', // Black
      text: {
        primary: '#FFFFFF',   // White
        secondary: '#A3A3A3'  // Gray
      },
      gradients: {
        primary: {
          from: '#FFFFFF',   // White
          to: '#E5E5E5'      // Light gray
        },
        background: {
          from: 'rgba(255, 255, 255, 0.1)', // White with low opacity
          to: 'rgba(229, 229, 229, 0.1)'    // Light gray with low opacity
        }
      }
    }
  }
};

/**
 * Minimal portfolio content example
 */
export const minimalContent: ContentConfig = {
  hero: {
    title: "Clean Design\nClear Message",
    subtitle: "A minimalist approach to presenting your work and ideas.",
    ctaText: "View Portfolio"
  },
  benefits: {
    title: "Core Principles",
    items: [
      {
        title: "Simplicity",
        description: "Focus on what matters most with clean, uncluttered design",
        iconType: "efficiency"
      },
      {
        title: "Clarity",
        description: "Communicate your message with precision and purpose",
        iconType: "collaboration"
      },
      {
        title: "Impact",
        description: "Make a lasting impression through thoughtful presentation",
        iconType: "analytics"
      }
    ]
  },
  headaches: {
    title: "Common Design Pitfalls",
    items: [
      {
        title: "Information Overload",
        description: "We help you focus on essential information"
      },
      {
        title: "Visual Clutter",
        description: "Clean layouts that highlight your content"
      },
      {
        title: "Poor Hierarchy",
        description: "Structured presentation for better understanding"
      }
    ]
  },
  timeline: {
    title: "Design Process",
    steps: [
      {
        title: "Research",
        description: "Understanding your goals and audience"
      },
      {
        title: "Design",
        description: "Creating clean, purposeful layouts"
      },
      {
        title: "Refine",
        description: "Perfecting every detail"
      }
    ]
  },
  faq: {
    title: "Questions",
    items: [
      {
        question: "What is minimal design?",
        answer: "Minimal design focuses on essential elements, removing unnecessary decoration to highlight your content."
      },
      {
        question: "Why choose minimal?",
        answer: "Minimal design helps your message stand out and creates a professional, timeless appearance."
      },
      {
        question: "Can minimal be unique?",
        answer: "Yes, through careful typography, spacing, and content hierarchy."
      }
    ]
  },
  cta: {
    title: "Start Your Project",
    subtitle: "Let's create something beautiful together",
    buttonText: "Contact Now"
  }
};
