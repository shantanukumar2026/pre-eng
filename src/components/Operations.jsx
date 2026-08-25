import React from 'react';
import { ArrowRight } from 'lucide-react';

const Operations = () => {
  return (
    <>
      <section className="section-operations padding-global">
        <div className="container-large">
          <div className="operations-header">
            <div className="ops-header-text">
              <h2 className="heading-style-h4 text-color-primary">State-of-the-Art<br />Manufacturing</h2>
              <p className="operations-sub">Our advanced facilities and skilled teams ensure unmatched quality and consistency.</p>
              <a href="#tour" className="operations-link" style={{ fontSize: '0.85rem', fontWeight: 600 }}>TAKE A TOUR <ArrowRight size={14} /></a>
            </div>
            <div className="operations-grid">
              <div className="ops-img-wrap"><img src="/assets/media/precast_manufacturing_bg_1787569523806.jpg" alt="Ops 1" className="ops-img" /></div>
              <div className="ops-img-wrap"><img src="/assets/media/engineering_design_bg_1787569503505.jpg" alt="Ops 2" className="ops-img" /></div>
              <div className="ops-img-wrap"><img src="/assets/media/engineering_design_bg_1787569503505.jpg" alt="Ops 3" className="ops-img" /></div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider-line"></div>
    </>
  );
};

export default Operations;
