START Design Architect UI/UX Specification Mode Prompt ------

## Prompt for Design Architect (UI/UX Specification Mode)

**Objective:** Elaborate on the UI/UX aspects of the product defined in this PRD for CAESAR OOH MEDIA Website Modernization.
**Mode:** UI/UX Specification Mode
**Input:** This completed PRD document (Version 0.3).
**Key Tasks:**
1.  Review the product goals, functional requirements, user interaction goals (including drawer navigation, vertical twin scrolling, horizontal swiping), dark/light mode, and any UI-related notes herein.
2.  Collaboratively define detailed user flows for all key sections, especially for the enhanced Mapping and Inventory Marketplace pages, including edge cases.
3.  Create wireframes (low or high fidelity) and conceptual mockups/descriptions for core screens and UI components, including the responsive behavior and adaptation for dark/light themes.
4.  Specify usability requirements in detail, including error handling and feedback mechanisms.
5.  Develop or populate a `front-end-spec-tmpl.txt` document (or similar UI specification document) detailing all UI components, interaction patterns, theme specifications, and animation behaviors (GSAP usage).
6.  Ensure that this PRD is updated or clearly references the detailed UI/UX specifications derived from your work, so that it provides a comprehensive foundation for subsequent architecture and development phases.

Please guide the user through this process to enrich the PRD with detailed UI/UX specifications.

----- END Design Architect UI/UX Specification Mode Prompt START Initial Architect Prompt ------

## Initial Architect Prompt

Based on our discussions and requirements analysis for the **CAESAR OOH MEDIA Website Modernization (Version 0.3)**, I've compiled the following technical guidance to inform your architecture analysis and decisions to kick off Architecture Creation Mode:

### Technical Infrastructure

* **Repository & Service Architecture Decision:** Monorepo with Next.js. Utilize appropriate rendering strategies: SSG for largely static content, SSR/ISR for content like Insights/Inventory if frequently updated, CSR for highly interactive elements (Map, Inventory filters).
* **Starter Project/Template:** New Next.js project, likely with TypeScript.
* **Hosting/Cloud Provider:** User has existing hosting. Must support Node.js for Next.js (if SSR/ISR is used) or at least modern static site hosting with potential for serverless functions (for contact forms, etc.).
* **Frontend Platform:** React (via Next.js, TypeScript recommended), Tailwind CSS 4 (configured for dark mode), GSAP.
* **Mapping Library:** Decision needed (e.g., Mapbox GL JS, Leaflet). Mapbox GL JS is strongly recommended due to needs for custom data layers (OOH sites, POIs), advanced filtering, and styling capabilities. Consider features, licensing, and ease of integration for displaying custom GeoJSON data and complex interactivity for V1.
* **State Management:** A robust client-side solution (e.g., Zustand, Jotai, Redux Toolkit) will likely be necessary for managing state in complex Mapping and Inventory UIs.
* **Backend Platform:** Primarily Next.js backend capabilities (API routes). May need simple serverless functions for specific tasks like contact form submissions if not using a third-party service. For POI data, if an external API is used, these routes might act as a proxy.
* **Database Requirements:** While V1 might use structured flat files (JSON, GeoJSON) for OOH inventory and curated POIs, the complexity of a "marketplace" and detailed POI integration suggests that a proper database (e.g., PostgreSQL with PostGIS for geo-queries, or a NoSQL document DB) and a backend API should be considered for scalability and data management beyond the initial launch, or even for V1 if data volume/complexity is very high. *Architect to evaluate feasibility of flat files vs. simple DBaaS for V1.*

### Key Features & Technical Challenges to Address

* **Advanced Mapping Page:**
    * **Data Sources:** Identify and integrate OOH inventory data and POI data (curated dataset or API). Plan for data structure and potential updates.
    * **Interaction:** Design and implement OOH site selection, POI display within radius (with efficient spatial querying if dynamic), advanced map filters, search functionality.
    * **Performance:** Optimize rendering of potentially many map markers and POIs.
* **Inventory Marketplace:**
    * **Data Modeling:** Design a comprehensive data structure for detailed OOH listings suitable for complex filtering and sorting.
    * **UI/UX:** Implement rich list views, advanced filtering/sorting logic, and detailed individual listing pages (with galleries, specs, map snippets).
    * **Performance:** Ensure fast loading and interaction despite rich content.
* **UX Enhancements Implementation:**
    * **Drawer Navigation:** Architect for accessible and smooth left-side drawer.
    * **Vertical Twin Scrolling:** Plan for implementation, considering performance and responsiveness.
    * **Horizontal Swiping:** For mobile image galleries and other relevant components.
* **Dark/Light Mode:** Ensure robust implementation across all components and themes.

### Technical Constraints

* Must use React, Tailwind CSS 4, and GSAP.
* Must support dark/light mode.
* The output should be a performant website with a mix of static and dynamic capabilities.
* Initial content for Insights, Inventory, and Map points managed via flat files (Markdown, JSON), but architect to assess thresholds for recommending a database for V1.

### Technical Debt Approach

* Prioritize clean, modular code across the majority of the system to minimize long-term technical debt.
* However, for the initial implementation of the Point of Interest (POI) functionality within the Mapping feature, some focused technical debt may be acceptable to achieve initial launch capabilities. This area should be flagged for potential refactoring or improvement post-launch.

### Deployment Considerations

* CI/CD pipeline for automated builds and deployments.
* Environment requirements: Local development, Staging/Preview, Production.

### Local Development & Testing Requirements

* Standard Next.js development server (`next dev`).
* CLI for tests (Unit, E2E).
* Consider tools for local testing of map components with sample data.
* Comprehensive testing strategy as outlined in PRD (Unit, E2E, Visual Regression, Manual, Performance, Accessibility).

### Other Technical Considerations

* **Security:** Ensure standard security practices for web applications (HTTPS, secure headers, input validation, secure API routes if any, protection against XSS/CSRF). If a contact form or other features handle PII, ensure secure handling and storage/transmission.
* **Scalability:** Design with future growth in mind, especially for inventory and mapping data.
* **Performance:** Maintain a strong focus on performance throughout development.
* **SEO:** Leverage Next.js features for SSR/SSG to maximize SEO effectiveness for dynamic content pages (Insight, Inventory).