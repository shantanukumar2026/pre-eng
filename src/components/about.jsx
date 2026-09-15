import React from 'react';
import { ChevronRight, ShieldCheck, Target, Award, ArrowRight, Layers } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page" style={{ backgroundColor: '#ffffff', color: '#0047ba', fontFamily: "'Manrope', sans-serif" }}>
      
      {/* 1. Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #001f4d 0%, #002868 50%, #0047BA 100%)',
        color: '#0047BA',
        padding: '6.5rem 5% 3.25rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 80% 30%, rgba(74, 136, 255, 0.25) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#bfdbfe', marginBottom: '0.75rem' }}>
            <a href="#home" style={{ color: '#bfdbfe', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={13} style={{ opacity: 0.7 }} />
            <span style={{ color: '#ffffff', fontWeight: 600 }}>About PETG</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.6rem', lineHeight: 1.15, color: '#ffffff' }}>
            About Precast Engineering Tomorrow
          </h1>

          <p style={{ fontSize: '1rem', color: '#bfdbfe', maxWidth: '720px', lineHeight: 1.55 }}>
            Leading North America in precision precast concrete infrastructure, custom steel mold fabrication, and 50-state licensed PE engineering calculations.
          </p>
        </div>
      </section>

      {/* 2. Overview Grid */}
      <section style={{ padding: '3.5rem 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
              color: '#0047BA',
              padding: '3px 12px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.65rem'
            }}>
              <span>➔</span>
              <span>OUR PROFILE</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.1rem)', fontWeight: 800, color: '#0052cc', lineHeight: 1.25, marginBottom: '1rem' }}>
              Precision Engineering for Resilient Infrastructure
            </h2>

            <p style={{ fontSize: '0.95rem', color: '#0052cc', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              Precast Engineering Group (PETG) manufactures high-tolerance precast components for transportation departments, utility authorities, and heavy civil contractors.
            </p>

            <p style={{ fontSize: '0.95rem', color: '#0052cc', lineHeight: 1.65, marginBottom: '1.75rem' }}>
              With dedicated manufacturing hubs in the Northeast, Southeast, and Midwest, we combine rapid delivery cycles with in-house ASTM testing and full PE structural stamps.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="#company-profile"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: '#0047BA',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  textDecoration: 'none'
                }}
              >
                <span>Full Company Profile</span>
                <ArrowRight size={14} />
              </a>

              <a 
                href="#team"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  color: '#0047BA',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  textDecoration: 'none'
                }}
              >
                <span>Engineering Leadership</span>
              </a>
            </div>
          </div>

          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #bfdbfe', boxShadow: '0 4px 18px rgba(0, 71, 186, 0.08)' }}>
            <img src="/assets/media/culvert.jpg" alt="Precast Infrastructure Facility" style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
