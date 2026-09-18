import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, HelpCircle, Phone, Droplet, Truck, Wrench, ShieldCheck } from 'lucide-react';

interface NotFoundViewProps {
  onBackHome: () => void;
  onSelectService?: (serviceName: string) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onBackHome, onSelectService }) => {
  useEffect(() => {
    // Dynamic page title (#4)
    document.title = '404 — Page Not Found | sanitiX';
    return () => {
      document.title = 'sanitiX — Essential Services. One Platform. Zero Hassle.';
    };
  }, []);

  const quickLinks = [
    { name: 'Water Tanker Supply', icon: Droplet },
    { name: 'Commercial Transport', icon: Truck },
    { name: 'JCB & Heavy Machinery', icon: Wrench },
    { name: 'Septic & Sanitation', icon: ShieldCheck },
  ];

  return (
    <div style={{
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      backgroundColor: '#FAFCFA'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: '620px',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          border: '1px solid #E5ECE7',
          padding: '48px 36px',
          textAlign: 'center',
          boxShadow: '0 20px 45px -10px rgba(6, 35, 25, 0.08)'
        }}
      >
        {/* Official Brand Logo */}
        <div style={{ marginBottom: '20px' }}>
          <img 
            src="/images/sanitix_logo.webp" 
            alt="sanitiX" 
            style={{ height: '36px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} 
          />
        </div>

        {/* 404 Badge */}
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '84px',
          fontWeight: 900,
          color: '#00A859',
          lineHeight: 1,
          marginBottom: '12px',
          letterSpacing: '-0.04em'
        }}>
          404
        </div>

        <span className="badge-tag" style={{ marginBottom: '16px' }}>
          PAGE NOT FOUND
        </span>

        <h1 style={{
          fontSize: '28px',
          fontWeight: 800,
          color: '#0D1E16',
          marginBottom: '12px'
        }}>
          Looks like this route went off-grid
        </h1>

        <p style={{
          fontSize: '15px',
          color: '#4B5563',
          lineHeight: 1.6,
          marginBottom: '28px',
          maxWidth: '480px',
          margin: '0 auto 28px auto'
        }}>
          The page or service URL you're looking for does not exist or has been moved. Explore our core verified utility services below:
        </p>

        {/* Quick Service Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '32px' }} className="notfound-shortcuts">
          {quickLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => {
                onBackHome();
                if (onSelectService) {
                  setTimeout(() => onSelectService(link.name), 100);
                }
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 14px',
                borderRadius: '12px',
                backgroundColor: '#F0FDF4',
                border: '1px solid #DCFCE7',
                color: '#062319',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#DCFCE7';
                e.currentTarget.style.borderColor = '#86EFAC';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#F0FDF4';
                e.currentTarget.style.borderColor = '#DCFCE7';
              }}
            >
              <link.icon size={16} color="#00A859" />
              <span>{link.name}</span>
            </button>
          ))}
        </div>

        {/* Actions (#6 Clickable Email, #17 Clickable Phone) */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={onBackHome}
            className="btn-primary"
            style={{ padding: '14px 28px', fontSize: '15px' }}
          >
            <Home size={17} /> Return to Homepage
          </button>

          <a
            href="tel:+911244509900"
            className="btn-secondary"
            style={{ padding: '14px 22px', fontSize: '15px' }}
          >
            <Phone size={17} color="#00A859" /> Call Support
          </a>

          <a
            href="mailto:support@sanitix.in"
            className="btn-secondary"
            style={{ padding: '14px 22px', fontSize: '15px' }}
          >
            <HelpCircle size={17} color="#00A859" /> Email Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};
