'use client';

import useTheme from '@/hooks/useTheme';

const ThemeToggle = () => {
  const { activeTheme, toggleTheme, mounted } = useTheme();

  // Show UI only after component is mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // For accessibility
  const toggleThemeWithKeyboard = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  };

  // Simple icon component for sun (light mode)
  const SunIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );

  // Simple icon component for moon (dark mode)
  const MoonIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  return (
    <button
      aria-label={`Switch to ${activeTheme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${activeTheme === 'dark' ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
      onKeyDown={toggleThemeWithKeyboard}
      className="p-2 rounded-full transition-theme focus:outline-none focus:ring-2 focus:ring-primary hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700"
      tabIndex={0}
    >
      {activeTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle; 