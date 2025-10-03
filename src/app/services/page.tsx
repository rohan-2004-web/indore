'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import EscortServicesContent from './components/EscortServicesContent';

export default function ServicesPage() {
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
      answer: "We cover all major areas of Indore including Vijay Nagar, AB Road, Saket, Scheme 78, Palasia, Bhawar Kuan, Ring Road, New Palasia, Rajwada, Airport Road, and Treasure Island. Our escorts are available for both incall and outcall services across the city."
    },
    {
      question: "Is privacy and discretion guaranteed?",
      answer: "Privacy and discretion are our top priorities. All client information is kept strictly confidential. Our escorts are trained to maintain complete discretion, and we use secure communication channels. Your personal details and meeting arrangements are never shared or disclosed."
    },
    {
      question: "What are your service rates and payment methods?",
      answer: "Our rates are competitive and vary based on the service type, duration, and companion category. We offer flexible payment options including cash, digital payments, and advance booking discounts. Contact us directly for detailed pricing information tailored to your requirements."
    },
    {
      question: "Do you provide 24/7 escort services?",
      answer: "Yes, our premium escort services are available 24/7 across Indore. Whether you need companionship for daytime events, evening dinners, business meetings, or late-night occasions, our professional escorts are ready to provide exceptional service at any time."
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
              Premium Escort Services In Indore
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-6xl mx-auto mb-10 font-medium leading-relaxed">
              Discover our comprehensive range of premium escort services with verified professional companions available 24/7.
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
              
              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Celebrity Escorts.webp" alt="Celebrity Escorts" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Celebrity Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Premium companions with star quality service</p>
                <a href="/services/celebrity-escorts" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Celebrity Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-blue-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/VIP Escorts.jpg" alt="VIP Escorts" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">VIP Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Ultimate luxury companions for discerning clients</p>
                <a href="/services/vip-escorts" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book VIP Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-orange-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Premium Models.jpg" alt="Premium Models" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Models</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">High-end models with sophistication</p>
                <a href="/services/premium-models" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Premium Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-purple-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/College Girls.webp" alt="College Girls" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">College Girls</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Young energetic companions for memorable experiences</p>
                <a href="/services/college-girls" className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book College Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-green-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Housewife Escorts.jpg" alt="Housewife Escorts" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Housewife Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Mature experienced companions with caring nature</p>
                <a href="/services/housewife-escorts" className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Housewife Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-red-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Punjabi women.webp" alt="Punjabi Women" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Punjabi Women</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Beautiful Punjabi companions with traditional charm</p>
                <a href="/services/punjabi-women" className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Punjabi Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-teal-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Slim Escorts.webp" alt="Slim Escorts" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Slim Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Elegant slim companions with perfect figure</p>
                <a href="/services/slim-escorts" className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Slim Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-indigo-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Unsatisfied Bhabhi.webp" alt="Unsatisfied Bhabhi" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Unsatisfied Bhabhi</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Experienced companions seeking excitement</p>
                <a href="/services/unsatisfied-bhabhi" className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Bhabhi</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Local Beauties.webp" alt="Local Beauties" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Local Beauties</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Beautiful local companions who know Indore</p>
                <a href="/services/local-beauties" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Local Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-yellow-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Event Companion.webp" alt="Event Companion" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Event Companion</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Perfect companions for social events and parties</p>
                <a href="/services/event-companion" className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Event Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-rose-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Pink Special.webp" alt="Pink Special" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Pink Special</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Special premium companions for exclusive experiences</p>
                <a href="/services/pink-special" className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Pink Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-violet-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Unsatisfied Females.webp" alt="Unsatisfied Females" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Unsatisfied Females</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Mature women seeking meaningful connections</p>
                <a href="/services/unsatisfied-females" className="inline-block bg-gradient-to-r from-violet-500 to-violet-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Female Escorts</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-blue-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Incall Escorts.webp" alt="Incall Escorts" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Incall Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Premium incall services at luxury locations</p>
                <a href="/services/incall-escorts" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Incall Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-amber-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Mature Escorts.webp" alt="Mature Escorts" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Mature Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Experienced mature companions with sophistication</p>
                <a href="/services/mature-escorts" className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Mature Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-emerald-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Young Girls.webp" alt="Young Girls" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Young Girls</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Young beautiful companions for unforgettable experiences</p>
                <a href="/services/young-girls" className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Young Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-indigo-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/indore escorts.webp" alt="Indore Escorts" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Indore Escorts</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Premium local escorts with deep knowledge of Indore city</p>
                <a href="/services/indore-escorts" className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Indore Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-cyan-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/Expert Services.webp" alt="Expert Services" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Services</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Expert companions with specialized skills and professional experience</p>
                <a href="/services/expert-services" className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Expert Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-purple-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/High Class Models.webp" alt="High Class Models" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">High Class Models</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Stunning high-class models with runway experience</p>
                <a href="/services/high-class-models" className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Model Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-red-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/bold girls.webp" alt="Bold Girls" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Bold Girls</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Bold and confident companions ready for exciting adventures</p>
                <a href="/services/bold-girls" className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Bold Girls</a>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/services/sexy girls.webp" alt="Sexy Girls" className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sexy Girls</h3>
                <p className="text-gray-600 mb-4 text-base flex-grow">Incredibly attractive companions with mesmerizing charm</p>
                <a href="/services/sexy-girls" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Sexy Girls</a>
              </div>

            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70"></div>
          <div className="w-full px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-base md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-4">
                Premium Escort Services Available In All Major Indore Areas
              </h2>
              <p className="text-2xl text-gray-700 max-w-6xl mx-auto leading-relaxed font-semibold">
                Professional escort services available across 15+ prime locations in Indore with guaranteed satisfaction and instant response
              </p>
            </div>

            <div className="w-full space-y-12">
              
              {/* First Row - Main 3 Large Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-pink-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏢</div>
                    <h3 className="text-3xl font-bold text-pink-800 mb-3">Vijay Nagar</h3>
                    <p className="text-pink-600 font-bold text-xl mb-4">Central Business District</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Premium business district with luxury hotels, shopping centers and corporate offices. Elite escort services available 24/7.</p>
                  </div>
                  <a href="/locations/vijay-nagar" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Premium Escorts in Vijay Nagar
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-blue-100 to-blue-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-blue-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏘️</div>
                    <h3 className="text-3xl font-bold text-blue-800 mb-3">Saket</h3>
                    <p className="text-blue-600 font-bold text-xl mb-4">Upscale Residential Hub</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Prestigious residential area with modern amenities and gated communities. Discrete home visit services available.</p>
                  </div>
                  <a href="/locations/saket" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book VIP Escorts in Saket
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-orange-100 to-orange-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-orange-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">💻</div>
                    <h3 className="text-3xl font-bold text-orange-800 mb-3">Scheme 78</h3>
                    <p className="text-orange-600 font-bold text-xl mb-4">IT Corporate Sector</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Technology hub with corporate offices, business hotels and modern infrastructure. Professional companions available.</p>
                  </div>
                  <a href="/locations/scheme-78" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Elite Escorts in Scheme 78
                  </a>
                </div>
              </div>

              {/* Second Row - Additional 3 Large Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-purple-100 to-purple-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-purple-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🛍️</div>
                    <h3 className="text-3xl font-bold text-purple-800 mb-3">AB Road</h3>
                    <p className="text-purple-600 font-bold text-xl mb-4">Commercial Zone</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Main commercial area with luxury shopping, dining and premium hotels. Elite companions for business meetings.</p>
                  </div>
                  <a href="/locations/ab-road" className="w-full inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Premium Escorts in AB Road
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-green-100 to-green-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-green-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🌆</div>
                    <h3 className="text-3xl font-bold text-green-800 mb-3">Palasia</h3>
                    <p className="text-green-600 font-bold text-xl mb-4">City Center</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Heart of Indore with premium facilities, accessibility and upscale venues. Professional escort services 24/7.</p>
                  </div>
                  <a href="/locations/palasia" className="w-full inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book VIP Escorts in Palasia
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-teal-100 to-teal-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-teal-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏛️</div>
                    <h3 className="text-3xl font-bold text-teal-800 mb-3">Bhawar Kuan</h3>
                    <p className="text-teal-600 font-bold text-xl mb-4">Premium District</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Prestigious business and residential area with luxury amenities and high-end establishments.</p>
                  </div>
                  <a href="/locations/bhawar-kuan" className="w-full inline-block bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Elite Escorts in Bhawar Kuan
                  </a>
                </div>
              </div>

              {/* Third Row - Additional 2 Large Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group bg-gradient-to-br from-indigo-100 to-indigo-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-indigo-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🛣️</div>
                    <h3 className="text-3xl font-bold text-indigo-800 mb-3">Ring Road</h3>
                    <p className="text-indigo-600 font-bold text-xl mb-4">Connectivity Hub</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Well-connected area with easy access to all parts of the city and premium establishments.</p>
                  </div>
                  <a href="/locations/ring-road" className="w-full inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book VIP Escorts in Ring Road
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-red-100 to-red-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-red-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏥</div>
                    <h3 className="text-3xl font-bold text-red-800 mb-3">Bombay Hospital</h3>
                    <p className="text-red-600 font-bold text-xl mb-4">Medical District</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Healthcare hub with premium medical facilities and upscale accommodations nearby.</p>
                  </div>
                  <a href="/locations/bombay-hospital" className="w-full inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Elite Escorts in Bombay Hospital
                  </a>
                </div>
              </div>

              {/* Fourth Row - Final 4 Large Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="group bg-gradient-to-br from-emerald-100 to-emerald-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-emerald-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏛️</div>
                    <h3 className="text-3xl font-bold text-emerald-800 mb-3">MG Road</h3>
                    <p className="text-emerald-600 font-bold text-xl mb-4">Heritage Area</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Historic area with cultural significance, premium hotels and upscale amenities.</p>
                  </div>
                  <a href="/locations/mg-road" className="w-full inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Premium Escorts in MG Road
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-rose-100 to-rose-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-rose-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">✈️</div>
                    <h3 className="text-3xl font-bold text-rose-800 mb-3">Airport Road</h3>
                    <p className="text-rose-600 font-bold text-xl mb-4">Aviation Zone</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Airport vicinity with luxury hotels, business centers and premium travel services.</p>
                  </div>
                  <a href="/locations/airport-road" className="w-full inline-block bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Elite Escorts in Airport Road
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-violet-100 to-violet-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-violet-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🎯</div>
                    <h3 className="text-3xl font-bold text-violet-800 mb-3">Treasure Island</h3>
                    <p className="text-violet-600 font-bold text-xl mb-4">Entertainment Hub</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Entertainment and recreation center with modern facilities and premium venues.</p>
                  </div>
                  <a href="/locations/treasure-island" className="w-full inline-block bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book VIP Escorts in Treasure Island
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-amber-100 to-amber-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-amber-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏰</div>
                    <h3 className="text-3xl font-bold text-amber-800 mb-3">Rajwada</h3>
                    <p className="text-amber-600 font-bold text-xl mb-4">Heritage Palace</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Historic royal palace area with cultural heritage and premium hospitality services.</p>
                  </div>
                  <a href="/locations/rajwada" className="w-full inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Royal Escorts in Rajwada
                  </a>
                </div>
              </div>
              
              {/* Coverage Summary */}
              <div className="bg-gradient-to-r from-pink-100/80 to-orange-100/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-pink-200/50 mt-16">
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                    🌟 Complete City Coverage 🌟
                  </h3>
                  <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-semibold">
                    Premium escort services in Vijay Nagar, AB Road, Bhawar Kuan, and all major commercial areas with 5-star hotels.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-12 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                      📞 Call Now: +91 9372662471
                    </a>
                    <a href="https://wa.me/919372662471" target="_blank" className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                      💬 WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas & Features Section */}
        <section className="py-20 bg-gradient-to-br from-orange-100/50 via-pink-50/50 to-orange-200/60">
          <div className="w-full px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-pink-500 to-orange-700 bg-clip-text text-transparent mb-6">
                  Premium Services Across Indore
                </h2>
                <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Professional escort services available 24/7 in all major areas of Indore with complete discretion and satisfaction guarantee
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Service Areas */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-orange-100/50">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-6">
                    🏙️ Service Coverage Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4">
                      <p className="font-semibold text-gray-700">• Vijay Nagar</p>
                      <p className="font-semibold text-gray-700">• AB Road</p>
                      <p className="font-semibold text-gray-700">• Saket</p>
                      <p className="font-semibold text-gray-700">• Scheme 78</p>
                    </div>
                    <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl p-4">
                      <p className="font-semibold text-gray-700">• Palasia</p>
                      <p className="font-semibold text-gray-700">• Bhawar Kuan</p>
                      <p className="font-semibold text-gray-700">• Ring Road</p>
                      <p className="font-semibold text-gray-700">• Airport Road</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl">
                    <p className="text-center font-bold text-gray-800">+ Many More Premium Locations</p>
                  </div>
                </div>

                {/* Premium Features */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-pink-100/50">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                    ⭐ Premium Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">🔒</span>
                      <p className="font-semibold text-gray-700">100% Privacy & Discretion Guaranteed</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                      <span className="text-2xl mr-4">✅</span>
                      <p className="font-semibold text-gray-700">All Companions Verified & Professional</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">⏰</span>
                      <p className="font-semibold text-gray-700">24/7 Availability & Instant Booking</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                      <span className="text-2xl mr-4">💎</span>
                      <p className="font-semibold text-gray-700">Premium Quality Service Standards</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Process */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-orange-100/50">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-8 text-center">
                  📱 Simple 3-Step Booking Process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-white">1</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">Contact Us</h4>
                    <p className="text-gray-600 text-lg">Call or WhatsApp us with your preferences and location</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-white">2</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">Select Companion</h4>
                    <p className="text-gray-600 text-lg">Choose from our verified premium companions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-white">3</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">Enjoy Service</h4>
                    <p className="text-gray-600 text-lg">Meet your companion and enjoy premium service</p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
                      📞 Call Now: +91 9372662471
                    </a>
                    <a href="https://wa.me/919372662471" className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
                      💬 WhatsApp Now
                    </a>
                  </div>
                </div>
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
                {/* FAQ 1 */}
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-pink-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <button
                    onClick={() => toggleFaq(1)}
                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-pink-200/80 hover:to-orange-100/80 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-pink-900 pr-4 group-hover:text-orange-700">How can I book premium escort services in Indore?</h3>
                    <span className={`text-3xl transition-all duration-300 text-pink-700 ${openFaq === 1 ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === 1 && (
                    <div className="px-8 pb-8 bg-gradient-to-r from-pink-50/90 to-orange-50/90">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        Booking is simple and discreet. You can call us directly at +91 9372662471, send a WhatsApp message, or email us. Our booking team is available 24/7 to assist you with selecting the perfect companion based on your preferences and requirements.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-orange-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <button
                    onClick={() => toggleFaq(2)}
                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-orange-200/80 hover:to-pink-100/80 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-orange-900 pr-4 group-hover:text-pink-700">Are all your escorts verified and professional?</h3>
                    <span className={`text-3xl transition-all duration-300 text-orange-700 ${openFaq === 2 ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === 2 && (
                    <div className="px-8 pb-8 bg-gradient-to-r from-orange-50/90 to-pink-50/90">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        Yes, absolutely! All our escorts are 100% verified, professionally trained, and thoroughly background-checked. We ensure they meet our high standards of elegance, sophistication, and discretion. Every companion is genuine and committed to providing exceptional service.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-purple-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <button
                    onClick={() => toggleFaq(3)}
                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-purple-200/80 hover:to-pink-100/80 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-purple-900 pr-4 group-hover:text-pink-700">What areas in Indore do you provide services?</h3>
                    <span className={`text-3xl transition-all duration-300 text-purple-700 ${openFaq === 3 ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === 3 && (
                    <div className="px-8 pb-8 bg-gradient-to-r from-purple-50/90 to-pink-50/90">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        We cover all major areas of Indore including Vijay Nagar, AB Road, Saket, Scheme 78, Palasia, Bhawar Kuan, Ring Road, New Palasia, Rajwada, Airport Road, and Treasure Island. Our escorts are available for both incall and outcall services across the city.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-blue-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <button
                    onClick={() => toggleFaq(4)}
                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-blue-200/80 hover:to-purple-100/80 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-blue-900 pr-4 group-hover:text-purple-700">Is privacy and discretion guaranteed?</h3>
                    <span className={`text-3xl transition-all duration-300 text-blue-700 ${openFaq === 4 ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === 4 && (
                    <div className="px-8 pb-8 bg-gradient-to-r from-blue-50/90 to-purple-50/90">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        Privacy and discretion are our top priorities. All client information is kept strictly confidential. Our escorts are trained to maintain complete discretion, and we use secure communication channels. Your personal details and meeting arrangements are never shared or disclosed.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className="bg-gradient-to-br from-green-100 to-green-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-green-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <button
                    onClick={() => toggleFaq(5)}
                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-green-200/80 hover:to-blue-100/80 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-green-900 pr-4 group-hover:text-blue-700">What are your service rates and payment methods?</h3>
                    <span className={`text-3xl transition-all duration-300 text-green-700 ${openFaq === 5 ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === 5 && (
                    <div className="px-8 pb-8 bg-gradient-to-r from-green-50/90 to-blue-50/90">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        Our rates vary based on the type of companion, duration, and services required. We offer competitive pricing for all categories from college girls to VIP escorts. Payment can be made via cash, digital transfers, or other secure methods. Contact us for detailed pricing information.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 6 */}
                <div className="bg-gradient-to-br from-red-100 to-red-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-red-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <button
                    onClick={() => toggleFaq(6)}
                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-red-200/80 hover:to-pink-100/80 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-red-900 pr-4 group-hover:text-pink-700">Do you offer same-day booking services?</h3>
                    <span className={`text-3xl transition-all duration-300 text-red-700 ${openFaq === 6 ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === 6 && (
                    <div className="px-8 pb-8 bg-gradient-to-r from-red-50/90 to-pink-50/90">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        Yes, we offer same-day bookings subject to availability. Our team works efficiently to accommodate last-minute requests. For guaranteed availability, we recommend booking at least 2-3 hours in advance. Emergency bookings are also possible with additional charges.
                      </p>
                    </div>
                  )}
                </div>
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
                  className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                   Call Now: +91 9372662471
                </a>
                <a 
                  href="https://wa.me/919372662471" 
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                   WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Building Trust Since Years Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50">
          <div className="w-full px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Building Trust Since Years
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-16 leading-relaxed">
                Discover how we became Indore's most trusted premium escort service through dedication and excellence
              </p>
              
              {/* Journey Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Beginning</h3>
                  <p className="text-gray-600 leading-relaxed">Started with a vision to provide premium, professional, and discreet escort services in Indore. Our commitment to quality and customer satisfaction set us apart from day one.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-purple-100 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Recognition</h3>
                  <p className="text-gray-600 leading-relaxed">Earned the trust of thousands of clients through consistent quality, reliability, and professional excellence. Became the most sought-after service in Indore.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-100 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-6xl mb-4">💎</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Standards</h3>
                  <p className="text-gray-600 leading-relaxed">Established strict quality standards for companion selection, customer service, and privacy protection. Every aspect designed for premium experience.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-orange-100 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-6xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Future Vision</h3>
                  <p className="text-gray-600 leading-relaxed">Continuously expanding our services and locations while maintaining the highest standards of quality, discretion, and customer satisfaction.</p>
                </div>
              </div>
              
              {/* Why Choose Our Services & Locations - Content Section */}
              <section className="py-20 bg-gradient-to-br from-purple-600/90 via-pink-600/90 to-orange-600/90 relative overflow-hidden mb-16 rounded-3xl">
                <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-16 left-16 w-40 h-40 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-16 right-16 w-48 h-48 bg-white/15 rounded-full blur-xl animate-pulse delay-500"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                </div>
                
                <div className="max-w-8xl mx-auto px-6 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Left Side - Services Content */}
                    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-10 border border-white/30 shadow-2xl">
                      <div className="text-center mb-8">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-xl">
                          💎 Why Our Premium Services Are Best
                        </h3>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">🌟</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white mb-2">100% Verified & Authentic Escorts</h4>
                            <p className="text-white/90 text-lg">All our companions are thoroughly verified with authentic profiles and genuine photographs</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">🔒</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white mb-2">Complete Privacy & Discretion Guaranteed</h4>
                            <p className="text-white/90 text-lg">Your privacy is our priority with confidential meetings and secure booking process always</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">⚡</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white mb-2">24/7 Instant Booking & Quick Response</h4>
                            <p className="text-white/90 text-lg">Round the clock availability with immediate confirmation and same day booking facility</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Location Content */}
                    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-10 border border-white/30 shadow-2xl">
                      <div className="text-center mb-8">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-xl">
                          📍 Why Our Indore Locations Are Perfect
                        </h3>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">🏙️</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white mb-2">15+ Premium Central Locations Coverage</h4>
                            <p className="text-white/90 text-lg">Strategic coverage across Vijay Nagar, AB Road, Palasia and all major premium areas</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">🚗</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white mb-2">Easy Access & Discreet Meeting Points</h4>
                            <p className="text-white/90 text-lg">Convenient locations with easy access, safe environments and complete discretion for clients</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">🏨</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white mb-2">Luxury Hotels & Premium Venues Available</h4>
                            <p className="text-white/90 text-lg">Partnership with 5-star hotels and luxury venues for unforgettable premium experiences always</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  
                  {/* Bottom Statistics */}
                  <div className="mt-16 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                        <div className="text-4xl font-bold text-white mb-2">5000+</div>
                        <div className="text-white/90 text-lg font-semibold">Happy Clients</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                        <div className="text-4xl font-bold text-white mb-2">200+</div>
                        <div className="text-white/90 text-lg font-semibold">Premium Escorts</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                        <div className="text-4xl font-bold text-white mb-2">15+</div>
                        <div className="text-white/90 text-lg font-semibold">Prime Locations</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                        <div className="text-4xl font-bold text-white mb-2">24/7</div>
                        <div className="text-white/90 text-lg font-semibold">Service Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">😊</div>
                  <div className="text-3xl font-bold mb-1">1000+</div>
                  <div className="text-lg font-semibold">Happy Clients</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">💯</div>
                  <div className="text-3xl font-bold mb-1">99%</div>
                  <div className="text-lg font-semibold">Satisfaction Rate</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">📍</div>
                  <div className="text-3xl font-bold mb-1">12+</div>
                  <div className="text-lg font-semibold">Prime Locations</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">🕐</div>
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-lg font-semibold">Availability</div>
                </div>
              </div>
              
              {/* Comprehensive Escort Services Content */}
              <EscortServicesContent />
              
              {/* Call to Action */}
              <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 rounded-3xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">🎖️ Join Our Premium Family 🎖️</h3>
                <p className="text-xl mb-8">Experience the difference that years of dedication and premium service standards make</p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="tel:+919372662471" 
                    className="inline-flex items-center justify-center bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <span className="mr-2">📞</span>
                    Call Now: +91 9372662471
                    <span className="ml-2">→</span>
                  </a>
                  <a 
                    href="https://wa.me/919372662471" 
                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <span className="mr-2">💬</span>
                    WhatsApp Now
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
