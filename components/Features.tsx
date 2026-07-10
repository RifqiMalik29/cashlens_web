'use client'

import { motion } from 'framer-motion'
import { Sparkles, ScanLine, CheckCheck, Wallet, ReceiptText, Tags, ShieldCheck } from 'lucide-react'

const smallFeatures = [
  {
    icon: Wallet,
    title: 'Budget per kategori',
    description: 'Set batas tiap kategori, dapat peringatan sebelum kebablasan.',
    bg: 'bg-coral',
    shadow: 'shadow-[6px_6px_0_#FF6B4A]',
    iconText: 'text-ink',
  },
  {
    icon: ReceiptText,
    title: 'Riwayat transaksi',
    description: 'Semua pengeluaran tercatat rapi, bisa difilter & dicari.',
    bg: 'bg-violet',
    shadow: 'shadow-[6px_6px_0_#7A5BFF]',
    iconText: 'text-white',
  },
  {
    icon: Tags,
    title: 'Kategori custom',
    description: 'Bikin kategori sendiri sesuai gaya hidupmu, lengkap dengan ikon.',
    bg: 'bg-sunny',
    shadow: 'shadow-[6px_6px_0_#FFC93C]',
    iconText: 'text-ink',
  },
  {
    icon: ShieldCheck,
    title: 'Login aman',
    description: 'Autentikasi terenkripsi & biometrik — datamu tetap privat.',
    bg: 'bg-green',
    shadow: 'shadow-[6px_6px_0_#13C97A]',
    iconText: 'text-ink',
  },
]

export default function Features() {
  return (
    <section id="fitur" className="bg-ink py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-[660px] mx-auto mb-13">
          <div className="inline-flex items-center gap-2 bg-darktint-bg border border-darktint-border rounded-full px-4 py-2 text-sm font-bold text-darktint-text mb-6">
            <Sparkles size={15} /> Fitur unggulan
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-[48px] leading-[1.02] tracking-[-0.03em] text-white">
            Semua yang kamu butuh untuk <span className="text-green">kelola uang</span>
          </h2>
          <p className="mt-4 text-lg text-darktint-muted leading-relaxed">
            Dari scan struk sampai keamanan akun — dirancang untuk dipakai tiap hari.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* large OCR card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 bg-green border-2 border-ink shadow-[6px_6px_0_#0A7F4E] rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-7"
          >
            <div className="flex-1">
              <span className="inline-flex w-[54px] h-[54px] rounded-2xl bg-white border-2 border-ink shadow-hard-sm items-center justify-center mb-5">
                <ScanLine size={27} className="text-ink" />
              </span>
              <div className="font-display font-bold text-[28px] text-ink tracking-tight">Scan struk, beres.</div>
              <p className="mt-3 text-[15.5px] text-[#0E3E28] leading-relaxed max-w-[360px]">
                Foto struk belanjaan, OCR otomatis baca merchant, total, dan tanggal — langsung
                masuk kategori yang tepat.
              </p>
            </div>
            <div className="w-full sm:w-40 flex-shrink-0 bg-white border-2 border-ink rounded-2xl shadow-hard-sm p-4">
              <div className="flex justify-between text-[10px] font-mono text-muted">
                <span>STRUK</span>
                <CheckCheck size={14} className="text-green" />
              </div>
              <div className="h-px bg-[#EEE] my-2" />
              <div className="text-xs font-bold text-ink">Kopi Kenangan</div>
              <div className="flex justify-between text-[11px] text-muted mt-1.5">
                <span>2 item</span>
                <span className="font-extrabold text-ink">Rp 87.000</span>
              </div>
              <div className="mt-2.5 text-[10px] bg-green-soft text-green-deep font-bold rounded-lg px-2 py-1.5 text-center">
                → Kategori: Makan
              </div>
            </div>
          </motion.div>

          {/* 4 equal cards */}
          {smallFeatures.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i + 1) * 0.08 }}
                className={`bg-white border-2 border-ink rounded-3xl p-7 ${f.shadow}`}
              >
                <span className={`inline-flex w-[52px] h-[52px] rounded-2xl border-2 border-ink shadow-hard-sm items-center justify-center mb-5 ${f.bg}`}>
                  <Icon size={25} className={f.iconText} />
                </span>
                <div className="font-display font-bold text-[21px] text-ink">{f.title}</div>
                <p className="mt-2 text-[14.5px] text-body leading-relaxed">{f.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
