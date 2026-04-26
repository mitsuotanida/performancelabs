const APP_CONFIG = {
  formUrl: "https://forms.gle/Sb2u6RuwZ6XTGvu79",
  siteName: "Performance Labs",
  primaryOffer: "Diagnóstico inicial sin costo"
}; // Este objeto centraliza los datos clave del sitio. Sirve para cambiar enlaces y nombres importantes desde un solo lugar.

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
  const ctaLinks = document.querySelectorAll(`a[href="${APP_CONFIG.formUrl}"]`);

  ctaLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "lead_cta_click",
          site_name: APP_CONFIG.siteName,
          offer_name: APP_CONFIG.primaryOffer,
          cta_text: link.textContent.trim()
        });
      }

      console.log("[Lead CTA Click]", {
        site: APP_CONFIG.siteName,
        offer: APP_CONFIG.primaryOffer,
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
