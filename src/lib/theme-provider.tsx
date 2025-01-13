'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
  children,
  defaultTheme = 'system',
  enableSystem = true,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light'); // Default to 'light' initially
  const [isClient, setIsClient] = useState(false); // To track if it's client-side

  useEffect(() => {
    setIsClient(true); // Set to true once the component is mounted on the client
  }, []);

  useEffect(() => {
    if (isClient && defaultTheme === 'system' && enableSystem) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, [isClient, defaultTheme, enableSystem]);

  useEffect(() => {
    if (isClient) {
      const root = document.documentElement;

      // Remove previous theme classes
      root.classList.remove('light', 'dark');

      // Apply the new theme
      root.classList.add(theme);
    }
  }, [theme, isClient]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
