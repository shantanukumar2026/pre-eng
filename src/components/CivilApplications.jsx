import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const SECTORS = [
  {
    title: 'DOT Highway & Bridge Infrastructure',
    desc: 'AASHTO-compliant precast box culverts, bridge girders, and wingwall abutments engineered for heavy vehicular traffic.',
    image: '/assets/media/Box Culvert/13.jpeg',
    specs: ['AASHTO M259 / M273', 'HS-20 & HS-25 Traffic Rated', 'Integral Toe Walls & Headwalls']
  },
  {
    title: 'Municipal Stormwater & Flood Control',
    desc: 'High-capacity underground drainage trunk lines, retention vaults, and catch basins preventing roadway washouts.',
    image: '/assets/media/culvert.jpg',
    specs: ['ASTM C1577 Box Culverts', 'High-Flow Hydraulic Openings', 'Integrated Sump Basins']
  },
  {
    title: 'Underground Utilities & Sewer Networks',
    desc: 'Modular precast sanitary manholes, internal drop structures, and electrical vault chambers for municipal networks.',
    image: '/assets/media/utility_manhole_real.jpg',
    specs: ['ASTM C478 Certified', 'Kor-N-Seal Pipe Boots', 'Monolithic Base Pouring']
  },
  {
    title: 'Rail & Heavy Transportation Corridors',
    desc: 'Heavy-axle track slabs, grade crossings, and retention barriers designed to endure continuous freight vibration.',
    image: '/assets/media/Box Culvert/15.jpeg',
    specs: ['Cooper E-80 Live Load', 'Corrosion Inhibited Mixes', 'Rapid Nighttime Crane Sets']
  }
];

const CivilApplications = () => {
  return (
    <section className="section-civil-applications padding-global" id="applications" style={{ backgroundColor: '#ffffff', paddingTop: '2.25rem', paddingBottom: '2.25rem', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container-large">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="h-flex-tiny is-center" style={{ marginBottom: '0.4rem' }}>
            <div className="chip_box"></div>
            <span className="chip">PROJECT SECTORS</span>
          </div>
          <h2 className="heading-style-h3 text-color-primary" style={{ fontSize: 'clamp(1.85rem, 2.8vw, 2.35rem)', color: '#002868', marginBottom: '0.5rem' }}>
            Heavy Civil &amp; Infrastructure Applications
          </h2>
          <p style={{ color: '#5a6e8c', maxWidth: '650px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Our certified precast systems are deployed across critical public transportation, highway, and municipal utility corridors.
          </p>
        </div>

        {/* 4-Column Sector Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
          {SECTORS.map((sec, idx) => (
            <div 
              key={idx}
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 14px rgba(0, 34, 89, 0.04)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ height: '170px', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#002868' }}>
                <img 
                  src={sec.image} 
                  alt={sec.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0, 20, 50, 0.1) 0%, rgba(0, 20, 50, 0.5) 100%)' }}></div>
              </div>

              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#002868', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                    {sec.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55, marginBottom: '1rem' }}>
                    {sec.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1.25rem' }}>
                    {sec.specs.map((sp, sIdx) => (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#334155', fontWeight: 600 }}>
                        <ShieldCheck size={14} style={{ color: '#0047ba', flexShrink: 0 }} />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href="#contact" 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    color: '#0047ba', 
                    fontSize: '0.84rem', 
                    fontWeight: 700, 
                    textDecoration: 'none',
                    borderTop: '1px solid #e2e8f0',
                    paddingTop: '0.75rem'
                  }}
                >
                  <span>View Project Specs</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CivilApplications;
