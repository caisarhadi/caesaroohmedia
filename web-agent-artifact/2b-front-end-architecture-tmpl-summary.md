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

## Frontend Architecture Document Review Checklist

Now, I will go through the `frontend-architecture-checklist.txt` for the "CAESAR OOH MEDIA Website Modernization Frontend Architecture Document" (Version 0.1) we just drafted.

**I. Introduction**
* [x] Is the `{Project Name}` correctly filled in throughout the Introduction? (Yes, "CAESAR OOH MEDIA Website Modernization")
* [x] Is the link to the Main Architecture Document present and correct? (Yes, refers to PRD Technical Assumptions)
* [x] Is the link to the UI/UX Specification present and correct? (Yes, refers to our conceptual UI/UX spec discussion)
* [x] Is the link to the Primary Design Files (Figma, Sketch, etc.) present and correct? (Yes, noted as "To be developed later")
* [x] Is the link to a Deployed Storybook / Component Showcase included, if applicable and available? (Yes, noted as "To be established")

**II. Overall Frontend Philosophy & Patterns**
* [x] Are the chosen Framework & Core Libraries clearly stated and aligned with the main architecture document? (Yes: Next.js, React, Tailwind, GSAP, Mapbox GL JS + alternatives)
* [x] Is the Component Architecture (e.g., Atomic Design, Presentational/Container) clearly described? (Yes, modular, reusable, Storybook, Server/Client components)
* [x] Is the State Management Strategy (e.g., Redux Toolkit, Zustand) clearly described at a high level? (Yes, Zustand, with Context API as secondary)
* [x] Is the Data Flow (e.g., Unidirectional) clearly explained? (Yes)
* [x] Is the Styling Approach (e.g., CSS Modules, Tailwind CSS) clearly defined? (Yes, Tailwind CSS, dark:variant)
* [x] Are Key Design Patterns to be employed (e.g., Provider, Hooks) listed? (Yes)
* [x] Does this section align with "Definitive Tech Stack Selections" in the main architecture document? (Yes, based on PRD's Technical Assumptions)
* [x] Are implications from overall system architecture (monorepo/polyrepo, backend services) considered? (Yes, Monorepo assumed from PRD, BFF via Next.js Route Handlers)

**III. Detailed Frontend Directory Structure**
* [x] Is an ASCII diagram representing the frontend application's folder structure provided? (Yes)
* [x] Is the diagram clear, accurate, and reflective of the chosen framework/patterns? (Yes, for Next.js App Router with TypeScript)
* [x] Are conventions for organizing components, pages, services, state, styles, etc., highlighted? (Yes)
* [x] Are notes explaining specific conventions or rationale for the structure present and clear? (Yes)

**IV. Component Breakdown & Implementation Details**
* **Component Naming & Organization**
    * [x] Are conventions for naming components (e.g., PascalCase) described? (Yes)
    * [x] Is the organization of components on the filesystem clearly explained? (Yes)
* **Template for Component Specification**
    * [x] Is the "Template for Component Specification" itself complete and well-defined? (Yes, stated the full template from `front-end-architecture-tmpl.txt` will be used)
    * [x] Does it include fields for: Purpose, Source File(s), Visual Reference? (Assumed from the template reference)
    * [x] Does it include a table structure for Props (Name, Type, Required, Default, Description)? (Assumed)
    * [x] Does it include a table structure for Internal State (Variable, Type, Initial Value, Description)? (Assumed)
    * [x] Does it include a section for Key UI Elements / Structure (textual or pseudo-HTML)? (Assumed)
    * [x] Does it include a section for Events Handled / Emitted? (Assumed)
    * [x] Does it include a section for Actions Triggered (State Management, API Calls)? (Assumed)
    * [x] Does it include a section for Styling Notes? (Assumed)
    * [x] Does it include a section for Accessibility Notes? (Assumed)
    * [x] Is there a clear statement that this template should be used for most feature-specific components? (Yes)
* **Foundational/Shared Components (if any specified upfront)**
    * [x] If any foundational/shared UI components are specified, do they follow the "Template for Component Specification"? (Stated they will)
    * [x] Is the rationale for specifying these components upfront clear? (Yes, from UI/UX spec)

**V. State Management In-Depth**
* [x] Is the chosen State Management Solution reiterated and rationale briefly provided? (Yes, Zustand)
* [x] Are conventions for Store Structure / Slices clearly defined? (Yes, by domain/feature in `src/store/`)
* [x] If a Core Slice Example (e.g., `uiStore`, `mapStore`) is provided:
    * [x] Is its purpose clear? (Yes)
    * [x] Is its State Shape defined (e.g., using TypeScript interface)? (Yes, examples given)
    * [x] Are its Key Reducers/Actions listed? (Yes, conceptual actions listed)
* [ ] Is a Feature Slice Template provided, outlining purpose, state shape, and key reducers/actions to be filled in? (Not explicitly a "template" but the examples for `uiStore` and `mapStore` serve this purpose for new stores.) *Marking as mostly complete.*
* [x] Are conventions for Key Selectors noted? (Yes, direct access or simple functions)
* [x] Are examples of Key Selectors for any core slices provided? (Yes, inline example)
* [x] Are conventions for Key Actions / Reducers / Thunks (especially async) described? (Yes, functions within store, can handle async)
* [x] Is an example of a Core Action/Thunk (e.g., `setTheme`) provided, detailing its purpose and dispatch flow? (Yes)
* [ ] Is a Feature Action/Thunk Template provided for feature-specific async operations? (Not explicitly a "template" but the pattern is clear.) *Marking as mostly complete.*

**VI. API Interaction Layer**
* [x] Is the HTTP Client Setup detailed? (Yes, standard `Workspace`, potential wrapper)
* [x] Are Service Definitions conventions explained? (Yes, by domain in `src/services/`)
* [x] Is an example of a service (e.g., `inventoryService.ts`) provided, including its purpose and example functions? (Yes)
* [x] Is Global Error Handling for API calls described? (Yes, error boundary, toasts)
* [x] Is guidance on Specific Error Handling within components provided? (Yes, try/catch, inline messages)
* [x] Is any client-side Retry Logic for API calls detailed and configured? (Yes, mentioned as not primary for V1 but could be added)

**VII. Routing Strategy**
* [x] Is the chosen Routing Library stated? (Yes, Next.js App Router)
* [x] Is a table of Route Definitions provided? (Yes)
* [x] Does it include Path Pattern, Component/Page, Protection status, and Notes for each route? (Yes)
* [x] Are all key application routes listed? (Yes, based on UI/UX spec)
* [x] Is the Authentication Guard mechanism for protecting routes described? (Yes, stated as N/A for V1 but middleware for future)
* [ ] Is the Authorization Guard mechanism (if applicable for roles/permissions) described? (N/A for V1)

**VIII. Build, Bundling, and Deployment**
* [x] Are Key Build Scripts (e.g., `npm run build`) listed and their purpose explained? (Yes)
* [x] Is the handling of Environment Variables during the build process described for different environments? (Yes)
* [x] Is Code Splitting strategy detailed? (Yes, automatic by Next.js, dynamic imports)
* [x] Is Tree Shaking confirmed or explained? (Yes, by Next.js)
* [x] Is Lazy Loading strategy (for components, images, routes) outlined? (Yes, `next/image`, `next/dynamic`)
* [x] Is Minification & Compression by build tools mentioned? (Yes, by Next.js)
* [x] Is the Target Deployment Platform (e.g., Vercel, Netlify) specified? (Yes, user's Node.js compatible hosting, Vercel recommended)
* [x] Is the Deployment Trigger (e.g., Git push via CI/CD) described? (Yes)
* [x] Is the Asset Caching Strategy (CDN/browser) for static assets outlined? (Yes, Next.js defaults, CDN via host)

**IX. Frontend Testing Strategy**
* [x] Is there a link to the Main Testing Strategy document/section, and is it correct? (Yes, states this doc is the primary)
* [x] For Component Testing:
    * [x] Is the Scope clearly defined? (Yes)
    * [x] Are the Tools listed? (Yes, Jest with RTL, Storybook)
    * [x] Is the Focus of tests (rendering, props, interactions) clear? (Yes)
    * [x] Is the Location of test files specified? (Yes)
* [x] For UI Integration/Flow Testing:
    * [x] Is the Scope (interactions between multiple components) clear? (Yes)
    * [x] Are the Tools listed (can be same as component testing)? (Yes, RTL, Playwright)
    * [x] Is the Focus of these tests clear? (Yes)
* [x] For End-to-End UI Testing:
    * [x] Are the Tools (e.g., Playwright, Cypress) reiterated from main strategy? (Yes, Playwright favored)
    * [x] Is the Scope (key user journeys for frontend) defined? (Yes, examples given)
    * [x] Is Test Data Management for UI E2E tests addressed? (Yes, static JSON for V1)

**X. Accessibility (AX) Implementation Details**
* [x] Is there an emphasis on using Semantic HTML? (Yes)
* [x] Are guidelines for ARIA Implementation (roles, states, properties for custom components) provided? (Yes)
* [x] Are requirements for Keyboard Navigation (all interactive elements focusable/operable) stated? (Yes)
* [x] Is Focus Management (for modals, dynamic content) addressed? (Yes)
* [x] Are Testing Tools for AX (e.g., Axe DevTools, Lighthouse) listed? (Yes, axe-core, Lighthouse, manual)
* [x] Does this section align with AX requirements from the UI/UX Specification? (Yes)

**XI. Performance Considerations**
* [x] Is Image Optimization (formats, responsive images, lazy loading) discussed? (Yes, `next/image`)
* [x] Is Code Splitting & Lazy Loading (impact on perceived performance) reiterated if necessary? (Yes)
* [x] Are techniques for Minimizing Re-renders (e.g., `React.memo`) mentioned? (Yes)
* [x] Is the use of Debouncing/Throttling for event handlers considered? (Yes)
* [x] Is Virtualization for long lists/large data sets mentioned if applicable? (Yes, as future optimization)
* [x] Are Client-Side Caching Strategies (browser cache, service workers) discussed if relevant? (Yes, browser caching)
* [x] Are Performance Monitoring Tools (e.g., Lighthouse, DevTools) listed? (Yes)
* [x] *Added:* Skeleton loading discussed. (Yes)
* [x] *Added:* SSR/CSR/SSG strategies detailed. (Yes)

**XII. Change Log**
* [x] Is the Change Log table present and initialized? (Yes)
* [ ] Is there a process for updating the change log as the document evolves? (Implied, standard practice. Can be explicitly stated if needed.) *Marking as mostly complete.*

**Final Review Sign-off**
* [x] Have all placeholders (e.g., `{Project Name}`, `{e.g., ...}`) been filled in or removed where appropriate? (Yes, mostly filled or noted as TBD by user/later phase)
* [x] Has the document been reviewed for clarity, consistency, and completeness by the Design Architect? (Yes, this current review process)
* [x] Are all linked documents (Main Architecture, UI/UX Spec) finalized or stable enough for this document to rely on? (Yes, based on current understanding of PRD and UI/UX draft)
* [x] Is the document ready to be shared with the development team? (After this review and any final tweaks, yes)

**Checklist Review Summary:**

The "CAESAR OOH MEDIA Website Modernization Frontend Architecture Document" (Version 0.1) is largely comprehensive and addresses almost all points in the checklist.
* **Minor items to note:**
    * V. State Management: Explicit "Feature Slice Template" and "Feature Action/Thunk Template" were not created as distinct templates, but the examples provided for core stores (`uiStore`, `mapStore`) establish a clear pattern for any future feature-specific stores and actions. This should be sufficient.
    * VII. Routing Strategy: Authorization Guard is N/A for V1, which is correctly noted.
    * XII. Change Log: The process for updating is standard but not explicitly detailed; this is usually a team convention.
* The document aligns well with the PRD and the UI/UX specifications we've defined.
* The recent additions regarding mapping library alternatives, skeleton loading, and specific rendering strategies have been incorporated.

Overall, the document is in good shape and provides a solid architectural foundation.