# 🎓 Generador de Apuntes Educativos con IA

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://sergarb1.github.io/generador-apuntes-agentes/)
[![Web](https://img.shields.io/badge/Web-mejoratudocencia.es-blue)](https://mejoratudocencia.es)

Sistema multi-agente para crear **apuntes educativos profesionales** para **Primaria, ESO, Bachillerato y Formación Profesional** usando IA.

**🌐 Visita:** [mejoratudocencia.es](https://mejoratudocencia.es)

---

## 🌟 Características Principales

### 🎯 Enfoque Pedagógico
- **Objetivos de aprendizaje** claros y medibles
- **Contenido estructurado** con iconos visuales
- **Ejemplos resueltos** paso a paso
- **Ejercicios graduados** por dificultad
- **Autoevaluación** con tests
- **Glosario** de términos clave

### 🎨 Diseño Premium
- Plantillas HTML con **Tailwind CSS**
- **Callouts** para conceptos clave
- **Tablas** comparativas
- **Grids** visuales
- **Print-ready** (PDF)
- Licencia **CC BY 4.0**

### 🤖 Multi-Agente
- **Orquestador principal** que coordina todo
- **Agentes por asignatura** (40+ especialistas)
- **Agentes por nivel** (Primaria, ESO, Bachillerato, FP)
- **Agentes especializados** (podcast, presentaciones, infografías)

---

## 📚 Asignaturas Disponibles

### Primaria
| Asignatura | Agente |
|------------|--------|
| Lengua Castellana | `10-experto-lengua.md` |
| Matemáticas | `11-experto-matematicas.md` |
| Ciencias Naturales | `12-experto-biologia.md` |
| Ciencias Sociales | `14-experto-historia-geografia.md` |
| Inglés | `15-experto-ingles.md` |

### ESO
| Asignatura | Agente |
|------------|--------|
| Lengua Castellana | `10-experto-lengua.md` |
| Matemáticas | `11-experto-matematicas.md` |
| Biología y Geología | `12-experto-biologia.md` |
| Física y Química | `13-experto-fisica-quimica.md` |
| Geografía e Historia | `14-experto-historia-geografia.md` |
| Inglés | `15-experto-ingles.md` |
| Francés | `16-experto-frances.md` |
| Tecnología | `26-experto-tecnologia.md` |

### Bachillerato
| Especialidad | Asignaturas |
|--------------|-------------|
| **Ciencias** | Matemáticas, Física y Química, Biología |
| **Humanidades** | Lengua, Historia, Geografía, Latín/Griego |
| **Sociales** | Economía, Matemáticas CCSS |

### Formación Profesional
| Familia | Ciclos |
|---------|--------|
| **Informática** | SMR, ASIR, DAM, DAW |
| **Administración** | Gestión Administrativa |
| **Comercio** | Comercio y Marketing |
| **Hostelería** | Cocina, Restaurante |
| **Sanidad** | Enfermería, Farmacia |
| **Imagen Personal** | Peluquería, Estética |
| **Electricidad** | Electricidad y Electrónica |
| **Edificación** | Construcción y Obra Civil |

---

## 🚀 Inicio Rápido

### 1. Clonar el repositorio
```bash
git clone https://github.com/sergarb1/generador-apuntes-agentes.git
cd generador-apuntes-agentes
```

### 2. Estructura del Proyecto
```
generador-apuntes-agentes/
├── agents/              # Agentes especializados
│   ├── 00-orchestrator-apuntes.md
│   ├── 10-experto-lengua.md
│   ├── 15-experto-ingles.md
│   └── ...
├── plantilla/           # Plantillas base
│   ├── index.html
│   ├── index.js
│   ├── logo.png
│   ├── assets/
│   └── sections/
├── apuntes/            # Apuntes generados
│   ├── 01-Primaria/
│   ├── 02-ESO/
│   ├── 03-Bachillerato/
│   └── 04-FP/
└── README.md
```

### 3. Generar Apuntes

Los apuntes se generan automáticamente en:
```
apuntes/[NIVEL]/[ASIGNATURA]/[CURSO]/[TEMA]/
```

**Ejemplo:**
```
apuntes/03-Bachillerato/Ingles/2-Bach/WRITING-STRATEGIES/
├── index.html
├── logo.png
├── assets/
├── images/
├── sections/
└── data/
```

### 4. Visualizar
Abre el `index.html` generado en tu navegador:
```bash
# En Linux
xdg-open apuntes/03-Bachillerato/Ingles/2-Bach/WRITING-STRATEGIES/index.html

# En macOS
open apuntes/03-Bachillerato/Ingles/2-Bach/WRITING-STRATEGIES/index.html

# En Windows
start apuntes/03-Bachillerato/Ingles/2-Bach/WRITING-STRATEGIES/index.html
```

---

## 🤖 Agentes Disponibles

### Orquestadores
| Agente | Función |
|--------|---------|
| `00-orchestrator-apuntes.md` | Coordina la generación de apuntes |

### Agentes por Asignatura
| Código | Asignatura |
|--------|------------|
| `10` | Lengua Castellana y Literatura |
| `11` | Matemáticas |
| `12` | Biología y Geología |
| `13` | Física y Química |
| `14` | Geografía e Historia |
| `15` | Inglés |
| `16` | Francés |
| `17` | Administración y Empresa |
| `18` | Infografías y Presentaciones |
| `19` | Música |
| `20` | Educación Física |
| `21` | Plástica y Visual |
| `22` | Turismo y Hostelería |
| `23` | Comercio y Ventas |
| `24` | Filosofía y Ética |
| `25` | Latín y Griego |
| `26` | Tecnología y Digitalización |
| `27` | Orientación Educativa |
| `28` | Sanidad y Salud |
| `29` | Artes Escénicas |
| `30` | Medio Ambiente |
| `31` | Pedagogía Terapéutica |
| `32` | Audición y Lenguaje |
| `33` | Transporte y Vehículos |
| `34` | Hostelería y Restauración |
| `35` | Imagen Personal |
| `36` | Electricidad y Electrónica |
| `37` | Edificación y Obra Civil |
| `38` | Fabricación Mecánica |
| `39` | Servicios Socioculturales |
| `40` | Actividades Físicas y Deportivas |

### Agentes Especializados
| Código | Especialidad |
|--------|--------------|
| `41` | 🎙️ Podcast Educativo |
| `42` | 🎬 Presentaciones Narradas |

### Agentes por Nivel
| Código | Nivel |
|--------|-------|
| `20-nivel` | Primaria |
| `21-nivel` | ESO |
| `22-nivel` | Bachillerato |
| `23-nivel` | FP |

---

## 📋 Estructura de Apuntes

Cada apunte generado incluye:

```
[Tema]/
├── index.html          # Archivo principal (Vue.js + Tailwind)
├── logo.png            # Logo del centro
├── assets/             # Assets CC BY
│   ├── cc-by-88x31.png
│   ├── cc-by-80x15.png
│   └── cc-by-120x40.png
├── images/             # Imágenes del tema
├── sections/           # Secciones modulares
│   ├── 01-portada-introduccion.js
│   ├── 02-estructura.js
│   ├── 03-ejercicios.js
│   └── ...
└── data/
    └── metadata.js     # Metadatos del proyecto
```

### Secciones Típicas
1. **Portada e Introducción**
2. **Objetivos de Aprendizaje**
3. **Contenido Teórico**
4. **Ejemplos Resueltos**
5. **Ejercicios Propuestos**
6. **Autoevaluación**
7. **Glosario**
8. **Recursos Adicionales**

---

## 🎨 Características Técnicas

### Stack Tecnológico
- **HTML5** semántico
- **Tailwind CSS** (CDN) para estilos
- **Vue.js 3** (CDN) para reactividad
- **Reveal.js** para presentaciones
- **FontAwesome 6** para iconos
- **Google Fonts** (Plus Jakarta Sans)

### Funcionalidades
- ✅ **Sidebar** de navegación colapsable
- ✅ **Impresión** a PDF optimizada
- ✅ **Export** a Word (.doc)
- ✅ **Responsive** design
- ✅ **Accesibilidad** WCAG
- ✅ **SEO** básico

### Licencia
Todo el material generado usa **CC BY 4.0**:
- ✅ Compartir: copiar y redistribuir
- ✅ Adaptar: remezclar y transformar
- ⚠️ Atribución: dar crédito apropiado

---

## 📖 Ejemplos de Uso

### Ejemplo 1: Apuntes de Inglés - Writing Strategies
```
Nivel: Bachillerato
Asignatura: Inglés
Curso: 2º Bachillerato
Tema: Estrategias para el Writing
```

**Contenido generado:**
- Estructura del ensayo académico
- Conectores y linking words
- Registro formal e informal
- Modelos de essays resueltos
- Ejercicios prácticos
- Autoevaluación tipo EBAU

📁 [Ver ejemplo](apuntes/03-Bachillerato/Ingles/2-Bach/WRITING-STRATEGIES/)

### Ejemplo 2: Apuntes de Biología - La Célula
```
Nivel: ESO
Asignatura: Biología y Geología
Curso: 3º ESO
Tema: La Célula y sus Orgánulos
```

**Contenido generado:**
- ¿Qué es una célula?
- Partes de la célula
- Célula animal vs vegetal
- Orgánulos y funciones
- Microscopio y observación

---

## 🛠️ Desarrollo

### Añadir un Nuevo Agente
1. Crea `agents/XX-nombre-agente.md`
2. Sigue la plantilla del orquestador
3. Incluye ejemplos de formato HTML
4. Define reglas específicas de la asignatura

### Añadir una Nueva Sección
1. Crea `plantilla/sections/XX-nombre-seccion.js`
2. Usa `window.sectionsContent` para el contenido
3. Incluye iconos y callouts
4. Sigue las reglas de mayúsculas

### Personalizar Plantillas
1. Modifica `plantilla/index.html` para el layout
2. Edita `plantilla/index.js` para la lógica Vue
3. Actualiza `plantilla/data/metadata.js` para metadatos

---

## 📝 Reglas de Formato

### Mayúsculas en Títulos
```html
<!-- ❌ INCORRECTO -->
<h2>Estructura del Ensayo Académico</h2>

<!-- ✅ CORRECTO -->
<h2>Estructura del ensayo académico</h2>
```

**Reglas:**
- Solo primera palabra en mayúscula
- Acrónimos SÍ: EBAU, MCER, FP
- Nombres propios SÍ: España, Cambridge

### HTML Obligatorio
```html
<!-- Títulos -->
<h2>Título</h2>
<h3>Subtítulo</h3>

<!-- Énfasis -->
<strong>negrita</strong>
<em>cursiva</em>

<!-- Listas -->
<ul><li>item</li></ul>
<ol><li>item</li></ol>

<!-- Callouts -->
<div class="callout callout-info">...</div>
```

---

## 🔗 Enlaces Relacionados

- **Web Oficial:** [mejoratudocencia.es](https://mejoratudocencia.es)
- **GitHub Pages:** [sergarb1.github.io/generador-apuntes-agentes/](https://sergarb1.github.io/generador-apuntes-agentes/)
- **Creative Commons:** [creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)
- **Vue.js:** [vuejs.org](https://vuejs.org)
- **Reveal.js:** [revealjs.com](https://revealjs.com)

---

## 📄 Licencia

Este proyecto está bajo licencia **CC BY 4.0**.

Eres libre de:
- **Compartir:** Copiar y redistribuir el material
- **Adaptar:** Remezclar, transformar y crear

Bajo la condición de:
- **Atribución:** Dar crédito apropiado, proporcionar un enlace a la licencia, e indicar si se hicieron cambios.

---

## 👨‍💻 Autor

**mejoratudocencia.es** — Plantilla de uso general para centros educativos (Valencia, España).

**Contribuciones:** ¡Bienvenidas! Abre un issue o PR.

---

*Última actualización: Marzo 2026*
