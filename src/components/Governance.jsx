import React from 'react';
import { ChevronRight, Shield, FileCheck, CheckCircle2, Award, Scale, AlertTriangle, ArrowRight } from 'lucide-react';

const Governance = () => {
  const policies = [
    {
      title: 'Structural Safety & Quality Policy',
      desc: 'All structural precast elements undergo mandatory 28-day compressive break testing, ultrasonic rebar cover depth checks, and traceable batch logs.',
      icon: Shield
    },
    {
      title: 'Ethical Supply Chain & Traceable Materials',
      desc: '100% domestic American steel rebar (Buy America compliant) and Type 1L low-carbon cement sourced from certified sustainable mills.',
      icon: Scale
    },
    {
      title: 'Plant Zero-Harm Environmental Protocol',
      desc: 'Closed-loop water recycling systems and zero-waste aggregate recovery in full accordance with ISO 14001 environmental frameworks.',
      icon: FileCheck
    },
    {
      title: 'DOT & Municipal Regulatory Oversight',
      desc: 'Continuous auditing by State DOT inspectors and accredited third-party NPCA plant certification inspectors.',
      icon: Award
    }
  ];

  return (
    <div className="governance-page" style={{ backgroundColor: '#ffffff', color: '#003380', fontFamily: "'Manrope', sans-serif" }}>
      
      {/* 1. Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #001f4d 0%, #002868 50%, #0047BA 100%)',
        color: '#ffffff',
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
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#93c5fd', marginBottom: '0.75rem' }}>
            <a href="#home" style={{ color: '#bfdbfe', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={13} style={{ opacity: 0.7 }} />
            <a href="#company" style={{ color: '#bfdbfe', textDecoration: 'none' }}>Company</a>
            <ChevronRight size={13} style={{ opacity: 0.7 }} />
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Governance &amp; Compliance</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.6rem', lineHeight: 1.15, color: '#ffffff' }}>
            Corporate Governance &amp; Ethical Standards
          </h1>

          <p style={{ fontSize: '1rem', color: '#bfdbfe', maxWidth: '720px', lineHeight: 1.55 }}>
            Our governance framework guarantees uncompromised structural integrity, strict regulatory compliance, and responsible environmental stewardship.
          </p>
        </div>
      </section>

      {/* 2. Policies Grid */}
      <section style={{ padding: '3.5rem 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {policies.map((p, idx) => {
              const IconComp = p.icon;
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

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#003380', marginBottom: '0.65rem' }}>
                    {p.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#003380', lineHeight: 1.6, flexGrow: 1 }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Governance;
