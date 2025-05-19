'use client';

/**
 * Page Title Component
 * 
 * A component for setting page titles consistently across the app.
 * Can be used in client components when metadata API is not available.
 */

import { useEffect } from 'react';

interface PageTitleProps {
  /**
   * The page title to display
   */
  title: string;
  
  /**
   * Optional site name to append to the title
   * If provided, the title will be formatted as "title | siteName"
   */
  siteName?: string;
  
  /**
   * Whether to render the component (for debugging)
   * Default: true
   */
  render?: boolean;
}

/**
 * Component to set page title
 * 
 * @param title - The page title to display
 * @param siteName - Optional site name to append to the title (format: "title | siteName")
 * @param render - Whether to render the component (for debugging)
 */
export default function PageTitle({ 
  title, 
  siteName, 
  render = true 
}: PageTitleProps) {
  useEffect(() => {
    // Set document title
    if (title) {
      document.title = siteName ? `${title} | ${siteName}` : title;
    }
    
    // Cleanup function to reset title on unmount if needed
    return () => {
      // Optional: Reset title on unmount
      // document.title = siteName || 'Caesarooh Media';
    };
  }, [title, siteName]);
  
  // Return null since this is a utility component with no UI
  return render ? (
    <span style={{ display: 'none' }} data-testid="page-title-component">
      {title}
    </span>
  ) : null;
} 