# Paso a paso para dejar la landing lista para Google Ads

## 1) Publica la landing
- Sube estos archivos a tu repo.
- Confirma que `mvp.performancelabs.tech` cargue bien.
- Revisa que todos los botones principales abran tu Google Form.

## 2) Crea y conecta medición base
### Lo mínimo recomendable
- Google Analytics 4 (GA4)
- Google Tag Manager (GTM)
- Google Ads

## 3) Instala GTM en la landing
En `index.html`, pega el script de GTM en el `<head>` y el bloque `<noscript>` apenas abra `<body>`.

### Placeholder GTM HEAD
```html
<!-- Google Tag Manager -->
<script>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');
</script>
<!-- End Google Tag Manager -->
```

### Placeholder GTM BODY
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

## 4) Configura GA4 dentro de GTM
- Crea una etiqueta de Google tag / GA4 Configuration.
- Usa tu Measurement ID de GA4.
- Activa la etiqueta en All Pages.

## 5) Configura el evento principal de la landing
El archivo `app.js` ya empuja a `dataLayer` este evento cuando alguien hace clic en un CTA:
- `lead_cta_click`

### En GTM
- Crea un Trigger de tipo Custom Event.
- Event name: `lead_cta_click`
- Crea una etiqueta de evento de GA4 con ese trigger.
- Envía parámetros:
  - `offer_name`
  - `cta_location`
  - `cta_text`
  - `page_type`

## 6) Marca la conversión en GA4
- Verifica que el evento llegue a GA4.
- Cuando aparezca, márcalo como Key event / conversión.

## 7) Importa la conversión en Google Ads
- En Google Ads, ve a Goals > Conversions.
- Importa la conversión desde GA4 o crea una conversión basada en Google tag.

## 8) Primera campaña recomendada
### Tipo
Empieza con Search enfocada en leads.

### Objetivo
Leads.

### Landing
Tu home principal.

### Conversión inicial
Con Google Forms externo, la medición más simple es el clic al CTA.

## 9) Cuándo pasar a una medición mejor
Cuando quieras optimizar de verdad por lead enviado, migra a:
- formulario propio en la landing, o
- formulario con redirección a `thank-you.html`

Así podrás medir envío real en vez de clic al botón.

## 10) Qué revisar antes de lanzar Ads
- La landing carga rápido.
- El mensaje principal coincide con los anuncios.
- El formulario no es demasiado largo.
- El CTA se repite varias veces.
- El evento `lead_cta_click` se ve en Tag Assistant / GTM Preview / GA4 Realtime.
