import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const LOCATIONS_LIST = [
  {
    name: 'Northeast Operations',
    tag: 'Corporate Headquarters & Plant',
    city: 'Melville, NY',
    address: '105 Maxess Road, Melville, NY 11747',
    phone: '(631) 452-1111',
    hours: 'Monday – Friday: 7:00 AM – 5:00 PM EST',
    capability: 'Automated SCC Batching • PE Engineering Hub',
    mapUrl: 'https://maps.google.com/?q=105+Maxess+Road,+Melville,+NY+11747'
  },
  {
    name: 'Southeast Operations',
    tag: 'Heavy Civil & Box Culvert Plant',
    city: 'Stuart, FL',
    address: '850 NW Federal Hwy, Stuart, FL 34994',
    phone: '(772) 297-0700',
    hours: 'Monday – Friday: 7:00 AM – 5:00 PM EST',
    capability: 'Heavy Box Culverts • AASHTO Casting Beds',
    mapUrl: 'https://maps.google.com/?q=850+NW+Federal+Hwy,+Stuart,+FL+34994'
  },
  {
    name: 'Midwest Operations',
    tag: 'Regional Precast & Tooling Yard',
    city: 'Detroit, MI',
    address: '2200 Hunt Street, Detroit, MI 48207',
    phone: '(631) 452-1111',
    hours: 'Monday – Friday: 7:00 AM – 5:00 PM EST',
    capability: 'Custom Steel Mold Tooling • Flatbed Logistics',
    mapUrl: 'https://maps.google.com/?q=2200+Hunt+Street,+Detroit,+MI+48207'
  }
];

const Locations = () => {
  return (
    <section className="section-locations padding-global" id="locations" style={{ paddingTop: '2.25rem', paddingBottom: '2.25rem', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="locations-bg-shapes"></div>
      <div className="locations-ambient-glow-1"></div>
      <div className="locations-ambient-glow-2"></div>

      <div className="container-large" style={{ position: 'relative', zIndex: 2 }}>
        {/* Centered Header with Pill Badge */}
        <div className="locations-header text-center" style={{ marginBottom: '1.75rem' }}>
          <div className="h-flex-tiny is-center" style={{ marginBottom: '0.4rem' }}>
            <div className="chip_box"></div>
            <span className="chip">STRATEGIC FOOTPRINT</span>
          </div>
          <h2 className="locations-title" style={{ fontSize: 'clamp(1.85rem, 2.8vw, 2.35rem)', color: '#002868', marginBottom: '0.5rem' }}>
            Our Precast Manufacturing Facilities
          </h2>
          <p className="locations-desc" style={{ color: '#5a6e8c', maxWidth: '650px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Strategic manufacturing plants and regional staging yards providing responsive dispatch across North America.
          </p>
        </div>

        {/* 3-Column Cards */}
        <div className="locations-grid">
          {LOCATIONS_LIST.map((loc, idx) => (
            <div key={idx} className="location-card">
              <div className="location-card-top">
                <span className="location-tag">{loc.tag}</span>
                <h3 className="location-name">{loc.name}</h3>
                <span className="location-city">{loc.city}</span>
              </div>

              <div className="location-card-info">
                <div className="location-info-row">
                  <MapPin size={16} className="loc-icon" />
                  <span>{loc.address}</span>
                </div>

                <div className="location-info-row">
                  <Phone size={16} className="loc-icon" />
                  <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="loc-phone-link">
                    {loc.phone}
                  </a>
                </div>

                <div className="location-info-row">
                  <Clock size={16} className="loc-icon" />
                  <span className="loc-hours">{loc.hours}</span>
                </div>

                <div style={{ marginTop: '0.5rem', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px', padding: '6px 10px', fontSize: '0.78rem', color: '#1e40af', fontWeight: 700 }}>
                  {loc.capability}
                </div>
              </div>

              <div className="location-card-bottom">
                <a 
                  href={loc.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="loc-link-directions"
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
