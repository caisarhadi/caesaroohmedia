import { MetadataRoute } from 'next';

// Base URL for the site
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://caesarooh.com';

/**
 * Generate robots.txt for the application
 * This function is called by Next.js to generate the robots.txt file
 * @returns Robots configuration
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/private/',
        // Add other paths that should be disallowed for crawlers
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
} 