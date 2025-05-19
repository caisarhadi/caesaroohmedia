# Styling System Documentation

## Overview

Our styling system follows a modular, centralized approach using Tailwind CSS, theme variables, and utility functions. This document outlines the core patterns and best practices to maintain consistent, scalable, and maintainable styles.

## Core Principles

1. **No Hardcoded Styles**: Always use theme variables and Tailwind classes
2. **Modular Organization**: Styles are separated into logical modules
3. **Dark Mode Support**: All components should work seamlessly in both light and dark modes
4. **Theme Consistency**: Use theme utilities and CSS variables for colors and other theme properties
5. **Responsive Design**: All components should be responsive by default

## Directory Structure

```
/src
  /styles
    globals.css         # Base styles and CSS variables
    animations.css      # Animation keyframes and utility classes
    index.css           # Main import file for all styles
    styleUtils.ts       # Utility functions for working with styles
    theme.ts            # Theme configuration and color definitions
    tailwind.config.js  # Tailwind CSS configuration
    postcss.config.mjs  # PostCSS configuration
    README.md           # This documentation file
  /contexts
    ThemeProvider.tsx   # Theme context provider
  /hooks
    useTheme.ts         # Hook for accessing and manipulating theme
```

## Root Configuration Files

In order to maintain compatibility with various tools, we use proxy configuration files at the root:

- `/tailwind.config.js` - imports and re-exports the configuration from `src/styles/tailwind.config.js`
- `/postcss.config.mjs` - imports and re-exports the configuration from `src/styles/postcss.config.mjs`

## Theme System

### CSS Variables

Core theme values are defined as CSS variables in `globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --primary: #0088cc;
  --secondary: #8065ff;
  --neutral: #333333;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ffffff;
}
```

### Theme Configuration

The `theme.ts` file contains Tailwind-compatible theme configuration:

```ts
export const themeColors = {
  light: {
    background: {
      primary: 'bg-white',
      // ...more variants
    },
    // ...more categories
  },
  dark: {
    // ...dark theme equivalents
  }
}
```

### Utility Functions

Use the utility functions from `styleUtils.ts` to compose class names:

```ts
// For backgrounds
const bgClasses = getBackgroundClasses('primary');

// For text
const textClasses = getTextClasses('primary');

// For borders
const borderClasses = getBorderClasses('primary');

// For button variants
const buttonClasses = getThemeClasses('primary');
```

### Theme Provider

All components requiring theme access should be wrapped in the `ThemeProvider`:

```tsx
<ThemeProvider>
  <YourComponent />
</ThemeProvider>
```

### useTheme Hook

Access theme values and functions with the `useTheme` hook:

```tsx
const { theme, activeTheme, setTheme, toggleTheme } = useThemeContext();
```

## Component Styling Best Practices

1. **Template for New Components**:
   ```tsx
   const Component = ({ className = '', ...props }) => {
     // Use utility functions for theme-aware classes
     const bgClasses = getBackgroundClasses('primary');
     const textClasses = getTextClasses('secondary');
     
     // Combine with component-specific styles
     const componentClasses = `${bgClasses} ${textClasses} rounded-md p-4 ${className}`;
     
     return <div className={componentClasses} {...props} />;
   };
   ```

2. **Dynamic Styles**:
   ```tsx
   const dynamicClasses = isActive 
     ? getBackgroundClasses('primary') 
     : getBackgroundClasses('secondary');
   ```

3. **Responsive Styles**:
   ```tsx
   const responsiveClasses = 'p-2 sm:p-4 md:p-6 lg:p-8';
   ```

4. **Animation Classes**:
   ```tsx
   const animatedElement = shouldAnimate 
     ? 'animate-fade-in' 
     : '';
   ```

## Storybook Integration

All components should be documented in Storybook with examples for:

1. Different variants/states
2. Light and dark mode
3. Responsive behavior
4. Interactive states

## Checklist for New Components

- [ ] Component uses Tailwind classes, not inline styles
- [ ] Theme variables used for colors and other theme properties
- [ ] Dark mode support implemented
- [ ] Responsive design considered
- [ ] Storybook documentation added
- [ ] Animations use the predefined animation classes
- [ ] Theme utility functions used appropriately 