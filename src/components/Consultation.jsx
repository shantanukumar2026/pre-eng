import React from 'react';
import { Clock, ArrowRight, Compass, CheckCircle2, TrendingUp } from 'lucide-react';

const Consultation = () => {
  return (
    <>
      <section className="section-consultation padding-global">
        <div className="container-large">
          <div className="consult-wrapper">
            <div className="consult-left">
              <div className="consult-icon"><Clock size={40} className="text-color-primary" /></div>
              <div>
                <h3 className="consult-title" style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Schedule a Consultation</h3>
                <p className="consult-desc" style={{ fontSize: '0.9rem', color: '#0055b3', marginBottom: '1.5rem' }}>Let's discuss how PET can bring precision, efficiency,<br />and innovation to your next project.</p>
                <a href="#book" className="button-blue">BOOK A MEETING <ArrowRight size={14} /></a>
              </div>
            </div>
            <div className="consult-right">
              <div className="consult-feature">
                <div style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}><Compass size={24} /></div>
                <span>Tailored Solutions</span>
              </div>
              <div className="consult-feature">
                <div style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}><CheckCircle2 size={24} /></div>
                <span>Expert Guidance</span>
              </div>
              <div className="consult-feature">
                <div style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}><TrendingUp size={24} /></div>
                <span>Measurable Results</span>
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
