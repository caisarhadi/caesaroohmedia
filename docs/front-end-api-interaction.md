**API Interaction Layer**

This section describes how the frontend communicates with backend APIs. For V1 of this project, the "backend" will primarily be Next.js Route Handlers acting as a Backend-For-Frontend (BFF), serving data from local files (JSON/Markdown).

  - **Client/Service Structure:**

      - **HTTP Client Setup:**
          - Standard `Workspace` API will be the primary mechanism.
          - A lightweight utility wrapper (e.g., `src/lib/apiClient.ts`) around `Workspace` might be created to handle: default headers (`Content-Type: application/json`), centralized error handling for common HTTP errors, and prepending a base URL (e.g., `/api`).
      - **Service Definitions (`src/services/`):**
        These modules will encapsulate client-side logic for interacting with specific API resources.
          - **Example: `inventoryService.ts`**
            ```typescript
            // src/services/inventoryService.ts
            // import { InventoryItem, InventoryItemDetail, InventoryFilterParams } from '@/types/inventory';
            // import { apiClient } from '@/lib/apiClient'; // Assuming apiClient exists

            const RESOURCE_URL = '/api/inventory';

            export const inventoryService = {
              async getInventoryList(filters?: any /* InventoryFilterParams */): Promise<any[] /* InventoryItem[] */> {
                const queryParams = filters ? new URLSearchParams(filters as Record<string, string>).toString() : '';
                const url = `${RESOURCE_URL}${queryParams ? `?${queryParams}` : ''}`;
                // return apiClient.get<InventoryItem[]>(url);
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch inventory list');
                return response.json();
              },

              async getInventoryItemById(id: string): Promise<any /* InventoryItemDetail */> {
                if (!id) throw new Error('Inventory item ID is required.');
                const url = `${RESOURCE_URL}/${id}`;
                // return apiClient.get<InventoryItemDetail>(url);
                const response = await fetch(url);
                if (!response.ok) throw new Error(`Failed to fetch inventory item ${id}`);
                return response.json();
              }
            };
            ```
          - **`mapService.ts`:** For fetching OOH site data and POI data from `/api/map-data/`.
          - **`formService.ts`:** For handling the submission of the contact form to `/api/contact`.
            ```typescript
            // src/services/formService.ts
            const CONTACT_FORM_ENDPOINT = '/api/contact';

            export const formService = {
              async submitContactForm(formData: Record<string, any>): Promise<Response> {
                const response = await fetch(CONTACT_FORM_ENDPOINT, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
                  body: JSON.stringify(formData),
                });
                // The calling component will handle response.ok and response.json()
                return response;
              }
            };
            ```
      - **Next.js Route Handlers (`src/app/api/`):**
        Server-side functions handling API requests. For V1:
          - Read data from local JSON/Markdown files (`src/content/`).
          - Process request parameters (e.g., filtering inventory).
          - Return JSON responses.
          - Handle contact form submission using Nodemailer.
          - Example structure for `src/app/api/inventory/route.ts`:
            ```typescript
            // src/app/api/inventory/route.ts
            import { NextResponse } from 'next/server';
            import inventoryData from '@/content/data/inventory.json'; // Adjust path as needed
            // import { InventoryItem } from '@/types/inventory'; // Assuming types

            export async function GET(request: Request) {
              const { searchParams } = new URL(request.url);
              // Example filtering logic (to be expanded)
              // const mediaType = searchParams.get('mediaType');
              // let itemsToReturn = inventoryData as InventoryItem[];
              // if (mediaType) {
              //   itemsToReturn = itemsToReturn.filter(item => item.mediaType === mediaType);
              // }
              // For now, returns all data
              return NextResponse.json(inventoryData);
            }
            ```
          - Example structure for `src/app/api/contact/route.ts` (using Nodemailer):
            ```typescript
            // src/app/api/contact/route.ts
            import { NextResponse } from 'next/server';
            import nodemailer from 'nodemailer';
            // import { ContactFormPayload } from '@/types/api'; // Assuming types

            export async function POST(request: Request) {
              try {
                const body = await request.json() as any; // Replace 'any' with ContactFormPayload

                // Validate body.name, body.email, body.message (add Zod or other validation)
                if (!body.name || !body.email || !body.message) {
                  return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
                }

                const transporter = nodemailer.createTransport({
                  host: process.env.SMTP_HOST,
                  port: Number(process.env.SMTP_PORT || 587),
                  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
                  auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                  },
                });

                const mailOptions = {
                  from: `"${body.name}" <${process.env.EMAIL_FROM_ADDRESS}>`, // Or a fixed from address
                  replyTo: body.email,
                  to: process.env.CONTACT_FORM_RECIPIENT_EMAIL,
                  subject: body.subject || `New Contact Form Submission from ${body.name}`,
                  text: `Name: ${body.name}\nEmail: ${body.email}\nOOH ID: ${body.oohInventoryId || 'N/A'}\nMessage: ${body.message}`,
                  html: `<p><strong>Name:</strong> ${body.name}</p>
                         <p><strong>Email:</strong> ${body.email}</p>
                         <p><strong>OOH ID:</strong> ${body.oohInventoryId || 'N/A'}</p>
                         <p><strong>Message:</strong></p>
                         <p>${body.message.replace(/\n/g, '<br>')}</p>`,
                };

                await transporter.sendMail(mailOptions);
                return NextResponse.json({ success: true, message: 'Message sent successfully!' });

              } catch (error) {
                console.error('Contact form submission error:', error);
                return NextResponse.json({ success: false, error: 'Failed to send message.' }, { status: 500 });
              }
            }
            ```

  - **Error Handling & Retries (Frontend):**

      - **Global Error Handling:**
          - A top-level React Error Boundary in `src/app/layout.tsx` or `src/app/(main)/layout.tsx` to catch rendering errors and display a fallback UI.
          - Toast notifications (e.g., `react-hot-toast`) for non-critical API errors or general feedback, managed perhaps via `uiStore`.
      - **Specific Error Handling:**
          - Components will use `try...catch` for async operations.
          - Loading and error states managed within components or feature stores.
          - Inline error messages for form validation or specific data fetch failures.
      - **External Service Failures:**
          - **Mapping Service (e.g., Mapbox Tiles/APIs):** If the external mapping service is unavailable or fails, the map functionality on the `/mapping` page and embedded map snippets will be degraded or completely unavailable. Users should be shown a clear error message indicating that map data cannot be loaded (e.g., "Unable to load map at this time. Please try again later."). Core site functionality not dependent on the map should remain operational.
          - **Email Service (for Contact Form via Nodemailer):** If the backend email sending service (e.g., SendGrid, AWS SES) used by Nodemailer is unavailable or fails, contact form submissions via `/api/contact` will fail. The user should receive an error message on the frontend indicating that their message could not be sent and suggesting alternative contact methods if available (e.g., "Your message could not be sent due to a server error. Please try again later or contact us directly via phone.").
      - **Retry Logic:** For V1, primarily manual retry (e.g., a "Retry" button for failed data loads). Automated retries are not a focus but could be added for critical, idempotent GET requests if necessary. 