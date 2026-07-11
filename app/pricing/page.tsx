import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PricingPlans from '@/components/PricingPlans'
import { Tag, BadgeCheck, Lock, Headset, Download } from 'lucide-react'

export const metadata = {
  title: 'Harga | DompetKu',
  description: 'Pilih paket DompetKu yang sesuai kebutuhanmu — Gratis, Pro, atau Family.',
}

const trustPoints = [
  {
    icon: BadgeCheck,
    bg: 'bg-green-soft',
    iconColor: 'text-green-deep',
    title: 'Batalkan kapan saja',
    body: 'Tanpa kontrak, tanpa penalti.',
  },
  {
    icon: Lock,
    bg: 'bg-sunny-soft',
    iconColor: 'text-[#B98900]',
    title: 'Datamu tetap milikmu',
    body: 'Terenkripsi & tidak dijual.',
  },
  {
    icon: Headset,
    bg: 'bg-violet-soft',
    iconColor: 'text-violet',
    title: 'Dukungan cepat',
    body: 'Bantuan dalam bahasa Indonesia.',
  },
]

const faqs = [
  {
    q: 'Apakah paket gratis benar-benar gratis?',
    a: 'Ya. Paket Gratis bisa dipakai selamanya tanpa biaya dan tanpa kartu kredit. Kamu hanya upgrade kalau butuh fitur tanpa batas.',
  },
  {
    q: 'Bisa ganti paket kapan saja?',
    a: 'Bisa. Upgrade atau downgrade kapan pun. Perubahan berlaku di siklus tagihan berikutnya, dan sisa saldo dihitung proporsional.',
  },
  {
    q: 'Metode pembayaran apa yang didukung?',
    a: 'Kartu kredit/debit, e-wallet (GoPay, OVO, DANA), dan transfer bank melalui virtual account.',
  },
  {
    q: 'Bagaimana kalau saya berhenti berlangganan?',
    a: 'Datamu tetap aman dan bisa diakses dalam mode Gratis. Kamu tidak akan kehilangan transaksi yang sudah tercatat.',
  },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-warm">
        {/* header */}
        <div className="relative overflow-hidden">
          <div className="absolute -left-24 top-10 w-[300px] h-[300px] rounded-full bg-sunny opacity-70 pointer-events-none" />
          <div className="absolute -right-16 -top-10 w-[220px] h-[220px] rounded-[44px] bg-violet opacity-55 rotate-[18deg] pointer-events-none" />
          <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-8 pt-16 pb-2 text-center">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-ink shadow-hard-sm rounded-full px-4 py-2 text-sm font-bold text-ink mb-6">
              <Tag size={15} /> Harga
            </div>
            <h1 className="font-display font-bold text-[36px] sm:text-[60px] leading-[0.98] tracking-[-0.04em] text-ink">
              Mulai gratis.
              <br />
              Upgrade saat siap.
            </h1>
            <p className="mt-5 text-lg text-body leading-relaxed max-w-[520px] mx-auto">
              Tanpa kartu kredit untuk memulai. Batalkan kapan saja — datamu tetap milikmu.
            </p>
          </div>
        </div>

        {/* plans */}
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 pt-12 pb-10">
          <PricingPlans />
        </div>

        {/* trust strip */}
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {trustPoints.map((t) => {
              const Icon = t.icon
              return (
                <div key={t.title} className="flex gap-3.5 items-start">
                  <span className={`w-10 h-10 flex-shrink-0 rounded-xl border-2 border-ink flex items-center justify-center ${t.bg}`}>
                    <Icon size={20} className={t.iconColor} />
                  </span>
                  <div>
                    <div className="font-bold text-[15px] text-ink">{t.title}</div>
                    <div className="text-[13px] text-muted leading-relaxed">{t.body}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-[820px] mx-auto px-4 sm:px-8 py-16">
          <h2 className="font-display font-bold text-[36px] tracking-[-0.03em] text-ink mb-7 text-center">
            Pertanyaan umum
          </h2>
          <div className="flex flex-col gap-3.5">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white border-2 border-ink shadow-hard-sm rounded-2xl px-6 py-5">
                <div className="font-display font-bold text-[17px] text-ink mb-2">{f.q}</div>
                <p className="text-[15px] text-body leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 pb-24">
          <div className="relative overflow-hidden bg-ink border-2 border-ink shadow-[10px_10px_0_#13C97A] rounded-[32px] px-6 sm:px-12 py-14 text-center">
            <div className="absolute -left-12 -bottom-16 w-[200px] h-[200px] rounded-full bg-violet opacity-40 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl sm:text-[42px] leading-[1.02] tracking-[-0.03em] text-white">
                Coba DompetKu gratis hari ini
              </h2>
              <p className="mt-4 text-[17px] text-darktint-muted leading-relaxed">
                Scan struk pertamamu dalam 2 menit. Tanpa kartu kredit.
              </p>
              <a
                href="/#download"
                className="inline-flex items-center gap-2 bg-green text-ink border-2 border-ink shadow-[4px_4px_0_#FFC93C] rounded-full px-7 py-[15px] font-bold text-base mt-7 transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <Download size={18} /> Download gratis
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
