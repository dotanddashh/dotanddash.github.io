<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Dot & Dash Jewellery</title>
  <link href="ewwwwwwwwwwwwww.css" rel="stylesheet">
</head>
<body>

  <!-- HEADER -->
  <header>
    <button id="menu-btn" class="menu-btn">☰</button>
    <h1 class="brand-title">Dot &amp; Dash</h1>
    <div id="cart-icon" class="cart-icon">🛒 <span id="cart-count">0</span></div>
  </header>

  <!-- SIDEBAR -->
<aside id="sidebar" class="sidebar">
  <h3>Shop Now</h3>

  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown(this)">Categories ▾</button>
    <div class="dropdown-content">
      <ul class="category-list">
        <li onclick="toggleSubmenu('rings-submenu')">Rings ▾</li>
        <ul id="rings-submenu" class="submenu" style="display: none;">
          <li onclick="filterCategory('rings-male')">Male</li>
          <li onclick="filterCategory('rings-female')">Female</li>
        </ul>

        <li onclick="toggleSubmenu('bracelets-submenu')">Bracelets ▾</li>
        <ul id="bracelets-submenu" class="submenu" style="display: none;">
          <li onclick="filterCategory('bracelets-male')">Male</li>
          <li onclick="filterCategory('bracelets-female')">Female</li>
        </ul>

        <li><button onclick="filterCategory('earrings')">Earrings</button></li>
        <li><button onclick="filterCategory('necklaces')">Necklaces</button></li>
        <li><button onclick="filterCategory('caps')">Caps</button></li>
      </ul>
    </div>
	</div>

    <div class="sidebar-gap"></div>
    <a href="#about">About Us</a>
    <a href="#shipping-section">Shipping & Returns</a>
    <a href="#contact">Contact Us</a>
  </aside>

  <!-- CART POPUP -->
  <div id="cart-popup" class="cart-popup hidden">
    <h3>Your Cart</h3>
    <div id="cart-items"></div>
    <button onclick="goToCheckout()">Proceed to Checkout</button>
  </div>

  <!-- HERO LOGO -->
  <section class="hero-logo">
    <img src="dot and dash logo.jpeg" alt="Dot & Dash Logo" class="site-logo">
  </section>

  <!-- HERO TEXT -->
  <section class="hero">
    <h2>Everyday Luxury for Everyone</h2>
    <p>Explore our collections inspired by minimal, everyday elegance.</p>
  </section>

  <!-- IMAGE CAROUSEL -->
  <section class="image-carousel">
    <img src="image dash.jpg" alt="Jewelry 1">
    <img src="image dd.jpg" alt="Jewelry 2">
    <img src="image dot.jpg" alt="Jewelry 3">
    <img src="image ddd.jpg" alt="Jewelry 4">
  </section>

  <!-- ABOUT US -->
  <section id="about" class="about-section">
    <h2>About Us</h2>
    <p>At Dot & Dash, we believe jewellery should make you feel special. That’s why we carefully curate pieces that combine timeless beauty, modern style, and lasting quality. Whether you're celebrating a big moment or just treating yourself, we're here to help you find jewellery that feels personal and unforgettable.</p>
  </section>

  <!-- BEST SELLING -->
  <div class="best-sell-btn">
    <button id="best-sell">Best Selling</button>
  </div>

  <!-- PRODUCT GRID -->
  <section id="product-list" class="categories"></section>

  <!-- PAGINATION -->
  <div class="pagination">
    <button onclick="changePage(-1)">« Prev</button>
    <span id="page-number">Page 1</span>
    <button onclick="changePage(1)">Next »</button>
  </div>

  <!-- PROCEED TO CHECKOUT -->
  <div class="checkout-btn">
    <button onclick="goToCheckout()">Proceed to Checkout</button>
  </div>

  <!-- SHIPPING SECTION -->
  <section id="shipping-section" class="shipping-section">
    <h2>Shipping & Returns</h2>
    <p>We offer a 7-day free return policy for your peace of mind. Return within 7 days—no questions asked.</p>
  </section>

  <!-- CONTACT SECTION -->
  <section id="contact" class="contact-section">
    <h2>Contact Us</h2>
    <p>Email: DotandDash.pk@gmail.com</p>
    <p>Phone: 03701409180</p>
  </section>

  <footer>
    <div class="footer-links">
      <a href="#about">About Us</a>
      <a href="#shipping-section">Shipping & Returns</a>
      <a href="#contact">Contact Us</a>
    </div>
  </footer>

  <script src="javascriptty.js" defer></script>
</body>
</html>


 @charset "utf-8";

/* Import Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter:wght@400;500&display=swap');

/* Reset & Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(to bottom, #fffdf7, #fff4d6, #ffeac2);
  color: #4a3f2f;
  padding-top: 70px;
  line-height: 1.6;
}

/* Header */
header {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 70px;
  background: #fff8d6;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e2d3a7;
  z-index: 1000;
}
.menu-btn {
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #a67c52;
  cursor: pointer;
}
.brand-title {
  flex: 1;
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #a67c52;
}

.image-carousel {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 3rem 1rem;
}

.image-carousel img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-carousel img:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}



/* Sidebar */
.sidebar {
  position: fixed;
  top: 70px; left: -250px;
  width: 230px;
  height: 100%;
  background: #fffaf3;
  border-right: 1px solid #e2d3a7;
  transition: left 0.3s ease;
  padding: 20px 10px;
  z-index: 999;
}
.sidebar.show {
  left: 0;
}
.sidebar h3 {
  margin-bottom: 10px;
  color: #a67c52;
}
/* Sidebar dropdown container */
.sidebar .dropdown {
  margin-top: 20px;
}

.sidebar .dropbtn {
  background-color: #fff5dc;
  color: #5e3b18;
  font-weight: bold;
  padding: 10px 15px;
  border: 2px solid #d9b26f;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  font-size: 16px;
  transition: background 0.3s;
}

.sidebar .dropbtn:hover {
  background-color: #ffeccc;
}

/* Dropdown content */
.dropdown-content {
  display: none;
  padding-top: 10px;
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-list li {
  margin: 10px 0;
  font-weight: 500;
  color: #5e3b18;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background 0.2s;
}

.category-list li:hover {
  background-color: #fff3ca;
}

/* Submenu */
.submenu {
  display: none;
  margin-left: 15px;
  margin-top: 5px;
  list-style: none;
}

.submenu li {
  margin: 5px 0;
  padding: 6px 10px;
  background-color: #fffaf0;
  border-radius: 4px;
  color: #7b4a1f;
  transition: background 0.3s;
}

.submenu li:hover {
  background-color: #ffe5b4;
}

/* Buttons inside li */
.category-list button {
  background: none;
  border: none;
  color: #5e3b18;
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
  padding: 8px 12px;
  width: 100%;
  text-align: left;
  border-radius: 5px;
  transition: background 0.3s;
}

.category-list button:hover {
  background-color: #fff3ca;
}

.sidebar a, .dropbtn {
  display: block;
  padding: 8px;
  color: #4a3f2f;
  text-decoration: none;
  cursor: pointer;
}
.sidebar-gap {
  margin: 15px 0;
  border-top: 1px solid #e2d3a7;
}

/* Dropdown */
.dropdown {
  margin-bottom: 5px;
}
/* Hide submenu by default */
.dropdown-content {
  display: none;
  padding-left: 1rem;
}

/* Show when the parent .dropdown has .open */
.dropdown.open .dropdown-content {
  display: block;
}


/* Hero Logo */
.hero-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background-color: #fff8e5;
}
.hero-logo .site-logo {
  max-width: 200px;
  border-radius: 50%;
  padding: 10px;
}

/* Hero Section */
.hero {
  text-align: center;
  background-color: #fffbee;
  padding: 2rem 1rem;
}
.hero h2 {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  color: #a67c52;
  margin-bottom: 0.5rem;
}
.hero p {
  color: #7a6b5f;
  font-size: 1rem;
}

/* About Section */
.about-section {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #fffaf1;
  border-left: 5px solid #d2aa7d;
  border-radius: 6px;
}
.about-section h2 {
  font-family: 'Playfair Display', serif;
  margin-bottom: 0.5rem;
  color: #9a6f46;
}

/* Product Grid */
.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 0 1rem;
}
.cat-card {
  background-color: #fffef9;
  border: 1px solid #e2d3a7;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.07);
  width: 200px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
}
.cat-card:hover {
  transform: translateY(-5px);
}
.cat-card img {
  width: 100%;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}
.cat-card h3 {
  font-family: 'Playfair Display', serif;
  color: #a67c52;
}
.cat-card p {
  margin-bottom: 0.5rem;
}
.cat-card input {
  width: 50px;
  margin-right: 4px;
}
.cat-card button {
  background-color: #a67c52;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

/* Centered Best Selling Button */
.best-sell-btn {
  text-align: center;
  margin: 2rem 0;
}
.best-sell-btn button {
  background-color: #a97c50;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}
.best-sell-btn button:hover {
  background-color: #8a6239;
}

/* Pagination */
.pagination {
  text-align: center;
  margin: 2rem 0;
}
.pagination button {
  background-color: #a67c52;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
}

/* Checkout */
.checkout-btn {
  text-align: center;
  margin: 2rem 0;
}
.checkout-btn button {
  background-color: #5c5c5c;
  color: white;
  padding: 10px 20px;

  border: none;
  border-radius: 4px;
}

/* Cart Icon */
.cart-icon {
  position: fixed;
  top: 15px;
  right: 15px;
  background-color: #fff8e1;
  border-radius: 30px;
  padding: 10px 16px;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  color: #a67c52;
  cursor: pointer;
  z-index: 2000;
}
.cart-icon:hover {
  background-color: #fce6ba;
}
#cart-count {
  background: #a67c52;
  color: white;
  padding: 2px 6px;
  border-radius: 12px;
  margin-left: 6px;
  font-size: 0.9rem;
}

/* Cart Popup */
.cart-popup {
  position: fixed;
  top: 65px;
  right: 20px;
  width: 320px;
  background: #fffdf6;
  border: 1px solid #e2d3a7;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
  z-index: 1999;
}
.cart-popup.hidden {
  display: none;
}
.cart-popup h3 {
  margin-top: 0;
  font-family: 'Playfair Display', serif;
  color: #a67c52;
  text-align: center;
}
.cart-popup button {
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background-color: #a67c52;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}
.cart-popup button:hover {
  background-color: #8a6239;
}

/* Contact & Shipping */
.shipping-section, .contact-section {
  background: #fffdf4;
  padding: 2rem 1rem;
  margin: 2rem auto;
  max-width: 90%;
  text-align: center;
  border: 1px solid #e2d3a7;
  border-radius: 6px;
}
.shipping-section h2,
.contact-section h2 {
  font-family: 'Playfair Display', serif;
  color: #9a6f46;
  margin-bottom: 0.5rem;
}

/* Footer */
footer {
  text-align: center;
  padding: 1.5rem 0;
  background-color: #fff8e5;
  border-top: 1px solid #e2d3a7;
}
.footer-links a {
  color: #4a3f2f;
  margin: 0 10px;
  text-decoration: none;
}
.footer-links a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .categories {
    flex-direction: column;
    align-items: center;
  }
  .cat-card {
    width: 90%;
  }
  .hero-logo .site-logo {
    max-width: 140px;
  }
  .top-bar {
    flex-direction: column;
  }
  .cart-popup {
    width: 90%;
    right: 5%;
  }
  .cart-icon {
    top: 12px;
    right: 12px;
    padding: 8px 12px;
  }
}
 
/* Grainy Butter-Yellow Background */
body {
  /* Base gradient */
  background-color: #fff7cf;
  background-image:
    linear-gradient(to bottom, #fffdf7, #fff9eb),
url('../../Documents/images/noise.png'); /* your  *very light* noise PNG */
  background-blend-mode: overlay;
  background-size: cover, auto;
  background-repeat: no-repeat, repeat;
  position: relative;
}


}
/* Base + Reset */
* { margin:0; padding:0; box-sizing:border-box; }
body {
  font-family:'Cormorant Garamond', serif;
  background: 
    url('https://www.transparenttextures.com/patterns/groovepaper.png'),
    radial-gradient(circle at center, #fff7e6, #fceec0, #fbe5a0);
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: repeat;
  margin:0; padding-top:0;
  color:#333;
}

/* Header with Shadow */
header {
  background:#fdf3cf; text-align:center; padding:1rem;
  font-size:2rem; color:#a5742b; position:sticky; top:0;
  box-shadow:0 4px 10px rgba(0,0,0,0.1);
  z-index:1000;
}

/* Thank You Text */
.thank-you {
  text-align:center; margin:2rem auto;
  font-size:1.8rem; color:#a5742b;
  text-shadow:1px 1px 2px rgba(0,0,0,0.1);
}

/* Container with Gold Foil Border */
.checkout-container {
  max-width:800px; margin:2rem auto; background:#fff;
  padding:2rem; border-radius:10px;
  box-shadow:0 8px 20px rgba(0,0,0,0.1);
  position:relative;
}
.checkout-container::before {
  content:""; position:absolute;
  top:-4px; left:-4px; right:-4px; bottom:-4px;
  border:4px solid transparent;
  border-image: 
    linear-gradient(45deg, gold, darkgoldenrod) 1;
  border-radius:12px;
}

/* Section Titles */
.section-title {
  font-size:1.4rem; margin-bottom:1rem; color:#222;
  border-bottom:2px solid #f0c261; display:inline-block;
}

/* Form Fields */
form input, form select {
  width:100%; padding:0.7rem; margin-bottom:1rem;
  border:1px solid #ddd; border-radius:5px;
  transition: box-shadow 0.3s ease;
}
form input:focus, form select:focus {
  box-shadow:0 0 5px rgba(240,194,97,0.5);
  outline:none;
}

/* Order Summary Box */
.order-summary {
  background:#f9f2e3; padding:1rem; margin-top:2rem;
  border-radius:10px; box-shadow:inset 0 2px 5px rgba(0,0,0,0.05);
}

/* Place Order Button with Glow */
.place-order-btn {
  display:block; width:100%; margin-top:1.5rem;
  background:#f0c261; color:#222; padding:0.8rem;
  font-size:1.1rem; border:none; border-radius:5px;
  cursor:pointer; transition: box-shadow 0.4s ease;
}
.place-order-btn:hover {
  box-shadow:0 0 15px rgba(240,194,97,0.7);
}

/* Back Link */
.back-link {
  display:inline-block; margin-top:2rem;
  color:#a5742b; text-decoration:none; font-weight:bold;
  transition: color 0.3s ease;
}
.back-link:hover { color:#bf8d3c; }

/* Responsive */
@media (max-width:768px) {
  .checkout-container { margin:1rem; padding:1rem; }
  .place-order-btn { font-size:1rem; }
}
/* === Ensure the product grid is always shown === */
#product-list,
.best-selling-container {
  display: flex !important;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

/* === Style each card so its <img> actually shows === */
.cat-card,
.product-card {
  background-color: #fffef9;
  border: 1px solid #e2d3a7;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.07);
  width: 200px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.cat-card:hover,
.product-card:hover {
  transform: translateY(-5px);
}

.cat-card img,
.product-card img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 0.5rem;
}
document.addEventListener('DOMContentLoaded', () => {
  const sidebar   = document.getElementById('sidebar');
  const cartPopup = document.getElementById('cart-popup');
  const menuBtn   = document.getElementById('menu-btn');
  const cartIcon  = document.getElementById('cart-icon');
  const bestBtn   = document.getElementById('best-sell');
  const prodList  = document.getElementById('product-list');
  const pageNum   = document.getElementById('page-number');
  const checkoutBtnWrap = document.querySelector('.checkout-btn button');

  const products = [
    { id:1, name:"Gold Ring", price:3000, image:"images/ring.jpg", category:"rings-female", bestSelling:true },
    { id:2, name:"Silver Bracelet", price:2000, image:"images/bracelet.jpg", category:"bracelets-male" },
    { id:3, name:"Black Cap", price:1500, image:"images/cap.jpg", category:"caps-female", bestSelling:true },
    { id:4, name:"Pearl Earrings", price:1800, image:"images/earrings.jpg", category:"earrings" },
    { id:5, name:"Gold Bangles", price:2200, image:"images/bangles.jpg", category:"bangles", bestSelling:true },
    { id:6, name:"Minimal Necklace", price:2500, image:"images/necklace.jpg", category:"necklaces" }
  ];
  let currentPage = 1, perPage = 6;

  function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }

  function updateCartCount() {
    const count = getCart().reduce((sum, i) => sum + i.quantity, 0);
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = count;
  }

  function renderProducts(list = products) {
    if (!prodList) return;
    prodList.innerHTML = '';
    const start = (currentPage - 1) * perPage;
    list.slice(start, start + perPage).forEach(p => {
      prodList.insertAdjacentHTML('beforeend', `
        <div class="cat-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>Rs. ${p.price}</p>
          <input type="number" id="qty-${p.id}" value="1" min="1">
          <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      `);
    });
    if (pageNum) pageNum.textContent = `Page ${currentPage}`;
  }

  window.addToCart = id => {
    const qtyInput = document.getElementById(`qty-${id}`);
    const qty = +qtyInput.value || 1;
    const prod = products.find(x => x.id === id);
    const cart = getCart();
    const ex = cart.find(x => x.id === id);
    ex ? ex.quantity += qty : cart.push({ id: prod.id, name: prod.name, price: prod.price, quantity: qty });
    saveCart(cart);
    alert(`${prod.name} added to cart.`);
    if (checkoutBtnWrap) checkoutBtnWrap.style.display = 'block';
  };

  window.filterCategory = cat => {
    if (cat === 'best-selling') renderProducts(products.filter(x => x.bestSelling));
    else if (cat === 'all') renderProducts(products);
    else renderProducts(products.filter(x => x.category === cat));
  };

  if (bestBtn) bestBtn.addEventListener('click', () => filterCategory('best-selling'));

  window.changePage = dir => {
    currentPage = Math.max(1, currentPage + dir);
    renderProducts();
  };

  window.toggleSidebar = () => {
    if (sidebar) sidebar.classList.toggle('show');
  };

  // SINGLE dropdown toggle function
  window.toggleDropdown = btn => {
    const content = btn.nextElementSibling;
    if (content) {
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
  };

  window.toggleSubmenu = id => {
    const submenu = document.getElementById(id);
    if (submenu) {
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
  };

  window.toggleCartPopup = () => {
    if (cartPopup) {
      cartPopup.classList.toggle('hidden');
      renderCartItems();
    }
  };

  function renderCartItems() {
    const out = document.getElementById('cart-items');
    if (!out) return;
    out.innerHTML = '';
    const cart = getCart();
    if (!cart.length) return out.innerHTML = '<p>Your cart is empty.</p>';
    cart.forEach((item, i) => {
      out.insertAdjacentHTML('beforeend', `
        <div class="cart-item">
          <p><strong>${item.name}</strong> × ${item.quantity}</p>
          <p>Rs. ${item.price * item.quantity}</p>
          <button onclick="removeFromCart(${i})">Remove</button>
        </div>
      `);
    });
  }

  window.removeFromCart = idx => {
    const c = getCart();
    c.splice(idx, 1);
    saveCart(c);
    renderCartItems();
  };

  window.goToCheckout = () => {
    window.location.href = 'checkout.html';
  };

  // Init
  if (menuBtn) menuBtn.addEventListener('click', toggleSidebar);
  if (cartIcon) cartIcon.addEventListener('click', toggleCartPopup);
  renderProducts();
  updateCartCount();
});
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Dot & Dash Checkout</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(to bottom right, #fff9e6, #fff2cc);
      color: #5a3e1b;
    }
    header {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 30px 20px 10px;
      font-size: 2.5rem;
      font-weight: bold;
    }
    #back-to-home {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.9rem;
      text-decoration: none;
      color: #5a3e1b;
      border: 1px solid #5a3e1b;
      padding: 6px 12px;
      border-radius: 5px;
      background-color: #fff1cc;
      transition: all 0.3s ease;
    }
    #back-to-home:hover {
      background-color: #f0e0b0;
      color: white;
      border-color: #8c6239;
    }
    .container {
      max-width: 620px;
      margin: 20px auto 40px;
      padding: 30px 25px;
      background-color: #fffef9;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(90,62,27,0.1);
    }
    h2 {
      text-align: center;
      margin-bottom: 20px;
      font-weight: normal;
      font-size: 1.6rem;
    }
    form label {
      display: block;
      margin-top: 15px;
      font-weight: 600;
      color: #4c3312;
    }
    form input, form select {
      width: 100%;
      padding: 12px;
      margin-top: 6px;
      border: 1px solid #d5c08f;
      border-radius: 8px;
      font-size: 1rem;
      background: #fffaf0;
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);
      transition: 0.2s ease-in-out;
    }
    form input:focus, form select:focus {
      outline: none;
      border-color: #a67c52;
      box-shadow: 0 0 0 3px rgba(166,124,82,0.2);
    }
    button {
      margin-top: 30px;
      width: 100%;
      padding: 14px;
      font-size: 1.1rem;
      font-weight: bold;
      background-color: #a67c52;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      box-shadow: 0 5px 12px rgba(0,0,0,0.1);
    }
    button:hover {
      background-color: #8c6239;
    }
    #order-summary {
      margin-top: 35px;
      border-top: 1px dashed #c0aa88;
      padding-top: 20px;
      font-size: 1rem;
      color: #4c3312;
      background-color: #fffaf3;
      border-radius: 8px;
      padding-left: 15px;
    }
    #order-summary p {
      margin: 8px 0;
    }
    #thank-you {
      display: none;
      text-align: center;
      padding: 40px 20px;
      font-size: 1.6rem;
      font-weight: bold;
      color: #5a3e1b;
      animation: fadeIn 1s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0);     }
    }
  </style>
</head>
<body>
  <header>
    <a id="back-to-home" href="../../Documents/html 3.html">← Back to Home</a>
    Dot & Dash Checkout
  </header>

  <div class="container" id="main-container">
    <h2>Enter Your Details</h2>
    <form id="checkout-form">
      <label for="name">Full Name</label>
      <input type="text" id="name" required />

      <label for="email">Email Address</label>
      <input type="email" id="email" required />

      <label for="phone">Phone Number</label>
      <input type="tel" id="phone" required />

      <label for="city">City (Pakistan Only)</label>
      <input type="text" id="city" required />

      <label for="address">Full Address</label>
      <input type="text" id="address" required />

      <label for="payment">Payment Method</label>
      <select id="payment" required>
        <option value="">Select method</option>
        <option>Cash on Delivery</option>
      </select>

      <button type="submit">Place Order</button>
    </form>

    <div id="order-summary"></div>
    <div id="thank-you">🎉 Thank you for shopping with us!<br>Your order has been placed successfully. 💛</div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const form       = document.getElementById('checkout-form');
      const summary    = document.getElementById('order-summary');
      const backLink   = document.getElementById('back-to-home');
      const thankYou   = document.getElementById('thank-you');
      const cart       = JSON.parse(localStorage.getItem('cart') || '[]');

      function renderSummary() {
        if (cart.length === 0) {
          summary.innerHTML = "<p>Your cart is empty.</p>";
          return;
        }
        let total = 0;
        summary.innerHTML = cart.map(item => {
          const sub = item.price * item.quantity;
          total += sub;
          return `<p>${item.name} × ${item.quantity} — Rs. ${sub}</p>`;
        }).join('');
        summary.innerHTML += `
          <hr>
          <p><strong>Shipping:</strong> Rs. 90</p>
          <p><strong>Total:</strong> Rs. ${total + 90}</p>
        `;
      }

      renderSummary();

      form.addEventListener('submit', e => {
        e.preventDefault();
        localStorage.removeItem('cart');
        form.style.display    = 'none';
        summary.style.display = 'none';
        thankYou.style.display = 'block';
        setTimeout(() => window.location.href = "html 3.html", 4000);
      });

      backLink.addEventListener('click', e => {
        e.preventDefault();
        window.location.href = "html 3.html";
      });
    });
  </script>
</body>
</html>
![image dot](https://github.com/user-attachments/assets/5173765c-548e-4f48-ae41-f0d0afac0f55)
![image ddd](https://github.com/user-attachments/assets/924c81d7-da1e-42d7-b451-0e10c42fb74e)
![image dd](https://github.com/user-attachments/assets/bef7f6de-567b-4297-8d27-87921abe173c)
![image dash](https://github.com/user-attachments/assets/64203753-77f6-4f59-9a33-4d73227cd1b8)
![dot and dash logo](https://github.com/user-attachments/assets/e7c42964-7d0d-4262-9991-94a86ea900a8)
