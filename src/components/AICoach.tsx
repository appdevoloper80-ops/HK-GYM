import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Send, Trash2, Dumbbell, MessageSquare, HelpCircle, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'coach';
  content: string;
  timestamp: Date;
}

interface AICoachProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AICoach({ isOpen, onClose }: AICoachProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);

// Suggested prompt chips
  const suggestions = [
    "Gym membership prices",
    "What are the gym timings?",
    "About the owner Hari Krishna",
    "Drug-free muscle building tips",
    "Pre-workout nutrition advice"
  ];

  const getClientFallbackReply = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes("price") || q.includes("pricing") || q.includes("plan") || q.includes("package") || q.includes("cost") || q.includes("membership") || q.includes("monthly") || q.includes("fees") || q.includes("fee") || q.includes("join")) {
      return "💪 **HK Fitness Membership Plans (Tirupati, AP):**\n\n" +
             "• **1 Month:** ₹2,499 (Full floor access + premium imports from Spain)\n" +
             "• **3 Months (Most Popular):** ₹7,499 (Includes Body Composition Audit & Diet outline)\n" +
             "• **6 Months:** ₹14,999 (Includes custom Workout charts & nutrition support outline)\n" +
             "• **1 Year (Best Value):** ₹29,999 (Includes Priority Goal Audit & Supplement guidance)\n" +
             "• **Elite Personal Training:** ₹10,000/month (Includes exactly 24 coached one-on-one sessions)\n\n" +
             "Feel free to click the 'Book Plan' button or contact support at **8179186661** to get started!";
    }

    if (q.includes("time") || q.includes("timing") || q.includes("open") || q.includes("close") || q.includes("hour") || q.includes("sunday") || q.includes("saturday")) {
      return "⏰ **Operating Hours & Schedule:**\n\n" +
             "• **Monday to Saturday:** Open 5:00 AM to 9:00 PM (Complete flexibility)\n" +
             "• **Sunday:** Closed (Rest & Recovery Day)\n\n" +
             "Train hard, recover well!";
    }

    if (q.includes("owner") || q.includes("hari") || q.includes("krishna") || q.includes("champion") || q.includes("founder") || q.includes("lead coach") || q.includes("lifetime")) {
      return "🏆 **Meet our Founder, Hari Krishna:**\n\n" +
             "Hari Krishna is Andhra Pradesh's only **Lifetime Natural Musclemania Champion** and a Mr. Asia Finalist (Bangkok). He is a legendary lifetime drug-free athlete training since age 17. He is dedicated to drug-free fitness and runs 'HK Supplements' to supply authentic, safe, and lab-tested premium nutrition.";
    }

    if (q.includes("location") || q.includes("where") || q.includes("address") || q.includes("map") || q.includes("tirupati") || q.includes("locate")) {
      return "📍 **Our Location:**\n\n" +
             "HK Fitness is located in **Sanjay Gandhi Nagar, Tirupati, Andhra Pradesh, India**. You can find our exact location pin in the 'Find HK Fitness' section at the bottom of the home page to launch instant Google Maps navigation!";
    }

    if (q.includes("contact") || q.includes("phone") || q.includes("whatsapp") || q.includes("call") || q.includes("number") || q.includes("mobile") || q.includes("support")) {
      return "📞 **Contact Support:**\n\n" +
             "• **Phone:** 8179186661\n" +
             "• **WhatsApp:** +91 8179186661\n" +
             "• **Location:** Tirupati, AP\n\n" +
             "Feel free to call or WhatsApp us anytime for enquiries or packages booking support!";
    }

    if (q.includes("chest") || q.includes("bench") || q.includes("pecs") || q.includes("push")) {
      return "🔥 **HK Chest Training Wisdom:**\n\n" +
             "To build a champion chest naturally:\n" +
             "1. **Flat Barbell Bench Press:** 3-4 sets of 6-10 heavy, controlled reps.\n" +
             "2. **Incline Dumbbell Press:** 3 sets of 8-12 reps targeting the upper chest.\n" +
             "3. **Cable Crossovers / Chest Flyes:** 3 sets of 12-15 reps focusing on peak contraction.\n\n" +
             "Ensure you keep your scapula retracted and shoulders pinned back to maximize pec recruitment!";
    }

    if (q.includes("back") || q.includes("pull") || q.includes("row") || q.includes("lats") || q.includes("deadlift")) {
      return "🦅 **HK Back Training Wisdom:**\n\n" +
             "For a wide, dense V-taper back:\n" +
             "1. **Weighted Pull-ups:** 3-4 sets of 6-8 reps.\n" +
             "2. **Barbell Row:** 3 sets of 8-12 reps (keep your spine neutral and squeeze at the top).\n" +
             "3. **Lat Pulldowns:** 3 sets of 10-12 reps with absolute control.\n\n" +
             "Focus on pulling with your elbows rather than your hands to isolate the lat muscles!";
    }

    if (q.includes("leg") || q.includes("squat") || q.includes("quads") || q.includes("calves") || q.includes("hamstring")) {
      return "🍗 **HK Leg Training Wisdom:**\n\n" +
             "Leg training triggers natural muscle-building hormones!\n" +
             "1. **Barbell Squats:** 3-4 sets of 8-12 reps (controlled negative, explosive positive).\n" +
             "2. **Leg Press:** 3 sets of 10-15 reps focusing on full depth.\n" +
             "3. **Romanian Deadlifts:** 3 sets of 8-12 reps to isolate hamstrings.\n\n" +
             "Never skip leg day, champ! Keep the intensity extremely high.";
    }

    if (q.includes("arm") || q.includes("bicep") || q.includes("tricep") || q.includes("curl") || q.includes("pushdown")) {
      return "💪 **HK Arm Building Wisdom:**\n\n" +
             "For thick, sculpted arms:\n" +
             "• **Biceps:** Standing Barbell Curls (3 sets, 8-10 reps) paired with Incline Dumbbell Curls for the stretch position.\n" +
             "• **Triceps:** Close-Grip Bench Press or Weighted Dips (3 sets, 8-10 reps) followed by Cable overhead extensions for the long head.\n\n" +
             "Focus on perfect, strict form without swinging!";
    }

    if (q.includes("shoulder") || q.includes("press") || q.includes("delts")) {
      return "🛡️ **HK Shoulder Training Wisdom:**\n\n" +
             "To build wide, 3D shoulders:\n" +
             "1. **Overhead Military Press:** 3 sets of 6-10 heavy reps.\n" +
             "2. **Dumbbell Lateral Raises:** 4 sets of 12-15 reps with pure control to target side delts.\n" +
             "3. **Reverse Pec Deck / Rear Delt Flyes:** 3 sets of 15 reps.\n\n" +
             "Keep your neck relaxed and shoulders packed!";
    }

    if (q.includes("diet") || q.includes("nutrition") || q.includes("protein") || q.includes("egg") || q.includes("chicken") || q.includes("supplement")) {
      return "🍳 **HK Nutrition Rules:**\n\n" +
             "Nutrition is 70% of your transformation!\n" +
             "• **Protein Intake:** Target 1.8g to 2.2g of protein per kg of body weight daily.\n" +
             "• **Source Quality:** Prioritize high-quality whole foods like whole eggs, chicken breast, fish, paneer, and lentils.\n" +
             "• **Verified Supplements:** Always avoid unverified supplements. Get pure, certified products from 'HK Supplements' at the gym.\n\n" +
             "Eat clean, stay consistent, and avoid chemical shortcuts!";
    }

    if (q.includes("fat") || q.includes("lose") || q.includes("cardio") || q.includes("deficit") || q.includes("weight loss")) {
      return "📉 **HK Fat Loss Protocol:**\n\n" +
             "To burn body fat naturally:\n" +
             "1. **Caloric Deficit:** Eat 300-500 calories below your daily maintenance calorie level.\n" +
             "2. **Keep Protein High:** Preserves hard-earned muscle mass while burning fat.\n" +
             "3. **Cardio:** Add 20-30 minutes of steady-state cardio (e.g. brisk walking) after weights.\n\n" +
             "Consistency over crash dieting is key!";
    }

    if (q.includes("gain") || q.includes("bulking") || q.includes("bulk") || q.includes("skinny") || q.includes("weight gain")) {
      return "📈 **HK Mass Gaining Protocol:**\n\n" +
             "To build clean muscle mass naturally:\n" +
             "1. **Caloric Surplus:** Eat 300-500 calories above maintenance.\n" +
             "2. **Progressive Overload:** Track your lifts and lift heavier weights or do more reps over time.\n" +
             "3. **Recovery:** Sleep 7-8 hours minimum so muscles can rebuild.\n\n" +
             "Be patient, eat clean carbs/proteins, and train heavy!";
    }

    return "👋 **Welcome back, champ!**\n\n" +
           "Let's train heavy and stay consistent! Focus on:\n" +
           "• **Progressive Overload** (heavy compound lifts)\n" +
           "• **High-quality Whole Food nutrition** (high protein)\n" +
           "• **7-8 hours of sleep** for recovery\n" +
           "• **Lifetime Natural, Drug-Free dedication**\n\n" +
           "Ask me a specific question about chest, back, arms, shoulders, legs, diet, fat loss, or gym membership details!";
  };

  // Initialize with a welcoming message and load history if present
  useEffect(() => {
    const saved = localStorage.getItem('hk_ai_coach_history');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages(parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp)
        })));
        return;
      } catch (e) {
        console.error('Failed to parse chat history', e);
      }
    }

    // Default welcome message
    setMessages([
      {
        id: 'welcome',
        role: 'coach',
        content: "Hey champ! 🏋️‍♂️ Welcome to HK Fitness. I'm your 24/7 AI Coach, built to help you smash your goals. Ask me anything about our Tirupati gym facilities, our membership plans, training/nutrition tips, or our legend founder Hari Krishna!",
        timestamp: new Date()
      }
    ]);
  }, []);

  // Save history to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('hk_ai_coach_history', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    if (!textToSend) {
      setInputValue('');
    }

    const newUserMessage: Message = {
      id: `msg-${Date.now()}-${Math.random()}`,
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const allMessages = [...messages, newUserMessage];
      const firstUserIndex = allMessages.findIndex(m => m.role === 'user');
      const filteredMessages = firstUserIndex !== -1 ? allMessages.slice(firstUserIndex) : allMessages;
      const chatPayload = filteredMessages.map(m => ({
        role: m.role === 'coach' ? 'model' : 'user',
        content: m.content
      }));

      const res = await fetch('/api/coach', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: chatPayload })
      });

      if (!res.ok) {
        throw new Error("Coach was unable to connect to the session.");
      }

      const data = await res.json();

      const newCoachMessage: Message = {
        id: `msg-${Date.now()}-${Math.random()}`,
        role: 'coach',
        content: data.reply,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newCoachMessage]);
    } catch (err: any) {
      console.error(err);
      setError("Connection lag or missing key. I'm temporarily offline, but train hard!");
      
      const fallbackReply = getClientFallbackReply(text);
      const newCoachMessage: Message = {
        id: `msg-${Date.now()}-${Math.random()}`,
        role: 'coach',
        content: `⚠️ *[Offline Fallback Mode]*\n\n${fallbackReply}`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newCoachMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    const welcomeMsg: Message = {
      id: 'welcome',
      role: 'coach',
      content: "Coaching session reset. Ask me a new fitness question!",
      timestamp: new Date()
    };
    setError(null);
    setMessages([welcomeMsg]);
    localStorage.setItem('hk_ai_coach_history', JSON.stringify([welcomeMsg]));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Backdrop */}
          <motion.div
            id="ai-coach-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 backdrop-blur-xs"
          />

          {/* Chat Sliding Drawer */}
          <motion.div
            id="ai-coach-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-zinc-950 border-l border-zinc-850 z-50 flex flex-col shadow-[-10px_0_40px_rgba(0,0,0,0.8)]"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-zinc-900 bg-brand-dark/80 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange rounded-xl animate-pulse">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-bebas text-2xl tracking-wider text-white leading-none">HK AI COACH</h3>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">24/7 Personal Training Session</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleClear}
                  className="p-2 text-zinc-500 hover:text-red-400 hover:bg-zinc-900 rounded-lg transition-colors"
                  title="Clear Conversation"
                >
                  <Trash2 size={16} />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                  title="Close Coach"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 shadow-md ${
                      m.role === 'user'
                        ? 'bg-brand-orange text-black font-semibold'
                        : 'bg-zinc-900 border border-zinc-850 text-zinc-200'
                    }`}
                  >
                    {m.role === 'coach' && (
                      <div className="flex items-center space-x-1.5 mb-2 border-b border-zinc-800/60 pb-1">
                        <Dumbbell size={12} className="text-brand-orange" />
                        <span className="text-[9px] font-mono uppercase tracking-widest text-brand-orange">HK Trainer</span>
                      </div>
                    )}
                    <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
                    <span
                      className={`text-[9px] block text-right mt-1.5 font-mono ${
                        m.role === 'user' ? 'text-black/60' : 'text-zinc-500'
                      }`}
                    >
                      {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Bot Loading Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-900 border border-zinc-850 rounded-2xl p-4 flex items-center space-x-3 text-zinc-400">
                    <Loader2 size={16} className="text-brand-orange animate-spin" />
                    <span className="text-xs font-mono tracking-wider uppercase">Coach is thinking...</span>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-3.5 rounded-xl text-center font-mono">
                  {error}
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Suggested prompts (only shown when conversation is fresh or has few messages) */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-5 py-3 border-t border-zinc-900 bg-zinc-950/40">
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-1">
                  <HelpCircle size={10} className="text-brand-orange" />
                  <span>Suggested coaching topics:</span>
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {suggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(s)}
                      className="text-[10px] font-sans font-medium bg-zinc-900 hover:bg-brand-orange hover:text-black border border-zinc-850 hover:border-brand-orange text-zinc-300 py-1 px-2.5 rounded-lg transition-all duration-200"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <div className="p-4 border-t border-zinc-900 bg-zinc-950 flex gap-2">
              <input
                id="coach-input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
                disabled={isLoading}
                placeholder="Ask me about plans, timings, or workout nutrition..."
                className="flex-1 bg-zinc-900 border border-zinc-800 focus:border-brand-orange rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors disabled:opacity-50"
              />
              <button
                id="coach-send-btn"
                onClick={() => handleSend()}
                disabled={isLoading || !inputValue.trim()}
                className="bg-brand-orange disabled:opacity-50 hover:bg-white text-black font-semibold rounded-xl px-4 flex items-center justify-center shadow-lg shadow-brand-orange/15 transition-all active:scale-95 cursor-pointer"
                style={{ width: '48px', height: '48px' }}
                title="Send Message"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
