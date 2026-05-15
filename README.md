# Zenith — Company Portfolio Website

A premium, fully animated company portfolio built with **Next.js 16**, **Tailwind CSS v4**, **Framer Motion**, and **shadcn/ui**. All site content is driven by a single JSON file — no code changes needed to update text, team members, projects, or contact details.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Updating Site Content](#updating-site-content)
  - [Company Info & Hero](#1-company-info--hero)
  - [About Section](#2-about-section)
  - [Services](#3-services)
  - [Projects](#4-projects)
  - [Team Members](#5-team-members)
  - [Testimonials](#6-testimonials)
  - [Contact Details](#7-contact-details)
  - [Footer & Social Links](#8-footer--social-links)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
  - [Step 1 — Configure Next.js for static export](#step-1--configure-nextjs-for-static-export)
  - [Step 2 — Add the GitHub Actions workflow](#step-2--add-the-github-actions-workflow)
  - [Step 3 — Enable GitHub Pages](#step-3--enable-github-pages)
  - [Step 4 — Push and verify](#step-4--push-and-verify)
- [Local Development](#local-development)

---

## Features

- **Single JSON content file** — update everything without touching component code
- Deep-space dark theme with glassmorphism cards and gradient accents
- Fully animated with Framer Motion (scroll reveals, floating orbs, hover effects)
- Responsive across all screen sizes
- Static export ready — deployable to GitHub Pages, Netlify, Cloudflare Pages, or any CDN

---

## Project Structure

```
├── app/
│   ├── globals.css        # Global styles & design tokens
│   ├── layout.tsx         # Root layout & metadata
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── about.tsx
│   ├── services.tsx
│   ├── projects.tsx
│   ├── team.tsx
│   ├── testimonials.tsx
│   ├── contact.tsx
│   └── footer.tsx
├── data/
│   └── content.json       # ← All site content lives here
├── types/
│   └── index.ts           # TypeScript interfaces
└── public/                # Static assets (images, icons)
```

---

## Getting Started

**Prerequisites:** Node.js 18+ and pnpm installed.

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Updating Site Content

All content is controlled by **`data/content.json`**. Open that file and edit the relevant section. The site will hot-reload instantly in development, or rebuild on the next deploy.

### 1. Company Info & Hero

```json
"company": {
  "name": "Zenith",
  "tagline": "Digital Solutions for Modern Businesses",
  "description": "We create exceptional digital experiences that drive growth."
},
"hero": {
  "heading": "Build the Future, Today",
  "subtitle": "Transform your vision into reality with our cutting-edge solutions.",
  "ctaPrimary": "Get Started",
  "ctaSecondary": "Learn More"
}
```

| Field | Description |
|---|---|
| `company.name` | Brand name shown in the navbar logo and footer |
| `hero.heading` | Large headline — add a comma to split into two lines with gradient accent on the second part |
| `hero.ctaPrimary` | Primary CTA button (scrolls to Contact) |
| `hero.ctaSecondary` | Secondary button (scrolls to About) |

### 2. About Section

```json
"about": {
  "title": "About Us",
  "intro": "Founded in 2020...",
  "mission": "Our mission is to...",
  "stats": [
    { "value": "500+", "label": "Projects Completed" },
    { "value": "50+",  "label": "Team Members" }
  ]
}
```

- **`stats`** — Array of up to 4 stat cards. Each needs a `value` (e.g. `"98%"`) and a `label`.

### 3. Services

```json
"services": {
  "title": "Our Services",
  "subtitle": "Comprehensive digital solutions tailored to your needs",
  "items": [
    {
      "id": "1",
      "icon": "layout",
      "title": "Web Design & Development",
      "description": "Beautiful, responsive websites that convert."
    }
  ]
}
```

Available `icon` values and their meaning:

| Value | Icon |
|---|---|
| `layout` | Web / Layout |
| `palette` | Design / Branding |
| `zap` | Performance |
| `smartphone` | Mobile Apps |
| `bar-chart-2` | Analytics |
| `shield` | Security |

### 4. Projects

```json
"projects": {
  "items": [
    {
      "id": "1",
      "title": "EcoFlow Platform",
      "description": "A sustainable energy management platform.",
      "image": "https://images.unsplash.com/photo-xxx?w=800&h=500&fit=crop",
      "technologies": ["React", "Node.js", "MongoDB"],
      "link": "https://your-project-url.com"
    }
  ]
}
```

- **`image`** — Use any publicly accessible image URL, or place an image in `/public/` and reference it as `/my-image.jpg`.
- **`link`** — URL the project card navigates to. Use `"#"` to disable the link.
- The first item renders as the large featured card; items 2 and 3 render as smaller cards alongside it.

### 5. Team Members

```json
"team": {
  "members": [
    {
      "id": "1",
      "name": "Sarah Chen",
      "role": "CEO & Co-founder",
      "image": "https://images.unsplash.com/photo-xxx?w=400&h=400&fit=crop",
      "bio": "Visionary leader with 15+ years in digital transformation.",
      "social": {
        "linkedin": "https://linkedin.com/in/yourprofile",
        "twitter": "https://twitter.com/yourhandle",
        "github": "https://github.com/yourhandle"
      }
    }
  ]
}
```

- Omit any social key you don't want shown (e.g. remove `"github"` if not applicable).
- `"bio"` is optional — remove the key to hide the bio line.
- Add or remove objects in the array to add/remove team cards.

### 6. Testimonials

```json
"testimonials": {
  "items": [
    {
      "id": "1",
      "author": "Jennifer Williams",
      "title": "Founder, TechStart Inc",
      "content": "Zenith transformed our vision into reality...",
      "image": "https://images.unsplash.com/photo-xxx?w=300&h=300&fit=crop"
    }
  ]
}
```

### 7. Contact Details

```json
"contact": {
  "title": "Get In Touch",
  "subtitle": "Let's discuss how we can help transform your business",
  "email": "hello@zenith.dev",
  "phone": "+1 (555) 123-4567",
  "address": "123 Innovation Street, San Francisco, CA 94105"
}
```

### 8. Footer & Social Links

```json
"footer": {
  "copyright": "© 2024 Zenith. All rights reserved.",
  "social": {
    "twitter": "https://twitter.com/yourhandle",
    "linkedin": "https://linkedin.com/company/yourcompany",
    "github": "https://github.com/yourorg",
    "instagram": "https://instagram.com/yourhandle"
  }
}
```

Omit any social key to hide that icon from the footer.

---

## Deploying to GitHub Pages

GitHub Pages requires a **static export**. Next.js supports this natively.

### Step 1 — Configure Next.js for static export

Edit `next.config.mjs`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // enables static HTML export
  basePath: '/your-repo-name', // must match your GitHub repo name exactly
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,        // required for static export
  },
}

export default nextConfig
```

> **Note:** If you are deploying to a custom domain (e.g. `www.mycompany.com`) instead of `username.github.io/repo`, remove the `basePath` line entirely.

### Step 2 — Add the GitHub Actions workflow

Create the file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 9

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub.
2. Navigate to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Save.

### Step 4 — Push and verify

```bash
git add .
git commit -m "chore: configure static export for GitHub Pages"
git push origin main
```

The workflow will run automatically. Once complete, your site will be live at:

```
https://your-username.github.io/your-repo-name/
```

Check the **Actions** tab in your repository to monitor build progress. A green checkmark means the deploy succeeded.

---

## Local Development

```bash
pnpm dev          # start dev server at http://localhost:3000
pnpm build        # production build (outputs to .next/ or out/ if static export is on)
pnpm start        # serve the production build locally
pnpm lint         # run ESLint
```
