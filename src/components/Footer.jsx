import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Check
} from 'lucide-react';

const IconLinkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const IconX = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconInstagram = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const IconYoutube = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const IconWhatsapp = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  const industries = [
    { name: 'Civil Infrastructure', link: '#products' },
    { name: 'Highway & DOT', link: '#certifications' },
    { name: 'Energy & Utilities', link: '#products' },
    { name: 'Municipal Drainage', link: '#products' },
    { name: 'Commercial Construction', link: '#products' },
    { name: 'Heavy Rail & Transit', link: '#products' },
    { name: 'Water & Wastewater', link: '#products' },
    { name: 'Industrial Plants', link: '#manufacturing' }
  ];

  const latestInsights = [
    {
      title: 'Accelerating DOT Infrastructure Delivery via High-Span Precast Culverts',
      category: 'ENGINEERING',
      date: 'AUG 28, 2026',
      link: '#news'
    },
    {
      title: 'Advancements in Low-Carbon Type 1L Precast Concrete Formulations',
      category: 'R&D INNOVATION',
      date: 'AUG 14, 2026',
      link: '#news'
    },
    {
      title: 'Precast vs Cast-In-Situ: The Lifecycle & Engineering Cost Comparison',
      category: 'ANALYSIS',
      date: 'JUL 30, 2026',
      link: '#news'
    }
  ];

  return (
    <footer className="modern-blue-footer" id="contact">
      <div className="modern-footer-container">
        <div className="modern-footer-grid">

          {/* Brand and Contact */}
          <div className="mf-col mf-brand-col">
            <div className="mf-brand-header">
              <a href="#home" className="mf-logo-link">
                <img src="/PEG.png" alt="Precast Engineering Group" className="mf-logo" />
              </a>
              <p className="mf-brand-tagline">
                From engineering to digital, design to deployment — Precast Engineering Group brings every precast solution under one roof to turn ideas into real-world impact.
              </p>
            </div>

            <div className="mf-contact-list">
              <a
                href="https://www.google.com/maps/search/?api=1&query=105+Maxess+Road,+Melville,+NY+11747"
                target="_blank"
                rel="noopener noreferrer"
                className="mf-contact-item"
              >
                <div className="mf-contact-icon-box">
                  <MapPin size={16} />
                </div>
                <div className="mf-contact-text">
                  <span>105 Maxess Road</span>
                  <span className="mf-contact-sub">Melville, NY 11747</span>
                </div>
              </a>

              <a href="tel:6314521111" className="mf-contact-item">
                <div className="mf-contact-icon-box">
                  <Phone size={16} />
                </div>
                <div className="mf-contact-text">
                  <span>(631) 452-1111</span>
                </div>
              </a>

              <a href="mailto:info@precasteng.com" className="mf-contact-item">
                <div className="mf-contact-icon-box">
                  <Mail size={16} />
                </div>
                <div className="mf-contact-text">
                  <span>info@precasteng.com</span>
                </div>
              </a>

              <div className="mf-contact-item mf-contact-item-static">
                <div className="mf-contact-icon-box">
                  <Clock size={16} />
                </div>
                <div className="mf-contact-text">
                  <span>Mon – Fri · 8:00 AM to 6:00 PM ET</span>
                </div>
              </div>
            </div>

            <div className="mf-social-section">
              <div className="mf-section-label">FOLLOW US</div>
              <div className="mf-social-icons-row">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mf-social-btn" aria-label="LinkedIn">
                  <IconLinkedin size={16} />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="mf-social-btn" aria-label="X">
                  <IconX size={14} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mf-social-btn" aria-label="Instagram">
                  <IconInstagram size={16} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mf-social-btn" aria-label="YouTube">
                  <IconYoutube size={16} />
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="mf-social-btn" aria-label="WhatsApp">
                  <IconWhatsapp size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation & Industries */}
          <div className="mf-center-wrapper">
            <div className="mf-nav-columns">
              <div className="mf-col mf-nav-col">
                <h4 className="mf-col-title">SERVICES</h4>
                <ul className="mf-nav-links">
                  <li><a href="#products">Engineering Solutions</a></li>
                  <li><a href="#products">Precast Box Culverts</a></li>
                  <li><a href="#products">Pre-stressed Bridge Girders</a></li>
                  <li><a href="#products">Utility Manholes &amp; Vaults</a></li>
                  <li><a href="#products">Drainage Catch Basins</a></li>
                  <li><a href="#products">Custom Steel Tooling</a></li>
                </ul>
              </div>

              <div className="mf-col mf-nav-col">
                <h4 className="mf-col-title">SOLUTIONS</h4>
                <ul className="mf-nav-links">
                  <li><a href="#manufacturing">3D BIM &amp; Revit Detailing</a></li>
                  <li><a href="#manufacturing">50-State PE Stamped Calcs</a></li>
                  <li><a href="#manufacturing">Automated SCC Batching</a></li>
                  <li><a href="#manufacturing">ASTM Concrete QA Lab</a></li>
                  <li><a href="#manufacturing">Heavy-Haul Direct Logistics</a></li>
                  <li><a href="#manufacturing">Type 1L Eco-Concrete Mixes</a></li>
                </ul>
              </div>

              <div className="mf-col mf-nav-col">
                <h4 className="mf-col-title">COMPANY</h4>
                <ul className="mf-nav-links">
                  <li><a href="#company-profile">About Us</a></li>
                  <li><a href="#team">Our Team</a></li>
                  <li><a href="#estore">eStore Portal</a></li>
                  <li><a href="#governance">Governance &amp; Quality</a></li>
                  <li><a href="#membership">Membership &amp; Standards</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#contact">Contact Hubs</a></li>
                </ul>
              </div>
            </div>

            <div className="mf-industries-section">
              <h4 className="mf-col-title">INDUSTRIES</h4>
              <div className="mf-industries-pills">
                {industries.map((ind, idx) => (
                  <a key={idx} href={ind.link} className="mf-industry-pill">
                    {ind.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Stay Informed & Latest Insights */}
          <div className="mf-col mf-right-col">
            <div className="mf-stay-informed-box">
              <h4 className="mf-col-title">STAY INFORMED</h4>
              <p className="mf-newsletter-desc">
                Engineering notes, technology breakdowns and project insights. One email a month, no filler.
              </p>

              <form onSubmit={handleSubscribe} className="mf-newsletter-form">
                <div className="mf-input-wrapper">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mf-email-input"
                  />
                  <button
                    type="submit"
                    className={`mf-newsletter-submit-btn ${subscribed ? 'is-subscribed' : ''}`}
                    aria-label="Subscribe to newsletter"
                  >
                    {subscribed ? <Check size={16} /> : <ArrowRight size={16} />}
                  </button>
                </div>
                {subscribed && (
                  <div className="mf-subscribe-success">
                    <Check size={13} /> You're subscribed to PEG Engineering Insights.
                  </div>
                )}
              </form>
            </div>

            <div className="mf-insights-section">
              <h4 className="mf-col-title">LATEST INSIGHTS</h4>
              <div className="mf-insights-list">
                {latestInsights.map((insight, idx) => (
                  <a key={idx} href={insight.link} className="mf-insight-card">
                    <h5 className="mf-insight-title">{insight.title}</h5>
                    <div className="mf-insight-meta">
                      <span className="mf-insight-cat">{insight.category}</span>
                      <span className="mf-insight-bullet">·</span>
                      <span className="mf-insight-date">{insight.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="modern-footer-bottom">
          <div className="mf-bottom-left">
            <span>© {new Date().getFullYear()} Precast Engineering Group. All rights reserved.</span>
          </div>

          <div className="mf-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="mf-sep">/</span>
            <a href="#terms">Terms of Service</a>
            <span className="mf-sep">/</span>
            <a href="#specs">Standard Specifications</a>
            <span className="mf-sep">/</span>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
