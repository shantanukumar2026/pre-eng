import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ChevronDown, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  HardHat, 
  Layers, 
  Factory, 
  Building2, 
  Truck, 
  FileCheck2, 
  Gauge, 
  Zap, 
  Clock, 
  Minus, 
  Plus,
  Check,
  Award,
  Compass
} from 'lucide-react';

function App() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      q: 'What precast structural systems does Precast Engineering manufacture?',
      a: 'We engineer, design, and manufacture single and multi-cell ASTM C1577 box culverts (up to 24ft spans), AASHTO LRFD prestressed bridge girders (up to 160ft spans), heavy-duty storm vaults, and R-22+ architectural facade panels.',
    },
    {
      q: 'What is your standard turnaround for PE-stamped calculations and fabrication drawings?',
      a: 'Standard turnaround is 5 to 7 business days. For urgent DOT replacements and accelerated bridge construction, we provide expedited 48-to-72-hour priority delivery with licensed PE seals across all 50 U.S. states.',
    },
    {
      q: 'Are calculation submittals certified for all 50 state DOTs?',
      a: 'Yes, our structural leadership holds active PE and SE licenses across all 50 U.S. states. Submittal packages strictly conform to AASHTO LRFD Bridge Specifications, PCI Design Manuals, and ASTM standards.',
    },
    {
      q: 'How does Precast Engineering support contractors on the jobsite?',
      a: 'We provide 3D BIM parametric models, precise lifting and rigging plans, automated CNC fabrication shop tickets, on-site testing verification, and direct engineering phone support.',
    },
  ];

  return (
    <div className="page-wrapper">
      {/* =========================================================================
          NAVBAR: STICKY FLOATING (Transparent Rest -> Solid White Scrolled)
          ========================================================================= */}
      <header className={`navbar_component ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar_container">
          <a href="/" className="navbar_logo-link">
            <img src="/PEG.png" alt="Precast Engineering Logo" className="navbar_logo" />
          </a>

          <nav className="navbar_menu">
            <div className="navbar_menu_links">
              <a href="#home" className="navbar_link active">Home</a>

              {/* Mega Dropdown: Our Products */}
              <div className="navbar_menu-dropdown">
                <div className="navbar_link">
                  <span className="text_nav-link">Our Products</span>
                  <ChevronDown size={13} className="dropdown-chevron" />
                </div>
                <div className="navbar_dropdown-list">
                  <div className="navbar_submenu_grid">
                    <a href="#products" className="navbar_submenu_card">
                      <div className="submenu_card_img_wrap">
                        <img src="/assets/media/gettyimages-588287750-170667a.jpg" alt="Box Culverts" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">Box Culverts</div>
                    </a>

                    <a href="#products" className="navbar_submenu_card">
                      <div className="submenu_card_img_wrap">
                        <img src="/assets/media/gettyimages-961684452-1024x1024.jpg" alt="Bridge Girders" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">Bridge Girders</div>
                    </a>

                    <a href="#products" className="navbar_submenu_card">
                      <div className="submenu_card_img_wrap">
                        <img src="/assets/media/gettyimages-2115526938-170667a.jpg" alt="Doghouse Manholes" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">Doghouse Manholes</div>
                    </a>

                    <a href="#products" className="navbar_submenu_card">
                      <div className="submenu_card_img_wrap">
                        <img src="/assets/media/gettyimages-2273715061-170667a.jpg" alt="Architectural Panels" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">Architectural Panels</div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Mega Dropdown: Manufacturing and R&D */}
              <div className="navbar_menu-dropdown">
                <div className="navbar_link">
                  <span className="text_nav-link">Manufacturing and R&amp;D</span>
                  <ChevronDown size={13} className="dropdown-chevron" />
                </div>
                <div className="navbar_dropdown-list">
                  <div className="navbar_submenu_grid is-2">
                    <a href="#manufacturing" className="navbar_submenu_card" style={{ height: '200px' }}>
                      <div className="submenu_card_img_wrap">
                        <img src="https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=600&auto=format&fit=crop" alt="Manufacturing" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">Manufacturing Plants</div>
                    </a>

                    <a href="#manufacturing" className="navbar_submenu_card" style={{ height: '200px' }}>
                      <div className="submenu_card_img_wrap">
                        <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop" alt="R&D" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">R&amp;D Engineering Labs</div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Mega Dropdown: Company */}
              <div className="navbar_menu-dropdown">
                <div className="navbar_link">
                  <span className="text_nav-link">Company</span>
                  <ChevronDown size={13} className="dropdown-chevron" />
                </div>
                <div className="navbar_dropdown-list">
                  <div className="navbar_submenu_grid is-3">
                    <a href="#about" className="navbar_submenu_card" style={{ height: '180px' }}>
                      <div className="submenu_card_img_wrap">
                        <img src="https://images.unsplash.com/photo-1541888086225-f6740f9e81f1?q=80&w=600&auto=format&fit=crop" alt="Who We Are" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">Who We Are</div>
                    </a>

                    <a href="#about" className="navbar_submenu_card" style={{ height: '180px' }}>
                      <div className="submenu_card_img_wrap">
                        <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop" alt="Sustainability" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">Sustainability &amp; CSR</div>
                    </a>

                    <a href="#about" className="navbar_submenu_card" style={{ height: '180px' }}>
                      <div className="submenu_card_img_wrap">
                        <img src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop" alt="Mission" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">Mission &amp; Values</div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Mega Dropdown: News */}
              <div className="navbar_menu-dropdown">
                <div className="navbar_link">
                  <span className="text_nav-link">News</span>
                  <ChevronDown size={13} className="dropdown-chevron" />
                </div>
                <div className="navbar_dropdown-list">
                  <div className="navbar_submenu_grid is-2">
                    <a href="#about" className="navbar_submenu_card" style={{ height: '200px' }}>
                      <div className="submenu_card_img_wrap">
                        <img src="https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=600&auto=format&fit=crop" alt="News" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">Corporate Bulletins</div>
                    </a>

                    <a href="#products" className="navbar_submenu_card" style={{ height: '200px' }}>
                      <div className="submenu_card_img_wrap">
                        <img src="/assets/media/gettyimages-588287750-170667a.jpg" alt="New Profiles" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">Product Profiles</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT US (Styled in Brand Blue #0047BA) */}
            <a href="#contact" className="btn-nav-contact">CONTACT US</a>
          </nav>
        </div>
      </header>

      {/* =========================================================================
          SECTION 1: CRYSTAL-CLEAR CINEMATIC HERO (Exact Reference Match)
          ========================================================================= */}
      <header className="section_header_hero" id="home">
        <video 
          className="header_bg_video"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/assets/media/manhole.mp4" type="video/mp4" />
        </video>
        <div className="header_gradient_overlay"></div>

        <div className="hero_content_inner">
          <div className="hero_top_pill">
            <div className="hero_pill_dot"></div>
            <span className="hero_pill_text">Precast Engineering &amp; Technologies</span>
          </div>

          <h1 className="hero_title_text">
            Precast Engineering<br />
            <span className="text-color-blue">and Technologies</span><br />
            <span className="hero_title_accent">Like Wine and Cheese, Always Best Together</span>
          </h1>

          <p className="hero_subtitle">
            We engineer, design, and manufacture high-performance precast concrete products, delivering certified structural quality, turnkey engineering, and on-time project delivery.
          </p>

          <div className="hero_cta_group">
            <a href="#products" className="button_hero_primary">
              <div className="btn_circle_icon">
                <ArrowUpRight size={16} />
              </div>
              <span>Explore Our Products</span>
            </a>

            <a href="#contact" className="button_hero_secondary">
              <span>Request a Quote</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom Trust Row & Clean Controls */}
        <div className="hero_bottom_bar">
          <div className="hero_trust_row">
            <div className="hero_trust_item">
              <div className="trust_icon_wrap">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="trust_text_main">Licensed</div>
                <div className="trust_text_sub">PE Certified</div>
              </div>
            </div>

            <div className="hero_trust_item">
              <div className="trust_icon_wrap">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <div className="trust_text_main">Certified Quality</div>
                <div className="trust_text_sub">Standards</div>
              </div>
            </div>

            <div className="hero_trust_item">
              <div className="trust_icon_wrap">
                <HardHat size={18} />
              </div>
              <div>
                <div className="trust_text_main">Fast Turnaround</div>
                <div className="trust_text_sub">&amp; Delivery</div>
              </div>
            </div>

            <div className="hero_trust_item">
              <div className="trust_icon_wrap">
                <Layers size={18} />
              </div>
              <div>
                <div className="trust_text_main">Engineered for</div>
                <div className="trust_text_sub">Durability</div>
              </div>
            </div>
          </div>

          <a href="#products" className="hero_scroll_indicator">
            <div className="scroll_icon_circle">
              <ChevronDown size={14} />
            </div>
            <span>Scroll to explore</span>
          </a>
        </div>
      </header>

      {/* =========================================================================
          SECTION 2: SQUARE ARCHITECTURAL PRODUCT SHOWCASE CARDS (4-Column Grid)
          ========================================================================= */}
      <section className="section_visual_products" id="products">
        <div className="padding-global">
          <div className="container-large">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <div className="h-flex-tiny">
                  <div className="chip_box"></div>
                  <span className="chip">Engineered Product Lineup</span>
                </div>
                <h2 className="heading-style-h3">Precision Precast Infrastructure Systems</h2>
              </div>
              <a href="#contact" className="button_hero_primary" style={{ padding: '0.65rem 1.35rem', fontSize: '13px' }}>
                <span>Download Spec Sheets</span>
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="product_visual_grid">
              {/* Product 1: Monolithic Box Culverts */}
              <a href="#contact" className="product_visual_card">
                <div className="product_visual_badge">ASTM C1577</div>
                <div className="product_visual_arrow">
                  <ArrowUpRight size={18} />
                </div>
                <div className="product_media_box">
                  <img 
                    src="/assets/media/gettyimages-588287750-170667a.jpg" 
                    alt="Monolithic Box Culverts" 
                    className="product_img_3d" 
                  />
                </div>
                <div className="product_body">
                  <div>
                    <h3 className="product_card_name">Monolithic Box Culverts</h3>
                    <p className="product_card_spec">Engineered for heavy highway overburden and severe HL-93 live loads.</p>
                  </div>
                  <div className="product_card_divider"></div>
                  <div className="button_hero_primary is-card-btn">
                    <div className="btn_circle_icon">
                      <ArrowUpRight size={14} />
                    </div>
                    <span>Learn More</span>
                  </div>
                </div>
              </a>

              {/* Product 2: Prestressed Bridge Girders */}
              <a href="#contact" className="product_visual_card">
                <div className="product_visual_badge">AASHTO LRFD</div>
                <div className="product_visual_arrow">
                  <ArrowUpRight size={18} />
                </div>
                <div className="product_media_box">
                  <img 
                    src="/assets/media/gettyimages-961684452-1024x1024.jpg" 
                    alt="Prestressed Bridge Girders" 
                    className="product_img_3d" 
                  />
                </div>
                <div className="product_body">
                  <div>
                    <h3 className="product_card_name">Prestressed Bridge Girders</h3>
                    <p className="product_card_spec">High-strength Bulb-T and I-beam spans for accelerated bridge construction.</p>
                  </div>
                  <div className="product_card_divider"></div>
                  <div className="button_hero_primary is-card-btn">
                    <div className="btn_circle_icon">
                      <ArrowUpRight size={14} />
                    </div>
                    <span>Learn More</span>
                  </div>
                </div>
              </a>

              {/* Product 3: Doghouse Utility Manholes */}
              <a href="#contact" className="product_visual_card">
                <div className="product_visual_badge">ASTM C478</div>
                <div className="product_visual_arrow">
                  <ArrowUpRight size={18} />
                </div>
                <div className="product_media_box">
                  <img 
                    src="/assets/media/gettyimages-2115526938-170667a.jpg" 
                    alt="Doghouse Utility Manholes" 
                    className="product_img_3d" 
                  />
                </div>
                <div className="product_body">
                  <div>
                    <h3 className="product_card_name">Doghouse Utility Manholes</h3>
                    <p className="product_card_spec">Watertight subterranean storm detention and utility vault chambers.</p>
                  </div>
                  <div className="product_card_divider"></div>
                  <div className="button_hero_primary is-card-btn">
                    <div className="btn_circle_icon">
                      <ArrowUpRight size={14} />
                    </div>
                    <span>Learn More</span>
                  </div>
                </div>
              </a>

              {/* Product 4: Architectural Wall Panels */}
              <a href="#contact" className="product_visual_card">
                <div className="product_visual_badge">PCI CERTIFIED</div>
                <div className="product_visual_arrow">
                  <ArrowUpRight size={18} />
                </div>
                <div className="product_media_box">
                  <img 
                    src="/assets/media/gettyimages-2273715061-170667a.jpg" 
                    alt="Architectural Wall Panels" 
                    className="product_img_3d" 
                  />
                </div>
                <div className="product_body">
                  <div>
                    <h3 className="product_card_name">Architectural Wall Panels</h3>
                    <p className="product_card_spec">Thermally broken sandwich panels with custom cast architectural textures.</p>
                  </div>
                  <div className="product_card_divider"></div>
                  <div className="button_hero_primary is-card-btn">
                    <div className="btn_circle_icon">
                      <ArrowUpRight size={14} />
                    </div>
                    <span>Learn More</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ASYMMETRICAL INDUSTRIAL PLANT & OPERATIONAL SPLIT (Unique Layout)
          ========================================================================= */}
      <section className="section_industrial_split" id="manufacturing">
        <div className="padding-global">
          <div className="container-large">
            <div>
              <div className="h-flex-tiny">
                <div className="chip_box"></div>
                <span className="chip">Manufacturing Operations</span>
              </div>
              <h2 className="heading-style-h3">Certified Precast Concrete Industrial Lifecycle</h2>
            </div>

            <div className="industrial_split_grid">
              {/* Left Column: Industrial Plant Anchor Feature */}
              <div className="industrial_plant_feature">
                <div className="plant_feature_image_wrap">
                  <img src="/assets/media/gettyimages-180404794-1024x1024.jpg" alt="Automated Batching &amp; Casting Plant" />
                </div>
                <div className="plant_feature_body">
                  <div>
                    <h3 className="plant_feature_title">Automated Batching &amp; Casting Plant</h3>
                    <p className="plant_feature_desc">
                      Operating state-of-the-art enclosed casting beds with computerized batching, steam curing chambers, and overhead crane sequencing.
                    </p>
                  </div>

                  <div className="plant_spec_list">
                    <div className="plant_spec_row">
                      <span className="plant_spec_label">Enclosed Facility Area</span>
                      <span className="plant_spec_val mono">250,000+ SQ FT</span>
                    </div>
                    <div className="plant_spec_row">
                      <span className="plant_spec_label">Overhead Crane Capacity</span>
                      <span className="plant_spec_val mono">150-Ton Tandem Lift</span>
                    </div>
                    <div className="plant_spec_row">
                      <span className="plant_spec_label">Plant Certification</span>
                      <span className="plant_spec_val mono">PCI MNL-116 Quality</span>
                    </div>
                  </div>

                  <a href="#contact" className="button_hero_primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <div className="btn_circle_icon">
                      <ArrowUpRight size={15} />
                    </div>
                    <span>Schedule Plant Audit</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Stacked Horizontal Operational Timeline */}
              <div className="operational_timeline_stack">
                {/* Stage 1 */}
                <div className="timeline_row_card">
                  <div className="timeline_step_number mono">01</div>
                  <div>
                    <h4 className="timeline_row_title">Cement Chemistry &amp; Mix Batching</h4>
                    <p className="timeline_row_desc">
                      Type III Portland cement blended with silica fume for high-flow, zero-void Self-Consolidating Concrete (SCC).
                    </p>
                  </div>
                  <div className="timeline_row_badge_box">
                    <div className="timeline_badge_label">Compressive Target</div>
                    <div className="timeline_badge_val mono">8,500+ PSI</div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="timeline_row_card">
                  <div className="timeline_step_number mono">02</div>
                  <div>
                    <h4 className="timeline_row_title">Steel Fabrication &amp; Prestressing</h4>
                    <p className="timeline_row_desc">
                      Automated robotic welding of ASTM A615 Grade 60 rebar cages and 270 ksi low-relaxation steel strand tensioning.
                    </p>
                  </div>
                  <div className="timeline_row_badge_box">
                    <div className="timeline_badge_label">Prestress Steel</div>
                    <div className="timeline_badge_val mono">270 ksi Strand</div>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="timeline_row_card">
                  <div className="timeline_step_number mono">03</div>
                  <div>
                    <h4 className="timeline_row_title">Precision Casting &amp; Steam Curing</h4>
                    <p className="timeline_row_desc">
                      Pneumatic high-frequency vibration followed by radiant steam curing chambers for rapid 14-hour release strength.
                    </p>
                  </div>
                  <div className="timeline_row_badge_box">
                    <div className="timeline_badge_label">Hydration Speed</div>
                    <div className="timeline_badge_val mono">&lt; 14 Hr Release</div>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="timeline_row_card">
                  <div className="timeline_step_number mono">04</div>
                  <div>
                    <h4 className="timeline_row_title">Destructive QC &amp; Jobsite Erection</h4>
                    <p className="timeline_row_desc">
                      ASTM C39 cylinder break verification, watertight vacuum gasket testing, and direct flatbed crane delivery.
                    </p>
                  </div>
                  <div className="timeline_row_badge_box">
                    <div className="timeline_badge_label">On-Time Delivery</div>
                    <div className="timeline_badge_val mono">99.4% SLA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CORPORATE PANORAMIC BENCHMARKS & CERTIFICATIONS (Unique 4-Box Top Bar)
          ========================================================================= */}
      <section className="section_panoramic_scale" id="about">
        <div className="padding-global">
          <div className="container-large">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <div className="h-flex-tiny">
                  <div className="chip_box"></div>
                  <span className="chip">Operational Benchmarks</span>
                </div>
                <h2 className="heading-style-h3">Production Volume &amp; Nationwide Capacity</h2>
              </div>
              <div className="mono" style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 700 }}>
                ● 2026 AUDITED INFRASTRUCTURE CAPABILITIES
              </div>
            </div>

            <div className="panoramic_scale_grid">
              <div className="panoramic_stat_box">
                <div className="panoramic_num mono">35M+</div>
                <div>
                  <h4 className="panoramic_title">Lbs Concrete Annually</h4>
                  <p className="panoramic_desc">Certified precast throughput across North American casting facilities.</p>
                </div>
              </div>

              <div className="panoramic_stat_box">
                <div className="panoramic_num mono">15,000+</div>
                <div>
                  <h4 className="panoramic_title">PE Stamped Submittals</h4>
                  <p className="panoramic_desc">Comprehensive calculation packages verified by licensed structural engineers.</p>
                </div>
              </div>

              <div className="panoramic_stat_box">
                <div className="panoramic_num mono">50 States</div>
                <div>
                  <h4 className="panoramic_title">DOT Prequalified</h4>
                  <p className="panoramic_desc">Approved standard profiles meeting federal and state highway codes.</p>
                </div>
              </div>

              <div className="panoramic_stat_box">
                <div className="panoramic_num mono">&lt; 48 Hrs</div>
                <div>
                  <h4 className="panoramic_title">Emergency Turnaround</h4>
                  <p className="panoramic_desc">Expedited engineering and casting for priority infrastructure replacements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: 50-STATE SPECIFICATION & DOT CERTIFICATION DIRECTORY
          ========================================================================= */}
      <section className="section_dot_network" id="standards">
        <div className="padding-global">
          <div className="container-large">
            <div className="dot_network_layout">
              {/* Left Column: Heading & Mission */}
              <div>
                <div className="h-flex-tiny">
                  <div className="chip_box"></div>
                  <span className="chip">Quality Assurance</span>
                </div>
                <h2 className="heading-style-h3" style={{ marginBottom: '1.25rem' }}>
                  Nationwide DOT Code Compliance
                </h2>
                <p className="text-color-grey" style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Every precast concrete unit is engineered in strict accordance with federal highway specifications and certified by our in-house licensed Professional Engineers.
                </p>
                <a href="#contact" className="button_hero_primary">
                  <div className="btn_circle_icon">
                    <ArrowUpRight size={16} />
                  </div>
                  <span>Request Engineering Calculations</span>
                </a>
              </div>

              {/* Right Column: 4-Square Specification Matrix */}
              <div className="dot_cert_grid">
                <div className="dot_cert_box">
                  <div className="dot_cert_code mono">CODE • ASTM C1577</div>
                  <div className="dot_cert_title">Box Culvert Standard</div>
                  <div className="dot_cert_desc">Monolithic single and multi-cell designs verified for severe HL-93 live loads.</div>
                </div>

                <div className="dot_cert_box">
                  <div className="dot_cert_code mono">CODE • AASHTO LRFD</div>
                  <div className="dot_cert_title">Bridge Specifications</div>
                  <div className="dot_cert_desc">Prestressed girder sections designed for 100-year structural service lifespans.</div>
                </div>

                <div className="dot_cert_box">
                  <div className="dot_cert_code mono">CODE • PCI MNL-116</div>
                  <div className="dot_cert_title">Plant Quality Control</div>
                  <div className="dot_cert_desc">Daily batch aggregate testing and automated steam humidity monitoring.</div>
                </div>

                <div className="dot_cert_box">
                  <div className="dot_cert_code mono">CODE • 50-STATE PE</div>
                  <div className="dot_cert_title">Licensed Engineering Seals</div>
                  <div className="dot_cert_desc">Active structural engineering licenses held across every U.S. state.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FAQ ACCORDION SECTION
          ========================================================================= */}
      <section className="section_faq background-color-light-blue" id="faq" style={{ padding: '6.5rem 0' }}>
        <div className="padding-global">
          <div className="container-large">
            <div className="main-grid is-stretch">
              <div>
                <div className="h-flex-tiny">
                  <div className="chip_box"></div>
                  <span className="chip">FAQ’S</span>
                </div>
                <h2 className="heading-style-h3" style={{ marginBottom: '2rem' }}>
                  Frequently Asked Questions
                </h2>

                <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '2px', border: '1px solid var(--border-light)' }}>
                  <h3 className="heading-style-h5" style={{ marginBottom: '0.75rem' }}>
                    Need a custom <span className="text-color-primary">precast design?</span>
                  </h3>
                  <p className="text-color-grey" style={{ fontSize: '13.5px', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    Our structural engineers are ready to review your project plans and deliver fast stamped calculations.
                  </p>
                  <a href="#contact" className="button_hero_primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Contact Engineering Desk</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <div>
                {faqs.map((faq, idx) => (
                  <div key={idx} className={`faq_accordion ${activeFaq === idx ? 'active' : ''}`}>
                    <div className="faq_question" onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}>
                      <div>{faq.q}</div>
                      <div className="accordion_icon">
                        {activeFaq === idx ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </div>
                    {activeFaq === idx && (
                      <div className="faq_answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CTA BANNER & FOOTER (Strictly Brand Blue & Navy - 0% Black)
          ========================================================================= */}
      <footer className="footer_component" id="contact">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              {/* CTA 2-Column Banner */}
              <div className="cta_content is-2-1">
                <div>
                  <h2 className="heading-style-h3 text-color-white" style={{ marginBottom: '1rem' }}>
                    Ready to engineer your next precast project?
                  </h2>
                  <p className="text-color-white" style={{ opacity: 0.88, fontSize: '1.1rem', marginBottom: '2rem' }}>
                    Connect with our engineering leadership to review plans, request custom mold pricing, and secure 50-state PE stamped drawings.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href="mailto:info@precasteng.com" className="button_hero_primary">
                      <span>Connect With Our Team</span>
                      <ArrowUpRight size={16} />
                    </a>
                    <a href="#products" className="button_hero_secondary">
                      <span>View Products</span>
                    </a>
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <img 
                    src="/assets/media/gettyimages-588287750-170667a.jpg" 
                    alt="Precast Culvert Submittal" 
                    style={{ width: '100%', maxHeight: '220px', objectFit: 'cover', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.2)' }} 
                  />
                </div>
              </div>

              {/* Bottom Footer Links */}
              <div className="footer_top-wrapper">
                <div>
                  <div style={{ background: '#ffffff', padding: '8px 18px', borderRadius: '4px', display: 'inline-block', marginBottom: '1.25rem' }}>
                    <img src="/PEG.png" alt="Precast Engineering & Technologies" style={{ height: '44px', width: 'auto', maxWidth: '300px', display: 'block', objectFit: 'contain' }} />
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13.5px', lineHeight: 1.7, maxWidth: '360px' }}>
                    Manufacturing and structural engineering excellence across North America, trusted by state DOTs &amp; heavy civil contractors worldwide.
                  </p>
                </div>

                <div className="footer_menu-wrapper">
                  <div>
                    <div className="footer_link-title">Quick Links</div>
                    <a href="#home" className="footer_link">Home</a>
                    <a href="#products" className="footer_link">Products</a>
                    <a href="#manufacturing" className="footer_link">Manufacturing Operations</a>
                    <a href="#about" className="footer_link">Corporate Scale</a>
                  </div>

                  <div>
                    <div className="footer_link-title">Engineering</div>
                    <a href="#manufacturing" className="footer_link">Cement Chemistry &amp; SCC</a>
                    <a href="#manufacturing" className="footer_link">270 ksi Strand Prestressing</a>
                    <a href="#manufacturing" className="footer_link">Steam Curing Hydration</a>
                    <a href="#manufacturing" className="footer_link">Direct Trench Dispatch</a>
                  </div>

                  <div>
                    <div className="footer_link-title">Our Portfolio</div>
                    <a href="#products" className="footer_link">Monolithic Box Culverts</a>
                    <a href="#products" className="footer_link">Prestressed Bridge Girders</a>
                    <a href="#products" className="footer_link">Doghouse Storm Manholes</a>
                    <a href="#products" className="footer_link">Architectural Wall Panels</a>
                  </div>
                </div>
              </div>

              <div className="footer_menu-wrapper is-info">
                <div>&copy; {new Date().getFullYear()} Precast Engineering. All rights reserved.</div>
                <div className="mono" style={{ color: 'var(--color-accent-sky)' }}>Empowering Precasters Endlessly™</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
