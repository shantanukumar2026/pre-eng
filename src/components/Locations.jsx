import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Locations = () => {
  return (
    <section className="section-locations padding-global" style={{ backgroundColor: '#f1f5f9', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container-large">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="heading-style-h3 text-color-primary">Our Global Nodes</h2>
          <p style={{ color: '#0055b3', maxWidth: '600px', margin: '0 auto' }}>Operating across North America to deliver world-class solutions.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>

          <div className="location-card" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', boxShadow: '0 4px 10px rgba(0, 34, 89,0.03)' }}>
            <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>Northeast Node</h4>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', color: '#004099', fontSize: '0.85rem', fontWeight: 600 }}>
              <MapPin size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              <span>105 MAXESS ROAD, MELVILLE, NY 11747</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', color: '#004099', fontSize: '0.85rem', fontWeight: 600 }}>
              <Phone size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              <span>(631) 452-1111</span>
            </div>
          </div>

          <div className="location-card" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', boxShadow: '0 4px 10px rgba(0, 34, 89,0.03)' }}>
            <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>South Node</h4>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', color: '#004099', fontSize: '0.85rem', fontWeight: 600 }}>
              <MapPin size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              <span>850 NW FEDERAL HWY, STUART, FL 34994</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', color: '#004099', fontSize: '0.85rem', fontWeight: 600 }}>
              <Phone size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              <span>(772) 297-0700</span>
            </div>
          </div>

          <div className="location-card" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', boxShadow: '0 4px 10px rgba(0, 34, 89,0.03)' }}>
            <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>Midwest Node</h4>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', color: '#004099', fontSize: '0.85rem', fontWeight: 600 }}>
              <MapPin size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              <span>2200 HUNT STREET, DETROIT, MI 48207</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', color: '#004099', fontSize: '0.85rem', fontWeight: 600 }}>
              <Phone size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              <span>(631) 452-1111</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Locations;
