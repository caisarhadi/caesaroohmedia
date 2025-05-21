import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The label for the input field
   */
  label?: string;
  
  /**
   * Hint text to display below the input
   */
  hint?: string;
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Required field indicator
   */
  required?: boolean;
  
  /**
   * Size of the input field
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Icon to display at the start of the input
   */
  startIcon?: React.ReactNode;
  
  /**
   * Icon to display at the end of the input
   */
  endIcon?: React.ReactNode;
  
  /**
   * Additional class name for the input container
   */
  containerClassName?: string;
  
  /**
   * Additional class name for the input element
   */
  inputClassName?: string;
  
  /**
   * Additional class name for the label
   */
  labelClassName?: string;
}

/**
 * Input component for text entry with support for labels, error states, and icons
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      required = false,
      size = 'medium',
      disabled = false,
      startIcon,
      endIcon,
      containerClassName = '',
      inputClassName = '',
      labelClassName = '',
      id,
      ...props
    },
    ref
  ) => {
    // Generate a unique ID for the input if not provided
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
    
    // Determine size-based styles
    const sizeStyles = {
      small: 'h-8 text-xs px-2',
      medium: 'h-10 text-sm px-3',
      large: 'h-12 text-base px-4',
    };
    
    // Base input styles
    const baseInputStyles = `
      block w-full rounded-md shadow-sm focus:outline-none
      bg-background-secondary placeholder-text-tertiary
      ${error 
        ? 'text-red-900 border-red-500 focus:ring-red-500 focus:border-red-500 placeholder-red-700' 
        // For red colors, direct Tailwind classes are used as 'red' palette is not yet mapped to CSS variables.
        // Dark mode for red colors will be handled by Tailwind if/when the 'red' palette uses CSS variables.
        : 'text-text-primary border-border-secondary focus:ring-primary-500 focus:border-primary-500'}
      disabled:bg-background-tertiary disabled:text-text-tertiary disabled:cursor-not-allowed
      ${sizeStyles[size]}
      ${startIcon ? 'pl-9' : ''} 
      ${endIcon ? 'pr-9' : ''}
      ${inputClassName}
    `;
    
    // Container classes
    const containerStyles = `mb-4 ${containerClassName}`;
    
    // Label classes (maps to text-text-secondary)
    const labelStyles = `block text-sm font-medium text-text-secondary mb-1 ${labelClassName}`;
    
    // Error message classes (using text-red-500, dark mode would need red palette mapped to CSS vars)
    const errorStyles = 'mt-1 text-xs text-red-500';
    
    // Hint text classes (maps to text-text-tertiary)
    const hintStyles = 'mt-1 text-xs text-text-tertiary';
    
    return (
      <div className={containerStyles}>
        {label && (
          <label htmlFor={inputId} className={labelStyles}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {startIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {startIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            className={baseInputStyles}
            {...props}
          />
          
          {endIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              {endIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p id={`${inputId}-error`} className={errorStyles} role="alert">
            {error}
          </p>
        )}
        
        {!error && hint && (
          <p id={`${inputId}-hint`} className={hintStyles}>
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 