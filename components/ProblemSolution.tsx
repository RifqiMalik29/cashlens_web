'use client'

import { motion } from 'framer-motion'
import { Frown, X, Check } from 'lucide-react'

const problems = [
  'Ketik tiap pengeluaran satu-satu, lupa terus.',
  'Struk numpuk di dompet, gak pernah dicatat.',
  'Akhir bulan bingung, "kok saldo habis ya?"',
]

const solutions = [
  'Cukup foto struk — OCR catat otomatis.',
  'Budget per kategori kasih peringatan real-time.',
  'Tiap rupiah kelihatan — kamu pegang kendali.',
]

export default function ProblemSolution() {
  return (
    <section className="bg-warm py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-coral-soft border-2 border-ink shadow-hard-sm rounded-full px-4 py-2 text-sm font-bold text-ink mb-6">
            <Frown size={16} /> Kenapa ribet?
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-[46px] leading-[1.02] tracking-[-0.03em] text-ink">
            Catat manual itu melelahkan.
            <br />
            DompetKu bikin otomatis.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border-2 border-ink shadow-hard rounded-3xl p-8"
          >
            <div className="font-mono text-xs font-bold text-coral mb-4">TANPA DOMPETKU</div>
            <div className="flex flex-col gap-4">
              {problems.map((p) => (
                <div key={p} className="flex gap-3 items-start">
                  <span className="w-[26px] h-[26px] flex-shrink-0 rounded-lg bg-coral-soft border border-ink/60 flex items-center justify-center">
                    <X size={15} className="text-ink" />
                  </span>
                  <span className="text-[15px] text-body leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-green border-2 border-ink shadow-[6px_6px_0_#0A7F4E] rounded-3xl p-8"
          >
            <div className="font-mono text-xs font-bold text-[#0A3D26] mb-4">DENGAN DOMPETKU</div>
            <div className="flex flex-col gap-4">
              {solutions.map((s) => (
                <div key={s} className="flex gap-3 items-start">
                  <span className="w-[26px] h-[26px] flex-shrink-0 rounded-lg bg-white border border-ink/60 flex items-center justify-center">
                    <Check size={15} className="text-ink" />
                  </span>
                  <span className="text-[15px] font-semibold text-[#0E3E28] leading-relaxed">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
