import React from 'react';
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

function App() {
  return (
    <div className="page-wrapper">
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
    </div>
  );
}

export default App;
