window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['errores-comunes'] = {
  title: "5. Errores comunes y cómo evitarlos",
  content: `
    <h2>5. Errores comunes y cómo evitarlos</h2>

    <p>Conocer los errores más frecuentes te ayudará a <strong>no cometerlos</strong> el día del examen. Revisa esta lista cuidadosamente.</p>

    <h3>5.1. Errores en estequiometría</h3>

    <div class="callout callout-error my-6">
        <div class="callout-title">
            <span>❌</span>
            <span>Error: No ajustar la ecuación</span>
        </div>
        <p><strong>Problema:</strong> Calcular directamente sin ajustar la reacción primero.</p>
        <p><strong>Solución:</strong> <strong>SIEMPRE</strong> ajusta la ecuación química antes de empezar cualquier cálculo.</p>
    </div>

    <div class="callout callout-error my-6">
        <div class="callout-title">
            <span>❌</span>
            <span>Error: Confundir masa molar con número másico</span>
        </div>
        <p><strong>Problema:</strong> Usar el número másico directamente sin considerar la fórmula completa.</p>
        <p><strong>Solución:</strong> Calcula la masa molar <strong>sumando las masas atómicas</strong> de todos los átomos en la fórmula.</p>
    </div>

    <div class="callout callout-error my-6">
        <div class="callout-title">
            <span>❌</span>
            <span>Error: Olvidar el reactivo limitante</span>
        </div>
        <p><strong>Problema:</strong> Asumir que todos los reactivos se consumen completamente.</p>
        <p><strong>Solución:</strong> Cuando hay dos reactivos, <strong>calcula cuál es el limitante</strong> comparando los moles disponibles con la estequiometría.</p>
    </div>

    <h3>5.2. Errores en equilibrio</h3>

    <table class="my-6">
        <thead>
            <tr>
                <th>Error</th>
                <th>Consecuencia</th>
                <th>Cómo evitarlo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>No elevar a coeficientes</td>
                <td>Kc incorrecta</td>
                <td>Recuerda: Kc = [A]ᵃ[B]ᵇ / [C]ᶜ[D]ᵈ</td>
            </tr>
            <tr>
                <td>Incluir sólidos/líquidos</td>
                <td>Expresión errónea</td>
                <td>Solo gases y disoluciones en K</td>
            </tr>
            <tr>
                <td>Confundir Q con K</td>
                <td>Predicción incorrecta</td>
                <td>Q < K → derecha; Q > K → izquierda</td>
            </tr>
            <tr>
                <td>Mal signo en Δn</td>
                <td>Kp mal calculada</td>
                <td>Δn = n(gas) productos - n(gas) reactivos</td>
            </tr>
        </tbody>
    </table>

    <h3>5.3. Errores en ácido-base</h3>

    <div class="bg-red-50 p-6 rounded-2xl border border-red-200 my-6">
        <h4 class="font-bold text-red-800 mb-3">🚫 Errores Fatales en pH</h4>
        <ul class="space-y-3">
            <li>
                <strong>Error:</strong> pH = log[H⁺] (falta el signo menos)
                <br><strong>Correcto:</strong> <code class="text-sm bg-white px-2 py-1 rounded">pH = -log[H⁺]</code>
            </li>
            <li>
                <strong>Error:</strong> pH + pOH = 7
                <br><strong>Correcto:</strong> <code class="text-sm bg-white px-2 py-1 rounded">pH + pOH = 14</code> (a 25°C)
            </li>
            <li>
                <strong>Error:</strong> Usar Ka para base o Kb para ácido
                <br><strong>Correcto:</strong> Ácidos → Ka; Bases → Kb
            </li>
            <li>
                <strong>Error:</strong> Olvidar que pH < 7 es ácido
                <br><strong>Correcto:</strong> pH < 7 ácido; pH = 7 neutro; pH > 7 básico
            </li>
        </ul>
    </div>

    <h3>5.4. Errores en redox</h3>

    <div class="callout callout-warning my-6">
        <div class="callout-title">
            <span>⚠️</span>
            <span>Errores en el Método del Ion-Electrón</span>
        </div>
        <ul class="space-y-2">
            <li><strong>No igualar cargas</strong> al final → la ecuación no está balanceada</li>
            <li><strong>Intercambiar oxidación y reducción</strong> → identifica quién pierde/gana e⁻</li>
            <li><strong>Olvidar el medio</strong> (ácido: H⁺; básico: OH⁻)</li>
            <li><strong>Mal cálculo del potencial</strong>: E°celda = E°cátodo - E°ánodo</li>
        </ul>
    </div>

    <h3>5.5. Errores en orgánica</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="bg-orange-50 p-5 rounded-xl border border-orange-200">
            <h4 class="font-bold text-orange-800 mb-3">📝 Nomenclatura</h4>
            <ul class="space-y-2 text-sm">
                <li>❌ Contar cadena incorrecta → ✅ Cadena más larga CON grupo funcional</li>
                <li>❌ Numerar desde extremo equivocado → ✅ Desde el grupo funcional más prioritario</li>
                <li>❌ Olvidar localizadores → ✅ Siempre indica posición (2-butanol, no butanol)</li>
                <li>❌ Confundir aldehído y cetona → ✅ Aldehído: terminal; Cetona: interno</li>
            </ul>
        </div>
        <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
            <h4 class="font-bold text-purple-800 mb-3">🔬 Reacciones</h4>
            <ul class="space-y-2 text-sm">
                <li>❌ Oxidar alcohol terciario → ✅ Los alcoholes terciarios NO se oxidan</li>
                <li>❌ Confundir adición y sustitución → ✅ Alquenos: adición; Aromáticos: sustitución</li>
                <li>❌ Esterificación incorrecta → ✅ Ácido + Alcohol → Éster + H₂O</li>
                <li>❌ No reconocer isómeros → ✅ Misma fórmula, diferente estructura</li>
            </ul>
        </div>
    </div>

    <h3>5.6. Errores de forma</h3>

    <div class="callout callout-info my-6">
        <div class="callout-title">
            <span>📋</span>
            <span>Checklist Anti-Errores</span>
        </div>
        <p class="mb-3">Antes de entregar, verifica:</p>
        <ul class="space-y-2">
            <li><input type="checkbox" class="mr-2"> ¿Todas las ecuaciones están ajustadas?</li>
            <li><input type="checkbox" class="mr-2"> ¿Todos los resultados tienen unidades?</li>
            <li><input type="checkbox" class="mr-2"> ¿Las fórmulas químicas están bien escritas (subíndices)?</li>
            <li><input type="checkbox" class="mr-2"> ¿Las cifras significativas son correctas?</li>
            <li><input type="checkbox" class="mr-2"> ¿El resultado tiene sentido físico/químico?</li>
            <li><input type="checkbox" class="mr-2"> ¿La letra es legible y el orden es claro?</li>
        </ul>
    </div>
  `
};
