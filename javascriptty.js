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
