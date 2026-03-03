const siteLinks = {
  feedbackFormUrl: 'https://forms.gle/REEMPLAZAR_CON_TU_LINK',
  athleteDemoMail: 'mailto:hola@performancelabs.tech?subject=Quiero%20una%20demo%20de%20Performance%20Labs%20para%20atletas',
  centerDemoMail: 'mailto:hola@performancelabs.tech?subject=Quiero%20una%20demo%20de%20Performance%20Labs%20para%20mi%20centro%20deportivo'
}; // Este objeto guarda los links importantes del sitio. Sirve para cambiar el formulario o los correos en un solo lugar sin tocar muchas líneas.

const audienceContent = {
  athlete: {
    title: 'Datos que impulsan tu rendimiento deportivo',
    description: 'Performance Labs transforma datos deportivos en decisiones claras y útiles para mejorar el rendimiento. Ayudamos a atletas a monitorear su progreso, entender sus entrenamientos y descubrir oportunidades reales de mejora con una experiencia visual, simple y profesional.',
    items: [
      'Visualiza tu progreso con claridad.',
      'Identifica patrones, fortalezas y alertas.',
      'Entrena con decisiones basadas en datos.'
    ],
    panelTitle: 'Panel de atleta',
    panelInsight: 'Tus mejores bloques coinciden con sesiones de mayor regularidad y recuperación estable.',
    ctaText: 'Quiero una demo',
    ctaHref: siteLinks.athleteDemoMail
  }, // Este objeto guarda el contenido para atletas. Ayuda a mostrar una versión enfocada en deportistas individuales.
  center: {
    title: 'Más visibilidad para gestionar mejor el rendimiento de tu centro deportivo',
    description: 'Performance Labs ayuda a centros deportivos a ordenar sus datos, visualizar avances y tomar decisiones con más contexto. El MVP permite consolidar información relevante, comunicar resultados con claridad y detectar oportunidades de mejora en la operación y el entrenamiento.',
    items: [
      'Consolida información en un solo lugar.',
      'Mejora el seguimiento de atletas y procesos.',
      'Comunica resultados con una mirada más profesional.'
    ],
    panelTitle: 'Panel para centro deportivo',
    panelInsight: 'El centro mejora visibilidad sobre asistencia, carga de entrenamiento y evolución por bloques o grupos.',
    ctaText: 'Solicitar demo para mi centro',
    ctaHref: siteLinks.centerDemoMail
  } // Este objeto guarda el contenido para centros deportivos. Sirve para cambiar el enfoque comercial sin duplicar la página.
};

const audienceButtons = document.querySelectorAll('[data-audience]');
const heroTitle = document.getElementById('heroTitle');
const heroDescription = document.getElementById('heroDescription');
const heroList = document.getElementById('heroList');
const panelTitle = document.getElementById('panelTitle');
const panelInsight = document.getElementById('panelInsight');
const primaryCta = document.getElementById('primaryCta');
const footerCta = document.getElementById('footerCta');
const feedbackHeroCta = document.getElementById('feedbackHeroCta');
const feedbackSectionCta = document.getElementById('feedbackSectionCta');
const feedbackFooterCta = document.getElementById('feedbackFooterCta');

function paintFeedbackLinks() {
  [feedbackHeroCta, feedbackSectionCta, feedbackFooterCta].forEach((linkElement) => {
    if (!linkElement) {
      return;
    }

    linkElement.href = siteLinks.feedbackFormUrl;
  });
} // Esta función pone el mismo link de Google Forms en todos los botones de feedback. Así evitás errores y mantenés todo ordenado.

function renderAudience(audienceKey) {
  const selectedAudience = audienceContent[audienceKey];

  if (!selectedAudience) {
    return;
  }

  heroTitle.textContent = selectedAudience.title;
  heroDescription.textContent = selectedAudience.description;
  panelTitle.textContent = selectedAudience.panelTitle;
  panelInsight.textContent = selectedAudience.panelInsight;
  primaryCta.textContent = selectedAudience.ctaText;
  primaryCta.href = selectedAudience.ctaHref;
  footerCta.textContent = selectedAudience.ctaText;
  footerCta.href = selectedAudience.ctaHref;

  heroList.innerHTML = selectedAudience.items
    .map((item) => `<li>${item}</li>`)
    .join('');

  audienceButtons.forEach((button) => {
    const isActive = button.dataset.audience === audienceKey;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });
} // Esta función cambia textos y botones según el público elegido. Es como cambiar el cartel de la vidriera sin rehacer toda la tienda.

audienceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    renderAudience(button.dataset.audience);
  });
});

paintFeedbackLinks();
renderAudience('athlete');
