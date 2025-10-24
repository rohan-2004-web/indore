'use client'

import React from 'react';

interface LSIContentSectionProps {
  className?: string;
}

export default function LSIContentSection({ className = '' }: LSIContentSectionProps) {
  return (
    <section className={`bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50 py-12 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Hidden SEO Content with LSI Keywords */}
        <div className="sr-only" aria-hidden="true">
          <h2>Comprehensive Escort Service in Indore - Premium Call Girls & VIP Companions</h2>
          <p>
            Looking for premium escort service in Indore? Our elite escort agency provides verified call girls, 
            VIP escorts, and luxury companions across all major locations. Experience professional escort service 
            with genuine profiles, safe meetings, and complete confidentiality. Available 24/7 for incall and 
            outcall service throughout Madhya Pradesh.
          </p>
          <p>
            From celebrity escorts to independent call girls, college escorts to mature companions, our diverse 
            selection of high-class escorts ensures you find the perfect match. Whether you need event companions, 
            business travel escorts, or private dinner dates, our sophisticated companions deliver exceptional service.
          </p>
          <p>
            Our verified escort profiles include model companions, Russian escorts, housewife escorts, and local beauties. 
            Each escort is carefully screened to ensure authentic service. Book instantly through online booking, 
            WhatsApp booking, or phone booking for same-day service and immediate response.
          </p>
        </div>

        {/* Visible Content with Natural LSI Integration */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Why Choose Our Premium Escort Service?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Safe & Discreet Service</h3>
                    <p className="text-gray-600 text-sm">
                      Complete privacy guaranteed with our confidential escort service. All meetings are secure, 
                      anonymous, and protected with encrypted communication for your peace of mind.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Verified & Authentic Profiles</h3>
                    <p className="text-gray-600 text-sm">
                      Every escort profile is photo verified and video verified. We maintain real profiles with 
                      current pictures and genuine information about our professional companions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Instant Booking & Quick Response</h3>
                    <p className="text-gray-600 text-sm">
                      Same-day service available with instant online booking. Get immediate response through 
                      WhatsApp booking, phone booking, or direct contact for emergency service needs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌟</span>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Elite Escort Selection</h3>
                    <p className="text-gray-600 text-sm">
                      From celebrity escorts to model companions, college girl escorts to sophisticated mature escorts. 
                      Our diverse selection includes independent escorts, Russian escorts, and high-profile companions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Premium Quality Guaranteed</h3>
                    <p className="text-gray-600 text-sm">
                      Five-star escorts trained for luxury dating, business travel, corporate events, and social occasions. 
                      Experience upscale companions who are educated, multilingual, and cultured.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">All Locations Covered</h3>
                    <p className="text-gray-600 text-sm">
                      Available in Vijay Nagar, AB Road, Palasia, Scheme 78, MG Road, Saket, and all major areas. 
                      Hotel room service, home visits, and airport pickup available across Indore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Service Portfolio</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/70 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">👑</div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">VIP Escorts</h4>
                <p className="text-xs text-gray-600">Exclusive VIP companions for luxury dating</p>
              </div>
              
              <div className="bg-white/70 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">⭐</div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Celebrity Escorts</h4>
                <p className="text-xs text-gray-600">Celebrity-level companions and star escorts</p>
              </div>
              
              <div className="bg-white/70 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🎓</div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">College Girls</h4>
                <p className="text-xs text-gray-600">Young, fresh college girl escorts</p>
              </div>
              
              <div className="bg-white/70 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">💼</div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Business Travel</h4>
                <p className="text-xs text-gray-600">Corporate companions for business trips</p>
              </div>
              
              <div className="bg-white/70 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🌹</div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Independent Escorts</h4>
                <p className="text-xs text-gray-600">Private and self-employed escorts</p>
              </div>
              
              <div className="bg-white/70 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🎭</div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Event Companions</h4>
                <p className="text-xs text-gray-600">Party escorts and social event companions</p>
              </div>
              
              <div className="bg-white/70 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🌙</div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Late Night Service</h4>
                <p className="text-xs text-gray-600">Midnight escorts and 24/7 availability</p>
              </div>
              
              <div className="bg-white/70 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">💎</div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Luxury Dating</h4>
                <p className="text-xs text-gray-600">Five-star escorts for premium dating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
