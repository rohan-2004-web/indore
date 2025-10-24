import { Metadata } from 'next'
import HomePageContent from './HomePageContent'

export const metadata: Metadata = {
  title: 'Indore Escort Service | Premium Call Girls 24/7 | Saumya Kapoor Agency',
  description: '⭐ #1 Indore escort service with 5000+ verified call girls & VIP escorts 🔥 Available 24/7 in Vijay Nagar, AB Road, Palasia 💯 Safe, discreet & professional service ☎️ Book now: +91-9372662471',
  keywords: 'Indore escort service, call girls in Indore, escorts in Indore, Indore call girls, escort service Indore, VIP escorts Indore, premium escort service Indore, call girls Indore 24/7, best escort service Indore, Vijay Nagar escorts, AB Road call girls, Palasia escort service, Saumya Kapoor escorts, celebrity escorts Indore, college girl escorts Indore, Russian escorts Indore, independent escorts Indore, housewife escorts Indore, mature escorts Indore, premium models Indore, luxury escort service Indore, professional companions Indore, high class escorts Indore, incall outcall service Indore',
  openGraph: {
    title: '🔥 Premium Indore Escort Service | 5000+ Verified Call Girls 24/7 ⭐',
    description: '⭐ #1 rated Indore escort service with 5000+ verified premium call girls & VIP escorts 🔥 Available 24/7 across all Indore locations 💯 100% safe, discreet & professional service � Instant booking: +91-9372662471',
    type: 'website',
    locale: 'en_US',
    url: 'https://saumyakapoor.in',
    siteName: 'Indore Premium Escort Service - Saumya Kapoor Agency',
    images: [
      {
        url: 'https://saumyakapoor.in/images/services/indore escorts.webp',
        width: 1200,
        height: 630,
        alt: 'Saumya Kapoor - Premium Indore Escort Service - VIP Call Girls 24/7',
        type: 'image/webp',
      },
      {
        url: 'https://saumyakapoor.in/images/services/Premium Models.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Models and Celebrity Escorts in Indore - Saumya Kapoor Agency',
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