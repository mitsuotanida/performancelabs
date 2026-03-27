// Performance Labs — Web v5.2
// Este archivo decide a qué formulario ir según el segmento: Atleta o Centro.

const CONFIG = {
  diagnosticFormAthleteUrl: "https://forms.gle/EBKLEueVeadbfQs58",
  diagnosticFormCenterUrl: "https://forms.gle/Sb2u6RuwZ6XTGvu79",
  segments: {
    athlete: {
      title: "Atleta",
      desc: "Lecturas semanales y mensuales para mejorar con método: carga, consistencia, técnica y progreso.",
      promise: "Un diagnóstico que convierte tus entrenamientos en prioridades claras para la próxima semana.",
      subs: {
        swim: {
          bullets: [
            { icon: "≈", title: "Pace real y controlado", desc: "Pace por 100m calculado desde distancia y duración, con tendencia semanal." },
            { icon: "↻", title: "Eficiencia técnica", desc: "Brazadas/100m y cadencia para mejorar sin aumentar carga innecesaria." },
            { icon: "⚡", title: "Carga semanal", desc: "Lectura 7D/28D con semáforo de picos y próximos pasos." }
          ],
          mock: { panelTitle: "Vista previa — Atleta (Natación)", metricLabel: "Pace /100m", metricValue: "2:05", metricSub: "Eficiencia", conclusion: "“Conclusión semanal: progreso estable. Próximo foco: técnica con ritmo controlado.”" }
        },
        bike: {
          bullets: [
            { icon: "⛰", title: "Volumen y calidad", desc: "Horas y carga semanal para entender consistencia y recuperación." },
            { icon: "♥", title: "Intensidad", desc: "Distribución de esfuerzo para evitar semanas engañosas." },
            { icon: "⚠", title: "Gestión de picos", desc: "Semáforo de carga para sostener progreso sin sobrecarga." }
          ],
          mock: { panelTitle: "Vista previa — Atleta (Ciclismo)", metricLabel: "Horas 7D", metricValue: "6.3", metricSub: "Volumen", conclusion: "“Conclusión semanal: buen volumen. Próximo foco: sesión fácil para consolidar base.”" }
        },
        run: {
          bullets: [
            { icon: "⏱", title: "Ritmo y progresión", desc: "Tendencias 7D/28D para ver mejoras reales." },
            { icon: "📈", title: "Consistencia", desc: "Sesiones por semana y estabilidad de carga." },
            { icon: "🧠", title: "Siguiente acción", desc: "Recomendación simple: volumen, técnica o recuperación." }
          ],
          mock: { panelTitle: "Vista previa — Atleta (Running)", metricLabel: "Ritmo", metricValue: "5:05", metricSub: "Estable", conclusion: "“Conclusión semanal: semana sólida. Próximo foco: calidad bien medida.”" }
        },
        tri: {
          bullets: [
            { icon: "🧩", title: "Balance por disciplina", desc: "Distribución semanal para evitar desequilibrios." },
            { icon: "⚡", title: "Carga total", desc: "Lectura de carga que prioriza recuperación a tiempo." },
            { icon: "🗓", title: "Priorización", desc: "Acción sugerida para la siguiente semana según objetivos." }
          ],
          mock: { panelTitle: "Vista previa — Atleta (Triatlón)", metricLabel: "Balance", metricValue: "3/2/2", metricSub: "Swim/Bike/Run", conclusion: "“Conclusión semanal: balance adecuado. Próximo foco: ajustar intensidad para evitar picos.”" }
        }
      }
    },
    center: {
      title: "Centro deportivo",
      desc: "Gestión por atleta y disciplina: indicadores de adherencia, progreso y consistencia para coaches y dirección.",
      promise: "Actividades: sports business digital, data-driven sport business y sport performance intelligence.",
      bullets: [
        { icon: "👥", title: "Filtros por atleta y deporte", desc: "Selecciona atleta y disciplina para ver estadísticas y tendencias." },
        { icon: "🧾", title: "Reportes por coach", desc: "Entregables periódicos para seguimiento y comunicación." },
        { icon: "🧲", title: "Adherencia y retención", desc: "Alertas tempranas: quién baja carga, quién se ausenta y cómo intervenir." }
      ],
      mock: { panelTitle: "Vista previa — Centro (Filtros)", metricLabel: "Adherencia", metricValue: "84%", metricSub: "Semanal", conclusion: "“Resumen semanal: adherencia alta. Próximo foco: reactivar el grupo rezagado.”" }
    }
  }
};

function $(s){ return document.querySelector(s); }
function $all(s){ return Array.from(document.querySelectorAll(s)); }
const state = { seg: "athlete", sub: "swim" };

function currentDiagUrl(){
  return state.seg === "center" ? CONFIG.diagnosticFormCenterUrl : CONFIG.diagnosticFormAthleteUrl;
}

function setDiagLink(){
  const el = $("#btnDiagMid");
  if(el) el.href = currentDiagUrl();
}

function renderBullets(list){
  const wrap = $("#segBullets");
  wrap.innerHTML = "";
  list.forEach(b => {
    const el = document.createElement("div");
    el.className = "bullet";
    el.innerHTML = `
      <div class="bullet__icon" aria-hidden="true">${b.icon}</div>
      <div>
        <div class="bullet__title">${b.title}</div>
        <div class="bullet__desc">${b.desc}</div>
      </div>
    `;
    wrap.appendChild(el);
  });
}

function setMock(mock){
  $("#panelTitle").textContent = mock.panelTitle || "Vista previa";
  $("#mockMetricLabel").textContent = mock.metricLabel;
  $("#mockMetricValue").textContent = mock.metricValue;
  $("#mockMetricSub").textContent = mock.metricSub;
  $("#mockConclusion").textContent = mock.conclusion;

  const loadValue = (state.seg === "center") ? "1.04" : "1.12";
  $("#mockLoad").textContent = loadValue;
  $("#mockLoadSub").textContent = (parseFloat(loadValue) > 1.3) ? "Alta" : "Controlada";
}

function setSubtabsVisible(v){
  const el = $("#athleteSubtabs");
  if(el) el.style.display = v ? "flex" : "none";
}

function setActiveButtons(){
  $all(".seg__tab").forEach(btn => {
    const a = btn.dataset.seg === state.seg;
    btn.classList.toggle("is-active", a);
    btn.setAttribute("aria-selected", a ? "true" : "false");
  });
  $all(".subtab").forEach(btn => {
    const a = btn.dataset.sub === state.sub;
    btn.classList.toggle("is-active", a);
    btn.setAttribute("aria-selected", a ? "true" : "false");
  });
}

function render(){
  if(state.seg === "athlete"){
    const seg = CONFIG.segments.athlete;
    $("#segTitle").textContent = seg.title;
    $("#segDesc").textContent = seg.desc;
    $("#segPromise").textContent = seg.promise;
    setSubtabsVisible(true);

    const sub = seg.subs[state.sub] || seg.subs.swim;
    renderBullets(sub.bullets);
    setMock(sub.mock);

    $("#card1Title").textContent = "KPIs por disciplina";
    $("#card1Desc").textContent = "Métricas clave, mejores marcas y tendencias 7D/28D.";
    $("#card2Title").textContent = "Carga y consistencia";
    $("#card2Desc").textContent = "Semáforo de carga y acciones sugeridas para evitar picos.";
    $("#card3Title").textContent = "Reporte PDF premium";
    $("#card3Desc").textContent = "Listo para compartir, con conclusiones y próximos pasos.";
  } else {
    const seg = CONFIG.segments.center;
    $("#segTitle").textContent = seg.title;
    $("#segDesc").textContent = seg.desc;
    $("#segPromise").textContent = seg.promise;
    setSubtabsVisible(false);

    renderBullets(seg.bullets);
    setMock(seg.mock);

    $("#card1Title").textContent = "Panel por atleta y deporte";
    $("#card1Desc").textContent = "Filtros de atleta y disciplina, con métricas operativas claras.";
    $("#card2Title").textContent = "Gestión por coach y grupos";
    $("#card2Desc").textContent = "Seguimiento por cohorte, reportes y comunicación.";
    $("#card3Title").textContent = "Reporte PDF premium";
    $("#card3Desc").textContent = "Resumen gerencial y reportes por grupo según plan.";
  }
  setActiveButtons();
  setDiagLink();
}

function wire(){
  $all(".seg__tab").forEach(btn => btn.addEventListener("click", () => { state.seg = btn.dataset.seg; render(); }));
  $all(".subtab").forEach(btn => btn.addEventListener("click", () => { state.sub = btn.dataset.sub; render(); }));
}

function init(){
  const y = document.querySelector("#year");
  if(y) y.textContent = String(new Date().getFullYear());
  wire();
  render();
}

init();
