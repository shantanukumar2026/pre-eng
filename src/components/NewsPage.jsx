import React from 'react';
import { ChevronRight, Calendar, ArrowRight, FileText, Tag } from 'lucide-react';

const NewsPage = () => {
  const articles = [
    {
      title: 'Accelerating DOT Infrastructure Delivery via High-Span Precast Culverts',
      date: 'September 2024',
      category: 'Technical Whitepaper',
      img: '/assets/media/news_1_real.jpg',
      summary: 'An engineering case review on replacing failing multi-pipe culvert crossings with monolithic precast box units in less than 48 hours.'
    },
    {
      title: 'Advancements in Low-Carbon Type 1L Precast Concrete Formulations',
      date: 'August 2024',
      category: 'R&D Innovation',
      img: '/assets/media/news_2_real.jpg',
      summary: 'How incorporating Portland Limestone Cement (PLC) and supplementary cementitious materials reduced carbon footprint by 22% without sacrificing 28-day strengths.'
    },
    {
      title: 'Heavy Logistics Expansion: New Tri-Axle Steerable Dolly Fleet Operational',
      date: 'July 2024',
      category: 'Press Release',
      img: '/assets/media/news_3_real.jpg',
      summary: 'PETG expands heavy-haul capabilities with specialized 140-foot steerable transporter dollies for continuous single-piece bridge girder transit.'
    }
  ];

  return (
    <div className="news-page" style={{ backgroundColor: '#ffffff', color: '#0047ba', fontFamily: "'Manrope', sans-serif" }}>
      
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
            <span style={{ color: '#ffffff', fontWeight: 600 }}>News &amp; Technical Insights</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.6rem', lineHeight: 1.15, color: '#ffffff' }}>
            News, Insights &amp; Technical Bulletins
          </h1>

          <p style={{ fontSize: '1rem', color: '#bfdbfe', maxWidth: '720px', lineHeight: 1.55 }}>
            Stay updated with precast engineering developments, project case studies, and DOT material specification updates.
          </p>
        </div>
      </section>

      {/* 2. Articles Grid */}
      <section style={{ padding: '3.5rem 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {articles.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #bfdbfe',
                  boxShadow: '0 4px 16px rgba(0, 71, 186, 0.05)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 71, 186, 0.12)';
                  e.currentTarget.style.borderColor = '#0047BA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 71, 186, 0.05)';
                  e.currentTarget.style.borderColor = '#bfdbfe';
                }}
              >
                <div style={{ height: '200px', width: '100%', overflow: 'hidden', backgroundColor: '#f0f5ff' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, backgroundColor: '#eff6ff', color: '#0047BA', padding: '2px 8px', borderRadius: '4px', border: '1px solid #bfdbfe' }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#0047BA', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Calendar size={12} />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0052cc', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: '#0052cc', lineHeight: 1.55, flexGrow: 1, marginBottom: '1.25rem' }}>
                    {item.summary}
                  </p>

                  <a 
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: '#0047BA',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Read Full Technical Bulletin</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default NewsPage;
