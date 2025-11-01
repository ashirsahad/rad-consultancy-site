// Mobile nav toggle
const toggle = document.querySelector('#mobileToggle');
const nav = document.querySelector('nav.main-nav');
if (toggle){
  toggle.addEventListener('click', ()=>{
    const shown = nav.style.display === 'flex';
    nav.style.display = shown ? 'none':'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '8px';
    nav.style.padding = '10px 0';
  });
}

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item = btn.closest('.faq-item');
    item.classList.toggle('show');
  });
});

// Simple tabs (pricing)
document.querySelectorAll('[data-tab]').forEach(tab=>{
  tab.addEventListener('click',()=>{
    const group = tab.dataset.group;
    document.querySelectorAll(`[data-group='${group}']`).forEach(el=>el.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    document.querySelectorAll(`[data-pane='${group}']`).forEach(p=>p.style.display='none');
    const pane = document.getElementById(target);
    if (pane) pane.style.display='grid';
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
