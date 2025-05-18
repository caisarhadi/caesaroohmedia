* **Epic 3: Insight Section**
    * **Goal:** Implement the "Insight" section for displaying articles dynamically from Markdown files, ensuring good readability, SSR for SEO, a modern presentation with swipeable cards on mobile, and a dedicated reading mode.
    * **Key Frontend Implementation Details (derived from Design Architect notes):**
        * Implement Server-Side Rendering (SSR) for both the Insight list page and individual article detail pages to ensure content is SEO-friendly and readily available.
        * Develop a robust Markdown rendering component (e.g., using `react-markdown` with plugins like `remark-gfm`) capable of handling formatted text, images, code blocks, and other common Markdown elements.
        * Implement a horizontal swipeable card layout for the Insight list page on mobile views for better navigability.
        * Implement the "Reading Mode" toggle feature and its associated UI changes (e.g., increased font size, wider line spacing, simplified layout).
        * Develop specific React components: `InsightCard.tsx` for the list view and `ArticleRenderer.tsx` for displaying the parsed Markdown content.
        * Create Next.js Route Handlers in `/app/api/insights/` (and potentially `/app/api/insights/{article-slug}/`) to read, parse, and serve Markdown content (or metadata for lists) from the `src/content/insights/` directory. 