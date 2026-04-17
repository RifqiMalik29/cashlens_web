# Privacy Policy Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a dedicated, bilingual Privacy Policy page for the CashLens landing page and link it from the footer.

**Architecture:** A new Next.js route `/privacy` using a client component for language toggling. The content is sourced from the approved `WEB_TEAM_PRIVACY_GUIDE.md`.

**Tech Stack:** Next.js 14, Tailwind CSS, lucide-react, Framer Motion

---

## File Map

| File | Responsibility |
|------|---------------|
| `app/privacy/page.tsx` | Bilingual Privacy Policy page with language toggle and "Back to Home" button |
| `components/Footer.tsx` | Added "Privacy Policy" link in the navigation section |

---

### Task 1: Create the Privacy Policy page

**Files:**
- Create: `app/privacy/page.tsx`

- [ ] **Step 1: Implement the Privacy Policy page**

```tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

type Language = 'EN' | 'ID'

export default function PrivacyPage() {
  const [lang, setLang] = useState<Language>('EN')

  const toggleLang = () => setLang((prev) => (prev === 'EN' ? 'ID' : 'EN'))

  return (
    <main className="min-h-screen bg-white text-dark font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium transition-all"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold hover:bg-secondary transition-all"
          >
            <Globe size={18} />
            {lang === 'EN' ? 'Lihat Bahasa Indonesia' : 'Switch to English'}
          </button>
        </div>

        {/* Content */}
        <motion.article
          key={lang}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="prose prose-slate max-w-none"
        >
          {lang === 'EN' ? (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-dark mb-2">Privacy Policy</h1>
                <p className="text-gray-500 text-sm">
                  <strong>Effective Date:</strong> April 6, 2026 | <strong>Last Updated:</strong> April 6, 2026
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  CashLens ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application ("App").
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-dark">2.1 Information You Provide</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li><strong>Email Address:</strong> For authentication purposes.</li>
                      <li><strong>Transaction Data:</strong> Income/expense records you enter or scan.</li>
                      <li><strong>Categories & Budgets:</strong> Limits and labels you create.</li>
                      <li><strong>Preferences:</strong> Language, currency, and theme settings.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark">2.2 Information Collected Automatically</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li><strong>Device Information:</strong> Model, OS version, unique identifiers.</li>
                      <li><strong>Usage Data:</strong> Feature usage patterns and scan frequency.</li>
                      <li><strong>Crash Reports:</strong> Error logs via Sentry.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">3. Third-Party Services</h2>
                <p className="text-gray-600 mb-4">We use trusted providers to power CashLens:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Supabase:</strong> Cloud sync & authentication.</li>
                  <li><strong>Google Cloud (Gemini AI):</strong> Receipt parsing. Extracted text is sent temporarily for processing and is not used for training.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">4. Your Rights</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Access:</strong> Request a copy of your data via <code>cashlens.app@gmail.com</code>.</li>
                  <li><strong>Erasure:</strong> Delete your account via Settings or by emailing us.</li>
                  <li><strong>Data Portability:</strong> Export your records in CSV/JSON (where available).</li>
                </ul>
              </section>

              <section className="pt-8 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-dark mb-4">5. Contact Us</h2>
                <p className="text-gray-600">
                  <strong>Email:</strong> <a href="mailto:cashlens.app@gmail.com" className="text-primary hover:underline">cashlens.app@gmail.com</a><br />
                  <strong>GitHub:</strong> <a href="https://github.com/RifqiMalik29/cashlens" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://github.com/RifqiMalik29/cashlens</a>
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-dark mb-2">Kebijakan Privasi</h1>
                <p className="text-gray-500 text-sm">
                  <strong>Tanggal Berlaku:</strong> 6 April 2026 | <strong>Pembaruan Terakhir:</strong> 6 April 2026
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">1. Pendahuluan</h2>
                <p className="text-gray-600 leading-relaxed">
                  CashLens ("kami") berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan aplikasi mobile kami.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">2. Informasi yang Kami Kumpulkan</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Alamat Email:</strong> Untuk keperluan autentikasi akun.</li>
                  <li><strong>Data Transaksi:</strong> Catatan pemasukan/pengeluaran.</li>
                  <li><strong>Anggaran & Kategori:</strong> Batasan dan label yang Anda buat.</li>
                  <li><strong>Preferensi:</strong> Pengaturan bahasa, mata uang, dan tema.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">3. Layanan Pihak Ketiga</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Supabase:</strong> Sinkronisasi awan & autentikasi.</li>
                  <li><strong>Google Cloud (Gemini AI):</strong> Pemindaian struk belanja. Teks struk dikirim sementara untuk diproses dan tidak digunakan untuk pelatihan AI.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">4. Hak Anda</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Akses:</strong> Meminta salinan data Anda melalui <code>cashlens.app@gmail.com</code>.</li>
                  <li><strong>Penghapusan:</strong> Menghapus akun melalui Pengaturan atau email.</li>
                </ul>
              </section>

              <section className="pt-8 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-dark mb-4">5. Hubungi Kami</h2>
                <p className="text-gray-600">
                  <strong>Email:</strong> <a href="mailto:cashlens.app@gmail.com" className="text-primary hover:underline">cashlens.app@gmail.com</a><br />
                  <strong>GitHub:</strong> <a href="https://github.com/RifqiMalik29/cashlens" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://github.com/RifqiMalik29/cashlens</a>
                </p>
              </section>
            </div>
          )}
        </motion.article>
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/privacy/page.tsx
git commit -m "feat: add bilingual Privacy Policy page with language toggle"
```

---

### Task 2: Link Privacy Policy in Footer

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Update Footer.tsx to include Privacy link**

Update the `navLinks` array and the footer layout to include the link.

```tsx
const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Download', href: '/#download' },
  { label: 'Privacy Policy', href: '/privacy' },
]
```

Wait, the existing `navLinks` use hash anchors. Since we are adding a new page, the hash anchors on the homepage should probably be absolute (prefixed with `/`) if they are shared across pages, but the current `Footer.tsx` is only used on `app/page.tsx`. However, it's better to use `/privacy` for the new page and ensure hash links work correctly from the privacy page if needed.

Actually, the footer is a shared component. Let's make sure links work from any page.

```tsx
const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Download', href: '/#download' },
  { label: 'Privacy Policy', href: '/privacy' },
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
git commit -m "feat: add Privacy Policy link to footer"
```

---

### Task 3: Verification

- [ ] **Step 1: Verify the build and static export**

```bash
npm run build
```

Expected: Success. `out/privacy/index.html` should exist.

- [ ] **Step 2: Commit (if any fixes needed)**

```bash
git add .
git commit -m "chore: final verification for privacy page"
```
