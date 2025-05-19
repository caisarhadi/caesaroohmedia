/**
 * Metadata Utilities
 *
 * This file contains utility functions for generating SEO metadata
 * using Next.js App Router metadata API.
 */

import { Metadata } from 'next';
import { OpenGraph, TwitterCard } from '../types/seo';

// Base URL for the site
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://caesarooh.com';

// Default site title
const SITE_NAME = 'Caesarooh Media';

/**
 * Default Open Graph metadata
 */
export const defaultOpenGraph: OpenGraph = {
  type: 'website',
  siteName: SITE_NAME,
  title: SITE_NAME,
  description: 'Caesarooh Media provides innovative mapping solutions and insights for the digital age.',
  url: BASE_URL,
  images: [
    {
      url: `${BASE_URL}/images/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Caesarooh Media',
    },
  ],
};

/**
 * Default Twitter Card metadata
 */
export const defaultTwitterCard: TwitterCard = {
  card: 'summary_large_image',
  site: '@caesarooh',
  creator: '@caesarooh',
  title: SITE_NAME,
  description: 'Caesarooh Media provides innovative mapping solutions and insights for the digital age.',
  image: `${BASE_URL}/images/twitter-image.jpg`,
};

/**
 * Default metadata for the site
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Caesarooh Media provides innovative mapping solutions and insights for the digital age.',
  applicationName: SITE_NAME,
  authors: [{ name: 'Caesarooh Media Team' }],
  generator: 'Next.js',
  keywords: ['mapping', 'data visualization', 'geospatial', 'insights', 'solutions'],
  referrer: 'origin-when-cross-origin',
  creator: 'Caesarooh Media',
  publisher: 'Caesarooh Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: defaultOpenGraph,
  twitter: defaultTwitterCard,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#000000',
};

/**
 * Generate metadata for a specific page
 * @param options - Options for generating metadata
 * @returns Metadata object for the page
 */
export function generateMetadata({
  title,
  description,
  canonical,
  openGraph,
  twitter,
  noindex = false,
  nofollow = false,
}: {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: Partial<OpenGraph>;
  twitter?: Partial<TwitterCard>;
  noindex?: boolean;
  nofollow?: boolean;
}): Metadata {
  // Create metadata object
  const metadata: Metadata = {
    // Copy base metadata
    ...defaultMetadata,
    
    // Override with page-specific values if provided
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    
    // Handle canonical URL
    ...(canonical ? { 
      alternates: { 
        canonical: canonical 
      } 
    } : {}),
    
    // Handle robots meta tag
    ...(noindex || nofollow ? {
      robots: {
        index: !noindex,
        follow: !nofollow,
        googleBot: {
          index: !noindex,
          follow: !nofollow,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      }
    } : {}),
    
    // Handle Open Graph metadata
    ...(openGraph || title || description ? {
      openGraph: {
        ...defaultOpenGraph,
        ...(openGraph || {}),
        ...(title && !openGraph?.title ? { title } : {}),
        ...(description && !openGraph?.description ? { description } : {}),
      }
    } : {}),
    
    // Handle Twitter Card metadata
    ...(twitter || title || description ? {
      twitter: {
        ...defaultTwitterCard,
        ...(twitter || {}),
        ...(title && !twitter?.title ? { title } : {}),
        ...(description && !twitter?.description ? { description } : {}),
      }
    } : {})
  };
  
  return metadata;
} 