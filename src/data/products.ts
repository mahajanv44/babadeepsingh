export interface ProductItem {
  id: string;
  name: string;
  punjabiName: string;
  category:
    | "organic-fertilizer"
    | "insecticides"
    | "meat-bone-meal"
    | "fertilizer"
    | "fungicides"
    | "herbicides"
    | "rented-equipment";
  categoryLabel: string;
  categoryPunjabi: string;
  packSize: string;
  description: string;
  punjabiDesc: string;
  crops: string[];
  image: string;
  inStock: boolean;
  isRental?: boolean;
  rentalPeriod?: string;
  badge?: string;
  composition?: string;
}

export interface ProductCategory {
  id: string;
  slug: ProductItem["category"];
  title: string;
  punjabiTitle: string;
  shortDesc: string;
  punjabiDesc: string;
  image: string;
  accentColor: string;
  itemCount: number;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "cat-1",
    slug: "organic-fertilizer",
    title: "Organic Fertilizer",
    punjabiTitle: "ਜੈਵਿਕ ਖਾਦ",
    shortDesc: "Nutrient-rich natural seaweed extract, pure neem cake & vermicompost for fertile living soil.",
    punjabiDesc: "ਬਾਇਓਵੀਟਾ ਤਰਲ ਖਾਦ, ਸ਼ੁੱਧ ਨੀਮ ਖਲੀ ਅਤੇ ਗੰਡੋਆ ਖਾਦ ਜੋ ਜ਼ਮੀਨ ਦੀ ਉਪਜਾਊ ਸ਼ਕਤੀ ਵਧਾਉਂਦੀਆਂ ਹਨ।",
    image: "/images/products/biovita_seaweed.webp",
    accentColor: "#4b6f42",
    itemCount: 3,
  },
  {
    id: "cat-2",
    slug: "insecticides",
    title: "Insecticides",
    punjabiTitle: "ਕੀਟਨਾਸ਼ਕ",
    shortDesc: "Top branded solutions (Coragen, Solomon, Actara) for stem borers, aphids, thrips & chewing pests.",
    punjabiDesc: "ਕੋਰਾਜ਼ਨ, ਸੋਲੋਮਨ ਅਤੇ ਐਕਟਾਰਾ - ਗੋਭ ਦੀ ਸੁੰਡੀ, ਤੇਲਾ, ਸੁਸਰੀ ਅਤੇ ਚੂਸਕ ਕੀੜਿਆਂ ਦੇ ਖ਼ਾਤਮੇ ਲਈ।",
    image: "/images/products/coragen.webp",
    accentColor: "#c79f2a",
    itemCount: 3,
  },
  {
    id: "cat-3",
    slug: "meat-bone-meal",
    title: "Meat Bone Meal",
    punjabiTitle: "ਮੀਟ ਬੋਨ ਮੀਲ",
    shortDesc: "Steam-sterilized bone meal rich in slow-release organic phosphorus & calcium for vigorous roots.",
    punjabiDesc: "ਪੌਦਿਆਂ ਦੀਆਂ ਜੜ੍ਹਾਂ ਦੀ ਮਜ਼ਬੂਤੀ ਅਤੇ ਫ਼ਾਸਫ਼ੋਰਸ-ਕੈਲਸ਼ੀਅਮ ਪੂਰਤੀ ਲਈ ਸਟੀਮਡ ਬੋਨ ਮੀਲ ਖਾਦ।",
    image: "/images/products/meat_bone_meal.webp",
    accentColor: "#8d6e63",
    itemCount: 2,
  },
  {
    id: "cat-4",
    slug: "fertilizer",
    title: "Fertilizer",
    punjabiTitle: "ਰਸਾਇਣਕ ਤੇ ਮਿਸ਼ਰਤ ਖਾਦਾਂ",
    shortDesc: "Neem Coated Urea (46% N), DAP 18:46:0 & 100% water-soluble NPK 19:19:19 from certified brands.",
    punjabiDesc: "ਯੂਰੀਆ, ਡੀ.ਏ.ਪੀ ਅਤੇ ਐਨ.ਪੀ.ਕੇ 19:19:19 ਘੁਲਣਸ਼ੀਲ ਖਾਦ - ਭਰੋਸੇਮੰਦ ਭਾਰਤੀ ਬ੍ਰਾਂਡਾਂ ਤੋਂ ਉਪਲਬਧ।",
    image: "/images/products/urea_bag.webp",
    accentColor: "#2e7d32",
    itemCount: 3,
  },
  {
    id: "cat-5",
    slug: "fungicides",
    title: "Fungicides",
    punjabiTitle: "ਉੱਲੀਨਾਸ਼ਕ",
    shortDesc: "Leading broad-spectrum fungicides (UPL Saaf, Bayer Nativo, Syngenta Amistar Top) for yellow rust & blast.",
    punjabiDesc: "ਸਾਫ਼, ਨਟੀਵੋ ਅਤੇ ਐਮਿਸਟਾਰ ਟਾਪ - ਕਣਕ ਦੀ ਪੀਲੀ ਕੁੰਗੀ, ਝੋਨੇ ਦੇ ਬਲਾਸਟ ਅਤੇ ਸ਼ੀਥ ਬਲਾਈਟ ਦੀ ਰੋਕਥਾਮ।",
    image: "/images/products/upl_saaf.webp",
    accentColor: "#a1782e",
    itemCount: 3,
  },
  {
    id: "cat-6",
    slug: "herbicides",
    title: "Herbicides",
    punjabiTitle: "ਨਦੀਨਨਾਸ਼ਕ",
    shortDesc: "Targeted weed control (Nominee Gold, Stomp Xtra, Topik) for paddy sedges and wheat gullidanda.",
    punjabiDesc: "ਨੌਮਿਨੀ ਗੋਲਡ, ਸਟੌਂਪ ਐਕਸਟਰਾ ਅਤੇ ਟੌਪਿਕ - ਝੋਨੇ ਦੇ ਸਵਾਂਕ/ਮੋਥਾ ਅਤੇ ਕਣਕ ਦੇ ਗੁੱਲੀ ਡੰਡੇ ਲਈ।",
    image: "/images/products/nominee_gold.webp",
    accentColor: "#d97706",
    itemCount: 3,
  },
  {
    id: "cat-7",
    slug: "rented-equipment",
    title: "Rented Equipment",
    punjabiTitle: "ਕਿਰਾਏ 'ਤੇ ਖੇਤੀ ਸੰਦ",
    shortDesc: "Affordable daily/hourly machinery rentals: battery sprayers, power weeders, and tractor seed drills.",
    punjabiDesc: "ਬੈਟਰੀ ਸਪਰੇਅ ਪੰਪ, 7 HP ਪਾਵਰ ਵੀਡਰ ਗੋਡੀ ਮਸ਼ੀਨ ਅਤੇ ਟਰੈਕਟਰ ਬੀਜ ਡਰਿੱਲ ਕਿਰਾਏ 'ਤੇ ਉਪਲਬਧ।",
    image: "/images/products/farm_machinery_rental.webp",
    accentColor: "#4b6f42",
    itemCount: 3,
  },
];

export const PRODUCTS_LIST: ProductItem[] = [
  // --- 1. ORGANIC FERTILIZER (3 Products) ---
  {
    id: "prod-org-1",
    name: "PI Biovita Liquid Seaweed Bio-Fertilizer",
    punjabiName: "ਪੀ.ਆਈ ਬਾਇਓਵੀਟਾ ਆਰਗੈਨਿਕ ਤਰਲ ਖਾਦ",
    category: "organic-fertilizer",
    categoryLabel: "Organic Fertilizer",
    categoryPunjabi: "ਜੈਵਿਕ ਖਾਦ",
    packSize: "250 ml / 500 ml / 1 Litre",
    description:
      "Naturally derived seaweed bio-stimulant (Ascophyllum nodosum) that accelerates vegetative vigour, root branching, and crop stress resistance.",
    punjabiDesc:
      "ਕੁਦਰਤੀ ਸਮੁੰਦਰੀ ਘਾਹ ਤੋਂ ਤਿਆਰ ਜੈਵਿਕ ਟੌਨਿਕ ਜੋ ਪੌਦਿਆਂ ਵਿੱਚ ਹਰਿਆਵਲ, ਨਵੀਆਂ ਸ਼ਾਖਾਵਾਂ ਅਤੇ ਫ਼ਸਲ ਦਾ ਝਾੜ ਵਧਾਉਂਦਾ ਹੈ।",
    crops: ["Wheat / ਕਣਕ", "Paddy / ਝੋਨਾ", "Cotton / ਨਰਮਾ", "Vegetables / ਸਬਜ਼ੀਆਂ"],
    image: "/images/products/biovita_seaweed.webp",
    inStock: true,
    badge: "100% Organic Bio-Stimulant",
    composition: "Natural Seaweed Extract (Ascophyllum nodosum), 60+ Micro-Nutrients & Enzymes",
  },
  {
    id: "prod-org-2",
    name: "Utkarsh Pure Neem Cake Organic Fertilizer",
    punjabiName: "ਉਤਕਰਸ਼ ਸ਼ੁੱਧ ਨੀਮ ਖਲੀ ਜੈਵਿਕ ਖਾਦ",
    category: "organic-fertilizer",
    categoryLabel: "Organic Fertilizer",
    categoryPunjabi: "ਜੈਵਿਕ ਖਾਦ",
    packSize: "5 Kg / 25 Kg Bag",
    description:
      "Dual-action organic soil booster and root protector. Repels subterranean termites and white grubs while supplying slow-release natural nitrogen.",
    punjabiDesc:
      "ਨੀਮ ਦੇ ਬੀਜਾਂ ਤੋਂ ਤਿਆਰ ਸ਼ੁੱਧ ਖਲੀ ਖਾਦ। ਸਿਉਂਕ ਅਤੇ ਜੜ੍ਹਾਂ ਦੇ ਕੀੜਿਆਂ ਤੋਂ ਬਚਾਉਂਦੀ ਹੈ ਅਤੇ ਜ਼ਮੀਨ ਨੂੰ ਉਪਜਾਊ ਬਣਾਉਂਦੀ ਹੈ।",
    crops: ["Paddy / ਬਾਸਮਤੀ", "Sugarcane / ਕਮਾਦ", "Potato / ਆਲੂ", "Vegetables"],
    image: "/images/products/neem_cake.webp",
    inStock: true,
    badge: "Natural Termite Shield",
    composition: "100% Cold-Pressed Neem Seed Meal, Azadirachtin, Organic NPK 4:1:2",
  },
  {
    id: "prod-org-3",
    name: "Amruth Enriched Vermicompost (ਗੰਡੋਆ ਖਾਦ)",
    punjabiName: "ਅੰਮ੍ਰਿਤ ਵਰਮੀ ਕੰਪੋਸਟ ਦੇਸੀ ਗੰਡੋਆ ਖਾਦ",
    category: "organic-fertilizer",
    categoryLabel: "Organic Fertilizer",
    categoryPunjabi: "ਜੈਵਿਕ ਖਾਦ",
    packSize: "25 Kg / 50 Kg Bag",
    description:
      "Fully matured, odorless vermicompost rich in active microbial life, humic acid, and organic carbon to rejuvenate agricultural soils.",
    punjabiDesc:
      "ਉੱਚ ਗੁਣਵੱਤਾ ਵਾਲੀ ਦੇਸੀ ਗੰਡੋਆ ਖਾਦ ਜੋ ਜ਼ਮੀਨ ਦੀ ਪਾਣੀ ਸੋਖਣ ਸ਼ਕਤੀ ਵਧਾਉਂਦੀ ਹੈ ਅਤੇ ਜੜ੍ਹਾਂ ਦਾ ਤੇਜ਼ੀ ਨਾਲ ਵਿਕਾਸ ਕਰਦੀ ਹੈ।",
    crops: ["Wheat / ਕਣਕ", "Paddy / ਝੋਨਾ", "Fruit Orchards / ਬਾਗ਼", "Vegetables"],
    image: "/images/products/organic_vermicompost.webp",
    inStock: true,
    badge: "100% Organic Soil Conditioner",
    composition: "Decomposed Earthworm Castings, Organic Carbon > 18%, Humic Substances",
  },

  // --- 2. INSECTICIDES (3 Products) ---
  {
    id: "prod-ins-1",
    name: "FMC Coragen Insecticide (Chlorantraniliprole 18.5% SC)",
    punjabiName: "ਕੋਰਾਜ਼ਨ ਕੀਟਨਾਸ਼ਕ (ਗੋਭ ਦੀ ਸੁੰਡੀ ਤੇ ਪੱਤਾ ਲਪੇਟ ਸਪੈਸ਼ਲ)",
    category: "insecticides",
    categoryLabel: "Insecticides",
    categoryPunjabi: "ਕੀਟਨਾਸ਼ਕ",
    packSize: "10 ml / 60 ml / 150 ml Bottle",
    description:
      "Industry-leading broad-spectrum insecticide providing long-duration control against Yellow Stem Borer, Leaf Folder, and Borers in rice and sugarcane.",
    punjabiDesc:
      "ਝੋਨੇ ਅਤੇ ਬਾਸਮਤੀ ਵਿੱਚ ਗੋਭ ਦੀ ਸੁੰਡੀ ਅਤੇ ਪੱਤਾ ਲਪੇਟ ਦੇ ਮੁਕੰਮਲ ਖ਼ਾਤਮੇ ਲਈ ਸਭ ਤੋਂ ਭਰੋਸੇਮੰਦ ਕੀਟਨਾਸ਼ਕ।",
    crops: ["Paddy / ਝੋਨਾ", "Sugarcane / ਕਮਾਦ", "Maize / ਮੱਕੀ", "Cotton / ਨਰਮਾ"],
    image: "/images/products/coragen.webp",
    inStock: true,
    badge: "Stem Borer Leader",
    composition: "Chlorantraniliprole 18.5% w/w SC (Rynaxypyr)",
  },
  {
    id: "prod-ins-2",
    name: "Bayer Solomon Insecticide (Beta-cyfluthrin + Imidacloprid)",
    punjabiName: "ਬਾਇਰ ਸੋਲੋਮਨ (ਚੂਸਕ ਕੀੜਿਆਂ ਤੇ ਸੁੰਡੀ ਲਈ ਦੋਹਰਾ ਅਸਰ)",
    category: "insecticides",
    categoryLabel: "Insecticides",
    categoryPunjabi: "ਕੀਟਨਾਸ਼ਕ",
    packSize: "100 ml / 250 ml / 500 ml / 1 L",
    description:
      "Modern OD formulation offering rapid knockdown of aphids, jassids, thrips, and caterpillars with strong systemic and translaminar penetration.",
    punjabiDesc:
      "ਤੇਲਾ, ਸੁਸਰੀ, ਚਿੱਟੀ ਮੱਖੀ ਅਤੇ ਸੁੰਡੀਆਂ ਦੇ ਤੁਰੰਤ ਖ਼ਾਤਮੇ ਲਈ ਨਵੀਨਤਮ ਦੋਹਰੇ ਅਸਰ ਵਾਲੀ ਦਵਾਈ।",
    crops: ["Cotton / ਨਰਮਾ", "Mustard / ਸਰ੍ਹੋਂ", "Vegetables / ਸਬਜ਼ੀਆਂ", "Wheat / ਕਣਕ"],
    image: "/images/products/bayer_solomon.webp",
    inStock: true,
    badge: "Dual Action Knockdown",
    composition: "Beta-cyfluthrin 8.49% + Imidacloprid 19.81% w/w OD",
  },
  {
    id: "prod-ins-3",
    name: "Syngenta Actara Insecticide (Thiamethoxam 25% WG)",
    punjabiName: "ਐਕਟਾਰਾ ਕੀਟਨਾਸ਼ਕ (ਤੇਲਾ, ਸੁਸਰੀ ਤੇ ਸਿਉਂਕ ਰੋਕਥਾਮ)",
    category: "insecticides",
    categoryLabel: "Insecticides",
    categoryPunjabi: "ਕੀਟਨਾਸ਼ਕ",
    packSize: "100 g / 250 g / 500 g / 1 Kg",
    description:
      "Systemic insecticide highly effective against sucking pests, aphids (ਚੇਪਾ/ਤੇਲਾ), and soil termites with a noticeable crop greening effect.",
    punjabiDesc:
      "ਕਣਕ ਅਤੇ ਸਰ੍ਹੋਂ ਵਿੱਚ ਤੇਲੇ, ਚੇਪੇ ਅਤੇ ਸਿਉਂਕ ਦੀ ਰੋਕਥਾਮ ਲਈ ਲੰਬਾ ਅਸਰ ਰੱਖਣ ਵਾਲੀ ਦਾਣੇਦਾਰ ਦਵਾਈ।",
    crops: ["Wheat / ਕਣਕ", "Paddy / ਝੋਨਾ", "Mustard / ਸਰ੍ਹੋਂ", "Citrus / ਕਿੰਨੂ"],
    image: "/images/products/syngenta_actara.webp",
    inStock: true,
    badge: "Systemic Sucking Pest Guard",
    composition: "Thiamethoxam 25% WG",
  },

  // --- 3. MEAT BONE MEAL (2 Products) ---
  {
    id: "prod-mbm-1",
    name: "Steamed Bone Meal Fertilizer (High Phosphorus & Calcium)",
    punjabiName: "ਸਟੀਮਡ ਮੀਟ ਬੋਨ ਮੀਲ ਖਾਦ (ਉੱਚ ਫ਼ਾਸਫ਼ੋਰਸ ਤੇ ਕੈਲਸ਼ੀਅਮ)",
    category: "meat-bone-meal",
    categoryLabel: "Meat Bone Meal",
    categoryPunjabi: "ਮੀਟ ਬੋਨ ਮੀਲ",
    packSize: "25 Kg / 50 Kg Bag",
    description:
      "Steam-sterilized natural bone meal offering slow-release phosphorus and calcium to develop robust root systems and heavy flowering in orchards.",
    punjabiDesc:
      "ਸਟੀਮ ਨਾਲ ਤਿਆਰ ਸ਼ੁੱਧ ਬੋਨ ਮੀਲ ਖਾਦ ਜੋ ਪੌਦੇ ਦੀਆਂ ਜੜ੍ਹਾਂ ਨੂੰ ਮਜ਼ਬੂਤ ਕਰਦੀ ਹੈ ਅਤੇ ਲੰਬਾ ਸਮਾਂ ਫ਼ਾਸਫ਼ੋਰਸ ਮੁਹੱਈਆ ਕਰਵਾਉਂਦੀ ਹੈ।",
    crops: ["Fruit Orchards / ਕਿੰਨੂ ਬਾਗ਼", "Wheat / ਕਣਕ", "Potato / ਆਲੂ", "Vegetables / ਸਬਜ਼ੀਆਂ"],
    image: "/images/products/meat_bone_meal.webp",
    inStock: true,
    badge: "Slow-Release Organic P & Ca",
    composition: "Phosphorus (P2O5) 20-22%, Calcium (CaO) 28-30%, Organic Nitrogen 3-4%",
  },
  {
    id: "prod-mbm-2",
    name: "Fine Crushed Bone Meal Soil Conditioner",
    punjabiName: "ਬਾਰੀਕ ਬੋਨ ਮੀਲ ਪਾਊਡਰ (ਜ਼ਮੀਨ ਸੁਧਾਰਕ)",
    category: "meat-bone-meal",
    categoryLabel: "Meat Bone Meal",
    categoryPunjabi: "ਮੀਟ ਬੋਨ ਮੀਲ",
    packSize: "10 Kg / 20 Kg / 50 Kg Sack",
    description:
      "Finely milled organic meal for basal soil mixing to prevent calcium deficiency and stimulate vigorous tillering in cash crops.",
    punjabiDesc:
      "ਬਿਜਾਈ ਵੇਲੇ ਮਿੱਟੀ ਵਿੱਚ ਮਿਲਾਉਣ ਵਾਲੀ ਬਾਰੀਕ ਬੋਨ ਮੀਲ ਖਾਦ ਜੋ ਕੈਲਸ਼ੀਅਮ ਦੀ ਕਮੀ ਪੂਰੀ ਕਰਦੀ ਹੈ।",
    crops: ["Sugarcane / ਕਮਾਦ", "Wheat / ਕਣਕ", "Citrus / ਨਿੰਬੂ ਜਾਤੀ", "Vegetables"],
    image: "/images/products/meat_bone_meal.webp",
    inStock: true,
    badge: "Root Vitalizer",
    composition: "Total Phosphates 20%, Nitrogen 3.5%, Calcium Carbonate Neutralizer",
  },

  // --- 4. FERTILIZER (3 Products) ---
  {
    id: "prod-fert-1",
    name: "IFFCO / KRIBHCO Neem Coated Urea (46% N)",
    punjabiName: "ਨੀਮ ਕੋਟੇਡ ਯੂਰੀਆ 46% (ਇਫਕੋ / ਕ੍ਰਿਭਕੋ)",
    category: "fertilizer",
    categoryLabel: "Fertilizer",
    categoryPunjabi: "ਰਸਾਇਣਕ ਖਾਦਾਂ",
    packSize: "45 Kg Standard Bag",
    description:
      "Certified Neem Coated Urea ensuring high nitrogen efficiency, reduced leaching, and vigorous vegetative growth across all Punjab farmlands.",
    punjabiDesc:
      "ਸਰਕਾਰੀ ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਨੀਮ ਕੋਟੇਡ ਯੂਰੀਆ ਜੋ ਫਸਲ ਨੂੰ ਭਰਪੂਰ ਹਰਿਆਵਲ, ਫੁਟਾਰਾ ਅਤੇ ਮਜ਼ਬੂਤ ਵਾਧਾ ਦਿੰਦਾ ਹੈ।",
    crops: ["Wheat / ਕਣਕ", "Paddy / ਝੋਨਾ", "Maize / ਮੱਕੀ", "Sugarcane / ਕਮਾਦ"],
    image: "/images/products/urea_bag.webp",
    inStock: true,
    badge: "Govt Certified Standard",
    composition: "Total Nitrogen (N) 46.0% Min, Neem Oil Coated",
  },
  {
    id: "prod-fert-2",
    name: "DAP 18:46:0 (Di-Ammonium Phosphate - IFFCO / IPL)",
    punjabiName: "ਡੀ.ਏ.ਪੀ ਖਾਦ 18:46:0 (ਡਾਈ ਅਮੋਨੀਅਮ ਫਾਸਫੇਟ)",
    category: "fertilizer",
    categoryLabel: "Fertilizer",
    categoryPunjabi: "ਰਸਾਇਣਕ ਖਾਦਾਂ",
    packSize: "50 Kg Bag",
    description:
      "Essential basal fertilizer supplying high water-soluble phosphorus for rapid root initiation and sturdy seedling emergence.",
    punjabiDesc:
      "ਬਿਜਾਈ ਸਮੇਂ ਵਰਤਣ ਵਾਲੀ ਮੁੱਖ ਖਾਦ ਜੋ ਬੀਜ ਦੇ ਛੇਤੀ ਉਗਣ ਅਤੇ ਮਜ਼ਬੂਤ ਜੜ੍ਹਾਂ ਬਣਾਉਣ ਲਈ ਅਤਿ ਜ਼ਰੂਰੀ ਹੈ।",
    crops: ["Wheat / ਕਣਕ", "Mustard / ਸਰ੍ਹੋਂ", "Potato / ਆਲੂ", "Paddy / ਝੋਨਾ"],
    image: "/images/products/dap_bag.webp",
    inStock: true,
    badge: "Core Basal Fertilizer",
    composition: "Ammoniacal Nitrogen 18.0%, Water Soluble P2O5 46.0%",
  },
  {
    id: "prod-fert-3",
    name: "Mahadhan / PlantGrow 19:19:19 100% Water Soluble NPK",
    punjabiName: "ਐਨ.ਪੀ.ਕੇ 19:19:19 ਘੁਲਣਸ਼ੀਲ ਸਪਰੇਅ ਖਾਦ",
    category: "fertilizer",
    categoryLabel: "Fertilizer",
    categoryPunjabi: "ਰਸਾਇਣਕ ਖਾਦਾਂ",
    packSize: "1 Kg Pouch / 25 Kg Bag",
    description:
      "Completely water-soluble balanced foliar spray formula for instantaneous nutrient uptake, lush foliage, and superior grain filling.",
    punjabiDesc:
      "ਪਾਣੀ ਵਿੱਚ 100% ਘੁਲਣਸ਼ੀਲ ਸਪਰੇਅ ਖਾਦ ਜੋ ਫਸਲ ਦੀ ਕਮਜ਼ੋਰੀ ਦੂਰ ਕਰਕੇ ਝਾੜ ਵਿੱਚ ਭਾਰੀ ਵਾਧਾ ਕਰਦੀ ਹੈ।",
    crops: ["Wheat / ਕਣਕ", "Paddy / ਝੋਨਾ", "Vegetables / ਸਬਜ਼ੀਆਂ", "Cotton / ਨਰਮਾ"],
    image: "/images/products/npk_191919.webp",
    inStock: true,
    badge: "Balanced Foliar Nutrition",
    composition: "Total N 19%, Available P2O5 19%, Water Soluble K2O 19% + Trace Minerals",
  },

  // --- 5. FUNGICIDES (3 Products) ---
  {
    id: "prod-fung-1",
    name: "UPL Saaf Fungicide (Carbendazim 12% + Mancozeb 63% WP)",
    punjabiName: "ਯੂ.ਪੀ.ਐਲ ਸਾਫ਼ ਉੱਲੀਨਾਸ਼ਕ (ਜੜ੍ਹ ਗਲਣ, ਬਲਾਸਟ ਤੇ ਦਾਗ਼ ਧੱਬੇ)",
    category: "fungicides",
    categoryLabel: "Fungicides",
    categoryPunjabi: "ਉੱਲੀਨਾਸ਼ਕ",
    packSize: "100 g / 250 g / 500 g / 1 Kg Pack",
    description:
      "Trusted contact and systemic fungicide for seed treatment and foliar spray to combat early blight, blast, leaf spots, and collar rot.",
    punjabiDesc:
      "ਬੀਜ ਸੋਧ ਅਤੇ ਸਪਰੇਅ ਲਈ ਦੋਹਰੇ ਅਸਰ ਵਾਲੀ ਦਵਾਈ ਜੋ ਜੜ੍ਹ ਗਲਣ, ਝੁਲਸ ਰੋਗ ਅਤੇ ਉੱਲੀ ਦੇ ਰੋਗਾਂ ਨੂੰ ਕੰਟਰੋਲ ਕਰਦੀ ਹੈ।",
    crops: ["Paddy / ਝੋਨਾ", "Potato / ਆਲੂ", "Groundnut / ਮੂੰਗਫਲੀ", "Vegetables"],
    image: "/images/products/upl_saaf.webp",
    inStock: true,
    badge: "Dual Action Contact + Systemic",
    composition: "Carbendazim 12% + Mancozeb 63% WP",
  },
  {
    id: "prod-fung-2",
    name: "Bayer Nativo Fungicide (Tebuconazole 50% + Trifloxystrobin 25% WG)",
    punjabiName: "ਬਾਇਰ ਨਟੀਵੋ (ਕਣਕ ਦੀ ਪੀਲੀ ਕੁੰਗੀ ਤੇ ਝੋਨੇ ਦੇ ਧੌਲ ਰੋਗ ਲਈ)",
    category: "fungicides",
    categoryLabel: "Fungicides",
    categoryPunjabi: "ਉੱਲੀਨਾਸ਼ਕ",
    packSize: "10 g / 50 g / 100 g / 250 g Box",
    description:
      "Premium systemic fungicide delivering excellent protective and curative shield against Yellow Rust in wheat and Neck Blast in fine rice.",
    punjabiDesc:
      "ਕਣਕ ਦੀ ਪੀਲੀ ਕੁੰਗੀ ਅਤੇ ਬਾਸਮਤੀ ਦੇ ਗਰਦਨ ਤੋੜ (Neck Blast) ਰੋਗ ਤੋਂ ਮੁਕੰਮਲ ਸੁਰੱਖਿਆ ਲਈ ਸਭ ਤੋਂ ਉੱਤਮ ਉੱਲੀਨਾਸ਼ਕ।",
    crops: ["Wheat / ਕਣਕ (Yellow Rust)", "Paddy / ਬਾਸਮਤੀ (Neck Blast / Sheath Blight)"],
    image: "/images/products/bayer_nativo.webp",
    inStock: true,
    badge: "Yellow Rust & Blast Cure",
    composition: "Tebuconazole 50% + Trifloxystrobin 25% w/w WG (75 WG)",
  },
  {
    id: "prod-fung-3",
    name: "Syngenta Amistar Top Fungicide (Azoxystrobin + Difenoconazole)",
    punjabiName: "ਐਮਿਸਟਾਰ ਟਾਪ ਉੱਲੀਨਾਸ਼ਕ (ਸ਼ੀਥ ਬਲਾਈਟ ਤੇ ਫਸਲ ਚਮਕ)",
    category: "fungicides",
    categoryLabel: "Fungicides",
    categoryPunjabi: "ਉੱਲੀਨਾਸ਼ਕ",
    packSize: "100 ml / 200 ml / 500 ml / 1 Litre",
    description:
      "Broad-spectrum preventative fungicide combining strobilurin & triazole chemistry for pristine disease control and superior grain luster.",
    punjabiDesc:
      "ਝੋਨੇ ਦੀ ਸ਼ੀਥ ਬਲਾਈਟ ਅਤੇ ਉੱਲੀ ਰੋਗਾਂ ਦੀ ਰੋਕਥਾਮ ਦੇ ਨਾਲ-ਨਾਲ ਦਾਣਿਆਂ ਵਿੱਚ ਚਮਕ ਅਤੇ ਵਜ਼ਨ ਵਧਾਉਣ ਵਾਲੀ ਦਵਾਈ।",
    crops: ["Paddy / ਬਾਸਮਤੀ", "Wheat / ਕਣਕ", "Tomato / ਟਮਾਟਰ", "Chilli / ਮਿਰਚ"],
    image: "/images/products/amistar_top.webp",
    inStock: true,
    badge: "Broad Spectrum Preventive",
    composition: "Azoxystrobin 18.2% + Difenoconazole 11.4% w/w SC",
  },

  // --- 6. HERBICIDES (3 Products) ---
  {
    id: "prod-herb-1",
    name: "PI Nominee Gold Herbicide (Bispyribac Sodium 10% SC)",
    punjabiName: "ਨੌਮਿਨੀ ਗੋਲਡ ਨਦੀਨਨਾਸ਼ਕ (ਝੋਨੇ ਦੇ ਸਵਾਂਕ, ਮੋਥਾ ਤੇ ਚੌੜੇ ਪੱਤੇ)",
    category: "herbicides",
    categoryLabel: "Herbicides",
    categoryPunjabi: "ਨਦੀਨਨਾਸ਼ਕ",
    packSize: "80 ml / 100 ml / 200 ml / 500 ml Bottle",
    description:
      "Early post-emergence selective herbicide for controlling major barnyard grasses, sedges (ਮੋਥਾ), and broadleaf weeds in paddy fields.",
    punjabiDesc:
      "ਝੋਨੇ ਅਤੇ ਬਾਸਮਤੀ ਵਿੱਚ ਸਵਾਂਕ, ਢੀਂਡਾ, ਮੋਥਾ ਅਤੇ ਚੌੜੇ ਪੱਤੇ ਵਾਲੇ ਨਦੀਨਾਂ ਨੂੰ ਜੜ੍ਹੋਂ ਖ਼ਤਮ ਕਰਨ ਵਾਲੀ ਨੰਬਰ 1 ਦਵਾਈ।",
    crops: ["Paddy / ਝੋਨਾ", "Basmati / ਬਾਸਮਤੀ", "Direct Seeded Rice (DSR)"],
    image: "/images/products/nominee_gold.webp",
    inStock: true,
    badge: "Selective Paddy Weedicide",
    composition: "Bispyribac Sodium 10% SC",
  },
  {
    id: "prod-herb-2",
    name: "BASF Stomp Xtra Herbicide (Pendimethalin 38.7% CS)",
    punjabiName: "ਸਟੌਂਪ ਐਕਸਟਰਾ (ਬਿਜਾਈ ਸਮੇਂ ਨਦੀਨ ਰੋਕਥਾਮ)",
    category: "herbicides",
    categoryLabel: "Herbicides",
    categoryPunjabi: "ਨਦੀਨਨਾਸ਼ਕ",
    packSize: "700 ml / 3.5 Litres Can",
    description:
      "Advanced capsule suspension pre-emergence herbicide applied within 48 hours of sowing to stop weed seeds from germinating.",
    punjabiDesc:
      "ਬਿਜਾਈ ਤੋਂ ਤੁਰੰਤ ਬਾਅਦ ਛਿੜਕਾਅ ਕਰਨ ਵਾਲੀ ਆਧੁਨਿਕ ਦਵਾਈ ਜੋ ਨਦੀਨਾਂ ਦੇ ਬੀਜਾਂ ਨੂੰ ਉਗਣ ਹੀ ਨਹੀਂ ਦਿੰਦੀ।",
    crops: ["Wheat / ਕਣਕ", "Mustard / ਸਰ੍ਹੋਂ", "Garlic / ਲਸਣ", "Onion / ਗੰਢੇ"],
    image: "/images/products/stomp_xtra.webp",
    inStock: true,
    badge: "Pre-Emergence Barrier",
    composition: "Pendimethalin 38.7% CS (Advanced Capsule Suspension)",
  },
  {
    id: "prod-herb-3",
    name: "Syngenta Topik Herbicide (Clodinafop-Propargyl 15% WP)",
    punjabiName: "ਟੌਪਿਕ ਨਦੀਨਨਾਸ਼ਕ (ਕਣਕ ਦੇ ਗੁੱਲੀ ਡੰਡੇ ਤੇ ਜੰਗਲੀ ਜਵੀ ਲਈ)",
    category: "herbicides",
    categoryLabel: "Herbicides",
    categoryPunjabi: "ਨਦੀਨਨਾਸ਼ਕ",
    packSize: "160 g Pack (with Surfactant)",
    description:
      "Specialized post-emergence selective weedicide for total eradication of resistant Phalaris minor (Gullidanda) and wild oats in wheat crops.",
    punjabiDesc:
      "ਕਣਕ ਵਿੱਚ ਗੁੱਲੀ ਡੰਡੇ (Phalaris minor) ਅਤੇ ਜੰਗਲੀ ਜਵੀ ਦੇ ਮੁਕੰਮਲ ਖ਼ਾਤਮੇ ਲਈ ਸਭ ਤੋਂ ਕਾਰਗਰ ਨਦੀਨਨਾਸ਼ਕ।",
    crops: ["Wheat / ਕਣਕ"],
    image: "/images/products/topik_herbicide.webp",
    inStock: true,
    badge: "Phalaris Minor Specialist",
    composition: "Clodinafop-Propargyl 15% WP + Built-in Surfactant",
  },

  // --- 7. RENTED EQUIPMENT (3 Products) ---
  {
    id: "prod-rent-1",
    name: "KisanKraft KK-KBS-165 16L Battery Knapsack Power Sprayer (12V)",
    punjabiName: "ਕਿਸਾਨਕ੍ਰਾਫਟ ਬੈਟਰੀ ਸਪਰੇਅ ਪੰਪ KK-KBS-165",
    category: "rented-equipment",
    categoryLabel: "Rented Equipment",
    categoryPunjabi: "ਕਿਰਾਏ 'ਤੇ ਸੰਦ",
    packSize: "Daily / Weekly Rental",
    description:
      "Heavy-duty rechargeable battery backpack sprayer available on daily and weekly rentals for effortless, uniform chemical application.",
    punjabiDesc:
      "12 ਵੋਲਟ ਡਬਲ ਮੋਟਰ ਬੈਟਰੀ ਵਾਲਾ ਸਪਰੇਅ ਪੰਪ। ਬਿਨਾਂ ਥਕਾਵਟ ਦੇ ਤੇਜ਼ ਅਤੇ ਇਕਸਾਰ ਸਪਰੇਅ ਕਰਨ ਲਈ ਰੋਜ਼ਾਨਾ ਕਿਰਾਏ 'ਤੇ ਉਪਲਬਧ।",
    crops: ["All Crops / ਸਾਰੀਆਂ ਫਸਲਾਂ", "Wheat, Paddy, Mustard, Vegetables"],
    image: "/images/products/knapsack_sprayer.webp",
    inStock: true,
    isRental: true,
    rentalPeriod: "Daily / Weekly",
    badge: "Tested Battery Ready",
    composition: "12V 12Ah Dual-Motor Battery, High Pressure Brass Lance, 4 Spray Nozzles Kit",
  },
  {
    id: "prod-rent-2",
    name: "7 HP Heavy Duty Power Weeder & Cultivator (Petrol)",
    punjabiName: "ਪਾਵਰ ਵੀਡਰ / ਗੋਡੀ ਮਸ਼ੀਨ (ਕਿਰਾਏ 'ਤੇ)",
    category: "rented-equipment",
    categoryLabel: "Rented Equipment",
    categoryPunjabi: "ਕਿਰਾਏ 'ਤੇ ਸੰਦ",
    packSize: "Hourly / Daily Rental",
    description:
      "High-performance petrol engine power weeder for fast weed removal and soil pulverization in sugarcane and vegetable rows.",
    punjabiDesc:
      "7 ਹਾਰਸ ਪਾਵਰ ਗੋਡੀ ਮਸ਼ੀਨ। ਕਮਾਦ, ਮੱਕੀ ਅਤੇ ਸਬਜ਼ੀਆਂ ਵਿੱਚ ਨਦੀਨ ਕੱਢਣ ਅਤੇ ਮਿੱਟੀ ਪੋਲੀ ਕਰਨ ਲਈ ਕਿਰਾਏ 'ਤੇ ਉਪਲਬਧ।",
    crops: ["Sugarcane / ਕਮਾਦ", "Maize / ਮੱਕੀ", "Vegetables / ਸਬਜ਼ੀਆਂ", "Orchards"],
    image: "/images/products/power_weeder.webp",
    inStock: true,
    isRental: true,
    rentalPeriod: "Hourly / Daily",
    badge: "Inter-Row Weeding Specialist",
    composition: "7 HP 4-Stroke Petrol Engine, Adjustable Rotary Tilling Width (24 to 36 inches)",
  },
  {
    id: "prod-rent-3",
    name: "Automatic Tractor Seed-cum-Fertilizer Drill",
    punjabiName: "ਬੀਜ ਅਤੇ ਖਾਦ ਡਰਿੱਲ (ਕਿਰਾਏ 'ਤੇ)",
    category: "rented-equipment",
    categoryLabel: "Rented Equipment",
    categoryPunjabi: "ਕਿਰਾਏ 'ਤੇ ਸੰਦ",
    packSize: "Per Day / Per Acre Rental",
    description:
      "Calibrated seed drill for synchronized seed placement and basal fertilizer drilling at optimal soil depth to ensure high germination.",
    punjabiDesc:
      "ਸਹੀ ਡੂੰਘਾਈ 'ਤੇ ਬੀਜ ਅਤੇ ਖਾਦ ਪਾਉਣ ਵਾਲੀ ਡਰਿੱਲ। ਕਣਕ ਅਤੇ ਸਰ੍ਹੋਂ ਦੀ ਬਿਜਾਈ ਲਈ ਕਿਰਾਏ 'ਤੇ ਉਪਲਬਧ।",
    crops: ["Wheat / ਕਣਕ", "Mustard / ਸਰ੍ਹੋਂ", "Gram / ਛੋਲੇ", "Pulses / ਦਾਲਾਂ"],
    image: "/images/products/seed_drill.webp",
    inStock: true,
    isRental: true,
    rentalPeriod: "Per Day / Per Acre",
    badge: "Synchronized Sowing",
    composition: "9/11 Tyne Tractor Hitch, Fluted Calibrated Seed & Basal Fertilizer Dispenser",
  },
];
