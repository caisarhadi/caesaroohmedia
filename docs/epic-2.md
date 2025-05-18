* **Epic 2: Standard Informational Pages** (About Us, Solutions, Contact Us)
    * **Goal:** Develop the About Us, Solutions, and Contact Us pages with responsive, theme-aware layouts and content, ensuring forms and maps are functional.
    * **Key Frontend Implementation Details (derived from Design Architect notes):**
        * Stories for these pages must explicitly mention creating responsive layouts that adhere to both dark and light themes.
        * Implement the compact contact form snippet in the website footer, ensuring it integrates with `formService.ts`.
        * Implement the main contact form on the Contact Us page, ensuring robust validation and integration with `formService.ts` (which will utilize the Nodemailer backend via an API route).
        * Implement the embedded map (e.g., using the chosen mapping library or a simple iframe if appropriate) for the company's office location on the Contact Us page. 