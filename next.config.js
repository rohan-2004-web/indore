/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Experimental performance features
  experimental: {
    optimizePackageImports: ['@headlessui/react', '@heroicons/react'],
    scrollRestoration: true,
    optimizeCss: true,
    optimizeServerReact: true,
    webVitalsAttribution: ['CLS', 'LCP'],
    gzipSize: true,
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  
  // Production optimizations
  productionBrowserSourceMaps: false,
  
  // Image optimization for better page speed
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: false,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128],
    domains: ['saumyakapoor.in'],
    loader: 'default',
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'saumyakapoor.in',
      },
    ],
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize bundle splitting for better caching
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              if (module.context && module.context.includes('node_modules')) {
                const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
                const packageName = match ? match[1] : 'vendor';
                return `npm.${packageName.replace('@', '')}`;
              }
              return 'vendor';
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
            reuseExistingChunk: true,
          },
          shared: {
            name: 'shared',
            minChunks: 2,
            priority: 10,
            reuseExistingChunk: true,
          },
        },
        maxInitialRequests: 20,
        minSize: 30000,
      };
      
      // Enable module concatenation
      config.optimization.concatenateModules = true;
      
      // Minimize bundle size
      config.optimization.minimize = true;
      
      // Additional performance optimization
      config.optimization.usedExports = true;
      config.optimization.sideEffects = true;
    }
    
    // Optimize for all environments
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '/src',
    };
    
    return config;
  },

  // Redirects for SEO and fixing broken links
  async redirects() {
    return [
      // Redirect common misspellings and variations
      {
        source: '/service',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/location',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/gallary',
        destination: '/gallery',
        permanent: true,
      },
      // Redirect old URLs to new structure
      {
        source: '/escorts',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/call-girls',
        destination: '/services/call-girl',
        permanent: true,
      },
    ]
  },

  // Headers for SEO, performance and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security Headers
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://www.googletagmanager.com https://maps.googleapis.com https://maps.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://maps.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: https://maps.googleapis.com https://maps.gstatic.com *.ggpht.com *.googleapis.com; connect-src 'self' https: https://maps.googleapis.com; frame-src 'self' https://www.google.com https://maps.google.com https://www.google.com/maps/embed; child-src 'self' https://www.google.com https://maps.google.com; object-src 'none'; base-uri 'self'; form-action 'self';"
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          // Performance Headers
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          }
        ]
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=86400, immutable'
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, immutable'
          }
        ]
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400'
          }
        ]
      },
      {
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=86400, immutable'
          }
        ]
      },
      {
        source: '/:path*.avif',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=86400, immutable'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig