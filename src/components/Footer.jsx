import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Clock, 
  Layers, 
  FileSpreadsheet,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const IconLinkedin = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const IconYoutube = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const IconInstagram = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const IconFacebook = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4.2V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="corporate-footer" id="contact">
      {/* Top Value / Action Callout Ribbon */}
      <div className="corporate-footer-top-ribbon">
        <div className="container-large">
          <div className="footer-ribbon-content">
            <div className="footer-ribbon-left">
              <div className="ribbon-badge">
                <ShieldCheck size={16} />
                <span>50-STATE PE LICENSED ENGINEERING</span>
              </div>
              <h3 className="ribbon-title">
                Direct Engineering Submittals &amp; Heavy-Haul Dispatch
              </h3>
            </div>

            <div className="footer-ribbon-right">
              <a href="tel:6314521111" className="btn-ribbon-call">
                <Phone size={16} />
                <span>(631) 452-1111</span>
              </a>
              <a href="#contact" className="btn-ribbon-quote">
                <span>Request Project Takeoff</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main 5-Column Corporate Sitemap */}
      <div className="corporate-footer-main">
        <div className="container-large">
          <div className="corporate-footer-grid">
            {/* Column 1: Brand & Engineering Profile */}
            <div className="corp-footer-col brand-col">
              <a href="/" className="corp-footer-logo-link">
                <img src="/PEG.png" alt="Precast Engineering Group" className="corp-footer-logo" />
              </a>
              <p className="corp-footer-desc">
                Precast Engineering Group (PEG) provides certified precast infrastructure, custom steel tooling, and 50-state PE stamped engineering calculations across North America.
              </p>

              {/* Accreditations Chips */}
              <div className="corp-footer-badges">
                <span className="corp-badge-item">
                  <Award size={13} className="text-blue-accent" />
                  NPCA Plant Certified
                </span>
                <span className="corp-badge-item">
                  <ShieldCheck size={13} className="text-blue-accent" />
                  ASTM C1577 / C478
                </span>
                <span className="corp-badge-item">
                  <CheckCircle2 size={13} className="text-blue-accent" />
                  AASHTO HL-93 Rated
                </span>
              </div>

              {/* Social Media Links */}
              <div className="corp-social-links">
                <a href="#" className="corp-social-btn" aria-label="LinkedIn">
                  <IconLinkedin size={16} />
                </a>
                <a href="#" className="corp-social-btn" aria-label="YouTube">
                  <IconYoutube size={16} />
                </a>
                <a href="#" className="corp-social-btn" aria-label="Instagram">
                  <IconInstagram size={16} />
                </a>
                <a href="#" className="corp-social-btn" aria-label="Facebook">
                  <IconFacebook size={16} />
                </a>
              </div>
            </div>

            {/* Column 2: Engineered Products */}
            <div className="corp-footer-col">
              <h4 className="corp-footer-heading">Precast Products</h4>
              <ul className="corp-footer-links">
                <li><a href="#products">Precast Box Culverts</a></li>
                <li><a href="#products">Pre-stressed Bridge Girders</a></li>
                <li><a href="#products">Utility Manholes &amp; Vaults</a></li>
                <li><a href="#products">Drainage Inlets &amp; Catch Basins</a></li>
                <li><a href="#products">Architectural Wall Panels</a></li>
                <li><a href="#products">Pre-Trench Drainage Channels</a></li>
                <li><a href="#products">Custom Steel Tooling &amp; Molds</a></li>
              </ul>
            </div>

            {/* Column 3: Engineering & Tech */}
            <div className="corp-footer-col">
              <h4 className="corp-footer-heading">Engineering &amp; R&amp;D</h4>
              <ul className="corp-footer-links">
                <li><a href="#capabilities">3D BIM &amp; Revit Detailing</a></li>
                <li><a href="#capabilities">50-State PE Stamped Calculations</a></li>
                <li><a href="#capabilities">Automated SCC Batching</a></li>
                <li><a href="#capabilities">In-House ASTM Concrete Lab</a></li>
                <li><a href="#capabilities">High-Early Steam Curing Beds</a></li>
                <li><a href="#capabilities">Heavy-Haul Direct Rigging</a></li>
                <li><a href="#sustainability">Type 1L Eco-Concrete Mixes</a></li>
              </ul>
            </div>

            {/* Column 4: Company & Resources */}
            <div className="corp-footer-col">
              <h4 className="corp-footer-heading">Resources &amp; Support</h4>
              <ul className="corp-footer-links">
                <li><a href="#company-profile">Company Profile &amp; History</a></li>
                <li><a href="#certifications">State DOT Approvals</a></li>
                <li><a href="#methodology">4-Step Delivery Process</a></li>
                <li><a href="#faq">Contractor FAQs</a></li>
                <li><a href="#contact">Request CAD Submittal Package</a></li>
                <li><a href="#contact">Careers &amp; Engineering Roles</a></li>
                <li><a href="#contact">Plant Tours &amp; Inspections</a></li>
              </ul>
            </div>

            {/* Column 5: Strategic Hubs & Dispatch */}
            <div className="corp-footer-col contact-hub-col">
              <h4 className="corp-footer-heading">Manufacturing Hubs</h4>
              
              <div className="corp-hub-item">
                <div className="corp-hub-title">
                  <MapPin size={14} className="text-blue-accent" />
                  <strong>Northeast Node (HQ)</strong>
                </div>
                <p>105 Maxess Road, Melville, NY 11747</p>
                <a href="tel:6314521111" className="corp-hub-phone">(631) 452-1111</a>
              </div>

              <div className="corp-hub-item">
                <div className="corp-hub-title">
                  <MapPin size={14} className="text-blue-accent" />
                  <strong>Southeast Node</strong>
                </div>
                <p>850 NW Federal Hwy, Stuart, FL 34994</p>
                <a href="tel:7722970700" className="corp-hub-phone">(772) 297-0700</a>
              </div>

              <div className="corp-hub-item">
                <div className="corp-hub-title">
                  <MapPin size={14} className="text-blue-accent" />
                  <strong>Midwest Node</strong>
                </div>
                <p>2200 Hunt Street, Detroit, MI 48207</p>
                <a href="tel:6314521111" className="corp-hub-phone">(631) 452-1111</a>
              </div>

              <div className="corp-hub-email">
                <Mail size={14} className="text-blue-accent" />
                <a href="mailto:info@precasteng.com">info@precasteng.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="corporate-footer-bottom">
        <div className="container-large">
          <div className="footer-bottom-flex">
            <div className="footer-bottom-left">
              <span>© {new Date().getFullYear()} Precast Engineering Group. All rights reserved.</span>
              <span className="footer-dot-sep">•</span>
              <span>NPCA Plant #10492</span>
              <span className="footer-dot-sep">•</span>
              <span>50-State Licensed Professional Engineering Corporation</span>
            </div>

            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#specs">Standard Specifications</a>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
