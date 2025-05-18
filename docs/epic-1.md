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