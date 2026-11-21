# Shanvi's Resort — Digital Gastronomy & Room Service Menu (Jagdalpur)

A luxury, nature-inspired responsive digital food menu web application crafted for **Shanvi's Resort**, nestled in the scenic green surroundings of **Jagdalpur, Bastar (Chhattisgarh)**. Built with **React**, **Vite**, and **Tailwind CSS**.

Guests can explore the resort's complete food and beverage menu across mobile and desktop devices, filter by Pure Veg / Non-Veg / Chef's Special, search ingredients, and place orders directly by telephone or room service extension.

---

## 🎨 Luxury Nature-Inspired Visual Identity & Color System

Strictly aligned with the resort's premium forest ambiance:

| Color Name | Hex Code | Tailwind Utility Class | Usage |
| :--- | :--- | :--- | :--- |
| **Deep Forest Green** | `#183D32` | `bg-forest`, `text-forest` | Main navigation, hero background, luxury cards, footers |
| **Warm Ivory** | `#F5F0E6` | `bg-ivory`, `text-ivory` | Warm ambient backdrop, contrast accents |
| **Champagne Gold** | `#C5A46D` | `bg-gold`, `text-gold` | "Call to Order" buttons, price typography, hover borders & glow |
| **Warm Walnut** | `#654B3B` | `bg-walnut`, `text-walnut` | High-legibility body typography, culinary descriptions |
| **Pure White** | `#FFFFFF` | `bg-white` | Elevated card surfaces, crisp text highlights |
| **Sage Green** | `#DCE5D9` | `bg-sage`, `text-sage` | Dietary filter pills, prep time badges, soft accents |

### 🖋️ Typography
- **Headings & Serif Accents**: `Playfair Display` & `Cormorant Garamond` (loaded via Google Fonts)
- **Body & Numerical Copy**: `Plus Jakarta Sans`

---

## 🍽️ Curated Authentic Menu Categories (From PDF)

The menu contains all 17 pages of Shanvi's Resort's authentic offerings, priced in **Indian Rupees (₹)**:

1. **Tandoor Kebabs & Tikkas**: Tandoori Chicken (Half/Full), Tangdi Kebab, Afghani Tikka, Banjara Tikka, Paneer Tikka, Malai Tikka, Angara Tikka, Veg Kurkure Kebab, Hara Bhara Kebab, Mushroom Tikka.
2. **Chinese Starters (Veg & Non-Veg)**: Chicken Lollipop, Chicken Chilli, Chicken 555, Singapuri Stick, Fish Roast, Chilli Paneer, Dragon Paneer, Crispy Corn, Mushroom Chilli, Veg Manchurian, Honey Potato Chilli.
3. **Main Course (Veg)**: Paneer Butter Masala, Paneer Handi, Paneer Kadhai, Paneer Tikka Masala, Paneer Lababdar, Palak Paneer, Kaju Masala, Kaju Curry, Mushroom Masala, Punjabi Dum Aloo, Bhindi Do Pyaza, Methi Matar Malai.
4. **Main Course (Non-Veg & Seafood)**: Desi Chicken Curry (1 KG), Chicken Butter Masala, Chicken Handi, Chicken Mughlai, Chicken Patiala, Mutton Rogan Josh, Mutton Handi, Mutton Keema Masala, Prawn Masala, Fish Masala, Egg Curry.
5. **Biryani & Rice**: Chicken Dum Biryani (Half/Full), Mutton Biryani (Half/Full), Veg Dum Biryani, Paneer Tikka Biryani, Chicken Fried Rice, Hakka Noodles, Jeera Rice, Veg Pulao.
6. **Dal & Tandoori Breads**: Dal Makhani, Dal Punjabi Tadka, Garlic Naan, Butter Naan, Cheese Garlic Naan, Stuffed Paneer Kulcha, Lachha Paratha, Tandoori Butter Roti.
7. **Live Counter, Pizzas & Burgers**: Paneer Tandoori Pizza, Chicken Mexican Pizza, Margherita Pizza, Veg Cheese Burger, Chicken Burger, French Fries, Peri Peri Fries, Cheese Corn Balls.
8. **Sandwiches, Pasta & Maggi**: Club Sandwich, Peri Peri Masala Sandwich, White & Red Sauce Pasta, Paneer Tikka Maggi, Cheese Corn Maggi.
9. **Snacks, Soups & Salads**: Chhole Bhature (with extra bhature option), Paneer Pakoda, Mix Pakoda, Kaju Fry, Chicken Manchow Soup, Veg Sweet Corn Soup, Boondi Raita.
10. **Mocktails, Shakes & Beverages**: Sunrise Mocktail, Paan Mojito, Blue Lagoon, Mango Mule, Shirley Temple, Cold Coffee with Ice Cream, KitKat Shake, Oreo Shake, Lassi, Masala Chai.
11. **Desserts & Ice Cream**: Hot Gulab Jamun with Ice Cream, Choice of Ice Cream.

---

## 📱 Mobile-First Features & Direct Phone Ordering

- **Authentic Veg & Non-Veg Badges**: Standard green square dot for Pure Veg items, red square dot for Non-Veg items.
- **Direct Dial CTA**: Every dish card features an instant **"Call to Order"** button with the price.
- **In-Room Extension Details**: Shows `Ext. 101 / 102` for internal resort dialling and direct exterior phone line (`+91 94252 88888`).
- **Sticky Mobile Bottom Call Bar**: Guests browsing on smartphones can tap to call the kitchen at any moment.
- **Copy Dish Name**: Inside the dish popup modal, a one-tap button copies the exact dish name so guests can say or text it effortlessly.
- **No Complex Checkout**: No carts, payments, or logins — streamlined specifically for resort calling.

---

## 🚀 How to Run Locally

### 1. Open Terminal and navigate to the project:
```bash
cd "/Users/alishaanjum/Downloads/resort menu"
```

### 2. Start the development server:
```bash
npm run dev
```

### 3. Open in your browser:
```
http://localhost:3000
```

### 4. Build for Production:
```bash
npm run build
npm run preview
```
