import React from 'react';
import { ChevronRight, Cpu, Microscope, Layers, Gauge, ShieldCheck, ArrowRight } from 'lucide-react';

const ManufacturingRnD = () => {
  const capabilities = [
    {
      title: 'Automated SCC Batching & Mixer Automation',
      desc: 'Computer-controlled moisture compensation batch plants delivering consistent 8,000 to 10,000 PSI high-early self-consolidating concrete with low water-cement ratios.',
      img: '/assets/media/automated_batching_real.jpg',
      icon: Gauge
    },
    {
      title: 'In-House ASTM Concrete Quality Testing Lab',
      desc: 'Full ASTM-certified testing facility equipped for compressive cylinder breaks, rapid chloride permeability (RCPT), and air entrainment verification.',
      img: '/assets/media/videoframe_7136.png',
      icon: Microscope
    },
    {
      title: 'Accelerated Steam Curing & Casting Beds',
      desc: 'Heated radiant steam curing beds enabling overnight 4,500 PSI release strengths and rapid cycle turnover for fast-track DOT project deliveries.',
      img: '/assets/media/operations_1_real.jpg',
      icon: Layers
    },
    {
      title: '3D BIM & Finite Element Structural Analysis',
      desc: 'Advanced finite element structural modeling and 3D clash detection ensuring flawless jobsite rigging and exact fit-up tolerances.',
      img: '/assets/media/structural_engineering_bim.jpg',
      icon: Cpu
    }
  ];

  return (
    <div className="manufacturing-rnd-page" style={{ backgroundColor: '#ffffff', color: '#0047ba', fontFamily: "'Manrope', sans-serif" }}>
      
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
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Manufacturing &amp; R&amp;D</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.6rem', lineHeight: 1.15, color: '#ffffff' }}>
            Advanced Precast Manufacturing &amp; R&amp;D
          </h1>

          <p style={{ fontSize: '1rem', color: '#bfdbfe', maxWidth: '720px', lineHeight: 1.55 }}>
            State-of-the-art production plants, automated SCC batching, and certified ASTM testing laboratories engineered for zero-defect precast production.
          </p>
        </div>
      </section>

      {/* 2. Capabilities Grid */}
      <section style={{ padding: '3.5rem 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {capabilities.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #bfdbfe',
                    boxShadow: '0 4px 16px rgba(0, 71, 186, 0.05)',
                    overflow: 'hidden',
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
                  <div style={{ height: '180px', width: '100%', overflow: 'hidden', backgroundColor: '#f0f5ff' }}>
                    <img src={cap.img} alt={cap.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: '#eff6ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0047BA',
                      marginBottom: '0.85rem'
                    }}>
                      <IconComp size={20} />
                    </div>

                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0052cc', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                      {cap.title}
                    </h3>

                    <p style={{ fontSize: '0.86rem', color: '#0052cc', lineHeight: 1.55, flexGrow: 1 }}>
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default ManufacturingRnD;
