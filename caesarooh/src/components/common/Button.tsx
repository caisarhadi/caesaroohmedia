import React from 'react';
import { getThemeClasses } from '@/styles/styleUtils';

/**
 * The different variants available for the Button component.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline';

/**
 * The different sizes available for the Button component.
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Props for the Button component.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * The size of the button.
   * @default 'medium'
   */
  size?: ButtonSize;
  
  /**
   * Whether the button is currently loading.
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Icon to be displayed before the button text.
   */
  icon?: React.ReactNode;
  
  /**
   * Icon to be displayed after the button text.
   */
  trailingIcon?: React.ReactNode;
  
  /**
   * Class names to be applied to the button.
   */
  className?: string;
  
  /**
   * The content of the button.
   */
  children: React.ReactNode;
}

/**
 * A versatile Button component with multiple variants, sizes, and states.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      isLoading = false,
      icon,
      trailingIcon,
      className = '',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // Base styles for all buttons
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-gray-900';
    
    // Get variant styles from theme configuration
    const variantStyles = getThemeClasses(variant);
    
    // Styles based on size
    const sizeStyles = {
      small: 'text-xs px-2.5 py-1.5',
      medium: 'text-sm px-4 py-2',
      large: 'text-base px-6 py-3',
    };
    
    // Disabled styles
    const disabledStyles = 'opacity-50 cursor-not-allowed';
    
    // Combine all styles
    const buttonStyles = `
      ${baseStyles}
      ${variantStyles}
      ${sizeStyles[size]}
      ${disabled || isLoading ? disabledStyles : ''}
      ${className}
    `;
    
    return (
      <button
        ref={ref}
        className={buttonStyles}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {!isLoading && icon && <span className="mr-2">{icon}</span>}
        
        {children}
        
        {!isLoading && trailingIcon && <span className="ml-2">{trailingIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 