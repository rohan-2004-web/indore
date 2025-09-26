'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'

const faqData = [
  {
    question: "🌟 What areas do you cover in Indore?",
    answer: "We provide premium escort services across all major areas of Indore including Vijay Nagar, Saket, AB Road, Palasia, Bhawar Kuan, Ring Road, MG Road, Airport Road and many more locations 24/7."
  },
  {
    question: "⏰ How quickly can you arrange a meeting?",
    answer: "We guarantee service within 30-45 minutes to any location in Indore. Our escorts are strategically located across the city for quick response times."
  },
  {
    question: "✅ Are all your escorts verified and genuine?",
    answer: "Yes, 100% of our escorts are thoroughly verified, genuine, and professional. We maintain strict quality standards and only work with authentic companions."
  },
  {
    question: "🔒 Is the service completely private and discreet?",
    answer: "Absolutely! We maintain complete confidentiality and discretion. Your privacy is our top priority, and all interactions are handled with utmost professionalism."
  },
  {
    question: "💰 What are your service rates and payment methods?",
    answer: "Our rates vary based on the type of service and duration. We accept multiple payment methods including cash and digital payments. Contact us for detailed pricing."
  },
  {
    question: "📱 How can I book or get more information?",
    answer: "You can call us at +91 9372 662 471, WhatsApp us, or fill out our contact form. We're available 24/7 to assist you with bookings and queries."
  }
]

export default function LocationsPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: '',
    message: ''
  })

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hi! I want to book escort service.%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ALocation: ${formData.location}%0AService: ${formData.service}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/919372662471?text=${whatsappMessage}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const navigateToLocation = (locationPath: string) => {
    router.push(locationPath)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-pink-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-orange-400/25 to-pink-600/30"></div>
        <div className="relative w-full px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-gradient-to-r from-pink-100/90 to-orange-100/90 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-pink-300/50 p-12 mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent drop-shadow-lg">
                🌟 Contact & Locations 🌟
              </h1>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-300/50 shadow-lg">
                <p className="text-lg md:text-xl text-gray-800 font-semibold max-w-3xl mx-auto">
                  🚀 Premium escort services available across all major areas of Indore with instant booking and 24/7 availability 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Listing Section */}
      <section className="py-16 bg-gradient-to-br from-pink-100/60 via-orange-50/50 to-pink-200/60">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                🌟 Our Service Locations in Indore 🌟
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Premium escort services available across all major areas of Indore with verified professional companions
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              
              {/* Saket */}
              <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-pink-300/30 cursor-pointer" onClick={() => navigateToLocation('/locations/saket')}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏘️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">Saket</h3>
                <p className="text-gray-600 mb-4">Premium residential area with luxury homes and privacy</p>
                <div className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-2xl font-bold group-hover:scale-105 transition-transform shadow-xl">
                  Book in Saket
                </div>
              </div>

              {/* Scheme 78 */}
              <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-orange-300/30 cursor-pointer" onClick={() => navigateToLocation('/locations/scheme-78')}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">Scheme 78</h3>
                <p className="text-gray-600 mb-4">IT Corporate sector with modern offices and hotels</p>
                <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-bold group-hover:scale-105 transition-transform shadow-xl">
                  Book in Scheme 78
                </div>
              </div>

              {/* AB Road */}
              <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-pink-300/30 cursor-pointer" onClick={() => navigateToLocation('/locations/ab-road')}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛣️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">AB Road</h3>
                <p className="text-gray-600 mb-4">Major commercial hub with shopping and business centers</p>
                <div className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-2xl font-bold group-hover:scale-105 transition-transform shadow-xl">
                  Book in AB Road
                </div>
              </div>

              {/* Palasia */}
              <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-orange-300/30 cursor-pointer" onClick={() => navigateToLocation('/locations/palasia')}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏪</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">Palasia</h3>
                <p className="text-gray-600 mb-4">Business district with premium hotels and restaurants</p>
                <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-bold group-hover:scale-105 transition-transform shadow-xl">
                  Book in Palasia
                </div>
              </div>

              {/* Bhawar Kuan */}
              <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-pink-300/30 cursor-pointer" onClick={() => navigateToLocation('/locations/bhawar-kuan')}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎭</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">Bhawar Kuan</h3>
                <p className="text-gray-600 mb-4">Cultural center with entertainment and dining options</p>
                <div className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-2xl font-bold group-hover:scale-105 transition-transform shadow-xl">
                  Book in Bhawar Kuan
                </div>
              </div>

              {/* Rau */}
              <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-orange-300/30 cursor-pointer" onClick={() => navigateToLocation('/locations/rau')}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌳</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">Rau</h3>
                <p className="text-gray-600 mb-4">Peaceful residential area with quiet neighborhoods</p>
                <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-bold group-hover:scale-105 transition-transform shadow-xl">
                  Book in Rau
                </div>
              </div>

              {/* Ring Road */}
              <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-pink-300/30 cursor-pointer" onClick={() => navigateToLocation('/locations/ring-road')}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔗</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">Ring Road</h3>
                <p className="text-gray-600 mb-4">Commercial hub with luxury hotels and business centers</p>
                <div className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-2xl font-bold group-hover:scale-105 transition-transform shadow-xl">
                  Book in Ring Road
                </div>
              </div>

              {/* Bombay Hospital */}
              <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-orange-300/30 cursor-pointer" onClick={() => navigateToLocation('/locations/bombay-hospital')}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏥</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">Bombay Hospital</h3>
                <p className="text-gray-600 mb-4">Medical district with hotels and professional services</p>
                <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-bold group-hover:scale-105 transition-transform shadow-xl">
                  Book in Bombay Hospital
                </div>
              </div>

              {/* MG Road */}
              <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-pink-300/30 cursor-pointer" onClick={() => navigateToLocation('/locations/mg-road')}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛍️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">MG Road</h3>
                <p className="text-gray-600 mb-4">Main commercial street with shopping and entertainment</p>
                <div className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-2xl font-bold group-hover:scale-105 transition-transform shadow-xl">
                  Book in MG Road
                </div>
              </div>

              {/* Airport Road */}
              <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-orange-300/30 cursor-pointer" onClick={() => navigateToLocation('/locations/airport-road')}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✈️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">Airport Road</h3>
                <p className="text-gray-600 mb-4">Aviation hub with hotels and business facilities</p>
                <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-bold group-hover:scale-105 transition-transform shadow-xl">
                  Book in Airport Road
                </div>
              </div>

              {/* Treasure Island */}
              <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-pink-300/30 cursor-pointer" onClick={() => navigateToLocation('/locations/treasure-island')}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏬</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">Treasure Island</h3>
                <p className="text-gray-600 mb-4">Premier shopping mall with entertainment and dining</p>
                <div className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-2xl font-bold group-hover:scale-105 transition-transform shadow-xl">
                  Book in Treasure Island
                </div>
              </div>

              {/* Vijay Nagar */}
              <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-orange-300/30 cursor-pointer" onClick={() => navigateToLocation('/locations/vijay-nagar')}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏛️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">Vijay Nagar</h3>
                <p className="text-gray-600 mb-4">Premium commercial area with luxury amenities and hotels</p>
                <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-bold group-hover:scale-105 transition-transform shadow-xl">
                  Book in Vijay Nagar
                </div>
              </div>

            </div>

            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-pink-100/90 to-orange-100/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border-2 border-pink-300/50">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                  🚀 Ready to Book? 🚀
                </h3>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Click on any location above or contact us directly for immediate booking
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    📞 Call +91 9372662471
                  </a>
                  <a href="https://wa.me/919372662471" className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    💬 WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Contact Form & Map */}
      <section className="py-16">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-pink-100/95 via-orange-100/90 to-pink-200/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border-2 border-pink-300/60">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-orange-200/60">
                  <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm">
                    🌟 Book Your Service 🌟
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-pink-200/50">
                      <label className="block text-pink-700 font-bold mb-2">👤 Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-200/50 transition-all duration-300 bg-white/90"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50">
                      <label className="block text-orange-700 font-bold mb-2">📱 Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200/50 transition-all duration-300 bg-white/90"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-pink-200/50">
                    <label className="block text-pink-700 font-bold mb-2">📧 Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-200/50 transition-all duration-300 bg-white/90"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50">
                    <label className="block text-orange-700 font-bold mb-2">📍 Preferred Location</label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200/50 transition-all duration-300 bg-white/90"
                    >
                      <option value="">Select Location</option>
                      <option value="Vijay Nagar">Vijay Nagar</option>
                      <option value="Saket">Saket</option>
                      <option value="AB Road">AB Road</option>
                      <option value="Palasia">Palasia</option>
                      <option value="Bhawar Kuan">Bhawar Kuan</option>
                      <option value="Ring Road">Ring Road</option>
                      <option value="MG Road">MG Road</option>
                      <option value="Airport Road">Airport Road</option>
                      <option value="Rajwada">Rajwada</option>
                      <option value="Sarafa Bazaar">Sarafa Bazaar</option>
                      <option value="Treasure Island">Treasure Island</option>
                      <option value="Malhar Mega Mall">Malhar Mega Mall</option>
                      <option value="C21 Mall">C21 Mall</option>
                      <option value="Phoenix Citadel">Phoenix Citadel Mall</option>
                      <option value="Orbit Mall">Orbit Mall</option>
                      <option value="Brilliant Convention Centre">Brilliant Convention Centre</option>
                      <option value="Race Course Road">Race Course Road</option>
                      <option value="Scheme 78">Scheme 78</option>
                      <option value="Scheme 94">Scheme 94</option>
                      <option value="Scheme 114">Scheme 114</option>
                      <option value="New Palasia">New Palasia</option>
                      <option value="Geeta Bhawan">Geeta Bhawan</option>
                      <option value="Rau">Rau</option>
                      <option value="Dewas Naka">Dewas Naka</option>
                      <option value="Ujjain Road">Ujjain Road</option>
                      <option value="Khandwa Road">Khandwa Road</option>
                      <option value="Mhow">Mhow</option>
                      <option value="Khajrana">Khajrana</option>
                      <option value="Super Corridor">Super Corridor</option>
                      <option value="Other">Other Location</option>
                    </select>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-pink-200/50">
                    <label className="block text-pink-700 font-bold mb-2">💎 Service Type</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-200/50 transition-all duration-300 bg-white/90"
                    >
                      <option value="">Select Service</option>
                      <option value="Celebrity Escorts">Celebrity Escorts</option>
                      <option value="VIP Escorts">VIP Escorts</option>
                      <option value="Premium Models">Premium Models</option>
                      <option value="College Girls">College Girls</option>
                      <option value="Housewife Escorts">Housewife Escorts</option>
                      <option value="Punjabi Women">Punjabi Women</option>
                    </select>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50">
                    <label className="block text-orange-700 font-bold mb-2">💬 Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200/50 transition-all duration-300 bg-white/90 resize-none"
                      placeholder="Any special requirements or preferences..."
                    />
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-pink-300/60">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 via-orange-500 to-pink-600 hover:from-pink-600 hover:via-orange-600 hover:to-pink-700 text-white font-bold py-5 px-8 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/50 border-2 border-white/30"
                    >
                      🚀 Book via WhatsApp 🚀
                    </button>
                  </div>
                </form>
                
                {/* Quick Contact Options */}
                <div className="mt-8 pt-8 border-t-2 border-pink-300/50">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50">
                    <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">⚡ Quick Contact ⚡</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a
                        href="tel:+919372662471"
                        className="flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                      >
                        <span className="text-2xl">📞</span>
                        <span className="text-lg">Call Now</span>
                      </a>
                      <a
                        href="https://wa.me/919372662471"
                        className="flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                      >
                        <span className="text-2xl">💬</span>
                        <span className="text-lg">WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Map & Contact Info */}
              <div className="space-y-8">
                {/* Google Map */}
                <div className="bg-gradient-to-br from-pink-100/95 via-orange-100/90 to-pink-200/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border-2 border-pink-300/60">
                  <div className="p-6 bg-gradient-to-r from-pink-500 to-orange-500 text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                      <h3 className="text-2xl font-bold text-center">🗺️ Service Coverage Area 🗺️</h3>
                      <p className="text-center mt-2 text-pink-100 font-semibold">We cover all major areas of Indore</p>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-orange-300/50">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117220.27853870603!2d75.69903657431642!3d22.723991899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1709737200000!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Contact Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-pink-200/90 to-pink-300/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border-2 border-pink-400/60 transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-4xl mb-4">📞</div>
                      <h4 className="font-bold text-gray-800 mb-2">Phone</h4>
                      <a href="tel:+919372662471" className="text-pink-600 font-bold text-lg hover:text-pink-700 transition-colors">
                        +91 9372 662 471
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-100/80 to-green-200/50 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-green-200/50">
                    <div className="text-center">
                      <div className="text-4xl mb-4">💬</div>
                      <h4 className="font-bold text-gray-800 mb-2">WhatsApp</h4>
                      <a href="https://wa.me/919372662471" className="text-green-600 font-bold text-lg hover:text-green-700 transition-colors">
                        Chat Now
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-100/80 to-blue-200/50 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-blue-200/50">
                    <div className="text-center">
                      <div className="text-4xl mb-4">✉️</div>
                      <h4 className="font-bold text-gray-800 mb-2">Email</h4>
                      <a href="mailto:contact@indoreescortservice.com" className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors">
                        contact@indoreescortservice.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-100/80 to-purple-200/50 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-purple-200/50">
                    <div className="text-center">
                      <div className="text-4xl mb-4">�</div>
                      <h4 className="font-bold text-gray-800 mb-2">Service Area</h4>
                      <p className="text-purple-600 font-bold text-sm">
                        All Indore Areas<br/>24/7 Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section - 2 Column Layout */}
      <section className="py-20 bg-gradient-to-br from-pink-200/80 via-orange-200/60 to-pink-300/70">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="bg-gradient-to-r from-pink-100/90 to-orange-100/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border-2 border-pink-300/60 mb-8">
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-700 via-orange-600 to-pink-800 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                  🤔 Frequently Asked Questions 🤔
                </h2>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mx-auto max-w-4xl border-2 border-orange-300/50">
                  <p className="text-xl text-gray-800 font-bold">
                    🌟 Get instant answers to your questions about our premium escort services in Indore 🌟
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-100/95 via-orange-50/90 to-pink-200/85 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-pink-300/60 overflow-hidden transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 hover:shadow-xl"
                >
                  <div
                    className="p-8 cursor-pointer"
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  >
                    {/* Question Header */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-orange-200/50">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-pink-700 pr-4 leading-tight">
                          {faq.question}
                        </h3>
                        <div className={`text-3xl transform transition-all duration-500 ${
                          activeQuestion === index 
                            ? 'rotate-180 text-orange-600 scale-125' 
                            : 'text-pink-600 hover:scale-110'
                        }`}>
                          ▼
                        </div>
                      </div>
                    </div>
                    
                    {/* Answer Content */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      activeQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-inner border-2 border-pink-200/50">
                        <p className="text-gray-800 leading-relaxed text-lg font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-30">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-300/50 to-orange-300/50 rounded-full blur-sm"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-30">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-300/50 to-pink-300/50 rounded-full blur-sm"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-pink-200/90 via-orange-200/80 to-pink-300/90 backdrop-blur-xl rounded-4xl p-10 border-2 border-pink-400/60 shadow-2xl">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-300/50">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-700 via-orange-600 to-pink-800 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                    🚀 Still have questions? Contact us now! 🚀
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                      href="tel:+919372662471"
                      className="bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:from-pink-600 hover:via-pink-700 hover:to-pink-800 text-white font-bold py-5 px-10 rounded-2xl text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-pink-500/50 border-2 border-white/50"
                    >
                      📞 Call +91 9372 662 471
                    </a>
                    <a
                      href="https://wa.me/919372662471"
                      className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white font-bold py-5 px-10 rounded-2xl text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-orange-500/50 border-2 border-white/50"
                    >
                      💬 WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as Homepage */}
      <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
        </div>
        <div className="w-full px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                ✨ Indore Premium Escort Service
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
                <a href="/" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📋 Home</a>
                <a href="/services" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📋 All Services</a>
                <a href="/gallery" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📸 Gallery</a>
                <a href="/locations" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📍 Service Areas</a>
                <a href="/contact" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📞 Contact Us</a>
                <a href="/about" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">ℹ️ About Us</a>
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
  )
}