const criticalCSS = `
/* Ultra-Critical Inline CSS for LCP/FCP optimization */
*,::before,::after{box-sizing:border-box;border:0 solid}
html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,sans-serif}
body{margin:0;line-height:inherit;background:#fdf2f8}
main{display:block}
h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}
a{color:inherit;text-decoration:inherit}
img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}
img,video{max-width:100%;height:auto}
.hero-critical{background:linear-gradient(135deg,#ec4899 0%,#3b82f6 100%);transform:translateZ(0);contain:layout style paint;will-change:transform}
.text-critical{font-display:swap;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
.img-critical{content-visibility:auto;contain:layout style paint}
.btn-critical{transform:translateZ(0);transition:transform .15s cubic-bezier(0.4,0,0.2,1);touch-action:manipulation}
.no-fouc{visibility:visible;opacity:1}
@media (prefers-reduced-motion:reduce){*{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important}}
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
      {/* Preload critical fonts with highest priority */}
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
        crossOrigin="anonymous"
        // @ts-ignore
        fetchpriority="high"
      />
      
      {/* Preload hero image for better LCP */}
      <link
        rel="preload"
        as="image"
        href="/images/hero/escort-service-indore.webp"
        // @ts-ignore
        fetchpriority="high"
        imageSrcSet="/images/hero/escort-service-indore.webp"
      />
      
      {/* Early hints for faster DNS resolution */}
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Preconnect to critical origins - reduce connection time */}
      <link 
        rel="preconnect" 
        href="https://fonts.gstatic.com" 
        crossOrigin="anonymous"
      />
    </>
  )
}