**Prompt 1 (Revised for Full Page Coverage): For AI High-Fidelity Mockup Tools**

```text
Objective: Generate a comprehensive set of high-fidelity mockups for the ENTIRE CAESAR OOH MEDIA website, covering ALL pages defined in the site architecture. This platform is for an out-of-home advertising provider in Indonesia, serving as an informational hub, industry insight resource, and an OOH inventory exploration/marketplace tool. The design must embody a modern, sleek, clean, premium, highly usable, and technologically advanced aesthetic. Generate mockups for both light and dark themes. Target WCAG 2.1 AA accessibility in visual design choices (especially color contrast). Mobile-first responsive design is critical; provide views for mobile (e.g., 390px width) and desktop (e.g., 1440px width) for ALL listed pages.

Project Name: CAESAR OOH MEDIA Website Modernization

Key Visual & Branding Cues (to be interpreted and applied by the AI):
* **Overall Aesthetic:** Sophisticated, premium, technologically advanced, minimalist where appropriate to avoid clutter, user-centric.
* **Color Palette Inspiration (Conceptual - AI to propose specific shades for light/dark themes based on this intent):**
    * Primary: A strong, professional color (e.g., a deep blue, modern charcoal).
    * Secondary/Accent: A vibrant, modern accent color for CTAs and highlights (e.g., a bright teal, dynamic orange).
    * Neutrals: A sophisticated range of grays for text, backgrounds, and UI elements in both light and dark themes.
* **Typography Inspiration (Conceptual - AI to select specific modern, professional fonts):**
    * Headings: A clean, strong sans-serif font (e.g., similar to Montserrat, Inter).
    * Body Text: A highly legible sans-serif font (e.g., similar to Open Sans, Roboto).
    * Ensure clear typographic hierarchy and excellent readability.
* **Iconography Style:** Modern, clean, outline or subtly filled icons. SVGs preferred.
* **Imagery Style:** Placeholders should suggest high-quality, professional photography.

Global UI Elements (Consistent across ALL pages, design for both light & dark themes):
1.  Header: Company Logo, Menu Toggle Icon, Dark/Light Mode Toggle Switch. Sticky/responsive behavior.
2.  Drawer Navigation Menu: Slides from left (GSAP animated). Links: Homepage, About Us, Solutions, Insight, Mapping, Inventory, Contact Us. Active link indication. Accessible and dismissible.
3.  Footer: Compact Contact Form Snippet, Company Contact Details, Office Location Map Snippet, Social Media Links, Copyright. Responsive layout.
4.  Persistent Utility Buttons (Sticky Bottom Right): "Back to Top" and "Direct WhatsApp Chat."
5.  Themes: Generate distinct mockups for BOTH Light Theme and Dark Theme for all specified screens. Ensure high contrast (WCAG 2.1 AA).

Pages to Generate (High-Fidelity Mockups for Mobile & Desktop, Light & Dark Themes for EACH):

* **Homepage (`/`)**:
    * Hero section (visual, headline, CTA).
    * Brief company introduction.
    * Summary sections (cards/panels with CTAs) for: Solutions, Mapping, Inventory, Insight.
    * Conceptual layout for Vertical Twin Scrolling (desktop) on a section.
* **About Us Page (`/about-us`)**:
    * Sections for company mission, vision, values.
    * Section for company history/background.
    * Professional and clean layout.
* **Solutions Page (`/solutions`)**:
    * Detail the range of OOH solutions offered (e.g., using cards, feature lists, or descriptive sections).
    * Explain benefits of each solution.
    * Visually engaging layout.
* **Insight List Page (`/insight`)**:
    * Layout: Horizontally swipeable cards on mobile; grid or row layout on desktop.
    * Insight Card (for each article): Image placeholder, title, summary, publication date.
    * Breadcrumbs: `Home > Insight`.
* **Insight Article Detail Page (`/insight/{article-slug}`)**:
    * Content Area: Clean, readable layout for long-form text and embedded images.
    * Reading Mode Toggle: Clear button/switch.
    * Reading Mode View: Demonstrate UI change (e.g., adjusted fonts, spacing, simplified layout).
    * Breadcrumbs: `Home > Insight > {Article Title}`.
* **Mapping Page (`/mapping`)**:
    * Main View: Large interactive map display area (modern placeholder map style, example OOH/POI markers).
    * Controls: Search Bar, Filter Panel Access & UI (responsive), Map Interaction Tool icons.
    * Map Elements: Distinct OOH & POI markers. OOH Site Info Panel/Popup (details, thumbnail, embedded map snippet placeholder, 360 view button, link to full listing). POI Info Popup.
    * POI Controls: Toggle visibility, filter by category.
* **Inventory List Page (`/inventory` - Marketplace View)**:
    * Advanced Filtering/Sorting Panel: Responsive UI with elements for all filters/sorts.
    * Inventory Display: Grid/list toggle. Inventory Cards (photo, location, type, specs, price, status).
    * Skeleton loading state for cards.
    * Pagination controls.
    * Breadcrumbs: `Home > Inventory`.
* **Inventory Detail Page (`/inventory/{item-id}`)**:
    * Image Area: Prominent multi-image gallery (swipeable/carousel), 360-degree image viewer section.
    * Information Sections: Full Specifications, Location Description, Embedded Map Snippet, Availability.
    * CTAs & Sharing: "Enquire Now" CTA, Download PDF, Print, Email, Share to WhatsApp buttons/icons. General social sharing.
    * Breadcrumbs: `Home > Inventory > {Item Name/ID}`.
    * Conceptual Vertical Twin Scrolling (desktop).
* **Contact Us Page (`/contact-us`)**:
    * Contact Information display.
    * Embedded Map of office location (stylized placeholder).
    * Main Contact Form (Name, Email, Phone, Subject, Message, Submit). Clear success/error feedback states.

Interaction & Animation Notes (for Mockups):
* Drawer Navigation: Visualize smooth slide-in/out.
* Vertical Twin Scrolling (Desktop): Clearly mock up the effect on relevant pages.
* Loading States: Design skeleton loaders where specified. Subtle loading indicators for map/data.
* Feedback: Design all interactive states (hover, focus, active, disabled) for all interactive elements.

User Personas to Guide Design Decisions:
* Bro (Marketing Manager): Efficiency, clear CTAs.
* Sis (Media Planner): Comprehensive data, visual appeal, intuitive tools.
* Yopi (Internal User): Easy access to shareable info.

Generate these high-fidelity mockups adhering to a premium, modern, professional, and highly usable interface standard, ensuring both light and dark themes are polished, distinct, and cover ALL specified pages.
```

-----

**Prompt 2 (Revised for Full Page Coverage): For AI Frontend Code Generation Tools (like Vercel v0, Lovable/Bolt)**

```text
Objective: Generate Next.js (v14+ App Router, TypeScript) frontend code for ALL pages of the CAESAR OOH MEDIA website as defined in the project's Information Architecture. The site is an OOH advertising platform with informational content, an inventory marketplace, and advanced mapping. Prioritize creating a modular, performant, accessible (WCAG 2.1 AA), and responsive (mobile-first) application.

Key Technologies & Architectural Principles:
* Framework: Next.js (App Router, TypeScript).
* Styling: Tailwind CSS v4.x (utility-first, JIT, `dark:` variant for dark mode).
* State Management: Zustand for global/complex feature state.
* Animations: GSAP for sophisticated UI animations. Respect `prefers-reduced-motion`.
* Mapping: Mapbox GL JS (or a compatible alternative – assume Mapbox for now).
* Component Philosophy: Shadcn/ui-inspired (custom, composable, accessible components styled with Tailwind, built from scratch or headless primitives). Storybook for documentation (you generate code, not stories).
* Data Handling (V1): Local files. Next.js API Route Handlers (`/app/api/...`) serve data from `src/content/` (JSON for inventory/map, Markdown for insights).
* Rendering Strategy:
    * SSR: `/insight` (list & detail), `/inventory` (list & detail).
    * CSR: `/mapping`.
    * SSG/ISR: `/about-us`, `/solutions`, `/contact-us` (initial view).
* Contact Form Backend: Self-hosted Next.js API route (`/app/api/contact`) using Nodemailer.
* Directory Structure: Adhere to structure from Frontend Architecture Document v0.3 (e.g., `src/app`, `src/components`, `src/store`, etc.).

Global Elements & Features Implementation:
1.  Root Layout (`src/app/layout.tsx`): HTML structure, body, ThemeProvider for dark/light mode.
2.  Main Group Layout (`src/app/(main)/layout.tsx`): Includes `Header`, `Footer`, `DrawerNav`.
3.  Theme Management (`src/store/uiStore.ts`, ThemeProvider/hook): Zustand store for `currentTheme`, `localStorage` persistence, `<html>` class toggle.
4.  Header Component (`src/components/layout/Header.tsx`): Logo placeholder, Menu Toggle (for `uiStore.isDrawerNavOpen`), Dark/Light Mode Toggle Switch.
5.  Drawer Navigation (`src/components/layout/DrawerNav.tsx`): Controlled by `uiStore`, GSAP animated, accessible, links: Homepage, About Us, Solutions, Insight, Mapping, Inventory, Contact Us. Active link style.
6.  Footer Component (`src/components/layout/Footer.tsx`): Compact Contact Form Snippet (submits to `formService`), Contact Details, Office Map Snippet placeholder, Social Media Links, Copyright.
7.  Sticky Utility Buttons (`src/components/layout/StickyUtilityButtons.tsx`): "Back to Top", "Direct WhatsApp Chat".

Page Scaffolding & Key Component Generation (for ALL pages based on Site Map in UI/UX Spec v1.0 - `/`, `/about-us`, `/solutions`, `/insight`, `/insight/{slug}`, `/mapping`, `/inventory`, `/inventory/{id}`, `/contact-us`):

* **For each page listed above, generate the page file (e.g., `src/app/(main)/about-us/page.tsx`) and any unique, significant components primarily used on that page.**
* **Homepage (`src/app/(main)/page.tsx`)**: Sections for Hero, Intro, Summaries (Solutions, Mapping, Inventory, Insight) with `next/link` CTAs. GSAP Vertical Twin Scrolling placeholder.
* **About Us Page (`src/app/(main)/about-us/page.tsx`)**: Structure for mission, vision, values, history sections.
* **Solutions Page (`src/app/(main)/solutions/page.tsx`)**: Structure to detail OOH solutions and benefits.
* **Insight List Page (`src/app/(main)/insight/page.tsx` - SSR)**: Fetch summaries via `/api/insight/`. Display using `InsightCard.tsx` (responsive: horizontal swipe mobile). Breadcrumbs.
* **Insight Article Detail Page (`src/app/(main)/insight/[article-slug]/page.tsx` - SSR)**: Fetch content via `/api/insight/[article-slug]/`. `ArticleRenderer.tsx` for Markdown. "Reading Mode" toggle. Breadcrumbs.
* **Mapping Page (`src/app/(main)/mapping/page.tsx` - CSR `use client`)**: `MapWrapper.tsx` (for Mapbox GL JS). UI for Search, Filter Panel toggle. `MapFilterPanel.tsx`. Fetch data via `mapService.ts` from `/api/map-data/`. `OOHSiteInfoPanel.tsx` (details, map snippet, 360 view option). Zustand `mapStore.ts`.
* **Inventory List Page (`src/app/(main)/inventory/page.tsx` - SSR)**: Fetch list via `/api/inventory/` (server-side, with filter/sort params). `InventoryFilterPanel.tsx`. Display items via `InventoryCard.tsx`. Skeleton loading for cards. Pagination. Breadcrumbs.
* **Inventory Detail Page (`src/app/(main)/inventory/[item-id]/page.tsx` - SSR)**: Fetch item via `/api/inventory/[item-id]/`. `DetailGallery.tsx`. `ThreeSixtyViewerWrapper.tsx`. Specs display. Embedded `MapWrapper.tsx` snippet. "Enquire Now" CTA. `SharingOptions.tsx` (PDF, Print, Email, WhatsApp). Breadcrumbs.
* **Contact Us Page (`src/app/(main)/contact-us/page.tsx`)**: Main contact form (client validation, submit via `formService.ts` to `/api/contact`). Success/error feedback. Embedded map for office.

Key Reusable Components (scaffold in `src/components/common/` or feature folders):
* `Button.tsx`, `Modal.tsx`, `SkeletonLoader.tsx`, `Input.tsx` (and other form elements as needed, built accessibly).
* Specific components mentioned above like `Header.tsx`, `Footer.tsx`, `DrawerNav.tsx`, `MapWrapper.tsx`, `InventoryCard.tsx`, `InsightCard.tsx`, `ArticleRenderer.tsx`, `OOHSiteInfoPanel.tsx`, `DetailGallery.tsx`, `ThreeSixtyViewerWrapper.tsx`, `SharingOptions.tsx`.

API Route Handlers (Examples - generate basic structure):
* `src/app/api/inventory/route.ts` & `src/app/api/inventory/[item-id]/route.ts`: GET handlers reading from `inventory.json` (with filtering for list).
* `src/app/api/insight/route.ts` & `src/app/api/insight/[article-slug]/route.ts`: GET handlers reading from Markdown files.
* `src/app/api/map-data/route.ts`: GET handler for `map-ooh-sites.geojson` and `map-pois.geojson`.
* `src/app/api/contact/route.ts`: POST handler using Nodemailer (include SMTP env var placeholders). Basic request validation.

Generation Guidelines:
* Generate functional React components with TypeScript and Tailwind CSS.
* Include basic ARIA attributes for accessibility. Use `next/link` for navigation, `next/image` for images.
* Implement basic loading states (e.g., for API calls, skeleton components as specified).
* Provide clear comments for TODOs, complex logic, or areas needing further integration (e.g., "TODO: Integrate actual 360 library here", "TODO: Implement full filtering logic for inventory API", "TODO: Implement Reading Mode state and style changes").
* Code should be clean, readable, and follow Next.js App Router conventions.
* Assume type definitions exist in `src/types/` (e.g., `OOHInventoryItem`, `InsightArticle`, `POI`, `ContactFormPayload`).

This prompt aims for comprehensive scaffolding of the entire site structure and key functionalities. Human review and significant refinement will be necessary.
```

