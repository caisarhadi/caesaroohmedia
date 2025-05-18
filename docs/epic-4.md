* **Epic 4: Advanced Inventory Marketplace - Core & Listing View**
    * **Goal:** Develop the core infrastructure and the main listing view for the OOH Inventory marketplace, featuring SSR, advanced filtering and sorting capabilities, and a smooth user experience with skeleton loading.
    * **Key Frontend Implementation Details (derived from Design Architect notes):**
        * Implement Server-Side Rendering (SSR) for the main inventory listing view for optimal SEO and initial load performance.
        * Design and implement the advanced filtering and sorting UI, ensuring the filter panel is responsive and user-friendly on all devices.
        * Integrate with `inventoryService.ts` for data fetching. This service will interact with corresponding API Route Handlers in `/app/api/inventory/`.
        * The API Route Handlers must implement logic for filtering and sorting the inventory list based on query parameters (data sourced from `inventory.json` for V1).
        * Implement skeleton loading (e.g., using Tailwind's `animate-pulse` or dedicated skeleton components) for `InventoryCard` components while data is being fetched or filtered.
        * Develop specific React components: `InventoryCard.tsx` for displaying individual items in the list, and `InventoryFilterPanel.tsx` for the filtering UI. 