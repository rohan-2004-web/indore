import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Escort Services In Indore | VIP Call Girls Available 24/7 | Saumya Kapoor',
  description: 'Professional escort services in Indore with verified VIP call girls, independent escorts, and celebrity companions available 24/7. Book now +91-9867564994',
  keywords: 'escort services indore, call girls service indore, vip escorts indore, independent escorts indore, celebrity escorts indore, professional escort service',
  robots: 'index, follow',
  openGraph: {
    title: 'Escort Services In Indore | VIP Call Girls Available 24/7',
    description: 'Professional escort services in Indore with verified companions available 24/7',
    url: 'https://saumyakapoor.in/services',
    type: 'website'
  },
  alternates: {
    canonical: 'https://saumyakapoor.in/services'
  }
}

export default function ServicesPage() {
  const services = [
    {
      title: "Celebrity Escorts",
      description: "Companions with star quality service",
      image: "/images/services/Celebrity%20Escorts.webp"
    },
    {
      title: "VIP Escorts", 
      description: "Ultimate luxury companions for discerning clients",
      image: "/images/services/VIP%20Escorts.jpg"
    },
    {
      title: "Models",
      description: "High-end models with sophistication", 
      image: "/images/services/Premium%20Models.jpg"
    },
    {
      title: "College Girls",
      description: "Young energetic companions for memorable experiences",
      image: "/images/services/College%20Girls.webp"
    },
    {
      title: "Housewife Escorts", 
      description: "Mature experienced companions with caring nature",
      image: "/images/services/Housewife%20Escorts.jpg"
    },
    {
      title: "Punjabi Women",
      description: "Beautiful Punjabi companions with traditional charm",
      image: "/images/services/Punjabi%20women.webp"
    },
    {
      title: "Slim Escorts",
      description: "Elegant slim companions with perfect figure", 
      image: "/images/services/Slim%20Escorts.webp"
    },
    {
      title: "Unsatisfied Bhabhi",
      description: "Experienced companions seeking excitement",
      image: "/images/services/Unsatisfied%20Bhabhi.webp"
    },
    {
      title: "Local Beauties", 
      description: "Beautiful local companions who know Indore",
      image: "/images/services/Local%20Beauties.webp"
    },
    {
      title: "Event Companion",
      description: "Perfect companions for social events and parties",
      image: "/images/services/Event%20Companion.webp"
    },
    {
      title: "Pink Special",
      description: "Special companions for exclusive experiences",
      image: "/images/services/Pink%20Special.webp"
    },
    {
      title: "Unsatisfied Females",
      description: "Mature women seeking meaningful connections", 
      image: "/images/services/Unsatisfied%20Females.webp"
    },
    {
      title: "Incall Escorts",
      description: "Incall services at luxury locations",
      image: "/images/services/Incall%20Escorts.webp" 
    },
    {
      title: "Mature Escorts",
      description: "Experienced mature companions with sophistication",
      image: "/images/services/Mature%20Escorts.webp"
    },
    {
      title: "Young Girls", 
      description: "Young beautiful companions for unforgettable experiences",
      image: "/images/services/Young%20Girls.webp"
    },
    {
      title: "Indore Escorts",
      description: "Local escorts with deep knowledge of Indore city",
      image: "/images/services/indore%20escorts.webp"
    },
    {
      title: "Expert Services",
      description: "Expert companions with specialized skills and professional experience",
      image: "/images/services/Expert%20Services.webp"
    },
    {
      title: "High Class Models", 
      description: "Stunning high-class models with runway experience",
      image: "/images/services/High%20Class%20Models.webp"
    },
    {
      title: "Bold Girls",
      description: "Bold and confident companions ready for exciting adventures",
      image: "/images/services/bold%20girls.webp"
    },
    {
      title: "Sexy Girls",
      description: "Incredibly attractive companions with mesmerizing charm",
      image: "/images/services/sexy%20girls.webp"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Main Heading - REMOVED "Premium" word */}
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

      {/* Services Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Escort Services In Indore</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="bg-primary-pink text-white px-4 py-2 rounded-lg hover:bg-primary-pink-dark transition-colors">
                  Book {service.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-8">
          Get answers to common questions about our escort services in Indore
        </p>
        
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">How can I book escort services in Indore?</h3>
            <p className="text-gray-600">You can book our services by calling +91 9867564994 or contacting us via WhatsApp for instant booking.</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">Are all your escorts verified and professional?</h3>
            <p className="text-gray-600">Yes, all our companions are 100% verified with authentic profiles and genuine photographs.</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">What areas in Indore do you provide services?</h3>
            <p className="text-gray-600">We provide services across all major areas including Vijay Nagar, AB Road, Palasia, Saket, and 15+ other prime locations.</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">What makes your escort service different?</h3>
            <p className="text-gray-600">We offer complete privacy, discretion, verified companions, and 24/7 availability with instant booking facility.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Book Your Perfect Companion?</h2>
          <p className="text-gray-600 mb-6">
            Contact us now for instant booking and let us connect you with the perfect companion for your needs
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="tel:+919867564994" 
              className="bg-primary-pink text-white px-6 py-3 rounded-lg hover:bg-primary-pink-dark transition-colors"
            >
              Call Now: +91 9867564994
            </a>
            <a 
              href="https://wa.me/919867564994" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="mt-16 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">About Our Escort Services In Indore</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Welcome to the most comprehensive <strong>escort services in Indore</strong>, where luxury meets discretion. 
              Our premium <strong>call girls in Indore</strong> service features over 500+ verified profiles of professional 
              companions available 24/7 across all major locations including Vijay Nagar, Palasia, AB Road, and Saket.
            </p>
            <p className="text-gray-700 mb-4">
              We specialize in providing top-tier <strong>escorts in Indore</strong> for various occasions - from intimate 
              companionship to business events and social gatherings. All our <strong>VIP escorts Indore</strong> undergo 
              strict verification processes to ensure authenticity and maintain our reputation as the city's most trusted service provider.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4 text-pink-600">Why Choose Our Escorts Service Indore?</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Verified Profiles:</strong> All escorts in Indore are 100% verified with authentic photos</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock service for instant booking and confirmation</li>
              <li><strong>Complete Discretion:</strong> Your privacy and confidentiality are our top priorities</li>
              <li><strong>All Areas Covered:</strong> Service available across entire Indore with home/hotel visits</li>
              <li><strong>Instant Booking:</strong> Quick WhatsApp and phone booking for immediate companionship</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-pink-600">Service Areas - Escorts In Indore Coverage</h3>
            <p className="text-gray-700 mb-4">
              Our <strong>independent escorts Indore</strong> service covers all prime locations: Vijay Nagar, Palasia, 
              AB Road, Saket, Scheme 78, Bhawar Kuan, Airport Road, Ring Road, MR 10, and surrounding areas. 
              Whether you need <strong>call girls service Indore</strong> for business or personal companionship, 
              we ensure prompt service delivery with complete satisfaction guarantee.
            </p>

            <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-6 rounded-lg mt-6">
              <h4 className="text-xl font-bold text-pink-600 mb-3">Book Escorts In Indore - Contact Information</h4>
              <p className="text-gray-700">
                Ready to experience premium <strong>escorts in Indore</strong> service? Call +91 9867564994 or WhatsApp 
                for instant booking with verified companions. Our professional <strong>call girls in Indore</strong> are 
                available 24/7 for immediate confirmation and exceptional service delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}