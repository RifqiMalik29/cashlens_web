# CashLens Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fully static, modern marketing landing page for CashLens using Next.js 14 App Router, Tailwind CSS, Framer Motion, and lucide-react.

**Architecture:** Component-per-section pattern — each page section lives in its own file under `components/`. `app/page.tsx` imports and composes them in order. No server-side logic; the project exports as a static site.

**Tech Stack:** Next.js 14, React 18, Tailwind CSS 3, Framer Motion 11, lucide-react, next/font/google (Inter)

---

## File Map

| File | Responsibility |
|------|---------------|
| `package.json` | Project dependencies |
| `next.config.js` | Static export config |
| `tailwind.config.ts` | Theme colors, font, content paths |
| `postcss.config.js` | Tailwind + autoprefixer |
| `app/globals.css` | Tailwind directives, smooth scroll |
| `app/layout.tsx` | Root layout, Inter font, metadata |
| `app/page.tsx` | Composes all section components |
| `components/Navbar.tsx` | Sticky nav, scroll-aware bg, mobile menu |
| `components/Hero.tsx` | Headline, subheadline, CTA, mockup box |
| `components/ProblemSolution.tsx` | 2-col problem/solution section |
| `components/Features.tsx` | 5-card grid (2 top, 3 bottom) |
| `components/HowItWorks.tsx` | 3-step horizontal flow |
| `components/Testimonials.tsx` | 3 dummy testimonial cards |
| `components/DownloadCTA.tsx` | Full-width green CTA band |
| `components/Footer.tsx` | Logo, links, copyright |

---

### Task 1: Scaffold Next.js project and install dependencies

**Files:**
- Create: `package.json`
- Create: `next.config.js`
- Create: `postcss.config.js`
- Create: `tailwind.config.ts`
- Create: `tsconfig.json`

- [ ] **Step 1: Initialise the project**

Run from `/Users/malikas/Work/cashlens_web`:
```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*" --use-npm
```
When prompted, accept all defaults.

- [ ] **Step 2: Install additional dependencies**

```bash
npm install framer-motion lucide-react
```

- [ ] **Step 3: Configure static export**

Replace the contents of `next.config.js` (or `next.config.ts` if generated) with:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}

module.exports = nextConfig
```

- [ ] **Step 4: Configure Tailwind theme**

Replace `tailwind.config.ts` with:
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF82',
        secondary: '#E8F5EE',
        dark: '#1F2937',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 5: Verify dev server starts**

```bash
npm run dev
```
Expected: Server starts on `http://localhost:3000` with no errors.

- [ ] **Step 6: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Next.js 14 project with Tailwind, Framer Motion, lucide-react"
```

---

### Task 2: Global styles and root layout

**Files:**
- Modify: `app/globals.css`
- Create/Modify: `app/layout.tsx`

- [ ] **Step 1: Write globals.css**

Replace `app/globals.css` with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-white text-dark font-sans antialiased;
}
```

- [ ] **Step 2: Write app/layout.tsx**

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CashLens — Scan, track, and budget your expenses',
  description:
    'CashLens eliminates manual expense tracking by digitizing receipts and simplifying budgeting for individuals and small households.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: global styles and root layout with Inter font"
```

---

### Task 3: Navbar component

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Create components/Navbar.tsx**

```tsx
'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Download', href: '#download' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-primary">
          CashLens
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dark hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#download"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-opacity-90 transition-all"
        >
          Start Budgeting Today
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-dark"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-dark hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold"
          >
            Start Budgeting Today
          </a>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: Navbar with scroll-aware background and mobile menu"
```

---

### Task 4: Hero component

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create components/Hero.tsx**

```tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark leading-tight">
              Your money,{' '}
              <span className="text-primary">finally under control</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-md mx-auto md:mx-0">
              Scan, track, and budget your expenses — CashLens turns your receipts
              into instant insight.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#download"
                className="px-8 py-3 rounded-full bg-primary text-white font-semibold text-base hover:bg-opacity-90 transition-all shadow-md"
              >
                Start Budgeting Today
              </a>
              <a
                href="#features"
                className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold text-base hover:bg-secondary transition-all"
              >
                See Features
              </a>
            </div>
          </motion.div>

          {/* App mockup placeholder */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative w-64 h-[500px] rounded-[2.5rem] border-4 border-gray-200 shadow-2xl overflow-hidden bg-gradient-to-b from-primary to-secondary flex items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-200 rounded-b-2xl" />
              <span className="text-white font-bold text-xl opacity-60">CashLens</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: Hero section with animated headline and app mockup"
```

---

### Task 5: ProblemSolution component

**Files:**
- Create: `components/ProblemSolution.tsx`

- [ ] **Step 1: Create components/ProblemSolution.tsx**

```tsx
'use client'

import { motion } from 'framer-motion'
import { ReceiptText, CheckCircle2 } from 'lucide-react'

const problems = [
  'Receipts pile up and get lost',
  'Manual spreadsheets are tedious',
  'You never know where your money went',
]

const solutions = [
  'Snap a photo — expenses are logged instantly',
  'Budgets set themselves from your spending history',
  'Full transaction history always at your fingertips',
]

export default function ProblemSolution() {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 mb-6">
              <ReceiptText className="text-red-500" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-dark mb-4">
              Receipts pile up. Budgets slip. You lose track.
            </h2>
            <p className="text-gray-500 mb-6">
              Managing personal finances manually is exhausting. Most people give
              up before they even start — and end up spending more than they planned.
            </p>
            <ul className="space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-1 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary bg-opacity-10 mb-6">
              <CheckCircle2 className="text-primary" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-dark mb-4">
              CashLens does the work for you.
            </h2>
            <p className="text-gray-500 mb-6">
              Just scan your receipts. CashLens automatically logs, categorizes, and
              tracks every expense — so you always know where your money is going.
            </p>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ProblemSolution.tsx
git commit -m "feat: ProblemSolution section with animated two-column layout"
```

---

### Task 6: Features component

**Files:**
- Create: `components/Features.tsx`

- [ ] **Step 1: Create components/Features.tsx**

```tsx
'use client'

import { motion } from 'framer-motion'
import { ScanLine, PiggyBank, List, Tag, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: ScanLine,
    title: 'Receipt Scanning (OCR)',
    description: 'Snap a photo of any receipt and watch your expenses get logged automatically — no typing required.',
  },
  {
    icon: PiggyBank,
    title: 'Budget Management',
    description: 'Set spending limits per category and track your progress in real time throughout the month.',
  },
  {
    icon: List,
    title: 'Transaction Tracking',
    description: 'Your full expense history in one place. Search, filter, and review every purchase at a glance.',
  },
  {
    icon: Tag,
    title: 'Category Management',
    description: 'Create and customize spending categories so your budget reflects the way you actually live.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Authentication',
    description: 'Your financial data is protected with industry-standard authentication. Only you see your numbers.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Everything you need to manage your money
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            CashLens packs powerful personal finance tools into a clean, simple experience.
          </p>
        </div>

        {/* Row 1: 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 max-w-3xl mx-auto">
          {features.slice(0, 2).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Row 2: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.slice(2).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const Icon = feature.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group p-6 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-md transition-all cursor-default"
    >
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-secondary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-lg font-semibold text-dark mb-2">{feature.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Features.tsx
git commit -m "feat: Features section with 5-card asymmetric grid and hover animations"
```

---

### Task 7: HowItWorks component

**Files:**
- Create: `components/HowItWorks.tsx`

- [ ] **Step 1: Create components/HowItWorks.tsx**

```tsx
'use client'

import { motion } from 'framer-motion'
import { ScanLine, Tag, TrendingUp, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ScanLine,
    title: 'Scan Receipt',
    description: 'Open CashLens and snap a photo of your receipt. Our OCR engine reads it instantly.',
  },
  {
    number: '02',
    icon: Tag,
    title: 'Categorize',
    description: 'CashLens suggests a category automatically. Confirm or change it with one tap.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Track Budget',
    description: 'Watch your spending update in real time and see exactly how much budget remains.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Up and running in 3 steps
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            No spreadsheets. No setup. Just scan and go.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex flex-col md:flex-row items-center flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="flex-1 bg-white rounded-2xl p-8 text-center shadow-sm w-full"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <div className="flex justify-center mb-3">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.description}</p>
                </motion.div>

                {/* Arrow between steps (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center mx-2 text-primary">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/HowItWorks.tsx
git commit -m "feat: HowItWorks section with 3-step flow and desktop arrows"
```

---

### Task 8: Testimonials component

**Files:**
- Create: `components/Testimonials.tsx`

- [ ] **Step 1: Create components/Testimonials.tsx**

```tsx
'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      "I used to dread checking my bank account. CashLens made budgeting feel effortless — I actually know where my money goes now.",
    name: 'Sarah M.',
    role: 'Freelance Designer',
    initial: 'S',
  },
  {
    quote:
      "The receipt scanning is magic. I snap a photo after every meal and my food budget tracks itself. Saved me over $200 last month.",
    name: 'James K.',
    role: 'Software Engineer',
    initial: 'J',
  },
  {
    quote:
      "We use it as a family to keep household expenses in check. The category management makes it easy to split things out.",
    name: 'Priya R.',
    role: 'Stay-at-home parent',
    initial: 'P',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            People love CashLens
          </h2>
          <p className="mt-4 text-gray-500">
            Join thousands of households taking control of their finances.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-dark text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Testimonials.tsx
git commit -m "feat: Testimonials section with 3 dummy user cards"
```

---

### Task 9: DownloadCTA component

**Files:**
- Create: `components/DownloadCTA.tsx`

- [ ] **Step 1: Create components/DownloadCTA.tsx**

```tsx
'use client'

import { motion } from 'framer-motion'
import { Apple, Smartphone } from 'lucide-react'

export default function DownloadCTA() {
  return (
    <section id="download" className="bg-primary py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Take control of your finances today.
          </h2>
          <p className="text-white text-opacity-80 text-lg mb-10 max-w-md mx-auto opacity-90">
            Download CashLens free and start scanning receipts in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition-all"
            >
              <Apple size={20} />
              Download on the App Store
            </a>

            {/* Google Play */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition-all"
            >
              <Smartphone size={20} />
              Get it on Google Play
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/DownloadCTA.tsx
git commit -m "feat: DownloadCTA full-width green section with App Store and Google Play buttons"
```

---

### Task 10: Footer component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create components/Footer.tsx**

```tsx
const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Download', href: '#download' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo + tagline */}
          <div>
            <p className="text-xl font-bold text-primary">CashLens</p>
            <p className="text-gray-400 text-sm mt-2">
              Scan, track, and budget your expenses.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-2 md:items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CashLens. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: Footer with logo, nav links, and copyright"
```

---

### Task 11: Compose app/page.tsx

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Write app/page.tsx**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import DownloadCTA from '@/components/DownloadCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </main>
  )
}
```

- [ ] **Step 2: Verify the full page renders**

```bash
npm run dev
```
Open `http://localhost:3000`. Expected: All 8 sections render without errors in the browser console.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: compose landing page from all section components"
```

---

### Task 12: Static export and final verification

**Files:**
- No new files

- [ ] **Step 1: Build and export**

```bash
npm run build
```
Expected: Build completes with no errors. An `out/` directory is created.

- [ ] **Step 2: Verify static output**

```bash
ls out/
```
Expected: `index.html` and associated assets are present.

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "chore: verify static export builds cleanly"
```
