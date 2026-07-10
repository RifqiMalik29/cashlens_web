import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ScrollText, Mail, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Syarat & Ketentuan | CashLens',
  description: 'Syarat & Ketentuan penggunaan aplikasi dan layanan CashLens.',
}

function SectionHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-[13px] font-bold text-violet bg-violet-soft border border-violet rounded-lg px-2.5 py-0.5">
        {index}
      </span>
      <h2 className="font-display font-bold text-[26px] tracking-[-0.02em] text-ink m-0">{children}</h2>
    </div>
  )
}

const toc = [
  { id: 't1', label: '1. Penerimaan ketentuan' },
  { id: 't2', label: '2. Kelayakan & akun' },
  { id: 't3', label: '3. Penggunaan layanan' },
  { id: 't4', label: '4. Langganan & pembayaran' },
  { id: 't5', label: '5. Data & konten kamu' },
  { id: 't6', label: '6. Kekayaan intelektual' },
  { id: 't7', label: '7. Penafian layanan' },
  { id: 't8', label: '8. Batasan tanggung jawab' },
  { id: 't9', label: '9. Penghentian' },
  { id: 't10', label: '10. Perubahan ketentuan' },
  { id: 't11', label: '11. Hukum yang berlaku' },
  { id: 't12', label: '12. Hubungi kami' },
]

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-warm">
        {/* Header band */}
        <div className="relative overflow-hidden bg-ink">
          <div className="absolute -right-10 -top-16 w-[260px] h-[260px] rounded-full bg-violet opacity-90 pointer-events-none" />
          <div className="absolute right-[200px] -bottom-20 w-[130px] h-[130px] rounded-[32px] bg-green rotate-[16deg] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8 py-16">
            <div className="inline-flex items-center gap-2 bg-darktint-bg border border-darktint-border rounded-full px-4 py-2 text-sm font-bold text-darktint-text mb-6">
              <ScrollText size={15} /> Legal
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-[52px] leading-[1] tracking-[-0.035em] text-white">
              Syarat &amp; Ketentuan
            </h1>
            <p className="mt-4 text-base sm:text-[17px] text-darktint-muted leading-relaxed max-w-[560px]">
              Ketentuan ini mengatur penggunaan aplikasi dan layanan CashLens. Mohon dibaca dengan
              saksama sebelum menggunakan.
            </p>
            <div className="font-mono text-[13px] text-[#7FA592] mt-6">Terakhir diperbarui: 1 Juli 2026</div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-14">
          {/* TOC */}
          <div className="bg-white border-2 border-ink shadow-hard-sm rounded-2xl px-7 py-6 mb-12">
            <div className="font-display font-bold text-base text-ink mb-4">Daftar isi</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {toc.map((t) => (
                <a key={t.id} href={`#${t.id}`} className="text-green-deep hover:underline">
                  {t.label}
                </a>
              ))}
            </div>
          </div>

          <div className="text-[16px] leading-[1.75] text-body">
            <section id="t1" className="mb-10">
              <SectionHeading index="01">Penerimaan ketentuan</SectionHeading>
              <p>
                Dengan mengunduh, mengakses, atau menggunakan aplikasi CashLens (&ldquo;Layanan&rdquo;),
                kamu setuju untuk terikat oleh Syarat &amp; Ketentuan ini serta{' '}
                <Link href="/privacy">Kebijakan Privasi</Link> kami. Jika kamu tidak menyetujui
                salah satu bagian dari ketentuan ini, mohon untuk tidak menggunakan Layanan.
              </p>
            </section>

            <div className="h-px bg-hairline mb-10" />

            <section id="t2" className="mb-10">
              <SectionHeading index="02">Kelayakan &amp; akun</SectionHeading>
              <p className="mb-4">
                Kamu harus berusia minimal 17 tahun untuk menggunakan Layanan. Dengan membuat
                akun, kamu menyatakan bahwa informasi yang kamu berikan akurat dan terkini.
              </p>
              <p>
                Kamu bertanggung jawab menjaga kerahasiaan kredensial akun dan seluruh aktivitas
                yang terjadi di bawah akunmu. Segera beri tahu kami jika ada dugaan penggunaan
                tanpa izin.
              </p>
            </section>

            <div className="h-px bg-hairline mb-10" />

            <section id="t3" className="mb-10">
              <SectionHeading index="03">Penggunaan layanan</SectionHeading>
              <p className="mb-4">
                Kamu setuju untuk menggunakan Layanan hanya untuk tujuan yang sah. Kamu tidak
                diperbolehkan untuk:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Menyalahgunakan, merusak, atau mengganggu operasi Layanan.</li>
                <li>Mencoba mengakses sistem atau data pengguna lain tanpa izin.</li>
                <li>Melakukan rekayasa balik atau menyalin bagian dari aplikasi.</li>
                <li>Menggunakan Layanan untuk aktivitas ilegal atau penipuan.</li>
              </ul>
            </section>

            <div className="h-px bg-hairline mb-10" />

            <section id="t4" className="mb-10">
              <SectionHeading index="04">Langganan &amp; pembayaran</SectionHeading>
              <p className="mb-4">
                CashLens menawarkan paket gratis dan berbayar. Detail paket tersedia di halaman{' '}
                <Link href="/pricing">Harga</Link>. Langganan berbayar diperpanjang otomatis di
                akhir tiap periode kecuali dibatalkan sebelum tanggal perpanjangan.
              </p>
              <p>
                Kamu dapat membatalkan kapan saja; akses berbayar tetap berlaku hingga akhir
                periode yang sudah dibayar. Kami menyediakan jaminan uang kembali 30 hari untuk
                pembelian pertama. Harga dapat berubah dengan pemberitahuan sebelumnya.
              </p>
            </section>

            <div className="h-px bg-hairline mb-10" />

            <section id="t5" className="mb-10">
              <SectionHeading index="05">Data &amp; konten kamu</SectionHeading>
              <div className="bg-green-soft border-2 border-green rounded-2xl px-5 py-4 mb-4 flex gap-3 items-start">
                <ShieldCheck size={22} className="text-green-deep flex-shrink-0 mt-0.5" />
                <p className="m-0 text-[#0E3E28] font-medium">
                  Data keuangan, transaksi, dan struk yang kamu masukkan tetap menjadi milikmu.
                  Kami hanya memprosesnya untuk menyediakan Layanan sesuai{' '}
                  <Link href="/privacy">Kebijakan Privasi</Link>.
                </p>
              </div>
              <p>
                Kamu bertanggung jawab atas keakuratan data yang kamu masukkan. Kamu bisa
                mengekspor atau menghapus datamu kapan saja melalui pengaturan aplikasi.
              </p>
            </section>

            <div className="h-px bg-hairline mb-10" />

            <section id="t6" className="mb-10">
              <SectionHeading index="06">Kekayaan intelektual</SectionHeading>
              <p>
                Seluruh hak atas aplikasi, termasuk logo, desain, dan kode CashLens, dimiliki
                oleh kami dan dilindungi hukum yang berlaku. Ketentuan ini tidak memberimu hak
                untuk menggunakan merek dagang kami tanpa persetujuan tertulis.
              </p>
            </section>

            <div className="h-px bg-hairline mb-10" />

            <section id="t7" className="mb-10">
              <SectionHeading index="07">Penafian layanan</SectionHeading>
              <p>
                CashLens adalah alat bantu pencatatan keuangan pribadi,{' '}
                <strong className="text-ink">bukan nasihat keuangan, investasi, atau pajak</strong>.
                Layanan disediakan &ldquo;sebagaimana adanya&rdquo; tanpa jaminan bahwa akan
                selalu bebas kesalahan atau tanpa gangguan. Pemindaian OCR dapat menghasilkan
                ketidakakuratan — mohon selalu memverifikasi data yang penting.
              </p>
            </section>

            <div className="h-px bg-hairline mb-10" />

            <section id="t8" className="mb-10">
              <SectionHeading index="08">Batasan tanggung jawab</SectionHeading>
              <p>
                Sejauh diizinkan oleh hukum, CashLens tidak bertanggung jawab atas kerugian tidak
                langsung, insidental, atau konsekuensial yang timbul dari penggunaan Layanan,
                termasuk keputusan finansial yang kamu ambil berdasarkan data di aplikasi.
              </p>
            </section>

            <div className="h-px bg-hairline mb-10" />

            <section id="t9" className="mb-10">
              <SectionHeading index="09">Penghentian</SectionHeading>
              <p>
                Kamu dapat berhenti menggunakan Layanan dan menghapus akun kapan saja melalui
                halaman <Link href="/delete-account">Hapus Akun</Link>. Kami berhak menangguhkan
                atau menghentikan akses jika terjadi pelanggaran terhadap ketentuan ini.
              </p>
            </section>

            <div className="h-px bg-hairline mb-10" />

            <section id="t10" className="mb-10">
              <SectionHeading index="10">Perubahan ketentuan</SectionHeading>
              <p>
                Kami dapat memperbarui Syarat &amp; Ketentuan ini dari waktu ke waktu. Perubahan
                signifikan akan diberitahukan melalui aplikasi atau email. Dengan terus
                menggunakan Layanan setelah perubahan berlaku, kamu dianggap menyetujui ketentuan
                yang diperbarui.
              </p>
            </section>

            <div className="h-px bg-hairline mb-10" />

            <section id="t11" className="mb-10">
              <SectionHeading index="11">Hukum yang berlaku</SectionHeading>
              <p>
                Ketentuan ini diatur dan ditafsirkan berdasarkan hukum Republik Indonesia. Setiap
                sengketa yang timbul akan diselesaikan melalui musyawarah, dan bila tidak
                tercapai kesepakatan, melalui yurisdiksi pengadilan yang berwenang di Indonesia.
              </p>
            </section>

            <div className="h-px bg-hairline mb-10" />

            <section id="t12">
              <SectionHeading index="12">Hubungi kami</SectionHeading>
              <p className="mb-5">Ada pertanyaan tentang ketentuan ini? Tim kami siap membantu.</p>
              <div className="bg-ink rounded-2xl px-6 py-6 flex items-center gap-4 flex-wrap">
                <span className="w-12 h-12 rounded-2xl bg-violet border-2 border-white flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-white" />
                </span>
                <div>
                  <div className="text-[13px] text-darktint-text font-semibold">Email dukungan hukum</div>
                  <a href="mailto:cashlens.app@gmail.com" className="font-display font-bold text-lg text-white hover:underline">
                    cashlens.app@gmail.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
