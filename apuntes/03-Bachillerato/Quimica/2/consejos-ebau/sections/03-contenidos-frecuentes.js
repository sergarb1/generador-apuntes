window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['contenidos-frecuentes'] = {
  title: "3. Contenidos más frecuentes",
  content: `
    <h2>3. Contenidos más frecuentes en la EBAU de Química</h2>

    <p>Analizando exámenes de años anteriores, ciertos temas de Química aparecen <strong>de forma recurrente</strong>. Dominarlos te asegurará una base sólida de puntos.</p>

    <h3>3.1. Estequiometría y disoluciones</h3>

    <div class="callout callout-info my-6">
        <div class="callout-title">
            <span>🧮</span>
            <span>Tipos de problemas típicos</span>
        </div>
        <ul>
            <li><strong>Cálculo de moles</strong> a partir de masa, volumen o número de partículas</li>
            <li><strong>Reactivo limitante</strong> y rendimiento de la reacción</li>
            <li><strong>Concentración</strong>: molaridad, molalidad, % en masa, ppm</li>
            <li><strong>Diluciones</strong>: fórmula M₁V₁ = M₂V₂</li>
            <li><strong>Ley de los gases ideales</strong>: PV = nRT</li>
        </ul>
    </div>

    <div class="bg-blue-50 p-6 rounded-2xl border border-blue-200 my-6">
        <h4 class="font-bold text-blue-800 mb-3">📐 Fórmulas imprescindibles</h4>
        <div class="space-y-3 text-sm">
            <div class="bg-white p-3 rounded-lg border">
                <code class="block font-bold">n = m / M</code>
                <span class="text-slate-600">moles = masa (g) / masa molar (g/mol)</span>
            </div>
            <div class="bg-white p-3 rounded-lg border">
                <code class="block font-bold">M = n / V</code>
                <span class="text-slate-600">molaridad = moles / volumen (L)</span>
            </div>
            <div class="bg-white p-3 rounded-lg border">
                <code class="block font-bold">PV = nRT</code>
                <span class="text-slate-600">ecuación de gases ideales (R = 0,082 atm·L/mol·K)</span>
            </div>
            <div class="bg-white p-3 rounded-lg border">
                <code class="block font-bold">N = n · Nₐ</code>
                <span class="text-slate-600">número de partículas (Nₐ = 6,022·10²³)</span>
            </div>
        </div>
    </div>

    <h3>3.2. Equilibrio químico</h3>

    <table class="my-6">
        <thead>
            <tr>
                <th>Concepto</th>
                <th>Fórmula / expresión</th>
                <th>Clave</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Constante Kc</strong></td>
                <td><code class="text-sm">Kc = [productos] / [reactivos]</code></td>
                <td>Solo gases y disoluciones</td>
            </tr>
            <tr>
                <td><strong>Constante Kp</strong></td>
                <td><code class="text-sm">Kp = (P_productos) / (P_reactivos)</code></td>
                <td>Solo gases</td>
            </tr>
            <tr>
                <td><strong>Relación Kp-Kc</strong></td>
                <td><code class="text-sm">Kp = Kc(RT)^Δn</code></td>
                <td>Δn = moles gas productos - reactivos</td>
            </tr>
            <tr>
                <td><strong>Principio de Le Chatelier</strong></td>
                <td>-</td>
                <td>El equilibrio se opone al cambio</td>
            </tr>
        </tbody>
    </table>

    <div class="callout callout-warning my-6">
        <div class="callout-title">
            <span>⚠️</span>
            <span>Errores comunes en equilibrio</span>
        </div>
        <ul>
            <li>olvidar elevar las concentraciones a sus <strong>coeficientes estequiométricos</strong></li>
            <li>incluir <strong>sólidos y líquidos puros</strong> en la expresión de K</li>
            <li>confundir <strong>Q (cociente de reacción)</strong> con K</li>
            <li>no usar <strong>unidades de presión consistentes</strong> en Kp</li>
        </ul>
    </div>

    <h3>3.3. Ácido-base</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
            <h4 class="font-bold text-purple-800 mb-3">📊 Conceptos clave</h4>
            <ul class="space-y-2 text-sm">
                <li><strong>pH = -log[H⁺]</strong></li>
                <li><strong>pOH = -log[OH⁻]</strong></li>
                <li><strong>pH + pOH = 14</strong> (a 25°C)</li>
                <li><strong>Kw = [H⁺][OH⁻] = 10⁻¹⁴</strong></li>
                <li><strong>Ka · Kb = Kw</strong> (par conjugado)</li>
            </ul>
        </div>
        <div class="bg-orange-50 p-5 rounded-xl border border-orange-200">
            <h4 class="font-bold text-orange-800 mb-3">🧪 Problemas típicos</h4>
            <ul class="space-y-2">
                <li>cálculo de pH de ácidos/bases fuertes</li>
                <li>cálculo de pH de ácidos/bases débiles</li>
                <li>valoraciones ácido-base</li>
                <li>indicadores y zona de viraje</li>
                <li>disoluciones reguladoras (tampón)</li>
            </ul>
        </div>
    </div>

    <h3>3.4. Redox y electroquímica</h3>

    <div class="callout callout-success my-6">
        <div class="callout-title">
            <span>⚡</span>
            <span>Método del ion-electrón</span>
        </div>
        <ol class="list-decimal list-inside space-y-2">
            <li><strong>Identificar especies</strong> que se oxidan y reducen</li>
            <li><strong>Escribir las semirreacciones</strong> por separado</li>
            <li><strong>Igualar átomos</strong> (excepto H y O)</li>
            <li><strong>Igualar oxígenos</strong> añadiendo H₂O</li>
            <li><strong>Igualar hidrógenos</strong> añadiendo H⁺</li>
            <li><strong>Igualar cargas</strong> añadiendo electrones</li>
            <li><strong>Multiplicar</strong> para igualar electrones</li>
            <li><strong>Sumar</strong> y simplificar</li>
        </ol>
    </div>

    <h3>3.5. Química orgánica</h3>

    <table class="my-6">
        <thead>
            <tr>
                <th>Grupo funcional</th>
                <th>Fórmula general</th>
                <th>Sufijo</th>
                <th>Reacciones típicas</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Alcano</strong></td>
                <td>CₙH₂ₙ₊₂</td>
                <td>-ano</td>
                <td>Combustión, halogenación</td>
            </tr>
            <tr>
                <td><strong>Alqueno</strong></td>
                <td>CₙH₂ₙ</td>
                <td>-eno</td>
                <td>Adición (H₂, X₂, HX, H₂O)</td>
            </tr>
            <tr>
                <td><strong>Alcohol</strong></td>
                <td>R-OH</td>
                <td>-ol</td>
                <td>Oxidación, deshidratación</td>
            </tr>
            <tr>
                <td><strong>Aldehído</strong></td>
                <td>R-CHO</td>
                <td>-al</td>
                <td>Oxidación a ácido, reducción a alcohol</td>
            </tr>
            <tr>
                <td><strong>Cetona</strong></td>
                <td>R-CO-R'</td>
                <td>-ona</td>
                <td>Reducción a alcohol</td>
            </tr>
            <tr>
                <td><strong>Ácido carboxílico</strong></td>
                <td>R-COOH</td>
                <td>-oico</td>
                <td>Esterificación, neutralización</td>
            </tr>
        </tbody>
    </table>
  `
};
