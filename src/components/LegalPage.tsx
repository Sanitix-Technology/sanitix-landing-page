import React, { useEffect } from 'react';
import { legalDocuments, type LegalDocument } from '../data/legalData';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onBackHome: () => void;
  onNavigateTo?: (type: 'privacy' | 'terms') => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onBackHome }) => {
  const currentDoc: LegalDocument = legalDocuments[type] || legalDocuments.terms;

  const pageTitle = type === 'terms' ? 'TERMS OF USE' : 'PRIVACY POLICY';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    const titles = {
      terms: 'Terms of Use — sanitiX',
      privacy: 'Privacy Policy — sanitiX'
    };
    document.title = titles[type] || 'Legal — sanitiX';

    return () => {
      document.title = 'sanitiX — Essential Services. One Platform. Zero Hassle.';
    };
  }, [type]);

  return (
    <div className="legal-page-root" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#282C3F', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #EAEAEA',
          padding: '14px 0'
        }}
      >
        <div
          className="legal-header-inner"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onBackHome();
              }}
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}
            >
              <img
                src="/images/sanitix_logo.webp"
                alt="sanitiX Logo"
                className="legal-nav-logo"
                style={{ height: '30px', width: 'auto', objectFit: 'contain' }}
              />
            </a>

            <div className="legal-nav-divider" style={{ width: '1px', height: '18px', backgroundColor: '#D1D5DB', flexShrink: 0 }} />

            <span
              className="legal-nav-title"
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#4B5563',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {pageTitle}
            </span>
          </div>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBackHome();
            }}
            className="legal-nav-back"
            style={{
              fontSize: '13.5px',
              fontWeight: 600,
              color: '#4B5563',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'all 0.08s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#00A859';
              e.currentTarget.style.transform = 'translateX(-3px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#4B5563';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.96)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translateX(-3px)';
            }}
          >
            <span>&larr;</span>
            <span className="legal-back-text">Back to Home</span>
          </a>
        </div>
      </header>

      <main
        className="legal-main-body"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '36px 20px 80px 20px',
          wordBreak: 'break-word',
          overflowWrap: 'break-word'
        }}
      >
        <div
          className="legal-last-updated"
          style={{
            fontSize: '13.5px',
            color: '#4B5563',
            marginBottom: '18px',
            fontWeight: 500
          }}
        >
          Last updated on {currentDoc.lastUpdated}
        </div>

        <div className="legal-preamble" style={{ marginBottom: '26px' }}>
          {currentDoc.preamble.map((p, idx) => (
            <p
              key={idx}
              style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: '#282C3F',
                marginBottom: '12px',
                fontWeight: 400
              }}
            >
              {p}
            </p>
          ))}
        </div>

        <div className="legal-sections-flow">
          {currentDoc.sections.map((section) => (
            <div key={section.id} className="legal-section-item" style={{ marginBottom: '26px' }}>
              <h2
                className="legal-section-heading"
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#111827',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  margin: '0 0 10px 0',
                  lineHeight: 1.4
                }}
              >
                {section.number ? `${section.number}. ` : ''}{section.title}
              </h2>

              {section.paragraphs && section.paragraphs.map((p, pIdx) => {
                const isEmail = p.startsWith('Email:');
                const isPhone = p.startsWith('Phone:') || p.startsWith('Customer Support:');
                const isWebsite = p.startsWith('Website:');

                if (isEmail) {
                  const emailVal = p.replace('Email:', '').trim();
                  return (
                    <p key={pIdx} style={{ fontSize: '14px', lineHeight: 1.7, color: '#282C3F', marginBottom: '8px' }}>
                      <strong>Email: </strong>
                      <a href={`mailto:${emailVal}`} style={{ color: '#00A859', textDecoration: 'none' }}>
                        {emailVal}
                      </a>
                    </p>
                  );
                }

                if (isPhone) {
                  const parts = p.split(':');
                  const label = parts[0];
                  const phoneVal = parts.slice(1).join(':').trim();
                  return (
                    <p key={pIdx} style={{ fontSize: '14px', lineHeight: 1.7, color: '#282C3F', marginBottom: '8px' }}>
                      <strong>{label}: </strong>
                      <a href={`tel:${phoneVal.replace(/\s+/g, '')}`} style={{ color: '#00A859', textDecoration: 'none' }}>
                        {phoneVal}
                      </a>
                    </p>
                  );
                }

                if (isWebsite) {
                  const siteVal = p.replace('Website:', '').trim();
                  return (
                    <p key={pIdx} style={{ fontSize: '14px', lineHeight: 1.7, color: '#282C3F', marginBottom: '8px' }}>
                      <strong>Website: </strong>
                      <a href="https://sanitix.in" target="_blank" rel="noreferrer" style={{ color: '#00A859', textDecoration: 'none' }}>
                        {siteVal}
                      </a>
                    </p>
                  );
                }

                return (
                  <p
                    key={pIdx}
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.7,
                      color: '#282C3F',
                      marginBottom: '10px',
                      fontWeight: 400
                    }}
                  >
                    {p}
                  </p>
                );
              })}

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul
                  style={{
                    paddingLeft: '20px',
                    margin: '0 0 12px 0',
                    listStyleType: 'disc'
                  }}
                >
                  {section.bulletPoints.map((point, ptIdx) => (
                    <li
                      key={ptIdx}
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.7,
                        color: '#282C3F',
                        marginBottom: '6px'
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections && section.subsections.length > 0 && (
                <div style={{ marginTop: '10px' }}>
                  {section.subsections.map((sub, sIdx) => (
                    <div key={sIdx} style={{ marginBottom: '10px' }}>
                      <h3
                        style={{
                          fontSize: '13.5px',
                          fontWeight: 700,
                          color: '#1F2937',
                          margin: '0 0 6px 0'
                        }}
                      >
                        {sub.title}
                      </h3>
                      {sub.paragraphs && sub.paragraphs.map((subP, subPIdx) => (
                        <p key={subPIdx} style={{ fontSize: '14px', lineHeight: 1.7, color: '#282C3F', marginBottom: '8px' }}>
                          {subP}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <style>{`
        @media (max-width: 640px) {
          .legal-header-inner {
            padding: 0 14px !important;
            gap: 8px !important;
          }
          .legal-nav-logo {
            height: 25px !important;
          }
          .legal-nav-divider {
            height: 14px !important;
            margin: 0 !important;
          }
          .legal-nav-title {
            font-size: 11px !important;
            letter-spacing: 0.04em !important;
          }
          .legal-nav-back {
            font-size: 12px !important;
          }
          .legal-back-text {
            display: inline !important;
          }
          .legal-main-body {
            padding: 20px 14px 60px 14px !important;
          }
          .legal-last-updated {
            font-size: 12.5px !important;
            margin-bottom: 14px !important;
          }
          .legal-preamble p,
          .legal-section-item p,
          .legal-section-item li {
            font-size: 13.5px !important;
            line-height: 1.65 !important;
            margin-bottom: 8px !important;
          }
          .legal-section-heading {
            font-size: 13px !important;
            margin-bottom: 8px !important;
          }
          .legal-section-item {
            margin-bottom: 20px !important;
          }
        }

        @media (max-width: 380px) {
          .legal-nav-title {
            display: none !important;
          }
          .legal-nav-divider {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
