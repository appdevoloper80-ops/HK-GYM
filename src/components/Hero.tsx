import React from 'react';
import { Shield, Award, Dumbbell, Cpu, Film, MapPin, ChevronRight } from 'lucide-react';

import championImg from '../assets/images/hari_krishna_champion_1784101036106.jpg';
import profileImg from '../assets/images/hari_krishna_1784041113057.jpg';
import regeneratedIntroImg from '../assets/images/regenerated_image_1784119028528.png';
import regeneratedCommercialImg from '../assets/images/regenerated_image_1784120659853.png';

interface HeroProps {
  onNavClick?: (sectionId: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {

  const hubItems = [
    {
      id: "services",
      label: "Our Core Services",
      desc: "Explore physical conditioning programs tailored to your goals: functional agility, general fitness, and athletic training.",
      icon: Dumbbell,
      tag: "Core Services"
    },
    {
      id: "equipment",
      label: "Elite Gear & Infrastructure",
      desc: "Step inside our Tirupati facility to see premium, biomechanically optimized training machinery imported from Spain.",
      icon: Cpu,
      tag: "Biomechanics"
    },
    {
      id: "pricing",
      label: "Membership Packages",
      desc: "Flexible, high-value plans tailored for monthly workouts, personal training programs, and elite packages.",
      icon: Award,
      tag: "Pricing Plans"
    },
    {
      id: "about",
      label: "About the Owner",
      desc: "Meet champion natural bodybuilder Hari Krishna and read about his professional, drug-free training philosophy.",
      icon: Shield,
      tag: "Champion Lead"
    },
    {
      id: "legacy",
      label: "Our Legacy",
      desc: "Watch dynamic training reels, offline assembly previews, and cinematic student transformation highlights.",
      icon: Film,
      tag: "Media Vault"
    },
    {
      id: "find",
      label: "Find HK Fitness",
      desc: "Check out operating hours, locate our Sanjay Gandhi Nagar facility, and launch instant Google Maps directions.",
      icon: MapPin,
      tag: "Gym Location"
    }
  ];

  return (
    <section id="home" className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 2-Column Desktop Bento Grid for Core Hero Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        
        {/* Left Bento Module: Title branding & Background Image */}
        <div 
          id="intro-image-container" 
          className="lg:col-span-5 relative h-[380px] sm:h-[450px] lg:h-[500px] overflow-hidden bg-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl group transition-all duration-300 hover:border-brand-orange/40"
        >
          {/* High-quality background gym image */}
          <img
            src={regeneratedIntroImg}
            alt="HK Fitness - World Class Unisex Gym Arena"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            style={{ filter: 'brightness(0.55) contrast(1.1)' }}
            referrerPolicy="no-referrer"
          />

          {/* Semi-transparent gradient dark overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/60 pointer-events-none z-10" />

          {/* Foreground Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 z-20 pointer-events-none">
            {/* Upper Info Badge */}
            <div className="flex justify-between items-start">
              <span className="bg-brand-orange/15 border border-brand-orange/40 text-brand-orange text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md backdrop-blur-sm">
                Tirupati, AP
              </span>
              <span className="bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded backdrop-blur-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                Premium Gym
              </span>
            </div>

            {/* Lower Branding Content */}
            <div className="space-y-2">
              <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wider text-white leading-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                HK Fitness <br />
                <span className="text-brand-orange font-bebas">and Unisex Gym</span>
              </h1>
              <p className="font-sans font-medium text-xs tracking-wider text-brand-silver uppercase border-t border-brand-orange/30 pt-2 inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Premium Performance Hub
              </p>
            </div>
          </div>
        </div>

        {/* Right Bento Module: Premium Tour Showcase Image */}
        <div id="commercial-showcase" className="lg:col-span-7 bg-zinc-950 rounded-2xl border border-zinc-800 p-4 sm:p-5 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-brand-orange/40">
          
          {/* Header of Showcase Window */}
          <div className="flex items-center justify-between pb-3 border-b border-zinc-900 mb-4 font-mono text-[10px] text-zinc-500 pointer-events-none">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="uppercase tracking-widest text-zinc-300">HK Fitness Showcase</span>
            </span>
            <span className="tracking-wider uppercase text-brand-orange font-bold">Premium Infrastructure</span>
          </div>

          {/* Dynamic Image Area */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-zinc-900 flex-1 group/img">
            <img
              src={regeneratedCommercialImg}
              alt="Musclemania Champion Hari Krishna"
              className="w-full h-full object-cover transition-all duration-700 group-hover/img:scale-105"
              style={{ filter: 'brightness(0.75) contrast(1.1)' }}
              referrerPolicy="no-referrer"
            />

            {/* Premium Info Overlay (with pointer-events-none so click goes directly to image) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/30 flex flex-col justify-end p-5 pointer-events-none">
              <div className="space-y-1">
                <span className="bg-brand-orange text-black font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded font-bold inline-block">
                  Lifetime Natural Champion Zone
                </span>
                <h3 className="font-bebas text-2xl tracking-widest text-white uppercase">
                  Musclemania Champion Hari Krishna
                </h3>
                <p className="text-zinc-400 text-[11px] font-sans">
                  Featuring AP's only Lifetime Natural Musclemania Champion and Mr. Asia Finalist.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Bento Dashboard Navigation Hub */}
      <div className="my-12 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-4">
          <div>
            <span className="text-brand-orange font-mono text-[9px] tracking-[0.3em] uppercase block mb-1 font-bold">
              Premium Nav Center
            </span>
            <h2 className="font-bebas text-2xl sm:text-3xl tracking-wide text-white uppercase">
              Explore the <span className="text-brand-orange">Performance Hub</span>
            </h2>
          </div>
          <p className="font-sans text-[11px] text-zinc-500 max-w-sm sm:text-right font-light">
            Tap any section below to open its dedicated page instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                id={`hub-card-${item.id}`}
                onClick={() => onNavClick?.(item.id)}
                className="bento-card p-6 flex flex-col justify-between text-left group hover:border-brand-orange/40 hover:shadow-[0_4px_25px_rgba(255,107,0,0.1)] transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl group-hover:border-brand-orange/30 transition-all duration-300 text-brand-orange">
                      <IconComponent size={20} />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-900">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-bebas text-xl sm:text-2xl tracking-wide text-white uppercase group-hover:text-brand-orange transition-colors duration-300 mb-2">
                    {item.label}
                  </h3>
                  
                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center text-[10px] font-mono uppercase tracking-wider text-zinc-500 group-hover:text-brand-orange transition-colors">
                  <span>Enter Page</span>
                  <ChevronRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Massive Bento-style Impact Highlight Box */}
      <div className="bento-card p-8 sm:p-12 text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-zinc-600 uppercase tracking-widest select-none">
          Span // Spain Machinery Spec
        </div>
        
        <div className="inline-block h-[2px] w-24 bg-brand-orange mb-6" />
        
        <h2 id="impact-statement" className="font-bebas text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none text-white max-w-5xl mx-auto drop-shadow-lg">
          "TRAIN LIKE NEVER BEFORE WITH <span className="text-brand-orange underline decoration-brand-orange/40 decoration-4 underline-offset-8">EQUIPMENTS IMPORTED</span> FROM SPAIN"
        </h2>
        
        <p className="mt-6 font-sans text-xs sm:text-sm md:text-base text-zinc-400 max-w-3xl mx-auto tracking-wide font-light leading-relaxed">
          Experience raw athletic power with biomechanically optimized, world-class machinery engineered in Europe for maximum muscle stimulation and joint safety.
        </p>
      </div>
    </section>
  );
}
