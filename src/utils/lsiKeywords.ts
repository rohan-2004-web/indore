// LSI (Latent Semantic Indexing) Keywords for SEO Optimization
// These semantically related keywords help search engines understand content context

export const primaryLSIKeywords = [
  // Primary Service Terms
  'escort service',
  'call girls',
  'VIP escorts',
  'premium companions',
  'elite escorts',
  'luxury companions',
  'professional escorts',
  'high class escorts',
  
  // Location-based LSI
  'Indore escorts',
  'escorts in Indore',
  'Madhya Pradesh escorts',
  'MP escort service',
  'Central India escorts',
  
  // Service Type LSI
  'incall service',
  'outcall service',
  'hotel room service',
  'home visit service',
  'private meetings',
  'discreet encounters',
  'confidential service',
  'safe escort meetings',
  
  // Quality & Trust LSI
  'verified profiles',
  'genuine escorts',
  'authentic service',
  'trusted agency',
  'licensed escorts',
  'professional agency',
  'reliable service',
  'safe companions',
  
  // Time-based LSI
  '24/7 service',
  'midnight escorts',
  'late night service',
  'early morning service',
  'instant booking',
  'same day service',
  'emergency service',
  
  // Companion Types LSI
  'celebrity escorts',
  'model companions',
  'college girl escorts',
  'independent escorts',
  'housewife escorts',
  'mature escorts',
  'young escorts',
  'Russian escorts',
  'foreign escorts',
  'local escorts',
  
  // Event & Occasion LSI
  'party escorts',
  'event companions',
  'business travel escorts',
  'corporate companions',
  'dinner dates',
  'social events',
  'wedding escorts',
  'conference companions',
  
  // Luxury & Premium LSI
  'five star escorts',
  'luxury dating',
  'premium dating service',
  'upscale companions',
  'sophisticated escorts',
  'high profile escorts',
  'exclusive service',
  'elite dating',
  
  // Booking & Contact LSI
  'online booking',
  'instant booking',
  'WhatsApp booking',
  'phone booking',
  'direct contact',
  'immediate service',
  'quick response',
  
  // Area-specific LSI
  'Vijay Nagar escorts',
  'AB Road call girls',
  'Palasia escorts',
  'Scheme 78 escorts',
  'MG Road escorts',
  'Saket escorts',
  'Ring Road escorts',
  'Airport Road escorts',
  'Bhawar Kuan escorts',
  'Rajwada escorts',
];

export const secondaryLSIKeywords = [
  // Professional Terms
  'companion service',
  'personal escort',
  'female companions',
  'dating service',
  'matchmaking service',
  'relationship service',
  
  // Service Features
  'photo verified',
  'video verified',
  'real profiles',
  'authentic photos',
  'current pictures',
  
  // Privacy & Safety
  'anonymous service',
  'privacy guaranteed',
  'secure booking',
  'encrypted communication',
  'data protection',
  'client confidentiality',
  
  // Payment & Pricing
  'affordable escorts',
  'budget friendly',
  'premium rates',
  'transparent pricing',
  'no hidden charges',
  'advance booking',
  'cash payment',
  'online payment',
  
  // Experience Level
  'experienced escorts',
  'professional models',
  'trained companions',
  'skilled escorts',
  'expert service',
  
  // Physical Attributes
  'slim escorts',
  'curvy escorts',
  'tall escorts',
  'petite escorts',
  'beautiful escorts',
  'attractive companions',
  
  // Personality Traits
  'friendly escorts',
  'charming companions',
  'intelligent escorts',
  'cultured companions',
  'multilingual escorts',
  'educated escorts',
];

export const locationSpecificLSI = {
  'vijay-nagar': [
    'Vijay Nagar escorts',
    'escorts near Vijay Nagar',
    'call girls Vijay Nagar',
    'Vijay Nagar premium escorts',
    'Scheme 54 escorts',
    'Mahalaxmi Nagar escorts',
  ],
  'ab-road': [
    'AB Road escorts',
    'escorts on AB Road',
    'call girls AB Road',
    'AB Road premium service',
    'Bypass Road escorts',
    'MR 10 escorts',
  ],
  'palasia': [
    'Palasia escorts',
    'New Palasia escorts',
    'Old Palasia escorts',
    'escorts near Palasia',
    'call girls Palasia area',
    'Palasia premium escorts',
  ],
  'scheme-78': [
    'Scheme 78 escorts',
    'Scheme 78 call girls',
    'premium escorts Scheme 78',
    'residential escorts Scheme 78',
  ],
  'mg-road': [
    'MG Road escorts',
    'escorts on MG Road',
    'call girls MG Road',
    'commercial area escorts',
  ],
};

export const serviceTypeLSI = {
  'vip': [
    'VIP escort service',
    'VIP companions',
    'exclusive VIP escorts',
    'premium VIP service',
    'luxury VIP escorts',
  ],
  'celebrity': [
    'celebrity escorts',
    'celebrity companions',
    'celebrity level service',
    'star escorts',
    'famous escorts',
  ],
  'independent': [
    'independent escorts',
    'independent call girls',
    'solo escorts',
    'private escorts',
    'self-employed escorts',
  ],
  'college': [
    'college girl escorts',
    'young escorts',
    'student escorts',
    'university escorts',
    'fresh escorts',
  ],
};

// Function to generate meta keywords from LSI
export function generateMetaKeywords(
  primary: string[],
  secondary: string[] = [],
  location?: string,
  serviceType?: string
): string {
  let keywords = [...primary];
  
  if (secondary.length > 0) {
    keywords = [...keywords, ...secondary.slice(0, 10)];
  }
  
  if (location && locationSpecificLSI[location as keyof typeof locationSpecificLSI]) {
    keywords = [...keywords, ...locationSpecificLSI[location as keyof typeof locationSpecificLSI]];
  }
  
  if (serviceType && serviceTypeLSI[serviceType as keyof typeof serviceTypeLSI]) {
    keywords = [...keywords, ...serviceTypeLSI[serviceType as keyof typeof serviceTypeLSI]];
  }
  
  return keywords.join(', ');
}

// Function to get LSI keywords for content optimization
export function getLSIKeywordsForContent(category: 'service' | 'location' | 'about' | 'contact'): string[] {
  const commonKeywords = primaryLSIKeywords.slice(0, 20);
  
  switch (category) {
    case 'service':
      return [...commonKeywords, ...secondaryLSIKeywords.slice(0, 15)];
    case 'location':
      return [...commonKeywords, ...Object.values(locationSpecificLSI).flat()];
    case 'about':
      return [...primaryLSIKeywords.slice(0, 30)];
    case 'contact':
      return [...primaryLSIKeywords.filter(k => k.includes('booking') || k.includes('service'))];
    default:
      return commonKeywords;
  }
}
