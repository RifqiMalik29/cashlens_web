'use client'

import { motion } from 'framer-motion'
import { ScanLine, Tag, TrendingUp, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ScanLine,
    title: 'Scan Receipt',
    description: 'Open CashLens and snap a photo of your receipt. Our OCR engine reads it instantly.',
  },
  {
    number: '02',
    icon: Tag,
    title: 'Categorize',
    description: 'CashLens suggests a category automatically. Confirm or change it with one tap.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Track Budget',
    description: 'Watch your spending update in real time and see exactly how much budget remains.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Up and running in 3 steps
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            No spreadsheets. No setup. Just scan and go.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex flex-col md:flex-row items-center flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="flex-1 bg-white rounded-2xl p-8 text-center shadow-sm w-full"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <div className="flex justify-center mb-3">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.description}</p>
                </motion.div>

                {/* Arrow between steps (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center mx-2 text-primary">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
