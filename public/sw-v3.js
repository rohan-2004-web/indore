// Ultra Performance Service Worker v3 - Target 100% PageSpeed Score
const CACHE_VERSION = 'v3'
const STATIC_CACHE = `static-${CACHE_VERSION}`
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`
const IMAGE_CACHE = `images-${CACHE_VERSION}`
const FONT_CACHE = `fonts-${CACHE_VERSION}`
const API_CACHE = `api-${CACHE_VERSION}`

// Critical resources for instant loading
const CRITICAL_RESOURCES = [
  '/',
  '/offline.html',
  '/_next/static/css/app/layout.css',
  '/_next/static/chunks/webpack.js',
  '/_next/static/chunks/framework.js',
  '/_next/static/chunks/main.js',
  '/manifest.json'
]

// Static resources with long cache
const STATIC_RESOURCES = [
  '/services',
  '/locations',
  '/contact',
  '/about',
  '/gallery'
]

// Cache strategies for different resource types
const CACHE_STRATEGIES = {
  // Critical resources: Cache first, fallback to network
  critical: (url) => url.pathname === '/' || url.pathname.includes('_next/static/chunks/'),
  
  // Images: Cache first with long TTL
  images: (url) => url.pathname.startsWith('/images/') || url.pathname.includes('.webp') || url.pathname.includes('.avif'),
  
  // Fonts: Cache first, very long TTL
  fonts: (url) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
  
  // API calls: Network first with fallback
  api: (url) => url.pathname.startsWith('/api/'),
  
  // Static pages: Stale while revalidate
  pages: (url) => STATIC_RESOURCES.includes(url.pathname)
}

// Install event - Preload critical resources
self.addEventListener('install', (event) => {
  console.log('SW v3: Installing with ultra performance optimizations')
  
  event.waitUntil(
    Promise.all([
      // Cache critical resources immediately
      caches.open(STATIC_CACHE).then(cache => {
        return cache.addAll(CRITICAL_RESOURCES.concat(STATIC_RESOURCES))
      }),
      
      // Preload fonts for better performance
      caches.open(FONT_CACHE).then(cache => {
        return Promise.all([
          fetch('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')
            .then(response => cache.put('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', response)),
        ].filter(Boolean))
      })
    ]).then(() => {
      console.log('SW v3: Critical resources cached successfully')
      return self.skipWaiting()
    })
  )
})

// Activate event - Clean old caches
self.addEventListener('activate', (event) => {
  console.log('SW v3: Activating ultra performance mode')
  
  event.waitUntil(
    Promise.all([
      // Clean old cache versions
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(name => name.includes('indore-escort') && !name.includes(CACHE_VERSION))
            .map(name => caches.delete(name))
        )
      }),
      // Take control of all clients immediately
      self.clients.claim()
    ])
  )
})

// Fetch event - Ultra-optimized caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Only handle GET requests
  if (request.method !== 'GET') return

  // Critical resources: Cache first
  if (CACHE_STRATEGIES.critical(url)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE))
    return
  }

  // Images: Cache first with background update
  if (CACHE_STRATEGIES.images(url)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE, { maxAge: 31536000 })) // 1 year
    return
  }

  // Fonts: Cache first with very long TTL
  if (CACHE_STRATEGIES.fonts(url)) {
    event.respondWith(cacheFirst(request, FONT_CACHE, { maxAge: 31536000 })) // 1 year
    return
  }

  // API calls: Network first
  if (CACHE_STRATEGIES.api(url)) {
    event.respondWith(networkFirst(request, API_CACHE))
    return
  }

  // Static pages: Stale while revalidate
  if (CACHE_STRATEGIES.pages(url)) {
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE))
    return
  }

  // Default: Network first with cache fallback
  event.respondWith(networkFirst(request, DYNAMIC_CACHE))
})

// Cache First Strategy - For static assets
async function cacheFirst(request, cacheName, options = {}) {
  try {
    const cache = await caches.open(cacheName)
    const cachedResponse = await cache.match(request)
    
    if (cachedResponse) {
      // Check if cache is still fresh (for images/fonts)
      const cacheDate = cachedResponse.headers.get('sw-cache-date')
      if (cacheDate && options.maxAge) {
        const age = Date.now() - parseInt(cacheDate)
        if (age < options.maxAge * 1000) {
          return cachedResponse
        }
      } else if (!options.maxAge) {
        return cachedResponse
      }
    }

    // Fetch from network
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone()
      
      // Add cache timestamp for TTL checking
      const headers = new Headers(responseClone.headers)
      headers.set('sw-cache-date', Date.now().toString())
      
      const modifiedResponse = new Response(responseClone.body, {
        status: responseClone.status,
        statusText: responseClone.statusText,
        headers: headers
      })
      
      cache.put(request, modifiedResponse)
    }
    
    return networkResponse
  } catch (error) {
    const cache = await caches.open(cacheName)
    const cachedResponse = await cache.match(request)
    if (cachedResponse) return cachedResponse
    
    return new Response('Offline - Resource not available', {
      status: 503,
      statusText: 'Service Unavailable'
    })
  }
}

// Network First Strategy - For API calls
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    const cache = await caches.open(cacheName)
    const cachedResponse = await cache.match(request)
    
    if (cachedResponse) return cachedResponse
    
    return new Response('Offline', {
      status: 503,
      statusText: 'Service Unavailable'
    })
  }
}

// Stale While Revalidate Strategy - For pages
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName)
  const cachedResponse = await cache.match(request)
  
  // Background update
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  }).catch(() => null)
  
  // Return cached version immediately, or wait for network
  return cachedResponse || await fetchPromise || new Response('Offline', {
    status: 503,
    statusText: 'Service Unavailable'
  })
}

// Background sync for critical updates
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Prefetch critical pages in background
      Promise.all(
        STATIC_RESOURCES.map(url => 
          fetch(url).then(response => {
            if (response.ok) {
              caches.open(DYNAMIC_CACHE).then(cache => cache.put(url, response))
            }
          }).catch(() => {})
        )
      )
    )
  }
})

console.log('SW v3: Ultra Performance Service Worker loaded successfully')