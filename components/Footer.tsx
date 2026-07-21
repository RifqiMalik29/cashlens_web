import Link from 'next/link'
import { ScanLine, Camera, Send, Video } from 'lucide-react'

const productLinks = [
  { label: 'Fitur', href: '/#fitur' },
  { label: 'Cara Kerja', href: '/#cara-kerja' },
  { label: 'Download', href: '/#download' },
  { label: 'Harga', href: '/pricing' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Syarat & Ketentuan', href: '/terms' },
  { label: 'Hapus Akun', href: '/delete-account' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-[10px] bg-green border-2 border-white flex items-center justify-center">
                <ScanLine size={18} className="text-ink" />
              </span>
              <span className="font-display font-bold text-lg text-white">DompetKu</span>
            </Link>
            <p className="text-sm text-darktint-muted leading-relaxed max-w-[280px] mb-5">
              App personal finance yang bikin catat pengeluaran jadi otomatis. Scan struk, atur
              budget, pegang kendali.
            </p>
            <div className="flex gap-2.5">
              {[Camera, Send, Video].map((Icon, i) => (
                <span
                  key={i}
                  className="w-[38px] h-[38px] rounded-[11px] border border-darktint-border flex items-center justify-center"
                >
                  <Icon size={18} className="text-darktint-text" />
                </span>
              ))}
            </div>
          </div>

          {/* Produk */}
          <div>
            <div className="font-display font-semibold text-[15px] text-white mb-4">Produk</div>
            <div className="flex flex-col gap-2.5 text-sm">
              {productLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-darktint-muted hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="font-display font-semibold text-[15px] text-white mb-4">Legal</div>
            <div className="flex flex-col gap-2.5 text-sm">
              {legalLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-darktint-muted hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-darktint-border mt-11 pt-6 flex flex-wrap justify-between items-center gap-3">
          <span className="text-[13px] text-[#6E8C7D]">© {new Date().getFullYear()} DompetKu.</span>
          <span className="text-[13px] text-[#6E8C7D]">Bahasa: Indonesia</span>
        </div>
      </div>
    </footer>
  )
}
