import React from 'react';
import { 
  Users, UserCheck, Heart, Flame, Scale, Trophy, Zap, Sparkles, ShoppingBag, Salad 
} from 'lucide-react';

export default function CoreServices() {
  const coreServices = [
    {
      title: "General Training",
      description: "Our core foundation program. Guided workouts under professional supervision to build stamina, flexibility, and overall athletic condition.",
      icon: Users
    },
    {
      title: "Personal Training",
      description: "1-on-1 premium coaching meticulously tailored to your body type, goals, and experience level, pushing your limits with high accountability.",
      icon: UserCheck
    },
    {
      title: "Cardio",
      description: "High-intensity endurance conditioning with top-tier treadmills, ellipticals, and spin bikes to torch calories and maximize heart health.",
      icon: Heart
    },
    {
      title: "Strength Training",
      description: "Build robust, dense lean muscle mass and serious strength using premium imported selectorized stacks and free-weight arrays.",
      icon: Flame
    },
    {
      title: "Weight Loss and Gain",
      description: "Results-oriented, scientific body recomposition programs designed to safely shed fat layers or add dense quality mass.",
      icon: Scale
    },
    {
      title: "Contest Preparation",
      description: "Elite stage conditioning, posing coaching, and strategic carb-loading protocols led by a championship natural bodybuilder.",
      icon: Trophy
    },
    {
      title: "Athletic Conditioning",
      description: "Enhance explosive power, functional agility, speed, and overall kinetic performance for competitive sports and functional health.",
      icon: Zap
    },
    {
      title: "Muscle Toning",
      description: "Sculpt and shape your physique with high-volume isolation movements, targeted reps, and progressive resistance programs.",
      icon: Sparkles
    },
    {
      title: "Supplements Guidance",
      description: "Honest, science-backed supplement protocols designed to accelerate recovery, fuel workouts, and protect overall health safely.",
      icon: ShoppingBag
    },
    {
      title: "Diet & Nutrition",
      description: "Custom meal planners designed around your lifestyle, micronutrient needs, and metabolism to fuel training and optimize energy.",
      icon: Salad
    }
  ];

  return (
    <section id="services" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Title block with bento feel */}
      <div className="bento-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-brand-orange font-mono text-[10px] tracking-[0.3em] uppercase block mb-1 font-bold">
            Tailored Training For Every Goal
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide text-white uppercase leading-none">
            Our <span className="text-brand-orange">Core Services</span>
          </h2>
        </div>
        <span className="text-zinc-650 font-mono text-[10px] uppercase tracking-widest hidden sm:inline-block">
          Services Matrix // SC-01
        </span>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {coreServices.map((service, idx) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={idx}
              id={`service-card-${idx}`}
              className="bento-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl inline-block mb-4 group-hover:border-brand-orange/30 transition-all">
                  <IconComponent className="text-brand-orange" size={20} />
                </div>
                <h3 className="font-display font-bold text-sm text-white uppercase tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-xs text-zinc-450 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
              <div className="h-[2px] w-8 bg-brand-orange/20 group-hover:bg-brand-orange transition-colors mt-6" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
