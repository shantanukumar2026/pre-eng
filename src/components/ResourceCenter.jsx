import React from 'react';
import { FileCheck2, ArrowRight, Compass } from 'lucide-react';

const ResourceCenter = () => {
  return (
    <>
      <section className="section-resources padding-global" style={{ backgroundColor: '#f0f6ff', paddingTop: '3.5rem', paddingBottom: '3.5rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-large">
          <div className="resources-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '220px' }}>
              <div className="h-flex-tiny" style={{ marginBottom: '0.25rem' }}>
                <div className="chip_box"></div>
                <span className="chip" style={{ fontSize: '0.72rem' }}>LIBRARY</span>
              </div>
              <h2 className="heading-style-h4 text-color-primary" style={{ fontSize: '1.4rem', color: '#002868' }}>Resource Center</h2>
            </div>

            <div className="resources-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '1rem', flexGrow: 1 }}>
              <a href="#resources" className="resource-item" style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FileCheck2 size={22} className="text-color-primary" style={{ marginBottom: '0.4rem', color: '#0047ba' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#002868' }}>Case Studies</span>
              </a>
              <a href="#resources" className="resource-item" style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FileCheck2 size={22} className="text-color-primary" style={{ marginBottom: '0.4rem', color: '#0047ba' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#002868' }}>White Papers</span>
              </a>
              <a href="#resources" className="resource-item" style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FileCheck2 size={22} className="text-color-primary" style={{ marginBottom: '0.4rem', color: '#0047ba' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#002868' }}>Technical Docs</span>
              </a>
              <a href="#resources" className="resource-item" style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FileCheck2 size={22} className="text-color-primary" style={{ marginBottom: '0.4rem', color: '#0047ba' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#002868' }}>Product Catalogs</span>
              </a>
              <a href="#faq" className="resource-item" style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FileCheck2 size={22} className="text-color-primary" style={{ marginBottom: '0.4rem', color: '#0047ba' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#002868' }}>Contractor FAQs</span>
              </a>
            </div>

            <div className="need-help-box" style={{ background: '#ffffff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ marginBottom: '0.2rem', fontSize: '0.95rem', fontWeight: 800, color: '#002868' }}>Need Help?</h4>
                <p style={{ fontSize: '0.82rem', color: '#475569', marginBottom: '0.75rem' }}>Our engineering team is ready to assist you.</p>
                <a href="#contact" className="button_hero_primary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.78rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>Contact Us</span>
                  <ArrowRight size={11} />
                </a>
              </div>
              <div className="help-icon" style={{ color: '#0047ba' }}><Compass size={36} /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourceCenter;
