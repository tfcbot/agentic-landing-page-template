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

The template supports easy customization of colors through the theme configuration system. To customize the colors, modify the `app/config/theme.ts` file:

```typescript
// app/config/theme.ts
const theme: ThemeConfig = {
  colors: {
    primary: '#3B82F6',    // Primary brand color
    secondary: '#10B981',  // Secondary brand color
    background: '#0A0118', // Background color
    text: '#FFFFFF',       // Main text color
    textSecondary: '#9CA3AF' // Secondary text color
  }
};
```

The theme system automatically generates:
- Color variations and gradients
- Hover and active states
- Text colors and backgrounds
- Border colors with opacity variants

### Content Configuration

All section content is customizable through the `app/config/content.ts` file. Here's how to customize each section:

#### Hero Section
```typescript
hero: {
  title: "Your Main Title",
  subtitle: "Your compelling subtitle text",
  ctaText: "Your Call-to-Action"
}
```

#### Benefits Section
```typescript
benefits: {
  title: "Section Title",
  items: [
    {
      title: "Benefit Title",
      description: "Benefit description",
      iconType: "efficiency" // Available: efficiency, collaboration, analytics
    }
    // Add more benefits...
  ]
}
```

#### Headaches Section
```typescript
headaches: {
  title: "Section Title",
  items: [
    {
      title: "Challenge Title",
      description: "Challenge description"
    }
    // Add more challenges...
  ]
}
```

#### Timeline Section
```typescript
timeline: {
  title: "Section Title",
  steps: [
    {
      title: "Step Title",
      description: "Step description"
    }
    // Add more steps...
  ]
}
```

#### FAQ Section
```typescript
faq: {
  title: "Section Title",
  items: [
    {
      question: "FAQ Question",
      answer: "FAQ Answer"
    }
    // Add more FAQs...
  ]
}
```

#### CTA Section
```typescript
cta: {
  title: "CTA Title",
  subtitle: "CTA Subtitle",
  buttonText: "Button Text"
}
```

### Type Safety

All configurations are TypeScript-based, providing:
- Auto-completion in supported editors
- Type checking for values
- Documentation through type definitions

For detailed type definitions, see:
- `app/config/theme.ts` for theme types
- `app/config/content.ts` for content types

## Note
This is a reference implementation meant for starting a new api project. As of now there are no plans to add additional features or integrations.

Please do not use this directly in production without testing and ensuring it meets your needs.

Do not submit any PRs or issues for this repository. 
    
