* **Epic 6: Advanced Mapping Page with POI Integration**
    * **Goal:** Implement the highly interactive Client-Side Rendered (CSR) Mapping page, allowing users to visualize OOH sites, explore nearby Points of Interest (POIs) within a radius, and utilize advanced filtering, search, and map interaction tools.
    * **Key Frontend Implementation Details (derived from Design Architect notes):**
        * Implement the main mapping interface as a Client-Side Rendered (CSR) page to ensure high interactivity and dynamic updates.
        * Integrate the chosen mapping library (e.g., Mapbox GL JS or an alternative like MapLibre GL JS/Leaflet).
        * Display OOH sites and POIs on the map using distinct, clearly styled markers.
        * Implement the OOH Site Info Panel/Popup that appears on marker click, showing details, an embedded map snippet (if different zoom/context), and an option to trigger a 360 view if available.
        * Implement robust filtering (e.g., by media type, availability) and search functionality (e.g., by address, OOH ID) that updates the map view dynamically.
        * Implement map interaction tools such as zoom controls, pan, measure distance (basic), and a feature to show nearby OOH sites or POIs within a user-defined or preset radius.
        * Integrate with `mapService.ts` for fetching OOH site and POI data, and `mapStore.ts` (Zustand) for managing map-related state (filters, selected items, viewport, POI visibility).
        * Develop specific React components: `MapWrapper.tsx` (to encapsulate map library logic), `OOHMarker.tsx`, `POIMarker.tsx`, `MapFilterPanel.tsx`, and `OOHSiteInfoPanel.tsx`.
        * Create Next.js Route Handler in `/app/api/map-data/` to serve OOH site and POI data (from local GeoJSON/JSON files for V1). 