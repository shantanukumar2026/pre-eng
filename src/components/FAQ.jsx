import React, { useState } from 'react';
import { ArrowRight, Minus, Plus } from 'lucide-react';

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: 'How are standard and custom precast products scheduled for delivery?',
      a: 'Standard drainage inlets, catch basins, utility manholes, and common box culvert sizes are stocked for prompt flatbed dispatch. Custom-cored or project-specific structures are manufactured according to approved submittals and coordinated project schedules.',
    },
    {
      q: 'Do your drawings include 50-state PE stamps for state DOT approval?',
      a: 'Yes. Our in-house licensed civil and structural engineers provide signed and sealed PE calculation packages, 3D BIM models, and submittal drawings compliant with AASHTO, ASTM, and state DOT standards.',
    },
    {
      q: 'Can you cast custom pipe knockouts and internal baffle walls?',
      a: 'Yes. We factory-cast or core-drill pipe penetrations with Kor-N-Seal rubber boots, install internal weir walls, oil/grit baffle plates, and custom ladder rungs prior to delivery so the unit arrives jobsite-ready.',
    },
    {
      q: 'Why choose precast concrete over traditional cast-in-place?',
      a: 'Precast structures cure in our climate-controlled factory while site excavation takes place. Once delivered, they set in place with crane picks and can be promptly backfilled—reducing on-site labor and eliminating extended jobsite wet-curing delays.',
    },
  ];

  return (
    <section className="section-faq padding-global" id="faq" style={{ backgroundColor: '#f8fafc', paddingTop: '2.25rem', paddingBottom: '2.25rem', borderTop: '1px solid #e2e8f0' }}>
      <div className="container-large">
        <div className="faq-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '3rem', alignItems: 'flex-start' }}>
          <div>
            <div className="h-flex-tiny" style={{ marginBottom: '0.5rem' }}>
              <div className="chip_box"></div>
              <span className="chip">COMMON QUESTIONS</span>
            </div>
            <h2 className="heading-style-h3 text-color-primary" style={{ fontSize: 'clamp(1.85rem, 2.8vw, 2.35rem)', color: '#002868', marginBottom: '0.75rem' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#5a6e8c', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Have questions about sizing, certifications, submittals, or delivery timing? Our engineering staff is ready to assist.
            </p>
            <a href="#contact" className="button_hero_primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.7rem 1.3rem', fontSize: '0.9rem' }}>
              <span>Ask an Engineer</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeFaq === index ? 'is-active' : ''}`}
                onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                style={{ 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '8px', 
                  padding: '1.25rem 1.5rem', 
                  cursor: 'pointer', 
                  transition: 'all 0.2s ease', 
                  background: activeFaq === index ? '#ffffff' : '#ffffff',
                  boxShadow: activeFaq === index ? '0 4px 12px rgba(0, 71, 186, 0.08)' : '0 1px 3px rgba(0,0,0,0.02)'
                }}
              >
                <div className="faq-q" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', color: '#002868', fontSize: '0.98rem' }}>
                  <span>{faq.q}</span>
                  <div style={{ color: 'var(--color-primary, #0047ba)', flexShrink: 0, marginLeft: '1rem' }}>
                    {activeFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>
                {activeFaq === index && (
                  <div className="faq-a" style={{ marginTop: '0.85rem', color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
