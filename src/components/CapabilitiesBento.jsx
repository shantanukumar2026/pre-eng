import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CAPABILITIES = [
  {
    image: '/assets/media/videoframe_7136.png',
    tag: 'STRUCTURAL DESIGN',
    title: 'Structural Precast Engineering',
    what: 'Licensed PE stamped structural calculations and 3D Revit BIM models for civil infrastructure.',
    why: 'Secures fast municipal & DOT permit approvals and eliminates costly jobsite fitting mistakes.',
    how: 'In-house civil engineers calculate site loads, size structures, and provide sealed submittals.',
    link: '#contact'
  },
  {
    image: '/assets/media/Box Culvert/13.jpeg',
    tag: 'INFRASTRUCTURE',
    title: 'Heavy Civil Box Culverts',
    what: 'Heavy-duty reinforced concrete rectangular conduits for stormwater conveyance and stream crossings.',
    why: 'Withstands heavy highway traffic loads and high water flow volumes without risk of road washout.',
    how: 'Cast monolithic to ASTM C1577 standards and delivered ready for fast crane installation.',
    link: '#products'
  },
  {
    image: '/assets/media/trench-forms-01-5001.JPG',
    tag: 'PRECISION CASTING',
    title: 'Plant Manufacturing & Tooling',
    what: 'Custom heavy steel mold tooling and computerized high-strength concrete batch casting.',
    why: 'Guarantees exact millimeter dimensions, high compressive strength, and decades of durability.',
    how: 'Fabricated in controlled indoor plant beds with computerized batching and steam curing.',
    link: '#contact'
  },
  {
    image: '/assets/media/Box Culvert/15.jpeg',
    tag: 'PROJECT LOGISTICS',
    title: 'Jobsite Logistics & Rigging',
    what: 'Coordinated heavy-haul flatbed transport synchronized directly with excavation crews.',
    why: 'Prevents expensive crane standby downtime and keeps your civil project strictly on schedule.',
    how: 'Units arrive sequenced on flatbeds to be hoisted directly from truck into the prepared trench.',
    link: '#contact'
  }
];

const CapabilitiesBento = () => {
  return (
    <section className="section-capabilities padding-global" id="capabilities" style={{ backgroundColor: '#f8fafc', paddingTop: '5rem', paddingBottom: '5rem', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container-large">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="h-flex-tiny is-center" style={{ marginBottom: '0.5rem' }}>
            <div className="chip_box"></div>
            <span className="chip">ENGINEERING SERVICES</span>
          </div>
          <h2 className="heading-style-h3 text-color-primary" style={{ fontSize: 'clamp(1.85rem, 2.8vw, 2.35rem)', color: '#002868', marginBottom: '0.6rem' }}>
            Precast Engineering &amp; Capabilities Breakdown
          </h2>
          <p style={{ color: '#5a6e8c', maxWidth: '680px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
            A straightforward explanation of what we provide, why it is needed for civil projects, and how we deliver it on site.
          </p>
        </div>

        {/* 4-Card Clean Structured Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
          {CAPABILITIES.map((cap, idx) => (
            <div 
              key={idx} 
              className="capability-corporate-card"
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 16px rgba(0, 34, 89, 0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Top Image Container */}
              <div style={{ height: '190px', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#002868' }}>
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
                  background: 'linear-gradient(180deg, rgba(0, 20, 50, 0.15) 0%, rgba(0, 20, 50, 0.55) 100%)'
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

              {/* Card Body with WHAT / WHY / HOW */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#002868', marginBottom: '1.25rem', lineHeight: 1.3 }}>
                    {cap.title}
                  </h3>

                  {/* Structured 3-Point Breakdown */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.5rem' }}>
                    
                    {/* WHAT IT IS */}
                    <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '6px', borderLeft: '3px solid #0047ba' }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0047ba', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '3px' }}>
                        What it is
                      </div>
                      <p style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.5, margin: 0 }}>
                        {cap.what}
                      </p>
                    </div>

                    {/* WHY YOU NEED IT */}
                    <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '6px', borderLeft: '3px solid #0284c7' }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0284c7', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '3px' }}>
                        Why you need it
                      </div>
                      <p style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.5, margin: 0 }}>
                        {cap.why}
                      </p>
                    </div>

                    {/* HOW IT WORKS */}
                    <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '6px', borderLeft: '3px solid #10b981' }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#059669', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '3px' }}>
                        How we deliver
                      </div>
                      <p style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.5, margin: 0 }}>
                        {cap.how}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Card Action Link */}
                <a 
                  href={cap.link} 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    color: '#0047ba', 
                    fontSize: '0.85rem', 
                    fontWeight: 700, 
                    textDecoration: 'none',
                    borderTop: '1px solid #e2e8f0',
                    paddingTop: '0.85rem',
                    transition: 'gap 0.2s ease'
                  }}
                  className="cap-card-link"
                >
                  <span>Request Engineering Review</span>
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
