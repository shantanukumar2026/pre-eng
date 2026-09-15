import React from 'react';
import { Layers, Gauge, ShieldCheck, Clock, CheckCircle2, Factory } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section
      className="section-why-us padding-global"
      style={{
        backgroundColor: '#f0f5ff',
        color: '#0047ba',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid #bfdbfe',
        borderBottom: '1px solid #bfdbfe',
      }}
    >
      <div className="container-large">
        <div className="why-us-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '280px' }}>
            <div style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: '#0047ba', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              CORE ADVANTAGES
            </div>
            <h2 className="heading-style-h4" style={{ color: '#0047ba', fontSize: '1.75rem', lineHeight: 1.25, fontWeight: 800 }}>
              Why Contractors &amp; Engineers Choose PET
            </h2>
          </div>

          <div className="why-us-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1.25rem', flexGrow: 1 }}>
            <div className="why-item" style={{ background: '#ffffff', padding: '1.25rem 0.75rem', borderRadius: '10px', border: '1px solid #bfdbfe', textAlign: 'center', boxShadow: '0 2px 8px rgba(0, 71, 186, 0.05)' }}>
              <div style={{ width: '42px', height: '42px', margin: '0 auto 0.75rem', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0047ba', border: '1px solid #bfdbfe' }}>
                <Layers size={22} />
              </div>
              <div className="why-text" style={{ color: '#0047ba', fontWeight: 700, fontSize: '0.82rem' }}>Advanced<br />Tooling</div>
            </div>

            <div className="why-item" style={{ background: '#ffffff', padding: '1.25rem 0.75rem', borderRadius: '10px', border: '1px solid #bfdbfe', textAlign: 'center', boxShadow: '0 2px 8px rgba(0, 71, 186, 0.05)' }}>
              <div style={{ width: '42px', height: '42px', margin: '0 auto 0.75rem', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0047ba', border: '1px solid #bfdbfe' }}>
                <Gauge size={22} />
              </div>
              <div className="why-text" style={{ color: '#0047ba', fontWeight: 700, fontSize: '0.82rem' }}>Precision<br />Engineering</div>
            </div>

            <div className="why-item" style={{ background: '#ffffff', padding: '1.25rem 0.75rem', borderRadius: '10px', border: '1px solid #bfdbfe', textAlign: 'center', boxShadow: '0 2px 8px rgba(0, 71, 186, 0.05)' }}>
              <div style={{ width: '42px', height: '42px', margin: '0 auto 0.75rem', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0047ba', border: '1px solid #bfdbfe' }}>
                <ShieldCheck size={22} />
              </div>
              <div className="why-text" style={{ color: '#0047ba', fontWeight: 700, fontSize: '0.82rem' }}>ASTM &amp; DOT<br />Compliance</div>
            </div>

            <div className="why-item" style={{ background: '#ffffff', padding: '1.25rem 0.75rem', borderRadius: '10px', border: '1px solid #bfdbfe', textAlign: 'center', boxShadow: '0 2px 8px rgba(0, 71, 186, 0.05)' }}>
              <div style={{ width: '42px', height: '42px', margin: '0 auto 0.75rem', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0047ba', border: '1px solid #bfdbfe' }}>
                <Clock size={22} />
              </div>
              <div className="why-text" style={{ color: '#0047ba', fontWeight: 700, fontSize: '0.82rem' }}>Scheduled<br />Logistics</div>
            </div>

            <div className="why-item" style={{ background: '#ffffff', padding: '1.25rem 0.75rem', borderRadius: '10px', border: '1px solid #bfdbfe', textAlign: 'center', boxShadow: '0 2px 8px rgba(0, 71, 186, 0.05)' }}>
              <div style={{ width: '42px', height: '42px', margin: '0 auto 0.75rem', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0047ba', border: '1px solid #bfdbfe' }}>
                <CheckCircle2 size={22} />
              </div>
              <div className="why-text" style={{ color: '#0047ba', fontWeight: 700, fontSize: '0.82rem' }}>Contractor<br />Support</div>
            </div>

            <div className="why-item" style={{ background: '#ffffff', padding: '1.25rem 0.75rem', borderRadius: '10px', border: '1px solid #bfdbfe', textAlign: 'center', boxShadow: '0 2px 8px rgba(0, 71, 186, 0.05)' }}>
              <div style={{ width: '42px', height: '42px', margin: '0 auto 0.75rem', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0047ba', border: '1px solid #bfdbfe' }}>
                <Factory size={22} />
              </div>
              <div className="why-text" style={{ color: '#0047ba', fontWeight: 700, fontSize: '0.82rem' }}>High-Volume<br />Capacity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
