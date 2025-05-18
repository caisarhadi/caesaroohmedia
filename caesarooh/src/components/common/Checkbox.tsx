import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The label for the checkbox
   */
  label: string;
  
  /**
   * Hint text to display below the checkbox
   */
  hint?: string;
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Size of the checkbox
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Additional class name for the checkbox container
   */
  containerClassName?: string;
  
  /**
   * Additional class name for the checkbox input
   */
  checkboxClassName?: string;
  
  /**
   * Additional class name for the label
   */
  labelClassName?: string;
}

/**
 * Checkbox component with label and support for error states
 */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      hint,
      error,
      size = 'medium',
      disabled = false,
      containerClassName = '',
      checkboxClassName = '',
      labelClassName = '',
      id,
      ...props
    },
    ref
  ) => {
    // Generate a unique ID for the checkbox if not provided
    const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;
    
    // Determine size-based styles
    const sizeStyles = {
      small: 'w-3 h-3',
      medium: 'w-4 h-4',
      large: 'w-5 h-5',
    };
    
    const labelSizeStyles = {
      small: 'text-xs',
      medium: 'text-sm',
      large: 'text-base',
    };
    
    // Base checkbox styles
    const baseCheckboxStyles = `
      rounded border bg-white text-primary shadow-sm 
      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      dark:bg-gray-800 dark:border-gray-700 dark:text-primary-light dark:focus:ring-primary-light
      ${sizeStyles[size]}
      ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'}
      ${checkboxClassName}
    `;
    
    // Container classes
    const containerStyles = `flex items-start mb-4 ${containerClassName}`;
    
    // Label classes
    const labelStyles = `font-medium text-gray-700 dark:text-gray-300 ${labelSizeStyles[size]} ${labelClassName}`;
    
    // Error message classes
    const errorStyles = 'mt-1 text-xs text-red-500 dark:text-red-400';
    
    // Hint text classes
    const hintStyles = 'mt-1 text-xs text-gray-500 dark:text-gray-400';
    
    return (
      <div className="space-y-1">
        <div className={containerStyles}>
          <div className="flex items-center h-5">
            <input
              ref={ref}
              id={checkboxId}
              type="checkbox"
              disabled={disabled}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? `${checkboxId}-error` : hint ? `${checkboxId}-hint` : undefined}
              className={baseCheckboxStyles}
              {...props}
            />
          </div>
          <div className="ml-2 text-sm">
            <label htmlFor={checkboxId} className={labelStyles}>
              {label}
            </label>
          </div>
        </div>
        
        {error && (
          <p id={`${checkboxId}-error`} className={errorStyles} role="alert">
            {error}
          </p>
        )}
        
        {!error && hint && (
          <p id={`${checkboxId}-hint`} className={hintStyles}>
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox; 