'use client'

import Header from '@/components/Header'
import Image from 'next/image'
import { useState } from 'react'

export default function GalleryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const galleryImages = [
    {
      id: 1,
      src: "/images/services/Celebrity Escorts.webp",
      title: "Celebrity Escorts",
      category: "Premium"
    },
    {
      id: 2,
      src: "/images/services/VIP Escorts.jpg",
      title: "VIP Escorts",
      category: "Luxury"
    },
    {
      id: 3,
      src: "/images/services/Premium Models.jpg",
      title: "Premium Models",
      category: "Elite"
    },
    {
      id: 4,
      src: "/images/services/College Girls.webp",
      title: "College Girls",
      category: "Young"
    },
    {
      id: 5,
      src: "/images/services/Housewife Escorts.jpg",
      title: "Housewife Escorts",
      category: "Mature"
    },
    {
      id: 6,
      src: "/images/services/Punjabi women.webp",
      title: "Punjabi Women",
      category: "Traditional"
    },
    {
      id: 7,
      src: "/images/services/Slim Escorts.webp",
      title: "Slim Escorts",
      category: "Elegant"
    },
    {
      id: 8,
      src: "/images/services/Local Beauties.webp",
      title: "Local Beauties",
      category: "Local"
    },
    {
      id: 9,
      src: "/images/services/Event Companion.webp",
      title: "Event Companion",
      category: "Events"
    },
    {
      id: 10,
      src: "/images/services/Pink Special.webp",
      title: "Pink Special",
      category: "Special"
    },
    {
      id: 11,
      src: "/images/services/Incall Escorts.webp",
      title: "Incall Escorts",
      category: "Services"
    },
    {
      id: 12,
      src: "/images/services/Young Girls.webp",
      title: "Young Girls",
      category: "Fresh"
    },
    {
      id: 13,
      src: "/images/services/Expert Services.webp",
      title: "Expert Services",
      category: "Professional"
    },
    {
      id: 14,
      src: "/images/services/High Class Models.webp",
      title: "High Class Models",
      category: "Elite"
    },
    {
      id: 15,
      src: "/images/services/bold girls.webp",
      title: "Bold Girls",
      category: "Confident"
    },
    {
      id: 16,
      src: "/images/services/sexy girls.webp",
      title: "Sexy Girls",
      category: "Glamour"
    },
    {
      id: 17,
      src: "/images/services/Unsatisfied Bhabhi.webp",
      title: "Travel Companion",
      category: "Travel"
    },
    {
      id: 18,
      src: "/images/services/Unsatisfied Females.webp",
      title: "High Profile",
      category: "Elite"
    },
    {
      id: 19,
      src: "/images/services/Expert Services.webp",
      title: "Corporate Service",
      category: "Business"
    },
    {
      id: 20,
      src: "/images/services/Local Beauties.webp",
      title: "24/7 Service",
      category: "Anytime"
    }
  ]

  const faqs = [
    {
      question: "What type of escorts are featured in your gallery?",
      answer: "Our gallery showcases a diverse collection of premium escorts including celebrity companions, VIP models, college girls, mature housewives, Punjabi beauties, and professional event companions. Each escort is carefully selected for their beauty, professionalism, and sophistication."
    },
    {
      question: "Are the images in the gallery authentic and recent?",
      answer: "Yes, all images in our gallery are authentic and regularly updated. We maintain strict quality standards and ensure all photographs represent our current available escorts accurately. We believe in complete transparency with our clients."
    },
    {
      question: "How can I book the escort shown in the gallery?",
      answer: "You can book any escort from our gallery by calling +91 9372662471 or messaging us on WhatsApp. Simply mention the category or name of the escort you're interested in, and our team will arrange the booking for you."
    },
    {
      question: "Do you offer different categories of escorts as shown in the gallery?",
      answer: "Absolutely! Our gallery represents various categories including Celebrity Escorts, VIP Companions, College Girls, Mature Escorts, High-Class Models, Event Companions, and many more to suit different preferences and occasions."
    },
    {
      question: "Are all escorts in the gallery available in Indore?",
      answer: "Yes, all escorts featured in our gallery are available for bookings in Indore and surrounding areas. We provide services across all major locations including Vijay Nagar, Palasia, AB Road, Saket, and 15+ other prime areas."
    },
    {
      question: "What makes your escort gallery different from others?",
      answer: "Our gallery features verified, professional escorts with high-quality images. Each escort is categorized for easy selection, and we provide detailed information about their specialties. We focus on quality over quantity."
    },
    {
      question: "Can I request a specific type of escort not shown in the gallery?",
      answer: "Yes, our gallery represents just a sample of our extensive network. If you have specific preferences or requirements not shown in the gallery, please contact us and we'll do our best to fulfill your request."
    },
    {
      question: "How often do you update your gallery with new escorts?",
      answer: "We regularly update our gallery to showcase new escorts joining our agency and refresh existing profiles. Our gallery is updated weekly to ensure you always have access to the latest and most current escorts available."
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
              Premium Escort Gallery
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-6xl mx-auto mb-10 font-medium leading-relaxed">
              Explore our gallery of beautiful and professional companions available in Indore
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+919372662471" 
                className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                📞 Call Now: +91 9372662471
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className="py-20 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Our Premium Services
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Explore our comprehensive collection of premium escort services in Indore. From celebrity companions to college girls, we offer diverse options for every preference.
              </p>
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

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-indigo-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/indore escorts.webp" alt="Indore Escorts" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Indore Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Premium local escorts with deep knowledge of Indore city</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Indore Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-cyan-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Expert Services.webp" alt="Expert Services" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Services</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Expert companions with specialized skills and professional experience</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Expert Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-purple-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/High Class Models.webp" alt="High Class Models" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">High Class Models</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Stunning high-class models with runway experience</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Model Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-red-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/bold girls.webp" alt="Bold Girls" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Bold Girls</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Bold and confident companions ready for exciting adventures</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Bold Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/sexy girls.webp" alt="Sexy Girls" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sexy Girls</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Incredibly attractive companions with mesmerizing charm</p>
                <a href="/services" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Sexy Girls</a>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-pink-100/80 via-orange-50/60 to-pink-200/70">
          <div className="w-full px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                  🔍 Gallery FAQs
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Everything you need to know about our premium escort gallery and booking process
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-pink-100/50 overflow-hidden transform transition-all duration-300 hover:shadow-3xl"
                  >
                    <button
                      className="w-full text-left p-8 focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300"
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-800 pr-8 leading-relaxed">
                          {faq.question}
                        </h3>
                        <div className={`flex-shrink-0 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                          <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-8 pb-8">
                        <div className="border-t border-pink-200 pt-6">
                          <p className="text-gray-700 leading-loose text-lg font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact CTA within FAQ Section */}
              <div className="mt-16 text-center bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-3xl p-12">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                  Still have questions about our gallery?
                </h3>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Contact us directly for personalized assistance with your escort selection
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="tel:+919372662471" 
                    className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    📞 Call Now: +91 9372662471
                  </a>
                  <a 
                    href="https://wa.me/919372662471" 
                    className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    💬 WhatsApp Now
                  </a>
                </div>
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
                Ready to Meet Your Perfect Companion?
              </h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                Contact us now to book any of our beautiful companions for an unforgettable experience
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:+919372662471" 
                  className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  📞 Call Now: +91 9372662471
                </a>
                <a 
                  href="https://wa.me/919372662471" 
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  💬 WhatsApp Now
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
                  <a href="/services" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📋 All Services</a>
                  <a href="/locations" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📍 Service Areas</a>
                  <a href="/gallery" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🖼️ Gallery</a>
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
    </>
  )
}