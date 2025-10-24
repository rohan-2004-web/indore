const criticalCSS = `
/* Ultra-Critical Inline CSS for LCP optimization */
html{line-height:1.15;-webkit-text-size-adjust:100%}
body{margin:0;font-family:system-ui,-apple-system,sans-serif}
.hero-critical{background:linear-gradient(135deg,#ec4899 0%,#3b82f6 100%);transform:translateZ(0);contain:layout style paint}
.text-critical{font-display:swap;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased}
.layout-critical{aspect-ratio:attr(width)/attr(height);object-fit:cover;contain:layout style paint}
.btn-critical{transform:translateZ(0);transition:transform .15s ease-out}
.loading-critical{background:linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 50%,#f3f4f6 75%);background-size:200% 100%;animation:shimmer 1.5s infinite}
@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
@media (max-width:640px){.mobile-critical{font-size:clamp(1.5rem,4vw,2.5rem)}}
`

export function CriticalInlineCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: criticalCSS
      }}
    />
  )
}

// Resource preloading hints for critical assets
export function CriticalResourceHints() {
  return (
    <>
      {/* Preload critical fonts */}
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
        crossOrigin="anonymous"
      />
      
      {/* Preload critical images */}
      <link
        rel="preload"
        as="image"
        href="/images/hero/escort-service-indore.webp"
        fetchPriority="high"
      />
      
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Preconnect to critical origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Module preload for critical scripts */}
      <link
        rel="modulepreload"
        href="/_next/static/chunks/framework-[hash].js"
      />
      <link
        rel="modulepreload" 
        href="/_next/static/chunks/main-[hash].js"
      />
    </>
  )
}