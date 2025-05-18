**CAESAR OOH MEDIA Website Modernization Frontend Architecture Document**

Version: 0.3
Date: May 17, 2025

**Table of Contents**

  - [Introduction](https://www.google.com/search?q=%23introduction)
  - [Overall Frontend Philosophy & Patterns](https://www.google.com/search?q=%23overall-frontend-philosophy--patterns)
  - [Detailed Frontend Directory Structure](https://www.google.com/search?q=%23detailed-frontend-directory-structure)
  - [Component Breakdown & Implementation Details](https://www.google.com/search?q=%23component-breakdown--implementation-details)
      - [Component Naming & Organization](https://www.google.com/search?q=%23component-naming--organization)
      - [Template for Component Specification](https://www.google.com/search?q=%23template-for-component-specification)
  - [State Management In-Depth](https://www.google.com/search?q=%23state-management-in-depth)
      - [Store Structure / Slices](https://www.google.com/search?q=%23store-structure--slices)
      - [Key Selectors](https://www.google.com/search?q=%23key-selectors)
      - [Key Actions / Reducers / Thunks](https://www.google.com/search?q=%23key-actions--reducers--thunks)
  - [API Interaction Layer](https://www.google.com/search?q=%23api-interaction-layer)
      - [Client/Service Structure](https://www.google.com/search?q=%23clientservice-structure)
      - [Error Handling & Retries (Frontend)](https://www.google.com/search?q=%23error-handling--retries-frontend)
  - [Routing Strategy](https://www.google.com/search?q=%23routing-strategy)
      - [Route Definitions](https://www.google.com/search?q=%23route-definitions)
      - [Route Guards / Protection](https://www.google.com/search?q=%23route-guards--protection)
  - [Build, Bundling, and Deployment](https://www.google.com/search?q=%23build-bundling-and-deployment)
      - [Build Process & Scripts](https://www.google.com/search?q=%23build-process--scripts)
      - [Key Bundling Optimizations](https://www.google.com/search?q=%23key-bundling-optimizations)
      - [Deployment to CDN/Hosting](https://www.google.com/search?q=%23deployment-to-cdnhosting)
  - [Frontend Testing Strategy](https://www.google.com/search?q=%23frontend-testing-strategy)
      - [Component Testing](https://www.google.com/search?q=%23component-testing)
      - [UI Integration/Flow Testing](https://www.google.com/search?q=%23ui-integrationflow-testing)
      - [End-to-End UI Testing Tools & Scope](https://www.google.com/search?q=%23end-to-end-ui-testing-tools--scope)
  - [Accessibility (AX) Implementation Details](https://www.google.com/search?q=%23accessibility-ax-implementation-details)
  - [Performance Considerations](https://www.google.com/search?q=%23performance-considerations)
  - [Development & Operational Notes](https://www.google.com/search?q=%23development--operational-notes)
      - [Known Issues / Special Installation Requirements](https://www.google.com/search?q=%23known-issues--special-installation-requirements)
  - [Change Log](https://www.google.com/search?q=%23change-log)

**Introduction**

This document details the technical architecture specifically for the frontend of the CAESAR OOH MEDIA Website Modernization project. It complements the main project's Product Requirements Document (PRD) and the UI/UX Specification. The goal is to provide a clear blueprint for frontend development, ensuring consistency, maintainability, and alignment with the overall system design and user experience goals. This architecture supports a sophisticated, technologically advanced, highly interactive, and user-centric website, featuring advanced mapping, a detailed OOH inventory marketplace, and dynamic UI interactions with light and dark modes.

  - Link to Main Architecture Document (PRD - Technical Assumptions): CAESAR OOH MEDIA Website Modernization Product Requirements Document (PRD) Version 0.4 (focus on "Technical Assumptions" section).
  - Link to UI/UX Specification: CAESAR OOH MEDIA Website Modernization UI/UX Specification (Version 1.0, May 17, 2025).
  - Link to Primary Design Files (Figma, Sketch, etc.): (To be developed later by the user; no link available yet).
  - Link to Deployed Storybook / Component Showcase (if applicable): (To be established and added once Storybook is deployed).

**Overall Frontend Philosophy & Patterns**

The core architectural decisions and patterns chosen for the frontend aim to create a modern, performant, scalable, and maintainable application. This aligns with the "Technical Assumptions" in the PRD and considers the project's goal of establishing a strong, technologically advanced digital presence. The system architecture is a Monorepo with the Next.js application serving as the primary service, including Backend-For-Frontend (BFF) capabilities via Route Handlers.

  - **Framework & Core Libraries:**
      - **Next.js (latest stable version, assumed v14+ with App Router):** The React framework chosen for its comprehensive features including hybrid rendering (SSR, SSG, ISR, CSR), file-system routing (App Router), image optimization (`next/image`), font optimization (`next/font`), internationalization, and overall excellent developer experience. TypeScript will be used throughout the project for enhanced type safety and maintainability.
      - **React (latest stable version, assumed v18+):** The declarative JavaScript library for building user interfaces with a component-based architecture. Server Components and Client Components will be used strategically within the Next.js App Router paradigm to optimize performance and interactivity.
      - **Tailwind CSS (v4.x):** A utility-first CSS framework that will be used for rapid UI development, responsive design, and implementing the dark/light theme functionality using its `dark:` variant. Its utility classes allow for direct styling in markup, reducing the need for separate CSS files for many components.
      - **GSAP (GreenSock Animation Platform):** A professional-grade JavaScript animation library for creating high-performance, complex animations such as the vertical twin scrolling effect, drawer navigation transitions, and other UI embellishments, ensuring a sophisticated user experience.
      - **Mapping Library:**
          * **Primary:** Mapbox GL JS is the initial choice for the "Mapping" page due to its rich feature set, customization capabilities for displaying OOH inventory and POIs, and performance with vector tiles.
          * **Alternatives/Backup:** If Mapbox GL JS presents challenges regarding data coverage or performance in Indonesia, alternatives will be evaluated. These include MapLibre GL JS (a community-driven, open-source fork of Mapbox GL JS, often compatible with Mapbox styles and a strong first alternative), Leaflet (lightweight, excellent for raster tiles and simpler interactive maps, with a vast plugin ecosystem), or OpenLayers (a powerful GIS library for more complex scenarios). These alternatives often integrate well with OpenStreetMap (OSM) data. The final decision will be based on rigorous testing, feature requirements, and integration ease.
  - **Component Architecture:**
      - The project will adopt a modular and reusable component architecture, drawing inspiration from Atomic Design principles (organizing components into atoms, molecules, organisms, etc.) where it enhances clarity and structure.
      - Emphasis will be placed on creating Presentational (UI-focused) and Container (logic-focused) components where this separation benefits maintainability, though React Hooks often provide an effective way to manage logic within functional components.
      - All significant UI components will be developed with reusability in mind and documented within Storybook to serve as a living style guide and component library.
      - Next.js App Router's Server Components will be preferred for parts of the UI that do not require client-side interactivity or state, to improve initial page load performance. Client Components will be used for interactive elements.
  - **State Management Strategy:**
      - **Zustand:** This lightweight, unopinionated, and scalable state management library will be the primary solution. It is chosen for its simplicity, minimal boilerplate (no reducers or actions in the traditional Redux sense), direct store creation and usage, and performance focus (components only re-render when the specific parts of the state they subscribe to change). Zustand is well-suited for managing both global application state (e.g., UI theme preference, drawer navigation state, global map filter settings if deemed necessary) and complex local state for specific features. It integrates well with Next.js, supporting both server-side rendering (for hydrating stores) and client-side usage.
      - **React Context API:** May be employed for very localized state sharing within deeply nested component trees where a global store like Zustand might be an overkill and the state does not need to be accessed outside that specific tree (e.g., managing the state of a complex multi-step form before submission).
  - **Data Flow:**
      - A primarily unidirectional data flow will be maintained. State changes will trigger UI updates, and user interactions or API responses will initiate state changes.
      - Data fetching for initial page loads (SSR/SSG) will primarily occur within Next.js Server Components or Route Handlers.
      - Client Components requiring data will either receive it as props from Server Components or fetch it client-side via dedicated service functions that interact with Next.js Route Handlers (acting as a BFF) or, in rare cases, directly with third-party APIs if appropriate.
  - **Styling Approach:**
      - **Tailwind CSS 4:** Utility classes will be the predominant method for styling components directly in the JSX markup. This approach promotes rapid development and co-locates styling with component logic.
      - **Custom CSS / `@layer` directives:** For more complex base styles (e.g., global resets beyond Tailwind's `preflight`, specific typography rules not easily achieved with utilities), component-specific styles that are difficult or verbose to express solely with utility classes, or for integrating and overriding styles from third-party libraries, custom CSS files or Tailwind's `@layer` directive in `globals.css` will be used.
      - **Dark Mode:** Implemented using Tailwind's `dark:` variant. A JavaScript toggle (managed by Zustand and persisted in `localStorage`) will dynamically add/remove a class (e.g., `dark`) on the `<html>` element, which Tailwind's `dark:` variant will respond to.
  - **Key Design Patterns Used:**
      - **Hooks (React):** Extensively used for managing component state (`useState`, `useReducer`), side effects (`useEffect`), context (`useContext`), performance optimizations (`useMemo`, `useCallback`), and creating custom reusable logic.
      - **Provider Pattern (React Context):** For providing global theme information or other localized, scoped data down component trees without prop drilling.
      - **Module Pattern (JavaScript/TypeScript):** Code will be organized into distinct modules (e.g., services, utilities, store slices, components) with clear interfaces, promoting separation of concerns and reusability.
      - **Facade Pattern:** API service modules (`src/services/`) will act as facades, abstracting the complexities of interacting with backend APIs (Next.js Route Handlers in this case) and providing a simpler interface for components.
      - **Observer Pattern:** Implicitly used by React and Zustand, where components "observe" or subscribe to state changes and re-render accordingly.

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

**Component Breakdown & Implementation Details**

This section outlines the conventions and templates for defining UI components. While a few globally shared or foundational components (e.g., core UI elements if not from a library, main layout structures) might be specified here upfront to ensure consistency, the detailed specification for most feature-specific components will emerge as user stories are implemented. The key is for the development team to follow the "Template for Component Specification" below whenever a new component is identified for development. All components will be built with accessibility (WCAG 2.1 AA) and responsiveness in mind, using Tailwind CSS for styling and documented in Storybook.

  - **Component Naming & Organization:**

      - **Naming Convention:** Components will be named using PascalCase (e.g., `UserProfileCard.tsx`). File names will match the component name.
      - **Organization:**
          - Components will be co-located by feature within `src/components/[featureName]/` or placed in `src/components/common/` if globally reusable, or `src/components/layout/` for structural components.
          - Each significant component should have its own Storybook story.

  - **Template for Component Specification:**
    For each significant UI component identified from the UI/UX Specification and design files (once available), the following details should be documented, ideally within its Storybook story notes or a related design document.

      - **Component Name:** `(e.g., PrimaryButton, InventoryCard, MapFilterPanel)`
      - **Purpose:** A brief description of what the component does and its role in the UI. (e.g., "Primary call-to-action button used for key user actions like form submission or navigation.")
      - **Source File(s):** The path to the component's source code (e.g., `src/components/common/PrimaryButton.tsx`).
      - **Visual Reference:** Link to the specific Figma frame/component or a screenshot/description from the UI/UX spec if designs are not yet in Figma. (e.g., "UI/UX Spec, Section: Inventory List Page, Card Element").
      - **Props (Properties):** A table listing each prop the component accepts.
        | Prop Name     | Type                               | Required? | Default Value | Description                                                  |
        | :------------ | :--------------------------------- | :-------- | :------------ | :----------------------------------------------------------- |
        | `label`       | `string`                           | Yes       | N/A           | The text content to be displayed within the button.          |
        | `onClick`     | `() => void`                       | Yes       | N/A           | Callback function executed when the button is clicked.       |
        | `variant`     | `'primary' \| 'secondary' \| 'ghost'` | No        | `'primary'`   | Controls the visual style of the button.                     |
        | `isDisabled`  | `boolean`                          | No        | `false`       | If true, the button will be in a disabled state.             |
        | `isLoading`   | `boolean`                          | No        | `false`       | If true, shows a loading indicator within the button.        |
        | `iconLeft`    | `React.ReactNode`                  | No        | `null`        | Optional icon to display to the left of the label.         |
        | `iconRight`   | `React.ReactNode`                  | No        | `null`        | Optional icon to display to the right of the label.        |
        | `type`        | `'button' \| 'submit' \| 'reset'`  | No        | `'button'`    | The HTML button type attribute.                              |
        | `fullWidth`   | `boolean`                          | No        | `false`       | If true, the button will take up the full width of its container. |
      - **Internal State (if any):** Describe any significant internal state the component manages (using `useState` or `useReducer`). Minor UI states (e.g., `isDropdownOpen` for a simple dropdown) might not need explicit listing unless complex or crucial for understanding behavior.
        | State Variable  | Type      | Initial Value | Description                                         |
        | :-------------- | :-------- | :------------ | :-------------------------------------------------- |
        | `isActive`      | `boolean` | `false`       | Tracks if the component has an active visual state. |
      - **Key UI Elements / Structure:** Describe the main visual parts of the component and their general layout. This can be a brief textual description or a very simple pseudo-HTML structure.
        ```html
        <div class="card-container">
          <div class="card-image-wrapper">
            <img src="{imageUrl}" alt="{altText}" />
          </div>
          <div class="card-content">
            <h3 class="card-title">{title}</h3>
            <p class="card-description">{description}</p>
            <div class="card-actions">
              </div>
          </div>
        </div>
        ```
      - **Events Handled / Emitted:**
          - **Handles:** List DOM events the component directly handles (e.g., `onClick` on an internal button, `onChange` on an input).
          - **Emits (Callbacks):** Describe custom events or callback props the component invokes (e.g., `onItemSelect: (itemId: string) => void`). These are typically passed in as props.
      - **Actions Triggered (Side Effects):**
          - **State Management:** Describe if the component dispatches actions to a global store (e.g., Zustand) or updates context. (e.g., "On click of 'Add to Favorites' button, dispatches `favoritesStore.actions.addFavorite(itemId)`").
          - **API Calls:** Specify which service/function from the "API Interaction Layer" is called, what data is passed, and how the response (success/error) is handled locally or by dispatching further state updates. (e.g., "Calls `userService.fetchUserDetails(userId)` on mount. Displays a loading state while fetching. Updates internal state with user details on success, or shows an error message on failure.").
      - **Styling Notes:**
          - Reference Design System components used if it's a composite component (e.g., "Uses `<PrimaryButton>` for the main CTA").
          - Key Tailwind CSS classes or custom CSS class names applied for primary styling.
          - Specific responsiveness behavior for this component if it deviates from global patterns (e.g., "On mobile, the card layout stacks image above content").
          - Notes on how dark/light mode variations are applied using Tailwind's `dark:` prefix.
      - **Accessibility Notes:**
          - Specific ARIA attributes needed (e.g., `aria-label` for icon-only buttons, `aria-expanded` for accordions, `role` for custom interactive elements).
          - Keyboard navigation considerations (e.g., "Users can navigate between items using arrow keys," "Modal can be closed with the Escape key").
          - Focus management details (e.g., "Focus is trapped within the modal when open").

**State Management In-Depth**

This section expands on the State Management strategy chosen (Zustand) and outlines conventions for its implementation. While the overall approach and core store setup are defined here, detailed state slices, selectors, and actions for specific features will generally be developed emergently, adhering to these established patterns.

  - **Chosen Solution:** Zustand.
  - **Rationale (briefly, if not fully covered in main arch doc):** Zustand is chosen for its lightweight nature, simplicity (minimal boilerplate compared to Redux), direct store creation and usage, and its performance characteristics (components only re-render if the subscribed part of the state changes). It fits well with React's functional component model using hooks and is flexible enough for both global state and feature-specific complex state, while also being compatible with Next.js's server-side rendering and client-side hydration needs.
  - **Store Structure / Slices:**
    Zustand stores will be defined in the `src/store/` directory. Each store will typically manage a distinct domain or feature set of the application's state. This promotes modularity and separation of concerns.
      - **Core Slice Example: `uiStore.ts`**
          - **Purpose:** Manages global UI states such as theme preference, navigation drawer visibility, and active modal dialogs.
          - **State Shape:**
            ```typescript
            // src/store/uiStore.ts
            import { create } from 'zustand';
            import { persist, createJSONStorage } from 'zustand/middleware';

            type Theme = 'light' | 'dark' | 'system';

            interface UIState {
              isDrawerNavOpen: boolean;
              currentTheme: Theme;
              activeModalId: string | null;
            }

            interface UIActions {
              toggleDrawerNav: () => void;
              openDrawerNav: () => void;
              closeDrawerNav: () => void;
              setTheme: (theme: Theme) => void;
              openModal: (modalId: string) => void;
              closeModal: () => void;
            }

            export const useUIStore = create<UIState & UIActions>()(
              persist(
                (set, get) => ({
                  isDrawerNavOpen: false,
                  currentTheme: 'system', // Initial default, client-side effect updates based on localStorage/system
                  activeModalId: null,

                  toggleDrawerNav: () => set((state) => ({ isDrawerNavOpen: !state.isDrawerNavOpen })),
                  openDrawerNav: () => set({ isDrawerNavOpen: true }),
                  closeDrawerNav: () => set({ isDrawerNavOpen: false }),

                  setTheme: (theme) => {
                    set({ currentTheme: theme });
                    // Client-side effect to update DOM and localStorage
                    if (typeof window !== 'undefined') {
                      document.documentElement.classList.remove('light', 'dark');
                      if (theme === 'system') {
                        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                        document.documentElement.classList.add(systemPrefersDark ? 'dark' : 'light');
                      } else {
                        document.documentElement.classList.add(theme);
                      }
                    }
                  },
                  openModal: (modalId) => set({ activeModalId: modalId }),
                  closeModal: () => set({ activeModalId: null }),
                }),
                {
                  name: 'ui-settings-storage', // name of item in localStorage
                  storage: createJSONStorage(() => localStorage),
                  partialize: (state) => ({ currentTheme: state.currentTheme }), // Only persist theme
                }
              )
            );
            ```
      - **Feature Slice Example: `mapStore.ts`**
          - **Purpose:** Manages state related to the Mapping page, such as current map filters, details of a selected OOH site, POI visibility settings, and current map viewport.
          - **State Shape (Example):**
            ```typescript
            // src/store/mapStore.ts
            import { create } from 'zustand';
            // Assuming types are defined in src/types/map.d.ts
            // import { OOHSiteFilterCriteria, MapViewport } from '@/types/map';

            interface MapState {
              filters: Partial<any>; // Replace 'any' with OOHSiteFilterCriteria type
              selectedOOHSiteId: string | null;
              isPOIVisible: boolean;
              activePOICategories: string[];
              currentViewport: any | null; // Replace 'any' with MapViewport type
              isLoadingMapData: boolean;
            }

            interface MapActions {
              setMapFilters: (newFilters: Partial<any>) => void; // Replace 'any'
              clearMapFilters: () => void;
              selectOOHSite: (siteId: string | null) => void;
              togglePOIVisibility: () => void;
              setPOICategories: (categories: string[]) => void;
              setCurrentViewport: (viewport: any) => void; // Replace 'any'
              setLoadingMapData: (isLoading: boolean) => void;
            }

            export const useMapStore = create<MapState & MapActions>()((set) => ({
              filters: {},
              selectedOOHSiteId: null,
              isPOIVisible: true,
              activePOICategories: [],
              currentViewport: null,
              isLoadingMapData: false,

              setMapFilters: (newFilters) => set((state) => ({
                filters: { ...state.filters, ...newFilters }
              })),
              clearMapFilters: () => set({ filters: {} }),
              selectOOHSite: (siteId) => set({ selectedOOHSiteId: siteId }),
              togglePOIVisibility: () => set((state) => ({ isPOIVisible: !state.isPOIVisible })),
              setPOICategories: (categories) => set({ activePOICategories: categories }),
              setCurrentViewport: (viewport) => set({ currentViewport: viewport }),
              setLoadingMapData: (isLoading) => set({ isLoadingMapData: isLoading }),
            }));
            ```
  - **Key Selectors:**
    Zustand promotes direct state access within components (e.g., `const count = useCounterStore(state => state.count)`). For performance optimization with object/array selections, use shallow equality checks (e.g., `import { shallow } from 'zustand/shallow'; const { items, total } = useCartStore(state => ({ items: state.items, total: state.total }), shallow);`).
  - **Key Actions / Reducers / Thunks:**
    Actions are functions within the store that use `set` to update state. Asynchronous operations (like API calls) can be handled directly within these actions or by calling service functions and then updating the store.
      - **Core Action Example (from `uiStore.ts`):** (Already shown in `uiStore.ts` example above for `setTheme`)
      - **Async Action Example (conceptual):**
        ```typescript
        // Conceptual example within a store
        // import { someService } from '@/services/someService';
        //
        // fetchDataAndUpdateStore: async (params) => {
        //   set({ isLoading: true, error: null });
        //   try {
        //     const data = await someService.fetchData(params);
        //     set({ data, isLoading: false });
        //   } catch (error) {
        //     set({ error: (error as Error).message, isLoading: false });
        //   }
        // },
        ```

**API Interaction Layer**

This section describes how the frontend communicates with backend APIs. For V1 of this project, the "backend" will primarily be Next.js Route Handlers acting as a Backend-For-Frontend (BFF), serving data from local files (JSON/Markdown).

  - **Client/Service Structure:**

      - **HTTP Client Setup:**
          - Standard `Workspace` API will be the primary mechanism.
          - A lightweight utility wrapper (e.g., `src/lib/apiClient.ts`) around `Workspace` might be created to handle: default headers (`Content-Type: application/json`), centralized error handling for common HTTP errors, and prepending a base URL (e.g., `/api`).
      - **Service Definitions (`src/services/`):**
        These modules will encapsulate client-side logic for interacting with specific API resources.
          - **Example: `inventoryService.ts`**
            ```typescript
            // src/services/inventoryService.ts
            // import { InventoryItem, InventoryItemDetail, InventoryFilterParams } from '@/types/inventory';
            // import { apiClient } from '@/lib/apiClient'; // Assuming apiClient exists

            const RESOURCE_URL = '/api/inventory';

            export const inventoryService = {
              async getInventoryList(filters?: any /* InventoryFilterParams */): Promise<any[] /* InventoryItem[] */> {
                const queryParams = filters ? new URLSearchParams(filters as Record<string, string>).toString() : '';
                const url = `${RESOURCE_URL}${queryParams ? `?${queryParams}` : ''}`;
                // return apiClient.get<InventoryItem[]>(url);
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch inventory list');
                return response.json();
              },

              async getInventoryItemById(id: string): Promise<any /* InventoryItemDetail */> {
                if (!id) throw new Error('Inventory item ID is required.');
                const url = `${RESOURCE_URL}/${id}`;
                // return apiClient.get<InventoryItemDetail>(url);
                const response = await fetch(url);
                if (!response.ok) throw new Error(`Failed to fetch inventory item ${id}`);
                return response.json();
              }
            };
            ```
          - **`mapService.ts`:** For fetching OOH site data and POI data from `/api/map-data/`.
          - **`formService.ts`:** For handling the submission of the contact form to `/api/contact`.
            ```typescript
            // src/services/formService.ts
            const CONTACT_FORM_ENDPOINT = '/api/contact';

            export const formService = {
              async submitContactForm(formData: Record<string, any>): Promise<Response> {
                const response = await fetch(CONTACT_FORM_ENDPOINT, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
                  body: JSON.stringify(formData),
                });
                // The calling component will handle response.ok and response.json()
                return response;
              }
            };
            ```
      - **Next.js Route Handlers (`src/app/api/`):**
        Server-side functions handling API requests. For V1:
          - Read data from local JSON/Markdown files (`src/content/`).
          - Process request parameters (e.g., filtering inventory).
          - Return JSON responses.
          - Handle contact form submission using Nodemailer.
          - Example structure for `src/app/api/inventory/route.ts`:
            ```typescript
            // src/app/api/inventory/route.ts
            import { NextResponse } from 'next/server';
            import inventoryData from '@/content/data/inventory.json'; // Adjust path as needed
            // import { InventoryItem } from '@/types/inventory'; // Assuming types

            export async function GET(request: Request) {
              const { searchParams } = new URL(request.url);
              // Example filtering logic (to be expanded)
              // const mediaType = searchParams.get('mediaType');
              // let itemsToReturn = inventoryData as InventoryItem[];
              // if (mediaType) {
              //   itemsToReturn = itemsToReturn.filter(item => item.mediaType === mediaType);
              // }
              // For now, returns all data
              return NextResponse.json(inventoryData);
            }
            ```
          - Example structure for `src/app/api/contact/route.ts` (using Nodemailer):
            ```typescript
            // src/app/api/contact/route.ts
            import { NextResponse } from 'next/server';
            import nodemailer from 'nodemailer';
            // import { ContactFormPayload } from '@/types/api'; // Assuming types

            export async function POST(request: Request) {
              try {
                const body = await request.json() as any; // Replace 'any' with ContactFormPayload

                // Validate body.name, body.email, body.message (add Zod or other validation)
                if (!body.name || !body.email || !body.message) {
                  return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
                }

                const transporter = nodemailer.createTransport({
                  host: process.env.SMTP_HOST,
                  port: Number(process.env.SMTP_PORT || 587),
                  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
                  auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                  },
                });

                const mailOptions = {
                  from: `"${body.name}" <${process.env.EMAIL_FROM_ADDRESS}>`, // Or a fixed from address
                  replyTo: body.email,
                  to: process.env.CONTACT_FORM_RECIPIENT_EMAIL,
                  subject: body.subject || `New Contact Form Submission from ${body.name}`,
                  text: `Name: ${body.name}\nEmail: ${body.email}\nOOH ID: ${body.oohInventoryId || 'N/A'}\nMessage: ${body.message}`,
                  html: `<p><strong>Name:</strong> ${body.name}</p>
                         <p><strong>Email:</strong> ${body.email}</p>
                         <p><strong>OOH ID:</strong> ${body.oohInventoryId || 'N/A'}</p>
                         <p><strong>Message:</strong></p>
                         <p>${body.message.replace(/\n/g, '<br>')}</p>`,
                };

                await transporter.sendMail(mailOptions);
                return NextResponse.json({ success: true, message: 'Message sent successfully!' });

              } catch (error) {
                console.error('Contact form submission error:', error);
                return NextResponse.json({ success: false, error: 'Failed to send message.' }, { status: 500 });
              }
            }
            ```

  - **Error Handling & Retries (Frontend):**

      - **Global Error Handling:**
          - A top-level React Error Boundary in `src/app/layout.tsx` or `src/app/(main)/layout.tsx` to catch rendering errors and display a fallback UI.
          - Toast notifications (e.g., `react-hot-toast`) for non-critical API errors or general feedback, managed perhaps via `uiStore`.
      - **Specific Error Handling:**
          - Components will use `try...catch` for async operations.
          - Loading and error states managed within components or feature stores.
          - Inline error messages for form validation or specific data fetch failures.
      - **External Service Failures:**
          - **Mapping Service (e.g., Mapbox Tiles/APIs):** If the external mapping service is unavailable or fails, the map functionality on the `/mapping` page and embedded map snippets will be degraded or completely unavailable. Users should be shown a clear error message indicating that map data cannot be loaded (e.g., "Unable to load map at this time. Please try again later."). Core site functionality not dependent on the map should remain operational.
          - **Email Service (for Contact Form via Nodemailer):** If the backend email sending service (e.g., SendGrid, AWS SES) used by Nodemailer is unavailable or fails, contact form submissions via `/api/contact` will fail. The user should receive an error message on the frontend indicating that their message could not be sent and suggesting alternative contact methods if available (e.g., "Your message could not be sent due to a server error. Please try again later or contact us directly via phone.").
      - **Retry Logic:** For V1, primarily manual retry (e.g., a "Retry" button for failed data loads). Automated retries are not a focus but could be added for critical, idempotent GET requests if necessary.

**Routing Strategy**

  - **Routing Library:** Next.js App Router.
  - **Route Definitions:**
    | Path Pattern             | Corresponding File/Folder (`src/app/...`)       | Protection | Rendering   | Notes                                                              |
    | :----------------------- | :---------------------------------------------- | :--------- | :---------- | :----------------------------------------------------------------- |
    | `/`                      | `(main)/page.tsx`                               | Public     | SSR/SSG     | Homepage                                                           |
    | `/about-us`              | `(main)/about-us/page.tsx`                      | Public     | SSG         | About Us page                                                      |
    | `/solutions`             | `(main)/solutions/page.tsx`                     | Public     | SSG         | Solutions page                                                     |
    | `/insight`               | `(main)/insight/page.tsx`                       | Public     | SSR         | List of insight articles                                           |
    | `/insight/{article-slug}`| `(main)/insight/{article-slug}/page.tsx`        | Public     | SSR         | Individual insight article (dynamic route based on slug)           |
    | `/mapping`               | `(main)/mapping/page.tsx`                       | Public     | CSR         | Interactive map view                                               |
    | `/inventory`             | `(main)/inventory/page.tsx`                     | Public     | SSR         | List of OOH inventory items                                        |
    | `/inventory/{item-id}`   | `(main)/inventory/{item-id}/page.tsx`           | Public     | SSR         | Individual OOH inventory item detail (dynamic route based on ID) |
    | `/contact-us`            | `(main)/contact-us/page.tsx`                    | Public     | SSG/CSR     | Contact Us page (form interaction is CSR)                          |
  - **Route Guards / Protection:** N/A for V1. Future auth via Next.js Middleware.

**Build, Bundling, and Deployment**

  - **Build Process & Scripts (in `package.json`):**
      - `dev`: `next dev` - Starts development server.
      - `build`: `next build` - Creates production build.
      - `start`: `next start` - Starts production server.
      - `lint`: `eslint . --ext .ts,.tsx` (or similar) - Runs ESLint.
      - `format`: `prettier --write .` (or similar) - Runs Prettier.
      - `test`: `jest` (or `vitest`) - Runs unit and component tests.
      - `test:watch`: `jest --watch` (or `vitest --watch`) - Runs tests in watch mode.
      - `test:e2e`: `playwright test` (or similar) - Runs end-to-end tests.
      - `storybook`: `storybook dev -p 6006` (or similar) - Starts Storybook.
      - `build-storybook`: `storybook build` (or similar) - Builds Storybook for deployment.
  - **Environment Variables Handling during Build:** `.env.local` for local. Hosting provider UI for deployed environments. `NEXT_PUBLIC_` prefix for browser exposure.
  - **Key Bundling Optimizations:** Automatic code splitting (Next.js route-based). Dynamic imports (`next/dynamic`) for large libraries (Mapbox GL JS, 360 viewers, GSAP sections) and non-critical components. Tree shaking by Next.js build process. Lazy loading via `next/image` and `next/dynamic`. Automatic minification & compression by Next.js.
  - **Deployment to CDN/Hosting:** User's existing Node.js compatible hosting (Vercel highly recommended). Deployment typically via Git push to main branch triggering CI/CD pipeline. Next.js handles static asset caching well; CDN of hosting provider leverages this.

**Frontend Testing Strategy**

  - **Link to Main Testing Strategy:** This document is the primary reference.
  - **Testing Tools Selection:** Jest/Vitest + React Testing Library (RTL) for unit/component tests. Playwright for E2E tests. Storybook for visual and interaction testing of components. `axe-core` for automated accessibility checks.
  - **Component Testing (`src/components/`):**
      - **Scope:** Individual React components.
      - **Tools:** Jest/Vitest + RTL, Storybook.
      - **Focus:** Rendering with props, user interactions, event emissions, accessibility attributes.
      - **Location:** `*.test.tsx` or `*.spec.tsx` co-located with components.
  - **UI Integration/Flow Testing:**
      - **Scope:** Interactions between multiple components forming small user flows.
      - **Tools:** RTL (complex setups), Playwright (focused flows).
      - **Focus:** Data flow, conditional rendering, intra-feature navigation.
  - **End-to-End (E2E) UI Testing Tools & Scope:**
      - **Tools:** Playwright.
      - **Scope (Frontend Focus):** Critical user journeys (Homepage load, Navigation, Insight flow, Mapping basics, Inventory flow, Contact Us submission, Dark/Light Mode toggle).
      - **Test Data Management:** V1 uses static JSON/Markdown. Future may need API mocking or test databases.

**Accessibility (AX) Implementation Details**

  - **Target:** WCAG 2.1 Level AA.
  - **Semantic HTML:** Consistent use of HTML5 elements.
  - **ARIA Implementation:** Judicious use for custom components (drawer, modals, map controls), accessible names (`aria-label`).
  - **Keyboard Navigation:** All interactive elements focusable/operable. Logical tab order. Standard key patterns (Enter/Space, Arrows, Esc). "Skip to main content" links.
  - **Focus Management:** Visible focus indicators. Focus trapping in modals/drawers. Return focus on close. Programmatic focus for dynamic content updates.
  - **Dark/Light Mode:** Both themes tested for WCAG AA contrast.
  - **Map & Inventory Accessibility:** Text alternatives for map info. Keyboard-accessible map controls/list alternative. Keyboard controls for image galleries.
  - **Forms:** Associated labels. Programmatically linked error messages.
  - **Animations (GSAP):** Respect `prefers-reduced-motion`. No focus trapping or usability impediments.
  - **Testing Tools for AX:** `axe-core` (Jest/RTL/Playwright), Lighthouse, manual testing (keyboard, screen readers, contrast tools).

**Performance Considerations**

  - **Image Optimization:** `next/image` for auto optimization, responsive sizes, WebP, lazy loading.
  - **Code Splitting & Lazy Loading:** Next.js route splitting. `next/dynamic` for Mapbox GL JS, 360 viewers, non-critical components, heavy GSAP animations.
  - **Minimizing Re-renders:** `React.memo`, efficient Zustand selectors (with `shallow` for objects), `useMemo`, `useCallback`.
  - **Debouncing/Throttling:** For search inputs, window resize.
  - **Virtualization:** Consider for very long inventory lists if needed (e.g., `TanStack Virtual`).
  - **Font Optimization:** `next/font` for self-hosting and optimization.
  - **Bundle Analysis:** `@next/bundle-analyzer`.
  - **Skeleton Loading:** For Inventory Listing cards and Insight article cards (Tailwind `animate-pulse`).
  - **Server-Side Rendering (SSR) / Static Site Generation (SSG) / Client-Side Rendering (CSR):**
      - **SSR:** Insight List & Detail, Inventory List & Detail pages.
      - **SSG/ISR:** Static pages (About Us, Solutions, Contact Us if applicable).
      - **CSR:** Mapping Page, client-side interactions, Dark/Light mode, GSAP elements.
  - **Caching Strategies:** Next.js data caching, browser caching, CDN caching.
  - **GSAP Performance:** Animate transforms, `will-change` sparingly, minimize change area, optimize ScrollTrigger.
  - **Performance Monitoring Tools:** Lighthouse, WebPageTest, browser DevTools.

**Development & Operational Notes**

  - **Known Issues / Special Installation Requirements:**
      - *(This section will be updated during development if any significant dependency conflicts or special installation procedures are identified.)*
      - Initial consideration: Ensure Node.js version (e.g., v20.x LTS) is compatible with all core dependencies including Next.js (v14+), Tailwind CSS (v4.x alpha/beta), and other chosen libraries. Potential conflicts with alpha/beta versions of libraries like Tailwind v4 will be monitored. Compatibility of chosen mapping library and 360-viewer library with the React/Next.js version will be verified during early setup.

**Change Log**

| Change        | Date          | Version | Description                                                                                                                          | Author         |
| :------------ | :------------ | :------ | :----------------------------------------------------------------------------------------------------------------------------------- | :------------- |
| Initial Draft | May 17, 2025  | 0.1     | First draft of architecture based on PRD, UI/UX discussions, and template.                                                           | Design Architect |
| Revision      | May 17, 2025  | 0.2     | Incorporated map alternatives, skeleton loading, SSR/CSR specifics, and filled template placeholders with detailed project content.        | Design Architect |
| Revision      | May 17, 2025  | 0.3     | Updated based on PO notes: Added "Development & Operational Notes" for dependency conflicts, enhanced API error handling for external services, and explicitly listed local test scripts. | Design Architect |
