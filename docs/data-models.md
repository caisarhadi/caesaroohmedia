**Data Models**

**Core Application Entities / Domain Objects**

**OOHInventoryItem**

  * Description: Represents a single Out-of-Home advertising inventory item.
  * Schema / Interface Definition:

<!-- end list -->

```typescript
export interface OOHInventoryItemLocation {
  address: string;
  city: string;
  district?: string;
  latitude: number;
  longitude: number;
  mapLink?: string;
}

export interface OOHInventoryItemSize {
  width: number;
  height: number;
  unit: 'meters' | 'feet' | 'pixels';
}

export interface OOHInventoryItemSpecifications {
  material?: string;
  resolution?: string;
  illuminationDetails?: string;
  operatingHours?: string;
  trafficData?: string;
  facing?: string;
  mediaFormat?: string;
}

export interface OOHInventoryItem {
  id: string;
  name: string;
  location: OOHInventoryItemLocation;
  mediaType: string;
  size: OOHInventoryItemSize;
  illumination: 'Yes' | 'No' | 'Conditional';
  priceRange?: string;
  availabilityStatus: 'Available' | 'Booked' | 'Pending' | 'Maintenance';
  primaryImage: string;
  galleryImages?: string[];
  specifications: OOHInventoryItemSpecifications;
  description: string;
  uniqueSellingPoints?: string[];
  nearbyPOIs?: string[];
  availabilityCalendarLink?: string;
  downloadableSpecSheet?: string;
  videoCapability?: boolean;
  threeSixtyImageURL?: string;
  tags?: string[];
}
```

**PointOfInterest (POI)**

  * Description: Represents a Point of Interest relevant to OOH site locations.
  * Schema / Interface Definition (GeoJSON Feature):

<!-- end list -->

```typescript
export interface POIGeometry {
  type: 'Point';
  coordinates: [number, number]; // [longitude, latitude]
}

export interface POIProperties {
  id: string;
  name: string;
  category: string; // e.g., "Retail", "Transport Hub", "Public Space"
  description?: string;
  icon?: string;
}

export interface PointOfInterest { // This is a GeoJSON Feature
  type: 'Feature';
  geometry: POIGeometry;
  properties: POIProperties;
}

export interface POIFeatureCollection {
    type: 'FeatureCollection';
    features: PointOfInterest[];
}
```

**InsightArticle**

  * Description: Represents an article in the "Insight" section.
  * Schema / Interface Definition:

<!-- end list -->

```typescript
export interface InsightArticle {
  slug: string;
  title: string;
  date: string; // ISO 8601 (YYYY-MM-DD)
  author?: string;
  summary: string;
  image?: string;
  tags?: string[];
  content: string; // Markdown content
}
```

**API Payload Schemas (If distinct)**

**ContactFormPayload**

  * Description: Schema for the data submitted via the contact form.
  * Schema / Interface Definition:

<!-- end list -->

```typescript
export interface ContactFormPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
  oohInventoryId?: string;
}
```

**Database Schemas (If applicable)**

For V1, a formal database is not planned; data is sourced from flat files. This section will be relevant if/when a database (e.g., PostgreSQL with PostGIS) is introduced.

Evaluation for V1 (Flat Files vs. Simple DBaaS):

  * Decision for V1: Proceed with local flat files (JSON, GeoJSON, Markdown). The API layer (`src/app/api/`) will abstract data retrieval, making a future transition to a database smoother. Complex spatial queries (POI within radius) will be simplified for V1 (e.g., basic bounding box or pre-calculation if feasible with flat files, acknowledging technical debt here).

**State File Schemas (V1 Data Sources)**

**Inventory Data (`inventory.json`)**

  * Purpose: Stores the list of OOH inventory items.
  * Format: JSON array of `OOHInventoryItem` objects. (Schema detailed in Core Application Entities: OOHInventoryItem)

**OOH Sites GeoJSON (`map-ooh-sites.geojson`)**

  * Purpose: Stores geographical locations and basic properties of OOH sites.
  * Format: GeoJSON `FeatureCollection`. Each `Feature` has `Point` geometry and properties like `id`, `name`, `mediaType`, `status`.

**Points of Interest GeoJSON (`map-pois.geojson`)**

  * Purpose: Stores geographical locations and properties of POIs.
  * Format: GeoJSON `FeatureCollection` of `PointOfInterest` features. (Schema detailed in Core Application Entities: PointOfInterest)

**Insight Article Markdown (e.g., `src/content/insights/my-article.md`)**

  * Purpose: Stores content for individual insight articles.
  * Format: Markdown with YAML Frontmatter.
  * Schema Definition (Frontmatter):

<!-- end list -->

```yaml
---
slug: 'unique-article-slug' # Required, URL-friendly
title: 'Article Title' # Required
date: 'YYYY-MM-DD' # Required
author: 'Author Name' # Optional
summary: 'A short summary of the article for list views and meta descriptions.' # Required
image: '/images/insights/cover-image.jpg' # Optional, path to cover image
tags: ['tag1', 'tag2'] # Optional
---

# Article Title (can be repeated here or just use frontmatter title)

Full article content in Markdown format...
Supports standard Markdown syntax, including images, lists, etc.
``` 