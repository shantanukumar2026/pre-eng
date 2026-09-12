import React from 'react';
import { Clock, ArrowRight, Compass, CheckCircle2, TrendingUp, ShieldCheck, FileSpreadsheet } from 'lucide-react';

const Consultation = () => {
  return (
    <>
      <section className="section-consultation padding-global" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }} id="contact">
        <div className="container-large">
          <div className="consult-wrapper" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2.5rem' }}>
            <div className="consult-left">
              <div className="consult-icon" style={{ width: '50px', height: '50px', borderRadius: '10px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary, #0047ba)' }}>
                <Clock size={32} />
              </div>
              <div>
                <h3 className="consult-title" style={{ fontSize: '1.45rem', color: '#002868', fontWeight: 800, marginBottom: '0.4rem' }}>
                  Request a Project Quote &amp; Engineering Submittal
                </h3>
                <p className="consult-desc" style={{ fontSize: '0.95rem', color: '#5a6e8c', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Speak directly with our licensed precast engineers for immediate plan takeoffs, DOT-approved submittal packages, and dispatch schedules.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="tel:6314521111" className="button_hero_primary" style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <span>Call (631) 452-1111</span>
                    <ArrowRight size={14} />
                  </a>
                  <a href="mailto:info@precasteng.com" className="btn-solid-blue" style={{ background: '#ffffff', border: '1px solid #cbd5e1', color: '#002868', padding: '0.75rem 1.4rem', fontSize: '0.9rem', boxShadow: 'none' }}>
                    <span>Email Blueprints</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="consult-right" style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '2rem' }}>
              <div className="consult-feature" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <div style={{ color: 'var(--color-primary, #0047ba)' }}><ShieldCheck size={24} /></div>
                <div>
                  <strong style={{ display: 'block', color: '#002868', fontSize: '0.95rem' }}>50-State PE Certified</strong>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Stamped drawings &amp; buoyancy calculations</span>
                </div>
              </div>

              <div className="consult-feature" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <div style={{ color: 'var(--color-primary, #0047ba)' }}><Clock size={24} /></div>
                <div>
                  <strong style={{ display: 'block', color: '#002868', fontSize: '0.95rem' }}>48-Hour Turnaround</strong>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Rapid submittals for tight bid deadlines</span>
                </div>
              </div>

              <div className="consult-feature" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: 'var(--color-primary, #0047ba)' }}><FileSpreadsheet size={24} /></div>
                <div>
                  <strong style={{ display: 'block', color: '#002868', fontSize: '0.95rem' }}>Full Takeoffs Included</strong>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Accurate quantities &amp; firm delivery quotes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider-line"></div>
    </>
  );
};

export default Consultation;
