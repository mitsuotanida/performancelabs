const APP_CONFIG = {
  formUrl: "https://forms.gle/Sb2u6RuwZ6XTGvu79",
  siteName: "Performance Labs",
  offer: "Diagnóstico inicial sin costo"
}; // Este objeto guarda la configuración principal del sitio. Sirve para tener en un solo lugar los datos más importantes, facilitar cambios futuros y mantener el código ordenado.

function setDynamicYear() {
  const yearNode = document.querySelector("[data-year]");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

function enhanceExternalLinks() {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');

  externalLinks.forEach((link) => {
    const currentRel = link.getAttribute("rel") || "";
    const relParts = currentRel.split(" ").filter(Boolean);

    if (!relParts.includes("noopener")) relParts.push("noopener");
    if (!relParts.includes("noreferrer")) relParts.push("noreferrer");

    link.setAttribute("rel", relParts.join(" "));
  });
}

function attachLeadTrackingPlaceholders() {
  const ctaLinks = document.querySelectorAll('a[href="' + APP_CONFIG.formUrl + '"]');

  ctaLinks.forEach((link) => {
    link.addEventListener("click", () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_cta_click",
        site_name: APP_CONFIG.siteName,
        offer_name: APP_CONFIG.offer,
        cta_text: link.textContent.trim()
      });
      console.log("[Lead CTA Click]", {
        site: APP_CONFIG.siteName,
        offer: APP_CONFIG.offer,
        text: link.textContent.trim()
      });
    });
  });
}

function initApp() {
  setDynamicYear();
  enhanceExternalLinks();
  attachLeadTrackingPlaceholders();
}

document.addEventListener("DOMContentLoaded", initApp);
