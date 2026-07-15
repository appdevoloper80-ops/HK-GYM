import React, { useState } from 'react';
import { Award, Star, ShieldCheck, Dumbbell } from 'lucide-react';

import championImg from '../assets/images/hari_krishna_champion_1784101036106.jpg';

export default function AboutOwner() {
  const [imageError, setImageError] = useState(false);

  const achievements = [
    {
      title: "The AP Pioneer",
      desc: "The only athlete from Andhra Pradesh to claim a coveted Musclemania Championship title."
    },
    {
      title: "International recognition",
      desc: "Mr. Asia Finalist (Bangkok)."
    },
    {
      title: "National dominance",
      desc: "Multi-time titleholder, including Mr. India, Mr. Andhra, and Mr. Chittoor."
    }
  ];

  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title block with bento feel */}
      <div className="mb-8 bento-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-brand-orange font-mono text-[10px] tracking-[0.3em] uppercase block mb-1 font-bold">
            The Mind & Muscle Behind The Gym
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide text-white uppercase leading-none">
            About <span className="text-brand-orange">The Owner</span>
          </h2>
        </div>
        <span className="text-zinc-650 font-mono text-[10px] uppercase tracking-widest hidden sm:inline-block">
          Profile Module // AP-01
        </span>
      </div>

      {/* Main 2-Column Responsive Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Portrait Showcase Frame */}
        <div className="lg:col-span-5 bento-card p-4 flex flex-col justify-between group">
          <div className="relative rounded-xl overflow-hidden bg-zinc-950 p-1 border border-zinc-900 shadow-2xl">
            {!imageError ? (
              <img
                id="owner-portrait-image"
                src={championImg}
                alt="Hari Krishna - Musclemania Champion"
                className="w-full h-auto aspect-[3/4] object-cover rounded-lg transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
              />
            ) : (
              <div id="owner-portrait-fallback" className="w-full aspect-[3/4] bg-zinc-900 rounded-lg flex flex-col items-center justify-center p-8 text-center border border-zinc-850">
                <Dumbbell size={50} className="text-brand-orange mb-4 animate-pulse" />
                <h3 className="font-bebas text-3xl tracking-wider text-white">HARI KRISHNA</h3>
                <p className="text-xs text-brand-orange font-mono uppercase tracking-widest mt-1">Musclemania Champion</p>
                <p className="text-zinc-500 text-xs mt-4 leading-relaxed">
                  Historic force behind a global community of drug-free athletes.
                </p>
              </div>
            )}

            {/* Float badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md border border-brand-orange/30 p-3 flex items-center space-x-3 rounded-lg shadow-lg">
              <div className="p-1.5 bg-brand-orange/10 rounded-md">
                <Award size={18} className="text-brand-orange" />
              </div>
              <div>
                <h4 className="font-bebas text-sm tracking-wider text-white uppercase leading-none">Musclemania Champion</h4>
                <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest mt-1">Andhra Pradesh's Only</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 font-mono text-[9px] text-zinc-600 uppercase tracking-widest text-center">
            ★ AP's Elite Drug-Free Ambassador ★
          </div>
        </div>

        {/* Right Column: Copywriting & Milestone Cards */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          
          {/* Top segment: Biography narrative */}
          <div className="bento-card p-6 sm:p-8 space-y-4">
            <h3 id="owner-tagline" className="font-display font-black text-lg sm:text-xl md:text-2xl text-white tracking-tight leading-snug">
              Hari Krishna: AP’s Only Lifetime Natural Musclemania Champion
            </h3>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-zinc-300 font-light">
              Driven by discipline. Built on integrity. Hari Krishna is an elite Indian natural bodybuilder, fitness entrepreneur, and the historic force behind a global community of drug-free athletes.
            </p>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-zinc-300 font-light">
              Making history as the only Musclemania Champion from Andhra Pradesh, Hari has shattered boundaries. He proves that a world-class, international physique can be sculpted through relentless work, strategic nutrition, and absolute dedication—without shortcuts.
            </p>
            <div className="border-l-2 border-brand-orange/40 pl-4 py-1 text-zinc-400 italic text-xs leading-relaxed">
              "Hari began weight training at 17, converting pure passion into a lifelong mission that put Andhra Pradesh on the international drug-free bodybuilding map."
            </div>
          </div>

          {/* Middle segment: Milestones Grid */}
          <div className="bento-card p-6 space-y-4">
            <h4 className="font-display font-semibold text-xs sm:text-sm text-white uppercase tracking-wider flex items-center space-x-2">
              <Star size={14} className="text-brand-orange fill-brand-orange/10" />
              <span>Elite Competitive Milestones</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((ach, idx) => (
                <div 
                  key={idx}
                  id={`achievement-card-${idx}`}
                  className="bg-black/40 border border-zinc-900 p-4 rounded-xl transition-all duration-300 hover:border-brand-orange/20"
                >
                  <h5 className="font-display font-bold text-[10px] text-brand-orange uppercase tracking-wider mb-1.5">
                    {ach.title}
                  </h5>
                  <p className="font-sans text-[11px] text-zinc-400 leading-relaxed font-light">
                    {ach.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom segment: Dual Venture Outlines */}
          <div className="bento-card p-6">
            <h4 className="font-display font-semibold text-xs sm:text-sm text-white uppercase tracking-wider mb-3">
              Empowering your transformation:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 bg-black/40 p-3.5 border border-zinc-900 rounded-xl">
                <div className="p-1.5 bg-brand-orange/5 border border-brand-orange/15 rounded-md mt-0.5">
                  <ShieldCheck size={14} className="text-brand-orange" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-xs text-white uppercase">1. HK Fitness Tirupati</h5>
                  <p className="font-sans text-[11px] text-zinc-500 mt-1 leading-normal">A state-of-the-art training facility designed to build strength, discipline, and community.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-black/40 p-3.5 border border-zinc-900 rounded-xl">
                <div className="p-1.5 bg-brand-orange/5 border border-brand-orange/15 rounded-md mt-0.5">
                  <ShieldCheck size={14} className="text-brand-orange" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-xs text-white uppercase">2. HK Supplements</h5>
                  <p className="font-sans text-[11px] text-zinc-500 mt-1 leading-normal">A trusted source for premium, high-quality nutrition to fuel your health goals safely.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
