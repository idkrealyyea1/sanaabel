/* ===== MENU DATA ===== */
const U = (id) => `https://images.unsplash.com/photo-${id}?w=400&h=300&fit=crop&q=80&auto=format`;

const menuData = {
  shawarma: [
    { name: 'شاورما دجاج', desc: 'شاورما دجاج مشوي بتتبيلة البيت وصوص ثوم', price: 10, popular: true,
      img: U('1529006557810-274b9b2fc783') },
    { name: 'شاورما لحم', desc: 'شاورما لحم طازج بالخضار والصوص الخاص', price: 12, popular: true,
      img: U('1561626423-a51b45aef0a2') },
    { name: 'شاورما مكس', desc: 'مزيج دجاج ولحم بتتبيلة مميزة', price: 13,
      img: U('1571407970349-bc81e71e9a7e') },
    { name: 'شاورما حارة', desc: 'شاورما دجاج بالصوص الحار الخاص', price: 11,
      img: U('1551183053-bf91798d765e') },
    { name: 'شاورما بالجبن', desc: 'شاورما دجاج مع جبن مذاب وصوص خاص', price: 13,
      img: U('1574071318508-1cdbab80d002') },
  ],
  burgers: [
    { name: 'برجر دجاج', desc: 'برجر دجاج مشوي مقرمش بصوص خاص', price: 11, popular: true,
      img: U('1568901346375-23c9450c58cd') },
    { name: 'برجر لحم', desc: 'برجر لحم طازج مشوي على الفحم', price: 12,
      img: U('1550317138-10000687a72b') },
    { name: 'برجر دبل', desc: 'برجر مزدوج لحم أو دجاج مع جبن', price: 16,
      img: U('1586816001966-08807d059c7d') },
    { name: 'برجر مشوي سنابل', desc: 'برجر خاص بتتبيلة سنابل المميزة', price: 14, popular: true,
      img: U('1594212699903-ec8a3eca50f5') },
  ],
  chicken: [
    { name: 'دجاج مشوي', desc: 'قطعة دجاج مشوية بتتبيلة الأعشاب', price: 14,
      img: U('1598103442097-8b74394b95c3') },
    { name: 'نجت دجاج', desc: 'قطع دجاج مقلية مقرمشة ذهبية', price: 10,
      img: U('1562802378-063ec186a863') },
    { name: 'دجاج حار', desc: 'دجاج مشوي بالتتبيلة الحارة المميزة', price: 15, popular: true,
      img: U('1532550884608-acf50e422b50') },
    { name: 'كودو دجاج', desc: 'وجبة كودو دجاج مقرمشة كاملة', price: 18,
      img: U('1626645738196-c2a7c87a8f58') },
  ],
  sides: [
    { name: 'بطاطس عادي', desc: 'بطاطس مقلية ذهبية مقرمشة', price: 5,
      img: U('1573080496219-bb080dd4f877') },
    { name: 'بطاطس مبهرة', desc: 'بطاطس بتوابل سنابل الخاصة', price: 7, popular: true,
      img: U('1630384060421-cb20d0e0649d') },
    { name: 'حلقات بصل', desc: 'حلقات بصل مقلية مقرمشة ذهبية', price: 8,
      img: U('1541592106381-b31e9677c0e5') },
    { name: 'بطاطس بالجبن', desc: 'بطاطس مع جبن مذاب وصوص', price: 10,
      img: U('1504674900247-0877df9cc836') },
  ],
  combos: [
    { name: 'وجبة شاورما دجاج', desc: 'شاورما دجاج + بطاطس + مشروب', price: 17, popular: true,
      img: U('1529006557810-274b9b2fc783') },
    { name: 'وجبة شاورما لحم', desc: 'شاورما لحم + بطاطس + مشروب', price: 19,
      img: U('1561626423-a51b45aef0a2') },
    { name: 'وجبة برجر دجاج', desc: 'برجر دجاج + بطاطس + مشروب', price: 18,
      img: U('1568901346375-23c9450c58cd') },
    { name: 'وجبة برجر لحم', desc: 'برجر لحم + بطاطس + مشروب', price: 19,
      img: U('1550317138-10000687a72b') },
    { name: 'وجبة العائلة', desc: 'شاورمتين + برجرين + بطاطس كبيرة', price: 45, popular: true,
      img: U('1594212699903-ec8a3eca50f5') },
  ],
};

/* ===== INIT AOS ===== */
AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-quad' });

/* ===== NAVBAR ===== */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ===== PROMO BAR ===== */
const promoClose = document.getElementById('promoClose');
if (promoClose) {
  promoClose.addEventListener('click', () => {
    document.documentElement.classList.add('promo-dismissed');
    localStorage.setItem('promoClosed', '1');
  });
}

/* ===== STATUS BADGE ===== */
const statusBadge = document.getElementById('statusBadge');
const statusText  = document.getElementById('statusText');
if (statusBadge && statusText) {
  const h = new Date().getHours();
  const open = h >= 12;
  statusBadge.classList.toggle('is-closed', !open);
  statusText.textContent = open ? 'مفتوح الآن' : 'مغلق — نفتح ١٢ ظهراً';
}

/* ===== MENU RENDER ===== */
const tabs = document.querySelectorAll('.tab');
const grid = document.getElementById('menuGrid');

function renderMenu(cat) {
  const items = menuData[cat] || [];
  grid.innerHTML = '';
  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="card-img-wrap">
        ${item.popular ? '<div class="card-badge">⭐ الأكثر طلباً</div>' : ''}
        <img src="${item.img}" alt="${item.name}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <div class="card-img-fallback">🌯</div>
      </div>
      <div class="card-body">
        <div class="card-name">${item.name}</div>
        <div class="card-desc">${item.desc}</div>
        <div class="card-footer">
          <div class="card-price">${item.price}<span>ر.س</span></div>
          <button class="card-order-btn" title="اطلب الآن">+</button>
        </div>
      </div>
    `;
    card.querySelector('.card-order-btn').addEventListener('click', () => {
      const msg = encodeURIComponent(`مرحباً، أريد طلب: ${item.name} - ${item.price} ر.س`);
      window.open(`https://wa.me/966500000000?text=${msg}`, '_blank');
    });
    grid.appendChild(card);
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.cat);
  });
});
renderMenu('shawarma');

/* ===== POPULAR SECTION ===== */
const popularGrid = document.getElementById('popularGrid');
if (popularGrid) {
  const allItems = Object.values(menuData).flat();
  const popular = allItems.filter(i => i.popular).slice(0, 6);
  popular.forEach(item => {
    const card = document.createElement('div');
    card.className = 'popular-card';
    card.setAttribute('data-aos', 'fade-up');
    card.innerHTML = `
      <div class="card-img-wrap">
        <div class="popular-badge">🔥 الأكثر مبيعاً</div>
        <img src="${item.img}" alt="${item.name}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <div class="card-img-fallback">🌯</div>
      </div>
      <div class="popular-body">
        <div class="card-name">${item.name}</div>
        <div class="card-desc">${item.desc}</div>
        <div class="popular-footer">
          <div class="popular-price">${item.price}<span>ر.س</span></div>
          <button class="card-order-btn" title="اطلب الآن">+</button>
        </div>
      </div>
    `;
    card.querySelector('.card-order-btn').addEventListener('click', () => {
      const msg = encodeURIComponent(`مرحباً، أريد طلب: ${item.name} - ${item.price} ر.س`);
      window.open(`https://wa.me/966500000000?text=${msg}`, '_blank');
    });
    popularGrid.appendChild(card);
  });
}

/* ===== OFFER TIMERS ===== */
document.querySelectorAll('.offer-timer').forEach(el => {
  const endTime = Date.now() + (parseInt(el.dataset.hours||0)*3600 + parseInt(el.dataset.mins||0)*60 + parseInt(el.dataset.secs||0)) * 1000;
  function tick() {
    const diff = Math.max(0, endTime - Date.now());
    const h = String(Math.floor(diff/3600000)).padStart(2,'0');
    const m = String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
    const s = String(Math.floor((diff%60000)/1000)).padStart(2,'0');
    el.textContent = `⏱ ${h}:${m}:${s}`;
    if (diff > 0) setTimeout(tick, 1000);
  }
  tick();
});

/* ===== GALLERY LIGHTBOX ===== */
const lightbox       = document.getElementById('lightbox');
const lightboxImg    = document.getElementById('lightboxImg');
const lightboxCap    = document.getElementById('lightboxCaption');
const lightboxClose  = document.getElementById('lightboxClose');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const cap = item.querySelector('.gallery-overlay span');
    if (!img) return;
    lightboxImg.src = img.src.replace('w=500', 'w=1200').replace('h=400', 'h=800');
    lightboxImg.alt = img.alt;
    lightboxCap.textContent = cap ? cap.textContent : img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});
if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}
if (lightbox) {
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

/* ===== REVIEWS SLIDER ===== */
const track  = document.getElementById('reviewsTrack');
const dots   = document.getElementById('reviewsDots');
let current  = 0;

function getVisible() {
  return window.innerWidth <= 540 ? 1 : window.innerWidth <= 768 ? 1 : 3;
}

function initSlider() {
  if (!track || !dots) return;
  const cards    = track.querySelectorAll('.review-card');
  const visible  = getVisible();
  const total    = cards.length - visible + 1;
  dots.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const d = document.createElement('button');
    d.className = 'rdot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dots.appendChild(d);
  }
  goTo(0);
}

function goTo(idx) {
  const cards   = track.querySelectorAll('.review-card');
  const visible = getVisible();
  const total   = cards.length - visible + 1;
  current = Math.max(0, Math.min(idx, total - 1));
  const cardW = cards[0].offsetWidth + 24; // gap
  track.style.transform = `translateX(${current * cardW}px)`;
  dots.querySelectorAll('.rdot').forEach((d,i) => d.classList.toggle('active', i === current));
}

// auto-play
let sliderInterval = setInterval(() => {
  const cards   = track ? track.querySelectorAll('.review-card') : [];
  const visible = getVisible();
  const total   = cards.length - visible + 1;
  goTo((current + 1) % total);
}, 4500);

// touch/swipe
let touchStartX = 0;
if (track) {
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  });
}

window.addEventListener('resize', initSlider);
initSlider();

/* ===== COUNTERS ===== */
const counters = document.querySelectorAll('.counter');
const cObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target, 10) || 0;
    const duration = 1800;
    const step = target / (duration / 16);
    let cur = 0;
    const tick = () => {
      cur = Math.min(cur + step, target);
      el.textContent = Math.floor(cur).toLocaleString('ar-SA');
      if (cur < target) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString('ar-SA');
    };
    requestAnimationFrame(tick);
    cObserver.unobserve(el);
  });
}, { threshold: 0.4 });
counters.forEach(el => cObserver.observe(el));

/* ===== QUICK ORDER ===== */
const sendBtn = document.getElementById('sendOrderBtn');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name  = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const meal  = document.getElementById('orderMeal').value;
    if (!name || !meal) {
      alert('يرجى إدخال الاسم واختيار الوجبة');
      return;
    }
    const msg = encodeURIComponent(
      `مرحباً سنابل 🌾\n` +
      `الاسم: ${name}\n` +
      (phone ? `الهاتف: ${phone}\n` : '') +
      `الوجبة: ${meal}\n` +
      `أرجو التأكيد وشكراً!`
    );
    window.open(`https://wa.me/966500000000?text=${msg}`, '_blank');
  });
}

/* ===== BACK TO TOP ===== */
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
