import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const Navbar = ({ currentView = 'home', onNavigate }) => {
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

  const handleNavClick = (view, hash) => (e) => {
    if (onNavigate) {
      onNavigate(view);
    }
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`navbar_component is-scrolled ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar_container">
        <a href="#home" onClick={handleNavClick('home', '#home')} className="navbar_logo-link">
          <img src="/PEG.png" alt="Precast Engineering Logo" className="navbar_logo" />
        </a>

        <nav className="navbar_menu">
          <div className="navbar_menu_links">
            <a 
              href="#home" 
              onClick={handleNavClick('home', '#home')} 
              className={`navbar_link ${currentView === 'home' ? 'active' : ''}`}
            >
              Home
            </a>

            {/* Dropdown: Company */}
            <div className="navbar_menu-dropdown" style={{ position: 'relative' }}>
              <div className={`navbar_link ${['company-profile', 'team', 'careers', 'governance', 'membership', 'estore'].includes(currentView) ? 'active' : ''}`}>
                <span className="text_nav-link">Company</span>
                <ChevronDown size={13} className="dropdown-chevron" />
              </div>
              <div className="simple_dropdown_list">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <a 
                    href="#company-profile" 
                    onClick={handleNavClick('company-profile', '#company-profile')} 
                    className={`simple_nav_link ${currentView === 'company-profile' ? 'active' : ''}`}
                    style={currentView === 'company-profile' ? { color: 'var(--color-primary, #0047ba)', fontWeight: 700 } : {}}
                  >
                    Company Profile
                  </a>
                  <a 
                    href="#team" 
                    onClick={handleNavClick('team', '#team')} 
                    className={`simple_nav_link ${currentView === 'team' ? 'active' : ''}`}
                    style={currentView === 'team' ? { color: 'var(--color-primary, #0047ba)', fontWeight: 700 } : {}}
                  >
                    Our Team
                  </a>
                  <a 
                    href="#careers" 
                    onClick={handleNavClick('careers', '#careers')} 
                    className={`simple_nav_link ${currentView === 'careers' ? 'active' : ''}`}
                    style={currentView === 'careers' ? { color: 'var(--color-primary, #0047ba)', fontWeight: 700 } : {}}
                  >
                    Careers
                  </a>
                  <a 
                    href="#governance" 
                    onClick={handleNavClick('governance', '#governance')} 
                    className={`simple_nav_link ${currentView === 'governance' ? 'active' : ''}`}
                    style={currentView === 'governance' ? { color: 'var(--color-primary, #0047ba)', fontWeight: 700 } : {}}
                  >
                    Governance
                  </a>
                  <a 
                    href="#membership" 
                    onClick={handleNavClick('membership', '#membership')} 
                    className={`simple_nav_link ${currentView === 'membership' ? 'active' : ''}`}
                    style={currentView === 'membership' ? { color: 'var(--color-primary, #0047ba)', fontWeight: 700 } : {}}
                  >
                    Membership
                  </a>
                  <a 
                    href="#estore" 
                    onClick={handleNavClick('estore', '#estore')} 
                    className={`simple_nav_link ${currentView === 'estore' ? 'active' : ''}`}
                    style={currentView === 'estore' ? { color: 'var(--color-primary, #0047ba)', fontWeight: 700 } : {}}
                  >
                    eStore
                  </a>
                </div>
              </div>
            </div>

            {/* Mega Dropdown: Our Products */}
            <div className="navbar_menu-dropdown">
              <div className={`navbar_link ${currentView === 'products' ? 'active' : ''}`}>
                <span className="text_nav-link">Our Products</span>
                <ChevronDown size={13} className="dropdown-chevron" />
              </div>
              <div className="navbar_dropdown-list">
                <div className="navbar_submenu_grid">
                  <a href="#products" onClick={handleNavClick('products', '#products')} className="navbar_submenu_card">
                    <div className="submenu_card_img_wrap">
                      <img src="/assets/media/culvert.jpg" alt="Drainage Inlets & Catch Basins" className="submenu_card_img" />
                    </div>
                    <div className="submenu_arrow_square">
                      <ArrowUpRight size={18} />
                    </div>
                    <div className="submenu_card_title">Drainage Inlets &amp; Catch Basins</div>
                  </a>

                  <a href="#products" onClick={handleNavClick('products', '#products')} className="navbar_submenu_card">
                    <div className="submenu_card_img_wrap">
                      <img src="/assets/media/Box Culvert/13.jpeg" alt="Box Culverts" className="submenu_card_img" />
                    </div>
                    <div className="submenu_arrow_square">
                      <ArrowUpRight size={18} />
                    </div>
                    <div className="submenu_card_title">Box Culverts</div>
                  </a>

                  <a href="#products" onClick={handleNavClick('products', '#products')} className="navbar_submenu_card">
                    <div className="submenu_card_img_wrap">
                      <img src="/assets/media/Box Culvert/14.jpeg" alt="Bridge Girders" className="submenu_card_img" />
                    </div>
                    <div className="submenu_arrow_square">
                      <ArrowUpRight size={18} />
                    </div>
                    <div className="submenu_card_title">Bridge Girders &amp; Decks</div>
                  </a>

                  <a href="#products" onClick={handleNavClick('products', '#products')} className="navbar_submenu_card">
                    <div className="submenu_card_img_wrap">
                      <img src="/assets/media/utility_manhole_real.jpg" alt="Utility Manholes" className="submenu_card_img" />
                    </div>
                    <div className="submenu_arrow_square">
                      <ArrowUpRight size={18} />
                    </div>
                    <div className="submenu_card_title">Utility Manholes</div>
                  </a>
                </div>
              </div>
            </div>

            {/* Mega Dropdown: Manufacturing and R&D */}
            <div className="navbar_menu-dropdown">
              <div className={`navbar_link ${currentView === 'manufacturing' ? 'active' : ''}`}>
                <span className="text_nav-link">Manufacturing and R&amp;D</span>
                <ChevronDown size={13} className="dropdown-chevron" />
              </div>
              <div className="navbar_dropdown-list">
                <div className="navbar_submenu_grid is-2">
                  <a href="#manufacturing" onClick={handleNavClick('manufacturing', '#manufacturing')} className="navbar_submenu_card" style={{ height: '200px' }}>
                    <div className="submenu_card_img_wrap">
                      <img src="/assets/media/trench-forms-01-5001.JPG" alt="Manufacturing" className="submenu_card_img" />
                    </div>
                    <div className="submenu_arrow_square">
                      <ArrowUpRight size={18} />
                    </div>
                    <div className="submenu_card_title">Manufacturing Plants</div>
                  </a>

                  <a href="#manufacturing" onClick={handleNavClick('manufacturing', '#manufacturing')} className="navbar_submenu_card" style={{ height: '200px' }}>
                    <div className="submenu_card_img_wrap">
                      <img src="/assets/media/videoframe_7136.png" alt="R&D" className="submenu_card_img" />
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
              <div className={`navbar_link ${currentView === 'news' ? 'active' : ''}`}>
                <span className="text_nav-link">News</span>
                <ChevronDown size={13} className="dropdown-chevron" />
              </div>
              <div className="simple_dropdown_list">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <a href="#news" onClick={handleNavClick('news', '#news')} className="simple_nav_link">Blog</a>
                  <a href="#news" onClick={handleNavClick('news', '#news')} className="simple_nav_link">Press Releases</a>
                  <a href="#news" onClick={handleNavClick('news', '#news')} className="simple_nav_link">Media Kit</a>
                  <a href="#news" onClick={handleNavClick('news', '#news')} className="simple_nav_link">Events</a>
                  <a href="#news" onClick={handleNavClick('news', '#news')} className="simple_nav_link">Newsletter</a>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT US */}
          <a href="#contact" onClick={handleNavClick('contact', '#contact')} className="btn-nav-contact">CONTACT US</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
