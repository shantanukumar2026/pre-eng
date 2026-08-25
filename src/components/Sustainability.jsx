import React from 'react';
import { ArrowRight } from 'lucide-react';

const Sustainability = () => {
  return (
    <section className="section-sustainability">
      <div className="sustain-banner">
        <img src="/assets/media/about_us_agency_1787570493372.jpg" alt="Sustainability" className="sustain-img" />
        <div className="sustain-overlay">
          <h2 className="sustain-title">Building a Sustainable Future</h2>
          <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>We are committed to environmentally responsible practices<br />and building infrastructure that lasts for generations.</p>
          <a href="#sustainability" className="sustain-link" style={{ fontSize: '0.8rem', fontWeight: 700 }}>OUR SUSTAINABILITY INITIATIVES <ArrowRight size={14} /></a>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
