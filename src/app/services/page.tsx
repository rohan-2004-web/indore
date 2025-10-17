import { Metadata } from 'next'
import ServicesPageClient from './ServicesPageClient'

// SEO Metadata for Services Page
export const metadata: Metadata = {
  title: 'Escort Services Indore | Premium Call Girls & VIP Escorts',
  description: 'Premium escort services in Indore - Celebrity escorts, VIP companions, college girls, models & more. Professional, verified, discreet service. Call +91 9372662471.',
  keywords: [
    'escort services Indore',
    'call girls Indore',
    'VIP escorts Indore',
    'celebrity escorts',
    'premium escort service',
    'college girl escorts',
    'Indore escort agency',
    'professional escorts'
  ].join(', '),
  openGraph: {
    title: 'Premium Escort Services in Indore | Saumya Kapoor',
    description: 'Professional escort services in Indore with verified companions. Celebrity escorts, VIP models, and premium service available 24/7.',
    type: 'website',
    url: 'https://saumyakapoor.in/services',
  },
  alternates: {
    canonical: 'https://saumyakapoor.in/services',
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}