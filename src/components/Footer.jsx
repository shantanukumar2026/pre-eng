import React from 'react';

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

const Footer = () => {
  return (
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
            <a href="#" style={{ display: 'block', color: '#004099', marginBottom: '0.5rem', textDecoration: 'none' }}>Manufacturing &amp; R&amp;D</a>
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
  );
};

export default Footer;
