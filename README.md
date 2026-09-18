# sanitiX — Web Platform

The official web platform and landing portal for **sanitiX**, India's trusted on-demand utility, water supply, and sanitation services network. sanitiX connects commercial, industrial, and residential customers with verified fleet operators, heavy machinery equipment, and certified sanitation technicians.

---

## Overview

sanitiX modernizes essential utility and sanitation services through technology, transparent pricing, and rapid on-demand dispatch. This repository houses the primary web application and customer-facing portal, engineered for high performance, sub-second load times, and fluid responsiveness across all device viewports.

### Key Capabilities

- **Service Catalog**: On-demand booking interface for Water Tankers, Septic Tank Cleaning, JCB & Heavy Machinery, Dumpers, Jetting, and Vacuum Suction equipment.
- **Fleet Partner Portal**: Onboarding and KYC workflow for drivers, fleet owners, and certified sanitation contractors.
- **Interactive Booking Flow**: Frictionless modal-based service scheduling and direct dispatch routing.
- **Adaptive Screen Engine**: Custom responsive layout system optimized from compact mobile screens (360px) through 4K enterprise displays.
- **Client-Side Legal & Compliance**: Integrated terms of service and DPDP-compliant privacy policy modals.

---

## Tech Stack

- **Runtime & Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Assets**: Lossless `.webp` asset pipeline with pre-optimized responsive ratios
- **Routing**: Client-side hash routing with automated fallback for Single Page Application (SPA) hosts

---

## Project Structure

```text
sanitix-landing-page/
├── public/
│   ├── _redirects            # SPA routing rule for Netlify and static edge CDNs
│   ├── favicon.svg           # High-resolution vector favicon
│   ├── favicon_32.png        # Standard 32x32 browser icon
│   ├── apple-touch-icon.png  # iOS home screen web-clip icon
│   └── images/               # Production WebP imagery (services, team, fleet)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Responsive navigation bar with support popover & mobile drawer
│   │   ├── Hero.tsx          # Dynamic hero showcase with value-proposition highlights
│   │   ├── Services.tsx      # Interactive services catalog with smooth horizontal scrolling
│   │   ├── HowItWorks.tsx    # Step-by-step dispatch and booking workflow
│   │   ├── WhySanitix.tsx    # Value bento grid, transparency metrics, and safety pillars
│   │   ├── AboutUs.tsx       # Panoramic mission, vision, and core company values
│   │   ├── PartnerCareers.tsx# Dual bento cards for partner onboarding & career applications
│   │   ├── Footer.tsx        # Rounded bento footer with contact info & legal modals
│   │   ├── BookingModal.tsx  # Interactive on-demand service booking modal
│   │   └── NotFoundView.tsx  # 404 error boundary and quick-navigation view
│   ├── hooks/
│   │   └── useAdaptiveScreen.ts # Real-time viewport, breakpoint, and orientation hook
│   ├── App.tsx               # Root application component and state orchestration
│   ├── App.css               # Top-level application layout styles
│   ├── index.css             # Design tokens, typography variables, and utility classes
│   └── main.tsx              # DOM entry point
├── package.json              # Dependencies and lifecycle scripts
├── tsconfig.json             # TypeScript project references
├── tsconfig.app.json         # Client-side compiler options and strict rules
├── vite.config.ts            # Vite bundler options and manual vendor chunking
└── README.md                 # Project documentation
```

---

## Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

Clone the repository and install project dependencies:

```bash
git clone https://github.com/company-org/sanitix-landing-page.git
cd sanitix-landing-page
npm install
```

### Development Server

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### Production Build

Type-check and compile the production bundle:

```bash
npm run build
```

The compiled and minified output will be generated in the `dist/` directory, optimized with manual vendor chunk splitting (`vendor-react`, `vendor-framer`, `vendor-icons`).

### Preview Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Validate code style and TypeScript rules:

```bash
npm run lint
```

---

## Deployment

The production build (`dist/`) is pre-configured for automated deployment on static hosting platforms (Netlify, Vercel, AWS S3 / CloudFront, Cloudflare Pages).

### Netlify Deployment Configuration

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **SPA Routing**: Handled automatically via `public/_redirects` (`/*  /index.html  200`)

---

## Copyright & License

Copyright © 2026 Sanitix Technologies Pvt. Ltd. (A Pairow Group Company). All rights reserved.  
Unauthorized distribution, copying, or reproduction of these source files is strictly prohibited.
