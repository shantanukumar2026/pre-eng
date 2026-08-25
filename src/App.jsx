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
  Compass,
  PenTool,
  Store,
  Share2,
  Printer,
  Monitor,
  TrendingUp,
  Heart,
  Lightbulb,
  Target,
  Users,
  MapPin,
  Phone
} from 'lucide-react';

const IconLinkedin = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const IconYoutube = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);
const IconInstagram = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const IconFacebook = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4.2V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

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
      q: 'What are the main advantages of precast concrete?',
      a: 'Precast concrete offers superior quality control, faster construction times, enhanced durability, and reduced environmental impact compared to traditional cast-in-place methods.',
    },
    {
      q: 'How do you ensure the quality of your precast products?',
      a: 'Our manufacturing facilities are PCI certified and ISO 9001 compliant. We conduct rigorous testing at every stage, from material selection to final curing, ensuring maximum structural integrity.',
    },
    {
      q: 'Can precast elements be customized for specific projects?',
      a: 'Yes, our engineering team works closely with architects and contractors to design and manufacture custom precast solutions tailored to exact project specifications and aesthetic requirements.',
    },
    {
      q: 'What is your typical delivery and installation timeframe?',
      a: 'Timelines vary based on project scale and complexity. However, precast manufacturing often occurs concurrently with site preparation, significantly compressing overall project schedules.',
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
                        <img src="/assets/media/Box Culvert/11.jpeg" alt="Box Culverts" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">Box Culverts</div>
                    </a>

                    <a href="#products" className="navbar_submenu_card">
                      <div className="submenu_card_img_wrap">
                        <img src="/assets/media/precast_manufacturing_bg_1787569523806.jpg" alt="Bridge Girders" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">Bridge Girders</div>
                    </a>

                    <a href="#products" className="navbar_submenu_card">
                      <div className="submenu_card_img_wrap">
                        <img src="/assets/media/quality_control_bg_1787569563820.jpg" alt="Doghouse Manholes" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">Doghouse Manholes</div>
                    </a>

                    <a href="#products" className="navbar_submenu_card">
                      <div className="submenu_card_img_wrap">
                        <img src="/assets/media/heavy_logistics_bg_1787569548808.jpg" alt="Architectural Panels" className="submenu_card_img" />
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
                        <img src="/assets/media/precast_manufacturing_bg_1787569523806.jpg" alt="Manufacturing" className="submenu_card_img" />
                      </div>
                      <div className="submenu_arrow_square">
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="submenu_card_title">Manufacturing Plants</div>
                    </a>

                    <a href="#manufacturing" className="navbar_submenu_card" style={{ height: '200px' }}>
                      <div className="submenu_card_img_wrap">
                        <img src="/assets/media/engineering_design_bg_1787569503505.jpg" alt="R&D" className="submenu_card_img" />
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
              <div className="navbar_menu-dropdown" style={{ position: 'relative' }}>
                <div className="navbar_link">
                  <span className="text_nav-link">Company</span>
                  <ChevronDown size={13} className="dropdown-chevron" />
                </div>
                <div className="simple_dropdown_list">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <a href="#company-profile" className="simple_nav_link">Company Profile</a>
                    <a href="#team" className="simple_nav_link">Our Team</a>
                    <a href="#careers" className="simple_nav_link">Careers</a>
                    <a href="#governance" className="simple_nav_link">Governance</a>
                    <a href="#membership" className="simple_nav_link">Membership</a>
                    <a href="#estore" className="simple_nav_link">eStore</a>
                  </div>
                </div>
              </div>

              {/* Simple Dropdown: News */}
              <div className="navbar_menu-dropdown" style={{ position: 'relative' }}>
                <div className="navbar_link">
                  <span className="text_nav-link">News</span>
                  <ChevronDown size={13} className="dropdown-chevron" />
                </div>
                <div className="simple_dropdown_list">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <a href="#blog" className="simple_nav_link">Blog</a>
                    <a href="#press-releases" className="simple_nav_link">Press Releases</a>
                    <a href="#media-kit" className="simple_nav_link">Media Kit</a>
                    <a href="#events" className="simple_nav_link">Events</a>
                    <a href="#newsletter" className="simple_nav_link">Newsletter</a>
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
          <source src="/assets/media/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="header_gradient_overlay"></div>

        <div className="hero_content_inner">
          <div className="hero_top_pill">
            <div className="hero_pill_dot"></div>
            <span className="hero_pill_text">Precast Engineering &amp; Technologies</span>
          </div>

          <h1 className="hero_title_text">
            Precision<br />
            <span className="text-color-blue">Precast Engineering</span><br />
            and Seamless Engineering Solutions
          </h1>

          <p className="hero_subtitle">
            We engineer, design, and manufacture high-performance precast concrete systems, delivering certified structural precision, advanced technologies, and on-time project delivery.
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
          NEW SECTION: CAPABILITIES BENTO BOX
          ========================================================================= */}
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


      {/* SECTION 2: COMPREHENSIVE SOLUTIONS */}
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
                <img src="/assets/media/precast_manufacturing_bg_1787569523806.jpg" alt="Bridge Girders" style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
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


      {/* SECTION 4: 4-STEP METHODOLOGY */}
      <section className="section-methodology padding-global">
        <div className="container-large">
          <h2 className="text-color-primary text-center heading-style-h4" style={{ marginBottom: '3rem' }}>Our Proven 4-Step Methodology</h2>
          <div className="methodology-grid">

            <div className="method-step">
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', border: '3px solid #fff', boxShadow: '0 4px 10px rgba(0, 34, 89,0.1)' }}>
                <img src="/assets/media/engineering_design_bg_1787569503505.jpg" alt="Consultation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 className="method-title">Consultation</h4>
              <p className="method-desc">We collaborate with your team to understand project requirements and structural needs.</p>
            </div>
            <div className="method-line"></div>

            <div className="method-step">
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', border: '3px solid #fff', boxShadow: '0 4px 10px rgba(0, 34, 89,0.1)' }}>
                <img src="/assets/media/precast_manufacturing_bg_1787569523806.jpg" alt="Engineering" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 className="method-title">Engineering & Design</h4>
              <p className="method-desc">Our experts design robust precast solutions optimized for safety and efficiency.</p>
            </div>
            <div className="method-line"></div>

            <div className="method-step">
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', border: '3px solid #fff', boxShadow: '0 4px 10px rgba(0, 34, 89,0.1)' }}>
                <img src="/assets/media/precast_manufacturing_bg_1787569523806.jpg" alt="Manufacturing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 className="method-title">Manufacturing</h4>
              <p className="method-desc">Precision casting in our controlled, state-of-the-art manufacturing facilities.</p>
            </div>
            <div className="method-line"></div>

            <div className="method-step">
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', border: '3px solid #fff', boxShadow: '0 4px 10px rgba(0, 34, 89,0.1)' }}>
                <img src="/assets/media/heavy_logistics_bg_1787569548808.jpg" alt="Delivery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 className="method-title">Delivery & Logistics</h4>
              <p className="method-desc">Coordinated, just-in-time delivery to your job site to keep projects on schedule.</p>
            </div>

          </div>
        </div>
      </section>

      <div className="divider-line"></div>





      {/* SECTION 8: BLUE CTA BANNER */}
      <section className="section-cta padding-global" style={{ paddingBottom: '4rem' }}>
        <div className="container-large">
          <div className="cta-banner">
            <div className="cta-icon-bg">
              <CheckCircle2 size={64} style={{ opacity: 0.8 }} />
            </div>
            <div className="cta-content">
              <h2 className="cta-headline">Ready to Build with Precision?</h2>
              <p className="cta-sub">Let's engineer a custom precast solution that ensures durability, efficiency, and structural integrity for your next project.</p>
              <a href="#start" className="button-white">START YOUR PROJECT <ArrowRight size={14} /></a>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 10: OUR DIGITAL PRODUCTS */}
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
              <img src="/assets/media/precast_manufacturing_bg_1787569523806.jpg" alt="Bridge Girders" />
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

      {/* SECTION 11: WHY CHOOSE US */}
      <section className="section-why-us padding-global">
        <div className="container-large">
          <div className="why-us-wrapper">
            <h2 className="heading-style-h4 text-color-primary">Why Choose PET?</h2>
            <div className="why-us-grid">
              <div className="why-item">
                <Layers size={28} className="text-color-primary" />
                <div className="why-text">Advanced<br />Technology</div>
              </div>
              <div className="why-item">
                <Gauge size={28} className="text-color-primary" />
                <div className="why-text">Precision<br />Engineering</div>
              </div>
              <div className="why-item">
                <ShieldCheck size={28} className="text-color-primary" />
                <div className="why-text">Sustainable<br />Practices</div>
              </div>
              <div className="why-item">
                <Clock size={28} className="text-color-primary" />
                <div className="why-text">On-Time<br />Delivery</div>
              </div>
              <div className="why-item">
                <CheckCircle2 size={28} className="text-color-primary" />
                <div className="why-text">Customer-Centric<br />Approach</div>
              </div>
              <div className="why-item">
                <Factory size={28} className="text-color-primary" />
                <div className="why-text">Cost-Effective<br />Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-line"></div>

      {/* SECTION 12: STATE OF THE ART OPERATIONS */}
      <section className="section-operations padding-global">
        <div className="container-large">
          <div className="operations-header">
            <div className="ops-header-text">
              <h2 className="heading-style-h4 text-color-primary">State-of-the-Art<br />Manufacturing</h2>
              <p className="operations-sub">Our advanced facilities and skilled teams ensure unmatched quality and consistency.</p>
              <a href="#tour" className="operations-link" style={{ fontSize: '0.85rem', fontWeight: 600 }}>TAKE A TOUR <ArrowRight size={14} /></a>
            </div>
            <div className="operations-grid">
              <div className="ops-img-wrap"><img src="/assets/media/precast_manufacturing_bg_1787569523806.jpg" alt="Ops 1" className="ops-img" /></div>
              <div className="ops-img-wrap"><img src="/assets/media/engineering_design_bg_1787569503505.jpg" alt="Ops 2" className="ops-img" /></div>
              <div className="ops-img-wrap"><img src="/assets/media/engineering_design_bg_1787569503505.jpg" alt="Ops 3" className="ops-img" /></div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-line"></div>

      {/* SECTION 13: CERTIFICATIONS */}
      <section className="section-certs padding-global">
        <div className="container-large">
          <div className="certs-wrapper">
            <h2 className="heading-style-h4 text-color-primary" style={{ fontSize: '1.25rem' }}>Certifications & Compliance</h2>
            <div className="certs-grid">
              <div className="cert-logo">ISO 9001</div>
              <div className="cert-logo">ASTM</div>
              <div className="cert-logo">PCI Certified</div>
              <div className="cert-logo">OSHA Compliant</div>
              <div className="cert-logo">LEED</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-line"></div>

      {/* SECTION 14: LATEST NEWS */}
      <section className="section-news padding-global">
        <div className="container-large">
          <div className="news-split">
            <div className="news-left">
              <h2 className="heading-style-h4 text-color-primary">Latest News & Insights</h2>
              <p className="news-sub" style={{ marginBottom: '1rem' }}>Stay informed with trends, insights, and company updates.</p>
              <a href="#news" className="news-link">VIEW ALL ARTICLES <ArrowRight size={14} /></a>
            </div>
            <div className="news-grid">
              <div className="news-card">
                <img src="/assets/media/engineering_design_bg_1787569503505.jpg" alt="News 1" />
                <div className="news-date">MAY 15, 2026</div>
                <div className="news-title">The Future of Precast Construction in 2026</div>
              </div>
              <div className="news-card">
                <img src="/assets/media/precast_manufacturing_bg_1787569523806.jpg" alt="News 2" />
                <div className="news-date">APR 22, 2026</div>
                <div className="news-title">New Technology in Manufacturing</div>
              </div>
              <div className="news-card">
                <img src="/assets/media/engineering_design_bg_1787569503505.jpg" alt="News 3" />
                <div className="news-date">MAR 10, 2026</div>
                <div className="news-title">Sustainability in Precast Concrete Production</div>
              </div>
            </div>
            <div className="newsletter-box">
              <h3 style={{ marginBottom: '0.5rem', color: '#fff' }}>Subscribe to Our Newsletter</h3>
              <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)' }}>Get the latest news, insights, and industry updates.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button><ArrowRight size={16} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-line"></div>

      {/* SECTION 15: RESOURCE CENTER */}
      <section className="section-resources padding-global">
        <div className="container-large">
          <div className="resources-wrapper">
            <h2 className="heading-style-h4 text-color-primary" style={{ fontSize: '1.25rem', width: '200px' }}>Resource Center</h2>
            <div className="resources-grid">
              <div className="resource-item">
                <FileCheck2 size={24} className="text-color-primary" style={{ marginBottom: '0.5rem' }} />
                <span>Case Studies</span>
              </div>
              <div className="resource-item">
                <FileCheck2 size={24} className="text-color-primary" style={{ marginBottom: '0.5rem' }} />
                <span>White Papers</span>
              </div>
              <div className="resource-item">
                <FileCheck2 size={24} className="text-color-primary" style={{ marginBottom: '0.5rem' }} />
                <span>Technical<br />Documents</span>
              </div>
              <div className="resource-item">
                <FileCheck2 size={24} className="text-color-primary" style={{ marginBottom: '0.5rem' }} />
                <span>Product<br />Catalogs</span>
              </div>
              <div className="resource-item">
                <FileCheck2 size={24} className="text-color-primary" style={{ marginBottom: '0.5rem' }} />
                <span>FAQs</span>
              </div>
            </div>
            <div className="need-help-box">
              <div style={{ flex: 1 }}>
                <h4 style={{ marginBottom: '0.25rem' }}>Need Help?</h4>
                <p style={{ fontSize: '0.85rem', color: '#0055b3', marginBottom: '1rem' }}>Our team is here to assist you with your project inquiries.</p>
                <a href="#contact" className="button-blue-small">CONTACT US <ArrowRight size={12} /></a>
              </div>
              <div className="help-icon"><Compass size={40} className="text-color-primary" /></div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-line"></div>



      {/* SECTION 15.5: CORE VALUES */}
      <section className="section-values padding-global" style={{ backgroundColor: '#f8fafc', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container-large">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-style-h3 text-color-primary">Our Core Values</h2>
            <p style={{ color: '#0055b3', maxWidth: '600px', margin: '0 auto' }}>The principles that drive our work, shape our culture, and ensure we always deliver excellence to our clients.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="value-card" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 34, 89,0.05)', textAlign: 'center', borderTop: '3px solid var(--color-primary)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#eff6ff', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}><Heart size={24} /></div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#002868' }}>Client-Centricity</h4>
              <p style={{ fontSize: '0.9rem', color: '#0055b3' }}>Your goals become our goals. We build deep partnerships focused entirely on your success.</p>
            </div>
            <div className="value-card" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 34, 89,0.05)', textAlign: 'center', borderTop: '3px solid var(--color-primary)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#eff6ff', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}><Lightbulb size={24} /></div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#002868' }}>Innovation First</h4>
              <p style={{ fontSize: '0.9rem', color: '#0055b3' }}>The engineering landscape evolves fast. We stay ahead of the curve, constantly adopting new precast technologies.</p>
            </div>
            <div className="value-card" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 34, 89,0.05)', textAlign: 'center', borderTop: '3px solid var(--color-primary)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#eff6ff', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}><Target size={24} /></div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#002868' }}>Data-Driven Precision</h4>
              <p style={{ fontSize: '0.9rem', color: '#0055b3' }}>We don't guess. Every decision we make is backed by rigorous analytics and testing.</p>
            </div>
            <div className="value-card" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 34, 89,0.05)', textAlign: 'center', borderTop: '3px solid var(--color-primary)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#eff6ff', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}><Users size={24} /></div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#002868' }}>Radical Transparency</h4>
              <p style={{ fontSize: '0.9rem', color: '#0055b3' }}>Honest reporting, clear communication, and no hidden agendas. We win when you win.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-line"></div>

      {/* SECTION 15.6: FAQ */}
      <section className="section-faq padding-global" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container-large">
          <div className="faq-split" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
            <div>
              <h2 className="heading-style-h3 text-color-primary">Frequently Asked Questions</h2>
              <p style={{ color: '#0055b3', marginBottom: '1.5rem' }}>Got questions? We've got answers. If you can't find what you're looking for, feel free to reach out to our team.</p>
              <a href="#contact" className="button-blue">GET IN TOUCH <ArrowRight size={14} /></a>
            </div>
            <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeFaq === index ? 'is-active' : ''}`}
                  onClick={() => setActiveFaq(index)}
                  style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', cursor: 'pointer', transition: 'all 0.3s ease', background: activeFaq === index ? '#f8fafc' : '#fff' }}
                >
                  <div className="faq-q" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', color: '#002868' }}>
                    {faq.q}
                    <div style={{ color: 'var(--color-primary)' }}>
                      {activeFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </div>
                  {activeFaq === index && (
                    <div className="faq-a" style={{ marginTop: '1rem', color: '#004099', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider-line"></div>

      {/* SECTION 17: OUR LOCATIONS */}
      <section className="section-locations padding-global" style={{ backgroundColor: '#f1f5f9', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container-large">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="heading-style-h3 text-color-primary">Our Global Nodes</h2>
            <p style={{ color: '#0055b3', maxWidth: '600px', margin: '0 auto' }}>Operating across North America to deliver world-class solutions.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>

            <div className="location-card" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', boxShadow: '0 4px 10px rgba(0, 34, 89,0.03)' }}>
              <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>Northeast Node</h4>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', color: '#004099', fontSize: '0.85rem', fontWeight: 600 }}>
                <MapPin size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>105 MAXESS ROAD, MELVILLE, NY 11747</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', color: '#004099', fontSize: '0.85rem', fontWeight: 600 }}>
                <Phone size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>(631) 452-1111</span>
              </div>
            </div>

            <div className="location-card" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', boxShadow: '0 4px 10px rgba(0, 34, 89,0.03)' }}>
              <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>South Node</h4>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', color: '#004099', fontSize: '0.85rem', fontWeight: 600 }}>
                <MapPin size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>850 NW FEDERAL HWY, STUART, FL 34994</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', color: '#004099', fontSize: '0.85rem', fontWeight: 600 }}>
                <Phone size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>(772) 297-0700</span>
              </div>
            </div>

            <div className="location-card" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', boxShadow: '0 4px 10px rgba(0, 34, 89,0.03)' }}>
              <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>Midwest Node</h4>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', color: '#004099', fontSize: '0.85rem', fontWeight: 600 }}>
                <MapPin size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>2200 HUNT STREET, DETROIT, MI 48207</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', color: '#004099', fontSize: '0.85rem', fontWeight: 600 }}>
                <Phone size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>(631) 452-1111</span>
              </div>
            </div>



          </div>
        </div>
      </section>

      {/* SECTION 18 & 19: SUSTAINABILITY & CONSULTATION */}
      <section className="section-sustainability">
        <div className="sustain-banner">
          <img src="/assets/media/about_us_agency_1787570493372.jpg" alt="Sustainability" className="sustain-img" />
          <div className="sustain-overlay">
            <h2 className="sustain-title">Building a Sustainable Future</h2>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>We are committed to environmentally responsible practices<br />and building infrastructure that lasts for generations.</p>
            <a href="#sustainability" className="sustain-link" style={{ fontSize: '0.8rem', fontWeight: 700 }}>OUR SUSTAINABILITY INITIATIVES <ArrowRight size={14} /></a>
          </div>
        </div>
      </section>

      <section className="section-consultation padding-global">
        <div className="container-large">
          <div className="consult-wrapper">
            <div className="consult-left">
              <div className="consult-icon"><Clock size={40} className="text-color-primary" /></div>
              <div>
                <h3 className="consult-title" style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Schedule a Consultation</h3>
                <p className="consult-desc" style={{ fontSize: '0.9rem', color: '#0055b3', marginBottom: '1.5rem' }}>Let's discuss how PET can bring precision, efficiency,<br />and innovation to your next project.</p>
                <a href="#book" className="button-blue">BOOK A MEETING <ArrowRight size={14} /></a>
              </div>
            </div>
            <div className="consult-right">
              <div className="consult-feature">
                <div style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}><Compass size={24} /></div>
                <span>Tailored Solutions</span>
              </div>
              <div className="consult-feature">
                <div style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}><CheckCircle2 size={24} /></div>
                <span>Expert Guidance</span>
              </div>
              <div className="consult-feature">
                <div style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}><TrendingUp size={24} /></div>
                <span>Measurable Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-line"></div>

      {/* SECTION 20: FOOTER */}
      <footer className="section-footer padding-global" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container-large">
          <div className="footer-grid-exact">
            <div className="footer-col brand-col">
              <img src="/PEG.png" alt="Agency Logo" className="footer-logo" style={{ height: '40px', marginBottom: '1rem' }} />
              <p style={{ fontSize: '0.85rem', color: '#0055b3', marginBottom: '1.5rem', maxWidth: '250px' }}>An award-winning global engineering and manufacturing company delivering precast solutions worldwide.</p>
              <div className="social-icons" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <a href="#" className="s-icon" style={{ width: '32px', height: '32px', border: '1px solid #cbd5e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; e.currentTarget.style.color = '#fff'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-primary)'; }}><IconLinkedin size={16} /></a>
                <a href="#" className="s-icon" style={{ width: '32px', height: '32px', border: '1px solid #cbd5e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; e.currentTarget.style.color = '#fff'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-primary)'; }}><IconYoutube size={16} /></a>
                <a href="#" className="s-icon" style={{ width: '32px', height: '32px', border: '1px solid #cbd5e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; e.currentTarget.style.color = '#fff'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-primary)'; }}><IconInstagram size={16} /></a>
                <a href="#" className="s-icon" style={{ width: '32px', height: '32px', border: '1px solid #cbd5e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; e.currentTarget.style.color = '#fff'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-primary)'; }}><IconFacebook size={16} /></a>
              </div>
              <div className="copyright" style={{ fontSize: '0.75rem', color: '#94a3b8' }}>© 2026 Precast Engineering Technologies. All rights reserved.</div>
            </div>

            <div className="footer-col" style={{ fontSize: '0.85rem' }}>
              <h4 style={{ color: 'var(--color-primary)', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '1rem' }}>COMPANY</h4>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>About Us</a>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>Our Products</a>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>Manufacturing & R&D</a>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>Careers</a>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>News</a>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>Contact</a>
            </div>

            <div className="footer-col" style={{ fontSize: '0.85rem' }}>
              <h4 style={{ color: 'var(--color-primary)', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '1rem' }}>PRODUCTS</h4>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>Box Culverts</a>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>Bridge Girders</a>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>Doghouse Manholes</a>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>Architectural Panels</a>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>Custom Solutions</a>
            </div>

            <div className="footer-col" style={{ fontSize: '0.85rem' }}>
              <h4 style={{ color: 'var(--color-primary)', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '1rem' }}>RESOURCES</h4>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>Case Studies</a>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>Blogs</a>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>FAQs</a>
              <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>Support</a>
            </div>

            <div className="footer-col contact-col" style={{ fontSize: '0.85rem', color: '#004099' }}>
              <p style={{ marginBottom: '0.5rem' }}>+1 (800) 123-4567</p>
              <p style={{ marginBottom: '0.5rem' }}>info@precasteng.com</p>
              <p style={{ marginBottom: '2rem' }}>1234 Engineering Way,<br />Houston, TX 77001</p>
              <div className="footer-links" style={{ fontSize: '0.75rem' }}>
                <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</a> | <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
