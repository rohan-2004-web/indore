import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MGRoadPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "College Girls",
      image: "/images/service1.jpg",
      description: "Professional college companion services on MG Road commercial street"
    },
    {
      title: "Housewives",
      image: "/images/service2.jpg",
      description: "Discreet mature companion services near MG Road shopping area"
    },
    {
      title: "Call Girls",
      image: "/images/service3.jpg",
      description: "Premium call girl services on MG Road business district"
    },
    {
      title: "Celebrity",
      image: "/images/service4.jpg",
      description: "Exclusive celebrity companion services on MG Road"
    },
    {
      title: "Air Hostess",
      image: "/images/service5.jpg",
      description: "Sophisticated air hostess companion services near MG Road"
    },
    {
      title: "Models",
      image: "/images/service6.jpg",
      description: "Professional model companion services on MG Road area"
    },
    {
      title: "Independent Girls",
      image: "/images/service7.jpg",
      description: "Independent companion services on MG Road commercial street"
    },
    {
      title: "Russian Girls",
      image: "/images/service8.jpg",
      description: "Exotic Russian companion services near MG Road"
    },
    {
      title: "VIP Girls",
      image: "/images/service9.jpg",
      description: "VIP companion services in upscale MG Road areas"
    },
    {
      title: "Hotel Service",
      image: "/images/service10.jpg",
      description: "Hotel companion services near MG Road business hotels"
    },
    {
      title: "Home Service",
      image: "/images/service11.jpg",
      description: "Private home companion services in MG Road residential areas"
    },
    {
      title: "Party Girls",
      image: "/images/service12.jpg",
      description: "Party companion services for MG Road nightlife and events"
    },
    {
      title: "Massage Service",
      image: "/images/service13.jpg",
      description: "Relaxing massage services on busy MG Road area"
    },
    {
      title: "Overnight Service",
      image: "/images/service14.jpg",
      description: "Overnight companion services on MG Road area"
    },
    {
      title: "Dance Service",
      image: "/images/service15.jpg",
      description: "Professional dance companion services on MG Road"
    },
    {
      title: "Girlfriend Experience",
      image: "/images/service16.jpg",
      description: "Intimate girlfriend experience services near MG Road"
    },
    {
      title: "Travel Companion",
      image: "/images/service17.jpg",
      description: "Travel companion services from MG Road location"
    },
    {
      title: "High Profile",
      image: "/images/service18.jpg",
      description: "High profile companion services on premium MG Road areas"
    },
    {
      title: "Corporate Service",
      image: "/images/service19.jpg",
      description: "Corporate event companion services on MG Road business district"
    },
    {
      title: "24/7 Service",
      image: "/images/service20.jpg",
      description: "Round-the-clock companion services on MG Road area"
    }
  ];

  const faqs = [
    {
      question: "Are escort services available 24/7 on MG Road?",
      answer: "Yes, we provide round-the-clock escort services on MG Road. Our premium companions are available for bookings throughout the day and night on this major commercial street."
    },
    {
      question: "What types of escort services are offered on MG Road?",
      answer: "We offer comprehensive escort services on MG Road including college girls, housewives, models, air hostess companions, and VIP services tailored to the commercial and entertainment environment."
    },
    {
      question: "Is discretion maintained for escorts on MG Road?",
      answer: "Absolutely. We maintain complete discretion and privacy for all our escort services on MG Road. Client confidentiality is our top priority on this busy commercial street."
    },
    {
      question: "How to book escort services on MG Road area?",
      answer: "Booking escort services on MG Road is simple through our website or direct contact. We ensure quick response times for bookings on the MG Road commercial district."
    },
    {
      question: "What makes MG Road escort services special?",
      answer: "Our MG Road escort services are designed for the commercial and entertainment environment, offering companions who understand the vibrant nightlife and business culture of this area."
    },
    {
      question: "Are outcall services available to MG Road hotels?",
      answer: "Yes, we provide outcall escort services to all major hotels and accommodations on MG Road, ensuring convenient and discreet meetings."
    },
    {
      question: "What is the booking process for escorts on MG Road?",
      answer: "Our MG Road escort booking process is straightforward - select your preferred companion, choose the service duration, and we handle the rest with complete professionalism."
    },
    {
      question: "Do you provide escort services for MG Road nightlife events?",
      answer: "Yes, we offer specialized escort services for nightlife, entertainment events, and business gatherings on the vibrant MG Road commercial street."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Indore Escorts
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-green-500/10 to-teal-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 mb-6">
              Premium Escorts on MG Road
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Experience luxury companion services on MG Road's premier commercial street. Professional escorts available for shopping tours, business meetings, and nightlife entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all shadow-xl">
                Book Now
              </Link>
              <Link href="/services" className="bg-white/80 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white border-2 border-emerald-600 transform hover:scale-105 transition-all shadow-xl">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MG Road Features */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
            Why Choose MG Road Location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🛍️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Commercial Heart</h3>
              <p className="text-gray-600">Located on the main commercial street of Indore with premium shopping, dining, and entertainment venues.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌃</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vibrant Nightlife</h3>
              <p className="text-gray-600">Active nightlife scene with restaurants, bars, and entertainment venues, perfect for evening companion services.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Business Center</h3>
              <p className="text-gray-600">Major business district with corporate offices, banks, and commercial establishments ideal for professional services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
            Our Premium Services on MG Road
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
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link href="/contact" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-emerald-600 hover:to-teal-600 transition-all inline-block">
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
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
            Frequently Asked Questions - MG Road
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
                    <span className="text-emerald-600 text-2xl">{openFaq === index ? '−' : '+'}</span>
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
      <footer className="bg-gradient-to-r from-emerald-900 via-green-900 to-teal-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">MG Road Escorts</h3>
              <p className="text-emerald-200 mb-4">Premium escort services on MG Road commercial street with professional companions for all occasions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-emerald-300">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-emerald-200 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-emerald-200 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="text-emerald-200 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-emerald-200 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-emerald-300">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-emerald-200">VIP Escorts</span></li>
                <li><span className="text-emerald-200">Nightlife Companions</span></li>
                <li><span className="text-emerald-200">Shopping Tours</span></li>
                <li><span className="text-emerald-200">24/7 Availability</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-emerald-300">MG Road Area</h4>
              <ul className="space-y-2">
                <li><span className="text-emerald-200">Commercial Street</span></li>
                <li><span className="text-emerald-200">Shopping District</span></li>
                <li><span className="text-emerald-200">Nightlife Hub</span></li>
                <li><span className="text-emerald-200">Business Center</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-emerald-700 mt-8 pt-8 text-center">
            <p className="text-emerald-200">&copy; 2024 Indore Escorts - MG Road. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}