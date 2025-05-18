'use client';

import { useEffect, useState } from 'react';
import useUIStore from '../store/uiStore';

// type Theme = 'light' | 'dark' | 'system';
type ActiveTheme = 'light' | 'dark';

const useTheme = () => {
  const { theme, setTheme } = useUIStore();
  const [activeTheme, setActiveTheme] = useState<ActiveTheme>('light');
  const [mounted, setMounted] = useState(false);

  // This effect runs once on component mount to initialize the mounted state
  // and set the initial activeTheme based on localStorage or system preference
  useEffect(() => {
    setMounted(true);
  }, []);

  // This effect runs whenever the theme state changes or when the component mounts
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    
    // Determine the active theme based on user preference or system
    const newActiveTheme = theme === 'system' ? systemTheme : theme as ActiveTheme;
    setActiveTheme(newActiveTheme);
    
    // Apply the theme to the document
    if (newActiveTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, mounted]);

  // Listen for system theme changes if using 'system' theme
  useEffect(() => {
    if (!mounted || theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const root = document.documentElement;
      const newActiveTheme = e.matches ? 'dark' : 'light';
      setActiveTheme(newActiveTheme);
      
      if (newActiveTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted, theme]);

  // Toggle theme function
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      // If system, toggle away from what system is showing
      setTheme(activeTheme === 'dark' ? 'light' : 'dark');
    }
  };

  return {
    theme,        // Current theme setting (light, dark, system)
    activeTheme,  // What's actually showing (light or dark)
    setTheme,     // Set theme directly
    toggleTheme,  // Toggle between light/dark
    mounted       // Whether component is mounted (to prevent hydration mismatch)
  };
};

export default useTheme; 