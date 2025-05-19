import { MetadataRoute } from 'next';

// Base URL for the site
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://caesarooh.com';

/**
 * Define the main routes of the application
 * This will be used to generate the sitemap
 */
const routes = [
  {
    url: '/',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: '/about-us',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: '/solutions',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: '/mapping',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: '/inventory',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: '/insight',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: '/contact-us',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  // Add more routes as needed
];

/**
 * Generate sitemap for the application
 * This function is called by Next.js to generate the sitemap.xml file
 * @returns Sitemap configuration
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Create sitemap entries for main routes
  const routeEntries = routes.map((route) => ({
    url: `${BASE_URL}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: route.priority,
  }));

  // TODO: Add dynamic routes if needed (e.g., blog posts, case studies)
  // const dynamicEntries = getDynamicEntries();

  return [
    ...routeEntries,
    // ...dynamicEntries, // Uncomment when implemented
  ];
}

/**
 * Example function to get dynamic entries (e.g., from a CMS or database)
 * Implement this when you have dynamic content that should be included in the sitemap
 */
/*
function getDynamicEntries(): MetadataRoute.Sitemap {
  // This would typically fetch data from an API, database, CMS, etc.
  // For example, fetching all blog posts

  // Sample implementation
  return [
    {
      url: `${BASE_URL}/blog/post-1`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // More entries...
  ];
}
*/ 