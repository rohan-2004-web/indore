import { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const serviceData = {
  name: 'Independent Escort Service',
  slug: 'independent-escort',
  description: 'Independent escort services in Indore with self-employed companions. Direct booking, no agency fees, complete privacy and discretion.',
  features: [
    'Self-employed independents',
    'Direct booking available',
    'No agency commissions',
    'Complete privacy',
    'Personal service approach'
  ],
  priceRange: '₹10,000 - ₹22,000'
}

export const metadata: Metadata = {
  title: `${serviceData.name} in Indore | Self-Employed Independent Escorts`,
  description: serviceData.description,
  keywords: 'independent escort service Indore, independent escorts Indore, self-employed escorts, private escorts, direct booking escorts',
  openGraph: {
    title: `${serviceData.name} in Indore | Self-Employed Independent Escorts`,
    description: serviceData.description,
    url: `https://saumyakapoor.in/services/${serviceData.slug}`,
  },
  alternates: {
    canonical: `https://saumyakapoor.in/services/${serviceData.slug}`,
  }
}

export default function IndependentEscortPage() {
  return <ServicePageTemplate serviceData={serviceData} />
}