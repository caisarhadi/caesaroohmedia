**Security Best Practices**

  * HTTPS: Enforce across the site.
  * Input Validation: Server-side (API Routes) using libraries like Zod for schema validation. Client-side for UX.
  * XSS Prevention: Rely on React's JSX escaping. Sanitize HTML if `dangerouslySetInnerHTML` is unavoidable.
  * CSRF Prevention: For V1 (mostly data reads and self-contained contact form), standard Next.js same-site cookie behavior offers protection. If auth is added later, implement CSRF tokens for state-changing requests.
  * Secure Headers: Use Next.js defaults and customize `Content-Security-Policy` as needed.
  * Dependency Management: Regularly update dependencies (`npm audit`).
  * Rate Limiting (API Routes): Consider for future if API routes become public or heavily used.
  * Secrets Management: Use environment variables provided by hosting for secrets, never commit them.

-----

**Implementation Guidance**

(... other subsections like Coding Standards & Practices, Technical Documentation if more detail was added previously ...)

**Development Environment**

  * Local development environment setup: `next dev`, `.env.local`.
  * Required tools and configurations: Node.js, Next.js, TypeScript, ESLint, Prettier.
  * Source control practices: Git is implied (Monorepo, CI/CD triggers).
  * Dependency management approach: npm/yarn via `package.json`.
  * Development-time Fallbacks for External Services:
      * To ensure a smoother development experience when external services might be intermittently unavailable or not yet configured for all developers:
          * Mapping Service (e.g., Mapbox): Consider implementing simple mocks or flags to disable map-dependent features during local development if the service/API key is unavailable. This prevents critical UI breakage.
          * Contact Form Email Sending: During local development, emails sent via the `/api/contact` route could optionally be configured (e.g., via an environment variable `NODE_ENV === 'development'`) to log their content to the console instead of attempting to send via an external email service. This allows for testing form submission logic without requiring full SMTP/email service setup for every developer. 