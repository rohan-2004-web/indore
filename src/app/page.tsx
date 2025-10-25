import { Metadata } from 'next'
import HomePageContent from './HomePageContent'

export const metadata: Metadata = {
  title: 'Escorts Service Indore | Call Girls 24/7 | Saumya Kapoor Agency',
  description: '⭐ Best escorts service Indore with 5000+ verified call girls & VIP escorts 🔥 Available 24/7 in Vijay Nagar, AB Road, Palasia 💯 Safe, discreet escorts service Indore ☎️ Book now: +91-9372662471',
  keywords: 'escorts service indore, Indore escort service, call girls in Indore, escorts in Indore, Indore call girls, escort service Indore, VIP escorts Indore, escorts service in Indore, call girls Indore 24/7, best escort service Indore, Vijay Nagar escorts, AB Road call girls, Palasia escort service, Saumya Kapoor escorts, celebrity escorts Indore, college girl escorts Indore, Russian escorts Indore, independent escorts Indore, housewife escorts Indore, mature escorts Indore, models Indore, luxury escort service Indore, professional companions Indore, high class escorts Indore, incall outcall service Indore, elite escort agency Indore, sophisticated companions, upscale dating service, verified escort profiles Indore, genuine escorts MP, model companions Indore, high profile escorts, discreet meetings Indore, private escort service, hotel escorts Indore, airport pickup escorts, business travel companions, event escorts Indore, party girls Indore, late night service, midnight escorts, instant booking escorts, online escort booking Indore, escort agency Madhya Pradesh, dating Indore, female companions, personal escort service, luxury call girls, five star escorts, top rated escort service, professional escort agency, safe escort meetings, confidential service Indore, exclusive escorts, companion service',
  openGraph: {
    title: '🔥 Escorts Service Indore | 5000+ Verified Call Girls 24/7 ⭐',
    description: '⭐ Best escorts service Indore with 5000+ verified call girls & VIP escorts 🔥 Available 24/7 across all Indore locations 💯 100% safe, discreet escorts service Indore 📞 Instant booking: +91-9372662471',
    type: 'website',
    locale: 'en_US',
    url: 'https://saumyakapoor.in',
    siteName: 'Escorts Service Indore - Saumya Kapoor Agency',
    images: [
      {
        url: 'https://saumyakapoor.in/images/services/indore escorts.webp',
        width: 1200,
        height: 630,
        alt: 'Escorts Service Indore - VIP Call Girls 24/7',
        type: 'image/webp',
      },
      {
        url: 'https://saumyakapoor.in/images/services/Premium Models.jpg',
        width: 1200,
        height: 630,
        alt: 'Escorts Service Indore - Professional Companions',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🔥 Premium Indore Escort Service | 5000+ Verified Call Girls 24/7 ⭐',
    description: '⭐ #1 rated escort service in Indore with 5000+ verified premium call girls & VIP escorts 🔥 Available 24/7 📞 Book now: +91-9372662471',
    images: ['https://saumyakapoor.in/images/services/indore escorts.webp'],
    creator: '@indoreescorts',
    site: '@indoreescorts',
  },
  alternates: {
    canonical: 'https://saumyakapoor.in',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Home() {
  return <HomePageContent />
}