import React, { useState } from 'react';
import { 
  ArrowRight, 
  HelpCircle, 
  Activity, 
  MapPin, 
  Users, 
  Maximize2, 
  Sliders, 
  Wrench, 
  Truck
} from 'lucide-react';

const PRODUCTS_DATA = [
  {
    id: 'drainage-inlets',
    name: 'Drainage Inlets and Catch Basins',
    shortCategory: 'Stormwater Infrastructure',
    tagline: 'Catch basins and inlets are precast concrete drainage structures designed to capture surface runoff, collect debris, and redirect stormwater safely into underground civil piping networks.',
    image: '/assets/media/culvert.jpg',
    whatItIs: 'A reinforced precast concrete box installed flush with ground or pavement level, equipped with a heavy-duty traffic grate, a bottom sediment sump, and connection ports for storm drain pipes.',
    whatItDoes: 'Intercepts stormwater runoff, prevents highway ponding and flooding, traps heavy sediment, grit, and debris in a subterranean sump, and directs overflow water downstream into municipal storm systems.',
    whereUsed: 'Highway medians, roadway curbs, airport taxiways, bridge approaches, commercial logistics centers, and heavy civil industrial corridors.',
    whoUses: 'Civil infrastructure contractors, state DOT authorities, municipal public works departments, stormwater utility engineers, and excavation teams.',
    sizes: 'Standard square and rectangular footprints: 24"×24", 30"×30", 36"×36", 48"×48", 48"×72". Depths from 3 ft up to 15 ft with modular riser sections. Custom depths available.',
    customOptions: 'Core-drilled or cast-in knockouts with rubber boots, internal weir walls, baffle plates for oil/grit separation, high-early-strength mixes, H-20 & HS-25 heavy highway traffic rating.',
    accessories: 'Heavy-duty cast iron grates (vaned, bicycle-safe, ADA compliant), curb inlet hoods, sediment filter baskets, galvanized ladder rungs, grade adjustment rings, and cast-in pipe seals.',
    availability: 'Standard inventory maintained in stock for rapid dispatch; custom-engineered units fabricated per project specifications and delivery schedule.'
  },
  {
    id: 'box-culverts',
    name: 'Precast Box Culverts',
    shortCategory: 'Civil Conduits',
    tagline: 'Box culverts are heavy-duty, rectangular precast concrete conduits engineered for large-volume storm drainage, stream crossings, and subterranean utility corridors.',
    image: '/assets/media/Box Culvert/13.jpeg',
    whatItIs: 'A monolithic or two-piece rigid rectangular concrete culvert built to withstand extreme earth, hydraulic, and heavy vehicular highway loads.',
    whatItDoes: 'Conveys high-volume stormwater under highways and railways, prevents road washouts, accommodates natural water flows, and provides dry utility tunnels.',
    whereUsed: 'Highway underpasses, stream crossings, railway corridors, retention/detention vaults, storm sewer trunk lines, and pedestrian passages.',
    whoUses: 'Highway general contractors, Department of Transportation (DOT), railway infrastructure authorities, civil engineering firms, and utility contractors.',
    sizes: 'Spans from 3 ft to 24 ft; Rises from 2 ft to 14 ft; Standard laying lengths of 6 ft, 8 ft, and 10 ft; Custom multi-cell configurations.',
    customOptions: 'Skewed ends, toe walls, cast-in headwalls, wingwalls, internal baffle chutes, energy dissipators, and specialty waterproofing membrane coatings.',
    accessories: 'Preformed joint gaskets, mastic sealant tapes, lifting anchors, pulling irons, and precast parapet walls.',
    availability: 'Standard sizes available for scheduled delivery; custom span and rise configurations manufactured per project plans.'
  },
  {
    id: 'bridge-girders',
    name: 'Pre-stressed Bridge Girders & Decks',
    shortCategory: 'Highway & Bridge Structural',
    tagline: 'Bridge girders and deck spans are high-strength, pre-tensioned structural concrete elements engineered to support vehicular and rail traffic across highway overpasses and waterways.',
    image: '/assets/media/Box Culvert/14.jpeg',
    whatItIs: 'Long-span pre-stressed concrete structural members incorporating high-strength steel tendons under immense tension for heavy load resistance.',
    whatItDoes: 'Bears heavy highway live loads and freight dead loads across vast spans without center piers, minimizing deflection and long-term maintenance.',
    whereUsed: 'Interstate highway overpasses, river crossings, bridge replacements, railway viaducts, and elevated transportation corridors.',
    whoUses: 'Bridge general contractors, state DOTs, federal highway administrations, railway authorities, and structural bridge engineers.',
    sizes: 'AASHTO Types I through IV, Bulb-Tee (BT-54, BT-72), Box Girders, and Precast Deck Panels; Spans up to 160+ feet.',
    customOptions: 'Integral post-tensioning ducts, skewed geometry alignments, corrosion-inhibiting admixtures, customized sole plates, and shear stirrup configurations.',
    accessories: 'Elastomeric bearing pads, embedded anchor bolts, expansion joint assemblies, and certified lifting anchors.',
    availability: 'Engineered-to-order per state DOT project blueprints; Production scheduled in synchronized casting beds.'
  },
  {
    id: 'utility-manholes',
    name: 'Precast Utility Manholes',
    shortCategory: 'Municipal Utilities',
    tagline: 'Precast utility manholes are high-strength modular concrete structures engineered for municipal water, sanitary sewer, and underground infrastructure access.',
    image: '/assets/media/utility_manhole_real.jpg',
    whatItIs: 'A cylindrical or square precast concrete barrel equipped with modular risers, pipe entry seals, and traffic-rated access covers.',
    whatItDoes: 'Provides direct subterranean access for maintenance, inspection, and junctions on municipal sewer, stormwater, and water pipelines.',
    whereUsed: 'Municipal utility networks, stormwater trunk lines, sanitary sewer junctions, electrical & telecommunications vault points.',
    whoUses: 'Utility contractors, municipal water authorities, civil sitework crews, and plumbing infrastructure teams.',
    sizes: 'Diameters: 48", 60", 72", 84", 96", 120"; Wall thicknesses: 5" to 10"; Depths customized to site grade with standard riser sections.',
    customOptions: 'Monolithic base casting, factory-cored pipe entries, Kor-N-Seal boots, internal drop connections, acid-resistant epoxy lining.',
    accessories: 'Cast iron frames and covers (traffic rated, watertight, vented), eccentric or concentric cones, flat top slabs, and poly-coated safety steps.',
    availability: 'Standard diameters maintained in stock for yard pickup or scheduled delivery; custom-cored units fabricated upon submittal approval.'
  },
  {
    id: 'headwalls-wingwalls',
    name: 'Precast Headwalls & Retaining Structures',
    shortCategory: 'Highway Bridge & Drainage',
    tagline: 'Precast headwalls, wingwalls, and retaining structures are engineered to anchor culvert barrels, retain embankments, and prevent soil erosion around highway waterways.',
    image: '/assets/media/Box Culvert/12.jpeg',
    whatItIs: 'Monolithic or modular precast concrete endwalls featuring integrated toe walls, aprons, and angled wingwalls designed to match culvert slopes.',
    whatItDoes: 'Directs hydraulic intake and discharge flows smoothly, prevents slope washout, anchors bridge and culvert outfalls, and stabilizes roadway embankments.',
    whereUsed: 'DOT highway culvert inlets and outlets, bridge abutments, stormwater detention pond outfalls, stream stabilization, and steep highway embankments.',
    whoUses: 'Highway and bridge general contractors, civil grading contractors, DOT maintenance divisions, and watershed management authorities.',
    sizes: 'Engineered to fit standard and custom culvert spans from 3 ft to 24 ft; Wall heights up to 16 ft; Custom flared wingwall angles (0°, 30°, 45°, 60°).',
    customOptions: 'Cast-in trash racks, safety grates, energy dissipating baffles, aesthetic form-liner stone patterns, and integrated handrail sleeves.',
    accessories: 'Galvanized safety grates, galvanized connection hardware, toe-wall interlocks, and geotextile tie-backs.',
    availability: 'Standard configurations fabricated to state DOT standards; custom designs engineered per hydraulic plans.'
  }
];

const CoreProducts = () => {
  const [activeProductId, setActiveProductId] = useState(PRODUCTS_DATA[0].id);
  const activeProduct = PRODUCTS_DATA.find(p => p.id === activeProductId) || PRODUCTS_DATA[0];

  return (
    <>
      <section className="section-products padding-global" id="products">
        <div className="container-large">
          
          {/* Header */}
          <div className="products-header" style={{ marginBottom: '2.5rem' }}>
            <div>
              <div className="h-flex-tiny">
                <div className="chip_box"></div>
                <span className="chip">Complete Product Specifications</span>
              </div>
              <h2 className="heading-style-h3 text-color-primary" style={{ marginBottom: '0.5rem' }}>
                Our Core Precast Products &amp; Technical Breakdown
              </h2>
              <p className="products-sub" style={{ maxWidth: '700px' }}>
                Clear, practical, and comprehensive engineering breakdowns so you can quickly understand what each product does, where it is used, available sizes, and custom specifications.
              </p>
            </div>
            <a href="#contact" className="button-blue" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>REQUEST PRODUCT PRICING</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Product Quick-Select Tabs */}
          <div className="product-tabs-wrapper" style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '2.5rem' }}>
            {PRODUCTS_DATA.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setActiveProductId(prod.id)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: activeProductId === prod.id ? 'var(--color-primary)' : 'var(--border-light)',
                  background: activeProductId === prod.id ? 'var(--color-primary)' : '#fff',
                  color: activeProductId === prod.id ? '#fff' : 'var(--color-dark)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  boxShadow: activeProductId === prod.id ? '0 4px 12px rgba(0, 71, 186, 0.25)' : 'none'
                }}
              >
                {prod.name}
              </button>
            ))}
          </div>

          {/* Active Product Deep-Dive Display */}
          <div 
            className="product-clarity-card"
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              boxShadow: '0 10px 30px rgba(0, 51, 128, 0.08)',
              overflow: 'hidden',
              marginBottom: '3.5rem'
            }}
          >
            {/* Top Definition Banner */}
            <div 
              style={{
                background: 'linear-gradient(135deg, #003380 0%, #0047BA 100%)',
                color: '#ffffff',
                padding: '2.5rem 2.5rem 2rem 2.5rem',
                borderBottom: '4px solid #3E80F9'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
                <span style={{ 
                  background: 'rgba(255,255,255,0.15)', 
                  padding: '4px 12px', 
                  borderRadius: '4px', 
                  fontSize: '0.75rem', 
                  fontWeight: 800, 
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {activeProduct.shortCategory}
                </span>
                <span style={{ fontSize: '0.8rem', opacity: 0.9, fontWeight: 600 }}>
                  ASTM &amp; DOT COMPLIANT • PE CERTIFIED
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                {activeProduct.name}
              </h3>

              {/* Immediate 1-Sentence Explanation */}
              <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: '#E0EDFF', maxWidth: '950px', fontWeight: 500 }}>
                {activeProduct.tagline}
              </p>
            </div>

            {/* 8 Explanatory Points Grid */}
            <div style={{ padding: '2.5rem', backgroundColor: '#F8FAFC' }}>
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                  gap: '1.5rem',
                  marginBottom: '2.5rem'
                }}
              >
                {/* 1. What it is */}
                <div className="clarity-block" style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0', borderLeft: '4px solid #0047BA' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.6rem' }}>
                    <HelpCircle size={18} style={{ color: 'var(--color-primary)' }} />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#002868', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                      What the Product Is
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                    {activeProduct.whatItIs}
                  </p>
                </div>

                {/* 2. What it does */}
                <div className="clarity-block" style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0', borderLeft: '4px solid #3E80F9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.6rem' }}>
                    <Activity size={18} style={{ color: '#3E80F9' }} />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#002868', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                      What It Does
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                    {activeProduct.whatItDoes}
                  </p>
                </div>

                {/* 3. Where it is used */}
                <div className="clarity-block" style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0', borderLeft: '4px solid #0047BA' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.6rem' }}>
                    <MapPin size={18} style={{ color: 'var(--color-primary)' }} />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#002868', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                      Where It Is Used
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                    {activeProduct.whereUsed}
                  </p>
                </div>

                {/* 4. Who uses it */}
                <div className="clarity-block" style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0', borderLeft: '4px solid #3E80F9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.6rem' }}>
                    <Users size={18} style={{ color: '#3E80F9' }} />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#002868', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                      Who Uses It
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                    {activeProduct.whoUses}
                  </p>
                </div>

                {/* 5. Available sizes */}
                <div className="clarity-block" style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0', borderLeft: '4px solid #0047BA' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.6rem' }}>
                    <Maximize2 size={18} style={{ color: 'var(--color-primary)' }} />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#002868', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                      Available Sizes
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                    {activeProduct.sizes}
                  </p>
                </div>

                {/* 6. Custom options */}
                <div className="clarity-block" style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0', borderLeft: '4px solid #3E80F9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.6rem' }}>
                    <Sliders size={18} style={{ color: '#3E80F9' }} />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#002868', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                      Custom Options
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                    {activeProduct.customOptions}
                  </p>
                </div>

                {/* 7. Accessories */}
                <div className="clarity-block" style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0', borderLeft: '4px solid #0047BA' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.6rem' }}>
                    <Wrench size={18} style={{ color: 'var(--color-primary)' }} />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#002868', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                      Accessories
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                    {activeProduct.accessories}
                  </p>
                </div>

                {/* 8. Availability */}
                <div className="clarity-block" style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0', borderLeft: '4px solid #10B981' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.6rem' }}>
                    <Truck size={18} style={{ color: '#10B981' }} />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#002868', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                      Availability
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                    {activeProduct.availability}
                  </p>
                </div>
              </div>

              {/* Action Bar for Active Product */}
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  flexWrap: 'wrap', 
                  gap: '1rem',
                  background: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  borderRadius: '8px',
                  padding: '1.25rem 1.75rem'
                }}
              >
                <div>
                  <div style={{ fontWeight: 800, color: '#002868', fontSize: '1rem' }}>
                    Need Shop Drawings or a Project Quote for {activeProduct.name}?
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#1E40AF' }}>
                    Our licensed engineering department provides responsive takeoff reviews and project shop submittals.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <a 
                    href="#contact" 
                    className="button-blue" 
                    style={{ textDecoration: 'none', padding: '10px 20px', fontSize: '0.85rem' }}
                  >
                    <span>REQUEST A QUOTE</span>
                    <ArrowRight size={14} />
                  </a>
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

export default CoreProducts;
