import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight, Shield, Droplets, Truck, Wrench, Sparkles, Phone, Mail } from "lucide-react";

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [supportDropdown, setSupportDropdown] = useState(false);
  const supportRef = useRef<HTMLDivElement>(null);
  const supportTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSupportMouseEnter = () => {
    if (supportTimeoutRef.current) clearTimeout(supportTimeoutRef.current);
    setSupportDropdown(true);
  };

  const handleSupportMouseLeave = () => {
    supportTimeoutRef.current = setTimeout(() => {
      setSupportDropdown(false);
    }, 220);
  };

  const handleSupportToggle = () => {
    if (supportTimeoutRef.current) clearTimeout(supportTimeoutRef.current);
    setSupportDropdown((prev) => !prev);
  };

  // Close support dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (supportRef.current && !supportRef.current.contains(e.target as Node)) {
        setSupportDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const servicesList = [
    { name: "Water Tanker & Supply", icon: Droplets, desc: "Potable & commercial water fleet" },
    { name: "Deep Cleaning", icon: Truck, desc: "Kitchen and House deep cleaning" },
    { name: "Heavy Equipment & JCB", icon: Wrench, desc: "Excavators, cranes & loaders" },
    { name: "Dumper Booking", icon: Sparkles, desc: "Construction & debris haulage" },
    { name: "Septic & Sanitation", icon: Shield, desc: "Drain jetting & vacuum suction" },
  ];

  const handleNavClick = (anchorId: string) => {
    setMobileMenuOpen(false);
    if (window.location.hash === "#404") {
      window.location.hash = "";
    }
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.96)" : "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: isScrolled ? "1px solid rgba(229, 236, 231, 0.9)" : "1px solid rgba(229, 236, 231, 0.4)",
        boxShadow: isScrolled ? "0 4px 20px -4px rgba(6, 35, 25, 0.06)" : "none",
        paddingTop: "8px",
        paddingBottom: "10px"
      }}
    >
      <div className="landing-container full-width-landing-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "48px" }}>

        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.hash === "#404") {
              window.location.hash = "";
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="navbar-brand-link"
          style={{ display: "flex", alignItems: "center", textDecoration: "none", outline: "none", border: "none", boxShadow: "none" }}
        >
          <img
            src="/images/sanitix_logo.webp"
            alt="sanitiX — Essential Services. Zero Hassle."
            style={{
              height: "46px",
              width: "auto",
              objectFit: "contain",
              display: "block",
              mixBlendMode: "multiply",
              outline: "none",
              border: "none"
            }}
            className="navbar-brand-logo"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "28px" }} className="desktop-nav">
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "none",
                border: "none",
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 600,
                color: "#1F2937",
                cursor: "pointer",
                padding: "8px 10px",
                borderRadius: "8px",
                transition: "all 0.2s"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#00A859";
                e.currentTarget.style.backgroundColor = "rgba(0, 168, 89, 0.06)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#1F2937";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Services
              <ChevronDown size={15} style={{ transform: servicesDropdown ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>

            {/* Dropdown Menu */}
            {servicesDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "-20px",
                  width: "320px",
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "12px",
                  boxShadow: "0 20px 40px -8px rgba(6, 35, 25, 0.16), 0 0 0 1px rgba(229, 236, 231, 0.8)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  zIndex: 110,
                  animation: "fadeIn 0.2s ease-out"
                }}
              >
                {servicesList.map((svc, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setServicesDropdown(false);
                      onOpenBooking(svc.name);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "10px 12px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: "background-color 0.15s"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f4fbf7")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    <div style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: "#e8f9f0",
                      color: "#00A859",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}>
                      <svc.icon size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>{svc.name}</div>
                      <div style={{ fontSize: "12px", color: "#6b7280" }}>{svc.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick("how-it-works")}
            style={{ background: "none", border: "none", fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 600, color: "#1F2937", cursor: "pointer", padding: "8px 10px", borderRadius: "8px", transition: "all 0.2s" }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#00A859";
              e.currentTarget.style.backgroundColor = "rgba(0, 168, 89, 0.06)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#1F2937";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            How It Works
          </button>

              <button
                onClick={() => handleNavClick("partner-careers")}
            style={{ background: "none", border: "none", fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 600, color: "#1F2937", cursor: "pointer", padding: "8px 10px", borderRadius: "8px", transition: "all 0.2s" }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#00A859";
              e.currentTarget.style.backgroundColor = "rgba(0, 168, 89, 0.06)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#1F2937";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            For Partners
          </button>

          <button
            onClick={() => handleNavClick("about-us")}
            style={{ background: "none", border: "none", fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 600, color: "#1F2937", cursor: "pointer", padding: "8px 10px", borderRadius: "8px", transition: "all 0.2s" }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#00A859";
              e.currentTarget.style.backgroundColor = "rgba(0, 168, 89, 0.06)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#1F2937";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick("footer")}
            style={{ background: "none", border: "none", fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 600, color: "#1F2937", cursor: "pointer", padding: "8px 10px", borderRadius: "8px", transition: "all 0.2s" }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#00A859";
              e.currentTarget.style.backgroundColor = "rgba(0, 168, 89, 0.06)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#1F2937";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Careers
          </button>

          <button
            onClick={() => handleNavClick("footer")}
            style={{ background: "none", border: "none", fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 600, color: "#1F2937", cursor: "pointer", padding: "8px 10px", borderRadius: "8px", transition: "all 0.2s" }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#00A859";
              e.currentTarget.style.backgroundColor = "rgba(0, 168, 89, 0.06)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#1F2937";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Contact Us
          </button>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        {/* Support Popover & Mobile Toggle */}
        <div className="navbar-actions" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            ref={supportRef}
            className="nav-support-wrapper"
            style={{ position: "relative" }}
            onMouseEnter={handleSupportMouseEnter}
            onMouseLeave={handleSupportMouseLeave}
          >
            <button
              onClick={handleSupportToggle}
              className="nav-support-btn"
              aria-expanded={supportDropdown}
              aria-haspopup="true"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "9px 18px",
                fontSize: "14px",
                fontWeight: 700,
                borderRadius: "9999px",
                border: "1.5px solid #D1EAD9",
                backgroundColor: supportDropdown ? "#EAF7F0" : "#F4FAF6",
                color: "#064E3B",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0, 168, 89, 0.08)",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              <span
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "#00A859",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  flexShrink: 0
                }}
              >
                <Phone size={13} />
              </span>
              <span className="nav-support-text-full">24/7 Helpline</span>
              {/* <span className="nav-support-text-short">Call Us</span> */}
              <ChevronDown
                size={14}
                style={{
                  transform: supportDropdown ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                  color: "#059669"
                }}
              />
            </button>

            {/* Support Popover Dropdown Card */}
            {supportDropdown && (
              <div
                className="nav-support-popover"
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  width: "320px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "16px",
                  boxShadow: "0 20px 45px -10px rgba(6, 35, 25, 0.16), 0 0 0 1px rgba(229, 236, 231, 0.85)",
                  zIndex: 100
                }}
              >
                {/* Header */}
                <div style={{ marginBottom: "12px", paddingBottom: "10px", borderBottom: "1px solid #F0F4F2" }}>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#0B2B22" }}>Instant Help & Support</div>
                  <div style={{ fontSize: "11px", color: "#6B7280", marginTop: "2px" }}>Direct line to dispatch team</div>
                </div>

                {/* Phone Call Card */}
                <a
                  href="tel:+912269710156"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 12px",
                    borderRadius: "14px",
                    backgroundColor: "#F9FDFB",
                    border: "1px solid #E5ECE7",
                    textDecoration: "none",
                    marginBottom: "8px",
                    transition: "all 0.18s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#F0FDF6";
                    e.currentTarget.style.borderColor = "#A7F3D0";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#F9FDFB";
                    e.currentTarget.style.borderColor = "#E5ECE7";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <span
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: "#E8F9F0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#00A859",
                      flexShrink: 0
                    }}
                  >
                    <Phone size={18} />
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "10.5px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#6B7280", fontWeight: 600 }}>Helpline Number</div>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#0B2B22" }}>+91 22697 10156</div>
                  </div>
                  <span
                    style={{
                      fontSize: "11.5px",
                      fontWeight: 700,
                      color: "#00A859",
                      backgroundColor: "#E8F9F0",
                      padding: "4px 9px",
                      borderRadius: "9999px"
                    }}
                  >
                    Call
                  </span>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:support@sanitix.in"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 12px",
                    borderRadius: "14px",
                    backgroundColor: "#F9FDFB",
                    border: "1px solid #E5ECE7",
                    textDecoration: "none",
                    transition: "all 0.18s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#F0FDF6";
                    e.currentTarget.style.borderColor = "#A7F3D0";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#F9FDFB";
                    e.currentTarget.style.borderColor = "#E5ECE7";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <span
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: "#E8F9F0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#00A859",
                      flexShrink: 0
                    }}
                  >
                    <Mail size={18} />
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "10.5px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#6B7280", fontWeight: 600 }}>Customer Email</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#0B2B22", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>support@sanitix.in</div>
                  </div>
                  <span
                    style={{
                      fontSize: "11.5px",
                      fontWeight: 700,
                      color: "#4B5563",
                      backgroundColor: "#F3F4F6",
                      padding: "4px 9px",
                      borderRadius: "9999px"
                    }}
                  >
                    Email
                  </span>
                </a>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle touch-target"
            style={{
              display: "none",
              background: "#F3F4F6",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              color: "#111827",
              cursor: "pointer",
              padding: "8px",
              minWidth: "44px",
              minHeight: "44px",
              alignItems: "center",
              justifyContent: "center"
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {
        mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            style={{
              position: "fixed",
              top: "66px",
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(6, 35, 25, 0.4)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              zIndex: 99
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "#FFFFFF",
                borderBottom: "2px solid #E5ECE7",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                padding: "24px 20px 32px 20px",
                maxHeight: "calc(100vh - 88px)",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "16px"
              }}
            >
              <div style={{ fontSize: "12px", fontWeight: 800, color: "#00A859", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                MAIN NAVIGATION
              </div>

              <button
                onClick={() => handleNavClick("services")}
                style={{ textAlign: "left", background: "none", border: "none", fontSize: "17px", fontWeight: 700, color: "#111827", padding: "8px 0", cursor: "pointer" }}
              >
                Services
              </button>

              <button
                onClick={() => handleNavClick("how-it-works")}
                style={{ textAlign: "left", background: "none", border: "none", fontSize: "17px", fontWeight: 700, color: "#111827", padding: "8px 0", cursor: "pointer" }}
              >
                How It Works
              </button>

              <button
                onClick={() => handleNavClick("partner-careers")}
                style={{ textAlign: "left", background: "none", border: "none", fontSize: "17px", fontWeight: 700, color: "#111827", padding: "8px 0", cursor: "pointer" }}
              >
                For Partners
              </button>

              <button
                onClick={() => handleNavClick("about-us")}
                style={{ textAlign: "left", background: "none", border: "none", fontSize: "17px", fontWeight: 700, color: "#111827", padding: "8px 0", cursor: "pointer" }}
              >
                About Us
              </button>

              <button
                onClick={() => handleNavClick("footer")}
                style={{ textAlign: "left", background: "none", border: "none", fontSize: "17px", fontWeight: 700, color: "#111827", padding: "8px 0", cursor: "pointer" }}
              >
                Careers
              </button>

              <button
                onClick={() => handleNavClick("footer")}
                style={{ textAlign: "left", background: "none", border: "none", fontSize: "17px", fontWeight: 700, color: "#111827", padding: "8px 0", cursor: "pointer" }}
              >
                Contact Us
              </button>

              <div style={{ height: "1px", backgroundColor: "#E5ECE7", margin: "4px 0" }} />

              {/* Quick Contact */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href="tel:+912269710156"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    backgroundColor: "#F0FDF4",
                    color: "#062319",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 600,
                    border: "1px solid #BBF7D0"
                  }}
                >
                  <Phone size={18} color="#00A859" /> Call 24/7 Helpline (+912269710156)
                </a>

                <a
                  href="mailto:support@sanitix.in"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    backgroundColor: "#F9FAFB",
                    color: "#374151",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 600,
                    border: "1px solid #E5E7EB"
                  }}
                >
                  <Mail size={18} color="#00A859" /> Email: support@sanitix.in
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-primary"
                style={{ width: "100%", padding: "14px", fontSize: "16px", marginTop: "6px" }}
              >
                Book a Service Now <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )
      }

      <style>{`
        .navbar-brand-link,
        .navbar-brand-link:focus,
        .navbar-brand-link:active,
        .navbar-brand-link:hover,
        .navbar-brand-logo,
        .navbar-brand-logo:focus,
        .navbar-brand-logo:active {
          outline: none !important;
          border: none !important;
          box-shadow: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        @keyframes popoverSlideFade {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .nav-support-popover {
          animation: popoverSlideFade 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .desktop-nav button {
          white-space: nowrap;
        }
        @media (min-width: 1101px) {
          .navbar-actions {
            margin-right: 20px;
          }
        }
        @media (max-width: 1100px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
          .nav-support-wrapper {
            display: none !important;
          }
          .navbar-brand-logo {
            height: 38px !important;
          }
        }
        @media (max-width: 480px) {
          .navbar-brand-logo {
            height: 34px !important;
          }
        }
        @media (max-width: 360px) {
          .navbar-brand-logo {
            height: 30px !important;
          }
        }
      `}</style>
    </header >
  );
};
