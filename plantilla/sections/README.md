# 📚 Secciones Modulares para Apuntes Educativos

Esta carpeta contiene los archivos JavaScript modulares que definen el contenido de cada sección de los apuntes.

## 🗂️ Estructura de Archivos

Cada archivo sigue la nomenclatura `XX-nombre-seccion.js` donde `XX` es el número de orden.

### Secciones Disponibles

| Archivo | Sección | Descripción |
|---------|---------|-------------|
| `01-portada-introduccion.js` | 1 | Portada e introducción del tema |
| `02-teoria-01.js` | 2 | Contenidos teóricos - Parte 1 |
| `03-teoria-02.js` | 3 | Contenidos teóricos - Parte 2 |
| `04-teoria-03.js` | 4 | Contenidos teóricos - Parte 3 |
| `05-ejemplos.js` | 5 | Ejemplos resueltos paso a paso |
| `06-ejercicios.js` | 6 | Ejercicios propuestos por niveles |
| `07-actividades.js` | 7 | Actividades prácticas |
| `08-resumen.js` | 8 | Resumen y esquemas |
| `09-autoevaluacion.js` | 9 | Test de autoevaluación |
| `10-glosario.js` | 10 | Glosario de términos |
| `11-recursos.js` | 11 | Recursos adicionales |
| `12-ampliacion-01.js` | 12 | Ampliación de contenidos - Parte 1 |
| `13-ampliacion-02.js` | 13 | Ampliación de contenidos - Parte 2 |
| `14-curiosidades.js` | 14 | Curiosidades y datos interesantes |
| `15-laboratorio.js` | 15 | Prácticas de laboratorio |
| `16-infografia.js` | 16 | Infografía resumen |
| `17-timeline.js` | 17 | Línea de tiempo |
| `18-faq.js` | 18 | Preguntas frecuentes |
| `19-bibliografia.js` | 19 | Bibliografía y fuentes |
| `20-anexos.js` | 20 | Anexos y material complementario |

## ✏️ Cómo Modificar las Secciones

### Los Agentes Pueden:

1. **Eliminar secciones no utilizadas**: Si un apunte no necesita todas las secciones, elimina los archivos correspondientes o no los cargues en el `index.html`.

2. **Renombrar secciones**: Cambia el nombre del archivo y actualiza la referencia en el `index.html`.

3. **Modificar el contenido**: Edita el contenido dentro de `window.sectionsContent["nombre-seccion"]`.

4. **Añadir nuevas secciones**: Crea un nuevo archivo `XX-nueva-seccion.js` siguiendo el mismo patrón.

### Ejemplo de Modificación

```javascript
/**
 * Sección XX: Nombre de la Sección
 * Plantilla de Apuntes Educativos - CC BY 4.0
 */

window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["nombre-seccion"] = `

<h2>X. Título de la Sección</h2>

<p>Contenido de la sección...</p>

`;
```

## 🔗 Carga en el index.html

Las secciones se cargan en el `index.html` en orden:

```html
<script src="./sections/01-portada-introduccion.js"></script>
<script src="./sections/02-teoria-01.js"></script>
<!-- ... más secciones ... -->
```

## 📝 Personalización por Asignatura

### Para Lengua:
- Añade secciones de comentario de texto
- Incluye ejercicios de gramática específica

### Para Matemáticas:
- Añade más ejemplos resueltos
- Incluye ejercicios paso a paso

### Para Ciencias:
- Añade secciones de laboratorio
- Incluye diagramas y esquemas

### Para Idiomas:
- Añade ejercicios de listening
- Incluye flashcards de vocabulario

## 🎨 Formatos Soportados

Cada sección puede contener:

- **HTML completo**: `<h2>`, `<p>`, `<table>`, etc.
- **Clases Tailwind**: `bg-blue-50`, `p-6`, `rounded-2xl`, etc.
- **Callouts**: `.callout-info`, `.callout-warning`, etc.
- **Grids**: `grid-cols-2`, `gap-4`, etc.
- **Imágenes**: `<img src="./images/...">`

## ⚠️ Importante

1. **Mantén el orden numérico** para facilitar la navegación
2. **Us comillas backtick** (\`) para el contenido HTML multilínea
3. **No olvides el punto y coma** al final de cada asignación
4. **Los agentes deben actualizar el sidebar** si añaden/eliminan secciones

---

**Licencia**: CC BY 4.0
**Plantilla**: Generador de Apuntes Educativos - IES Serra Perenxisa
