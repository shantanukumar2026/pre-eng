import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="section-cta padding-global" style={{ paddingBottom: '4rem' }}>
      <div className="container-large">
        <div className="cta-banner">
          <div className="cta-icon-bg">
            <CheckCircle2 size={64} style={{ opacity: 0.8 }} />
          </div>
          <div className="cta-content">
            <h2 className="cta-headline">Ready to Build with Precision?</h2>
            <p className="cta-sub">Let's engineer a custom precast solution that ensures durability, efficiency, and structural integrity for your next project.</p>
            <a href="#start" className="button-white">START YOUR PROJECT <ArrowRight size={14} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
