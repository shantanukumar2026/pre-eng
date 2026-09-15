import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CapabilitiesBento from './components/CapabilitiesBento';
import CivilApplications from './components/CivilApplications';
import Solutions from './components/Solutions';
import Methodology from './components/Methodology';
import CoreProducts from './components/CoreProducts';
import QualityAssurance from './components/QualityAssurance';
import WhyChooseUs from './components/WhyChooseUs';
import Certifications from './components/Certifications';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import OfficeLocations from './components/OfficeLocations';

// Sub-pages
import CompanyProfile from './components/CompanyProfile';
import Store from './components/Store';
import NotFound from './components/NotFound';
import Team from './components/Team';
import Governance from './components/Governance';
import Membership from './components/Membership';
import ProductsPage from './components/ProductsPage';
import ManufacturingRnD from './components/ManufacturingRnD';
import NewsPage from './components/NewsPage';
import Contact from './components/Contact';
import About from './components/about';

import { ChevronUp } from 'lucide-react';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const getRouteFromHash = () => {
    if (typeof window === 'undefined') return 'home';
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    if (!hash || hash === 'home') return 'home';
    if (hash === 'company-profile') return 'company-profile';
    if (hash === 'estore' || hash === 'store') return 'estore';
    if (hash === 'careers') return 'careers';
    if (hash === 'team') return 'team';
    if (hash === 'governance') return 'governance';
    if (hash === 'membership') return 'membership';
    if (hash === 'products') return 'products';
    if (hash === 'manufacturing') return 'manufacturing';
    if (hash === 'news') return 'news';
    if (hash === 'contact') return 'contact';
    if (hash === 'about') return 'about';
    return 'notfound';
  };

  const [currentView, setCurrentView] = useState(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = getRouteFromHash();
      setCurrentView(nextRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);

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

    // Intersection Observer for Smooth Scroll Reveals on Home page
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
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
      '.reveal-fade-up, .capability-corporate-card, .solution-card-item, .method-step, .why-item, .location-card'
    );

    revealElements.forEach((el) => {
      el.classList.add('reveal-init');
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavigate = (view) => {
    setCurrentView(view);
    const targetHash = view === 'home' ? '#home' : `#${view}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'company-profile':
        return <CompanyProfile />;
      case 'estore':
        return (
          <>
            <Store />
            <Footer />
          </>
        );
      case 'careers':
        return (
          <>
            <NotFound isCareer={true} />
            <Footer />
          </>
        );
      case 'team':
        return (
          <>
            <Team />
            <Footer />
          </>
        );
      case 'governance':
        return (
          <>
            <Governance />
            <Footer />
          </>
        );
      case 'membership':
        return (
          <>
            <Membership />
            <Footer />
          </>
        );
      case 'products':
        return (
          <>
            <ProductsPage />
            <Footer />
          </>
        );
      case 'manufacturing':
        return (
          <>
            <ManufacturingRnD />
            <Footer />
          </>
        );
      case 'news':
        return (
          <>
            <NewsPage />
            <Footer />
          </>
        );
      case 'contact':
        return (
          <>
            <Contact />
            <Footer />
          </>
        );
      case 'about':
        return (
          <>
            <About />
            <Footer />
          </>
        );
      case 'notfound':
        return (
          <>
            <NotFound />
            <Footer />
          </>
        );
      case 'home':
      default:
        return (
          <>
            <Hero />
            <CapabilitiesBento />
            <CivilApplications />
            <Solutions />
            <Methodology />
            <CoreProducts />
            <QualityAssurance />
            <WhyChooseUs />
            <Certifications />
            <OfficeLocations />
            <Consultation />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="page-wrapper">
      {/* High-Tech Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {renderCurrentView()}

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
