// Advanced LLM Integration for Escort Service Website
// This file provides functions to integrate with OpenAI, Claude, or other LLM APIs

export interface LLMConfig {
  provider: 'openai' | 'anthropic' | 'gemini' | 'custom';
  apiKey: string;
  model: string;
  temperature?: number;
  maxTokens?: number;
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// System prompt for escort service context
export const SYSTEM_PROMPT = `You are an AI assistant for Saumya Kapoor Premium Escort Service in Indore, India. 

Your role:
- Provide professional, helpful information about escort services
- Answer questions about booking, pricing, locations, and availability
- Maintain a respectful, discreet tone
- Speak in both Hindi and English
- Emphasize safety, privacy, and professionalism

Key Information:
- Service: Premium escort service in Indore
- Phone: +91-9372662471
- Areas: Vijay Nagar, AB Road, Palasia, Scheme 78, MG Road, Saket, Ring Road
- Services: VIP escorts, celebrity escorts, college escorts, independent escorts, housewife escorts
- Availability: 24/7 service
- Features: 100% verified profiles, safe & discreet, instant booking

Always be helpful, professional, and encourage users to call for specific inquiries.`;

// Advanced Mock LLM Response with Smart Pattern Matching
export async function generateMockLLMResponse(userMessage: string): Promise<string> {
  const lowerMessage = userMessage.toLowerCase();
  
  // Ultra-Comprehensive responses database for ALL escort-related questions
  const responses = {
    greeting: `नमस्ते! 🙏 Welcome to Saumya Kapoor Premium Escort Service! 🌹\n\nमैं आपकी personal assistant हूं। मैं escort services से related हर सवाल का जवाब दे सकती हूं!\n\n**मुझसे कुछ भी पूछें:**\n💼 Services, Types, Categories\n📞 Booking, Process, Requirements\n💰 Pricing, Rates, Packages\n📍 Locations, Areas, Hotels\n🔒 Safety, Privacy, Verification\n⏰ Availability, Timing, Duration\n👗 Appearance, Age, Preferences\n🎯 Experience, Activities, Services\n\n**Direct Contact:**\n📱 Call/WhatsApp: +91-9372662471\n⚡ 24/7 Instant response!\n\nHindi/English में कुछ भी पूछें! 😊`,
    
    services: `हमारी **Premium Services** की complete list:\n\n🌟 **VIP Escort Service**\n   • Elite companions for high-class clients\n   • Business meetings & social events\n   • Sophisticated and well-educated\n\n⭐ **Celebrity Escorts**\n   • Model-like appearance\n   • Perfect for special occasions\n   • High-profile event companions\n\n🎓 **College Girl Escorts**\n   • Young, fresh, energetic (18-24 years)\n   • Student profiles verified\n   • Fun and vibrant personalities\n\n💼 **Independent Escorts**\n   • Self-employed professionals\n   • Direct booking, no middleman\n   • Flexible and understanding\n\n🏠 **Housewife Escorts**\n   • Mature & experienced (25-40 years)\n   • Discreet married companions\n   • Understanding and caring\n\n💎 **Russian Escorts**\n   • International companions\n   • Exotic and stunning\n   • Premium rates apply\n\n📞 **Call now: +91-9372662471** for instant booking!`,
    
    booking: `📱 **Easy Booking Process:**\n\n**Step 1: Choose**\n   → Browse our gallery\n   → Select your preferred companion\n   → Check availability\n\n**Step 2: Contact**\n   📞 Call: +91-9372662471\n   💬 WhatsApp: +91-9372662471\n   ✉️ या direct website से contact करें\n\n**Step 3: Confirm**\n   → बताएं आपकी requirements\n   → Date, time और location confirm करें\n   → Payment method discuss करें\n\n**Step 4: Meet**\n   → हम arrange करेंगे meeting\n   → 100% safe और discreet\n   → Enjoy your time!\n\n⚡ **Same-day booking available!**\n🔒 **Complete confidentiality guaranteed**\n✅ **No advance payment required**`,
    
    pricing: `💰 **Transparent Pricing (Starting Rates):**\n\n**VIP Escorts**\n   • ₹15,000 - ₹25,000 (3-4 hours)\n   • Premium experience included\n\n**Celebrity Escorts**\n   • ₹20,000 - ₹50,000 (Full evening)\n   • Exclusive companionship\n\n**College Girl Escorts**\n   • ₹8,000 - ₹15,000 (2-3 hours)\n   • Budget-friendly options\n\n**Independent Escorts**\n   • ₹10,000 - ₹20,000 (3-4 hours)\n   • Negotiable rates\n\n**Housewife Escorts**\n   • ₹12,000 - ₹18,000 (3-4 hours)\n   • Special packages available\n\n**Russian Escorts**\n   • ₹30,000 - ₹80,000 (Full night)\n   • Premium international service\n\n📞 **Exact pricing: +91-9372662471**\n\n✅ No hidden charges\n✅ Flexible payment options\n✅ Special discounts for regular clients`,
    
    location: `📍 **Complete Location Coverage in Indore:**\n\n**Premium Areas:**\n✅ **Vijay Nagar** - Residential & all hotels\n✅ **AB Road** - Major hotels & business areas\n✅ **Palasia** - High-end locations\n✅ **Scheme 78** - Quiet residential service\n\n**Central Locations:**\n✅ **MG Road** - Commercial hub\n✅ **Rajwada** - Old city area\n✅ **Bhawar Kuan** - Central Indore\n\n**Other Areas:**\n✅ **Saket** - Peaceful residential\n✅ **Ring Road** - Wide coverage\n✅ **Airport Road** - Airport pickups\n✅ **Bombay Hospital** - Hospital vicinity\n✅ **Treasure Island** - Mall area\n\n**Service Types:**\n🏨 **Hotel Visits** - All major hotels\n🏠 **Home Service** - Your residence\n🚗 **Outcall Service** - We come to you\n🏢 **Incall Service** - Our locations\n\n📞 **Call +91-9372662471** for your specific area!`,
    
    safety: `🔒 **Your Safety & Privacy - Our Top Priority:**\n\n**✅ 100% Verified Profiles**\n   • Background verification done\n   • Photo verification mandatory\n   • Real & recent pictures only\n   • No fake profiles guaranteed\n\n**🔐 Complete Confidentiality**\n   • Anonymous booking possible\n   • No personal data stored\n   • Encrypted communication\n   • Zero data sharing\n\n**🛡️ Safe Meetings**\n   • Secure locations only\n   • Professional trained escorts\n   • 24/7 emergency support\n   • Safety protocols followed\n\n**📱 Privacy Protected**\n   • Discreet billing\n   • Private transactions\n   • No call recordings\n   • Client privacy respected\n\n**💎 Additional Safety:**\n   • Health checkups regular\n   • Safe practices followed\n   • Professional behavior\n   • Respectful service\n\n**Trust & Discretion Guaranteed!**`,
    
    availability: `⏰ **24/7 Service - हमेशा Available:**\n\n**🌞 Day Time (9 AM - 6 PM)**\n   • Business lunch dates\n   • Shopping companions\n   • Daytime meetings\n   • Office area service\n\n**🌆 Evening Time (6 PM - 12 AM)**\n   • Dinner dates\n   • Party companions\n   • Movie dates\n   • Event escorts\n\n**🌙 Night Time (12 AM - 9 AM)**\n   • Late night bookings\n   • Overnight stays\n   • Midnight companions\n   • Early morning service\n\n**⚡ Instant Availability:**\n   • 1-2 hour notice sufficient\n   • Same day booking\n   • Emergency bookings\n   • Last minute arrangements\n\n**📞 24/7 Helpline:**\n   Call anytime: +91-9372662471\n   WhatsApp: +91-9372662471\n   \n**कभी भी call करें - हम हमेशा available हैं!**`,
    
    contact: `📞 **Contact Information:**\n\n**Primary Contact:**\n📱 Phone: +91-9372662471\n💬 WhatsApp: +91-9372662471\n\n**Website:**\n🌐 https://saumyakapoor.in\n\n**Working Hours:**\n⏰ 24/7 Available (कभी भी)\n\n**Response Time:**\n⚡ Instant (within 5 minutes)\n\n**Services:**\n✅ Call booking\n✅ WhatsApp booking\n✅ Website inquiry\n✅ Emergency booking\n\n**हम तुरंत जवाब देते हैं!**\nCall करें और अपनी requirements बताएं। 😊`,
    
    payment: `💳 **Payment Options:**\n\n**Accepted Methods:**\n✅ Cash (सबसे common)\n✅ UPI (Google Pay, PhonePe, Paytm)\n✅ Bank Transfer\n✅ Card Payment (at hotels)\n\n**Payment Policy:**\n📌 No advance payment required\n📌 Pay after meeting\n📌 Full transparency\n📌 Receipt provided (if needed)\n\n**Special:**\n💰 Discounts for regular clients\n💰 Package deals available\n💰 Negotiable for long bookings\n\n📞 Payment details पर discuss करने के लिए:\n**Call: +91-9372662471**`,
    
    gallery: `📸 **Photo Gallery & Profiles:**\n\n**देखिए real profiles:**\n🌐 Visit: https://saumyakapoor.in/gallery\n\n**Gallery Features:**\n✅ Real & verified photos\n✅ Recent pictures only\n✅ Multiple angles\n✅ Complete profile info\n\n**Categories:**\n🌟 VIP Escorts\n⭐ Celebrity Escorts  \n🎓 College Girls\n💼 Independent\n🏠 Housewife\n💎 Russian\n\n**Privacy Note:**\nकुछ photos privacy के लिए blurred हैं।\nCall करने पर original photos share करेंगे।\n\n📞 **Call +91-9372662471** for complete gallery!`,
    
    about: `👋 **About Saumya Kapoor Service:**\n\n**हम कौन हैं?**\nIndore की #1 Premium Escort Service\n5+ years का trusted experience\n\n**Our USPs:**\n✅ 100% Verified profiles\n✅ Complete privacy & safety\n✅ Professional service\n✅ 24/7 availability\n✅ Pan-Indore coverage\n✅ Transparent pricing\n\n**Why Choose Us:**\n🌟 Largest selection in Indore\n🌟 Instant booking available\n🌟 No fake promises\n🌟 Real photos guarantee\n🌟 Discreet & professional\n\n**Our Promise:**\n💎 Quality companions\n💎 Safe experience\n💎 Complete satisfaction\n💎 Privacy protected\n\n📞 **Experience the difference!**\nCall: +91-9372662471`,
    
    help: `❓ **How Can I Help You?**\n\nमैं आपकी assistant हूं! मुझसे पूछें:\n\n**Services:**\n💼 कौन सी services हैं?\n🎓 College girls available?\n🌟 VIP escorts कैसे book करें?\n\n**Booking:**\n📞 कैसे book करूं?\n⏰ कब available हो?\n📍 मेरे area में service है?\n\n**Pricing:**\n💰 Rates क्या हैं?\n💳 Payment कैसे करूं?\n💎 Packages available?\n\n**Others:**\n🔒 कितना safe है?\n📸 Photos देख सकते हैं?\n🏨 Hotel visit होगी?\n\n**या direct call करें:**\n📱 +91-9372662471 (24/7)\n\nकुछ भी पूछें - मैं यहां हूं! 😊`,
    
    // NEW: Age and appearance related
    age: `👧 **Age Groups & Appearance:**\n\n**Young Escorts (18-24):**\n   • College students\n   • Fresh & energetic\n   • Fun-loving companions\n   • ₹8,000 - ₹15,000\n\n**Mid-Age (25-35):**\n   • Mature & experienced\n   • Professional companions\n   • Understanding nature\n   • ₹10,000 - ₹25,000\n\n**Mature (35-45):**\n   • Housewife escorts\n   • Discreet & caring\n   • Experienced in relationships\n   • ₹12,000 - ₹20,000\n\n**सभी verified हैं!**\n📞 Call: +91-9372662471`,
    
    // NEW: Physical preferences
    physical: `💃 **Physical Preferences Available:**\n\n**Body Type:**\n✅ Slim & Petite (Size 0-4)\n✅ Average & Fit (Size 6-8)\n✅ Curvy & Voluptuous (Size 10-14)\n✅ Athletic & Toned\n\n**Height:**\n✅ Short (4'10" - 5'2")\n✅ Medium (5'3" - 5'6")\n✅ Tall (5'7" - 6'0")\n\n**Complexion:**\n✅ Fair\n✅ Wheatish\n✅ Dusky\n✅ All skin tones\n\n**Hair:**\n✅ Long hair\n✅ Short hair\n✅ Different colors\n\n📞 **अपनी preference बताएं:**\nCall: +91-9372662471`,
    
    // NEW: Experience and activities
    experience: `🎯 **Services & Experiences:**\n\n**Companionship:**\n✅ Dinner dates\n✅ Party companions\n✅ Movie dates\n✅ Shopping partners\n✅ Travel companions\n\n**Business:**\n✅ Business meetings\n✅ Conference companions\n✅ Corporate events\n✅ Client entertainment\n\n**Social:**\n✅ Wedding companions\n✅ Family functions\n✅ Birthday parties\n✅ Social gatherings\n\n**Personal:**\n✅ Girlfriend experience (GFE)\n✅ Intimate companionship\n✅ Overnight stays\n✅ Weekend packages\n\n📞 **Detail discussion के लिए:**\nCall: +91-9372662471`,
    
    // NEW: Hotel specific
    hotel: `🏨 **Hotel Service Details:**\n\n**Covered Hotels:**\n✅ Marriott, Indore\n✅ Sayaji Hotel\n✅ Radisson Blu\n✅ Lemon Tree Hotel\n✅ Effotel\n✅ Ginger Hotels\n✅ OYO Rooms\n✅ All 3-5 star hotels\n\n**Service Types:**\n🔹 **Incall**: Escort's location\n🔹 **Outcall**: Your hotel room\n🔹 **Both available**\n\n**Hotel Visit Process:**\n1. Book your hotel room\n2. Call us: +91-9372662471\n3. Share hotel name & room\n4. Escort arrives (30-60 mins)\n\n**100% Discreet!**\nNo lobby meetings, direct room service.\n\n📞 **Book now: +91-9372662471**`,
    
    // NEW: Duration and packages
    duration: `⏱️ **Duration & Packages:**\n\n**Short Duration:**\n✅ **1 Hour** - ₹8,000-₹12,000\n   Quick meetings, simple companionship\n\n✅ **2-3 Hours** - ₹10,000-₹18,000\n   Dinner dates, short outings\n\n**Medium Duration:**\n✅ **4-6 Hours** - ₹15,000-₹30,000\n   Full evening experience\n   Dinner + quality time\n\n**Long Duration:**\n✅ **Overnight** (8-10 hours) - ₹25,000-₹50,000\n   Complete night experience\n   Sleep over included\n\n✅ **24 Hours** - ₹40,000-₹80,000\n   Full day companion\n   All activities included\n\n**Weekend Packages:**\n✅ **2 Days** - Special rates\n✅ **3 Days** - Best value\n\n📞 **Custom packages available:**\nCall: +91-9372662471`,
    
    // NEW: Verification process
    verification: `✅ **Profile Verification Process:**\n\n**हम कैसे verify करते हैं:**\n\n1. **Photo Verification**\n   • Real-time photo matching\n   • Multiple angle photos\n   • No photoshop/filters\n   • Recent pictures (30 days)\n\n2. **Identity Verification**\n   • Age proof checked\n   • Background screening\n   • References verified\n\n3. **Health Verification**\n   • Regular health checkups\n   • Hygiene standards\n   • Safe practices\n\n4. **Profile Accuracy**\n   • Height, weight verified\n   • Services confirmed\n   • Rates authenticated\n\n**आपकी Safety:**\n🔒 Meet only verified escorts\n🔒 100% real profiles\n🔒 No surprises guaranteed\n\n📞 **Verification details:**\nCall: +91-9372662471`,
    
    // NEW: First time customer
    firsttime: `🌟 **First Time Customer Guide:**\n\n**आपके सवाल:**\n\n❓ **पहली बार book कर रहा हूं, क्या करूं?**\n→ Don't worry! हम guide करेंगे\n\n❓ **कितना safe है?**\n→ 100% safe! Verified escorts, private meetings\n\n❓ **Advance payment?**\n→ NO! Pay after meeting only\n\n❓ **Photo real होंगे?**\n→ YES! 100% real verified photos\n\n**Step-by-Step:**\n1. **Call करें:** +91-9372662471\n2. **Requirements बताएं:** Age, type, budget\n3. **Photos देखें:** WhatsApp पर भेजेंगे\n4. **Select करें:** जो पसंद आए\n5. **Time/Place तय करें:** Hotel/home\n6. **Meet करें:** Enjoy!\n\n**Special Benefits:**\n✅ First time discount\n✅ Extra guidance\n✅ Flexible timing\n✅ Best escorts\n\n� **Call now:** +91-9372662471\n\n**हम समझते हैं आपकी hesitation!** �😊`,
    
    // NEW: Confidentiality specific
    confidential: `🔐 **Complete Confidentiality Guarantee:**\n\n**आपकी Privacy हमारी Priority:**\n\n**Data Protection:**\n✅ No caller ID storage\n✅ No conversation recording\n✅ No personal data saved\n✅ No third-party sharing\n\n**Meeting Privacy:**\n✅ Discreet arrivals\n✅ No public meetings\n✅ Private locations only\n✅ Professional behavior\n\n**Payment Privacy:**\n✅ Discreet billing\n✅ No paper trails\n✅ Cash preferred\n✅ Anonymous transactions\n\n**Communication:**\n✅ Encrypted messaging\n✅ Delete after booking\n✅ No email trails\n✅ Secure calls only\n\n**आप Married हैं?**\n🔒 Extra discretion guaranteed\n🔒 No questions asked\n🔒 Complete privacy\n\n**Trust us completely!**\n📞 Call: +91-9372662471`,
    
    // NEW: Outcall vs Incall
    calltype: `🚗 **Outcall vs Incall Service:**\n\n**🏠 OUTCALL (We come to you):**\n\n**Where:**\n   • Your hotel room\n   • Your home\n   • Your office (after hours)\n   • Any private location\n\n**Advantages:**\n   ✅ Your comfort zone\n   ✅ No travel needed\n   ✅ More privacy\n   ✅ Flexible timing\n\n**Cost:** Standard rates apply\n**Travel:** Included in Indore\n\n**🏢 INCALL (You come to us):**\n\n**Where:**\n   • Our secured apartments\n   • Partner hotels\n   • Private locations\n\n**Advantages:**\n   ✅ Ready setup\n   ✅ Privacy guaranteed\n   ✅ No home concerns\n   ✅ Professional ambiance\n\n**Cost:** Usually 10-20% less\n\n**Most Popular:** Outcall (70%)\n\n📞 **Choose your preference:**\nCall: +91-9372662471`,
    
    // NEW: Weekend/Holiday special
    weekend: `🎉 **Weekend & Holiday Specials:**\n\n**Friday-Sunday Offers:**\n💎 **Weekend Packages:**\n   • 2-day companion: 20% off\n   • Full weekend: 30% off\n   • Party companion special\n\n**Holiday Specials:**\n🎊 **Festive Seasons:**\n   • Diwali specials\n   • New Year packages\n   • Valentine's Day offers\n   • Christmas specials\n\n**Long Weekend:**\n✅ 3-day packages\n✅ Outstation companions\n✅ Travel included\n✅ Best rates\n\n**Weekend Activities:**\n🍷 Club visits\n🍽️ Fine dining\n🎬 Movie nights\n🛍️ Shopping dates\n🏖️ Resort visits\n\n**Book in Advance:**\nWeekends fill up fast!\n\n📞 **Book your weekend:**\nCall: +91-9372662471`,
    
    // NEW: Russian/Foreign escorts
    foreign: `💎 **International/Russian Escorts:**\n\n**Available Nationalities:**\n🇷🇺 **Russian Models**\n   • Exotic beauty\n   • Elite companionship\n   • English speaking\n   • ₹30,000 - ₹80,000\n\n🇺🇦 **Ukrainian Escorts**\n   • Stunning looks\n   • Professional service\n   • ₹35,000 - ₹70,000\n\n🇺🇸 **American/European**\n   • Limited availability\n   • Premium experience\n   • ₹50,000+\n\n**Why Choose Foreign:**\n✅ Exotic experience\n✅ Different culture\n✅ International standards\n✅ English fluent\n✅ Professional attitude\n\n**Availability:**\n⚠️ Limited slots\n⚠️ Advance booking required\n⚠️ Higher rates apply\n\n**Special Services:**\n🌟 Model-like appearance\n🌟 High-class events\n🌟 Business companions\n\n📞 **For bookings:**\nCall: +91-9372662471\n\n**Passport verified!**`,
    
    // NEW: Group/Multiple escorts
    group: `👯 **Multiple Escorts/Group Booking:**\n\n**2 Escorts Package:**\n💕 **Double Fun:**\n   • 2 companions together\n   • Interactive experience\n   • ₹20,000 - ₹40,000 (3-4 hours)\n   • 30% discount vs individual\n\n**3+ Escorts:**\n🎉 **Party Package:**\n   • Bachelor parties\n   • Group events\n   • Friend gatherings\n   • Special rates: ₹50,000+\n\n**Why Group Booking:**\n✅ Party atmosphere\n✅ More fun\n✅ Cost-effective\n✅ Variety\n✅ Energy boost\n\n**Popular Occasions:**\n🎊 Bachelor parties\n🎂 Birthday celebrations\n🍾 Success parties\n👔 Corporate events\n🎭 Theme parties\n\n**Available Combos:**\n• 2 College girls\n• 1 VIP + 1 College\n• 3 Different types\n• Custom combinations\n\n📞 **Group bookings:**\nCall: +91-9372662471\n\n**Advance booking recommended!**`
  };
  
  // Ultra-Advanced keyword matching with scoring system for ALL escort questions
  const keywords = {
    greeting: ['hi', 'hello', 'hey', 'namaste', 'नमस्ते', 'hii', 'hlo', 'start', 'kya', 'क्या'],
    services: ['service', 'सेवा', 'type', 'category', 'vip', 'celebrity', 'college', 'russian', 'housewife', 'independent', 'कौन', 'kinds'],
    booking: ['book', 'बुकिंग', 'कैसे', 'how to', 'process', 'reserve', 'appointment', 'arrange'],
    pricing: ['price', 'rate', 'cost', 'fee', 'charge', 'कीमत', 'रेट', 'पैसे', 'kitna', 'कितना', 'money', 'rupees'],
    location: ['location', 'area', 'जगह', 'where', 'कहां', 'vijay nagar', 'ab road', 'palasia', 'indore', 'scheme'],
    safety: ['safe', 'सुरक्षा', 'privacy', 'secure', 'confidential', 'trust', 'verified', 'real'],
    availability: ['available', 'उपलब्ध', 'timing', 'when', 'कब', 'time', '24/7', 'night', 'day', 'evening'],
    contact: ['contact', 'phone', 'whatsapp', 'number', 'नंबर', 'call', 'फोन', 'reach'],
    payment: ['payment', 'pay', 'cash', 'upi', 'card', 'भुगतान', 'पेमेंट', 'advance'],
    gallery: ['photo', 'picture', 'image', 'फोटो', 'तस्वीर', 'gallery', 'see', 'देखना', 'look'],
    about: ['about', 'who', 'के बारे', 'कौन', 'company', 'service provider', 'experience'],
    
    // NEW categories for comprehensive escort questions
    age: ['age', 'उम्र', 'young', 'जवान', 'old', 'mature', 'year', 'साल', 'college student'],
    physical: ['body', 'height', 'weight', 'slim', 'fat', 'curvy', 'fair', 'dark', 'complexion', 'hair', 'figure', 'size'],
    experience: ['experience', 'activity', 'girlfriend', 'gfe', 'date', 'dinner', 'movie', 'travel', 'companion'],
    hotel: ['hotel', 'होटल', 'room', 'marriott', 'sayaji', 'radisson', 'oyo', 'inn'],
    duration: ['hour', 'घंटा', 'overnight', 'night', 'day', 'weekend', 'duration', 'package', 'long', 'short'],
    verification: ['verify', 'verified', 'real', 'fake', 'genuine', 'authentic', 'check'],
    firsttime: ['first time', 'पहली बार', 'new', 'नया', 'never', 'beginner', 'scared', 'nervous'],
    confidential: ['confidential', 'गोपनीय', 'secret', 'रहस्य', 'discreet', 'private', 'hide', 'married'],
    calltype: ['incall', 'outcall', 'आना', 'जाना', 'come', 'go', 'visit', 'location type'],
    weekend: ['weekend', 'friday', 'saturday', 'sunday', 'holiday', 'special', 'offer', 'discount'],
    foreign: ['russian', 'foreign', 'international', 'विदेशी', 'american', 'european', 'exotic'],
    group: ['two', 'three', 'multiple', 'group', 'दो', 'तीन', 'party', 'bachelor'],
    
    help: ['help', 'मदद', 'सहायता', 'assist', 'support', 'question', 'सवाल', 'confused']
  };
  
  // Calculate match score for each category
  let maxScore = 0;
  let bestMatch = 'help';
  
  for (const [category, words] of Object.entries(keywords)) {
    let score = 0;
    for (const word of words) {
      if (lowerMessage.includes(word)) {
        score += word.length; // Longer matches get higher scores
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = category;
    }
  }
  
  // Return best matching response
  return responses[bestMatch as keyof typeof responses] || responses.help;
}

// Real LLM Integration (requires API key)
export async function callLLMAPI(
  messages: ChatMessage[],
  config: LLMConfig
): Promise<string> {
  try {
    switch (config.provider) {
      case 'openai':
        return await callOpenAI(messages, config);
      case 'anthropic':
        return await callAnthropic(messages, config);
      case 'gemini':
        return await callGemini(messages, config);
      default:
        throw new Error('Unsupported LLM provider');
    }
  } catch (error) {
    console.error('LLM API Error:', error);
    // Fallback to mock response
    const lastUserMessage = messages.filter(m => m.role === 'user').pop();
    return await generateMockLLMResponse(lastUserMessage?.content || '');
  }
}

// OpenAI Integration
async function callOpenAI(messages: ChatMessage[], config: LLMConfig): Promise<string> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.apiKey}`
    },
    body: JSON.stringify({
      model: config.model || 'gpt-4',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: config.temperature || 0.7,
      max_tokens: config.maxTokens || 500
    })
  });
  
  const data = await response.json();
  return data.choices[0].message.content;
}

// Anthropic Claude Integration
async function callAnthropic(messages: ChatMessage[], config: LLMConfig): Promise<string> {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': config.apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: config.model || 'claude-3-sonnet-20240229',
      messages: messages,
      system: SYSTEM_PROMPT,
      max_tokens: config.maxTokens || 500
    })
  });
  
  const data = await response.json();
  return data.content[0].text;
}

// Google Gemini Integration
async function callGemini(messages: ChatMessage[], config: LLMConfig): Promise<string> {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/${config.model || 'gemini-pro'}:generateContent?key=${config.apiKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        ...messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }))
      ],
      generationConfig: {
        temperature: config.temperature || 0.7,
        maxOutputTokens: config.maxTokens || 500
      }
    })
  });
  
  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}

// Conversation context management
export class ConversationManager {
  private messages: ChatMessage[] = [];
  private maxHistory = 10;
  
  addMessage(role: 'user' | 'assistant', content: string) {
    this.messages.push({ role, content });
    
    // Keep only recent messages for context
    if (this.messages.length > this.maxHistory) {
      this.messages = this.messages.slice(-this.maxHistory);
    }
  }
  
  getMessages(): ChatMessage[] {
    return this.messages;
  }
  
  clearHistory() {
    this.messages = [];
  }
}

// Export ready-to-use function
export async function getAIResponse(userMessage: string, conversationHistory: ChatMessage[] = []): Promise<string> {
  // For now, use mock responses (no API key needed)
  // To use real LLM, uncomment below and add API key
  
  /*
  const config: LLMConfig = {
    provider: 'openai',
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
    model: 'gpt-4',
    temperature: 0.7,
    maxTokens: 500
  };
  
  const messages: ChatMessage[] = [
    ...conversationHistory,
    { role: 'user', content: userMessage }
  ];
  
  return await callLLMAPI(messages, config);
  */
  
  // Using mock for now
  return await generateMockLLMResponse(userMessage);
}
