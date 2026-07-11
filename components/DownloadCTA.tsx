'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
            <div className="flex flex-wrap items-center gap-3.5 mt-8">
              <span aria-disabled="true" className="inline-block opacity-50 grayscale cursor-not-allowed">
                <Image src="/badges/app-store.svg" alt="Segera hadir di App Store" width={135} height={45} />
              </span>
              <span aria-disabled="true" className="inline-block opacity-50 grayscale cursor-not-allowed">
                <Image src="/badges/google-play.png" alt="Segera hadir di Google Play" width={152} height={59} />
              </span>
            </div>
            <p className="text-xs text-[#0E3E28]/70 font-medium mt-2.5">Segera hadir di App Store &amp; Google Play.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
