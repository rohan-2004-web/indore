'use client'

export default function CriticalCSS() {
  return (
    <style jsx global>{`
      /* Critical Above-the-fold styles for faster FCP and LCP */
      * { 
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      html {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
      }
      
      body {
        margin: 0;
        padding: 0;
        background: #fdf2f8;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-display: swap;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
      }
      
      /* Prevent layout shift */
      img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
        height: auto;
      }
      
      /* Header critical styles */
      .header-container {
        background: #ec4899;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        position: sticky;
        top: 0;
        z-index: 50;
        contain: layout style paint;
        will-change: transform;
      }
      
      /* Hero section critical styles - optimize for LCP */
      .hero-section {
        background: linear-gradient(135deg, #fdf2f8 0%, #eff6ff 100%);
        min-height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
        contain: layout style paint;
      }
      
      /* Navigation critical styles */
      .nav-link {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        transition: background-color 0.15s ease;
      }
      
      .nav-link:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
      
      /* Optimize button rendering */
      button, a {
        touch-action: manipulation;
      }
      
      /* Button critical styles */
      .primary-button {
        background: linear-gradient(135deg, #ec4899, #3b82f6);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
        transition: transform 0.2s ease;
      }
      
      .primary-button:hover {
        transform: translateY(-1px);
      }
      
      /* Loading state styles */
      .loading-spinner {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s ease-in-out infinite;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      
      /* Prevent layout shift */
      img {
        max-width: 100%;
        height: auto;
      }
      
      /* Mobile optimization */
      @media (max-width: 768px) {
        .hero-section {
          min-height: 50vh;
          padding: 1rem;
        }
      }
    `}</style>
  )
}