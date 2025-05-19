'use client';

/**
 * Canonical Component
 * 
 * A component for setting canonical URLs in the document head.
 * Useful for client components where metadata API is not available.
 */

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

interface CanonicalProps {
  /**
   * The canonical URL to set. If not provided,
   * it will generate a URL based on the current pathname.
   */
  url?: string;
  
  /**
   * Base URL for the site (used when generating the URL from pathname)
   * Defaults to NEXT_PUBLIC_BASE_URL or 'https://caesarooh.com'
   */
  baseUrl?: string;
}

/**
 * Component to set canonical URL in the head
 * 
 * @param url - The canonical URL to set (optional)
 * @param baseUrl - Base URL for the site (optional)
 */
export default function Canonical({ url, baseUrl }: CanonicalProps) {
  const pathname = usePathname();
  
  // Determine base URL
  const base = baseUrl || process.env.NEXT_PUBLIC_BASE_URL || 'https://caesarooh.com';
  
  // Generate canonical URL if not provided
  const canonicalUrl = url || `${base}${pathname}`;
  
  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
} 