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

        {/* Services Grid Section - Enhanced Styling */}
        <section className="py-16 bg-gradient-to-br from-purple-200/80 via-pink-100/70 to-orange-200/80 relative overflow-hidden">
          {/* Animated Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-300/10 to-orange-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="w-full px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100/90 to-pink-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-purple-200/50">
                <span className="text-3xl">💎</span>
                <span className="text-purple-800 font-bold text-xl">Premium Service Categories</span>
                <span className="text-3xl">✨</span>
              </div>
              
              <h2 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-8 leading-tight tracking-tight">
                Our Elite Services
              </h2>
              
              <div className="max-w-5xl mx-auto mb-8">
                <p className="text-3xl md:text-4xl font-bold text-gray-800 leading-relaxed mb-4">
                  16 Premium Categories • Verified Companions
                </p>
                <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                  Choose from our exclusive collection of professional escort services designed for the most discerning clients
                </p>
              </div>
            </div>

            {/* Enhanced Services Grid */}
            <div className="max-w-8xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={service.id} 
                    className="group bg-gradient-to-br from-white/98 to-purple-50/95 backdrop-blur-lg rounded-4xl shadow-2xl p-8 border-2 border-purple-200/50 text-center transform hover:-translate-y-6 hover:rotate-1 transition-all duration-700 hover:shadow-purple-500/30 hover:border-pink-300/70 relative overflow-hidden"
                  >
                    {/* Premium Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-300/20 to-purple-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Enhanced Icon */}
                      <div className="text-9xl mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-2xl">
                        {service.icon}
                      </div>
                      
                      {/* Premium Category Badge */}
                      <div className="inline-block bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-800 px-6 py-3 rounded-full text-sm font-black mb-6 border border-purple-300/50 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {service.category}
                      </div>
                      
                      {/* Enhanced Title */}
                      <h3 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-purple-700 transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                      
                      {/* Enhanced Description */}
                      <p className="text-gray-700 mb-8 text-lg leading-relaxed font-medium group-hover:text-gray-800 transition-colors duration-300">
                        {service.description}
                      </p>
                      
                      {/* Premium Action Buttons */}
                      <div className="space-y-4">
                        <a 
                          href="tel:+919372662471" 
                          className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-black text-xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50 border-2 border-purple-400/30"
                        >
                          🔥 Book Premium
                        </a>
                        <div className="flex gap-3">
                          <a 
                            href="tel:+919372662471" 
                            className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-3 rounded-xl font-bold text-base transition-all duration-400 hover:scale-105 shadow-lg hover:shadow-emerald-500/40"
                          >
                            📞 Call
                          </a>
                          <a 
                            href="https://wa.me/919372662471" 
                            className="flex-1 bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-700 hover:to-lime-600 text-white px-4 py-3 rounded-xl font-bold text-base transition-all duration-400 hover:scale-105 shadow-lg hover:shadow-green-500/40"
                          >
                            💬 Chat
                          </a>
                        </div>
                      </div>
                      
                      {/* Premium Indicator */}
                      <div className="mt-6 flex justify-center">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-lg">⭐</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Trust Indicators */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-purple-100/90 to-pink-100/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-purple-200/50 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">100% Safe</h3>
                <p className="text-gray-600 font-medium">Verified & Secure</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100/90 to-orange-100/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-pink-200/50 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Instant Booking</h3>
                <p className="text-gray-600 font-medium">24/7 Available</p>
              </div>
              <div className="bg-gradient-to-br from-orange-100/90 to-purple-100/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-orange-200/50 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">💯</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
                <p className="text-gray-600 font-medium">Elite Companions</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100/90 to-pink-100/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-purple-200/50 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">🎖️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Satisfaction</h3>
                <p className="text-gray-600 font-medium">Guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features Section */}
        <section className="py-20 bg-gradient-to-br from-orange-200/80 via-pink-100/70 to-purple-200/80 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/25 to-orange-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100/90 to-purple-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-orange-200/50">
                <span className="text-3xl">🎯</span>
                <span className="text-orange-800 font-bold text-xl">Service Excellence</span>
                <span className="text-3xl">⚡</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-orange-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
                Why Our Services Stand Out
              </h2>
              
              <p className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium">
                Experience the difference with our premium service standards and professional approach
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "✅", title: "100% Verified Companions", description: "All our escorts undergo thorough verification and background checks for your safety and peace of mind.", color: "from-green-500 to-emerald-600" },
                { icon: "🔒", title: "Complete Privacy & Discretion", description: "Your privacy is paramount. All interactions are confidential with secure communication channels.", color: "from-purple-500 to-pink-600" },
                { icon: "⚡", title: "Instant Booking Available", description: "24/7 booking service with immediate availability across all major areas of Indore city.", color: "from-orange-500 to-red-600" },
                { icon: "💎", title: "Premium Quality Service", description: "Only the finest companions offering exceptional experiences with complete professionalism.", color: "from-pink-500 to-purple-600" },
                { icon: "🌟", title: "Diverse Selection", description: "Wide range of companions including celebrities, models, college girls, and specialized categories.", color: "from-blue-500 to-cyan-600" },
                { icon: "🏆", title: "3+ Years Experience", description: "Established reputation for reliability, trustworthy service, and customer satisfaction.", color: "from-yellow-500 to-orange-600" }
              ].map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-white/95 to-orange-50/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border-2 border-orange-200/50 hover:border-pink-300/70 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500">
                  <div className="text-7xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium mb-6">
                    {feature.description}
                  </p>
                  <div className={`inline-block bg-gradient-to-r ${feature.color} text-white px-4 py-2 rounded-full text-sm font-bold group-hover:scale-110 transition-transform duration-300`}>
                    Premium Feature
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section - Enhanced like Home Page */}
        <section className="py-20 bg-gradient-to-br from-purple-200/80 via-pink-100/70 to-orange-200/80 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100/90 to-pink-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-purple-200/50">
                <span className="text-3xl">📍</span>
                <span className="text-purple-800 font-bold text-xl">Premium Service Coverage</span>
                <span className="text-3xl">🌆</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-600 bg-clip-text text-transparent mb-8 leading-tight">
                Available Across Indore
              </h2>
              
              <p className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium mb-12">
                Premium escort services available in all major areas with instant booking and guaranteed satisfaction
              </p>
            </div>

            {/* Ultra Premium Location Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {[
                { name: "Vijay Nagar", icon: "🏢", description: "Premier business district with 5-star hotels", color: "from-violet-500 via-purple-500 to-pink-500", bgPattern: "from-violet-100/40 to-pink-100/40" },
                { name: "Palasia", icon: "🛍️", description: "Elite shopping & entertainment zone", color: "from-pink-500 via-rose-500 to-orange-500", bgPattern: "from-pink-100/40 to-orange-100/40" },
                { name: "AB Road", icon: "🏨", description: "Premium commercial corridor", color: "from-orange-500 via-amber-500 to-yellow-500", bgPattern: "from-orange-100/40 to-yellow-100/40" },
                { name: "Saket", icon: "🏡", description: "Luxury residential paradise", color: "from-emerald-500 via-teal-500 to-cyan-500", bgPattern: "from-emerald-100/40 to-cyan-100/40" },
                { name: "MG Road", icon: "🌟", description: "Central business & cultural hub", color: "from-cyan-500 via-blue-500 to-indigo-500", bgPattern: "from-cyan-100/40 to-indigo-100/40" },
                { name: "Rajwada", icon: "🏰", description: "Historic royal heritage center", color: "from-indigo-500 via-purple-500 to-violet-500", bgPattern: "from-indigo-100/40 to-violet-100/40" },
                { name: "Bhanwar Kuwa", icon: "🎭", description: "Premium nightlife & entertainment", color: "from-fuchsia-500 via-pink-500 to-rose-500", bgPattern: "from-fuchsia-100/40 to-rose-100/40" },
                { name: "Ring Road", icon: "🚗", description: "Modern luxury development zone", color: "from-rose-500 via-red-500 to-pink-500", bgPattern: "from-rose-100/40 to-pink-100/40" },
                { name: "Geeta Bhawan", icon: "🕉️", description: "Cultural & spiritual center", color: "from-amber-500 via-orange-500 to-red-500", bgPattern: "from-amber-100/40 to-red-100/40" },
                { name: "C21 Mall Area", icon: "🏬", description: "Elite shopping & dining destination", color: "from-lime-500 via-green-500 to-emerald-500", bgPattern: "from-lime-100/40 to-emerald-100/40" },
                { name: "Airport Road", icon: "✈️", description: "Business travel luxury corridor", color: "from-sky-500 via-blue-500 to-cyan-500", bgPattern: "from-sky-100/40 to-cyan-100/40" },
                { name: "Bhawarkua", icon: "🌆", description: "Prime central Indore location", color: "from-purple-500 via-violet-500 to-fuchsia-500", bgPattern: "from-purple-100/40 to-fuchsia-100/40" }
              ].map((location, index) => (
                <div key={index} className={`group relative overflow-hidden bg-gradient-to-br ${location.bgPattern} backdrop-blur-lg rounded-3xl shadow-2xl border-3 border-white/30 hover:border-white/60 transform hover:scale-110 hover:-translate-y-6 transition-all duration-700 p-8 text-center cursor-pointer hover:shadow-4xl`}>
                  {/* Animated Background Layers */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${location.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-3xl`}></div>
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-white/20 to-pink-300/30 rounded-full blur-2xl group-hover:scale-200 group-hover:rotate-180 transition-all duration-700"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-purple-300/20 to-orange-300/30 rounded-full blur-2xl group-hover:scale-150 group-hover:-rotate-90 transition-all duration-700"></div>
                  
                  <div className="relative z-10">
                    {/* Premium Icon Animation */}
                    <div className="text-8xl mb-6 group-hover:scale-150 group-hover:rotate-12 transition-all duration-700 filter drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
                      {location.icon}
                    </div>
                    
                    {/* Location Name with Gradient */}
                    <h3 className={`text-2xl font-extrabold mb-4 bg-gradient-to-r ${location.color} bg-clip-text text-transparent group-hover:scale-110 transition-all duration-500`}>
                      {location.name}
                    </h3>
                    
                    {/* Enhanced Description */}
                    <p className="text-gray-700 mb-6 font-semibold leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                      {location.description}
                    </p>
                    
                    <div className="space-y-4">
                      {/* Premium Status Badge */}
                      <div className={`inline-block bg-gradient-to-r ${location.color} text-white px-6 py-3 rounded-full text-base font-bold group-hover:scale-125 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]`}>
                        ⭐ Premium Available 24/7 ⭐
                      </div>
                      
                      {/* Enhanced Action Buttons */}
                      <div className="flex gap-3">
                        <a href="tel:+919372662471" className="flex-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white px-4 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-emerald-500/50 transform hover:-translate-y-1">
                          📞 Call Now
                        </a>
                        <a href="https://wa.me/919372662471" className="flex-1 bg-gradient-to-r from-green-500 via-lime-500 to-emerald-500 hover:from-green-600 hover:via-lime-600 hover:to-emerald-600 text-white px-4 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-green-500/50 transform hover:-translate-y-1">
                          💬 WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coverage Summary */}
            <div className="bg-gradient-to-r from-purple-100/80 to-orange-100/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-purple-200/50 mt-16 shadow-2xl">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-700 mb-6">📍 Complete Coverage Across Indore</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white/90 rounded-2xl p-6 shadow-lg">
                    <div className="text-4xl mb-3">🏨</div>
                    <p className="font-bold text-gray-800">Premium Hotels</p>
                  </div>
                  <div className="bg-white/90 rounded-2xl p-6 shadow-lg">
                    <div className="text-4xl mb-3">🏠</div>
                    <p className="font-bold text-gray-800">Home Visits</p>
                  </div>
                  <div className="bg-white/90 rounded-2xl p-6 shadow-lg">
                    <div className="text-4xl mb-3">💼</div>
                    <p className="font-bold text-gray-800">Business Events</p>
                  </div>
                  <div className="bg-white/90 rounded-2xl p-6 shadow-lg">
                    <div className="text-4xl mb-3">✈️</div>
                    <p className="font-bold text-gray-800">Outcall Services</p>
                  </div>
                </div>
                <p className="text-xl text-gray-700 font-semibold">
                  Professional escort services across all major areas with premium companions and instant booking availability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Service Features - Colorful Content Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-violet-200/80 via-fuchsia-200/70 to-orange-200/80">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-300/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-300/30 to-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-300/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="w-full px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100/95 to-orange-100/95 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-2xl border-2 border-pink-300/50">
                <span className="text-3xl animate-bounce">🌟</span>
                <span className="text-purple-800 font-bold text-xl">Premium Service Excellence</span>
                <span className="text-3xl animate-bounce delay-200">💎</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-violet-600 via-fuchsia-500 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-8 leading-tight">
                Why Choose Our Premium Services
              </h2>
              
              <p className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium mb-12">
                Experience the ultimate in luxury escort services with unmatched quality, discretion, and satisfaction guarantee
              </p>
            </div>

            {/* Service Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              {[
                {
                  icon: "🏆",
                  title: "Premium Quality Guaranteed",
                  description: "Only verified professional companions with exceptional beauty, intelligence, and sophistication to ensure your complete satisfaction.",
                  gradient: "from-yellow-400 via-orange-500 to-red-500",
                  bgGradient: "from-yellow-100/40 to-red-100/40"
                },
                {
                  icon: "🔒",
                  title: "Complete Discretion & Privacy",
                  description: "Your privacy is our priority. All interactions are completely confidential with secure booking and professional service.",
                  gradient: "from-blue-500 via-purple-500 to-pink-500",
                  bgGradient: "from-blue-100/40 to-pink-100/40"
                },
                {
                  icon: "⚡",
                  title: "24/7 Instant Booking",
                  description: "Available round the clock for immediate booking. Quick response time and flexible scheduling to meet your requirements.",
                  gradient: "from-green-500 via-teal-500 to-cyan-500",
                  bgGradient: "from-green-100/40 to-cyan-100/40"
                },
                {
                  icon: "💝",
                  title: "Diverse Companion Options",
                  description: "Choose from 16+ categories including Celebrity Escorts, College Girls, VIP Models, and specialized companions for every preference.",
                  gradient: "from-pink-500 via-rose-500 to-purple-500",
                  bgGradient: "from-pink-100/40 to-purple-100/40"
                },
                {
                  icon: "🎭",
                  title: "Perfect for All Occasions",
                  description: "Whether it's business events, dinner dates, social gatherings, or private moments - our companions excel in every setting.",
                  gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
                  bgGradient: "from-indigo-100/40 to-fuchsia-100/40"
                },
                {
                  icon: "💯",
                  title: "100% Satisfaction Promise",
                  description: "We guarantee your complete satisfaction with our premium services. Professional, reliable, and exceeding expectations every time.",
                  gradient: "from-emerald-500 via-lime-500 to-yellow-500",
                  bgGradient: "from-emerald-100/40 to-yellow-100/40"
                }
              ].map((feature, index) => (
                <div key={index} className={`group relative overflow-hidden bg-gradient-to-br ${feature.bgGradient} backdrop-blur-lg rounded-3xl shadow-2xl border-3 border-white/40 hover:border-white/70 transform hover:scale-105 hover:-translate-y-4 transition-all duration-700 p-10 text-center cursor-pointer hover:shadow-4xl`}>
                  {/* Animated Background Effects */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-3xl`}></div>
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/20 rounded-full blur-xl group-hover:scale-150 group-hover:rotate-180 transition-all duration-700"></div>
                  
                  <div className="relative z-10">
                    {/* Premium Icon with Animation */}
                    <div className="text-8xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 filter drop-shadow-2xl group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]">
                      {feature.icon}
                    </div>
                    
                    {/* Feature Title with Gradient */}
                    <h3 className={`text-2xl font-extrabold mb-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-all duration-500`}>
                      {feature.title}
                    </h3>
                    
                    {/* Enhanced Description */}
                    <p className="text-gray-700 mb-8 font-semibold leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                      {feature.description}
                    </p>
                    
                    {/* Premium CTA Button */}
                    <a href="tel:+919372662471" className={`inline-block bg-gradient-to-r ${feature.gradient} text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-110 shadow-2xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transform hover:-translate-y-1`}>
                      ✨ Experience Now ✨
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action Banner */}
            <div className="bg-gradient-to-r from-violet-500/95 via-fuchsia-500/95 via-pink-500/95 to-orange-500/95 backdrop-blur-lg rounded-3xl shadow-2xl border-3 border-white/30 p-12 text-center text-white">
              <h3 className="text-4xl md:text-5xl font-black mb-6 text-white drop-shadow-2xl">
                🚀 Ready for an Unforgettable Experience? 🚀
              </h3>
              <p className="text-xl md:text-2xl mb-10 opacity-95 font-semibold leading-relaxed">
                Join thousands of satisfied clients who trust our premium escort services for the ultimate companion experience in Indore
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+919372662471" className="inline-block bg-white text-purple-600 px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-white/50 hover:-translate-y-2">
                  📞 Call Now: +91 9372662471
                </a>
                <a href="https://wa.me/919372662471" className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-green-500/50 hover:-translate-y-2">
                  💬 WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Copied from Home Page */}
        <section className="py-20 px-4 bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-200/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100/90 to-orange-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-pink-200/50">
                <span className="text-3xl">❓</span>
                <span className="text-pink-800 font-bold text-xl">Frequently Asked Questions</span>
                <span className="text-3xl">💭</span>
              </div>
              
              <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Common questions about our premium escort services in Indore
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How can I book an escort service in Indore?",
                  answer: "You can book our services by calling us at +91 9372 662 471, WhatsApp, or through our contact form. We're available 24/7 for instant bookings."
                },
                {
                  question: "Are your escort services available across all areas of Indore?",
                  answer: "Yes, we provide our premium escort services across all major areas of Indore including Vijay Nagar, Palasia, AB Road, Saket, and 12+ prime locations."
                },
                {
                  question: "What makes your escort service different from others in Indore?",
                  answer: "Our escorts are highly professional, verified, and trained in providing exceptional companion services. We ensure complete discretion and customer satisfaction."
                },
                {
                  question: "Do you provide outcall escort services?",
                  answer: "Yes, we provide both incall and outcall services. Our escorts can visit your hotel, home, or preferred location across Indore with complete discretion."
                },
                {
                  question: "Are your escort services safe and discreet?",
                  answer: "Absolutely. We prioritize client safety and privacy. All our services are completely confidential with verified professional companions."
                },
                {
                  question: "What are your service rates?",
                  answer: "Our rates vary based on the type of service and duration. Please contact us directly for detailed pricing information and special packages."
                },
                {
                  question: "Do you have different categories of escorts available?",
                  answer: "Yes, we offer various categories including Celebrity Escorts, College Girls, VIP Companions, Event Companions, and more to suit different preferences."
                },
                {
                  question: "How can I ensure the authenticity of your services?",
                  answer: "All our escorts are verified professionals. You can call us directly to discuss your requirements and we'll provide complete transparency about our services."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-pink-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-pink-900 mb-4 flex items-start gap-3">
                      <span className="text-2xl text-pink-600">Q:</span>
                      {faq.question}
                    </h3>
                    <div className="flex items-start gap-3 ml-8">
                      <span className="text-2xl text-orange-600">A:</span>
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 relative">
          <div className="w-full px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  🌟 Indore Premium Escort Service
                </h3>
                <p className="text-pink-100 mb-6 leading-relaxed font-semibold text-lg">
                  Premium escort services in Indore with verified professional companions. Available 24/7 across all major locations.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="tel:+919372662471" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-lg">
                    📞 Call Now
                  </a>
                  <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-lg">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">🌟 Our Services</h3>
                <div className="space-y-3">
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">💎 Celebrity Escorts</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">👑 VIP Escorts</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">✨ Premium Models</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🎓 College Girls</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🏠 Housewife Escorts</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">👸 Punjabi Women</a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">🔗 Quick Links</h3>
                <div className="space-y-3">
                  <a href="/services" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📋 All Services</a>
                  <a href="/locations" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📍 Service Areas</a>
                  <a href="#faq" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">❓ FAQ</a>
                  <a href="tel:+919372662471" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📞 Contact Us</a>
                  <a href="#about" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">ℹ️ About Us</a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">📞 Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">📞</span>
                    <a href="tel:+919372662471" className="text-yellow-200 hover:text-yellow-100 font-bold text-lg">+91 9372 662 471</a>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">💬</span>
                    <a href="https://wa.me/919372662471" className="text-green-200 hover:text-green-100 font-bold text-lg">WhatsApp Available</a>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">✉️</span>
                    <a href="mailto:contact@indoreescortservice.com" className="text-purple-200 hover:text-purple-100 font-bold text-lg">Email Us</a>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">📍</span>
                    <span className="text-pink-200 font-bold text-lg">All Indore Areas</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">🕒</span>
                    <span className="text-orange-200 font-bold text-lg">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="border-t-2 border-pink-400/40 mt-16 pt-10 text-center">
              <p className="text-yellow-200 mb-6 font-bold text-xl leading-relaxed">
                © 2024 Indore Premium Escort Service. All rights reserved. 🏆
              </p>
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