import React from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Cpu, 
  Truck, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  HardHat,
  Award
} from 'lucide-react';

const CompanyIntro = () => {
  return (
    <section className="section-company-intro padding-global" id="about-intro" style={{
      backgroundColor: '#ffffff',
      paddingTop: '4.5rem',
      paddingBottom: '4.5rem',
      borderBottom: '1.5px solid #bfdbfe'
    }}>
      <div className="container-large" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Top Header Pill & Headline */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#eff6ff',
            border: '1px solid #bfdbfe',
            color: '#1e2ede',
            padding: '5px 16px',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1e2ede' }}></span>
            <span>Precast Infrastructure</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
            fontWeight: 800,
            color: '#0047ba',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '1.25rem'
          }}>
            Precision Concrete Engineering Built for Heavy Civil Projects
          </h2>

          <p style={{
            fontSize: '1.08rem',
            color: '#1e2ede',
            lineHeight: 1.65,
            fontWeight: 600
          }}>
            At PEG (Precast Engineering &amp; Technologies), we design, engineer, and manufacture high-strength precast concrete structures for DOT highways, municipal stormwater networks, commercial utilities, and heavy wastewater systems.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Card 1 */}
          <div style={{
            backgroundColor: '#f4f8ff',
            border: '1.5px solid #bfdbfe',
            borderRadius: '12px',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#dbeafe',
                color: '#1e2ede',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Cpu size={22} />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0047ba', marginBottom: '0.5rem' }}>
                Licensed PE Engineering
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#1e2ede', lineHeight: 1.55, fontWeight: 500 }}>
                50-state stamped structural calculations, 3D BIM clash detection, and certified takeoff submittals.
              </p>
            </div>
            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #bfdbfe', fontSize: '0.82rem', color: '#0047ba', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={15} />
              <span>AASHTO &amp; ASTM Standards</span>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{
            backgroundColor: '#f4f8ff',
            border: '1.5px solid #bfdbfe',
            borderRadius: '12px',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#dbeafe',
                color: '#1e2ede',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Building2 size={22} />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0047ba', marginBottom: '0.5rem' }}>
                Automated Casting Plants
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#1e2ede', lineHeight: 1.55, fontWeight: 500 }}>
                Self-consolidating 8,000–10,000 PSI high-early concrete mixes cast in precision CNC heavy steel formwork.
              </p>
            </div>
            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #bfdbfe', fontSize: '0.82rem', color: '#0047ba', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} />
              <span>High-Density Impermeability</span>
            </div>
          </div>

          {/* Card 3 */}
          <div style={{
            backgroundColor: '#f4f8ff',
            border: '1.5px solid #bfdbfe',
            borderRadius: '12px',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#dbeafe',
                color: '#1e2ede',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Award size={22} />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0047ba', marginBottom: '0.5rem' }}>
                ASTM Certified QA Labs
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#1e2ede', lineHeight: 1.55, fontWeight: 500 }}>
                Rigorous in-house compressive cylinder breaks, rapid chloride permeability testing, and joint vacuum verification.
              </p>
            </div>
            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #bfdbfe', fontSize: '0.82rem', color: '#0047ba', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} />
              <span>Batch-by-Batch Testing</span>
            </div>
          </div>

          {/* Card 4 */}
          <div style={{
            backgroundColor: '#f4f8ff',
            border: '1.5px solid #bfdbfe',
            borderRadius: '12px',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#dbeafe',
                color: '#1e2ede',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Truck size={22} />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0047ba', marginBottom: '0.5rem' }}>
                Synchronized Site Logistics
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#1e2ede', lineHeight: 1.55, fontWeight: 500 }}>
                Specialized boom truck and multi-axle freight delivery coordinated directly with your jobsite crane pick windows.
              </p>
            </div>
            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #bfdbfe', fontSize: '0.82rem', color: '#0047ba', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HardHat size={15} />
              <span>Zero Jobsite Delay</span>
            </div>
          </div>

        </div>

        {/* Corporate Trust Banner */}
        <div style={{
          backgroundColor: '#0047ba',
          borderRadius: '16px',
          padding: '2rem 2.5rem',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          border: '1.5px solid #1e2ede',
          boxShadow: '0 8px 24px rgba(0, 71, 186, 0.2)'
        }}>
          <div>
            <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
              Have Custom Project Specifications or Submittal Requirements?
            </h4>
            <p style={{ color: '#bfdbfe', fontSize: '0.95rem', maxWidth: '750px', lineHeight: 1.5 }}>
              Send us your project plan sheets for rapid civil engineering takeoff, stamped calculations, and contractor pricing.
            </p>
          </div>

          <a href="#contact" style={{
            backgroundColor: '#ffffff',
            color: '#0047ba',
            padding: '12px 26px',
            borderRadius: '9999px',
            fontWeight: 800,
            fontSize: '0.92rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
          }}>
            <span>Submit Plans for Quote</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default CompanyIntro;
