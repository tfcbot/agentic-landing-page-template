'use client';

import React, { useEffect } from 'react';
import { ThemeConfig, getThemeVariables } from '../config/theme';

export interface ThemeProviderProps {
  theme: ThemeConfig;
  children: React.ReactNode;
}

/**
 * ThemeProvider component that applies theme configuration via CSS variables
 * Supports both light and dark mode themes
 */
export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  useEffect(() => {
    // Get the root element to apply CSS variables
    const root = document.documentElement;

    // Apply theme variables
    const variables = getThemeVariables(theme);
    Object.entries(variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Set up dark mode listener
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      const isDark = e.matches;
      const themeMode = isDark && theme.darkMode ? theme.darkMode.colors : theme.colors;

      // Apply theme variables based on mode
      const variables = getThemeVariables({ colors: themeMode } as ThemeConfig);
      Object.entries(variables).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    };

    // Apply initial theme
    applyTheme(mediaQuery);

    // Listen for system theme changes
    mediaQuery.addEventListener('change', applyTheme);

    return () => {
      mediaQuery.removeEventListener('change', applyTheme);
    };
  }, [theme]);

  return <>{children}</>;
}
