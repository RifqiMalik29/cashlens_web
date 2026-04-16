'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark leading-tight">
              Your money,{' '}
              <span className="text-primary">finally under control</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-md mx-auto md:mx-0">
              Scan, track, and budget your expenses — CashLens turns your receipts
              into instant insight.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#download"
                className="px-8 py-3 rounded-full bg-primary text-white font-semibold text-base hover:bg-opacity-90 transition-all shadow-md"
              >
                Start Budgeting Today
              </a>
              <a
                href="#features"
                className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold text-base hover:bg-secondary transition-all"
              >
                See Features
              </a>
            </div>
          </motion.div>

          {/* App mockup placeholder */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative w-64 h-[500px] rounded-[2.5rem] border-4 border-gray-200 shadow-2xl overflow-hidden bg-gradient-to-b from-primary to-secondary flex items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-200 rounded-b-2xl" />
              <span className="text-white font-bold text-xl opacity-60">CashLens</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
