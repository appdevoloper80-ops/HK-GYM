import React from 'react';
import { Clock, Check, MessageSquare } from 'lucide-react';
import { PricingPlan } from '../types';

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      id: "plan-1m",
      title: "1 Month Plan",
      price: 2499,
      durationText: "per month",
      features: [
        "Full Access to Gym Floor",
        "European Spain Equipment Access",
        "Free Lockers & General Amenities",
        "General Training Guidance",
        "Morning & Night Time Flexibility",
      ],
      whatsAppUrl: "https://wa.me/918179186661?text=Hi%20HK%20Fitness%2C%20I%20want%20to%20book%20the%201%20Month%20Plan."
    },
    {
      id: "plan-3m",
      title: "3 Months Plan",
      price: 7499,
      durationText: "quarterly plan",
      features: [
        "Full Access to Gym Floor",
        "European Spain Equipment Access",
        "Free Lockers & General Amenities",
        "Body Assessment & Composition Audit",
        "Dietary & Nutritional Advice Outline",
        "Cost-effective renewal rate",
      ],
      whatsAppUrl: "https://wa.me/918179186661?text=Hi%20HK%20Fitness%2C%20I%20want%20to%20book%20the%203%20Months%20Plan.",
      popular: true
    },
    {
      id: "plan-6m",
      title: "6 Months Plan",
      price: 14999,
      durationText: "half-yearly plan",
      features: [
        "Full Access to Gym Floor",
        "European Spain Equipment Access",
        "Free Lockers & General Amenities",
        "Custom Workout Chart Iterations",
        "Premium Nutritional Support Outline",
        "Dedicated progress check sessions",
      ],
      whatsAppUrl: "https://wa.me/918179186661?text=Hi%20HK%20Fitness%2C%20I%20want%20to%20book%20the%206%20Months%20Plan."
    },
    {
      id: "plan-1y",
      title: "1 Year Plan",
      price: 29999,
      durationText: "yearly plan",
      features: [
        "Full Access to Gym Floor",
        "European Spain Equipment Access",
        "Free Lockers & General Amenities",
        "Priority Goal Audit Session",
        "Premium Supplements Guidance",
        "Saves thousands over single months",
        "Ultimate body overhaul commitment",
      ],
      whatsAppUrl: "https://wa.me/918179186661?text=Hi%20HK%20Fitness%2C%20I%20want%20to%20book%20the%20Yearly%20Plan."
    }
  ];

  const ptWhatsAppUrl = "https://wa.me/918179186661?text=Hi%20HK%20Fitness%2C%20I%20am%20interested%20in%20the%20Personal%20Training%2024%20Sessions%20Plan.";

  return (
    <section id="pricing" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Title block with bento feel */}
      <div className="bento-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-brand-orange font-mono text-[10px] tracking-[0.3em] uppercase block mb-1 font-bold">
            Invest in Your Physical Asset
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide text-white uppercase leading-none">
            Membership <span className="text-brand-orange">Packages</span>
          </h2>
        </div>
        <span className="text-zinc-650 font-mono text-[10px] uppercase tracking-widest hidden sm:inline-block">
          Rates Module // RM-03
        </span>
      </div>

      {/* Global Timings Banner Block inside a Bento Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Span: Timings Box */}
        <div 
          id="gym-timings-banner" 
          className="lg:col-span-12 bento-card-highlight p-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative overflow-hidden"
        >
          <div className="p-3 bg-brand-orange/10 rounded-full text-brand-orange border border-brand-orange/20 animate-pulse">
            <Clock size={20} />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-bebas text-2xl tracking-wider text-white uppercase leading-none">
              Gym Timings: Morning 5:00 AM to Night 9:00 PM
            </h3>
            <p className="font-sans text-[10px] text-zinc-400 mt-1.5 uppercase tracking-widest font-mono">
              ★ Train at your own convenience • open 6 days a week ★
            </p>
          </div>
        </div>
      </div>

      {/* 4 Pricing Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            id={`pricing-card-${plan.id}`}
            className={`bento-card p-6 flex flex-col justify-between relative group ${
              plan.popular ? 'border-brand-orange/50 shadow-[0_0_25px_rgba(255,107,0,0.04)]' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-brand-orange text-black font-bebas text-[10px] tracking-widest px-3 py-1 uppercase rounded-md font-bold shadow-md">
                Most Popular
              </div>
            )}

            <div>
              <h3 className="font-display font-black text-md text-white uppercase tracking-wider mb-1">
                {plan.title}
              </h3>
              <p className="text-zinc-500 font-mono text-[9px] tracking-widest uppercase mb-4">
                {plan.durationText}
              </p>

              <div className="flex items-baseline mb-6">
                <span className="font-sans text-lg font-semibold text-zinc-400">₹</span>
                <span className="font-bebas text-4xl sm:text-5xl text-white tracking-tight leading-none mx-0.5">
                  {plan.price.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="space-y-3.5 border-t border-zinc-900 pt-5">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs text-zinc-400">
                    <Check size={13} className="text-brand-orange shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Two Booking Options: Enquiry via WhatsApp and Book Plan */}
            <div className="mt-8 pt-5 border-t border-zinc-900 flex flex-col gap-2">
              {/* Option 1: Book Plan (Does not respond, placeholder for Razorpay later) */}
              <button
                id={`book-btn-${plan.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  // Does not respond, user can attach Razorpay here later
                }}
                className={`w-full py-2.5 px-3 rounded-xl font-bebas text-xs tracking-widest uppercase text-center flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer bg-brand-orange text-black font-bold hover:bg-white hover:text-black shadow-lg shadow-brand-orange/10`}
              >
                <span>Book Plan</span>
              </button>

              {/* Option 2: Enquiry via WhatsApp */}
              <a
                id={`enquiry-whatsapp-btn-${plan.id}`}
                href={plan.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl font-bebas text-xs tracking-widest uppercase text-center flex items-center justify-center space-x-2 transition-all duration-300 bg-zinc-950 border border-zinc-900 text-white hover:bg-green-600 hover:text-white hover:border-green-600"
              >
                <MessageSquare size={12} className="shrink-0" />
                <span>Enquiry via WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Highlight Box: Elite Personal Training */}
      <div 
        id="pt-highlight-card"
        className="relative rounded-2xl bg-zinc-950 border border-brand-orange/30 p-6 sm:p-8 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 transition-all duration-300 hover:border-brand-orange/50"
      >
        <div className="absolute top-0 left-6 transform -translate-y-1/2 bg-brand-orange text-black font-bebas text-[10px] tracking-widest px-3 py-1 uppercase rounded-md font-bold shadow-md">
          Elite Premium Tier
        </div>

        <div className="lg:max-w-2xl text-center lg:text-left">
          <h3 className="font-bebas text-2xl sm:text-3xl tracking-wider text-white uppercase mb-1">
            Elite Personal Training Plan
          </h3>
          <p className="font-sans text-xs sm:text-sm text-brand-orange font-bold tracking-wide mb-2">
            ₹10,000/- per month
          </p>
          <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
            Includes exactly <span className="text-white font-semibold">24 highly detailed coached sessions</span> under expert elite level athletic conditioning protocols designed to completely redefine your physical peak.
          </p>
        </div>

        <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 shrink-0">
          {/* Option 1: Book Personal Training (Does not respond, ready for Razorpay later) */}
          <button
            id="book-pt-plan-btn"
            onClick={(e) => {
              e.preventDefault();
              // Does not respond, user can attach Razorpay here later
            }}
            className="bg-brand-orange hover:bg-white text-black font-bebas text-xs tracking-widest uppercase font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
          >
            <span>Book Personal Training</span>
          </button>

          {/* Option 2: Enquiry via WhatsApp */}
          <a
            id="enquiry-whatsapp-pt-btn"
            href={ptWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-950 border border-zinc-900 hover:border-green-600 hover:bg-green-600 text-white font-bebas text-xs tracking-widest uppercase py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
          >
            <MessageSquare size={14} />
            <span>Enquiry via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
