/**
 * ==============================================================================
 * DIGITAL FOOD MENU DATA FILE
 * ==============================================================================
 * This file contains all categories and food items for the resort menu.
 * 
 * To customize:
 * 1. Update or add categories in the `categories` array.
 * 2. Update, add or remove dishes in the `menuItems` array.
 * 3. Each item supports:
 *    - id: Unique identifier (e.g. "bf-1", "soup-1")
 *    - name: Food name
 *    - category: Category ID matching an entry in `categories`
 *    - price: Price in Indian Rupees (₹)
 *    - isVeg: true for Vegetarian (Green dot), false for Non-Vegetarian (Red dot)
 *    - description: Short description of ingredients or preparation (optional)
 *    - image: High-quality photo URL (optional; graceful fallback provided if omitted or broken)
 *    - isSpecial: true if recommended / chef's special (optional)
 * ==============================================================================
 */

export const categories = [
  {
    id: "all",
    name: "All Items",
    description: "Browse our entire culinary selection"
  },
  {
    id: "breakfast",
    name: "Breakfast",
    description: "Fresh morning delights, savouries and wholesome breakfast favorites"
  },
  {
    id: "soups",
    name: "Soups",
    description: "Aromatic warm broths and comforting classic soups"
  },
  {
    id: "starters",
    name: "Starters",
    description: "Charcoal tandoori kebabs, tikkas and crispy appetizers"
  },
  {
    id: "main-course",
    name: "Main Course",
    description: "Rich Indian gravies, paneer specialties and slow-simmered curries"
  },
  {
    id: "indian-breads",
    name: "Indian Breads",
    description: "Clay oven tandoori naans, rotis, parathas and stuffed kulchas"
  },
  {
    id: "rice-biryani",
    name: "Rice and Biryani",
    description: "Fragrant basmati dum biryanis, pulaos and seasoned rice"
  },
  {
    id: "chinese",
    name: "Chinese",
    description: "Wok-tossed noodles, fried rice, manchurian and chilli dishes"
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Refreshing mocktails, mojitos, shakes, lassis and hot brews"
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Warm Indian sweets, traditional kulfi and chilled ice creams"
  }
];

export const dietaryFilters = [
  { id: "all", label: "All Items" },
  { id: "Pure Veg", label: "Pure Veg" },
  { id: "Non-Veg", label: "Non-Veg" },
  { id: "Chef's Signature", label: "Chef's Special" }
];

export const menuItems = [
  // ==========================================
  // 1. BREAKFAST
  // ==========================================
  {
    id: "bf-1",
    name: "Masala Dosa",
    category: "breakfast",
    price: 120,
    isVeg: true,
    isSpecial: true,
    description: "Crispy golden fermented rice crepe filled with spiced potato masala, served with piping hot sambar and fresh coconut chutney.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bf-2",
    name: "Poha",
    category: "breakfast",
    price: 80,
    isVeg: true,
    isSpecial: false,
    description: "Flattened rice gently tempered with mustard seeds, curry leaves, onions, crunchy roasted peanuts, and fresh lime.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bf-3",
    name: "Aloo Puri",
    category: "breakfast",
    price: 100,
    isVeg: true,
    isSpecial: false,
    description: "Four fluffy, deep-golden puffed puris served with aromatic spiced potato curry and mixed pickle.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bf-4",
    name: "Stuffed Aloo Paratha with Curd",
    category: "breakfast",
    price: 90,
    isVeg: true,
    isSpecial: false,
    description: "Whole wheat griddled flatbread stuffed with spiced mashed potatoes, served with fresh churned curd and white butter.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bf-5",
    name: "Masala Omelette",
    category: "breakfast",
    price: 90,
    isVeg: false,
    isSpecial: false,
    description: "Double farm egg omelette folded with finely diced onions, tomatoes, green chillies, and fresh coriander.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bf-6",
    name: "Veg Club Sandwich",
    category: "breakfast",
    price: 130,
    isVeg: true,
    isSpecial: false,
    description: "Triple-layer toasted sandwich stuffed with crisp cucumber, ripe tomatoes, cheese slice, and spiced potato filling.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop"
  },

  // ==========================================
  // 2. SOUPS
  // ==========================================
  {
    id: "sp-1",
    name: "Veg Manchow Soup",
    category: "soups",
    price: 120,
    isVeg: true,
    isSpecial: false,
    description: "Spicy dark vegetable broth infused with ginger, garlic, chopped mushrooms, and topped with crunchy fried noodles.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sp-2",
    name: "Cream of Tomato Soup",
    category: "soups",
    price: 110,
    isVeg: true,
    isSpecial: false,
    description: "Silky roasted ripe tomato soup finished with a swirl of fresh cream and golden buttered croutons.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sp-3",
    name: "Sweet Corn Veg Soup",
    category: "soups",
    price: 120,
    isVeg: true,
    isSpecial: false,
    description: "Comforting, velvety corn broth simmered with tender American sweet corn kernels and diced garden vegetables.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sp-4",
    name: "Chicken Manchow Soup",
    category: "soups",
    price: 160,
    isVeg: false,
    isSpecial: true,
    description: "Robust spicy chicken broth cooked with shredded chicken, egg drop, crushed garlic, and crispy noodles.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sp-5",
    name: "Chicken Hot & Sour Soup",
    category: "soups",
    price: 150,
    isVeg: false,
    isSpecial: false,
    description: "Traditional tangy and peppery broth loaded with tender chicken pieces, wood-ear mushrooms, and vinegar kick.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },

  // ==========================================
  // 3. STARTERS
  // ==========================================
  {
    id: "st-1",
    name: "Paneer Tikka",
    category: "starters",
    price: 240,
    isVeg: true,
    isSpecial: true,
    description: "Fresh cottage cheese cubes marinated in hung yogurt and ground spices, skewered with bell peppers and roasted in clay tandoor.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "st-2",
    name: "Veg Hara Bhara Kebab",
    category: "starters",
    price: 200,
    isVeg: true,
    isSpecial: false,
    description: "Pan-crisped patties prepared from fresh spinach, green peas, and potatoes, crowned with crunchy whole cashews.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "st-3",
    name: "Crispy Corn Salt & Pepper",
    category: "starters",
    price: 190,
    isVeg: true,
    isSpecial: false,
    description: "Golden batter-coated American sweet corn kernels tossed with freshly cracked black pepper, scallions, and lime.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "st-4",
    name: "Tandoori Chicken (Half)",
    category: "starters",
    price: 320,
    isVeg: false,
    isSpecial: true,
    description: "Classic tender spring chicken on the bone marinated in deghi mirch and mustard oil, roasted to smoky perfection in clay oven.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "st-5",
    name: "Chicken Tikka",
    category: "starters",
    price: 290,
    isVeg: false,
    isSpecial: false,
    description: "Boneless chicken morsels infused with royal tandoori marinade and roasted gently over charcoal embers.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "st-6",
    name: "Chicken Lollipop",
    category: "starters",
    price: 280,
    isVeg: false,
    isSpecial: true,
    description: "Crisp-fried frenched chicken winglets tossed in spicy garlic Schezwan glaze with spring onions.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop"
  },

  // ==========================================
  // 4. MAIN COURSE
  // ==========================================
  {
    id: "mc-1",
    name: "Paneer Butter Masala",
    category: "main-course",
    price: 250,
    isVeg: true,
    isSpecial: true,
    description: "Soft cottage cheese cubes simmered in a velvety, mildly sweet tomato, butter, and cashew nut makhani gravy.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mc-2",
    name: "Kadhai Paneer",
    category: "main-course",
    price: 260,
    isVeg: true,
    isSpecial: false,
    description: "Fresh paneer cooked with crunchy bell peppers, onion petals, and coarse freshly ground coriander and dry red chillies.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mc-3",
    name: "Dal Makhani",
    category: "main-course",
    price: 200,
    isVeg: true,
    isSpecial: true,
    description: "Whole black lentils and kidney beans slow-simmered overnight over low embers with churned butter and fresh dairy cream.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mc-4",
    name: "Dal Tadka",
    category: "main-course",
    price: 150,
    isVeg: true,
    isSpecial: false,
    description: "Yellow toor lentils tempered twice in pure desi ghee with cumin seeds, minced garlic, and dried red chillies.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mc-5",
    name: "Butter Chicken",
    category: "main-course",
    price: 340,
    isVeg: false,
    isSpecial: true,
    description: "Tender boneless tandoori chicken simmered in rich creamy tomato butter gravy infused with fragrant kasuri methi.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mc-6",
    name: "Mutton Rogan Josh",
    category: "main-course",
    price: 380,
    isVeg: false,
    isSpecial: true,
    description: "Slow-cooked tender goat meat braised with Kashmiri dried chillies, fennel powder, curd, and whole aromatic spices.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },

  // ==========================================
  // 5. INDIAN BREADS
  // ==========================================
  {
    id: "ib-1",
    name: "Butter Naan",
    category: "indian-breads",
    price: 50,
    isVeg: true,
    isSpecial: false,
    description: "Soft, puffy refined flour flatbread baked in the clay tandoor and generously brushed with melted butter.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ib-2",
    name: "Garlic Naan",
    category: "indian-breads",
    price: 70,
    isVeg: true,
    isSpecial: true,
    description: "Tandoori flatbread studded with golden minced garlic and fresh coriander leaves, brushed with butter.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ib-3",
    name: "Tandoori Roti (Butter)",
    category: "indian-breads",
    price: 30,
    isVeg: true,
    isSpecial: false,
    description: "Whole wheat bread baked crisp on the inner walls of the clay oven and finished with a dab of butter.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ib-4",
    name: "Lachha Paratha",
    category: "indian-breads",
    price: 60,
    isVeg: true,
    isSpecial: false,
    description: "Crispy, multi-layered spiral flatbread made with whole wheat flour and brushed with desi ghee.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ib-5",
    name: "Stuffed Paneer Kulcha",
    category: "indian-breads",
    price: 90,
    isVeg: true,
    isSpecial: false,
    description: "Amritsari style kulcha stuffed with spiced crumbled cottage cheese, baked until golden and flaky.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },

  // ==========================================
  // 6. RICE AND BIRYANI
  // ==========================================
  {
    id: "rb-1",
    name: "Veg Dum Biryani",
    category: "rice-biryani",
    price: 220,
    isVeg: true,
    isSpecial: false,
    description: "Aged long-grain basmati rice and seasonal vegetables layered with saffron milk, fresh mint, and fried onions.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "rb-2",
    name: "Chicken Dum Biryani",
    category: "rice-biryani",
    price: 290,
    isVeg: false,
    isSpecial: true,
    description: "Tender chicken marinated in spices and yogurt, slow-cooked on dum with fragrant basmati rice and saffron.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "rb-3",
    name: "Mutton Dum Biryani",
    category: "rice-biryani",
    price: 360,
    isVeg: false,
    isSpecial: true,
    description: "Royal preparation of succulent mutton cuts and saffron-infused basmati rice slow-cooked in a sealed earthen pot.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "rb-4",
    name: "Jeera Rice",
    category: "rice-biryani",
    price: 120,
    isVeg: true,
    isSpecial: false,
    description: "Steamed fluffy basmati rice delicately tempered in pure cow ghee with roasted cumin seeds.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "rb-5",
    name: "Steamed Basmati Rice",
    category: "rice-biryani",
    price: 100,
    isVeg: true,
    isSpecial: false,
    description: "Light, fluffy, and aromatic long-grain steamed white basmati rice.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },

  // ==========================================
  // 7. CHINESE
  // ==========================================
  {
    id: "ch-1",
    name: "Veg Hakka Noodles",
    category: "chinese",
    price: 180,
    isVeg: true,
    isSpecial: false,
    description: "Wok-tossed noodles with crunchy julienned cabbage, carrots, bell peppers, scallions, and light soya sauce.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ch-2",
    name: "Chilli Paneer (Dry / Gravy)",
    category: "chinese",
    price: 220,
    isVeg: true,
    isSpecial: true,
    description: "Battered paneer cubes tossed with diced bell peppers, shallots, green chillies, and spicy garlic soya sauce.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ch-3",
    name: "Veg Manchurian",
    category: "chinese",
    price: 190,
    isVeg: true,
    isSpecial: false,
    description: "Crispy vegetable dumplings tossed in a rich, savory Indo-Chinese garlic, ginger, and dark soy sauce.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ch-4",
    name: "Chicken Fried Rice",
    category: "chinese",
    price: 220,
    isVeg: false,
    isSpecial: false,
    description: "Wok-fried rice with tender diced chicken morsels, scrambled egg, spring onions, and toasted sesame aroma.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ch-5",
    name: "Chilli Chicken",
    category: "chinese",
    price: 270,
    isVeg: false,
    isSpecial: true,
    description: "Tender chicken pieces tossed with fresh green chillies, bell peppers, onions, and spicy chilli garlic sauce.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },

  // ==========================================
  // 8. BEVERAGES
  // ==========================================
  {
    id: "bv-1",
    name: "Fresh Lime Soda",
    category: "beverages",
    price: 50,
    isVeg: true,
    isSpecial: false,
    description: "Freshly squeezed lemon juice served with chilled sparkling mineral soda (Sweet, Salted, or Mixed).",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bv-2",
    name: "Mint Mojito",
    category: "beverages",
    price: 90,
    isVeg: true,
    isSpecial: false,
    description: "Muddled garden mint leaves, lime wedges, sugar syrup, and crushed ice topped with chilled club soda.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bv-3",
    name: "Cold Coffee with Ice Cream",
    category: "beverages",
    price: 160,
    isVeg: true,
    isSpecial: true,
    description: "Rich blended espresso coffee with creamy chilled milk, crowned with a scoop of vanilla bean ice cream.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bv-4",
    name: "Sweet Lassi",
    category: "beverages",
    price: 70,
    isVeg: true,
    isSpecial: false,
    description: "Traditional thick curd churned with sugar, fragrant green cardamom, and rich malai topping.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bv-5",
    name: "Masala Chai",
    category: "beverages",
    price: 30,
    isVeg: true,
    isSpecial: false,
    description: "Hot aromatic milk tea freshly brewed with crushed ginger, green cardamom pods, and cloves.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop"
  },

  // ==========================================
  // 9. DESSERTS
  // ==========================================
  {
    id: "ds-1",
    name: "Hot Gulab Jamun with Ice Cream",
    category: "desserts",
    price: 130,
    isVeg: true,
    isSpecial: true,
    description: "Warm, melt-in-mouth khoya dumplings soaked in cardamom rose syrup, paired with chilled vanilla bean ice cream.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ds-2",
    name: "Hot Gulab Jamun (2 Pcs)",
    category: "desserts",
    price: 80,
    isVeg: true,
    isSpecial: false,
    description: "Traditional deep-fried milk solid spheres soaked in warm cardamom sugar syrup.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ds-3",
    name: "Choice of Ice Cream",
    category: "desserts",
    price: 90,
    isVeg: true,
    isSpecial: false,
    description: "Two generous scoops of premium ice cream (Vanilla, Chocolate, Butterscotch, or Strawberry).",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ds-4",
    name: "Kesar Pista Kulfi",
    category: "desserts",
    price: 100,
    isVeg: true,
    isSpecial: true,
    description: "Traditional dense Indian milk kulfi infused with Kashmiri saffron, green cardamom, and crushed pistachios.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop"
  }
];
