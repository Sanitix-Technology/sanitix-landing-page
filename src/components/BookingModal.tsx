import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Zap, ShieldCheck, Bell, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="modal-overlay"
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 18, 14, 0.72)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '16px',
            boxSizing: 'border-box'
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 12 }}
            transition={{ type: 'spring', damping: 28, stiffness: 340 }}
            onClick={(e) => e.stopPropagation()}
            className="sanitix-booking-modal"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '34px 34px 22px 34px',
              width: '100%',
              maxWidth: '550px',
              boxShadow: '0 24px 60px -10px rgba(0, 0, 0, 0.38), 0 0 0 1px rgba(0, 0, 0, 0.04)',
              position: 'relative',
              boxSizing: 'border-box',
              textAlign: 'left'
            }}
          >
            {/* Top-Right Circular Close Button (X) */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#334155',
                cursor: 'pointer',
                transition: 'all 0.16s ease',
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E2E8F0';
                e.currentTarget.style.color = '#0F172A';
                e.currentTarget.style.transform = 'scale(1.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F1F5F9';
                e.currentTarget.style.color = '#334155';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <X size={17} strokeWidth={2.5} />
            </button>

            {/* Official Brand Logo */}
            <div style={{ marginBottom: '14px' }}>
              <img
                src="/images/sanitix_logo.webp"
                alt="sanitiX"
                style={{ height: '28px', width: 'auto', display: 'block' }}
              />
            </div>

            {/* "COMING SOON" Tech Badge */}
            <div style={{ marginBottom: '12px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  backgroundColor: '#E8F9F0',
                  border: '1px solid rgba(0, 168, 89, 0.28)',
                  color: '#00A859',
                  fontSize: '10.5px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                <Clock size={12} strokeWidth={2.5} />
                <span>COMING SOON</span>
              </div>
            </div>

            {/* Main Headline */}
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(27px, 3.1vw, 36px)',
                fontWeight: 900,
                color: '#071A12',
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                margin: '0 0 10px 0'
              }}
            >
              Website Booking<br />Coming Soon!
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '13px',
                color: '#334155',
                lineHeight: 1.5,
                margin: '0 0 18px 0'
              }}
            >
              We’re currently rolling out website bookings across cities. For now, you can book all services instantly through the Sanitix mobile app.
            </p>

            {/* 3-Feature Card Box (Crisp Precision Layout) */}
            <div
              style={{
                backgroundColor: '#F8FAF9',
                border: '1px solid #DCECE2',
                borderRadius: '14px',
                padding: '16px 10px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                marginBottom: '20px',
                boxSizing: 'border-box'
              }}
              className="booking-modal-features-grid"
            >
              {/* Feature 1: Faster & Easier */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '0 8px',
                  borderRight: '1px solid #E2EEE7'
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: '#E8F9F0',
                    color: '#00A859',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '8px',
                    flexShrink: 0
                  }}
                >
                  <Zap size={17} strokeWidth={2.5} fill="#00A859" />
                </div>
                <div
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 800,
                    color: '#0F172A',
                    lineHeight: 1.2,
                    marginBottom: '4px'
                  }}
                >
                  Faster & Easier
                </div>
                <div
                  style={{
                    fontSize: '10.5px',
                    color: '#64748B',
                    lineHeight: 1.35
                  }}
                >
                  Book any service in just a few taps
                </div>
              </div>

              {/* Feature 2: Safe & Secure */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '0 8px',
                  borderRight: '1px solid #E2EEE7'
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: '#E8F9F0',
                    color: '#00A859',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '8px',
                    flexShrink: 0
                  }}
                >
                  <ShieldCheck size={17} strokeWidth={2.5} />
                </div>
                <div
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 800,
                    color: '#0F172A',
                    lineHeight: 1.2,
                    marginBottom: '4px'
                  }}
                >
                  Safe & Secure
                </div>
                <div
                  style={{
                    fontSize: '10.5px',
                    color: '#64748B',
                    lineHeight: 1.35
                  }}
                >
                  Verified providers and secure payments
                </div>
              </div>

              {/* Feature 3: Real-time Updates */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '0 8px'
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: '#E8F9F0',
                    color: '#00A859',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '8px',
                    flexShrink: 0
                  }}
                >
                  <Bell size={17} strokeWidth={2.5} />
                </div>
                <div
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 800,
                    color: '#0F172A',
                    lineHeight: 1.2,
                    marginBottom: '4px'
                  }}
                >
                  Real-time Updates
                </div>
                <div
                  style={{
                    fontSize: '10.5px',
                    color: '#64748B',
                    lineHeight: 1.35
                  }}
                >
                  Track your service from booking to completion
                </div>
              </div>
            </div>

            {/* CTA Section Header */}
            <div style={{ marginBottom: '12px' }}>
              <div
                style={{
                  fontSize: '14.5px',
                  fontWeight: 800,
                  color: '#0F172A',
                  lineHeight: 1.2,
                  marginBottom: '2px'
                }}
              >
                Download the Sanitix App
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: '#64748B',
                  lineHeight: 1.35
                }}
              >
                Get the app now and book any service instantly.
              </div>
            </div>

            {/* App Store Buttons Row (2 Columns) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '16px'
              }}
              className="booking-modal-buttons-row"
            >
              {/* Google Play Button */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '10px 15px',
                  textDecoration: 'none',
                  boxSizing: 'border-box',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.22)',
                  transition: 'transform 0.16s ease, box-shadow 0.16s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(15, 23, 42, 0.32)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(15, 23, 42, 0.22)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="21" height="21" viewBox="0 0 22 22" fill="none">
                    <path d="M2.5 1.5L12 11 2.5 20.5C2.2 20.2 2.5 20.5 2.5 20.5C2.2 20.2 2 19.7 2 19.2V2.8C2 2.3 2.2 1.8 2.5 1.5Z" fill="#2196F3" />
                    <path d="M15.5 7.5L13 11 15.5 14.5 18.5 12.8C19.3 12.3 19.3 11.7 18.5 11.2L15.5 7.5Z" fill="#FFC107" />
                    <path d="M2.5 20.5L12 11 15.5 14.5 5 20.5C4.2 21 3.2 21 2.5 20.5Z" fill="#4CAF50" />
                    <path d="M2.5 1.5C3.2 1 4.2 1 5 1.5L15.5 7.5 12 11 2.5 1.5Z" fill="#F44336" />
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '7.5px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94A3B8', lineHeight: 1, marginBottom: '2px' }}>GET IT ON</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, lineHeight: 1.15, fontFamily: 'var(--font-heading)' }}>Google Play</div>
                  </div>
                </div>
                <ArrowRight size={16} color="#FFFFFF" strokeWidth={2.2} />
              </a>

              {/* App Store Button */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '10px 15px',
                  textDecoration: 'none',
                  boxSizing: 'border-box',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.22)',
                  transition: 'transform 0.16s ease, box-shadow 0.16s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(15, 23, 42, 0.32)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(15, 23, 42, 0.22)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="19" height="21" viewBox="0 0 20 22" fill="white">
                    <path d="M17.05 17.5C16.25 18.65 15.4 19.8 14.1 19.8C12.8 19.8 12.4 19.1 10.9 19.1C9.4 19.1 8.9 19.8 7.65 19.8C6.4 19.8 5.5 18.6 4.65 17.45C3.1 15.2 1.9 11.1 3.5 8.35C4.35 6.9 5.8 6.05 7.35 6.0C8.55 5.98 9.65 6.8 10.35 6.8C11.05 6.8 12.4 5.83 13.8 5.97C14.4 5.99 16.05 6.2 17.1 7.75C17 7.8 15.15 8.85 15.2 11.1C15.25 13.75 17.5 14.65 17.55 14.68C17.5 14.85 17.1 16.15 17.05 17.5ZM13.5 3.5C14.1 2.75 14.55 1.7 14.45 0.65C13.55 0.68 12.45 1.25 11.8 2.0C11.2 2.65 10.7 3.72 10.85 4.75C11.85 4.82 12.9 4.24 13.5 3.5Z" />
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '7.5px', letterSpacing: '0.04em', color: '#94A3B8', lineHeight: 1, marginBottom: '2px' }}>Download on the</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, lineHeight: 1.15, fontFamily: 'var(--font-heading)' }}>App Store</div>
                  </div>
                </div>
                <ArrowRight size={16} color="#FFFFFF" strokeWidth={2.2} />
              </a>
            </div>

            {/* Subtle Divider */}
            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: '#E5E9EB',
                marginBottom: '12px'
              }}
            />

            {/* Bottom Professional Status Note: NO HEART, clean tech indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: '#64748B',
                fontSize: '11.5px',
                fontWeight: 600,
                letterSpacing: '0.02em'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#00A859',
                  display: 'inline-block'
                }}
              />
              <span>Same Services. Closer to You.</span>
            </div>

            <style>{`
              @media (max-width: 520px) {
                .sanitix-booking-modal {
                  padding: 26px 18px 16px 18px !important;
                  border-radius: 20px !important;
                }
                .booking-modal-buttons-row {
                  grid-template-columns: 1fr !important;
                  gap: 10px !important;
                }
                .booking-modal-features-grid {
                  padding: 12px 4px !important;
                }
                .booking-modal-features-grid > div {
                  padding: 0 4px !important;
                }
              }
            `}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
