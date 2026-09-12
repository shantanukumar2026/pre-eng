import React from 'react';
import { MapPin, Phone, Clock, ArrowRight, ExternalLink } from 'lucide-react';

const LOCATIONS_LIST = [
  {
    name: 'Northeast Operations',
    tag: 'Corporate Headquarters',
    city: 'Melville, NY',
    address: '105 Maxess Road, Melville, NY 11747',
    phone: '(631) 452-1111',
    hours: 'Monday – Friday: 7:00 AM – 5:00 PM EST',
    mapUrl: 'https://maps.google.com/?q=105+Maxess+Road,+Melville,+NY+11747'
  },
  {
    name: 'Southeast Operations',
    tag: 'Manufacturing & Distribution',
    city: 'Stuart, FL',
    address: '850 NW Federal Hwy, Stuart, FL 34994',
    phone: '(772) 297-0700',
    hours: 'Monday – Friday: 7:00 AM – 5:00 PM EST',
    mapUrl: 'https://maps.google.com/?q=850+NW+Federal+Hwy,+Stuart,+FL+34994'
  },
  {
    name: 'Midwest Operations',
    tag: 'Regional Plant',
    city: 'Detroit, MI',
    address: '2200 Hunt Street, Detroit, MI 48207',
    phone: '(631) 452-1111',
    hours: 'Monday – Friday: 7:00 AM – 5:00 PM EST',
    mapUrl: 'https://maps.google.com/?q=2200+Hunt+Street,+Detroit,+MI+48207'
  }
];

const Locations = () => {
  return (
    <section className="section-locations" id="locations">
      <div className="container-large">
        <div className="locations-header text-center">
          <h2 className="locations-title">Our Locations</h2>
          <p className="locations-desc">
            Strategic manufacturing facilities and regional offices serving infrastructure projects across North America.
          </p>
        </div>

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
                  <MapPin size={18} className="loc-icon" />
                  <span>{loc.address}</span>
                </div>

                <div className="location-info-row">
                  <Phone size={18} className="loc-icon" />
                  <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="loc-phone-link">
                    {loc.phone}
                  </a>
                </div>

                <div className="location-info-row">
                  <Clock size={18} className="loc-icon" />
                  <span className="loc-hours">{loc.hours}</span>
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
