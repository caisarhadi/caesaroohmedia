# CAESAR OOH MEDIA Website Modernization Product Requirements Document (PRD)

**Version: 0.5**
**Date: May 18, 2025**

## Goal, Objective and Context

* **Goal:** To create a cutting-edge, modern website for CAESAR OOH MEDIA, an out-of-home advertising media provider in Indonesia, that serves as a comprehensive informational hub, an industry insight resource, and a powerful OOH inventory exploration and marketplace tool.
* **Objective:** To develop a new website from scratch, replacing the previous WordPress site, using Node.js (via Next.js), React, Tailwind CSS 4, and GSAP. The site will feature a rich user experience, including advanced mapping capabilities with Point of Interest (POI) integration, a detailed OOH inventory marketplace, and sophisticated UI interactions like vertical twin scrolling and a drawer-style navigation.
* **Context:** The company owns the domain and hosting. This project aims to establish a strong digital presence that showcases technological advancement, improves user engagement, provides valuable tools for clients, and effectively markets its OOH inventory.

## Functional Requirements

1.  **Homepage:**
    * Display a compelling hero section.
    * Provide a brief introduction to CAESAR OOH MEDIA.
    * Include distinct summary sections for key site areas (Solutions, Mapping, Inventory, Insight), each presenting key information/hooks and a clear Call-to-Action (CTA) to navigate to the respective detailed page.
    * Easy navigation to other sections of the site (via global navigation).
2.  **About Us Page:**
    * Present the company's mission, vision, and values.
    * Share the company's history or background.
3.  **Solutions Page:**
    * Detail the range of out-of-home advertising solutions offered.
    * Explain the benefits of each solution.
4.  **Insight Page:**
    * Display a list of articles (e.g., white papers, industry insights) with titles, summaries, and publication dates.
    * Allow users to click through to read the full content of each article.
    * Articles should support formatted text and images.
    * For V1, articles will be managed as Markdown files within the project.
    * Include a "Reading Mode" toggle for enhanced readability.
5.  **Mapping Page (Enhanced):**
    * Display an interactive map showing OOH inventory locations.
    * **Point of Interest (POI) Display:** For a selected OOH site or area, display nearby POIs (e.g., major retail stores, malls, public spaces, transport hubs) within a configurable radius (e.g., 500m, 1km). POIs should be visually distinct from OOH sites.
    * Users should be able to toggle POI visibility or filter by POI categories if data supports.
    * Clicking an OOH site marker shows detailed info in a panel/popup (ID, type, size, illumination, link to full inventory listing, embedded map snippet, 360 view option).
    * Clicking a POI marker shows its name and type.
    * Robust filtering options for OOH inventory directly on the map (e.g., by media type, size, illumination, availability status if data exists).
    * Search functionality on the map (e.g., by address, landmark, or inventory ID).
    * Tools for map interaction: zoom, pan, measure distance, show nearby OOH/POI within radius.
6.  **Inventory/Out of Home Listing Location Page (Enhanced Marketplace):**
    * **Comprehensive Listing View:**
        * Display OOH media inventory in a rich, filterable, and sortable list/grid format, akin to a real estate marketplace, with skeleton loading for cards.
        * Each item in the list shows: primary photo, location name/address, media type, key specs (e.g., size, digital/static), price range (if applicable), availability status (if applicable).
        * Advanced Filtering: By media type, location (city, district, proximity to landmark), size, price range, illumination, digital/static, availability dates, specific features (e.g., video capability). Responsive filter panel.
        * Advanced Sorting: By price, date added, size, location relevance.
    * **Detailed Individual Listing Page:**
        * Each inventory item links to a comprehensive detail page.
        * Content of detail page:
            * Multiple high-resolution images (with horizontal swiping gallery on mobile/carousel on desktop) and a 360-degree image viewer.
            * Full specifications: exact dimensions, material, resolution (for digital), illumination details, operating hours, traffic data (if available).
            * Detailed location description and unique selling points.
            * Embedded map snippet showing its precise location and nearby POIs (potentially linking to the main Mapping page focused on this item).
            * Availability calendar or status indicator.
            * "Enquire Now" / "Request Quote" Call-to-Action (CTA) specific to the listing, pre-filling the inventory ID.
            * Option to download a PDF spec sheet and sharing options (Print, Email, WhatsApp).            
            * Social sharing options for the listing.
7.  **Contact Us Page:**
    * Display contact information: address, phone number(s), email address(es).
    * Include an embedded map of the company's office location.
    * Provide a main contact form.
    * Include a compact contact form snippet in the website footer.
8.  **Dark/Light Mode Toggle:**
    * A user-accessible toggle button/switch (likely in the header or a persistent UI element) to switch between dark and light themes for the entire website.
    * The user's preference should be remembered for subsequent visits (e.g., using `localStorage`).
    * All pages and components must adapt to the selected theme.
9.  **Navigation:**
    * **Drawer-Style Menu:** Main navigation menu (especially on mobile, and optionally on desktop for a cleaner look) slides out from the left side when a menu icon is clicked.
    * Clear header (with menu toggle, logo, dark/light mode switch) and footer.
10. **Responsive Design:**
    * The website must be fully responsive across desktops, tablets, and mobile phones. Consider horizontal swiping for relevant content on mobile (e.g., image galleries, card carousels).
11. **Search Engine Optimization (SEO) Basics:**
    * Semantic HTML, editable meta tags per page, `sitemap.xml` generation, `robots.txt` file.
12. **Content:**
    * Initial content (text, images, data for inventory/insights/map points) will be provided by CAESAR OOH MEDIA. Data for Mapping POIs and detailed Inventory will be extensive.

## Non Functional Requirements

1.  **Performance:**
    * Critical for data-heavy Mapping and Inventory pages. Aim for efficient loading of map tiles, OOH site data, and POI data. Ensure fast filtering and sorting operations.
    * Optimize images and assets. Implement code splitting and lazy loading strategies. Target Google PageSpeed Insights scores of 90+ for both desktop and mobile where feasible for the site's complexity.
    * Ensure smooth animations (GSAP, vertical twin scrolling) without jank or performance degradation.
2.  **Usability:**
    * Provide intuitive navigation, including the drawer menu and any in-page navigation.
    * Vertical twin scrolling should enhance content consumption on desktop and not introduce usability barriers.
    * Horizontal swiping on mobile for galleries or carousels should feel natural and responsive.
    * All advanced features on the Mapping and Inventory pages must be designed with user-friendliness as a priority.
    * The dark/light mode toggle must be easily discoverable and provide immediate visual feedback. The selected theme should persist across sessions.
3.  **Data Management & Integrity (for V1 using flat files):**
    * **POI Data:** Requires a well-structured and reliable source (curated static dataset for V1) for map display and radius queries. Data integrity must be maintained.
    * **Inventory Data:** Needs a robust and consistent structure for the marketplace level of detail. JSON files for V1 must be well-formed and manageable. Consider data validation scripts if manual editing is frequent.
4.  **Maintainability:**
    * Prioritize well-structured, clean, modular, and commented code across the entire system, as emphasized in the Technical Debt Approach (see Architect Prompt).
    * Develop reusable React components to ensure consistency and reduce redundancy.
    * Content for the "Insight" section (Markdown) and Inventory/Map data (JSON/GeoJSON for V1) should be structured in a way that is manageable for developers to update.
    * Ensure a clear structure for map data (e.g., GeoJSON for map points) and other local data files.
5.  **Accessibility:**
    * Strive for WCAG 2.1 Level AA compliance across the entire website.
    * Use semantic HTML5 elements appropriately to define page structure and content meaning.
    * Implement ARIA attributes where necessary to enhance accessibility for custom components and dynamic content.
    * Ensure all interactive elements are fully keyboard navigable and operable. Maintain a logical tab order.
    * Provide clear visual focus indicators for all interactive elements.
    * Implement effective focus management, especially for modals, drawer navigation, and dynamic UI updates.
    * Ensure both dark and light mode themes maintain sufficient color contrast ratios for text and UI elements.
    * Provide textual alternatives or list-based views for critical information presented on maps where feasible.
    * Ensure image galleries and 360-degree viewers are keyboard accessible and provide alternative text for images.
    * Forms should have correctly associated labels, and error messages should be programmatically linked to their respective fields.
    * GSAP animations should respect the `prefers-reduced-motion` media query. Animations should not cause usability impediments or trap focus.
6.  **Security:**
    * The entire website must be served over HTTPS.
    * Implement measures to protect against common client-side vulnerabilities (e.g., Cross-Site Scripting - XSS) by sanitizing user inputs if any are displayed, and using appropriate React practices.
    * Ensure secure submission and handling of data from the contact form, especially if personal information is collected. If using Next.js API routes with Nodemailer, ensure server-side validation and secure configuration.
7.  **Browser Compatibility:**
    * Ensure consistent functionality and appearance on the latest two stable versions of major modern web browsers: Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge.

## User Interaction and Design Goals

* **Overall Vision & Experience:** The website should project a sophisticated, technologically advanced, highly interactive, and user-centric image. It aims to feel like a premium tool for exploring OOH media. The use of GSAP should enhance the user experience with purposeful, smooth animations and transitions that contribute to a dynamic and fresh feel, without being overwhelming. Both dark and light modes should offer distinct, equally polished, and professional visual experiences.
* **Key Interaction Paradigms:**
    * **Drawer Navigation:** A primary navigation menu, especially for mobile and optionally for a clean desktop view, that slides out smoothly (animated with GSAP) from the left side of the screen when a menu icon is toggled. It should be easily dismissible.
    * **Vertical Twin Scrolling (Desktop):** This UX pattern is envisioned for specific desktop page layouts where displaying related content side-by-side enhances understanding or user experience (e.g., an inventory detail page might have specifications scrolling on one side while an image gallery or interactive map remains on the other; an "Insight" article could pair text with scrolling visual data). The exact application and behavior will be refined during the design phase, with careful consideration for usability and responsiveness (likely desktop-only).
    * **Horizontal Swiping (Mobile):** This interaction will be primarily used for image galleries within inventory detail pages, allowing intuitive Browse on touch devices. It may also be applied to carousels of featured items or insight cards on the homepage for mobile users.
    * **Mapping Page:** Users should experience highly interactive and fluid map controls (pan, zoom). There should be a clear visual distinction between OOH sites and POI markers. Filtering and search functionalities should be intuitive and responsive directly on the map interface.
    * **Inventory Marketplace:** The Browse experience should be seamless, allowing users to easily filter, sort, and explore listings, akin to leading real estate or marketplace platforms. Navigation between list view and detail views should be clear and efficient.
* **Core Screens/Views (Conceptual):**
    * Homepage
    * About Us
    * Solutions
    * Insight (list page, article detail page with reading mode)
    * Mapping (interactive map view with POI display and OOH info panels)
    * Inventory (list page with advanced filters, item detail page with rich media)
    * Contact Us
* **Accessibility Aspirations:** Beyond WCAG 2.1 AA compliance, the design should prioritize good legibility through font choices and line heights. All interactive elements, including custom ones like the drawer menu and twin scrolling regions, must be fully keyboard accessible and screen-reader friendly. Provide textual alternatives or summaries for complex map data where appropriate for users who cannot visually access the map.
* **Branding Considerations (High-Level):** The design must seamlessly incorporate CAESAR OOH MEDIA's existing logo, brand colors, and any established typography guidelines. Both dark and light themes must maintain brand consistency and feel. The overall design should reinforce the company's identity as a modern and professional media provider.
* **Target Devices/Platforms:** The primary target is web desktop experience, with a mobile-first responsive design approach to ensure excellent usability and visual presentation on smaller screens (tablets and mobile phones).

## Technical Assumptions

* **Repository & Service Architecture:**
    * **Monorepo:** A single repository will be used for the entire frontend project.
    * **Service Architecture:** The project will be developed as a Next.js application using the App Router. It will employ a hybrid rendering strategy: Server-Side Generation (SSG) for largely static pages (e.g., About Us, Solutions, Contact Us initial view), Server-Side Rendering (SSR) for pages with dynamic content that needs to be fresh on each request and SEO-friendly (e.g., Insight list/detail, Inventory list/detail), and Client-Side Rendering (CSR) for highly interactive components or pages (e.g., the main Mapping page, client-side filtering interactions on Inventory page). Next.js API Routes will serve as a Backend-For-Frontend (BFF).
* **Languages/Frameworks/Libraries:**
    * Frontend Core: React (v18+ via Next.js v14+, TypeScript recommended for the entire project).
    * Styling: Tailwind CSS (v4.x, configured for JIT mode and dark mode variant `dark:`).
    * Animations: GSAP (GreenSock Animation Platform) for complex UI animations and effects like twin scrolling.
    * State Management: Zustand for global and complex feature-specific client-side state.
    * Emailing (Backend for Contact Form): Nodemailer, used within a Next.js API Route.
    * Mapping: An advanced mapping library like Mapbox GL JS (preferred) or a suitable alternative (e.g., MapLibre GL JS, Leaflet), to be confirmed by the Architect.
* **Data Sources & Management (for V1):**
    * **OOH Inventory Data:** Comprehensive dataset managed via structured JSON files committed to the repository for V1.
    * **POI Data:** A curated static dataset of relevant POIs (e.g., GeoJSON or structured JSON) committed to the repository for V1. An external API might be considered post-V1 or if a lightweight, free/affordable option meets needs.
    * **Insight Articles:** Managed as Markdown (.md or .mdx) files within the repository.
    * **Radius Search Logic:** For POIs around OOH sites, this will likely be implemented on the client-side for V1 given static datasets, or on the server-side within an API route if data fetching for POIs is centralized.
* **Content Management (for V1):** Content will be developer-managed through updates to the flat files (Markdown, JSON) and redeployments.
* **Dark/Light Mode Implementation:** Will use Tailwind CSS's `dark:` variant, triggered by a class on the `<html>` element. This class will be toggled by JavaScript (using Zustand for state and `localStorage` for persistence).
* **Vertical Twin Scrolling:** Custom implementation likely using GSAP ScrollTrigger for controlling scroll behaviors of different sections.
* **Hosting:** The user has existing hosting. Its compatibility with Node.js (for Next.js SSR/ISR and API routes) needs to be confirmed. If only static hosting is available, features requiring a Node.js runtime (SSR, API routes for Nodemailer) would need alternative solutions (e.g., Vercel, Netlify, or similar platforms that natively support Next.js).

### Testing requirements

* **Unit Testing:** Jest and React Testing Library (RTL) for individual functions, React components, and custom hooks. Focus on testing logic, props, state changes, and event handling.
* **Component Integration Testing:** Using RTL to test interactions between related components or small component trees.
* **End-to-End (E2E) Testing:** Playwright for testing critical user flows across the application, simulating real user scenarios from start to finish.
* **Visual Regression Testing:** Consider tools like Percy or Applitools (or simpler snapshot testing with Jest/Playwright) for key pages and components to catch unintended UI changes, especially important given the focus on design and themes.
* **Manual Testing:** A structured, checklist-driven approach for User Acceptance Testing (UAT) and exploratory testing, covering all functional and non-functional requirements across different browsers and devices.
* **Performance Testing:** Regular use of Google PageSpeed Insights and Lighthouse reports during development and before launch. Profiling with browser DevTools for specific components like the map and inventory lists.
* **Accessibility Testing:** Combination of automated tools (e.g., Axe-core integrated with Jest/Playwright/Storybook) and manual checks (keyboard navigation, screen reader testing) to ensure WCAG 2.1 AA compliance.

## Guidelines for Subsequent User Story Definition

When breaking down Epics into User Stories in subsequent planning phases (e.g., backlog refinement), the following guidelines, based on product owner recommendations, should be observed:

1.  **Edge Cases & Error Handling:** User Stories for specific features must include detailed consideration and explicit tasks for handling relevant edge cases and error scenarios. These will be further informed by the UI/UX specifications (anticipated in a document like `2a-front-end-spec-tmpl.md` or similar, to be produced by the Design Architect).
2.  **Investigation/Spike Stories:** For complex features with high uncertainty (e.g., advanced GSAP animations, specific map query performance against chosen data structures, novel POI data integration methods), consider creating initial "investigation" or "spike" stories to de-risk and clarify requirements before committing to full implementation stories.
3.  **Input & Responsibility Delineation:** Clearly state any inputs, data, or credentials required *from the user/product owner* (e.g., "User to provide Mapbox API Key if chosen," "User to provide final curated POI dataset," "User to provide SMTP credentials for Nodemailer") separately from tasks assigned to the *developer agent*. This reinforces clear responsibility and helps avoid blockers.

## Epic Overview

* **Epic 1: Foundation, Core Styling, Advanced Navigation & Homepage**
    * **Goal:** Establish a robust project foundation including initial Next.js project setup with TypeScript, core tooling (ESLint, Prettier, Storybook), essential configurations, CI/CD basics, comprehensive testing frameworks, global styling (including dark/light mode with Tailwind CSS and Zustand), advanced drawer navigation (with GSAP), foundational components for UX patterns (like vertical twin scrolling), setup for key libraries (Mapping, Zustand, Nodemailer), initial API service modules, basic SEO structure, and a functional homepage shell with its specific summary section components.
    * **Key Frontend Implementation Details (derived from Design Architect notes):**
        * Initialize the Next.js project using `create-next-app --typescript`.
        * Set up the Git repository, define a branching strategy (e.g., Gitflow), and make the initial commit.
        * Install and configure ESLint and Prettier for code linting and formatting.
        * Create a comprehensive initial `README.md` file (including project overview, technology stack, detailed setup instructions for local development, build/run commands, testing instructions, and contribution guidelines).
        * Implement global layout structure (Root layout `src/app/layout.tsx`, Main group layout `src/app/(main)/layout.tsx`) including shell components for Header, Footer, and Drawer Navigation.
        * Develop ThemeProvider logic (potentially within `src/contexts/ThemeProvider.tsx` or directly using `uiStore`) for Dark/Light mode switching using Zustand for state management and `localStorage` for persistence, ensuring Tailwind CSS `dark:` variant works correctly across the application.
        * Establish Storybook setup and configuration for isolated component development, documentation, and visual testing.
        * Install and configure GSAP. Create initial utility functions or wrappers for common animation patterns if needed.
        * Set up the base configuration for the chosen mapping library (e.g., Mapbox GL JS or alternative, as decided by Architect) and create a basic wrapper component (e.g., `MapWrapper.tsx`).
        * Define and implement base Zustand stores (e.g., `uiStore.ts` for theme, drawer state, global modals).
        * Install and configure Nodemailer for use in Next.js API routes (e.g., for the contact form).
        * Create initial API service modules in `src/services/` (e.g., `formService.ts`) and foundational client-side data fetching utilities or an `apiClient.ts` wrapper.
        * Implement basic SEO setup foundation: structure for dynamic meta tags per page, `sitemap.xml` generation logic, and a basic `robots.txt` file.
        * Set up the frontend testing environment: Install and configure Jest and React Testing Library for unit/component testing; install and configure Playwright for E2E testing.
        * Define local test execution scripts in `package.json` (e.g., `npm run test`, `npm run test:e2e`, `npm run test:watch`).
        * Create common test helpers, utilities, and mock setups (e.g., for mocking API calls, Zustand stores, or browser environment for tests).
        * Set up the foundational CI/CD pipeline (e.g., GitHub Actions or similar) for linting, testing, and basic build on push/PR to main branches.
        * Develop foundational common UI components (e.g., Button, Card shells, basic Icons, form input wrappers) in Storybook.
        * Implement the specific Homepage summary section components with their respective CTAs.
        * Ensure the "Advanced drawer navigation" story specifies the use of GSAP for smooth animations and ARIA compliance for accessibility.
        * Ensure the "Twin scrolling foundation" story details the GSAP ScrollTrigger setup and considerations for responsiveness (desktop-only pattern).

* **Epic 2: Standard Informational Pages** (About Us, Solutions, Contact Us)
    * **Goal:** Develop the About Us, Solutions, and Contact Us pages with responsive, theme-aware layouts and content, ensuring forms and maps are functional.
    * **Key Frontend Implementation Details (derived from Design Architect notes):**
        * Stories for these pages must explicitly mention creating responsive layouts that adhere to both dark and light themes.
        * Implement the compact contact form snippet in the website footer, ensuring it integrates with `formService.ts`.
        * Implement the main contact form on the Contact Us page, ensuring robust validation and integration with `formService.ts` (which will utilize the Nodemailer backend via an API route).
        * Implement the embedded map (e.g., using the chosen mapping library or a simple iframe if appropriate) for the company's office location on the Contact Us page.

* **Epic 3: Insight Section**
    * **Goal:** Implement the "Insight" section for displaying articles dynamically from Markdown files, ensuring good readability, SSR for SEO, a modern presentation with swipeable cards on mobile, and a dedicated reading mode.
    * **Key Frontend Implementation Details (derived from Design Architect notes):**
        * Implement Server-Side Rendering (SSR) for both the Insight list page and individual article detail pages to ensure content is SEO-friendly and readily available.
        * Develop a robust Markdown rendering component (e.g., using `react-markdown` with plugins like `remark-gfm`) capable of handling formatted text, images, code blocks, and other common Markdown elements.
        * Implement a horizontal swipeable card layout for the Insight list page on mobile views for better navigability.
        * Implement the "Reading Mode" toggle feature and its associated UI changes (e.g., increased font size, wider line spacing, simplified layout).
        * Develop specific React components: `InsightCard.tsx` for the list view and `ArticleRenderer.tsx` for displaying the parsed Markdown content.
        * Create Next.js Route Handlers in `/app/api/insights/` (and potentially `/app/api/insights/{article-slug}/`) to read, parse, and serve Markdown content (or metadata for lists) from the `src/content/insights/` directory.

* **Epic 4: Advanced Inventory Marketplace - Core & Listing View**
    * **Goal:** Develop the core infrastructure and the main listing view for the OOH Inventory marketplace, featuring SSR, advanced filtering and sorting capabilities, and a smooth user experience with skeleton loading.
    * **Key Frontend Implementation Details (derived from Design Architect notes):**
        * Implement Server-Side Rendering (SSR) for the main inventory listing view for optimal SEO and initial load performance.
        * Design and implement the advanced filtering and sorting UI, ensuring the filter panel is responsive and user-friendly on all devices.
        * Integrate with `inventoryService.ts` for data fetching. This service will interact with corresponding API Route Handlers in `/app/api/inventory/`.
        * The API Route Handlers must implement logic for filtering and sorting the inventory list based on query parameters (data sourced from `inventory.json` for V1).
        * Implement skeleton loading (e.g., using Tailwind's `animate-pulse` or dedicated skeleton components) for `InventoryCard` components while data is being fetched or filtered.
        * Develop specific React components: `InventoryCard.tsx` for displaying individual items in the list, and `InventoryFilterPanel.tsx` for the filtering UI.

* **Epic 5: Advanced Inventory Marketplace - Detail Pages**
    * **Goal:** Create comprehensive and interactive SSR-enabled detail pages for individual OOH inventory items, featuring rich media (multiple images, 360 viewer), detailed specifications, an embedded map, and clear enquiry/sharing options.
    * **Key Frontend Implementation Details (derived from Design Architect notes):**
        * Implement Server-Side Rendering (SSR) for individual inventory detail pages.
        * Implement an image gallery with support for multiple high-resolution images (using horizontal swipe on mobile and potentially a carousel with thumbnails on desktop).
        * Integrate or develop a 360-degree image viewer component (e.g., a wrapper around a library like Panolens.js or React Pannellum).
        * Implement an embedded map snippet on the detail page showing the precise location of the OOH site and potentially nearby POIs (reusing map components developed in Epic 6).
        * Ensure the "Enquire Now" Call-to-Action button pre-fills the inventory ID into the contact form or a dedicated inquiry modal.
        * Implement functionality for PDF spec sheet download (if spec sheets are provided as assets) and sharing options (e.g., Print, Email, WhatsApp links).
        * Develop specific React components: `DetailGallery.tsx`, `ThreeSixtyViewerWrapper.tsx`, and components for displaying detailed specifications and handling sharing options.
        * Create a Next.js Route Handler in `/app/api/inventory/{item-id}/` to serve detailed data for a specific inventory item (from `inventory.json` for V1).

* **Epic 6: Advanced Mapping Page with POI Integration**
    * **Goal:** Implement the highly interactive Client-Side Rendered (CSR) Mapping page, allowing users to visualize OOH sites, explore nearby Points of Interest (POIs) within a radius, and utilize advanced filtering, search, and map interaction tools.
    * **Key Frontend Implementation Details (derived from Design Architect notes):**
        * Implement the main mapping interface as a Client-Side Rendered (CSR) page to ensure high interactivity and dynamic updates.
        * Integrate the chosen mapping library (e.g., Mapbox GL JS or an alternative like MapLibre GL JS/Leaflet).
        * Display OOH sites and POIs on the map using distinct, clearly styled markers.
        * Implement the OOH Site Info Panel/Popup that appears on marker click, showing details, an embedded map snippet (if different zoom/context), and an option to trigger a 360 view if available.
        * Implement robust filtering (e.g., by media type, availability) and search functionality (e.g., by address, OOH ID) that updates the map view dynamically.
        * Implement map interaction tools such as zoom controls, pan, measure distance (basic), and a feature to show nearby OOH sites or POIs within a user-defined or preset radius.
        * Integrate with `mapService.ts` for fetching OOH site and POI data, and `mapStore.ts` (Zustand) for managing map-related state (filters, selected items, viewport, POI visibility).
        * Develop specific React components: `MapWrapper.tsx` (to encapsulate map library logic), `OOHMarker.tsx`, `POIMarker.tsx`, `MapFilterPanel.tsx`, and `OOHSiteInfoPanel.tsx`.
        * Create Next.js Route Handler in `/app/api/map-data/` to serve OOH site and POI data (from local GeoJSON/JSON files for V1).

* **Epic 7: Finalization, Optimization & Launch Prep**
    * **Goal:** Populate all pages with final content and data, rigorously optimize the entire application for performance and SEO, conduct thorough testing across all features, devices, and themes, ensure full accessibility compliance, and prepare for a successful launch.
    * **Key Frontend Implementation Details (derived from Design Architect notes):**
        * The "Optimize for performance/SEO" story needs to include specific tasks such as: running bundle analysis (e.g., using `@next/bundle-analyzer`), performing thorough image optimization checks (compression, correct formats, responsive sizes via `next/image`), conducting Lighthouse audits for all key pages and addressing identified issues, and verifying that all SSR/SSG strategies are correctly implemented and effective.
        * The "Test thoroughly" story must ensure that all defined levels of testing (unit, component, integration with RTL; E2E with Playwright; manual UAT) are completed comprehensively. This includes testing all user flows, edge cases, dark/light themes, and responsiveness. Accessibility testing using tools like Axe and manual checks (keyboard, screen reader) must be part of this.
        * Conduct a final, dedicated review of accessibility compliance against WCAG 2.1 Level AA across all pages, components, and themes before launch.

## Key Reference Documents

* This Product Requirements Document (PRD) - Version 0.5.
* CAESAR OOH MEDIA Website Modernization Frontend Architecture Document (Version 0.3, May 17, 2025).
* UI/UX Specification Document (e.g., `2a-front-end-spec-tmpl.md` or similar - to be developed by Design Architect).
* Primary Design Files (Figma, Sketch, etc. - to be developed by Design Architect/User).

## Out of Scope Ideas Post V1 Launch

* Analytics Integration (e.g., Google Analytics, Plausible, using an environment variable like `NEXT_PUBLIC_ANALYTICS_ID`).
* User Accounts & Saved Searches/Listings for the inventory marketplace.
* Direct Booking/Reservation System for OOH media.
* Full CMS Integration for managing Insights, Inventory, or general page content.
* Dynamic, Real-Time Coverage Algorithm Visualization on the Map page.
* Highly Personalized Dashboard for Users (if user accounts were implemented).
* Integration with external advertising platforms or third-party ad-serving systems.
* Dedicated Admin Panel for managing website content, inventory, insights, or map data directly (beyond developer-managed flat files for V1).

## Change Log

| Version | Date       | Author      | Description                                                                                                                                                                                          |
| :------ | :--------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1     | 2025-05-14 | 2b PM Agent | Initial comprehensive draft.                                                                                                                                                                           |
| 0.2     | 2025-05-17 | 2b PM Agent | Updated functional pages, added dark/light mode. Revised Epics for Insight, Mapping, Inventory (basic MVP).                                                                                            |
| 0.3     | 2025-05-17 | 2b PM Agent | Significantly enhanced Mapping (POI, radius) & Inventory (marketplace, detailed pages). Added UX (twin scroll, drawer nav, horizontal swipe). Incorporated checklist feedback.                        |
| 0.4     | 2025-05-17 | 2b PM Agent | Incorporated Product Owner feedback: detailed illustrative tasks/stories for Epic 1, added "Guidelines for Subsequent User Story Definition." Clarified analytics not mandatory for V1. Generic README task. |
| 0.5     | 2025-05-18 | 2b PM Agent | Integrated detailed frontend technical tasks and refinements from Design Architect notes (derived from Frontend Architecture Document v0.3) into each PRD Epic. Updated Key Reference Documents. Date updated. |

----- END PRD START CHECKLIST OUTPUT ------

## Checklist Results Report

**Project:** CAESAR OOH MEDIA Website Modernization
**PRD Version:** 0.5 (Checklist assessment based on v0.3/v0.4 feature scope; v0.5 adds implementation detail within epics)
**Date of Review:** May 18, 2025 (original review date May 17)

This report summarizes the assessment of the Product Requirements Document (PRD) against the Product Manager (PM) Requirements Checklist.

### Category Statuses

| Category                           | Status                          | Notes / Key Deferred Items for PRD Context                                                                                                                                                           |
| :--------------------------------- | :------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Problem Definition & Context    | PARTIAL                         | Core problem/goals defined. Detailed KPIs, personas, quantitative impact, competitive analysis deferred by user for later stages.                                                                       |
| 2. Scope Definition                | PARTIAL                         | Initial launch scope well-defined & refined. Min. success criteria, feedback mechanisms, learning goals, timeline deferred by user.                                                                         |
| 3. User Experience Requirements    | PASS (for PRD Stage)            | High-level UX vision, UI components, navigation, accessibility well-covered. Detailed user flows, edge cases, specific error handling strategy deferred to design phase.                                   |
| 4. Functional Requirements         | PASS                            | Comprehensive functional scope for initial launch defined. Requirements are clear, user-focused, and testable. Detailed user stories & ACs are the next phase of work.                                  |
| 5. Non-Functional Requirements     | PASS (for PRD Stage)            | Good foundation for NFRs (performance, tech constraints, security/privacy intent). Specifics like data volumes, detailed monitoring/availability metrics deferred.                                        |
| 6. Epic & Story Structure          | PASS                            | Clear Epics with value-focused goals. First Epic now highly detailed with foundational tasks. Guidelines for future story definition added. Detailed story breakdown is the next phase.                    |
| 7. Technical Guidance              | PASS                            | Solid initial technical guidance for architect, key complexities flagged. User provided specific tech debt approach. Architect prompt now reflects more detailed Epic 1 foundation.                      |
| 8. Cross-Functional Requirements   | PASS (for PRD Stage)            | Overview of data types, initial storage (V1 flat files), key integrations. Specifics like data migration (if any), detailed quality rules, advanced operational plans deferred.                              |
| 9. Clarity & Communication         | PASS                            | PRD is well-structured, versioned, uses clear language. Stakeholder input (from user) incorporated throughout. Formal communication/approval plans deferred.                                               |

### Key Findings & Notes:

The PRD (Version 0.5) for the CAESAR OOH MEDIA Website Modernization project is now very comprehensive, providing a strong foundation for subsequent design and development phases. The iterative review process, including detailed inputs from the Product Owner and Design Architect (via frontend architecture notes), has significantly refined the scope and implementation details within the epics.

**Key Strengths:**

* Clear vision for a modern, feature-rich website with advanced capabilities.
* Well-defined functional scope for the initial launch (V1).
* Strong emphasis on user experience and specific UI/UX patterns.
* Solid technical direction, enriched with detailed frontend implementation tasks within each epic.
* Clear guidelines for foundational setup (Epic 1) and future story definition.

**Key Items Deferred by User (for later stages):**

* Detailed Business Metrics & KPIs.
* User Personas.
* Quantitative Problem Impact / Baselines.
* Formal Competitive Analysis Document.
* Detailed User Feedback Mechanisms (Post-Launch).
* Specific Learning Goals for Initial Launch.
* Project Timeline.
* Detailed User Flow Diagrams & Edge Case Mapping (Task for Design Architect).
* Detailed Error Handling Strategy (Task for Design Architect & Dev).
* Detailed Data Quality Rules, Retention Policies, Migration Plan (if any from WordPress).
* Detailed Monitoring, Alerting, and Support Plans (Post-Launch).

**Recommendations based on Checklist Process:**

1.  **Proceed to Next Steps:** The PRD is in a robust state to move towards detailed UI/UX design with a Design Architect, followed by technical architecture planning.

This Checklist Results Report serves as an artifact of our collaborative review.