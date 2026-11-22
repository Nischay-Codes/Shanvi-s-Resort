/**
 * ==============================================================================
 * SHANVI'S RESORT — DIGITAL FOOD MENU DATA
 * ==============================================================================
 * This file contains the complete, exact menu from the resort's official menu.
 * Every single dish from all 17 pages is included with exact pricing in ₹ (INR).
 * ==============================================================================
 */

export const categories = [
  {
    "id": "all",
    "name": "All Items",
    "description": "Complete dining repertoire of Shanvi's Resort"
  },
  {
    "id": "mocktails-mojito",
    "name": "Mocktails & Mojitos",
    "description": "Refreshing coolers, exotic mocktails and signature mojitos"
  },
  {
    "id": "beverage-shakes",
    "name": "Beverages & Shakes",
    "description": "Hot teas, filter coffee, thick milkshakes and traditional lassis"
  },
  {
    "id": "soups",
    "name": "Soups (Veg & Non-Veg)",
    "description": "Warm, comforting, aromatic broths and clear soups"
  },
  {
    "id": "salad-raita-papad",
    "name": "Salad, Raita & Papad",
    "description": "Fresh crisp salads, cooling raitas and crispy papads"
  },
  {
    "id": "chinese-starter-veg",
    "name": "Chinese Starters (Veg)",
    "description": "Wok-tossed paneer, crispy corn, mushroom and potato starters"
  },
  {
    "id": "chinese-starter-nonveg",
    "name": "Chinese Starters (Non-Veg)",
    "description": "Crispy chicken lollipops, chilli chicken, rolls and fish roast"
  },
  {
    "id": "tandoor-starter-veg",
    "name": "Tandoor Starters (Veg)",
    "description": "Charcoal clay oven roasted paneer tikkas, kebabs and mushroom skewers"
  },
  {
    "id": "tandoor-starter-nonveg",
    "name": "Tandoor Starters (Non-Veg)",
    "description": "Juicy tangdi kebabs, tandoori chicken, and tikka skewers"
  },
  {
    "id": "chinese-rice-noodles",
    "name": "Chinese Rice & Noodles",
    "description": "Wok-tossed chicken & egg fried rice, hakka and Schezwan noodles"
  },
  {
    "id": "main-course-veg",
    "name": "Main Course (Veg & Paneer)",
    "description": "Rich paneer gravies, mushroom curries, kaju masala and seasonal sabzis"
  },
  {
    "id": "main-course-nonveg",
    "name": "Main Course (Non-Veg & Seafood)",
    "description": "1 KG Desi Chicken, mutton rogan josh, fish, prawn and egg curries"
  },
  {
    "id": "rice",
    "name": "Rice & Pulao",
    "description": "Steamed basmati, fragrant jeera rice and seasoned vegetable pulaos"
  },
  {
    "id": "biryani",
    "name": "Biryani & Handi",
    "description": "Dum-cooked basmati chicken, mutton, egg and paneer biryanis"
  },
  {
    "id": "dal",
    "name": "Dal & Khichdi",
    "description": "Creamy dal makhani, double tadka toor dal, and comforting khichdi"
  },
  {
    "id": "bread",
    "name": "Tandoori & Tava Breads",
    "description": "Clay oven butter naans, garlic naans, tandoori rotis and stuffed kulchas"
  },
  {
    "id": "live-counter",
    "name": "Live Counter, Pizzas & Burgers",
    "description": "Freshly baked pizzas, crispy French fries, burgers and cheese balls"
  },
  {
    "id": "pasta-sandwich-maggi",
    "name": "Pasta, Sandwiches & Maggi",
    "description": "White & red sauce pastas, grilled club sandwiches and masala Maggi"
  },
  {
    "id": "snacks",
    "name": "Snacks & Pakodas",
    "description": "Chhole bhature, hot onion & paneer pakodas, cutlets and roasted nuts"
  },
  {
    "id": "dessert",
    "name": "Desserts & Ice Cream",
    "description": "Hot gulab jamun, ice cream sundaes and classic scoops"
  }
];

export const dietaryFilters = [
  { id: "all", label: "All Items" },
  { id: "Pure Veg", label: "Pure Veg" },
  { id: "Non-Veg", label: "Non-Veg" },
  { id: "Chef's Signature", label: "Chef's Special" }
];

/**
 * Format price in Indian Rupees (₹)
 * Handles single numbers ('150') and dual prices ('340 / 600') cleanly as '₹340 / ₹600'
 */
export function formatPrice(price) {
  if (price === undefined || price === null || price === '') return '';
  const priceStr = String(price).trim();
  if (priceStr.includes('/')) {
    return priceStr
      .split('/')
      .map((p) => `₹${p.trim()}`)
      .join(' / ');
  }
  return `₹${priceStr}`;
}

export const menuItems = [
  {
    "id": "dish-1",
    "name": "Shirley Temple Mocktail",
    "category": "mocktails-mojito",
    "price": "130",
    "isVeg": true,
    "isSpecial": false,
    "description": "Classic refreshing mocktail with ginger fizz, sweet grenadine, and maraschino cherries.",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-2",
    "name": "Blue Blossom Mocktail",
    "category": "mocktails-mojito",
    "price": "130",
    "isVeg": true,
    "isSpecial": false,
    "description": "Vibrant blue cura\u00e7ao syrup blended with citrus fizz and garden mint.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-3",
    "name": "Mango Mule Mocktail",
    "category": "mocktails-mojito",
    "price": "120",
    "isVeg": true,
    "isSpecial": false,
    "description": "Sweet Alphonso mango pulp infused with spicy ginger essence and lime.",
    "image": "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-4",
    "name": "Black Dog Mocktail",
    "category": "mocktails-mojito",
    "price": "130",
    "isVeg": true,
    "isSpecial": false,
    "description": "Dark berry reduction, cola splash, and roasted cumin citrus.",
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-5",
    "name": "Darknight Mocktail",
    "category": "mocktails-mojito",
    "price": "130",
    "isVeg": true,
    "isSpecial": false,
    "description": "Deep blackcurrant and concord grape reduction with sparkling bubbles.",
    "image": "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-6",
    "name": "Sunrise Mocktail",
    "category": "mocktails-mojito",
    "price": "170",
    "isVeg": true,
    "isSpecial": true,
    "description": "Layered tropical orange nectar, sweet grenadine, and sparkling soda.",
    "image": "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-7",
    "name": "Pineapple Blossom Mocktail",
    "category": "mocktails-mojito",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Cold-pressed pineapple juice with floral botanical extract and lime.",
    "image": "https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-8",
    "name": "Blue Lagoon Mojito",
    "category": "mocktails-mojito",
    "price": "90",
    "isVeg": true,
    "isSpecial": false,
    "description": "Blue cura\u00e7ao syrup muddled with fresh mint sprigs, lime wedges, and soda.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-9",
    "name": "Pina Colada Mojito",
    "category": "mocktails-mojito",
    "price": "90",
    "isVeg": true,
    "isSpecial": false,
    "description": "Creamy coconut milk, pineapple juice, mint leaves, and effervescent soda.",
    "image": "https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-10",
    "name": "Green Apple Mojito",
    "category": "mocktails-mojito",
    "price": "90",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crisp green apple syrup with muddled lemon, mint leaves, and club soda.",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-11",
    "name": "Watermelon Mojito",
    "category": "mocktails-mojito",
    "price": "90",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fresh juicy watermelon chunks muddled with garden mint and chilled soda.",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-12",
    "name": "Black Current Mojito",
    "category": "mocktails-mojito",
    "price": "100",
    "isVeg": true,
    "isSpecial": false,
    "description": "Sweet-tart black currant essence with crushed ice, lemon, and fresh mint.",
    "image": "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-13",
    "name": "Pink Lady Mojito",
    "category": "mocktails-mojito",
    "price": "100",
    "isVeg": true,
    "isSpecial": false,
    "description": "Delicate berry rose essence, fresh lime, and sparkling mint cooler.",
    "image": "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-14",
    "name": "Paan Mojito",
    "category": "mocktails-mojito",
    "price": "100",
    "isVeg": true,
    "isSpecial": true,
    "description": "Authentic betel leaf essence, sweet gulkand, fresh mint, and soda.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-15",
    "name": "Tea",
    "category": "beverage-shakes",
    "price": "30",
    "isVeg": true,
    "isSpecial": false,
    "description": "Freshly prepared hot milk tea with aromatic tea leaves.",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-16",
    "name": "Black Lemon Tea",
    "category": "beverage-shakes",
    "price": "20",
    "isVeg": true,
    "isSpecial": false,
    "description": "Warm black tea infused with freshly squeezed lemon juice.",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-17",
    "name": "Green Tea",
    "category": "beverage-shakes",
    "price": "30",
    "isVeg": true,
    "isSpecial": false,
    "description": "Antioxidant-rich delicate green tea leaves steeped fresh.",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-18",
    "name": "Coffee",
    "category": "beverage-shakes",
    "price": "50",
    "isVeg": true,
    "isSpecial": false,
    "description": "Steaming hot freshly brewed milk coffee with rich aroma.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-19",
    "name": "Black Coffee",
    "category": "beverage-shakes",
    "price": "40",
    "isVeg": true,
    "isSpecial": false,
    "description": "Freshly brewed dark roasted coffee without milk.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-20",
    "name": "Ice Tea",
    "category": "beverage-shakes",
    "price": "70",
    "isVeg": true,
    "isSpecial": false,
    "description": "Chilled sweetened black tea served with lemon and ice cubes.",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-21",
    "name": "Fresh Lime Water",
    "category": "beverage-shakes",
    "price": "40",
    "isVeg": true,
    "isSpecial": false,
    "description": "Freshly squeezed lemon with chilled water (Sweet, Salted, or Mixed).",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-22",
    "name": "Fresh Lime Soda",
    "category": "beverage-shakes",
    "price": "50",
    "isVeg": true,
    "isSpecial": false,
    "description": "Freshly squeezed lime with effervescent sparkling soda.",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-23",
    "name": "Plain Cold Drink",
    "category": "beverage-shakes",
    "price": "50",
    "isVeg": true,
    "isSpecial": false,
    "description": "Chilled aerated carbonated beverage.",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-24",
    "name": "Masala Cold Drink",
    "category": "beverage-shakes",
    "price": "60",
    "isVeg": true,
    "isSpecial": false,
    "description": "Chilled cola spiced with roasted cumin, black salt, and lemon.",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-25",
    "name": "Choco Coffee",
    "category": "beverage-shakes",
    "price": "90",
    "isVeg": true,
    "isSpecial": false,
    "description": "Aromatic coffee blended with rich chocolate syrup and milk.",
    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-26",
    "name": "Sweet Lassi",
    "category": "beverage-shakes",
    "price": "70",
    "isVeg": true,
    "isSpecial": false,
    "description": "Thick traditional curd churned sweet with cardamom and malai.",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-27",
    "name": "Butter Milk",
    "category": "beverage-shakes",
    "price": "60",
    "isVeg": true,
    "isSpecial": false,
    "description": "Cooling spiced chaas tempered with roasted cumin, coriander, and black salt.",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-28",
    "name": "Hot Chocolate",
    "category": "beverage-shakes",
    "price": "80",
    "isVeg": true,
    "isSpecial": false,
    "description": "Rich, creamy warm cocoa beverage with velvety froth.",
    "image": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-29",
    "name": "Mango Lassi",
    "category": "beverage-shakes",
    "price": "80",
    "isVeg": true,
    "isSpecial": false,
    "description": "Thick churned yogurt blended with sweet Alphonso mango pulp.",
    "image": "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-30",
    "name": "Strawberry Lassi",
    "category": "beverage-shakes",
    "price": "90",
    "isVeg": true,
    "isSpecial": false,
    "description": "Creamy yogurt drink flavored with ripe sweet strawberry extract.",
    "image": "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-31",
    "name": "Banana Lassi",
    "category": "beverage-shakes",
    "price": "80",
    "isVeg": true,
    "isSpecial": false,
    "description": "Wholesome sweet yogurt lassi blended with fresh ripe bananas.",
    "image": "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-32",
    "name": "Cold Coffee",
    "category": "beverage-shakes",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Chilled whipped coffee with milk, sugar, and chocolate lining.",
    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-33",
    "name": "Oreo Shake",
    "category": "beverage-shakes",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Velvety vanilla shake blended with dark cocoa Oreo biscuits.",
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-34",
    "name": "KitKat Shake",
    "category": "beverage-shakes",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Thick chocolate shake loaded with crushed crunchy KitKat wafer bars.",
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-35",
    "name": "Chocolate Shake",
    "category": "beverage-shakes",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Classic thick milk shake made with rich Belgian cocoa sauce.",
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-36",
    "name": "Strawberry Shake",
    "category": "beverage-shakes",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Creamy pink shake prepared with real sweet strawberry reduction.",
    "image": "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-37",
    "name": "Banana Shake",
    "category": "beverage-shakes",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Healthy and thick shake prepared with sweet ripe bananas and milk.",
    "image": "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-38",
    "name": "Mango Shake",
    "category": "beverage-shakes",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Rich tropical Alphonso mango shake served chilled.",
    "image": "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-39",
    "name": "Pineapple Shake",
    "category": "beverage-shakes",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Refreshing sweet and tangy tropical pineapple milkshake.",
    "image": "https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-40",
    "name": "Cold Coffee with Ice Cream",
    "category": "beverage-shakes",
    "price": "200",
    "isVeg": true,
    "isSpecial": true,
    "description": "Rich blended espresso coffee crowned with a generous scoop of vanilla ice cream.",
    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-41",
    "name": "Veg Manchow Soup",
    "category": "soups",
    "price": "120",
    "isVeg": true,
    "isSpecial": false,
    "description": "Spicy vegetable broth with ginger, garlic, mushrooms, and crispy fried noodles.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-42",
    "name": "Hot & Sour Soup (Veg)",
    "category": "soups",
    "price": "130",
    "isVeg": true,
    "isSpecial": false,
    "description": "Tangy and peppery vegetable soup packed with finely shredded vegetables and tofu.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-43",
    "name": "Sweet Corn Soup (Veg)",
    "category": "soups",
    "price": "130",
    "isVeg": true,
    "isSpecial": false,
    "description": "Velvety broth simmered with tender American sweet corn kernels and diced vegetables.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-44",
    "name": "Veg Clear Soup",
    "category": "soups",
    "price": "120",
    "isVeg": true,
    "isSpecial": false,
    "description": "Light clarifying broth gently simmered with baby corn, mushrooms, and greens.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-45",
    "name": "Cream of Tomato Soup",
    "category": "soups",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Smooth roasted ripe tomato soup finished with butter and golden croutons.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-46",
    "name": "Lemon Coriander Soup",
    "category": "soups",
    "price": "140",
    "isVeg": true,
    "isSpecial": false,
    "description": "Aromatic vegetable soup infused with fresh coriander leaves and tangy lemon juice.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-47",
    "name": "Cream of Mushroom Soup",
    "category": "soups",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Rich and earthy soup made with saut\u00e9ed button mushrooms and fresh dairy cream.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-48",
    "name": "Chicken Manchow Soup",
    "category": "soups",
    "price": "170",
    "isVeg": false,
    "isSpecial": true,
    "description": "Spicy garlic broth with shredded chicken, egg drops, and topped with crisp noodles.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-49",
    "name": "Chicken Hot & Sour Soup",
    "category": "soups",
    "price": "180",
    "isVeg": false,
    "isSpecial": false,
    "description": "Fiery and sour chicken broth with shredded chicken, peppers, and egg swirl.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-50",
    "name": "Chicken Sweet Corn Soup",
    "category": "soups",
    "price": "170",
    "isVeg": false,
    "isSpecial": false,
    "description": "Silky sweet corn broth simmered with tender chicken shreds and egg drops.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-51",
    "name": "Chicken Garlic Soup",
    "category": "soups",
    "price": "170",
    "isVeg": false,
    "isSpecial": false,
    "description": "Aromatic chicken broth infused with roasted golden garlic cloves and herbs.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-52",
    "name": "Chicken Clear Soup",
    "category": "soups",
    "price": "180",
    "isVeg": false,
    "isSpecial": false,
    "description": "Delicate clear chicken consomm\u00e9 with finely sliced chicken breast and scallions.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-53",
    "name": "Chicken Lung-Fung Soup",
    "category": "soups",
    "price": "180",
    "isVeg": false,
    "isSpecial": false,
    "description": "Traditional thick oriental chicken and egg soup scented with aromatic spices.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-54",
    "name": "Boondi Raita",
    "category": "salad-raita-papad",
    "price": "70",
    "isVeg": true,
    "isSpecial": false,
    "description": "Chilled whipped yogurt mixed with crispy chickpea pearls and roasted cumin.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-55",
    "name": "Onion Raita",
    "category": "salad-raita-papad",
    "price": "70",
    "isVeg": true,
    "isSpecial": false,
    "description": "Creamy seasoned curd with finely chopped red onions and green chillies.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-56",
    "name": "Veg Raita",
    "category": "salad-raita-papad",
    "price": "80",
    "isVeg": true,
    "isSpecial": false,
    "description": "Cooling yogurt mixed with diced cucumber, tomatoes, and chaat spices.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-57",
    "name": "Green Salad",
    "category": "salad-raita-papad",
    "price": "120",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fresh slices of garden cucumbers, carrots, onions, tomatoes, and lemon wedges.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-58",
    "name": "Onion Salad",
    "category": "salad-raita-papad",
    "price": "110",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crisp red onion rings seasoned with fresh lime juice, green chillies, and chaat masala.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-59",
    "name": "Lachcha Salad",
    "category": "salad-raita-papad",
    "price": "110",
    "isVeg": true,
    "isSpecial": false,
    "description": "Thin spiral sliced onion lachhas tossed with deghi mirch and lemon.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-60",
    "name": "Kachumber Salad",
    "category": "salad-raita-papad",
    "price": "120",
    "isVeg": true,
    "isSpecial": false,
    "description": "Finely diced cucumbers, onions, and ripe tomatoes tossed with tangy lime dressing.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-61",
    "name": "Family Green Salad",
    "category": "salad-raita-papad",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Large sharing platter of assorted garden fresh vegetables.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-62",
    "name": "Dry Papad",
    "category": "salad-raita-papad",
    "price": "20",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crispy roasted lentil wafer.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-63",
    "name": "Fry Papad",
    "category": "salad-raita-papad",
    "price": "25",
    "isVeg": true,
    "isSpecial": false,
    "description": "Deep golden fried crispy lentil papad.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-64",
    "name": "Masala Papad",
    "category": "salad-raita-papad",
    "price": "60",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crispy fried papad topped with spicy diced onions, tomatoes, and fresh coriander.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-65",
    "name": "Paneer Chilli Dry",
    "category": "chinese-starter-veg",
    "price": "220",
    "isVeg": true,
    "isSpecial": false,
    "description": "Tender paneer cubes wok-tossed with green chillies, capsicum, and soya sauce.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-66",
    "name": "Paneer Chilli Gravy",
    "category": "chinese-starter-veg",
    "price": "230",
    "isVeg": true,
    "isSpecial": false,
    "description": "Batter-fried cottage cheese cooked in spicy Indo-Chinese dark chilli soya gravy.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-67",
    "name": "Paneer Salt & Pepper",
    "category": "chinese-starter-veg",
    "price": "220",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crispy paneer cubes seasoned with freshly crushed black peppercorns and spring onions.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-68",
    "name": "Paneer 65",
    "category": "chinese-starter-veg",
    "price": "230",
    "isVeg": true,
    "isSpecial": false,
    "description": "South Indian style spicy fried paneer tossed with curry leaves, yogurt, and red chillies.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-69",
    "name": "Paneer Garlic Sauce",
    "category": "chinese-starter-veg",
    "price": "230",
    "isVeg": true,
    "isSpecial": false,
    "description": "Paneer morsels tossed in an aromatic roasted garlic sauce.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-70",
    "name": "Paneer Singapuri Stick",
    "category": "chinese-starter-veg",
    "price": "240",
    "isVeg": true,
    "isSpecial": false,
    "description": "Skewered paneer strips glazed with sweet-spicy Singapuri sauce and sesame seeds.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-71",
    "name": "Dragon Paneer",
    "category": "chinese-starter-veg",
    "price": "240",
    "isVeg": true,
    "isSpecial": true,
    "description": "Crispy paneer fingers tossed with cashews, fiery red dragon sauce, and scallions.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-72",
    "name": "Schezwan Paneer Chilli",
    "category": "chinese-starter-veg",
    "price": "250",
    "isVeg": true,
    "isSpecial": false,
    "description": "Spicy cottage cheese tossed in bold homemade Schezwan pepper reduction.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-73",
    "name": "Paneer Cheese Combo",
    "category": "chinese-starter-veg",
    "price": "250",
    "isVeg": true,
    "isSpecial": false,
    "description": "Indulgent combination of paneer chunks baked with melted cheese and herbs.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-74",
    "name": "Paneer Hot Pan",
    "category": "chinese-starter-veg",
    "price": "260",
    "isVeg": true,
    "isSpecial": false,
    "description": "Sizzling paneer starter served piping hot with bell peppers and tangy sauce.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-75",
    "name": "Paneer Crispy",
    "category": "chinese-starter-veg",
    "price": "260",
    "isVeg": true,
    "isSpecial": false,
    "description": "Extra-crunchy batter fried paneer tossed in sweet-sour spicy glaze.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-76",
    "name": "Mushroom Chilli",
    "category": "chinese-starter-veg",
    "price": "210",
    "isVeg": true,
    "isSpecial": false,
    "description": "Golden button mushrooms wok-tossed with capsicum, onions, and chilli soya.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-77",
    "name": "Mushroom Salt & Pepper",
    "category": "chinese-starter-veg",
    "price": "210",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crispy fried mushrooms seasoned with crushed black pepper and green scallions.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-78",
    "name": "Mushroom Garlic Sauce",
    "category": "chinese-starter-veg",
    "price": "210",
    "isVeg": true,
    "isSpecial": false,
    "description": "Plump mushrooms glazed with rich aromatic garlic sauce.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-79",
    "name": "Mushroom 65",
    "category": "chinese-starter-veg",
    "price": "230",
    "isVeg": true,
    "isSpecial": false,
    "description": "Spicy crisp-fried mushrooms tossed with southern spices and curry leaves.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-80",
    "name": "Mushroom Manchurian",
    "category": "chinese-starter-veg",
    "price": "220",
    "isVeg": true,
    "isSpecial": false,
    "description": "Button mushrooms tossed in dark ginger-garlic Manchurian gravy.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-81",
    "name": "Crispy Corn",
    "category": "chinese-starter-veg",
    "price": "220",
    "isVeg": true,
    "isSpecial": false,
    "description": "Batter-fried sweet corn tossed with green chillies, onions, and chaat spices.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-82",
    "name": "Corn Chilli",
    "category": "chinese-starter-veg",
    "price": "200",
    "isVeg": true,
    "isSpecial": false,
    "description": "Sweet corn kernels stir fried with diced bell peppers and spicy chilli glaze.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-83",
    "name": "Corn Salt & Pepper",
    "category": "chinese-starter-veg",
    "price": "200",
    "isVeg": true,
    "isSpecial": false,
    "description": "Golden fried corn with coarse black pepper and garlic seasoning.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-84",
    "name": "Corn Chaat",
    "category": "chinese-starter-veg",
    "price": "200",
    "isVeg": true,
    "isSpecial": false,
    "description": "Warm sweet corn mixed with fresh butter, lemon juice, and tangy chaat masala.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-85",
    "name": "Chana Chaat",
    "category": "chinese-starter-veg",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Tender boiled chickpeas tossed with onions, tomatoes, green chillies, and lemon.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-86",
    "name": "Chana Roast",
    "category": "chinese-starter-veg",
    "price": "180",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crispy pan-roasted spiced chickpeas seasoned with desi spices.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-87",
    "name": "Chana Chilli",
    "category": "chinese-starter-veg",
    "price": "200",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crisp fried chickpeas wok-tossed with capsicum, garlic, and chilli sauce.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-88",
    "name": "Potato Chilli",
    "category": "chinese-starter-veg",
    "price": "180",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crispy potato fingers tossed in spicy chilli garlic sauce with capsicum.",
    "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-89",
    "name": "Honey Potato Chilli",
    "category": "chinese-starter-veg",
    "price": "210",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crispy fried potato strips coated in sweet honey chilli glaze and toasted sesame.",
    "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-90",
    "name": "Veg Crispy",
    "category": "chinese-starter-veg",
    "price": "190",
    "isVeg": true,
    "isSpecial": false,
    "description": "Assorted crispy batter-fried vegetables tossed in spicy red Chinese sauce.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-91",
    "name": "Veg Manchurian Dry",
    "category": "chinese-starter-veg",
    "price": "200",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crisp minced vegetable dumplings tossed with ginger, garlic, and dark soy.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-92",
    "name": "Veg Manchurian Gravy",
    "category": "chinese-starter-veg",
    "price": "220",
    "isVeg": true,
    "isSpecial": false,
    "description": "Vegetable dumplings simmered in savory dark soy-garlic sauce.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-93",
    "name": "Baby Corn Chilli",
    "category": "chinese-starter-veg",
    "price": "210",
    "isVeg": true,
    "isSpecial": false,
    "description": "Tender crisp baby corn pieces tossed with bell peppers and chilli sauce.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-94",
    "name": "Baby Corn Crispy",
    "category": "chinese-starter-veg",
    "price": "220",
    "isVeg": true,
    "isSpecial": false,
    "description": "Golden fried baby corn fingers tossed in hot garlic seasoning.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-95",
    "name": "Chicken Chilli",
    "category": "chinese-starter-nonveg",
    "price": "290",
    "isVeg": false,
    "isSpecial": false,
    "description": "Diced tender chicken wok-tossed with capsicum, onion petals, and chilli soya.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-96",
    "name": "Chicken Lollipop",
    "category": "chinese-starter-nonveg",
    "price": "290",
    "isVeg": false,
    "isSpecial": true,
    "description": "Crispy fried chicken winglets tossed in fiery ginger-garlic Schezwan glaze.",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-97",
    "name": "Chicken Roll",
    "category": "chinese-starter-nonveg",
    "price": "120",
    "isVeg": false,
    "isSpecial": false,
    "description": "Flaky flatbread wrapped with spiced chicken, sliced onions, and tangy sauce.",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-98",
    "name": "Egg Roll",
    "category": "chinese-starter-nonveg",
    "price": "100",
    "isVeg": false,
    "isSpecial": false,
    "description": "Golden egg-coated wrap stuffed with seasoned onions, veggies, and sauces.",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-99",
    "name": "Chicken Pakoda",
    "category": "chinese-starter-nonveg",
    "price": "250",
    "isVeg": false,
    "isSpecial": false,
    "description": "Juicy chicken pieces coated in spiced gram flour batter and deep fried golden.",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-100",
    "name": "Chicken Manchurian",
    "category": "chinese-starter-nonveg",
    "price": "270",
    "isVeg": false,
    "isSpecial": false,
    "description": "Boneless chicken cubes cooked in dark soya, ginger, and garlic sauce.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-101",
    "name": "Chicken Roast",
    "category": "chinese-starter-nonveg",
    "price": "260",
    "isVeg": false,
    "isSpecial": false,
    "description": "Pan-roasted chicken chunks spiced with crushed peppercorns and curry leaves.",
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-102",
    "name": "Crispy Chicken",
    "category": "chinese-starter-nonveg",
    "price": "320",
    "isVeg": false,
    "isSpecial": false,
    "description": "Shredded chicken fried extra crisp and glazed in sweet-spicy garlic sauce.",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-103",
    "name": "Chicken Singapuri Stick",
    "category": "chinese-starter-nonveg",
    "price": "310",
    "isVeg": false,
    "isSpecial": false,
    "description": "Chicken skewers glazed in sweet and spicy Singapuri oriental reduction.",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-104",
    "name": "Chicken 555",
    "category": "chinese-starter-nonveg",
    "price": "330",
    "isVeg": false,
    "isSpecial": true,
    "description": "Signature crispy shredded chicken tossed with red chillies, garlic, and cashew nuts.",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-105",
    "name": "Fish Roast",
    "category": "chinese-starter-nonveg",
    "price": "290",
    "isVeg": false,
    "isSpecial": false,
    "description": "Tender fish fillets pan-roasted on tava with crushed spices and fresh lime.",
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-106",
    "name": "Veg Kurkure Kebab",
    "category": "tandoor-starter-veg",
    "price": "240",
    "isVeg": true,
    "isSpecial": false,
    "description": "Extra crispy textured vegetable kebabs with spiced herb filling.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-107",
    "name": "Veg Hara Bhara Kebab",
    "category": "tandoor-starter-veg",
    "price": "230",
    "isVeg": true,
    "isSpecial": false,
    "description": "Spinach, green pea, and paneer patties pan-seared with cashew nut crowns.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-108",
    "name": "Mushroom Tikka",
    "category": "tandoor-starter-veg",
    "price": "250",
    "isVeg": true,
    "isSpecial": false,
    "description": "Juicy button mushrooms marinated in aromatic tandoori masala, charcoal roasted.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-109",
    "name": "Veg Seekh Kebab",
    "category": "tandoor-starter-veg",
    "price": "270",
    "isVeg": true,
    "isSpecial": false,
    "description": "Finely minced vegetables seasoned with herbs and grilled on skewers.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-110",
    "name": "Paneer Tikka",
    "category": "tandoor-starter-veg",
    "price": "260",
    "isVeg": true,
    "isSpecial": true,
    "description": "Fresh cottage cheese cubes marinated in hung curd and spices, roasted in clay oven.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-111",
    "name": "Paneer Angara Tikka",
    "category": "tandoor-starter-veg",
    "price": "290",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fiery smoked spicy red marinade coating grilled paneer cubes.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-112",
    "name": "Paneer Pahadi Tikka",
    "category": "tandoor-starter-veg",
    "price": "280",
    "isVeg": true,
    "isSpecial": false,
    "description": "Paneer marinated in fresh mint, coriander, and mountain green herbs.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-113",
    "name": "Paneer Lahsuni Tikka",
    "category": "tandoor-starter-veg",
    "price": "290",
    "isVeg": true,
    "isSpecial": false,
    "description": "Paneer chunks infused with rich roasted garlic paste and curd.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-114",
    "name": "Paneer Malai Tikka",
    "category": "tandoor-starter-veg",
    "price": "300",
    "isVeg": true,
    "isSpecial": true,
    "description": "Melt-in-mouth cottage cheese coated in royal cashew cream and mild spices.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-115",
    "name": "Tangdi Kebab (4 Pcs)",
    "category": "tandoor-starter-nonveg",
    "price": "360",
    "isVeg": false,
    "isSpecial": true,
    "description": "Four tender chicken drumsticks marinated in rich cashew paste and tandoori spices.",
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-116",
    "name": "Chicken Hara Bhara Kebab",
    "category": "tandoor-starter-nonveg",
    "price": "340",
    "isVeg": false,
    "isSpecial": false,
    "description": "Minced chicken patties flavored with fresh spinach, mint, and spices.",
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-117",
    "name": "Chicken Hariyali Tikka",
    "category": "tandoor-starter-nonveg",
    "price": "350",
    "isVeg": false,
    "isSpecial": false,
    "description": "Boneless chicken morsels coated in fresh mint, coriander, and green chilli paste.",
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-118",
    "name": "Chicken Tikka",
    "category": "tandoor-starter-nonveg",
    "price": "330",
    "isVeg": false,
    "isSpecial": false,
    "description": "Classic boneless chicken cubes marinated in spiced hung yogurt, charcoal grilled.",
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-119",
    "name": "Afghani Chicken Tikka",
    "category": "tandoor-starter-nonveg",
    "price": "340",
    "isVeg": false,
    "isSpecial": false,
    "description": "Mild, creamy boneless chicken marinated in cream, cheese, and white pepper.",
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-120",
    "name": "Tandoori Chicken (Half / Full)",
    "category": "tandoor-starter-nonveg",
    "price": "340 / 600",
    "isVeg": false,
    "isSpecial": true,
    "description": "Whole spring chicken marinated in deghi mirch and mustard oil, roasted over charcoal (Half \u20b9340 / Full \u20b9600).",
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-121",
    "name": "Chicken Banjara Tikka",
    "category": "tandoor-starter-nonveg",
    "price": "360",
    "isVeg": false,
    "isSpecial": false,
    "description": "Chicken pieces infused with crushed whole coriander, cumin, garlic, and rustic spices.",
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-122",
    "name": "Chicken Fried Rice",
    "category": "chinese-rice-noodles",
    "price": "260",
    "isVeg": false,
    "isSpecial": false,
    "description": "Wok-tossed basmati rice with diced chicken, eggs, and spring onions.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-123",
    "name": "Egg Fried Rice",
    "category": "chinese-rice-noodles",
    "price": "240",
    "isVeg": false,
    "isSpecial": false,
    "description": "Basmati rice wok-fried with scrambled eggs, vegetables, and light soy.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-124",
    "name": "Chicken Schezwan Fried Rice",
    "category": "chinese-rice-noodles",
    "price": "320",
    "isVeg": false,
    "isSpecial": false,
    "description": "Spicy wok-fried rice tossed with tender chicken and fiery Schezwan sauce.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-125",
    "name": "Chicken Singapuri Rice",
    "category": "chinese-rice-noodles",
    "price": "280",
    "isVeg": false,
    "isSpecial": false,
    "description": "Rice cooked with chicken and Singaporean sweet-curry style seasoning.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-126",
    "name": "Chicken Noodles",
    "category": "chinese-rice-noodles",
    "price": "280",
    "isVeg": false,
    "isSpecial": false,
    "description": "Stir-fried noodles with chicken strips, shredded cabbage, and carrots.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-127",
    "name": "Chicken Hakka Noodles",
    "category": "chinese-rice-noodles",
    "price": "290",
    "isVeg": false,
    "isSpecial": false,
    "description": "Classic Hakka style noodles tossed with tender chicken and crisp bell peppers.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-128",
    "name": "Egg Noodles",
    "category": "chinese-rice-noodles",
    "price": "200",
    "isVeg": false,
    "isSpecial": false,
    "description": "Wok-tossed noodles with scrambled eggs, scallions, and soy sauce.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-129",
    "name": "Chicken Schezwan Noodles",
    "category": "chinese-rice-noodles",
    "price": "300",
    "isVeg": false,
    "isSpecial": false,
    "description": "Spicy stir-fried noodles tossed with chicken and hot Schezwan chilli pepper.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-130",
    "name": "Chicken Singapuri Noodles",
    "category": "chinese-rice-noodles",
    "price": "310",
    "isVeg": false,
    "isSpecial": false,
    "description": "Oriental noodles tossed with tender chicken in exotic spicy Singapuri sauce.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-131",
    "name": "Paneer Masala",
    "category": "main-course-veg",
    "price": "250",
    "isVeg": true,
    "isSpecial": false,
    "description": "Cottage cheese simmered in spicy onion-tomato gravy with Indian herbs.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-132",
    "name": "Paneer Butter Masala",
    "category": "main-course-veg",
    "price": "270",
    "isVeg": true,
    "isSpecial": true,
    "description": "Cottage cheese simmered in a velvety, mildly sweet tomato, butter, and cashew gravy.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-133",
    "name": "Matar Paneer",
    "category": "main-course-veg",
    "price": "260",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fresh cottage cheese and sweet green peas cooked in spiced onion gravy.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-134",
    "name": "Paneer Korma",
    "category": "main-course-veg",
    "price": "270",
    "isVeg": true,
    "isSpecial": false,
    "description": "Mild, royal white gravy curry prepared with yogurt, cashew nuts, and paneer.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-135",
    "name": "Paneer Handi",
    "category": "main-course-veg",
    "price": "290",
    "isVeg": true,
    "isSpecial": false,
    "description": "Traditional handi cooked paneer with thick onion-tomato gravy and whole spices.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-136",
    "name": "Paneer Kadhai",
    "category": "main-course-veg",
    "price": "300",
    "isVeg": true,
    "isSpecial": false,
    "description": "Paneer cooked with bell peppers, onion petals, and coarse crushed kadhai masala.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-137",
    "name": "Paneer Bhurji",
    "category": "main-course-veg",
    "price": "299",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crumbled fresh cottage cheese saut\u00e9ed with onions, tomatoes, and green chillies.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-138",
    "name": "Palak Paneer",
    "category": "main-course-veg",
    "price": "280",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fresh spinach puree with garlic and cumin, simmered with soft paneer cubes.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-139",
    "name": "Paneer Lachedar",
    "category": "main-course-veg",
    "price": "299",
    "isVeg": true,
    "isSpecial": false,
    "description": "Grated and layered paneer in rich spiced onion-tomato gravy.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-140",
    "name": "Paneer Lababdar",
    "category": "main-course-veg",
    "price": "280",
    "isVeg": true,
    "isSpecial": false,
    "description": "Luscious gravy prepared with grated cottage cheese, cream, and paneer cubes.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-141",
    "name": "Paneer Rara Masala",
    "category": "main-course-veg",
    "price": "300",
    "isVeg": true,
    "isSpecial": false,
    "description": "Rich combination of minced paneer and cottage cheese chunks in aromatic gravy.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-142",
    "name": "Paneer Mushroom",
    "category": "main-course-veg",
    "price": "300",
    "isVeg": true,
    "isSpecial": false,
    "description": "Cottage cheese and button mushrooms simmered together in royal spiced masala.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-143",
    "name": "Paneer Tikka Masala",
    "category": "main-course-veg",
    "price": "300",
    "isVeg": true,
    "isSpecial": true,
    "description": "Charcoal grilled paneer tikkas finished in rich onion-tomato masala with butter.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-144",
    "name": "Paneer Kolhapuri",
    "category": "main-course-veg",
    "price": "290",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fiery spicy paneer curry cooked with roasted coconut and dry red chillies.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-145",
    "name": "Paneer Chulbuli",
    "category": "main-course-veg",
    "price": "300",
    "isVeg": true,
    "isSpecial": false,
    "description": "Spicy, tangy and chatpata paneer gravy special with capsicum.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-146",
    "name": "Paneer Lapeta",
    "category": "main-course-veg",
    "price": "280",
    "isVeg": true,
    "isSpecial": false,
    "description": "Thick semi-dry spicy gravy coating soft cottage cheese cubes.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-147",
    "name": "Paneer Pasanda",
    "category": "main-course-veg",
    "price": "299",
    "isVeg": true,
    "isSpecial": false,
    "description": "Stuffed paneer sandwiches cooked in velvety rich cashew and cream gravy.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-148",
    "name": "Paneer Tava Chatpata",
    "category": "main-course-veg",
    "price": "280",
    "isVeg": true,
    "isSpecial": false,
    "description": "Cottage cheese cubes tossed on iron tava with tangy dry mango and roasted spices.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-149",
    "name": "Mushroom Baby Corn Masala",
    "category": "main-course-veg",
    "price": "300",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fresh mushrooms and tender baby corn cooked in fragrant spiced curry.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-150",
    "name": "Mushroom Masala",
    "category": "main-course-veg",
    "price": "260",
    "isVeg": true,
    "isSpecial": false,
    "description": "Button mushrooms cooked in spiced onion-tomato gravy with fresh coriander.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-151",
    "name": "Mushroom Kadhai",
    "category": "main-course-veg",
    "price": "280",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fresh mushrooms cooked with bell peppers, onions, and coarse kadhai masala.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-152",
    "name": "Mushroom Handi",
    "category": "main-course-veg",
    "price": "260",
    "isVeg": true,
    "isSpecial": false,
    "description": "Earthen pot cooked mushrooms simmered with aromatic roasted spices.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-153",
    "name": "Mushroom Do Pyaza",
    "category": "main-course-veg",
    "price": "260",
    "isVeg": true,
    "isSpecial": false,
    "description": "Mushrooms cooked with double quantity of caramelized onions and spices.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-154",
    "name": "Mushroom Kolhapuri",
    "category": "main-course-veg",
    "price": "280",
    "isVeg": true,
    "isSpecial": false,
    "description": "Spicy mushroom curry prepared with roasted red chilli Kolhapuri masala.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-155",
    "name": "Bhindi Masala",
    "category": "main-course-veg",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Tender okra stir fried with onions, amchur, and fragrant cumin.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-156",
    "name": "Bhindi Onion Fry",
    "category": "main-course-veg",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crispy fried okra saut\u00e9ed with browned onions and chatpata spices.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-157",
    "name": "Bhindi Do Pyaza",
    "category": "main-course-veg",
    "price": "180",
    "isVeg": true,
    "isSpecial": false,
    "description": "Sliced ladyfingers cooked with crunchy onions in semi-dry gravy.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-158",
    "name": "Bhindi Kadahi",
    "category": "main-course-veg",
    "price": "200",
    "isVeg": true,
    "isSpecial": false,
    "description": "Okra cooked in an iron wok with crushed coriander seeds and bell peppers.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-159",
    "name": "Mix Veg (Dry / Gravy)",
    "category": "main-course-veg",
    "price": "180 / 200",
    "isVeg": true,
    "isSpecial": false,
    "description": "Assorted garden vegetables cooked dry or with rich gravy (Dry \u20b9180 / Gravy \u20b9200).",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-160",
    "name": "Aloo Jeera",
    "category": "main-course-veg",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Diced potatoes tossed in pure ghee with roasted cumin seeds and green chillies.",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-161",
    "name": "Aloo Gobhi (Dry / Gravy)",
    "category": "main-course-veg",
    "price": "170",
    "isVeg": true,
    "isSpecial": false,
    "description": "Classic homestyle potatoes and cauliflower florets with turmeric and ginger.",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-162",
    "name": "Veg Handi",
    "category": "main-course-veg",
    "price": "200",
    "isVeg": true,
    "isSpecial": false,
    "description": "Assorted fresh vegetables slow-cooked in earthen handi pot with spices.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-163",
    "name": "Veg Kadhai",
    "category": "main-course-veg",
    "price": "220",
    "isVeg": true,
    "isSpecial": false,
    "description": "Mixed vegetables tossed with bell peppers and roasted kadhai masala.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-164",
    "name": "Veg Kolhapuri",
    "category": "main-course-veg",
    "price": "220",
    "isVeg": true,
    "isSpecial": false,
    "description": "Mixed vegetables simmered in spicy fiery red Kolhapuri gravy.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-165",
    "name": "Veg Tava",
    "category": "main-course-veg",
    "price": "60",
    "isVeg": true,
    "isSpecial": false,
    "description": "Seasonal vegetables quickly pan-fried on iron tava with dry spices.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-166",
    "name": "Veg Bhuna Handi",
    "category": "main-course-veg",
    "price": "280",
    "isVeg": true,
    "isSpecial": false,
    "description": "Slow-roasted vegetables in thick deeply caramelized onion-tomato paste.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-167",
    "name": "Veg Jaipuri",
    "category": "main-course-veg",
    "price": "250",
    "isVeg": true,
    "isSpecial": false,
    "description": "Rajasthani style vegetable curry topped with roasted papad crunch.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-168",
    "name": "Veg Kofta",
    "category": "main-course-veg",
    "price": "240",
    "isVeg": true,
    "isSpecial": false,
    "description": "Deep fried vegetable dumplings simmered in rich creamy onion-cashew gravy.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-169",
    "name": "Mumbai Veg Masala",
    "category": "main-course-veg",
    "price": "260",
    "isVeg": true,
    "isSpecial": false,
    "description": "Spicy Mumbai style street-flavored vegetable curry.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-170",
    "name": "Methi Matar",
    "category": "main-course-veg",
    "price": "250",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fresh fenugreek leaves and green peas simmered in rich creamy malai gravy.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-171",
    "name": "Kaju Masala",
    "category": "main-course-veg",
    "price": "250",
    "isVeg": true,
    "isSpecial": true,
    "description": "Golden roasted cashew nuts simmered in rich spiced onion-cashew gravy.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-172",
    "name": "Kaju Curry",
    "category": "main-course-veg",
    "price": "240",
    "isVeg": true,
    "isSpecial": false,
    "description": "Whole roasted cashews cooked in mild, fragrant creamy curry.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-173",
    "name": "Panjabi Dum Aloo",
    "category": "main-course-veg",
    "price": "230",
    "isVeg": true,
    "isSpecial": false,
    "description": "Golden fried baby potatoes slow cooked on dum in rich spiced gravy.",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-174",
    "name": "Kashmiri Dum Aloo",
    "category": "main-course-veg",
    "price": "210",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fried potatoes simmered in Kashmiri red chilli, fennel, and curd gravy.",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-175",
    "name": "Chana Masala",
    "category": "main-course-veg",
    "price": "200",
    "isVeg": true,
    "isSpecial": false,
    "description": "Tender chickpeas simmered in authentic Amritsari spices and dried pomegranate seeds.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-176",
    "name": "Baigan Bharta",
    "category": "main-course-veg",
    "price": "200",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fire-roasted mashed eggplants cooked with onions, tomatoes, and garlic.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-177",
    "name": "Egg Boil (2pcs)",
    "category": "main-course-nonveg",
    "price": "50",
    "isVeg": false,
    "isSpecial": false,
    "description": "Two perfectly hard-boiled farm eggs served with black pepper and salt.",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-178",
    "name": "Egg Omelette",
    "category": "main-course-nonveg",
    "price": "120",
    "isVeg": false,
    "isSpecial": false,
    "description": "Double egg fluffy omelette folded with chopped onions and green herbs.",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-179",
    "name": "Egg Onion Fry",
    "category": "main-course-nonveg",
    "price": "150",
    "isVeg": false,
    "isSpecial": false,
    "description": "Pan-fried eggs saut\u00e9ed with caramelised onions and spices.",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-180",
    "name": "Egg Bhurji",
    "category": "main-course-nonveg",
    "price": "160",
    "isVeg": false,
    "isSpecial": false,
    "description": "Scrambled eggs tossed with onions, tomatoes, green chillies, and coriander.",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-181",
    "name": "Egg Bhurji Curry",
    "category": "main-course-nonveg",
    "price": "200",
    "isVeg": false,
    "isSpecial": false,
    "description": "Spicy scrambled eggs simmered in rich onion-tomato curry.",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-182",
    "name": "Egg Curry",
    "category": "main-course-nonveg",
    "price": "180",
    "isVeg": false,
    "isSpecial": false,
    "description": "Pan-fried boiled eggs served in a hearty spiced gravy with chopped coriander.",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-183",
    "name": "Egg Masala",
    "category": "main-course-nonveg",
    "price": "190",
    "isVeg": false,
    "isSpecial": false,
    "description": "Boiled eggs cooked in a thick spicy onion-tomato gravy with roasted spices.",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-184",
    "name": "Egg Tadka",
    "category": "main-course-nonveg",
    "price": "200",
    "isVeg": false,
    "isSpecial": false,
    "description": "Kolkata style yellow dal cooked with scrambled eggs and double tadka.",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-185",
    "name": "Desi Chicken Curry (1 KG)",
    "category": "main-course-nonveg",
    "price": "1400",
    "isVeg": false,
    "isSpecial": true,
    "description": "Authentic local country chicken slow-cooked with rustic whole spices in an earthen pot (Serves 4-5).",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-186",
    "name": "Chicken Curry Home Style",
    "category": "main-course-nonveg",
    "price": "280",
    "isVeg": false,
    "isSpecial": false,
    "description": "Comforting homestyle chicken curry cooked with onions, ginger, and garlic.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-187",
    "name": "Chicken Curry",
    "category": "main-course-nonveg",
    "price": "270",
    "isVeg": false,
    "isSpecial": false,
    "description": "Tender chicken pieces simmered in traditional spiced gravy.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-188",
    "name": "Chicken Onion Fry",
    "category": "main-course-nonveg",
    "price": "300",
    "isVeg": false,
    "isSpecial": false,
    "description": "Semi-dry chicken preparation with double caramelised onions and green chillies.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-189",
    "name": "Chicken Hyderabadi",
    "category": "main-course-nonveg",
    "price": "300",
    "isVeg": false,
    "isSpecial": false,
    "description": "Flavourful chicken in spicy green herb, mint, and spinach gravy.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-190",
    "name": "Chicken Kolhapuri",
    "category": "main-course-nonveg",
    "price": "300",
    "isVeg": false,
    "isSpecial": false,
    "description": "Fiery Maharashtrian style chicken curry cooked with roasted red chillies.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-191",
    "name": "Chicken Masala",
    "category": "main-course-nonveg",
    "price": "290",
    "isVeg": false,
    "isSpecial": false,
    "description": "Chicken pieces cooked with coarse ground spices, onions, and tomatoes.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-192",
    "name": "Chicken Do Pyaza",
    "category": "main-course-nonveg",
    "price": "320",
    "isVeg": false,
    "isSpecial": false,
    "description": "Tender chicken cooked with crunchy onion petals in aromatic curry.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-193",
    "name": "Chicken Handi",
    "category": "main-course-nonveg",
    "price": "300",
    "isVeg": false,
    "isSpecial": false,
    "description": "Chicken slow-simmered in an earthen handi pot with roasted whole spices.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-194",
    "name": "Chicken Mughlai",
    "category": "main-course-nonveg",
    "price": "330",
    "isVeg": false,
    "isSpecial": false,
    "description": "Royal chicken curry enriched with egg ribbon, cashew paste, and saffron.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-195",
    "name": "Chicken Patiala",
    "category": "main-course-nonveg",
    "price": "320",
    "isVeg": false,
    "isSpecial": false,
    "description": "Creamy North Indian preparation with chicken wrapped in seasoned omelette.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-196",
    "name": "Chicken Butter Masala",
    "category": "main-course-nonveg",
    "price": "360",
    "isVeg": false,
    "isSpecial": true,
    "description": "Boneless tandoori chicken simmered in silky tomato butter makhani gravy.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-197",
    "name": "Prawn Masala",
    "category": "main-course-nonveg",
    "price": "320",
    "isVeg": false,
    "isSpecial": false,
    "description": "Plump prawns cooked in a spicy onion-tomato gravy with mustard and curry leaves.",
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-198",
    "name": "Prawn Curry",
    "category": "main-course-nonveg",
    "price": "310",
    "isVeg": false,
    "isSpecial": false,
    "description": "Succulent prawns simmered in fragrant coastal coconut curry.",
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-199",
    "name": "Fish Masala",
    "category": "main-course-nonveg",
    "price": "300",
    "isVeg": false,
    "isSpecial": false,
    "description": "Fish steaks cooked in homestyle spiced onion-tomato gravy with fresh herbs.",
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-200",
    "name": "Fish Onion Fry",
    "category": "main-course-nonveg",
    "price": "310",
    "isVeg": false,
    "isSpecial": false,
    "description": "Spiced fish steaks pan-fried with caramelised onions and curry leaves.",
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-201",
    "name": "Mutton Do Pyaza",
    "category": "main-course-nonveg",
    "price": "350",
    "isVeg": false,
    "isSpecial": false,
    "description": "Tender mutton pieces stewed with double onions and freshly cracked spices.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-202",
    "name": "Mutton Handi",
    "category": "main-course-nonveg",
    "price": "360",
    "isVeg": false,
    "isSpecial": false,
    "description": "Slow-cooked mutton handi prepared in traditional pot style with rich gravy.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-203",
    "name": "Mutton Kadhai",
    "category": "main-course-nonveg",
    "price": "360",
    "isVeg": false,
    "isSpecial": false,
    "description": "Tender mutton cooked in wok with capsicum and coarse ground spices.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-204",
    "name": "Mutton Masala",
    "category": "main-course-nonveg",
    "price": "350",
    "isVeg": false,
    "isSpecial": false,
    "description": "Slow-braised goat meat in thick aromatic onion-tomato masala.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-205",
    "name": "Mutton Keema Masala",
    "category": "main-course-nonveg",
    "price": "360",
    "isVeg": false,
    "isSpecial": false,
    "description": "Spiced minced goat meat saut\u00e9ed with onions, green peas, and fresh mint.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-206",
    "name": "Mutton Rogan Josh",
    "category": "main-course-nonveg",
    "price": "380",
    "isVeg": false,
    "isSpecial": true,
    "description": "Melt-in-mouth mutton cuts braised in aromatic Kashmiri spices, fennel, and curd.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-207",
    "name": "Steam Rice",
    "category": "rice",
    "price": "100",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fluffy, perfectly steamed long-grain basmati rice.",
    "image": "/dishes/steam-rice.jpg"
  },
  {
    "id": "dish-208",
    "name": "Jeera Rice",
    "category": "rice",
    "price": "120",
    "isVeg": true,
    "isSpecial": false,
    "description": "Basmati rice tempered in pure desi ghee with roasted cumin seeds.",
    "image": "/dishes/jeera-rice.jpg"
  },
  {
    "id": "dish-209",
    "name": "Onion Tomato Jeera Rice",
    "category": "rice",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Cumin rice saut\u00e9ed with caramelised onions and ripe tomatoes.",
    "image": "/dishes/onion-tomato-jeera-rice.jpg"
  },
  {
    "id": "dish-210",
    "name": "Masala Rice",
    "category": "rice",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Spiced seasoned rice cooked with onions, tomatoes, and garam masala.",
    "image": "/dishes/masala-rice.jpg"
  },
  {
    "id": "dish-211",
    "name": "Curd Rice",
    "category": "rice",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Cooling South Indian rice tempered with mustard seeds, curry leaves, and yogurt.",
    "image": "/dishes/curd-rice.jpg"
  },
  {
    "id": "dish-212",
    "name": "Lemon Rice",
    "category": "rice",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Zesty yellow rice tempered with mustard, roasted peanuts, and fresh lemon juice.",
    "image": "/dishes/lemon-rice.jpg"
  },
  {
    "id": "dish-213",
    "name": "Veg Pulao",
    "category": "rice",
    "price": "210",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fragrant basmati rice cooked with fresh seasonal garden vegetables.",
    "image": "/dishes/veg-pulao.jpg"
  },
  {
    "id": "dish-214",
    "name": "Matar Pulao",
    "category": "rice",
    "price": "210",
    "isVeg": true,
    "isSpecial": false,
    "description": "Basmati rice simmered with sweet green peas and whole aromatic spices.",
    "image": "/dishes/matar-pulao.jpg"
  },
  {
    "id": "dish-215",
    "name": "Paneer Pulao",
    "category": "rice",
    "price": "230",
    "isVeg": true,
    "isSpecial": false,
    "description": "Basmati rice gently tossed with golden paneer cubes and mild spices.",
    "image": "/dishes/paneer-pulao.jpg"
  },
  {
    "id": "dish-216",
    "name": "Biryani Rice",
    "category": "biryani",
    "price": "200",
    "isVeg": true,
    "isSpecial": false,
    "description": "Aromatic basmati rice cooked with biryani spices, saffron, and ghee.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-217",
    "name": "Veg Biryani",
    "category": "biryani",
    "price": "220",
    "isVeg": true,
    "isSpecial": false,
    "description": "Layered basmati rice and vegetables slow cooked on dum with mint and saffron.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-218",
    "name": "Veg Hyderabadi Biryani",
    "category": "biryani",
    "price": "240",
    "isVeg": true,
    "isSpecial": false,
    "description": "Spicy Hyderabadi style vegetable biryani with green chillies and herbs.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-219",
    "name": "Paneer Tikka Biryani",
    "category": "biryani",
    "price": "260",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fragrant basmati rice layered with charcoal-grilled paneer tikkas.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-220",
    "name": "Egg Biryani",
    "category": "biryani",
    "price": "240",
    "isVeg": false,
    "isSpecial": false,
    "description": "Layered basmati rice dum cooked with spiced boiled eggs and fried onions.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-221",
    "name": "Chicken Fry Biryani (Half / Full)",
    "category": "biryani",
    "price": "160 / 280",
    "isVeg": false,
    "isSpecial": false,
    "description": "Flavourful biryani rice served with crispy spiced chicken pieces (Half \u20b9160 / Full \u20b9280).",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-222",
    "name": "Chicken Dum Biryani (Half / Full)",
    "category": "biryani",
    "price": "180 / 320",
    "isVeg": false,
    "isSpecial": true,
    "description": "Authentic long-grain basmati rice and tender chicken slow-cooked on dum (Half \u20b9180 / Full \u20b9320).",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-223",
    "name": "Chicken Hyderabadi Biryani (Half / Full)",
    "category": "biryani",
    "price": "190 / 330",
    "isVeg": false,
    "isSpecial": false,
    "description": "Spicy Hyderabadi layered chicken biryani with mint and saffron (Half \u20b9190 / Full \u20b9330).",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-224",
    "name": "Mutton Biryani (Half / Full)",
    "category": "biryani",
    "price": "220 / 370",
    "isVeg": false,
    "isSpecial": true,
    "description": "Succulent mutton pieces dum cooked with long basmati rice and saffron (Half \u20b9220 / Full \u20b9370).",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-225",
    "name": "Prawn Biryani",
    "category": "biryani",
    "price": "320",
    "isVeg": false,
    "isSpecial": false,
    "description": "Coastal delicacy of plump spiced prawns dum-cooked with basmati rice.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-226",
    "name": "Plain Dal",
    "category": "dal",
    "price": "120",
    "isVeg": true,
    "isSpecial": false,
    "description": "Simple, comforting boiled yellow lentils seasoned with salt and turmeric.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-227",
    "name": "Dal Fry",
    "category": "dal",
    "price": "140",
    "isVeg": true,
    "isSpecial": false,
    "description": "Yellow toor dal cooked with onions, tomatoes, green chillies, and butter.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-228",
    "name": "Dal Punjabi Tadka",
    "category": "dal",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Yellow lentils tempered in smoking ghee with cumin, garlic, and dry red chillies.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-229",
    "name": "Dal Makhani",
    "category": "dal",
    "price": "200",
    "isVeg": true,
    "isSpecial": true,
    "description": "Slow-simmered whole black lentils cooked overnight with butter and fresh cream.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-230",
    "name": "Dal Handi",
    "category": "dal",
    "price": "180",
    "isVeg": true,
    "isSpecial": false,
    "description": "Lentils slow cooked in an earthen pot with roasted whole spices.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-231",
    "name": "Dal Kolhapuri",
    "category": "dal",
    "price": "200",
    "isVeg": true,
    "isSpecial": false,
    "description": "Spicy lentil preparation cooked with fiery Kolhapuri red chilli paste.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-232",
    "name": "Dal Khichdi",
    "category": "dal",
    "price": "220",
    "isVeg": true,
    "isSpecial": false,
    "description": "Wholesome, soothing rice and moong dal preparation with mild ghee tempering.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-233",
    "name": "Dal Chakhna",
    "category": "dal",
    "price": "220",
    "isVeg": true,
    "isSpecial": false,
    "description": "Spiced dry roasted lentil specialty ideal as evening accompaniment.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-234",
    "name": "Tava Roti",
    "category": "bread",
    "price": "25",
    "isVeg": true,
    "isSpecial": false,
    "description": "Fresh whole wheat flatbread puffed on iron tava.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-235",
    "name": "Tava Butter Roti",
    "category": "bread",
    "price": "30",
    "isVeg": true,
    "isSpecial": false,
    "description": "Tava puffed whole wheat roti brushed with fresh butter.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-236",
    "name": "Tandoori Roti",
    "category": "bread",
    "price": "30",
    "isVeg": true,
    "isSpecial": false,
    "description": "Whole wheat flatbread freshly baked in traditional clay oven.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-237",
    "name": "Tandoori Butter Roti",
    "category": "bread",
    "price": "35",
    "isVeg": true,
    "isSpecial": false,
    "description": "Clay oven baked whole wheat roti finished with melted butter.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-238",
    "name": "Plain Naan",
    "category": "bread",
    "price": "40",
    "isVeg": true,
    "isSpecial": false,
    "description": "Soft, puffy refined flour leavened bread baked in tandoor.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-239",
    "name": "Butter Naan",
    "category": "bread",
    "price": "50",
    "isVeg": true,
    "isSpecial": true,
    "description": "Clay oven baked naan generously brushed with pure butter.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-240",
    "name": "Garlic Naan",
    "category": "bread",
    "price": "80",
    "isVeg": true,
    "isSpecial": true,
    "description": "Tandoori naan topped with roasted minced garlic and coriander, brushed with butter.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-241",
    "name": "Missi Roti",
    "category": "bread",
    "price": "60",
    "isVeg": true,
    "isSpecial": false,
    "description": "Gram flour and whole wheat bread seasoned with carom seeds and fenugreek.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-242",
    "name": "Plain Paratha",
    "category": "bread",
    "price": "50",
    "isVeg": true,
    "isSpecial": false,
    "description": "Layered wheat bread baked on griddle with ghee.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-243",
    "name": "Lachha Paratha",
    "category": "bread",
    "price": "60",
    "isVeg": true,
    "isSpecial": false,
    "description": "Multi-layered spiral whole wheat bread brushed with butter.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-244",
    "name": "Aloo Paratha",
    "category": "bread",
    "price": "70",
    "isVeg": true,
    "isSpecial": false,
    "description": "Flatbread stuffed with spiced mashed potatoes, grilled with butter.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-245",
    "name": "Stuff Garlic Kulcha",
    "category": "bread",
    "price": "70",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crisp tandoori kulcha stuffed with seasoned garlic and herbs.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-246",
    "name": "Stuff Masala Kulcha",
    "category": "bread",
    "price": "70",
    "isVeg": true,
    "isSpecial": false,
    "description": "Flaky kulcha stuffed with spiced potato and onion masala.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-247",
    "name": "Stuff Paneer Kulcha",
    "category": "bread",
    "price": "100",
    "isVeg": true,
    "isSpecial": false,
    "description": "Amritsari style kulcha stuffed with seasoned crumbled cottage cheese.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-248",
    "name": "Cheese Naan",
    "category": "bread",
    "price": "100",
    "isVeg": true,
    "isSpecial": false,
    "description": "Tandoori naan stuffed with molten mozzarella cheese.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-249",
    "name": "Cheese Garlic Naan",
    "category": "bread",
    "price": "120",
    "isVeg": true,
    "isSpecial": true,
    "description": "Decadent naan stuffed with melted cheese and topped with roasted garlic.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-250",
    "name": "French Fry",
    "category": "live-counter",
    "price": "140",
    "isVeg": true,
    "isSpecial": false,
    "description": "Golden, salted crispy potato batons served with ketchup.",
    "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-251",
    "name": "Peri Peri Fries",
    "category": "live-counter",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crispy French fries tossed in spicy African peri peri seasoning.",
    "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-252",
    "name": "Chicken Popcorn",
    "category": "live-counter",
    "price": "200",
    "isVeg": false,
    "isSpecial": false,
    "description": "Bite-sized tender chicken nuggets fried to crunchy golden brown.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-253",
    "name": "Cheese Ball",
    "category": "live-counter",
    "price": "220",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crispy fried golden croquettes filled with molten cheese.",
    "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-254",
    "name": "Cheese Corn Ball",
    "category": "live-counter",
    "price": "230",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crispy crumbed balls filled with gooey cheese and sweet corn.",
    "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-255",
    "name": "Veg Cheese Burger",
    "category": "live-counter",
    "price": "100",
    "isVeg": true,
    "isSpecial": false,
    "description": "Spiced vegetable patty topped with melted cheese, lettuce, and mayo in toasted bun.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-256",
    "name": "Classic Veg Burger",
    "category": "live-counter",
    "price": "120",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crispy spiced vegetable patty with cucumber, tomato, and burger sauce.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-257",
    "name": "Double Deck Burger",
    "category": "live-counter",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Double layered burger with two patties, cheese slices, and special sauce.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-258",
    "name": "Chicken Burger",
    "category": "live-counter",
    "price": "250",
    "isVeg": false,
    "isSpecial": false,
    "description": "Crispy seasoned chicken patty in a toasted sesame bun with lettuce and mayo.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-259",
    "name": "Chicken Cheese Burger",
    "category": "live-counter",
    "price": "290",
    "isVeg": false,
    "isSpecial": false,
    "description": "Crisp chicken patty loaded with melted cheddar cheese slice and garlic sauce.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-260",
    "name": "Chicken Cheese Pizza",
    "category": "live-counter",
    "price": "340",
    "isVeg": false,
    "isSpecial": false,
    "description": "Crispy hand-stretched crust topped with seasoned chicken and mozzarella.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-261",
    "name": "Chicken Mexican Pizza",
    "category": "live-counter",
    "price": "380",
    "isVeg": false,
    "isSpecial": true,
    "description": "Loaded chicken chunks, jalape\u00f1os, sweet corn, and double mozzarella cheese.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-262",
    "name": "Cheese Pizza",
    "category": "live-counter",
    "price": "260",
    "isVeg": true,
    "isSpecial": false,
    "description": "Simple delicious pizza covered in melted 100% mozzarella cheese.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-263",
    "name": "Cheese Corn Pizza",
    "category": "live-counter",
    "price": "299",
    "isVeg": true,
    "isSpecial": false,
    "description": "Golden sweet corn kernels and melted mozzarella on tomato herb base.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-264",
    "name": "Margherita Pizza",
    "category": "live-counter",
    "price": "280",
    "isVeg": true,
    "isSpecial": false,
    "description": "Classic Italian pizza with tomato sauce, mozzarella, and dried oregano.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-265",
    "name": "Mushroom Pizza",
    "category": "live-counter",
    "price": "299",
    "isVeg": true,
    "isSpecial": false,
    "description": "Saut\u00e9ed button mushrooms, herbs, and melted mozzarella cheese.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-266",
    "name": "Veg Pizza",
    "category": "live-counter",
    "price": "299",
    "isVeg": true,
    "isSpecial": false,
    "description": "Topped with bell peppers, onions, tomatoes, sweet corn, and cheese.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-267",
    "name": "Mexican Pizza",
    "category": "live-counter",
    "price": "300",
    "isVeg": true,
    "isSpecial": false,
    "description": "Spicy pizza topped with jalape\u00f1os, onions, crisp capsicum, and herbs.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-268",
    "name": "Paneer Tandoori Pizza",
    "category": "live-counter",
    "price": "320",
    "isVeg": true,
    "isSpecial": true,
    "description": "Tandoori spiced paneer cubes, bell peppers, onions, and melted mozzarella.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-269",
    "name": "Indian Masala Pasta",
    "category": "pasta-sandwich-maggi",
    "price": "240",
    "isVeg": true,
    "isSpecial": false,
    "description": "Penne pasta tossed in spicy Indian onion-tomato masala with herbs.",
    "image": "/dishes/indian-masala-pasta.jpg"
  },
  {
    "id": "dish-270",
    "name": "White Sauce Pasta",
    "category": "pasta-sandwich-maggi",
    "price": "250",
    "isVeg": true,
    "isSpecial": false,
    "description": "Penne pasta in creamy b\u00e9chamel cheese sauce with sweet corn and bell peppers.",
    "image": "/dishes/white-sauce-pasta.jpg"
  },
  {
    "id": "dish-271",
    "name": "Red Sauce Pasta",
    "category": "pasta-sandwich-maggi",
    "price": "260",
    "isVeg": true,
    "isSpecial": false,
    "description": "Penne pasta tossed in tangy Italian marinara tomato basil sauce.",
    "image": "/dishes/red-sauce-pasta.jpg"
  },
  {
    "id": "dish-272",
    "name": "Veg Grilled Sandwich",
    "category": "pasta-sandwich-maggi",
    "price": "100",
    "isVeg": true,
    "isSpecial": false,
    "description": "Toasted golden sandwich stuffed with sliced cucumbers, tomatoes, and mint chutney.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-273",
    "name": "Veg Cheese Grilled Sandwich",
    "category": "pasta-sandwich-maggi",
    "price": "110",
    "isVeg": true,
    "isSpecial": false,
    "description": "Grilled golden sandwich with spiced vegetables and melted mozzarella cheese.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-274",
    "name": "Potato Sandwich",
    "category": "pasta-sandwich-maggi",
    "price": "100",
    "isVeg": true,
    "isSpecial": false,
    "description": "Toasted sandwich with seasoned potato masala filling and green chutney.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-275",
    "name": "Veg Mayo Sandwich",
    "category": "pasta-sandwich-maggi",
    "price": "130",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crunchy vegetables tossed in creamy mayonnaise spread in bread slices.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-276",
    "name": "Cheese Corn Sandwich",
    "category": "pasta-sandwich-maggi",
    "price": "130",
    "isVeg": true,
    "isSpecial": false,
    "description": "Toasted bread loaded with sweet corn kernels and melted cheese.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-277",
    "name": "Mexican Sandwich",
    "category": "pasta-sandwich-maggi",
    "price": "140",
    "isVeg": true,
    "isSpecial": false,
    "description": "Grilled sandwich with jalape\u00f1os, sweet corn, spicy salsa, and cheese.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-278",
    "name": "Peri Peri Masala Sandwich",
    "category": "pasta-sandwich-maggi",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Zesty spiced sandwich tossed in spicy peri peri seasoning.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-279",
    "name": "Club Sandwich",
    "category": "pasta-sandwich-maggi",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Triple-decker toasted sandwich with vegetables, cheese, and french fries.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-280",
    "name": "Plain Maggi",
    "category": "pasta-sandwich-maggi",
    "price": "60",
    "isVeg": true,
    "isSpecial": false,
    "description": "Steaming hot classic 2-minute comfort noodles.",
    "image": "/dishes/plain-maggi.jpg"
  },
  {
    "id": "dish-281",
    "name": "Cheese Corn Maggi",
    "category": "pasta-sandwich-maggi",
    "price": "80",
    "isVeg": true,
    "isSpecial": false,
    "description": "Hot Maggi noodles topped with sweet corn and melted cheese.",
    "image": "/dishes/cheese-corn-maggi.jpg"
  },
  {
    "id": "dish-282",
    "name": "Indian Masala Maggi",
    "category": "pasta-sandwich-maggi",
    "price": "80",
    "isVeg": true,
    "isSpecial": false,
    "description": "Maggi noodles tossed with saut\u00e9ed onions, tomatoes, and green peas.",
    "image": "/dishes/indian-masala-maggi.jpg"
  },
  {
    "id": "dish-283",
    "name": "Cheese Maggi",
    "category": "pasta-sandwich-maggi",
    "price": "90",
    "isVeg": true,
    "isSpecial": false,
    "description": "Comforting Maggi noodles blended with creamy melted cheese.",
    "image": "/dishes/cheese-maggi.jpg"
  },
  {
    "id": "dish-284",
    "name": "Dry Fry Maggi",
    "category": "pasta-sandwich-maggi",
    "price": "120",
    "isVeg": true,
    "isSpecial": false,
    "description": "Stir-fried dry Maggi noodles with crunchy vegetables and spices.",
    "image": "/dishes/dry-fry-maggi.jpg"
  },
  {
    "id": "dish-285",
    "name": "Paneer Tikka Maggi",
    "category": "pasta-sandwich-maggi",
    "price": "130",
    "isVeg": true,
    "isSpecial": false,
    "description": "Maggi noodles topped with grilled spiced paneer tikka chunks.",
    "image": "/dishes/paneer-tikka-maggi.jpg"
  },
  {
    "id": "dish-286",
    "name": "Chhole Bhature",
    "category": "snacks",
    "price": "150",
    "isVeg": true,
    "isSpecial": true,
    "description": "Spicy chickpea curry served with two puffed golden bhaturas, onions, and pickle.",
    "image": "/dishes/chhole-bhature.jpg"
  },
  {
    "id": "dish-287",
    "name": "Extra Bhature (Per Piece)",
    "category": "snacks",
    "price": "40",
    "isVeg": true,
    "isSpecial": false,
    "description": "Single piping hot balloon-puffed bhatura.",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-288",
    "name": "Onion Pakoda",
    "category": "snacks",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crispy sliced onion fritters fried in spiced gram flour batter.",
    "image": "/dishes/onion-pakoda.jpg"
  },
  {
    "id": "dish-289",
    "name": "Onion Ring Pakoda",
    "category": "snacks",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Golden fried onion rings seasoned with chaat masala.",
    "image": "/dishes/onion-ring-pakoda.jpg"
  },
  {
    "id": "dish-290",
    "name": "Mix Pakoda",
    "category": "snacks",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Assortment of potato, onion, and vegetable fritters served with chutney.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-291",
    "name": "Potato Pakoda",
    "category": "snacks",
    "price": "150",
    "isVeg": true,
    "isSpecial": false,
    "description": "Thin sliced potatoes dipped in seasoned gram flour batter and golden fried.",
    "image": "/dishes/potato-pakoda.jpg"
  },
  {
    "id": "dish-292",
    "name": "Veg Cutlet",
    "category": "snacks",
    "price": "180",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crispy crumb-coated vegetable patties served with mint chutney.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "dish-293",
    "name": "Peanut Salad",
    "category": "snacks",
    "price": "180",
    "isVeg": true,
    "isSpecial": false,
    "description": "Boiled peanuts tossed with chopped onions, tomatoes, coriander, and lime.",
    "image": "/dishes/peanut-salad.jpg"
  },
  {
    "id": "dish-294",
    "name": "Peanut Fry",
    "category": "snacks",
    "price": "160",
    "isVeg": true,
    "isSpecial": false,
    "description": "Crunchy roasted peanuts tossed with spices and chatpata masala.",
    "image": "/dishes/peanut-fry.jpg"
  },
  {
    "id": "dish-295",
    "name": "Paneer Pakoda",
    "category": "snacks",
    "price": "200",
    "isVeg": true,
    "isSpecial": false,
    "description": "Soft paneer cubes dipped in spiced gram flour batter and fried golden.",
    "image": "/dishes/paneer-pakoda.jpg"
  },
  {
    "id": "dish-296",
    "name": "Kaju Fry",
    "category": "snacks",
    "price": "220",
    "isVeg": true,
    "isSpecial": false,
    "description": "Whole cashew nuts fried in pure ghee and seasoned with black pepper and salt.",
    "image": "/dishes/kaju-fry.jpg"
  },
  {
    "id": "dish-297",
    "name": "Hot Gulab Jamun",
    "category": "dessert",
    "price": "80",
    "isVeg": true,
    "isSpecial": false,
    "description": "Two traditional khoya dumplings soaked in warm cardamom sugar syrup.",
    "image": "/dishes/hot-gulab-jamun.jpg"
  },
  {
    "id": "dish-298",
    "name": "Hot Gulab Jamun with Ice Cream",
    "category": "dessert",
    "price": "150",
    "isVeg": true,
    "isSpecial": true,
    "description": "Warm melt-in-mouth gulab jamuns served with chilled vanilla bean ice cream.",
    "image": "/dishes/hot-gulab-jamun-ice-cream.jpg"
  },
  {
    "id": "dish-299",
    "name": "Choice of Ice Cream",
    "category": "dessert",
    "price": "100",
    "isVeg": true,
    "isSpecial": false,
    "description": "Two generous scoops of vanilla, chocolate, butterscotch, or strawberry ice cream.",
    "image": "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop"
  }
];
