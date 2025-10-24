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

// Optimize font loading with display swap and fallback for better performance
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saumyakapoor.in'),
  title: {
    template: '%s | Saumya Kapoor - Premium Call Girls Indore | Top Escort Service',
    absolute: '🔥 #1 Indore Escort Service | Saumya Kapoor Premium Call Girls 24/7 ⭐ Top VIP Agency'
  },
  description: '🌟 #1 Indore escort service by Saumya Kapoor ⚡ Premium call girls in Indore 24/7 ✅ 5000+ verified profiles 🔒 100% discreet service 📍 Vijay Nagar, AB Road, Palasia 📞 +919372662471 instant booking',
  keywords: 'Indore escort service, call girls in Indore, Indore call girls, Saumya Kapoor Indore, escort service Indore, VIP escorts Indore, call girls Indore 24/7, premium escort service Indore, Indore escorts agency, best escort service Indore, Vijay Nagar call girls, AB Road escorts, Palasia escort service, independent escort Indore, celebrity escorts Indore, college girl escorts Indore, Russian escorts Indore, housewife escorts Indore, mature escorts Indore, premium models Indore',
  authors: [{ name: 'Indore Premium Escort Service', url: 'https://saumyakapoor.in' }],
  creator: 'Indore Premium Escort Service',
  publisher: 'Indore Premium Escort Service',
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
    title: '🔥 #1 Indore Escort Service | Premium Call Girls 24/7 | Saumya Kapoor VIP Agency ⭐',
    description: '🌟 Best Indore escort service with 5000+ verified premium call girls ⚡ Available 24/7 across all Indore locations ✅ 100% discreet & safe service 🔒 Instant booking: +919372662471',
    type: 'website',
    locale: 'en_US',
    url: 'https://saumyakapoor.in',
    siteName: 'Saumya Kapoor - Indore Premium Escort Service',
    images: [
      {
        url: '/images/services/indore escorts.webp',
        width: 1200,
        height: 630,
        alt: 'Indore Premium Escort Service - Professional VIP Companions',
        type: 'image/webp',
      },
      {
        url: '/images/services/Premium Models.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Models and VIP Escorts in Indore',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🔥 #1 Indore Escort Service | Premium Call Girls 24/7 | Saumya Kapoor VIP ⭐',
    description: '🌟 5000+ verified premium call girls in Indore ⚡ 24/7 availability ✅ 100% discreet service 📞 Instant booking +919372662471',
    images: ['/images/services/indore escorts.webp'],
    creator: '@saumyakapoor',
    site: '@indoreescorts',
  },
  appleWebApp: {
    capable: true,
    title: 'Indore Escort Service',
    statusBarStyle: 'default',
  },
  applicationName: 'Indore Premium Escort Service',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
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
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Service Worker Registration - Deferred for better performance */}
        <Script
          id="sw-registration"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    navigator.serviceWorker.register('/sw-v3.js')
                      .then(function(registration) {
                        if ('sync' in registration) {
                          registration.sync.register('background-sync');
                        }
                      })
                      .catch(function(err) {
                        console.error('SW registration failed:', err);
                      });
                  }, 2000);
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
      </body>
    </html>
  );
}