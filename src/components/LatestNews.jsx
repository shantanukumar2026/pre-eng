import React from 'react';
import { ArrowRight } from 'lucide-react';

const LatestNews = () => {
  return (
    <>
      <section className="section-news padding-global">
        <div className="container-large">
          <div className="news-split">
            <div className="news-left">
              <h2 className="heading-style-h4 text-color-primary">Latest News &amp; Insights</h2>
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
    </>
  );
};

export default LatestNews;
