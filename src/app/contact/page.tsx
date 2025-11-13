import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Book Escorts In Indore | Instant Booking +91-9867564994',
  description: 'Contact us to book escorts in Indore. Instant booking via phone +91-9867564994 or WhatsApp. 24/7 customer support for call girls service in Indore.',
  keywords: 'contact escort service indore, book escorts indore, call girls booking, instant booking indore, escort service contact, +919867564994',
  robots: 'index, follow',
  openGraph: {
    title: 'Contact Us | Book Escorts In Indore | Instant Booking',
    description: 'Contact us to book escorts in Indore. Instant booking via phone or WhatsApp',
    url: 'https://saumyakapoor.in/contact',
    type: 'website'
  },
  alternates: {
    canonical: 'https://saumyakapoor.in/contact'
  }
}

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get in touch with us for instant booking and personalized assistance
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-4xl mb-4">📞</div>
          <h3 className="text-2xl font-bold mb-4">Call Us Now</h3>
          <p className="text-gray-600 mb-6">Available 24/7 for instant booking</p>
          <a 
            href="tel:+919867564994" 
            className="bg-primary-pink text-white px-6 py-3 rounded-lg hover:bg-primary-pink-dark transition-colors inline-block text-xl font-semibold"
          >
            +91 9867564994
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-2xl font-bold mb-4">WhatsApp Chat</h3>
          <p className="text-gray-600 mb-6">Quick and convenient messaging</p>
          <a 
            href="https://wa.me/919867564994" 
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors inline-block text-xl font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Service Hours */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Service Hours</h2>
        <div className="text-2xl font-semibold text-primary-pink mb-4">
          24/7 Available
        </div>
        <p className="text-gray-600">
          We are available round the clock to serve you with instant booking and immediate response
        </p>
      </div>

      {/* Service Areas */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Service Areas in Indore</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            "Vijay Nagar", "Saket", "Scheme 78", "AB Road", 
            "Palasia", "Bhawar Kuan", "Airport Road", "Treasure Island",
            "Rajwada", "MG Road", "Bombay Hospital", "Ring Road"
          ].map((area, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <span className="font-semibold">{area}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-6">
          Can&apos;t find your location? We serve all areas in Indore! Contact us for instant service.
        </p>
      </div>
    </div>
  )
}