// JavaScript general de SAZÓN ARTESANA.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', evento => {
      const destino = document.querySelector(enlace.getAttribute('href'));
      if (destino) { evento.preventDefault(); destino.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
  const anio = document.querySelector('[data-anio]');
  if (anio) anio.textContent = new Date().getFullYear();
});
