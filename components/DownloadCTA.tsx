'use client'

import { motion } from 'framer-motion'
import { Apple, Smartphone } from 'lucide-react'

export default function DownloadCTA() {
  return (
    <section id="download" className="bg-primary py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Take control of your finances today.
          </h2>
          <p className="text-white text-opacity-80 text-lg mb-10 max-w-md mx-auto opacity-90">
            Download CashLens free and start scanning receipts in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition-all"
            >
              <Apple size={20} />
              Download on the App Store
            </a>

            {/* Google Play */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition-all"
            >
              <Smartphone size={20} />
              Get it on Google Play
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
