import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CapabilitiesBento from './components/CapabilitiesBento';
import Solutions from './components/Solutions';
import Methodology from './components/Methodology';
import CTABanner from './components/CTABanner';
import CoreProducts from './components/CoreProducts';
import WhyChooseUs from './components/WhyChooseUs';
import Operations from './components/Operations';
import Certifications from './components/Certifications';
import LatestNews from './components/LatestNews';
import ResourceCenter from './components/ResourceCenter';
import CoreValues from './components/CoreValues';
import FAQ from './components/FAQ';
import Locations from './components/Locations';
import Sustainability from './components/Sustainability';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import { ChevronUp } from 'lucide-react';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Scroll progress & back-to-top handler
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setShowScrollTop(currentScroll > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Enterprise Intersection Observer for Smooth Scroll Reveals
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Optional: unobserve once revealed for performance
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll(
      '.reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-zoom, .bento_card, .solution_card, .method-step-card, .why-item, .location-card, .value-card, .news-card, .resource-item, .faq-item'
    );

    revealElements.forEach((el) => {
      el.classList.add('reveal-init');
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper">
      {/* High-Tech Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />
      <Hero />
      <CapabilitiesBento />
      <Solutions />
      <Methodology />
      <CTABanner />
      <CoreProducts />
      <WhyChooseUs />
      <Operations />
      <Certifications />
      <LatestNews />
      <ResourceCenter />
      <CoreValues />
      <FAQ />
      <Locations />
      <Sustainability />
      <Consultation />
      <Footer />

      {/* Floating Back to Top Button */}
      <button 
        className={`btn-scroll-top ${showScrollTop ? 'is-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
}

export default App;
