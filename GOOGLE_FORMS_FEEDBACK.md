# Guion recomendado para el formulario de feedback del MVP

## Nombre del formulario

Feedback del MVP - Performance Labs

## Descripción sugerida

Gracias por probar Performance Labs. Este formulario nos ayuda a entender qué tan claro, útil y valioso fue el MVP para vos o para tu centro deportivo. Tus respuestas nos sirven para priorizar mejoras reales en la próxima versión.

Tiempo estimado: 3 a 5 minutos.

## Estructura recomendada

### Sección 1 - Contexto del usuario

1. **¿Cómo usaste el MVP?**
   - Tipo: Opción múltiple
   - Opciones:
     - Como atleta
     - Como representante de un centro deportivo
     - Como entrenador
     - Solo lo exploré por curiosidad
   - Requerida: Sí

2. **¿Qué deporte o disciplina te interesa principalmente?**
   - Tipo: Respuesta corta
   - Requerida: Sí

3. **¿Cuánto tiempo exploraste el MVP?**
   - Tipo: Opción múltiple
   - Opciones:
     - Menos de 5 minutos
     - Entre 5 y 10 minutos
     - Entre 10 y 20 minutos
     - Más de 20 minutos
   - Requerida: Sí

### Sección 2 - Claridad y experiencia de uso

4. **¿Qué tan claro te resultó el MVP en una primera mirada?**
   - Tipo: Escala lineal
   - Escala: 1 a 5
   - Etiquetas:
     - 1 = Nada claro
     - 5 = Muy claro
   - Requerida: Sí

5. **¿Qué tan fácil fue entender los gráficos, métricas e insights?**
   - Tipo: Escala lineal
   - Escala: 1 a 5
   - Etiquetas:
     - 1 = Muy difícil
     - 5 = Muy fácil
   - Requerida: Sí

6. **¿Qué parte te pareció más clara o más útil?**
   - Tipo: Párrafo
   - Requerida: Sí

7. **¿Hubo algo que te confundió o te hizo frenar?**
   - Tipo: Párrafo
   - Requerida: Sí

### Sección 3 - Valor percibido

8. **¿Sentís que este tipo de herramienta podría ayudarte a tomar mejores decisiones?**
   - Tipo: Opción múltiple
   - Opciones:
     - Sí, claramente
     - Sí, pero con algunas mejoras
     - Tal vez
     - No por ahora
   - Requerida: Sí

9. **¿Qué decisión concreta te ayudaría a tomar este MVP?**
   - Tipo: Párrafo
   - Requerida: Sí

10. **¿Qué información o funcionalidad te faltó ver?**
    - Tipo: Párrafo
    - Requerida: Sí

### Sección 4 - Continuidad y disposición a usarlo

11. **Si el producto siguiera mejorando, ¿te gustaría volver a usarlo?**
    - Tipo: Opción múltiple
    - Opciones:
      - Sí
      - Tal vez
      - No
    - Requerida: Sí

12. **¿Qué tan probable es que recomiendes Performance Labs a otra persona o centro deportivo?**
    - Tipo: Escala lineal
    - Escala: 0 a 10
    - Etiquetas:
      - 0 = Nada probable
      - 10 = Muy probable
    - Requerida: Sí

13. **Si existiera una suscripción mensual, ¿cómo la evaluarías según el valor percibido?**
    - Tipo: Opción múltiple
    - Opciones:
      - La pagaría sin problema si mantiene esta propuesta
      - La pagaría si suma algunas mejoras clave
      - Necesitaría ver más valor antes de pagar
      - Hoy no la pagaría
    - Requerida: Sí

### Sección 5 - Cierre

14. **Si pudieras pedir una sola mejora para la próxima versión, ¿cuál sería?**
    - Tipo: Párrafo
    - Requerida: Sí

15. **Si quieres que te contactemos para una demo o seguimiento, deja tu correo**
    - Tipo: Respuesta corta
    - Requerida: No

## Qué respuestas te van a dar valor de verdad

Priorizá especialmente estas preguntas cuando analices resultados:

- Claridad del MVP
- Qué parte fue más útil
- Qué confundió
- Qué decisión ayudó a tomar
- Qué falta para volver a usarlo
- Mejora número uno pedida por el usuario

## Cómo usar este formulario en la landing

Una vez publicado tu Google Forms, copia el link y pégalo en `app.js` en la propiedad:

```js
feedbackFormUrl
```

Con eso se actualizan todos los botones de feedback del sitio.
