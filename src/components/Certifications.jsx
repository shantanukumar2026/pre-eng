import React from 'react';

const Certifications = () => {
  return (
    <>
      <section className="section-certs padding-global">
        <div className="container-large">
          <div className="certs-wrapper">
            <h2 className="heading-style-h4 text-color-primary" style={{ fontSize: '1.25rem' }}>Certifications &amp; Compliance</h2>
            <div className="certs-grid">
              <div className="cert-logo">ISO 9001</div>
              <div className="cert-logo">ASTM</div>
              <div className="cert-logo">PCI Certified</div>
              <div className="cert-logo">OSHA Compliant</div>
              <div className="cert-logo">LEED</div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider-line"></div>
    </>
  );
};

export default Certifications;
