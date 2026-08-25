import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2, HardHat, Layers, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <header className="section_header_hero" id="home">
      <video
        className="header_bg_video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/media/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="header_gradient_overlay"></div>

      <div className="hero_content_inner">
        <div className="hero_top_pill">
          <div className="hero_pill_dot"></div>
          <span className="hero_pill_text">Precast Engineering &amp; Technologies</span>
        </div>

        <h1 className="hero_title_text">
          Precision<br />
          <span className="text-color-blue">Precast Engineering</span><br />
          and Seamless Engineering Solutions
        </h1>

        <p className="hero_subtitle">
          We engineer, design, and manufacture high-performance precast concrete systems, delivering certified structural precision, advanced technologies, and on-time project delivery.
        </p>

        <div className="hero_cta_group">
          <a href="#products" className="button_hero_primary">
            <div className="btn_circle_icon">
              <ArrowUpRight size={16} />
            </div>
            <span>Explore Our Products</span>
          </a>

          <a href="#contact" className="button_hero_secondary">
            <span>Request a Quote</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* Bottom Trust Row & Clean Controls */}
      <div className="hero_bottom_bar">
        <div className="hero_trust_row">
          <div className="hero_trust_item">
            <div className="trust_icon_wrap">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="trust_text_main">Licensed</div>
              <div className="trust_text_sub">PE Certified</div>
            </div>
          </div>

          <div className="hero_trust_item">
            <div className="trust_icon_wrap">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <div className="trust_text_main">Certified Quality</div>
              <div className="trust_text_sub">Standards</div>
            </div>
          </div>

          <div className="hero_trust_item">
            <div className="trust_icon_wrap">
              <HardHat size={18} />
            </div>
            <div>
              <div className="trust_text_main">Fast Turnaround</div>
              <div className="trust_text_sub">&amp; Delivery</div>
            </div>
          </div>

          <div className="hero_trust_item">
            <div className="trust_icon_wrap">
              <Layers size={18} />
            </div>
            <div>
              <div className="trust_text_main">Engineered for</div>
              <div className="trust_text_sub">Durability</div>
            </div>
          </div>
        </div>

        <a href="#products" className="hero_scroll_indicator">
          <div className="scroll_icon_circle">
            <ChevronDown size={14} />
          </div>
          <span>Scroll to explore</span>
        </a>
      </div>
    </header>
  );
};

export default Hero;
