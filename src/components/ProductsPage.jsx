import React, { useState } from 'react';
import { ChevronRight, ShieldCheck, Download, ArrowRight, Layers, FileText, Check } from 'lucide-react';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'culverts', label: 'Box Culverts' },
    { id: 'bridges', label: 'Bridge Girders & Decks' },
    { id: 'manholes', label: 'Utility Manholes' },
    { id: 'drainage', label: 'Drainage & Inlets' }
  ];

  const productList = [
    {
      id: 'bc',
      cat: 'culverts',
      title: 'Monolithic Precast Box Culverts',
      spec: 'ASTM C1577 / AASHTO HL-93 Traffic Rated',
      spans: 'Spans 4ft to 14ft | Rise 3ft to 12ft | Lay lengths up to 10ft',
      img: '/assets/media/Box Culvert/13.jpeg',
      desc: 'Precision match-cast tongue & groove joints with pre-formed butyl gasket channels. Engineered for zero-buoyancy storm water conveyance and rail underpasses.'
    },
    {
      id: 'bg',
      cat: 'bridges',
      title: 'Pre-Stressed AASHTO Bridge Girders',
      spec: 'PCI Group B4 / 50-State PE Certified',
      spans: 'Spans up to 140ft | Type I, II, III, IV & Bulb-Tee Profiles',
      img: '/assets/media/Box Culvert/14.jpeg',
      desc: 'High-strength 8,000 to 10,000 PSI low-permeability concrete with 0.6-inch low-relaxation prestressing strands for DOT highway and municipal bridge overpasses.'
    },
    {
      id: 'mh',
      cat: 'manholes',
      title: 'Heavy-Duty Precast Utility Manholes & Vaults',
      spec: 'ASTM C478 / AASHTO H-20 Wheel Load Rated',
      spans: 'Diameters 48", 60", 72", 96", 120" | Depths up to 40ft',
      img: '/assets/media/utility_manhole_real.jpg',
      desc: 'Monolithic base sections with cast-in water-tight pipe boots (ASTM C923). Available with internal drop bowls, eccentric cones, and traffic flat tops.'
    },
    {
      id: 'cb',
      cat: 'drainage',
      title: 'Drainage Inlets, Catch Basins & Headwalls',
      spec: 'DOT Standard Drawing Compliant / ASTM C913',
      spans: 'Custom Knockout Patterns / Pre-installed Ductile Iron Frames',
      img: '/assets/media/culvert.jpg',
      desc: 'Rapid-set precast curb inlets and flared end headwalls with integral baffle walls for retention ponds and stormwater highway runoff.'
    }
  ];

  const filtered = productList.filter(p => activeCategory === 'all' || p.cat === activeCategory);

  return (
    <div className="products-page" style={{ backgroundColor: '#ffffff', color: '#0047ba', fontFamily: "'Manrope', sans-serif" }}>
      
      {/* 1. Header Banner */}
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
            <span style={{ color: '#ffffff', fontWeight: 700 }}>Engineered Products</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.6rem', lineHeight: 1.15, color: '#ffffff' }}>
            Engineered Precast Infrastructure
          </h1>

          <p style={{ fontSize: '1rem', color: '#bfdbfe', maxWidth: '720px', lineHeight: 1.55 }}>
            Heavy-duty, ASTM &amp; DOT approved precast components manufactured with high-strength self-consolidating concrete and precision steel tooling.
          </p>
        </div>
      </section>

      {/* 2. Category Filter */}
      <section style={{ backgroundColor: '#f0f5ff', borderBottom: '1px solid #dbeafe', padding: '1.25rem 5%' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              style={{
                border: activeCategory === c.id ? '1px solid #0047BA' : '1px solid #bfdbfe',
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                backgroundColor: activeCategory === c.id ? '#0047BA' : '#ffffff',
                color: activeCategory === c.id ? '#ffffff' : '#0052cc',
                boxShadow: activeCategory === c.id ? '0 2px 8px rgba(0, 71, 186, 0.25)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Products Grid */}
      <section style={{ padding: '3.5rem 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filtered.map(p => (
            <div 
              key={p.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #bfdbfe',
                boxShadow: '0 4px 18px rgba(0, 71, 186, 0.06)',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
                alignItems: 'center',
                padding: '1.75rem'
              }}
            >
              <div style={{ height: '260px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#f0f5ff' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0047BA', textTransform: 'uppercase', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={14} />
                  <span>{p.spec}</span>
                </div>

                <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0052cc', marginBottom: '0.5rem', lineHeight: 1.25 }}>
                  {p.title}
                </h2>

                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0047BA', marginBottom: '0.85rem' }}>
                  {p.spans}
                </div>

                <p style={{ fontSize: '0.9rem', color: '#0052cc', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {p.desc}
                </p>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a 
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      backgroundColor: '#0047BA',
                      color: '#ffffff',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Request Submittal Drawing</span>
                    <ArrowRight size={14} />
                  </a>

                  <a 
                    href="#estore"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      backgroundColor: '#eff6ff',
                      border: '1px solid #bfdbfe',
                      color: '#0047BA',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Accessories &amp; Hardware</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ProductsPage;
