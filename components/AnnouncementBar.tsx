'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="relative bg-ink text-white text-center text-sm font-semibold py-2.5 px-4 flex items-center justify-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0" />
      <span>
        DompetKu 2.0 sudah rilis — scan struk makin cepat &amp; akurat.{' '}
        <a href="/#download" className="inline-flex items-center gap-1 text-sunny hover:underline">
          Coba sekarang <ArrowRight size={14} />
        </a>
      </span>
      <button
        onClick={() => setVisible(false)}
        aria-label="Tutup pengumuman"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-xs"
      >
        ✕
      </button>
    </div>
  )
}
