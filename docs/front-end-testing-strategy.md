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