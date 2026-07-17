export interface Crop {
  id: string;
  name: string;
  hindiName: string;
  punjabiName: string;
  scientificName: string;
  category: 'Grains' | 'Spices' | 'Cash Crops' | 'Fruits & Vegetables';
  season: 'Kharif' | 'Rabi' | 'Zaid' | 'Perennial';
  topStates: string[];
  temperatureRange: string;
  rainfallRange: string;
  soilType: string;
  image: string;
  mandiPrice: number; // Base rate in INR per quintal (qtl)
  priceTrend: 'up' | 'down' | 'stable';
  description: string;
  healthBenefits: string[];
  cultivationTips: string[];
}

export const cropData: Crop[] = [
  {
    id: 'wheat',
    name: 'Wheat',
    hindiName: 'गेहूं (Gehun)',
    punjabiName: 'ਕਣਕ (Kanak)',
    scientificName: 'Triticum aestivum',
    category: 'Grains',
    season: 'Rabi',
    topStates: ['Uttar Pradesh', 'Punjab', 'Madhya Pradesh', 'Haryana'],
    temperatureRange: '10°C - 25°C',
    rainfallRange: '50 - 75 cm',
    soilType: 'Clayey loam, well-drained alluvial soil',
    image: '/images/crop_wheat.png',
    mandiPrice: 2275,
    priceTrend: 'up',
    description: 'Wheat is the second most important cereal crop in India after rice. It is a staple food in north and north-western parts of the country, requiring a cool growing season and bright sunshine at ripening.',
    healthBenefits: [
      'Rich source of dietary fiber and complex carbohydrates',
      'Contains essential minerals like zinc, iron, and magnesium',
      'Promotes healthy gut microbiome and long-lasting energy'
    ],
    cultivationTips: [
      'Sow seeds during late October to November for optimal yields.',
      'Ensure 4-6 irrigations at critical growth stages like crown root initiation.',
      'Maintain proper drainage to prevent root rot during early stages.'
    ]
  },
  {
    id: 'rice',
    name: 'Rice (Paddy)',
    hindiName: 'धान (Dhan)',
    punjabiName: 'ਚੌਲ (Chaul)',
    scientificName: 'Oryza sativa',
    category: 'Grains',
    season: 'Kharif',
    topStates: ['West Bengal', 'Uttar Pradesh', 'Punjab', 'Andhra Pradesh'],
    temperatureRange: '22°C - 32°C',
    rainfallRange: '150 - 300 cm',
    soilType: 'Heavy clay or clayey loam that retains moisture',
    image: '/images/crop_rice.png',
    mandiPrice: 2183,
    priceTrend: 'stable',
    description: 'Rice is the staple food crop for a majority of India\'s population. It is a high-temperature, high-humidity crop requiring standing water during its early vegetative cycle.',
    healthBenefits: [
      'Gluten-free and easily digestible carbohydrate source',
      'Provides instant energy through rapid glucose metabolism',
      'Brown rice variants are rich in B vitamins and antioxidants'
    ],
    cultivationTips: [
      'Transplant seedlings from nurseries after 21-25 days.',
      'Maintain a standing water level of 2-5 cm during initial growth.',
      'Adopt SRI (System of Rice Intensification) to save water and increase yield.'
    ]
  },
  {
    id: 'cardamom',
    name: 'Cardamom',
    hindiName: 'इलायची (Elaichi)',
    punjabiName: 'ਇਲਾਇਚੀ (Elaichi)',
    scientificName: 'Elettaria cardamomum',
    category: 'Spices',
    season: 'Perennial',
    topStates: ['Kerala', 'Karnataka', 'Tamil Nadu'],
    temperatureRange: '15°C - 35°C',
    rainfallRange: '150 - 250 cm',
    soilType: 'Rich forest loam, acidic, organic-rich',
    image: '/images/crop_spices.png',
    mandiPrice: 14500,
    priceTrend: 'up',
    description: 'Known as the "Queen of Spices," Green Cardamom is native to the evergreen forests of the Western Ghats in Southern India. It is highly aromatic and used globally in both sweet and savory dishes.',
    healthBenefits: [
      'Powerful antioxidant with natural anti-inflammatory properties',
      'Aids digestion, combats bloating, and acts as a breath freshener',
      'Supports healthy blood pressure levels and cardiovascular functions'
    ],
    cultivationTips: [
      'Grow under natural forest canopy or artificial shade (50% light intensity).',
      'Apply generous amounts of organic mulch to retain soil moisture.',
      'Harvest individual capsules manually when they are just about to ripen.'
    ]
  },
  {
    id: 'cotton',
    name: 'Cotton',
    hindiName: 'कपास (Kapaas)',
    punjabiName: 'ਕਪਾਹ (Kapah)',
    scientificName: 'Gossypium hirsutum',
    category: 'Cash Crops',
    season: 'Kharif',
    topStates: ['Gujarat', 'Maharashtra', 'Telangana', 'Rajasthan'],
    temperatureRange: '21°C - 30°C',
    rainfallRange: '50 - 100 cm',
    soilType: 'Black cotton soil (regur) which retains moisture',
    image: '/images/crop_cotton.png',
    mandiPrice: 7020,
    priceTrend: 'down',
    description: 'Cotton is one of the most important commercial crops in India, supporting millions of farmers and the massive textile industry. It requires a frost-free period and bright, sunny weather.',
    healthBenefits: [
      'Pure natural fiber used for breathable, hypoallergenic textile production',
      'Cottonseed oil is extracted for cooking and industrial applications',
      'Byproducts provide high-protein cattle feed (cottonseed cake)'
    ],
    cultivationTips: [
      'Ensure deep tillage to allow taproots to penetrate black soils.',
      'Manage pests using integrated pest management (IPM) for bollworm.',
      'Harvest cotton bolls only when they are fully open and dry.'
    ]
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    hindiName: 'हल्दी (Haldi)',
    punjabiName: 'ਹੱਲਦੀ (Haldi)',
    scientificName: 'Curcuma longa',
    category: 'Spices',
    season: 'Kharif',
    topStates: ['Telangana', 'Maharashtra', 'Karnataka', 'Tamil Nadu'],
    temperatureRange: '20°C - 35°C',
    rainfallRange: '150 - 200 cm',
    soilType: 'Sandy loam or clayey loam, well-drained, loose soil',
    image: '/images/crop_turmeric.png',
    mandiPrice: 6850,
    priceTrend: 'up',
    description: 'Turmeric is a rhizomatous herbaceous perennial plant native to the Indian subcontinent. India is the largest producer, consumer, and exporter of turmeric in the world.',
    healthBenefits: [
      'Contains Curcumin, a compound with potent anti-inflammatory effects',
      'Boosts immune response and promotes glowing skin health',
      'Possesses strong antimicrobial and wound-healing characteristics'
    ],
    cultivationTips: [
      'Use healthy, disease-free mother or finger rhizomes for sowing.',
      'Adopt ridge and furrow planting methods to avoid water stagnation.',
      'Harvest when leaves turn yellow and start drying up (typically 7-9 months).'
    ]
  },
  {
    id: 'tea',
    name: 'Tea',
    hindiName: 'चाय (Chai)',
    punjabiName: 'ਚਾਹ (Chah)',
    scientificName: 'Camellia sinensis',
    category: 'Cash Crops',
    season: 'Perennial',
    topStates: ['Assam', 'West Bengal', 'Tamil Nadu', 'Kerala'],
    temperatureRange: '20°C - 30°C',
    rainfallRange: '150 - 300 cm',
    soilType: 'Acidic soil (pH 4.5 - 5.5) with rich organic matter on slopes',
    image: '/images/crop_tea.png',
    mandiPrice: 18500,
    priceTrend: 'stable',
    description: 'India is one of the largest tea producers in the world, with world-famous varieties like Darjeeling and Assam tea. Tea cultivation is highly labor-intensive and thrives on well-drained hilly slopes.',
    healthBenefits: [
      'Abundant in polyphenols, which reduce inflammation and combat free radicals',
      'Contains L-theanine, promoting calm alertness and focus',
      'Supports metabolism and cardiovascular health'
    ],
    cultivationTips: [
      'Maintain acidic soil conditions and shade trees like Albizia.',
      'Regular pruning is essential to encourage fresh flushing of tea shoots.',
      'Pluck only "two leaves and a bud" for high-quality tea production.'
    ]
  }
];
