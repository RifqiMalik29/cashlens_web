import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mydompetaku.com'),
  title: 'DompetKu — Scan struk, atur budget, pegang kendali',
  description:
    'DompetKu bikin catat pengeluaran jadi otomatis. Scan struk, atur budget per kategori, dan pantau transaksi — semua dalam satu app personal finance.',
  applicationName: 'DompetKu',
  keywords: [
    'aplikasi keuangan',
    'catat pengeluaran',
    'scan struk',
    'budget',
    'personal finance',
    'DompetKu',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'DompetKu',
    title: 'DompetKu — Scan struk, atur budget, pegang kendali',
    description:
      'DompetKu bikin catat pengeluaran jadi otomatis. Scan struk, atur budget per kategori, dan pantau transaksi — semua dalam satu app.',
    url: 'https://mydompetaku.com',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DompetKu — Scan struk, atur budget, pegang kendali',
    description:
      'DompetKu bikin catat pengeluaran jadi otomatis. Scan struk, atur budget per kategori, dan pantau transaksi.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
