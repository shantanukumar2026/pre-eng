import React from 'react';
import { ChevronRight, Shield, Award, Cpu, HardHat, FileCheck, Layers, ArrowRight } from 'lucide-react';

const Team = () => {
  const departments = [
    {
      title: 'Structural Engineering & BIM Division',
      head: 'Director of Precast Engineering, PE, SE',
      roleIcon: Cpu,
      responsibilities: 'Oversees 50-state PE stamped calculations, 3D Revit modeling, and AASHTO LRFD compliance for all bridge girders and custom box culverts.'
    },
    {
      title: 'Tooling & Mold Fabrication Team',
      head: 'Principal Tooling Engineer',
      roleIcon: Layers,
      responsibilities: 'Leads custom precision steel mold fabrication, high-tolerance CNC machining, and automated hydraulic collapsible forms.'
    },
    {
      title: 'Quality Assurance & ASTM Testing Lab',
      head: 'QA/QC Laboratory Director',
      roleIcon: FileCheck,
      responsibilities: 'Directs in-house cylinder break testing, freeze-thaw durability assessments, and batch-by-batch self-consolidating concrete (SCC) verification.'
    },
    {
      title: 'Heavy Logistics & Rigging Operations',
      head: 'VP of Transportation & Site Logistics',
      roleIcon: HardHat,
      responsibilities: 'Coordinates nationwide specialized multi-axle heavy-haul transport, crane rigging, and turnkey jobsite offloading protocols.'
    }
  ];

  return (
    <div className="team-page" style={{ backgroundColor: '#ffffff', color: '#0047ba', fontFamily: "'Manrope', sans-serif" }}>
      
      {/* 1. Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0038b8 0%, #0047ba 50%, #1e2ede 100%)',
        color: '#ffffff',
        padding: '6.5rem 5% 3.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 80% 30%, rgba(74, 136, 255, 0.3) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1600px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#bfdbfe', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <a href="#home" style={{ color: '#bfdbfe', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={13} style={{ opacity: 0.7 }} />
            <a href="#company-profile" style={{ color: '#bfdbfe', textDecoration: 'none' }}>Company</a>
            <ChevronRight size={13} style={{ opacity: 0.7 }} />
            <span style={{ color: '#ffffff', fontWeight: 700 }}>Our Team</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.6rem', lineHeight: 1.15, color: '#ffffff' }}>
            Engineering Leadership &amp; Technical Teams
          </h1>

          <p style={{ fontSize: '1.05rem', color: '#bfdbfe', maxWidth: '780px', lineHeight: 1.6 }}>
            Our multidisciplinary team unites licensed structural engineers, mold master craftspeople, and certified QA technicians dedicated to precision precast execution.
          </p>
        </div>
      </section>

      {/* 2. Content */}
      <section style={{ padding: '4rem 5% 6rem', backgroundColor: '#f4f8ff' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
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
              <span>TECHNICAL DIVISIONS</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.1rem)', fontWeight: 800, color: '#0052cc' }}>
              Engineered with Professional Precision
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {departments.map((dept, idx) => {
              const IconComp = dept.roleIcon;
              return (
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
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    backgroundColor: '#eff6ff',
                    border: '1.5px solid #bfdbfe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0047BA',
                    marginBottom: '1.25rem'
                  }}>
                    <IconComp size={24} />
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0052cc', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                    {dept.title}
                  </h3>

                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0047BA', marginBottom: '0.85rem' }}>
                    {dept.head}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#0052cc', lineHeight: 1.6, flexGrow: 1 }}>
                    {dept.responsibilities}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Direct Contact CTA */}
      <section style={{ backgroundColor: '#f0f5ff', borderTop: '1px solid #dbeafe', padding: '3rem 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0052cc', marginBottom: '0.5rem' }}>
            Consult with Our Licensed Engineering Team
          </h3>
          <p style={{ fontSize: '0.92rem', color: '#0052cc', marginBottom: '1.5rem' }}>
            Get direct technical submittals, PE stamped calculations, or jobsite feasibility reviews.
          </p>
          <a 
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#0047BA',
              color: '#ffffff',
              padding: '0.75rem 1.6rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none'
            }}
          >
            <span>Request Technical Consultation</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Team;
