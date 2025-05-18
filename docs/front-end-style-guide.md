**Branding & Style Guide Basics**

  - **Primary Logo:** (Placeholder: Awaiting final CAESAR OOH MEDIA logo assets. High-resolution vector formats suitable for web are required). Versions adaptable to both light and dark backgrounds must be provided or created.
  - **Detailed Style Guide Development:** The comprehensive, definitive brand style guide—including finalized color palettes (primary, secondary, accents, neutrals for both themes), detailed typography scales and font pairings, the official iconography system, spacing and grid system rules, and specific imagery guidelines—will be developed and managed by the user, potentially using separate specialized AI tools or a dedicated design process. This UI/UX Specification document will align with that definitive style guide once it is established.
  - **Placeholders for this document (to be updated and aligned with the full Style Guide once developed):**
      - **Color Palette:**
          - Primary Brand Colors: `{Placeholder for main brand color(s) - Hex codes, names}`
          - Secondary Brand Colors: `{Placeholder for supporting brand color(s) - Hex codes, names}`
          - Accent Colors: `{Placeholder for colors used for CTAs, highlights, interactive elements - Hex codes, names}`
          - Neutral Grays (Light Theme): `{Placeholder for a defined range of grays for text, backgrounds, borders in light theme}`
          - Neutral Grays (Dark Theme): `{Placeholder for a defined range of grays for text, backgrounds, borders in dark theme}`
          - Feedback Colors (for messages, alerts):
              - Success: `{Placeholder for green shade}`
              - Warning: `{Placeholder for amber/yellow shade}`
              - Error: `{Placeholder for red shade}`
              - Info: `{Placeholder for blue shade}`
          - *(All selected colors must be rigorously checked to ensure they meet or exceed WCAG 2.1 AA contrast ratios for text and UI elements in both light and dark themes).*
      - **Typography:**
          - Primary Font Family (Headings): `{Placeholder for Font Name(s) and import details; e.g., Montserrat, Open Sans}`
              - Weights: `{Placeholder for specific weights to be used, e.g., Bold (700), Semi-Bold (600)}`
          - Secondary Font Family (Body & UI Text): `{Placeholder for Font Name(s) and import details; e.g., Roboto, Lato}`
              - Weights: `{Placeholder for specific weights, e.g., Regular (400), Medium (500)}`
          - Font Sizes & Line Heights: `{Placeholder for a defined typographic scale for H1, H2, H3, H4, body text, captions, labels, etc. This will be developed during the detailed visual design phase. Example: Body: 16px base, Line Height 1.5-1.7}`
      - **Iconography:**
          - Icon Style: `{Placeholder for defined style, e.g., Outline, Solid, Duotone. Must feel modern, clean, and align with the brand aesthetic.}`
          - Icon Set/Source: `{Placeholder for chosen icon library, e.g., Feather Icons, Heroicons, Material Symbols, or a custom-designed set. Link to set if applicable.}`
          - Icons should be visually consistent, pixel-perfect where possible, and provided in SVG format for scalability and styling capabilities.
      - **Spacing & Grid:**
          - Base Unit: `{Placeholder for a defined base unit for spacing, e.g., an 8px or 4px grid system. All margins, paddings, and layout spacing should be multiples of this unit to ensure consistency.}`
          - Layout Grid: `{Placeholder for standard layout columns and gutters for responsive design, e.g., a 12-column grid system for desktop views, with adaptations for tablet and mobile.}`
      - **Imagery Style:**
          - `{Placeholder for guidelines on photography and illustration style. Photographs should be high-quality, professional, and effectively showcase OOH media and company values. Consider how imagery will adapt or if alternative versions/treatments are needed for dark mode to maintain visual appeal and legibility.}`

---
**Accessibility (AX) Requirements (Relevant to Style Guide)**

  - **Target Compliance:** WCAG 2.1 Level AA.
  - **General Principles (POUR) - Perceivable:**
      - Ensure sufficient color contrast between text and its background, as well as for meaningful UI components and graphical elements, in both light and dark themes (minimum 4.5:1 for normal text and UI components, 3:1 for large text [18pt or 14pt bold]).
      - Do not rely solely on color to convey information, indicate an action, prompt a response, or distinguish a visual element.
  - **Dark/Light Mode:** Both themes must independently meet all color contrast requirements. Ensure that text and interactive elements are clearly distinguishable in both modes.

---
**Responsiveness Strategy**

The website will be designed and developed using a mobile-first responsive approach to ensure an optimal user experience across a wide range of devices, from mobile phones to tablets and desktops.

  - **Approach:** Mobile-first. The design and styling process will begin with the smallest viewport (mobile), establishing a solid foundation for content, layout, and functionality. Enhancements and layout adjustments will then be progressively added for larger breakpoints (tablet, desktop).
  - **Key Breakpoints (based on common device widths and alignable with Tailwind CSS defaults; these can be customized further during development):**
      - **Mobile (Default):** `0px` up to `639px` (Tailwind's `sm` breakpoint starts at `640px`, so this covers viewports smaller than `sm`).
          - Layouts will primarily be single-column to optimize for narrow screens.
          - Navigation and controls will be designed to be touch-friendly and easily accessible.
          - The Drawer navigation will be the primary menu system.
          - Horizontal swiping will be implemented for image galleries (e.g., in Inventory Detail pages) and potentially for card carousels (e.g., Insight article list).
      - **Tablet (Small to Medium):** `640px` (Tailwind `sm`) up to `1023px` (Tailwind `lg` starts at `1024px`).
          - May introduce two-column layouts for some content sections where appropriate.
          - Increased spacing and potentially larger tap targets compared to mobile.
          - Drawer navigation is likely still the preferred primary menu, or a compact version of the header menu might be considered.
      - **Desktop (Large):** `1024px` (Tailwind `lg`) and upwards.
          - Wider layouts, utilizing multi-column designs (e.g., two, three, or more columns as appropriate for the content).
          - Full header navigation may be displayed (though the PRD allows for optionally retaining the drawer for a cleaner look on desktop).
          - Enhanced hover interactions and more complex visual presentations can be utilized.
          - Sophisticated interactions like Vertical Twin Scrolling effects are primarily targeted for this viewport range.
      - **(Optional) XL Desktop:** `1280px` (Tailwind `xl`) or `1536px` (Tailwind `2xl`) and upwards.
          - For very large screens, the design may utilize even wider layouts, increased margins, or larger visual elements if the content and design aesthetics benefit from it, ensuring content remains comfortable to read and interact with.
  - **Adaptation Strategy:**
      - **Layouts:** Utilize CSS Grid and Flexbox extensively for creating fluid and adaptable layouts that reflow gracefully across breakpoints. Tailwind CSS's responsive prefixes (e.g., `sm:`, `md:`, `lg:`, `xl:`) will be used pervasively for applying breakpoint-specific styles.
      - **Navigation:**
          - **Header:** The header structure (Logo, Menu Toggle for mobile/tablet, Dark/Light Mode Switch) will adapt. On desktop, main navigation links might be displayed directly in the header or still accessed via the menu toggle for a cleaner aesthetic.
          - **Drawer Menu:** Will typically be full height or cover a significant portion of the screen on mobile. On desktop, if used, it might appear as a fixed-width panel.
          - **Footer:** Content within the footer (contact form snippet, contact details, map snippet, social links) will stack vertically on mobile and arrange into columns on larger screens. The compact contact form will need careful responsive design to remain usable on all screen sizes.
      - **Typography:** Font sizes, line heights, and margins for typographic elements may adjust slightly across breakpoints (responsive typography) to maintain optimal readability and visual hierarchy.
      - **Images:** Implement responsive images using the `<picture>` element or the `srcset` and `sizes` attributes of the `<img>` tag (or via `next/image` component which handles this) to serve appropriately sized and optimized images for different viewports and device resolutions. Lazy loading will be standard for off-screen images.
      - **Data Heavy Sections (Map, Inventory):**
          - **Mapping Page:** Filter panels might be implemented as full-screen modals or slide-in panels on mobile devices, transitioning to sidebars or integrated panels on desktop. Map interaction tools and information popups must be designed to be easily accessible and usable on all screen sizes.
          - **Inventory List:** Inventory item cards/list items will stack vertically on mobile. The advanced filtering and sorting UI will adapt (e.g., displayed in a modal or sheet on mobile, and as a sidebar or prominent top bar section on desktop).
      - **Interactive Elements:**
          - **Horizontal Swiping (Mobile):** Confirmed for image galleries in Inventory Detail pages and for the Insight article cards list. Clear visual affordances (e.g., partial visibility of next/previous items, pagination dots) should indicate swipability. These will primarily be single-finger swipe interactions.
          - **Vertical Twin Scrolling (Desktop):** This advanced GSAP-driven effect will be applied to specific content-rich pages or sections (e.g., parts of the Homepage, Inventory detail pages, Insight articles) as determined by the detailed visual design. This effect will likely be disabled on mobile and tablet viewports to prioritize performance, simpler interaction models, and avoid potential usability issues on smaller screens.
      - **Touch Targets:** Ensure that all interactive elements (buttons, links, form controls, custom toggles) have adequate touch target sizes on mobile and tablet devices (e.g., meeting or exceeding a minimum of 44x44 CSS pixels) to prevent accidental taps and improve usability.
      - **Advanced Touch Interactions (Primarily for Map and 360 Viewer components):**
          - **Standard Gestures:**
              - **Single Tap/Click:** For standard selection, activation of controls.
              - **Drag/Pan (Single Finger):** For navigating the map, scrolling through overflowing content.
              - **Swipe (Single Finger):** For navigating carousels, dismissing the drawer menu (if designed as such), switching between tabs if applicable.
          - **Multi-Touch Gestures (Context-Dependent, especially on Map and 360 Views):**
              - **Pinch-to-Zoom (Two Fingers):** Standard for zooming in and out on interactive maps and potentially on 360-degree images. The interaction must feel smooth, responsive, and natural.
              - **Two-Finger Pan/Scroll:** May be used by underlying map libraries as an alternative to or in conjunction with single-finger pan, or for specific interactions within complex components.
              - **Two-Finger Rotate:** If the chosen map library or 360-degree viewer supports rotation via touch, this gesture might be enabled.
              - **Multi-Finger Taps/Gestures (3+ fingers):** Custom web application gestures beyond two fingers are generally rare due to complexity, potential conflicts with operating system or browser-level gestures, and limited intuitive use cases. For this project, the primary focus will be on robust single and two-finger gestures. Custom multi-finger gestures (3-5 fingers) are considered **out of scope for V1** unless a very specific, high-value, and non-conflicting use case is identified and approved for a particular core component (e.g., a specialized interaction within the map component if provided by the chosen map library and deemed essential for the user experience).
          - **Gesture Handling:**
              - Interactions should be designed to be elegant and intuitive, avoiding conflicts between different gestures (e.g., a vertical swipe to scroll the page vs. a horizontal swipe within a carousel).
              - Visual feedback during gesture interactions (e.g., the map zooming around the pinch center point) is important for user understanding.
              - Gesture handling must be performant to avoid jank, lag, or unresponsiveness.
              - For complex components like maps (e.g., Mapbox GL JS) or potential 360-degree viewer libraries, their built-in gesture handling capabilities will be leveraged and configured for an optimal user experience.
              - Any custom gesture implementation (if absolutely necessary) will be carefully considered and thoroughly tested to avoid interference with native browser or operating system gestures.
      - **Testing:** The website must be tested thoroughly on a range of real devices (smartphones, tablets) and emulators across all defined breakpoints to ensure consistent appearance, functionality, and usability. This includes testing different orientations (portrait and landscape). 