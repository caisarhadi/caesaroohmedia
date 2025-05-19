'use client';

/**
 * Meta Description Component
 * 
 * A component for setting meta descriptions in the document head.
 * Useful for client components where metadata API is not available.
 */

import React from 'react';
import Head from 'next/head';

interface MetaDescriptionProps {
  /**
   * The meta description content
   */
  content: string;
  
  /**
   * Maximum length for the description (optional, defaults to 160)
   * Descriptions longer than this will be truncated
   */
  maxLength?: number;
}

/**
 * Component to set meta description in the head
 * 
 * @param content - The meta description content
 * @param maxLength - Maximum length for the description (defaults to 160)
 */
export default function MetaDescription({ 
  content, 
  maxLength = 160 
}: MetaDescriptionProps) {
  // Truncate description if it exceeds maxLength
  const description = content.length > maxLength
    ? `${content.substring(0, maxLength - 3)}...`
    : content;
  
  return (
    <Head>
      <meta name="description" content={description} />
    </Head>
  );
} 