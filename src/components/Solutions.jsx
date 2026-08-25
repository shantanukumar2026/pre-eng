import React from 'react';
import { ArrowRight } from 'lucide-react';

const Solutions = () => {
  return (
    <>
      <section className="section-solutions padding-global">
        <div className="container-large">
          <div className="solutions-wrapper">
            <div className="solutions-left">
              <h2 className="heading-style-h3 text-color-primary">Comprehensive Solutions Under One Roof</h2>
              <a href="#services" className="button-outline-blue">
                VIEW ALL SERVICES <ArrowRight size={14} />
              </a>
            </div>
            <div className="solutions-right">
              <div className="solution-card" style={{ padding: 0, overflow: 'hidden' }}>
                <img src="/assets/media/Box Culvert/11.jpeg" alt="Box Culverts" style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 className="solution-title">Box<br />Culverts</h3>
                  <a href="#learn" className="solution-link">LEARN MORE <ArrowRight size={14} /></a>
                </div>
              </div>
              <div className="solution-card" style={{ padding: 0, overflow: 'hidden' }}>
                <img src="/assets/media/gettyimages-961684452-1024x1024.jpg" alt="Bridge Girders" style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 className="solution-title">Bridge<br />Girders</h3>
                  <a href="#learn" className="solution-link">LEARN MORE <ArrowRight size={14} /></a>
                </div>
              </div>
              <div className="solution-card" style={{ padding: 0, overflow: 'hidden' }}>
                <img src="/assets/media/quality_control_bg_1787569563820.jpg" alt="Manholes" style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 className="solution-title">Doghouse<br />Manholes</h3>
                  <a href="#learn" className="solution-link">LEARN MORE <ArrowRight size={14} /></a>
                </div>
              </div>
              <div className="solution-card" style={{ padding: 0, overflow: 'hidden' }}>
                <img src="/assets/media/heavy_logistics_bg_1787569548808.jpg" alt="Architectural Panels" style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 className="solution-title">Architectural<br />Panels</h3>
                  <a href="#learn" className="solution-link">LEARN MORE <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider-line"></div>
    </>
  );
};

export default Solutions;
