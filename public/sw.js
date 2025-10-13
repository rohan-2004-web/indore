// Advanced service worker for performance optimization
const CACHE_NAME = 'indore-escort-v2'
const STATIC_CACHE = 'static-v2'
const DYNAMIC_CACHE = 'dynamic-v2'

const staticAssets = [
  '/',
  '/services',
  '/locations',
  '/contact',
  '/about',
  '/gallery',
  '/manifest.json'
]

const cacheFirst = [
  '/images/',
  '/_next/static/',
  '/favicon.ico',
  '/globals.css'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(staticAssets))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  if (request.method !== 'GET') return

  // Cache first for static assets
  if (cacheFirst.some(path => url.pathname.startsWith(path))) {
    event.respondWith(cacheFirstStrategy(request))
    return
  }

  event.respondWith(staleWhileRevalidate(request))
})

async function cacheFirstStrategy(request) {
  const cachedResponse = await caches.match(request)
  if (cachedResponse) return cachedResponse

  try {
    const networkResponse = await fetch(request)
    const cache = await caches.open(STATIC_CACHE)
    cache.put(request, networkResponse.clone())
    return networkResponse
  } catch (error) {
    return new Response('Offline', { status: 503 })
  }
}

async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request)
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    const cache = caches.open(DYNAMIC_CACHE)
    cache.then(c => c.put(request, networkResponse.clone()))
    return networkResponse
  }).catch(() => cachedResponse)

  return cachedResponse || fetchPromise
}

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => self.clients.claim())
  )
})