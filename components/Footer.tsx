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
