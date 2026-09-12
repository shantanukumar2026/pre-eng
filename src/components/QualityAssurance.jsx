import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Microscope, Cpu, Layers } from 'lucide-react';

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
    <section className="section-qc padding-global" id="quality" style={{ backgroundColor: '#002868', color: '#ffffff', paddingTop: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="container-large">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="h-flex-tiny is-center" style={{ marginBottom: '0.4rem' }}>
            <div className="chip_box" style={{ background: '#60a5fa' }}></div>
            <span className="chip" style={{ color: '#93c5fd' }}>PLANT PRACTICES</span>
          </div>
          <h2 className="heading-style-h3" style={{ fontSize: 'clamp(1.85rem, 2.8vw, 2.35rem)', color: '#ffffff', marginBottom: '0.5rem' }}>
            Quality Control &amp; Testing Standards
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '650px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.6 }}>
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
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  padding: '1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#93c5fd' }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
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
