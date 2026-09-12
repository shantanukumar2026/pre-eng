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
                <img src="/assets/media/precast_structural_plan.jpg" alt="Consultation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 className="method-title">Consultation</h4>
              <p className="method-desc">We collaborate with your engineering team to review project blueprints and civil specifications.</p>
            </div>
            <div className="method-line"></div>

            <div className="method-step">
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', border: '3px solid #fff', boxShadow: '0 4px 10px rgba(0, 34, 89,0.1)' }}>
                <img src="/assets/media/videoframe_7136.png" alt="Engineering" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 className="method-title">Engineering &amp; BIM</h4>
              <p className="method-desc">Licensed PE engineers create stamped calculations, 3D BIM models, and detailed shop drawings.</p>
            </div>
            <div className="method-line"></div>

            <div className="method-step">
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', border: '3px solid #fff', boxShadow: '0 4px 10px rgba(0, 34, 89,0.1)' }}>
                <img src="/assets/media/precast_factory_floor.jpg" alt="Manufacturing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 className="method-title">Plant Manufacturing</h4>
              <p className="method-desc">Precision casting using heavy steel formwork, automated SCC batching, and steam curing beds.</p>
            </div>
            <div className="method-line"></div>

            <div className="method-step">
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', border: '3px solid #fff', boxShadow: '0 4px 10px rgba(0, 34, 89,0.1)' }}>
                <img src="/assets/media/precast_transport_fleet.jpg" alt="Delivery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 className="method-title">Logistics &amp; Delivery</h4>
              <p className="method-desc">Heavy-haul transport synchronized directly with contractor crane pick schedules on site.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Methodology;
