'use client'

import { motion } from 'framer-motion'
import { Route, Camera, Tag, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Camera,
    title: 'Foto struk',
    description: 'Buka app, arahkan kamera ke struk. OCR langsung membaca detailnya.',
    bg: 'bg-green',
    iconText: 'text-ink',
  },
  {
    number: '02',
    icon: Tag,
    title: 'Otomatis dikategorikan',
    description: 'Transaksi masuk ke kategori yang tepat — bisa kamu ubah kapan saja.',
    bg: 'bg-coral',
    iconText: 'text-ink',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Pegang kendali',
    description: 'Pantau budget real-time & lihat pola pengeluaran biar makin bijak.',
    bg: 'bg-violet',
    iconText: 'text-white',
  },
]

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="bg-warm py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-violet-soft border-2 border-ink shadow-hard-sm rounded-full px-4 py-2 text-sm font-bold text-ink mb-6">
            <Route size={15} /> Cara kerja
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-[46px] leading-[1.02] tracking-[-0.03em] text-ink">
            Tiga langkah, uangmu terkontrol
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative bg-white border-2 border-ink shadow-hard rounded-3xl p-8"
              >
                <div className="absolute top-6 right-6 font-display font-bold text-5xl leading-none text-[#EDEDE3]">
                  {step.number}
                </div>
                <span className={`inline-flex w-[54px] h-[54px] rounded-2xl border-2 border-ink shadow-hard-sm items-center justify-center mb-5 ${step.bg}`}>
                  <Icon size={26} className={step.iconText} />
                </span>
                <h3 className="font-display font-bold text-[22px] text-ink">{step.title}</h3>
                <p className="mt-2.5 text-[15px] text-body leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
