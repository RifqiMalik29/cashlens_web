'use client'

import { motion } from 'framer-motion'
import { ScanLine, PiggyBank, List, Tag, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: ScanLine,
    title: 'Receipt Scanning (OCR)',
    description: 'Snap a photo of any receipt and watch your expenses get logged automatically — no typing required.',
  },
  {
    icon: PiggyBank,
    title: 'Budget Management',
    description: 'Set spending limits per category and track your progress in real time throughout the month.',
  },
  {
    icon: List,
    title: 'Transaction Tracking',
    description: 'Your full expense history in one place. Search, filter, and review every purchase at a glance.',
  },
  {
    icon: Tag,
    title: 'Category Management',
    description: 'Create and customize spending categories so your budget reflects the way you actually live.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Authentication',
    description: 'Your financial data is protected with industry-standard authentication. Only you see your numbers.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Everything you need to manage your money
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            CashLens packs powerful personal finance tools into a clean, simple experience.
          </p>
        </div>

        {/* Row 1: 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 max-w-3xl mx-auto">
          {features.slice(0, 2).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Row 2: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.slice(2).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const Icon = feature.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group p-6 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-md transition-all cursor-default"
    >
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-secondary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-lg font-semibold text-dark mb-2">{feature.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}
