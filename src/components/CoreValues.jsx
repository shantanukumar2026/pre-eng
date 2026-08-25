import React from 'react';
import { Heart, Lightbulb, Target, Users } from 'lucide-react';

const CoreValues = () => {
  return (
    <>
      <section className="section-values padding-global" style={{ backgroundColor: '#f8fafc', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container-large">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-style-h3 text-color-primary">Our Core Values</h2>
            <p style={{ color: '#0055b3', maxWidth: '600px', margin: '0 auto' }}>The principles that drive our work, shape our culture, and ensure we always deliver excellence to our clients.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="value-card" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 34, 89,0.05)', textAlign: 'center', borderTop: '3px solid var(--color-primary)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#eff6ff', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}><Heart size={24} /></div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#002868' }}>Client-Centricity</h4>
              <p style={{ fontSize: '0.9rem', color: '#0055b3' }}>Your goals become our goals. We build deep partnerships focused entirely on your success.</p>
            </div>
            <div className="value-card" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 34, 89,0.05)', textAlign: 'center', borderTop: '3px solid var(--color-primary)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#eff6ff', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}><Lightbulb size={24} /></div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#002868' }}>Innovation First</h4>
              <p style={{ fontSize: '0.9rem', color: '#0055b3' }}>The engineering landscape evolves fast. We stay ahead of the curve, constantly adopting new precast technologies.</p>
            </div>
            <div className="value-card" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 34, 89,0.05)', textAlign: 'center', borderTop: '3px solid var(--color-primary)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#eff6ff', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}><Target size={24} /></div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#002868' }}>Data-Driven Precision</h4>
              <p style={{ fontSize: '0.9rem', color: '#0055b3' }}>We don't guess. Every decision we make is backed by rigorous analytics and testing.</p>
            </div>
            <div className="value-card" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 34, 89,0.05)', textAlign: 'center', borderTop: '3px solid var(--color-primary)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#eff6ff', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}><Users size={24} /></div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#002868' }}>Radical Transparency</h4>
              <p style={{ fontSize: '0.9rem', color: '#0055b3' }}>Honest reporting, clear communication, and no hidden agendas. We win when you win.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="divider-line"></div>
    </>
  );
};

export default CoreValues;
