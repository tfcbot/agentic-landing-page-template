'use client';

import React, { useState } from 'react';
import { ThemeProvider } from '.';
import { defaultTheme } from '../config/theme';
import { modernTheme } from '../config/examples/modern-theme';
import { minimalTheme } from '../config/examples/minimal-theme';

const themes = {
  default: defaultTheme,
  modern: modernTheme,
  minimal: minimalTheme,
};

type ThemeKey = keyof typeof themes;

export function ThemeSwitch({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('default');

  return (
    <div>
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-black/10 backdrop-blur-sm p-2 rounded-lg">
        {Object.keys(themes).map((theme) => (
          <button
            key={theme}
            onClick={() => setCurrentTheme(theme as ThemeKey)}
            className={`px-3 py-1 rounded transition-colors ${
              currentTheme === theme
                ? 'bg-[var(--color-primary)] text-[var(--text-primary)]'
                : 'bg-white/10 hover:bg-white/20 text-[var(--text-secondary)]'
            }`}
          >
            {theme}
          </button>
        ))}
      </div>
      <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>
    </div>
  );
}
