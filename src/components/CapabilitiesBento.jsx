import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CAPABILITIES = [
  {
    image: '/assets/media/engineering_design_bg_1787569503505.jpg',
    tag: 'STRUCTURAL DESIGN',
    title: 'Structural Precast Engineering',
    desc: 'In-house licensed civil and structural engineers providing stamped PE calculations, 3D BIM coordination, and submittals.',
    points: [
      '50-State PE Stamped Calculations',
      'Revit & 3D BIM Coordination',
      'Buoyancy & Hydraulic Sizing'
    ],
    link: '#contact'
  },
  {
    image: '/assets/media/precast_manufacturing_bg_1787569523806.jpg',
    tag: 'INFRASTRUCTURE',
    title: 'Infrastructure Solutions',
    desc: 'Heavy civil precast systems engineered for storm drainage, highway conduits, and subterranean utility infrastructure.',
    points: [
      'AASHTO & ASTM Certified Structures',
      'High-Capacity Water & Drainage Vaults',
      'Standard & Custom Sized Units'
    ],
    link: '#products'
  },
  {
    image: '/assets/media/quality_control_bg_1787569563820.jpg',
    tag: 'CUSTOM CASTING',
    title: 'Custom Precast Casting',
    desc: 'Specialized modular formwork and custom mold tooling engineered for complex geometric and architectural precast designs.',
    points: [
      'Custom Steel Mold Fabrication',
      'Precision Knockouts & Boot Inserts',
      'Engineered Concrete Mixes'
    ],
    link: '#contact'
  },
  {
    image: '/assets/media/heavy_logistics_bg_1787569548808.jpg',
    tag: 'PROJECT LOGISTICS',
    title: 'Project Logistics & Rigging',
    desc: 'Dedicated transport fleet synchronized directly with contractor excavation and crane pick schedules to eliminate site downtime.',
    points: [
      'Flatbed & Heavy-Haul Transport',
      'Direct Jobsite Crane Coordination',
      'Permitted Regional Route Delivery'
    ],
    link: '#contact'
  }
];

const CapabilitiesBento = () => {
  return (
    <section className="section-capabilities padding-global" id="capabilities" style={{ backgroundColor: '#f8fafc', paddingTop: '3.5rem', paddingBottom: '3.5rem', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container-large">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="h-flex-tiny is-center" style={{ marginBottom: '0.5rem' }}>
            <div className="chip_box"></div>
            <span className="chip">ENGINEERING SERVICES</span>
          </div>
          <h2 className="heading-style-h3 text-color-primary" style={{ fontSize: 'clamp(1.85rem, 2.8vw, 2.35rem)', color: '#002868', marginBottom: '0.6rem' }}>
            Comprehensive Precast &amp; Engineering Solutions
          </h2>
          <p style={{ color: '#5a6e8c', maxWidth: '680px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
            From initial structural engineering and PE stamped submittals to precision plant fabrication and coordinated jobsite delivery.
          </p>
        </div>

        {/* 4-Card Clean Corporate Image Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
          {CAPABILITIES.map((cap, idx) => (
            <div 
              key={idx} 
              className="capability-corporate-card"
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 14px rgba(0, 34, 89, 0.04)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Top Image Container */}
              <div style={{ height: '185px', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#002868' }}>
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
                  background: 'linear-gradient(180deg, rgba(0, 20, 50, 0.2) 0%, rgba(0, 20, 50, 0.55) 100%)'
                }}></div>
                <span style={{ 
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  fontSize: '0.7rem', 
                  fontWeight: 800, 
                  letterSpacing: '0.08em', 
                  color: '#ffffff',
                  background: 'rgba(0, 40, 104, 0.85)',
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
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#002868', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                    {cap.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55, marginBottom: '1.15rem' }}>
                    {cap.desc}
                  </p>

                  {/* Bullet Points */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {cap.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#334155' }}>
                        <CheckCircle2 size={13} style={{ color: '#0047ba', flexShrink: 0 }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <a 
                  href={cap.link} 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    color: 'var(--color-primary, #0047ba)', 
                    fontSize: '0.84rem', 
                    fontWeight: 700, 
                    textDecoration: 'none',
                    borderTop: '1px solid #f1f5f9',
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
