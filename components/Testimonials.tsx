'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      "I used to dread checking my bank account. CashLens made budgeting feel effortless — I actually know where my money goes now.",
    name: 'Sarah M.',
    role: 'Freelance Designer',
    initial: 'S',
  },
  {
    quote:
      "The receipt scanning is magic. I snap a photo after every meal and my food budget tracks itself. Saved me over $200 last month.",
    name: 'James K.',
    role: 'Software Engineer',
    initial: 'J',
  },
  {
    quote:
      "We use it as a family to keep household expenses in check. The category management makes it easy to split things out.",
    name: 'Priya R.',
    role: 'Stay-at-home parent',
    initial: 'P',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            People love CashLens
          </h2>
          <p className="mt-4 text-gray-500">
            Join thousands of households taking control of their finances.
          </p>
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
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-dark text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
