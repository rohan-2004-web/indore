import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AirportRoadPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "College Girls",
      image: "/images/service1.jpg",
      description: "Professional college companion services on Airport Road corridor"
    },
    {
      title: "Housewives",
      image: "/images/service2.jpg",
      description: "Discreet mature companion services near Airport Road area"
    },
    {
      title: "Call Girls",
      image: "/images/service3.jpg",
      description: "Premium call girl services on Airport Road business zone"
    },
    {
      title: "Celebrity",
      image: "/images/service4.jpg",
      description: "Exclusive celebrity companion services on Airport Road"
    },
    {
      title: "Air Hostess",
      image: "/images/service5.jpg",
      description: "Sophisticated air hostess companion services near Airport Road"
    },
    {
      title: "Models",
      image: "/images/service6.jpg",
      description: "Professional model companion services on Airport Road area"
    },
    {
      title: "Independent Girls",
      image: "/images/service7.jpg",
      description: "Independent companion services along Airport Road corridor"
    },
    {
      title: "Russian Girls",
      image: "/images/service8.jpg",
      description: "Exotic Russian companion services near Airport Road"
    },
    {
      title: "VIP Girls",
      image: "/images/service9.jpg",
      description: "VIP companion services in upscale Airport Road areas"
    },
    {
      title: "Hotel Service",
      image: "/images/service10.jpg",
      description: "Hotel companion services near Airport Road business hotels"
    },
    {
      title: "Home Service",
      image: "/images/service11.jpg",
      description: "Private home companion services in Airport Road residential areas"
    },
    {
      title: "Party Girls",
      image: "/images/service12.jpg",
      description: "Party companion services for Airport Road social events"
    },
    {
      title: "Massage Service",
      image: "/images/service13.jpg",
      description: "Relaxing massage services on Airport Road area"
    },
    {
      title: "Overnight Service",
      image: "/images/service14.jpg",
      description: "Overnight companion services on Airport Road area"
    },
    {
      title: "Dance Service",
      image: "/images/service15.jpg",
      description: "Professional dance companion services on Airport Road"
    },
    {
      title: "Girlfriend Experience",
      image: "/images/service16.jpg",
      description: "Intimate girlfriend experience services near Airport Road"
    },
    {
      title: "Travel Companion",
      image: "/images/service17.jpg",
      description: "Travel companion services from Airport Road location"
    },
    {
      title: "High Profile",
      image: "/images/service18.jpg",
      description: "High profile companion services on premium Airport Road areas"
    },
    {
      title: "Corporate Service",
      image: "/images/service19.jpg",
      description: "Corporate event companion services on Airport Road business district"
    },
    {
      title: "24/7 Service",
      image: "/images/service20.jpg",
      description: "Round-the-clock companion services on Airport Road area"
    }
  ];

  const faqs = [
    {
      question: "Are escort services available 24/7 on Airport Road?",
      answer: "Yes, we provide round-the-clock escort services on Airport Road. Our premium companions are available for bookings throughout the day and night on this major airport corridor."
    },
    {
      question: "What types of escort services are offered on Airport Road?",
      answer: "We offer comprehensive escort services on Airport Road including college girls, housewives, models, air hostess companions, and VIP services tailored to the airport and business travel environment."
    },
    {
      question: "Is discretion maintained for escorts on Airport Road?",
      answer: "Absolutely. We maintain complete discretion and privacy for all our escort services on Airport Road. Client confidentiality is our top priority on this major travel corridor."
    },
    {
      question: "How to book escort services on Airport Road area?",
      answer: "Booking escort services on Airport Road is simple through our website or direct contact. We ensure quick response times for bookings on the Airport Road corridor."
    },
    {
      question: "What makes Airport Road escort services special?",
      answer: "Our Airport Road escort services are designed for the travel and business environment, offering companions who understand the needs of travelers and business professionals."
    },
    {
      question: "Are outcall services available to Airport Road hotels?",
      answer: "Yes, we provide outcall escort services to all major hotels and accommodations on Airport Road, ensuring convenient and discreet meetings for travelers."
    },
    {
      question: "What is the booking process for escorts on Airport Road?",
      answer: "Our Airport Road escort booking process is straightforward - select your preferred companion, choose the service duration, and we handle the rest with complete professionalism."
    },
    {
      question: "Do you provide escort services for Airport Road business travelers?",
      answer: "Yes, we offer specialized escort services for business travelers, corporate meetings, and travel companionship along the Airport Road corridor."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-zinc-600">
              Indore Escorts
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-slate-600 transition-colors font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-slate-600 transition-colors font-medium">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-slate-600 transition-colors font-medium">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-slate-600 transition-colors font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 via-gray-500/10 to-zinc-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-gray-500 to-zinc-600 mb-6">
              Premium Escorts on Airport Road
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Experience luxury companion services on Airport Road's travel corridor. Professional escorts available for business travelers, airport transfers, and corporate meetings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-slate-700 hover:to-zinc-700 transform hover:scale-105 transition-all shadow-xl">
                Book Now
              </Link>
              <Link href="/services" className="bg-white/80 text-slate-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white border-2 border-slate-600 transform hover:scale-105 transition-all shadow-xl">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Road Features */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-zinc-600">
            Why Choose Airport Road Location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">✈️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Airport Corridor</h3>
              <p className="text-gray-600">Strategic location on the main airport road with convenient access for travelers and business visitors to Indore.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-zinc-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Business Hotels</h3>
              <p className="text-gray-600">Close proximity to business hotels and accommodations, ideal for serving corporate travelers and business professionals.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-zinc-500 to-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🚗</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Easy Transit</h3>
              <p className="text-gray-600">Excellent connectivity and transportation links making it convenient for both local and visiting clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-zinc-600">
            Our Premium Services on Airport Road
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link href="/contact" className="bg-gradient-to-r from-slate-500 to-zinc-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-slate-600 hover:to-zinc-600 transition-all inline-block">
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
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-zinc-600">
            Frequently Asked Questions - Airport Road
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
                    <span className="text-slate-600 text-2xl">{openFaq === index ? '−' : '+'}</span>
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
      <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-zinc-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Airport Road Escorts</h3>
              <p className="text-slate-200 mb-4">Premium escort services on Airport Road corridor with professional companions for travelers and business professionals.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-300">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-slate-200 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-slate-200 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="text-slate-200 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-slate-200 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-300">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-slate-200">VIP Escorts</span></li>
                <li><span className="text-slate-200">Travel Companions</span></li>
                <li><span className="text-slate-200">Business Services</span></li>
                <li><span className="text-slate-200">24/7 Availability</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-300">Airport Road Area</h4>
              <ul className="space-y-2">
                <li><span className="text-slate-200">Airport Corridor</span></li>
                <li><span className="text-slate-200">Business Hotels</span></li>
                <li><span className="text-slate-200">Travel Hub</span></li>
                <li><span className="text-slate-200">Transit Services</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-200">&copy; 2024 Indore Escorts - Airport Road. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}