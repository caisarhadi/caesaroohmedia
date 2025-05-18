**Detailed Frontend Directory Structure**

This structure is designed for a Next.js 14+ application utilizing the App Router and TypeScript (`.ts`/`.tsx`) for all relevant files. It promotes scalability and clear organization.

```plaintext
.
├── public/                     # Static assets (images, fonts, robots.txt, sitemap.xml)
│   ├── fonts/                  # Self-hosted font files
│   └── images/                 # Static images like logos, placeholders
├── src/
│   ├── app/                    # Next.js App Router: Routes, Layouts, Pages
│   │   ├── (main)/             # Route group for main site pages with shared layout
│   │   │   ├── about-us/
│   │   │   │   └── page.tsx    # /about-us
│   │   │   ├── contact-us/
│   │   │   │   └── page.tsx    # /contact-us
│   │   │   ├── insight/
│   │   │   │   ├── {article-slug}/
│   │   │   │   │   └── page.tsx # /insight/[article-slug]
│   │   │   │   └── page.tsx      # /insight (Insight list page)
│   │   │   ├── inventory/
│   │   │   │   ├── {item-id}/
│   │   │   │   │   └── page.tsx # /inventory/[item-id]
│   │   │   │   └── page.tsx      # /inventory (Inventory list page)
│   │   │   ├── mapping/
│   │   │   │   └── page.tsx    # /mapping
│   │   │   ├── solutions/
│   │   │   │   └── page.tsx    # /solutions
│   │   │   └── layout.tsx      # Shared layout for the (main) group (e.g., with Header, Footer)
│   │   ├── api/                # API Route Handlers (Backend For Frontend - BFF)
│   │   │   ├── contact-form/
│   │   │   │   └── route.ts    # Handles contact form submissions
│   │   │   ├── inventory/
│   │   │   │   ├── {item-id}/
│   │   │   │   │   └── route.ts  # Fetches specific inventory item data
│   │   │   │   └── route.ts      # Fetches inventory list, handles filtering/sorting
│   │   │   └── map-data/
│   │   │       └── route.ts      # Fetches OOH sites and POI data for the map
│   │   ├── globals.css         # Global styles, Tailwind CSS base, components, utilities imports and custom global styles
│   │   ├── layout.tsx          # Root layout (applies to all routes, includes <html>, <body>, theme provider)
│   │   └── page.tsx            # Homepage (/)
│   ├── components/             # Reusable UI Components (primary target for Storybook)
│   │   ├── layout/             # Components specific to page layout (e.g., Header, Footer, DrawerNav, StickyButtons)
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── DrawerNav.tsx
│   │   ├── maps/               # Map-specific components (e.g., MapWrapper, OOHMarker, POIMarker, MapFilterPanel, OOHSiteInfoPanel)
│   │   ├── inventory/          # Inventory-specific components (e.g., InventoryCard, InventoryFilterPanel, DetailGallery, SharingOptions)
│   │   ├── insight/            # Insight-specific components (e.g., InsightCard, ArticleRenderer, ReadingModeToggle)
│   │   ├── common/             # Generic, widely reusable UI elements (e.g., Button, Card, Modal, Input, Icon, ThreeSixtyViewerWrapper, SkeletonLoader)
│   │   └── animations/         # Reusable GSAP animation wrappers or components (e.g., TwinScrollWrapper, AnimatedSection)
│   ├── constants/              # Global application constants (e.g., API base URLs, default settings, enum-like objects)
│   │   └── index.ts
│   ├── contexts/               # React Context providers (e.g., ThemeProvider if managing theme logic beyond simple class toggling)
│   │   └── ThemeProvider.tsx   # Example: Manages theme state and provides it via context
│   ├── hooks/                  # Custom global React hooks (e.g., useMediaQuery, useLocalStorage, useIntersectionObserver)
│   │   └── useTheme.ts         # Hook to access and manage theme state
│   ├── lib/                    # Utility functions, helpers, third-party library configurations
│   │   ├── gsap.ts             # GSAP setup, ScrollTrigger configuration, and custom GSAP utility functions
│   │   ├── mapbox.ts           # Mapbox GL JS (or chosen alternative) setup, style configurations, and utility functions
│   │   └── utils.ts            # General utility functions (e.g., formatting, debounce, throttle)
│   ├── services/               # Client-side API interaction services (facades for /api routes or external APIs)
│   │   ├── inventoryService.ts
│   │   ├── mapService.ts
│   │   └── formService.ts      # For contact form submissions
│   ├── store/                  # Zustand state management stores
│   │   ├── uiStore.ts          # For global UI states like drawer open/close, current theme, active modal
│   │   ├── mapStore.ts         # For map filter states, selected OOH site, POI visibility, etc.
│   │   └── index.ts            # Barrel file to export all stores and related hooks
│   ├── styles/                 # Additional global styles or component-specific CSS files not suitable for Tailwind utilities or globals.css
│   ├── types/                  # Global TypeScript type definitions and interfaces
│   │   ├── api.d.ts            # Types for API request/response payloads
│   │   ├── map.d.ts            # Types related to map data (OOH sites, POIs)
│   │   ├── inventory.d.ts      # Types for inventory items and details
│   │   └── index.d.ts          # General shared types or re-exports
│   ├── content/                # Local content files for V1 (Markdown for Insights, JSON for initial Inventory/Map data)
│   │   ├── insights/           # Directory containing .md or .mdx files for articles
│   │   └── data/               # Directory containing .json or .geojson files for inventory, map points, POIs
├── .env.local                  # Local environment variables (ignored by Git)
├── .eslintrc.json              # ESLint configuration
├── .gitignore
├── next.config.mjs             # Next.js configuration file
├── package.json
├── postcss.config.js           # PostCSS configuration (for Tailwind CSS)
├── tailwind.config.ts          # Tailwind CSS configuration file
└── tsconfig.json               # TypeScript configuration
```

  - **Notes on Frontend Structure:**
      - The `src/app/` directory is central to Next.js App Router, defining routes via folder conventions. The `(main)` route group allows sharing a common layout (header, footer) for most user-facing pages.
      - `src/components/` is organized by feature domain (e.g., `maps`, `inventory`) or commonality (`common`, `layout`) to promote modularity and discoverability. This directory will be the primary target for Storybook documentation and development.
      - `src/store/` will house Zustand stores, typically one per major feature domain or cross-cutting concern (like UI state).
      - `src/services/` provide a clean abstraction layer for client-side data fetching logic, interacting primarily with the Next.js Route Handlers in `src/app/api/`.
      - For V1, `src/content/` will store local data files (Markdown for insights, JSON/GeoJSON for inventory and map data), which will be read by the Route Handlers or directly by Server Components. 