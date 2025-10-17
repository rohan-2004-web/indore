'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import EscortServicesContent from './components/EscortServicesContent';

export default function ServicesPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I book premium escort services in Indore?",
      answer: "Booking is simple and discreet. You can call us directly at +91 9372662471, send a WhatsApp message, or email us. Our booking team is available 24/7 to assist you with selecting the perfect companion based on your preferences and requirements."
    },
    {
      question: "Are all your escorts verified and professional?",
      answer: "Yes, absolutely! All our escorts are 100% verified, professionally trained, and thoroughly background-checked. We ensure they meet our high standards of elegance, sophistication, and discretion. Every companion is genuine and committed to providing exceptional service."
    },
    {
      question: "What areas in Indore do you provide services?",
      answer: "We cover all major areas of Indore including Vijay Nagar, AB Road, Palasia, Saket, MG Road, Ring Road, Bhawar Kuan, Airport Road, Scheme 78, Treasure Island, Bombay Hospital area, and Rajwada. Our escorts can visit hotels, homes, or meet at preferred locations."
    },
    {
      question: "What makes your escort service different?",
      answer: "Our service stands out through verified companions, complete discretion, 24/7 availability, professional training, and personalized matching. We focus on quality over quantity, ensuring each client receives premium service tailored to their specific needs and preferences."
    },
    {
      question: "How do you ensure privacy and discretion?",
      answer: "Privacy is our top priority. We use secure communication channels, maintain strict confidentiality, offer discreet meeting arrangements, and never share client information. All our escorts are trained in maintaining complete discretion throughout the entire experience."
    },
    {
      question: "What are your rates and payment options?",
      answer: "Our rates vary based on the service type, duration, and companion selected. We offer competitive pricing for all our services. Payment can be made through various methods including cash, digital payments, and bank transfers. Contact us for detailed pricing information."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Escort Services
            <span className="block text-yellow-300">in Indore</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional, verified, and discreet companions available 24/7 across all Indore locations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919372662471" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              📞 Call Now: +91 9372662471
            </a>
            <a 
              href="https://wa.me/919372662471" 
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              💬 WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wide range of professional escort services, all verified and available 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Celebrity Escorts", desc: "Star Quality Service", link: "/services/celebrity-escorts", color: "from-pink-500 to-pink-600" },
              { name: "VIP Escorts", desc: "Ultimate Luxury", link: "/services/vip-escorts", color: "from-blue-500 to-blue-600" },
              { name: "Premium Models", desc: "High-End Sophistication", link: "/services/premium-models", color: "from-orange-500 to-orange-600" },
              { name: "College Girls", desc: "Fresh & Young", link: "/services/college-girls", color: "from-purple-500 to-purple-600" },
              { name: "Housewife Escorts", desc: "Mature & Experienced", link: "/services/housewife-escorts", color: "from-green-500 to-green-600" },
              { name: "Punjabi Women", desc: "Cultural Beauty", link: "/services/punjabi-women", color: "from-red-500 to-red-600" },
              { name: "Slim Escorts", desc: "Perfect Figures", link: "/services/slim-escorts", color: "from-teal-500 to-teal-600" },
              { name: "Unsatisfied Bhabhi", desc: "Mature Companions", link: "/services/unsatisfied-bhabhi", color: "from-indigo-500 to-indigo-600" },
              { name: "Local Beauties", desc: "Indore Natives", link: "/services/local-beauties", color: "from-pink-500 to-pink-600" },
              { name: "Event Companion", desc: "Social Events", link: "/services/event-companion", color: "from-yellow-500 to-yellow-600" },
              { name: "Pink Special", desc: "Exclusive Service", link: "/services/pink-special", color: "from-rose-500 to-rose-600" },
              { name: "Unsatisfied Females", desc: "Premium Ladies", link: "/services/unsatisfied-females", color: "from-violet-500 to-violet-600" },
              { name: "Incall Escorts", desc: "Visit Our Location", link: "/services/incall-escorts", color: "from-blue-500 to-blue-600" },
              { name: "Mature Escorts", desc: "Experienced Ladies", link: "/services/mature-escorts", color: "from-amber-500 to-amber-600" },
              { name: "Young Girls", desc: "Youthful Energy", link: "/services/young-girls", color: "from-emerald-500 to-emerald-600" },
              { name: "Indore Escorts", desc: "Local Service", link: "/services/indore-escorts", color: "from-indigo-500 to-indigo-600" },
              { name: "Expert Services", desc: "Professional Level", link: "/services/expert-services", color: "from-cyan-500 to-cyan-600" },
              { name: "High Class Models", desc: "Elite Companions", link: "/services/high-class-models", color: "from-purple-500 to-purple-600" },
              { name: "Bold Girls", desc: "Confident Partners", link: "/services/bold-girls", color: "from-red-500 to-red-600" },
              { name: "Sexy Girls", desc: "Attractive Companions", link: "/services/sexy-girls", color: "from-pink-500 to-pink-600" }
            ].map((service, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-pink-100">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <a href={service.link} className={`inline-block bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl`}>
                    Book {service.name.split(' ')[0]} Girls
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Service Locations in Indore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Available across all major areas of Indore with quick response times
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Vijay Nagar", link: "/locations/vijay-nagar", color: "from-pink-500 to-pink-600" },
              { name: "Saket", link: "/locations/saket", color: "from-blue-500 to-blue-600" },
              { name: "Scheme 78", link: "/locations/scheme-78", color: "from-orange-500 to-orange-600" },
              { name: "AB Road", link: "/locations/ab-road", color: "from-purple-500 to-purple-600" },
              { name: "Palasia", link: "/locations/palasia", color: "from-green-500 to-green-600" },
              { name: "Bhawar Kuan", link: "/locations/bhawar-kuan", color: "from-teal-500 to-teal-600" },
              { name: "Ring Road", link: "/locations/ring-road", color: "from-indigo-500 to-indigo-600" },
              { name: "Bombay Hospital", link: "/locations/bombay-hospital", color: "from-red-500 to-red-600" },
              { name: "MG Road", link: "/locations/mg-road", color: "from-emerald-500 to-emerald-600" },
              { name: "Airport Road", link: "/locations/airport-road", color: "from-rose-500 to-rose-600" },
              { name: "Treasure Island", link: "/locations/treasure-island", color: "from-violet-500 to-violet-600" },
              { name: "Rajwada", link: "/locations/rajwada", color: "from-amber-500 to-amber-600" }
            ].map((location, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{location.name}</h3>
                  <a href={location.link} className={`w-full inline-block bg-gradient-to-r ${location.color} hover:from-${location.color.split('-')[1]}-600 hover:to-${location.color.split('-')[3]}-700 text-white px-4 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center`}>
                    Book in {location.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our escort services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-md rounded-2xl border border-pink-100 overflow-hidden shadow-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-pink-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <span className={`text-2xl transform transition-transform ${openFaq === index ? 'rotate-45' : ''} text-pink-600`}>
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Book Your Perfect Companion?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us now for discreet, professional escort services across Indore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919372662471" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              📞 Call: +91 9372662471
            </a>
            <a 
              href="https://wa.me/919372662471" 
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              💬 WhatsApp Now
            </a>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              📋 Contact Form
            </a>
          </div>
        </div>
      </section>

      <EscortServicesContent />
    </div>
  );
}