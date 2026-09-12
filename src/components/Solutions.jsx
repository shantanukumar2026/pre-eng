import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const SOLUTIONS_DATA = [
  // --- PRECAST ENGINEERING ---
  {
    id: 'box-culverts',
    category: 'engineering',
    categoryLabel: 'Civil Conduits',
    title: 'Precast Box Culverts',
    description: 'Heavy-duty monolithic & split precast conduits engineered for high-volume storm drainage and heavy highway loads.',
    image: '/assets/media/box_culvert_real.jpg',
    link: '#products'
  },
  {
    id: 'bridge-girders',
    category: 'engineering',
    categoryLabel: 'Highway Structural',
    title: 'Pre-stressed Bridge Girders',
    description: 'AASHTO & Bulb-Tee high-tensioned structural beams engineered for highway overpasses, river crossings, and rail bridges.',
    image: '/assets/media/bridge_girder_real.jpg',
    link: '#products'
  },
  {
    id: 'utility-manholes',
    category: 'engineering',
    categoryLabel: 'Municipal Utilities',
    title: 'Precast Utility Manholes',
    description: 'Heavy-duty cylindrical and square precast structures engineered for municipal sanitary, storm, and utility access.',
    image: '/assets/media/utility_manhole_real.jpg',
    link: '#products'
  },
  {
    id: 'architectural-panels',
    category: 'engineering',
    categoryLabel: 'Commercial Facades',
    title: 'Architectural Wall Panels',
    description: 'High-density composite precast panels providing architectural finishes, continuous thermal insulation, and rapid erection.',
    image: '/assets/media/architectural_panels_real.jpg',
    link: '#products'
  },
  {
    id: 'pre-trench',
    category: 'engineering',
    categoryLabel: 'Stormwater Infrastructure',
    title: 'Pre-Trench Drainage Channels',
    description: 'Engineered continuous linear drainage trench channels with heavy-duty cast iron traffic grates and precision sloped invert.',
    image: '/assets/media/pre-trench/pre-trench-01.JPG',
    link: '#products'
  },
  {
    id: 'catch-basins',
    category: 'engineering',
    categoryLabel: 'Roadway Runoff',
    title: 'Drainage Inlets & Catch Basins',
    description: 'Heavy-duty sediment collection sumps, curb inlet hoods, and traffic-rated catch basins for roadways and commercial plazas.',
    image: '/assets/media/catch_basin_real.jpg',
    link: '#products'
  },

  // --- PRECAST TECHNOLOGIES ---
  {
    id: 'custom-mold-tooling',
    category: 'technologies',
    categoryLabel: 'Tooling & Fabrication',
    title: 'Custom Steel Mold Tooling',
    description: 'Advanced CNC-machined steel formwork and custom modular molds fabricated for complex precast structural geometries.',
    image: '/assets/media/custom_tooling_real.jpg',
    link: '#contact'
  },
  {
    id: 'automated-casting',
    category: 'technologies',
    categoryLabel: 'Advanced Manufacturing',
    title: 'Automated Batching & Casting',
    description: 'Computerized batch plants with real-time moisture monitoring and accelerated steam curing beds for high early strength.',
    image: '/assets/media/automated_batching_real.jpg',
    link: '#contact'
  },
  {
    id: 'bim-3d-modeling',
    category: 'technologies',
    categoryLabel: 'Engineering Tech',
    title: '3D BIM & Structural Modeling',
    description: 'Comprehensive Revit & Tekla 3D BIM coordination, shop drawing generation, rebar detailing, and certified PE calculations.',
    image: '/assets/media/engineering_design_real.jpg',
    link: '#contact'
  },
  {
    id: 'heavy-logistics',
    category: 'technologies',
    categoryLabel: 'Logistics & Rigging',
    title: 'Heavy-Haul Logistics & Rigging',
    description: 'Dedicated heavy-haul transport fleet and synchronized jobsite crane delivery aligned directly to contractor pick plans.',
    image: '/assets/media/heavy_logistics_real.jpg',
    link: '#contact'
  },
  {
    id: 'internal-drop-structures',
    category: 'technologies',
    categoryLabel: 'Advanced Hydraulics',
    title: 'Internal Drop Manhole Systems',
    description: 'Energy-dissipating internal drop piping systems engineered to prevent hydraulic turbulence and structural chamber degradation.',
    image: '/assets/media/72 precast manhole Double Internal Drop.657.png',
    link: '#products'
  },
  {
    id: 'low-dome-vaults',
    category: 'technologies',
    categoryLabel: 'Structural Vaults',
    title: 'Heavy-Duty Low Dome Slabs',
    description: 'H-20 & HS-25 heavy highway traffic-rated low dome covers and custom access lids engineered for subterranean utility vaults.',
    image: '/assets/media/10 FT LOW DOME.117.png',
    link: '#products'
  }
];

const Solutions = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSolutions = activeFilter === 'all'
    ? SOLUTIONS_DATA
    : SOLUTIONS_DATA.filter(item => item.category === activeFilter);

  return (
    <>
      <section className="section-solutions padding-global" id="solutions">
        <div className="container-large">
          
          {/* Header */}
          <div className="solutions-header-container">
            <div className="solutions-header-left">
              <div className="h-flex-tiny">
                <div className="chip_box"></div>
                <span className="chip">Precast Engineering &amp; Technologies</span>
              </div>
              <h2 className="heading-style-h3 text-color-primary">
                Comprehensive Solutions Under One Roof
              </h2>
              <p>
                From heavy civil drainage structures to computerized batch casting and BIM detailing, explore our full spectrum of certified engineering solutions.
              </p>
            </div>

            <a href="#products" className="button-outline-blue" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>VIEW ALL SPECIFICATIONS</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Filter Tabs */}
          <div className="solutions-tabs-bar">
            <button 
              className={`solutions-tab-btn ${activeFilter === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Solutions ({SOLUTIONS_DATA.length})
            </button>
            <button 
              className={`solutions-tab-btn ${activeFilter === 'engineering' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('engineering')}
            >
              Precast Engineering ({SOLUTIONS_DATA.filter(s => s.category === 'engineering').length})
            </button>
            <button 
              className={`solutions-tab-btn ${activeFilter === 'technologies' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('technologies')}
            >
              Precast Technologies ({SOLUTIONS_DATA.filter(s => s.category === 'technologies').length})
            </button>
          </div>

          {/* Solutions Cards Grid */}
          <div className="solutions-grid">
            {filteredSolutions.map((item) => (
              <a key={item.id} href={item.link} className="solution-card-item">
                <div className="solution-card-img-wrap">
                  <img src={item.image} alt={item.title} className="solution-card-img" />
                  <span className="solution-card-badge">{item.categoryLabel}</span>
                </div>
                <div className="solution-card-body">
                  <h3 className="solution-card-title">{item.title}</h3>
                  <p className="solution-card-desc">{item.description}</p>
                  <div className="solution-card-action">
                    <span>EXPLORE CAPABILITIES</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
      <div className="divider-line"></div>
    </>
  );
};

export default Solutions;
