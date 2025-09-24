'use client'

import { useState } from 'react'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/80 via-purple-50/60 to-blue-50/80">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-purple-500/15 to-blue-500/20"></div>
        <div className="relative w-full px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Contact & Locations
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Premium escort services available across all major areas of Indore with instant booking and 24/7 availability
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Contact Form & Map */}
      <section className="py-16">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-white/95 via-pink-50/30 to-blue-50/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-pink-200/50">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                  🌟 Book Your Service
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">👤 Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-200/30 transition-all duration-300 bg-white/80"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">📱 Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200/30 transition-all duration-300 bg-white/80"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">📧 Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200/30 transition-all duration-300 bg-white/80"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">📍 Preferred Location</label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-200/30 transition-all duration-300 bg-white/80"
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
                      <option value="Other">Other Location</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">💎 Service Type</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200/30 transition-all duration-300 bg-white/80"
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
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">💬 Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200/30 transition-all duration-300 bg-white/80 resize-none"
                      placeholder="Any special requirements or preferences..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 hover:from-pink-600 hover:via-purple-700 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25"
                  >
                    🚀 Book via WhatsApp
                  </button>
                </form>
                
                {/* Quick Contact Options */}
                <div className="mt-8 pt-8 border-t border-pink-200/50">
                  <h3 className="text-xl font-bold text-center mb-6 text-gray-800">⚡ Quick Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                      href="tel:+919372662471"
                      className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <span>📞</span>
                      <span>Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/919372662471"
                      className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <span>💬</span>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Google Map & Contact Info */}
              <div className="space-y-8">
                {/* Google Map */}
                <div className="bg-gradient-to-br from-white/95 via-blue-50/30 to-purple-50/30 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-blue-200/50">
                  <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <h3 className="text-2xl font-bold text-center">🗺️ Service Coverage Area</h3>
                    <p className="text-center mt-2 text-blue-100">We cover all major areas of Indore</p>
                  </div>
                  
                  <div className="p-2">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
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
                  <div className="bg-gradient-to-br from-pink-100/80 to-pink-200/50 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-pink-200/50">
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
      <section className="py-20 bg-gradient-to-br from-pink-200/80 via-purple-200/70 to-blue-200/80">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                🤔 Frequently Asked Questions
              </h2>
              <div className="bg-gradient-to-r from-pink-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 mx-auto max-w-3xl border-2 border-pink-300/50">
                <p className="text-xl text-gray-800 font-semibold">
                  🌟 Get instant answers to your questions about our premium escort services in Indore 🌟
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {faqData.map((faq, index) => {
                const colorCombinations = [
                  'from-pink-200/90 via-rose-100/80 to-pink-300/70', // Pink
                  'from-blue-200/90 via-sky-100/80 to-blue-300/70', // Blue
                  'from-purple-200/90 via-violet-100/80 to-purple-300/70', // Purple
                  'from-green-200/90 via-emerald-100/80 to-green-300/70', // Green
                  'from-orange-200/90 via-amber-100/80 to-orange-300/70', // Orange
                  'from-indigo-200/90 via-cyan-100/80 to-indigo-300/70', // Indigo
                ]
                const borderColors = [
                  'border-pink-400/60', 'border-blue-400/60', 'border-purple-400/60',
                  'border-green-400/60', 'border-orange-400/60', 'border-indigo-400/60'
                ]
                const textColors = [
                  'text-pink-700', 'text-blue-700', 'text-purple-700',
                  'text-green-700', 'text-orange-700', 'text-indigo-700'
                ]
                const iconColors = [
                  'text-pink-600', 'text-blue-600', 'text-purple-600',
                  'text-green-600', 'text-orange-600', 'text-indigo-600'
                ]
                
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${colorCombinations[index % 6]} backdrop-blur-lg rounded-3xl shadow-2xl border-2 ${borderColors[index % 6]} overflow-hidden transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 hover:shadow-xl`}
                  >
                    <div
                      className="p-8 cursor-pointer"
                      onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-xl font-bold ${textColors[index % 6]} pr-4 leading-tight`}>
                          {faq.question}
                        </h3>
                        <div className={`text-3xl transform transition-all duration-500 ${
                          activeQuestion === index 
                            ? `rotate-180 ${iconColors[index % 6]} scale-125` 
                            : `${iconColors[index % 6]} hover:scale-110`
                        }`}>
                          ▼
                        </div>
                      </div>
                      
                      <div className={`transition-all duration-500 overflow-hidden ${
                        activeQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className={`border-t-2 ${borderColors[index % 6]} pt-6 mt-4`}>
                          <p className="text-gray-800 leading-relaxed text-lg font-medium bg-white/50 backdrop-blur-sm rounded-2xl p-4 shadow-inner">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 opacity-20">
                        <div className={`w-16 h-16 ${colorCombinations[index % 6]} rounded-full blur-sm`}></div>
                      </div>
                      <div className="absolute bottom-4 left-4 opacity-20">
                        <div className={`w-12 h-12 ${colorCombinations[index % 6]} rounded-full blur-sm`}></div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Call to Action */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-pink-400/30 via-purple-400/30 to-blue-400/30 backdrop-blur-xl rounded-4xl p-10 border-2 border-pink-300/60 shadow-2xl">
                <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                    🚀 Still have questions? Contact us now! 🚀
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                      href="tel:+919372662471"
                      className="bg-gradient-to-r from-pink-500 via-pink-600 to-rose-600 hover:from-pink-600 hover:via-pink-700 hover:to-rose-700 text-white font-bold py-5 px-10 rounded-2xl text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-pink-500/50 border-2 border-pink-400/50"
                    >
                      📞 Call +91 9372 662 471
                    </a>
                    <a
                      href="https://wa.me/919372662471"
                      className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white font-bold py-5 px-10 rounded-2xl text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-green-500/50 border-2 border-green-400/50"
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
    </div>
  )
}