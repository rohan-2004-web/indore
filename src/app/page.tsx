export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
          Escort Services In Indore
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover our comprehensive range of escort services with verified professional companions available 24/7.
        </p>
        <p className="text-gray-600">
          Browse our services below or visit our contact page to get in touch with us.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Book Your Perfect Companion?</h2>
          <p className="text-gray-600 mb-6">
            Contact us now for instant booking and let us connect you with the perfect companion for your needs
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="tel:+919372662471" 
              className="bg-primary-pink text-white px-6 py-3 rounded-lg hover:bg-primary-pink-dark transition-colors"
            >
              Call Now: +91 9372662471
            </a>
            <a 
              href="https://wa.me/919372662471" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}