import { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const serviceData = {
  name: 'VIP Escort Service',
  slug: 'vip-escort',
  description: 'Premium VIP escort services in Indore with elite companions. Exclusive, discreet, and professional service available 24/7.',
  features: [
    'Elite VIP companions',
    'Exclusive service',
    'Complete discretion',
    'Professional standards',
    'Verified profiles'
  ],
  priceRange: '₹15,000 - ₹30,000'
}

export const metadata: Metadata = {
  title: `${serviceData.name} in Indore | Elite VIP Escorts | Premium Companions`,
  description: serviceData.description,
  keywords: 'VIP escort service Indore, VIP escorts Indore, elite escorts, premium escort service, VIP companions Indore',
  openGraph: {
    title: `${serviceData.name} in Indore | Elite VIP Escorts`,
    description: serviceData.description,
    url: `https://saumyakapoor.in/services/${serviceData.slug}`,
  },
  alternates: {
    canonical: `https://saumyakapoor.in/services/${serviceData.slug}`,
  }
}

export default function VIPEscortPage() {
  return <ServicePageTemplate serviceData={serviceData} />
}