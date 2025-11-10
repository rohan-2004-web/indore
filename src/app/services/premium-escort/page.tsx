import { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const serviceData = {
  name: 'Escort Service',
  slug: 'premium-escort',
  description: 'Premium escort services in Indore with high-class companions. Professional, elegant, and discreet service available 24/7.',
  features: [
    'High-class companions',
    'Premium service quality',
    'Professional approach',
    'Elegant presentations',
    'Verified and trained escorts'
  ],
  priceRange: '₹12,000 - ₹25,000'
}

export const metadata: Metadata = {
  title: `${serviceData.name} in Indore | High-Class Premium Escorts`,
  description: serviceData.description,
  keywords: 'premium escort service Indore, premium escorts Indore, high-class escorts, quality escort service, premium companions',
  openGraph: {
    title: `${serviceData.name} in Indore | High-Class Premium Escorts`,
    description: serviceData.description,
    url: `https://saumyakapoor.in/services/${serviceData.slug}`,
  },
  alternates: {
    canonical: `https://saumyakapoor.in/services/${serviceData.slug}`,
  }
}

export default function PremiumEscortPage() {
  return <ServicePageTemplate serviceData={serviceData} />
}