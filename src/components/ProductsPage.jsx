import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  Layers, 
  FileText, 
  Check,
  Search,
  Maximize2,
  X,
  Eye,
  SlidersHorizontal,
  Package,
  Wrench,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { ASTRO_CATEGORIES_DATA } from '../data/astroProductsData';
import './CoreProducts.css';

const ProductsPage = ({ initialCategory = 'all', onNavigate }) => {
  const [selectedCatId, setSelectedCatId] = useState(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCatId(initialCategory);
    }
  }, [initialCategory]);

  const activeCategory = ASTRO_CATEGORIES_DATA.find(c => c.id === selectedCatId);

  const handleSelectCategory = (catId) => {
    setSelectedCatId(catId);
    setSearchQuery('');
    if (onNavigate) {
      onNavigate('products', catId);
    }
  };

  const getFilteredProducts = () => {
    let prods = [];
    
    ASTRO_CATEGORIES_DATA.forEach(cat => {
      if (selectedCatId === 'all' || cat.id === selectedCatId) {
        cat.pages.forEach(p => {
          const [pNum, title, prodNo, size, wall, weight, standard, desc] = p;
          let imagePath = `/products/astro/${cat.id}_p${pNum}.png`;
          if (cat.id === 'utility-vaults') {
            imagePath = `/products/astro/catch-basins_p${pNum === 145 ? '11' : pNum === 146 ? '9' : pNum === 147 ? '12' : '10'}.png`;
          } else if (cat.id === 'headwalls-endwalls') {
            imagePath = `/products/astro/slabs_p${pNum === 149 ? '70' : pNum === 150 ? '68' : pNum === 151 ? '69' : '72'}.png`;
          }

          if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            if (
              title.toLowerCase().includes(q) ||
              prodNo.toLowerCase().includes(q) ||
              standard.toLowerCase().includes(q) ||
              desc.toLowerCase().includes(q) ||
              cat.name.toLowerCase().includes(q)
            ) {
              prods.push({
                catId: cat.id,
                catName: cat.name,
                pNum,
                title,
                prodNo,
                size,
                wall,
                weight,
                standard,
                desc,
                image: imagePath
              });
            }
          } else {
            prods.push({
              catId: cat.id,
              catName: cat.name,
              pNum,
              title,
              prodNo,
              size,
              wall,
              weight,
              standard,
              desc,
              image: imagePath
            });
          }
        });
      }
    });

    return prods;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="products-page" style={{ backgroundColor: '#ffffff', color: '#0047ba', fontFamily: "'Manrope', sans-serif" }}>

      {/* 1. Header Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0038b8 0%, #0047ba 50%, #1e2ede 100%)',
        color: '#ffffff',
        padding: '6.5rem 5% 3.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 80% 30%, rgba(74, 136, 255, 0.3) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1600px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#bfdbfe', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <a href="#home" onClick={() => onNavigate && onNavigate('home')} style={{ color: '#bfdbfe', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={13} style={{ opacity: 0.7 }} />
            <span 
              onClick={() => handleSelectCategory('all')} 
              style={{ color: selectedCatId === 'all' ? '#ffffff' : '#bfdbfe', fontWeight: 700, cursor: 'pointer' }}
            >
              Precast Products Catalog
            </span>
            {activeCategory && (
              <>
                <ChevronRight size={13} style={{ opacity: 0.7 }} />
                <span style={{ color: '#ffffff', fontWeight: 700 }}>{activeCategory.name}</span>
              </>
            )}
          </nav>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.6rem', lineHeight: 1.15, color: '#ffffff' }}>
            {activeCategory ? activeCategory.name : 'Precast Concrete Civil Infrastructure'}
          </h1>

          <p style={{ fontSize: '1.05rem', color: '#bfdbfe', maxWidth: '780px', lineHeight: 1.6 }}>
            {activeCategory 
              ? (activeCategory.categoryDesc || `Explore our complete range of certified precast ${activeCategory.name.toLowerCase()} engineered to ASTM and AASHTO HS-20 load specifications.`)
              : 'Comprehensive American catalog of heavy-duty precast drainage structures, septic holding tanks, grease interceptors, solid/access slabs, and riser rings engineered to ASTM and AASHTO HS-20 standards.'}
          </p>
        </div>
      </section>

      {/* 2. Interactive Category Tabs & Search Bar */}
      <section style={{ backgroundColor: '#f4f8ff', borderBottom: '1.5px solid #bfdbfe', padding: '1.25rem 5%', position: 'sticky', top: '70px', zIndex: 30 }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '6px', flex: 1, minWidth: '300px' }}>
            <button
              onClick={() => handleSelectCategory('all')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.84rem',
                fontWeight: 800,
                flexShrink: 0,
                border: selectedCatId === 'all' ? '1.5px solid #1e2ede' : '1px solid #bfdbfe',
                background: selectedCatId === 'all' ? '#0047ba' : '#ffffff',
                color: selectedCatId === 'all' ? '#ffffff' : '#0047ba',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
                boxShadow: selectedCatId === 'all' ? '0 4px 12px rgba(0, 71, 186, 0.2)' : 'none'
              }}
            >
              <span>All Products</span>
              <span style={{ fontSize: '0.74rem', background: selectedCatId === 'all' ? '#1e2ede' : '#eff6ff', color: selectedCatId === 'all' ? '#ffffff' : '#0047ba', padding: '1px 6px', borderRadius: '10px' }}>123</span>
            </button>

            {ASTRO_CATEGORIES_DATA.map(c => {
              const isSelected = selectedCatId === c.id;
              const catTitle = c.shortName || c.name;
              return (
                <button
                  key={c.id}
                  onClick={() => handleSelectCategory(c.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    flexShrink: 0,
                    border: isSelected ? '1.5px solid #1e2ede' : '1px solid #bfdbfe',
                    background: isSelected ? '#0047ba' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#0047ba',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                    boxShadow: isSelected ? '0 4px 12px rgba(0, 71, 186, 0.2)' : 'none'
                  }}
                >
                  <span>{catTitle}</span>
                  <span style={{ fontSize: '0.74rem', background: isSelected ? '#1e2ede' : '#eff6ff', color: isSelected ? '#ffffff' : '#0047ba', padding: '1px 6px', borderRadius: '10px' }}>
                    {c.pages.length}
                  </span>
                </button>
              );
            })}
          </div>

          <div style={{ position: 'relative', width: '280px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#0047ba' }} />
            <input
              type="text"
              placeholder="Search model, size, standard..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                background: '#ffffff',
                border: '1px solid #bfdbfe',
                borderRadius: '8px',
                fontSize: '0.85rem',
                outline: 'none',
                color: '#0047ba',
                fontWeight: 600
              }}
            />
          </div>

        </div>
      </section>

      {/* 3. Main Products Explorer Section */}
      <section style={{ padding: '3rem 5% 5rem', backgroundColor: '#f4f8ff' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>

          {/* If a single category is selected (and not searching), show Category Spotlight Hero Box */}
          {activeCategory && !searchQuery.trim() && (
            <div className="spotlight-wrapper" style={{ marginBottom: '2.5rem' }}>
              <div className="spotlight-hero-grid" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
                
                {/* Left: Clean 3D Product Image */}
                <div className="spotlight-img-box">
                  <img
                    src={activeCategory.featuredImage}
                    alt={activeCategory.name}
                    className="spotlight-img"
                  />
                </div>

                {/* Right: Category Specs & USA Standards */}
                <div className="spotlight-info">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#eff6ff', color: '#1e2ede', padding: '3px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.6rem', border: '1px solid #bfdbfe' }}>
                    <ShieldCheck size={14} />
                    <span>{activeCategory.pages.length} Certified Unit Sizes</span>
                  </div>

                  <h2>{activeCategory.spotlightTitle || activeCategory.name}</h2>
                  
                  <p className="spotlight-lead-p">
                    {activeCategory.spotlightLead || activeCategory.categoryDesc}
                  </p>

                  <p className="spotlight-note-p">
                    {activeCategory.spotlightP2}
                  </p>

                  <p className="spotlight-note-p" style={{ borderLeft: '3px solid #1e2ede', paddingLeft: '12px', marginTop: '1rem', fontStyle: 'normal' }}>
                    <strong style={{ color: '#0047ba' }}>Product Availability &amp; Engineering:</strong> {activeCategory.spotlightAvail}
                  </p>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
                    <a href="#contact" className="btn-spotlight-quote" style={{ margin: 0 }}>
                      <span>Request Category Submittal</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Section Subhead & Results Count */}
          <div className="relative-products-header">
            <div>
              <h3 className="relative-products-title">
                {searchQuery.trim()
                  ? `Search Results for "${searchQuery}" (${filteredProducts.length})`
                  : activeCategory 
                    ? `Available ${activeCategory.name} Models (${filteredProducts.length})`
                    : `All Precast Concrete Products (${filteredProducts.length})`}
              </h3>
              <p style={{ color: '#1e2ede', fontSize: '0.9rem', fontWeight: 600, marginTop: '0.2rem' }}>
                All models manufactured with monolithic vibrated concrete, certified steel reinforcement, and pre-formed knockouts.
              </p>
            </div>

            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                style={{ background: '#ffffff', border: '1px solid #bfdbfe', color: '#0047ba', padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem' }}
              >
                Clear Search
              </button>
            )}
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#ffffff', borderRadius: '12px', border: '1.5px solid #bfdbfe', color: '#0047ba' }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 800 }}>No products matched your search "{searchQuery}"</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCatId('all'); }}
                style={{ background: '#0047ba', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '6px', cursor: 'pointer', fontWeight: 800, fontSize: '0.9rem' }}
              >
                View Full Catalog (115 Products)
              </button>
            </div>
          ) : (
            <div className="relative-grid">
              {filteredProducts.map((prod, index) => (
                <div key={`${prod.catId}-${prod.pNum}-${index}`} className="rel-prod-card">
                  
                  {/* Clean 3D Image Container */}
                  <div className="rel-prod-img-wrap" onClick={() => setModalProduct(prod)}>
                    <span className="rel-prod-no-tag">{prod.prodNo}</span>
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="rel-prod-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="rel-prod-body">
                    <h4 className="rel-prod-name">{prod.title}</h4>
                    <p className="rel-prod-desc">{prod.desc}</p>

                    {/* Standard Specs Box */}
                    <div className="rel-prod-specs-box">
                      <div className="rel-spec-item">
                        <span className="rel-spec-lbl">Size / Span</span>
                        <span className="rel-spec-val">{prod.size}</span>
                      </div>
                      <div className="rel-spec-item">
                        <span className="rel-spec-lbl">Standard</span>
                        <span className="rel-spec-val">{prod.standard}</span>
                      </div>
                      <div className="rel-spec-item">
                        <span className="rel-spec-lbl">Wall</span>
                        <span className="rel-spec-val">{prod.wall}</span>
                      </div>
                      <div className="rel-spec-item">
                        <span className="rel-spec-lbl">Approx Weight</span>
                        <span className="rel-spec-val">{prod.weight}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="rel-prod-footer">
                    <a href="#contact" className="btn-rel-quote">
                      <span>Request Quote</span>
                      <ArrowRight size={14} />
                    </a>
                    <button 
                      onClick={() => setModalProduct(prod)} 
                      className="btn-rel-details"
                      title="Inspect Specifications"
                    >
                      <Eye size={14} />
                      <span>Details</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Product Detail Modal */}
      {modalProduct && (
        <div className="astro-modal-overlay" onClick={() => setModalProduct(null)}>
          <div className="astro-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="astro-modal-close-btn"
              onClick={() => setModalProduct(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              <div style={{ 
                background: '#ffffff', 
                border: '1.5px solid #bfdbfe', 
                borderRadius: '12px', 
                padding: '1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                height: '320px'
              }}>
                <img 
                  src={modalProduct.image} 
                  alt={modalProduct.title} 
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                />
              </div>

              <div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ background: '#0047ba', color: '#ffffff', padding: '3px 8px', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: 800 }}>
                    {modalProduct.prodNo}
                  </span>
                  <span style={{ background: '#dbeafe', color: '#0047ba', padding: '3px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>
                    {modalProduct.standard}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0047ba', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  {modalProduct.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: '#1e2ede', lineHeight: 1.6, marginBottom: '1.25rem', fontWeight: 600 }}>
                  {modalProduct.desc}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', background: '#f4f8ff', border: '1px solid #bfdbfe', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#1e2ede', textTransform: 'uppercase', fontWeight: 800 }}>Dimensions / Size</div>
                    <div style={{ fontWeight: 800, color: '#0047ba' }}>{modalProduct.size}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#1e2ede', textTransform: 'uppercase', fontWeight: 800 }}>Wall Thickness</div>
                    <div style={{ fontWeight: 800, color: '#0047ba' }}>{modalProduct.wall}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#1e2ede', textTransform: 'uppercase', fontWeight: 800 }}>Approx Unit Weight</div>
                    <div style={{ fontWeight: 800, color: '#0047ba' }}>{modalProduct.weight}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#1e2ede', textTransform: 'uppercase', fontWeight: 800 }}>Quality Standard</div>
                    <div style={{ fontWeight: 800, color: '#0047ba' }}>{modalProduct.standard}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a 
                    href="#contact" 
                    onClick={() => setModalProduct(null)} 
                    className="btn-spotlight-quote" 
                    style={{ margin: 0, padding: '10px 22px', fontSize: '0.9rem' }}
                  >
                    <span>Request CAD Drawings &amp; Quote</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ProductsPage;
