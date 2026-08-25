import React from 'react';
import { Building2, ArrowRight, Factory, Layers, Truck } from 'lucide-react';

const CapabilitiesBento = () => {
  return (
    <section className="section_capabilities_bento">
      <div className="padding-global">
        <div className="container-large">
          <div className="bento_header">
            <div className="h-flex-tiny">
              <div className="chip_box"></div>
              <span className="chip">Engineering Services</span>
            </div>
            <h2 className="heading-style-h3" style={{ marginBottom: '2.5rem' }}>
              Comprehensive Precast &amp; Engineering Solutions
            </h2>
          </div>

          <div className="bento_grid">
            {/* Item 1: Large Horizontal */}
            <a href="#contact" className="bento_card is-large">
              <img src="/assets/media/engineering_design_bg_1787569503505.jpg" alt="Structural Precast" className="bento_card_bg" />
              <div className="bento_card_overlay"></div>
              <div className="bento_card_content">
                <div className="bento_icon_wrapper">
                  <Building2 />
                </div>
                <h3 className="bento_title">Structural Precast<br />Engineering</h3>
                <span className="bento_link">Explore Capabilities <ArrowRight size={14} /></span>
              </div>
            </a>

            {/* Item 2: Tall Vertical */}
            <a href="#contact" className="bento_card is-tall">
              <img src="/assets/media/precast_manufacturing_bg_1787569523806.jpg" alt="Infrastructure Solutions" className="bento_card_bg" />
              <div className="bento_card_overlay"></div>
              <div className="bento_card_content">
                <div className="bento_icon_wrapper">
                  <Factory />
                </div>
                <h3 className="bento_title">Infrastructure<br />Solutions</h3>
                <span className="bento_link">Learn More <ArrowRight size={14} /></span>
              </div>
            </a>

            {/* Item 3: Small Square */}
            <a href="#contact" className="bento_card">
              <img src="/assets/media/quality_control_bg_1787569563820.jpg" alt="Custom Casting" className="bento_card_bg" />
              <div className="bento_card_overlay"></div>
              <div className="bento_card_content">
                <div className="bento_icon_wrapper">
                  <Layers />
                </div>
                <h3 className="bento_title">Custom<br />Casting</h3>
                <span className="bento_link">Learn More <ArrowRight size={14} /></span>
              </div>
            </a>

            {/* Item 4: Small Square */}
            <a href="#contact" className="bento_card">
              <img src="/assets/media/heavy_logistics_bg_1787569548808.jpg" alt="Project Logistics" className="bento_card_bg" />
              <div className="bento_card_overlay"></div>
              <div className="bento_card_content">
                <div className="bento_icon_wrapper">
                  <Truck />
                </div>
                <h3 className="bento_title">Project<br />Logistics</h3>
                <span className="bento_link">Learn More <ArrowRight size={14} /></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesBento;
