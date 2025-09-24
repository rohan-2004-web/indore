import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://indoreescortservice.com'),
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
    url: 'https://indoreescortservice.com',
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
    canonical: 'https://indoreescortservice.com',
    languages: {
      'en-US': 'https://indoreescortservice.com',
      'hi-IN': 'https://indoreescortservice.com/hi',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Indore Premium Escort Service',
    description: 'Best Indore escort service with premium call girls available 24/7. Trusted agency offering VIP companions in all Indore locations.',
    url: 'https://indoreescortservice.com',
    telephone: '+919372662471',
    email: 'contact@indoreescortservice.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      addressCountry: 'India',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.7196,
      longitude: 75.8577,
    },
    openingHours: '24/7',
    priceRange: '$$-$$$',
    serviceArea: {
      '@type': 'City',
      name: 'Indore',
    },
    areaServed: [
      'Vijay Nagar',
      'Palasia',
      'AB Road',
      'Saket',
      'Scheme 78',
      'Bhawar Kuan',
      'Ring Road',
      'Rau',
      'Airport Road',
      'MG Road',
      'Bombay Hospital',
      'Treasure Island',
    ],
    sameAs: [
      'https://facebook.com/indoreescorts',
      'https://twitter.com/indoreescorts',
      'https://instagram.com/indoreescorts',
    ],
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
        <Header />
        {children}
      </body>
    </html>
  );
}