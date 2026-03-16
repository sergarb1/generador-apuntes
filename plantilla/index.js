/**
 * Plantilla de Apuntes Educativos - IES Serra Perenxisa
 *
 * 🚀 Versión Pedagógica con Soporte TDAH y Estructura Modular
 *
 * @module apuntes
 */

// Importación de funciones generadoras por sección
export {
    generateIntroduccion,
    introduccionTemplate,
    introduccionPrompt,
    introduccionIcon
} from './sections/01-introduccion.js';

export {
    generateObjetivos,
    objetivosTemplate,
    objetivosPrompt,
    objetivosIcon
} from './sections/02-objetivos.js';

export {
    generateTeoria,
    teoriaTemplate,
    teoriaPrompt,
    teoriaIcon
} from './sections/03-teoria.js';

export {
    generateEjemplos,
    ejemplosTemplate,
    ejemplosPrompt,
    ejemplosIcon
} from './sections/04-ejemplos.js';

export {
    generateEjercicios,
    ejerciciosTemplate,
    ejerciciosPrompt,
    ejerciciosIcon
} from './sections/05-ejercicios.js';

export {
    generateResumen,
    resumenTemplate,
    resumenPrompt,
    resumenIcon
} from './sections/06-resumen.js';

export {
    generateAutoevaluacion,
    autoevaluacionTemplate,
    autoevaluacionPrompt,
    autoevaluacionIcon
} from './sections/07-autoevaluacion.js';

export {
    generateGlosario,
    glosarioTemplate,
    glosarioPrompt,
    glosarioIcon
} from './sections/08-glosario.js';

export {
    generateRecursos,
    recursosTemplate,
    recursosPrompt,
    recursosIcon
} from './sections/09-recursos.js';
