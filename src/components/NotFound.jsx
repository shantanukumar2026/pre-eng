import React from 'react';
import { ArrowLeft, Home, Package, Phone, Compass, AlertCircle } from 'lucide-react';

const NotFound = ({ customMessage = "The page or resource you are looking for is not currently active or has been relocated.", title = "404 - Page Not Found", isCareer = false }) => {
  return (
    <div className="not-found-page" style={{ backgroundColor: '#ffffff', color: '#0047ba', fontFamily: "'Manrope', sans-serif", minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #001f4d 0%, #002868 50%, #0047BA 100%)',
        color: '#0047BA',
        padding: '6.5rem 5% 3.75rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(74, 136, 255, 0.25) 0%, transparent 65%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#bfdbfe',
            padding: '4px 14px',
            borderRadius: '9999px',
            fontWeight: 800,
            fontSize: '0.78rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <AlertCircle size={14} style={{ color: '#93c5fd' }} />
            <span>{isCareer ? 'CAREER PORTAL NOTICE' : 'HTTP STATUS 404'}</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            marginBottom: '0.75rem',
            lineHeight: 1.1,
            color: '#ffffff'
          }}>
            {isCareer ? '404 - No Open Positions' : title}
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            color: '#0052cc',
            maxWidth: '620px',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            {isCareer 
              ? 'Our technical recruitment cycles are currently closed. Check back during our Q1 infrastructure expansion or submit a general inquiry.' 
              : customMessage}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="#home"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#ffffff',
                color: '#0047BA',
                padding: '0.75rem 1.6rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(0, 31, 77, 0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#eff6ff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Home size={16} />
              <span>Return to Home</span>
            </a>

            <a 
              href="#company-profile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                padding: '0.75rem 1.6rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Compass size={16} />
              <span>Explore Company Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Suggested Engineering Sections */}
      <section style={{ padding: '3.5rem 5%', flexGrow: 1, backgroundColor: '#f0f5ff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0052cc', marginBottom: '0.4rem' }}>
              Suggested Direct Navigation
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#0052cc' }}>
              Access our verified precast infrastructure resources directly:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            
            <a 
              href="#products"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #bfdbfe',
                borderRadius: '12px',
                padding: '1.5rem',
                textDecoration: 'none',
                color: '#0052cc',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0, 71, 186, 0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#0047BA';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#bfdbfe';
              }}
            >
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0047BA' }}>
                <Package size={20} />
              </div>
              <div style={{ fontWeight: 800, fontSize: '1rem' }}>Precast Products</div>
              <div style={{ fontSize: '0.82rem', color: '#0052cc' }}>Browse box culverts, bridge girders, and manhole systems.</div>
            </a>

            <a 
              href="#estore"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #bfdbfe',
                borderRadius: '12px',
                padding: '1.5rem',
                textDecoration: 'none',
                color: '#0052cc',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0, 71, 186, 0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#0047BA';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#bfdbfe';
              }}
            >
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0047BA' }}>
                <Compass size={20} />
              </div>
              <div style={{ fontWeight: 800, fontSize: '1rem' }}>eStore Hardware</div>
              <div style={{ fontSize: '0.82rem', color: '#0052cc' }}>Order precast accessories, joint sealants, and lifting rigging.</div>
            </a>

            <a 
              href="#contact"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #bfdbfe',
                borderRadius: '12px',
                padding: '1.5rem',
                textDecoration: 'none',
                color: '#0052cc',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0, 71, 186, 0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#0047BA';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#bfdbfe';
              }}
            >
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0047BA' }}>
                <Phone size={20} />
              </div>
              <div style={{ fontWeight: 800, fontSize: '1rem' }}>Direct Takeoff Contact</div>
              <div style={{ fontSize: '0.82rem', color: '#0052cc' }}>Submit structural drawings or request immediate engineering takeoff.</div>
            </a>

          </div>
        </div>
      </section>

    </div>
  );
};

export default NotFound;
