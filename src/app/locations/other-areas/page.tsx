'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function OtherAreasPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service",
      description: "Experience celebrity-level companions across all areas of Indore with exceptional elegance",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY",
      link: "/services/celebrity-escorts"
    },
    {
      title: "VIP Escorts", 
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts available citywide in Indore offering ultimate luxury",
      image: "/images/services/VIP Escorts.jpg",
      icon: "💫",
      category: "VIP",
      link: "/services/vip-escorts"
    },
    {
      title: "Premium Models",
      subtitle: "High-End Sophistication",
      description: "Premium models available across Indore with unmatched sophistication",
      image: "/images/services/Premium Models.jpg",
      icon: "💎",
      category: "PREMIUM",
      link: "/services/premium-models"
    },
    {
      title: "College Girls",
      subtitle: "Fresh & Young",
      description: "Beautiful young companions available throughout Indore with vibrant energy",
      image: "/images/services/College Girls.webp",
      icon: "🌟",
      category: "YOUNG",
      link: "/services/college-girls"
    },
    {
      title: "Housewife Escorts",
      subtitle: "Mature Experience",
      description: "Experienced mature companions available citywide with caring nature",
      image: "/images/services/Housewife Escorts.jpg",
      icon: "👑",
      category: "MATURE",
      link: "/services/housewife-escorts"
    },
    {
      title: "High Profile Escorts",
      subtitle: "Elite Companionship",
      description: "High-profile companions available across all premium areas of Indore",
      image: "/images/services/High profile escorts.jpg",
      icon: "👸",
      category: "ELITE",
      link: "/services/high-profile-escorts"
    }
  ]

  const areas = [
    "Bhawarkua", "South Tukoganj", "Chandan Nagar", "Geeta Bhawan", "Tilak Nagar",
    "Rajendra Nagar", "Nehru Park", "Race Course Road", "Prabhu Devi", "Khajrana",
    "Mangliya", "Sudama Nagar", "Pigdamber", "LIG Square", "Juni Indore",
    "Mhow Naka", "Dewas Naka", "Ujjain Road", "Khandwa Road", "Dhar Road",
    "Agra-Bombay Road", "Bhicholi Mardana", "Ranjit Hanuman", "Canada Corner",
    "GPO", "Cloth Market", "Chappan Dukan", "Chhoti Khajrani", "Badi Khajrani"
  ]

  const faqs = [
    {
      question: "Do you provide escort services in all areas of Indore?",
      answer: "Yes, absolutely! We provide premium escort services across all areas of Indore including Bhawarkua, South Tukoganj, Chandan Nagar, Geeta Bhawan, Tilak Nagar, Rajendra Nagar, and many more locations. Call us at +91 9372662471 for service in your specific area."
    },
    {
      question: "Are your escorts available for outcall services citywide?",
      answer: "Yes, our escorts are available for outcall services throughout Indore. Whether you're in residential areas like Sudama Nagar, commercial zones like GPO, or entertainment districts like Chappan Dukan, we provide discreet outcall services to your location."
    },
    {
      question: "What locations do you cover apart from the main areas?",
      answer: "Apart from major areas, we cover Khajrana, Mangliya, Pigdamber, LIG Square, Juni Indore, Mhow Naka, Dewas Naka, Ujjain Road, Khandwa Road, Dhar Road, Agra-Bombay Road, and many other localities across Indore."
    },
    {
      question: "How do I book escorts for areas not specifically mentioned?",
      answer: "If your area is not specifically mentioned, don't worry! We cover the entire Indore city and outskirts. Simply call us at +91 9372662471 or WhatsApp, mention your location, and our team will arrange the perfect companion for your area."
    },
    {
      question: "Are rates different for different areas in Indore?",
      answer: "Our rates are generally consistent across Indore, though travel charges may apply for distant locations. We offer competitive pricing for all areas and provide transparent pricing before confirming your booking. Contact us for area-specific rates."
    },
    {
      question: "Is discretion maintained for bookings in residential areas?",
      answer: "Absolutely! Discretion and privacy are our top priorities, especially in residential areas like Chandan Nagar, Sudama Nagar, or Tilak Nagar. Our escorts are trained to maintain complete confidentiality and arrive discreetly at your location."
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-emerald-200/60 via-teal-100/50 to-emerald-300/60">
        
        {/* Hero Section - Premium Enhanced Style */}
        <section className="pt-20 pb-16 relative min-h-screen flex items-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/95 via-teal-200/90 to-emerald-300/95"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-emerald-400/30 to-teal-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-br from-teal-400/25 to-emerald-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-emerald-300/20 to-teal-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="w-full mx-auto text-center relative z-10 px-4">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-100/90 to-teal-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-emerald-200/50">
              <span className="text-3xl">🗺️</span>
              <span className="text-emerald-800 font-bold text-lg">Citywide Escort Services</span>
              <span className="text-3xl">🌍</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-emerald-700 via-teal-500 to-emerald-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              Escorts in Other Areas
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                All Indore Locations
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Premium Escort Services Available Across All Areas of Indore
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Citywide coverage • 24/7 availability • All residential & commercial areas • Complete discretion guaranteed
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <a 
                href="tel:+919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-700 hover:via-emerald-800 hover:to-emerald-900 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-emerald-500/50 border-2 border-emerald-400/30"
              >
                <span className="text-3xl group-hover:animate-bounce">📞</span>
                <span>Call Now: +91 9372 662 471</span>
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-green-500/50 border-2 border-green-400/30"
              >
                <span className="text-3xl group-hover:animate-bounce">💬</span>
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Premium Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🌆</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Citywide Coverage</h3>
                <p className="text-gray-700 font-medium">Service available across all areas of Indore</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🚗</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Outcall Services</h3>
                <p className="text-gray-700 font-medium">Escorts visit your location anywhere in Indore</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🔐</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Area Privacy</h3>
                <p className="text-gray-700 font-medium">Discrete service in all residential areas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Coverage Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-100/70 via-teal-50/60 to-emerald-100/70">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent mb-6">
                Areas We Cover in Indore
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                We provide premium escort services across all these areas and more locations throughout Indore
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-16">
              {areas.map((area, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-emerald-100/50 hover:scale-105 transition-transform">
                  <span className="text-emerald-700 font-semibold">{area}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">And many more locations across Indore!</p>
              <a 
                href="tel:+919372662471" 
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
              >
                <span className="text-xl">📍</span>
                Call for Your Area Coverage
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-200/70 via-teal-100/60 to-emerald-200/70">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent mb-6">
                Premium Escort Services - All Areas
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Choose from our carefully selected companions available across all areas of Indore
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-emerald-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-64 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">{service.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <h4 className="text-lg font-semibold text-emerald-600 mb-3">{service.subtitle}</h4>
                  <p className="text-gray-600 mb-6 text-base flex-grow leading-relaxed">{service.description}</p>
                  <a href={service.link} className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                    Book Citywide Service
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-100/70 via-teal-50/60 to-emerald-100/70">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions - Other Areas
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/90 rounded-2xl shadow-xl border border-emerald-100/50 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-emerald-50/50 transition-colors"
                  >
                    <span className="text-lg font-bold text-emerald-800">{faq.question}</span>
                    <span className={`text-2xl transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6">Ready to Book in Your Area?</h2>
            <p className="text-2xl mb-12 max-w-3xl mx-auto">
              Contact us now for premium escort services in any area of Indore. Available 24/7 for citywide service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a 
                href="tel:+919372662471" 
                className="inline-flex items-center justify-center gap-4 bg-white text-emerald-600 px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span className="text-2xl">📞</span>
                Call: +91 9372 662 471
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="inline-flex items-center justify-center gap-4 bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span className="text-2xl">💬</span>
                WhatsApp Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}