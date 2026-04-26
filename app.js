const APP_CONFIG = {
  formUrl: "https://forms.gle/Sb2u6RuwZ6XTGvu79",
  siteName: "Performance Labs",
  offer: "Diagnóstico inicial sin costo"
}; // Este objeto centraliza las configuraciones clave del sitio. Sirve para cambiar rápido el enlace del formulario o el nombre de la oferta sin tocar muchas partes del código.

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

function pushLeadEvent(location, text) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "lead_cta_click",
    offer_name: APP_CONFIG.offer,
    cta_location: location,
    cta_text: text,
    page_type: "leadgen_landing"
  });
}

function attachLeadTracking() {
  const ctaLinks = document.querySelectorAll(".js-lead-cta");

  ctaLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const location = link.dataset.ctaLocation || "unknown";
      const text = (link.textContent || "").trim();
      pushLeadEvent(location, text);
      console.log("[Lead CTA Click]", { location, text });
    });
  });
}

function initApp() {
  setDynamicYear();
  enhanceExternalLinks();
  attachLeadTracking();
}

document.addEventListener("DOMContentLoaded", initApp);
