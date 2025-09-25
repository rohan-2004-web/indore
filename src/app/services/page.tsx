'use client'

import Header from '@/components/Header'

export default function ServicesPage() {
  const services = [
    {
      id: 'celebrity-escorts',
      title: "Celebrity Escorts",
      description: "Experience celebrity-level companions with exceptional elegance and sophistication.",
      icon: "",
      category: "PREMIUM"
    },
    {
      id: 'vip-escorts',
      title: "VIP Escorts",
      description: "Ultimate luxury companions for discerning clients who demand the finest experience.",
      icon: "",
      category: "VIP"
    },
    {
      id: 'premium-models',
      title: "Premium Models",
      description: "High-end professional models with sophistication and charm for exclusive events.",
      icon: "",
      category: "LUXURY"
    },
    {
      id: 'college-girls',
      title: "College Girls",
      description: "Young energetic companions with vibrant personalities and modern outlook.",
      icon: "",
      category: "YOUNG"
    },
    {
      id: 'housewife-escorts',
      title: "Housewife Escorts",
      description: "Mature experienced companions with caring nature and deep understanding.",
      icon: "",
      category: "MATURE"
    },
    {
      id: 'punjabi-women',
      title: "Punjabi Women",
      description: "Beautiful Punjabi companions with traditional charm and modern sophistication.",
      icon: "",
      category: "TRADITIONAL"
    },
    {
      id: 'slim-escorts',
      title: "Slim Escorts",
      description: "Elegant slim companions with perfect figure and graceful presence.",
      icon: "",
      category: "ELEGANT"
    },
    {
      id: 'unsatisfied-bhabhi',
      title: "Unsatisfied Bhabhi",
      description: "Experienced companions seeking excitement and meaningful connections.",
      icon: "",
      category: "EXPERIENCED"
    },
    {
      id: 'local-beauties',
      title: "Local Beauties",
      description: "Beautiful local companions who know Indore city and its best locations.",
      icon: "",
      category: "LOCAL"
    },
    {
      id: 'event-companion',
      title: "Event Companion",
      description: "Perfect companions for social events, parties, and business gatherings.",
      icon: "",
      category: "EVENTS"
    },
    {
      id: 'pink-special',
      title: "Pink Special",
      description: "Special premium companions for exclusive experiences and luxury moments.",
      icon: "",
      category: "SPECIAL"
    },
    {
      id: 'unsatisfied-females',
      title: "Unsatisfied Females",
      description: "Mature women seeking meaningful connections and exciting experiences.",
      icon: "",
      category: "MATURE"
    },
    {
      id: 'incall-escorts',
      title: "Incall Escorts",
      description: "Premium incall services at luxury locations with complete privacy.",
      icon: "",
      category: "INCALL"
    },
    {
      id: 'mature-escorts',
      title: "Mature Escorts",
      description: "Experienced mature companions with sophistication and wisdom.",
      icon: "",
      category: "EXPERIENCED"
    },
    {
      id: 'young-girls',
      title: "Young Girls",
      description: "Young beautiful companions for unforgettable experiences and adventures.",
      icon: "",
      category: "YOUNG"
    },
    {
      id: 'indore-escorts',
      title: "Indore Escorts",
      description: "Premium local escorts with deep knowledge of Indore city and culture.",
      icon: "",
      category: "LOCAL"
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-300/60">
        
        {/* Hero Section */}
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
              <a 
                href="tel:+919372662471" 
                className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                 Call Now: +91 9372662471
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                 WhatsApp Now
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
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
                {services.map((service, index) => (
                  <div 
                    key={service.id}
                    className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-3xl group"
                  >
                    {/* Icon */}
                    <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="inline-block bg-gradient-to-r from-pink-500/20 to-orange-500/20 text-pink-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                      {service.category}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 text-base leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <a 
                        href="/contact" 
                        className="block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        View Details
                      </a>
                      <div className="flex gap-2">
                        <a 
                          href="tel:+919372662471" 
                          className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
                        >
                           Call
                        </a>
                        <a 
                          href="https://wa.me/919372662471" 
                          className="flex-1 bg-gradient-to-r from-green-600 to-lime-600 hover:from-lime-600 hover:to-green-700 text-white px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
                        >
                           Chat
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-orange-600/20"></div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-8">
                Ready to Book Your Perfect Companion?
              </h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                Contact us now for instant booking and let us connect you with the perfect companion for your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:+919372662471" 
                  className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                   Call Now: +91 9372662471
                </a>
                <a 
                  href="https://wa.me/919372662471" 
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                   WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Same as Homepage */}
        <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 relative">
          <div className="w-full px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                   Indore Premium Escort Service
                </h3>
                <p className="text-pink-100 mb-6 leading-relaxed font-semibold text-lg">
                  Premium escort services in Indore with verified professional companions. Available 24/7 across all major locations.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="tel:+919372662471" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-lg">
                     Call Now
                  </a>
                  <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-lg">
                     WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent"> Our Services</h3>
                <div className="space-y-3">
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200"> Celebrity Escorts</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200"> VIP Escorts</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200"> Premium Models</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200"> College Girls</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200"> Housewife Escorts</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200"> Punjabi Women</a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent"> Quick Links</h3>
                <div className="space-y-3">
                  <a href="/services" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200"> All Services</a>
                  <a href="/locations" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200"> Service Areas</a>
                  <a href="/" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200"> Home</a>
                  <a href="tel:+919372662471" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200"> Contact Us</a>
                  <a href="#about" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">ℹ About Us</a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"> Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl"></span>
                    <a href="tel:+919372662471" className="text-yellow-200 hover:text-yellow-100 font-bold text-lg">+91 9372 662 471</a>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl"></span>
                    <a href="https://wa.me/919372662471" className="text-green-200 hover:text-green-100 font-bold text-lg">WhatsApp Available</a>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl"></span>
                    <a href="mailto:contact@indoreescortservice.com" className="text-purple-200 hover:text-purple-100 font-bold text-lg">Email Us</a>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl"></span>
                    <span className="text-pink-200 font-bold text-lg">All Indore Areas</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl"></span>
                    <span className="text-orange-200 font-bold text-lg">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="border-t-2 border-pink-400/40 mt-16 pt-10 text-center">
              <p className="text-yellow-200 mb-6 font-bold text-xl leading-relaxed">
                 2024 Indore Premium Escort Service. All rights reserved. 
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold"> 24/7 Available</span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full font-bold"> 100% Verified</span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-bold"> Complete Discretion</span>
                <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-bold"> Premium Quality</span>
              </div>
              <p className="text-pink-200 font-semibold text-lg">
                 Professional escort services for adults only. Must be 18+ to use our services. 
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
