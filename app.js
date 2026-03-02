const audienceContent = {
  athletes: {
    badge: "Para atletas", // Etiqueta corta para mostrar a quién le habla esta vista.
    title: "Mejorá tu rendimiento con claridad diaria", // Título principal del bloque para explicar el beneficio central.
    description:
      "Un dashboard personal para entender tu entrenamiento, detectar patrones y tomar mejores decisiones junto a tu entrenador.", // Texto resumido que cuenta el valor del MVP para atletas.
    benefits: [
      {
        icon: "↗", // Ícono simple para dar una señal visual rápida.
        title: "Progreso visible", // Nombre corto del beneficio que verá el atleta.
        text: "Compará semanas, cargas y evolución sin depender de planillas confusas.", // Explica para qué sirve este beneficio en la vida real.
      },
      {
        icon: "⏱", // Ícono relacionado con tiempo y sesiones.
        title: "Lectura por sesión", // Ayuda a entender que el análisis baja al detalle.
        text: "Detectá sesiones fuertes, fatiga acumulada y consistencia de entrenamiento.", // Muestra cómo ayuda a tomar decisiones deportivas.
      },
      {
        icon: "◎", // Ícono visual para foco y objetivo.
        title: "Objetivos más claros", // Beneficio orientado a resultados concretos.
        text: "Entrená con una referencia visual de ritmo, volumen y recuperación.", // Cuenta cómo el dato se transforma en una guía práctica.
      },
    ], // Esta lista guarda las tarjetas que se pintan cuando el usuario elige atletas.
  }, // Este objeto completo agrupa todos los textos y tarjetas del perfil atleta.
  centers: {
    badge: "Para centros deportivos", // Etiqueta para el público institucional.
    title: "Gestioná deportistas, servicios y valor entregado", // Mensaje principal para dueños o administradores del centro.
    description:
      "Una vista consolidada para monitorear uso, adherencia y rendimiento, con una experiencia que también fortalece la propuesta comercial del centro.", // Resumen del valor del MVP para un negocio deportivo.
    benefits: [
      {
        icon: "▣", // Ícono para representar consolidación o panel central.
        title: "Vista consolidada", // Nombre del beneficio institucional.
        text: "Visualizá grupos, alumnos o sedes desde una sola capa de datos.", // Explica el uso del tablero para gestión general.
      },
      {
        icon: "✦", // Ícono para señalar valor de servicio premium.
        title: "Servicio premium", // Beneficio comercial del MVP para el centro.
        text: "Convertí tus datos en una experiencia diferencial para retener clientes.", // Muestra cómo puede ayudar a vender y fidelizar.
      },
      {
        icon: "⚑", // Ícono para foco de gestión y control.
        title: "Mejor gestión", // Beneficio operativo para el centro deportivo.
        text: "Tomá decisiones con evidencia sobre carga, uso y participación del servicio.", // Explica cómo ayuda a decidir mejor como negocio.
      },
    ], // Esta lista guarda las tarjetas del perfil centros deportivos.
  }, // Este objeto completo agrupa todos los textos y tarjetas del perfil centro.
}; // Este objeto grande funciona como una cajita con todos los contenidos dinámicos de la landing.

const elements = {
  buttons: document.querySelectorAll("[data-audience]"), // Busca los botones que cambian entre atletas y centros.
  badge: document.querySelector("#audience-badge"), // Señala dónde escribir la etiqueta del público activo.
  title: document.querySelector("#audience-title"), // Señala dónde escribir el título dinámico.
  description: document.querySelector("#audience-description"), // Señala dónde escribir la explicación dinámica.
  benefits: document.querySelector("#audience-benefits"), // Señala el contenedor donde se crean las tarjetas.
  year: document.querySelector("#current-year"), // Busca el lugar donde se muestra el año actual.
}; // Este objeto junta referencias del HTML para no buscarlas una y otra vez.

function renderAudience(audienceKey) {
  const data = audienceContent[audienceKey]; // Traemos la información del público seleccionado.

  if (!data) {
    return; // Si no existe ese público, frenamos para evitar errores.
  }

  elements.badge.textContent = data.badge; // Cambia la etiqueta visible según el botón elegido.
  elements.title.textContent = data.title; // Cambia el título principal del bloque.
  elements.description.textContent = data.description; // Cambia el texto descriptivo del bloque.

  elements.benefits.innerHTML = data.benefits
    .map(
      (benefit) => `
        <article class="benefit-card">
          <span class="benefit-card__icon">${benefit.icon}</span>
          <h4>${benefit.title}</h4>
          <p>${benefit.text}</p>
        </article>
      `
    )
    .join(""); // Crea las tarjetas en HTML a partir de la lista de beneficios.

  elements.buttons.forEach((button) => {
    const isActive = button.dataset.audience === audienceKey; // Revisa qué botón coincide con el público activo.
    button.classList.toggle("is-active", isActive); // Enciende o apaga la clase visual del botón.
  });
} // Esta función pinta todo el contenido dinámico en pantalla.

function attachAudienceEvents() {
  elements.buttons.forEach((button) => {
    button.addEventListener("click", () => {
      renderAudience(button.dataset.audience); // Cuando hacés clic, vuelve a dibujar el bloque con el público elegido.
    });
  });
} // Esta función escucha los clics de los botones del selector.

function setCurrentYear() {
  if (elements.year) {
    elements.year.textContent = new Date().getFullYear(); // Escribe el año actual en el footer automáticamente.
  }
} // Esta función evita que tengas que cambiar el año a mano todos los años.

attachAudienceEvents(); // Activa la interacción del selector de públicos.
renderAudience("athletes"); // Muestra atletas como primera vista por defecto.
setCurrentYear(); // Completa el año del footer al cargar la página.
