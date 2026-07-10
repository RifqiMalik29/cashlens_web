'use client'

import { motion } from 'framer-motion'
import {
  Download,
  Play,
  Star,
  Check,
  Signal,
  Wifi,
  BatteryFull,
  Coffee,
  ShoppingBag,
  House,
  ChartPie,
  ScanLine,
  List,
  User,
} from 'lucide-react'

const categorySpend = [
  { emoji: '🍜', label: 'Makan', amount: 'Rp 1.240k', pct: 82, color: 'bg-coral' },
  { emoji: '🚗', label: 'Transport', amount: 'Rp 540k', pct: 48, color: 'bg-green' },
  { emoji: '🛍️', label: 'Belanja', amount: 'Rp 320k', pct: 30, color: 'bg-violet' },
]

const recentTransactions = [
  { icon: Coffee, chip: 'bg-sunny-soft', name: 'Kopi Kenangan', meta: 'Makan · hari ini', amount: '-87k' },
  { icon: ShoppingBag, chip: 'bg-violet-soft', name: 'Indomaret', meta: 'Belanja · kemarin', amount: '-54k' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm">
      {/* decorative geometric shapes */}
      <div className="absolute -right-20 top-20 w-[560px] h-[560px] rounded-full bg-green opacity-95 pointer-events-none" />
      <div className="absolute right-[400px] -top-16 w-[200px] h-[200px] rounded-[44px] bg-violet rotate-[18deg] pointer-events-none" />
      <div className="absolute right-20 -bottom-24 w-[230px] h-[230px] rounded-full bg-sunny pointer-events-none" />
      <div className="absolute right-[500px] bottom-16 w-[74px] h-[74px] rounded-[22px] bg-coral border-2 border-ink -rotate-12 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-[1fr_460px] gap-10 py-16 md:py-24 items-center">
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 bg-white border-2 border-ink shadow-hard-sm rounded-full px-4 py-2 text-sm font-bold text-ink mb-7">
            <span className="w-2 h-2 rounded-full bg-green" /> Scan · Budget · Kendali
          </div>
          <h1 className="font-display font-bold text-[42px] sm:text-6xl lg:text-[68px] leading-[0.97] tracking-[-0.04em] text-ink">
            Tahu ke mana{' '}
            <span className="bg-sunny px-2.5 rounded-[10px] box-decoration-clone">uangmu</span>{' '}
            pergi.
          </h1>
          <p className="mt-6 text-lg sm:text-[19px] leading-relaxed text-body max-w-[460px]">
            Scan struk otomatis, atur budget per kategori, dan pegang kendali penuh atas
            pengeluaranmu — semua dalam satu app.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 bg-green text-ink border-2 border-ink shadow-hard-sm font-bold text-base px-6 py-[15px] rounded-full transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard"
            >
              <Download size={18} /> Download gratis
            </a>
            <a
              href="#cara-kerja"
              className="inline-flex items-center justify-center gap-2 bg-white text-ink border-2 border-ink font-bold text-base px-6 py-[15px] rounded-full transition-colors hover:bg-[#F1F1E9]"
            >
              <Play size={16} /> Cara kerja
            </a>
          </div>
          <div className="flex items-center gap-6 mt-9">
            <div className="flex items-center gap-1.5">
              <Star size={18} className="text-sunny fill-sunny" />
              <span className="font-extrabold text-base text-ink">4.9</span>
              <span className="text-sm text-muted">di App Store</span>
            </div>
            <div className="w-px h-7 bg-[#DCDCD2]" />
            <div className="text-sm text-muted">
              <span className="font-extrabold text-base text-ink">50rb+</span> pengguna aktif
            </div>
          </div>
        </motion.div>

        {/* Right: phone mockup */}
        <motion.div
          className="flex justify-center relative"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          {/* floating card top */}
          <div className="hidden sm:block absolute -left-16 top-10 z-20 bg-white border-2 border-ink shadow-hard-sm rounded-2xl px-3.5 py-3 w-[190px]">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-green border-2 border-ink flex items-center justify-center flex-shrink-0">
                <Check size={17} className="text-ink" />
              </span>
              <div>
                <div className="text-[11px] text-muted font-semibold">Struk terscan</div>
                <div className="text-sm font-extrabold text-ink">Rp 87.000</div>
              </div>
            </div>
          </div>

          {/* floating card bottom */}
          <div className="hidden sm:block absolute -right-14 bottom-16 z-20 bg-ink shadow-[4px_4px_0_#7A5BFF] rounded-2xl px-4 py-3.5 w-[176px]">
            <div className="text-[11px] text-darktint-text font-bold uppercase tracking-wide">Budget Makan</div>
            <div className="text-sm text-white font-semibold mt-1">82% terpakai</div>
            <div className="h-[7px] bg-darktint-border rounded-full mt-2 overflow-hidden">
              <div className="w-[82%] h-full bg-sunny" />
            </div>
          </div>

          {/* phone frame */}
          <div className="relative z-10 w-[280px] bg-ink rounded-[44px] p-2.5 shadow-hard-lg">
            <div className="bg-warm rounded-[36px] overflow-hidden">
              {/* status bar */}
              <div className="flex justify-between items-center px-5 pt-3 pb-1.5 text-xs font-bold text-ink">
                <span>9:41</span>
                <span className="flex gap-1">
                  <Signal size={14} />
                  <Wifi size={14} />
                  <BatteryFull size={14} />
                </span>
              </div>
              {/* greeting */}
              <div className="px-5 pt-2">
                <div className="text-[13px] text-muted font-semibold">Halo, Dina 👋</div>
                <div className="font-display font-bold text-[28px] text-ink mt-0.5">Rp 4.850.000</div>
                <div className="text-[11px] text-green-deep font-bold mt-0.5">Sisa budget bulan ini</div>
              </div>
              {/* category bars */}
              <div className="mx-4 mt-4 bg-white border-2 border-ink rounded-2xl p-3.5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-extrabold text-ink">Pengeluaran</span>
                  <span className="text-[10px] font-mono text-muted">JULI</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {categorySpend.map((c) => (
                    <div key={c.label}>
                      <div className="flex justify-between text-[11px] font-semibold text-body mb-1">
                        <span>{c.emoji} {c.label}</span>
                        <span>{c.amount}</span>
                      </div>
                      <div className="h-2 bg-[#EEF0EA] rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${c.color}`} style={{ width: `${c.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* recent transactions */}
              <div className="px-5 pt-3.5 pb-4">
                <div className="text-xs font-extrabold text-ink mb-2.5">Transaksi terbaru</div>
                {recentTransactions.map((t, i) => {
                  const Icon = t.icon
                  return (
                    <div key={t.name} className={`flex items-center gap-2.5 ${i === 0 ? 'mb-2.5' : ''}`}>
                      <span className={`w-8 h-8 rounded-lg border border-ink/60 flex items-center justify-center flex-shrink-0 ${t.chip}`}>
                        <Icon size={16} className="text-ink" />
                      </span>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-ink">{t.name}</div>
                        <div className="text-[10px] text-muted">{t.meta}</div>
                      </div>
                      <div className="text-xs font-extrabold text-ink">{t.amount}</div>
                    </div>
                  )
                })}
              </div>
              {/* tab bar */}
              <div className="flex justify-around items-center pt-3 pb-4 border-t border-hairline bg-white">
                <House size={20} className="text-ink" />
                <ChartPie size={20} className="text-[#B8C2BB]" />
                <span className="w-11 h-11 rounded-full bg-green border-2 border-ink shadow-hard-sm flex items-center justify-center -mt-6">
                  <ScanLine size={22} className="text-ink" />
                </span>
                <List size={20} className="text-[#B8C2BB]" />
                <User size={20} className="text-[#B8C2BB]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
