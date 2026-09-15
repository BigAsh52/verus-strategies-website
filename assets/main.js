// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
          if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
},{threshold:0.15});
revealEls.forEach(el=>io.observe(el));

// Mobile nav toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if(menuToggle && navLinks){
    menuToggle.addEventListener('click', ()=>{
          navLinks.classList.toggle('mobile-open');
    });
}

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item=>{
    const q = item.querySelector('.faq-q');
    if(!q) return;
    q.addEventListener('click', ()=>{
          const wasOpen = item.classList.contains('open');
          document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));
          if(!wasOpen) item.classList.add('open');
    });
});

// Contact page: audience toggle
document.querySelectorAll('.path-card').forEach(card=>{
    card.addEventListener('click', ()=>{
          document.querySelectorAll('.path-card').forEach(c=>c.classList.remove('active'));
          card.classList.add('active');
          const audience = card.dataset.audience;
          const audienceField = document.getElementById('audience-field');
          if(audienceField) audienceField.value = audience;
    });
});

// Contact form mock submit (front-end only, no backend wired up yet)
const contactForm = document.getElementById('contact-form');
if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
          e.preventDefault();
          document.getElementById('form-success').classList.add('show');
          contactForm.reset();
    });
}
