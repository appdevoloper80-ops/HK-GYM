import React from 'react';
import { 
  Heart, Dumbbell, Layers, Maximize, Cpu
} from 'lucide-react';

export default function EliteGear() {
  const eliteEquipment = [
    {
      id: "cardio-setup",
      title: "Cardio Setup",
      description: "Imported professional endurance running decks, climbing simulators, and smart digital consoles with biomechanically correct stride design.",
      details: ["High-speed interactive runners", "Smooth elliptical cross-trainers", "Fluid spinning stations"],
      icon: Heart
    },
    {
      id: "free-weight",
      title: "Free Weight & Strength Basics",
      description: "Solid steel bars, heavy-duty adjustable multi-angle benches, safety squat racks, and premium bumper plates constructed for absolute durability.",
      details: ["Precision Olympic barbells", "Heavy-duty lifting platforms", "Adjustable incline/decline benches"],
      icon: Dumbbell
    },
    {
      id: "dumbbell-rows",
      title: "Dedicated Rows of Dumbbells",
      description: "Clean, comprehensive rows of solid-grip rubberized pro dumbbells ranging from lightweight up to heavyweight targets for all progression steps.",
      details: ["Double racks for seamless access", "Textured steel anti-slip grips", "Calibrated weight accuracy"],
      icon: Layers
    },
    {
      id: "heavy-lifting",
      title: "Fundamental & Heavy Lifting",
      description: "High-capacity heavy lifting zones. Dedicated deadlift sectors, multi-grip pull-up structures, and loaded-carries space engineered for maximum stability.",
      details: ["High-density shock absorbent floor", "Reinforced safety cages", "Chalk-friendly grip surfaces"],
      icon: Maximize
    },
    {
      id: "selectorized",
      title: "Cable & Selectorized Machines",
      description: "Top-tier Spanish-designed cable crossovers, smooth-gliding LAT pulldowns, double row systems, and selectorized weight stacks.",
      details: ["Ultra-smooth aircraft cables", "Precision biomechanical pivot axes", "Instant pin weight selection"],
      icon: Cpu
    }
  ];

  return (
    <section id="equipment" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Title block with bento feel */}
      <div className="bento-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-brand-orange font-mono text-[10px] tracking-[0.3em] uppercase block mb-1 font-bold">
            European Biomechanics Standard
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide text-white uppercase leading-none">
            Elite Gear & <span className="text-brand-orange">Infrastructure</span>
          </h2>
        </div>
        <span className="text-zinc-650 font-mono text-[10px] uppercase tracking-widest hidden sm:inline-block">
          Equipment Audit // EA-02
        </span>
      </div>

      {/* Equipment Bento-Style Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {eliteEquipment.map((eq, idx) => {
          const IconComponent = eq.icon;
          // First 2 cards take 6 cols, last 3 take 4 cols for bento structure
          const colSpanClass = idx < 2 ? 'lg:col-span-6' : 'lg:col-span-4';
          return (
            <div
              key={eq.id}
              id={`equipment-card-${eq.id}`}
              className={`${colSpanClass} bento-card p-6 sm:p-8 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl">
                    <IconComponent className="text-brand-orange group-hover:scale-110 transition-transform duration-300" size={22} />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                    Category 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-bebas text-2xl sm:text-3xl tracking-wide text-white uppercase mb-3">
                  {eq.title}
                </h3>
                
                <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light mb-6">
                  {eq.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-zinc-900/60">
                <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Highlights:</span>
                {eq.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center space-x-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/75" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Crawling Marquee Text Banner */}
      <div id="marquee-container" className="w-full bg-zinc-950/80 backdrop-blur-md rounded-2xl border border-zinc-800 py-5 overflow-hidden select-none relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Group 1 */}
          <div className="flex items-center shrink-0">
            {Array(4).fill("Train like never before with equipments imported from Spain").map((text, i) => (
              <span 
                key={`g1-${i}`} 
                className="font-bebas text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.2em] text-white mx-8 inline-flex items-center"
              >
                <span className="text-brand-orange mr-8">★</span>
                <span>{text}</span>
              </span>
            ))}
          </div>
          {/* Group 2 (Exact clone for seamless looping) */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {Array(4).fill("Train like never before with equipments imported from Spain").map((text, i) => (
              <span 
                key={`g2-${i}`} 
                className="font-bebas text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.2em] text-white mx-8 inline-flex items-center"
              >
                <span className="text-brand-orange mr-8">★</span>
                <span>{text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
