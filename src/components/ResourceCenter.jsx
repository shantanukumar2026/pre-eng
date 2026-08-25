import React from 'react';
import { FileCheck2, ArrowRight, Compass } from 'lucide-react';

const ResourceCenter = () => {
  return (
    <>
      <section className="section-resources padding-global">
        <div className="container-large">
          <div className="resources-wrapper">
            <h2 className="heading-style-h4 text-color-primary" style={{ fontSize: '1.25rem', width: '200px' }}>Resource Center</h2>
            <div className="resources-grid">
              <div className="resource-item">
                <FileCheck2 size={24} className="text-color-primary" style={{ marginBottom: '0.5rem' }} />
                <span>Case Studies</span>
              </div>
              <div className="resource-item">
                <FileCheck2 size={24} className="text-color-primary" style={{ marginBottom: '0.5rem' }} />
                <span>White Papers</span>
              </div>
              <div className="resource-item">
                <FileCheck2 size={24} className="text-color-primary" style={{ marginBottom: '0.5rem' }} />
                <span>Technical<br />Documents</span>
              </div>
              <div className="resource-item">
                <FileCheck2 size={24} className="text-color-primary" style={{ marginBottom: '0.5rem' }} />
                <span>Product<br />Catalogs</span>
              </div>
              <div className="resource-item">
                <FileCheck2 size={24} className="text-color-primary" style={{ marginBottom: '0.5rem' }} />
                <span>FAQs</span>
              </div>
            </div>
            <div className="need-help-box">
              <div style={{ flex: 1 }}>
                <h4 style={{ marginBottom: '0.25rem' }}>Need Help?</h4>
                <p style={{ fontSize: '0.85rem', color: '#0055b3', marginBottom: '1rem' }}>Our team is here to assist you with your project inquiries.</p>
                <a href="#contact" className="button-blue-small">CONTACT US <ArrowRight size={12} /></a>
              </div>
              <div className="help-icon"><Compass size={40} className="text-color-primary" /></div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider-line"></div>
    </>
  );
};

export default ResourceCenter;
