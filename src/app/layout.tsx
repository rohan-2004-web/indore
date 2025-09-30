import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CriticalCSS from "@/components/CriticalCSS";
import { PerformanceMonitor } from "@/hooks/usePerformanceMonitor";
import { FastIndexingSchemas } from "@/components/FastIndexingSchemas";
import InternalLinkingFooter from "@/components/InternalLinkingFooter";
import { Suspense } from "react";

// Optimize font loading with display swap for better performance
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saumyakapoor.in'),
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
    url: 'https://saumyakapoor.in',
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
    canonical: 'https://saumyakapoor.in',
    languages: {
      'en-US': 'https://saumyakapoor.in',
      'hi-IN': 'https://saumyakapoor.in/hi',
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
    '@id': 'https://saumyakapoor.in/#organization',
    name: 'Indore Premium Escort Service',
    alternateName: 'Indore Escort Agency',
    legalName: 'Indore Premium Escort Service',
    description: 'Leading professional escort service agency in Indore providing premium companions and VIP escort services across all major locations with 24/7 availability.',
    url: 'https://saumyakapoor.in',
    logo: 'https://saumyakapoor.in/logo.png',
    image: 'https://saumyakapoor.in/og-image.jpg',
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
      'Rajwada',
      'Scheme No 78', 'Premium Escorts', 'VIP Companions',
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
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="preload" href="/images/services" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
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
        <FastIndexingSchemas />
      </head>
      <body className={inter.className}>
        <CriticalCSS />
        <PerformanceMonitor />
        <Header />
        {/* Floating Call & WhatsApp Buttons - responsive: stacked on small, split on md+ */}
        <div>
          {/* Small screens: stacked bottom-right */}
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end md:hidden">
            <a href="tel:+919372662471" className="w-14 h-14 flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-xl hover:scale-110 transition-all text-sm font-bold ring-2 ring-pink-300/30">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
                <path d="M21 16.5a16.92 16.92 0 0 1-7.5-2.5 1 1 0 0 0-1.02.12l-2 1.5a17.06 17.06 0 0 1-6.2-6.2l1.5-2a1 1 0 0 0 .12-1.02A16.92 16.92 0 0 1 7.5 3 1 1 0 0 0 6.5 2H4a1 1 0 0 0-1 1C3 14.2 9.8 21 21 21a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1z" fill="currentColor" />
              </svg>
            </a>
            <a href="https://wa.me/919372662471" target="_blank" className="w-14 h-14 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-full shadow-xl hover:scale-110 transition-all text-sm font-bold ring-2 ring-green-300/30">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.52 3.48a11.91 11.91 0 10-16.84 16.84l-1.12 4.1 4.23-1.11A11.91 11.91 0 0020.52 3.48zm-9.02 17.35c4.8 0 8.71-3.9 8.71-8.71 0-4.81-3.91-8.71-8.71-8.71-4.81 0-8.71 3.9-8.71 8.71 0 1.54.39 3.01 1.13 4.31L3 21l3.76-1.03a8.66 8.66 0 004.74 1.87z" fill="currentColor" />
                <path d="M17.6 14.2c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.56-.01-.18 0-.47.07-.72.37-.25.3-.96.94-.96 2.3 0 1.36.98 2.68 1.12 2.87.14.2 1.92 2.94 4.65 4.01 3.22 1.25 3.22.83 3.8.78.58-.05 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.15-.28-.23-.58-.38z" fill="currentColor" />
              </svg>
            </a>
          </div>

          {/* Medium+ screens: Call on left, WhatsApp on right */}
          <a href="tel:+919372662471" aria-label="Call us" className="hidden md:flex fixed bottom-8 left-12 z-50 items-center justify-center w-14 h-14 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-xl hover:scale-105 transition-all font-bold ring-2 ring-pink-300/30">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
              <path d="M21 16.5a16.92 16.92 0 0 1-7.5-2.5 1 1 0 0 0-1.02.12l-2 1.5a17.06 17.06 0 0 1-6.2-6.2l1.5-2a1 1 0 0 0 .12-1.02A16.92 16.92 0 0 1 7.5 3 1 1 0 0 0 6.5 2H4a1 1 0 0 0-1 1C3 14.2 9.8 21 21 21a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1z" fill="currentColor" />
            </svg>
          </a>

          <a href="https://wa.me/919372662471" target="_blank" aria-label="WhatsApp" className="hidden md:flex fixed bottom-8 right-12 z-50 items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-xl hover:scale-105 transition-all font-bold ring-2 ring-green-300/30">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
              <path fillRule="evenodd" clipRule="evenodd" d="M20.52 3.48a11.91 11.91 0 10-16.84 16.84l-1.12 4.1 4.23-1.11A11.91 11.91 0 0020.52 3.48zm-9.02 17.35c4.8 0 8.71-3.9 8.71-8.71 0-4.81-3.91-8.71-8.71-8.71-4.81 0-8.71 3.9-8.71 8.71 0 1.54.39 3.01 1.13 4.31L3 21l3.76-1.03a8.66 8.66 0 004.74 1.87z" fill="currentColor" />
              <path d="M17.6 14.2c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.56-.01-.18 0-.47.07-.72.37-.25.3-.96.94-.96 2.3 0 1.36.98 2.68 1.12 2.87.14.2 1.92 2.94 4.65 4.01 3.22 1.25 3.22.83 3.8.78.58-.05 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.15-.28-.23-.58-.38z" fill="currentColor" />
            </svg>
          </a>
        </div>
        {children}
        <InternalLinkingFooter />
      </body>
    </html>
  );
}