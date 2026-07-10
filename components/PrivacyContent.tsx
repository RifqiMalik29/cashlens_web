'use client'

import { useState } from 'react'
import { Globe, ShieldCheck, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Language = 'EN' | 'ID'

function SectionHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-[13px] font-bold text-green-deep bg-green-soft border border-green rounded-lg px-2.5 py-0.5">
        {index}
      </span>
      <h2 className="font-display font-bold text-[26px] tracking-[-0.02em] text-ink m-0">{children}</h2>
    </div>
  )
}

export default function PrivacyContent() {
  const [lang, setLang] = useState<Language>('EN')

  const toggleLang = () => setLang((prev) => (prev === 'EN' ? 'ID' : 'EN'))

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-warm text-ink font-sans">
        {/* Header band */}
        <div className="relative overflow-hidden bg-ink">
          <div className="absolute -right-10 -top-16 w-[260px] h-[260px] rounded-full bg-green opacity-90 pointer-events-none" />
          <div className="absolute right-[200px] -bottom-20 w-[130px] h-[130px] rounded-[32px] bg-violet rotate-[16deg] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8 py-16">
            <div className="inline-flex items-center gap-2 bg-darktint-bg border border-darktint-border rounded-full px-4 py-2 text-sm font-bold text-darktint-text mb-6">
              <ShieldCheck size={15} /> Legal
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-[52px] leading-[1] tracking-[-0.035em] text-white">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base sm:text-[17px] text-darktint-muted leading-relaxed max-w-[560px]">
              We designed CashLens so your data stays yours. Full details on what we collect and
              how we protect it are below.
            </p>

            <button
              onClick={toggleLang}
              className="mt-7 inline-flex items-center gap-2 bg-white border-2 border-ink shadow-hard-sm rounded-full px-4 py-2 text-sm font-bold text-ink transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <Globe size={16} />
              {lang === 'EN' ? 'Lihat Bahasa Indonesia' : 'Switch to English'}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-14">
          <motion.article
            key={lang}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {lang === 'EN' ? (
              <div className="text-[16px] leading-[1.75] text-body">
                <p className="text-sm text-muted mb-10">
                  <strong className="text-ink">Effective Date:</strong> April 6, 2026 |{' '}
                  <strong className="text-ink">Last Updated:</strong> April 6, 2026
                </p>

                <section className="mb-10">
                  <SectionHeading index="01">Introduction</SectionHeading>
                  <p>
                    CashLens (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
                    protecting your privacy. This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you use our mobile application
                    (&quot;App&quot;).
                  </p>
                </section>

                <div className="h-px bg-hairline mb-10" />

                <section className="mb-10">
                  <SectionHeading index="02">Information We Collect</SectionHeading>
                  <div className="space-y-5">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink mb-2">2.1 Information You Provide</h3>
                      <ul className="list-disc pl-5 space-y-1.5">
                        <li><strong className="text-ink">Email Address:</strong> For authentication purposes.</li>
                        <li><strong className="text-ink">Transaction Data:</strong> Income/expense records you enter or scan.</li>
                        <li><strong className="text-ink">Categories &amp; Budgets:</strong> Limits and labels you create.</li>
                        <li><strong className="text-ink">Preferences:</strong> Language, currency, and theme settings.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink mb-2">2.2 Information Collected Automatically</h3>
                      <ul className="list-disc pl-5 space-y-1.5">
                        <li><strong className="text-ink">Device Information:</strong> Model, OS version, unique identifiers.</li>
                        <li><strong className="text-ink">Usage Data:</strong> Feature usage patterns and scan frequency.</li>
                        <li><strong className="text-ink">Crash Reports:</strong> Error logs via Sentry.</li>
                      </ul>
                    </div>
                    <div className="bg-green-soft border-2 border-green rounded-2xl px-5 py-4">
                      <h3 className="font-display font-semibold text-lg text-ink mb-2">2.3 Camera Access</h3>
                      <p className="text-[#0E3E28]">
                        The app requests camera permission to scan receipts. Photos are processed
                        on-device — only the extracted text and data are sent to Google Cloud
                        (Gemini AI) for parsing. No photos are stored or uploaded.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink mb-2">2.4 Notification Access</h3>
                      <p>
                        The app reads incoming notifications (e.g., bank transaction alerts) to
                        automatically log transactions. Notification content is sent to our
                        backend for processing. This data is used solely to create transaction
                        records and is not retained beyond processing.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink mb-2">2.5 Financial Data</h3>
                      <p>
                        The app collects transaction amounts, merchant names, dates, and
                        categories — entered manually, scanned from receipts, or parsed from bank
                        notifications.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="h-px bg-hairline mb-10" />

                <section className="mb-10">
                  <SectionHeading index="03">How We Use Your Data</SectionHeading>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-ink">Transaction tracking:</strong> Store and display your income and expense records.</li>
                    <li><strong className="text-ink">Receipt parsing:</strong> Send extracted receipt text to Google Cloud (Gemini AI) to identify amounts, merchants, and dates.</li>
                    <li><strong className="text-ink">Notification parsing:</strong> Send bank notification content to our backend to automatically log transactions.</li>
                    <li><strong className="text-ink">Budget alerts:</strong> Analyze your spending against set limits to trigger in-app notifications.</li>
                    <li><strong className="text-ink">App improvement:</strong> Analyze anonymized crash reports and usage patterns to fix bugs and improve features.</li>
                    <li><strong className="text-ink">Authentication:</strong> Verify your identity via email through Supabase.</li>
                  </ul>
                </section>

                <div className="h-px bg-hairline mb-10" />

                <section className="mb-10">
                  <SectionHeading index="04">Third-Party Services</SectionHeading>
                  <p className="mb-4">We use trusted providers to power CashLens:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-ink">Supabase:</strong> Cloud sync &amp; authentication.</li>
                    <li><strong className="text-ink">Google Cloud (Gemini AI):</strong> Receipt parsing. Extracted text is sent temporarily for processing and is not used for training.</li>
                  </ul>
                </section>

                <div className="h-px bg-hairline mb-10" />

                <section className="mb-10">
                  <SectionHeading index="05">Your Rights</SectionHeading>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-ink">Access:</strong> Request a copy of your data via <code>cashlens.app@gmail.com</code>.</li>
                    <li><strong className="text-ink">Erasure:</strong> Delete your account via Settings or by emailing us.</li>
                    <li><strong className="text-ink">Data Portability:</strong> Export your records in CSV/JSON (where available).</li>
                  </ul>
                </section>

                <div className="h-px bg-hairline mb-10" />

                <section>
                  <SectionHeading index="06">Contact Us</SectionHeading>
                  <div className="bg-ink rounded-2xl px-6 py-6 flex items-center gap-4 flex-wrap">
                    <span className="w-12 h-12 rounded-2xl bg-green border-2 border-white flex items-center justify-center flex-shrink-0">
                      <Mail size={22} className="text-ink" />
                    </span>
                    <div>
                      <div className="text-[13px] text-darktint-text font-semibold">Email</div>
                      <a href="mailto:cashlens.app@gmail.com" className="font-display font-bold text-lg text-white hover:underline">
                        cashlens.app@gmail.com
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            ) : (
              <div className="text-[16px] leading-[1.75] text-body">
                <p className="text-sm text-muted mb-10">
                  <strong className="text-ink">Tanggal Berlaku:</strong> 6 April 2026 |{' '}
                  <strong className="text-ink">Pembaruan Terakhir:</strong> 6 April 2026
                </p>

                <section className="mb-10">
                  <SectionHeading index="01">Pendahuluan</SectionHeading>
                  <p>
                    CashLens (&quot;kami&quot;) berkomitmen untuk melindungi privasi Anda.
                    Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan,
                    dan melindungi informasi Anda saat menggunakan aplikasi mobile kami.
                  </p>
                </section>

                <div className="h-px bg-hairline mb-10" />

                <section className="mb-10">
                  <SectionHeading index="02">Informasi yang Kami Kumpulkan</SectionHeading>
                  <ul className="list-disc pl-5 space-y-2 mb-5">
                    <li><strong className="text-ink">Alamat Email:</strong> Untuk keperluan autentikasi akun.</li>
                    <li><strong className="text-ink">Data Transaksi:</strong> Catatan pemasukan/pengeluaran.</li>
                    <li><strong className="text-ink">Anggaran &amp; Kategori:</strong> Batasan dan label yang Anda buat.</li>
                    <li><strong className="text-ink">Preferensi:</strong> Pengaturan bahasa, mata uang, dan tema.</li>
                  </ul>
                  <div className="bg-green-soft border-2 border-green rounded-2xl px-5 py-4 mb-5">
                    <h3 className="font-display font-semibold text-lg text-ink mb-2">2.3 Akses Kamera</h3>
                    <p className="text-[#0E3E28]">
                      Aplikasi meminta izin kamera untuk memindai struk belanja. Foto diproses di
                      perangkat — hanya teks dan data yang diekstrak yang dikirim ke Google Cloud
                      (Gemini AI) untuk diproses. Tidak ada foto yang disimpan atau diunggah.
                    </p>
                  </div>
                  <div className="mb-5">
                    <h3 className="font-display font-semibold text-lg text-ink mb-2">2.4 Akses Notifikasi</h3>
                    <p>
                      Aplikasi membaca notifikasi masuk (misalnya, notifikasi transaksi bank)
                      untuk mencatat transaksi secara otomatis. Konten notifikasi dikirim ke
                      server kami untuk diproses. Data ini hanya digunakan untuk membuat catatan
                      transaksi dan tidak disimpan setelah diproses.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-ink mb-2">2.5 Data Keuangan</h3>
                    <p>
                      Aplikasi mengumpulkan jumlah transaksi, nama pedagang, tanggal, dan
                      kategori — baik yang dimasukkan secara manual, dipindai dari struk, maupun
                      diurai dari notifikasi bank.
                    </p>
                  </div>
                </section>

                <div className="h-px bg-hairline mb-10" />

                <section className="mb-10">
                  <SectionHeading index="03">Bagaimana Kami Menggunakan Data Anda</SectionHeading>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-ink">Pencatatan transaksi:</strong> Menyimpan dan menampilkan catatan pemasukan dan pengeluaran Anda.</li>
                    <li><strong className="text-ink">Pemindaian struk:</strong> Mengirim teks struk yang diekstrak ke Google Cloud (Gemini AI) untuk mengidentifikasi jumlah, pedagang, dan tanggal.</li>
                    <li><strong className="text-ink">Pemrosesan notifikasi:</strong> Mengirim konten notifikasi bank ke server kami untuk mencatat transaksi secara otomatis.</li>
                    <li><strong className="text-ink">Peringatan anggaran:</strong> Menganalisis pengeluaran Anda terhadap batas yang ditetapkan untuk memicu notifikasi dalam aplikasi.</li>
                    <li><strong className="text-ink">Peningkatan aplikasi:</strong> Menganalisis laporan crash yang dianonimkan dan pola penggunaan untuk memperbaiki bug dan meningkatkan fitur.</li>
                    <li><strong className="text-ink">Autentikasi:</strong> Memverifikasi identitas Anda melalui email menggunakan Supabase.</li>
                  </ul>
                </section>

                <div className="h-px bg-hairline mb-10" />

                <section className="mb-10">
                  <SectionHeading index="04">Layanan Pihak Ketiga</SectionHeading>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-ink">Supabase:</strong> Sinkronisasi awan &amp; autentikasi.</li>
                    <li><strong className="text-ink">Google Cloud (Gemini AI):</strong> Pemindaian struk belanja. Teks struk dikirim sementara untuk diproses dan tidak digunakan untuk pelatihan AI.</li>
                  </ul>
                </section>

                <div className="h-px bg-hairline mb-10" />

                <section className="mb-10">
                  <SectionHeading index="05">Hak Anda</SectionHeading>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-ink">Akses:</strong> Meminta salinan data Anda melalui <code>cashlens.app@gmail.com</code>.</li>
                    <li><strong className="text-ink">Penghapusan:</strong> Menghapus akun melalui Pengaturan atau email.</li>
                  </ul>
                </section>

                <div className="h-px bg-hairline mb-10" />

                <section>
                  <SectionHeading index="06">Hubungi Kami</SectionHeading>
                  <div className="bg-ink rounded-2xl px-6 py-6 flex items-center gap-4 flex-wrap">
                    <span className="w-12 h-12 rounded-2xl bg-green border-2 border-white flex items-center justify-center flex-shrink-0">
                      <Mail size={22} className="text-ink" />
                    </span>
                    <div>
                      <div className="text-[13px] text-darktint-text font-semibold">Email</div>
                      <a href="mailto:cashlens.app@gmail.com" className="font-display font-bold text-lg text-white hover:underline">
                        cashlens.app@gmail.com
                      </a>
                    </div>
                  </div>
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
