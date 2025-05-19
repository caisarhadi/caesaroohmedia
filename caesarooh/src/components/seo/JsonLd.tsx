'use client';

/**
 * JsonLd Component
 * 
 * This component renders JSON-LD structured data for SEO purposes.
 * It can render a single schema or an array of schemas.
 */

import React from 'react';
import { JsonLdBase } from '@/types/seo';

interface JsonLdProps {
  data: JsonLdBase | JsonLdBase[];
}

/**
 * JSON-LD component for structured data
 * @param data - JSON-LD structured data object or array of objects
 */
export default function JsonLd({ data }: JsonLdProps) {
  // Ensure data is always an array
  const schemaArray = Array.isArray(data) ? data : [data];
  
  return (
    <>
      {schemaArray.map((schema, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

/**
 * Create an Organization schema
 * @param name - Organization name
 * @param url - Organization website URL
 * @param logo - Organization logo URL
 * @param sameAs - Array of social media profile URLs
 * @returns Organization schema object
 */
export function createOrganizationSchema({
  name,
  url,
  logo,
  sameAs = [],
}: {
  name: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    ...(url && { url }),
    ...(logo && { logo }),
    ...(sameAs.length > 0 && { sameAs }),
  };
}

/**
 * Create a Website schema
 * @param name - Website name
 * @param url - Website URL
 * @returns Website schema object
 */
export function createWebsiteSchema({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Create a BreadcrumbList schema
 * @param items - Array of breadcrumb items
 * @returns BreadcrumbList schema object
 */
export function createBreadcrumbSchema(items: {
  name: string;
  url?: string;
}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

/**
 * Create a Page schema (Article, WebPage, etc.)
 * @param type - Page type (WebPage, Article, BlogPosting, etc.)
 * @param title - Page title
 * @param description - Page description
 * @param url - Page URL
 * @param image - Page image URL
 * @param datePublished - Date published (ISO string)
 * @param dateModified - Date modified (ISO string)
 * @param authorName - Author name
 * @param publisherName - Publisher name
 * @param publisherLogo - Publisher logo URL
 * @returns Page schema object
 */
export function createPageSchema({
  type = 'WebPage',
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  publisherName,
  publisherLogo,
}: {
  type?: 'WebPage' | 'Article' | 'BlogPosting' | string;
  title: string;
  description?: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  publisherName?: string;
  publisherLogo?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    headline: title,
    ...(description && { description }),
    ...(url && { url }),
    ...(image && { image }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(authorName && {
      author: {
        '@type': 'Person',
        name: authorName,
      },
    }),
    ...(publisherName && {
      publisher: {
        '@type': 'Organization',
        name: publisherName,
        ...(publisherLogo && {
          logo: {
            '@type': 'ImageObject',
            url: publisherLogo,
          },
        }),
      },
    }),
  };
} 