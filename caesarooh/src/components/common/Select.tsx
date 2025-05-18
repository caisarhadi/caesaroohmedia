import React from 'react';
import Icon from './Icon';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectOptionGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * The label for the select field
   */
  label?: string;
  
  /**
   * Hint text to display below the select
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
   * Size of the select field
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Options for the select
   */
  options?: (SelectOption | SelectOptionGroup)[];
  
  /**
   * Placeholder text (will be shown as disabled first option)
   */
  placeholder?: string;
  
  /**
   * Additional class name for the select container
   */
  containerClassName?: string;
  
  /**
   * Additional class name for the select element
   */
  selectClassName?: string;
  
  /**
   * Additional class name for the label
   */
  labelClassName?: string;
}

/**
 * Determine if an option is a group of options
 */
const isOptionGroup = (option: SelectOption | SelectOptionGroup): option is SelectOptionGroup => {
  return (option as SelectOptionGroup).options !== undefined;
};

/**
 * Select component for dropdown selection with support for option groups
 */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      hint,
      error,
      required = false,
      size = 'medium',
      disabled = false,
      options = [],
      placeholder,
      containerClassName = '',
      selectClassName = '',
      labelClassName = '',
      id,
      children,
      ...props
    },
    ref
  ) => {
    // Generate a unique ID for the select if not provided
    const selectId = id || `select-${Math.random().toString(36).substring(2, 9)}`;
    
    // Determine size-based styles
    const sizeStyles = {
      small: 'h-8 text-xs px-2 py-1',
      medium: 'h-10 text-sm px-3 py-2',
      large: 'h-12 text-base px-4 py-3',
    };
    
    // Base select styles
    const baseSelectStyles = `
      appearance-none block w-full rounded-md border bg-white text-gray-900 shadow-sm 
      focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary 
      disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
      dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:focus:ring-primary-light
      dark:disabled:bg-gray-900 dark:disabled:text-gray-600
      ${sizeStyles[size]}
      pr-10
      ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:ring-red-500' : 'border-gray-300'}
      ${selectClassName}
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
          <label htmlFor={selectId} className={labelStyles}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined}
            className={baseSelectStyles}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            
            {children || options.map((option, index) => {
              if (isOptionGroup(option)) {
                return (
                  <optgroup key={`group-${index}`} label={option.label}>
                    {option.options.map((groupOption, groupOptionIndex) => (
                      <option 
                        key={`group-${index}-option-${groupOptionIndex}`}
                        value={groupOption.value}
                        disabled={groupOption.disabled}
                      >
                        {groupOption.label}
                      </option>
                    ))}
                  </optgroup>
                );
              }
              
              return (
                <option 
                  key={`option-${index}`}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              );
            })}
          </select>
          
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Icon name="arrow-right" size="small" className="transform rotate-90" />
          </div>
        </div>
        
        {error && (
          <p id={`${selectId}-error`} className={errorStyles} role="alert">
            {error}
          </p>
        )}
        
        {!error && hint && (
          <p id={`${selectId}-hint`} className={hintStyles}>
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select; 