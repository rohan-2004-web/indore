import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Escort Gallery | Verified Call Girls Photos In Indore | Saumya Kapoor',
  description: 'Browse verified escort gallery with authentic photos of call girls in Indore. 5000+ verified profiles with genuine pictures. View our premium escort collection.',
  keywords: 'escort gallery indore, call girls photos, verified escort pictures, indore escorts gallery, authentic escort photos, call girls gallery',
  robots: 'index, follow',
  openGraph: {
    title: 'Escort Gallery | Verified Call Girls Photos In Indore',
    description: 'Browse verified escort gallery with authentic photos of call girls in Indore',
    url: 'https://saumyakapoor.in/gallery',
    type: 'website'
  },
  alternates: {
    canonical: 'https://saumyakapoor.in/gallery'
  }
}

export default function GalleryPage() {
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
          Escort Gallery
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore our gallery of beautiful and professional companions available in Indore
        </p>
        <p className="text-gray-600">
          For more information or to make an inquiry, please visit our contact page.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Escorts In Indore - Our Services</h2>
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

      {/* Why Choose Our Gallery */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">✨ Why Choose Our Gallery ✨</h2>
        <p className="text-center text-gray-600 mb-8">
          Step into a world of elegance and sophistication with our escort gallery featuring the finest companions in Indore
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Authentic Profiles</h3>
            <p className="text-gray-600">
              Every image in our gallery represents authentic, verified companions with genuine profiles and real photographs
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-gray-600">
              Our gallery showcases only the highest quality companions, each selected for their beauty, intelligence, and professionalism
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold mb-2">Diverse Selection</h3>
            <p className="text-gray-600">
              From college girls to mature companions, our diverse gallery ensures you find exactly the type of companion you desire
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Regular Updates</h3>
            <p className="text-gray-600">
              Our gallery is constantly updated with fresh faces and new companions, ensuring variety and current availability
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">Privacy Protected</h3>
            <p className="text-gray-600">
              Complete discretion and privacy protection for both clients and companions with secure booking processes
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Instant Booking</h3>
            <p className="text-gray-600">
              Quick and easy booking process with immediate confirmation and 24/7 customer support for your convenience
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Statistics */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">📊 Gallery Statistics</h2>
        <p className="text-center text-gray-600 mb-8">
          Numbers that speak for our gallery excellence
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-pink mb-2">200+</div>
            <div className="text-gray-600">Gallery Photos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-pink mb-2">50+</div>
            <div className="text-gray-600">Unique Models</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-pink mb-2">20</div>
            <div className="text-gray-600">Service Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-pink mb-2">100%</div>
            <div className="text-gray-600">Verified Profiles</div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-8">
          Common questions about our escort gallery and booking process
        </p>
        
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">What type of escorts are featured in your gallery?</h3>
            <p className="text-gray-600">Our gallery features a diverse range including VIP escorts, college girls, mature companions, models, and specialized service providers across 20+ categories.</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">Are the images in the gallery authentic and recent?</h3>
            <p className="text-gray-600">Yes, all images are authentic and regularly updated. We verify all profiles and ensure photos represent our actual companions.</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">How can I book the escort shown in the gallery?</h3>
            <p className="text-gray-600">You can book by calling +91 9867564994 or contacting us via WhatsApp. Mention the specific companion or service category from the gallery.</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-2">Do you offer different categories of escorts as shown in the gallery?</h3>
            <p className="text-gray-600">Yes, we offer 20+ service categories including VIP, celebrity, college girls, mature escorts, models, and many more as displayed in our gallery.</p>
          </div>
          
          <div className="pb-4">
            <h3 className="text-lg font-semibold mb-2">How often do you update your gallery with new escorts?</h3>
            <p className="text-gray-600">Our gallery is updated regularly with new companions and fresh photos to ensure variety and current availability for our clients.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">🎉 Explore Our Complete Gallery 🎉</h2>
          <p className="text-gray-600 mb-6">
            Browse through our extensive collection of companions and find your perfect match today!
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="tel:+919867564994" 
              className="bg-primary-pink text-white px-6 py-3 rounded-lg hover:bg-primary-pink-dark transition-colors"
            >
              📞 Call to Browse: +91 9867564994
            </a>
            <a 
              href="https://wa.me/919867564994?text=I%20want%20to%20browse%20your%20complete%20gallery" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Gallery Request
            </a>
          </div>
        </div>
      </div>

      {/* Ready to Meet */}
      <div className="text-center py-8">
        <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Meet Your Perfect Companion?</h2>
          <p className="text-gray-600 mb-6">
            Contact us now to book any of our beautiful companions for an unforgettable experience
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="tel:+919867564994" 
              className="bg-primary-pink text-white px-6 py-3 rounded-lg hover:bg-primary-pink-dark transition-colors"
            >
              📞 Call Now: +91 9867564994
            </a>
            <a 
              href="https://wa.me/919867564994" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}