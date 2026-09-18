import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, X, Rocket, Shield, BarChart3 } from 'lucide-react';

interface PartnerCareersProps {
  onOpenBooking?: (service?: string) => void;
  isPartnerModalOpen?: boolean;
  onOpenPartnerModal?: () => void;
  onClosePartnerModal?: () => void;
}

export const PartnerCareers: React.FC<PartnerCareersProps> = ({
  isPartnerModalOpen: controlledIsOpen,
  onOpenPartnerModal,
  onClosePartnerModal
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isModalOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleOpenModal = () => {
    if (onOpenPartnerModal) {
      onOpenPartnerModal();
    } else {
      setInternalIsOpen(true);
    }
  };

  const handleCloseModal = () => {
    if (onClosePartnerModal) {
      onClosePartnerModal();
    } else {
      setInternalIsOpen(false);
    }
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, onClosePartnerModal]);

  // Support custom window event 'open-partner-modal'
  useEffect(() => {
    const handleCustomOpen = () => {
      handleOpenModal();
    };
    window.addEventListener('open-partner-modal', handleCustomOpen);
    return () => window.removeEventListener('open-partner-modal', handleCustomOpen);
  }, [onOpenPartnerModal]);

  const partnerBenefits = [
    'Get more bookings and regular customers',
    'Easy digital documentation and onboarding',
    'Guaranteed on-time direct payments',
    'Build your commercial brand with Sanitix trust'
  ];

  const careerHighlights = [
    'Build solutions that make a real difference.',
    'Work on ideas that create real impact.',
    'Grow your career while building something meaningful.'
  ];

  return (
    <section
      id="partner-careers"
      style={{
        padding: '0 0 8px 0',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div className="landing-container full-width-landing-container" style={{ padding: '0 56px' }}>

        {/* Side-by-Side: Partner on LEFT, Careers on RIGHT */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '24px',
            alignItems: 'stretch'
          }}
          className="partner-careers-grid"
        >

          {/* Partner Ecosystem Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="partner-career-card"
            style={{
              background: 'linear-gradient(135deg, #F0FAF5 0%, #E3F5ED 100%)',
              borderRadius: '24px',
              border: '1px solid #D5EFE2',
              padding: '34px 34px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px -5px rgba(11, 43, 34, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '290px'
            }}
          >
            {/* Subtle decorative background circle */}
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 168, 89, 0.12) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.08fr 0.92fr',
                gap: '20px',
                alignItems: 'center',
                height: '100%',
                position: 'relative',
                zIndex: 2
              }}
              className="dual-card-inner-grid"
            >
              {/* Left Column: Text + 4 Checklist Items + CTA */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  {/* Eyebrow badge */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '5px 13px',
                      borderRadius: '9999px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(0, 168, 89, 0.25)',
                      color: '#00A859',
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      marginBottom: '12px',
                      boxShadow: '0 2px 6px rgba(0, 168, 89, 0.06)'
                    }}
                  >
                    <span>PARTNER WITH SANITIX</span>
                  </div>

                  {/* Heading */}
                  <h2
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(22px, 1.85vw, 28px)',
                      fontWeight: 800,
                      color: '#0B2B22',
                      lineHeight: 1.2,
                      marginBottom: '14px',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Grow your business<br />with Sanitix
                  </h2>

                  {/* 4 Checklist Benefits */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    {partnerBenefits.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid rgba(0, 168, 89, 0.3)',
                            color: '#00A859',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: '0 2px 4px rgba(0, 168, 89, 0.08)'
                          }}
                        >
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span style={{ fontSize: '13px', color: '#374151', fontWeight: 600 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div>
                  <button
                    onClick={handleOpenModal}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '11px 24px',
                      backgroundColor: '#0B4D34',
                      color: '#FFFFFF',
                      borderRadius: '9999px',
                      border: 'none',
                      fontSize: '13.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(11, 77, 52, 0.28)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#073826';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(11, 77, 52, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0B4D34';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(11, 77, 52, 0.28)';
                    }}
                  >
                    <span>Join as a Partner</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* Right Column: Inset Partner Handshake Photo */}
              <div
                style={{
                  height: '100%',
                  minHeight: '240px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #D5EFE2',
                  boxShadow: '0 8px 24px rgba(11, 43, 34, 0.08)',
                  position: 'relative'
                }}
                className="dual-card-photo-box"
              >
                <img
                  src="/images/partner_handshake.webp"
                  alt="Sanitix Fleet Partner Handshake"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Careers Opportunities Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="partner-career-card"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F6FAF8 60%, #EAF7F1 100%)',
              borderRadius: '24px',
              border: '1px solid #E5ECE7',
              padding: '34px 34px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px -5px rgba(11, 43, 34, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '290px'
            }}
          >
            {/* Subtle decorative background circle */}
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 168, 89, 0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.08fr 0.92fr',
                gap: '20px',
                alignItems: 'center',
                height: '100%',
                position: 'relative',
                zIndex: 2
              }}
              className="dual-card-inner-grid"
            >
              {/* Left Column: Text & CTA */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  {/* Eyebrow */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '5px 13px',
                      borderRadius: '9999px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(0, 168, 89, 0.25)',
                      color: '#00A859',
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      marginBottom: '12px',
                      boxShadow: '0 2px 6px rgba(0, 168, 89, 0.06)'
                    }}
                  >
                    <span>CAREERS AT SANITIX</span>
                  </div>

                  {/* Heading */}
                  <h2
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(22px, 1.85vw, 28px)',
                      fontWeight: 800,
                      color: '#0B2B22',
                      lineHeight: 1.2,
                      marginBottom: '14px',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Build the future<br />with Sanitix
                  </h2>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#4B5B54',
                      lineHeight: 1.55,
                      marginBottom: '16px',
                      maxWidth: '290px'
                    }}
                  >
                    Join a passionate team that is transforming the way essential utility and sanitation services are delivered across India.
                  </p>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                    {careerHighlights.map((hl, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00A859', flexShrink: 0 }} />
                        <span style={{ fontSize: '12px', color: '#4B5563', fontWeight: 500 }}>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div>
                  <a
                    href="https://app.youform.com/forms/igsi7z7m"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '11px 24px',
                      backgroundColor: '#00A859',
                      color: '#FFFFFF',
                      borderRadius: '9999px',
                      border: 'none',
                      fontSize: '13.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(0, 168, 89, 0.3)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#00924d';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 168, 89, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#00A859';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 168, 89, 0.3)';
                    }}
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              {/* Right Column: Inset Team Photo */}
              <div
                style={{
                  height: '100%',
                  minHeight: '240px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #E5ECE7',
                  boxShadow: '0 8px 24px rgba(11, 43, 34, 0.08)',
                  position: 'relative'
                }}
                className="dual-card-photo-box"
              >
                <img
                  src="/images/careers_team.webp"
                  alt="Sanitix Careers Team"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Partner Onboarding Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay partner-modal-backdrop"
            onClick={handleCloseModal}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(6, 35, 25, 0.65)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '20px',
              boxSizing: 'border-box'
            }}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="partner-reference-modal"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '32px',
                width: '100%',
                maxWidth: '850px',
                minHeight: '580px',
                boxShadow: '0 25px 70px -12px rgba(0, 0, 0, 0.45)',
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: '1.14fr 0.86fr',
                overflow: 'hidden',
                WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                boxSizing: 'border-box'
              }}
            >
              {/* Top-Right Circular Close Button (X) */}
              <button
                onClick={handleCloseModal}
                aria-label="Close modal"
                className="partner-modal-close-btn"
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#111827',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                  transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                  zIndex: 30
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.25)';
                }}
              >
                <X size={18} strokeWidth={2.5} />
              </button>

              {/* Left Content Column */}
              <div
                style={{
                  padding: '32px 34px 28px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  boxSizing: 'border-box'
                }}
                className="partner-modal-left-content"
              >
                {/* Brand Logo */}
                <div style={{ margin: 0 }}>
                  <img
                    src="/images/sanitix_logo.webp"
                    alt="sanitiX"
                    style={{ height: '28px', width: 'auto', display: 'block' }}
                  />
                </div>

                {/* Pilot Program Badge */}
                <div style={{ margin: 0 }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '4px 11px',
                      borderRadius: '9999px',
                      backgroundColor: '#E8F9F0',
                      border: '1px solid rgba(0, 168, 89, 0.25)',
                      color: '#00A859',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      margin: 0
                    }}
                  >
                    <Rocket size={12} strokeWidth={2.5} />
                    <span>PILOT PROGRAM</span>
                  </div>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(22px, 2.1vw, 27px)',
                    fontWeight: 800,
                    color: '#0F172A',
                    lineHeight: 1.15,
                    letterSpacing: '-0.025em',
                    margin: 0
                  }}
                >
                  Become a Sanitix<br />Partner
                </h2>

                {/* Subtitle */}
                <p
                  className="partner-modal-subtitle"
                  style={{
                    fontSize: '12.5px',
                    color: '#475569',
                    lineHeight: 1.45,
                    margin: 0,
                    maxWidth: '360px'
                  }}
                >
                  Download the Sanitix Partner App to join our pilot program. Complete your KYC and vehicle details, and start accepting bookings in your city.
                </p>

                {/* Step 1 */}
                <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '12px', margin: 0 }}>
                  <div style={{ position: 'absolute', left: '15px', top: '32px', bottom: '-26px', width: '2px', backgroundColor: '#E2E8F0', zIndex: 0 }} />
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#E8F9F0',
                      color: '#00A859',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '13px',
                      flexShrink: 0,
                      border: '1px solid #C6F0D8',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    1
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', lineHeight: 1.25 }}>
                      Download the Partner App
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748B', lineHeight: 1.35, marginTop: '2px' }}>
                      Get the app from Google Play Store.
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '12px', margin: 0 }}>
                  <div style={{ position: 'absolute', left: '15px', top: '-14px', bottom: '-26px', width: '2px', backgroundColor: '#E2E8F0', zIndex: 0 }} />
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#E8F9F0',
                      color: '#00A859',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '13px',
                      flexShrink: 0,
                      border: '1px solid #C6F0D8',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    2
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', lineHeight: 1.25 }}>
                      Complete Your KYC &amp; Vehicle Details
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748B', lineHeight: 1.35, marginTop: '2px' }}>
                      Quick and paperless onboarding.
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '12px', margin: 0 }}>
                  <div style={{ position: 'absolute', left: '15px', top: '-14px', height: '20px', width: '2px', backgroundColor: '#E2E8F0', zIndex: 0 }} />
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#E8F9F0',
                      color: '#00A859',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '13px',
                      flexShrink: 0,
                      border: '1px solid #C6F0D8',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    3
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', lineHeight: 1.25 }}>
                      Start Accepting Bookings
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748B', lineHeight: 1.35, marginTop: '2px' }}>
                      Receive verified customer requests.
                    </div>
                  </div>
                </div>

                {/* Google Play Button */}
                <div style={{ margin: 0 }} className="partner-modal-cta-wrapper">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="partner-modal-cta-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: '#14251D',
                      color: '#FFFFFF',
                      borderRadius: '14px',
                      padding: '12px 20px',
                      textDecoration: 'none',
                      width: '60%',
                      boxSizing: 'border-box',
                      boxShadow: '0 8px 24px rgba(11, 43, 34, 0.28)',
                      transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                      margin: 0
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(11, 43, 34, 0.38)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(11, 43, 34, 0.28)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                        <path d="M2.5 1.5L12 11 2.5 20.5C2.2 20.2 2.5 20.5 2.5 20.5C2.2 20.2 2 19.7 2 19.2V2.8C2 2.3 2.2 1.8 2.5 1.5Z" fill="#2196F3" />
                        <path d="M15.5 7.5L13 11 15.5 14.5 18.5 12.8C19.3 12.3 19.3 11.7 18.5 11.2L15.5 7.5Z" fill="#FFC107" />
                        <path d="M2.5 20.5L12 11 15.5 14.5 5 20.5C4.2 21 3.2 21 2.5 20.5Z" fill="#4CAF50" />
                        <path d="M2.5 1.5C3.2 1 4.2 1 5 1.5L15.5 7.5 12 11 2.5 1.5Z" fill="#F44336" />
                      </svg>
                      <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9CA3AF', lineHeight: 1, marginBottom: '2px' }}>
                          GET IT ON
                        </div>
                        <div style={{ fontSize: '16px', fontWeight: 700, lineHeight: 1.15, fontFamily: 'var(--font-heading)' }}>
                          Google Play
                        </div>
                      </div>
                    </div>
                    <ArrowRight size={20} color="#FFFFFF" strokeWidth={2.2} />
                  </a>
                </div>

                {/* Trust Badges */}
                <div
                  className="partner-modal-trust-badges"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    gap: '4px',
                    margin: 0
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '5px',
                        backgroundColor: '#E8F9F0',
                        color: '#00A859',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Shield size={11} strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#334155', whiteSpace: 'nowrap' }}>
                      Verified bookings
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '5px',
                        backgroundColor: '#E8F9F0',
                        color: '#00A859',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '11px',
                        flexShrink: 0
                      }}
                    >
                      ₹
                    </div>
                    <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#334155', whiteSpace: 'nowrap' }}>
                      Direct payments
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '5px',
                        backgroundColor: '#E8F9F0',
                        color: '#00A859',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <BarChart3 size={11} strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#334155', whiteSpace: 'nowrap' }}>
                      Grow your business
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Media Column */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  minHeight: '100%',
                  overflow: 'hidden',
                  borderRadius: '0 32px 32px 0',
                  WebkitMaskImage: '-webkit-radial-gradient(white, black)'
                }}
                className="partner-reference-photo"
              >
                <img
                  src="/images/partner_modal_driver.webp"
                  alt="Sanitix Partner"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '0 32px 32px 0',
                    display: 'block'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* 13" Laptops & Compact Screens (1101px to 1366px) */
        @media (min-width: 1101px) and (max-width: 1366px) {
          .partner-career-card {
            padding: 24px 22px !important;
            min-height: 270px !important;
          }
          .dual-card-inner-grid {
            grid-template-columns: 1.28fr 0.82fr !important;
            gap: 16px !important;
            align-items: center !important;
          }
          .dual-card-inner-grid h2 {
            font-size: 21px !important;
            line-height: 1.18 !important;
            margin-bottom: 10px !important;
          }
          .dual-card-inner-grid p {
            font-size: 11.5px !important;
            line-height: 1.4 !important;
            margin-bottom: 10px !important;
          }
          .dual-card-inner-grid span {
            font-size: 11.5px !important;
          }
          .dual-card-inner-grid button {
            padding: 9px 20px !important;
            font-size: 12.5px !important;
          }
          .dual-card-photo-box {
            min-height: 210px !important;
            height: 210px !important;
            max-height: 230px !important;
            border-radius: 16px !important;
          }
        }

        @media (max-width: 1100px) {
          .partner-careers-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 1100px) and (min-width: 681px) {
          .partner-career-card {
            padding: 26px 28px !important;
            min-height: auto !important;
          }
          .dual-card-inner-grid {
            grid-template-columns: 1.35fr 0.9fr !important;
            gap: 24px !important;
            align-items: center !important;
          }
          .dual-card-photo-box {
            min-height: 190px !important;
            height: 190px !important;
            max-height: 200px !important;
          }
        }
        @media (max-width: 680px) {
          .partner-career-card {
            padding: 22px 18px !important;
            border-radius: 20px !important;
            min-height: auto !important;
          }
          .dual-card-inner-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .dual-card-photo-box {
            display: none !important;
          }
          .partner-careers-modal {
            padding: 24px 18px !important;
            border-radius: 20px !important;
          }
        }

        @media (max-width: 768px) {
          .partner-modal-backdrop {
            padding: 12px !important;
          }
          .partner-reference-modal {
            grid-template-columns: 1fr !important;
            max-width: 100% !important;
            width: 100% !important;
            min-height: auto !important;
            max-height: 94vh !important;
            overflow-y: auto !important;
            overflow-x: hidden !important;
            border-radius: 24px !important;
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.35) !important;
          }
          .partner-reference-photo {
            display: none !important;
          }
          .partner-modal-left-content {
            padding: 22px 18px 18px 18px !important;
            height: auto !important;
            min-width: 0 !important;
            gap: 12px !important;
            justify-content: flex-start !important;
            box-sizing: border-box !important;
          }
          .partner-modal-close-btn {
            top: 14px !important;
            right: 14px !important;
            width: 34px !important;
            height: 34px !important;
          }
          .partner-modal-subtitle {
            max-width: 100% !important;
            font-size: 12px !important;
            line-height: 1.45 !important;
            word-break: normal !important;
            overflow-wrap: break-word !important;
          }
          .partner-modal-cta-wrapper {
            display: flex !important;
            justify-content: center !important;
            width: 100% !important;
          }
          .partner-modal-cta-btn {
            margin-left: auto !important;
            margin-right: auto !important;
            width: 80% !important;
            max-width: 280px !important;
          }
          .partner-modal-trust-badges {
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 8px 12px !important;
            width: 100% !important;
            padding-top: 4px !important;
          }
          .partner-modal-trust-badges > div {
            flex-shrink: 0 !important;
          }
          .partner-modal-trust-badges span {
            font-size: 10.5px !important;
            white-space: nowrap !important;
          }
        }
      `}</style>
    </section>
  );
};
