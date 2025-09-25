'use client'

import Header from '@/components/Header'

export default function ServicesPage() {
  const services = [
    { id: 1, title: "Celebrity Escorts", description: "Experience celebrity-level companions with exceptional elegance and sophistication.", icon: "⭐", category: "PREMIUM" },
    { id: 2, title: "VIP Escorts", description: "Ultimate luxury companions for discerning clients who demand the finest experience.", icon: "👑", category: "VIP" },
    { id: 3, title: "Premium Models", description: "High-end professional models with sophistication and charm for exclusive events.", icon: "💎", category: "LUXURY" },
    { id: 4, title: "College Girls", description: "Young energetic companions with vibrant personalities and modern outlook.", icon: "🎓", category: "YOUNG" },
    { id: 5, title: "Housewife Escorts", description: "Mature experienced companions with caring nature and deep understanding.", icon: "🏠", category: "MATURE" },
    { id: 6, title: "Punjabi Women", description: "Beautiful Punjabi companions with traditional charm and modern sophistication.", icon: "🌟", category: "TRADITIONAL" },
    { id: 7, title: "Slim Escorts", description: "Elegant slim companions with perfect figure and graceful presence.", icon: "💃", category: "ELEGANT" },
    { id: 8, title: "Event Companions", description: "Perfect companions for social events, parties, and business gatherings.", icon: "🎭", category: "EVENTS" },
    { id: 9, title: "Local Beauties", description: "Beautiful local companions who know Indore city and its best locations.", icon: "🌸", category: "LOCAL" },
    { id: 10, title: "Travel Companions", description: "Perfect travel partners for business trips, vacations, or weekend getaways.", icon: "✈️", category: "TRAVEL" },
    { id: 11, title: "Dinner Dates", description: "Elegant companions for romantic dinner dates and fine dining experiences.", icon: "🍷", category: "ROMANTIC" },
    { id: 12, title: "Outcall Service", description: "Professional outcall service to your hotel, home, or preferred location.", icon: "🏨", category: "OUTCALL" },
    { id: 13, title: "Mature Escorts", description: "Experienced mature companions with sophistication and wisdom.", icon: "🌹", category: "EXPERIENCED" },
    { id: 14, title: "Young Girls", description: "Young beautiful companions for unforgettable experiences and adventures.", icon: "🌺", category: "YOUNG" },
    { id: 15, title: "Pink Special", description: "Special premium companions for exclusive experiences and luxury moments.", icon: "💕", category: "SPECIAL" },
    { id: 16, title: "Indore Escorts", description: "Premium local escorts with deep knowledge of Indore city and culture.", icon: "🏛️", category: "LOCAL" }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-300/60">
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300/90 via-orange-200/80 to-pink-300/90"></div>
          <div className="w-full mx-auto text-center relative z-10 px-4">
            <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-8 leading-tight">
              Premium Escort Services In Indore
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-6xl mx-auto mb-10 font-medium leading-relaxed">
              Discover our comprehensive range of premium escort services with verified professional companions available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                📞 Call Now: +91 9372662471
              </a>
              <a href="https://wa.me/919372662471" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Our Complete Service Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Choose from our diverse range of premium escort services, each designed to meet your unique preferences and requirements
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {services.map((service) => (
                  <div key={service.id} className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-3xl group">
                    <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="inline-block bg-gradient-to-r from-pink-500/20 to-orange-500/20 text-pink-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                      {service.category}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      <a href="tel:+919372662471" className="block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Book Now
                      </a>
                      <div className="flex gap-2">
                        <a href="tel:+919372662471" className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105">
                          📞 Call
                        </a>
                        <a href="https://wa.me/919372662471" className="flex-1 bg-gradient-to-r from-green-600 to-lime-600 hover:from-lime-600 hover:to-green-700 text-white px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105">
                          💬 Chat
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 relative">
          <div className="w-full px-4 relative z-10">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                🌟 Indore Premium Escort Service
              </h3>
              <p className="text-pink-100 mb-8 leading-relaxed font-semibold text-xl max-w-4xl mx-auto">
                Premium escort services in Indore with verified professional companions. Available 24/7 across all major locations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <a href="tel:+919372662471" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-xl">
                  📞 Call Now: +91 9372662471
                </a>
                <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-xl">
                  💬 WhatsApp Now
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold">✅ 24/7 Available</span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full font-bold">✅ 100% Verified</span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-bold">✅ Complete Discretion</span>
                <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-bold">✅ Premium Quality</span>
              </div>
              <p className="text-pink-200 font-semibold text-lg">
                🔞 Professional escort services for adults only. Must be 18+ to use our services. 🔞
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}