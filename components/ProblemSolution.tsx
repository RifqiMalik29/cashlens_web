'use client'

import { motion } from 'framer-motion'
import { ReceiptText, CheckCircle2 } from 'lucide-react'

const problems = [
  'Receipts pile up and get lost',
  'Manual spreadsheets are tedious',
  'You never know where your money went',
]

const solutions = [
  'Snap a photo — expenses are logged instantly',
  'Budgets set themselves from your spending history',
  'Full transaction history always at your fingertips',
]

export default function ProblemSolution() {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 mb-6">
              <ReceiptText className="text-red-500" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-dark mb-4">
              Receipts pile up. Budgets slip. You lose track.
            </h2>
            <p className="text-gray-500 mb-6">
              Managing personal finances manually is exhausting. Most people give
              up before they even start — and end up spending more than they planned.
            </p>
            <ul className="space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-1 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-6">
              <CheckCircle2 className="text-primary" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-dark mb-4">
              CashLens does the work for you.
            </h2>
            <p className="text-gray-500 mb-6">
              Just scan your receipts. CashLens automatically logs, categorizes, and
              tracks every expense — so you always know where your money is going.
            </p>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
