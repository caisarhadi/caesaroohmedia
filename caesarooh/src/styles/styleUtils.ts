/**
 * Utility functions for working with styles and themes
 */

import { themeColors } from '@/styles/theme';

/**
 * Returns combined theme classes for a given variant.
 * Relies on Tailwind CSS variables for automatic dark mode switching.
 */
export const getThemeClasses = (variant: keyof typeof themeColors.light.button) => {
  const lightButtonTheme = themeColors.light.button[variant];
  // Dark mode classes (e.g., dark.base, dark.hover) are no longer explicitly needed here.
  // Tailwind classes like 'bg-primary-500' (from lightButtonTheme.base) will now
  // automatically use the dark mode CSS variable if 'primary-500' in tailwind.config.js
  // points to a CSS variable that has a dark mode variant in globals.css.
  return `${lightButtonTheme.base} ${lightButtonTheme.hover} ${lightButtonTheme.focus} ${themeColors.transition.base}`;
};

/**
 * Returns background classes.
 * Relies on Tailwind CSS variables for automatic dark mode switching.
 */
export const getBackgroundClasses = (variant: keyof typeof themeColors.light.background) => {
  const lightBackground = themeColors.light.background[variant];
  // The dark variant (e.g., themeColors.dark.background[variant]) is no longer explicitly needed.
  // The class 'bg-white' (from lightBackground) will now correctly use the dark mode
  // equivalent if 'white' in tailwind.config.js points to a CSS variable.
  return `${lightBackground} ${themeColors.transition.base}`;
};

/**
 * Returns text classes.
 * Relies on Tailwind CSS variables for automatic dark mode switching.
 */
export const getTextClasses = (variant: keyof typeof themeColors.light.text) => {
  const lightText = themeColors.light.text[variant];
  // The dark variant is no longer explicitly needed.
  return `${lightText} ${themeColors.transition.base}`;
};

/**
 * Returns border classes.
 * Relies on Tailwind CSS variables for automatic dark mode switching.
 */
export const getBorderClasses = (variant: keyof typeof themeColors.light.border) => {
  const lightBorder = themeColors.light.border[variant];
  // The dark variant is no longer explicitly needed.
  return `${lightBorder} ${themeColors.transition.base}`;
};

/**
 * Combines multiple class strings and filters out falsy values
 */
export const cx = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
}; 