import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://saumyakapoor.in'),
  title: {
    template: '%s | Saumya Kapoor - Premium Call Girls Indore | Top Escort Service',
    absolute: '🔥 #1 Indore Escort Service | Saumya Kapoor Premium Call Girls 24/7 ⭐ Top VIP Agency'
  },
  description: '🌟 #1 Indore escort service by Saumya Kapoor ⚡ Premium call girls in Indore 24/7 ✅ 5000+ verified profiles 🔒 100% discreet service 📍 Vijay Nagar, AB Road, Palasia 📞 +919372662471 instant booking',
  keywords: 'Indore escort service, call girls in Indore, Indore call girls, Saumya Kapoor Indore, escort service Indore, VIP escorts Indore, call girls Indore 24/7, premium escort service Indore, Indore escorts agency, best escort service Indore, Vijay Nagar call girls, AB Road escorts, Palasia escort service, independent escort Indore, celebrity escorts Indore, college girl escorts Indore, Russian escorts Indore, housewife escorts Indore, mature escorts Indore, premium models Indore',
  authors: [{ name: 'Indore Premium Escort Service', url: 'https://saumyakapoor.in' }],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Ultra-Critical CSS Inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            *{box-sizing:border-box;margin:0;padding:0}
            html{line-height:1.15;-webkit-text-size-adjust:100%}
            body{font-family:system-ui,-apple-system,sans-serif;color:#1f2937}
            .hero{background:linear-gradient(135deg,#ec4899,#3b82f6);color:#fff;padding:3rem 1rem;text-align:center;min-height:60vh;display:flex;align-items:center;justify-content:center;flex-direction:column}
            @media(max-width:768px){.hero{padding:2rem 1rem;min-height:50vh}}
          `
        }} />
        
        {/* Essential Meta Tags Only */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ec4899" />
        <link rel="canonical" href="https://saumyakapoor.in" />
        
        {/* Minimal Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Saumya Kapoor - Indore Escort Service",
              "telephone": "+919372662471",
              "url": "https://saumyakapoor.in",
              "areaServed": "Indore"
            })
          }}
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}