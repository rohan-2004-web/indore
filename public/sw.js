// Service Worker for caching and offline support
const CACHE_NAME = 'indore-escort-v1'
const urlsToCache = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/gallery',
  '/locations/ab-road',
  '/locations/palasia',
  '/locations/bhawar-kuan',
  '/locations/vijay-nagar',
  '/locations/new-palasia',
  '/locations/indore-gpo',
  '/locations/rajwada',
  '/locations/sarafa-bazaar',
  '/locations/khajrana',
  '/locations/kanadiya',
  '/locations/scheme-no-78',
  '/locations/sudama-nagar',
  '/globals.css',
  '/favicon.ico'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
      })
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})