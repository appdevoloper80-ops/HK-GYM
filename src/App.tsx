import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutOwner from './components/AboutOwner';
import CoreServices from './components/CoreServices';
import EliteGear from './components/EliteGear';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AICoach from './components/AICoach';
import Testimonials from './components/Testimonials';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isCoachOpen, setIsCoachOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt autoplay logic on first interaction to comply with browser policies
    const handleInteraction = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3; // Set a reasonable background volume
        audioRef.current.play().catch(err => console.log('Autoplay blocked:', err));
        
        // Remove listeners after first interaction
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
      }
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Helper to render the currently selected page/section
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            <Hero onNavClick={handleNavClick} />
            <Testimonials />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <AboutOwner />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <CoreServices />
          </motion.div>
        );
      case 'equipment':
        return (
          <motion.div
            key="equipment"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <EliteGear />
          </motion.div>
        );
      case 'pricing':
        return (
          <motion.div
            key="pricing"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Pricing />
          </motion.div>
        );
      case 'find':
        return (
          <motion.div
            key="find"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Footer />
          </motion.div>
        );
      default:
        return <Hero onNavClick={handleNavClick} />;
    }
  };

  return (
    <div id="hk-app-root" className="min-h-screen bg-brand-dark text-white font-sans antialiased overflow-x-hidden selection:bg-brand-orange selection:text-black flex flex-col justify-between">
      <div>
        {/* Sticky Premium Header */}
        <Header activeSection={activeSection} onNavClick={handleNavClick} onCoachClick={() => setIsCoachOpen(true)} />

        {/* Main Section Content Wrapper */}
        <main id="hk-main-content" className="pt-36 sm:pt-28 md:pt-24 pb-12">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </main>
      </div>

      {/* Global 24/7 AI Coach drawer */}
      <AICoach isOpen={isCoachOpen} onClose={() => setIsCoachOpen(false)} />

      {/* Hidden Global Background Audio */}
      <audio 
        ref={audioRef} 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
        loop 
        playsInline 
        className="hidden" 
      />

      {/* Tiny clean copyright footer for all other pages except 'find' */}
      {activeSection !== 'find' && (
        <footer className="py-6 text-center text-[10px] font-mono text-zinc-600 border-t border-zinc-950 max-w-7xl mx-auto w-full px-4">
          <p>© {new Date().getFullYear()} HK Fitness and Unisex Gym. All Rights Reserved.</p>
        </footer>
      )}
    </div>
  );
}
