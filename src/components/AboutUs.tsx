import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Gem, Leaf } from 'lucide-react';

// About Us
export const AboutUs: React.FC = () => {
  return (
    <section id="about-us" style={{ padding: '0', marginTop: '-18px', backgroundColor: 'transparent' }}>
      <div className="landing-container full-width-landing-container about-us-landing-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-us-panoramic-card"
        >
          {/* Cityscape Skyline Layer */}
          <div className="about-bottom-city-wrap">
            <img
              src="/images/about_bottom_city.webp"
              alt="Cityscape Skyline"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'left bottom',
                display: 'block',
                opacity: 0.3,
                WebkitMaskImage: 'linear-gradient(to right, black 0%, black 80%, transparent 100%)',
                maskImage: 'linear-gradient(to right, black 0%, black 80%, transparent 100%)'
              }}
            />
          </div>

          <div className="about-main-layout">
            <div className="about-top-tier">
              <div className="about-heading-col">
                <div className="about-tag">ABOUT US</div>
                <h2 className="about-title">
                  Empowering communities through reliable services
                </h2>
                <p className="about-narrative">
                  Sanitix is on a mission to bring transparency, trust and technology to essential services that keep our cities and communities running every day.
                </p>
              </div>

              {/* Tablet photo wrap */}
              <div className="about-tablet-photo-wrap">
                <img
                  src="/images/about_fleet_team.webp"
                  alt="Sanitix Fleet and Team"
                  className="about-tablet-photo-img"
                />
                <div className="about-tablet-floating-badge">
                  <div className="about-badge-icon-circle">
                    <Leaf size={14} color="#00A859" />
                  </div>
                  <div>
                    <div className="about-badge-title">Cleaner Cities</div>
                    <div className="about-badge-subtitle">Healthier Communities</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillars */}
            <div className="about-pillars-container">
              {/* Mission */}
              <div className="about-pillar-item">
                <div className="about-pillar-circle">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00A859" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                  </svg>
                </div>
                <div className="about-pillar-text-content">
                  <h3 className="about-pillar-title">Our Mission</h3>
                  <p className="about-pillar-desc">
                    To simplify access to essential services through technology and trusted partnerships.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="about-pillar-item">
                <div className="about-pillar-circle">
                  <Eye size={26} strokeWidth={2.2} />
                </div>
                <div className="about-pillar-text-content">
                  <h3 className="about-pillar-title">Our Vision</h3>
                  <p className="about-pillar-desc">
                    To become India's most trusted on-demand platform for essential services.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="about-pillar-item">
                <div className="about-pillar-circle">
                  <Gem size={26} strokeWidth={2.2} />
                </div>
                <div className="about-pillar-text-content">
                  <h3 className="about-pillar-title">Our Values</h3>
                  <p className="about-pillar-desc">
                    Integrity, Reliability, Customer First, Safety and Sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Right Photo Column */}
          <div className="about-desktop-photo-col">
            <img
              src="/images/about_fleet_team.webp"
              alt="Sanitix Fleet and Team"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.12) 8%, rgba(0, 0, 0, 0.7) 22%, black 42%)',
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.12) 8%, rgba(0, 0, 0, 0.7) 22%, black 42%)'
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="about-floating-badge"
            >
              <div className="about-badge-icon-circle">
                <Leaf size={16} color="#00A859" />
              </div>
              <div>
                <div className="about-badge-title">Cleaner Cities</div>
                <div className="about-badge-subtitle">Healthier Communities</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* Base / Desktop (min-width: 1081px) */
        .about-us-panoramic-card {
          background-color: #FFFFFF;
          border-radius: 24px;
          box-shadow: 0 10px 32px -6px rgba(6, 35, 25, 0.07);
          border: 1px solid rgba(225, 235, 229, 0.9);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: stretch;
          min-height: 330px;
        }

        .about-bottom-city-wrap {
          position: absolute;
          left: 0;
          bottom: clamp(-85px, -3.8vw, -45px);
          width: 64%;
          height: clamp(140px, 10.5vw, 195px);
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .about-main-layout {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 24px 0 22px clamp(24px, 2.4vw, 36px);
          gap: clamp(16px, 2vw, 36px);
          width: 64%;
          box-sizing: border-box;
          min-width: 0;
        }

        .about-top-tier {
          display: flex;
          flex-direction: column;
          width: clamp(215px, 18vw, 270px);
          flex-shrink: 0;
        }

        .about-heading-col {
          width: 100%;
        }

        .about-tablet-photo-wrap {
          display: none;
        }

        .about-tag {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 800;
          color: #00A859;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .about-title {
          font-family: var(--font-heading);
          font-size: clamp(22px, 1.8vw, 29px);
          font-weight: 800;
          color: #0A1E17;
          line-height: 1.2;
          letter-spacing: -0.025em;
          margin-bottom: 10px;
        }

        .about-narrative {
          font-family: var(--font-sans);
          font-size: clamp(13px, 0.95vw, 14px);
          line-height: 1.55;
          color: #4B5563;
          margin: 0;
        }

        .about-pillars-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1 1 auto;
          min-width: 0;
          margin: 0;
          gap: clamp(8px, 1.2vw, 20px);
        }

        .about-pillar-item {
          flex: 1 1 0;
          max-width: 160px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 2px;
        }

        .about-pillar-circle {
          width: clamp(48px, 3.4vw, 56px);
          height: clamp(48px, 3.4vw, 56px);
          border-radius: 50%;
          background-color: #E6F8EE;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00A859;
          margin-bottom: 8px;
          box-shadow: 0 3px 12px rgba(0, 168, 89, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .about-pillar-item:hover .about-pillar-circle {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 18px rgba(0, 168, 89, 0.16);
        }

        .about-pillar-title {
          font-family: var(--font-heading);
          font-size: clamp(14.5px, 1.05vw, 17px);
          font-weight: 800;
          color: #0A1E17;
          margin-bottom: 5px;
          white-space: nowrap;
        }

        .about-pillar-desc {
          font-family: var(--font-sans);
          font-size: clamp(11px, 0.85vw, 12.5px);
          line-height: 1.45;
          color: #4B5563;
          max-width: 100%;
          margin: 0 auto;
        }

        .about-pillar-sep {
          display: none !important;
        }

        .about-desktop-photo-col {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: clamp(340px, 37vw, 560px);
          overflow: hidden;
          z-index: 1;
        }

        .about-floating-badge {
          position: absolute;
          bottom: 12px;
          right: 14px;
          background-color: #FFFFFF;
          border-radius: 14px;
          padding: 8px 14px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.16);
          border: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 3;
        }

        .about-badge-icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #E8F9F0;
          color: #00A859;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .about-badge-title {
          font-size: 12px;
          font-weight: 800;
          color: #0B2B22;
          line-height: 1.2;
        }

        .about-badge-subtitle {
          font-size: 10.5px;
          font-weight: 600;
          color: #00A859;
          line-height: 1.2;
        }

        /* Compact Laptop (1081px to 1279px) */
        @media (max-width: 1279px) and (min-width: 1081px) {
          .about-bottom-city-wrap {
            width: 66% !important;
          }
          .about-main-layout {
            width: 66% !important;
            padding: 28px 0 28px 24px !important;
            gap: 16px !important;
          }
          .about-top-tier {
            width: 205px !important;
          }
          .about-title {
            font-size: 22px !important;
          }
          .about-narrative {
            font-size: 13px !important;
            line-height: 1.45 !important;
          }
          .about-pillar-item {
            width: 125px !important;
          }
          .about-pillar-circle {
            width: 48px !important;
            height: 48px !important;
            margin-bottom: 6px !important;
          }
          .about-pillar-circle svg {
            width: 22px !important;
            height: 22px !important;
          }
          .about-pillar-title {
            font-size: 15px !important;
          }
          .about-pillar-desc {
            font-size: 11px !important;
            line-height: 1.35 !important;
          }
          .about-pillar-sep {
            display: none !important;
          }
          .about-desktop-photo-col {
            width: 38% !important;
          }
        }

        /* Responsive Container Padding */
        .about-us-landing-container {
          padding-left: 56px !important;
          padding-right: 56px !important;
        }
        @media (max-width: 1024px) {
          .about-us-landing-container {
            padding-left: 36px !important;
            padding-right: 36px !important;
          }
        }
        @media (max-width: 768px) {
          .about-us-landing-container {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
        @media (max-width: 680px) {
          .about-us-landing-container {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }

        /* Tablet & Mid-size Screens (681px to 1080px) */
        @media (max-width: 1080px) and (min-width: 681px) {
          .about-us-panoramic-card {
            flex-direction: column !important;
            min-height: auto !important;
            position: relative !important;
            overflow: hidden !important;
          }
          .about-desktop-photo-col,
          .about-tablet-photo-wrap {
            display: none !important;
          }
          .about-bottom-city-wrap {
            display: block !important;
            position: absolute !important;
            left: 0 !important;
            bottom: -25px !important;
            width: 100% !important;
            height: 140px !important;
            pointer-events: none !important;
            z-index: 1 !important;
            overflow: hidden !important;
            opacity: 0.3 !important;
          }
          .about-bottom-city-wrap img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: left bottom !important;
            opacity: 0.3 !important;
          }
          .about-main-layout {
            flex-direction: column !important;
            padding: clamp(28px, 3.5vw, 36px) clamp(24px, 3vw, 32px) clamp(44px, 5vw, 56px) !important;
            gap: 22px !important;
            width: 100% !important;
            position: relative !important;
            z-index: 2 !important;
          }
          .about-top-tier {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            max-width: 100% !important;
            gap: 0 !important;
          }
          .about-heading-col {
            width: 100% !important;
          }
          .about-title {
            font-size: clamp(23px, 2.5vw, 27px) !important;
            line-height: 1.25 !important;
            margin-bottom: 8px !important;
            max-width: 680px !important;
          }
          .about-narrative {
            font-size: 14px !important;
            line-height: 1.55 !important;
            max-width: 700px !important;
          }
          .about-pillars-container {
            display: flex !important;
            flex-direction: row !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-top: 6px !important;
            padding-top: 12px !important;
            border-top: none !important;
            align-items: stretch !important;
            justify-content: space-between !important;
            gap: clamp(12px, 2vw, 24px) !important;
          }
          .about-pillar-item {
            flex: 1 !important;
            width: auto !important;
            max-width: none !important;
            min-width: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 0 10px !important;
          }
          .about-pillar-circle {
            width: 50px !important;
            height: 50px !important;
            margin-bottom: 8px !important;
          }
          .about-pillar-circle svg {
            width: 24px !important;
            height: 24px !important;
          }
          .about-pillar-title {
            font-size: 16px !important;
            margin-bottom: 4px !important;
          }
          .about-pillar-desc {
            font-size: 12.5px !important;
            line-height: 1.45 !important;
            max-width: 100% !important;
          }
          .about-pillar-sep {
            display: none !important;
          }
        }

        /* Mobile Screens (<= 680px) */
        @media (max-width: 680px) {
          .about-us-panoramic-card {
            border-radius: 20px !important;
            min-height: auto !important;
            position: relative !important;
            overflow: hidden !important;
          }
          .about-desktop-photo-col,
          .about-tablet-photo-wrap {
            display: none !important;
          }
          .about-bottom-city-wrap {
            display: block !important;
            position: absolute !important;
            left: 0 !important;
            bottom: -15px !important;
            width: 100% !important;
            height: 110px !important;
            pointer-events: none !important;
            z-index: 1 !important;
            overflow: hidden !important;
            opacity: 0.3 !important;
          }
          .about-bottom-city-wrap img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: left bottom !important;
            opacity: 0.3 !important;
          }
          .about-main-layout {
            flex-direction: column !important;
            padding: 22px 18px 36px !important;
            gap: 18px !important;
            width: 100% !important;
            box-sizing: border-box !important;
            position: relative !important;
            z-index: 2 !important;
          }
          .about-top-tier {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            gap: 0 !important;
          }
          .about-heading-col {
            width: 100% !important;
          }
          .about-title {
            font-size: 21px !important;
            line-height: 1.25 !important;
            margin-bottom: 8px !important;
          }
          .about-narrative {
            font-size: 13.5px !important;
            line-height: 1.5 !important;
            color: #4B5563 !important;
          }
          .about-pillars-container {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-top: 0 !important;
            padding-top: 0 !important;
            border-top: none !important;
            gap: 12px !important;
          }
          .about-pillar-item {
            width: 100% !important;
            max-width: 100% !important;
            flex: none !important;
            display: flex !important;
            flex-direction: row !important;
            align-items: flex-start !important;
            text-align: left !important;
            gap: 14px !important;
            padding: 14px 16px !important;
            background: rgba(244, 250, 246, 0.75) !important;
            border: 1px solid rgba(0, 168, 89, 0.14) !important;
            border-radius: 16px !important;
            box-shadow: 0 2px 6px rgba(6, 35, 25, 0.03) !important;
            box-sizing: border-box !important;
          }
          .about-pillar-circle {
            width: 44px !important;
            height: 44px !important;
            flex-shrink: 0 !important;
            margin-bottom: 0 !important;
            background-color: #E6F8EE !important;
          }
          .about-pillar-circle svg {
            width: 22px !important;
            height: 22px !important;
          }
          .about-pillar-text-content {
            flex: 1 !important;
            min-width: 0 !important;
          }
          .about-pillar-title {
            font-size: 15px !important;
            font-weight: 800 !important;
            color: #0A1E17 !important;
            margin-bottom: 3px !important;
          }
          .about-pillar-desc {
            font-size: 12.5px !important;
            line-height: 1.45 !important;
            color: #4B5563 !important;
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
          }
          .about-pillar-sep {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
