import React, { useState } from 'react';
import { ChevronRight, Phone, Mail, MapPin, Clock, Send, ShieldCheck, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '', projectType: 'Box Culvert' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '', projectType: 'Box Culvert' });
    }, 4000);
  };

  return (
    <div className="contact-page" style={{ backgroundColor: '#ffffff', color: '#0047ba', fontFamily: "'Manrope', sans-serif" }}>
      
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
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Contact &amp; Engineering Submittals</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.6rem', lineHeight: 1.15, color: '#ffffff' }}>
            Direct Engineering Takeoff &amp; Logistics Dispatch
          </h1>

          <p style={{ fontSize: '1rem', color: '#bfdbfe', maxWidth: '720px', lineHeight: 1.55 }}>
            Submit structural project drawings, schedule plant inspections, or consult directly with licensed PE structural engineers.
          </p>
        </div>
      </section>

      {/* 2. Contact Grid */}
      <section style={{ padding: '3.5rem 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          
          {/* Form */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #bfdbfe',
            boxShadow: '0 4px 20px rgba(0, 71, 186, 0.06)',
            padding: '2rem'
          }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0052cc', marginBottom: '0.35rem' }}>
              Request Direct Project Takeoff
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#0052cc', marginBottom: '1.5rem' }}>
              Upload details or send drawing packages for guaranteed same-day submittal reviews.
            </p>

            {submitted ? (
              <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', color: '#166534', padding: '1.75rem', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.35rem' }}>✓ Takeoff Request Submitted!</div>
                <div style={{ fontSize: '0.86rem' }}>Our engineering team has received your project specifications and will reply within 4 business hours.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0052cc', display: 'block', marginBottom: '4px' }}>Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Engineer / Contractor"
                      style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #bfdbfe', fontSize: '0.85rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0052cc', display: 'block', marginBottom: '4px' }}>Work Email *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #bfdbfe', fontSize: '0.85rem' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0052cc', display: 'block', marginBottom: '4px' }}>Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(631) 452-1111"
                      style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #bfdbfe', fontSize: '0.85rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0052cc', display: 'block', marginBottom: '4px' }}>Company / Agency</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Contracting Firm / DOT"
                      style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #bfdbfe', fontSize: '0.85rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0052cc', display: 'block', marginBottom: '4px' }}>Product Category</label>
                  <select 
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #bfdbfe', fontSize: '0.85rem', backgroundColor: '#ffffff', color: '#0052cc' }}
                  >
                    <option value="Box Culvert">Precast Box Culverts (ASTM C1577)</option>
                    <option value="Bridge Girder">Pre-Stressed Bridge Girders &amp; Decks</option>
                    <option value="Utility Manhole">Utility Manholes &amp; Vaults</option>
                    <option value="Pre-Trench">Pre-Trench Drainage &amp; Inlets</option>
                    <option value="Custom Tooling">Custom Steel Molds &amp; Tooling</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0052cc', display: 'block', marginBottom: '4px' }}>Project Notes / Submittal Specs</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide span/rise dimensions, burial depths, DOT job number, or delivery timeline requirements..."
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #bfdbfe', fontSize: '0.85rem' }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#0047BA',
                    color: '#ffffff',
                    border: 'none',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 71, 186, 0.25)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0052cc'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0047BA'}
                >
                  Submit Project Submittal
                </button>
              </form>
            )}
          </div>

          {/* Regional Hubs & Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Northeast HQ */}
            <div style={{ backgroundColor: '#f0f5ff', borderRadius: '14px', border: '1px solid #bfdbfe', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0047BA', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                <MapPin size={14} />
                <span>NORTHEAST CASTING NODE (HQ)</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0052cc', marginBottom: '0.25rem' }}>
                New York Engineering Headquarters
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#0052cc', marginBottom: '0.75rem' }}>
                105 Maxess Road, Suite S124, Melville, NY 11747
              </p>
              <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.82rem' }}>
                <a href="tel:6314521111" style={{ color: '#0047BA', fontWeight: 700, textDecoration: 'none' }}>Direct: (631) 452-1111</a>
                <a href="mailto:info@precasteng.com" style={{ color: '#0047BA', fontWeight: 700, textDecoration: 'none' }}>info@precasteng.com</a>
              </div>
            </div>

            {/* Southeast Node */}
            <div style={{ backgroundColor: '#f0f5ff', borderRadius: '14px', border: '1px solid #bfdbfe', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0047BA', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                <MapPin size={14} />
                <span>SOUTHEAST CASTING NODE</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0052cc', marginBottom: '0.25rem' }}>
                Florida Regional Dispatch
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#0052cc', marginBottom: '0.75rem' }}>
                850 NW Federal Hwy, Suite 108, Stuart, FL 34994
              </p>
              <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.82rem' }}>
                <a href="tel:7722970700" style={{ color: '#0047BA', fontWeight: 700, textDecoration: 'none' }}>Direct: (772) 297-0700</a>
                <a href="mailto:info@precasteng.com" style={{ color: '#0047BA', fontWeight: 700, textDecoration: 'none' }}>info@precasteng.com</a>
              </div>
            </div>

            {/* Midwest Node */}
            <div style={{ backgroundColor: '#f0f5ff', borderRadius: '14px', border: '1px solid #bfdbfe', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0047BA', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                <MapPin size={14} />
                <span>MIDWEST CASTING NODE</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0052cc', marginBottom: '0.25rem' }}>
                Detroit Logistics Facility
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#0052cc', marginBottom: '0.75rem' }}>
                2200 Hunt Street, Detroit, MI 48207
              </p>
              <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.82rem' }}>
                <a href="tel:6314521111" style={{ color: '#0047BA', fontWeight: 700, textDecoration: 'none' }}>Direct: (631) 452-1111</a>
                <a href="mailto:info@precasteng.com" style={{ color: '#0047BA', fontWeight: 700, textDecoration: 'none' }}>info@precasteng.com</a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
