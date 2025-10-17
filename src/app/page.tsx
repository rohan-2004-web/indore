import { Metadata } from 'next'
import HomePageContent from './HomePageContent'

export const metadata: Metadata = {
  title: 'Saumya Kapoor Escorts Indore | Call Girls +91-9372662471',
  description: '🌟 Best Indore escort service by Saumya Kapoor ⚡ 5000+ verified premium call girls 24/7 ✅ VIP escorts in Vijay Nagar, AB Road, Palasia ✅ 100% discreet & safe 📞 +919372662471 instant booking 🔒',
  keywords: 'Indore escort service, call girls in Indore, Saumya Kapoor Indore, Indore call girls, escort service Indore, VIP escorts Indore, premium escort service Indore, call girls Indore 24/7, best escort service Indore, Vijay Nagar escorts, AB Road call girls, Palasia escort service, celebrity escorts Indore, college girl escorts, Russian escorts Indore, independent escort Indore, housewife escorts Indore, mature escorts Indore, premium models Indore, luxury escort service, professional companions Indore',
  openGraph: {
    title: '🔥 #1 Indore Escort Service | Saumya Kapoor Premium Call Girls 24/7 ⭐',
    description: '🌟 Best Indore escort service with 5000+ verified premium call girls ⚡ Available 24/7 across all Indore locations ✅ 100% discreet & safe service 🔒 Instant booking: +919372662471',
    type: 'website',
    locale: 'en_US',
    url: 'https://saumyakapoor.in',
    siteName: 'Saumya Kapoor - Indore Premium Escort Service',
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
    title: '🔥 #1 Indore Escort Service | Saumya Kapoor Premium Call Girls 24/7 ⭐',
    description: '🌟 5000+ verified premium call girls in Indore ⚡ 24/7 availability across all locations ✅ 100% discreet service 📞 +919372662471',
    images: ['https://saumyakapoor.in/images/services/indore escorts.webp'],
    creator: '@saumyakapoor',
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