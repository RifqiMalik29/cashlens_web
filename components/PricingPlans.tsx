'use client'

import { useState } from 'react'
import { Sprout, Zap, Check } from 'lucide-react'

export default function PricingPlans() {
  const [annual, setAnnual] = useState(false)

  const premiumPrice = annual ? 'Rp 149rb' : 'Rp 15rb'
  const perLabel = annual ? '/tahun' : '/bulan'

  return (
    <div>
      {/* billing toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center gap-1.5 bg-white border-2 border-ink shadow-hard-sm rounded-full p-1.5">
          <button
            onClick={() => setAnnual(false)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
              !annual ? 'bg-ink text-white' : 'text-muted'
            }`}
          >
            Bulanan
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`flex items-center gap-1 px-5 py-2 rounded-full text-sm font-bold transition-all ${
              annual ? 'bg-ink text-white' : 'text-muted'
            }`}
          >
            Tahunan
            <span className="text-[11px] bg-ink text-sunny rounded-full px-1.5 py-0.5 ml-1">-17%</span>
          </button>
        </div>
      </div>

      {/* plan cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start max-w-2xl mx-auto">
        {/* Gratis */}
        <div className="bg-white border-2 border-ink shadow-hard rounded-3xl p-8">
          <span className="inline-flex w-12 h-12 rounded-2xl bg-[#EEF0EA] border-2 border-ink items-center justify-center mb-5">
            <Sprout size={24} className="text-ink" />
          </span>
          <div className="font-display font-bold text-[22px] text-ink">Gratis</div>
          <p className="mt-1.5 mb-5 text-sm text-muted leading-relaxed">
            Untuk yang baru mulai rapikan keuangan.
          </p>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="font-display font-bold text-4xl text-ink">Rp 0</span>
            <span className="text-sm text-muted">/selamanya</span>
          </div>
          <button className="w-full bg-white border-2 border-ink rounded-full py-3 font-bold text-[15px] text-ink mb-6 transition-colors hover:bg-[#F1F1E9]">
            Mulai gratis
          </button>
          <div className="flex flex-col gap-3">
            {['50 transaksi per bulan', 'Riwayat transaksi tanpa batas', 'Kategori & budget dasar'].map((f) => (
              <div key={f} className="flex gap-2.5 items-start">
                <Check size={18} className="text-green flex-shrink-0" />
                <span className="text-sm text-body">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Premium (featured) */}
        <div className="relative bg-green border-2 border-ink shadow-hard-lg rounded-3xl p-8 sm:-mt-3">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-ink text-sunny text-xs font-extrabold tracking-wide px-4 py-1.5 rounded-full whitespace-nowrap">
            PALING POPULER
          </div>
          <span className="inline-flex w-12 h-12 rounded-2xl bg-white border-2 border-ink shadow-hard-sm items-center justify-center mb-5">
            <Zap size={24} className="text-ink" />
          </span>
          <div className="font-display font-bold text-[22px] text-ink">Premium</div>
          <p className="mt-1.5 mb-5 text-sm text-[#0E3E28] leading-relaxed">
            Untuk yang serius pegang kendali penuh.
          </p>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="font-display font-bold text-4xl text-ink">{premiumPrice}</span>
            <span className="text-sm text-[#0E3E28]">{perLabel}</span>
          </div>
          <button className="w-full bg-ink text-white shadow-[3px_3px_0_#0A3D26] rounded-full py-3 font-bold text-[15px] mb-6 transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">
            Upgrade ke Premium
          </button>
          <div className="flex flex-col gap-3">
            {[
              'Transaksi tanpa batas',
              'Kategori budget tanpa batas',
              'Laporan & insight bulanan',
              'Sinkron multi-perangkat',
            ].map((f) => (
              <div key={f} className="flex gap-2.5 items-start">
                <Check size={18} className="text-[#0A3D26] flex-shrink-0" />
                <span className="text-sm text-[#0E3E28] font-semibold">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-[13px] text-muted mt-7">
        Paket Tahunan hemat ~17% dibanding bayar bulanan terus-menerus.
      </p>
    </div>
  )
}
