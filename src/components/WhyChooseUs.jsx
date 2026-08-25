import React from 'react';
import { Layers, Gauge, ShieldCheck, Clock, CheckCircle2, Factory } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <>
      <section className="section-why-us padding-global">
        <div className="container-large">
          <div className="why-us-wrapper">
            <h2 className="heading-style-h4 text-color-primary">Why Choose PET?</h2>
            <div className="why-us-grid">
              <div className="why-item">
                <Layers size={28} className="text-color-primary" />
                <div className="why-text">Advanced<br />Technology</div>
              </div>
              <div className="why-item">
                <Gauge size={28} className="text-color-primary" />
                <div className="why-text">Precision<br />Engineering</div>
              </div>
              <div className="why-item">
                <ShieldCheck size={28} className="text-color-primary" />
                <div className="why-text">Sustainable<br />Practices</div>
              </div>
              <div className="why-item">
                <Clock size={28} className="text-color-primary" />
                <div className="why-text">On-Time<br />Delivery</div>
              </div>
              <div className="why-item">
                <CheckCircle2 size={28} className="text-color-primary" />
                <div className="why-text">Customer-Centric<br />Approach</div>
              </div>
              <div className="why-item">
                <Factory size={28} className="text-color-primary" />
                <div className="why-text">Cost-Effective<br />Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider-line"></div>
    </>
  );
};

export default WhyChooseUs;
