import React from 'react';
import { ChevronRight, Award, ShieldCheck, CheckCircle2, Globe, ArrowRight } from 'lucide-react';

const Membership = () => {
  const associations = [
    {
      acronym: 'NPCA',
      name: 'National Precast Concrete Association',
      type: 'Certified Plant Member #11082',
      details: 'Annual unannounced plant inspections, certified concrete technician staffing, and compliance with the NPCA Quality Control Manual for Precast Concrete Plants.'
    },
    {
      acronym: 'PCI',
      name: 'Precast/Prestressed Concrete Institute',
      type: 'Plant Certified Producer (Group B & C)',
      details: 'Certified for high-capacity pre-stressed bridge components, post-tensioned members, and complex multi-span infrastructure deck systems.'
    },
    {
      acronym: 'ACI',
      name: 'American Concrete Institute',
      type: 'Corporate Technical Partner',
      details: 'Active participation in ACI Committee 318 (Structural Concrete Building Code) and Committee 550 (Precast Concrete Structures).'
    },
    {
      acronym: 'ASTM',
      name: 'ASTM International',
      type: 'Organizational Committee Member',
      details: 'Strict adherence to ASTM C1577 (Precast Box Culverts), ASTM C478 (Precast Manholes), and ASTM C990 (Joint Resilient Sealants).'
    }
  ];

  return (
    <div className="membership-page" style={{ backgroundColor: '#ffffff', color: '#0047ba', fontFamily: "'Manrope', sans-serif" }}>
      
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
            <a href="#company" style={{ color: '#bfdbfe', textDecoration: 'none' }}>Company</a>
            <ChevronRight size={13} style={{ opacity: 0.7 }} />
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Memberships &amp; Credentials</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.6rem', lineHeight: 1.15, color: '#ffffff' }}>
            Accredited Industry Memberships
          </h1>

          <p style={{ fontSize: '1rem', color: '#bfdbfe', maxWidth: '720px', lineHeight: 1.55 }}>
            Our leadership across major North American precast and civil engineering institutes validates our manufacturing excellence.
          </p>
        </div>
      </section>

      {/* 2. Grid */}
      <section style={{ padding: '3.5rem 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {associations.map((assoc, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '14px',
                  padding: '2rem 1.75rem',
                  border: '1px solid #bfdbfe',
                  boxShadow: '0 4px 16px rgba(0, 71, 186, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 71, 186, 0.12)';
                  e.currentTarget.style.borderColor = '#0047BA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 71, 186, 0.05)';
                  e.currentTarget.style.borderColor = '#bfdbfe';
                }}
              >
                <div style={{
                  display: 'inline-block',
                  backgroundColor: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  color: '#0047BA',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 900,
                  fontFamily: "'JetBrains Mono', monospace",
                  marginBottom: '1rem',
                  width: 'fit-content'
                }}>
                  {assoc.acronym}
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0052cc', marginBottom: '0.35rem' }}>
                  {assoc.name}
                </h3>

                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0047BA', marginBottom: '0.75rem' }}>
                  {assoc.type}
                </div>

                <p style={{ fontSize: '0.88rem', color: '#0052cc', lineHeight: 1.6, flexGrow: 1 }}>
                  {assoc.details}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Membership;
