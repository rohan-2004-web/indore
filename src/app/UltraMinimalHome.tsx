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

      {/* Minimal Header */}
      <header style={{
        background: 'white',
        padding: '1rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ color: '#ec4899', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Saumya Kapoor
          </h2>
          <a href="tel:+919372662471" style={{ 
            background: '#ec4899', 
            color: 'white', 
            padding: '0.5rem 1.5rem', 
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '600'
          }}>
            📞 +919372662471
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>🔥 #1 Indore Escort Service</h1>
        <p>
          ⭐ Premium call girls in Indore 24/7 • 5000+ verified profiles • 100% discreet service
        </p>
        <a href="tel:+919372662471" className="btn">
          📞 Instant Booking +919372662471
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

        {/* Location Coverage */}
        <div style={{ marginTop: '3rem', padding: '2rem', background: '#f8fafc', borderRadius: '12px' }}>
          <h3 style={{ color: '#ec4899', fontSize: '1.8rem', marginBottom: '1rem' }}>
            📍 Service Areas in Indore
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Vijay Nagar • AB Road • Palasia • Bhawar Kuan • MG Road • Scheme 78 • 
            Rajwada • Ring Road • Airport Road • Treasure Island • Saket
          </p>
        </div>

        {/* CTA */}
        <div style={{ marginTop: '3rem' }}>
          <a href="tel:+919372662471" className="btn" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}>
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
            📞 +919372662471 • 🌐 saumyakapoor.in • 100% Professional & Discreet
          </p>
        </div>
      </footer>
    </>
  )
}