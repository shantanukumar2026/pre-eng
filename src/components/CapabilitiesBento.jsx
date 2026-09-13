import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CAPABILITIES = [
  {
    image: '/assets/media/videoframe_7136.png',
    tag: 'STRUCTURAL DESIGN',
    title: 'Structural Precast Engineering',
    desc: '3D BIM modeling and licensed PE stamped drawings engineered for civil infrastructure.',
    link: '#contact'
  },
  {
    image: '/assets/media/Box Culvert/13.jpeg',
    tag: 'INFRASTRUCTURE',
    title: 'Heavy Civil Box Culverts',
    desc: 'Large concrete drainage boxes used under roads and highways for heavy stormwater flow.',
    link: '#products'
  },
  {
    image: '/assets/media/trench-forms-01-5001.JPG',
    tag: 'PRECISION CASTING',
    title: 'Plant Manufacturing & Tooling',
    desc: 'Custom heavy steel mold forms and high-strength concrete casting built to exact job specs.',
    link: '#contact'
  },
  {
    image: '/assets/media/Box Culvert/15.jpeg',
    tag: 'PROJECT LOGISTICS',
    title: 'Jobsite Logistics & Rigging',
    desc: 'Scheduled flatbed truck delivery coordinated directly with your jobsite crane offloading.',
    link: '#contact'
  }
];

const CapabilitiesBento = () => {
  return (
    <section className="section-capabilities padding-global" id="capabilities" style={{ backgroundColor: '#f0f5ff', paddingTop: '2.25rem', paddingBottom: '2.25rem', borderBottom: '1px solid #bfdbfe' }}>
      <div className="container-large">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="h-flex-tiny is-center" style={{ marginBottom: '0.5rem' }}>
            <div className="chip_box"></div>
            <span className="chip">ENGINEERING SERVICES</span>
          </div>
          <h2 className="heading-style-h3 text-color-primary" style={{ fontSize: 'clamp(1.85rem, 2.8vw, 2.35rem)', color: '#002868', marginBottom: '0.6rem' }}>
            Core Precast Capabilities
          </h2>
          <p style={{ color: '#003380', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
            Reliable precast engineering, plant manufacturing, and jobsite delivery for civil projects.
          </p>
        </div>

        {/* 4-Card Clean Minimal Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {CAPABILITIES.map((cap, idx) => (
            <div 
              key={idx} 
              className="capability-corporate-card"
              style={{
                background: '#ffffff',
                border: '1px solid #bfdbfe',
                borderRadius: '10px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 14px rgba(0, 71, 186, 0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Top Image Container */}
              <div style={{ height: '180px', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#002868' }}>
                <img 
                  src={cap.image} 
                  alt={cap.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  className="cap-card-image"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0, 20, 50, 0.1) 0%, rgba(0, 20, 50, 0.5) 100%)'
                }}></div>
                <span style={{ 
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  fontSize: '0.7rem', 
                  fontWeight: 800, 
                  letterSpacing: '0.08em', 
                  color: '#ffffff',
                  background: 'rgba(0, 40, 104, 0.88)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  {cap.tag}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#002868', marginBottom: '0.6rem', lineHeight: 1.35 }}>
                    {cap.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#003380', lineHeight: 1.6, margin: '0 0 1.25rem 0' }}>
                    {cap.desc}
                  </p>
                </div>

                {/* Card Action Link */}
                <a 
                  href={cap.link} 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    color: '#0047ba', 
                    fontSize: '0.86rem', 
                    fontWeight: 700, 
                    textDecoration: 'none',
                    borderTop: '1px solid #f0f5ff',
                    paddingTop: '0.85rem',
                    transition: 'gap 0.2s ease'
                  }}
                  className="cap-card-link"
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesBento;
