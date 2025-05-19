# SEO Implementation Guidelines

This document outlines the SEO implementation approach for the Caesarooh Media website, including guidelines for content creators, developers, and editors.

## Table of Contents

1. [Overview](#overview)
2. [Technical Implementation](#technical-implementation)
3. [Usage Examples](#usage-examples)
4. [Best Practices](#best-practices)
5. [SEO Checklist](#seo-checklist)

## Overview

Our SEO implementation leverages Next.js App Router's built-in metadata capabilities alongside custom components for enhanced functionality. The implementation includes:

- Dynamic meta tag generation
- Structured data (JSON-LD)
- Sitemap and robots.txt configuration
- Social sharing metadata (Open Graph, Twitter Cards)
- Canonical URL management

## Technical Implementation

### 1. Metadata API Integration

Next.js App Router provides a metadata API for managing SEO metadata. We've extended this with custom utilities in `src/lib/metadata.ts`.

#### Default Metadata

Default site metadata is defined in `src/lib/metadata.ts` and can be imported and used in layout files:

```tsx
import { defaultMetadata } from '@/lib/metadata';

export const metadata = defaultMetadata;
```

#### Page-Specific Metadata

Override metadata for specific pages using the `generateMetadata` function:

```tsx
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Page Title',
  description: 'Page description',
  canonical: 'https://caesarooh.com/page-url',
  openGraph: {
    title: 'Open Graph Title',
    description: 'Open Graph Description',
  },
});
```

### 2. Structured Data (JSON-LD)

Structured data is implemented using JSON-LD and can be added to any page using the `JsonLd` component:

```tsx
import JsonLd from '@/components/seo/JsonLd';
import { createPageSchema } from '@/components/seo/JsonLd';

export default function Page() {
  const pageSchema = createPageSchema({
    type: 'WebPage',
    title: 'Page Title',
    description: 'Page description',
    url: 'https://caesarooh.com/page-url',
  });

  return (
    <>
      <div>Page content</div>
      <JsonLd data={pageSchema} />
    </>
  );
}
```

### 3. Sitemap and Robots.txt

Sitemap and robots.txt are automatically generated using Next.js App Router's built-in functionality:

- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`

To add new pages to the sitemap, update the `routes` array in `src/app/sitemap.ts`.

### 4. Client-Side SEO Components

For client components where the metadata API isn't available, we provide React components:

- `Seo`: All-in-one SEO component
- `PageTitle`: Manages document title
- `Canonical`: Sets canonical URL
- `MetaDescription`: Sets meta description

Usage example:

```tsx
'use client';

import { Seo } from '@/components/seo/Seo';

export default function ClientComponent() {
  return (
    <>
      <Seo
        title="Page Title"
        description="Page description"
        canonical="https://caesarooh.com/page-url"
      />
      <div>Component content</div>
    </>
  );
}
```

## Usage Examples

### Example 1: Basic Page with Metadata

```tsx
// src/app/example-page/page.tsx
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Example Page',
  description: 'This is an example page showing SEO implementation.',
});

export default function ExamplePage() {
  return <div>Page content here</div>;
}
```

### Example 2: Page with Structured Data

```tsx
// src/app/blog/[slug]/page.tsx
import { generateMetadata } from '@/lib/metadata';
import JsonLd from '@/components/seo/JsonLd';
import { createPageSchema } from '@/components/seo/JsonLd';

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  
  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author.name],
    },
  });
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);
  
  const articleSchema = createPageSchema({
    type: 'Article',
    title: post.title,
    description: post.excerpt,
    url: `https://caesarooh.com/blog/${params.slug}`,
    image: post.featuredImage.url,
    datePublished: post.publishDate,
    dateModified: post.modifiedDate,
    authorName: post.author.name,
    publisherName: 'Caesarooh Media',
    publisherLogo: 'https://caesarooh.com/images/logo.png',
  });

  return (
    <>
      <article>{/* Post content */}</article>
      <JsonLd data={articleSchema} />
    </>
  );
}
```

## Best Practices

### Page Titles

- Keep titles between 50-60 characters
- Include primary keyword near the beginning
- Use unique titles for each page
- Follow a consistent format: "Page Title | Caesarooh Media"

### Meta Descriptions

- Keep descriptions between 120-160 characters
- Include primary and secondary keywords naturally
- Make descriptions compelling with a call to action
- Provide unique descriptions for each page

### Content Structure

- Use proper heading structure (H1, H2, H3)
- Include keywords in headings where natural
- Use descriptive alt text for images
- Keep URLs clean, descriptive, and keyword-rich

### Structured Data

- Add appropriate structured data for each page type
- Validate structured data using Google's testing tool
- Include all required properties for each schema type
- Keep structured data consistent with visible content

### Technical SEO

- Ensure all pages have correct canonical URLs
- Implement proper internal linking structure
- Optimize images for web (compress, appropriate dimensions)
- Ensure site is mobile-friendly

## SEO Checklist

Use this checklist when creating or updating pages:

### Content

- [ ] Page has a unique, descriptive title (50-60 characters)
- [ ] Meta description is compelling (120-160 characters)
- [ ] Content includes target keywords naturally
- [ ] Heading structure is proper (H1, H2, H3)
- [ ] Images have descriptive alt text
- [ ] Content is original and valuable to users

### Technical

- [ ] Page has appropriate structured data
- [ ] Canonical URL is correctly set
- [ ] Open Graph and Twitter Card metadata is present
- [ ] Page is included in sitemap.xml
- [ ] Page loads quickly (< 3 seconds)
- [ ] Page is mobile-friendly
- [ ] Internal links use descriptive anchor text

### User Experience

- [ ] Content is easy to read and scan
- [ ] Page has clear call-to-action
- [ ] Navigation is intuitive
- [ ] No broken links or images
- [ ] Forms and interactive elements work correctly

## Additional Resources

- [Google Search Central Documentation](https://developers.google.com/search/docs)
- [Schema.org](https://schema.org/) for structured data reference
- [Open Graph Protocol](https://ogp.me/) for social sharing
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

## Testing Tools

### Structured Data Testing

You can validate your structured data implementation using these tools:

1. **Google's Rich Results Test**:
   - URL: [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
   - Tests if your structured data is eligible for rich results in Google Search
   - Supports various schema types like Article, BreadcrumbList, FAQ, etc.

2. **Schema.org Validator**:
   - URL: [https://validator.schema.org/](https://validator.schema.org/)
   - More comprehensive validation against the Schema.org vocabulary

3. **JSON-LD Playground**:
   - URL: [https://json-ld.org/playground/](https://json-ld.org/playground/)
   - Useful for testing and debugging JSON-LD syntax

Procedure for testing:
1. Enter your URL or paste your JSON-LD code into the testing tool
2. Check for errors, warnings, or suggestions
3. Verify that all required properties are present
4. Preview how rich results might appear in search results
5. Fix any issues detected by the validators

### Social Sharing Preview Testing

You can validate and preview how your pages will appear when shared on social media using these tools:

1. **Facebook Sharing Debugger**: 
   - URL: [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
   - Tests Open Graph tags and how your content will appear on Facebook

2. **Twitter Card Validator**:
   - URL: [https://cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
   - Tests Twitter Card implementation and preview how it will appear on Twitter

3. **LinkedIn Post Inspector**:
   - URL: [https://www.linkedin.com/post-inspector/](https://www.linkedin.com/post-inspector/)
   - Tests how content will appear when shared on LinkedIn

4. **Pinterest Rich Pins Validator**:
   - URL: [https://developers.pinterest.com/tools/url-debugger/](https://developers.pinterest.com/tools/url-debugger/)
   - Tests how content will appear when pinned on Pinterest

Procedure for testing:
1. Deploy the page to a publicly accessible URL
2. Enter the URL into the appropriate validator tools
3. Review the output for errors or warnings
4. Check the visual preview for correctness and appearance
5. Fix any issues detected by the validators 