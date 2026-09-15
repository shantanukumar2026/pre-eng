import React, { useState } from 'react';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Gem, 
  Check, 
  Image as ImageIcon,
  ChevronRight
} from 'lucide-react';

const IconLinkedin = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const IconYoutube = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const IconFacebook = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4.2V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const IconInstagram = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const IconTwitter = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
);

/* Media asset container with smooth zoom & fallback */
const ThumbnailImage = ({ src, alt, caption, className = '', height = '260px', overlayText = null }) => {
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`thumbnail-container ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        height: height,
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#f0f5ff',
        border: '1px solid #bfdbfe',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: isHovered 
          ? '0 10px 24px rgba(0, 71, 186, 0.15)' 
          : '0 3px 12px rgba(0, 71, 186, 0.07)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {!hasError && src ? (
        <img 
          src={src} 
          alt={alt} 
          onError={() => setHasError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transform: isHovered ? 'scale(1.035)' : 'scale(1)',
            transition: 'transform 0.4s ease'
          }}
        />
      ) : (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem',
          textAlign: 'center',
          color: '#0052cc',
          gap: '0.4rem',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #f0f5ff 0%, #e0e7ff 100%)'
        }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 2px 8px rgba(0, 71, 186, 0.1)'
          }}>
            <ImageIcon size={20} />
          </div>
          <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0052cc' }}>{alt}</div>
        </div>
      )}

      {overlayText && (
        <div style={{
          position: 'absolute',
          bottom: '14px',
          right: '14px',
          backgroundColor: '#0047ba',
          color: '#ffffff',
          padding: '8px 14px',
          borderRadius: '8px',
          fontWeight: 700,
          fontSize: '0.9rem',
          lineHeight: 1.25,
          textAlign: 'right',
          maxWidth: '200px',
          boxShadow: '0 4px 14px rgba(0, 40, 104, 0.4)',
          border: '1px solid rgba(255,255,255,0.18)'
        }}>
          {overlayText}
        </div>
      )}

      {caption && (
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '8px 12px',
          background: 'linear-gradient(to top, #0047ba, rgba(0, 40, 104, 0.15))',
          color: '#ffffff',
          fontSize: '0.8rem',
          fontWeight: 700
        }}>
          {caption}
        </div>
      )}
    </div>
  );
};

/* Modern Pill Badge */
const SectionBadge = ({ text }) => (
  <div style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    backgroundColor: '#eff6ff',
    border: '1px solid #bfdbfe',
    color: '#ffffff',
    padding: '3px 12px',
    borderRadius: '9999px',
    fontWeight: 800,
    fontSize: '0.75rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '0.65rem'
  }}>
    <span style={{ fontSize: '0.8rem', lineHeight: 1 }}>➔</span>
    <span>{text}</span>
  </div>
);

const CompanyProfile = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeStep, setActiveStep] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  const milestones = [
    {
      number: '1',
      title: 'Founded',
      desc: 'PETG was established with a vision to transform the precast industry.'
    },
    {
      number: '2',
      title: 'Expanded Operations',
      desc: 'Opened our first manufacturing facility to meet growing demand.'
    },
    {
      number: '3',
      title: 'Product Innovation',
      desc: 'Introduced advanced precast systems for infrastructure projects.'
    },
    {
      number: '4',
      title: 'Regional Growth',
      desc: 'Expanded into international markets across Asia and the Middle East.'
    },
    {
      number: '5',
      title: 'Sustainability Focus',
      desc: 'Launched eco-friendly product lines and green manufacturing initiatives.'
    },
    {
      number: '6',
      title: 'A Stronger Tomorrow',
      desc: 'Continuing to innovate and build a more sustainable future.'
    }
  ];

  const certifications = [
    { code: 'ISO 9001', label: 'Quality Management' },
    { code: 'ISO 14001', label: 'Environmental Management' },
    { code: 'ISO 45001', label: 'Occupational Health & Safety' },
    { code: 'LEED', label: 'Sustainable Building' },
    { code: 'PCI CERTIFIED', label: 'Precast Concrete Institute' }
  ];

  return (
    <div className="company-profile-page" style={{ backgroundColor: '#ffffff', color: '#0047ba', fontFamily: "'Manrope', sans-serif" }}>

      {/* 1. HERO BANNER */}
      <section 
        className="cp-hero-banner"
        style={{
          position: 'relative',
          minHeight: '320px',
          background: 'linear-gradient(135deg, #001f4d 0%, #002868 50%, #0047BA 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          padding: '6.5rem 5% 3.25rem',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 80% 40%, rgba(74, 136, 255, 0.22) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}
        />

        <div 
          style={{
            position: 'absolute',
            right: '5%',
            bottom: 0,
            width: '38%',
            maxWidth: '460px',
            height: '75%',
            opacity: 0.14,
            borderLeft: '2px dashed rgba(255,255,255,0.4)',
            borderTop: '2px dashed rgba(255,255,255,0.4)',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.15rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 800,
            color: '#ffffff'
          }}
        >
          PRECISION PRECAST
        </div>

        <div className="container-large" style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto' }}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#bfdbfe', marginBottom: '0.75rem' }}>
            <a href="#home" style={{ color: '#bfdbfe', textDecoration: 'none', transition: 'color 0.2s' }}>Home</a>
            <ChevronRight size={13} style={{ opacity: 0.7 }} />
            <a href="#company" style={{ color: '#bfdbfe', textDecoration: 'none', transition: 'color 0.2s' }}>Company</a>
            <ChevronRight size={13} style={{ opacity: 0.7 }} />
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Company Profile</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.6rem', lineHeight: 1.15, color: '#ffffff' }}>
            Company Profile
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', fontWeight: 600, color: '#e0e7ff', marginBottom: '0.45rem', maxWidth: '850px' }}>
            Building a Stronger, Smarter and More Sustainable Tomorrow
          </p>

          <p style={{ fontSize: '0.92rem', color: '#bfdbfe', maxWidth: '750px', lineHeight: 1.55 }}>
            At PETG, we are committed to delivering innovative precast solutions that shape better infrastructure and stronger communities.
          </p>
        </div>
      </section>


      {/* 2. WHO WE ARE */}
      <section className="cp-section padding-global" style={{ padding: '3.25rem 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          <div>
            <SectionBadge text="WHO WE ARE" />

            <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.1rem)', fontWeight: 800, color: '#0052cc', lineHeight: 1.25, marginBottom: '0.85rem', letterSpacing: '-0.01em' }}>
              Engineering a Stronger Tomorrow
            </h2>

            <p style={{ fontSize: '0.95rem', color: '#0052cc', lineHeight: 1.65, marginBottom: '1.35rem' }}>
              PETG is a leading provider of precast concrete solutions, delivering high-quality, innovative, and sustainable products for infrastructure, commercial, and industrial projects. With decades of experience and a passion for engineering excellence, we partner with clients to build smarter, faster, and more resilient communities.
            </p>

            <a 
              href="#our-journey" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#0047BA',
                color: '#ffffff',
                padding: '0.7rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.88rem',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(0, 71, 186, 0.2)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0052cc';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0047BA';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Our Journey</span>
              <ArrowRight size={15} />
            </a>
          </div>

          <div>
            <ThumbnailImage 
              src="/assets/media/culvert.jpg" 
              alt="Precast Manufacturing Yard & Crane"
              height="290px"
              caption="PETG Precision Engineering Infrastructure Yard"
            />
          </div>
        </div>
      </section>


      {/* 3. OUR PURPOSE (Mission, Vision & Values) */}
      <section className="cp-section padding-global" style={{ padding: '3.25rem 5%', backgroundColor: '#f0f5ff', borderTop: '1px solid #dbeafe', borderBottom: '1px solid #dbeafe' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1.75rem' }}>
            <SectionBadge text="OUR PURPOSE" />
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.1rem)', fontWeight: 800, color: '#0052cc', letterSpacing: '-0.01em' }}>
              Our Mission, Vision &amp; Values
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            
            {/* Card 1: Our Mission */}
            <div 
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                padding: '1.75rem 1.5rem',
                border: '1px solid #bfdbfe',
                boxShadow: '0 4px 16px rgba(0, 71, 186, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 71, 186, 0.1)';
                e.currentTarget.style.borderColor = '#93c5fd';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 71, 186, 0.05)';
                e.currentTarget.style.borderColor = '#bfdbfe';
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#eff6ff',
                border: '2px solid #bfdbfe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0047BA',
                marginBottom: '1rem'
              }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0052cc', marginBottom: '0.65rem' }}>
                Our Mission
              </h3>
              <p style={{ color: '#0052cc', fontSize: '0.9rem', lineHeight: 1.6, flexGrow: 1 }}>
                To provide innovative precast solutions that deliver lasting value, safety and sustainability for our customers and communities.
              </p>
            </div>

            {/* Card 2: Our Vision */}
            <div 
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                padding: '1.75rem 1.5rem',
                border: '1px solid #bfdbfe',
                boxShadow: '0 4px 16px rgba(0, 71, 186, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 71, 186, 0.1)';
                e.currentTarget.style.borderColor = '#93c5fd';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 71, 186, 0.05)';
                e.currentTarget.style.borderColor = '#bfdbfe';
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#eff6ff',
                border: '2px solid #bfdbfe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0047BA',
                marginBottom: '1rem'
              }}>
                <Eye size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0052cc', marginBottom: '0.65rem' }}>
                Our Vision
              </h3>
              <p style={{ color: '#0052cc', fontSize: '0.9rem', lineHeight: 1.6, flexGrow: 1 }}>
                To be the global leader in precast engineering, recognized for quality, innovation and contribution to a better, more sustainable world.
              </p>
            </div>

            {/* Card 3: Our Values */}
            <div 
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                padding: '1.75rem 1.5rem',
                border: '1px solid #bfdbfe',
                boxShadow: '0 4px 16px rgba(0, 71, 186, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 71, 186, 0.1)';
                e.currentTarget.style.borderColor = '#93c5fd';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 71, 186, 0.05)';
                e.currentTarget.style.borderColor = '#bfdbfe';
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#eff6ff',
                border: '2px solid #bfdbfe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0047BA',
                marginBottom: '1rem'
              }}>
                <Gem size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0052cc', marginBottom: '0.65rem' }}>
                Our Values
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Integrity in everything we do',
                  'Innovation for a better tomorrow',
                  'Quality without compromise',
                  'People at the heart of our success',
                  'Sustainability for future generations'
                ].map((val, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', color: '#0047ba', fontSize: '0.86rem', fontWeight: 600 }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0047BA', flexShrink: 0 }}>
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* 4. OUR JOURNEY (Key Milestones Timeline) */}
      <section id="our-journey" className="cp-section padding-global" style={{ padding: '3.25rem 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2.25rem' }}>
            <SectionBadge text="OUR JOURNEY" />
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.1rem)', fontWeight: 800, color: '#0052cc', letterSpacing: '-0.01em' }}>
              Key Milestones
            </h2>
          </div>

          {/* Horizontal Timeline Container */}
          <div style={{ position: 'relative', width: '100%', overflowX: 'auto', paddingBottom: '0.75rem' }}>
            {/* Connecting Horizontal Line */}
            <div 
              style={{
                position: 'absolute',
                top: '48px',
                left: '25px',
                right: '25px',
                height: '3px',
                backgroundColor: '#0047BA',
                zIndex: 1
              }}
            />

            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${milestones.length}, minmax(150px, 1fr))`,
              gap: '1.25rem',
              position: 'relative',
              zIndex: 2,
              minWidth: '920px'
            }}>
              {milestones.map((m, idx) => {
                const isItemActive = activeStep === idx;
                return (
                  <div 
                    key={idx} 
                    onMouseEnter={() => setActiveStep(idx)}
                    onMouseLeave={() => setActiveStep(null)}
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                  >
                    {/* Step Number Tag */}
                    <div style={{
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: isItemActive ? '#0052cc' : '#0047BA',
                      marginBottom: '0.5rem',
                      lineHeight: 1,
                      transform: isItemActive ? 'scale(1.15)' : 'scale(1)',
                      transition: 'transform 0.2s, color 0.2s'
                    }}>
                      {m.number}
                    </div>

                    {/* Dot Node */}
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: isItemActive ? '#0052cc' : '#0047BA',
                      border: '4px solid #bfdbfe',
                      marginBottom: '0.85rem',
                      boxShadow: isItemActive ? '0 0 0 4px rgba(0, 71, 186, 0.3)' : '0 0 0 2px #0047BA',
                      transform: isItemActive ? 'scale(1.15)' : 'scale(1)',
                      transition: 'all 0.2s'
                    }} />

                    {/* Title & Desc */}
                    <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#0052cc', marginBottom: '0.3rem' }}>
                      {m.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#0052cc', lineHeight: 1.4, maxWidth: '150px' }}>
                      {m.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* 5. OUR LEADERSHIP */}
      <section className="cp-section padding-global" style={{ padding: '3.25rem 5%', backgroundColor: '#f0f5ff', borderTop: '1px solid #dbeafe' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          <div>
            <SectionBadge text="OUR LEADERSHIP" />

            <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.1rem)', fontWeight: 800, color: '#0052cc', lineHeight: 1.25, marginBottom: '0.85rem', letterSpacing: '-0.01em' }}>
              Experienced People. Exceptional Results.
            </h2>

            <p style={{ fontSize: '0.95rem', color: '#0052cc', lineHeight: 1.65, marginBottom: '1.35rem' }}>
              Our leadership team brings together deep industry expertise, engineering excellence, and a passion for innovation. Together, we drive PETG's mission to deliver sustainable precast solutions worldwide.
            </p>

            <a 
              href="#team" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#0047BA',
                color: '#ffffff',
                padding: '0.7rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.88rem',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(0, 71, 186, 0.2)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0052cc';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0047BA';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Meet Our Leadership Team</span>
              <ArrowRight size={15} />
            </a>
          </div>

          <div>
            <ThumbnailImage 
              src="/assets/media/structural_engineering_bim.jpg" 
              alt="PETG Technical Design & Engineering Systems"
              height="290px"
              overlayText="People Engineering Progress"
            />
          </div>
        </div>
      </section>


      {/* 6. OUR FACILITIES */}
      <section className="cp-section padding-global" style={{ padding: '3.25rem 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <SectionBadge text="OUR FACILITIES" />

              <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.1rem)', fontWeight: 800, color: '#0052cc', lineHeight: 1.25, marginBottom: '0.85rem', letterSpacing: '-0.01em' }}>
                World-Class Manufacturing
              </h2>

              <p style={{ fontSize: '0.95rem', color: '#0052cc', lineHeight: 1.65, marginBottom: '1.35rem' }}>
                Our state-of-the-art facilities are equipped with advanced technology and stringent quality control processes, enabling us to deliver precast products that meet global standards.
              </p>

              <a 
                href="#facilities" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#0047BA',
                  color: '#ffffff',
                  padding: '0.7rem 1.5rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0, 71, 186, 0.2)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0052cc';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0047BA';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Our Facilities</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* 3 Facility Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(125px, 1fr))', gap: '0.85rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                <ThumbnailImage 
                  src="/assets/media/operations_1_real.jpg" 
                  alt="Advanced Production Lines" 
                  height="140px"
                />
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0052cc', textAlign: 'center' }}>
                  Advanced Production Lines
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                <ThumbnailImage 
                  src="/assets/media/operations_2_real.jpg" 
                  alt="Large-Scale Capacity" 
                  height="140px"
                />
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0052cc', textAlign: 'center' }}>
                  Large-Scale Capacity
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                <ThumbnailImage 
                  src="/assets/media/operations_3_real.jpg" 
                  alt="Quality Assurance Systems" 
                  height="140px"
                />
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0052cc', textAlign: 'center' }}>
                  Quality Assurance Systems
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 7. OUR CERTIFICATIONS */}
      <section className="cp-section padding-global" style={{ padding: '3.25rem 5%', backgroundColor: '#f0f5ff', borderTop: '1px solid #dbeafe' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <SectionBadge text="OUR CERTIFICATIONS" />

          <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.1rem)', fontWeight: 800, color: '#0052cc', marginBottom: '0.65rem', letterSpacing: '-0.01em' }}>
            Trusted. Certified. Global Standards.
          </h2>

          <p style={{ fontSize: '0.94rem', color: '#0052cc', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: 1.55 }}>
            We adhere to international standards and best practices to ensure the highest levels of quality, safety, and environmental responsibility.
          </p>

          {/* 5 Circular Badges */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.25rem',
            maxWidth: '980px',
            margin: '0 auto'
          }}>
            {certifications.map((c, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '0.65rem',
                  transition: 'transform 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '88px',
                  height: '88px',
                  borderRadius: '50%',
                  border: '3px solid #0047BA',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0, 71, 186, 0.1)',
                  padding: '0.45rem',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: c.code.length > 8 ? '0.7rem' : '0.85rem',
                    fontWeight: 800,
                    color: '#0047BA',
                    lineHeight: 1.1,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}>
                    {c.code}
                  </div>
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0052cc', maxWidth: '130px', lineHeight: 1.25 }}>
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 8. PARTNER WITH PETG (CTA BANNER) */}
      <section 
        className="cp-cta-banner padding-global"
        style={{
          backgroundColor: '#0047ba',
          backgroundImage: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #f0f5ff 100%)',
          color: '#ffffff',
          padding: '2.75rem 5%',
          borderTop: '1px solid rgba(255,255,255,0.15)'
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#93c5fd', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.85rem', lineHeight: 1 }}>➔</span>
              <span>LET'S BUILD TOGETHER</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0047BA', marginBottom: '0.35rem' }}>
              Partner with PETG
            </h2>

            <p style={{ fontSize: '0.9rem', color: '#0052cc', maxWidth: '650px', lineHeight: 1.5 }}>
              Discover how our expertise, innovation, and commitment to sustainability can support your next project.
            </p>
          </div>

          <a 
            href="#contact" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              backgroundColor: '#ffffff',
              color: '#0047BA',
              padding: '0.75rem 1.75rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(0, 31, 77, 0.3)',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#eff6ff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Contact Us Today</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </section>


      {/* 9. CLEAN WEBSITE THEME-MATCHED FOOTER (Full Rich Corporate Blue Palette) */}
      <footer style={{ background: 'linear-gradient(180deg, #f0f5ff 0%, #ffffff 100%)', color: '#ffffff', borderTop: '3px solid #0047BA', padding: '3.5rem 5% 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '2rem',
            marginBottom: '2.5rem'
          }}>
            {/* Column 1: Brand */}
            <div style={{ gridColumn: 'span 1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.03em', color: '#ffffff', background: '#0047BA', padding: '2px 10px', borderRadius: '6px' }}>PETG</span>
                <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#bfdbfe', lineHeight: 1.1, borderLeft: '1.5px solid #93c5fd', paddingLeft: '6px' }}>
                  PRECISION<br />ENGINEERING<br />TOMORROW
                </div>
              </div>
              <p style={{ fontSize: '0.84rem', color: '#0052cc', lineHeight: 1.5, marginBottom: '1rem' }}>
                Engineering Today for a Stronger Tomorrow.
              </p>

              {/* Social Icons */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href="#linkedin" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(191, 219, 254, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0052cc', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <IconLinkedin size={15} />
                </a>
                <a href="#youtube" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(191, 219, 254, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0052cc', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <IconYoutube size={15} />
                </a>
                <a href="#facebook" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(191, 219, 254, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0052cc', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <IconFacebook size={15} />
                </a>
                <a href="#instagram" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(191, 219, 254, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0052cc', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <IconInstagram size={15} />
                </a>
                <a href="#twitter" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(191, 219, 254, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0052cc', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <IconTwitter size={15} />
                </a>
              </div>
            </div>

            {/* Column 2: Company */}
            <div>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.85rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.84rem' }}>
                <li><a href="#about" style={{ color: '#0052cc', textDecoration: 'none' }}>About Us</a></li>
                <li><a href="#team" style={{ color: '#0052cc', textDecoration: 'none' }}>Our Team</a></li>
                <li><a href="#careers" style={{ color: '#0052cc', textDecoration: 'none' }}>Careers</a></li>
                <li><a href="#contact" style={{ color: '#0052cc', textDecoration: 'none' }}>Contact Us</a></li>
              </ul>
            </div>

            {/* Column 3: Products */}
            <div>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.85rem' }}>Products</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.84rem' }}>
                <li><a href="#products" style={{ color: '#0052cc', textDecoration: 'none' }}>Precast Systems</a></li>
                <li><a href="#technical" style={{ color: '#0052cc', textDecoration: 'none' }}>Technical Resources</a></li>
                <li><a href="#cases" style={{ color: '#0052cc', textDecoration: 'none' }}>Case Studies</a></li>
                <li><a href="#catalog" style={{ color: '#0052cc', textDecoration: 'none' }}>Product Catalog</a></li>
              </ul>
            </div>

            {/* Column 4: Industries */}
            <div>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.85rem' }}>Industries</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.84rem' }}>
                <li><a href="#transportation" style={{ color: '#0052cc', textDecoration: 'none' }}>Transportation</a></li>
                <li><a href="#water" style={{ color: '#0052cc', textDecoration: 'none' }}>Water &amp; Utilities</a></li>
                <li><a href="#commercial" style={{ color: '#0052cc', textDecoration: 'none' }}>Commercial</a></li>
                <li><a href="#industrial" style={{ color: '#0052cc', textDecoration: 'none' }}>Industrial</a></li>
              </ul>
            </div>

            {/* Column 5: Resources */}
            <div>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.85rem' }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.84rem' }}>
                <li><a href="#news" style={{ color: '#0052cc', textDecoration: 'none' }}>News &amp; Insights</a></li>
                <li><a href="#brochures" style={{ color: '#0052cc', textDecoration: 'none' }}>Brochures</a></li>
                <li><a href="#faqs" style={{ color: '#0052cc', textDecoration: 'none' }}>FAQs</a></li>
                <li><a href="#videos" style={{ color: '#0052cc', textDecoration: 'none' }}>Videos</a></li>
              </ul>
            </div>

            {/* Column 6: Subscribe */}
            <div style={{ minWidth: '200px' }}>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>Subscribe</h4>
              <p style={{ fontSize: '0.8rem', color: '#0052cc', marginBottom: '0.65rem' }}>
                Get the latest engineering updates.
              </p>
              
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '6px' }}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flexGrow: 1,
                    padding: '7px 10px',
                    borderRadius: '6px',
                    border: '1px solid #93c5fd',
                    fontSize: '0.82rem',
                    outline: 'none',
                    minWidth: '120px',
                    color: '#0052cc',
                    backgroundColor: '#ffffff'
                  }}
                />
                <button 
                  type="submit"
                  aria-label="Subscribe"
                  style={{
                    backgroundColor: '#0047BA',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.4)',
                    borderRadius: '6px',
                    padding: '7px 12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0047ba'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0047BA'}
                >
                  <ArrowRight size={15} />
                </button>
              </form>
              {subscribed && (
                <div style={{ fontSize: '0.75rem', color: '#93c5fd', marginTop: '4px', fontWeight: 700 }}>
                  ✓ Thank you for subscribing!
                </div>
              )}
            </div>

          </div>

          {/* Bottom Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(191, 219, 254, 0.2)',
            fontSize: '0.78rem',
            color: '#93c5fd'
          }}>
            <div>
              © {new Date().getFullYear()} PETG. All rights reserved.
            </div>

            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <a href="#privacy" style={{ color: '#0052cc', textDecoration: 'none' }}>Privacy Policy</a>
              <span style={{ color: 'rgba(191, 219, 254, 0.4)' }}>|</span>
              <a href="#terms" style={{ color: '#0052cc', textDecoration: 'none' }}>Terms of Use</a>
              <span style={{ color: 'rgba(191, 219, 254, 0.4)' }}>|</span>
              <a href="#sitemap" style={{ color: '#0052cc', textDecoration: 'none' }}>Sitemap</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default CompanyProfile;
