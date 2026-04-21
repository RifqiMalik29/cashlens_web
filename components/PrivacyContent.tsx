'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Language = 'EN' | 'ID'

export default function PrivacyContent() {
  const [lang, setLang] = useState<Language>('EN')

  const toggleLang = () => setLang((prev) => (prev === 'EN' ? 'ID' : 'EN'))

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-dark font-sans pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header Navigation */}
          <div className="flex items-center justify-between mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium transition-all"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>

            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold hover:bg-secondary transition-all"
            >
              <Globe size={18} />
              {lang === 'EN' ? 'Lihat Bahasa Indonesia' : 'Switch to English'}
            </button>
          </div>

          {/* Content */}
          <motion.article
            key={lang}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-slate prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
          >
          {lang === 'EN' ? (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-dark mb-2">Privacy Policy</h1>
                <p className="text-gray-500 text-sm">
                  <strong>Effective Date:</strong> April 6, 2026 | <strong>Last Updated:</strong> April 6, 2026
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  CashLens (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (&quot;App&quot;).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-dark">2.1 Information You Provide</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li><strong>Email Address:</strong> For authentication purposes.</li>
                      <li><strong>Transaction Data:</strong> Income/expense records you enter or scan.</li>
                      <li><strong>Categories & Budgets:</strong> Limits and labels you create.</li>
                      <li><strong>Preferences:</strong> Language, currency, and theme settings.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark">2.2 Information Collected Automatically</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li><strong>Device Information:</strong> Model, OS version, unique identifiers.</li>
                      <li><strong>Usage Data:</strong> Feature usage patterns and scan frequency.</li>
                      <li><strong>Crash Reports:</strong> Error logs via Sentry.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark">2.3 Camera Access</h3>
                    <p className="mt-2 text-gray-600">
                      The app requests camera permission to scan receipts. Photos are processed on-device — only the extracted text and data are sent to Google Cloud (Gemini AI) for parsing. No photos are stored or uploaded.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark">2.4 Notification Access</h3>
                    <p className="mt-2 text-gray-600">
                      The app reads incoming notifications (e.g. bank transaction alerts) to automatically log transactions. Notification content is sent to our backend for processing. This data is used solely to create transaction records and is not retained beyond processing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark">2.5 Financial Data</h3>
                    <p className="mt-2 text-gray-600">
                      The app collects transaction amounts, merchant names, dates, and categories — entered manually, scanned from receipts, or parsed from bank notifications.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">3. Third-Party Services</h2>
                <p className="text-gray-600 mb-4">We use trusted providers to power CashLens:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Supabase:</strong> Cloud sync & authentication.</li>
                  <li><strong>Google Cloud (Gemini AI):</strong> Receipt parsing. Extracted text is sent temporarily for processing and is not used for training.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">4. Your Rights</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Access:</strong> Request a copy of your data via <code>cashlens.app@gmail.com</code>.</li>
                  <li><strong>Erasure:</strong> Delete your account via Settings or by emailing us.</li>
                  <li><strong>Data Portability:</strong> Export your records in CSV/JSON (where available).</li>
                </ul>
              </section>

              <section className="pt-8 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-dark mb-4">5. Contact Us</h2>
                <p className="text-gray-600">
                  <strong>Email:</strong> <a href="mailto:cashlens.app@gmail.com" className="text-primary hover:underline">cashlens.app@gmail.com</a>
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-dark mb-2">Kebijakan Privasi</h1>
                <p className="text-gray-500 text-sm">
                  <strong>Tanggal Berlaku:</strong> 6 April 2026 | <strong>Pembaruan Terakhir:</strong> 6 April 2026
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">1. Pendahuluan</h2>
                <p className="text-gray-600 leading-relaxed">
                  CashLens (&quot;kami&quot;) berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan aplikasi mobile kami.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">2. Informasi yang Kami Kumpulkan</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Alamat Email:</strong> Untuk keperluan autentikasi akun.</li>
                  <li><strong>Data Transaksi:</strong> Catatan pemasukan/pengeluaran.</li>
                  <li><strong>Anggaran & Kategori:</strong> Batasan dan label yang Anda buat.</li>
                  <li><strong>Preferensi:</strong> Pengaturan bahasa, mata uang, dan tema.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">3. Layanan Pihak Ketiga</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Supabase:</strong> Sinkronisasi awan & autentikasi.</li>
                  <li><strong>Google Cloud (Gemini AI):</strong> Pemindaian struk belanja. Teks struk dikirim sementara untuk diproses dan tidak digunakan untuk pelatihan AI.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">4. Hak Anda</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Akses:</strong> Meminta salinan data Anda melalui <code>cashlens.app@gmail.com</code>.</li>
                  <li><strong>Penghapusan:</strong> Menghapus akun melalui Pengaturan atau email.</li>
                </ul>
              </section>

              <section className="pt-8 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-dark mb-4">5. Hubungi Kami</h2>
                <p className="text-gray-600">
                  <strong>Email:</strong> <a href="mailto:cashlens.app@gmail.com" className="text-primary hover:underline">cashlens.app@gmail.com</a>
                </p>
              </section>
            </div>
          )}
        </motion.article>
      </div>
    </main>
    <Footer />
  </>
)
}
