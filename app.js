const APP_CONFIG = {
  formUrl: "https://forms.gle/Sb2u6RuwZ6XTGvu79",
  siteName: "Performance Labs",
  offer: "Diagnóstico inicial sin costo"
}; // Este objeto concentra la configuración principal del sitio. Sirve para cambiar la URL del formulario o el nombre del proyecto desde un solo lugar.

function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-page]').forEach((link) => {
    if (link.getAttribute('data-page') === path) {
      link.classList.add('is-active');
    }
  });
}

function enhanceExternalLinks() {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');

  externalLinks.forEach((link) => {
    const currentRel = link.getAttribute('rel') || '';
    const relParts = currentRel.split(' ').filter(Boolean);

    if (!relParts.includes('noopener')) relParts.push('noopener');
    if (!relParts.includes('noreferrer')) relParts.push('noreferrer');

    link.setAttribute('rel', relParts.join(' '));
  });
}

function attachLeadTrackingPlaceholders() {
  const ctaLinks = document.querySelectorAll('a[href="' + APP_CONFIG.formUrl + '"]');

  ctaLinks.forEach((link) => {
    link.addEventListener('click', () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'lead_cta_click',
        site: APP_CONFIG.siteName,
        offer: APP_CONFIG.offer,
        button_text: link.textContent.trim()
      });
    });
  });
}

function initApp() {
  setActiveNav();
  enhanceExternalLinks();
  attachLeadTrackingPlaceholders();
}

document.addEventListener('DOMContentLoaded', initApp);
