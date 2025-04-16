# Leah's Wardrobe 💖🛍️

A girly e-commerce shopping website built locally for class project `CEN4021`.  
This project includes a home page, product detail page, shopping cart and billing page, designed with a chic pink & black theme and modern UX vibes ✨

---

## 💡 Tech Stack

- HTML
- CSS
- JavaScript
- VS Code for development
- Localhost for testing

---

## 📁 Folder Structure

```bash
Leahs_Wardrobe/
├── index.html                 # Home page 
├── product-detail.html        # Product detail page 
├── shoppingCart.html          # Shopping cart page 
├── billing.html               # Billing & shipping info / checkout page
├── style.css                  # Main CSS styles 
├── script.js                  # JS for billing page interactions (dropdowns, toggles)
├── Leahs_Wardrobe_Banner.png  # Custom banner image
└── README.md                  # Project overview & documentation

---

## 🏠 Home Page (`home.html`)

The Home Page serves as the landing screen for the shopping platform. It includes:

- A welcoming header
- A simple product list (mocked)
- Links to individual product detail pages
- A button to view the shopping cart

This page simulates browsing through available products.

---

## 📄 Product Detail Page (`product-detail.html`)

The Product Detail Page displays information about a selected product. It includes:

- Product name and price
- A short product description
- A button to "Add to Cart" (navigates to the cart page)
- A link to return to the Home Page

This page is designed to give users a quick overview of a product before purchasing.

---

## 🛒 Shopping Cart Page (`shoppingCart.html`)

### Features:
- **Website name** at the top with custom banner image
- **Top nav bar** with categories: Pants, Shirts, Dresses, Swimwear, Trending, Jackets, Shoes, Sale, Lingerie
- **Home & Profile buttons** on top-right
- Multiple **products in cart**, with:
  - Image placeholders
  - Size selector
  - Quantity dropdown
  - Remove button
- **"Shop More"** button under products
- **Order Summary box** on the side:
  - Total price, estimated tax & shipping
  - Promo code text box
  - Proceed to Checkout button
  - Express payment icons (GPay, PayPal, Visa, Mastercard)

---

## 💳 Billing Page (`billing.html`)

### Features:
- Pink background with black text
- **"Leah's Wardrobe"** heading and **black checkout banner** underneath
- **Home & Profile buttons** on top-right with icons
- Express Payment section (GPay & PayPal icons)
- **Contact Info Form**
  - Email and phone number input
- **Shipping Info Form**
  - Street address, city, ZIP code, country
- **Payment Method Dropdown:**
  - PayPal → shows button linking to PayPal
  - Google Pay → shows button linking to GPay
  - Credit Card → shows input fields for card details:
    - Card Number, Expiry, CVV, Cardholder Name
    - Card icons: Amex, Mastercard, Visa
  - Credit card section styled in matching black & pink

---

## 📸 Assets Used

- Custom banner: `Leahs_Wardrobe_Banner.png`
- SVG icons: Home, Profile, Credit Card Providers, PayPal, GPay

---

## 🚀 How to Run

1. Use Live Server extension or right-click → “Open with Live Server”
2. Open `cart.html` or `billing.html` to view the pages

---

## 🧠 Notes

- No real payment integrations are active — all buttons link to their official homepages
- Fully responsive styling with hover effects

---


> 🚧 Note: This prototype does not include dynamic data or backend functionality. All interactions are simulated using static HTML and simple JS for navigation and alerts.

## ✨ Credits

- HTML/CSS/JS by Dorreen Vahidiazar, Rosana Josepha, Mariana Cusguen

