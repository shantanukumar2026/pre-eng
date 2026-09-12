import React from 'react';
import { MapPin, Phone, Truck, Clock, ShieldCheck, ArrowRight, Building2, Navigation } from 'lucide-react';

const NODES_DATA = [
  {
    region: 'Northeast Manufacturing Hub',
    badge: 'Headquarters & High-Capacity Casting',
    image: '/assets/media/precast_manufacturing_bg_1787569523806.jpg',
    address: '105 Maxess Road, Melville, NY 11747',
    phone: '(631) 452-1111',
    coverage: 'NY, NJ, CT, PA, MA, RI, VT, NH, ME',
    capabilities: 'Stormwater Box Culverts, Drainage Inlets, Utility Manholes, Custom Tooling',
    dispatchSpeed: 'Same-day inventory stock / 48-hr custom cored structures',
    mapLink: 'https://maps.google.com/?q=105+Maxess+Road,+Melville,+NY+11747'
  },
  {
    region: 'Southeast Coastal & Marine Hub',
    badge: 'DOT & High-Volume Conduits',
    image: '/assets/media/heavy_logistics_bg_1787569548808.jpg',
    address: '850 NW Federal Hwy, Stuart, FL 34994',
    phone: '(772) 297-0700',
    coverage: 'FL, GA, NC, SC, AL, TN, MS',
    capabilities: 'FDOT Drainage Conduits, Marine Seawalls, Heavy Utility Vaults',
    dispatchSpeed: 'Dedicated regional flatbed fleet with synchronized crane offload',
    mapLink: 'https://maps.google.com/?q=850+NW+Federal+Hwy,+Stuart,+FL+34994'
  },
  {
    region: 'Midwest Infrastructure Hub',
    badge: 'Bridge Girders & Heavy Structural',
    image: '/assets/media/engineering_design_bg_1787569503505.jpg',
    address: '2200 Hunt Street, Detroit, MI 48207',
    phone: '(631) 452-1111',
    coverage: 'MI, OH, IN, IL, WI, MN, IA, MO',
    capabilities: 'AASHTO Bridge Girders, Retaining Wall Panels, Large Box Culverts',
    dispatchSpeed: 'High-tonnage bridge casting beds and long-haul transport',
    mapLink: 'https://maps.google.com/?q=2200+Hunt+Street,+Detroit,+MI+48207'
  }
];

const Locations = () => {
  return (
    <section className="section-locations-corporate" id="locations">
      <div className="padding-global">
        <div className="container-large">
          
          {/* Header */}
          <div className="locations-header-corporate text-center">
            <div className="h-flex-tiny is-center">
              <div className="chip_box"></div>
              <span className="chip">STRATEGIC DISTRIBUTION NETWORK</span>
            </div>
            <h2 className="heading-style-h3 text-dark">
              Regional Manufacturing Plants &amp; Distribution Hubs
            </h2>
            <p className="locations-subtitle-corporate">
              Strategically located precast casting facilities equipped with automated batch plants, certified testing labs, and dedicated heavy-haul fleets to guarantee on-time jobsite delivery.
            </p>
          </div>

          {/* 3-Column Modern Hub Cards */}
          <div className="locations-cards-grid">
            {NODES_DATA.map((node, index) => (
              <div key={index} className="modern-location-card">
                {/* Image Banner */}
                <div className="loc-card-media">
                  <img src={node.image} alt={node.region} className="loc-card-img" />
                  <div className="loc-media-overlay"></div>
                  <span className="loc-node-badge">{node.badge}</span>
                </div>

                {/* Card Body */}
                <div className="loc-card-body">
                  <h3 className="loc-region-title">{node.region}</h3>

                  <div className="loc-detail-rows">
                    {/* Address */}
                    <div className="loc-detail-row">
                      <div className="loc-icon-bubble">
                        <MapPin size={16} />
                      </div>
                      <div className="loc-detail-text">
                        <span className="loc-label">Facility Address</span>
                        <span className="loc-value">{node.address}</span>
                      </div>
                    </div>

                    {/* Coverage */}
                    <div className="loc-detail-row">
                      <div className="loc-icon-bubble">
                        <Truck size={16} />
                      </div>
                      <div className="loc-detail-text">
                        <span className="loc-label">Coverage Region</span>
                        <span className="loc-value">{node.coverage}</span>
                      </div>
                    </div>

                    {/* Capabilities */}
                    <div className="loc-detail-row">
                      <div className="loc-icon-bubble">
                        <Building2 size={16} />
                      </div>
                      <div className="loc-detail-text">
                        <span className="loc-label">Key Capabilities</span>
                        <span className="loc-value">{node.capabilities}</span>
                      </div>
                    </div>

                    {/* Dispatch */}
                    <div className="loc-detail-row">
                      <div className="loc-icon-bubble">
                        <Clock size={16} />
                      </div>
                      <div className="loc-detail-text">
                        <span className="loc-label">Dispatch Guarantee</span>
                        <span className="loc-value">{node.dispatchSpeed}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="loc-card-actions">
                    <a 
                      href={`tel:${node.phone.replace(/[^0-9]/g, '')}`} 
                      className="btn-loc-call"
                    >
                      <Phone size={15} />
                      <span>{node.phone}</span>
                    </a>

                    <a 
                      href={node.mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-loc-nav"
                    >
                      <Navigation size={14} />
                      <span>Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Dispatch Ribbon */}
          <div className="locations-bottom-dispatch-bar">
            <div className="dispatch-bar-left">
              <div className="dispatch-pulse-icon"></div>
              <div>
                <h4>Need expedited jobsite delivery or custom core drilling?</h4>
                <p>Our centralized dispatch coordination team routes orders to the nearest plant for fastest turnaround.</p>
              </div>
            </div>
            <a href="#contact" className="btn-solid-blue">
              <span>Coordinate Jobsite Delivery</span>
              <ArrowRight size={15} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Locations;
