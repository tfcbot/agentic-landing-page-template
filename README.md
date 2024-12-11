# agentic-landing-page-template

This project is built using [SSTv3](https://sst.dev/) and [Next.js](https://nextjs.org/).

It uses app router and tailwindcss for styling.

## Prerequisites

- Node.js 18 or later
- npm or yarn
- AWS Credentials Configured
- Export your AWS profile

    ```
    export AWS_PROFILE=<ProfileName>
    ```

## Getting Started

1. Clone the repository:
   ```
   git clone <repo-url>
   cd agentic-landing-page-template
   ```

2. Initialize SST in the project
   ```
   npx sst@latest init
   ```

3. Start the development server:
   ```
   npx sst dev
   ```

## Deployment

Deploy to your desired stage

```
npx sst deploy --stage your-stage-name
```

## Customization

### Theme Configuration

The template supports easy customization of colors and styles through a type-safe configuration system. To customize the theme, modify the `app/config/theme.ts` file:

```typescript
// app/config/theme.ts
const theme: ThemeConfig = {
  colors: {
    primary: '#3B82F6',    // Primary brand color
    secondary: '#10B981',  // Secondary brand color
    background: '#0A0118', // Main background color
    backgroundSecondary: 'rgba(0, 0, 0, 0.2)', // Secondary background (cards, etc.)
    backgroundHover: 'rgba(0, 0, 0, 0.3)',     // Hover state background
    text: {
      primary: '#FFFFFF',   // Main text color
      secondary: '#9CA3AF', // Secondary text color
      tertiary: '#6B7280'   // Tertiary text (metadata, subtle text)
    },
    gradients: {
      primary: {
        from: '#3B82F6',
        to: '#10B981'
      },
      background: {
        from: 'rgba(59, 130, 246, 0.5)',
        to: 'rgba(16, 185, 129, 0.5)'
      }
    }
  },
  // Optional dark mode configuration
  darkMode: {
    colors: {
      // Same structure as above with dark mode colors
    }
  }
};
```

The theme system provides:
- Consistent color application across components
- Dark mode support
- Automatic CSS variable generation
- Type-safe color references
- Hover and active states
- Gradient variations

### Content Configuration

All section content is customizable through the `app/config/content.ts` file:

#### Section Configurations

```typescript
// Hero Section
hero: {
  title: "Your Main Title",
  subtitle: "Your compelling subtitle text",
  ctaText: "Your Call-to-Action"
}

// Benefits Section
benefits: {
  title: "Section Title",
  items: [
    {
      title: "Benefit Title",
      description: "Benefit description",
      iconType: "efficiency" // Available: efficiency, collaboration, analytics
    }
  ]
}

// Headaches Section
headaches: {
  title: "Section Title",
  items: [
    {
      title: "Challenge Title",
      description: "Challenge description"
    }
  ]
}

// Timeline Section
timeline: {
  title: "Section Title",
  steps: [
    {
      title: "Step Title",
      description: "Step description"
    }
  ]
}

// FAQ Section
faq: {
  title: "Section Title",
  items: [
    {
      question: "FAQ Question",
      answer: "FAQ Answer"
    }
  ]
}

// CTA Section
cta: {
  title: "CTA Title",
  subtitle: "CTA Subtitle",
  buttonText: "Button Text"
}

// Blog Section
blog: {
  title: "Latest Updates",
  posts: [
    {
      id: "1",
      title: "Blog Post Title",
      excerpt: "Brief description of the post",
      date: "Mar 1, 2024",
      readTime: "5 min"
    }
  ]
}
```

### Example Configurations

Check out the example configurations in `app/config/examples/`:
- `modern-theme.ts`: Modern SaaS theme with blue/teal colors
- `minimal-theme.ts`: Minimal monochromatic theme

Both examples include:
- Complete theme configuration with light/dark modes
- Sample content for all sections
- Blog section configuration
- Responsive design considerations

For detailed type definitions and more examples, see:
- `app/config/theme.ts`
- `app/config/content.ts`

## Note
This is a reference implementation meant for starting a new api project. As of now there are no plans to add additional features or integrations.

Please do not use this directly in production without testing and ensuring it meets your needs.

Do not submit any PRs or issues for this repository. 
    
