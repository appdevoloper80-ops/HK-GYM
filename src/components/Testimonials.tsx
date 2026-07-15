import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, TrendingUp, Sparkles, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  category: string;
  before: string;
  after: string;
  achievement: string;
  quote: string;
  rating: number;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: "test-1",
      name: "Ravi Kiran",
      location: "Tirupati, AP",
      category: "Weight Loss & Strength",
      before: "96 kg",
      after: "74 kg",
      achievement: "-22 kg in 5 months",
      quote: "The personalized coaching and natural nutrition advice here completely changed my life. I trained with zero shortcuts, strictly natural. The Spanish biomechanical equipment is so smooth on my lower back and joints!",
      rating: 5
    },
    {
      id: "test-2",
      name: "Kavitha Reddy",
      location: "Chittoor",
      category: "Athletic Transformation",
      before: "Low Stamina",
      after: "Elite Endurance",
      achievement: "Doubled Deadlift & Posture Corrected",
      quote: "As a busy professional, I needed structured training. HK Fitness provided exactly that. The biomechanical lines of the gym's Spanish machines protect your joints while pushing your muscles to the absolute maximum.",
      rating: 5
    },
    {
      id: "test-3",
      name: "Manoj Kumar",
      location: "Tirupati",
      category: "Muscle Gain (Lifetime Natural)",
      before: "62 kg (Lean)",
      after: "73 kg (Shredded)",
      achievement: "+11 kg Lean Muscle Mass",
      quote: "Hari Krishna's vision of a clean, drug-free training environment is so inspiring. Following his supplement guidelines from the HK supplements store and lifting heavy on premium biomechanical gear gave me champion-level results.",
      rating: 5
    },
    {
      id: "test-4",
      name: "Srinivas Naidu",
      location: "Renigunta",
      category: "General Fitness & Agility",
      before: "Sedentary lifestyle",
      after: "High-Performance Athlete",
      achievement: "12% Body Fat & Incredible Stamina",
      quote: "This is not just a gym; it is a community of disciplined minds. Every trainer is certified and speaks the language of science-backed bodybuilding. If you are in Tirupati, this is the gold standard.",
      rating: 5
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isHovered) {
      autoplayTimer.current = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [isHovered]);

  return (
    <section id="testimonials" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Bento style header */}
      <div className="bento-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-brand-orange font-mono text-[10px] tracking-[0.3em] uppercase block mb-1 font-bold">
            Real Transformations, True Results
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide text-white uppercase leading-none">
            Member <span className="text-brand-orange">Success Stories</span>
          </h2>
        </div>
        <span className="text-zinc-650 font-mono text-[10px] uppercase tracking-widest hidden sm:inline-block">
          Social Proof // TM-08
        </span>
      </div>

      {/* Main Carousel Area */}
      <div 
        className="relative min-h-[350px] lg:min-h-[280px] bento-card p-6 sm:p-10 flex flex-col justify-between overflow-hidden group/carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background glow lines */}
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-zinc-700 uppercase tracking-widest select-none pointer-events-none">
          Active Autoplay Carousel // Swipe or Tap to Navigate
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-8">
          
          {/* Left Block: The Stats Card (Highlighting Before/After) */}
          <div className="lg:w-1/3 bg-black/50 border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center space-x-2 text-brand-orange mb-3">
                <Trophy size={16} />
                <span className="font-mono text-xs uppercase tracking-wider font-bold">Transformation Profile</span>
              </div>
              <h3 className="font-bebas text-2xl tracking-wide text-white uppercase leading-none">
                {testimonials[currentIndex].name}
              </h3>
              <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                {testimonials[currentIndex].location}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-950/80 border border-zinc-900/60 p-3 rounded-xl text-center">
                <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Before</span>
                <span className="font-bebas text-lg text-zinc-400">{testimonials[currentIndex].before}</span>
              </div>
              <div className="bg-brand-orange/5 border border-brand-orange/15 p-3 rounded-xl text-center">
                <span className="block font-mono text-[9px] text-brand-orange uppercase tracking-widest">After</span>
                <span className="font-bebas text-xl text-brand-orange">{testimonials[currentIndex].after}</span>
              </div>
            </div>

            <div className="bg-zinc-950/40 border border-zinc-900 p-3 rounded-xl flex items-center space-x-2.5">
              <TrendingUp size={16} className="text-emerald-400 shrink-0" />
              <div>
                <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest leading-none">Milestone</span>
                <span className="font-sans text-xs text-zinc-200 font-semibold">{testimonials[currentIndex].achievement}</span>
              </div>
            </div>
          </div>

          {/* Right Block: The Quote Narrative */}
          <div className="lg:w-2/3 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-brand-orange/5 rounded-lg border border-brand-orange/10 inline-block text-brand-orange">
                  <Quote size={20} className="transform scale-x-[-1]" />
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-brand-orange fill-brand-orange" />
                  ))}
                </div>
              </div>

              <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest flex items-center space-x-1.5">
                <Sparkles size={11} className="text-brand-orange" />
                <span>Focus: {testimonials[currentIndex].category}</span>
              </div>

              <p className="font-sans text-sm sm:text-base md:text-lg leading-relaxed text-zinc-200 font-light italic">
                "{testimonials[currentIndex].quote}"
              </p>
            </div>

            {/* Manual Navigation Controls & Dots */}
            <div className="flex items-center justify-between border-t border-zinc-900/60 pt-4">
              {/* Pagination Dots */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-6 bg-brand-orange' : 'w-1.5 bg-zinc-800 hover:bg-zinc-700'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center space-x-2.5">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-zinc-950 hover:bg-brand-orange hover:text-black border border-zinc-900 text-zinc-400 flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-zinc-950 hover:bg-brand-orange hover:text-black border border-zinc-900 text-zinc-400 flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
