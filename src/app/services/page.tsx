'use client';

import Header from '@/components/Header';

export default function ServicesPage() {
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
              <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Call Now: +91 9372662471
              </a>
              <a href="https://wa.me/919372662471" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                WhatsApp Now
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Premium Escorts In Indore - Our Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              
              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Celebrity Escorts.webp" alt="Celebrity Escorts" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Celebrity Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Premium companions with star quality service</p>
                <a href="/services/celebrity-escorts" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Celebrity Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-blue-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/VIP Escorts.jpg" alt="VIP Escorts" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">VIP Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Ultimate luxury companions for discerning clients</p>
                <a href="/services/vip-escorts" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book VIP Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-orange-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Premium Models.jpg" alt="Premium Models" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Models</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">High-end models with sophistication</p>
                <a href="/services/premium-models" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Premium Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-purple-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/College Girls.webp" alt="College Girls" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">College Girls</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Young energetic companions for memorable experiences</p>
                <a href="/services/college-girls" className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book College Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-green-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Housewife Escorts.jpg" alt="Housewife Escorts" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Housewife Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Mature experienced companions with caring nature</p>
                <a href="/services/housewife-escorts" className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Housewife Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-red-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Punjabi women.webp" alt="Punjabi Women" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Punjabi Women</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Beautiful Punjabi companions with traditional charm</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Punjabi Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-teal-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Slim Escorts.webp" alt="Slim Escorts" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Slim Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Elegant slim companions with perfect figure</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Slim Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-indigo-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Unsatisfied Bhabhi.webp" alt="Unsatisfied Bhabhi" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Unsatisfied Bhabhi</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Experienced companions seeking excitement</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Bhabhi</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Local Beauties.webp" alt="Local Beauties" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Local Beauties</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Beautiful local companions who know Indore</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Local Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-yellow-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Event Companion.webp" alt="Event Companion" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Event Companion</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Perfect companions for social events and parties</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Event Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-rose-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Pink Special.webp" alt="Pink Special" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Pink Special</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Special premium companions for exclusive experiences</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Pink Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-violet-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Unsatisfied Females.webp" alt="Unsatisfied Females" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Unsatisfied Females</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Mature women seeking meaningful connections</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-violet-500 to-violet-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Female Escorts</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-blue-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Incall Escorts.webp" alt="Incall Escorts" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Incall Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Premium incall services at luxury locations</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Incall Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-amber-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Mature Escorts.webp" alt="Mature Escorts" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Mature Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Experienced mature companions with sophistication</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Mature Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-emerald-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Young Girls.webp" alt="Young Girls" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Young Girls</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Young beautiful companions for unforgettable experiences</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Young Girls</a>
              </div>

            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70"></div>
          <div className="w-full px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Premium Escort Services Available In All Major Indore Areas
              </h2>
              <p className="text-2xl text-gray-700 max-w-6xl mx-auto leading-relaxed font-semibold">
                Professional escort services available across 15+ prime locations in Indore with guaranteed satisfaction and instant response
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              
              <div className="group bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-pink-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                <div className="text-center">
                  <div className="text-6xl mb-6">🏢</div>
                  <h3 className="text-3xl font-bold text-pink-800 mb-3">Vijay Nagar</h3>
                  <p className="text-pink-600 font-bold text-xl mb-4">Central Business District</p>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Premium business district with luxury hotels, shopping centers and corporate offices. Elite escort services available 24/7.</p>
                </div>
                <a href="/services" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                  Book Premium Escorts in Vijay Nagar
                </a>
              </div>
              
              <div className="group bg-gradient-to-br from-blue-100 to-blue-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-blue-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                <div className="text-center">
                  <div className="text-6xl mb-6">🏘️</div>
                  <h3 className="text-3xl font-bold text-blue-800 mb-3">Saket</h3>
                  <p className="text-blue-600 font-bold text-xl mb-4">Upscale Residential Hub</p>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Prestigious residential area with modern amenities and gated communities. Discrete home visit services available.</p>
                </div>
                <a href="/services" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                  Book VIP Escorts in Saket
                </a>
              </div>
              
              <div className="group bg-gradient-to-br from-orange-100 to-orange-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-orange-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                <div className="text-center">
                  <div className="text-6xl mb-6">💻</div>
                  <h3 className="text-3xl font-bold text-orange-800 mb-3">Scheme 78</h3>
                  <p className="text-orange-600 font-bold text-xl mb-4">IT Corporate Sector</p>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Technology hub with corporate offices, business hotels and modern infrastructure. Professional companions available.</p>
                </div>
                <a href="/services" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                  Book Elite Escorts in Scheme 78
                </a>
              </div>

              <div className="group bg-gradient-to-br from-purple-100 to-purple-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-purple-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                <div className="text-center">
                  <div className="text-6xl mb-6">🛍️</div>
                  <h3 className="text-3xl font-bold text-purple-800 mb-3">AB Road</h3>
                  <p className="text-purple-600 font-bold text-xl mb-4">Commercial Zone</p>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Main commercial area with luxury shopping, dining and premium hotels. Elite companions for business meetings.</p>
                </div>
                <a href="/services" className="w-full inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                  Book Premium Escorts in AB Road
                </a>
              </div>
              
              <div className="group bg-gradient-to-br from-green-100 to-green-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-green-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                <div className="text-center">
                  <div className="text-6xl mb-6">🌆</div>
                  <h3 className="text-3xl font-bold text-green-800 mb-3">Palasia</h3>
                  <p className="text-green-600 font-bold text-xl mb-4">City Center</p>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Heart of Indore with premium facilities, accessibility and upscale venues. Professional escort services 24/7.</p>
                </div>
                <a href="/services" className="w-full inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                  Book VIP Escorts in Palasia
                </a>
              </div>
              
              <div className="group bg-gradient-to-br from-teal-100 to-teal-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-teal-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                <div className="text-center">
                  <div className="text-6xl mb-6">🏛️</div>
                  <h3 className="text-3xl font-bold text-teal-800 mb-3">Bhawar Kuan</h3>
                  <p className="text-teal-600 font-bold text-xl mb-4">Premium District</p>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Prestigious business and residential area with luxury amenities and high-end establishments.</p>
                </div>
                <a href="/services" className="w-full inline-block bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                  Book Elite Escorts in Bhawar Kuan
                </a>
              </div>
              
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 relative">
          <div className="w-full px-4 relative z-10">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-8">
                Book Premium Escort Services in Indore Now!
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  Call Now: +91 9372662471
                </a>
                <a href="https://wa.me/919372662471" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  WhatsApp Now
                </a>
              </div>
              <p className="text-pink-200 font-semibold text-lg mt-8">
                Professional escort services for adults only. Must be 18+ to use our services.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
