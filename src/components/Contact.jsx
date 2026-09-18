import React, { useState, useRef } from 'react';
import { 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  ArrowRight, 
  UploadCloud, 
  FileCheck2, 
  X, 
  Paperclip,
  Building2,
  FileText
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectTitle: '',
    productCategory: 'Catch Basins & Inlets',
    message: ''
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setSelectedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectTitle: '',
        productCategory: 'Catch Basins & Inlets',
        message: ''
      });
      setSelectedFiles([]);
    }, 4500);
  };

  return (
    <div className="contact-page" style={{ backgroundColor: '#ffffff', color: '#0047ba', fontFamily: "'Manrope', sans-serif" }}>
      
      {/* 1. Universal Uniform Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0038b8 0%, #0047ba 50%, #1e2ede 100%)',
        color: '#ffffff',
        padding: '6.5rem 5% 3.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 80% 30%, rgba(74, 136, 255, 0.3) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1600px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#bfdbfe', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <a href="#home" style={{ color: '#bfdbfe', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={13} style={{ opacity: 0.7 }} />
            <span style={{ color: '#ffffff', fontWeight: 700 }}>Contact &amp; Engineering Submittals</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.6rem', lineHeight: 1.15, color: '#ffffff' }}>
            Direct Engineering Takeoff &amp; Logistics Dispatch
          </h1>

          <p style={{ fontSize: '1.05rem', color: '#bfdbfe', maxWidth: '780px', lineHeight: 1.6 }}>
            Submit civil plan sheets, upload CAD drawings, or consult directly with licensed PE structural engineers for stamped calculations and jobsite freight scheduling.
          </p>
        </div>
      </section>

      {/* 2. Contact Grid */}
      <section style={{ padding: '4rem 5% 6rem', backgroundColor: '#f4f8ff' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          
          {/* Engineering Submittal Form */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1.5px solid #bfdbfe',
            boxShadow: '0 10px 30px rgba(30, 46, 222, 0.08)',
            padding: '2.5rem'
          }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#dbeafe', color: '#0047ba', padding: '3px 10px', borderRadius: '4px', fontSize: '0.76rem', fontWeight: 800, marginBottom: '0.6rem', textTransform: 'uppercase' }}>
              <FileCheck2 size={14} />
              <span>Direct Submittal Portal</span>
            </div>

            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0047ba', marginBottom: '0.35rem' }}>
              Request Project Takeoff &amp; CAD Package
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#1e2ede', marginBottom: '1.75rem', fontWeight: 600 }}>
              Upload drawing files or project specifications for guaranteed same-day submittal reviews.
            </p>

            {submitted ? (
              <div style={{ backgroundColor: '#eff6ff', border: '1.5px solid #1e2ede', color: '#0047ba', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#dbeafe', color: '#0047ba', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <ShieldCheck size={28} />
                </div>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.4rem', color: '#0047ba' }}>
                  Takeoff Package Received!
                </div>
                <div style={{ fontSize: '0.92rem', color: '#1e2ede', lineHeight: 1.6, fontWeight: 600 }}>
                  Our licensed precast engineering team has received your project specifications and attached drawings. A dedicated takeoff engineer will respond within 4 business hours.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Row 1: Name & Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0047ba', display: 'block', marginBottom: '6px' }}>Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus Vance, PE"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #bfdbfe', fontSize: '0.88rem', color: '#0047ba', outline: 'none', background: '#ffffff', fontWeight: 600 }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0047ba', display: 'block', marginBottom: '6px' }}>Work Email *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. m.vance@apexcivil.com"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #bfdbfe', fontSize: '0.88rem', color: '#0047ba', outline: 'none', background: '#ffffff', fontWeight: 600 }}
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Company */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0047ba', display: 'block', marginBottom: '6px' }}>Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. (631) 452-1111"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #bfdbfe', fontSize: '0.88rem', color: '#0047ba', outline: 'none', background: '#ffffff', fontWeight: 600 }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0047ba', display: 'block', marginBottom: '6px' }}>Company / DOT Agency *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Civil Contractors / State DOT"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #bfdbfe', fontSize: '0.88rem', color: '#0047ba', outline: 'none', background: '#ffffff', fontWeight: 600 }}
                    />
                  </div>
                </div>

                {/* Row 3: Project Title & Product Category */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0047ba', display: 'block', marginBottom: '6px' }}>Project Name / DOT Job #</label>
                    <input 
                      type="text" 
                      value={formData.projectTitle}
                      onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                      placeholder="e.g. Interstate I-95 Drainage Upgrade - Phase 2"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #bfdbfe', fontSize: '0.88rem', color: '#0047ba', outline: 'none', background: '#ffffff', fontWeight: 600 }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0047ba', display: 'block', marginBottom: '6px' }}>Primary Category</label>
                    <select 
                      value={formData.productCategory}
                      onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #bfdbfe', fontSize: '0.88rem', backgroundColor: '#ffffff', color: '#0047ba', outline: 'none', fontWeight: 700 }}
                    >
                      <option value="Catch Basins & Inlets">Catch Basins &amp; Inlets (ASTM C913)</option>
                      <option value="Septic Tanks & Systems">Septic Tanks &amp; Systems (ASTM C1227)</option>
                      <option value="Interceptors & Grease Traps">Interceptors &amp; Grease Traps</option>
                      <option value="Distribution Boxes">Distribution Boxes &amp; Splitters</option>
                      <option value="Leaching Galleys & Drywells">Leaching Galleys &amp; Drywells</option>
                      <option value="Low Domes & Top Reducers">Low Domes &amp; Top Reducers</option>
                      <option value="High Domes & Top Cones">High Domes &amp; Top Cones</option>
                      <option value="Curb Stops & Parking Barriers">Curb Stops &amp; Parking Barriers</option>
                      <option value="Solid & Access Slabs">Solid &amp; Access Slabs</option>
                      <option value="Manhole Rings">Solid &amp; Sanitary Manhole Rings</option>
                      <option value="Utility Vaults">Utility Vaults &amp; Pull Boxes</option>
                      <option value="Headwalls & Culvert Endwalls">Headwalls &amp; Culvert Endwalls</option>
                    </select>
                  </div>
                </div>

                {/* Big File Upload Dropzone */}
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0047ba', display: 'block', marginBottom: '6px' }}>
                    Upload Blueprints, CAD Drawings or Site Plan Specs (DWG, DXF, PDF, ZIP up to 50MB)
                  </label>
                  
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    style={{
                      border: isDragging ? '2px dashed #0047ba' : '2px dashed #bfdbfe',
                      backgroundColor: isDragging ? '#eff6ff' : '#f4f8ff',
                      borderRadius: '12px',
                      padding: '1.75rem 1.5rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <input 
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      multiple
                      accept=".pdf,.dwg,.dxf,.zip,.rar,.doc,.docx,.xls,.xlsx,.png,.jpg"
                      style={{ display: 'none' }}
                    />

                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#dbeafe', color: '#0047ba', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <UploadCloud size={26} />
                    </div>

                    <div>
                      <span style={{ fontWeight: 800, color: '#0047ba', fontSize: '0.95rem' }}>
                        Click to Browse
                      </span>
                      <span style={{ color: '#1e2ede', fontSize: '0.92rem', fontWeight: 600 }}> or drag and drop plan sheets here</span>
                    </div>

                    <p style={{ fontSize: '0.78rem', color: '#1e2ede', fontWeight: 600, margin: 0 }}>
                      Supports AutoCAD (DWG, DXF), Civil PDF Blueprint Sets, Takeoff Spreadsheets &amp; ZIP files
                    </p>
                  </div>

                  {/* Attached files preview list */}
                  {selectedFiles.length > 0 && (
                    <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {selectedFiles.map((file, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', padding: '6px 12px', borderRadius: '6px', fontSize: '0.82rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                            <Paperclip size={14} style={{ color: '#0047ba', flexShrink: 0 }} />
                            <span style={{ fontWeight: 700, color: '#0047ba', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                              {file.name}
                            </span>
                            <span style={{ color: '#1e2ede', fontSize: '0.74rem' }}>
                              ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                          </div>
                          <button 
                            type="button" 
                            onClick={(e) => { e.stopPropagation(); removeFile(idx); }}
                            style={{ background: 'transparent', border: 'none', color: '#1e2ede', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                          >
                            <X size={15} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Message / Requirements */}
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0047ba', display: 'block', marginBottom: '6px' }}>
                    Project Notes &amp; Submittal Specifications
                  </label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Need AASHTO HS-20 rated units with 4-way knockouts and sealed buoyancy calculations for DOT submittal. Target delivery window: Q3."
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #bfdbfe', fontSize: '0.88rem', color: '#0047ba', outline: 'none', background: '#ffffff', fontWeight: 600, resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#1e2ede',
                    color: '#ffffff',
                    border: 'none',
                    padding: '13px 24px',
                    borderRadius: '9999px',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(30, 46, 222, 0.3)',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0047ba'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1e2ede'}
                >
                  <span>Submit Plans for Guaranteed Same-Day Takeoff</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Regional Hubs & Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Northeast HQ */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '14px', border: '1.5px solid #bfdbfe', padding: '1.75rem', boxShadow: '0 6px 20px rgba(30, 46, 222, 0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1e2ede', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                <MapPin size={15} />
                <span>NORTHEAST CASTING NODE (HQ)</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0047ba', marginBottom: '0.35rem' }}>
                New York Engineering Headquarters
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#1e2ede', marginBottom: '0.85rem', fontWeight: 600 }}>
                105 Maxess Road, Suite S124, Melville, NY 11747
              </p>
              <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.86rem', flexWrap: 'wrap' }}>
                <a href="tel:6314521111" style={{ color: '#0047ba', fontWeight: 800, textDecoration: 'none' }}>Direct: (631) 452-1111</a>
                <a href="mailto:info@precasteng.com" style={{ color: '#0047ba', fontWeight: 800, textDecoration: 'none' }}>info@precasteng.com</a>
              </div>
            </div>

            {/* Southeast Node */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '14px', border: '1.5px solid #bfdbfe', padding: '1.75rem', boxShadow: '0 6px 20px rgba(30, 46, 222, 0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1e2ede', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                <MapPin size={15} />
                <span>SOUTHEAST CASTING NODE</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0047ba', marginBottom: '0.35rem' }}>
                Florida Regional Dispatch
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#1e2ede', marginBottom: '0.85rem', fontWeight: 600 }}>
                850 NW Federal Hwy, Suite 108, Stuart, FL 34994
              </p>
              <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.86rem', flexWrap: 'wrap' }}>
                <a href="tel:7722970700" style={{ color: '#0047ba', fontWeight: 800, textDecoration: 'none' }}>Direct: (772) 297-0700</a>
                <a href="mailto:info@precasteng.com" style={{ color: '#0047ba', fontWeight: 800, textDecoration: 'none' }}>info@precasteng.com</a>
              </div>
            </div>

            {/* Midwest Node */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '14px', border: '1.5px solid #bfdbfe', padding: '1.75rem', boxShadow: '0 6px 20px rgba(30, 46, 222, 0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1e2ede', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                <MapPin size={15} />
                <span>MIDWEST CASTING NODE</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0047ba', marginBottom: '0.35rem' }}>
                Detroit Logistics Facility
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#1e2ede', marginBottom: '0.85rem', fontWeight: 600 }}>
                2200 Hunt Street, Detroit, MI 48207
              </p>
              <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.86rem', flexWrap: 'wrap' }}>
                <a href="tel:6314521111" style={{ color: '#0047ba', fontWeight: 800, textDecoration: 'none' }}>Direct: (631) 452-1111</a>
                <a href="mailto:info@precasteng.com" style={{ color: '#0047ba', fontWeight: 800, textDecoration: 'none' }}>info@precasteng.com</a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
