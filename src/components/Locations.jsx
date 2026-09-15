import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const LOCATIONS_LIST = [
  {
    name: 'Northeast Operations',
    tag: 'Regional Office',
    city: 'Melville, NY',
    address: '105 Maxess Road, Melville, NY 11747',
    phone: '(631) 452-1111',
    hours: 'Monday – Friday: 7:00 AM – 5:00 PM EST',
    mapUrl: 'https://maps.google.com/?q=105+Maxess+Road,+Melville,+NY+11747'
  },
  {
    name: 'Southeast Operations',
    tag: 'Regional Office',
    city: 'Stuart, FL',
    address: '850 NW Federal Hwy, Stuart, FL 34994',
    phone: '(772) 297-0700',
    hours: 'Monday – Friday: 7:00 AM – 5:00 PM EST',
    mapUrl: 'https://maps.google.com/?q=850+NW+Federal+Hwy,+Stuart,+FL+34994'
  },
  {
    name: 'Midwest Operations',
    tag: 'Regional Office',
    city: 'Detroit, MI',
    address: '2200 Hunt Street, Detroit, MI 48207',
    phone: '(631) 452-1111',
    hours: 'Monday – Friday: 7:00 AM – 5:00 PM EST',
    mapUrl: 'https://maps.google.com/?q=2200+Hunt+Street,+Detroit,+MI+48207'
  }
];

const Locations = () => {
  return (
    <section className="section-locations padding-global" id="locations" style={{ paddingTop: '2.25rem', paddingBottom: '2.25rem', backgroundColor: '#f0f5ff', borderTop: '1px solid #bfdbfe', borderBottom: '1px solid #bfdbfe' }}>
      <div className="locations-bg-shapes"></div>

      <div className="container-large" style={{ position: 'relative', zIndex: 2 }}>
        {/* Centered Header with Pill Badge */}
        <div className="locations-header text-center" style={{ marginBottom: '1.75rem' }}>
          <div className="h-flex-tiny is-center" style={{ marginBottom: '0.4rem' }}>
            <div className="chip_box"></div>
            <span className="chip">STRATEGIC FOOTPRINT</span>
          </div>
          <h2 className="locations-title" style={{ fontSize: 'clamp(1.85rem, 2.8vw, 2.35rem)', color: '#0047ba', marginBottom: '0.5rem' }}>
            Our Regional Locations
          </h2>
          <p className="locations-desc" style={{ color: '#0052cc', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 500 }}>
            Regional offices and facilities supporting civil precast projects.
          </p>
        </div>

        {/* 3-Column Cards */}
        <div className="locations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {LOCATIONS_LIST.map((loc, idx) => (
            <div key={idx} className="location-card" style={{ background: '#ffffff', borderRadius: '10px', border: '1px solid #bfdbfe', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 14px rgba(0, 71, 186, 0.06)' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0047ba', background: '#eff6ff', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid #bfdbfe' }}>{loc.tag}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0047ba' }}>{loc.city}</span>
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0047ba', marginBottom: '1.25rem' }}>{loc.name}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: '#0052cc' }}>
                    <MapPin size={16} style={{ color: '#0047ba', flexShrink: 0, marginTop: '3px' }} />
                    <span>{loc.address}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: '#0052cc' }}>
                    <Phone size={16} style={{ color: '#0047ba', flexShrink: 0 }} />
                    <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} style={{ color: '#0047ba', fontWeight: 700, textDecoration: 'none' }}>
                      {loc.phone}
                    </a>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: '#0052cc' }}>
                    <Clock size={16} style={{ color: '#0047ba', flexShrink: 0 }} />
                    <span>{loc.hours}</span>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #f0f5ff', paddingTop: '1rem' }}>
                <a 
                  href={loc.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0047ba', fontSize: '0.86rem', fontWeight: 700, textDecoration: 'none' }}
                >
                  <span>Get Directions</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
