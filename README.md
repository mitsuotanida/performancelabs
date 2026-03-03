# Performance Labs MVP v3

## Archivos que debes cambiar en tu repositorio

1. `index.html`
2. `styles.css`
3. `app.js`
4. `404.html` (opcional, si ya tienes uno funcional puedes dejar el anterior)
5. `README.md`
6. `GOOGLE_FORMS_FEEDBACK.md` (nuevo, para que tengas el guion del formulario)

## Qué cambia esta versión

- Se elimina el FAQ de la landing y se deja documentado aquí.
- El blog deja de mencionarse en la navegación del MVP y se reserva para el sitio principal o una fase posterior.
- Se agregan botones para responder una encuesta en Google Forms.
- El link del formulario se controla desde un solo lugar en `app.js`.
- El CTA principal sigue orientado a demo, mientras que el CTA secundario recoge feedback real.

## Qué debes cambiar sí o sí

### 1) Reemplazar el link del formulario
Abre `app.js` y cambia esta línea:

```js
feedbackFormUrl: 'https://forms.gle/REEMPLAZAR_CON_TU_LINK'
```

por tu link real de Google Forms.

### 2) Revisar los correos de demo
En el mismo `app.js` puedes cambiar estos links si luego quieres usar otra casilla:

- `athleteDemoMail`
- `centerDemoMail`

### 3) Revisar URLs del dominio
En `index.html`, deja estas URLs así solo si tu MVP vive en:

- `https://mvp.performancelabs.tech/`

Si después cambias el dominio o la ruta, actualiza:

- `<link rel="canonical">`
- `og:url`

## Title recomendado

`Performance Labs | Datos que impulsan tu rendimiento deportivo`

## Meta description recomendada

`Performance Labs ayuda a atletas y centros deportivos a transformar datos de entrenamiento en decisiones claras mediante dashboards, reportes e insights accionables.`

## CTA principal recomendado

- Texto por defecto: `Quiero una demo`
- Texto para centros: `Solicitar demo para mi centro`

## CTA secundario recomendado

- Texto: `Responder encuesta`
- Objetivo: levantar feedback de usuarios reales del MVP

## FAQ del MVP

### ¿Qué es Performance Labs?
Performance Labs es un MVP de analítica deportiva que transforma datos de entrenamiento en dashboards e insights accionables para apoyar mejores decisiones.

### ¿Para quién está pensado?
Tiene dos líneas principales: atletas que quieren entender mejor su progreso y centros deportivos que necesitan más visibilidad sobre rendimiento, seguimiento y operación.

### ¿Cómo se accede?
En esta etapa se accede mediante demo y validación guiada. La idea es recoger feedback real y evolucionar el producto con foco en valor.

### ¿Qué datos puede usar?
Puede trabajar con registros de entrenamiento, exportaciones de smartwatch, archivos consolidados y otras fuentes que se puedan estructurar.

### ¿El producto ya está terminado?
No. Esta es una versión MVP, pensada para validar uso, claridad, valor percibido y prioridades de mejora.

### ¿Cómo se mejora el producto?
Con demos, entrevistas cortas y la encuesta de feedback enlazada desde la landing.

## Blog

El blog **no forma parte de esta landing del MVP**. La recomendación es dejarlo en otro repositorio, otra ruta o una fase posterior del sitio principal, así no distrae del objetivo comercial de esta página.

## Publicación

Sube estos archivos al repositorio del MVP y verifica en GitHub Pages que el dominio personalizado sea:

`mvp.performancelabs.tech`
