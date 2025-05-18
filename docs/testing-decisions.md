**Testing Strategy**

**Overall Philosophy & Goals**

  * Adopt a comprehensive testing strategy to ensure application quality, reliability, maintainability, and user experience.
  * Focus on testing from the user's perspective where possible (React Testing Library, Playwright).
  * Automate tests at various levels to enable confident refactoring and continuous integration/delivery.
  * Ensure critical user flows, component interactions, accessibility, and performance are covered.
  * Coding Standards & Testing Strategy Definition:
      * Unit test file location: Co-located with source files (e.g., `src/components/common/Button.test.tsx`).
      * Unit test file naming convention: `*.test.{ts,tsx}` or `*.spec.{ts,tsx}`.

**Testing Levels**

  * **Unit Testing**
      * Scope: Individual functions, utilities, simple hooks.
      * Tools: Jest.
  * **Component Testing**
      * Scope: Individual React components.
      * Tools: Jest, React Testing Library (RTL), Storybook.
      * Focus: Rendering, props, interactions, accessibility.
  * **Integration Testing (UI and API)**
      * Scope: UI interactions between multiple components; API Route Handlers with mock data.
      * Tools: Jest, RTL (UI); Jest, supertest/mocked Next.js req/res (API).
  * **End-to-End (E2E) Testing**
      * Scope: Critical user journeys in a real browser.
      * Tools: Playwright.

**Specialized Testing Types**

  * Visual Regression Testing: Storybook addons (e.g., Chromatic) or Playwright visual comparison.
  * Performance Testing: Google Lighthouse, WebPageTest, `@next/bundle-analyzer`.
  * Accessibility Testing: `axe-core` in tests, Axe DevTools, manual checks (keyboard, screen reader).

**Test Data Management**

  * Unit/Component/Integration: Mocked data within tests or test utility files.
  * E2E (V1): Test against application serving static data from `src/content/`. 