import React from 'react';

const Methodology = () => {
  return (
    <>
      <section className="section-methodology padding-global">
        <div className="container-large">
          <h2 className="text-color-primary text-center heading-style-h4" style={{ marginBottom: '3rem' }}>Our Proven 4-Step Methodology</h2>
          <div className="methodology-grid">

            <div className="method-step">
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', border: '3px solid #fff', boxShadow: '0 4px 10px rgba(0, 34, 89,0.1)' }}>
                <img src="/assets/media/engineering_design_bg_1787569503505.jpg" alt="Consultation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 className="method-title">Consultation</h4>
              <p className="method-desc">We collaborate with your team to understand project requirements and structural needs.</p>
            </div>
            <div className="method-line"></div>

            <div className="method-step">
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', border: '3px solid #fff', boxShadow: '0 4px 10px rgba(0, 34, 89,0.1)' }}>
                <img src="/assets/media/precast_manufacturing_bg_1787569523806.jpg" alt="Engineering" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 className="method-title">Engineering &amp; Design</h4>
              <p className="method-desc">Our experts design robust precast solutions optimized for safety and efficiency.</p>
            </div>
            <div className="method-line"></div>

            <div className="method-step">
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', border: '3px solid #fff', boxShadow: '0 4px 10px rgba(0, 34, 89,0.1)' }}>
                <img src="/assets/media/precast_manufacturing_bg_1787569523806.jpg" alt="Manufacturing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 className="method-title">Manufacturing</h4>
              <p className="method-desc">Precision casting in our controlled, state-of-the-art manufacturing facilities.</p>
            </div>
            <div className="method-line"></div>

            <div className="method-step">
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', border: '3px solid #fff', boxShadow: '0 4px 10px rgba(0, 34, 89,0.1)' }}>
                <img src="/assets/media/heavy_logistics_bg_1787569548808.jpg" alt="Delivery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 className="method-title">Delivery &amp; Logistics</h4>
              <p className="method-desc">Coordinated, just-in-time delivery to your job site to keep projects on schedule.</p>
            </div>

          </div>
        </div>
      </section>
      <div className="divider-line"></div>
    </>
  );
};

export default Methodology;
