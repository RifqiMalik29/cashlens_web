import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Trash2,
  Check,
  TriangleAlert,
  ChevronLeft,
  ChevronRight,
  User,
  Lock,
  Download,
  Signal,
  Wifi,
  BatteryFull,
} from 'lucide-react'

export const metadata = {
  title: 'Delete Account | CashLens',
  description: 'Instructions and requests for deleting your CashLens account.',
}

const steps = [
  {
    number: 1,
    bg: 'bg-green',
    text: 'text-ink',
    title: 'Open the Settings tab',
    body: (
      <>
        Open the CashLens app and navigate to the <strong className="text-ink">Settings</strong>{' '}
        tab.
      </>
    ),
  },
  {
    number: 2,
    bg: 'bg-sunny',
    text: 'text-ink',
    title: 'Scroll to Account',
    body: (
      <>
        Scroll down to the <strong className="text-ink">Account</strong> section at the bottom.
      </>
    ),
  },
  {
    number: 3,
    bg: 'bg-violet',
    text: 'text-white',
    title: 'Tap Delete Account',
    body: (
      <>
        Tap <strong className="text-ink">Delete Account</strong> (indicated by a red trash icon),
        then confirm in the dialog warning that your account and data will be permanently
        deleted.
      </>
    ),
  },
  {
    number: 4,
    bg: 'bg-coral',
    text: 'text-ink',
    title: 'Done',
    body: (
      <>
        Tap <strong className="text-ink">Hapus Akun</strong> to finalize. Your account is
        deactivated immediately and all data is permanently erased within{' '}
        <strong className="text-ink">30 days</strong>.
      </>
    ),
  },
]

const dataDeleted = [
  'Account profile & credentials',
  'All transactions & history',
  'Saved receipt images',
  'Budgets & custom categories',
]

export default function DeleteAccount() {
  return (
    <>
      <Navbar />
      <main className="bg-warm">
        {/* Header band */}
        <div className="relative overflow-hidden bg-ink">
          <div className="absolute -right-10 -top-16 w-[260px] h-[260px] rounded-full bg-coral opacity-90 pointer-events-none" />
          <div className="absolute right-[200px] -bottom-20 w-[130px] h-[130px] rounded-[32px] bg-sunny rotate-[16deg] pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-16">
            <div className="inline-flex items-center gap-2 bg-[#3A2018] border border-[#4A2C22] rounded-full px-4 py-2 text-sm font-bold text-[#FFC0AE] mb-6">
              <Trash2 size={15} /> Manage account
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-[52px] leading-[1] tracking-[-0.035em] text-white">
              Delete your CashLens account
            </h1>
            <p className="mt-4 text-base sm:text-[17px] text-darktint-muted leading-relaxed max-w-[560px]">
              You can delete your account anytime directly from the app. Follow the steps below —
              it&apos;s quick and permanent.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 items-start">
            {/* Left: steps */}
            <div>
              <h2 className="font-display font-bold text-[28px] tracking-[-0.02em] text-ink mb-7">
                How to delete your account in the app
              </h2>

              <div className="flex flex-col gap-5">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-4 items-start">
                    <span
                      className={`w-11 h-11 flex-shrink-0 rounded-2xl border-2 border-ink shadow-hard-sm flex items-center justify-center font-display font-bold text-lg ${step.bg} ${step.text}`}
                    >
                      {step.number}
                    </span>
                    <div className="pt-0.5">
                      <div className="font-display font-bold text-lg text-ink">{step.title}</div>
                      <p className="mt-1.5 text-[15px] text-body leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* what gets deleted */}
              <div className="bg-white border-2 border-ink shadow-hard rounded-2xl px-7 py-6 mt-9">
                <div className="font-display font-bold text-[17px] text-ink mb-4">
                  Data that will be deleted
                </div>
                <div className="flex flex-col gap-3">
                  {dataDeleted.map((d) => (
                    <div key={d} className="flex gap-2.5 items-center">
                      <Check size={18} className="text-green flex-shrink-0" />
                      <span className="text-[15px] text-body">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* warning */}
              <div className="bg-coral-soft border-2 border-coral rounded-2xl px-6 py-5 mt-5 flex gap-3.5 items-start">
                <TriangleAlert size={22} className="text-[#C7381A] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-extrabold text-[15px] text-ink mb-1">
                    This action cannot be undone
                  </div>
                  <p className="text-[14.5px] text-[#5A322A] leading-relaxed">
                    Make sure you&apos;ve exported any data you want to keep before deleting your
                    account. After 30 days, data cannot be recovered.
                  </p>
                </div>
              </div>

              {/* alt */}
              <p className="text-[15px] text-body leading-relaxed mt-7">
                Can&apos;t access the app? Send a deletion request to{' '}
                <a
                  href="mailto:cashlens.app@gmail.com?subject=Account Deletion Request"
                  className="text-green-deep hover:underline"
                >
                  cashlens.app@gmail.com
                </a>{' '}
                from your registered email with the subject{' '}
                <strong className="text-ink">&quot;Account Deletion Request&quot;</strong> and
                we&apos;ll process it within 7 business days.
              </p>
            </div>

            {/* Right: phone mockup */}
            <div className="sticky top-24">
              <div className="font-mono text-[11px] text-muted mb-3.5 text-center">
                IN-APP VIEW
              </div>
              <div className="w-[280px] mx-auto bg-ink rounded-[44px] p-2.5 shadow-hard-lg">
                <div className="bg-warm rounded-[36px] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-6 bg-ink rounded-b-2xl z-20" />
                  <div className="flex justify-between items-center px-5 pt-3 pb-1 text-xs font-bold text-ink">
                    <span>9:41</span>
                    <span className="flex gap-1">
                      <Signal size={14} />
                      <Wifi size={14} />
                      <BatteryFull size={14} />
                    </span>
                  </div>
                  <div className="flex items-center gap-3 px-5 pt-3.5 pb-1.5">
                    <ChevronLeft size={22} className="text-ink" />
                    <span className="font-display font-bold text-lg text-ink">Account</span>
                  </div>
                  <div className="px-4 pt-2.5 pb-5">
                    <div className="bg-white border-2 border-ink rounded-2xl overflow-hidden">
                      <div className="flex items-center gap-2.5 p-3.5 border-b border-[#EEF0EA]">
                        <span className="w-[30px] h-[30px] rounded-lg bg-green-soft flex items-center justify-center">
                          <User size={16} className="text-green-deep" />
                        </span>
                        <span className="text-[13px] font-semibold text-ink flex-1">Edit profile</span>
                        <ChevronRight size={16} className="text-[#B8C2BB]" />
                      </div>
                      <div className="flex items-center gap-2.5 p-3.5 border-b border-[#EEF0EA]">
                        <span className="w-[30px] h-[30px] rounded-lg bg-violet-soft flex items-center justify-center">
                          <Lock size={16} className="text-violet" />
                        </span>
                        <span className="text-[13px] font-semibold text-ink flex-1">Security</span>
                        <ChevronRight size={16} className="text-[#B8C2BB]" />
                      </div>
                      <div className="flex items-center gap-2.5 p-3.5">
                        <span className="w-[30px] h-[30px] rounded-lg bg-sunny-soft flex items-center justify-center">
                          <Download size={16} className="text-[#B98900]" />
                        </span>
                        <span className="text-[13px] font-semibold text-ink flex-1">Export data</span>
                        <ChevronRight size={16} className="text-[#B8C2BB]" />
                      </div>
                    </div>

                    <div className="relative mt-4">
                      <div className="absolute -inset-1.5 border-2 border-dashed border-coral rounded-[18px]" />
                      <div className="relative bg-coral-soft border-2 border-coral rounded-2xl p-3.5 flex items-center justify-center gap-2">
                        <Trash2 size={17} className="text-[#C7381A]" />
                        <span className="text-sm font-extrabold text-[#C7381A]">Delete Account</span>
                      </div>
                    </div>
                    <div className="text-center text-[10px] text-muted mt-2.5 font-mono">
                      ← step 3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
