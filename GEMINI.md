# 🤖 Configuración para Gemini (Google AI)

Este archivo configura el comportamiento de Gemini para el **Generador de Apuntes Educativos**.

## Agente Principal

**Siempre usa el orquestador como agente principal:**

```
@agents/00-orchestrator-apuntes.md
```

## 📋 Comportamiento Esperado

### 1. Flujo de Trabajo

Cuando el usuario solicite crear apuntes:

1. **Leer el orquestador:** `@agents/00-orchestrator-apuntes.md`
2. **Seguir el prompt inicial:** `@prompt-inicial.txt`
3. **Activar agentes especializados** según la asignatura y nivel
4. **Generar la estructura** de carpetas antes de crear contenido
5. **Verificar coincidencias** entre secciones y configuración

### 2. Formato de Secciones (¡CRÍTICO!)

**Cada sección DEBE usar este formato:**

```javascript
// sections/01-introduccion.js
window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['introduccion'] = {
  title: "1. Título de la Sección",
  content: `
    <h2>1. Título de la sección</h2>
    <p>Contenido HTML...</p>
  `
};
```

**❌ NUNCA usar:**
```javascript
window.sectionContent = { ... }  // ❌ Esto causa errores
```

### 3. Verificación de Secciones

Antes de finalizar, verifica:

```
✅ Cada archivo en sections/ empieza con:
   `window.sectionsContent = window.sectionsContent || {};`

✅ Cada sección usa su ID:
   `window.sectionsContent['id_seccion'] = {...}`

✅ Los IDs en Vue data coinciden con los archivos:
   sections: [{ id: 'introduccion', ... }]
   → sections/01-introduccion.js existe

✅ Los <script src="..."> cargan archivos reales:
   <script src="./sections/01-introduccion.js"></script>
   → sections/01-introduccion.js existe
```

## 📁 Estructura de Archivos

Los apuntes se guardan en:
```
apuntes/[CODIGO_NIVEL]/[ASIGNATURA]/[CURSO]/[TEMA]/
```

Ejemplo:
```
apuntes/03-Bachillerato/Economia/2/macroeconomia/
├── index.html
├── logo.png
├── assets/
├── images/
├── sections/
│   ├── 01-introduccion.js
│   ├── 02-indicadores.js
│   └── ...
└── data/
    └── metadata.js
```

## 🎯 Agentes por Asignatura

| Asignatura | Agente |
|------------|--------|
| Lengua | `@agents/10-experto-lengua.md` |
| Matemáticas | `@agents/11-experto-matematicas.md` |
| Biología | `@agents/12-experto-biologia.md` |
| Física y Química | `@agents/13-experto-fisica-quimica.md` |
| Historia/Geografía | `@agents/14-experto-historia-geografia.md` |
| Inglés | `@agents/15-experto-ingles.md` |
| Francés | `@agents/16-experto-frances.md` |
| Informática | `@agents/02-experto-informatica.md` |
| Administración/Empresa | `@agents/17-experto-administracion-empresa.md` |

## 🎓 Agentes por Nivel

| Nivel | Agente |
|-------|--------|
| Primaria | `@agents/20-nivel-primaria.md` |
| ESO | `@agents/21-nivel-eso.md` |
| Bachillerato | `@agents/22-nivel-bachillerato.md` |
| FP | `@agents/23-nivel-fp.md` |

## ⚠️ Errores Comunes a Evitar

1. **Usar `window.sectionContent` en lugar de `window.sectionsContent`**
   - Causa: "Contenido no encontrado en sections/..."

2. **IDs que no coinciden**
   - Causa: Sidebar muestra secciones pero el contenido no carga

3. **Scripts que cargan archivos inexistentes**
   - Causa: Errores 404 en consola

4. **Usar `studentName` en lugar de `teacherName`**
   - Los apuntes son del PROFESOR, no del estudiante

5. **`getSectionContent` devuelve objeto en lugar de string HTML**
   - ❌ INCORRECTO: `return this.sectionsContent[id]` → Muestra `[object Object]`
   - ✅ CORRECTO: `return this.sectionsContent[id].content` → Muestra el HTML

6. **Títulos duplicados en el contenido**
   - ❌ INCORRECTO: `<h2>{{ section.title }}</h2>` + `<h2>` dentro del contenido
   - ✅ CORRECTO: Solo el `<h2>` dentro del contenido de cada sección (NO en index.html)

## ✅ Checklist de Generación

```
[ ] Leer @agents/00-orchestrator-apuntes.md
[ ] Leer @prompt-inicial.txt
[ ] Preguntar nivel, asignatura, curso, tema, profesor
[ ] Crear estructura de carpetas
[ ] Copiar assets desde plantilla/assets/
[ ] Copiar logo.png desde plantilla/
[ ] Generar secciones con formato window.sectionsContent
[ ] Generar data/metadata.js con teacherName
[ ] Generar index.html con IDs que coinciden con archivos reales
[ ] Verificar que todos los scripts cargan archivos existentes
[ ] Verificar que getSectionIcon() tiene todos los IDs
[ ] Verificar que getSectionContent() devuelve section.content (NO el objeto)
[ ] Verificar que NO hay <h2>{{ section.title }}</h2> en index.html (el título va en el contenido de cada sección)
```

## 🔗 Enlaces Relacionados

- **Orquestador Principal:** `@agents/00-orchestrator-apuntes.md`
- **Prompt Inicial:** `@prompt-inicial.txt`
- **Plantilla:** `@plantilla/`

---

**Versión:** 1.0 - Configuración Gemini
**Última actualización:** Marzo 2026
