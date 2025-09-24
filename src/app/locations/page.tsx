'use client'

import Header from '@/components/Header'
import Image from 'next/image'

const locationData = [
  {
    id: "vijay-nagar",
    name: "Vijay Nagar",
    area: "Central Indore",
    icon: "🏢",
    description: "Business district with premium hotels and shopping centers",
    features: ["5-Star Hotels", "Shopping Malls", "Business Centers", "Restaurants"],
    image: "/images/services/College Girls.webp"
  },
  {
    id: "saket",
    name: "Saket",
    area: "Residential Hub", 
    icon: "🏘️",
    description: "Upscale residential area with modern amenities",
    features: ["Luxury Residences", "Parks", "Cafes", "Safe Area"],
    image: "/images/services/Celebrity Escorts.webp"
  },
  {
    id: "ab-road",
    name: "AB Road",
    area: "Commercial Zone",
    icon: "🛍️", 
    description: "Main commercial area with luxury shopping and dining",
    features: ["Shopping Centers", "Restaurants", "Hotels", "Entertainment"],
    image: "/images/services/Housewife.webp"
  }
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100/40 via-purple-50/30 to-blue-100/40">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-800">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-pink-200 to-blue-200 bg-clip-text text-transparent">
                Premium Escort Locations
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Available across all major areas in Indore with instant booking
            </p>
            <a href="tel:+919372662471" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl">
              📞 Call Now for Any Location
            </a>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-20">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locationData.map((location) => (
                <div key={location.id} className="bg-gradient-to-br from-white/95 via-pink-50/30 to-blue-50/30 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-pink-200/50 transform hover:-translate-y-3 transition-all duration-500">
                  
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                        {location.icon} {location.area}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{location.name}</h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{location.description}</p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">📍 Area Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {location.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Booking Buttons */}
                    <div className="space-y-3">
                      <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-6 py-4 rounded-2xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg">
                        📞 Book Escort in {location.name}
                      </a>
                      <a href="https://wa.me/919372662471" className="w-full inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300">
                        💬 WhatsApp for {location.name}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Locations List */}
      <section className="py-20 bg-gradient-to-br from-pink-50/60 via-purple-50/40 to-blue-50/60">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-12">
              All Indore Locations Covered
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                "Vijay Nagar", "Saket", "Scheme 78", "AB Road", "Palasia", "Bhawar Kuan", 
                "Rau", "Ring Road", "Bombay Hospital", "Airport Road", "MG Road", "Treasure Island"
              ].map((location, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-pink-200/50 hover:shadow-xl transition-all duration-300">
                  <span className="font-semibold text-gray-800">{location}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-3xl p-8 backdrop-blur-md border border-pink-200/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 Quick Service Promise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">⏰</div>
                  <h4 className="font-semibold text-gray-800">30-Min Arrival</h4>
                  <p className="text-gray-600">Fast service to any location</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">✅</div>
                  <h4 className="font-semibold text-gray-800">100% Verified</h4>
                  <p className="text-gray-600">All escorts are genuine</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🔒</div>
                  <h4 className="font-semibold text-gray-800">Complete Privacy</h4>
                  <p className="text-gray-600">Discreet and confidential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}