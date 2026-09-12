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
                <img src="/assets/media/news_1_real.jpg" alt="Future of Precast" />
                <div className="news-date">MAY 15, 2026</div>
                <div className="news-title">The Future of Precast Construction in 2026</div>
              </div>
              <div className="news-card">
                <img src="/assets/media/news_2_real.jpg" alt="Manufacturing Tech" />
                <div className="news-date">APR 22, 2026</div>
                <div className="news-title">New Technology in Manufacturing</div>
              </div>
              <div className="news-card">
                <img src="/assets/media/news_3_real.jpg" alt="Sustainable Concrete" />
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
