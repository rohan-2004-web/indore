import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RauPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "College Girls",
      image: "/images/service1.jpg",
      description: "Professional college companion services in Rau suburban area"
    },
    {
      title: "Housewives",
      image: "/images/service2.jpg",
      description: "Discreet mature companion services in Rau residential area"
    },
    {
      title: "Call Girls",
      image: "/images/service3.jpg",
      description: "Premium call girl services in Rau suburban locality"
    },
    {
      title: "Celebrity",
      image: "/images/service4.jpg",
      description: "Exclusive celebrity companion services in Rau"
    },
    {
      title: "Air Hostess",
      image: "/images/service5.jpg",
      description: "Sophisticated air hostess companion services near Rau"
    },
    {
      title: "Models",
      image: "/images/service6.jpg",
      description: "Professional model companion services in Rau area"
    },
    {
      title: "Independent Girls",
      image: "/images/service7.jpg",
      description: "Independent companion services in Rau suburban district"
    },
    {
      title: "Russian Girls",
      image: "/images/service8.jpg",
      description: "Exotic Russian companion services near Rau"
    },
    {
      title: "VIP Girls",
      image: "/images/service9.jpg",
      description: "VIP companion services in upscale Rau areas"
    },
    {
      title: "Hotel Service",
      image: "/images/service10.jpg",
      description: "Hotel companion services near Rau accommodation facilities"
    },
    {
      title: "Home Service",
      image: "/images/service11.jpg",
      description: "Private home companion services in Rau residential areas"
    },
    {
      title: "Party Girls",
      image: "/images/service12.jpg",
      description: "Party companion services for Rau social events"
    },
    {
      title: "Massage Service",
      image: "/images/service13.jpg",
      description: "Relaxing massage services in peaceful Rau area"
    },
    {
      title: "Overnight Service",
      image: "/images/service14.jpg",
      description: "Overnight companion services in Rau area"
    },
    {
      title: "Dance Service",
      image: "/images/service15.jpg",
      description: "Professional dance companion services in Rau"
    },
    {
      title: "Girlfriend Experience",
      image: "/images/service16.jpg",
      description: "Intimate girlfriend experience services near Rau"
    },
    {
      title: "Travel Companion",
      image: "/images/service17.jpg",
      description: "Travel companion services from Rau location"
    },
    {
      title: "High Profile",
      image: "/images/service18.jpg",
      description: "High profile companion services in developed Rau areas"
    },
    {
      title: "Corporate Service",
      image: "/images/service19.jpg",
      description: "Corporate event companion services in Rau suburban area"
    },
    {
      title: "24/7 Service",
      image: "/images/service20.jpg",
      description: "Round-the-clock companion services in Rau area"
    }
  ];

  const faqs = [
    {
      question: "Are escort services available 24/7 in Rau?",
      answer: "Yes, we provide round-the-clock escort services in Rau. Our premium companions are available for bookings throughout the day and night in this peaceful suburban area."
    },
    {
      question: "What types of escort services are offered in Rau?",
      answer: "We offer comprehensive escort services in Rau including college girls, housewives, models, air hostess companions, and VIP services tailored to the suburban and residential environment."
    },
    {
      question: "Is discretion maintained for escorts in Rau?",
      answer: "Absolutely. We maintain complete discretion and privacy for all our escort services in Rau. Client confidentiality is our top priority in this quiet suburban locality."
    },
    {
      question: "How to book escort services in Rau area?",
      answer: "Booking escort services in Rau is simple through our website or direct contact. We ensure quick response times for bookings in the Rau suburban area."
    },
    {
      question: "What makes Rau escort services special?",
      answer: "Our Rau escort services are designed for the suburban and residential environment, offering companions who appreciate the peaceful and private nature of this area."
    },
    {
      question: "Are outcall services available to Rau accommodations?",
      answer: "Yes, we provide outcall escort services to all accommodations and residential areas in Rau, ensuring convenient and discreet meetings."
    },
    {
      question: "What is the booking process for escorts in Rau?",
      answer: "Our Rau escort booking process is straightforward - select your preferred companion, choose the service duration, and we handle the rest with complete professionalism."
    },
    {
      question: "Do you provide escort services for Rau residential events?",
      answer: "Yes, we offer specialized escort services for private events, gatherings, and social occasions in the Rau suburban area."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Indore Escorts
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-violet-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-600 mb-6">
              Premium Escorts in Rau
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Experience luxury companion services in Rau's peaceful suburban environment. Professional escorts available for private meetings, residential visits, and intimate companionship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all shadow-xl">
                Book Now
              </Link>
              <Link href="/services" className="bg-white/80 text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white border-2 border-indigo-600 transform hover:scale-105 transition-all shadow-xl">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rau Features */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Why Choose Rau Location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Suburban Peace</h3>
              <p className="text-gray-600">Quiet suburban area offering privacy and discretion away from the city's hustle, ideal for intimate companion services.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌳</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Natural Environment</h3>
              <p className="text-gray-600">Green and peaceful surroundings providing a relaxing atmosphere for quality time with professional companions.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Privacy & Discretion</h3>
              <p className="text-gray-600">Residential area ensuring complete privacy and discretion for all our premium escort services and client meetings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Our Premium Services in Rau
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
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link href="/contact" className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-indigo-600 hover:to-purple-600 transition-all inline-block">
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
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Frequently Asked Questions - Rau
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
                    <span className="text-indigo-600 text-2xl">{openFaq === index ? '−' : '+'}</span>
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
      <footer className="bg-gradient-to-r from-indigo-900 via-violet-900 to-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Rau Escorts</h3>
              <p className="text-indigo-200 mb-4">Premium escort services in Rau suburban area with professional companions for private occasions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-300">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-indigo-200 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-indigo-200 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="text-indigo-200 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-indigo-200 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-300">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-indigo-200">VIP Escorts</span></li>
                <li><span className="text-indigo-200">Home Services</span></li>
                <li><span className="text-indigo-200">Private Companions</span></li>
                <li><span className="text-indigo-200">24/7 Availability</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-300">Rau Area</h4>
              <ul className="space-y-2">
                <li><span className="text-indigo-200">Suburban Peace</span></li>
                <li><span className="text-indigo-200">Residential Areas</span></li>
                <li><span className="text-indigo-200">Natural Environment</span></li>
                <li><span className="text-indigo-200">Private Locations</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-indigo-700 mt-8 pt-8 text-center">
            <p className="text-indigo-200">&copy; 2024 Indore Escorts - Rau. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}