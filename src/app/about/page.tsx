import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Most Trusted Escort Service In Indore | Saumya Kapoor',
  description: 'Learn about Indore\'s most trusted escort service with 500+ verified call girls. Professional, discreet, and reliable escort service since years. Call +91-9372662471',
  keywords: 'about escort service indore, trusted call girls service, professional escorts indore, verified escort service, saumya kapoor about',
  robots: 'index, follow',
  openGraph: {
    title: 'About Us | Most Trusted Escort Service In Indore',
    description: 'Learn about Indore\'s most trusted escort service with verified call girls and professional companions',
    url: 'https://saumyakapoor.in/about',
    type: 'website'
  },
  alternates: {
    canonical: 'https://saumyakapoor.in/about'
  }
}

export default function AboutPage() {
  const locations = [
    { name: "Vijay Nagar", description: "Central Business District", emoji: "🏢" },
    { name: "Saket", description: "Upscale Residential Hub", emoji: "🏘️" }, 
    { name: "Scheme 78", description: "IT Corporate Sector", emoji: "💻" },
    { name: "AB Road", description: "Commercial Zone", emoji: "🛍️" },
    { name: "Palasia", description: "City Center", emoji: "🌆" },
    { name: "Bhawar Kuan", description: "District", emoji: "🏛️" },
    { name: "Airport Road", description: "Aviation Zone", emoji: "✈️" },
    { name: "Treasure Island", description: "Entertainment Hub", emoji: "🎯" },
    { name: "Rajwada", description: "Heritage Area", emoji: "🏰" },
    { name: "MG Road", description: "Business Center", emoji: "🏭" },
    { name: "Bombay Hospital", description: "Medical District", emoji: "🏥" },
    { name: "Ring Road", description: "Connectivity Hub", emoji: "🛣️" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Main Heading - REMOVED "Premium" word */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
          Welcome to Indore&apos;s Most Trusted Escort Service
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Experience Ultimate Luxury & Sophistication
        </p>
        <div className="flex justify-center space-x-8 text-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🔒</span>
            <span>100% Discreet</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">✅</span>
            <span>Verified Escorts</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">⏰</span>
            <span>24/7 Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">⭐</span>
            <span>Quality</span>
          </div>
        </div>
        <p className="text-gray-600 mt-4">
          Learn more about our services or contact us through our contact page.
        </p>
      </div>

      {/* Service Areas */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Escort Services Available In All Major Indore Areas</h2>
        <p className="text-center text-gray-600 mb-8">
          Professional escort services available across 15+ prime locations in Indore with guaranteed satisfaction and instant response
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{location.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{location.name}</h3>
              <p className="text-gray-600 mb-4">{location.description}</p>
              <button className="bg-primary-pink text-white px-4 py-2 rounded-lg hover:bg-primary-pink-dark transition-colors">
                Book Escorts in {location.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Company Info */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Your Trusted Escort Service Partner</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver the world&apos;s finest escort services in Indore with uncompromising professionalism, absolute discretion, and complete customer satisfaction.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become India&apos;s most prestigious escort service provider, establishing global standards for luxury companionship and customer excellence.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
            <div className="text-left">
              <div className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✅</span>
                <span>100% Verified Companions</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-green-500 mr-2">🔒</span>
                <span>Complete Privacy & Discretion</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-green-500 mr-2">⚡</span>
                <span>24/7 Instant Booking Available</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-green-500 mr-2">💎</span>
                <span>Quality Service</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-green-500 mr-2">🌟</span>
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">📍</span>
                <span>12+ Prime Locations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">🌟 Our Story</h2>
        <div className="space-y-6">
          <p className="text-gray-600">
            Indore Escort Service has been serving the beautiful city of Indore for years, establishing ourselves as the most trusted and reliable escort service provider in the region.
          </p>
          <p className="text-gray-600">
            We understand that companionship is about more than just physical presence – it&apos;s about connection, understanding, and creating memorable experiences that last a lifetime.
          </p>
          <p className="text-gray-600">
            Our commitment to excellence has made us the preferred choice for discerning clients across Vijay Nagar, Saket, Scheme 78, and all major areas of Indore.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Service Statistics</h2>
        <p className="text-center text-gray-600 mb-8">
          Trusted by thousands • Verified excellence • Available round the clock
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-pink mb-2">1000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-pink mb-2">24/7</div>
            <div className="text-gray-600">Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-pink mb-2">100%</div>
            <div className="text-gray-600">Verified</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-pink mb-2">15+</div>
            <div className="text-gray-600">Locations</div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-8">
          Common questions about our escort services and professional companions
        </p>
        
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">What makes your escort service different from others in Indore?</h3>
            <p className="text-gray-600">We provide 100% verified companions, complete discretion, 24/7 availability, and professional service across all major areas of Indore.</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">How do you ensure the privacy and discretion of your clients?</h3>
            <p className="text-gray-600">We maintain strict confidentiality protocols, secure booking processes, and discreet meeting arrangements to protect client privacy.</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">What areas of Indore do you serve?</h3>
            <p className="text-gray-600">We provide services across 15+ prime locations including Vijay Nagar, AB Road, Palasia, Saket, Airport Road, and all major commercial areas.</p>
          </div>
          
          <div className="pb-4">
            <h3 className="text-lg font-semibold mb-2">Are all your escorts verified and professional?</h3>
            <p className="text-gray-600">Yes, all our companions undergo thorough verification with authentic profiles, genuine photographs, and professional training.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">🚀 Ready for Experience? 🚀</h2>
          <p className="text-gray-600 mb-6">
            Contact us now for instant booking and companionship
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="tel:+919372662471" 
              className="bg-primary-pink text-white px-6 py-3 rounded-lg hover:bg-primary-pink-dark transition-colors"
            >
              📞 Call Now: +91 9372662471
            </a>
            <a 
              href="https://wa.me/919372662471" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}