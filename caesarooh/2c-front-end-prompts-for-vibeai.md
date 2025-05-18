**Prompt 1: For AI Wireframing Tools**

Project: CAESAR OOH MEDIA Website Modernization - Low-Fidelity Wireframes (Desktop & Mobile)

Objective: Generate a set of low-fidelity wireframes for a new website for CAESAR OOH MEDIA, an out-of-home advertising provider. The site should feel modern, clean, sleek, and be highly usable for clients ("Bro" - Marketing Manager, "Sis" - Media Planner) and internal staff ("Yopi"). Focus on layout, content hierarchy, key UI elements, and core user flows. Adhere to a mobile-first responsive design approach, showing both mobile and desktop layouts for key screens.

Key Global Elements (to be present or considered on most screens):
* Header: Placeholder for Logo, Menu Toggle Icon (for drawer), Dark/Light Mode Toggle Switch.
* Drawer Navigation: Slides from left. Links: Homepage, About Us, Solutions, Insight, Mapping, Inventory, Contact Us.
* Footer: Placeholder for Compact Contact Form Snippet, Company Contact Details, Office Location Map Snippet, Social Media Links (LinkedIn, Instagram), Copyright.
* Sticky Utility Buttons (Bottom Right): "Back to Top" and "Direct WhatsApp Chat."
* Dark/Light Mode: While these are low-fidelity, indicate where the toggle is. The overall wireframe aesthetic should be clean and theme-agnostic at this stage.

Core Screens to Wireframe (provide separate Mobile and Desktop views for each):

1.  Homepage:
    * Compelling hero section (placeholder for large visual/text).
    * Brief introduction to CAESAR OOH MEDIA.
    * Distinct summary sections for:
        * Solutions (key info/hook, CTA to Solutions page).
        * Mapping (key info/hook, CTA to Mapping page).
        * Inventory (key info/hook, CTA to Inventory page).
        * Insight (key info/hook, CTA to Insight page).
    * Clear overall navigation access.

2.  Mapping Page (Interactive Map View):
    * Main area for interactive map display.
    * Search bar (for address, landmark, OOH ID).
    * Filter panel/button (to access filters: media type, size, illumination, etc.).
    * Placeholder for map interaction tools (zoom, pan, measure distance, show nearby OOH/POI).
    * Popup/Panel for OOH Site Info (when a marker is clicked): Display basic info (ID, type, size), placeholder for embedded map snippet of site, placeholder for 360 view/Street View, link to full inventory listing.
    * Controls for POI visibility/filtering.

3.  Inventory List Page (Marketplace View):
    * Area for advanced filtering/sorting panel (by media type, location, size, price, availability, etc.).
    * Grid/list area to display OOH media inventory items.
    * Each item card: Placeholder for primary photo, location name/address, media type, key specs.
    * Pagination controls.
    * Consider skeleton loading appearance for item cards.

4.  Inventory Detail Page:
    * Prominent area for multiple high-resolution images (gallery with horizontal swiping on mobile, carousel on desktop).
    * Area for 360-degree image viewer / Street View.
    * Section for full specifications (dimensions, material, resolution, illumination, traffic data, etc.).
    * Detailed location description.
    * Embedded map snippet showing precise location & nearby POIs.
    * Availability indicator/calendar placeholder.
    * "Enquire Now" / "Request Quote" CTA (pre-fills OOH ID).
    * Options/buttons for: Download PDF spec sheet, Print, Email, Share to WhatsApp.
    * Social sharing options.
    * Breadcrumbs: Home > Inventory > {Item Name/ID}.

5.  Insight List Page:
    * Display articles as horizontally swipeable cards on mobile (grid/row on desktop).
    * Each card: Placeholder for image, title, summary, publication date.
    * Breadcrumbs: Home > Insight.

6.  Insight Article Detail Page:
    * Area for formatted article content (text, images).
    * Breadcrumbs: Home > Insight > {Article Title}.
    * Placeholder for "Reading Mode" toggle/button.

7.  Contact Us Page:
    * Display contact information (address, phone, email).
    * Embedded map showing company's office location.
    * Contact form for inquiries (Name, Email, Phone, Subject, Message, Submit button).

Interaction Notes for Wireframes:
* Drawer navigation should slide from the left.
* Horizontal swiping for mobile image galleries (Inventory) and Insight cards.
* Clearly indicate clickable areas/CTAs.
* Vertical Twin Scrolling (Desktop): Conceptualize where this might apply on content-rich pages (e.g., Homepage sections, Inventory Detail, Insight Article) by indicating scroll-linked animated sections side-by-side or in a sequence. This is more about denoting the *intent* for this interaction rather than visually designing the animation itself in lo-fi.

User Personas to keep in mind for usability:
* "Bro" (Marketing Manager): Values efficiency, direct communication, price negotiation.
* "Sis" (Media Planner): Values comprehensive data, intuitive exploration, visual presentation.
* "Yopi" (Internal User): Needs quick access to shareable (PDF, email, WhatsApp) inventory info.

Generate these wireframes focusing on clarity, structure, and flow, not on detailed visual design or color.

**Prompt 2: For AI Frontend Code Generation Tools (e.g., Vercel v0, Lovable.ai, or GPT-4 for code)**

Project: CAESAR OOH MEDIA Website Modernization - Frontend Code Generation

Objective: Generate frontend code for key pages and components of the CAESAR OOH MEDIA website. The site is an informational hub, industry insight resource, and OOH inventory exploration/marketplace tool.

Key Technologies & Architecture:
* Framework: Next.js (latest stable, v14+ with App Router, TypeScript).
* Styling: Tailwind CSS (v4.x), including `dark:` variant for dark mode.
* Animations: GSAP (GreenSock Animation Platform) for sophisticated interactions (e.g., vertical twin scrolling, drawer animations).
* State Management: Zustand for global and complex feature state. React Context for highly localized state if necessary.
* Mapping Library: Mapbox GL JS (or a compatible alternative like MapLibre GL JS if Mapbox has issues in Indonesia). Assume Mapbox GL JS for now.
* Component Structure: Modular, reusable components organized by feature/commonality, intended for documentation in Storybook. Follow a Shadcn/ui-inspired approach (composable, accessible components built from primitives, styled with Tailwind).
* Data Handling: For V1, data for Insights (Markdown) and Inventory/Map (JSON/GeoJSON) will be served from local files via Next.js Route Handlers (`/app/api/...`).
* Rendering Strategy:
    * SSR: Insight List & Detail, Inventory List & Detail pages.
    * CSR: Mapping Page (highly interactive).
    * SSG/ISR: Static pages like About Us, Solutions (if content is stable).
* Accessibility: Target WCAG 2.1 Level AA. Semantic HTML, ARIA attributes, keyboard navigability, focus management are crucial.
* Responsiveness: Mobile-first, with breakpoints for tablet and desktop.

Global Elements & Features:
* Dark/Light Mode: Implement a theme toggle (using Zustand for state, localStorage for persistence) that applies Tailwind's `dark:` variant. Default theme detection based on OS preference, then system time (day/night), with manual override.
* Drawer Navigation: Slides from left, triggered by a header icon. Links: Homepage, About Us, Solutions, Insight, Mapping, Inventory, Contact Us. Use GSAP for smooth animation. Must be accessible.
* Header: Contains Logo, Menu Toggle, Dark/Light Mode Switch.
* Footer: Contains a compact contact form snippet, company contact details, office location map snippet, social media links, copyright.
* Sticky Utility Buttons (Bottom Right): "Back to Top" and "Direct WhatsApp Chat."
* SEO Basics: Ensure pages can have editable meta tags.

Requesting Scaffolding/Generation for the following:

1.  **Root Layout (`src/app/layout.tsx`) & Main Group Layout (`src/app/(main)/layout.tsx`):**
    * Root: HTML structure, body, integration of ThemeProvider (managing dark/light mode application to `<html>` tag).
    * Main Layout: Includes Header, Footer, and Drawer Navigation components.

2.  **Homepage (`src/app/(main)/page.tsx`):**
    * Structure for: Hero section, intro text, summary sections (Solutions, Mapping, Inventory, Insight) with placeholder content and CTAs.
    * Conceptual setup for vertical twin scrolling effects on some sections using GSAP (desktop).

3.  **Mapping Page (`src/app/(main)/mapping/page.tsx`):**
    * Client-rendered page.
    * Integration of Mapbox GL JS (or a wrapper component `MapWrapper.tsx`).
    * Placeholders for: Search bar, Filter Panel UI, OOH/POI marker rendering logic, OOH Info Panel (including placeholders for embedded map snippet & 360 view), POI visibility controls.
    * State management for filters and map interactions using Zustand (`mapStore.ts`).
    * API calls via `mapService.ts` to `/app/api/map-data/route.ts` to fetch OOH sites & POI data (GeoJSON/JSON).

4.  **Inventory List Page (`src/app/(main)/inventory/page.tsx`):**
    * Server-rendered page (SSR).
    * Structure for filter/sort panel and a grid/list of `InventoryCard` components.
    * Implement skeleton loading for `InventoryCard`s using Tailwind's `animate-pulse`.
    * Data fetching from `/app/api/inventory/route.ts` (which reads local JSON, applies query param filters/sorting).

5.  **Inventory Detail Page (`src/app/(main)/inventory/{item-id}/page.tsx`):**
    * Server-rendered dynamic page (SSR).
    * Structure for: Image gallery (swipeable/carousel), 360-degree image viewer, full specifications, location description, embedded map snippet, availability, "Enquire Now" CTA, PDF/Share options (Download, Print, Email, WhatsApp).
    * Data fetching for a specific item from `/app/api/inventory/{item-id}/route.ts`.

6.  **Key Reusable Components (`src/components/...`):**
    * `Button.tsx`: Primary, secondary, icon variants. Tailwind styled, accessible.
    * `Card.tsx`: Basic structure for Inventory and Insight cards.
    * `DrawerNav.tsx`: Drawer panel, links, GSAP animation.
    * `Header.tsx`, `Footer.tsx`.
    * `InventoryCard.tsx`: Displays OOH item summary.
    * `MapWrapper.tsx`: Encapsulates Mapbox GL JS initialization and core logic.
    * `OOHSiteInfoPanel.tsx`: Panel to show OOH details on map click.
    * `360Viewer.tsx`: Wrapper for a 360 image viewing library (placeholder for library choice, but structure the component).

7.  **Zustand Stores (Example Structure):**
    * `uiStore.ts`: For `isDrawerNavOpen`, `currentTheme`, `activeModal`. Include actions to toggle/set these.
    * `mapStore.ts`: For map `filters`, `selectedOOHSiteId`, `isPOIVisible`.

8.  **API Route Handler Example (`src/app/api/inventory/route.ts`):**
    * A GET handler that reads from a local `inventory.json` file, supports basic filtering/sorting based on URL query parameters, and returns a JSON response.

General Guidelines for Code Generation:
* Use TypeScript for all `.ts` and `.tsx` files.
* Adhere to clean code principles: readability, maintainability.
* Ensure components are functional and use React Hooks.
* Generate basic ARIA attributes for interactive elements.
* Provide comments for complex logic or TODOs where specific data/library integration is pending.
* Structure components to be easily integrated into Storybook later.
* Assume data shapes from previous UI/UX discussions (e.g., OOH inventory items have ID, type, size, location, images, specs, etc.).

This prompt aims to scaffold the application structure and key features. The generated code will require review, refinement, and integration of actual data and third-party libraries.