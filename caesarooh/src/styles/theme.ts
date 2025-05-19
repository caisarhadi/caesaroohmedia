export const themeColors = {
  light: {
    background: {
      primary: 'bg-white',
      secondary: 'bg-gray-50',
      tertiary: 'bg-gray-100',
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-700',
      tertiary: 'text-gray-500',
    },
    border: {
      primary: 'border-gray-200',
      secondary: 'border-gray-300',
    },
    button: {
      primary: {
        base: 'bg-primary-500 text-white',
        hover: 'hover:bg-primary-600',
        focus: 'focus:ring-primary-500',
      },
      secondary: {
        base: 'bg-secondary-500 text-white',
        hover: 'hover:bg-secondary-600',
        focus: 'focus:ring-secondary-500',
      },
      outline: {
        base: 'border border-gray-300 bg-transparent text-gray-700',
        hover: 'hover:bg-gray-50',
        focus: 'focus:ring-primary-500',
      },
    },
  },
  dark: {
    background: {
      primary: 'dark:bg-gray-900',
      secondary: 'dark:bg-gray-800',
      tertiary: 'dark:bg-gray-700',
    },
    text: {
      primary: 'dark:text-white',
      secondary: 'dark:text-gray-300',
      tertiary: 'dark:text-gray-400',
    },
    border: {
      primary: 'dark:border-gray-700',
      secondary: 'dark:border-gray-600',
    },
    button: {
      primary: {
        base: 'dark:bg-primary-400 dark:text-gray-900',
        hover: 'dark:hover:bg-primary-500',
        focus: 'dark:focus:ring-primary-400',
      },
      secondary: {
        base: 'dark:bg-secondary-400 dark:text-gray-900',
        hover: 'dark:hover:bg-secondary-500',
        focus: 'dark:focus:ring-secondary-400',
      },
      outline: {
        base: 'dark:border-gray-600 dark:text-gray-300',
        hover: 'dark:hover:bg-gray-800',
        focus: 'dark:focus:ring-primary-400',
      },
    },
  },
  transition: {
    base: 'transition-all duration-200',
  },
} as const; 