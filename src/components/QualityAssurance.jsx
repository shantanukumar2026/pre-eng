import React from 'react';
import { ShieldCheck, Microscope, Cpu, Layers } from 'lucide-react';

const QC_PILLARS = [
  {
    icon: Microscope,
    title: 'Compressive Strength Testing',
    desc: 'Concrete test cylinders sampled and broken per ASTM standard laboratory procedures.'
  },
  {
    icon: ShieldCheck,
    title: 'Industry Standards Compliance',
    desc: 'Manufactured in accordance with applicable ASTM and state DOT engineering standards.'
  },
  {
    icon: Cpu,
    title: 'Controlled Plant Batching',
    desc: 'Automated aggregate and cement batching systems to maintain consistent mix proportions.'
  },
  {
    icon: Layers,
    title: 'Dimensional Inspection',
    desc: 'Formwork dimensions and steel reinforcement placement inspected prior to casting.'
  }
];

const QualityAssurance = () => {
  return (
    <section className="section-qc padding-global" id="quality" style={{ backgroundColor: '#ffffff', color: '#0047ba', paddingTop: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid #bfdbfe' }}>
      <div className="container-large">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="h-flex-tiny is-center" style={{ marginBottom: '0.4rem' }}>
            <div className="chip_box" style={{ background: '#0047ba' }}></div>
            <span className="chip" style={{ color: '#0047ba' }}>PLANT PRACTICES</span>
          </div>
          <h2 className="heading-style-h3" style={{ fontSize: 'clamp(1.85rem, 2.8vw, 2.35rem)', color: '#0047ba', marginBottom: '0.5rem', fontWeight: 800 }}>
            Quality Control &amp; Testing Standards
          </h2>
          <p style={{ color: '#0052cc', maxWidth: '650px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 500 }}>
            Quality control procedures applied during precast concrete fabrication.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {QC_PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: '#f0f5ff',
                  border: '1px solid #bfdbfe',
                  borderRadius: '10px',
                  padding: '1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  boxShadow: '0 2px 8px rgba(0, 71, 186, 0.05)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0047ba', border: '1px solid #bfdbfe' }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0047ba', margin: 0, lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#0052cc', lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default QualityAssurance;
