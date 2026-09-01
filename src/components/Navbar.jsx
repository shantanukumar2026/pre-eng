import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
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

  return (
    <header className={`navbar_component ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar_container">
        <a href="/" className="navbar_logo-link">
          <img src="/PEG.png" alt="Precast Engineering Logo" className="navbar_logo" />
        </a>

        <nav className="navbar_menu">
          <div className="navbar_menu_links">
            <a href="#home" className="navbar_link active">Home</a>

            {/* Dropdown: Company */}
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
                      <img src="/assets/media/gettyimages-961684452-1024x1024.jpg" alt="Bridge Girders" className="submenu_card_img" />
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
  );
};

export default Navbar;
