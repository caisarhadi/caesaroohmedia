import React from 'react';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  /**
   * Group of radio options
   */
  options: RadioOption[];
  
  /**
   * The label for the radio group
   */
  label?: string;
  
  /**
   * Hint text to display below the radio group
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
   * Currently selected value
   */
  value?: string;
  
  /**
   * Name attribute for the radio inputs
   */
  name: string;
  
  /**
   * Callback when selection changes
   */
  onChange?: (value: string) => void;
  
  /**
   * Size of the radio buttons
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Additional class name for the radio group container
   */
  containerClassName?: string;
  
  /**
   * Additional class name for the radio inputs
   */
  radioClassName?: string;
  
  /**
   * Additional class name for the label
   */
  labelClassName?: string;
  
  /**
   * Orientation of the radio options
   * @default 'vertical'
   */
  orientation?: 'vertical' | 'horizontal';
  
  /**
   * Disabled state for the entire group
   */
  disabled?: boolean;
}

/**
 * RadioGroup component for selecting a single option from a list
 */
const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  label,
  hint,
  error,
  required = false,
  value,
  name,
  onChange,
  size = 'medium',
  containerClassName = '',
  radioClassName = '',
  labelClassName = '',
  orientation = 'vertical',
  disabled = false,
}) => {
  // Generate a unique ID for the group if not provided
  const groupId = `radio-group-${Math.random().toString(36).substring(2, 9)}`;
  
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
  
  // Base radio styles
  const baseRadioStyles = `
    rounded-full border bg-white text-primary 
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    dark:bg-gray-800 dark:border-gray-700 dark:text-primary-light dark:focus:ring-primary-light
    ${sizeStyles[size]}
    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'}
    ${radioClassName}
  `;
  
  // Container classes
  const containerStyles = `mb-4 ${containerClassName}`;
  
  // Label classes
  const groupLabelStyles = `block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${labelClassName}`;
  
  // Option label classes
  const optionLabelStyles = `font-medium text-gray-700 dark:text-gray-300 ${labelSizeStyles[size]}`;
  
  // Error message classes
  const errorStyles = 'mt-1 text-xs text-red-500 dark:text-red-400';
  
  // Hint text classes
  const hintStyles = 'mt-1 text-xs text-gray-500 dark:text-gray-400';
  
  // Option list styles based on orientation
  const optionListStyles = orientation === 'vertical' 
    ? 'space-y-2' 
    : 'flex flex-wrap gap-4';
  
  // Handle change event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  
  return (
    <div className={containerStyles} role="radiogroup" aria-labelledby={`${groupId}-label`}>
      {label && (
        <label id={`${groupId}-label`} className={groupLabelStyles}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className={optionListStyles}>
        {options.map((option, index) => {
          const optionId = `${groupId}-option-${index}`;
          const isChecked = value === option.value;
          const isOptionDisabled = disabled || option.disabled;
          
          return (
            <div key={option.value} className="flex items-center">
              <input
                id={optionId}
                type="radio"
                name={name}
                value={option.value}
                checked={isChecked}
                onChange={handleChange}
                disabled={isOptionDisabled}
                aria-describedby={error ? `${groupId}-error` : hint ? `${groupId}-hint` : undefined}
                className={baseRadioStyles}
              />
              <label htmlFor={optionId} className={`ml-2 ${optionLabelStyles}`}>
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
      
      {error && (
        <p id={`${groupId}-error`} className={errorStyles} role="alert">
          {error}
        </p>
      )}
      
      {!error && hint && (
        <p id={`${groupId}-hint`} className={hintStyles}>
          {hint}
        </p>
      )}
    </div>
  );
};

export default RadioGroup; 