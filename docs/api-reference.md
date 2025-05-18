**API Reference**

**Internal APIs Provided (Next.js Route Handlers)**

These APIs are part of the Next.js application, located under `src/app/api/`.

**Inventory API**

  * Purpose: To provide OOH inventory data to the frontend for the marketplace listing and detail pages.
  * Base URL(s): `/api/inventory`
  * Authentication/Authorization: None for V1 (public data).
  * Endpoints:
      * `GET /api/inventory`:
          * Description: Retrieves a list of OOH inventory items. Supports filtering and sorting via query parameters.
          * Request Parameters (Query): e.g., `mediaType`, `location`, `size`, `sortBy`, `sortOrder`.
          * Success Response Schema (Code: `200 OK`): Array of `OOHInventoryItem` objects.
      * `GET /api/inventory/{item-id}`:
          * Description: Retrieves details for a specific OOH inventory item by its ID.
          * Request Parameters (Path): `item-id` (string).
          * Success Response Schema (Code: `200 OK`): Single `OOHInventoryItem` object.
          * Error Response Schema (Code: `404 Not Found`): `{ "error": "Inventory item not found" }`

**Map Data API**

  * Purpose: To provide geographical data for OOH sites and Points of Interest (POIs) for the Mapping page.
  * Base URL(s): `/api/map-data`
  * Authentication/Authorization: None for V1.
  * Endpoints:
      * `GET /api/map-data/ooh-sites`:
          * Description: Retrieves OOH site locations as GeoJSON.
          * Success Response Schema (Code: `200 OK`): GeoJSON FeatureCollection of OOH sites.
      * `GET /api/map-data/pois`:
          * Description: Retrieves POI locations as GeoJSON. Supports filtering by category.
          * Request Parameters (Query): `category` (optional string).
          * Success Response Schema (Code: `200 OK`): GeoJSON FeatureCollection of POIs.

**Insights API**

  * Purpose: To provide insight articles to the frontend.
  * Base URL(s): `/api/insight`
  * Authentication/Authorization: None for V1.
  * Endpoints:
      * `GET /api/insight`:
          * Description: Retrieves a list of insight article summaries (metadata).
          * Success Response Schema (Code: `200 OK`): Array of `InsightArticle` metadata.
      * `GET /api/insight/{article-slug}`:
          * Description: Retrieves the full content of a specific insight article.
          * Request Parameters (Path): `article-slug` (string).
          * Success Response Schema (Code: `200 OK`): Single `InsightArticle` object with full content.
          * Error Response Schema (Code: `404 Not Found`): `{ "error": "Insight article not found" }`

**Contact Form API (Self-hosted via Next.js API Route & Nodemailer)**

  * Purpose: To handle contact form submissions by sending an email to CAESAR OOH MEDIA.
  * Base URL(s): `/api/contact` (example, can be customized)
  * Authentication/Authorization: None directly for the endpoint, but relies on secure email sending configuration.
  * Endpoints:
      * `POST /api/contact`:
          * Description: Receives contact form data from the client, validates it, and uses Nodemailer to send an email via a configured email service (e.g., SMTP, SendGrid, AWS SES).
          * Request Body Schema: `ContactFormPayload` (see Data Models section). Example:

<!-- end list -->

```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "subject": "Question about services",
  "message": "I'd like to learn more about your billboard options."
}
```

```
    * Success Response Schema (Code: `200 OK`):
```

```json
{ "success": true, "message": "Your message has been sent successfully!" }
```

```
    * Error Response Schema (Code: `400 Bad Request` for validation errors, `500 Internal Server Error` for email sending failures):
```

```json
// Example 400
{ "success": false, "error": "Invalid form data", "details": { "email": "Please provide a valid email address." } }
// Example 500
{ "success": false, "error": "Failed to send message. Please try again later." }
``` 