import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  onCoachClick: () => void;
}

export default function Header({ activeSection, onNavClick, onCoachClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoIndex, setLogoIndex] = useState(5);
  const [logoError, setLogoError] = useState(false);

  const getLogoSrc = () => {
    if (logoIndex === 5) return '/assets/.aistudio/image_5.png';
    if (logoIndex === 4) return '/assets/.aistudio/image_4.png';
    if (logoIndex === 3) return '/assets/.aistudio/image_3.png';
    if (logoIndex === 2) return '/assets/.aistudio/image_2.png';
    return '/assets/.aistudio/image_0.png';
  };

  const handleLogoError = () => {
    if (logoIndex === 5) {
      setLogoIndex(4);
    } else if (logoIndex === 4) {
      setLogoIndex(3);
    } else if (logoIndex === 3) {
      setLogoIndex(2);
    } else if (logoIndex === 2) {
      setLogoIndex(0);
    } else {
      setLogoError(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Dashboard', id: 'home' },
    { label: 'Our Core Services', id: 'services' },
    { label: 'Elite Gear & Infrastructure', id: 'equipment' },
    { label: 'Membership Packages', id: 'pricing' },
    { label: 'About the Owner', id: 'about' },
    { label: 'Find HK Fitness', id: 'find' },
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-orange/15 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-brand-dark via-brand-dark/80 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2.5 md:gap-4">
          
          {/* Logo & Call Section for Small Devices */}
          <div className="w-full md:w-auto flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleItemClick('home')}>
              {!logoError ? (
                <img
                  id="header-brand-logo"
                  src={getLogoSrc()}
                  alt="HK Fitness Logo"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={handleLogoError}
                />
              ) : (
                <div id="header-brand-logo-fallback" className="flex items-center space-x-2">
                  <span className="font-bebas text-2xl tracking-wider text-brand-orange">
                    HK <span className="text-white">FITNESS</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-gray-500 font-mono hidden sm:inline-block border-l border-zinc-700 pl-2">
                    Unisex Gym
                  </span>
                </div>
              )}
            </div>

            {/* Mobile Action Buttons Container */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                id="header-coach-cta-mobile"
                onClick={onCoachClick}
                className="bg-brand-orange/15 border border-brand-orange/40 text-brand-orange font-bold text-[10px] tracking-wider uppercase px-2.5 py-1.5 rounded-lg flex items-center space-x-1.5 shadow-md active:scale-95 cursor-pointer"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-orange"></span>
                </span>
                <span>AI Coach</span>
              </button>

              <a
                id="header-call-cta-mobile"
                href="tel:8179186661"
                className="bg-zinc-950 border border-zinc-850 text-white font-semibold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-lg hover:bg-[#FF8533] hover:text-black transition-all duration-300 flex items-center space-x-1 shadow-md"
              >
                <Phone size={10} className="text-brand-orange" />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Navigation - Guaranteed to layout in exactly 2 lines on mobile and 1 line on desktop */}
          <nav 
            id="main-nav-links" 
            className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-y-2 md:gap-y-0 border-t border-zinc-900/40 md:border-t-0 pt-2.5 md:pt-0"
          >
            {/* First Row: First 3 items */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6">
              {navItems.slice(0, 3).map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wider transition-all duration-300 uppercase hover:text-brand-orange relative py-0.5 whitespace-nowrap shrink-0 ${
                    activeSection === item.id
                      ? 'text-brand-orange'
                      : 'text-zinc-400'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-orange" />
                  )}
                </button>
              ))}
            </div>

            {/* Second Row: Next 3 items */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 md:ml-5 lg:ml-6">
              {navItems.slice(3).map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wider transition-all duration-300 uppercase hover:text-brand-orange relative py-0.5 whitespace-nowrap shrink-0 ${
                    activeSection === item.id
                      ? 'text-brand-orange'
                      : 'text-zinc-400'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-orange" />
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* Action Buttons Container */}
          <div className="hidden md:flex items-center space-x-3">
            {/* AI Coach Session CTA */}
            <button
              id="header-coach-cta-desktop"
              onClick={onCoachClick}
              className="bg-brand-orange/10 border border-brand-orange/35 hover:bg-[#FF8533] text-brand-orange hover:text-black font-semibold text-xs tracking-wider uppercase px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-lg cursor-pointer group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <span>24/7 AI Coach</span>
            </button>

            {/* Desktop Call CTA */}
            <a
              id="header-call-cta-desktop"
              href="tel:8179186661"
              className="bg-zinc-950 border border-zinc-850 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase px-4 py-2 rounded-xl hover:bg-[#FF8533] hover:text-black hover:border-[#FF8533] transition-all duration-300 flex items-center space-x-2 shadow-lg"
            >
              <Phone size={13} className="text-brand-orange" />
              <span>Call Us</span>
            </a>
          </div>

        </div>
      </header>

      {/* Floating / Fixed WhatsApp Bubble */}
      <a
        id="floating-whatsapp-bubble"
        href="https://wa.me/918179186661"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" className="fill-current text-white group-hover:rotate-12 transition-transform duration-300">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute right-14 bg-black/90 text-white text-xs font-semibold px-3 py-1.5 rounded-sm whitespace-nowrap shadow-md border border-zinc-800 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Let's Chat!
        </span>
      </a>
    </>
  );
}
