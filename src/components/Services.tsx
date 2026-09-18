import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Droplets,
  ShieldCheck,
  Wrench,
  Sparkles,
  Truck,
  Waves,
  Filter,
  Gauge,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Exactly 9 Finalized Sanitix Services in strict required order
  const services = [
    {
      id: 'water-tanker',
      title: 'Water Tanker Services',
      description: 'Book water tankers for residential, commercial, construction and other water-supply requirements.',
      icon: Droplets,
      iconColor: '#0284C7',
      iconBg: '#E0F2FE',
      image: '/images/service_water_tanker.webp',
      points: ['Water Tanker Booking', 'On-demand Water Supply']
    },
    {
      id: 'septic-tank',
      title: 'Septic Tank Cleaning',
      description: 'Book professional septic tank cleaning and emptying services.',
      icon: ShieldCheck,
      iconColor: '#059669',
      iconBg: '#ECFDF5',
      image: '/images/service_septic_tank.webp',
      points: ['Septic Tank Cleaning', 'Septic Tank Emptying']
    },
    {
      id: 'jcb-equipment',
      title: 'JCB & Heavy Equipment',
      description: 'Book JCBs, loaders and other heavy machinery for construction, excavation and site work.',
      icon: Wrench,
      iconColor: '#D97706',
      iconBg: '#FEF3C7',
      image: '/images/service_jcb_equipment.webp',
      points: ['JCB & Loader Services', 'Construction & Excavation']
    },
    {
      id: 'deep-cleaning',
      title: 'Deep Cleaning',
      description: 'Professional deep cleaning services for homes and other spaces.',
      icon: Sparkles,
      iconColor: '#8B5CF6',
      iconBg: '#F5F3FF',
      image: '/images/service_deep_cleaning.webp',
      points: ['Kitchen Deep Cleaning', 'House Deep Cleaning']
    },
    {
      id: 'dumper-services',
      title: 'Dumper Services',
      description: 'Book dumpers for waste, debris, soil and material transportation.',
      icon: Truck,
      iconColor: '#EA580C',
      iconBg: '#FFEDD5',
      image: '/images/service_dumper.webp',
      points: ['Dumper Booking', 'Waste & Material Transport']
    },
    {
      id: 'sewer-drain',
      title: 'Sewer & Drain Cleaning',
      description: 'Get professional sewer, drainage and blockage-cleaning services.',
      icon: Waves,
      iconColor: '#0284C7',
      iconBg: '#E0F2FE',
      image: '/images/service_sewer_drain.webp',
      points: ['Sewer Cleaning', 'Drain & Blockage Cleaning']
    },
    {
      id: 'suction-services',
      title: 'Suction Services',
      description: 'Book suction and vacuum equipment for liquid waste and related cleaning requirements.',
      icon: Filter,
      iconColor: '#10B981',
      iconBg: '#E8F9F0',
      image: '/images/service_suction.jpg',
      points: ['Suction Services', 'Vacuum Waste Removal']
    },
    {
      id: 'jetting-services',
      title: 'Jetting Services',
      description: 'High-pressure jetting services for drains, pipelines and cleaning requirements.',
      icon: Gauge,
      iconColor: '#2563EB',
      iconBg: '#EFF6FF',
      image: '/images/service_jetting.webp',
      points: ['High-Pressure Jetting', 'Drain & Pipeline Cleaning']
    },
    {
      id: 'other-cleaning',
      title: 'Other Cleaning & Sanitation Services',
      description: 'Additional cleaning and sanitation services that can be introduced as Sanitix expands.',
      icon: CheckCircle2,
      iconColor: '#00A859',
      iconBg: '#E8F9F0',
      image: '/images/service_other_cleaning.webp',
      points: ['Cleaning Services', 'Sanitation Solutions']
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = Math.max(320, Math.floor(scrollContainerRef.current.clientWidth * 0.6));
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" style={{ padding: '0', backgroundColor: '#FFFFFF', position: 'relative' }}>
      <div className="landing-container full-width-landing-container" style={{ padding: '0 56px' }}>
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <span className="badge-tag" style={{ marginBottom: '8px' }}>
              OUR SERVICES
            </span>
            <h2 style={{
              fontSize: '30px',
              fontWeight: 800,
              color: '#0D1E16',
              lineHeight: 1.22
            }}>
              A wide range of on-demand<br />services at your fingertips
            </h2>
          </div>

          {/* View All Services Link & Mobile Carousel Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a
              href="#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#00A859',
                fontSize: '14px',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'gap 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
              onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
            >
              View all services <ArrowRight size={16} />
            </a>

            {/* Mobile Header Arrows (displayed on mobile & tablet) */}
            <div className="mobile-carousel-arrows" style={{ display: 'none', alignItems: 'center', gap: '6px' }}>
              <button
                onClick={() => handleScroll('left')}
                className="carousel-header-btn"
                aria-label="Previous service"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid #E5ECE7',
                  backgroundColor: '#FFFFFF',
                  color: '#111827',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="carousel-header-btn"
                aria-label="Next service"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid #E5ECE7',
                  backgroundColor: '#FFFFFF',
                  color: '#111827',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container with Overlapping Arrow Controls */}
        <div style={{ position: 'relative' }}>
          
          {/* Left Navigation Chevron Button (Desktop) */}
          <button
            onClick={() => handleScroll('left')}
            className="desktop-carousel-arrow"
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              border: '1px solid #E5ECE7',
              backgroundColor: '#FFFFFF',
              color: '#111827',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#00A859';
              e.currentTarget.style.color = '#00A859';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,168,89,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#E5ECE7';
              e.currentTarget.style.color = '#111827';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.1)';
            }}
            aria-label="Previous service"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Navigation Chevron Button (Desktop) */}
          <button
            onClick={() => handleScroll('right')}
            className="desktop-carousel-arrow"
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              border: '1px solid #E5ECE7',
              backgroundColor: '#FFFFFF',
              color: '#111827',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#00A859';
              e.currentTarget.style.color = '#00A859';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,168,89,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#E5ECE7';
              e.currentTarget.style.color = '#111827';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.1)';
            }}
            aria-label="Next service"
          >
            <ChevronRight size={22} />
          </button>

          {/* Services Carousel Track */}
          <div
            ref={scrollContainerRef}
            style={{
              display: 'flex',
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollBehavior: 'smooth',
              gap: '14px',
              paddingTop: '10px',
              paddingBottom: '10px',
              marginTop: '-6px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory',
              touchAction: 'pan-y',
              overscrollBehaviorX: 'contain',
              overscrollBehaviorY: 'auto'
            }}
            className="services-carousel-track"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                whileHover={{ y: -5 }}
                style={{
                  flex: '0 0 calc((100% - 4 * 14px) / 5)',
                  minWidth: '220px',
                  scrollSnapAlign: 'start',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E5ECE7',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 18px -2px rgba(6, 35, 25, 0.05)',
                  transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                  boxSizing: 'border-box'
                }}
                className="service-card-item"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#A7F3D0';
                  e.currentTarget.style.boxShadow = '0 14px 28px -4px rgba(0, 168, 89, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5ECE7';
                  e.currentTarget.style.boxShadow = '0 4px 18px -2px rgba(6, 35, 25, 0.05)';
                }}
              >
                <div>
                  {/* Header with Icon and Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '7px',
                      backgroundColor: service.iconBg,
                      color: service.iconColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <service.icon size={16} />
                    </div>
                    <h3 style={{
                      fontSize: '14.5px',
                      fontWeight: 700,
                      color: '#111827',
                      lineHeight: 1.25,
                      minHeight: '36px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Service Image */}
                  <div style={{
                    width: '100%',
                    height: '130px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '12px',
                    position: 'relative',
                    backgroundColor: '#F3F4F6'
                  }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                    />
                  </div>

                  {/* Exactly 2 Bullet Points */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px 0', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {service.points.map((pt, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: '#4B5563', fontWeight: 500, lineHeight: 1.35 }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#00A859', flexShrink: 0 }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Now Button */}
                <button
                  onClick={() => onSelectService(service.title)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#00A859',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    cursor: 'pointer',
                    padding: '4px 0',
                    transition: 'gap 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = '8px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = '5px';
                  }}
                >
                  Book Now <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        .services-carousel-track {
          overflow-x: auto !important;
          overflow-y: hidden !important;
          touch-action: pan-y !important;
          overscroll-behavior-y: auto !important;
          overscroll-behavior-x: contain !important;
        }
        .services-carousel-track::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        @media (max-width: 900px) {
          .desktop-carousel-arrow {
            display: none !important;
          }
          .mobile-carousel-arrows {
            display: flex !important;
          }
        }
        @media (max-width: 1360px) {
          .service-card-item {
            flex: 0 0 calc((100% - 3 * 14px) / 4) !important;
          }
        }
        @media (max-width: 1040px) {
          .service-card-item {
            flex: 0 0 calc((100% - 2 * 14px) / 3) !important;
          }
        }
        @media (max-width: 768px) {
          .service-card-item {
            flex: 0 0 calc((100% - 14px) / 2) !important;
            min-width: 210px !important;
          }
        }
        @media (max-width: 520px) {
          .service-card-item {
            flex: 0 0 84% !important;
            min-width: 250px !important;
          }
        }
        @media (max-width: 380px) {
          .service-card-item {
            flex: 0 0 88% !important;
            min-width: 230px !important;
          }
        }
      `}</style>
    </section>
  );
};

export const ServicesSection = Services;

