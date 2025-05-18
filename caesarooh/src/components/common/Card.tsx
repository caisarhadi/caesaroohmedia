import React from 'react';

export interface CardProps {
  /**
   * The content of the card
   */
  children: React.ReactNode;
  
  /**
   * Optional card header
   */
  header?: React.ReactNode;
  
  /**
   * Optional card footer
   */
  footer?: React.ReactNode;
  
  /**
   * Whether to add padding to the content area
   * @default true
   */
  withPadding?: boolean;
  
  /**
   * Additional class names for the card
   */
  className?: string;
  
  /**
   * Additional class names for the card content
   */
  contentClassName?: string;
  
  /**
   * Additional class names for the card header
   */
  headerClassName?: string;
  
  /**
   * Additional class names for the card footer
   */
  footerClassName?: string;
}

/**
 * A flexible Card component that can be used for various content containers
 */
const Card = ({
  children,
  header,
  footer,
  withPadding = true,
  className = '',
  contentClassName = '',
  headerClassName = '',
  footerClassName = '',
}: CardProps) => {
  // Base card styles
  const cardStyles = `bg-white border border-gray-200 rounded-lg shadow-sm 
    dark:bg-gray-800 dark:border-gray-700 overflow-hidden ${className}`;
  
  // Header styles
  const headerStyles = `border-b border-gray-200 dark:border-gray-700 
    px-4 py-3 ${headerClassName}`;
  
  // Content styles
  const contentStyles = `${withPadding ? 'p-4' : ''} ${contentClassName}`;
  
  // Footer styles
  const footerStyles = `border-t border-gray-200 dark:border-gray-700 
    px-4 py-3 ${footerClassName}`;
  
  return (
    <div className={cardStyles}>
      {header && <div className={headerStyles}>{header}</div>}
      <div className={contentStyles}>{children}</div>
      {footer && <div className={footerStyles}>{footer}</div>}
    </div>
  );
};

export default Card; 