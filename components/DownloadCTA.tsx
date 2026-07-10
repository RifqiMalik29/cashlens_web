'use client'

import { motion } from 'framer-motion'
import { Apple, Play } from 'lucide-react'

export default function DownloadCTA() {
  return (
    <section id="download" className="bg-warm py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-green border-2 border-ink shadow-hard-xl rounded-[32px] px-6 sm:px-14 py-16"
        >
          <div className="absolute -right-16 -top-16 w-[260px] h-[260px] rounded-full bg-sunny border-2 border-ink pointer-events-none" />
          <div className="absolute right-[170px] -bottom-[70px] w-[120px] h-[120px] rounded-[32px] bg-violet border-2 border-ink rotate-[16deg] pointer-events-none" />

          <div className="relative z-10 max-w-[620px]">
            <h2 className="font-display font-bold text-[32px] sm:text-[52px] leading-[1] tracking-[-0.035em] text-ink">
              Mulai pegang kendali uangmu hari ini.
            </h2>
            <p className="mt-5 text-lg text-[#0E3E28] font-medium leading-relaxed">
              Gratis diunduh. Tanpa iklan mengganggu. Cukup foto struk pertamamu.
            </p>
            <div className="flex flex-wrap gap-3.5 mt-8">
              <span
                aria-disabled="true"
                className="inline-flex items-center gap-2.5 bg-ink text-white/50 border-2 border-ink shadow-[4px_4px_0_#0A3D26] rounded-2xl px-5 py-3 cursor-not-allowed"
              >
                <Apple size={26} />
                <span className="text-left">
                  <span className="block text-[10px] opacity-80">Segera hadir di</span>
                  <span className="block font-display font-bold text-[17px]">App Store</span>
                </span>
              </span>
              <span
                aria-disabled="true"
                className="inline-flex items-center gap-2.5 bg-ink text-white/50 border-2 border-ink shadow-[4px_4px_0_#0A3D26] rounded-2xl px-5 py-3 cursor-not-allowed"
              >
                <Play size={24} className="fill-white/50" />
                <span className="text-left">
                  <span className="block text-[10px] opacity-80">Segera hadir di</span>
                  <span className="block font-display font-bold text-[17px]">Google Play</span>
                </span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
