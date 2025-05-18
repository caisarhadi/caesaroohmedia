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
      block w-full rounded-md border bg-white text-gray-900 shadow-sm 
      focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary 
      disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
      dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:focus:ring-primary-light
      dark:disabled:bg-gray-900 dark:disabled:text-gray-600
      ${sizeStyles[size]}
      ${startIcon ? 'pl-9' : ''} 
      ${endIcon ? 'pr-9' : ''}
      ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:ring-red-500' : 'border-gray-300'}
      ${inputClassName}
    `;
    
    // Container classes
    const containerStyles = `mb-4 ${containerClassName}`;
    
    // Label classes
    const labelStyles = `block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${labelClassName}`;
    
    // Error message classes
    const errorStyles = 'mt-1 text-xs text-red-500 dark:text-red-400';
    
    // Hint text classes
    const hintStyles = 'mt-1 text-xs text-gray-500 dark:text-gray-400';
    
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