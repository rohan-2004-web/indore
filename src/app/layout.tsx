import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CriticalCSS from "@/components/CriticalCSS";
import { PerformanceMonitor } from "@/hooks/usePerformanceMonitor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://indore-gules.vercel.app'),
  title: 'Indore Escort Service | Premium Call Girls Service in Indore 24/7 | Top Rated Agency',
  description: 'Best Indore escort service with premium call girls available 24/7. Trusted agency offering VIP companions in Vijay Nagar, Palasia, AB Road, Saket & all Indore locations. Call +919372662471',
  keywords: 'Indore escort service, Indore call girls, escort service Indore, call girls Indore, Indore escorts, VIP escorts Indore, premium escort service, Vijay Nagar escorts, Palasia escorts, AB Road call girls, Saket escorts, Indore companion service, best escort agency Indore, 24/7 escort service',
  authors: [{ name: 'Indore Premium Escort Service' }],
  creator: 'Indore Premium Escort Service',
  publisher: 'Indore Premium Escort Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Indore Escort Service | Premium Call Girls Service in Indore 24/7',
    description: 'Best Indore escort service with premium call girls available 24/7. Trusted agency offering VIP companions in all Indore locations. Professional & discreet service.',
    type: 'website',
    locale: 'en_US',
    url: 'https://indore-gules.vercel.app',
    siteName: 'Indore Premium Escort Service',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Indore Premium Escort Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indore Escort Service | Premium Call Girls Service in Indore 24/7',
    description: 'Best Indore escort service with premium call girls available 24/7. Trusted agency offering VIP companions in all Indore locations.',
    creator: '@indoreescorts',
    site: '@indoreescorts',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://indore-gules.vercel.app',
    languages: {
      'en-US': 'https://indore-gules.vercel.app',
      'hi-IN': 'https://indore-gules.vercel.app/hi',
    },
  },
  category: 'Adult Services',
  other: {
    'revisit-after': '7 days',
    'distribution': 'global',
    'rating': 'adult',
    'copyright': 'Indore Premium Escort Service',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Enhanced Schema.org structured data with LocalBusiness, Organization, and Service schemas
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Organization', 'ProfessionalService'],
    '@id': 'https://indore-gules.vercel.app/#organization',
    name: 'Indore Premium Escort Service',
    alternateName: 'Indore Escort Agency',
    legalName: 'Indore Premium Escort Service',
    description: 'Leading professional escort service agency in Indore providing premium companions and VIP escort services across all major locations with 24/7 availability.',
    url: 'https://indore-gules.vercel.app',
    logo: 'https://indore-gules.vercel.app/logo.png',
    image: 'https://indore-gules.vercel.app/og-image.jpg',
    telephone: '+919372662471',
    email: 'contact@indoreescortservice.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Premium Service Center',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      postalCode: '452001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.7196,
      longitude: 75.8577,
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 22.7196,
        longitude: 75.8577,
      },
      geoRadius: '30000'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Indore',
        containedInPlace: {
          '@type': 'State',
          name: 'Madhya Pradesh'
        }
      }
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    priceRange: '₹₹₹',
    paymentAccepted: ['Cash', 'Credit Card', 'UPI', 'Bank Transfer'],
    currenciesAccepted: 'INR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Premium Escort Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'VIP Escort Service',
            description: 'Premium VIP escort companions for discerning clients'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Celebrity Escort Service',
            description: 'Celebrity-level escorts with exceptional elegance'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Event Companion Service',
            description: 'Professional companions for business and social events'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '147',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Satisfied Client'
        },
        reviewBody: 'Excellent professional service, highly recommended for quality and discretion.',
        datePublished: '2024-01-15'
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919372662471',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['Hindi', 'English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    },
    sameAs: [
      'https://facebook.com/indoreescorts',
      'https://twitter.com/indoreescorts',
      'https://instagram.com/indoreescorts',
    ],
    knowsAbout: [
      'AB Road', 'Palasia', 'Bhawar Kuan', 'Vijay Nagar', 'New Palasia', 
      'Indore GPO', 'Rajwada', 'Sarafa Bazaar', 'Khajrana', 'Kanadiya',
      'Scheme No 78', 'Sudama Nagar', 'Premium Escorts', 'VIP Companions',
      'Professional Escort Service', 'Celebrity Escorts'
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="preload" href="/images/services" as="fetch" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <CriticalCSS />
        <PerformanceMonitor />
        <Header />
        {children}
      </body>
    </html>
  );
}