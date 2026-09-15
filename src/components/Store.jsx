import React, { useState } from 'react';
import { Search, ChevronRight, ArrowRight } from 'lucide-react';

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Precast Products' },
    { id: 'culverts', label: 'Box Culverts' },
    { id: 'drainage', label: 'Inlets & Catch Basins' },
    { id: 'bridges', label: 'Bridge Girders' },
    { id: 'manholes', label: 'Utility Manholes' },
    { id: 'trench', label: 'Trench & Channels' },
    { id: 'tooling', label: 'Custom Steel Tooling' }
  ];

  const products = [
    {
      id: 'prod-1',
      category: 'culverts',
      title: 'Precast Concrete Box Culverts (ASTM C1577)',
      image: '/assets/media/Box Culvert/13.jpeg'
    },
    {
      id: 'prod-2',
      category: 'bridges',
      title: 'Pre-Stressed AASHTO Bridge Girders & Decks',
      image: '/assets/media/bridge_girder_real.jpg'
    },
    {
      id: 'prod-3',
      category: 'manholes',
      title: 'Heavy-Duty ASTM C478 Utility Manholes & Vaults',
      image: '/assets/media/utility_manhole_real.jpg'
    },
    {
      id: 'prod-4',
      category: 'drainage',
      title: 'Standard Storm Drainage Inlets & Catch Basins',
      image: '/assets/media/catch_basin_real.jpg'
    },
    {
      id: 'prod-5',
      category: 'trench',
      title: 'Engineered Pre-Trench Drainage Channel Systems',
      image: '/assets/media/trench-forms-01-5001.JPG'
    },
    {
      id: 'prod-6',
      category: 'culverts',
      title: 'Precast Culvert End Sections & Headwalls',
      image: '/assets/media/culvert.jpg'
    },
    {
      id: 'prod-7',
      category: 'tooling',
      title: 'High-Precision Custom Steel Precast Molds',
      image: '/assets/media/custom_tooling_real.jpg'
    },
    {
      id: 'prod-8',
      category: 'bridges',
      title: 'Architectural Precast Spandrels & Bridge Planks',
      image: '/assets/media/architectural_panels_real.jpg'
    },
    {
      id: 'prod-9',
      category: 'manholes',
      title: 'Heavy Traffic Rated Precast Castings & Riser Rings',
      image: '/assets/media/Box Culvert/14.jpeg'
    }
  ];

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNavigateToProducts = (e) => {
    if (e) e.preventDefault();
    window.location.hash = '#products';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="store-page" style={{ backgroundColor: '#ffffff', color: '#0047ba', fontFamily: "'Manrope', sans-serif" }}>
      
      {/* 1. Header Banner with generous top padding for fixed navbar */}
      <section style={{
        background: 'linear-gradient(135deg, #001f4d 0%, #002868 50%, #0047BA 100%)',
        color: '#0047BA',
        padding: '6.5rem 5% 3.25rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 80% 30%, rgba(74, 136, 255, 0.25) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#bfdbfe', marginBottom: '0.75rem' }}>
            <a href="#home" style={{ color: '#bfdbfe', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={13} style={{ opacity: 0.7 }} />
            <span style={{ color: '#ffffff', fontWeight: 600 }}>eStore Products</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.6rem', lineHeight: 1.15, color: '#ffffff' }}>
            Precast Hardware &amp; Products Store
          </h1>

          <p style={{ fontSize: '1rem', color: '#bfdbfe', maxWidth: '720px', lineHeight: 1.55 }}>
            Browse our full catalog of ASTM-certified precast concrete infrastructure, bridge components, and drainage solutions.
          </p>
        </div>
      </section>

      {/* 2. Filter & Search Controls */}
      <section style={{ backgroundColor: '#f0f5ff', borderBottom: '1px solid #dbeafe', padding: '1.25rem 5%' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          
          {/* Category Chips */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  border: 'none',
                  padding: '7px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: selectedCategory === cat.id ? '#0047BA' : '#ffffff',
                  color: selectedCategory === cat.id ? '#ffffff' : '#0052cc',
                  boxShadow: selectedCategory === cat.id ? '0 2px 8px rgba(0, 71, 186, 0.25)' : '0 1px 3px rgba(0, 71, 186, 0.08)',
                  border: selectedCategory === cat.id ? '1px solid #0047BA' : '1px solid #bfdbfe',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '240px', flexGrow: 1, maxWidth: '340px' }}>
            <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#0047BA' }} />
            <input 
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 34px',
                borderRadius: '8px',
                border: '1px solid #bfdbfe',
                backgroundColor: '#ffffff',
                fontSize: '0.84rem',
                color: '#0052cc',
                outline: 'none'
              }}
            />
          </div>

        </div>
      </section>

      {/* 3. Products Grid: Image + Title + Button Only */}
      <section style={{ padding: '3.5rem 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '2rem' }}>
            {filteredProducts.map(p => (
              <div 
                key={p.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #bfdbfe',
                  boxShadow: '0 4px 16px rgba(0, 71, 186, 0.06)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
                onClick={handleNavigateToProducts}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 71, 186, 0.16)';
                  e.currentTarget.style.borderColor = '#0047BA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 71, 186, 0.06)';
                  e.currentTarget.style.borderColor = '#bfdbfe';
                }}
              >
                {/* 1. Image */}
                <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden', backgroundColor: '#f0f5ff' }}>
                  <img 
                    src={p.image} 
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                    onError={(e) => {
                      e.currentTarget.src = '/assets/media/box_culvert_real.jpg';
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', gap: '1.25rem' }}>
                  {/* 2. Title */}
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#0052cc',
                    lineHeight: 1.35,
                    margin: 0
                  }}>
                    {p.title}
                  </h3>

                  {/* 3. Button - Opens Product Page directly */}
                  <a
                    href="#products"
                    onClick={handleNavigateToProducts}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      backgroundColor: '#0047BA',
                      color: '#ffffff',
                      padding: '10px 18px',
                      borderRadius: '8px',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      textDecoration: 'none',
                      boxShadow: '0 2px 8px rgba(0, 71, 186, 0.2)',
                      transition: 'all 0.2s ease',
                      marginTop: 'auto'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0047ba';
                      e.currentTarget.style.transform = 'translateX(2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0047BA';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>View Product</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Store;
