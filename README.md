# CAESAR OOH MEDIA Website Modernization

This project is a modern website for CAESAR OOH MEDIA, an out-of-home advertising media provider in Indonesia. It serves as a comprehensive informational hub, an industry insight resource, and a powerful OOH inventory exploration and marketplace tool.

## Features

- Responsive design with dark/light mode
- Interactive mapping with POI integration
- OOH inventory marketplace
- Insight articles
- Advanced animations with GSAP
- Twin scrolling and drawer navigation

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP
- **State Management**: Zustand
- **Mapping**: Mapbox GL JS
- **Testing**: Jest, React Testing Library, Playwright
- **Component Development**: Storybook

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd caesarooh
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
caesarooh/
├── app/                    # Next.js App Router
│   ├── about/              # About Us page
│   ├── api/                # API Route Handlers
│   ├── contact/            # Contact Us page
│   ├── insights/           # Insights section
│   ├── inventory/          # Inventory marketplace
│   ├── mapping/            # Interactive mapping page
│   ├── solutions/          # Solutions page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/             # Reusable components
│   ├── common/             # Common UI components
│   ├── drawer/             # Drawer navigation
│   ├── insights/           # Insights-specific components
│   ├── inventory/          # Inventory-specific components
│   ├── layout/             # Layout components
│   └── map/                # Map-related components
├── content/                # Static content (markdown, json)
│   ├── insights/           # Insight articles (markdown)
│   └── inventory/          # Inventory data (json)
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and configurations
├── public/                 # Static assets
├── services/               # API services
├── store/                  # Zustand stores
│   ├── uiStore.ts          # UI state store
│   ├── mapStore.ts         # Map-related state
│   └── inventoryStore.ts   # Inventory-related state
├── styles/                 # Global styles
└── types/                  # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run test` - Run Jest tests
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run storybook` - Start Storybook for component development

## Contributing

Please follow the established code style and conventions. Create feature branches and submit pull requests for review.

## License

This project is licensed under the [MIT License](LICENSE). 