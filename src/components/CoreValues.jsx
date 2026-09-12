import React from 'react';
import { Heart, Lightbulb, Target, Users, ShieldCheck, Clock, CheckCircle2, Factory } from 'lucide-react';

const VALUES_DATA = [
  {
    icon: Users,
    title: 'Contractor-First Support',
    desc: 'We align directly with your construction schedule, site conditions, and project budget to keep your project moving forward smoothly.'
  },
  {
    icon: Factory,
    title: 'Advanced Manufacturing',
    desc: 'Precision casting with automated batch plants, steam curing beds, and CNC-machined steel formwork for tight tolerances.'
  },
  {
    icon: ShieldCheck,
    title: 'Certified Engineering',
    desc: '50-state licensed PE calculations, 3D BIM coordination models, and full ASTM and state DOT submittal packages.'
  },
  {
    icon: Clock,
    title: 'Reliable Delivery Schedules',
    desc: 'Coordinated flatbed jobsite delivery synchronized directly with contractor crane pick schedules to minimize trench downtime.'
  }
];

const CoreValues = () => {
  return (
    <section className="section-values padding-global" style={{ backgroundColor: '#ffffff', paddingTop: '3.5rem', paddingBottom: '3.5rem', borderTop: '1px solid #e2e8f0' }}>
      <div className="container-large">
        <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
          <div className="h-flex-tiny is-center" style={{ marginBottom: '0.5rem' }}>
            <div className="chip_box"></div>
            <span className="chip">HOW WE OPERATE</span>
          </div>
          <h2 className="heading-style-h3 text-color-primary" style={{ fontSize: 'clamp(1.85rem, 2.8vw, 2.35rem)', color: '#002868', marginBottom: '0.5rem' }}>
            Our Operating Principles
          </h2>
          <p style={{ color: '#5a6e8c', maxWidth: '650px', margin: '0 auto', fontSize: '1rem' }}>
            Practical commitments that ensure high-quality precast structures, accurate submittals, and dependable jobsite execution.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {VALUES_DATA.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                key={idx} 
                className="value-card" 
                style={{ 
                  background: '#f8fafc', 
                  padding: '1.75rem', 
                  borderRadius: '8px', 
                  border: '1px solid #e2e8f0', 
                  borderTop: '3px solid var(--color-primary, #0047ba)', 
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease' 
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: '#eff6ff', color: 'var(--color-primary, #0047ba)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Icon size={22} />
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem', color: '#002868' }}>
                  {val.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55 }}>
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
