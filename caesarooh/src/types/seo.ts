/**
 * SEO Types
 * 
 * This file contains TypeScript interfaces for SEO-related functionality
 * including metadata, structured data, and social sharing.
 */

import { Metadata as NextMetadata } from 'next';

/**
 * Extended Metadata interface based on Next.js Metadata
 */
export interface Metadata extends NextMetadata {
  canonical?: string;
}

/**
 * Open Graph metadata
 */
export interface OpenGraph {
  title?: string;
  description?: string;
  url?: string;
  siteName?: string;
  images?: OpenGraphImage[];
  locale?: string;
  type?: 'website' | 'article' | 'profile' | string;
}

/**
 * Open Graph image
 */
export interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

/**
 * Twitter Card metadata
 */
export interface TwitterCard {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
}

/**
 * Base JSON-LD structured data
 */
export interface JsonLdBase {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

/**
 * Organization Schema
 */
export interface OrganizationSchema extends JsonLdBase {
  '@type': 'Organization';
  name: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: ContactPointSchema[];
}

/**
 * Contact Point Schema
 */
export interface ContactPointSchema {
  '@type': 'ContactPoint';
  telephone?: string;
  email?: string;
  contactType: string;
}

/**
 * Website Schema
 */
export interface WebsiteSchema extends JsonLdBase {
  '@type': 'WebSite';
  name: string;
  url: string;
  potentialAction?: SearchActionSchema;
}

/**
 * Search Action Schema
 */
export interface SearchActionSchema {
  '@type': 'SearchAction';
  target: string;
  'query-input': string;
}

/**
 * BreadcrumbList Schema
 */
export interface BreadcrumbListSchema extends JsonLdBase {
  '@type': 'BreadcrumbList';
  itemListElement: BreadcrumbItemSchema[];
}

/**
 * Breadcrumb Item Schema
 */
export interface BreadcrumbItemSchema {
  '@type': 'ListItem';
  position: number;
  name: string;
  item?: string;
}

/**
 * Page Schema (Article, WebPage, etc.)
 */
export interface PageSchema extends JsonLdBase {
  '@type': 'WebPage' | 'Article' | 'BlogPosting' | string;
  headline?: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    '@type': 'Person' | 'Organization';
    name: string;
  };
  publisher?: {
    '@type': 'Organization';
    name: string;
    logo?: {
      '@type': 'ImageObject';
      url: string;
    };
  };
}

/**
 * SEO Props for components
 */
export interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: OpenGraph;
  twitter?: TwitterCard;
  jsonLd?: JsonLdBase | JsonLdBase[];
  noindex?: boolean;
  nofollow?: boolean;
} 