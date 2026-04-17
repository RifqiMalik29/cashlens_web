import type { Metadata } from 'next'
import PrivacyContent from '@/components/PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy — CashLens',
  description: 'CashLens Privacy Policy. Learn how we handle your data, including receipt scanning and transaction tracking.',
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
