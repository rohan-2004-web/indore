'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TreasureIslandPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "College Girls",
      image: "/images/service1.jpg",
      description: "Professional college companion services at Treasure Island mall area"
    },
    {
      title: "Housewives",
      image: "/images/service2.jpg",
      description: "Discreet mature companion services near Treasure Island shopping complex"
    },
    {
      title: "Call Girls",
      image: "/images/service3.jpg",
      description: "Premium call girl services at Treasure Island entertainment zone"
    },
    {
      title: "Celebrity",
      image: "/images/service4.jpg",
      description: "Exclusive celebrity companion services at Treasure Island"
    },
    {
      title: "Air Hostess",
      image: "/images/service5.jpg",
      description: "Sophisticated air hostess companion services near Treasure Island"
    },
    {
      title: "Models",
      image: "/images/service6.jpg",
      description: "Professional model companion services at Treasure Island area"
    },
    {
      title: "Independent Girls",
      image: "/images/service7.jpg",
      description: "Independent companion services at Treasure Island shopping complex"
    },
    {
      title: "Russian Girls",
      image: "/images/service8.jpg",
      description: "Exotic Russian companion services near Treasure Island"
    },
    {
      title: "VIP Girls",
      image: "/images/service9.jpg",
      description: "VIP companion services in upscale Treasure Island areas"
    },
    {
      title: "Hotel Service",
      image: "/images/service10.jpg",
      description: "Hotel companion services near Treasure Island entertainment complex"
    },
    {
      title: "Home Service",
      image: "/images/service11.jpg",
      description: "Private home companion services in Treasure Island residential areas"
    },
    {
      title: "Party Girls",
      image: "/images/service12.jpg",
      description: "Party companion services for Treasure Island entertainment events"
    },
    {
      title: "Massage Service",
      image: "/images/service13.jpg",
      description: "Relaxing massage services at Treasure Island mall area"
    },
    {
      title: "Overnight Service",
      image: "/images/service14.jpg",
      description: "Overnight companion services at Treasure Island area"
    },
    {
      title: "Dance Service",
      image: "/images/service15.jpg",
      description: "Professional dance companion services at Treasure Island"
    },
    {
      title: "Girlfriend Experience",
      image: "/images/service16.jpg",
      description: "Intimate girlfriend experience services near Treasure Island"
    },
    {
      title: "Travel Companion",
      image: "/images/service17.jpg",
      description: "Travel companion services from Treasure Island location"
    },
    {
      title: "High Profile",
      image: "/images/service18.jpg",
      description: "High profile companion services at premium Treasure Island areas"
    },
    {
      title: "Corporate Service",
      image: "/images/service19.jpg",
      description: "Corporate event companion services at Treasure Island business areas"
    },
    {
      title: "24/7 Service",
      image: "/images/service20.jpg",
      description: "Round-the-clock companion services at Treasure Island area"
    }
  ];

  const faqs = [
    {
      question: "Are escort services available 24/7 at Treasure Island?",
      answer: "Yes, we provide round-the-clock escort services at Treasure Island. Our premium companions are available for bookings throughout the day and night at this popular entertainment complex."
    },
    {
      question: "What types of escort services are offered at Treasure Island?",
      answer: "We offer comprehensive escort services at Treasure Island including college girls, housewives, models, air hostess companions, and VIP services tailored to the shopping and entertainment environment."
    },
    {
      question: "Is discretion maintained for escorts at Treasure Island?",
      answer: "Absolutely. We maintain complete discretion and privacy for all our escort services at Treasure Island. Client confidentiality is our top priority at this busy entertainment complex."
    },
    {
      question: "How to book escort services at Treasure Island area?",
      answer: "Booking escort services at Treasure Island is simple through our website or direct contact. We ensure quick response times for bookings at the Treasure Island mall complex."
    },
    {
      question: "What makes Treasure Island escort services special?",
      answer: "Our Treasure Island escort services are designed for the entertainment and shopping environment, offering companions who understand the recreational and social culture of this popular destination."
    },
    {
      question: "Are outcall services available to Treasure Island area hotels?",
      answer: "Yes, we provide outcall escort services to all accommodations and hotels near Treasure Island, ensuring convenient and discreet meetings."
    },
    {
      question: "What is the booking process for escorts at Treasure Island?",
      answer: "Our Treasure Island escort booking process is straightforward - select your preferred companion, choose the service duration, and we handle the rest with complete professionalism."
    },
    {
      question: "Do you provide escort services for Treasure Island entertainment events?",
      answer: "Yes, we offer specialized escort services for shopping tours, entertainment events, and social gatherings at the Treasure Island complex."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
              Indore Escorts
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-violet-600 transition-colors font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-violet-600 transition-colors font-medium">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-violet-600 transition-colors font-medium">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-violet-600 transition-colors font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-purple-500/10 to-fuchsia-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-600 mb-6">
              Premium Escorts at Treasure Island
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Experience luxury companion services at Treasure Island entertainment complex. Professional escorts available for shopping tours, entertainment events, and social gatherings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-violet-700 hover:to-fuchsia-700 transform hover:scale-105 transition-all shadow-xl">
                Book Now
              </Link>
              <Link href="/services" className="bg-white/80 text-violet-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white border-2 border-violet-600 transform hover:scale-105 transition-all shadow-xl">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Treasure Island Features */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
            Why Choose Treasure Island Location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏪</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Entertainment Complex</h3>
              <p className="text-gray-600">Premier entertainment and shopping destination with diverse attractions, perfect for companion and recreational services.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎭</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Social Hub</h3>
              <p className="text-gray-600">Vibrant social destination with dining, entertainment, and leisure facilities ideal for companion services.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🛍️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Shopping Destination</h3>
              <p className="text-gray-600">Popular shopping complex with retail stores, brands, and commercial spaces perfect for shopping companion services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
            Our Premium Services at Treasure Island
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
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-900/70 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link href="/contact" className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-violet-600 hover:to-fuchsia-600 transition-all inline-block">
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
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
            Frequently Asked Questions - Treasure Island
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
                    <span className="text-violet-600 text-2xl">{openFaq === index ? '−' : '+'}</span>
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
      <footer className="bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Treasure Island Escorts</h3>
              <p className="text-violet-200 mb-4">Premium escort services at Treasure Island entertainment complex with professional companions for all occasions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-violet-300">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-violet-200 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-violet-200 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="text-violet-200 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-violet-200 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-violet-300">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-violet-200">VIP Escorts</span></li>
                <li><span className="text-violet-200">Shopping Companions</span></li>
                <li><span className="text-violet-200">Entertainment Services</span></li>
                <li><span className="text-violet-200">24/7 Availability</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-violet-300">Treasure Island Area</h4>
              <ul className="space-y-2">
                <li><span className="text-violet-200">Entertainment Complex</span></li>
                <li><span className="text-violet-200">Shopping Mall</span></li>
                <li><span className="text-violet-200">Social Hub</span></li>
                <li><span className="text-violet-200">Recreation Center</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-violet-700 mt-8 pt-8 text-center">
            <p className="text-violet-200">&copy; 2024 Indore Escorts - Treasure Island. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}