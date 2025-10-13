// Ultra Performance Service Worker v3 - Target 100% Score
const CACHE_NAME = 'indore-escort-v3'
const STATIC_CACHE = 'static-v3'
const DYNAMIC_CACHE = 'dynamic-v3'
const IMAGE_CACHE = 'images-v3'
const FONT_CACHE = 'fonts-v3'

const criticalAssets = [
  '/',
  '/_next/static/css/',
  '/_next/static/chunks/framework',
  '/_next/static/chunks/main',
  '/manifest.json'
]

const staticAssets = [
  '/services',
  '/locations', 
  '/contact',
  '/about',
  '/gallery'
]

const imageAssets = [
  '/images/',
  '/favicon.ico'
]

const fontAssets = [
  'https://fonts.googleapis.com/',
  'https://fonts.gstatic.com/'
]

const cacheFirst = [
  ...imageAssets,
  ...fontAssets,
  '/_next/static/',
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