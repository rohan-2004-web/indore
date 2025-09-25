'use client''use client''use client';



import Header from '@/components/Header'

import { useState } from 'react'

import { useState } from 'react'import { useState, useMemo } from 'react';

export default function ServicesPage() {

  const [selectedCategory, setSelectedCategory] = useState('ALL')import Header from '@/components/Header'import { motion } from 'framer-motion';



  const services = [import Image from 'next/image'import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaHeart, FaStar, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

    { id: 1, title: "VIP Escorts", description: "High-class escorts for premium experiences with complete discretion and professionalism.", icon: "👑", category: "VIP" },

    { id: 2, title: "College Girls", description: "Young, educated companions for social events and meaningful conversations.", icon: "🎓", category: "COLLEGE" },import { BiFilterAlt } from 'react-icons/bi';

    { id: 3, title: "Housewife Escorts", description: "Mature and experienced companions offering warmth and understanding.", icon: "🏠", category: "MATURE" },

    { id: 4, title: "Celebrity Escorts", description: "High-profile companions for exclusive events and luxury experiences.", icon: "⭐", category: "CELEBRITY" },export default function ServicesPage() {

    { id: 5, title: "Russian Escorts", description: "Beautiful Russian companions with elegance and sophistication.", icon: "🇷🇺", category: "INTERNATIONAL" },

    { id: 6, title: "Model Escorts", description: "Professional models available for fashion events and photo shoots.", icon: "📸", category: "MODEL" },  const [selectedCategory, setSelectedCategory] = useState('ALL')const services = [

    { id: 7, title: "Air Hostess", description: "Sophisticated air hostess companions with travel experience and grace.", icon: "✈️", category: "PROFESSIONAL" },

    { id: 8, title: "Call Girls", description: "Premium call girl services with complete privacy and satisfaction.", icon: "📱", category: "PREMIUM" },  {

    { id: 9, title: "Independent Escorts", description: "Self-employed escorts offering personalized and flexible services.", icon: "💼", category: "INDEPENDENT" },

    { id: 10, title: "Foreign Escorts", description: "International companions from various countries with diverse cultures.", icon: "🌍", category: "INTERNATIONAL" },  const services = [    id: 'vip-escorts',

    { id: 11, title: "Local Beauties", description: "Beautiful local companions who know Indore city and its best locations.", icon: "🌹", category: "LOCAL" },

    { id: 12, title: "Event Companion", description: "Perfect companions for social events, parties, and business gatherings.", icon: "🎉", category: "EVENTS" },    {    title: "VIP Escorts",

    { id: 13, title: "Pink Special", description: "Special premium companions for exclusive experiences and luxury moments.", icon: "💕", category: "SPECIAL" },

    { id: 14, title: "Unsatisfied Females", description: "Mature women seeking meaningful connections and exciting experiences.", icon: "💖", category: "MATURE" },      id: 1,    description: "High-class escorts for premium experiences with complete discretion and professionalism.",

    { id: 15, title: "Incall Escorts", description: "Premium incall services at luxury locations with complete privacy.", icon: "🏨", category: "INCALL" },

    { id: 16, title: "Young Girls", description: "Young beautiful companions for unforgettable experiences and adventures.", icon: "🌸", category: "YOUNG" }      title: "VIP Escorts",    icon: "",

  ]

      description: "High-class escorts for premium experiences with complete discretion and professionalism.",    category: "VIP"

  const categories = ['ALL', 'VIP', 'COLLEGE', 'MATURE', 'CELEBRITY', 'INTERNATIONAL', 'MODEL', 'PROFESSIONAL', 'PREMIUM', 'INDEPENDENT', 'LOCAL', 'EVENTS', 'SPECIAL', 'INCALL', 'YOUNG']

      icon: "👑",  },

  const filteredServices = selectedCategory === 'ALL' ? services : services.filter(service => service.category === selectedCategory)

      category: "VIP"  {

  return (

    <>    },    id: 'college-girls',

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">    {    title: "College Girls",

        

        {/* Hero Section */}      id: 2,    description: "Young, educated companions for social events and meaningful conversations.",

        <section className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white py-32">

          <div className="absolute inset-0 bg-black opacity-20"></div>      title: "College Girls",    icon: "",

          <div className="container mx-auto px-6 relative z-10">

            <div className="text-center">      description: "Young, educated companions for social events and meaningful conversations.",    category: "COLLEGE"

              <h1 className="text-6xl md:text-7xl font-bold mb-6">

                Our Premium Services      icon: "🎓",  },

              </h1>

              <p className="text-xl md:text-2xl mb-8">      category: "COLLEGE"  {

                Discover our exclusive collection of 16 premium services

              </p>    },    id: 'housewife-escorts',

            </div>

          </div>    {    title: "Housewife Escorts",

        </section>

      id: 3,    description: "Mature and experienced companions offering warmth and understanding.",

        {/* Filter Section */}

        <section className="py-8 bg-white shadow-lg">      title: "Housewife Escorts",    icon: "",

          <div className="container mx-auto px-6">

            <div className="flex flex-wrap gap-2 justify-center">      description: "Mature and experienced companions offering warmth and understanding.",    category: "MATURE"

              {categories.map((category) => (

                <button      icon: "🏠",  },

                  key={category}

                  onClick={() => setSelectedCategory(category)}      category: "MATURE"  {

                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${

                    selectedCategory === category    },    id: 'celebrity-escorts',

                      ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white'

                      : 'bg-gray-200 text-gray-700 hover:bg-pink-100'    {    title: "Celebrity Escorts",

                  }`}

                >      id: 4,    description: "High-profile companions for exclusive events and luxury experiences.",

                  {category}

                </button>      title: "Celebrity Escorts",    icon: "",

              ))}

            </div>      description: "High-profile companions for exclusive events and luxury experiences.",    category: "CELEBRITY"

          </div>

        </section>      icon: "⭐",  },



        {/* Services Grid */}      category: "CELEBRITY"  {

        <section className="py-20">

          <div className="container mx-auto px-6">    },    id: 'russian-escorts',

            <div className="text-center mb-16">

              <h2 className="text-4xl font-bold text-gray-800 mb-4">    {    title: "Russian Escorts",

                {selectedCategory === 'ALL' ? 'All Services' : selectedCategory} Services

              </h2>      id: 5,    description: "Beautiful Russian companions with elegance and sophistication.",

              <p className="text-xl text-gray-600">

                Showing {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''}      title: "Russian Escorts",    icon: "",

              </p>

            </div>      description: "Beautiful Russian companions with elegance and sophistication.",    category: "INTERNATIONAL"



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">      icon: "🇷🇺",  },

              {filteredServices.map((service) => (

                <div      category: "INTERNATIONAL"  {

                  key={service.id}

                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-pink-100"    },    id: 'model-escorts',

                >

                  <div className="text-center mb-6">    {    title: "Model Escorts",

                    <div className="text-6xl mb-4">

                      {service.icon}      id: 6,    description: "Professional models available for fashion events and photo shoots.",

                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-3">      title: "Model Escorts",    icon: "",

                      {service.title}

                    </h3>      description: "Professional models available for fashion events and photo shoots.",    category: "MODEL"

                    <p className="text-gray-600 leading-relaxed mb-4">

                      {service.description}      icon: "📸",  },

                    </p>

                  </div>      category: "MODEL"  {



                  <div className="flex items-center justify-between mb-6">    },    id: 'air-hostess',

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700">

                      {service.category}    {    title: "Air Hostess",

                    </span>

                    <div className="flex items-center space-x-1 text-yellow-500">      id: 7,    description: "Sophisticated air hostess companions with travel experience and grace.",

                      ⭐⭐⭐⭐⭐

                    </div>      title: "Air Hostess",    icon: "",

                  </div>

      description: "Sophisticated air hostess companions with travel experience and grace.",    category: "PROFESSIONAL"

                  <div className="flex space-x-3">

                    <button className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300">      icon: "✈️",  },

                      Book Now

                    </button>      category: "PROFESSIONAL"  {

                    <button className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300">

                      📱    },    id: 'call-girls',

                    </button>

                  </div>    {    title: "Call Girls",

                </div>

              ))}      id: 8,    description: "Premium call girl services with complete privacy and satisfaction.",

            </div>

      title: "Call Girls",    icon: "",

            {filteredServices.length === 0 && (

              <div className="text-center py-20">      description: "Premium call girl services with complete privacy and satisfaction.",    category: "PREMIUM"

                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Services Found</h3>

                <p className="text-gray-600">Try selecting a different category</p>      icon: "📱",  },

              </div>

            )}      category: "PREMIUM"  {

          </div>

        </section>    },    id: 'independent-escorts',



        {/* Footer */}    {    title: "Independent Escorts",

        <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 relative">

          <div className="absolute inset-0 overflow-hidden">      id: 9,    description: "Self-employed escorts offering personalized and flexible services.",

            <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-2xl"></div>

            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-purple-400/20 rounded-full blur-2xl"></div>      title: "Independent Escorts",    icon: "",

          </div>

          <div className="w-full px-4 relative z-10">      description: "Self-employed escorts offering personalized and flexible services.",    category: "INDEPENDENT"

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    icon: "💼",  },

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">      category: "INDEPENDENT"  {

                  ✨ Indore Premium Escort Service

                </h3>    },    id: 'foreign-escorts',

                <p className="text-pink-100 mb-6 leading-relaxed font-semibold text-lg">

                  Premium escort services in Indore with verified professional companions. Available 24/7 across all major locations.    {    title: "Foreign Escorts",

                </p>

                <div className="flex flex-col gap-4">      id: 10,    description: "International companions from various countries with diverse cultures.",

                  <a href="tel:+919893636369" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-lg">

                    📞 Call Now      title: "Foreign Escorts",    icon: "",

                  </a>

                  <a href="https://wa.me/919893636369" className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-lg">      description: "International companions from various countries with diverse cultures.",    category: "INTERNATIONAL"

                    💬 WhatsApp

                  </a>      icon: "🌍",  },

                </div>

              </div>      category: "INTERNATIONAL"  {

              

              <div className="p-6">    },    id: 'local-beauties',

                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">🌟 Our Services</h3>

                <div className="space-y-3">    {    title: "Local Beauties",

                  <a href="#" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">💎 Celebrity Escorts</a>

                  <a href="#" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">👑 VIP Escorts</a>      id: 11,    description: "Beautiful local companions who know Indore city and its best locations.",

                  <a href="#" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">✨ Premium Models</a>

                  <a href="#" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🎓 College Girls</a>      title: "Local Beauties",    icon: "",

                  <a href="#" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🏠 Housewife Escorts</a>

                  <a href="#" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">👸 Russian Escorts</a>      description: "Beautiful local companions who know Indore city and its best locations.",    category: "LOCAL"

                </div>

              </div>      icon: "🌹",  },

              

              <div className="p-6">      category: "LOCAL"  {

                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">🔗 Quick Links</h3>

                <div className="space-y-3">    },    id: 'event-companion',

                  <a href="/" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📋 Home</a>

                  <a href="/services" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📋 All Services</a>    {    title: "Event Companion",

                  <a href="/gallery" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📸 Gallery</a>

                  <a href="/locations" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📍 Service Areas</a>      id: 12,    description: "Perfect companions for social events, parties, and business gatherings.",

                  <a href="/contact" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📞 Contact Us</a>

                  <a href="/about" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">ℹ️ About Us</a>      title: "Event Companion",    icon: "",

                </div>

              </div>      description: "Perfect companions for social events, parties, and business gatherings.",    category: "EVENTS"

              

              <div className="p-6">      icon: "🎉",  },

                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">📞 Contact Information</h3>

                <div className="space-y-4">      category: "EVENTS"  {

                  <div className="flex items-center space-x-3 p-3">

                    <span className="text-2xl">📞</span>    },    id: 'pink-special',

                    <a href="tel:+919893636369" className="text-yellow-200 hover:text-yellow-100 font-bold text-lg">+91 9893636369</a>

                  </div>    {    title: "Pink Special",

                  <div className="flex items-center space-x-3 p-3">

                    <span className="text-2xl">💬</span>      id: 13,    description: "Special premium companions for exclusive experiences and luxury moments.",

                    <a href="https://wa.me/919893636369" className="text-green-200 hover:text-green-100 font-bold text-lg">WhatsApp Available</a>

                  </div>      title: "Pink Special",    icon: "",

                  <div className="flex items-center space-x-3 p-3">

                    <span className="text-2xl">✉️</span>      description: "Special premium companions for exclusive experiences and luxury moments.",    category: "SPECIAL"

                    <a href="mailto:contact@indoreescortservice.com" className="text-purple-200 hover:text-purple-100 font-bold text-lg">Email Us</a>

                  </div>      icon: "💕",  },

                  <div className="flex items-center space-x-3 p-3">

                    <span className="text-2xl">📍</span>      category: "SPECIAL"  {

                    <span className="text-pink-200 font-bold text-lg">All Indore Areas</span>

                  </div>    },    id: 'unsatisfied-females',

                  <div className="flex items-center space-x-3 p-3">

                    <span className="text-2xl">🕒</span>    {    title: "Unsatisfied Females",

                    <span className="text-orange-200 font-bold text-lg">24/7 Available</span>

                  </div>      id: 14,    description: "Mature women seeking meaningful connections and exciting experiences.",

                </div>

              </div>      title: "Unsatisfied Females",    icon: "",

            </div>

                  description: "Mature women seeking meaningful connections and exciting experiences.",    category: "MATURE"

            {/* Footer Bottom */}

            <div className="border-t-2 border-pink-400/40 mt-16 pt-10 text-center">      icon: "💖",  },

              <p className="text-yellow-200 mb-6 font-bold text-xl leading-relaxed">

                © 2024 Indore Premium Escort Service. All rights reserved. 🏆      category: "MATURE"  {

              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-6">    },    id: 'incall-escorts',

                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold">✅ 24/7 Available</span>

                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full font-bold">✅ 100% Verified</span>    {    title: "Incall Escorts",

                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-bold">✅ Complete Discretion</span>

                <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-bold">✅ Premium Quality</span>      id: 15,    description: "Premium incall services at luxury locations with complete privacy.",

              </div>

              <p className="text-pink-200 font-semibold text-lg">      title: "Incall Escorts",    icon: "",

                🔞 Professional escort services for adults only. Must be 18+ to use our services. 🔞

              </p>      description: "Premium incall services at luxury locations with complete privacy.",    category: "INCALL"

            </div>

          </div>      icon: "🏨",  },

        </footer>

      category: "INCALL"  {

      </div>

    </>    },    id: 'young-girls',

  )

}    {    title: "Young Girls",

      id: 16,    description: "Young beautiful companions for unforgettable experiences and adventures.",

      title: "Young Girls",    icon: "",

      description: "Young beautiful companions for unforgettable experiences and adventures.",    category: "YOUNG"

      icon: "🌸",  }

      category: "YOUNG"];

    }

  ]const categories = [

  'ALL',

  const categories = ['ALL', 'VIP', 'COLLEGE', 'MATURE', 'CELEBRITY', 'INTERNATIONAL', 'MODEL', 'PROFESSIONAL', 'PREMIUM', 'INDEPENDENT', 'LOCAL', 'EVENTS', 'SPECIAL', 'INCALL', 'YOUNG']  'VIP',

  'COLLEGE',

  const filteredServices = selectedCategory === 'ALL' ? services : services.filter(service => service.category === selectedCategory)  'MATURE',

  'CELEBRITY',

  return (  'INTERNATIONAL',

    <>  'MODEL',

      <Header />  'PROFESSIONAL',

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">  'PREMIUM',

          'INDEPENDENT',

        {/* Hero Section */}  'LOCAL',

        <section className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white py-32">  'EVENTS',

          <div className="absolute inset-0 bg-black opacity-20"></div>  'SPECIAL',

          <div className="container mx-auto px-6 relative z-10">  'INCALL',

            <div className="text-center">  'YOUNG'

              <h1 className="text-6xl md:text-7xl font-bold mb-6">];

                Our Premium Services

              </h1>export default function ServicesPage() {

              <p className="text-xl md:text-2xl mb-8">  const [selectedCategory, setSelectedCategory] = useState('ALL');

                Discover our exclusive collection of 16 premium services  const [isFilterOpen, setIsFilterOpen] = useState(false);

              </p>

            </div>  const filteredServices = useMemo(() => {

          </div>    if (selectedCategory === 'ALL') return services;

        </section>    return services.filter(service => service.category === selectedCategory);

  }, [selectedCategory]);

        {/* Filter Section */}

        <section className="py-8 bg-white shadow-lg">  const containerVariants = {

          <div className="container mx-auto px-6">    hidden: { opacity: 0 },

            <div className="flex flex-wrap gap-2 justify-center">    visible: {

              {categories.map((category) => (      opacity: 1,

                <button      transition: {

                  key={category}        staggerChildren: 0.1

                  onClick={() => setSelectedCategory(category)}      }

                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${    }

                    selectedCategory === category  };

                      ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white'

                      : 'bg-gray-200 text-gray-700 hover:bg-pink-100'  const itemVariants = {

                  }`}    hidden: { opacity: 0, y: 20 },

                >    visible: { opacity: 1, y: 0 }

                  {category}  };

                </button>

              ))}  return (

            </div>    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">

          </div>      {/* Hero Section */}

        </section>      <section className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white py-32">

        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Services Grid */}        <div className="container mx-auto px-6 relative z-10">

        <section className="py-20">          <div className="text-center">

          <div className="container mx-auto px-6">            <motion.h1 

            <div className="text-center mb-16">              initial={{ opacity: 0, y: -30 }}

              <h2 className="text-4xl font-bold text-gray-800 mb-4">              animate={{ opacity: 1, y: 0 }}

                {selectedCategory === 'ALL' ? 'All Services' : selectedCategory} Services              transition={{ duration: 0.8 }}

              </h2>              className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-blue-200"

              <p className="text-xl text-gray-600">            >

                Showing {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''}              Our Premium Services

              </p>            </motion.h1>

            </div>            <motion.p 

              initial={{ opacity: 0, y: 30 }}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">              animate={{ opacity: 1, y: 0 }}

              {filteredServices.map((service) => (              transition={{ duration: 0.8, delay: 0.3 }}

                <div              className="text-xl md:text-2xl mb-8 text-pink-100"

                  key={service.id}            >

                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-pink-100"              Discover our exclusive collection of 16 premium services

                >            </motion.p>

                  <div className="text-center mb-6">            <motion.div

                    <div className="text-6xl mb-4">              initial={{ opacity: 0, scale: 0.8 }}

                      {service.icon}              animate={{ opacity: 1, scale: 1 }}

                    </div>              transition={{ duration: 0.8, delay: 0.6 }}

                    <h3 className="text-2xl font-bold text-gray-800 mb-3">              className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full px-8 py-4"

                      {service.title}            >

                    </h3>              <FaHeart className="text-pink-300" />

                    <p className="text-gray-600 leading-relaxed mb-4">              <span className="text-lg font-semibold">16 Exclusive Services</span>

                      {service.description}              <FaStar className="text-yellow-300" />

                    </p>            </motion.div>

                  </div>          </div>

        </div>

                  <div className="flex items-center justify-between mb-6">      </section>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700">

                      {service.category}      {/* Filter Section */}

                    </span>      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-0 z-40 shadow-lg">

                    <div className="flex items-center space-x-1 text-yellow-500">        <div className="container mx-auto px-6">

                      ⭐⭐⭐⭐⭐          <div className="flex flex-col md:flex-row items-center justify-between">

                    </div>            <div className="flex items-center space-x-4 mb-4 md:mb-0">

                  </div>              <BiFilterAlt className="text-2xl text-pink-600" />

              <h3 className="text-xl font-semibold text-gray-800">Filter Services</h3>

                  <div className="flex space-x-3">            </div>

                    <button className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300">            

                      Book Now            {/* Mobile Filter Toggle */}

                    </button>            <button

                    <button className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300">              onClick={() => setIsFilterOpen(!isFilterOpen)}

                      📱              className="md:hidden bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold"

                    </button>            >

                  </div>              {isFilterOpen ? 'Hide Filters' : 'Show Filters'}

                </div>            </button>

              ))}

            </div>            {/* Desktop Filter */}

            <div className="hidden md:flex flex-wrap gap-2">

            {filteredServices.length === 0 && (              {categories.map((category) => (

              <div className="text-center py-20">                <button

                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Services Found</h3>                  key={category}

                <p className="text-gray-600">Try selecting a different category</p>                  onClick={() => setSelectedCategory(category)}

              </div>                  className={px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 }

            )}                >

          </div>                  {category.replace('_', ' ')}

        </section>                </button>

              ))}

        {/* Homepage Footer */}            </div>

        <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 relative">          </div>

          <div className="absolute inset-0 overflow-hidden">

            <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-2xl"></div>          {/* Mobile Filter */}

            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-purple-400/20 rounded-full blur-2xl"></div>          {isFilterOpen && (

          </div>            <div className="md:hidden mt-4 grid grid-cols-2 gap-2">

          <div className="w-full px-4 relative z-10">              {categories.map((category) => (

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">                <button

                                key={category}

              <div className="p-6">                  onClick={() => {

                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">                    setSelectedCategory(category);

                  ✨ Indore Premium Escort Service                    setIsFilterOpen(false);

                </h3>                  }}

                <p className="text-pink-100 mb-6 leading-relaxed font-semibold text-lg">                  className={px-4 py-2 rounded-full font-semibold transition-all duration-300 }

                  Premium escort services in Indore with verified professional companions. Available 24/7 across all major locations.                >

                </p>                  {category.replace('_', ' ')}

                <div className="flex flex-col gap-4">                </button>

                  <a href="tel:+919893636369" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-lg">              ))}

                    📞 Call Now            </div>

                  </a>          )}

                  <a href="https://wa.me/919893636369" className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-lg">        </div>

                    💬 WhatsApp      </section>

                  </a>

                </div>      {/* Services Grid */}

              </div>      <section className="py-20">

                      <div className="container mx-auto px-6">

              <div className="p-6">          <div className="text-center mb-16">

                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">🌟 Our Services</h3>            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">

                <div className="space-y-3">              {selectedCategory === 'ALL' ? 'All Services' : selectedCategory.replace('_', ' ')} Services

                  <a href="#" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">💎 Celebrity Escorts</a>            </h2>

                  <a href="#" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">👑 VIP Escorts</a>            <p className="text-xl text-gray-600">

                  <a href="#" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">✨ Premium Models</a>              Showing {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''}

                  <a href="#" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🎓 College Girls</a>            </p>

                  <a href="#" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🏠 Housewife Escorts</a>          </div>

                  <a href="#" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">👸 Russian Escorts</a>

                </div>          <motion.div

              </div>            variants={containerVariants}

                          initial="hidden"

              <div className="p-6">            animate="visible"

                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">🔗 Quick Links</h3>            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"

                <div className="space-y-3">          >

                  <a href="/" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📋 Home</a>            {filteredServices.map((service) => (

                  <a href="/services" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📋 All Services</a>              <motion.div

                  <a href="/gallery" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📸 Gallery</a>                key={service.id}

                  <a href="/locations" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📍 Service Areas</a>                variants={itemVariants}

                  <a href="/contact" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📞 Contact Us</a>                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-pink-100"

                  <a href="/about" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">ℹ️ About Us</a>              >

                </div>                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              </div>                

                              <div className="relative z-10">

              <div className="p-6">                  <div className="text-center mb-6">

                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">📞 Contact Information</h3>                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">

                <div className="space-y-4">                      {service.icon}

                  <div className="flex items-center space-x-3 p-3">                    </div>

                    <span className="text-2xl">📞</span>                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">

                    <a href="tel:+919893636369" className="text-yellow-200 hover:text-yellow-100 font-bold text-lg">+91 9893636369</a>                      {service.title}

                  </div>                    </h3>

                  <div className="flex items-center space-x-3 p-3">                    <p className="text-gray-600 leading-relaxed mb-4">

                    <span className="text-2xl">💬</span>                      {service.description}

                    <a href="https://wa.me/919893636369" className="text-green-200 hover:text-green-100 font-bold text-lg">WhatsApp Available</a>                    </p>

                  </div>                  </div>

                  <div className="flex items-center space-x-3 p-3">

                    <span className="text-2xl">✉️</span>                  <div className="flex items-center justify-between">

                    <a href="mailto:contact@indoreescortservice.com" className="text-purple-200 hover:text-purple-100 font-bold text-lg">Email Us</a>                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-100 to-blue-100 text-pink-700 border border-pink-200">

                  </div>                      {service.category}

                  <div className="flex items-center space-x-3 p-3">                    </span>

                    <span className="text-2xl">📍</span>                    <div className="flex items-center space-x-1 text-yellow-500">

                    <span className="text-pink-200 font-bold text-lg">All Indore Areas</span>                      {[...Array(5)].map((_, i) => (

                  </div>                        <FaStar key={i} className="text-sm" />

                  <div className="flex items-center space-x-3 p-3">                      ))}

                    <span className="text-2xl">🕒</span>                    </div>

                    <span className="text-orange-200 font-bold text-lg">24/7 Available</span>                  </div>

                  </div>

                </div>                  <div className="mt-6 flex space-x-3">

              </div>                    <button className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">

            </div>                      <FaPhone className="inline mr-2" />

                                  Book Now

            {/* Footer Bottom */}                    </button>

            <div className="border-t-2 border-pink-400/40 mt-16 pt-10 text-center">                    <button className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">

              <p className="text-yellow-200 mb-6 font-bold text-xl leading-relaxed">                      <FaWhatsapp className="text-xl" />

                © 2024 Indore Premium Escort Service. All rights reserved. 🏆                    </button>

              </p>                  </div>

              <div className="flex flex-wrap justify-center gap-6 mb-6">                </div>

                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold">✅ 24/7 Available</span>              </motion.div>

                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full font-bold">✅ 100% Verified</span>            ))}

                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-bold">✅ Complete Discretion</span>          </motion.div>

                <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-bold">✅ Premium Quality</span>

              </div>          {filteredServices.length === 0 && (

              <p className="text-pink-200 font-semibold text-lg">            <div className="text-center py-20">

                🔞 Professional escort services for adults only. Must be 18+ to use our services. 🔞              <div className="text-6xl mb-4"></div>

              </p>              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Services Found</h3>

            </div>              <p className="text-gray-600">Try selecting a different category</p>

          </div>            </div>

        </footer>          )}

        </div>

      </div>      </section>

    </>

  )      {/* CTA Section */}

}      <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Premium Services?
            </h2>
            <p className="text-xl mb-8 text-pink-100">
              Contact us now for personalized service recommendations and exclusive bookings
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
                <FaPhone className="mr-3" />
                Call Now: +91 9893636369
              </button>
              <button className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
                <FaWhatsapp className="mr-3" />
                WhatsApp Chat
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-1">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    Indore Escorts
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Premium escort services in Indore with complete discretion, professionalism, and satisfaction guaranteed. Your privacy and comfort are our top priorities.
                  </p>
                  
                  {/* Social Media Icons */}
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                      <FaFacebook className="text-white text-xl" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                      <FaTwitter className="text-white text-xl" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                      <FaInstagram className="text-white text-xl" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                      <FaLinkedin className="text-white text-xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-2xl font-bold mb-6 text-pink-400">Quick Links</h4>
                <ul className="space-y-3">
                  {['Home', 'Services', 'Gallery', 'About Us', 'Contact', 'Privacy Policy', 'Terms & Conditions', 'Booking'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-2xl font-bold mb-6 text-blue-400">Our Services</h4>
                <ul className="space-y-3">
                  {['VIP Escorts', 'College Girls', 'Celebrity Escorts', 'Russian Escorts', 'Model Escorts', 'Call Girls', 'Independent Escorts', 'Event Companions'].map((service) => (
                    <li key={service}>
                      <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-2xl font-bold mb-6 text-purple-400">Contact Info</h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-semibold mb-1">Phone</p>
                      <a href="tel:+919893636369" className="text-pink-400 hover:text-pink-300 transition-colors duration-300 font-bold">
                        +91 9893636369
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaWhatsapp className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-semibold mb-1">WhatsApp</p>
                      <a href="https://wa.me/919893636369" className="text-green-400 hover:text-green-300 transition-colors duration-300 font-bold">
                        Chat with us
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-semibold mb-1">Email</p>
                      <a href="mailto:info@indoreescorts.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-bold">
                        info@indoreescorts.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-semibold mb-1">Location</p>
                      <p className="text-purple-400 font-bold">Indore, Madhya Pradesh</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-semibold mb-1">Available</p>
                      <p className="text-orange-400 font-bold">24/7 Service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
                  <p>&copy; 2024 Indore Escorts. All rights reserved. | Designed with  for premium experiences</p>
                </div>
                <div className="flex items-center space-x-6 text-gray-400">
                  <a href="#" className="hover:text-pink-400 transition-colors duration-300">Privacy Policy</a>
                  <span>|</span>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
                  <span>|</span>
                  <a href="#" className="hover:text-purple-400 transition-colors duration-300">Disclaimer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
