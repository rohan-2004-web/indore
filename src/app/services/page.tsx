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

            {/* Enhanced Location Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Vijay Nagar", icon: "🏢", description: "Central business district with luxury hotels", color: "from-purple-500 to-pink-500" },
                { name: "Palasia", icon: "🛍️", description: "Shopping and entertainment hub", color: "from-pink-500 to-orange-500" },
                { name: "AB Road", icon: "🏨", description: "Main commercial area with premium hotels", color: "from-orange-500 to-purple-500" },
                { name: "Saket", icon: "🏡", description: "Upscale residential area", color: "from-purple-600 to-pink-600" },
                { name: "MG Road", icon: "🌟", description: "Central business district", color: "from-pink-600 to-orange-600" },
                { name: "Rajwada", icon: "🏰", description: "Historic and cultural center", color: "from-orange-600 to-purple-600" },
                { name: "Bhanwar Kuwa", icon: "🎭", description: "Entertainment and nightlife area", color: "from-purple-500 to-pink-500" },
                { name: "Ring Road", icon: "🚗", description: "Modern development zone", color: "from-pink-500 to-orange-500" },
                { name: "Geeta Bhawan", icon: "🕉️", description: "Traditional and modern mix", color: "from-orange-500 to-purple-500" },
                { name: "C21 Mall Area", icon: "🏬", description: "Shopping and dining hub", color: "from-purple-600 to-pink-600" },
                { name: "Airport Road", icon: "✈️", description: "Business travel corridor", color: "from-pink-600 to-orange-600" },
                { name: "Bhawarkua", icon: "🌆", description: "Central Indore location", color: "from-orange-600 to-purple-600" }
              ].map((location, index) => (
                <div key={index} className="group bg-gradient-to-br from-white/98 to-purple-50/95 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-purple-200/50 hover:border-pink-300/70 transform hover:scale-105 hover:-translate-y-3 transition-all duration-500 p-8 text-center">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-300/20 to-purple-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-7xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-2xl">
                      {location.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                      {location.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                      {location.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className={`inline-block bg-gradient-to-r ${location.color} text-white px-4 py-2 rounded-full text-sm font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        ✅ Available 24/7
                      </div>
                      
                      <div className="flex gap-3">
                        <a href="tel:+919372662471" className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-3 rounded-xl font-bold text-base transition-all duration-400 hover:scale-105 shadow-lg hover:shadow-emerald-500/40">
                          📞 Call
                        </a>
                        <a href="https://wa.me/919372662471" className="flex-1 bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-700 hover:to-lime-600 text-white px-4 py-3 rounded-xl font-bold text-base transition-all duration-400 hover:scale-105 shadow-lg hover:shadow-green-500/40">
                          💬 Chat
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