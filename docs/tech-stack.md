**Definitive Tech Stack Selections**

Preferred Starter Template Frontend: New Next.js project with TypeScript (`create-next-app --typescript`).
Preferred Starter Template Backend: N/A (Backend is part of Next.js project).
Primary Language(s) & Version(s): TypeScript 5.x.
Primary Runtime(s) & Version(s): Node.js 20.x or higher.

| Category             | Technology                        | Version / Details             | Description / Purpose                                       | Justification (Optional)                                                                 |
| :------------------- | :-------------------------------- | :---------------------------- | :---------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| **Languages** | TypeScript                        | ~5.3.x (latest stable)        | Primary language for Next.js app (frontend & BFF)           | Type safety, improved maintainability, better tooling.                                   |
| **Runtime** | Node.js                           | ^20.0.0 (LTS)                 | Server-side execution environment for Next.js               | Required by Next.js.                                                                     |
| **Frameworks** | Next.js                           | ^14.0.0 (App Router)          | Full-stack React framework                                  | Hybrid rendering, routing, image optimization, API routes.                               |
|                      | React                             | ^18.2.0                       | Frontend UI library                                         | Core of Next.js.                                                                         |
| **Styling** | Tailwind CSS                      | ^4.0.0-alpha (or latest stable) | Utility-first CSS framework                               | Rapid UI development, responsive design, dark mode.                                      |
| **Animations** | GSAP (GreenSock Animation Platform) | Latest stable                 | JavaScript animation library                                | Sophisticated, performant animations. Review licensing for commercial use.              |
| **Mapping** | Mapbox GL JS                      | Latest stable                 | Interactive map rendering                                   | Recommended. *Alternatives: MapLibre GL JS, Leaflet.* Potentially paid at scale.           |
| **State Management** | Zustand                           | Latest stable                 | Frontend state management                                   | Lightweight, simple, scalable.                                                           |
| **Databases (V1)** | Flat Files (JSON, GeoJSON, MD)    | N/A                           | Initial data storage                                        | Simplicity for V1. *Evaluate DBaaS for future.* |
| **Contact Form** | Nodemailer                        | Latest stable                 | Library to send emails from Node.js (for contact form)      | Enables self-hosted contact form submission.                                             |
|                      | Email Service Provider (e.g., SendGrid, AWS SES, Resend) | N/A            | For sending emails via Nodemailer                           | Required if self-hosting contact form. Free tiers often available.                      |
| **Cloud Platform** | User's Existing Hosting           | User Provided                 | Hosting for the Next.js application                         | Constraint. Must support Node.js or advanced static hosting. Potentially paid.           |
| **UI Primitives** | Radix UI (or similar headless)    | Latest stable                 | Unstyled, accessible UI primitives                          | Foundation for Shadcn/ui-inspired custom components.                                     |
| **Testing** | Jest                              | Latest stable                 | Unit/Component/Integration testing framework                | Widely used for React.                                                                   |
|                      | React Testing Library             | Latest stable                 | Testing React components                                    | User-centric testing.                                                                    |
|                      | Playwright                        | Latest stable                 | End-to-end testing framework                                | Modern, cross-browser.                                                                   |
| **CI/CD** | GitHub Actions (Recommended)      | N/A                           | Continuous Integration/Deployment                           | Automation. Free/paid tiers.                                                             |
| **Other Tools** | ESLint, Prettier                  | Latest stable                 | Code linting & formatting                                   | Code quality and consistency.                                                            |
|                      | Storybook                         | Latest stable                 | UI component development & documentation                    | Isolated development, visual testing. Potentially paid for advanced hosting/features.    |
``` 