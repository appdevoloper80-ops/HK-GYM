import { GoogleGenAI } from "@google/genai";

// Retrieve fresh Gemini API Client safely on every request to prevent stale key caching
function getAiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  return new GoogleGenAI({
    apiKey: apiKey || "MOCK_KEY",
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

// System Instruction for HK AI Coach
const COACH_SYSTEM_INSTRUCTION = `
You are "HK AI Coach", the elite 24/7 virtual fitness trainer and guide at HK Fitness and Unisex Gym.
Your goal is to assist users with questions about:
1. HK Fitness and Unisex Gym (Tirupati, AP).
2. Fitness, bodybuilding, workouts, training schedules, nutrition, weight loss/gain, and muscle growth.
3. The gym's membership plans, timings, facilities, and its inspiring owner.

ABOUT HK FITNESS & UNISEX GYM:
- Location: Tirupati, Andhra Pradesh, India.
- Owner: Hari Krishna. He is a historic figure—Andhra Pradesh's only Lifetime Natural Musclemania Champion, a Mr. Asia Finalist (Bangkok), and a multi-time titleholder of Mr. India, Mr. Andhra, and Mr. Chittoor. He has been training since age 17, and is a passionate advocate of drug-free, lifetime natural training. He also runs "HK Supplements", supplying premium, high-quality, and verified nutrition safely.
- Timings: Morning 5:00 AM to Night 9:00 PM (Monday to Saturday). Closed on Sundays.
- Equipment: Top-of-the-line, premium, high-end athletic conditioning equipment imported from Spain/Europe.

MEMBERSHIP PACKAGES & PLANS:
- 1 Month Plan: ₹2,499 per month. Includes full access to gym floor, European Spain equipment, free lockers & general amenities, general training guidance, morning & night time flexibility.
- 3 Months Plan (Most Popular): ₹7,499 quarterly. Includes all 1-month features plus Body Assessment & Composition Audit, Dietary & Nutritional Advice Outline, and cost-effective renewal.
- 6 Months Plan: ₹14,999 half-yearly. Includes all 3-month features plus Custom Workout Chart Iterations, Premium Nutritional Support Outline, and dedicated progress check sessions.
- 1 Year Plan: ₹29,999 yearly. Includes all 6-month features plus Priority Goal Audit Session and Premium Supplements Guidance. Highly cost-effective.
- Elite Personal Training: ₹10,000 per month. Includes exactly 24 highly detailed, one-on-one coached sessions under expert elite-level athletic conditioning protocols.

TONE & PERSONALITY:
- High-energy, motivating, professional, elite-level fitness coach, yet welcoming, approachable, and humble.
- Highly supportive of drug-free, healthy, and natural physical transformations. Always discourage shortcuts or dangerous substances.
- Be concise but highly actionable in your fitness advice (give specific exercise counts, sets, reps, or dietary splits like protein, carbs, fats where appropriate).
- If users want to sign up or book a plan, warmly instruct them to click the "Book Plan" button on the Membership Packages page or contact us at 8179186661 or WhatsApp +91 8179186661.
`;

// High-quality local training wisdom engine for fast replies and fallbacks
function getLocalFallbackReply(query: string): string {
  if (query.includes("chest") || query.includes("bench") || query.includes("pecs") || query.includes("push")) {
    return "🔥 **HK Chest Training Wisdom:**\n\n" +
           "To build a champion chest naturally:\n" +
           "1. **Flat Barbell Bench Press:** 3-4 sets of 6-10 heavy, controlled reps.\n" +
           "2. **Incline Dumbbell Press:** 3 sets of 8-12 reps targeting the upper chest.\n" +
           "3. **Cable Crossovers / Chest Flyes:** 3 sets of 12-15 reps focusing on peak contraction.\n\n" +
           "Ensure you keep your scapula retracted and shoulders pinned back to maximize pec recruitment!";
  }
  if (query.includes("back") || query.includes("pull") || query.includes("row") || query.includes("lats") || query.includes("deadlift")) {
    return "🦅 **HK Back Training Wisdom:**\n\n" +
           "For a wide, dense V-taper back:\n" +
           "1. **Weighted Pull-ups:** 3-4 sets of 6-8 reps.\n" +
           "2. **Barbell Row:** 3 sets of 8-12 reps (keep your spine neutral and squeeze at the top).\n" +
           "3. **Lat Pulldowns:** 3 sets of 10-12 reps with absolute control.\n\n" +
           "Focus on pulling with your elbows rather than your hands to isolate the lat muscles!";
  }
  if (query.includes("leg") || query.includes("squat") || query.includes("quads") || query.includes("calves") || query.includes("hamstring")) {
    return "🍗 **HK Leg Training Wisdom:**\n\n" +
           "Leg training triggers natural muscle-building hormones!\n" +
           "1. **Barbell Squats:** 3-4 sets of 8-12 reps (controlled negative, explosive positive).\n" +
           "2. **Leg Press:** 3 sets of 10-15 reps focusing on full depth.\n" +
           "3. **Romanian Deadlifts:** 3 sets of 8-12 reps to isolate hamstrings.\n\n" +
           "Never skip leg day, champ! Keep the intensity extremely high.";
  }
  if (query.includes("arm") || query.includes("bicep") || query.includes("tricep") || query.includes("curl") || query.includes("pushdown")) {
    return "💪 **HK Arm Building Wisdom:**\n\n" +
           "For thick, sculpted arms:\n" +
           "• **Biceps:** Standing Barbell Curls (3 sets, 8-10 reps) paired with Incline Dumbbell Curls for the stretch position.\n" +
           "• **Triceps:** Close-Grip Bench Press or Weighted Dips (3 sets, 8-10 reps) followed by Cable overhead extensions for the long head.\n\n" +
           "Focus on perfect, strict form without swinging!";
  }
  if (query.includes("shoulder") || query.includes("press") || query.includes("delts")) {
    return "🛡️ **HK Shoulder Training Wisdom:**\n\n" +
           "To build wide, 3D shoulders:\n" +
           "1. **Overhead Military Press:** 3 sets of 6-10 heavy reps.\n" +
           "2. **Dumbbell Lateral Raises:** 4 sets of 12-15 reps with pure control to target side delts.\n" +
           "3. **Reverse Pec Deck / Rear Delt Flyes:** 3 sets of 15 reps.\n\n" +
           "Keep your neck relaxed and shoulders packed!";
  }
  if (query.includes("diet") || query.includes("nutrition") || query.includes("protein") || query.includes("egg") || query.includes("chicken") || query.includes("supplement")) {
    return "🍳 **HK Nutrition Rules:**\n\n" +
           "Nutrition is 70% of your transformation!\n" +
           "• **Protein Intake:** Target 1.8g to 2.2g of protein per kg of body weight daily.\n" +
           "• **Source Quality:** Prioritize high-quality whole foods like whole eggs, chicken breast, fish, paneer, and lentils.\n" +
           "• **Verified Supplements:** Always avoid unverified supplements. Get pure, certified products from 'HK Supplements' at the gym.\n\n" +
           "Eat clean, stay consistent, and avoid chemical shortcuts!";
  }
  if (query.includes("fat") || query.includes("lose") || query.includes("cardio") || query.includes("deficit") || query.includes("weight loss")) {
    return "📉 **HK Fat Loss Protocol:**\n\n" +
           "To burn body fat naturally:\n" +
           "1. **Caloric Deficit:** Eat 300-500 calories below your daily maintenance calorie level.\n" +
           "2. **Keep Protein High:** Preserves hard-earned muscle mass while burning fat.\n" +
           "3. **Cardio:** Add 20-30 minutes of steady-state cardio (e.g. brisk walking) after weights.\n\n" +
           "Consistency over crash dieting is key!";
  }
  if (query.includes("gain") || query.includes("bulking") || query.includes("bulk") || query.includes("skinny") || query.includes("weight gain")) {
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
}

export default async function handler(req: any, res: any) {
  // Set CORS headers if needed for cross-origin requests
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  let query = "";
  try {
    const { messages } = req.body || {};

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request payload. 'messages' array is required." });
    }

    const lastUserMsg = (messages[messages.length - 1]?.content || "").trim();
    query = lastUserMsg.toLowerCase();

    // 1. Instant Smart Offline Routing (Responds in <1ms for gym-specific queries)
    if (query.includes("price") || query.includes("pricing") || query.includes("plan") || query.includes("package") || query.includes("cost") || query.includes("membership") || query.includes("monthly") || query.includes("fees") || query.includes("fee") || query.includes("join")) {
      return res.json({
        reply: "💪 **HK Fitness Membership Plans (Tirupati, AP):**\n\n" +
               "• **1 Month:** ₹2,499 (Full floor access + premium imports from Spain)\n" +
               "• **3 Months (Most Popular):** ₹7,499 (Includes Body Composition Audit & Diet outline)\n" +
               "• **6 Months:** ₹14,999 (Includes custom Workout charts & nutrition support outline)\n" +
               "• **1 Year (Best Value):** ₹29,999 (Includes Priority Goal Audit & Supplement guidance)\n" +
               "• **Elite Personal Training:** ₹10,000/month (Includes exactly 24 coached one-on-one sessions)\n\n" +
               "Click the **'Book Plan'** button or contact our support directly to get started!"
      });
    }

    if (query.includes("time") || query.includes("timing") || query.includes("open") || query.includes("close") || query.includes("hour") || query.includes("sunday") || query.includes("saturday")) {
      return res.json({
        reply: "⏰ **Operating Hours & Schedule:**\n\n" +
               "• **Monday to Saturday:** Open 5:00 AM to 9:00 PM (Complete flexibility)\n" +
               "• **Sunday:** Closed (Rest & Recovery Day)\n\n" +
               "Train hard, recover well!"
      });
    }

    if (query.includes("owner") || query.includes("hari") || query.includes("krishna") || query.includes("champion") || query.includes("founder") || query.includes("lead coach") || query.includes("lifetime")) {
      return res.json({
        reply: "🏆 **Meet our Founder, Hari Krishna:**\n\n" +
               "Hari Krishna is Andhra Pradesh's only **Lifetime Natural Musclemania Champion** and a Mr. Asia Finalist (Bangkok). He is a legendary lifetime drug-free athlete training since age 17. He is dedicated to drug-free fitness and runs 'HK Supplements' to supply authentic, safe, and lab-tested premium nutrition."
      });
    }

    if (query.includes("location") || query.includes("where") || query.includes("address") || query.includes("map") || query.includes("tirupati") || query.includes("locate")) {
      return res.json({
        reply: "📍 **Our Location:**\n\n" +
               "HK Fitness is located in **Sanjay Gandhi Nagar, Tirupati, Andhra Pradesh, India**. You can find our exact location pin in the 'Find HK Fitness' section at the bottom of the home page to launch instant Google Maps navigation!"
      });
    }

    if (query.includes("contact") || query.includes("phone") || query.includes("call") || query.includes("whatsapp") || query.includes("number")) {
      return res.json({
        reply: "📞 **Contact Us:**\n\n" +
               "You can reach us directly at **+91 8179186661**.\n" +
               "WhatsApp us anytime for enquiries or packages booking support!"
      });
    }

    if (query.includes("equipment") || query.includes("machine") || query.includes("spain") || query.includes("europe") || query.includes("brand")) {
      return res.json({
        reply: "🏋️‍♂️ **Premium Gym Equipment:**\n\n" +
               "We take pride in offering premium athletic conditioning equipment imported directly from **Spain & Europe**. Our machines are biomechanically optimized to offer elite resistance profiles, helping you build muscle safely and naturally."
      });
    }

    // 2. High-Availability LLM Call with smart timeout and local fallback for custom questions
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return res.json({ reply: getLocalFallbackReply(query) });
    }

    const ai = getAiClient();
    const contents = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }]
    }));

    // Promise race to prevent long waiting times (4s timeout)
    const geminiPromise = ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: COACH_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 4000));
    
    const result = await Promise.race([geminiPromise, timeoutPromise]);

    if (result && typeof result === 'object' && 'text' in result) {
      const replyText = (result as any).text || "I'm sorry, I couldn't generate a response. Please try again.";
      return res.json({ reply: replyText });
    } else {
      console.warn("Gemini API call timed out. Falling back to local training wisdom...");
      return res.json({ reply: getLocalFallbackReply(query) });
    }
  } catch (error: any) {
    console.error("Gemini API Error, falling back to local training engine:", error);
    return res.json({ reply: getLocalFallbackReply(query) });
  }
}
