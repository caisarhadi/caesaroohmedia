'use client';

/**
 * SEO Component
 * 
 * A reusable component that combines all SEO-related functionality:
 * - Page title
 * - Meta description
 * - Canonical URL
 * - Open Graph metadata
 * - Twitter Card metadata
 * - JSON-LD structured data
 */

import React from 'react';
import Head from 'next/head';
import { SeoProps, JsonLdBase } from '@/types/seo';
import JsonLd from './JsonLd';

/**
 * SEO Component for client-side SEO management
 * 
 * This component is used for client-side SEO management in cases where
 * Next.js metadata API is not sufficient (e.g., in client components).
 * For most cases, prefer using the Next.js metadata API in layout files.
 */
export default function Seo({
  title,
  description,
  canonical,
  openGraph,
  twitter,
  jsonLd,
  noindex = false,
  nofollow = false,
}: SeoProps) {
  // Construct robots meta tag value
  const robots = [];
  if (noindex) robots.push('noindex');
  else robots.push('index');
  if (nofollow) robots.push('nofollow');
  else robots.push('follow');
  
  const robotsContent = robots.join(', ');
  
  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {canonical && <link rel="canonical" href={canonical} />}
        <meta name="robots" content={robotsContent} />
        
        {/* Open Graph tags */}
        {openGraph?.title && <meta property="og:title" content={openGraph.title} />}
        {openGraph?.description && <meta property="og:description" content={openGraph.description} />}
        {openGraph?.url && <meta property="og:url" content={openGraph.url} />}
        {openGraph?.type && <meta property="og:type" content={openGraph.type} />}
        {openGraph?.siteName && <meta property="og:site_name" content={openGraph.siteName} />}
        {openGraph?.locale && <meta property="og:locale" content={openGraph.locale} />}
        
        {/* Open Graph images */}
        {openGraph?.images?.map((image, index) => (
          <React.Fragment key={`og-image-${index}`}>
            <meta property="og:image" content={image.url} />
            {image.width && <meta property="og:image:width" content={String(image.width)} />}
            {image.height && <meta property="og:image:height" content={String(image.height)} />}
            {image.alt && <meta property="og:image:alt" content={image.alt} />}
          </React.Fragment>
        ))}
        
        {/* Twitter Card tags */}
        {twitter?.card && <meta name="twitter:card" content={twitter.card} />}
        {twitter?.site && <meta name="twitter:site" content={twitter.site} />}
        {twitter?.creator && <meta name="twitter:creator" content={twitter.creator} />}
        {twitter?.title && <meta name="twitter:title" content={twitter.title} />}
        {twitter?.description && <meta name="twitter:description" content={twitter.description} />}
        {twitter?.image && <meta name="twitter:image" content={twitter.image} />}
      </Head>
      
      {/* JSON-LD structured data */}
      {jsonLd && <JsonLd data={jsonLd} />}
    </>
  );
} 