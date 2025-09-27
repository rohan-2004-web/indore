import Link from 'next/link'

// Strategic internal linking for faster Google discovery
export default function InternalLinkingFooter() {
  const locations = [
    { name: 'AB Road', slug: 'ab-road' },
    { name: 'Palasia', slug: 'palasia' },
    { name: 'Bhawar Kuan', slug: 'bhawar-kuan' },
    { name: 'Vijay Nagar', slug: 'vijay-nagar' },
    { name: 'New Palasia', slug: 'new-palasia' },
    { name: 'Indore GPO', slug: 'indore-gpo' },
    { name: 'Rajwada', slug: 'rajwada' },
    { name: 'Sarafa Bazaar', slug: 'sarafa-bazaar' },
    { name: 'Khajrana', slug: 'khajrana' },
    { name: 'Kanadiya', slug: 'kanadiya' },
    { name: 'Scheme No 78', slug: 'scheme-no-78' },
    { name: 'Sudama Nagar', slug: 'sudama-nagar' }
  ]

  const services = [
    { name: 'VIP Escort Service', slug: 'vip-escort' },
    { name: 'Premium Escorts', slug: 'premium-escort' },
    { name: 'Luxury Companions', slug: 'luxury-escort' },
    { name: 'Call Girl Service', slug: 'call-girl' },
    { name: 'Independent Escorts', slug: 'independent-escort' },
    { name: 'Russian Escorts', slug: 'russian-escort' },
    { name: 'College Girl Escorts', slug: 'college-girl-escort' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Navigation Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-pink-300 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-pink-300 transition-colors">Services</Link></li>
              <li><Link href="/locations" className="hover:text-pink-300 transition-colors">Locations</Link></li>
              <li><Link href="/gallery" className="hover:text-pink-300 transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-pink-300 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-pink-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Service Links for SEO */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Premium Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="hover:text-pink-300 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Links Part 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Popular Locations</h3>
            <ul className="space-y-2">
              {locations.slice(0, 6).map((location) => (
                <li key={location.slug}>
                  <Link 
                    href={`/locations/${location.slug}`} 
                    className="hover:text-pink-300 transition-colors text-sm"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Links Part 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">More Areas</h3>
            <ul className="space-y-2">
              {locations.slice(6).map((location) => (
                <li key={location.slug}>
                  <Link 
                    href={`/locations/${location.slug}`} 
                    className="hover:text-pink-300 transition-colors text-sm"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal and Compliance Links */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/terms" className="text-sm hover:text-pink-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm hover:text-pink-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/sitemap.xml" className="text-sm hover:text-pink-300 transition-colors">
                Sitemap
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Saumya Kapoor Services. All rights reserved.
            </div>
          </div>
        </div>

        {/* Rich Internal Linking for SEO */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="text-xs text-gray-500 leading-relaxed">
            <p className="mb-2">
              <strong>Escort Services in Indore:</strong> Premium companions available in{' '}
              {locations.slice(0, 4).map((loc, index) => (
                <span key={loc.slug}>
                  <Link href={`/locations/${loc.slug}`} className="hover:text-pink-400">
                    {loc.name}
                  </Link>
                  {index < 3 ? ', ' : ' '}
                </span>
              ))}
              and all major areas of Indore.
            </p>
            <p>
              <strong>Service Categories:</strong>{' '}
              {services.slice(0, 3).map((service, index) => (
                <span key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-pink-400">
                    {service.name}
                  </Link>
                  {index < 2 ? ', ' : ' '}
                </span>
              ))}
              with 24/7 availability and verified profiles.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}