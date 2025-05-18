## Identify & Summarize Epic/Story Impacts (Frontend Focus)

Based on the "CAESAR OOH MEDIA Website Modernization Frontend Architecture Document" (Version 0.1, dated May 17, 2025), here's a summary of potential impacts on existing epics/user stories, or identification of new technical tasks for the frontend. The original PRD already has a good "Epic Overview," so these points will primarily be technical sub-tasks or considerations within those epics.

**General Frontend Technical Tasks (Applicable across multiple Epics):**

* **New Story/Task:** Setup base Next.js project with TypeScript, ESLint, Prettier, and Tailwind CSS (v4.x) configuration.
* **New Story/Task:** Implement global layout structure (Root layout, Main group layout) including Header, Footer, and Drawer Navigation shell components.
* **New Story/Task:** Develop ThemeProvider/logic for Dark/Light mode switching using Zustand and localStorage, ensuring Tailwind `dark:` variant works correctly.
* **New Story/Task:** Establish Storybook setup and configuration for component development and documentation.
* **New Story/Task:** Configure GSAP and create initial utility functions/wrappers if needed.
* **New Story/Task:** Setup base mapping library (Mapbox GL JS or alternative) configuration and wrapper component.
* **New Story/Task:** Define and implement base Zustand stores (e.g., `uiStore`).
* **New Story/Task:** Create initial API service modules and client-side data fetching utilities.
* **New Story/Task:** Implement basic SEO setup (meta tags per page, sitemap.xml, robots.txt foundation).
* **New Story/Task:** Setup frontend testing environment (Jest, React Testing Library, Playwright).

**Impacts/Refinements within PRD Epics:**

**Epic 1: Foundation, Core Styling, Advanced Navigation & Homepage**
* **Refinement:** "Global styling (dark/light mode foundation)" story needs to detail the implementation using Tailwind CSS `dark:` variant and Zustand for state management.
* **Refinement:** "Advanced drawer navigation" story should specify the use of GSAP for smooth animations and ensure ARIA compliance.
* **Refinement:** "Twin scrolling foundation" story needs to detail the GSAP ScrollTrigger setup and considerations for responsiveness (desktop-only).
* **New Technical Task:** Develop foundational common UI components (Button, Card shells, basic Icons) in Storybook.
* **New Technical Task:** Implement the specific Homepage summary section components with CTAs.

**Epic 2: Standard Informational Pages (About Us, Solutions, Contact Us)**
* **Refinement:** Stories for these pages should explicitly mention creating responsive layouts adhering to the dark/light themes.
* **New Technical Task:** Implement the compact contact form snippet in the footer and the main contact form on the Contact Us page, including integration with `formService.ts` (e.g., for Formspree).
* **New Technical Task:** Implement the embedded map for the company's office location on the Contact Us page.

**Epic 3: Insight Section**
* **Refinement:** "Implement the 'Insight' section" story needs to detail:
    * SSR for the list and detail pages.
    * Markdown rendering component.
    * Horizontal swipeable card layout for the list page (mobile).
    * Implementation of the "Reading Mode" toggle and its UI.
* **New Technical Task:** Develop `InsightCard` and `ArticleRenderer` components.
* **New Technical Task:** Create Next.js Route Handlers in `/app/api/insights/` to serve Markdown content.

**Epic 4: Advanced Inventory Marketplace - Core & Listing View**
* **Refinement:** Story needs to detail:
    * SSR for the listing view.
    * Implementation of advanced filtering and sorting UI (responsive design for filter panel).
    * Integration with `inventoryService.ts` and corresponding API Route Handlers for data fetching and filtering/sorting logic.
    * Implementation of skeleton loading for `InventoryCard` components.
* **New Technical Task:** Develop `InventoryCard`, `InventoryFilterPanel` components.
* **New Technical Task:** Create Next.js Route Handlers in `/app/api/inventory/` to serve inventory list data, including filtering/sorting logic based on query parameters from `inventory.json`.

**Epic 5: Advanced Inventory Marketplace - Detail Pages**
* **Refinement:** Story needs to detail:
    * SSR for detail pages.
    * Implementation of image gallery (horizontal swipe/carousel) and 360-degree image viewer.
    * Embedded map snippet showing precise location and POIs (reusing map components).
    * "Enquire Now" CTA pre-filling inventory ID in the contact form.
    * Functionality for PDF spec sheet download/sharing options (Print, Email, WhatsApp).
* **New Technical Task:** Develop `DetailGallery`, `360Viewer` wrapper, and components for spec display and sharing options.
* **New Technical Task:** Create Next.js Route Handler in `/app/api/inventory/{item-id}/` to serve detailed inventory item data from `inventory.json`.

**Epic 6: Advanced Mapping Page with POI Integration**
* **Refinement:** Story needs to detail:
    * CSR for the interactive map.
    * Integration of the chosen mapping library (Mapbox GL JS or alternative).
    * Display of OOH sites and POIs with distinct markers.
    * Implementation of the OOH Site Info Panel/Popup (including embedded map snippet and 360 view option).
    * Robust filtering and search functionality directly on the map.
    * Map interaction tools (zoom, pan, measure distance, show nearby OOH/POI within radius).
    * Integration with `mapService.ts` and `mapStore.ts` (Zustand) for state management.
* **New Technical Task:** Develop `MapWrapper`, `OOHMarker`, `POIMarker`, `MapFilterPanel`, `OOHSiteInfoPanel` components.
* **New Technical Task:** Create Next.js Route Handler in `/app/api/map-data/` to serve OOH site and POI data from GeoJSON/JSON files.

**Epic 7: Finalization, Optimization & Launch Prep**
* **Refinement:** "Optimize for performance/SEO" story needs to include tasks like bundle analysis, image optimization checks, Lighthouse audits, and ensuring all SSR/SSG strategies are correctly implemented.
* **Refinement:** "Test thoroughly" should ensure all levels of testing (unit, component, integration, E2E, accessibility) are completed as per the testing strategy.
* **New Technical Task:** Final review of accessibility compliance (WCAG 2.1 AA) across all pages and themes.

**Summary Statement:**

The defined frontend architecture provides a robust, modern, and scalable foundation using Next.js, React, Tailwind CSS, GSAP, and Zustand. Key impacts on epics involve detailing the implementation of specific rendering strategies (SSR for content-heavy Insight/Inventory, CSR for interactive Mapping), component development within a Storybook environment, state management with Zustand, and clear API interaction patterns via Next.js Route Handlers. New technical tasks primarily revolve around setting up the core project structure, developing shared components, implementing specific UI features like the 360 viewer and advanced map interactions, and ensuring thorough testing and optimization across all defined epics. The choice of mapping libraries and the handling of local data for V1 are also key considerations.

---

**Immediate Next Steps (Leveraging Our Outputs):**

1.  **Visual Design - Wireframing & Mockups:**
    * **Action:** Use **Prompt 1 (For AI Wireframing Tools)** with your chosen AI wireframing tool(s).
    * **Goal:** Generate the initial low-fidelity wireframes for both desktop and mobile views of the key screens we identified.
    * **Process:**
        * Iterate on the AI-generated wireframes, refining layouts, content hierarchy, and flow until they align with the project vision.
        * Once low-fidelity wireframes are approved, proceed to create high-fidelity mockups. This is where you'll apply the detailed branding (colors, typography, iconography – which you mentioned will be developed with separate AI tools or processes) and define the precise look and feel for both light and dark themes, and responsive states.
        * Ensure the mockups visually represent the interactive elements, including how GSAP animations (like twin scrolling) and 360-degree viewers will integrate.

2.  **Content & Data Preparation (V1):**
    * **Action:** Begin compiling and structuring the initial content.
    * **Goal:** Have ready-to-use data for the first version of the website.
    * **Process:**
        * Finalize text content for pages like "About Us," "Solutions," etc.
        * Structure the OOH inventory data into the `inventory.json` file as per the fields needed for the listing and detail pages.
        * Prepare the map data (OOH sites, POIs) as GeoJSON or structured JSON files (`map-data.json`).
        * Write the initial "Insight" articles as Markdown files.

3.  **Frontend Development - Scaffolding & Core Setup:**
    * **Action:** Use **Prompt 2 (For AI Frontend Code Generation Tools)** with your chosen AI code generation platform (e.g., Vercel v0, Lovable.ai, GPT-4).
    * **Goal:** Generate the initial scaffolding for your Next.js application, including page structures, key components, services, and store outlines based on the architecture we defined.
    * **Process:**
        * Set up the Next.js project with TypeScript, Tailwind CSS, ESLint, etc.
        * Critically review and refine the AI-generated code. It will provide a starting point but will likely need adjustments for correctness, completeness, and adherence to best practices.
        * Establish the core project structure, implement the global layout (Header, Footer, DrawerNav), and the dark/light mode theme switching mechanism.
        * Set up Storybook for component development.
        * Integrate GSAP and configure Zustand stores.

**Following these initial steps, the broader development pipeline would continue with:**

4.  **Iterative Frontend Development:**
    * Develop components in Storybook, focusing on reusability and accessibility.
    * Implement the pages (Mapping, Inventory, Insight, etc.) based on the UI/UX specs, frontend architecture, and visual designs.
    * Integrate data from the prepared local files via Next.js Route Handlers.
    * Implement animations and interactions using GSAP.

**What you should do next in the overall BMAD pipeline, from my perspective as the "Design Architect" concluding this phase, would be:**

1.  **Disseminate the Artifacts:**
    * Share the **UI/UX Specification document (full version)** with your UI designers, UX designers, visual designers, and content creators.
    * Share the **Frontend Architecture Document (full version)** with your frontend developers, backend developers (especially those who might build or integrate with the Next.js API routes), QA engineers, and any other technical leads or architects in your pipeline.
    * Provide the **AI Prompts** to the respective teams or individuals who will be using AI tools for wireframing or code generation.

2.  **Initiate Visual Design (UI Design Phase):**
    * The UI/UX Specification is the direct input for this.
    * Start with **low-fidelity wireframes** (using the AI prompt or manually) to establish layouts for all key screens (mobile and desktop).
    * Iterate on wireframes based on internal reviews.
    * Proceed to **high-fidelity mockups**, incorporating the branding elements (which you mentioned will be developed, possibly with other AI tools) and detailing the visual appearance of both light and dark themes, component states, responsive adaptations, and conceptualizing animations.

3.  **Content Gathering and Structuring (Parallel Activity):**
    * Finalize all website copy, image assets, and the initial V1 data for insights (Markdown), inventory (JSON), and map points (GeoJSON). This needs to align with the data models specified.

4.  **Frontend Development Kick-off:**
    * **Environment Setup:** The frontend development team can start setting up the Next.js project environment based on the Frontend Architecture Document (TypeScript, Tailwind CSS, Storybook, Zustand, GSAP, etc.).
    * **Core Scaffolding:** Use the AI Code Generation prompt to generate initial code for layouts, core components, and page structures. This generated code will need **thorough review and refinement** by developers.
    * **Component Development in Storybook:** Begin building out the foundational UI components identified, focusing on reusability, accessibility, and styling with Tailwind CSS, as per the Shadcn/ui-inspired philosophy.
    * **Implement Global Features:** Work on the global layout, header, footer, drawer navigation (with GSAP animations), and the dark/light mode theme switching mechanism.

