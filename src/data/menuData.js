export const categories = [
  {
    id: "all",
    name: "Full Menu",
    tagline: "Explore Shanvi's complete culinary offerings in Jagdalpur"
  },
  {
    id: "tandoor",
    name: "Tandoor Kebabs & Tikkas",
    tagline: "Clay oven roasted skewers, spiced kebabs & tikkas"
  },
  {
    id: "chinese-starters",
    name: "Chinese Starters",
    tagline: "Wok-tossed chilli paneer, crispy chicken, lollipops & corn"
  },
  {
    id: "main-course-veg",
    name: "Main Course (Veg)",
    tagline: "Rich paneer gravies, mushroom delicacies & seasonal vegetables"
  },
  {
    id: "main-course-nonveg",
    name: "Main Course (Non-Veg)",
    tagline: "Desi chicken curry, tender mutton rogan josh, fish & prawns"
  },
  {
    id: "biryani-rice",
    name: "Biryani & Rice",
    tagline: "Fragrant dum biryanis, fried rice, hakka noodles & pulao"
  },
  {
    id: "dal-breads",
    name: "Dal & Tandoori Breads",
    tagline: "Dal makhani, tadka, butter naan, lachha paratha & stuffed kulchas"
  },
  {
    id: "live-counter",
    name: "Live Counter, Pizzas & Burgers",
    tagline: "Freshly baked pizzas, crispy fries, loaded burgers & cheese balls"
  },
  {
    id: "pasta-sandwiches",
    name: "Sandwiches, Pasta & Maggi",
    tagline: "Grilled club sandwiches, white & red sauce pasta, masala maggi"
  },
  {
    id: "snacks-soups",
    name: "Snacks, Soups & Salads",
    tagline: "Chhole bhature, crispy pakodas, manchow soups & raita"
  },
  {
    id: "mocktails-beverages",
    name: "Mocktails, Shakes & Drinks",
    tagline: "Refreshing mojitos, tropical mocktails, thick shakes, lassi & tea"
  },
  {
    id: "dessert",
    name: "Desserts & Ice Cream",
    tagline: "Warm gulab jamun, royal sundaes & choice of ice cream"
  }
];

export const dietaryFilters = [
  { id: "all", label: "All Items" },
  { id: "Pure Veg", label: "Pure Veg", isVeg: true },
  { id: "Non-Veg", label: "Non-Veg", isVeg: false },
  { id: "Chef's Signature", label: "Chef's Special" }
];

export const menuItems = [
  // ==========================================
  // 1. MOCKTAILS & MOJITOS & BEVERAGES & SHAKES (Pages 1, 2, 3)
  // ==========================================
  {
    id: "mock-1",
    category: "mocktails-beverages",
    title: "Sunrise Mocktail",
    price: 170,
    isVeg: true,
    tags: ["Pure Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Layered citrus delight with grenadine, orange nectar, and sparkling fizz.",
    description: "A visually stunning layered mocktail with chilled tropical orange juice, sweet pomegranate grenadine, and a splash of sparkling soda with a fresh orange slice garnish.",
    prepTime: "8 mins"
  },
  {
    id: "mock-2",
    category: "mocktails-beverages",
    title: "Pineapple Blossom Mocktail",
    price: 160,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Fresh pineapple juice infused with blossom extract and sparkling bubbles.",
    description: "Cold-pressed fresh pineapple nectar blended with gentle floral botanical syrup, lime juice, and chilled mineral soda over crushed ice.",
    prepTime: "8 mins"
  },
  {
    id: "mock-3",
    category: "mocktails-beverages",
    title: "Shirley Temple Mocktail",
    price: 130,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Classic refreshing blend of ginger ale, sweet grenadine, and maraschino cherries.",
    description: "The timeless American resort refresher: aromatic ginger fizz kissed with ruby grenadine and served with chilled maraschino cherries.",
    prepTime: "6 mins"
  },
  {
    id: "mock-4",
    category: "mocktails-beverages",
    title: "Blue Blossom Mocktail",
    price: 130,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Vibrant blue curaçao syrup, lemon fizz, and garden mint sprigs.",
    description: "An electric blue refresher prepared with non-alcoholic blue curaçao, fresh squeezed lime, mint leaves, and effervescent lemon tonic.",
    prepTime: "6 mins"
  },
  {
    id: "mock-5",
    category: "mocktails-beverages",
    title: "Mango Mule Mocktail",
    price: 120,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Sweet mango pulp, spicy ginger essence, and fresh lime juice.",
    description: "Ripe Alphonso mango puree muddled with spicy ginger reduction, fresh lime, and topped with chilled crushed ice.",
    prepTime: "6 mins"
  },
  {
    id: "mock-6",
    category: "mocktails-beverages",
    title: "Black Dog Mocktail",
    price: 130,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Dark berry reduction, cola splash, and roasted cumin citrus.",
    description: "Intense dark berry cooler infused with aromatic spices, fresh lemon slice, and a sparkling fizzy finish.",
    prepTime: "6 mins"
  },
  {
    id: "mock-7",
    category: "mocktails-beverages",
    title: "Darknight Mocktail",
    price: 130,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Midnight grape reduction, blackcurrant, and crushed ice.",
    description: "Deep purple grape and wild blackcurrant cooler layered with lime soda and chilled mountain ice.",
    prepTime: "6 mins"
  },
  // Mojitos
  {
    id: "moj-1",
    category: "mocktails-beverages",
    title: "Paan Mojito",
    price: 100,
    isVeg: true,
    tags: ["Pure Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Authentic betel leaf essence, gulkand sweetness, lime, and fresh mint.",
    description: "A signature Bastar resort specialty: real betel leaf extract, aromatic rose gulkand, muddled mint, and sparkling club soda.",
    prepTime: "6 mins"
  },
  {
    id: "moj-2",
    category: "mocktails-beverages",
    title: "Blue Lagoon Mojito",
    price: 90,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Blue curaçao, crushed garden mint, freshly squeezed lime, and soda.",
    description: "Refreshing resort poolside classic with muddled mint leaves, lemon wedges, and blue lagoon syrup.",
    prepTime: "5 mins"
  },
  {
    id: "moj-3",
    category: "mocktails-beverages",
    title: "Pina Colada Mojito",
    price: 90,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Creamy coconut milk, sweet pineapple juice, and chilled soda.",
    description: "Tropical twist combining coconut cream, pineapple juice, and cooling mint leaves.",
    prepTime: "5 mins"
  },
  {
    id: "moj-4",
    category: "mocktails-beverages",
    title: "Green Apple Mojito",
    price: 90,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Crisp green apple syrup, fresh mint, lime juice, and soda.",
    description: "Zesty and crisp green apple infused with crushed garden mint and sparkling mineral soda.",
    prepTime: "5 mins"
  },
  {
    id: "moj-5",
    category: "mocktails-beverages",
    title: "Watermelon Mojito",
    price: 90,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Fresh crushed sweet watermelon, mint leaves, and lime fizz.",
    description: "Refreshing summer cooler with fresh juicy watermelon chunks, lime juice, and mint.",
    prepTime: "5 mins"
  },
  {
    id: "moj-6",
    category: "mocktails-beverages",
    title: "Black Currant Mojito",
    price: 100,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Sweet-tart black currant syrup, lemon chunks, and mint.",
    description: "Intense black currant extract muddled with lime wedges and chilled club soda.",
    prepTime: "5 mins"
  },
  {
    id: "moj-7",
    category: "mocktails-beverages",
    title: "Pink Lady Mojito",
    price: 100,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Delicate pink berry syrup, rose essence, and sparkling soda.",
    description: "Subtle floral and berry notes combined with fresh mint and citrus.",
    prepTime: "5 mins"
  },
  // Shakes & Beverages
  {
    id: "shk-1",
    category: "mocktails-beverages",
    title: "Cold Coffee with Ice Cream",
    price: 200,
    isVeg: true,
    tags: ["Pure Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Rich creamy espresso shake topped with a scoop of vanilla bean ice cream.",
    description: "Hand-blended rich Arabica coffee with chilled milk and chocolate drizzle, crowned with a generous scoop of vanilla ice cream.",
    prepTime: "8 mins"
  },
  {
    id: "shk-2",
    category: "mocktails-beverages",
    title: "KitKat Shake",
    price: 150,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Crunchy KitKat wafer bars blended into velvety chocolate milk.",
    description: "Creamy chocolate shake loaded with crushed crispy KitKat wafer fingers and chocolate syrup.",
    prepTime: "8 mins"
  },
  {
    id: "shk-3",
    category: "mocktails-beverages",
    title: "Oreo Shake",
    price: 150,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Rich vanilla shake blended with dark cocoa Oreo biscuits.",
    description: "Thick, creamy shake with crumbled Oreo cookies and chocolate drizzle.",
    prepTime: "8 mins"
  },
  {
    id: "shk-4",
    category: "mocktails-beverages",
    title: "Cold Coffee",
    price: 150,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Chilled whipped coffee with milk, sugar, and chocolate lining.",
    description: "Classic creamy cold coffee served chilled in a tall glass.",
    prepTime: "6 mins"
  },
  {
    id: "shk-5",
    category: "mocktails-beverages",
    title: "Mango Shake / Strawberry Shake",
    price: 160,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Rich fruit pulp blended with thick dairy milk.",
    description: "Sweet, refreshing seasonal fruit shake prepared thick and creamy.",
    prepTime: "6 mins"
  },
  {
    id: "bev-1",
    category: "mocktails-beverages",
    title: "Special Sweet Lassi / Mango Lassi",
    price: 80,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Traditional churned curd lassi with malai and cardamom (Sweet ₹70 / Mango ₹80).",
    description: "Thick homemade curd churned with sugar, fragrant green cardamom, and rich malai topping.",
    prepTime: "5 mins"
  },
  {
    id: "bev-2",
    category: "mocktails-beverages",
    title: "Fresh Lime Soda / Water",
    price: 50,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Freshly squeezed lime with sweet, salted, or mixed soda / water.",
    description: "Refreshing classic thirst quencher made with freshly squeezed lemons (Water ₹40 / Soda ₹50).",
    prepTime: "5 mins"
  },
  {
    id: "bev-3",
    category: "mocktails-beverages",
    title: "Masala Chai / Coffee",
    price: 30,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Fresh brewed tea infused with ginger, cardamom, or hot filter coffee (Tea ₹30 / Coffee ₹50).",
    description: "Steaming aromatic Indian hot beverages prepared fresh to order.",
    prepTime: "6 mins"
  },

  // ==========================================
  // 2. TANDOOR KEBABS & TIKKAS (Page 7)
  // ==========================================
  {
    id: "tan-1",
    category: "tandoor",
    title: "Tandoori Chicken (Half / Full)",
    price: 340,
    isVeg: false,
    tags: ["Non-Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Whole chicken marinated in mustard oil, yogurt, Kashmiri deghi mirch, roasted over charcoal (Half ₹340 / Full ₹600).",
    description: "The royal jewel of the tandoor. Tender spring chicken on bone marinated in hung curd, freshly ground garam masala, ginger-garlic paste, and roasted over glowing charcoal embers.",
    prepTime: "25-30 mins"
  },
  {
    id: "tan-2",
    category: "tandoor",
    title: "Tangdi Kebab (4 Pcs)",
    price: 360,
    isVeg: false,
    tags: ["Non-Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Four juicy chicken drumsticks marinated in rich cashew paste and tandoori spices.",
    description: "Selected plump chicken drumsticks marinated in a rich mixture of cashew paste, cream, roasted spices, and roasted in the clay tandoor until tender and charred.",
    prepTime: "25 mins"
  },
  {
    id: "tan-3",
    category: "tandoor",
    title: "Chicken Tikka / Hariyali Tikka",
    price: 330,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Boneless chicken cubes in spicy red marinade or vibrant fresh mint & coriander paste (Tikka ₹330 / Hariyali ₹350).",
    description: "Succulent boneless chicken morsels skewers skewered and roasted to juicy perfection in our clay oven.",
    prepTime: "20-25 mins"
  },
  {
    id: "tan-4",
    category: "tandoor",
    title: "Afghani Chicken Tikka",
    price: 340,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Boneless chicken marinated in cashew cream, cheese, and crushed white pepper.",
    description: "Mild, creamy, and succulent chicken pieces coated with royal cashew cheese cream, roasted gently in the tandoor.",
    prepTime: "20-25 mins"
  },
  {
    id: "tan-5",
    category: "tandoor",
    title: "Chicken Banjara Tikka",
    price: 360,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Chicken pieces infused with roasted cumin, crushed coriander seeds, garlic, and rustic spices.",
    description: "A spicy, earthy country-style chicken tikka seasoned with whole cracked spices and fresh green herbs.",
    prepTime: "25 mins"
  },
  {
    id: "tan-6",
    category: "tandoor",
    title: "Paneer Tikka / Malai Tikka",
    price: 260,
    isVeg: true,
    tags: ["Pure Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Fresh cottage cheese cubes, bell peppers, onions grilled in tandoor (Tikka ₹260 / Malai ₹300).",
    description: "Tender chunks of fresh paneer marinated in spiced yogurt or creamy malai cashew marinade, threaded on skewers with crunchy peppers and onions.",
    prepTime: "18-20 mins"
  },
  {
    id: "tan-7",
    category: "tandoor",
    title: "Paneer Angara Tikka / Lahsuni Tikka",
    price: 290,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Fiery smoked spicy red marinade or rich roasted garlic infused paneer.",
    description: "For spice lovers: charred cottage cheese cubes loaded with smoking hot red spices or golden roasted garlic cloves.",
    prepTime: "18 mins"
  },
  {
    id: "tan-8",
    category: "tandoor",
    title: "Veg Seekh Kebab / Kurkure Kebab",
    price: 270,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Minced vegetable skewers grilled on iron rods (Seekh ₹270 / Kurkure ₹240).",
    description: "Finely minced vegetables, potatoes, and paneer seasoned with aromatic herbs, skewered and crisped to perfection.",
    prepTime: "18 mins"
  },
  {
    id: "tan-9",
    category: "tandoor",
    title: "Veg Hara Bhara Kebab",
    price: 230,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Spinach, green peas, and paneer patties pan-crisped with cashew nut crowns.",
    description: "Healthy and delicious spiced spinach and green pea patties shallow fried with aromatic spices.",
    prepTime: "15 mins"
  },
  {
    id: "tan-10",
    category: "tandoor",
    title: "Mushroom Tikka",
    price: 250,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Plump button mushrooms marinated in aromatic tandoori masala and skewered.",
    description: "Fresh juicy mushrooms coated in rich spiced curd and roasted over charcoal.",
    prepTime: "18 mins"
  },

  // ==========================================
  // 3. CHINESE STARTERS (Pages 4, 5, 6)
  // ==========================================
  {
    id: "chn-1",
    category: "chinese-starters",
    title: "Chicken Lollipop (Dry / Gravy)",
    price: 290,
    isVeg: false,
    tags: ["Non-Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Crispy chicken winglets tossed in fiery Schezwan garlic sauce with spring onions.",
    description: "Crisp-fried frenched chicken winglets tossed in aromatic ginger-garlic sauce, served with homemade hot garlic dip.",
    prepTime: "18 mins"
  },
  {
    id: "chn-2",
    category: "chinese-starters",
    title: "Chicken Chilli (Dry / Gravy)",
    price: 290,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Batter-fried diced chicken tossed with green chillies, capsicum, and dark soya sauce.",
    description: "Indo-Chinese classic: juicy chicken cubes tossed with diced bell peppers, onion petals, and spicy chilli garlic sauce.",
    prepTime: "16 mins"
  },
  {
    id: "chn-3",
    category: "chinese-starters",
    title: "Chicken 555 / Singapuri Stick",
    price: 330,
    isVeg: false,
    tags: ["Non-Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Crispy shredded chicken tossed in sweet, sour, and fiery spiced sauce (555 ₹330 / Singapuri ₹310).",
    description: "A resort favourite: tender strips of chicken tossed in exotic spiced reduction with toasted sesame seeds and fresh curry leaves.",
    prepTime: "18 mins"
  },
  {
    id: "chn-4",
    category: "chinese-starters",
    title: "Fish Roast / Chicken Roast",
    price: 290,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Pan-roasted fish or chicken fillets marinated in roasted whole spices (Fish ₹290 / Chicken ₹260).",
    description: "Tender fish or chicken steaks roasted on hot iron tava with crushed peppercorns and curry leaves.",
    prepTime: "20 mins"
  },
  {
    id: "chn-5",
    category: "chinese-starters",
    title: "Paneer Chilli (Dry / Gravy)",
    price: 220,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Golden paneer cubes tossed with green chillies, onions, capsicum, and soya sauce (Dry ₹220 / Gravy ₹230).",
    description: "Tender cottage cheese cubes wok-tossed with crisp bell peppers, shallots, and spicy soy-chilli glaze.",
    prepTime: "15 mins"
  },
  {
    id: "chn-6",
    category: "chinese-starters",
    title: "Dragon Paneer / Schezwan Paneer",
    price: 240,
    isVeg: true,
    tags: ["Pure Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Crispy paneer fingers glazed in honey-chilli dragon sauce with cashew nuts (Dragon ₹240 / Schezwan ₹250).",
    description: "Battered paneer fingers tossed in fiery Indo-Chinese red dragon sauce with crunchy cashews and scallions.",
    prepTime: "16 mins"
  },
  {
    id: "chn-7",
    category: "chinese-starters",
    title: "Crispy Corn / Corn Chilli",
    price: 220,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Crunchy golden sweet corn kernels tossed with spices, onion, and lime (Crispy ₹220 / Chilli ₹200).",
    description: "Crispy batter-coated American sweet corn kernels tossed with fresh coriander, green chillies, and chaat spices.",
    prepTime: "12 mins"
  },
  {
    id: "chn-8",
    category: "chinese-starters",
    title: "Mushroom Chilli / Mushroom 65",
    price: 210,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Crisp battered button mushrooms tossed in spicy chilli sauce or southern 65 seasoning (Chilli ₹210 / 65 ₹230).",
    description: "Juicy fresh mushrooms fried crisp and tossed with fragrant garlic, curry leaves, and green chillies.",
    prepTime: "15 mins"
  },
  {
    id: "chn-9",
    category: "chinese-starters",
    title: "Veg Manchurian (Dry / Gravy)",
    price: 200,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Minced vegetable dumplings in ginger, garlic, and dark soy sauce (Dry ₹200 / Gravy ₹220).",
    description: "Crispy vegetable balls tossed in rich savoury Indo-Chinese Manchurian sauce garnished with chopped spring onions.",
    prepTime: "15 mins"
  },
  {
    id: "chn-10",
    category: "chinese-starters",
    title: "Honey Potato Chilli / Veg Crispy",
    price: 210,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Crispy potato fingers tossed in sweet honey chilli glaze and toasted sesame (Honey ₹210 / Veg Crispy ₹190).",
    description: "Crunchy fried potato wedges coated in rich honey chilli glaze with a hint of garlic and sesame seeds.",
    prepTime: "14 mins"
  },

  // ==========================================
  // 4. MAIN COURSE - VEG (Pages 8, 9, 10)
  // ==========================================
  {
    id: "mveg-1",
    category: "main-course-veg",
    title: "Paneer Butter Masala",
    price: 270,
    isVeg: true,
    tags: ["Pure Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Soft cottage cheese simmered in a velvety butter, tomato, and cashew nut gravy.",
    description: "Rich, mildly sweet and creamy tomato-cashew makhani gravy loaded with soft paneer cubes, finished with butter and aromatic kasuri methi.",
    prepTime: "20 mins"
  },
  {
    id: "mveg-2",
    category: "main-course-veg",
    title: "Paneer Handi / Kadhai Paneer",
    price: 290,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Paneer cooked in an earthen pot or wok with freshly pounded coriander and bell peppers (Handi ₹290 / Kadhai ₹300).",
    description: "Traditional spicy curry made with fresh cottage cheese, crushed whole coriander seeds, dried red chillies, and bell peppers.",
    prepTime: "20 mins"
  },
  {
    id: "mveg-3",
    category: "main-course-veg",
    title: "Paneer Tikka Masala / Lababdar",
    price: 300,
    isVeg: true,
    tags: ["Pure Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Charcoal grilled paneer tikkas finished in rich onion-tomato masala (Tikka Masala ₹300 / Lababdar ₹280).",
    description: "Smoky tandoor-roasted paneer pieces simmered in luscious lababdar gravy with grated paneer and cream.",
    prepTime: "22 mins"
  },
  {
    id: "mveg-4",
    category: "main-course-veg",
    title: "Palak Paneer / Matar Paneer",
    price: 280,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Fresh spinach puree with garlic and paneer cubes, or classic green peas curry (Palak ₹280 / Matar ₹260).",
    description: "Nutritious garden spinach blanched and pureed with garlic, cumin, and mild spices with soft paneer cubes.",
    prepTime: "18 mins"
  },
  {
    id: "mveg-5",
    category: "main-course-veg",
    title: "Kaju Masala / Kaju Curry",
    price: 250,
    isVeg: true,
    tags: ["Pure Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Golden roasted cashew nuts simmered in royal spiced onion-cashew gravy (Masala ₹250 / Curry ₹240).",
    description: "A rich luxury North Indian curry featuring whole toasted cashews in a thick aromatic golden gravy.",
    prepTime: "20 mins"
  },
  {
    id: "mveg-6",
    category: "main-course-veg",
    title: "Mushroom Masala / Kadhai Mushroom",
    price: 260,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Fresh button mushrooms cooked with onions, tomatoes, and freshly pounded kadhai masala (Masala ₹260 / Kadhai ₹280).",
    description: "Juicy mushrooms cooked in rustic homestyle spiced gravy with capsicum and fresh coriander.",
    prepTime: "18 mins"
  },
  {
    id: "mveg-7",
    category: "main-course-veg",
    title: "Veg Kolhapuri / Veg Handi",
    price: 220,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Assorted garden vegetables in a spicy fiery red Kolhapuri masala or creamy handi (Kolhapuri ₹220 / Handi ₹200).",
    description: "Diced mixed vegetables tossed in roasted coconut and dry red chilli masala.",
    prepTime: "18 mins"
  },
  {
    id: "mveg-8",
    category: "main-course-veg",
    title: "Punjabi Dum Aloo / Kashmiri Dum Aloo",
    price: 230,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Baby potatoes slow cooked in rich spiced curd or tomato gravy (Punjabi ₹230 / Kashmiri ₹210).",
    description: "Golden fried baby potatoes slow-cooked on dum in aromatic gravy scented with fennel and ginger.",
    prepTime: "20 mins"
  },
  {
    id: "mveg-9",
    category: "main-course-veg",
    title: "Bhindi Masala / Bhindi Do Pyaza",
    price: 160,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Tender okra stir-fried with onions, amchur, and fragrant cumin (Masala ₹160 / Do Pyaza ₹180).",
    description: "Freshly sliced ladyfingers sautéed with double portion of caramelized onions and chatpata spices.",
    prepTime: "15 mins"
  },
  {
    id: "mveg-10",
    category: "main-course-veg",
    title: "Methi Matar Malai",
    price: 250,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Fresh fenugreek leaves and sweet green peas simmered in rich white cream gravy.",
    description: "Mild, fragrant, and velvety white gravy prepared with fresh cream, cashews, and aromatic methi leaves.",
    prepTime: "18 mins"
  },

  // ==========================================
  // 5. MAIN COURSE - NON-VEG (Pages 10, 11, 12)
  // ==========================================
  {
    id: "mnon-1",
    category: "main-course-nonveg",
    title: "Desi Chicken Curry (1 KG)",
    price: 1400,
    isVeg: false,
    tags: ["Non-Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Traditional country-style free-range chicken slow-cooked with rustic whole spices in an earthen vessel (Serves 4-5).",
    description: "The crown jewel of Bastar resort dining: authentic local free-range country chicken slow-simmered with crushed garlic, whole black pepper, roasted coriander, and mustard oil for rich rustic aroma.",
    prepTime: "40-45 mins"
  },
  {
    id: "mnon-2",
    category: "main-course-nonveg",
    title: "Chicken Butter Masala",
    price: 360,
    isVeg: false,
    tags: ["Non-Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Tandoori chicken pieces simmered in silky tomato butter makhani gravy with cream.",
    description: "Rich, creamy, and mildly spiced boneless tandoori chicken simmered in velvet smooth cashew-butter gravy with a hint of kasuri methi.",
    prepTime: "22 mins"
  },
  {
    id: "mnon-3",
    category: "main-course-nonveg",
    title: "Chicken Handi / Chicken Kadhai",
    price: 300,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Chicken pieces cooked with coarse ground spices, onions, and bell peppers in a clay handi.",
    description: "Tender chicken cooked with thick onion gravy, fresh green chillies, and freshly roasted whole spices.",
    prepTime: "22 mins"
  },
  {
    id: "mnon-4",
    category: "main-course-nonveg",
    title: "Chicken Hyderabadi / Kolhapuri",
    price: 300,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Flavourful chicken in spicy green herb gravy or fiery Maharashtrian red chilli masala.",
    description: "A choice of spicy regional curries cooked with deep roasted spices and herbs.",
    prepTime: "22 mins"
  },
  {
    id: "mnon-5",
    category: "main-course-nonveg",
    title: "Chicken Mughlai / Chicken Patiala",
    price: 330,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Royal chicken curry enriched with egg ribbon, cashew paste, and aromatic saffron (Mughlai ₹330 / Patiala ₹320).",
    description: "Creamy royal Mughlai preparation loaded with nuts, cream, and tender chicken chunks.",
    prepTime: "25 mins"
  },
  {
    id: "mnon-6",
    category: "main-course-nonveg",
    title: "Mutton Rogan Josh",
    price: 380,
    isVeg: false,
    tags: ["Non-Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Tender goat meat slow-braised in Kashmiri dried chillies, fennel powder, and ratanjyot.",
    description: "Melt-in-mouth mutton cuts braised for hours in fragrant aromatic Kashmiri spices, hung curd, and whole cardamom.",
    prepTime: "28 mins"
  },
  {
    id: "mnon-7",
    category: "main-course-nonveg",
    title: "Mutton Handi / Mutton Kadhai",
    price: 360,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Tender mutton pieces stewed with onions, garlic, and freshly cracked black pepper.",
    description: "Slow-cooked mutton handi prepared in traditional pot style with rich semi-dry gravy.",
    prepTime: "28 mins"
  },
  {
    id: "mnon-8",
    category: "main-course-nonveg",
    title: "Mutton Keema Masala",
    price: 360,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Spiced minced mutton sautéed with onions, green peas, and fresh mint.",
    description: "Finely minced goat meat slow cooked with aromatic whole spices, tomatoes, and ginger.",
    prepTime: "25 mins"
  },
  {
    id: "mnon-9",
    category: "main-course-nonveg",
    title: "Prawn Masala / Prawn Curry",
    price: 320,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Fresh coastal prawns simmered in tangy coconut or onion-tomato masala (Masala ₹320 / Curry ₹310).",
    description: "Plump prawns cooked in a mildly spiced gravy with curry leaves and mustard seeds.",
    prepTime: "20 mins"
  },
  {
    id: "mnon-10",
    category: "main-course-nonveg",
    title: "Fish Masala / Fish Onion Fry",
    price: 300,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Fish steaks cooked in homestyle spiced onion-tomato gravy (Masala ₹300 / Onion Fry ₹310).",
    description: "Fresh river fish steaks spiced and pan-fried with onions and fresh green herbs.",
    prepTime: "20 mins"
  },
  {
    id: "mnon-11",
    category: "main-course-nonveg",
    title: "Egg Curry / Egg Bhurji Curry",
    price: 180,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Boiled golden eggs simmered in spiced onion gravy or scrambled curry (Egg Curry ₹180 / Bhurji Curry ₹200).",
    description: "Two pan-fried eggs served in a hearty spiced gravy with chopped coriander.",
    prepTime: "15 mins"
  },

  // ==========================================
  // 6. BIRYANI & RICE (Pages 7, 8, 12, 13)
  // ==========================================
  {
    id: "bir-1",
    category: "biryani-rice",
    title: "Chicken Dum Biryani (Half / Full)",
    price: 180,
    isVeg: false,
    tags: ["Non-Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Fragrant basmati rice layered with marinated chicken, saffron, and fried onions (Half ₹180 / Full ₹320).",
    description: "Long-grain basmati rice and marinated chicken slow cooked under dough-sealed handi with royal saffron milk, mint, and desi ghee. Served with chilled raita and salan.",
    prepTime: "25 mins"
  },
  {
    id: "bir-2",
    category: "biryani-rice",
    title: "Chicken Hyderabadi Biryani (Half / Full)",
    price: 190,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Spicy Hyderabadi style layered biryani with fiery green chillies and mint (Half ₹190 / Full ₹330).",
    description: "Authentic spicy dum biryani with marinated chicken and spiced basmati rice.",
    prepTime: "25 mins"
  },
  {
    id: "bir-3",
    category: "biryani-rice",
    title: "Mutton Biryani (Half / Full)",
    price: 220,
    isVeg: false,
    tags: ["Non-Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Slow-cooked succulent mutton layered with long basmati rice and saffron (Half ₹220 / Full ₹370).",
    description: "Royal feast: tender mutton pieces dum cooked with basmati rice, caramelized onions, and whole spices.",
    prepTime: "28 mins"
  },
  {
    id: "bir-4",
    category: "biryani-rice",
    title: "Veg Dum Biryani / Paneer Tikka Biryani",
    price: 220,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Fresh vegetables or charcoal paneer cubes dum cooked with saffron basmati rice (Veg ₹220 / Paneer ₹260).",
    description: "Seasonal garden vegetables, mint, and saffron layered with aged basmati rice. Served with boondi raita.",
    prepTime: "20 mins"
  },
  {
    id: "bir-5",
    category: "biryani-rice",
    title: "Chicken Fried Rice / Hakka Noodles",
    price: 260,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Wok-tossed basmati rice or noodles with diced chicken, egg, and vegetables (Rice ₹260 / Noodles ₹280).",
    description: "Hot smoking wok preparation tossed with crunchy spring onions, soya, and tender chicken strips.",
    prepTime: "15 mins"
  },
  {
    id: "bir-6",
    category: "biryani-rice",
    title: "Jeera Rice / Veg Pulao",
    price: 120,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Fluffy basmati rice tempered with roasted cumin seeds or garden vegetables (Jeera ₹120 / Pulao ₹210).",
    description: "Aromatic aged long grain basmati rice tempered in pure desi ghee with whole cumin seeds.",
    prepTime: "12 mins"
  },

  // ==========================================
  // 7. DAL & TANDOORI BREADS (Pages 13, 14)
  // ==========================================
  {
    id: "dal-1",
    category: "dal-breads",
    title: "Dal Makhani",
    price: 200,
    isVeg: true,
    tags: ["Pure Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Whole black lentils and kidney beans slow-simmered overnight with white butter and cream.",
    description: "Authentic slow-cooked black urad dal simmered on low embers with ripe tomatoes, churned butter, and fragrant cream.",
    prepTime: "18 mins"
  },
  {
    id: "dal-2",
    category: "dal-breads",
    title: "Dal Punjabi Tadka / Dal Fry",
    price: 160,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Yellow toor dal tempered with desi ghee, cumin, garlic, and dry red chillies (Tadka ₹160 / Fry ₹140).",
    description: "Comforting yellow lentils tempered twice in smoking pure ghee with crushed garlic cloves and red chillies.",
    prepTime: "15 mins"
  },
  {
    id: "brd-1",
    category: "dal-breads",
    title: "Garlic Naan / Butter Naan",
    price: 80,
    isVeg: true,
    tags: ["Pure Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Clay oven baked flatbread brushed with roasted garlic or rich butter (Garlic ₹80 / Butter ₹50).",
    description: "Fluffy leavened refined flour dough baked inside the hot clay tandoor, topped with minced garlic and butter.",
    prepTime: "10 mins"
  },
  {
    id: "brd-2",
    category: "dal-breads",
    title: "Cheese Garlic Naan",
    price: 120,
    isVeg: true,
    tags: ["Pure Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Tandoori naan stuffed with molten mozzarella cheese and topped with minced garlic.",
    description: "Decadent resort favourite: gooey melted cheese oozing out of a crispy hot garlic naan bread.",
    prepTime: "12 mins"
  },
  {
    id: "brd-3",
    category: "dal-breads",
    title: "Stuffed Paneer Kulcha / Masala Kulcha",
    price: 100,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Crisp flaky kulcha stuffed with spiced paneer or potato masala (Paneer ₹100 / Masala ₹70).",
    description: "Amritsari style kulcha stuffed with seasoned cottage cheese, baked until golden and brushed with butter.",
    prepTime: "12 mins"
  },
  {
    id: "brd-4",
    category: "dal-breads",
    title: "Tandoori Roti / Butter Roti",
    price: 30,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Whole wheat bread baked crisp in traditional clay tandoor (Plain ₹30 / Butter ₹35).",
    description: "Wholesome, healthy whole wheat roti baked fresh in the clay oven.",
    prepTime: "8 mins"
  },
  {
    id: "brd-5",
    category: "dal-breads",
    title: "Lachha Paratha / Missi Roti",
    price: 60,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Multi-layered flaky wheat paratha or spiced gram flour missi roti with ajwain.",
    description: "Golden flaky paratha with spiral layers, brushed with butter.",
    prepTime: "10 mins"
  },

  // ==========================================
  // 8. LIVE COUNTER, PIZZAS & BURGERS (Page 15)
  // ==========================================
  {
    id: "live-1",
    category: "live-counter",
    title: "Paneer Tandoori Pizza",
    price: 320,
    isVeg: true,
    tags: ["Pure Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Tandoori spiced paneer cubes, bell peppers, onions, and melted mozzarella cheese.",
    description: "Hand-stretched pizza crust topped with rich herb sauce, spicy marinated paneer tikkas, and bubbly golden mozzarella.",
    prepTime: "18-20 mins"
  },
  {
    id: "live-2",
    category: "live-counter",
    title: "Chicken Mexican Pizza / Cheese Pizza",
    price: 380,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Loaded chicken chunks, jalapeños, sweet corn, and mozzarella cheese (Mexican ₹380 / Cheese ₹340).",
    description: "Crispy crust topped with spiced chicken, jalapeños, red paprika, and double cheese.",
    prepTime: "20 mins"
  },
  {
    id: "live-3",
    category: "live-counter",
    title: "Margherita Pizza / Veg Pizza",
    price: 280,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Classic tomato basil sauce with 100% mozzarella cheese (Margherita ₹280 / Veg Pizza ₹299).",
    description: "Italian classic pizza with rich tomato sauce, melted cheese, and fresh oregano herbs.",
    prepTime: "18 mins"
  },
  {
    id: "live-4",
    category: "live-counter",
    title: "Chicken Cheese Burger / Veg Burger",
    price: 290,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Crispy fried chicken or spiced veg patty in sesame bun with cheese (Chicken ₹290 / Veg ₹100).",
    description: "Toasted brioche bun layered with crispy patty, fresh lettuce, tomato slices, cheddar cheese, and house mayo.",
    prepTime: "15 mins"
  },
  {
    id: "live-5",
    category: "live-counter",
    title: "French Fries / Peri Peri Fries",
    price: 140,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Crispy salted potato fries or tossed in spicy African peri peri seasoning (Salted ₹140 / Peri Peri ₹160).",
    description: "Golden crispy fried potato batons served hot with tomato ketchup and garlic mayo dip.",
    prepTime: "10 mins"
  },
  {
    id: "live-6",
    category: "live-counter",
    title: "Cheese Corn Balls / Cheese Balls",
    price: 230,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Crispy crumbed croquettes with molten cheese and sweet corn filling (Corn Balls ₹230 / Cheese ₹220).",
    description: "Crispy fried golden spheres packed with molten mozzarella and cheddar cheese.",
    prepTime: "14 mins"
  },

  // ==========================================
  // 9. SANDWICHES, PASTA & MAGGI (Page 16)
  // ==========================================
  {
    id: "pas-1",
    category: "pasta-sandwiches",
    title: "White Sauce Pasta / Red Sauce Pasta",
    price: 250,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Penne pasta in creamy béchamel cheese sauce or tangy marinara with herbs (White ₹250 / Red ₹260).",
    description: "Tender penne pasta tossed with black olives, sweet corn, bell peppers, and velvety cheese sauce.",
    prepTime: "18 mins"
  },
  {
    id: "snd-1",
    category: "pasta-sandwiches",
    title: "Club Sandwich / Peri Peri Masala Sandwich",
    price: 160,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Triple-layer toasted sandwich stuffed with cheese, garden veggies, and fries (Club ₹160 / Peri Peri ₹150).",
    description: "Loaded multi-layer sandwich with crisp cucumbers, tomatoes, cheese slice, and seasoned potato filling.",
    prepTime: "14 mins"
  },
  {
    id: "snd-2",
    category: "pasta-sandwiches",
    title: "Veg Cheese Grilled Sandwich",
    price: 110,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Golden grilled sandwich with spiced vegetables and gooey melted cheese.",
    description: "Buttered bread grilled golden brown with crunchy onions, capsicum, mint chutney, and cheese.",
    prepTime: "12 mins"
  },
  {
    id: "mag-1",
    category: "pasta-sandwiches",
    title: "Paneer Tikka Maggi / Cheese Corn Maggi",
    price: 130,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Resort style comfort Maggi noodles topped with grilled paneer or melted cheese (Paneer ₹130 / Cheese ₹80).",
    description: "Hot steaming 2-minute comfort noodles tossed with butter, secret spices, and paneer tikka chunks.",
    prepTime: "10 mins"
  },

  // ==========================================
  // 10. SNACKS, SOUPS & SALADS (Pages 3, 4, 17)
  // ==========================================
  {
    id: "snk-1",
    category: "snacks-soups",
    title: "Chhole Bhature (with Extra Bhature option)",
    price: 150,
    isVeg: true,
    tags: ["Pure Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Spicy dark Punjabi chickpea curry served with two puffy golden fried bhaturas (Extra Bhature ₹40).",
    description: "Authentic Delhi-style spicy chhole cooked with amla and whole spices, served with balloon-puffed bhaturas, pickled onions, and green chillies.",
    prepTime: "16 mins"
  },
  {
    id: "snk-2",
    category: "snacks-soups",
    title: "Paneer Pakoda / Mix Pakoda",
    price: 200,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Fresh paneer or assorted vegetables dipped in spiced gram flour batter and golden fried (Paneer ₹200 / Mix ₹160).",
    description: "Crispy tea-time fritters served piping hot with tangy mint chutney and tomato dip.",
    prepTime: "14 mins"
  },
  {
    id: "snk-3",
    category: "snacks-soups",
    title: "Kaju Fry / Peanut Masala",
    price: 220,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Ghee roasted cashews or crunchy peanuts tossed with onions, tomatoes, and lime (Kaju ₹220 / Peanut ₹180).",
    description: "The perfect companion for your evening beverage at the verandah.",
    prepTime: "10 mins"
  },
  {
    id: "sop-1",
    category: "snacks-soups",
    title: "Chicken Manchow / Hot & Sour Soup",
    price: 170,
    isVeg: false,
    tags: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Spicy garlic broth with shredded chicken and crispy fried noodles (Manchow ₹170 / Hot & Sour ₹180).",
    description: "Warm, comforting Indo-Chinese soup packed with chicken shreds, egg drop, garlic, and fresh coriander.",
    prepTime: "12 mins"
  },
  {
    id: "sop-2",
    category: "snacks-soups",
    title: "Veg Manchow / Sweet Corn Soup",
    price: 120,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Hearty vegetable broth with sweet corn or spicy garlic noodles (Manchow ₹120 / Sweet Corn ₹130).",
    description: "Hot comforting broth loaded with minced garden vegetables and topped with crispy noodles.",
    prepTime: "12 mins"
  },
  {
    id: "sld-1",
    category: "snacks-soups",
    title: "Boondi Raita / Green Salad",
    price: 70,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Chilled spiced yogurt with crispy gram flour pearls, or fresh sliced salad (Raita ₹70 / Salad ₹120).",
    description: "Cool, refreshing accompaniments to balance your curries and biryanis.",
    prepTime: "8 mins"
  },

  // ==========================================
  // 11. DESSERT (Page 17)
  // ==========================================
  {
    id: "des-1",
    category: "dessert",
    title: "Hot Gulab Jamun with Ice Cream",
    price: 150,
    isVeg: true,
    tags: ["Pure Veg", "Chef's Signature"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Two warm khoya dumplings soaked in saffron-rose syrup, paired with cold vanilla ice cream.",
    description: "An irresistible pairing of piping-hot, melt-in-mouth gulab jamuns drenched in cardamom sugar syrup with creamy chilled vanilla bean ice cream.",
    prepTime: "6 mins"
  },
  {
    id: "des-2",
    category: "dessert",
    title: "Hot Gulab Jamun (2 Pcs)",
    price: 80,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Classic fried milk-solid dumplings soaked in aromatic cardamom-rose syrup.",
    description: "Traditional soft and spongy sweet dumplings served warm.",
    prepTime: "5 mins"
  },
  {
    id: "des-3",
    category: "dessert",
    title: "Choice of Ice Cream",
    price: 100,
    isVeg: true,
    tags: ["Pure Veg"],
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Selection of premium vanilla, chocolate, butterscotch, or strawberry scoops.",
    description: "Two generous scoops of cold dairy ice cream served with chocolate or strawberry syrup.",
    prepTime: "4 mins"
  }
];
