**Summary of UI/UX Specifications Defined:**

1.  **Overall UX Goals & Principles:**
    * Defined target user personas: "Bro (Marketing Manager)," "Sis (Media Planner)," and "Yopi (CAESAR Internal User)."
    * Established key usability goals focusing on intuitive exploration, efficiency, speed, clarity, direct engagement, enjoyable experience, and accessibility.
    * Outlined core design principles: User-centricity, modern & sleek, informative & empowering, seamless interaction, consistency, and performance by design.

2.  **Information Architecture (IA):**
    * Created a site map covering Homepage, About Us, Solutions, Insight (List & Detail), Mapping, Inventory (List & Detail), and Contact Us.
    * Detailed the navigation structure:
        * Primary Navigation (Drawer Menu with specified links and behavior).
        * Header (Logo, Menu Toggle, Dark/Light Mode Switch).
        * Footer (Compact Contact Form, Contact Details, Office Map Snippet, Social Media Links, Copyright).
        * Breadcrumbs for Insight and Inventory sections.
        * In-page CTAs.
        * Persistent sticky utility buttons (Back to Top, Direct WhatsApp Chat).

3.  **User Flows:**
    * Mapped out detailed flows with Mermaid diagrams for:
        * Exploring OOH Inventory on Mapping Page (including search, filters, OOH/POI info, embedded map/360 view, nearby search).
        * Finding and Viewing OOH Inventory in Marketplace (including filters, sort, detail page with multiple images, specs, embedded map/360 view, PDF/Print/Email/WhatsApp sharing options, inquiry).
        * Reading an Insight Article (including horizontal swipeable cards, reading mode).
        * Toggling Dark/Light Mode (including system time/OS detection defaults and manual override).
    * Addressed edge cases and success conditions for each flow.

4.  **Wireframes & Mockups Strategy:**
    * A two-phase design process: Low-fidelity wireframes (desktop & mobile) first, followed by high-fidelity mockups.
    * High-fidelity mockups will detail visual design, themes, responsiveness, component states, and animation concepts.
    * No specific design tool links will be stored in the spec for now.
    * A prompt for AI wireframe generation will be created later.

5.  **Component Library / Design System Approach:**
    * Styling: Tailwind CSS 4.
    * Animation: GSAP.
    * Component Approach: Project-specific modular component library (React), styled with Tailwind, documented and tested in Storybook. Inspiration from Shadcn/ui principles for building custom, accessible components.
    * Listed foundational components to be developed (Button, Card, Input Fields, Drawer, Modal, Toggles, Map elements, 360 Viewer, etc.).

6.  **Branding & Style Guide Basics:**
    * Detailed style guide (colors, typography, iconography, etc.) to be developed externally by the user (e.g., using a separate AI tool or design process).
    * Placeholders in the spec for primary logo and key branding elements, to be aligned with the full style guide once available.

7.  **Accessibility (AX) Requirements:**
    * Target: WCAG 2.1 Level AA.
    * Detailed general principles (Perceivable, Operable, Understandable, Robust).
    * Specified requirements for semantic HTML, ARIA implementation (for drawer, modals, custom components, forms, etc.), keyboard navigation, focus management, dark/light mode contrast, mapping page accessibility (alternatives for map data), inventory page features, insight articles (reading mode), and handling of GSAP animations (prefers-reduced-motion).
    * Mentioned AX testing tools.

8.  **Responsiveness Strategy:**
    * Mobile-first approach.
    * Defined key breakpoints (Mobile, Tablet, Desktop, optional XL Desktop).
    * Outlined adaptation strategies for layouts, navigation, typography, images, data-heavy sections (Map, Inventory).
    * Detailed handling of interactive elements: horizontal swiping (mobile), vertical twin scrolling (desktop).
    * Addressed advanced touch interactions: standard gestures (tap, drag, swipe), multi-touch (pinch-to-zoom, two-finger pan/scroll for map/360), and explicitly stated that 3+ finger custom gestures are out of scope for V1. Emphasized elegant gesture handling and performance.
    * Mandated adequate touch target sizes and thorough testing.

This completes the UI/UX Specification Mode for now by populating the conceptual content of `front-end-spec-tmpl.txt`. The actual file would be a structured version of all these points.