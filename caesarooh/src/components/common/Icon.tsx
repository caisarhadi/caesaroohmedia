import React from 'react';

// Define icon names - we'll add more as needed
export type IconName = 
  | 'arrow-left'
  | 'arrow-right'
  | 'check'
  | 'close'
  | 'menu'
  | 'search'
  | 'user'
  | 'info'
  | 'warning'
  | 'error'
  | 'success';

export interface IconProps {
  /**
   * The name of the icon to render
   */
  name: IconName;
  
  /**
   * The size of the icon
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * The color of the icon (defaults to currentColor)
   */
  color?: string;
  
  /**
   * Additional class names for the icon
   */
  className?: string;
}

/**
 * Icon component for rendering SVG icons
 */
const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'medium', 
  color = 'currentColor',
  className = '',
}) => {
  // Get the icon size in pixels
  const sizeMap = {
    small: 16,
    medium: 24,
    large: 32,
  };
  
  const pixelSize = sizeMap[size];
  
  // Base icon styles
  const baseStyles = `inline-block flex-shrink-0 ${className}`;
  
  // Define all the SVG paths for each icon
  const iconMap: Record<IconName, React.ReactNode> = {
    'arrow-left': (
      <svg width={pixelSize} height={pixelSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseStyles}>
        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'arrow-right': (
      <svg width={pixelSize} height={pixelSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseStyles}>
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'check': (
      <svg width={pixelSize} height={pixelSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseStyles}>
        <path d="M5 13L9 17L19 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'close': (
      <svg width={pixelSize} height={pixelSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseStyles}>
        <path d="M6 18L18 6M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'menu': (
      <svg width={pixelSize} height={pixelSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseStyles}>
        <path d="M4 6H20M4 12H20M4 18H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'search': (
      <svg width={pixelSize} height={pixelSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseStyles}>
        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'user': (
      <svg width={pixelSize} height={pixelSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseStyles}>
        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'info': (
      <svg width={pixelSize} height={pixelSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseStyles}>
        <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'warning': (
      <svg width={pixelSize} height={pixelSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseStyles}>
        <path d="M12 9V13M12 17H12.01M4.98207 19H19.0179C20.5615 19 21.5233 17.3256 20.7455 16L13.7276 4C12.9498 2.6744 11.0502 2.6744 10.2724 4L3.25452 16C2.47675 17.3256 3.43849 19 4.98207 19Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'error': (
      <svg width={pixelSize} height={pixelSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseStyles}>
        <path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'success': (
      <svg width={pixelSize} height={pixelSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseStyles}>
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };
  
  return iconMap[name] || null;
};

export default Icon; 