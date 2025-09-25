import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BombayHospitalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "College Girls",
      image: "/images/service1.jpg",
      description: "Professional college companion services near Bombay Hospital area"
    },
    {
      title: "Housewives",
      image: "/images/service2.jpg",
      description: "Discreet mature companion services in Bombay Hospital vicinity"
    },
    {
      title: "Call Girls",
      image: "/images/service3.jpg",
      description: "Premium call girl services near Bombay Hospital medical area"
    },
    {
      title: "Celebrity",
      image: "/images/service4.jpg",
      description: "Exclusive celebrity companion services in Bombay Hospital"
    },
    {
      title: "Air Hostess",
      image: "/images/service5.jpg",
      description: "Sophisticated air hostess companion services near Bombay Hospital"
    },
    {
      title: "Models",
      image: "/images/service6.jpg",
      description: "Professional model companion services in Bombay Hospital area"
    },
    {
      title: "Independent Girls",
      image: "/images/service7.jpg",
      description: "Independent companion services near Bombay Hospital medical district"
    },
    {
      title: "Russian Girls",
      image: "/images/service8.jpg",
      description: "Exotic Russian companion services near Bombay Hospital"
    },
    {
      title: "VIP Girls",
      image: "/images/service9.jpg",
      description: "VIP companion services in upscale Bombay Hospital areas"
    },
    {
      title: "Hotel Service",
      image: "/images/service10.jpg",
      description: "Hotel companion services near Bombay Hospital accommodation"
    },
    {
      title: "Home Service",
      image: "/images/service11.jpg",
      description: "Private home companion services in Bombay Hospital residential areas"
    },
    {
      title: "Party Girls",
      image: "/images/service12.jpg",
      description: "Party companion services for Bombay Hospital area events"
    },
    {
      title: "Massage Service",
      image: "/images/service13.jpg",
      description: "Relaxing massage services in Bombay Hospital medical area"
    },
    {
      title: "Overnight Service",
      image: "/images/service14.jpg",
      description: "Overnight companion services in Bombay Hospital area"
    },
    {
      title: "Dance Service",
      image: "/images/service15.jpg",
      description: "Professional dance companion services in Bombay Hospital"
    },
    {
      title: "Girlfriend Experience",
      image: "/images/service16.jpg",
      description: "Intimate girlfriend experience services near Bombay Hospital"
    },
    {
      title: "Travel Companion",
      image: "/images/service17.jpg",
      description: "Travel companion services from Bombay Hospital location"
    },
    {
      title: "High Profile",
      image: "/images/service18.jpg",
      description: "High profile companion services in medical Bombay Hospital areas"
    },
    {
      title: "Corporate Service",
      image: "/images/service19.jpg",
      description: "Corporate event companion services in Bombay Hospital vicinity"
    },
    {
      title: "24/7 Service",
      image: "/images/service20.jpg",
      description: "Round-the-clock companion services in Bombay Hospital area"
    }
  ];

  const faqs = [
    {
      question: "Are escort services available 24/7 near Bombay Hospital?",
      answer: "Yes, we provide round-the-clock escort services near Bombay Hospital. Our premium companions are available for bookings throughout the day and night in this medical district area."
    },
    {
      question: "What types of escort services are offered near Bombay Hospital?",
      answer: "We offer comprehensive escort services near Bombay Hospital including college girls, housewives, models, air hostess companions, and VIP services tailored to the medical and professional environment."
    },
    {
      question: "Is discretion maintained for escorts near Bombay Hospital?",
      answer: "Absolutely. We maintain complete discretion and privacy for all our escort services near Bombay Hospital. Client confidentiality is our top priority in this professional medical area."
    },
    {
      question: "How to book escort services in Bombay Hospital area?",
      answer: "Booking escort services near Bombay Hospital is simple through our website or direct contact. We ensure quick response times for bookings in the Bombay Hospital medical district."
    },
    {
      question: "What makes Bombay Hospital escort services special?",
      answer: "Our Bombay Hospital escort services are designed for the medical and professional environment, offering companions who understand the area's healthcare and business culture."
    },
    {
      question: "Are outcall services available to Bombay Hospital area hotels?",
      answer: "Yes, we provide outcall escort services to all accommodations and hotels near Bombay Hospital, ensuring convenient and discreet meetings."
    },
    {
      question: "What is the booking process for escorts near Bombay Hospital?",
      answer: "Our Bombay Hospital area escort booking process is straightforward - select your preferred companion, choose the service duration, and we handle the rest with complete professionalism."
    },
    {
      question: "Do you provide escort services for Bombay Hospital area events?",
      answer: "Yes, we offer specialized escort services for medical conferences, professional meetings, and social gatherings in the Bombay Hospital vicinity."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Indore Escorts
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-teal-500/10 to-blue-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-600 mb-6">
              Premium Escorts near Bombay Hospital
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Experience luxury companion services near Bombay Hospital's medical district. Professional escorts available for healthcare professionals, medical conferences, and business meetings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105 transition-all shadow-xl">
                Book Now
              </Link>
              <Link href="/services" className="bg-white/80 text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white border-2 border-cyan-600 transform hover:scale-105 transition-all shadow-xl">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bombay Hospital Features */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            Why Choose Bombay Hospital Location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Medical Hub</h3>
              <p className="text-gray-600">Located near the prestigious medical district with access to healthcare professionals and medical facilities.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">👨‍⚕️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Environment</h3>
              <p className="text-gray-600">Catering to healthcare professionals, medical staff, and visitors in a respectful and professional manner.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Discreet Services</h3>
              <p className="text-gray-600">Understanding the sensitive nature of the medical environment, we provide completely discreet companion services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            Our Premium Services near Bombay Hospital
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
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-all inline-block">
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
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            Frequently Asked Questions - Bombay Hospital
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
                    <span className="text-cyan-600 text-2xl">{openFaq === index ? '−' : '+'}</span>
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
      <footer className="bg-gradient-to-r from-cyan-900 via-teal-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bombay Hospital Escorts</h3>
              <p className="text-cyan-200 mb-4">Premium escort services near Bombay Hospital medical district with professional companions for healthcare professionals.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-300">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-cyan-200 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-cyan-200 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="text-cyan-200 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-cyan-200 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-300">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-cyan-200">VIP Escorts</span></li>
                <li><span className="text-cyan-200">Professional Companions</span></li>
                <li><span className="text-cyan-200">Medical Conference Support</span></li>
                <li><span className="text-cyan-200">24/7 Availability</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-300">Bombay Hospital Area</h4>
              <ul className="space-y-2">
                <li><span className="text-cyan-200">Medical District</span></li>
                <li><span className="text-cyan-200">Healthcare Hub</span></li>
                <li><span className="text-cyan-200">Professional Environment</span></li>
                <li><span className="text-cyan-200">Discreet Services</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-700 mt-8 pt-8 text-center">
            <p className="text-cyan-200">&copy; 2024 Indore Escorts - Bombay Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}