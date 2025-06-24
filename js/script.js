// script.js

// Scroll suave para enlaces del menú
const links = document.querySelectorAll('nav a[href^="#"]');

for (const link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Validación simple del formulario
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.');
    form.reset();
  });
}
