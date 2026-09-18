import { useState, useEffect } from 'react';
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
import './App.css';

function App() {
  useAdaptiveScreen();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [currentRoute, setCurrentRoute] = useState<'home' | '404'>('home');

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#404') {
        setCurrentRoute('404');
      } else {
        setCurrentRoute('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

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
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections or 404 View */}
      {currentRoute === '404' ? (
        <NotFoundView 
          onBackHome={() => {
            window.location.hash = '';
            setCurrentRoute('home');
          }} 
          onSelectService={(service) => handleOpenBooking(service)}
        />
      ) : (
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
      )}

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
      />

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
