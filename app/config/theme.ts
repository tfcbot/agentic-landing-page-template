import { CSSProperties } from 'react';

/**
 * Configuration type for theme colors and styles
 */
export type ThemeConfig = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    backgroundSecondary: string;
    backgroundHover: string;
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    gradients: {
      primary: {
        from: string;
        to: string;
      };
      background: {
        from: string;
        to: string;
      };
    };
  };
  darkMode?: {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundSecondary: string;
      backgroundHover: string;
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      gradients: {
        primary: {
          from: string;
          to: string;
        };
        background: {
          from: string;
          to: string;
        };
      };
    };
  };
};

/**
 * Default theme configuration
 * Uses current design's color scheme as default
 */
export const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#6D28D9',    // purple-600
    secondary: '#2563EB',  // blue-600
    background: '#0A0118', // dark background
    backgroundSecondary: 'rgba(0, 0, 0, 0.2)', // black/20
    backgroundHover: 'rgba(0, 0, 0, 0.3)',     // black/30
    text: {
      primary: '#FFFFFF',   // white
      secondary: '#9CA3AF', // gray-400
      tertiary: '#6B7280',  // gray-500
    },
    gradients: {
      primary: {
        from: '#6D28D9',   // purple-600
        to: '#2563EB',     // blue-600
      },
      background: {
        from: 'rgba(109, 40, 217, 0.5)',  // purple-600/50
        to: 'rgba(37, 99, 235, 0.5)',     // blue-600/50
      }
    }
  },
  darkMode: {
    colors: {
      primary: '#8B5CF6',    // purple-500
      secondary: '#3B82F6',  // blue-500
      background: '#000000', // black
      backgroundSecondary: 'rgba(0, 0, 0, 0.2)', // black/20
      backgroundHover: 'rgba(0, 0, 0, 0.3)',     // black/30
      text: {
        primary: '#FFFFFF',   // white
        secondary: '#9CA3AF', // gray-400
        tertiary: '#6B7280',  // gray-500
      },
      gradients: {
        primary: {
          from: '#8B5CF6',   // purple-500
          to: '#3B82F6',     // blue-500
        },
        background: {
          from: 'rgba(139, 92, 246, 0.5)', // purple-500/50
          to: 'rgba(59, 130, 246, 0.5)',   // blue-500/50
        }
      }
    }
  }
};

/**
 * Helper function to get CSS variables from theme
 */
export function getThemeVariables(theme: ThemeConfig): Record<string, string> {
  return {
    '--color-primary': theme.colors.primary,
    '--color-secondary': theme.colors.secondary,
    '--color-background': theme.colors.background,
    '--color-background-secondary': theme.colors.backgroundSecondary,
    '--color-background-hover': theme.colors.backgroundHover,
    '--text-primary': theme.colors.text.primary,
    '--text-secondary': theme.colors.text.secondary,
    '--text-tertiary': theme.colors.text.tertiary,
    '--gradient-primary-from': theme.colors.gradients.primary.from,
    '--gradient-primary-to': theme.colors.gradients.primary.to,
    '--gradient-background-from': theme.colors.gradients.background.from,
    '--gradient-background-to': theme.colors.gradients.background.to,
  };
}
