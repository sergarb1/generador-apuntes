window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['tecnica-examen'] = {
  title: "4. Técnica de examen",
  content: `
    <h2>4. Técnica de examen: maximizar tu puntuación</h2>

    <p>Saber Química es fundamental, pero <strong>saber hacer el examen</strong> es igual de importante. Una buena técnica puede marcar la diferencia entre un 7 y un 9.</p>

    <h3>4.1. Gestión del Tiempo</h3>

    <div class="bg-blue-50 p-6 rounded-2xl border border-blue-200 my-6">
        <h4 class="font-bold text-blue-800 mb-3">⏱️ Distribución Recomendada (90 minutos)</h4>
        <table>
            <thead>
                <tr>
                    <th>Fase</th>
                    <th>Tiempo</th>
                    <th>Actividad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Lectura inicial</strong></td>
                    <td>5-10 min</td>
                    <td>Leer TODAS las preguntas, elegir opción</td>
                </tr>
                <tr>
                    <td><strong>Resolución</strong></td>
                    <td>60-70 min</td>
                    <td>Resolver cuestiones (12-15 min por pregunta)</td>
                </tr>
                <tr>
                    <td><strong>Revisión</strong></td>
                    <td>10-15 min</td>
                    <td>Repasar cálculos, unidades, expresión</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="callout callout-info my-6">
        <div class="callout-title">
            <span>💡</span>
            <span>Estrategia de Orden</span>
        </div>
        <ol class="list-decimal list-inside space-y-2">
            <li><strong>Empieza por lo que mejor sepas</strong> (no tiene que ser la pregunta 1)</li>
            <li>Deja las preguntas <strong>más difíciles para el medio</strong> (cuando estás más concentrado)</li>
            <li>Si te atascas, <strong>pasa a la siguiente</strong> y vuelve después</li>
            <li><strong>Nunca dejes nada en blanco</strong>: escribe algo coherente aunque no estés seguro</li>
        </ol>
    </div>

    <h3>4.2. Presentación y Expresión</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="bg-green-50 p-5 rounded-xl border border-green-200">
            <h4 class="font-bold text-green-800 mb-3">✅ Lo que Valoran los Correctores</h4>
            <ul class="space-y-2">
                <li><span class="text-green-600">✓</span> <strong>Letra clara y legible</strong></li>
                <li><span class="text-green-600">✓</span> <strong>Orden y limpieza</strong> en la página</li>
                <li><span class="text-green-600">✓</span> <strong>Unidades en todos los resultados</strong></li>
                <li><span class="text-green-600">✓</span> <strong>Proceso bien explicado</strong> (no solo el resultado)</li>
                <li><span class="text-green-600">✓</span> <strong>Fórmulas escritas correctamente</strong></li>
            </ul>
        </div>
        <div class="bg-red-50 p-5 rounded-xl border border-red-200">
            <h4 class="font-bold text-red-800 mb-3">❌ Lo que Penaliza</h4>
            <ul class="space-y-2">
                <li><span class="text-red-600">✗</span> Letra <strong>ilegible o tachones</strong></li>
                <li><span class="text-red-600">✗</span> Resultados <strong>sin unidades</strong></li>
                <li><span class="text-red-600">✗</span> <strong>Saltarse pasos</strong> intermedios</li>
                <li><span class="text-red-600">✗</span> <strong>Fórmulas mal escritas</strong> (H₂O, no H20)</li>
                <li><span class="text-red-600">✗</span> <strong>Falta de coherencia</strong> en la explicación</li>
            </ul>
        </div>
    </div>

    <h3>4.3. Resolución de Problemas Numéricos</h3>

    <div class="callout callout-success my-6">
        <div class="callout-title">
            <span>📝</span>
            <span>Plantilla de Resolución</span>
        </div>
        <ol class="list-decimal list-inside space-y-2">
            <li><strong>DATOS:</strong> Escribe claramente todos los datos del enunciado con sus unidades</li>
            <li><strong>FÓRMULAS:</strong> Indica las ecuaciones que vas a utilizar</li>
            <li><strong>DESARROLLO:</strong> Muestra los pasos intermedios del cálculo</li>
            <li><strong>RESULTADO:</strong> Destaca el resultado final CON UNIDADES</li>
            <li><strong>COMPROBACIÓN:</strong> Verifica que el resultado tiene sentido (orden de magnitud, signo...)</li>
        </ol>
    </div>

    <div class="bg-amber-50 p-6 rounded-2xl border border-amber-200 my-6">
        <h4 class="font-bold text-amber-800 mb-3">📊 Ejemplo de Resolución Completa</h4>
        <div class="space-y-3 text-sm">
            <div class="bg-white p-3 rounded-lg border">
                <p class="font-bold text-amber-800 mb-2">Problema:</p>
                <p class="italic">"Calcula el pH de una disolución 0,1 M de HCl"</p>
            </div>
            <div class="bg-white p-3 rounded-lg border">
                <p class="font-bold text-blue-800 mb-2">Resolución modelo:</p>
                <div class="space-y-2">
                    <p><strong>Datos:</strong> [HCl] = 0,1 M; HCl es ácido fuerte</p>
                    <p><strong>Fórmula:</strong> Para ácido fuerte: [H⁺] = [HCl]₀</p>
                    <p><strong>Desarrollo:</strong></p>
                    <ul class="list-disc list-inside ml-4">
                        <li>HCl → H⁺ + Cl⁻ (disociación completa)</li>
                        <li>[H⁺] = 0,1 M</li>
                        <li>pH = -log[H⁺] = -log(0,1) = 1</li>
                    </ul>
                    <p class="font-bold"><strong>Resultado: pH = 1,00</strong></p>
                </div>
            </div>
        </div>
    </div>

    <h3>4.4. Cifras significativas</h3>

    <div class="callout callout-warning my-6">
        <div class="callout-title">
            <span>⚠️</span>
            <span>Reglas de Cifras Significativas</span>
        </div>
        <ul class="space-y-2">
            <li>El resultado debe tener las <strong>mismas cifras significativas</strong> que el dato con menos cifras</li>
            <li><strong>Los ceros a la izquierda no cuentan</strong>: 0,0025 tiene 2 c.s.</li>
            <li><strong>Los ceros entre cifras sí cuentan</strong>: 2,005 tiene 4 c.s.</li>
            <li>En <strong>logaritmos</strong>, las cifras significativas van en la parte decimal: pH = 2,35 (2 c.s.)</li>
        </ul>
    </div>
  `
};
