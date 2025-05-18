'use client';

import useTheme from '@/hooks/useTheme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Just initialize the theme hook - the hook implementation
  // handles all the side effects needed for theme switching
  useTheme();

  return <>{children}</>;
};

export default ThemeProvider; 