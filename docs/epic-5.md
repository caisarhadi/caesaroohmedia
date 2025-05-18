* **Epic 5: Advanced Inventory Marketplace - Detail Pages**
    * **Goal:** Create comprehensive and interactive SSR-enabled detail pages for individual OOH inventory items, featuring rich media (multiple images, 360 viewer), detailed specifications, an embedded map, and clear enquiry/sharing options.
    * **Key Frontend Implementation Details (derived from Design Architect notes):**
        * Implement Server-Side Rendering (SSR) for individual inventory detail pages.
        * Implement an image gallery with support for multiple high-resolution images (using horizontal swipe on mobile and potentially a carousel with thumbnails on desktop).
        * Integrate or develop a 360-degree image viewer component (e.g., a wrapper around a library like Panolens.js or React Pannellum).
        * Implement an embedded map snippet on the detail page showing the precise location of the OOH site and potentially nearby POIs (reusing map components developed in Epic 6).
        * Ensure the "Enquire Now" Call-to-Action button pre-fills the inventory ID into the contact form or a dedicated inquiry modal.
        * Implement functionality for PDF spec sheet download (if spec sheets are provided as assets) and sharing options (e.g., Print, Email, WhatsApp links).
        * Develop specific React components: `DetailGallery.tsx`, `ThreeSixtyViewerWrapper.tsx`, and components for displaying detailed specifications and handling sharing options.
        * Create a Next.js Route Handler in `/app/api/inventory/{item-id}/` to serve detailed data for a specific inventory item (from `inventory.json` for V1). 