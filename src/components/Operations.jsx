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
              <p className="operations-sub">Our advanced facilities and skilled production teams provide high quality and dimensional consistency.</p>
              <a href="#tour" className="operations-link" style={{ fontSize: '0.85rem', fontWeight: 600 }}>TAKE A TOUR <ArrowRight size={14} /></a>
            </div>
            <div className="operations-grid">
              <div className="ops-img-wrap"><img src="/assets/media/operations_1_real.jpg" alt="Automated Manufacturing" className="ops-img" /></div>
              <div className="ops-img-wrap"><img src="/assets/media/operations_2_real.jpg" alt="Robotic Casting Cell" className="ops-img" /></div>
              <div className="ops-img-wrap"><img src="/assets/media/operations_3_real.jpg" alt="Plant Operations" className="ops-img" /></div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider-line"></div>
    </>
  );
};

export default Operations;
