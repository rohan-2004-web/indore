'use client'

// Ultra-Minimal Homepage for 100% Performance Score
export default function UltraMinimalHome() {
  return (
    <>
      {/* Ultra-Critical Inline CSS for instant render */}
      <style jsx>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: system-ui, -apple-system, sans-serif; }
        .hero { 
          background: linear-gradient(135deg, #ec4899, #3b82f6);
          color: white;
          padding: 3rem 1rem;
          text-align: center;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .hero h1 {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.1;
        }
        .hero p {
          font-size: clamp(1rem, 3vw, 1.3rem);
          margin-bottom: 2rem;
          opacity: 0.95;
          max-width: 600px;
        }
        .btn {
          background: white;
          color: #ec4899;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.15s ease;
        }
        .btn:hover { transform: translateY(-2px); }
        .content {
          padding: 3rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }
        .feature {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .feature h3 {
          color: #ec4899;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }
        @media (max-width: 768px) {
          .hero { padding: 2rem 1rem; min-height: 50vh; }
          .features { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Navigation Header */}
      <header style={{
        background: 'white',
        padding: '1rem 0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          {/* Top row with logo and phone */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ color: '#ec4899', fontSize: '1.5rem', fontWeight: 'bold' }}>
              Saumya Kapoor
            </h2>
            <a href="tel:+919867564994" style={{ 
              background: '#ec4899', 
              color: 'white', 
              padding: '0.5rem 1.5rem', 
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>
              📞 +919867564994
            </a>
          </div>
          
          {/* Navigation Menu */}
          <nav style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {/* Main Services */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ color: '#6b7280', fontSize: '0.9rem', fontWeight: '600' }}>Services:</span>
                <a href="/services" style={{ color: '#ec4899', textDecoration: 'none', fontSize: '0.9rem' }}>All Services</a>
                <a href="/services/luxury-escort" style={{ color: '#ec4899', textDecoration: 'none', fontSize: '0.9rem' }}>Luxury Escorts</a>
                <a href="/services/call-girl" style={{ color: '#ec4899', textDecoration: 'none', fontSize: '0.9rem' }}>Call Girls</a>
                <a href="/services/vip-escort" style={{ color: '#ec4899', textDecoration: 'none', fontSize: '0.9rem' }}>VIP Escorts</a>
              </div>
              
              <span style={{ color: '#d1d5db' }}>|</span>
              
              {/* Main Locations */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ color: '#6b7280', fontSize: '0.9rem', fontWeight: '600' }}>Locations:</span>
                <a href="/locations" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.9rem' }}>All Areas</a>
                <a href="/locations/vijay-nagar" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.9rem' }}>Vijay Nagar</a>
                <a href="/locations/ab-road" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.9rem' }}>AB Road</a>
                <a href="/locations/palasia" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.9rem' }}>Palasia</a>
              </div>
            </div>
            
            {/* Mobile-friendly navigation */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem', 
              marginTop: '1rem',
              flexWrap: 'wrap'
            }}>
              <a href="/about" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem' }}>About</a>
              <a href="/gallery" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem' }}>Gallery</a>
              <a href="/contact" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>🔥 #1 Indore Escort Service</h1>
        <p>
          ⭐ Premium call girls in Indore 24/7 • 5000+ verified profiles • 100% discreet service
        </p>
        <a href="tel:+919867564994" className="btn">
          📞 Instant Booking +919867564994
        </a>
      </section>

      {/* Key Features */}
      <section className="content">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#1f2937' }}>
          Premium VIP Services
        </h2>
        
        <div className="features">
          <div className="feature">
            <h3>🌟 VIP Escorts</h3>
            <p>Premium companions for elite clients seeking luxury and sophistication.</p>
          </div>
          <div className="feature">
            <h3>⚡ 24/7 Service</h3>
            <p>Round-the-clock availability for your convenience and satisfaction.</p>
          </div>
          <div className="feature">
            <h3>🔒 100% Discreet</h3>
            <p>Complete privacy and confidentiality guaranteed for all our clients.</p>
          </div>
        </div>

        {/* All Services Grid */}
        <div style={{ marginTop: '4rem' }}>
          <h3 style={{ color: '#ec4899', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            🌟 Premium Escort Services
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <a href="/services/luxury-escort" style={{ 
              background: 'linear-gradient(135deg, #ec4899, #f97316)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              💎 Luxury Escorts
            </a>
            <a href="/services/call-girl" style={{ 
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              📞 Call Girls
            </a>
            <a href="/services/vip-escort" style={{ 
              background: 'linear-gradient(135deg, #10b981, #06b6d4)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              👑 VIP Escorts
            </a>
            <a href="/services/celebrity-escorts" style={{ 
              background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              ⭐ Celebrity Escorts
            </a>
            <a href="/services/college-girls" style={{ 
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              🎓 College Girls
            </a>
            <a href="/services/russian-escort" style={{ 
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              🇷🇺 Russian Escorts
            </a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="/services" style={{ 
              color: '#ec4899', 
              textDecoration: 'none', 
              fontSize: '1.1rem',
              fontWeight: '600',
              border: '2px solid #ec4899',
              padding: '0.75rem 2rem',
              borderRadius: '25px',
              display: 'inline-block'
            }}>
              View All Services →
            </a>
          </div>
        </div>

        {/* Location Coverage */}
        <div style={{ marginTop: '4rem', padding: '2rem', background: '#f8fafc', borderRadius: '12px' }}>
          <h3 style={{ color: '#3b82f6', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            📍 All Indore Locations
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <a href="/locations/vijay-nagar" style={{ 
              background: 'white',
              color: '#3b82f6',
              padding: '1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600',
              border: '2px solid #e5e7eb',
              transition: 'all 0.2s'
            }}>
              📍 Vijay Nagar
            </a>
            <a href="/locations/ab-road" style={{ 
              background: 'white',
              color: '#3b82f6',
              padding: '1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600',
              border: '2px solid #e5e7eb'
            }}>
              📍 AB Road
            </a>
            <a href="/locations/palasia" style={{ 
              background: 'white',
              color: '#3b82f6',
              padding: '1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600',
              border: '2px solid #e5e7eb'
            }}>
              📍 Palasia
            </a>
            <a href="/locations/bhawar-kuan" style={{ 
              background: 'white',
              color: '#3b82f6',
              padding: '1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600',
              border: '2px solid #e5e7eb'
            }}>
              📍 Bhawar Kuan
            </a>
            <a href="/locations/mg-road" style={{ 
              background: 'white',
              color: '#3b82f6',
              padding: '1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600',
              border: '2px solid #e5e7eb'
            }}>
              📍 MG Road
            </a>
            <a href="/locations/scheme-78" style={{ 
              background: 'white',
              color: '#3b82f6',
              padding: '1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600',
              border: '2px solid #e5e7eb'
            }}>
              📍 Scheme 78
            </a>
            <a href="/locations/rajwada" style={{ 
              background: 'white',
              color: '#3b82f6',
              padding: '1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600',
              border: '2px solid #e5e7eb'
            }}>
              📍 Rajwada
            </a>
            <a href="/locations/ring-road" style={{ 
              background: 'white',
              color: '#3b82f6',
              padding: '1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600',
              border: '2px solid #e5e7eb'
            }}>
              📍 Ring Road
            </a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="/locations" style={{ 
              color: '#3b82f6', 
              textDecoration: 'none', 
              fontSize: '1.1rem',
              fontWeight: '600',
              border: '2px solid #3b82f6',
              padding: '0.75rem 2rem',
              borderRadius: '25px',
              display: 'inline-block'
            }}>
              View All Locations →
            </a>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: '3rem' }}>
          <a href="tel:+919867564994" className="btn" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}>
            🚀 Book Now - Instant Response
          </a>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer style={{ 
        background: '#1f2937', 
        color: 'white', 
        padding: '2rem 1rem', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p>© 2024 Saumya Kapoor - Premium Indore Escort Service</p>
          <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>
            📞 +919867564994 • 🌐 saumyakapoor.in • 100% Professional & Discreet
          </p>
        </div>
      </footer>
    </>
  )
}