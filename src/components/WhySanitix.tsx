import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Target,
  CheckCircle2,
  Layers,
  CalendarCheck,
  Clock
} from 'lucide-react';

export interface WhySanitixProps {
  onLearnMore?: () => void;
  onOpenBooking?: () => void;
}

export type WhyChooseUsProps = WhySanitixProps;

export const WhySanitix: React.FC<WhySanitixProps> = ({
  onLearnMore: _onLearnMore,
  onOpenBooking: _onOpenBooking
}) => {
  // Card 1: 3 benefits requested by user
  const card1Benefits = [
    {
      title: 'Easy Booking',
      subtitle: 'Simple, fast & hassle-free',
      icon: CheckCircle2
    },
    {
      title: 'Verified Partners',
      subtitle: 'Trusted pros you can count on',
      icon: ShieldCheck
    },
    {
      title: 'Transparent Pricing',
      subtitle: 'Clear rates, no hidden charges',
      icon: Target
    }
  ];

  // Card 2: 3 essentials points
  const everydayEssentials = [
    {
      title: 'Multiple Services',
      subtitle: 'Water, sanitation, cleaning & more',
      icon: Layers
    },
    {
      title: 'Simple Booking',
      subtitle: 'Find and book services in seconds',
      icon: CalendarCheck
    },
    {
      title: 'Real-Time Updates',
      subtitle: 'Live GPS tracking from start to finish',
      icon: Clock
    }
  ];

  return (
    <section id="why-choose-us" style={{ padding: '0', marginTop: '-12px', backgroundColor: 'transparent' }}>
      <div className="landing-container full-width-landing-container" style={{ padding: '0 56px' }}>

        {/* 2-Column Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '24px',
            alignItems: 'stretch'
          }}
          className="why-choose-grid"
        >

          {/* Card 1: Service Quality & Value */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="why-choose-card"
            style={{
              background: 'linear-gradient(135deg, #F2FAF5 0%, #E7F6ED 50%, #DCF3E6 100%)',
              borderRadius: '24px',
              padding: '22px 30px 18px 30px',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(0, 168, 89, 0.16)',
              boxShadow: '0 12px 35px -10px rgba(11, 43, 34, 0.07)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              minHeight: '295px'
            }}
          >
            {/* Card 1 Inner Layout: Left Floating Content | Absolute Center Technician | Right 3 Cards */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                height: '100%',
                position: 'relative',
                zIndex: 2,
                gap: '16px'
              }}
              className="ref-card-grid"
            >

              {/* Part 1: Left Content - Floated above image with wide room */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 3,
                  width: '54%',
                  maxWidth: '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  paddingTop: '0'
                }}
                className="ref-text-col"
              >
                {/* Green Subheading Label - Exactly matching About Us */}
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 800,
                    color: '#00A859',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  BUILT FOR BETTER SERVICE
                </div>

                {/* Main Heading */}
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(23px, 2vw, 29px)',
                    fontWeight: 800,
                    color: '#0B2B22',
                    lineHeight: 1.14,
                    marginBottom: '17px',
                    letterSpacing: '-0.025em'
                  }}
                >
                  Everything You Need,{' '}
                  <br className="ref-br" />
                  All in{' '}
                  <span
                    style={{
                      fontFamily: "'Caveat', cursive",
                      color: '#00A859',
                      fontStyle: 'italic',
                      fontSize: '1.65em',
                      fontWeight: 700,
                      display: 'inline-block',
                      position: 'relative',
                      lineHeight: 0.9,
                      verticalAlign: 'baseline',
                      marginTop: '3px'
                    }}
                  >
                    One Place
                    <svg
                      style={{
                        position: 'absolute',
                        left: '-2px',
                        bottom: '-6px',
                        width: '104%',
                        height: '10px',
                        overflow: 'visible'
                      }}
                      viewBox="0 0 160 12"
                      fill="none"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 8C45 2 115 2 157 7C125 10 75 11 35 10"
                        stroke="#00A859"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </h2>

                {/* Subtitle - Wide, natural flow matching Card 2 */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14.5px',
                    color: '#34453D',
                    lineHeight: 1.5,
                    maxWidth: '340px',
                    margin: '0'
                  }}
                >
                  Sanitix connects essential services, trusted partners, transparent pricing, and technology to make every booking simple and hassle-free.
                </p>
              </div>

              {/* Part 2: Center Technician - Anchored to Bottom with Crop */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-22px',
                  left: '52%',
                  transform: 'translateX(-50%)',
                  height: '325px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
                className="ref-center-col ref-center-col-card1"
              >
                {/* Curved Dotted Constellation Arch */}
                <svg
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '260px',
                    height: '240px',
                    pointerEvents: 'none',
                    zIndex: 1
                  }}
                  viewBox="0 0 260 240"
                  fill="none"
                >
                  <path
                    d="M 20 70 Q 130 5 240 75"
                    stroke="rgba(0, 168, 89, 0.25)"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                  />
                  <circle cx="20" cy="70" r="3" fill="#00A859" />
                  <circle cx="130" cy="22" r="3.5" fill="#00A859" />
                  <circle cx="240" cy="75" r="3" fill="#00A859" />
                </svg>

                {/* Technician Image */}
                <img
                  src="/images/partner_sanitix_hero.webp"
                  alt="Sanitix Uniformed Partner"
                  style={{
                    width: 'auto',
                    height: '325px',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    display: 'block',
                    position: 'relative',
                    zIndex: 2
                  }}
                />
              </div>

              {/* Part 3: Right 3 White Floating Pill Cards - Absolute Over Image with Full Single-Line Width */}
              <div
                style={{
                  position: 'absolute',
                  right: '24px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 3,
                  width: '270px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
                className="ref-cards-col"
              >
                {card1Benefits.map((card, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 3 }}
                    className="ref-pill-card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '9px 16px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid rgba(0, 0, 0, 0.04)',
                      boxShadow: '0 5px 18px rgba(11, 43, 34, 0.07)'
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#E8F9F0',
                        color: '#00A859',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <card.icon size={18} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="ref-pill-title" style={{ fontSize: '14px', fontWeight: 800, color: '#0B2B22' }}>
                        {card.title}
                      </div>
                      <div className="ref-pill-subtitle" style={{ fontSize: '11.5px', color: '#5F6B65', fontWeight: 500, marginTop: '2px' }}>
                        {card.subtitle}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Card 2: Essential Utilities */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="why-choose-card"
            style={{
              background: 'linear-gradient(135deg, #031811 0%, #06281C 50%, #0A3626 100%)',
              borderRadius: '24px',
              padding: '22px 30px 18px 30px',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(52, 211, 153, 0.2)',
              boxShadow: '0 12px 35px -10px rgba(3, 24, 17, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              minHeight: '295px'
            }}
          >
            {/* Ambient Background Wave */}
            <svg
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                opacity: 0.25
              }}
              viewBox="0 0 700 450"
              fill="none"
            >
              <path d="M320 0C450 120 620 180 700 80" stroke="#34D399" strokeWidth="1.2" strokeOpacity="0.25" />
              <path d="M300 40C460 170 600 240 700 120" stroke="#34D399" strokeWidth="1" strokeOpacity="0.15" />
              <path d="M200 450C380 320 540 380 700 280" stroke="#34D399" strokeWidth="1.2" strokeOpacity="0.2" />
            </svg>

            {/* Card 2 Inner Layout: Left Floating Content | Absolute Center Fleet | Right 3 Cards */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                height: '100%',
                position: 'relative',
                zIndex: 2,
                gap: '16px'
              }}
              className="ref-card-grid"
            >
              {/* Part 1: Left Content - Floated above image with wide room */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 3,
                  width: '54%',
                  maxWidth: '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  paddingTop: '0'
                }}
                className="ref-text-col"
              >
                {/* Green Subheading Label - Exactly matching About Us & Card 1 */}
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 800,
                    color: '#34D399',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  MADE FOR EVERYDAY ESSENTIALS
                </div>

                {/* Main Heading */}
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(23px, 2vw, 29px)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1.16,
                    marginBottom: '16px',
                    letterSpacing: '-0.025em'
                  }}
                >
                  One Platform for{' '}
                  <br className="ref-br" />
                  Services That{' '}
                  <br className="ref-br" />
                  <span style={{ color: '#34D399' }}>Keep Life Moving</span>
                </h2>

                {/* Subtitle */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14.5px',
                    color: '#A7C4B7',
                    lineHeight: 1.5,
                    maxWidth: '305px',
                    margin: '0'
                  }}
                >
                  Sanitix connects essential services, verified fleet partners, transparent pricing, and smart technology to keep city operations moving.
                </p>
              </div>

              {/* Part 2: Center Mobile App Visual - Floated in Background */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  left: '49%',
                  transform: 'translateX(-50%)',
                  height: '290px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
                className="ref-center-col ref-center-col-card2"
              >
                {/* Curved Dotted Constellation Arch */}
                <svg
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '260px',
                    height: '240px',
                    pointerEvents: 'none',
                    zIndex: 1
                  }}
                  viewBox="0 0 260 240"
                  fill="none"
                >
                  <path
                    d="M 20 70 Q 130 5 240 75"
                    stroke="rgba(52, 211, 153, 0.25)"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                  />
                  <circle cx="20" cy="70" r="3" fill="#34D399" />
                  <circle cx="130" cy="22" r="3.5" fill="#34D399" />
                  <circle cx="240" cy="75" r="3" fill="#34D399" />
                </svg>

                {/* Mobile App Image Floating Cleanly */}
                <img
                  src="/images/sanitation.webp"
                  alt="Sanitix App Live Booking"
                  style={{
                    width: 'auto',
                    height: '290px',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    display: 'block',
                    position: 'relative',
                    zIndex: 2,
                    filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.5))'
                  }}
                />
              </div>

              {/* Part 3: Right 3 Dark Emerald Glass Floating Cards */}
              <div
                style={{
                  position: 'absolute',
                  right: '24px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 3,
                  width: '270px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
                className="ref-cards-col"
              >
                {everydayEssentials.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 3 }}
                    className="ref-pill-card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '9px 16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '16px',
                      border: '1px solid rgba(52, 211, 153, 0.18)',
                      boxShadow: '0 5px 18px rgba(0, 0, 0, 0.35)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(52, 211, 153, 0.16)',
                        color: '#34D399',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <item.icon size={18} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="ref-pill-title" style={{ fontSize: '14px', fontWeight: 800, color: '#FFFFFF' }}>
                        {item.title}
                      </div>
                      <div className="ref-pill-subtitle" style={{ fontSize: '11.5px', color: '#A7C4B7', fontWeight: 500, marginTop: '2px' }}>
                        {item.subtitle}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>

      </div>

      <style>{`
        /* Compact Desktop & Laptop Layout (1041px to 1366px) */
        @media (min-width: 1041px) and (max-width: 1366px) {
          .why-choose-card {
            padding: 18px 20px 16px 20px !important;
            min-height: 285px !important;
          }
          .ref-text-col {
            width: 38% !important;
            max-width: 195px !important;
          }
          .ref-text-col h2 {
            font-size: 20px !important;
            line-height: 1.18 !important;
            margin-bottom: 12px !important;
          }
          .ref-text-col p {
            font-size: 12px !important;
            line-height: 1.45 !important;
            max-width: 168px !important;
            padding-right: 8px !important;
          }
          .ref-center-col-card1 {
            left: 49% !important;
            bottom: -18px !important;
            height: 255px !important;
          }
          .ref-center-col-card1 img {
            height: 255px !important;
            width: auto !important;
          }
          .ref-center-col-card1 svg {
            width: 210px !important;
            height: 190px !important;
          }
          .ref-center-col-card2 {
            left: 49% !important;
            bottom: -12px !important;
            height: 225px !important;
          }
          .ref-center-col-card2 img {
            height: 225px !important;
            width: auto !important;
          }
          .ref-center-col-card2 svg {
            width: 210px !important;
            height: 190px !important;
          }
          .ref-cards-col {
            width: 205px !important;
            right: 12px !important;
            gap: 6px !important;
          }
          .ref-cards-col .ref-pill-card {
            padding: 6px 9px !important;
            gap: 8px !important;
            border-radius: 12px !important;
          }
          .ref-cards-col .ref-pill-card > div:first-child {
            width: 28px !important;
            height: 28px !important;
          }
          .ref-cards-col .ref-pill-title {
            font-size: 11.5px !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
          .ref-cards-col .ref-pill-subtitle {
            font-size: 9.5px !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
        }

        /* Large Display Layout (>= 1367px) */
        @media (min-width: 1367px) {
          .ref-text-col {
            width: clamp(230px, 32%, 360px) !important;
            max-width: 48% !important;
          }
          .ref-text-col h2 {
            margin-bottom: 16px !important;
          }
          .ref-text-col p {
            max-width: clamp(230px, 22vw, 290px) !important;
            font-size: clamp(13px, 0.95vw, 14.5px) !important;
            line-height: 1.55 !important;
            padding-right: 12px !important;
          }
          .ref-cards-col {
            width: clamp(235px, 19.5vw, 280px) !important;
            right: clamp(14px, 1.8vw, 24px) !important;
            gap: clamp(7px, 0.8vw, 10px) !important;
          }
          .ref-cards-col .ref-pill-card {
            width: 100% !important;
            box-sizing: border-box !important;
            padding: 8px clamp(10px, 1vw, 16px) !important;
            overflow: hidden !important;
          }
          .ref-cards-col .ref-pill-title {
            font-size: clamp(12.5px, 0.95vw, 14px) !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
          .ref-cards-col .ref-pill-subtitle {
            font-size: clamp(10.5px, 0.8vw, 11.5px) !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
        }

        /* Single-Column Stack Layout (<= 1040px) */
        @media (max-width: 1040px) {
          .why-choose-grid {
            grid-template-columns: 1fr !important;
            gap: 22px !important;
          }
        }

        /* Tablet Layout (681px to 1040px) */
        @media (max-width: 1040px) and (min-width: 681px) {
          .why-choose-card {
            padding: 24px 28px 22px 28px !important;
            min-height: 270px !important;
          }
          .ref-card-grid {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
            min-height: 220px !important;
            position: relative !important;
          }
          /* Left Text Column: Sized to 285px to stay clearly away from the center image */
          .ref-text-col {
            position: relative !important;
            width: 33% !important;
            max-width: 285px !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            z-index: 3 !important;
          }
          .ref-text-col .ref-br {
            display: none !important;
          }
          .ref-text-col h2 {
            font-size: clamp(21px, 2.1vw, 25px) !important;
            line-height: 1.2 !important;
            margin-bottom: 12px !important;
            max-width: 285px !important;
          }
          .ref-text-col p {
            font-size: 13.5px !important;
            line-height: 1.55 !important;
            max-width: 280px !important;
            margin: 0 !important;
          }
          /* Center Visual: Centered cleanly without overlap */
          .ref-center-col {
            display: flex !important;
            position: absolute !important;
            bottom: -22px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            height: 265px !important;
            z-index: 1 !important;
          }
          .ref-center-col img {
            height: 265px !important;
            width: auto !important;
          }
          .ref-center-col svg {
            width: 240px !important;
            height: 220px !important;
          }
          /* Right Side Floating Cards: Fully Contained Inside Card Bounds */
          .ref-cards-col {
            position: absolute !important;
            right: 20px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            width: 250px !important;
            max-width: 31% !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 8px !important;
            z-index: 3 !important;
          }
          .ref-cards-col .ref-pill-card {
            display: flex !important;
            align-items: center !important;
            gap: 10px !important;
            padding: 9px 12px !important;
            border-radius: 14px !important;
            width: 100% !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }
          .ref-cards-col .ref-pill-title {
            font-size: 13px !important;
            line-height: 1.2 !important;
            font-weight: 800 !important;
            white-space: normal !important;
          }
          .ref-cards-col .ref-pill-subtitle {
            font-size: 11px !important;
            line-height: 1.35 !important;
            font-weight: 500 !important;
            white-space: normal !important;
            word-break: normal !important;
            overflow-wrap: break-word !important;
          }
        }

        /* Compact Tablet Layout (681px to 820px) */
        @media (max-width: 820px) and (min-width: 681px) {
          .why-choose-card {
            padding: 20px 20px !important;
            min-height: 255px !important;
          }
          .ref-text-col {
            width: 32% !important;
            max-width: 235px !important;
          }
          .ref-text-col h2 {
            font-size: 20px !important;
            max-width: 235px !important;
            margin-bottom: 10px !important;
          }
          .ref-text-col p {
            font-size: 12px !important;
            line-height: 1.45 !important;
            max-width: 235px !important;
          }
          .ref-center-col {
            left: 49% !important;
            height: 235px !important;
            bottom: -20px !important;
          }
          .ref-center-col img {
            height: 235px !important;
          }
          .ref-cards-col {
            width: 220px !important;
            right: 14px !important;
            gap: 7px !important;
          }
          .ref-cards-col .ref-pill-card {
            padding: 8px 10px !important;
            gap: 8px !important;
          }
          .ref-cards-col .ref-pill-card > div:first-child {
            width: 28px !important;
            height: 28px !important;
          }
          .ref-cards-col .ref-pill-card > div:first-child svg {
            width: 15px !important;
            height: 15px !important;
          }
          .ref-cards-col .ref-pill-title {
            font-size: 12px !important;
          }
          .ref-cards-col .ref-pill-subtitle {
            font-size: 10px !important;
          }
        }

        /* Mobile Layout (<= 680px) */
        @media (max-width: 680px) {
          .landing-container.full-width-landing-container {
            padding: 0 16px !important;
          }
          .why-choose-card {
            padding: 20px 16px !important;
            min-height: auto !important;
            border-radius: 20px !important;
          }
          .ref-card-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 16px !important;
          }
          .ref-text-col {
            width: 100% !important;
            max-width: 100% !important;
          }
          .ref-text-col .ref-br {
            display: none !important;
          }
          .ref-text-col p {
            max-width: 100% !important;
          }
          .ref-center-col {
            display: none !important;
          }
          .ref-cards-col {
            position: relative !important;
            right: auto !important;
            top: auto !important;
            transform: none !important;
            width: 100% !important;
            max-width: 100% !important;
            flex-direction: column !important;
            margin-top: 4px !important;
            gap: 8px !important;
          }
          .ref-cards-col .ref-pill-card {
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .ref-cards-col .ref-pill-title {
            white-space: normal !important;
          }
          .ref-cards-col .ref-pill-subtitle {
            white-space: normal !important;
          }
        }
      `}</style>
    </section>
  );
};

export const WhyChooseUs = WhySanitix;
