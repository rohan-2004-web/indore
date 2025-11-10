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
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-300/60">
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300/90 via-orange-200/80 to-pink-300/90"></div>
          <div className="w-full mx-auto text-center relative z-10 px-4">
            <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-8 leading-tight">
              Escort Services In Indore
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-6xl mx-auto mb-10 font-medium leading-relaxed">
              Discover our comprehensive range of escort services with verified professional companions available 24/7.
            </p>
            <div className="flex justify-center mb-10">
              <p className="text-sm text-gray-800">Browse our services below or visit our contact page to get in touch with us.</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Premium Escorts In Indore - Our Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              
              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Celebrity Escorts.webp" alt="Celebrity Escorts" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Celebrity Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Premium companions with star quality service</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Celebrity Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-blue-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/VIP Escorts.jpg" alt="VIP Escorts" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">VIP Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Ultimate luxury companions for discerning clients</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book VIP Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-orange-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Premium Models.jpg" alt="Premium Models" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Models</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">High-end models with sophistication</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Premium Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-purple-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/College Girls.webp" alt="College Girls" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">College Girls</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Young energetic companions for memorable experiences</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book College Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-green-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Housewife Escorts.jpg" alt="Housewife Escorts" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Housewife Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Mature experienced companions with caring nature</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Housewife Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-red-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Punjabi women.webp" alt="Punjabi Women" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Punjabi Women</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Beautiful Punjabi companions with traditional charm</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Punjabi Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-teal-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Slim Escorts.webp" alt="Slim Escorts" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Slim Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Elegant slim companions with perfect figure</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Slim Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-indigo-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Unsatisfied Bhabhi.webp" alt="Unsatisfied Bhabhi" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Unsatisfied Bhabhi</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Experienced companions seeking excitement</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Bhabhi</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Local Beauties.webp" alt="Local Beauties" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Local Beauties</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Beautiful local companions who know Indore</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Local Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-yellow-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Event Companion.webp" alt="Event Companion" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Event Companion</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Perfect companions for social events and parties</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Event Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-rose-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Pink Special.webp" alt="Pink Special" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pink Special</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Special premium companions for exclusive experiences</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Pink Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-violet-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Unsatisfied Females.webp" alt="Unsatisfied Females" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Unsatisfied Females</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Mature women seeking meaningful connections</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-violet-500 to-violet-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Female Escorts</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-blue-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Incall Escorts.webp" alt="Incall Escorts" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Incall Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Premium incall services at luxury locations</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Incall Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-amber-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Mature Escorts.webp" alt="Mature Escorts" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Mature Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Experienced mature companions with sophistication</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Mature Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-emerald-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Young Girls.webp" alt="Young Girls" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Young Girls</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Young beautiful companions for unforgettable experiences</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Young Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-indigo-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/indore escorts.webp" alt="Indore Escorts" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Indore Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Premium local escorts with deep knowledge of Indore city</p>
                <a href="/locations/scheme-78" className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Indore Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-cyan-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Expert Services.webp" alt="Expert Services" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Services</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Expert companions with specialized skills and professional experience</p>
                <a href="/services/expert-services" className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Expert Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-purple-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/High Class Models.webp" alt="High Class Models" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">High Class Models</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Stunning high-class models with runway experience</p>
                <a href="/services/high-class-models" className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Model Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-red-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/bold girls.webp" alt="Bold Girls" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bold Girls</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Bold and confident companions ready for exciting adventures</p>
                <a href="/services/bold-girls" className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Bold Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-[500px] mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/sexy girls.webp" alt="Sexy Girls" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sexy Girls</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Incredibly attractive companions with mesmerizing charm</p>
                <a href="/services/sexy-girls" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Sexy Girls</a>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-pink-100/60 via-orange-50/50 to-pink-200/60">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about our premium escort services in Indore
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-md rounded-3xl shadow-lg border-2 border-pink-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-pink-200/80 hover:to-orange-100/80 transition-all duration-200 flex justify-between items-center group"
                    >
                      <h3 className="text-xl font-bold text-pink-900 pr-4 group-hover:text-orange-700">{faq.question}</h3>
                      <span className={`text-3xl transition-all duration-300 text-pink-700 ${openFaq === index ? 'rotate-180 scale-110' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="px-8 pb-8 bg-gradient-to-r from-pink-50/90 to-orange-50/90">
                        <p className="text-gray-700 leading-relaxed text-lg font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-xl text-gray-600 mb-8">
                Still have questions? Contact us directly for personalized assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  📞 Call +91 9372662471
                </a>
                <a href="https://wa.me/919372662471" target="_blank" className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  💬 WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section - 12 Locations */}
        <section id="locations" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/80 via-orange-100/70 to-pink-300/80"></div>
          <div className="w-full px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Premium Services Available In All Major Indore Locations
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-6xl mx-auto leading-relaxed font-semibold">
                Professional escort services available across 12+ prime locations in Indore with guaranteed satisfaction and instant response
              </p>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-8xl mx-auto">
                
                <div className="group bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-pink-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏢</div>
                    <h3 className="text-2xl font-bold text-pink-800 mb-3">Vijay Nagar</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">Central Business District with premium facilities</p>
                  </div>
                  <a href="/locations/vijay-nagar" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                    📞 Book Premium Service
                  </a>
                </div>
                
                <div className="group bg-gradient-to-br from-blue-100 to-blue-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-blue-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏘️</div>
                    <h3 className="text-2xl font-bold text-blue-800 mb-3">Saket</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">Upscale Residential Hub with elite services</p>
                  </div>
                  <a href="/locations/saket" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                    📞 Book Premium Service
                  </a>
                </div>
                
                <div className="group bg-gradient-to-br from-orange-100 to-orange-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-orange-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-4">💻</div>
                    <h3 className="text-2xl font-bold text-orange-800 mb-3">Scheme 78</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">IT Corporate Sector with modern amenities</p>
                  </div>
                  <a href="/locations/scheme-78" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                    📞 Book Premium Service
                  </a>
                </div>
                
                <div className="group bg-gradient-to-br from-purple-100 to-purple-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-purple-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🛍️</div>
                    <h3 className="text-2xl font-bold text-purple-800 mb-3">AB Road</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">Commercial Zone with shopping centers</p>
                  </div>
                  <a href="/locations/ab-road" className="w-full inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                    📞 Book Premium Service
                  </a>
                </div>
                
                <div className="group bg-gradient-to-br from-green-100 to-green-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-green-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌆</div>
                    <h3 className="text-2xl font-bold text-green-800 mb-3">Palasia</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">City Center with premium facilities</p>
                  </div>
                  <a href="/locations/palasia" className="w-full inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                    📞 Book Premium Service
                  </a>
                </div>
                
                <div className="group bg-gradient-to-br from-teal-100 to-teal-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-teal-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏛️</div>
                    <h3 className="text-2xl font-bold text-teal-800 mb-3">Bhawar Kuan</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">Premium District with luxury amenities</p>
                  </div>
                  <a href="/locations/bhawar-kuan" className="w-full inline-block bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                    📞 Book Premium Service
                  </a>
                </div>
                
                <div className="group bg-gradient-to-br from-indigo-100 to-indigo-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-indigo-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-4">✈️</div>
                    <h3 className="text-2xl font-bold text-indigo-800 mb-3">Airport Road</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">Airport vicinity with luxury hotels</p>
                  </div>
                  <a href="/locations/airport-road" className="w-full inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                    📞 Book Premium Service
                  </a>
                </div>
                
                <div className="group bg-gradient-to-br from-rose-100 to-rose-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-rose-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎯</div>
                    <h3 className="text-2xl font-bold text-rose-800 mb-3">Treasure Island</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">Entertainment hub with modern facilities</p>
                  </div>
                  <a href="/locations/treasure-island" className="w-full inline-block bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                    📞 Book Premium Service
                  </a>
                </div>
                
                <div className="group bg-gradient-to-br from-violet-100 to-violet-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-violet-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏬</div>
                    <h3 className="text-2xl font-bold text-violet-800 mb-3">Rajwada</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">Historic area with cultural significance</p>
                  </div>
                  <a href="/locations/rajwada" className="w-full inline-block bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                    📞 Book Premium Service
                  </a>
                </div>
                
                <div className="group bg-gradient-to-br from-cyan-100 to-cyan-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-cyan-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏭</div>
                    <h3 className="text-2xl font-bold text-cyan-800 mb-3">MG Road</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">Business center with premium services</p>
                  </div>
                  <a href="/locations/mg-road" className="w-full inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                    📞 Book Premium Service
                  </a>
                </div>
                
                <div className="group bg-gradient-to-br from-emerald-100 to-emerald-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-emerald-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏥</div>
                    <h3 className="text-2xl font-bold text-emerald-800 mb-3">Bombay Hospital</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">Medical district with healthcare facilities</p>
                  </div>
                  <a href="/locations/bombay-hospital" className="w-full inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                    📞 Book Premium Service
                  </a>
                </div>
                
                <div className="group bg-gradient-to-br from-amber-100 to-amber-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-amber-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌳</div>
                    <h3 className="text-2xl font-bold text-amber-800 mb-3">Ring Road</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">Well-connected area with easy access</p>
                  </div>
                  <a href="/locations/ring-road" className="w-full inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                    📞 Book Premium Service
                  </a>
                </div>
                
              </div>

              <div className="text-center mt-16">
                <p className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold">
                  🎯 Can't find your location? We serve all areas in Indore! Contact us for instant service.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                    📞 Call +91 9372662471
                  </a>
                  <a href="/locations" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                    📍 View All Locations
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
                Ready to Book Your Perfect Companion?
              </h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                Contact us now for instant booking and let us connect you with the perfect companion for your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:+919372662471" 
                  className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                   Call Now: +91 9372662471
                </a>
                <a 
                  href="https://wa.me/919372662471" 
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                   WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EscortServicesContent Component */}
        <EscortServicesContent />
      </div>
    </>
  );
}