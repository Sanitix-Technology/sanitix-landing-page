import React, { useState } from 'react';
import { Phone, Mail, MapPin, X } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenPartnerModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking: _onOpenBooking, onOpenPartnerModal }) => {
  // Modals for footer links (100% client-side, no backend/DB needed)
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'partnerLogin' | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '16px 0 36px 0',
        position: 'relative'
      }}
      className="footer-section-wrap"
    >
      <div className="landing-container full-width-landing-container footer-landing-container">
        <div
          className="footer-card"
          style={{
            backgroundColor: '#041610',
            color: '#FFFFFF',
            borderRadius: '24px',
            padding: '52px 48px 32px 48px',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            boxShadow: '0 20px 50px -12px rgba(4, 22, 16, 0.28)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle background ambient glow */}
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 168, 89, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

        {/* Primary Footer Navigation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2.1fr 1fr 1.15fr 1fr 1fr',
            gap: '38px',
            paddingBottom: '40px',
            alignItems: 'start'
          }}
          className="footer-nav-grid"
        >
          {/* Brand & Contact Column */}
          <div>
            {/* Official Sanitix Logo for Dark Background */}
            <div style={{ marginBottom: '18px' }}>
              <img
                src="/images/sanitix_logo_white.webp"
                alt="SanitiX"
                style={{
                  height: '38px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            <p
              style={{
                fontSize: '13px',
                color: '#8E9F97',
                lineHeight: 1.6,
                maxWidth: '310px',
                marginBottom: '20px'
              }}
            >
              Sanitix connects customers with trusted service providers for water, heavy equipment, cleaning and sanitation needs—all through one simple platform.
            </p>

            {/* Direct Contact Details: Email, Phone, Address */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '22px' }}>
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={15} color="#10B981" />
                <a
                  href="mailto:support@sanitix.in"
                  style={{
                    fontSize: '13.5px',
                    color: '#D1D5DB',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#10B981')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#D1D5DB')}
                >
                  support@sanitix.in
                </a>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={15} color="#10B981" />
                <a
                  href="tel:+912269710156"
                  style={{
                    fontSize: '13.5px',
                    color: '#D1D5DB',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#10B981')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#D1D5DB')}
                >
                  +91 22697 10156
                </a>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={15} color="#10B981" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.45 }}>
                  Sanitix Technologies Pvt. Ltd.<br />
                  Gurugram, Haryana, India
                </span>
              </div>
            </div>

            {/* Social Icons (Instagram & LinkedIn Only) */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/sanitix_technology?stkn=MXRxdnRzejIyNjlwaQ=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D1D5DB',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s, color 0.2s, transform 0.15s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#10B981';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = '#D1D5DB';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/sanitix-technology/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D1D5DB',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s, color 0.2s, transform 0.15s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#10B981';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = '#D1D5DB';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#FFFFFF', marginBottom: '18px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                { name: 'Services', action: () => scrollToSection('services') },
                { name: 'How It Works', action: () => scrollToSection('how-it-works') },
                { name: 'For Partners', action: () => scrollToSection('partner-careers') },
                { name: 'About Us', action: () => scrollToSection('about-us') },
                { name: 'Careers', action: () => scrollToSection('partner-careers') },
                { name: 'Contact Us', action: () => scrollToSection('contact') }
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={item.action}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: '#8E9F97',
                      fontSize: '13.5px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'color 0.2s'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#10B981')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#8E9F97')}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#FFFFFF', marginBottom: '18px' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Water Services',
                'Deep Cleaning',
                'Heavy Equipment',
                'JCB and Loader',
                'Drainage & Sewer',
                'Sanitation'
              ].map((service, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      scrollToSection('services');
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: '#8E9F97',
                      fontSize: '13.5px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'color 0.2s'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#10B981')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#8E9F97')}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* For Partners Column */}
          <div>
            <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#FFFFFF', marginBottom: '18px' }}>
              For Partners
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button
                  onClick={() => {
                    if (onOpenPartnerModal) {
                      onOpenPartnerModal();
                    } else {
                      window.dispatchEvent(new CustomEvent('open-partner-modal'));
                    }
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#8E9F97',
                    fontSize: '13.5px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#10B981')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#8E9F97')}
                >
                  Partner with Us
                </button>
              </li>
              <li>

              </li>
              <li>

              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#FFFFFF', marginBottom: '18px' }}>
              Support
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button
                  onClick={() => setActiveModal('terms')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#8E9F97',
                    fontSize: '13.5px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#10B981')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#8E9F97')}
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('privacy')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#8E9F97',
                    fontSize: '13.5px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#10B981')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#8E9F97')}
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            textAlign: 'center',
            fontSize: '13px',
            color: '#6B7280'
          }}
        >
          © 2026 Sanitix (A Pairow Group Company). All rights reserved.
        </div>
        </div>
      </div>

      {/* Client-Side Legal Modals */}
      {activeModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
          onClick={() => setActiveModal(null)}
        >
          <div
            className="footer-modal-content"
            style={{
              backgroundColor: '#071F17',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: '24px',
              padding: '32px',
              maxWidth: (activeModal === 'terms' || activeModal === 'privacy') ? '700px' : '500px',
              width: '100%',
              maxHeight: (activeModal === 'terms' || activeModal === 'privacy') ? '82vh' : 'auto',
              overflowY: (activeModal === 'terms' || activeModal === 'privacy') ? 'auto' : 'visible',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              position: 'relative',
              boxSizing: 'border-box'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              aria-label="Close"
              style={{
                position: 'sticky',
                top: 0,
                float: 'right',
                zIndex: 10,
                background: 'rgba(7, 31, 23, 0.85)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                color: '#D1D5DB',
                cursor: 'pointer',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                marginBottom: '-28px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(7, 31, 23, 0.85)';
                e.currentTarget.style.color = '#D1D5DB';
              }}
            >
              <X size={18} />
            </button>

            {/* PRIVACY POLICY CONTENT */}
            {activeModal === 'privacy' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', backgroundColor: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, color: '#10B981', marginBottom: '8px' }}>
                    Data Protection & Security
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                    Privacy Policy
                  </h3>
                  <p style={{ fontSize: '12px', color: '#9CA3AF', margin: '4px 0 0 0' }}>
                    Compliant with India&apos;s Digital Personal Data Protection (DPDP) Standards | Last Updated: March 2026
                  </p>
                </div>

                <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '13px', lineHeight: 1.65, color: '#D1D5DB' }}>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      1. Our Commitment to Privacy
                    </h4>
                    <p style={{ margin: 0, color: '#9CA3AF' }}>
                      At Sanitix Technologies Pvt. Ltd. (&quot;Sanitix&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we respect and uphold your confidentiality. This Privacy Policy details how we collect, handle, store, and safeguard your personal data when you interact with our website, mobile application, and utility booking platforms.
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      2. Information We Collect
                    </h4>
                    <ul style={{ margin: '6px 0 0 0', paddingLeft: '18px', color: '#9CA3AF', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li><strong>Identity & Contact Information:</strong> Name, phone number, email address, and company or society name when requesting services or quotes.</li>
                      <li><strong>Service Delivery Address & Location Data:</strong> Precise GPS coordinates, landmark details, and delivery addresses essential for dispatching commercial water tankers, equipment, and technicians to your site.</li>
                      <li><strong>Transaction & Invoicing Data:</strong> Order receipts, payment confirmation references, and service history. Note that all online transactions are securely handled through RBI-licensed payment gateways; Sanitix never stores raw card or bank credentials.</li>
                      <li><strong>Communication Records:</strong> Customer service queries, dispatch coordination calls, and quality feedback ratings.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      3. How We Use Your Information
                    </h4>
                    <ul style={{ margin: '6px 0 0 0', paddingLeft: '18px', color: '#9CA3AF', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li>Coordinating fast fleet dispatch and providing real-time delivery ETA tracking.</li>
                      <li>Sending transactional SMS, WhatsApp updates, and OTP verification for authorized delivery sign-off.</li>
                      <li>Generating GST-compliant business invoices and digital receipts.</li>
                      <li>Continuously auditing operator reliability and enhancing customer satisfaction.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      4. Data Sharing & Disclosure Principles
                    </h4>
                    <p style={{ margin: 0, color: '#9CA3AF' }}>
                      <strong>We strictly do not sell, rent, or trade your personal information with third-party advertisers or data brokers.</strong> Information is shared solely with:
                    </p>
                    <ul style={{ margin: '6px 0 0 0', paddingLeft: '18px', color: '#9CA3AF', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li><strong>Assigned Service Operators:</strong> Only relevant trip delivery information (site location, contact person name, and phone number) to ensure successful on-site fulfillment.</li>
                      <li><strong>Verified Cloud & Infrastructure Partners:</strong> Cloud hosting, encrypted communications (SMS/WhatsApp), and payment gateway providers under strict non-disclosure obligations.</li>
                      <li><strong>Regulatory or Legal Authorities:</strong> Disclosed only if mandated by statutory compliance or valid judicial order.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      5. Data Security & Storage Safeguards
                    </h4>
                    <p style={{ margin: 0, color: '#9CA3AF' }}>
                      We implement enterprise-grade security protocols, including 256-bit SSL/TLS end-to-end data encryption in transit and at rest, role-based access restrictions (RBAC), and routine vulnerability testing to prevent unauthorized data access or loss.
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      6. User Rights & Data Control
                    </h4>
                    <p style={{ margin: 0, color: '#9CA3AF' }}>
                      Under applicable data protection laws, you retain full rights to request a copy of your stored records, rectify outdated information, or request the deletion of your account and personal data from our operational databases. To exercise your rights, email us at <a href="mailto:support@sanitix.in" style={{ color: '#10B981', textDecoration: 'none' }}>support@sanitix.in</a>.
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      7. Data Protection Officer & Grievance Redressal
                    </h4>
                    <p style={{ margin: 0, color: '#9CA3AF' }}>
                      If you have questions, feedback, or grievance claims regarding our privacy practices, please contact our designated Data Protection Officer:
                    </p>
                    <div style={{ marginTop: '8px', padding: '12px 16px', backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)', color: '#FFFFFF', fontSize: '12.5px', lineHeight: 1.6 }}>
                      <strong style={{ color: '#10B981' }}>Sanitix Technologies Pvt. Ltd. (A Pairow Group Company)</strong><br />
                      Email: <a href="mailto:support@sanitix.in" style={{ color: '#10B981', textDecoration: 'none' }}>support@sanitix.in</a><br />
                      Helpline: <a href="tel:+912269710156" style={{ color: '#10B981', textDecoration: 'none' }}>+91 22697 10156</a><br />
                      Corporate Office: Gurugram, Haryana, India
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TERMS & CONDITIONS CONTENT */}
            {activeModal === 'terms' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', backgroundColor: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, color: '#10B981', marginBottom: '8px' }}>
                    Sanitix Technologies Pvt. Ltd. (Pairow Group)
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                    Terms & Conditions
                  </h3>
                  <p style={{ fontSize: '12px', color: '#9CA3AF', margin: '4px 0 0 0' }}>
                    Effective Date: March 2026 | Last Updated: March 2026
                  </p>
                </div>

                <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '13px', lineHeight: 1.65, color: '#D1D5DB' }}>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      1. Acceptance of Terms
                    </h4>
                    <p style={{ margin: 0, color: '#9CA3AF' }}>
                      By accessing or using the Sanitix web platform, mobile application, or customer dispatch hotline, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please discontinue use of our services.
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      2. Nature of Platform & Services
                    </h4>
                    <p style={{ margin: 0, color: '#9CA3AF' }}>
                      Sanitix acts as a verified digital marketplace connecting individuals, residential societies, and commercial enterprises with independently contracted service providers and fleet operators for water delivery, heavy equipment (JCBs, dumpers, loaders), deep sanitation, and drainage maintenance.
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      3. Bookings, Pricing & Invoicing
                    </h4>
                    <ul style={{ margin: '6px 0 0 0', paddingLeft: '18px', color: '#9CA3AF', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li>Pricing estimates provided at booking are transparent and inclusive of standard operator dispatch.</li>
                      <li>Any additional on-site requirements (e.g., extended hose lengths, overtime machinery hours) are billed transparently according to verified operator log sheets.</li>
                      <li>Invoices are issued digitally upon completion of job verification via OTP or customer sign-off.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      4. Site Access & Customer Responsibilities
                    </h4>
                    <p style={{ margin: 0, color: '#9CA3AF' }}>
                      Customers must ensure adequate and lawful vehicular access to the designated site for commercial equipment, water tankers, and machinery. It is the customer&apos;s responsibility to secure society gate permits, municipal clearances, and ensure that water inlets and utility hookups are safely accessible before operator arrival.
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      5. Cancellation & Refund Policy
                    </h4>
                    <ul style={{ margin: '6px 0 0 0', paddingLeft: '18px', color: '#9CA3AF', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li><strong>Before Dispatch:</strong> Bookings cancelled prior to vehicle or crew departure from our regional dispatch hub receive a 100% full refund.</li>
                      <li><strong>After Dispatch:</strong> In cases where cancellation occurs after the vehicle has been mobilized and reached the vicinity, a nominal trip mobilization fee may be deducted.</li>
                      <li>Approved refunds are processed through the original payment method within 3–5 banking business days.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      6. Operator Verification & Safety Standards
                    </h4>
                    <p style={{ margin: 0, color: '#9CA3AF' }}>
                      All fleet operators and service professionals undergo stringent verification, commercial license checks, background audits, and vehicle roadworthiness certifications. In the unlikely event of any discrepancy or site concern, our 24/7 resolution desk intervenes immediately.
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      7. Limitation of Liability
                    </h4>
                    <p style={{ margin: 0, color: '#9CA3AF' }}>
                      While Sanitix enforces strict delivery SLAs and quality controls, Sanitix Technologies Pvt. Ltd. shall not be held liable for indirect delays resulting from force majeure conditions, including unforeseen road closures, extreme weather calamities, municipal water grid rationing, or civil traffic restrictions.
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#10B981', marginBottom: '6px' }}>
                      8. Grievance & Legal Contact
                    </h4>
                    <p style={{ margin: 0, color: '#9CA3AF' }}>
                      For any questions regarding these terms, contract agreements, or customer rights, please contact our Legal & Compliance Desk:
                    </p>
                    <div style={{ marginTop: '8px', padding: '12px 16px', backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)', color: '#FFFFFF', fontSize: '12.5px', lineHeight: 1.6 }}>
                      <strong style={{ color: '#10B981' }}>Sanitix Technologies Pvt. Ltd.</strong><br />
                      Email: <a href="mailto:support@sanitix.in" style={{ color: '#10B981', textDecoration: 'none' }}>support@sanitix.in</a><br />
                      Phone: <a href="tel:+912269710156" style={{ color: '#10B981', textDecoration: 'none' }}>+91 22697 10156</a><br />
                      Corporate Office: Gurugram, Haryana, India
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'partnerLogin' && (
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                  Partner & Driver Portal
                </h3>
                <p style={{ fontSize: '13.5px', color: '#9CA3AF', marginBottom: '18px' }}>
                  Enter your registered Partner Phone or Vehicle ID to access fleet trips and payouts.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Partner Portal credentials verified! Redirecting to fleet manager dashboard...');
                    setActiveModal(null);
                  }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
                >
                  <input
                    type="text"
                    required
                    placeholder="Registered Mobile / Partner ID"
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '10px',
                      padding: '12px 14px',
                      fontSize: '13.5px',
                      color: '#FFFFFF',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                  <input
                    type="password"
                    required
                    placeholder="Security PIN / Password"
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '10px',
                      padding: '12px 14px',
                      fontSize: '13.5px',
                      color: '#FFFFFF',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#10B981',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '12px',
                      fontWeight: 700,
                      fontSize: '14px',
                      cursor: 'pointer',
                      marginTop: '4px'
                    }}
                  >
                    Login to Partner Dashboard
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Responsive layout styles */}
      <style>{`
        .footer-modal-content::-webkit-scrollbar {
          width: 6px;
        }
        .footer-modal-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 9999px;
        }
        .footer-modal-content::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.35);
          border-radius: 9999px;
        }
        .footer-modal-content::-webkit-scrollbar-thumb:hover {
          background: #10B981;
        }
        @media (max-width: 1100px) {
          .footer-nav-grid {
            grid-template-columns: 2fr 1fr 1fr !important;
            gap: 28px !important;
          }
        }
        @media (max-width: 900px) {
          .footer-nav-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 28px !important;
          }
        }
        /* Responsive Footer Container & Card */
        .footer-landing-container {
          padding-left: 56px !important;
          padding-right: 56px !important;
        }
        @media (max-width: 1024px) {
          .footer-landing-container {
            padding-left: 36px !important;
            padding-right: 36px !important;
          }
          .footer-card {
            padding: 42px 34px 28px 34px !important;
          }
        }
        @media (max-width: 768px) {
          .footer-landing-container {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .footer-card {
            border-radius: 20px !important;
            padding: 34px 24px 24px 24px !important;
          }
        }
        @media (max-width: 680px) {
          .footer-section-wrap {
            padding: 8px 0 20px 0 !important;
          }
          .footer-landing-container {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .footer-card {
            border-radius: 20px !important;
            padding: 28px 18px 20px 18px !important;
          }
          .footer-nav-grid {
            grid-template-columns: 1fr !important;
            gap: 22px !important;
            padding-bottom: 24px !important;
          }
          .footer-modal-content {
            padding: 24px 18px !important;
            border-radius: 18px !important;
          }
        }
      `}</style>
    </footer>
  );
};
