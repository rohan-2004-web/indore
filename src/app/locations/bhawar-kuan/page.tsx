import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BhawarKuanPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "College Girls",
      image: "/images/service1.jpg",
      description: "Professional college companion services in Bhawar Kuan area"
    },
    {
      title: "Housewives",
      image: "/images/service2.jpg",
      description: "Discreet mature companion services near Bhawar Kuan intersection"
    },
    {
      title: "Call Girls",
      image: "/images/service3.jpg",
      description: "Premium call girl services in Bhawar Kuan commercial zone"
    },
    {
      title: "Celebrity",
      image: "/images/service4.jpg",
      description: "Exclusive celebrity companion services in Bhawar Kuan"
    },
    {
      title: "Air Hostess",
      image: "/images/service5.jpg",
      description: "Sophisticated air hostess companion services near Bhawar Kuan"
    },
    {
      title: "Models",
      image: "/images/service6.jpg",
      description: "Professional model companion services in Bhawar Kuan area"
    },
    {
      title: "Independent Girls",
      image: "/images/service7.jpg",
      description: "Independent companion services in Bhawar Kuan business district"
    },
    {
      title: "Russian Girls",
      image: "/images/service8.jpg",
      description: "Exotic Russian companion services near Bhawar Kuan"
    },
    {
      title: "VIP Girls",
      image: "/images/service9.jpg",
      description: "VIP companion services in prestigious Bhawar Kuan areas"
    },
    {
      title: "Hotel Service",
      image: "/images/service10.jpg",
      description: "Hotel companion services near Bhawar Kuan business hotels"
    },
    {
      title: "Home Service",
      image: "/images/service11.jpg",
      description: "Private home companion services in Bhawar Kuan residential areas"
    },
    {
      title: "Party Girls",
      image: "/images/service12.jpg",
      description: "Party companion services for Bhawar Kuan social events"
    },
    {
      title: "Massage Service",
      image: "/images/service13.jpg",
      description: "Relaxing massage services in Bhawar Kuan commercial area"
    },
    {
      title: "Overnight Service",
      image: "/images/service14.jpg",
      description: "Overnight companion services in Bhawar Kuan area"
    },
    {
      title: "Dance Service",
      image: "/images/service15.jpg",
      description: "Professional dance companion services in Bhawar Kuan"
    },
    {
      title: "Girlfriend Experience",
      image: "/images/service16.jpg",
      description: "Intimate girlfriend experience services near Bhawar Kuan"
    },
    {
      title: "Travel Companion",
      image: "/images/service17.jpg",
      description: "Travel companion services from Bhawar Kuan location"
    },
    {
      title: "High Profile",
      image: "/images/service18.jpg",
      description: "High profile companion services in upscale Bhawar Kuan areas"
    },
    {
      title: "Corporate Service",
      image: "/images/service19.jpg",
      description: "Corporate event companion services in Bhawar Kuan business district"
    },
    {
      title: "24/7 Service",
      image: "/images/service20.jpg",
      description: "Round-the-clock companion services in Bhawar Kuan area"
    }
  ];

  const faqs = [
    {
      question: "Are escort services available 24/7 in Bhawar Kuan?",
      answer: "Yes, we provide round-the-clock escort services in Bhawar Kuan. Our premium companions are available for bookings throughout the day and night in this major intersection area."
    },
    {
      question: "What types of escort services are offered in Bhawar Kuan?",
      answer: "We offer comprehensive escort services in Bhawar Kuan including college girls, housewives, models, air hostess companions, and VIP services tailored to the business and commercial environment."
    },
    {
      question: "Is discretion maintained for escorts in Bhawar Kuan?",
      answer: "Absolutely. We maintain complete discretion and privacy for all our escort services in Bhawar Kuan. Client confidentiality is our top priority in this busy commercial intersection."
    },
    {
      question: "How to book escort services in Bhawar Kuan area?",
      answer: "Booking escort services in Bhawar Kuan is simple through our website or direct contact. We ensure quick response times for bookings in the Bhawar Kuan business district."
    },
    {
      question: "What makes Bhawar Kuan escort services special?",
      answer: "Our Bhawar Kuan escort services are designed for the major intersection and business environment, offering companions who understand the area's commercial and transit culture."
    },
    {
      question: "Are outcall services available to Bhawar Kuan hotels?",
      answer: "Yes, we provide outcall escort services to all major hotels and accommodations in the Bhawar Kuan area, ensuring convenient and discreet meetings."
    },
    {
      question: "What is the booking process for escorts in Bhawar Kuan?",
      answer: "Our Bhawar Kuan escort booking process is straightforward - select your preferred companion, choose the service duration, and we handle the rest with complete professionalism."
    },
    {
      question: "Do you provide escort services for Bhawar Kuan business events?",
      answer: "Yes, we offer specialized escort services for business meetings, corporate events, and social gatherings in the Bhawar Kuan commercial district."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
              Indore Escorts
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-rose-500/10 to-pink-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-pink-600 mb-6">
              Premium Escorts in Bhawar Kuan
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Experience luxury companion services in Bhawar Kuan's major intersection. Professional escorts available for business meetings, social events, and transit companionship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-xl">
                Book Now
              </Link>
              <Link href="/services" className="bg-white/80 text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white border-2 border-red-600 transform hover:scale-105 transition-all shadow-xl">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bhawar Kuan Features */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
            Why Choose Bhawar Kuan Location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🚦</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Major Intersection</h3>
              <p className="text-gray-600">Prime location at a major intersection with excellent connectivity to all parts of Indore, ideal for companion services.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Business Hub</h3>
              <p className="text-gray-600">Bustling business area with corporate offices and commercial establishments, perfect for professional companion services.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Strategic Location</h3>
              <p className="text-gray-600">Central position with easy access to hotels, restaurants, and entertainment venues throughout Indore.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
            Our Premium Services in Bhawar Kuan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all hover:shadow-2xl">
                <div className="relative h-80">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link href="/contact" className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-red-600 hover:to-pink-600 transition-all inline-block">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
            Frequently Asked Questions - Bhawar Kuan
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full bg-white/80 rounded-2xl p-6 text-left shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <span className="text-red-600 text-2xl">{openFaq === index ? '−' : '+'}</span>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="mt-2 bg-white/60 rounded-2xl p-6 shadow-inner">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-900 via-rose-900 to-pink-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bhawar Kuan Escorts</h3>
              <p className="text-red-200 mb-4">Premium escort services in Bhawar Kuan intersection with professional companions for all occasions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-300">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-red-200 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-red-200 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="text-red-200 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-red-200 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-300">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-red-200">VIP Escorts</span></li>
                <li><span className="text-red-200">Hotel Services</span></li>
                <li><span className="text-red-200">Party Companions</span></li>
                <li><span className="text-red-200">24/7 Availability</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-300">Bhawar Kuan Area</h4>
              <ul className="space-y-2">
                <li><span className="text-red-200">Major Intersection</span></li>
                <li><span className="text-red-200">Business Centers</span></li>
                <li><span className="text-red-200">Hotels</span></li>
                <li><span className="text-red-200">Commercial District</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-red-700 mt-8 pt-8 text-center">
            <p className="text-red-200">&copy; 2024 Indore Escorts - Bhawar Kuan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}