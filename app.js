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
    ctaHref: 'mailto:hola@performancelabs.tech?subject=Quiero%20una%20demo%20de%20Performance%20Labs%20para%20atletas'
  }, // Este objeto guarda todo el texto para la versión de atletas. Sirve para cambiar la página sin escribir todo de nuevo.
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
    ctaHref: 'mailto:hola@performancelabs.tech?subject=Quiero%20una%20demo%20de%20Performance%20Labs%20para%20mi%20centro%20deportivo'
  } // Este objeto guarda todo el texto para la versión de centros deportivos. También ayuda a que el cambio sea rápido y ordenado.
};

const audienceButtons = document.querySelectorAll('[data-audience]');
const heroTitle = document.getElementById('heroTitle');
const heroDescription = document.getElementById('heroDescription');
const heroList = document.getElementById('heroList');
const panelTitle = document.getElementById('panelTitle');
const panelInsight = document.getElementById('panelInsight');
const primaryCta = document.getElementById('primaryCta');
const footerCta = document.getElementById('footerCta');

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
} // Esta función mira qué tipo de público elegiste y cambia los textos y botones. Es como apretar un interruptor para mostrar una versión distinta de la misma página.

audienceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    renderAudience(button.dataset.audience);
  });
});

renderAudience('athlete');
