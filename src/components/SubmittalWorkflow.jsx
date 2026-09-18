import React from 'react';
import { 
  FileCheck2, 
  Cpu, 
  ShieldCheck, 
  Truck, 
  ArrowRight, 
  CheckCircle2,
  Building2,
  CalendarCheck
} from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Plan Takeoff & 3D BIM Clash Detection',
    desc: 'Our civil engineering team reviews your CAD/PDF site plans to produce accurate takeoff schedules, custom knockout locations, and stamped 50-state PE submittal drawings.',
    icon: Cpu
  },
  {
    step: '02',
    title: 'Automated CNC Steel Batch Casting',
    desc: 'Units are cast in heavy-gauge CNC steel formwork utilizing self-consolidating 8,000–10,000 PSI high-early concrete mixes with computer-controlled aggregate batching.',
    icon: Building2
  },
  {
    step: '03',
    title: 'ASTM Lab Testing & Joint Inspection',
    desc: 'Each production lot undergoes compressive cylinder break tests, water absorption analysis, and 100% vacuum joint seal verification in our certified quality control facility.',
    icon: ShieldCheck
  },
  {
    step: '04',
    title: 'Synchronized Jobsite Crane Delivery',
    desc: 'Dedicated heavy freight logistics and knuckle-boom unloading trucks deliver directly to your trench site, precisely synchronized with your contractor crane pick schedule.',
    icon: Truck
  }
];

const SubmittalWorkflow = () => {
  return (
    <section style={{
      backgroundColor: '#f4f8ff',
      padding: '5rem 4%',
      borderBottom: '1.5px solid #bfdbfe',
      fontFamily: "'Manrope', sans-serif"
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>

        {/* Headline */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#dbeafe',
            color: '#0047ba',
            padding: '4px 14px',
            borderRadius: '20px',
            fontSize: '0.78rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: '0.85rem'
          }}>
            <CalendarCheck size={14} />
            <span>End-to-End Production Process</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#0047ba', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '0.75rem' }}>
            From Engineering Plans to Jobsite Placement
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#1e2ede', fontWeight: 600 }}>
            Every precast structure is backed by seamless engineering, certified American manufacturing, and synchronized jobsite logistics to keep your civil projects on schedule.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3.5rem'
        }}>
          {WORKFLOW_STEPS.map((wf, idx) => {
            const StepIcon = wf.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #bfdbfe',
                  borderRadius: '14px',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 20px rgba(30, 46, 222, 0.05)',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      backgroundColor: '#dbeafe',
                      color: '#0047ba',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <StepIcon size={22} />
                    </div>
                    <span style={{
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: '#bfdbfe'
                    }}>
                      {wf.step}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0047ba', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                    {wf.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#1e2ede', lineHeight: 1.6, fontWeight: 500 }}>
                    {wf.desc}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #eff6ff', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#0047ba', fontWeight: 800 }}>
                  <CheckCircle2 size={14} />
                  <span>Certified Quality Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Project Submittal Estimation Banner */}
        <div style={{
          backgroundColor: '#0047ba',
          borderRadius: '16px',
          padding: '2.5rem 3rem',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
          boxShadow: '0 12px 30px rgba(0, 71, 186, 0.25)',
          border: '1.5px solid #1e2ede'
        }}>
          <div>
            <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
              Ready to Submit Your Project Plans for Engineering Review?
            </h3>
            <p style={{ color: '#bfdbfe', fontSize: '1rem', maxWidth: '800px', lineHeight: 1.6 }}>
              Receive sealed PE calculations, custom CAD knockout drawings, and scheduled freight delivery windows for your jobsite within 24 business hours.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              backgroundColor: '#ffffff',
              color: '#0047ba',
              padding: '13px 28px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '0.92rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)'
            }}>
              <span>Request Project Takeoff Quote</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SubmittalWorkflow;
