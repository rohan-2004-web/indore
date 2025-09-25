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

        {/* Service Areas Section */}
        <section className="py-20 bg-gradient-to-br from-purple-200/80 via-pink-100/70 to-orange-200/80">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100/90 to-pink-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-purple-200/50">
                <span className="text-3xl">📍</span>
                <span className="text-purple-800 font-bold text-xl">Service Coverage</span>
                <span className="text-3xl">🌆</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-600 bg-clip-text text-transparent mb-8 leading-tight">
                Available Across Indore
              </h2>
              
              <p className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium mb-12">
                Premium escort services available in all major areas with instant booking
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Vijay Nagar", "Palasia", "AB Road", "Saket", 
                "MG Road", "Rajwada", "Bhanwar Kuwa", "Ring Road",
                "Geeta Bhawan", "C21 Mall", "Airport Road", "Bhawarkua"
              ].map((location, index) => (
                <div key={index} className="bg-gradient-to-br from-white/95 to-purple-50/90 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl border-2 border-purple-200/50 hover:border-pink-300/70 transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-3">🏢</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{location}</h3>
                  <p className="text-gray-600 font-medium">Available 24/7</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-pink-200/80 via-orange-100/70 to-purple-200/80">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100/90 to-orange-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-pink-200/50">
                <span className="text-3xl">❓</span>
                <span className="text-pink-800 font-bold text-xl">Frequently Asked Questions</span>
                <span className="text-3xl">💭</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-pink-600 via-orange-500 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
                Service FAQs
              </h2>
              
              <p className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium">
                Get answers to commonly asked questions about our premium escort services
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How do I book your premium escort services in Indore?",
                  answer: "You can book our services by calling us at +91 9372 662 471, WhatsApp, or through direct contact. We're available 24/7 for instant bookings with immediate confirmation and flexible scheduling."
                },
                {
                  question: "Are all your escorts verified and professional?",
                  answer: "Yes, absolutely. All our escorts go through rigorous verification including background checks, professional training, and continuous quality monitoring to ensure they meet our premium standards."
                },
                {
                  question: "Which areas of Indore do you cover for escort services?",
                  answer: "We provide services across all major areas including Vijay Nagar, Palasia, AB Road, Saket, MG Road, Rajwada, and 12+ other prime locations throughout Indore city."
                },
                {
                  question: "What types of escort services do you offer?",
                  answer: "We offer 16 premium categories including Celebrity Escorts, VIP Companions, College Girls, Premium Models, Event Companions, Travel Partners, Dinner Dates, and many more specialized services."
                },
                {
                  question: "How do you ensure privacy and discretion?",
                  answer: "Client privacy is our top priority. All communications are confidential, we use secure booking systems, and our companions are bound by strict confidentiality agreements."
                },
                {
                  question: "Do you provide both incall and outcall services?",
                  answer: "Yes, we provide both services. Our escorts can visit your hotel, home, or preferred location across Indore, or you can visit our discrete and comfortable locations."
                },
                {
                  question: "What makes your escort service different from others?",
                  answer: "Our 100% verified companions, complete discretion, 24/7 availability, premium quality service, 3+ years experience, and customer satisfaction guarantee sets us apart from others."
                },
                {
                  question: "Are your services available 24/7?",
                  answer: "Yes, our premium escort services are available 24/7 across all locations in Indore. We provide instant booking with immediate availability for your convenience."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-white/95 to-pink-50/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border-2 border-pink-200/50 hover:border-orange-300/70 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-start gap-3">
                    <span className="text-3xl text-pink-600">Q:</span>
                    {faq.question}
                  </h3>
                  <div className="flex items-start gap-3 ml-12">
                    <span className="text-3xl text-orange-600">A:</span>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-200/80 via-purple-100/70 to-pink-200/80 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-400/25 to-orange-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <div className="bg-gradient-to-br from-white/95 to-orange-50/90 backdrop-blur-lg rounded-4xl p-12 shadow-2xl border-2 border-orange-200/50">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="text-4xl">🔥</span>
                <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Ready for Premium Experience?
                </h2>
                <span className="text-4xl">💎</span>
              </div>
              
              <p className="text-2xl md:text-3xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
                Contact us now for instant booking and experience the finest escort services in Indore
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+919372662471" className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-16 py-6 rounded-full font-black text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50">
                  📞 Call Now: +91 9372662471
                </a>
                <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-16 py-6 rounded-full font-black text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/50">
                  💬 WhatsApp Now
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-gradient-to-br from-orange-100/80 to-pink-100/80 rounded-2xl p-6">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-xl font-bold text-gray-800">Instant</h3>
                  <p className="text-gray-600">Booking</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100/80 to-purple-100/80 rounded-2xl p-6">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="text-xl font-bold text-gray-800">100%</h3>
                  <p className="text-gray-600">Verified</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100/80 to-orange-100/80 rounded-2xl p-6">
                  <div className="text-4xl mb-3">🔒</div>
                  <h3 className="text-xl font-bold text-gray-800">Complete</h3>
                  <p className="text-gray-600">Privacy</p>
                </div>
                <div className="bg-gradient-to-br from-orange-100/80 to-pink-100/80 rounded-2xl p-6">
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="text-xl font-bold text-gray-800">Premium</h3>
                  <p className="text-gray-600">Quality</p>
                </div>
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