import React from 'react'

interface SEOContentProps {
  h1: string
  h2?: string
  location?: string
  area?: string
  landmarks?: string[]
  services?: string[]
  className?: string
}

export function SEOOptimizedContent({ 
  h1, 
  h2, 
  location, 
  area, 
  landmarks = [], 
  services = [],
  className = '' 
}: SEOContentProps) {
  
  const locationKeywords = location 
    ? [
        `${location} escorts`,
        `call girls ${location}`, 
        `escort service ${location}`,
        `${location} companions`,
        `VIP escorts ${location}`
      ]
    : []

  return (
    <div className={`seo-content space-y-8 ${className}`}>
      {/* Main H1 - Primary keyword focus */}
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
          {h1}
        </h1>
        {h2 && (
          <h2 className="text-xl md:text-2xl text-gray-700 mt-4 font-medium">
            {h2}
          </h2>
        )}
      </header>

      {/* Location-specific content for local SEO */}
      {location && (
        <section className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Premium Escort Service in {location}, Indore
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-pink-600 mb-3">
                Why Choose Our {location} Service?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ <strong>24/7 Availability</strong> - Round the clock service in {location}</li>
                <li>✓ <strong>Verified Profiles</strong> - All companions are verified and authentic</li>
                <li>✓ <strong>Discreet Service</strong> - Complete privacy and confidentiality</li>
                <li>✓ <strong>Professional Approach</strong> - Courteous and professional service</li>
                <li>✓ <strong>Local Expertise</strong> - Deep knowledge of {location} area</li>
              </ul>
            </div>
            
            {area && (
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">
                  Serving {area} & Nearby Areas
                </h3>
                <p className="text-gray-700 mb-3">
                  Our premium escort service covers the entire {area} region, providing 
                  easy access to high-quality companions in {location} and surrounding areas.
                </p>
                {landmarks.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Key Locations We Serve:</h4>
                    <div className="flex flex-wrap gap-2">
                      {landmarks.map((landmark, index) => (
                        <span 
                          key={index}
                          className="bg-white px-3 py-1 rounded-full text-sm text-gray-600 shadow-sm"
                        >
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Services section with keyword optimization */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Our Premium Services {location ? `in ${location}` : 'in Indore'}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">
              VIP Escort Service
            </h3>
            <p className="text-gray-700">
              Exclusive VIP companions for discerning clients seeking premium escort service 
              {location ? ` in ${location}` : ' in Indore'}. Professional, elegant, and sophisticated.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Event Companions
            </h3>
            <p className="text-gray-700">
              Perfect companions for business events, parties, and social gatherings 
              {location ? ` in ${location}` : ' in Indore'}. Professional and well-educated.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">
              Premium Call Girls
            </h3>
            <p className="text-gray-700">
              High-class call girls service with verified profiles and complete discretion 
              {location ? ` in ${location}` : ' in Indore'}. 24/7 availability.
            </p>
          </div>
        </div>
      </section>

      {/* LSI Keywords section for better semantic SEO */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Why We're the Top Choice {location ? `in ${location}` : 'in Indore'}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Quality Assurance</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Verified escorts</strong> - All profiles thoroughly verified</li>
              <li>• <strong>Professional training</strong> - Well-trained companions</li>
              <li>• <strong>Regular health checkups</strong> - Health and safety priority</li>
              <li>• <strong>Background verification</strong> - Complete security screening</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Excellence</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Prompt response</strong> - Quick booking confirmation</li>
              <li>• <strong>Customer support</strong> - 24/7 customer assistance</li>
              <li>• <strong>Flexible booking</strong> - Easy scheduling options</li>
              <li>• <strong>Satisfaction guaranteed</strong> - 100% satisfaction commitment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action with location keywords */}
      <section className="text-center bg-gradient-to-r from-pink-600 to-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">
          Book Premium Escort Service {location ? `in ${location}` : 'in Indore'}
        </h2>
        <p className="text-lg mb-6">
          Experience the finest escort service {location ? `in ${location}` : 'in Indore'} with 
          our professional companions. Available 24/7 for your convenience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="tel:+919867564994" 
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Call Now: +91 93726 62471
          </a>
          <a 
            href="https://wa.me/919867564994" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
          >
            WhatsApp Now
          </a>
        </div>
      </section>
    </div>
  )
}

export function LocationKeywords({ location, className = '' }: { location: string, className?: string }) {
  const keywords = [
    `${location} escort service`,
    `call girls in ${location}`,
    `${location} companions`,
    `escort agency ${location}`,
    `VIP escorts ${location}`,
    `premium service ${location}`
  ]

  return (
    <div className={`hidden ${className}`}>
      {/* Hidden keywords for SEO - not visible to users */}
      {keywords.map((keyword, index) => (
        <span key={index} className="sr-only">{keyword}</span>
      ))}
    </div>
  )
}

export function ServiceKeywords({ service, className = '' }: { service: string, className?: string }) {
  const keywords = [
    `${service} Indore`,
    `${service} service`,
    `premium ${service}`,
    `professional ${service}`,
    `VIP ${service}`,
    `best ${service} Indore`
  ]

  return (
    <div className={`hidden ${className}`}>
      {/* Hidden keywords for SEO - not visible to users */}
      {keywords.map((keyword, index) => (
        <span key={index} className="sr-only">{keyword}</span>
      ))}
    </div>
  )
}