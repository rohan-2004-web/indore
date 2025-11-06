import { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const serviceData = {
  name: 'Call Girl Service',
  slug: 'call-girl',
  description: 'Professional call girl services in Indore with verified companions. Discreet, reliable, and available 24/7 throughout Indore.',
  features: [
    'Verified call girls',
    'Professional service',
    'Complete discretion',
    '24/7 availability',
    'All Indore locations'
  ],
  priceRange: '₹8,000 - ₹20,000'
}

export const metadata: Metadata = {
  title: `${serviceData.name} in Indore | Professional Call Girls | 24/7 Available`,
  description: serviceData.description,
  keywords: 'call girl service Indore, call girls Indore, professional call girls, verified call girls, Indore call girl service',
  openGraph: {
    title: `${serviceData.name} in Indore | Professional Call Girls`,
    description: serviceData.description,
    url: `https://saumyakapoor.in/services/${serviceData.slug}`,
  },
  alternates: {
    canonical: `https://saumyakapoor.in/services/${serviceData.slug}`,
  }
}

export default function CallGirlPage() {
  return <ServicePageTemplate serviceData={serviceData} />
}