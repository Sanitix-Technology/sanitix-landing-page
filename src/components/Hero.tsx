import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Tag, Clock, Lock } from "lucide-react";

interface HeroProps {
    onOpenBooking: () => void;
    onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
    return (
        <section
            className="hero-section"
            style={{
                position: "relative",
                overflow: "hidden",
                minHeight: "calc(100vh - 60px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "linear-gradient(160deg, #FFFFFF 0%, #F2FAF5 60%, #E6F4EE 100%)",
                boxSizing: "border-box",
                paddingBottom: "32px"
            }}
        >
            {/* Top-right green radial glow */}
            <div
                style={{
                    position: "absolute",
                    top: "-60px",
                    right: "-60px",
                    width: "650px",
                    height: "650px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,168,89,0.11) 0%, rgba(0,168,89,0.03) 55%, transparent 75%)",
                    pointerEvents: "none",
                    zIndex: 0
                }}
            />

            {/* Main content */}
            <div className="landing-container hero-landing-container" style={{ position: "relative", zIndex: 1, paddingTop: "0px", paddingBottom: "0", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

                {/* Two-column grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.2fr",
                        gap: "clamp(12px, 2vw, 28px)",
                        alignItems: "center",
                        flex: 1
                    }}
                    className="hero-grid"
                >

                    {/* Left Content Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        style={{ paddingBottom: "0px", paddingTop: "0px" }}
                    >
                        {/* Trust Pill */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.08, duration: 0.4 }}
                            className="hero-trust-pill"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "6px 14px 6px 10px",
                                borderRadius: "9999px",
                                background: "#FFFFFF",
                                border: "1px solid #D1EAD9",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                                marginBottom: "12px",
                                maxWidth: "100%",
                                boxSizing: "border-box"
                            }}
                        >
                            {/* Pulsing green dot — exact match to mockup */}
                            <span style={{ position: "relative", display: "inline-flex", width: "10px", height: "10px", flexShrink: 0 }}>
                                <span style={{
                                    position: "absolute",
                                    inset: 0,
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(0,168,89,0.35)",
                                    animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite"
                                }} />
                                <span style={{
                                    position: "relative",
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    backgroundColor: "#00A859"
                                }} />
                            </span>
                            <span className="trust-pill-text-full" style={{ fontSize: "13.5px", fontWeight: 600, color: "#1F2937", whiteSpace: "nowrap" }}>
                                Reliable essential services, all in one place
                            </span>
                        </motion.div>

                        {/* H1 Headline */}
                        <h1
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "clamp(44px, 5vw, 76px)",
                                fontWeight: 900,
                                lineHeight: 1.05,
                                letterSpacing: "-0.04em",
                                color: "#0A1A12",
                                marginBottom: "6px"
                            }}
                            className="hero-title"
                        >
                            Essential services.
                            <br />
                            One platform.
                            <br />
                            <span
                                style={{
                                    fontFamily: "var(--font-script)",
                                    fontStyle: "italic",
                                    fontWeight: 700,
                                    fontSize: "1.25em",
                                    color: "#00A859",
                                    display: "inline-block",
                                    lineHeight: 1.05,
                                    letterSpacing: "-0.01em"
                                }}
                            >
                                Zero Hassle.
                            </span>
                        </h1>

                        {/* Thin underline accent below Zero Hassle — visible in mockup */}
                        <div style={{
                            width: "220px",
                            height: "3px",
                            background: "linear-gradient(90deg, #00A859 0%, rgba(0,168,89,0.15) 100%)",
                            borderRadius: "2px",
                            marginBottom: "22px"
                        }} />

                        {/* Subtitle */}
                        <p className="hero-subtitle" style={{
                            fontSize: "clamp(15.5px, 1.1vw, 18px)",
                            lineHeight: 1.65,
                            color: "#4B5B52",
                            maxWidth: "520px",
                            marginBottom: "28px",
                            fontWeight: 400
                        }}>
                            Sanitix connects customers with trusted service providers
                            <br className="desktop-br" />
                            or water, heavy equipment, cleaning and sanitation needs,
                            <br className="desktop-br" />
                            all through one simple platform
                        </p>

                        {/* CTA Buttons — side by side, exact mockup sizing */}
                        <div className="hero-cta-group" style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", marginBottom: "28px" }}>
                            {/* Primary CTA */}
                            <button
                                onClick={onOpenBooking}
                                className="btn-primary hero-btn-primary"
                                style={{ padding: "15px 30px", fontSize: "15.5px", fontWeight: 700, borderRadius: "50px" }}
                            >
                                Book a Service <ArrowRight size={18} />
                            </button>

                            {/* Secondary CTA — white bordered with dark play button */}
                            <button
                                onClick={onExploreServices}
                                className="btn-secondary hero-btn-secondary"
                                style={{
                                    padding: "15px 26px",
                                    fontSize: "15.5px",
                                    fontWeight: 700,
                                    borderRadius: "50px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    border: "1.5px solid #D1D5DB"
                                }}
                            >
                                Explore Services
                                <span style={{
                                    width: "28px",
                                    height: "28px",
                                    borderRadius: "50%",
                                    backgroundColor: "#0A1A12",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                }}>
                                    <Play size={11} fill="white" style={{ marginLeft: "2px" }} />
                                </span>
                            </button>
                        </div>

                        {/* Download section */}
                        <div className="hero-download-wrapper" style={{ maxWidth: "430px" }}>
                            {/* "Download Our App" divider */}
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                                <div style={{ flex: 1, height: "1px", background: "#D1D5DB" }} />
                                <span style={{ fontSize: "12px", fontWeight: 600, color: "#9CA3AF", whiteSpace: "nowrap", letterSpacing: "0.02em" }}>
                                    Download Our App
                                </span>
                                <div style={{ flex: 1, height: "1px", background: "#D1D5DB" }} />
                            </div>

                            {/* Store badges — spacious & matching CTA buttons above */}
                            <div className="app-badges-row" style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>

                                {/* Google Play Badge */}
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    className="app-badge-btn"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        background: "#111827",
                                        color: "white",
                                        borderRadius: "14px",
                                        padding: "13px 22px",
                                        textDecoration: "none",
                                        boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
                                        transition: "transform 0.18s, box-shadow 0.18s",
                                        minWidth: "185px"
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                        e.currentTarget.style.boxShadow = "0 8px 22px rgba(0,0,0,0.25)";
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.18)";
                                    }}
                                >
                                    {/* Play Store icon */}
                                    <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                                        <path d="M2.5 1.5L12 11 2.5 20.5C2.2 20.2 2 19.7 2 19.2V2.8C2 2.3 2.2 1.8 2.5 1.5Z" fill="#2196F3" />
                                        <path d="M15.5 7.5L13 11 15.5 14.5 18.5 12.8C19.3 12.3 19.3 11.7 18.5 11.2L15.5 7.5Z" fill="#FFC107" />
                                        <path d="M2.5 20.5L12 11 15.5 14.5 5 20.5C4.2 21 3.2 21 2.5 20.5Z" fill="#4CAF50" />
                                        <path d="M2.5 1.5C3.2 1 4.2 1 5 1.5L15.5 7.5 12 11 2.5 1.5Z" fill="#F44336" />
                                    </svg>
                                    <div>
                                        <div className="app-badge-subtitle" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#9CA3AF", lineHeight: 1, marginBottom: "3px" }}>GET IT ON</div>
                                        <div className="app-badge-title" style={{ fontSize: "16.5px", fontWeight: 700, lineHeight: 1.2, fontFamily: "var(--font-heading)" }}>Google Play</div>
                                    </div>
                                </a>

                                {/* App Store Badge */}
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    className="app-badge-btn"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        background: "#111827",
                                        color: "white",
                                        borderRadius: "14px",
                                        padding: "13px 22px",
                                        textDecoration: "none",
                                        boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
                                        transition: "transform 0.18s, box-shadow 0.18s",
                                        minWidth: "185px"
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                        e.currentTarget.style.boxShadow = "0 8px 22px rgba(0,0,0,0.25)";
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.18)";
                                    }}
                                >
                                    {/* Apple icon */}
                                    <svg width="24" height="26" viewBox="0 0 20 22" fill="white">
                                        <path d="M17.05 17.5C16.25 18.65 15.4 19.8 14.1 19.8C12.8 19.8 12.4 19.1 10.9 19.1C9.4 19.1 8.9 19.8 7.65 19.8C6.4 19.8 5.5 18.6 4.65 17.45C3.1 15.2 1.9 11.1 3.5 8.35C4.35 6.9 5.8 6.05 7.35 6.0C8.55 5.98 9.65 6.8 10.35 6.8C11.05 6.8 12.4 5.83 13.8 5.97C14.4 5.99 16.05 6.2 17.1 7.75C17 7.8 15.15 8.85 15.2 11.1C15.25 13.75 17.5 14.65 17.55 14.68C17.5 14.85 17.1 16.15 17.05 17.5ZM13.5 3.5C14.1 2.75 14.55 1.7 14.45 0.65C13.55 0.68 12.45 1.25 11.8 2.0C11.2 2.65 10.7 3.72 10.85 4.75C11.85 4.82 12.9 4.24 13.5 3.5Z" />
                                    </svg>
                                    <div>
                                        <div className="app-badge-subtitle" style={{ fontSize: "10px", letterSpacing: "0.04em", color: "#9CA3AF", lineHeight: 1, marginBottom: "3px" }}>Download on the</div>
                                        <div className="app-badge-title" style={{ fontSize: "16.5px", fontWeight: 700, lineHeight: 1.2, fontFamily: "var(--font-heading)" }}>App Store</div>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual Showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            alignSelf: "stretch",
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "flex-end",
                            overflow: "visible",
                            marginTop: "-4px",
                            position: "relative"
                        }}
                        className="hero-visual"
                    >
                        <div
                            className="hero-image-wrapper"
                            style={{
                                position: "relative",
                                width: "100%",
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "flex-start",
                                overflow: "visible"
                            }}
                        >
                            <img
                                src="/images/hero_collage_new.webp"
                                alt="SanitiX Fleet — Water Tanker, Dumper Truck, JCB & Sanitation Crew"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                    objectPosition: "top right",
                                    maxHeight: "none",
                                    display: "block",
                                    transform: "scale(1.12)",
                                    transformOrigin: "top right",
                                    /* ── Asymmetric mask: center vehicles = 100% sharp.
                                          Right & bottom outer background edges fade into page.
                                          Left & top edges: subtle fade only.
                                          The ellipse center is offset upper-left so right+bottom
                                          have a wider fade zone than top+left.             ── */
                                    WebkitMaskImage: [
                                        "radial-gradient(ellipse 84% 88% at 44% 42%,",
                                        "  black 0%,",
                                        "  black 38%,",
                                        "  rgba(0,0,0,0.97) 52%,",
                                        "  rgba(0,0,0,0.75) 66%,",
                                        "  rgba(0,0,0,0.35) 80%,",
                                        "  transparent 92%",
                                        ")",
                                    ].join(""),
                                    maskImage: [
                                        "radial-gradient(ellipse 84% 88% at 44% 42%,",
                                        "  black 0%,",
                                        "  black 38%,",
                                        "  rgba(0,0,0,0.97) 52%,",
                                        "  rgba(0,0,0,0.75) 66%,",
                                        "  rgba(0,0,0,0.35) 80%,",
                                        "  transparent 92%",
                                        ")",
                                    ].join(""),
                                }}
                                className="hero-collage-img"
                            />

                            {/* Ultra-soft multi-stop left-edge blend overlay — completely eliminates visible vertical edge */}
                            <div
                                className="hero-left-fade-overlay"
                                aria-hidden="true"
                            />
                        </div>
                    </motion.div>

                </div>

                {/* Trust Indicators Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28, duration: 0.5 }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        borderTop: "1px solid #E5ECE8",
                        paddingTop: "16px",
                        paddingBottom: "26px",
                        marginTop: "auto",
                        width: "100%"
                    }}
                    className="guarantees-strip"
                >
                    {[
                        { Icon: ShieldCheck, title: "Verified Partners", subtitle: "Background checked" },
                        { Icon: Tag, title: "Transparent Pricing", subtitle: "No hidden charges" },
                        { Icon: Clock, title: "On-Time Service", subtitle: "Always on schedule" },
                        { Icon: Lock, title: "Secure Payments", subtitle: "100% safe & secure" }
                    ].map(({ Icon, title, subtitle }, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                                padding: "0 20px",
                                borderRight: idx < 3 ? "1px solid #E5ECE8" : "none"
                            }}
                            className="guarantee-item"
                        >
                            {/* Circular outlined icon badge — matches mockup */}
                            <span style={{
                                width: "46px",
                                height: "46px",
                                borderRadius: "50%",
                                border: "2px solid #00A859",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#00A859",
                                flexShrink: 0,
                                backgroundColor: "#F0FDF6"
                            }}>
                                <Icon size={22} />
                            </span>
                            <div>
                                <div style={{ fontSize: "14.5px", fontWeight: 800, color: "#0A1A12", lineHeight: 1.2 }}>{title}</div>
                                <div style={{ fontSize: "12.5px", color: "#6B7280", marginTop: "3px" }}>{subtitle}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>

            {/* Ping animation + responsive styles */}
            <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        /* Ultra-soft multi-stop horizontal blend for hero image left boundary */
        .hero-left-fade-overlay {
          position: absolute;
          top: 0;
          bottom: -12%;
          left: calc(-12% - 4px);
          width: clamp(80px, 12vw, 115px);
          pointer-events: none;
          z-index: 6;
          background: linear-gradient(
            to right,
            #F5FBF7 0%,
            rgba(245, 251, 247, 0.98) 10%,
            rgba(245, 251, 247, 0.85) 24%,
            rgba(245, 251, 247, 0.55) 45%,
            rgba(245, 251, 247, 0.25) 70%,
            rgba(245, 251, 247, 0.06) 88%,
            rgba(245, 251, 247, 0) 100%
          );
        }

        @supports (mask-image: linear-gradient(to right, black, transparent)) or (-webkit-mask-image: linear-gradient(to right, black, transparent)) {
          .hero-left-fade-overlay {
            background: linear-gradient(to bottom, #F9FDFB 0%, #F5FBF7 45%, #F0F9F4 100%);
            -webkit-mask-image: linear-gradient(
              to right,
              black 0%,
              rgba(0, 0, 0, 0.98) 10%,
              rgba(0, 0, 0, 0.85) 24%,
              rgba(0, 0, 0, 0.55) 45%,
              rgba(0, 0, 0, 0.25) 70%,
              rgba(0, 0, 0, 0.06) 88%,
              transparent 100%
            );
            mask-image: linear-gradient(
              to right,
              black 0%,
              rgba(0, 0, 0, 0.98) 10%,
              rgba(0, 0, 0, 0.85) 24%,
              rgba(0, 0, 0, 0.55) 45%,
              rgba(0, 0, 0, 0.25) 70%,
              rgba(0, 0, 0, 0.06) 88%,
              transparent 100%
            );
          }
        }

        .trust-pill-text-short {
          display: none;
        }

        /* Tablet Universal Adaptation (iPad Mini 768px, Surface Pro 960px, iPad Pro 1032px in portrait)
           Only applies to tablets and portrait viewports, leaving laptop/desktop (landscape >1024px) 100% untouched */
        @media (min-width: 768px) and (max-width: 1024px), (min-width: 768px) and (max-width: 1100px) and (orientation: portrait) {
          .hero-section {
            min-height: auto !important;
            justify-content: flex-start !important;
            padding-bottom: 22px !important;
          }
          .hero-grid {
            grid-template-columns: 1.05fr 1fr !important;
            gap: 12px !important;
            align-items: center !important;
            min-height: auto !important;
          }
          .hero-title {
            font-size: clamp(30px, 3.8vw, 44px) !important;
            line-height: 1.08 !important;
            margin-bottom: 8px !important;
          }
          .hero-subtitle {
            font-size: clamp(12.5px, 1.3vw, 14.5px) !important;
            line-height: 1.5 !important;
            margin-bottom: 16px !important;
            max-width: 440px !important;
          }
          .hero-cta-group {
            gap: 10px !important;
            margin-bottom: 16px !important;
          }
          .hero-btn-primary, .hero-btn-secondary {
            padding: 11px 18px !important;
            font-size: 13.5px !important;
          }
          .hero-download-wrapper {
            max-width: 360px !important;
          }
          .app-badges-row {
            gap: 8px !important;
          }
          .app-badge-btn {
            min-width: 125px !important;
            padding: 7px 11px !important;
            gap: 8px !important;
            border-radius: 12px !important;
          }
          .app-badge-btn svg {
            width: 18px !important;
            height: 18px !important;
          }
          .app-badge-subtitle {
            font-size: 8px !important;
          }
          .app-badge-title {
            font-size: 12px !important;
          }
          .hero-visual {
            display: flex !important;
            justify-content: flex-end !important;
            align-items: center !important;
            width: 100% !important;
            margin-top: 0 !important;
          }
          .hero-image-wrapper {
            width: 100% !important;
            max-width: 100% !important;
            display: flex !important;
            justify-content: flex-end !important;
          }
          .hero-collage-img {
            width: 100% !important;
            max-height: 460px !important;
            object-fit: contain !important;
            object-position: center right !important;
            transform: scale(1.06) !important;
            transform-origin: center right !important;
            display: block !important;
          }
          .hero-left-fade-overlay {
            display: block !important;
            width: clamp(55px, 8vw, 85px) !important;
            left: calc(-6% - 2px) !important;
          }
          .guarantees-strip {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 8px !important;
            padding-top: 14px !important;
            padding-bottom: 18px !important;
            margin-top: clamp(18px, 2.5vw, 32px) !important;
          }
          .guarantee-item {
            padding: 0 8px !important;
            gap: 8px !important;
            border-right: 1px solid #E5ECE8 !important;
            border-bottom: none !important;
          }
          .guarantee-item:last-child {
            border-right: none !important;
          }
          .guarantee-item span {
            width: 38px !important;
            height: 38px !important;
          }
          .guarantee-item span svg {
            width: 18px !important;
            height: 18px !important;
          }
          .guarantee-item div div:first-child {
            font-size: 13px !important;
          }
          .guarantee-item div div:last-child {
            font-size: 11px !important;
          }
        }

        /* Mobile Viewport (<768px): Stacks into 1 column */
        @media (max-width: 767px) {
          .hero-section {
            min-height: auto !important;
            justify-content: flex-start !important;
            padding-bottom: 24px !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            min-height: auto !important;
          }
          .hero-visual {
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
            margin: 12px auto 0 !important;
          }
          .hero-image-wrapper {
            max-width: 100% !important;
            margin: 0 auto !important;
            justify-content: center !important;
          }
          .hero-collage-img {
            transform: scale(1.02) !important;
            transform-origin: center !important;
            max-height: clamp(210px, 32vh, 280px) !important;
            width: 100% !important;
            object-fit: contain !important;
            object-position: center !important;
            margin: 0 auto !important;
          }
          .hero-left-fade-overlay {
            display: none !important;
          }
          .desktop-br {
            display: none !important;
          }
          .hero-subtitle {
            font-size: 14.5px !important;
            line-height: 1.55 !important;
            margin-bottom: 18px !important;
          }
          .hero-landing-container {
            padding-right: 20px !important;
          }
        }

        @media (max-width: 640px) {
          .hero-landing-container {
            padding-right: 16px !important;
          }
          .hero-title {
            font-size: clamp(32px, 8vw, 42px) !important;
            margin-bottom: 12px !important;
          }
          .hero-cta-group {
            gap: 10px !important;
            margin-bottom: 20px !important;
          }
          .hero-btn-primary, .hero-btn-secondary {
            flex: 1 1 calc(50% - 6px) !important;
            padding: 13px 14px !important;
            font-size: 14px !important;
            justify-content: center !important;
            white-space: nowrap !important;
          }
          .app-badges-row {
            gap: 8px !important;
          }
          .app-badge-btn {
            min-width: 130px !important;
            padding: 8px 12px !important;
            flex: 1 1 130px !important;
            border-radius: 12px !important;
            gap: 8px !important;
          }
          .app-badge-subtitle {
            font-size: 8.5px !important;
          }
          .app-badge-title {
            font-size: 13.5px !important;
          }
          .hero-collage-img {
            max-height: clamp(210px, 32vh, 290px) !important;
          }
          .guarantees-strip {
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
            padding: 12px 8px !important;
            margin-top: 20px !important;
            background: #F8FCF9;
            border-radius: 16px;
            border: 1px solid #E2EFE7;
          }
          .guarantee-item {
            padding: 6px 4px !important;
            gap: 8px !important;
            border-bottom: none !important;
          }
          .guarantee-item div div:first-child {
            font-size: 12.5px !important;
          }
          .guarantee-item div div:last-child {
            font-size: 11px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-trust-pill {
            gap: 6px !important;
            padding: 5px 10px 5px 8px !important;
            margin-bottom: 10px !important;
          }
          .trust-pill-text-full {
            display: none !important;
          }
          .trust-pill-text-short {
            display: inline !important;
            font-size: 12px !important;
            font-weight: 700 !important;
          }
          .trust-pill-badge {
            display: none !important;
          }
          .trust-pill-avatars img {
            width: 20px !important;
            height: 20px !important;
            margin-left: -5px !important;
          }
          .hero-cta-group {
            gap: 8px !important;
            margin-bottom: 18px !important;
          }
          .hero-btn-primary, .hero-btn-secondary {
            flex: 1 1 calc(50% - 4px) !important;
            padding: 12px 10px !important;
            font-size: 13px !important;
            justify-content: center !important;
            white-space: nowrap !important;
          }
        }

        @media (max-width: 360px) {
          .hero-btn-primary, .hero-btn-secondary {
            flex: 1 1 100% !important;
          }
          .hero-title {
            font-size: 28px !important;
          }
        }
      `}</style>
        </section>
    );
};
