'use client'

import { useState } from 'react'
import { Menu, X, ScanLine } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { label: 'Fitur', href: '/#fitur' },
  { label: 'Cara Kerja', href: '/#cara-kerja' },
  { label: 'Harga', href: '/pricing' },
  { label: 'Testimoni', href: '/#testimoni' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-warm/90 backdrop-blur-md border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-[10px] bg-green border-2 border-ink flex items-center justify-center shadow-hard-sm">
            <ScanLine size={18} className="text-ink" />
          </span>
          <span className="font-display font-bold text-lg text-ink tracking-tight">CashLens</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-body hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/#download"
            className="inline-flex items-center px-[18px] py-[9px] rounded-full bg-green text-ink border-2 border-ink shadow-hard-sm text-sm font-bold transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            Download gratis
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ink"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Buka menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-warm border-t border-hairline px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#download"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-green text-ink border-2 border-ink shadow-hard-sm text-sm font-bold"
          >
            Download gratis
          </Link>
        </div>
      )}
    </header>
  )
}
