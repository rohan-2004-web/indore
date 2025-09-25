import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PalasiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "College Girls",
      image: "/images/service1.jpg",
      description: "Professional college companion services in Palasia area"
    },
    {
      title: "Housewives",
      image: "/images/service2.jpg",
      description: "Discreet mature companion services near Palasia shopping district"
    },
    {
      title: "Call Girls",
      image: "/images/service3.jpg",
      description: "Premium call girl services in Palasia commercial area"
    },
    {
      title: "Celebrity",
      image: "/images/service4.jpg",
      description: "Exclusive celebrity companion services in Palasia"
    },
    {
      title: "Air Hostess",
      image: "/images/service5.jpg",
      description: "Sophisticated air hostess companion services near Palasia"
    },
    {
      title: "Models",
      image: "/images/service6.jpg",
      description: "Professional model companion services in Palasia area"
    },
    {
      title: "Independent Girls",
      image: "/images/service7.jpg",
      description: "Independent companion services in Palasia shopping district"
    },
    {
      title: "Russian Girls",
      image: "/images/service8.jpg",
      description: "Exotic Russian companion services near Palasia"
    },
    {
      title: "VIP Girls",
      image: "/images/service9.jpg",
      description: "VIP companion services in exclusive Palasia areas"
    },
    {
      title: "Hotel Service",
      image: "/images/service10.jpg",
      description: "Hotel companion services near Palasia business hotels"
    },
    {
      title: "Home Service",
      image: "/images/service11.jpg",
      description: "Private home companion services in Palasia residential areas"
    },
    {
      title: "Party Girls",
      image: "/images/service12.jpg",
      description: "Party companion services for Palasia social events"
    },
    {
      title: "Massage Service",
      image: "/images/service13.jpg",
      description: "Relaxing massage services in Palasia commercial zone"
    },
    {
      title: "Overnight Service",
      image: "/images/service14.jpg",
      description: "Overnight companion services in Palasia area"
    },
    {
      title: "Dance Service",
      image: "/images/service15.jpg",
      description: "Professional dance companion services in Palasia"
    },
    {
      title: "Girlfriend Experience",
      image: "/images/service16.jpg",
      description: "Intimate girlfriend experience services near Palasia"
    },
    {
      title: "Travel Companion",
      image: "/images/service17.jpg",
      description: "Travel companion services from Palasia location"
    },
    {
      title: "High Profile",
      image: "/images/service18.jpg",
      description: "High profile companion services in upscale Palasia areas"
    },
    {
      title: "Corporate Service",
      image: "/images/service19.jpg",
      description: "Corporate event companion services in Palasia business district"
    },
    {
      title: "24/7 Service",
      image: "/images/service20.jpg",
      description: "Round-the-clock companion services in Palasia area"
    }
  ];

  const faqs = [
    {
      question: "Are escort services available 24/7 in Palasia?",
      answer: "Yes, we provide round-the-clock escort services in Palasia. Our premium companions are available for bookings throughout the day and night in the Palasia shopping district."
    },
    {
      question: "What types of escort services are offered in Palasia?",
      answer: "We offer comprehensive escort services in Palasia including college girls, housewives, models, air hostess companions, and VIP services tailored to the shopping and commercial environment."
    },
    {
      question: "Is discretion maintained for escorts in Palasia?",
      answer: "Absolutely. We maintain complete discretion and privacy for all our escort services in Palasia. Client confidentiality is our top priority in this busy commercial area."
    },
    {
      question: "How to book escort services in Palasia area?",
      answer: "Booking escort services in Palasia is simple through our website or direct contact. We ensure quick response times for bookings in the Palasia shopping district."
    },
    {
      question: "What makes Palasia escort services special?",
      answer: "Our Palasia escort services are designed for the shopping and commercial environment, offering companions who understand the area's business and retail culture."
    },
    {
      question: "Are outcall services available to Palasia hotels?",
      answer: "Yes, we provide outcall escort services to all major hotels and accommodations in the Palasia area, ensuring convenient and discreet meetings."
    },
    {
      question: "What is the booking process for escorts in Palasia?",
      answer: "Our Palasia escort booking process is straightforward - select your preferred companion, choose the service duration, and we handle the rest with complete professionalism."
    },
    {
      question: "Do you provide escort services for Palasia shopping events?",
      answer: "Yes, we offer specialized escort services for shopping events, business meetings, and social gatherings in the Palasia commercial district."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
              Indore Escorts
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-emerald-500/10 to-teal-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 mb-6">
              Premium Escorts in Palasia
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Experience luxury companion services in Palasia's premier shopping district. Professional escorts available for shopping tours, business meetings, and social events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-teal-700 transform hover:scale-105 transition-all shadow-xl">
                Book Now
              </Link>
              <Link href="/services" className="bg-white/80 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white border-2 border-green-600 transform hover:scale-105 transition-all shadow-xl">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Palasia Features */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
            Why Choose Palasia Location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🛍️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Shopping District</h3>
              <p className="text-gray-600">Premier shopping destination with luxury malls, boutiques, and commercial centers perfect for companion services.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Commercial Hub</h3>
              <p className="text-gray-600">Bustling commercial area with business centers, making it ideal for professional companion services.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Central Location</h3>
              <p className="text-gray-600">Strategically located in the heart of Indore with easy access to hotels, restaurants, and entertainment venues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
            Our Premium Services in Palasia
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
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link href="/contact" className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-600 hover:to-teal-600 transition-all inline-block">
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
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
            Frequently Asked Questions - Palasia
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
                    <span className="text-green-600 text-2xl">{openFaq === index ? '−' : '+'}</span>
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
      <footer className="bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Palasia Escorts</h3>
              <p className="text-green-200 mb-4">Premium escort services in Palasia shopping district with professional companions for all occasions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-300">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-green-200 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-green-200 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="text-green-200 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-green-200 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-300">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-green-200">VIP Escorts</span></li>
                <li><span className="text-green-200">Hotel Services</span></li>
                <li><span className="text-green-200">Party Companions</span></li>
                <li><span className="text-green-200">24/7 Availability</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-300">Palasia Area</h4>
              <ul className="space-y-2">
                <li><span className="text-green-200">Shopping Malls</span></li>
                <li><span className="text-green-200">Business Centers</span></li>
                <li><span className="text-green-200">Hotels</span></li>
                <li><span className="text-green-200">Commercial District</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="text-green-200">&copy; 2024 Indore Escorts - Palasia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}