import React from 'react';
import {
  ArrowRight,
  Package,
  Wrench,
  Layers,
  FileCheck2,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { ASTRO_CATEGORIES_DATA } from '../data/astroProductsData';
import './CoreProducts.css';

const CoreProducts = ({ onNavigateToCategory, onNavigateToProducts }) => {
  const handleCategoryClick = (catId) => {
    if (onNavigateToCategory) {
      onNavigateToCategory(catId);
    } else if (onNavigateToProducts) {
      onNavigateToProducts();
    }
  };

  return (
    <section className="section-astro-products" id="products">
      <div className="astro-container">

        {/* Header Row */}
        <div className="find-products-header-row">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#dbeafe', color: '#0047ba', padding: '4px 12px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 800, marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <Layers size={13} />
              <span>Engineered Civil Infrastructure</span>
            </div>
            <h2 className="find-products-title">Explore Our Products</h2>
            <p className="find-products-subtitle">
              Select a precast category to explore detailed engineering specifications, CAD dimensions, and load ratings.
            </p>
          </div>

          <button
            onClick={() => onNavigateToProducts && onNavigateToProducts()}
            className="btn-view-all-header"
          >
            <span>View All 115 Products</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* 4-Column Category Grid */}
        <div className="fast-category-grid">
          {ASTRO_CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              className="fast-cat-card"
              onClick={() => handleCategoryClick(cat.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleCategoryClick(cat.id); }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, background: '#eff6ff', color: '#1e2ede', padding: '3px 8px', borderRadius: '4px', border: '1px solid #bfdbfe' }}>
                    {cat.pages.length} Models
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#0047ba', fontWeight: 700 }}>
                    ASTM / AASHTO
                  </span>
                </div>
                <h3 className="fast-cat-title">{cat.name}</h3>
              </div>

              <div className="fast-cat-img-wrap">
                <img
                  src={cat.featuredImage}
                  alt={cat.name}
                  className="fast-cat-img"
                  loading="lazy"
                />
              </div>

              <div>
                <span className="fast-cat-link">
                  <span>Explore {cat.shortName}</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* "Not finding what you need?" Bar */}
        <div className="not-finding-bar">
          <div>
            <div className="not-finding-title">Need custom sizes or stamped engineering submittals?</div>
            <p style={{ color: '#0047ba', fontSize: '0.88rem', marginTop: '0.25rem', fontWeight: 600 }}>
              All 14 product categories are produced in NPCA-certified plants with 50-state PE stamped calculations.
            </p>
          </div>
          <div className="not-finding-actions">
            <button
              onClick={() => onNavigateToProducts && onNavigateToProducts()}
              className="not-finding-link"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              <Package size={18} />
              <span>Full Product Catalog (115)</span>
            </button>
            <a href="#contact" className="not-finding-link">
              <Wrench size={18} />
              <span>Request Custom Engineering</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreProducts;
