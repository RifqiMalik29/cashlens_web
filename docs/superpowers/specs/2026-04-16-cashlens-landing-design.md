# CashLens Landing Page — Design Spec

**Date:** 2026-04-16  
**Status:** Approved

---

## Overview

A fully static marketing landing page for CashLens, a personal finance app that eliminates manual expense tracking via receipt scanning and budgeting tools.

- **Stack:** Next.js 14 (App Router), Tailwind CSS, Framer Motion, lucide-react
- **Export:** Static (`output: 'export'`) — no server, no backend integrations
- **Font:** Inter via `next/font/google`
- **Primary color:** `#4CAF82`
- **Secondary color:** `#E8F5EE`
- **Text color:** `#1F2937` (dark)
- **Background:** white

---

## File Structure

```
app/
  layout.tsx            — root layout, Inter font, metadata, global styles
  page.tsx              — composes all section components in order
  globals.css           — Tailwind directives + smooth scroll
components/
  Navbar.tsx
  Hero.tsx
  ProblemSolution.tsx
  Features.tsx
  HowItWorks.tsx
  Testimonials.tsx
  DownloadCTA.tsx
  Footer.tsx
```

---

## Sections

### 1. Navbar
- Sticky top position
- Starts transparent, transitions to white + shadow on scroll (JS scroll listener)
- Left: "CashLens" text logo in `#4CAF82`, bold
- Center: nav links — Features, How It Works, Download (smooth scroll anchors)
- Right: "Start Budgeting Today" pill button, `#4CAF82` background, white text
- Mobile: hamburger menu that toggles a dropdown nav

### 2. Hero
- Full-viewport-height section, white background
- Two-column layout (stacks on mobile)
- Left column:
  - Large bold headline: "Your money, finally under control"
  - Subheadline: "Scan, track, and budget your expenses."
  - CTA button: "Start Budgeting Today" in `#4CAF82`
- Right column:
  - Rounded gradient placeholder box (`#4CAF82` → `#E8F5EE`) representing app mockup
  - Subtle phone frame outline styling
- Animation: fade-in + slide-up on mount (Framer Motion)

### 3. Problem / Solution
- Background: `#E8F5EE`
- Two-column layout (stacks on mobile)
- Left column: problem statement
  - Icon cluster (lucide, muted tones)
  - Headline: "Receipts pile up. Budgets slip. You lose track."
  - Supporting copy about manual tracking pain points
- Right column: solution statement
  - Green checkmark list
  - Headline: "CashLens does the work for you."
  - Supporting copy about automation and clarity

### 4. Features
- Background: white
- Section ID: `features`
- 3×2 grid of cards (2 cols on tablet, 1 col on mobile)
- Each card:
  - lucide icon in a small `#E8F5EE` rounded square
  - Bold title
  - 1–2 sentence description
  - Subtle hover: lift + border highlight
- Layout: 2 cards on top row, 3 cards on bottom row (asymmetric, centered)
- Content:
  1. Receipt Scanning (OCR) — snap a photo, expenses auto-logged
  2. Budget Management — set limits, track progress
  3. Transaction Tracking — full history at a glance
  4. Category Management — organize spending your way
  5. Secure Authentication — your data stays private
- Animation: staggered fade-in as cards enter viewport (`whileInView`)

### 5. How It Works
- Background: `#E8F5EE`
- Section ID: `how-it-works`
- Three steps in horizontal row (stacked on mobile)
- Each step:
  - Numbered circle in `#4CAF82`
  - lucide icon
  - Bold step title
  - Short description
- Steps: Scan Receipt → Categorize → Track Budget
- Arrows between steps on desktop
- Animation: sequential fade-in (`whileInView`, staggered delay)

### 6. Testimonials
- Background: white
- Three cards side-by-side (stacked on mobile)
- Each card:
  - 5-star rating (lucide Star icons in gold)
  - Quote text (dummy)
  - Avatar: initial circle in `#4CAF82` + name + label (e.g. "Freelancer")
  - Subtle card shadow

### 7. Download CTA
- Full-width section, `#4CAF82` background, white text
- Section ID: `download`
- Bold headline: "Take control of your finances today."
- Subheadline
- Two outlined pill buttons (white border/text, no fill):
  - "Download on the App Store" (placeholder, `href="#"`)
  - "Get it on Google Play" (placeholder, `href="#"`)

### 8. Footer
- Background: `#1F2937`, white text
- Three-column layout (stacks on mobile):
  - Left: "CashLens" logo + one-line tagline
  - Center: nav links (Features, How It Works, Download)
  - Right: copyright "© 2026 CashLens. All rights reserved."
- Minimal, no social icons

---

## Animations

All via Framer Motion, kept subtle:

| Component | Animation |
|-----------|-----------|
| Hero | `opacity: 0→1`, `y: 20→0` on mount |
| Feature cards | Staggered `opacity: 0→1` as each enters viewport |
| How It Works steps | Sequential fade-in with 0.15s delay each |
| Navbar | `backgroundColor` transition on scroll via CSS transition |

---

## Responsiveness

- Mobile-first Tailwind classes throughout
- Navbar collapses to hamburger below `md`
- All multi-column layouts use `flex-col` on mobile, `grid` or `flex-row` on `md+`
- Hero image/mockup box hides or moves below text on small screens

---

## Dependencies

```json
{
  "next": "14.x",
  "react": "18.x",
  "tailwindcss": "3.x",
  "framer-motion": "^11.x",
  "lucide-react": "latest"
}
```
