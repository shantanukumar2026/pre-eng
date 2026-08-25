import React, { useState } from 'react';
import { ArrowRight, Minus, Plus } from 'lucide-react';

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: 'What are the main advantages of precast concrete?',
      a: 'Precast concrete offers superior quality control, faster construction times, enhanced durability, and reduced environmental impact compared to traditional cast-in-place methods.',
    },
    {
      q: 'How do you ensure the quality of your precast products?',
      a: 'Our manufacturing facilities are PCI certified and ISO 9001 compliant. We conduct rigorous testing at every stage, from material selection to final curing, ensuring maximum structural integrity.',
    },
    {
      q: 'Can precast elements be customized for specific projects?',
      a: 'Yes, our engineering team works closely with architects and contractors to design and manufacture custom precast solutions tailored to exact project specifications and aesthetic requirements.',
    },
    {
      q: 'What is your typical delivery and installation timeframe?',
      a: 'Timelines vary based on project scale and complexity. However, precast manufacturing often occurs concurrently with site preparation, significantly compressing overall project schedules.',
    },
  ];

  return (
    <>
      <section className="section-faq padding-global" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container-large">
          <div className="faq-split" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
            <div>
              <h2 className="heading-style-h3 text-color-primary">Frequently Asked Questions</h2>
              <p style={{ color: '#0055b3', marginBottom: '1.5rem' }}>Got questions? We've got answers. If you can't find what you're looking for, feel free to reach out to our team.</p>
              <a href="#contact" className="button-blue">GET IN TOUCH <ArrowRight size={14} /></a>
            </div>
            <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeFaq === index ? 'is-active' : ''}`}
                  onClick={() => setActiveFaq(index)}
                  style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', cursor: 'pointer', transition: 'all 0.3s ease', background: activeFaq === index ? '#f8fafc' : '#fff' }}
                >
                  <div className="faq-q" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', color: '#002868' }}>
                    {faq.q}
                    <div style={{ color: 'var(--color-primary)' }}>
                      {activeFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </div>
                  {activeFaq === index && (
                    <div className="faq-a" style={{ marginTop: '1rem', color: '#004099', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="divider-line"></div>
    </>
  );
};

export default FAQ;
