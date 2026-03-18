window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['tecnica-examen'] = {
  title: "4. Técnica de examen",
  content: `
    <h2>4. Técnica de examen en Química</h2>

    <p>Saber Química es fundamental, pero <strong>saber hacer el examen</strong> es igual de importante. Una buena técnica puede marcar la diferencia entre un 7 y un 9.</p>

    <h3>4.1. Gestión del tiempo (90 minutos)</h3>

    <div class="bg-blue-50 p-6 rounded-2xl border border-blue-200 my-6">
        <h4 class="font-bold text-blue-800 mb-3">⏱️ Distribución recomendada</h4>
        <table>
            <thead>
                <tr>
                    <th>fase</th>
                    <th>tiempo</th>
                    <th>actividad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>lectura inicial</strong></td>
                    <td>5-10 min</td>
                    <td>leer TODAS las preguntas, elegir opción</td>
                </tr>
                <tr>
                    <td><strong>resolución</strong></td>
                    <td>60-70 min</td>
                    <td>resolver cuestiones (12-15 min por pregunta)</td>
                </tr>
                <tr>
                    <td><strong>revisión</strong></td>
                    <td>10-15 min</td>
                    <td>repasar cálculos, unidades, fórmulas químicas</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="callout callout-info my-6">
        <div class="callout-title">
            <span>💡</span>
            <span>Estrategia de orden en Química</span>
        </div>
        <ol class="list-decimal list-inside space-y-2">
            <li><strong>Empieza por estequiometría</strong> (suele ser la más mecánica)</li>
            <li><strong>Continúa con equilibrio o ácido-base</strong> (cuando estás fresco)</li>
            <li><strong>Deja la orgánica</strong> para el medio (requiere precisión)</li>
            <li><strong>Termina con redox o teoría</strong> (si te atascas, hay menos cálculo)</li>
            <li><strong>Nunca dejes nada en blanco</strong>: escribe algo coherente aunque no estés seguro</li>
        </ol>
    </div>

    <h3>4.2. Presentación y expresión en Química</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="bg-green-50 p-5 rounded-xl border border-green-200">
            <h4 class="font-bold text-green-800 mb-3">✅ Lo que valoran los correctores</h4>
            <ul class="space-y-2">
                <li><span class="text-green-600">✓</span> <strong>fórmulas químicas bien escritas</strong> (H₂O, no H20)</li>
                <li><span class="text-green-600">✓</span> <strong>unidades en todos los resultados</strong></li>
                <li><span class="text-green-600">✓</span> <strong>proceso bien explicado</strong> (no solo el resultado)</li>
                <li><span class="text-green-600">✓</span> <strong>ecuaciones químicas ajustadas</strong></li>
                <li><span class="text-green-600">✓</span> <strong>letra clara y orden</strong></li>
            </ul>
        </div>
        <div class="bg-red-50 p-5 rounded-xl border border-red-200">
            <h4 class="font-bold text-red-800 mb-3">❌ Lo que penaliza</h4>
            <ul class="space-y-2">
                <li><span class="text-red-600">✗</span> fórmulas <strong>mal escritas</strong> (subíndices incorrectos)</li>
                <li><span class="text-red-600">✗</span> resultados <strong>sin unidades</strong></li>
                <li><span class="text-red-600">✗</span> <strong>ecuaciones sin ajustar</strong></li>
                <li><span class="text-red-600">✗</span> <strong>saltarse pasos</strong> intermedios</li>
                <li><span class="text-red-600">✗</span> <strong>tachones y desorden</strong></li>
            </ul>
        </div>
    </div>

    <h3>4.3. Resolución de problemas numéricos en Química</h3>

    <div class="callout callout-success my-6">
        <div class="callout-title">
            <span>📝</span>
            <span>Plantilla de resolución</span>
        </div>
        <ol class="list-decimal list-inside space-y-2">
            <li><strong>Datos:</strong> escribe claramente todos los datos del enunciado con sus unidades</li>
            <li><strong>Fórmulas:</strong> indica las ecuaciones químicas y fórmulas que vas a utilizar</li>
            <li><strong>Desarrollo:</strong> muestra los pasos intermedios del cálculo</li>
            <li><strong>Resultado:</strong> destaca el resultado final CON UNIDADES</li>
            <li><strong>Comprobación:</strong> verifica que el resultado tiene sentido (orden de magnitud, signo...)</li>
        </ol>
    </div>

    <h3>4.4. Cifras significativas en Química</h3>

    <div class="callout callout-warning my-6">
        <div class="callout-title">
            <span>⚠️</span>
            <span>Reglas de cifras significativas</span>
        </div>
        <ul class="space-y-2">
            <li><strong>El resultado debe tener las mismas cifras significativas</strong> que el dato con menos cifras</li>
            <li><strong>Los ceros a la izquierda no cuentan:</strong> 0,0025 tiene 2 c.s.</li>
            <li><strong>Los ceros entre cifras sí cuentan:</strong> 2,005 tiene 4 c.s.</li>
            <li><strong>En logaritmos,</strong> las cifras significativas van en la parte decimal: pH = 2,35 (2 c.s.)</li>
            <li><strong>Usa masas atómicas con 2-3 decimales</strong> según la tabla periódica oficial</li>
        </ul>
    </div>
  `
};
