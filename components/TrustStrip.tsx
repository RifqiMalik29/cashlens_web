const cities = ['Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta', 'Bali']

export default function TrustStrip() {
  return (
    <div className="bg-ink border-y-2 border-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-5 flex flex-wrap items-center justify-center gap-8 sm:gap-11">
        <span className="text-sm font-semibold text-darktint-text">Dipercaya oleh pengguna dari</span>
        {cities.map((city) => (
          <span key={city} className="font-display font-bold text-lg text-white/80">
            {city}
          </span>
        ))}
      </div>
    </div>
  )
}
