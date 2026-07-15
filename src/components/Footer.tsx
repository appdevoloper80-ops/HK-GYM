import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Shield, Award, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Title block with bento feel */}
      <div className="bento-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-brand-orange font-mono text-[10px] tracking-[0.3em] uppercase block mb-1 font-bold">
            Get in Touch // Locate the Gym
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide text-white uppercase leading-none">
            Find <span className="text-brand-orange">HK Fitness</span>
          </h2>
        </div>
        <span className="text-zinc-650 font-mono text-[10px] uppercase tracking-widest hidden sm:inline-block">
          Contact Module // CM-05
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column: Location & Map Details */}
        <div className="bento-card p-6 flex flex-col justify-between space-y-6 group">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bebas text-2xl tracking-wider text-brand-orange">
                HK <span className="text-white">FITNESS</span>
              </span>
              <span className="text-[9px] uppercase font-mono text-zinc-500 border-l border-zinc-800 pl-2 tracking-widest">
                Tirupati
              </span>
            </div>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light mb-4">
              Our state-of-the-art training facility is strategically located in Tirupati, Andhra Pradesh. Built with imported Spanish machinery and led by champion Natural Bodybuilder Hari Krishna.
            </p>
            
            <div className="flex items-start space-x-3 text-xs text-zinc-300">
              <MapPin size={15} className="text-brand-orange shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">HK Fitness and Unisex Gym</p>
                <p className="font-light mt-1 text-zinc-400">Sanjay Gandhi Nagar, Near New Balaji Colony,</p>
                <p className="font-light text-zinc-450">Tirupati, Andhra Pradesh 517501</p>
              </div>
            </div>
          </div>

          {/* Click-Responsive Google Map CTA */}
          <div className="pt-2">
            <a
              id="footer-google-map-btn"
              href="https://share.google/1GVzkkTbxA8dhCz5Z"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 bg-zinc-950 border border-zinc-900 hover:bg-brand-orange hover:text-black hover:border-brand-orange text-white text-xs font-bebas tracking-widest uppercase py-3.5 px-4 rounded-xl transition-all duration-300 shadow-md"
            >
              <MapPin size={12} className="shrink-0" />
              <span>Launch Google Map Directions</span>
            </a>
          </div>
        </div>

        {/* Center Column: Direct Social Links & Operating Hours */}
        <div className="bento-card p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <h3 className="font-display font-bold text-xs text-brand-orange uppercase tracking-[0.25em]">
              Direct Social Footprint
            </h3>
            <p className="font-sans text-xs text-zinc-400 font-light">
              Join our online digital network of drug-free athletic communities. Follow us for daily workout reels, supplement tips, and natural transformation logs.
            </p>
            
            {/* Social links wrappers */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                id="footer-instagram-link"
                href="https://www.instagram.com/hkfitnesstpt?igsh=MW4zeGdkMzc5eDViOQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-brand-orange hover:border-brand-orange rounded-xl transition-all duration-300 shadow-lg group"
                aria-label="Follow HK Fitness on Instagram"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>

              <a
                id="footer-facebook-link"
                href="https://www.facebook.com/profile.php?id=61556760875690"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-brand-orange hover:border-brand-orange rounded-xl transition-all duration-300 shadow-lg group"
                aria-label="Connect with HK Fitness on Facebook"
              >
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* General quick highlights */}
          <div className="pt-4 border-t border-zinc-900 space-y-1.5">
            <div className="flex items-center space-x-2 text-xs text-zinc-450 font-mono">
              <Clock size={12} className="text-brand-orange" />
              <span className="uppercase tracking-widest text-[9px] font-bold">Gym Timings</span>
            </div>
            <p className="font-sans text-xs text-zinc-400 font-light">
              Morning 5:00 AM to Night 9:00 PM • Monday to Saturday
            </p>
          </div>
        </div>

        {/* Right Column: Dial Phone Support Wrapper */}
        <div className="bento-card p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <h3 className="font-display font-bold text-xs text-brand-orange uppercase tracking-[0.25em]">
              Direct Voice Support
            </h3>
            <p className="font-sans text-xs text-zinc-400 font-light">
              Have custom questions regarding personal corporate packages, supplement quality, or special athletic conditioning? Talk directly to our support desk.
            </p>

            {/* Direct clickable Dial Phone wrapper */}
            <div className="p-4 bg-zinc-950 border border-zinc-900 hover:border-brand-orange/30 transition-colors duration-300 rounded-xl group mt-2">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Direct Helpdesk Dial:</span>
              <a
                id="footer-phone-support"
                href="tel:+918179186661"
                className="flex items-center space-x-2.5 text-white hover:text-brand-orange transition-colors duration-200"
              >
                <Phone size={16} className="text-brand-orange group-hover:animate-bounce" />
                <span className="font-bebas text-xl tracking-wider">+91 8179186661</span>
              </a>
            </div>
          </div>

          {/* Quality Accents */}
          <div className="flex items-center space-x-3 pt-4 border-t border-zinc-900 text-zinc-600">
            <div className="flex items-center space-x-1.5 text-[9px] uppercase font-mono tracking-widest">
              <Shield size={11} className="text-brand-orange" />
              <span>Drug-Free</span>
            </div>
            <span>|</span>
            <div className="flex items-center space-x-1.5 text-[9px] uppercase font-mono tracking-widest">
              <Award size={11} className="text-brand-orange" />
              <span>Spain Gear</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Credits Area */}
      <div className="bento-card p-5 flex flex-col sm:flex-row items-center justify-between font-mono text-[9px] text-zinc-500 space-y-3 sm:space-y-0 text-center sm:text-left">
        <p>© {currentYear} HK Fitness and Unisex Gym. All Rights Reserved.</p>
        <p className="uppercase tracking-widest">
          Crafted for <span className="text-zinc-400">Hari Krishna Champion Community</span> • Built to Last
        </p>
      </div>
    </footer>
  );
}
