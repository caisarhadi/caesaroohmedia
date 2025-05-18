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

---
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