import React from 'react';
import { ArrowRight } from 'lucide-react';

const CoreProducts = () => {
  return (
    <>
      <section className="section-products padding-global">
        <div className="container-large">
          <div className="products-header">
            <div>
              <h2 className="heading-style-h4 text-color-primary" style={{ marginBottom: '0.5rem' }}>Our Core Precast Products</h2>
              <p className="products-sub">Engineered for strength. Built for the future.</p>
            </div>
            <a href="#products" className="products-link">VIEW PRODUCTS <ArrowRight size={14} /></a>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <img src="/assets/media/Box Culvert/11.jpeg" alt="Box Culverts" />
              <div className="product-label">Box Culverts</div>
            </div>
            <div className="product-card">
              <img src="/assets/media/gettyimages-961684452-1024x1024.jpg" alt="Bridge Girders" />
              <div className="product-label">Bridge Girders</div>
            </div>
            <div className="product-card">
              <img src="/assets/media/quality_control_bg_1787569563820.jpg" alt="Doghouse Manholes" />
              <div className="product-label">Doghouse Manholes</div>
            </div>
            <div className="product-card">
              <img src="/assets/media/heavy_logistics_bg_1787569548808.jpg" alt="Architectural Panels" />
              <div className="product-label">Architectural Panels</div>
            </div>
            <div className="product-card view-all-card">
              <span>VIEW ALL<br />PRODUCTS</span>
              <ArrowRight size={24} style={{ marginTop: '1rem' }} />
            </div>
          </div>
        </div>
      </section>
      <div className="divider-line"></div>
    </>
  );
};

export default CoreProducts;
