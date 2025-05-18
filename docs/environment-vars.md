**Environment Vars Templates**

**Configuration Loading Mechanism**

Next.js built-in support: `.env.local` (gitignored) for local, hosting provider's UI for deployed environments. `NEXT_PUBLIC_` prefix for browser exposure.

**Required Variables**

```markdown
| Variable Name                     | Exposed to Browser? | Example Value                          | Description                                                                      | Used In      |
| :-------------------------------- | :------------------ | :------------------------------------- | :------------------------------------------------------------------------------- | :----------- |
| `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` | Yes                 | `pk.youraccesstokenhere`               | Access token for Mapbox GL JS (if Mapbox is chosen).                             | Frontend     |
| `SITE_URL`                        | No                  | `https://www.caesarooh.com`            | Base URL of the production site (for sitemap, absolute URLs).                    | Server-side  |
| `CONTACT_FORM_RECIPIENT_EMAIL`    | No                  | `contact@caesarooh.com`                | Email address to receive contact form submissions (for self-hosted).           | Server-side  |
| `SMTP_HOST`                       | No                  | `smtp.example.com`                     | SMTP server host (for self-hosted contact form).                                 | Server-side  |
| `SMTP_PORT`                       | No                  | `587`                                  | SMTP server port.                                                                | Server-side  |
| `SMTP_USER`                       | No                  | `your-smtp-username`                   | SMTP server username.                                                            | Server-side  |
| `SMTP_PASS`                       | No                  | `your-smtp-password`                   | SMTP server password.                                                            | Server-side  |
| `EMAIL_FROM_ADDRESS`              | No                  | `noreply@caesarooh.com`                | "From" address for emails sent by the system (contact form).                   | Server-side  |
| `NEXT_PUBLIC_ANALYTICS_ID`        | Yes                 | `G-XXXXXXXXXX`                         | (Optional) Google Analytics ID or similar.                                       | Frontend     |
```

**Env Var Notes**

  * Ensure `.env.local` is in `.gitignore`. Provide `.env.example` with placeholders.
  * SMTP credentials must be handled securely and not committed to the repository. 