/**
 * Utility functions for working with styles and themes
 */

import { themeColors } from '@/styles/theme';

/**
 * Returns combined theme classes for a given variant
 */
export const getThemeClasses = (variant: keyof typeof themeColors.light.button) => {
  const light = themeColors.light.button[variant];
  const dark = themeColors.dark.button[variant];
  
  return `${light.base} ${light.hover} ${light.focus} ${dark.base} ${dark.hover} ${dark.focus} ${themeColors.transition.base}`;
};

/**
 * Returns background classes for light and dark mode
 */
export const getBackgroundClasses = (variant: keyof typeof themeColors.light.background) => {
  const light = themeColors.light.background[variant];
  const dark = themeColors.dark.background[variant];
  
  return `${light} ${dark} ${themeColors.transition.base}`;
};

/**
 * Returns text classes for light and dark mode
 */
export const getTextClasses = (variant: keyof typeof themeColors.light.text) => {
  const light = themeColors.light.text[variant];
  const dark = themeColors.dark.text[variant];
  
  return `${light} ${dark} ${themeColors.transition.base}`;
};

/**
 * Returns border classes for light and dark mode
 */
export const getBorderClasses = (variant: keyof typeof themeColors.light.border) => {
  const light = themeColors.light.border[variant];
  const dark = themeColors.dark.border[variant];
  
  return `${light} ${dark} ${themeColors.transition.base}`;
};

/**
 * Combines multiple class strings and filters out falsy values
 */
export const cx = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
}; 