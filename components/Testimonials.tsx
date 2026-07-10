'use client'

import { motion } from 'framer-motion'
import { Heart, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Fitur scan struknya juara. Gak perlu ngetik lagi, tinggal foto dan langsung tercatat rapi.',
    name: 'Ayu Pratiwi',
    role: 'Freelancer, Jakarta',
    initial: 'A',
    avatarBg: 'bg-green',
    avatarText: 'text-ink',
  },
  {
    quote:
      'Akhirnya tahu ke mana uang bulanan pergi. Budget per kategori bikin aku lebih hemat.',
    name: 'Rizky Maulana',
    role: 'Karyawan, Bandung',
    initial: 'R',
    avatarBg: 'bg-coral',
    avatarText: 'text-ink',
  },
  {
    quote:
      'Desainnya bersih dan cepat. Login pakai biometrik jadi aman banget buat data keuangan.',
    name: 'Sari Dewanti',
    role: 'Mahasiswa, Yogyakarta',
    initial: 'S',
    avatarBg: 'bg-violet',
    avatarText: 'text-white',
  },
]

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-sunny border-y-2 border-ink py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-13">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-ink shadow-hard-sm rounded-full px-4 py-2 text-sm font-bold text-ink mb-6">
            <Heart size={15} className="fill-coral text-coral" /> Kata pengguna
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-[46px] leading-[1.02] tracking-[-0.03em] text-ink">
            Dicintai 50rb+ pengguna
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border-2 border-ink shadow-hard rounded-3xl p-7 flex flex-col gap-4"
            >
              <div className="flex gap-0.5" role="img" aria-label="5 dari 5 bintang">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className="fill-sunny text-sunny" aria-hidden="true" />
                ))}
              </div>
              <p className="text-[15.5px] leading-relaxed text-ink font-medium flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-[42px] h-[42px] rounded-full border-2 border-ink flex items-center justify-center font-extrabold flex-shrink-0 ${t.avatarBg} ${t.avatarText}`}>
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-sm text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
