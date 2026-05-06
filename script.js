/* ═══════════════════════════════════════════
   LUXE — ADVANCED PRODUCT DISCOVERY
   script.js
═══════════════════════════════════════════ */

'use strict';

// ── PRODUCT DATA ──────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1, name: 'Wireless Studio Headphones', category: 'electronics', price: 249,
    originalPrice: 329, rating: 4.8, reviews: 1240,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    badges: ['new', 'hot'], eco: false,
    description: 'Premium over-ear headphones with active noise cancellation, 40h battery life, and studio-quality sound. The perfect companion for audiophiles and professionals alike.',
    tags: ['Bluetooth 5.2', '40h Battery', 'ANC', 'Foldable']
  },
  {
    id: 2, name: 'Minimalist Leather Watch', category: 'fashion', price: 189,
    originalPrice: 249, rating: 4.9, reviews: 876,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    badges: ['sale'], eco: false,
    description: 'Hand-crafted Swiss movement timepiece with a genuine Italian leather strap. Timeless design meets modern precision engineering.',
    tags: ['Swiss Movement', 'Sapphire Glass', 'Water Resistant', 'Genuine Leather']
  },
  {
    id: 3, name: 'Pro Runner Sneakers', category: 'sports', price: 149,
    originalPrice: null, rating: 4.7, reviews: 2341,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&q=80',
    badges: ['hot'], eco: true,
    description: 'Engineered with recycled ocean plastic and responsive foam technology. Designed for peak performance from 5K to marathon.',
    tags: ['Recycled Materials', 'Responsive Foam', 'Breathable', 'Eco-Friendly']
  },
  {
    id: 4, name: 'Smart Home Speaker', category: 'electronics', price: 129,
    originalPrice: 179, rating: 4.6, reviews: 543,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    badges: ['sale', 'new'], eco: false,
    description: '360° room-filling sound with built-in AI assistant. Control your entire smart home ecosystem with your voice.',
    tags: ['360° Sound', 'AI Assistant', 'WiFi 6', 'Multi-room']
  },
  {
    id: 5, name: 'Cashmere Knit Sweater', category: 'fashion', price: 220,
    originalPrice: null, rating: 4.8, reviews: 412,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80',
    badges: ['eco'], eco: true,
    description: 'Grade-A Mongolian cashmere, ethically sourced and hand-finished. Impossibly soft, timelessly stylish.',
    tags: ['100% Cashmere', 'Ethically Sourced', 'Machine Washable', 'Unisex']
  },
  {
    id: 6, name: 'Bamboo Desk Organizer Set', category: 'home', price: 68,
    originalPrice: 89, rating: 4.5, reviews: 234,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80',
    badges: ['eco', 'sale'], eco: true,
    description: 'Sustainably harvested bamboo desk organizer with wireless charging pad built in. Keeps your workspace minimal and powered.',
    tags: ['Bamboo', 'Wireless Charging', 'Sustainable', '5-Piece Set']
  },
  {
    id: 7, name: 'Vitamin C Glow Serum', category: 'beauty', price: 85,
    originalPrice: null, rating: 4.9, reviews: 1876,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&q=80',
    badges: ['hot', 'new'], eco: true,
    description: 'Clinical-strength 20% Vitamin C serum with hyaluronic acid and niacinamide. Clinically proven to reduce dark spots in 4 weeks.',
    tags: ['20% Vitamin C', 'Vegan', 'Cruelty-Free', 'Dermatologist Tested']
  },
  {
    id: 8, name: '4K Action Camera', category: 'electronics', price: 349,
    originalPrice: 449, rating: 4.7, reviews: 987,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80',
    badges: ['sale', 'hot'], eco: false,
    description: 'Waterproof to 60m, shoots 4K at 120fps with HyperSmooth 5.0 stabilization. Built for adventures you never want to forget.',
    tags: ['4K 120fps', 'Waterproof 60m', 'HyperSmooth 5.0', 'Voice Control']
  },
  {
    id: 9, name: 'Yoga Mat Pro Grip', category: 'sports', price: 78,
    originalPrice: 95, rating: 4.6, reviews: 654,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500&q=80',
    badges: ['eco'], eco: true,
    description: 'Natural rubber non-slip yoga mat with alignment guides. 6mm thick for joint protection. FSC certified and biodegradable.',
    tags: ['Natural Rubber', 'FSC Certified', 'Non-Slip', '6mm Thick']
  },
  {
    id: 10, name: 'Ceramic Pour Over Set', category: 'home', price: 95,
    originalPrice: null, rating: 4.8, reviews: 321,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80',
    badges: ['new'], eco: true,
    description: 'Hand-thrown stoneware pour-over coffee set with a reusable mesh filter. Morning ritual, elevated.',
    tags: ['Handmade', 'Stoneware', 'Reusable Filter', '600ml Capacity']
  },
  {
    id: 11, name: 'Silk Pillowcase Duo', category: 'beauty', price: 119,
    originalPrice: 149, rating: 4.7, reviews: 789,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80',
    badges: ['sale'], eco: false,
    description: '22-momme mulberry silk pillowcases. Proven to reduce hair frizz and sleep wrinkles. Hypoallergenic and temperature-regulating.',
    tags: ['22-Momme Silk', 'Hypoallergenic', 'Anti-Aging', 'Set of 2']
  },
  {
    id: 12, name: 'Carbon Fiber Wallet', category: 'fashion', price: 59,
    originalPrice: null, rating: 4.5, reviews: 1102,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80',
    badges: ['hot'], eco: false,
    description: 'Ultra-slim RFID-blocking carbon fiber wallet. Holds 12 cards and cash. Weighs just 28 grams.',
    tags: ['RFID Blocking', 'Carbon Fiber', '28g', '12 Cards']
  },
  {
    id: 13, name: 'Smart Water Bottle', category: 'sports', price: 49,
    originalPrice: 65, rating: 4.4, reviews: 2109,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80',
    badges: ['eco', 'sale'], eco: true,
    description: 'Hydration tracker with LED reminders and temperature display. Made from recycled stainless steel. 24h cold, 12h hot.',
    tags: ['Recycled Steel', 'LED Hydration Tracker', 'BPA-Free', '750ml']
  },
  {
    id: 14, name: 'Mechanical Keyboard TKL', category: 'electronics', price: 179,
    originalPrice: 229, rating: 4.8, reviews: 764,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
    badges: ['new', 'sale'], eco: false,
    description: 'Tenkeyless mechanical keyboard with hot-swappable switches, per-key RGB, and aircraft-grade aluminum frame. Type in style.',
    tags: ['Hot-Swap', 'Per-Key RGB', 'Aluminum Frame', 'Wireless']
  },
  {
    id: 15, name: 'Linen Duvet Cover', category: 'home', price: 145,
    originalPrice: null, rating: 4.9, reviews: 543,
    image: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=500&q=80',
    badges: ['eco', 'new'], eco: true,
    description: 'OEKO-TEX certified stonewashed linen duvet cover. Breathable, durable, and gets softer with every wash.',
    tags: ['OEKO-TEX', 'Stonewashed Linen', 'Breathable', 'Machine Washable']
  },
  {
    id: 16, name: 'Retinol Night Cream', category: 'beauty', price: 72,
    originalPrice: 89, rating: 4.6, reviews: 934,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80',
    badges: ['sale'], eco: true,
    description: 'Time-release retinol with peptides and ceramides for overnight skin renewal. Reduces fine lines visibly in 8 weeks.',
    tags: ['Time-Release Retinol', 'Vegan', 'For All Skin Types', 'Fragrance-Free']
  }
];

// ── STATE ─────────────────────────────────────────────────────
const state = {
  products: [...PRODUCTS],
  filtered: [...PRODUCTS],
  wishlist: JSON.parse(localStorage.getItem('luxe_wishlist') || '[]'),
  filters: {
    category: 'all',
    maxPrice: 500,
    minRating: 0,
    eco: false,
    search: '',
    sort: 'default'
  }
};

// ── DOM REFS ──────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// ── INIT ──────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderTrending();
  renderRecommendations();
  initFilters();
  initSearch();
  initNavigation();
  initSidebar();
  initModal();
  initWishlist();
  initScrollAnimations();
  initBackToTop();
  initCounters();
  initContactForm();
  initFooterLinks();
  updateWishlistBadge();
});

// ── RENDER PRODUCTS ───────────────────────────────────────────
function renderProducts(products = state.filtered) {
  const grid = $('productGrid');
  const noRes = $('noResults');
  const count = $('productCount');

  grid.innerHTML = '';

  if (products.length === 0) {
    grid.style.display = 'none';
    noRes.style.display = 'flex';
    count.textContent = 'No products found';
    return;
  }

  grid.style.display = 'grid';
  noRes.style.display = 'none';
  count.textContent = `Showing ${products.length} product${products.length !== 1 ? 's' : ''}`;

  products.forEach((p, i) => {
    const card = createProductCard(p);
    card.style.animationDelay = `${i * 0.06}s`;
    card.classList.add('product-card-anim');
    grid.appendChild(card);
  });
}

function createProductCard(p) {
  const wished = state.wishlist.includes(p.id);
  const stars = generateStars(p.rating);
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = p.id;

  const badgeHTML = p.badges.map(b => `<span class="badge-tag badge-${b}">${b.toUpperCase()}</span>`).join('');

  card.innerHTML = `
    <div class="product-img-wrap">
      <div class="product-badges">${badgeHTML}</div>
      <img src="${p.image}" alt="${p.name}" loading="lazy"/>
      <div class="product-quick"><i class="fas fa-eye"></i> VIEW DETAILS</div>
    </div>
    <div class="product-info">
      <span class="product-cat">${p.category}</span>
      <h3 class="product-name">${p.name}</h3>
      <div class="product-rating">
        <span class="stars">${stars}</span>
        <span class="rating-num">${p.rating} (${p.reviews.toLocaleString()})</span>
      </div>
      <div class="product-footer">
        <div class="product-price">
          $${p.price}${p.originalPrice ? `<span class="original">$${p.originalPrice}</span>` : ''}
        </div>
        <button class="product-wish ${wished ? 'wished' : ''}" data-id="${p.id}" title="Add to Wishlist">
          <i class="${wished ? 'fas' : 'far'} fa-heart"></i>
        </button>
      </div>
    </div>
  `;

  card.addEventListener('click', e => {
    if (e.target.closest('.product-wish')) {
      toggleWishlist(p.id, e.target.closest('.product-wish'));
    } else {
      openModal(p);
    }
  });

  return card;
}

function generateStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    '<i class="fas fa-star"></i>'.repeat(full) +
    (half ? '<i class="fas fa-star-half-alt"></i>' : '') +
    '<i class="far fa-star"></i>'.repeat(empty)
  );
}

// ── TRENDING ──────────────────────────────────────────────────
function renderTrending() {
  const track = $('trendingTrack');
  const trending = [...PRODUCTS].sort((a, b) => b.reviews - a.reviews).slice(0, 10);

  trending.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'trending-card';
    card.innerHTML = `
      <div class="trending-rank">${i + 1}</div>
      <img src="${p.image}" alt="${p.name}" loading="lazy"/>
      <div class="trending-card-info">
        <h4>${p.name}</h4>
        <span>$${p.price}</span>
      </div>
    `;
    card.addEventListener('click', () => openModal(p));
    track.appendChild(card);
  });

  $('trendLeft').addEventListener('click', () => {
    track.scrollBy({ left: -240, behavior: 'smooth' });
  });
  $('trendRight').addEventListener('click', () => {
    track.scrollBy({ left: 240, behavior: 'smooth' });
  });
}

// ── RECOMMENDATIONS ───────────────────────────────────────────
function renderRecommendations() {
  const grid = $('recoGrid');
  const reco = [...PRODUCTS].sort(() => Math.random() - 0.5).slice(0, 6);

  reco.forEach(p => {
    const card = createProductCard(p);
    grid.appendChild(card);
  });
}

// ── FILTERS ───────────────────────────────────────────────────
function initFilters() {
  // Category buttons
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filters.category = btn.dataset.cat;
      applyFilters();
      ripple(btn);
    });
  });

  // Price range
  const priceRange = $('priceRange');
  priceRange.addEventListener('input', () => {
    $('priceVal').textContent = priceRange.value;
    state.filters.maxPrice = parseInt(priceRange.value);
    applyFilters();
  });

  // Rating filter
  $$('.rating-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.rating-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filters.minRating = parseFloat(btn.dataset.rating);
      applyFilters();
      ripple(btn);
    });
  });

  // Eco toggle
  $('ecoToggle').addEventListener('change', e => {
    state.filters.eco = e.target.checked;
    applyFilters();
  });

  // Sort
  $('sortSelect').addEventListener('change', e => {
    state.filters.sort = e.target.value;
    applyFilters();
  });

  // Clear filters
  $('clearFilters').addEventListener('click', resetFilters);
  $('clearFilters2').addEventListener('click', resetFilters);
}

function resetFilters() {
  state.filters = { category: 'all', maxPrice: 500, minRating: 0, eco: false, search: '', sort: 'default' };
  $$('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-cat="all"]').classList.add('active');
  $$('.rating-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-rating="0"]').classList.add('active');
  $('priceRange').value = 500;
  $('priceVal').textContent = '500';
  $('ecoToggle').checked = false;
  $('sortSelect').value = 'default';
  $('searchInput').value = '';
  applyFilters();
  showToast('Filters reset!', 'info');
}

function applyFilters() {
  let results = [...PRODUCTS];

  if (state.filters.category !== 'all') {
    results = results.filter(p => p.category === state.filters.category);
  }
  if (state.filters.search) {
    const q = state.filters.search.toLowerCase();
    results = results.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }
  results = results.filter(p => p.price <= state.filters.maxPrice);
  results = results.filter(p => p.rating >= state.filters.minRating);
  if (state.filters.eco) {
    results = results.filter(p => p.eco);
  }

  // Sort
  switch (state.filters.sort) {
    case 'price-asc': results.sort((a, b) => a.price - b.price); break;
    case 'price-desc': results.sort((a, b) => b.price - a.price); break;
    case 'rating': results.sort((a, b) => b.rating - a.rating); break;
    case 'name': results.sort((a, b) => a.name.localeCompare(b.name)); break;
  }

  state.filtered = results;
  renderProducts(results);
}

// ── SEARCH ────────────────────────────────────────────────────
function initSearch() {
  const input = $('searchInput');
  const resultsBox = $('searchResults');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    state.filters.search = q;
    applyFilters();

    if (!q) {
      resultsBox.classList.remove('active');
      resultsBox.innerHTML = '';
      return;
    }

    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    ).slice(0, 6);

    if (matches.length === 0) {
      resultsBox.innerHTML = `<div style="padding:16px;color:var(--text2);font-size:0.85rem;text-align:center;">No results for "${q}"</div>`;
    } else {
      resultsBox.innerHTML = matches.map(p => `
        <div class="search-result-item" data-id="${p.id}">
          <img src="${p.image}" alt="${p.name}"/>
          <div class="sr-info">
            <div class="sr-name">${p.name}</div>
            <div class="sr-price">$${p.price}</div>
          </div>
        </div>
      `).join('');

      resultsBox.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          const product = PRODUCTS.find(p => p.id === parseInt(item.dataset.id));
          if (product) openModal(product);
          resultsBox.classList.remove('active');
          input.value = '';
        });
      });
    }

    resultsBox.classList.add('active');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) {
      resultsBox.classList.remove('active');
    }
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      resultsBox.classList.remove('active');
      input.blur();
    }
  });
}

// ── NAVIGATION ────────────────────────────────────────────────
function initNavigation() {
  const navbar = $('navbar');

  // Scroll nav styling
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Smooth scroll for nav links
  document.addEventListener('click', e => {
    const scrollTarget = e.target.closest('[data-scroll]');
    if (scrollTarget) {
      e.preventDefault();
      const targetId = scrollTarget.dataset.scroll;
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Dropdown category links
    const catLink = e.target.closest('[data-cat]');
    if (catLink && !catLink.closest('.sidebar') && !catLink.closest('.footer')) {
      e.preventDefault();
      const cat = catLink.dataset.cat;
      state.filters.category = cat;
      $$('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.cat === cat);
      });
      applyFilters();
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }

    // Footer category links
    const footerCat = e.target.closest('.footer [data-cat]');
    if (footerCat) {
      e.preventDefault();
      const cat = footerCat.dataset.cat;
      state.filters.category = cat;
      applyFilters();
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ── SIDEBAR ───────────────────────────────────────────────────
function initSidebar() {
  const sidebar = $('sidebar');
  const overlay = $('sidebarOverlay');

  const open = () => {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  $('hamburger').addEventListener('click', open);
  $('sidebarClose').addEventListener('click', close);
  overlay.addEventListener('click', close);
}

// ── MODAL ─────────────────────────────────────────────────────
function initModal() {
  const overlay = $('modalOverlay');
  const closeBtn = $('modalClose');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(p) {
  const wished = state.wishlist.includes(p.id);
  const stars = generateStars(p.rating);
  const tagsHTML = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  $('modalInner').innerHTML = `
    <div class="modal-img-wrap">
      <img src="${p.image}" alt="${p.name}"/>
    </div>
    <div class="modal-details">
      <span class="modal-cat">${p.category}</span>
      <h2 class="modal-name">${p.name}</h2>
      <div class="modal-rating">
        <span class="stars">${stars}</span>
        <span style="font-size:0.85rem;color:var(--text2)">${p.rating} · ${p.reviews.toLocaleString()} reviews</span>
      </div>
      <div class="modal-price">$${p.price} ${p.originalPrice ? `<span style="font-size:1rem;color:var(--text2);text-decoration:line-through;font-family:'DM Sans',sans-serif">$${p.originalPrice}</span>` : ''}</div>
      <p class="modal-desc">${p.description}</p>
      <div class="modal-tags">${tagsHTML}</div>
      <div class="modal-actions">
        <button class="btn-wish ${wished ? 'wished' : ''}" id="modalWish" data-id="${p.id}">
          <i class="${wished ? 'fas' : 'far'} fa-heart"></i> ${wished ? 'Wishlisted' : 'Wishlist'}
        </button>
        <button class="btn-cart" id="modalCart">
          <i class="fas fa-bag-shopping"></i> Add to Cart
        </button>
      </div>
    </div>
  `;

  $('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  $('modalWish').addEventListener('click', () => {
    toggleWishlist(p.id, $('modalWish'));
    const wBtn = $('modalWish');
    const inList = state.wishlist.includes(p.id);
    wBtn.classList.toggle('wished', inList);
    wBtn.innerHTML = `<i class="${inList ? 'fas' : 'far'} fa-heart"></i> ${inList ? 'Wishlisted' : 'Wishlist'}`;
  });

  $('modalCart').addEventListener('click', () => {
    $('modalCart').innerHTML = '<i class="fas fa-check"></i> Added!';
    $('modalCart').style.background = 'var(--teal)';
    showToast(`🛒 ${p.name} added to cart!`, 'success');
    setTimeout(() => {
      $('modalCart').innerHTML = '<i class="fas fa-bag-shopping"></i> Add to Cart';
      $('modalCart').style.background = '';
    }, 2000);
  });
}

function closeModal() {
  $('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── WISHLIST ──────────────────────────────────────────────────
function initWishlist() {
  $('wishlistBtn').addEventListener('click', () => {
    $('wishlistPanel').classList.add('open');
    renderWishlistPanel();
  });

  $('closeWishlist').addEventListener('click', () => {
    $('wishlistPanel').classList.remove('open');
  });
}

function toggleWishlist(id, btn) {
  const idx = state.wishlist.indexOf(id);
  if (idx === -1) {
    state.wishlist.push(id);
    showToast('❤️ Added to wishlist!', 'success');
    if (btn) {
      btn.classList.add('wished');
      btn.querySelector('i').className = 'fas fa-heart';
    }
  } else {
    state.wishlist.splice(idx, 1);
    showToast('Removed from wishlist', 'info');
    if (btn) {
      btn.classList.remove('wished');
      btn.querySelector('i').className = 'far fa-heart';
    }
  }
  localStorage.setItem('luxe_wishlist', JSON.stringify(state.wishlist));
  updateWishlistBadge();
}

function updateWishlistBadge() {
  $('wishlistBadge').textContent = state.wishlist.length;
  $('wishlistBadge').style.transform = 'scale(1.4)';
  setTimeout(() => $('wishlistBadge').style.transform = '', 300);
}

function renderWishlistPanel() {
  const container = $('wishlistItems');
  const empty = $('wishlistEmpty');

  container.innerHTML = '';

  if (state.wishlist.length === 0) {
    empty.style.display = 'flex';
    container.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  container.style.display = 'flex';

  state.wishlist.forEach(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const item = document.createElement('div');
    item.className = 'wishlist-item';
    item.innerHTML = `
      <img src="${p.image}" alt="${p.name}"/>
      <div class="wi-info">
        <div class="wi-name">${p.name}</div>
        <div class="wi-price">$${p.price}</div>
      </div>
      <button class="wi-remove" data-id="${p.id}" title="Remove"><i class="fas fa-trash-alt"></i></button>
    `;
    item.querySelector('.wi-remove').addEventListener('click', () => {
      toggleWishlist(p.id);
      renderWishlistPanel();
    });
    item.querySelector('img').addEventListener('click', () => openModal(p));
    container.appendChild(item);
  });
}

// ── SCROLL ANIMATIONS ─────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  $$('.scroll-reveal').forEach(el => observer.observe(el));
}

// ── BACK TO TOP ───────────────────────────────────────────────
function initBackToTop() {
  const btn = $('backTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── COUNTERS ──────────────────────────────────────────────────
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current).toLocaleString();
          if (current >= target) clearInterval(timer);
        }, 25);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  $$('.stat-num').forEach(el => observer.observe(el));
}

// ── CONTACT FORM ──────────────────────────────────────────────
function initContactForm() {
  $('submitForm').addEventListener('click', () => {
    const name = $('fname').value.trim();
    const email = $('femail').value.trim();
    const msg = $('fmessage').value.trim();

    if (!name || !email || !msg) {
      showToast('⚠️ Please fill in all required fields.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('⚠️ Please enter a valid email.', 'error');
      return;
    }

    const btn = $('submitForm');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
      btn.disabled = false;
      $('formSuccess').style.display = 'block';
      $('fname').value = $('femail').value = $('fmessage').value = '';
      showToast('✅ Message sent successfully!', 'success');
      setTimeout(() => $('formSuccess').style.display = 'none', 5000);
    }, 1500);
  });
}

// ── FOOTER LINKS ──────────────────────────────────────────────
function initFooterLinks() {
  $('subscribeBtn').addEventListener('click', () => {
    const email = $('newsletter').value.trim();
    if (!email) return;
    showToast('🎉 Subscribed to LUXE newsletter!', 'success');
    $('newsletter').value = '';
  });
}

// ── VIEW TOGGLE ───────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  $('gridView').addEventListener('click', () => {
    $('productGrid').classList.remove('list-view');
    $('gridView').classList.add('active');
    $('listView').classList.remove('active');
  });

  $('listView').addEventListener('click', () => {
    $('productGrid').classList.add('list-view');
    $('listView').classList.add('active');
    $('gridView').classList.remove('active');
  });

  // Category cards
  $$('.cat-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.cat;
      state.filters.category = cat;
      $$('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.cat === cat);
      });
      applyFilters();
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
      showToast(`🗂️ Filtered: ${cat.charAt(0).toUpperCase() + cat.slice(1)}`, 'info');
    });
  });

  // Hero buttons
  $$('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', e => {
      if (btn.tagName === 'BUTTON') {
        e.preventDefault();
        const target = document.getElementById(btn.dataset.scroll);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// ── TOAST ─────────────────────────────────────────────────────
let toastTimer;
function showToast(msg, type = 'success') {
  const toast = $('toast');
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ── RIPPLE EFFECT ─────────────────────────────────────────────
function ripple(btn) {
  btn.style.transform = 'scale(0.93)';
  setTimeout(() => btn.style.transform = '', 200);
}

// ── LAZY LOAD SCROLL REVEALS ──────────────────────────────────
// Reobserve dynamically added scroll-reveal elements
const reObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('revealed');
  });
}, { threshold: 0.1 });

const mutObserver = new MutationObserver(mutations => {
  mutations.forEach(m => {
    m.addedNodes.forEach(node => {
      if (node.nodeType === 1) {
        node.querySelectorAll && node.querySelectorAll('.scroll-reveal').forEach(el => reObserver.observe(el));
      }
    });
  });
});

mutObserver.observe(document.body, { childList: true, subtree: true });
