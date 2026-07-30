import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import ProblemSolution from '@/components/ProblemSolution'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import DownloadCTA from '@/components/DownloadCTA'
import Footer from '@/components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'DompetKu',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Android',
  description:
    'DompetKu bikin catat pengeluaran jadi otomatis. Scan struk, atur budget per kategori, dan pantau transaksi — semua dalam satu app personal finance.',
  url: 'https://mydompetaku.com',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'IDR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '3',
  },
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <TrustStrip />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </main>
  )
}
