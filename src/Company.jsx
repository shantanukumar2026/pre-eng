import React from 'react';
import { Layers, Gauge, ShieldCheck, Clock, CheckCircle2, Factory } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <>
      <section className="section-why-us padding-global" style={{ backgroundColor: '#0047ba', color: '#ffffff', paddingTop: '2.25rem', paddingBottom: '2.25rem' }}>
        <div className="container-large">
          <div className="why-us-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '3.5rem', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '280px' }}>
              <div style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: '#60a5fa', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                CORE ADVANTAGES
              </div>
              <h2 className="heading-style-h4" style={{ color: '#ffffff', fontSize: '1.75rem', lineHeight: 1.25 }}>
                Why Contractors &amp; Engineers Choose PET
              </h2>
            </div>

            <div className="why-us-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1.25rem', flexGrow: 1 }}>
              <div className="why-item" style={{ background: 'rgba(255, 255, 255, 0.07)', padding: '1.25rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.12)', textAlign: 'center' }}>
                <div style={{ width: '42px', height: '42px', margin: '0 auto 0.75rem', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#93c5fd' }}>
                  <Layers size={22} />
                </div>
                <div className="why-text" style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.82rem' }}>Advanced<br />Tooling</div>
              </div>

              <div className="why-item" style={{ background: 'rgba(255, 255, 255, 0.07)', padding: '1.25rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.12)', textAlign: 'center' }}>
                <div style={{ width: '42px', height: '42px', margin: '0 auto 0.75rem', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#93c5fd' }}>
                  <Gauge size={22} />
                </div>
                <div className="why-text" style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.82rem' }}>Precision<br />Engineering</div>
              </div>

              <div className="why-item" style={{ background: 'rgba(255, 255, 255, 0.07)', padding: '1.25rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.12)', textAlign: 'center' }}>
                <div style={{ width: '42px', height: '42px', margin: '0 auto 0.75rem', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#93c5fd' }}>
                  <ShieldCheck size={22} />
                </div>
                <div className="why-text" style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.82rem' }}>ASTM &amp; DOT<br />Compliance</div>
              </div>

              <div className="why-item" style={{ background: 'rgba(255, 255, 255, 0.07)', padding: '1.25rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.12)', textAlign: 'center' }}>
                <div style={{ width: '42px', height: '42px', margin: '0 auto 0.75rem', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#93c5fd' }}>
                  <Clock size={22} />
                </div>
                <div className="why-text" style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.82rem' }}>Scheduled<br />Logistics</div>
              </div>

              <div className="why-item" style={{ background: 'rgba(255, 255, 255, 0.07)', padding: '1.25rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.12)', textAlign: 'center' }}>
                <div style={{ width: '42px', height: '42px', margin: '0 auto 0.75rem', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#93c5fd' }}>
                  <CheckCircle2 size={22} />
                </div>
                <div className="why-text" style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.82rem' }}>Contractor<br />Support</div>
              </div>

              <div className="why-item" style={{ background: 'rgba(255, 255, 255, 0.07)', padding: '1.25rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.12)', textAlign: 'center' }}>
                <div style={{ width: '42px', height: '42px', margin: '0 auto 0.75rem', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#93c5fd' }}>
                  <Factory size={22} />
                </div>
                <div className="why-text" style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.82rem' }}>High-Volume<br />Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
