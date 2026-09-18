import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyIntro from './components/CompanyIntro';
import CoreProducts from './components/CoreProducts';
import SubmittalWorkflow from './components/SubmittalWorkflow';
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
    if (typeof window === 'undefined') return { view: 'home', category: 'all' };
    const rawHash = window.location.hash.replace(/^#\/?/, '');
    const [pathPart, queryPart] = rawHash.split('?');
    const hash = (pathPart || 'home').toLowerCase();
    
    let category = 'all';
    if (queryPart) {
      const params = new URLSearchParams(queryPart);
      if (params.get('category')) {
        category = params.get('category');
      } else if (params.get('cat')) {
        category = params.get('cat');
      }
    } else if (hash.startsWith('category-')) {
      return { view: 'products', category: hash.replace('category-', '') };
    }

    if (!hash || hash === 'home') return { view: 'home', category: 'all' };
    if (hash === 'company-profile') return { view: 'company-profile', category: 'all' };
    if (hash === 'estore' || hash === 'store') return { view: 'estore', category: 'all' };
    if (hash === 'careers') return { view: 'careers', category: 'all' };
    if (hash === 'team') return { view: 'team', category: 'all' };
    if (hash === 'governance') return { view: 'governance', category: 'all' };
    if (hash === 'membership') return { view: 'membership', category: 'all' };
    if (hash === 'products') return { view: 'products', category };
    if (hash === 'manufacturing') return { view: 'manufacturing', category: 'all' };
    if (hash === 'news') return { view: 'news', category: 'all' };
    if (hash === 'contact') return { view: 'contact', category: 'all' };
    if (hash === 'about') return { view: 'about', category: 'all' };
    return { view: 'notfound', category: 'all' };
  };

  const [routeState, setRouteState] = useState(getRouteFromHash);
  const currentView = routeState.view;
  const currentCategory = routeState.category;

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = getRouteFromHash();
      setRouteState(nextRoute);
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

  const handleNavigate = (view, category = 'all') => {
    setRouteState({ view, category });
    let targetHash = view === 'home' ? '#home' : `#${view}`;
    if (view === 'products' && category && category !== 'all') {
      targetHash = `#products?category=${category}`;
    }
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
            <ProductsPage 
              initialCategory={currentCategory} 
              onNavigate={handleNavigate}
            />
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
            <CompanyIntro />
            <CoreProducts 
              onNavigateToCategory={(catId) => handleNavigate('products', catId)}
              onNavigateToProducts={() => handleNavigate('products', 'all')}
            />
            <SubmittalWorkflow />
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
