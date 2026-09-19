import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdaptiveScreen } from './hooks/useAdaptiveScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { WhySanitix } from './components/WhySanitix';
import { AboutUs } from './components/AboutUs';
import { PartnerCareers } from './components/PartnerCareers';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { NotFoundView } from './components/NotFoundView';
import { LegalPage } from './components/LegalPage';
import './App.css';

function App() {
  useAdaptiveScreen();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  
  const getRouteFromUrl = (): 'home' | '404' | 'privacy' | 'terms' => {
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
    const hash = window.location.hash.toLowerCase();

    if (path === '/privacy' || path === '/privacy-policy' || hash === '#privacy' || hash === '#/privacy' || hash === '#/privacy-policy') {
      return 'privacy';
    }
    if (path === '/terms' || path === '/terms-and-conditions' || path === '/terms-of-use' || hash === '#terms' || hash === '#/terms' || hash === '#/terms-and-conditions') {
      return 'terms';
    }
    if (hash === '#404') {
      return '404';
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<'home' | '404' | 'privacy' | 'terms'>(getRouteFromUrl());

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(getRouteFromUrl());
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateTo = (route: 'home' | 'privacy' | 'terms') => {
    if (route === 'home') {
      window.history.pushState({}, '', '/');
      setCurrentRoute('home');
      window.scrollTo(0, 0);
    } else if (route === 'privacy') {
      window.history.pushState({}, '', '/privacy');
      setCurrentRoute('privacy');
      window.scrollTo(0, 0);
    } else if (route === 'terms') {
      window.history.pushState({}, '', '/terms');
      setCurrentRoute('terms');
      window.scrollTo(0, 0);
    }
  };

  const handleOpenBooking = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedService(undefined);
  };

  const handleExploreServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const aboutElement = document.getElementById('about-us');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {currentRoute === '404' ? (
          <motion.div
            key="404"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.08, ease: "easeOut" }}
          >
            <Navbar onOpenBooking={handleOpenBooking} />
            <NotFoundView 
              onBackHome={() => navigateTo('home')} 
              onSelectService={(service) => handleOpenBooking(service)}
            />
            <Footer
              onOpenBooking={() => handleOpenBooking()}
              onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
              onNavigateToLegal={navigateTo}
            />
          </motion.div>
        ) : currentRoute === 'privacy' || currentRoute === 'terms' ? (
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.08, ease: "easeOut" }}
          >
            <LegalPage
              type={currentRoute}
              onBackHome={() => navigateTo('home')}
              onNavigateTo={(type) => navigateTo(type)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.08, ease: "easeOut" }}
          >
            {/* Navigation */}
            <Navbar onOpenBooking={handleOpenBooking} />

            <main className="main-content-flow">
              {/* Hero Showcase */}
              <Hero
                onOpenBooking={() => handleOpenBooking()}
                onExploreServices={handleExploreServices}
              />

              {/* Services Carousel */}
              <Services onSelectService={(service: string) => handleOpenBooking(service)} />

              {/* How It Works Flow */}
              <HowItWorks />

              {/* Why Sanitix & Service Bento */}
              <WhySanitix
                onLearnMore={handleLearnMore}
                onOpenBooking={() => handleOpenBooking()}
              />

              {/* About Us & Fleet Mission */}
              <AboutUs />

              {/* Careers & Fleet Partner Opportunities Bento (Side-by-Side) */}
              <PartnerCareers
                onOpenBooking={() => handleOpenBooking()}
                isPartnerModalOpen={isPartnerModalOpen}
                onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
                onClosePartnerModal={() => setIsPartnerModalOpen(false)}
              />
            </main>

            {/* Footer */}
            <Footer
              onOpenBooking={() => handleOpenBooking()}
              onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
              onNavigateToLegal={navigateTo}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Booking Popup Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={preselectedService}
      />
    </div>
  );
}

export default App;
