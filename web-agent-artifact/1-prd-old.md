# CAESAR OOH MEDIA Website Modernization Product Requirements Document (PRD)

**Version: 0.4**
**Date: May 17, 2025**

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
5.  **Mapping Page (Enhanced):**
    * Display an interactive map showing OOH inventory locations.
    * **Point of Interest (POI) Display:** For a selected OOH site or area, display nearby POIs (e.g., major retail stores, malls, public spaces, transport hubs) within a configurable radius (e.g., 500m, 1km). POIs should be visually distinct from OOH sites.
    * Users should be able to toggle POI visibility or filter by POI categories if data supports.
    * Clicking an OOH site marker shows detailed info (ID, type, size, illumination, link to full inventory listing).
    * Clicking a POI marker shows its name and type.
    * Robust filtering options for OOH inventory directly on the map (e.g., by media type, size, illumination, availability status if data exists).
    * Search functionality on the map (e.g., by address, landmark, or inventory ID).
    * Tools for map interaction: zoom, pan, possibly measuring distance (basic).
6.  **Inventory/Out of Home Listing Location Page (Enhanced Marketplace):**
    * **Comprehensive Listing View:**
        * Display OOH media inventory in a rich, filterable, and sortable list/grid format, akin to a real estate marketplace.
        * Each item in the list shows: primary photo, location name/address, media type, key specs (e.g., size, digital/static), price range (if applicable), availability status (if applicable).
        * Advanced Filtering: By media type, location (city, district, proximity to landmark), size, price range, illumination, digital/static, availability dates, specific features (e.g., video capability).
        * Advanced Sorting: By price, date added, size, location relevance.
    * **Detailed Individual Listing Page:**
        * Each inventory item links to a comprehensive detail page.
        * Content of detail page:
            * Multiple high-resolution images (with horizontal swiping gallery on mobile, potentially carousel on desktop).
            * Full specifications: exact dimensions, material, resolution (for digital), illumination details, operating hours, traffic data (if available).
            * Detailed location description and unique selling points.
            * Embedded map snippet showing its precise location and nearby POIs (potentially linking to the main Mapping page focused on this item).
            * Availability calendar or status indicator.
            * "Enquire Now" / "Request Quote" Call-to-Action (CTA) specific to the listing, potentially pre-filling the inventory ID in the contact form.
            * Option to download a PDF spec sheet (if available).
            * Social sharing options for the listing.
7.  **Contact Us Page:**
    * Display contact information: address, phone number(s), email address(es).
    * Include an embedded map showing the company's office location.
    * Provide a contact form for inquiries (submission via a third-party service like Formspree, or a self-hosted solution using Nodemailer via a Next.js API route).
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
    * Semantic HTML, editable meta tags per page, `sitemap.xml`, `robots.txt`.
12. **Content:**
    * Initial content (text, images, data for inventory/insights/map points) will be provided by CAESAR OOH MEDIA. Data for Mapping POIs and detailed Inventory will be extensive.

## Non Functional Requirements

1.  **Performance:**
    * Critical for data-heavy Mapping and Inventory pages. Efficient loading of map tiles, OOH site data, POI data. Fast filtering/sorting.
    * Optimized images, lazy loading, code splitting. Aim for Google PageSpeed Insights 90+ where feasible.
    * Smooth animations (GSAP, twin scrolling) without jank.
2.  **Usability:**
    * Intuitive navigation; drawer menu should be easy to use.
    * Vertical twin scrolling should enhance content consumption, not hinder it.
    * Horizontal swiping on mobile should feel natural.
    * All advanced features on Mapping and Inventory pages must be user-friendly.
    * The dark/light mode toggle must be easily discoverable and provide immediate visual feedback.
3.  **Data Management & Integrity:**
    * **POI Data:** Needs a reliable source and structure for map display and radius queries.
    * **Inventory Data:** Needs a robust structure for the marketplace level of detail. JSON might still work for V1 if well-structured and not excessively large, but a database backend should be considered for scalability. For initial launch, complex data will be in structured files.
4.  **Maintainability:**
    * Well-structured, clean, modular code prioritized across the system (see Technical Debt Approach in Architect Prompt).
    * Reusable components.
    * Content for "Insight" (Markdown) and Inventory data (JSON/Markdown initially) should be manageable by developers.
    * Clear structure for map data (GeoJSON or similar for map points).
5.  **Accessibility:**
    * Strive for WCAG 2.1 Level AA. Keyboard navigation. ARIA attributes.
    * Ensure the dark/light mode themes maintain sufficient color contrast.
    * Map features should be accessible where possible (e.g., list alternative for map data).
    * Drawer navigation must be fully keyboard accessible and screen-reader friendly.
    * Twin scrolling effects need careful implementation to not break accessibility.
6.  **Security:**
    * Served over HTTPS. Protection against common client-side vulnerabilities. Secure contact form submission.
7.  **Browser Compatibility:**
    * Latest two versions of major modern browsers: Chrome, Firefox, Safari, Edge.

## User Interaction and Design Goals

* **Overall Vision & Experience:** Sophisticated, technologically advanced, highly interactive, and user-centric. The site should feel like a premium tool for exploring OOH media. The use of GSAP should enhance the user experience with purposeful animations. The dark/light mode should offer two distinct, polished visual experiences.
* **Key Interaction Paradigms:**
    * **Drawer Navigation:** Smooth, animated opening/closing from the left.
    * **Vertical Twin Scrolling (Desktop):** Envisioned for pages with rich content or related elements (e.g., inventory detail pages, "Insight" articles). Exact application to be determined during the design phase.
    * **Horizontal Swiping (Mobile):** Primarily for image galleries in inventory detail pages, potentially for carousels.
    * **Mapping Page:** Highly interactive, fluid map controls, clear visual distinction between OOH sites and POIs, intuitive filtering and search.
    * **Inventory Marketplace:** Seamless Browse, filtering, and exploration of listings, similar to leading real estate or marketplace platforms.
* **Core Screens/Views (Conceptual):**
    * Homepage
    * About Us
    * Solutions
    * Insight (list page, article detail page)
    * Mapping (interactive map view)
    * Inventory (list page, item detail page/view)
    * Contact Us
* **Accessibility Aspirations:** Good legibility, keyboard navigation, high color contrast in both themes. Provide textual alternatives or summaries for complex map data where appropriate.
* **Branding Considerations (High-Level):** Incorporate CAESAR OOH MEDIA's existing logo, brand colors (ensure they adapt or have equivalents for dark/light themes), and any typography guidelines. The design should reinforce brand identity.
* **Target Devices/Platforms:** Web desktop primary, with mobile-first responsive design.

## Technical Assumptions

* **Repository & Service Architecture:**
    * **Monorepo:** Single repository.
    * **Service Architecture:** Next.js application. Will use SSG for mostly static pages and potentially SSR or ISR for pages with more dynamic content like "Insight" and "Inventory." Client-Side Rendering (CSR) will be significant for the "Mapping" page interactivity and parts of the "Inventory" page.
* **Languages/Frameworks/Libraries:**
    * Frontend: React (via Next.js, TypeScript recommended).
    * Styling: Tailwind CSS 4 (leveraging its dark mode variant: `dark:`).
    * Animations: GSAP.
    * State Management: Zustand (or similar, to be confirmed by Architect).
    * Emailing: Nodemailer (for contact form backend, via Next.js API routes).
    * Mapping: Advanced mapping library (e.g., Mapbox GL JS, to be confirmed by Architect).
* **Data Sources & Management (Critical for Enhanced Features):**
    * **OOH Inventory Data:** Comprehensive dataset (JSON or potentially a simple database API for V1).
    * **POI Data:** External data source (public dataset, OpenStreetMap, or commercial API if feasible). For V1, a curated static dataset might be used.
    * **Radius Search Logic:** Client-side or server-side.
* **Content Management:**
    * **Insight Page:** Markdown files.
    * **Inventory Page & Mapping Page Data:** Structured JSON/GeoJSON files for V1.
* **Dark/Light Mode Implementation:** Tailwind CSS `dark:` variant, JavaScript for toggle and `localStorage`.
* **Vertical Twin Scrolling:** Custom implementation (e.g., GSAP ScrollTrigger).
* **Hosting:** User has existing hosting. Compatibility with Node.js (for Next.js SSR/ISR/API routes) or advanced static hosting needs confirmation.

### Testing requirements

* Unit Testing: Jest & React Testing Library.
* End-to-End (E2E) Testing: Cypress or Playwright.
* Visual Regression Testing.
* Manual Testing.
* Performance Testing: PageSpeed Insights, Lighthouse.
* Accessibility Testing: Automated tools (Axe) + manual checks for both themes.

## Guidelines for Subsequent User Story Definition

When breaking down Epics into User Stories in subsequent planning phases (e.g., backlog refinement), the following guidelines, based on product owner recommendations, should be observed:

1.  **Edge Cases & Error Handling:** User Stories for specific features must include detailed consideration and explicit tasks for handling relevant edge cases and error scenarios. These will be further informed by the UI/UX specifications (anticipated in `2a-front-end-spec-tmpl.md` or similar document from the Design Architect).
2.  **Investigation/Spike Stories:** For complex features with high uncertainty (e.g., advanced GSAP animations, specific map query performance, novel POI data integration), consider creating initial "investigation" or "spike" stories to de-risk and clarify requirements before committing to full implementation stories.
3.  **Input & Responsibility Delineation:** Clearly state any inputs, data, or credentials required *from the user/product owner* (e.g., "User to provide Mapbox API Key," "User to provide final POI dataset") separately from tasks assigned to the *developer agent*. This reinforces clear responsibility and avoids blockers.

## Epic Overview

* **Epic 1: Foundation, Core Styling, Advanced Navigation & Homepage**
    * **Goal:** Establish a robust project foundation including initial setup, core tooling, essential configurations, CI/CD basics, testing frameworks, global styling (dark/light mode), advanced drawer navigation, foundational components for UX patterns (like vertical twin scrolling), and a functional homepage shell.
    * **Illustrative Foundational Tasks/Stories:**
        * Initialize Next.js project using `create-next-app --typescript`.
        * Create a comprehensive initial `README.md` file (including project overview, setup instructions, build/run commands, contribution guidelines, and technology stack).
        * Set up the Git repository, define branching strategy (e.g., Gitflow), and make the initial commit.
        * Install and configure core dependencies: Next.js, React, Tailwind CSS (with dark/light mode setup), GSAP.
        * Install and configure chosen state management library (e.g., Zustand).
        * Install and configure a mapping library (e.g., Mapbox GL JS or Leaflet - placeholder for Architect's choice).
        * Install and configure Nodemailer (for API routes, e.g., contact form backend).
        * Create initial common utility functions (e.g., date formatting, basic API client wrappers if needed).
        * Implement Dark/Light mode toggle functionality and persistence.
        * Implement responsive global Header (with Drawer Navigation from left) & Footer (theme-aware).
        * Develop Homepage layout with theme-aware sections and CTAs.
        * Set up the foundational CI/CD pipeline (e.g., linting, basic build on push to main branches).
        * Install and configure testing frameworks (Jest, React Testing Library for unit/integration; Playwright for E2E).
        * Define local test execution script(s) (e.g., `npm run test`, `npm run test:e2e`).
        * Create common test helpers, utilities, and mock setups.
* **Epic 2: Standard Informational Pages** (About Us, Solutions, Contact Us)
    * **Goal:** Develop About Us, Solutions, and Contact Us pages with responsive, theme-aware layouts and content.
* **Epic 3: Insight Section**
    * **Goal:** Implement the "Insight" section for displaying articles from Markdown files.
* **Epic 4: Advanced Inventory Marketplace - Core & Listing View**
    * **Goal:** Develop the core infrastructure and the main listing/filtering/sorting view for the OOH Inventory marketplace.
* **Epic 5: Advanced Inventory Marketplace - Detail Pages**
    * **Goal:** Create comprehensive and interactive detail pages for individual OOH inventory items, potentially applying vertical twin scrolling.
* **Epic 6: Advanced Mapping Page with POI Integration**
    * **Goal:** Implement the interactive Mapping page with OOH sites, POI display (with radius search), and advanced filtering/search on the map.
* **Epic 7: Finalization, Optimization & Launch Prep**
    * **Goal:** Populate final content, optimize for performance/SEO, conduct thorough testing across all features and themes, and prepare for launch.

## Key Reference Documents

This Product Requirements Document (PRD) is the primary reference document for this phase of the project. Future design documents (wireframes, mockups, UI specifications like `2a-front-end-spec-tmpl.md`) and technical architecture documents will become additional key references.

## Out of Scope Ideas Post V1 Launch

* Analytics Integration (e.g., Google Analytics, Plausible).
* User Accounts & Saved Searches/Listings for inventory marketplace.
* Direct Booking/Reservation System for OOH media.
* Full CMS Integration for all dynamic content.
* Dynamic, Real-Time Coverage Algorithm Visualization on Map.
* Highly Personalized Dashboard for Users.
* Integration with external advertising platforms.
* Admin Panel for managing inventory, insights, or map data directly.

## Change Log

| Version | Date       | Author      | Description                                                                                                                                                              |
| :------ | :--------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1     | 2025-05-14 | 2b PM Agent | Initial comprehensive draft.                                                                                                                                             |
| 0.2     | 2025-05-17 | 2b PM Agent | Updated functional pages, added dark/light mode. Revised Epics for Insight, Mapping, Inventory (basic MVP).                                                              |
| 0.3     | 2025-05-17 | 2b PM Agent | Significantly enhanced Mapping (POI, radius) & Inventory (marketplace, detailed pages). Added UX (twin scroll, drawer nav, horizontal swipe). Incorporated checklist feedback. |
| 0.4     | 2025-05-17 | 2b PM Agent | Incorporated Product Owner feedback: detailed illustrative tasks/stories for Epic 1, added "Guidelines for Subsequent User Story Definition." Clarified analytics not mandatory for V1. Generic README task. |

----- END PRD START CHECKLIST OUTPUT ------

## Checklist Results Report

**Project:** CAESAR OOH MEDIA Website Modernization
**PRD Version:** 0.4 (Content based on v0.3 assessment)
**Date of Review:** May 17, 2025

This report summarizes the assessment of the Product Requirements Document (PRD) against the Product Manager (PM) Requirements Checklist.

### Category Statuses

| Category                           | Status                          | Notes / Key Deferred Items for PRD Context                                                                                                                               |
| :--------------------------------- | :------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Problem Definition & Context    | PARTIAL                         | Core problem/goals defined. Detailed KPIs, personas, quantitative impact, competitive analysis deferred by user for later stages.                                         |
| 2. Scope Definition                | PARTIAL                         | Initial launch scope well-defined & refined. Min. success criteria, feedback mechanisms, learning goals, timeline deferred by user.                                        |
| 3. User Experience Requirements    | PASS (for PRD Stage)            | High-level UX vision, UI components, navigation, accessibility well-covered. Detailed user flows, edge cases, specific error handling strategy deferred to design phase.      |
| 4. Functional Requirements         | PASS                            | Comprehensive functional scope for initial launch defined. Requirements are clear, user-focused, and testable. Detailed user stories & ACs are the next phase of work.     |
| 5. Non-Functional Requirements     | PASS (for PRD Stage)            | Good foundation for NFRs (performance, tech constraints, security/privacy intent). Specifics like data volumes, detailed monitoring/availability metrics deferred.          |
| 6. Epic & Story Structure          | PASS                            | Clear Epics with value-focused goals. First Epic updated with more detail. Detailed story breakdown is the next phase, with new guidelines provided.                     |
| 7. Technical Guidance              | PASS                            | Solid initial technical guidance for architect, key complexities flagged. User provided specific tech debt approach (prioritize clean code, afford debt on Mapping POI tech). |
| 8. Cross-Functional Requirements   | PASS (for PRD Stage)            | Overview of data types, initial storage, key integrations. Specifics like data migration (if any), detailed quality rules, advanced operational plans deferred.             |
| 9. Clarity & Communication         | PASS                            | PRD is well-structured, versioned, uses clear language. Stakeholder input (from user) incorporated throughout. Formal communication/approval plans deferred.                 |

### Key Findings & Notes:

The PRD (Version 0.4) for the CAESAR OOH MEDIA Website Modernization project is comprehensive and provides a strong foundation for subsequent design and development phases. The iterative review process has significantly refined the scope and details. Product owner feedback regarding Epic 1 detail and future story guidelines has been incorporated.

**Key Strengths:**

* Clear vision for a modern, feature-rich website with advanced capabilities.
* Well-defined functional scope for the initial launch (V1).
* Strong emphasis on user experience and specific UI/UX patterns.
* Solid technical direction and identification of areas for architectural investigation.
* Clear guidelines for foundational setup and future story definition.

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
* Detailed Data Quality Rules, Retention Policies, Migration Plan (if any).
* Detailed Monitoring, Alerting, and Support Plans (Post-Launch).

**Recommendations based on Checklist Process:**

1.  **Proceed to Next Steps:** The PRD is in a good state to move towards detailed UI/UX design with a Design Architect, followed by technical architecture.

This Checklist Results Report serves as an artifact of our collaborative review.