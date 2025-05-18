**Routing Strategy**

  - **Routing Library:** Next.js App Router.
  - **Route Definitions:**
    | Path Pattern             | Corresponding File/Folder (`src/app/...`)       | Protection | Rendering   | Notes                                                              |
    | :----------------------- | :---------------------------------------------- | :--------- | :---------- | :----------------------------------------------------------------- |
    | `/`                      | `(main)/page.tsx`                               | Public     | SSR/SSG     | Homepage                                                           |
    | `/about-us`              | `(main)/about-us/page.tsx`                      | Public     | SSG         | About Us page                                                      |
    | `/solutions`             | `(main)/solutions/page.tsx`                     | Public     | SSG         | Solutions page                                                     |
    | `/insight`               | `(main)/insight/page.tsx`                       | Public     | SSR         | List of insight articles                                           |
    | `/insight/{article-slug}`| `(main)/insight/{article-slug}/page.tsx`        | Public     | SSR         | Individual insight article (dynamic route based on slug)           |
    | `/mapping`               | `(main)/mapping/page.tsx`                       | Public     | CSR         | Interactive map view                                               |
    | `/inventory`             | `(main)/inventory/page.tsx`                     | Public     | SSR         | List of OOH inventory items                                        |
    | `/inventory/{item-id}`   | `(main)/inventory/{item-id}/page.tsx`           | Public     | SSR         | Individual OOH inventory item detail (dynamic route based on ID) |
    | `/contact-us`            | `(main)/contact-us/page.tsx`                    | Public     | SSG/CSR     | Contact Us page (form interaction is CSR)                          |
  - **Route Guards / Protection:** N/A for V1. Future auth via Next.js Middleware. 