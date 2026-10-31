const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const menus = {
  coffee: [
    ['Veloura Latte','Double espresso, silky milk, soft finish.','32k','https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=85','HOUSE FAVOURITE'],
    ['Iced Americano','Bright espresso over ice, clean & bold.','28k','https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85','REFRESHING'],
    ['Cloud Cappuccino','Rich espresso with a cloud of milk foam.','30k','https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=85','CLASSIC']
  ],
  noncoffee: [
    ['Matcha Cloud','Ceremonial-style matcha with creamy milk.','34k','https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=85','HOUSE FAVOURITE'],
    ['Strawberry Milk','Fresh strawberry notes and chilled milk.','30k','https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=800&q=85','FRUITY'],
    ['Chocolate Frappe','Deep cocoa blended until silky smooth.','33k','https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85','COMFORTING']
  ],
  bites: [
    ['Butter Croissant','Golden, flaky, and baked fresh daily.','26k','https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85','BAKED FRESH'],
    ['Berry Cheesecake','Creamy cheesecake with berry compote.','38k','https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=85','SWEET PICK'],
    ['Avocado Toast','Sourdough, smashed avocado, garden herbs.','42k','https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=85','ALL DAY']
  ]
};
const grid = document.getElementById('menuGrid');
function renderMenu(category) {
  grid.innerHTML = menus[category].map((item, index) => `
    <article class="menu-card">
      <div class="menu-thumb"><img src="${item[3]}" alt="${item[0]}"><span>${item[4]}</span></div>
      <div class="menu-info"><div><h3>${item[0]}</h3><p>${item[1]}</p></div><b>${item[2]}</b></div>
    </article>`).join('');
}
document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected','false');
  });
  tab.classList.add('active');
  tab.setAttribute('aria-selected','true');
  renderMenu(tab.dataset.category);
}));
document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
