import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./accessibility.css";
import "../styles/performance.css";
import Header from "@/components/Header";
import CriticalCSS from "@/components/CriticalCSS";
import { CriticalInlineCSS, CriticalResourceHints } from "@/components/CriticalOptimizations";
import { PerformanceMonitor } from "@/hooks/usePerformanceMonitor";
import { FastIndexingSchemas } from "@/components/FastIndexingSchemas";
import InternalLinkingFooter from "@/components/InternalLinkingFooter";
import { Suspense } from "react";
import Script from "next/script";
import dynamic from "next/dynamic";

// Lazy load AI Chat - reduces initial JS bundle
const AIChatWrapper = dynamic(() => import("@/components/AIChatWrapper"), {
  loading: () => null,
});

// Optimize font loading with display swap and fallback for better performance
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  adjustFontFallback: true,
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saumyakapoor.in'),
  title: {
    template: '%s | Escorts Service Indore - Saumya Kapoor | Call Girls 24/7',
    absolute: '🔥 #1 Escorts Service Indore | Saumya Kapoor Call Girls 24/7 ⭐ VIP Agency'
  },
  description: '🌟 Best escorts service Indore by Saumya Kapoor ⚡ Call girls in Indore 24/7 ✅ 5000+ verified profiles 🔒 100% discreet escorts service Indore 📍 Vijay Nagar, AB Road, Palasia 📞 +919372662471 instant booking',
  keywords: 'escorts service indore, Indore escort service, call girls in Indore, Indore call girls, escort service Indore, escorts service in Indore, Saumya Kapoor Indore, VIP escorts Indore, call girls Indore 24/7, best escorts service Indore, Indore escorts agency, Vijay Nagar call girls, AB Road escorts, Palasia escort service, independent escort Indore, celebrity escorts Indore, college girl escorts Indore, Russian escorts Indore, housewife escorts Indore, mature escorts Indore, high profile escorts Indore, luxury companions Indore, elite escort agency, professional escort service, discreet escort meetings, outcall escort service, incall escort locations, hotel room service Indore, private escort meetings, verified escort profiles, safe escort service, genuine escorts Indore, model escorts MP, Indore dating service, female companions Indore, personal escort service, sophisticated escorts, upscale escort service, dating Indore, escort booking online, instant escort booking, 24 hour escort service, midnight escort service, late night companions, party escorts Indore, event companions Indore, business travel escorts, corporate escort service, airport escort service, five star hotel escorts',
  authors: [{ name: 'Escorts Service Indore - Saumya Kapoor', url: 'https://saumyakapoor.in' }],
  creator: 'Escorts Service Indore',
  publisher: 'Escorts Service Indore',
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
  alternates: {
    canonical: 'https://saumyakapoor.in',
    languages: {
      'en-US': 'https://saumyakapoor.in',
      'en': 'https://saumyakapoor.in',
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'google8ca85fc03eb3c8d6',
    yandex: 'saumyakapoor-yandex-verification',
    other: {
      'msvalidate.01': 'saumyakapoor-bing-verification',
      'p:domain_verify': 'saumyakapoor-pinterest-verification',
    },
  },
  category: 'Adult Services',
  classification: 'Adult Content',
  openGraph: {
    title: '🔥 #1 Escorts Service Indore | Call Girls 24/7 | Saumya Kapoor VIP Agency ⭐',
    description: '🌟 Best escorts service Indore with 5000+ verified call girls ⚡ Available 24/7 across all Indore locations ✅ 100% discreet & safe escorts service 🔒 Instant booking: +919372662471',
    type: 'website',
    locale: 'en_US',
    url: 'https://saumyakapoor.in',
    siteName: 'Escorts Service Indore - Saumya Kapoor Agency',
    images: [
      {
        url: '/images/services/indore escorts.webp',
        width: 1200,
        height: 630,
        alt: 'Escorts Service Indore - Professional VIP Companions',
        type: 'image/webp',
      },
      {
        url: '/images/services/Premium Models.jpg',
        width: 1200,
        height: 630,
        alt: 'Escorts Service Indore - VIP Escorts and Models',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🔥 #1 Escorts Service Indore | Call Girls 24/7 | Saumya Kapoor VIP ⭐',
    description: '🌟 5000+ verified call girls in Indore ⚡ 24/7 escorts service Indore ✅ 100% discreet service 📞 Instant booking +919372662471',
    images: ['/images/services/indore escorts.webp'],
    creator: '@saumyakapoor',
    site: '@indoreescorts',
  },
  appleWebApp: {
    capable: true,
    title: 'Escorts Service Indore',
    statusBarStyle: 'default',
  },
  applicationName: 'Escorts Service Indore',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
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
    name: 'Escorts Service Indore - Saumya Kapoor',
    alternateName: 'Indore Escorts Agency',
    legalName: 'Escorts Service Indore',
    description: 'Leading professional escorts service Indore providing companions and VIP escort services across all major locations with 24/7 availability.',
    url: 'https://saumyakapoor.in',
    image: 'https://saumyakapoor.in/images/services/indore escorts.webp',
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
    <html lang="en" dir="ltr">
      <head>
        {/* Critical Resource Hints - Load First */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
        
        {/* Structured Data - High Priority for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Viewport and Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta httpEquiv="Content-Language" content="en-US" />
        <meta name="rating" content="mature" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 days" />
        
        {/* Favicon and App Icons - Heart Icon */}
        <link rel="icon" href="/heart-favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/heart-favicon.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/heart-favicon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Service Worker Registration - Deferred for better performance */}
        {/* Deferred Service Worker for better performance - load after 5 seconds */}
        <Script
          id="sw-registration"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    navigator.serviceWorker.register('/sw-v3.js', { scope: '/' })
                      .catch(function(err) { /* Silently fail */ });
                  }, 5000);
                });
              }
            `,
          }}
        />
        
        {/* Additional Technical SEO Meta Tags */}
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Critical performance optimizations */}
        <CriticalInlineCSS />
        <CriticalResourceHints />
        
        {/* Preload LCP hero image - CRITICAL for performance */}
        <link 
          rel="preload" 
          as="image" 
          href="/images/hero/escort-service-indore.webp"
          fetchPriority="high"
        />
        
        {/* Preconnect only - faster than preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://saumyakapoor.in" />
        
        {/* Alternate hreflang for international SEO */}
        <link rel="alternate" hrefLang="en" href="https://saumyakapoor.in" />
        <link rel="alternate" hrefLang="en-US" href="https://saumyakapoor.in" />
        <link rel="alternate" hrefLang="en-IN" href="https://saumyakapoor.in" />
        <link rel="alternate" hrefLang="hi" href="https://saumyakapoor.in" />
        <link rel="alternate" hrefLang="x-default" href="https://saumyakapoor.in" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        <FastIndexingSchemas />
      </head>
      <body className={inter.className}>
        {/* Skip to main content link for keyboard navigation */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <CriticalCSS />
        <PerformanceMonitor />
        
        <Header />
        
        <main id="main-content" role="main" aria-label="Main content">
          {children}
        </main>
        
        <InternalLinkingFooter />
        
        {/* AI Chat Assistant */}
        <AIChatWrapper />
      </body>
    </html>
  );
}