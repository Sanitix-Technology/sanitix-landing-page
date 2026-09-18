import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, FileText, CalendarCheck, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: 1,
      icon: FileSearch,
      title: 'Select Service',
      line1: 'Choose the service',
      line2: 'you need'
    },
    {
      num: 2,
      icon: FileText,
      title: 'Enter Details',
      line1: 'Add location, date',
      line2: 'and requirements'
    },
    {
      num: 3,
      icon: CalendarCheck,
      title: 'Confirm Booking',
      line1: 'Review and confirm',
      line2: 'your booking'
    },
    {
      num: 4,
      icon: CheckCircle2,
      title: 'Service Completed',
      line1: 'Relax while we take',
      line2: 'care of the rest'
    }
  ];

  return (
    <section
      id="how-it-works"
      style={{
        padding: '0',
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="landing-container full-width-landing-container" style={{ padding: '0 56px' }}>

        <div
          className="how-it-works-row"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            width: '100%',
            position: 'relative'
          }}
        >
          {/* Step Flow Container */}
          <div
            className="how-it-works-banner"
            style={{
              position: 'relative',
              background: 'linear-gradient(135deg, #051d15 0%, #062319 60%, #072a1e 100%)',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px -15px rgba(4, 23, 17, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxSizing: 'border-box'
            }}
          >
            {/* Upper-Left Label */}
            <div className="how-it-works-header-tag" style={{ marginBottom: '8px' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: '#34D399',
                  textTransform: 'uppercase'
                }}
              >
                HOW IT WORKS
              </span>
            </div>

            {/* Large Main Heading */}
            <h2
              className="how-it-works-heading"
              style={{
                fontSize: '28px',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.25,
                marginBottom: '32px'
              }}
            >
              Book your service in 4 simple steps
            </h2>

            {/* Four Steps Flow */}
            <div
              className="steps-horizontal-grid"
              style={{
                display: 'grid',
                position: 'relative'
              }}
            >
              {steps.map((step, idx) => (
                <React.Fragment key={step.num}>
                  <motion.div
                    className="how-it-works-step-item"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {/* Horizontal Dashed Arrow Connector Line to Next Step (Desktop & Tablet >= 681px) */}
                    {idx < 3 && (
                      <div
                        className="steps-connector-arrow desktop-connector"
                        aria-hidden="true"
                      >
                        <svg width="100%" height="14" style={{ overflow: 'visible', display: 'block' }}>
                          <defs>
                            <marker
                              id={`step-arrow-${step.num}`}
                              viewBox="0 0 10 10"
                              refX="7"
                              refY="5"
                              markerWidth="6"
                              markerHeight="6"
                              orient="auto"
                            >
                              <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="#34D399" />
                            </marker>
                          </defs>
                          <line
                            x1="0"
                            y1="7"
                            x2="100%"
                            y2="7"
                            stroke="rgba(52, 211, 153, 0.65)"
                            strokeWidth="1.5"
                            strokeDasharray="3.5 3.5"
                            markerEnd={`url(#step-arrow-${step.num})`}
                          />
                        </svg>
                      </div>
                    )}

                    {/* Step Circular Icon with Lower-Left Number Badge */}
                    <div className="how-it-works-icon-wrapper" style={{ position: 'relative', marginBottom: '16px', width: '56px', height: '56px' }}>

                      {/* Main Icon Circle */}
                      <div
                        className="how-it-works-icon-circle"
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1.5px solid rgba(52, 211, 153, 0.38)',
                          color: '#34D399',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(6px)',
                          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25)',
                          transition: 'transform 0.2s ease, border-color 0.2s ease'
                        }}
                      >
                        <step.icon size={26} strokeWidth={1.9} />
                      </div>

                      {/* Small Numbered Green Circle attached to Lower-Left */}
                      <span
                        className="how-it-works-badge"
                        style={{
                          position: 'absolute',
                          bottom: '-2px',
                          left: '-2px',
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: '#00A859',
                          color: '#FFFFFF',
                          fontSize: '11px',
                          fontWeight: 800,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.4)'
                        }}
                      >
                        {step.num}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3
                      className="how-it-works-step-title"
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        marginBottom: '6px',
                        textAlign: 'center',
                        lineHeight: 1.3
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p
                      className="how-it-works-step-desc"
                      style={{
                        fontSize: '13px',
                        color: '#9CA3AF',
                        lineHeight: 1.4,
                        textAlign: 'center',
                        margin: 0
                      }}
                    >
                      {step.line1}
                      <br className="step-br" />
                      {step.line2}
                    </p>
                  </motion.div>

                  {/* Vertical Dotted Arrow Connector (Mobile ONLY <= 680px) */}
                  {idx < 3 && (
                    <div className="mobile-step-arrow-connector" aria-hidden="true">
                      <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="10"
                          y1="2"
                          x2="10"
                          y2="22"
                          stroke="#34D399"
                          strokeOpacity="0.8"
                          strokeWidth="2"
                          strokeDasharray="3 3.5"
                          strokeLinecap="round"
                        />
                        <polygon points="6,21 10,30 14,21" fill="#34D399" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Visual Media Column */}
          <div
            className="how-it-works-right-col"
            style={{
              position: 'relative',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              flex: '0 0 auto',
              zIndex: 2
            }}
          >
            <img
              src="/images/how_it_works_technician.webp"
              alt="Sanitix service professional"
              className="how-it-works-img"
              style={{
                height: '100%',
                width: 'auto',
                objectFit: 'contain',
                objectPosition: 'bottom left',
                display: 'block'
              }}
            />
          </div>

        </div>
      </div>

      {/* Responsive Rules */}
      <style>{`
        /* Default CSS Variables for Desktop (min-width: 1081px) */
        .steps-horizontal-grid {
          --circle-size: 56px;
          --gap-size: 40px;
        }
        .desktop-connector {
          position: absolute;
          top: calc(var(--circle-size) / 2);
          left: calc(50% + (var(--circle-size) / 2) + 6px);
          width: calc(100% + var(--gap-size) - var(--circle-size) - 14px);
          height: 14px;
          transform: translateY(-50%);
          pointer-events: none;
          z-index: 0;
          display: block;
        }
        .mobile-step-arrow-connector {
          display: none;
        }

        /* Desktop & Large Screen Proportions */
        @media (min-width: 1280px) {
          :root {
            --hiw-height: clamp(306px, 19vw, 350px);
          }
          .how-it-works-row {
            display: flex !important;
            align-items: flex-end !important;
            width: 100% !important;
            max-width: 100% !important;
            gap: 0 !important;
            position: relative !important;
            box-sizing: border-box !important;
          }
          .how-it-works-banner {
            flex: 1 1 auto !important;
            width: auto !important;
            min-width: 0 !important;
            height: var(--hiw-height) !important;
            padding: clamp(28px, 2.2vw, 40px) clamp(24px, 2.4vw, 48px) !important;
            border-radius: 28px !important;
            box-sizing: border-box !important;
            display: flex !important;
            flex-direction: column !important;
            justifyContent: center !important;
          }
          .how-it-works-heading {
            font-size: clamp(22px, 1.8vw, 30px) !important;
            margin-bottom: clamp(18px, 1.8vw, 32px) !important;
            white-space: nowrap !important;
          }
          .steps-horizontal-grid {
            --circle-size: clamp(46px, 3.2vw, 58px) !important;
            --gap-size: clamp(10px, 1.6vw, 36px) !important;
            display: grid !important;
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            gap: var(--gap-size) !important;
            width: 100% !important;
          }
          .desktop-connector {
            display: block !important;
            top: calc(var(--circle-size) / 2) !important;
            left: calc(50% + (var(--circle-size) / 2) + 5px) !important;
            width: calc(100% + var(--gap-size) - var(--circle-size) - 10px) !important;
          }
          .how-it-works-icon-wrapper {
            width: var(--circle-size) !important;
            height: var(--circle-size) !important;
            margin-bottom: clamp(10px, 1vw, 16px) !important;
          }
          .how-it-works-icon-circle {
            width: var(--circle-size) !important;
            height: var(--circle-size) !important;
          }
          .how-it-works-icon-circle svg {
            width: clamp(22px, 1.6vw, 26px) !important;
            height: clamp(22px, 1.6vw, 26px) !important;
          }
          .how-it-works-step-title {
            font-size: clamp(13px, 1vw, 16.5px) !important;
            margin-bottom: 5px !important;
            white-space: nowrap !important;
          }
          .how-it-works-step-desc {
            font-size: clamp(11px, 0.8vw, 13px) !important;
            line-height: 1.4 !important;
          }
          /* 🔒 Synchronized Height: matches banner height exactly */
          .how-it-works-right-col {
            display: flex !important;
            flex: 0 0 auto !important;
            height: var(--hiw-height) !important;
            width: auto !important;
            margin-left: clamp(-54px, -3.2vw, -44px) !important;
            margin-right: 0 !important;
            left: 0 !important;
            top: 0 !important;
            z-index: 2 !important;
          }
          .how-it-works-img {
            height: 100% !important;
            width: auto !important;
            object-fit: contain !important;
            object-position: bottom left !important;
            display: block !important;
          }
        }

        /* Tablet & Compact Screen Layout */
        @media (max-width: 1279px) and (min-width: 681px) {
          .how-it-works-row {
            flex-direction: column !important;
            width: 100% !important;
          }
          .how-it-works-right-col {
            display: none !important;
          }
          .how-it-works-banner {
            width: 100% !important;
            height: auto !important;
            padding: 34px 32px !important;
            border-radius: 24px !important;
          }
          .how-it-works-heading {
            font-size: clamp(23px, 2.3vw, 27px) !important;
            margin-bottom: 26px !important;
          }
          .steps-horizontal-grid {
            --circle-size: 50px !important;
            --gap-size: clamp(14px, 2vw, 28px) !important;
            display: grid !important;
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            gap: var(--gap-size) !important;
            width: 100% !important;
          }
          .desktop-connector {
            display: block !important;
            top: calc(var(--circle-size) / 2) !important;
            left: calc(50% + (var(--circle-size) / 2) + 5px) !important;
            width: calc(100% + var(--gap-size) - var(--circle-size) - 10px) !important;
          }
          .mobile-step-arrow-connector {
            display: none !important;
          }
          .how-it-works-icon-wrapper {
            width: 50px !important;
            height: 50px !important;
            margin-bottom: 12px !important;
          }
          .how-it-works-icon-circle {
            width: 50px !important;
            height: 50px !important;
          }
          .how-it-works-icon-circle svg {
            width: 23px !important;
            height: 23px !important;
          }
          .how-it-works-badge {
            width: 19px !important;
            height: 19px !important;
            font-size: 10.5px !important;
          }
          .how-it-works-step-title {
            font-size: 15px !important;
            margin-bottom: 4px !important;
          }
          .how-it-works-step-desc {
            font-size: 12px !important;
            line-height: 1.35 !important;
          }
        }

        /* Smaller Tablets (681px to 800px) */
        @media (max-width: 800px) and (min-width: 681px) {
          .how-it-works-banner {
            padding: 28px 20px !important;
          }
          .steps-horizontal-grid {
            --circle-size: 42px !important;
            --gap-size: 12px !important;
            gap: var(--gap-size) !important;
          }
          .desktop-connector {
            width: calc(100% + var(--gap-size) - var(--circle-size) - 10px) !important;
          }
          .how-it-works-icon-wrapper,
          .how-it-works-icon-circle {
            width: 42px !important;
            height: 42px !important;
          }
          .how-it-works-icon-circle svg {
            width: 19px !important;
            height: 19px !important;
          }
          .how-it-works-badge {
            width: 16px !important;
            height: 16px !important;
            font-size: 9px !important;
          }
          .how-it-works-step-title {
            font-size: 13px !important;
          }
          .how-it-works-step-desc {
            font-size: 10.5px !important;
          }
        }

        /* Mobile Screens (<= 680px) */
        /* Vertical Flow: Step 1 -> Dotted Downward Arrow -> Step 2 -> ... */
        @media (max-width: 680px) {
          .how-it-works-row {
            flex-direction: column !important;
          }
          .how-it-works-right-col {
            display: none !important;
          }
          .how-it-works-banner {
            width: 100% !important;
            height: auto !important;
            padding: 28px 18px !important;
            border-radius: 20px !important;
          }
          .how-it-works-header-tag {
            text-align: center !important;
          }
          .how-it-works-heading {
            text-align: center !important;
            font-size: 21px !important;
            line-height: 1.3 !important;
            margin-bottom: 24px !important;
          }
          .steps-horizontal-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            gap: 0 !important;
          }
          .how-it-works-step-item {
            width: 100% !important;
            max-width: 290px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .desktop-connector {
            display: none !important;
          }
          .mobile-step-arrow-connector {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 10px 0 8px 0 !important;
            filter: drop-shadow(0 2px 6px rgba(52, 211, 153, 0.4)) !important;
          }
          .how-it-works-icon-wrapper {
            width: 52px !important;
            height: 52px !important;
            margin-bottom: 10px !important;
          }
          .how-it-works-icon-circle {
            width: 52px !important;
            height: 52px !important;
            background-color: rgba(52, 211, 153, 0.08) !important;
            border: 1.5px solid rgba(52, 211, 153, 0.45) !important;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3) !important;
          }
          .how-it-works-icon-circle svg {
            width: 24px !important;
            height: 24px !important;
          }
          .how-it-works-badge {
            width: 20px !important;
            height: 20px !important;
            font-size: 11px !important;
          }
          .how-it-works-step-title {
            font-size: 16px !important;
            font-weight: 700 !important;
            color: #FFFFFF !important;
            margin-bottom: 4px !important;
          }
          .how-it-works-step-desc {
            font-size: 13px !important;
            color: #9CA3AF !important;
            line-height: 1.4 !important;
          }
          .step-br {
            display: inline !important;
          }
        }
      `}</style>
    </section >
  );
};
