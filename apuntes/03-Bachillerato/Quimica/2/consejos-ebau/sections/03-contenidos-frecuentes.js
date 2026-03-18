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
            <li><strong>Reacciones consecutivas</strong> y reactivos en exceso</li>
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
                <code class="block font-bold">m = d · V</code>
                <span class="text-slate-600">masa = densidad × volumen</span>
            </div>
            <div class="bg-white p-3 rounded-lg border">
                <code class="block font-bold">% masa = (m soluto / m disolución) × 100</code>
                <span class="text-slate-600">porcentaje en masa</span>
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

    <div class="callout callout-success my-6">
        <div class="callout-title">
            <span>💡</span>
            <span>Consejo para estequiometría</span>
        </div>
        <p><strong>SIEMPRE ajusta la ecuación química</strong> antes de empezar cualquier cálculo. Sin la ecuación ajustada, no puedes usar las relaciones estequiométricas correctamente.</p>
    </div>

    <h3>3.2. Equilibrio químico</h3>

    <table>
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
            <tr>
                <td><strong>Grado de disociación (α)</strong></td>
                <td><code class="text-sm">α = (moles disociados / moles iniciales)</code></td>
                <td>0 < α < 1</td>
            </tr>
        </tbody>
    </table>

    <div class="bg-amber-50 p-6 rounded-2xl border border-amber-200 my-6">
        <h4 class="font-bold text-amber-800 mb-3">⚠️ Factores que afectan al equilibrio</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h5 class="font-semibold text-amber-700 mb-2">Concentración:</h5>
                <ul class="text-sm space-y-1">
                    <li>• Aumentar reactivos → desplaza a productos</li>
                    <li>• Aumentar productos → desplaza a reactivos</li>
                </ul>
            </div>
            <div>
                <h5 class="font-semibold text-amber-700 mb-2">Presión (solo gases):</h5>
                <ul class="text-sm space-y-1">
                    <li>• Aumentar presión → hacia donde haya menos moles</li>
                    <li>• Disminuir presión → hacia donde haya más moles</li>
                </ul>
            </div>
            <div>
                <h5 class="font-semibold text-amber-700 mb-2">Temperatura:</h5>
                <ul class="text-sm space-y-1">
                    <li>• Reacción exotérmica: ↑T desplaza a reactivos</li>
                    <li>• Reacción endotérmica: ↑T desplaza a productos</li>
                </ul>
            </div>
            <div>
                <h5 class="font-semibold text-amber-700 mb-2">Catalizador:</h5>
                <ul class="text-sm space-y-1">
                    <li>• NO afecta al equilibrio</li>
                    <li>• Solo acelera la velocidad</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="callout callout-warning my-6">
        <div class="callout-title">
            <span>⚠️</span>
            <span>Errores comunes en equilibrio</span>
        </div>
        <ul>
            <li><strong>Olvidar elevar las concentraciones</strong> a sus coeficientes estequiométricos</li>
            <li><strong>Incluir sólidos y líquidos puros</strong> en la expresión de K</li>
            <li><strong>Confundir Q (cociente de reacción)</strong> con K</li>
            <li><strong>No usar unidades de presión consistentes</strong> en Kp</li>
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
                <li><strong>pKa = -log Ka</strong></li>
                <li><strong>Ecuación de Henderson-Hasselbalch:</strong> pH = pKa + log([A⁻]/[HA])</li>
            </ul>
        </div>
        <div class="bg-orange-50 p-5 rounded-xl border border-orange-200">
            <h4 class="font-bold text-orange-800 mb-3">🧪 Problemas típicos</h4>
            <ul class="space-y-2">
                <li>Cálculo de pH de ácidos/bases fuertes</li>
                <li>Cálculo de pH de ácidos/bases débiles</li>
                <li>Valoraciones ácido-base (punto de equivalencia)</li>
                <li>Indicadores y zona de viraje</li>
                <li>Disoluciones reguladoras (tampón)</li>
                <li>Hidrólisis de sales</li>
            </ul>
        </div>
    </div>

    <div class="bg-blue-50 p-6 rounded-2xl border border-blue-200 my-6">
        <h4 class="font-bold text-blue-800 mb-3">📝 Ácidos y bases fuertes (disociación completa)</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h5 class="font-semibold text-blue-700 mb-2">Ácidos fuertes:</h5>
                <ul class="text-sm space-y-1">
                    <li>• HCl → H⁺ + Cl⁻</li>
                    <li>• HBr → H⁺ + Br⁻</li>
                    <li>• HI → H⁺ + I⁻</li>
                    <li>• HNO₃ → H⁺ + NO₃⁻</li>
                    <li>• H₂SO₄ → 2H⁺ + SO₄²⁻</li>
                    <li>• HClO₄ → H⁺ + ClO₄⁻</li>
                </ul>
            </div>
            <div>
                <h5 class="font-semibold text-blue-700 mb-2">Bases fuertes:</h5>
                <ul class="text-sm space-y-1">
                    <li>• NaOH → Na⁺ + OH⁻</li>
                    <li>• KOH → K⁺ + OH⁻</li>
                    <li>• Ca(OH)₂ → Ca²⁺ + 2OH⁻</li>
                    <li>• Ba(OH)₂ → Ba²⁺ + 2OH⁻</li>
                </ul>
            </div>
        </div>
    </div>

    <h3>3.4. Redox y electroquímica</h3>

    <div class="callout callout-success my-6">
        <div class="callout-title">
            <span>⚡</span>
            <span>Método del ion-electrón (medio ácido)</span>
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

    <div class="bg-green-50 p-6 rounded-2xl border border-green-200 my-6">
        <h4 class="font-bold text-green-800 mb-3">🔋 Electroquímica</h4>
        <div class="space-y-3 text-sm">
            <div class="bg-white p-3 rounded-lg border">
                <code class="block font-bold">E°celda = E°cátodo - E°ánodo</code>
                <span class="text-slate-600">Potencial estándar de la pila</span>
            </div>
            <div class="bg-white p-3 rounded-lg border">
                <code class="block font-bold">ΔG° = -nFE°</code>
                <span class="text-slate-600">Energía libre de Gibbs (F = 96485 C/mol)</span>
            </div>
            <div class="bg-white p-3 rounded-lg border">
                <code class="block font-bold">E = E° - (RT/nF) · ln Q</code>
                <span class="text-slate-600">Ecuación de Nernst</span>
            </div>
            <div class="bg-white p-3 rounded-lg border">
                <code class="block font-bold">m = (M · I · t) / (n · F)</code>
                <span class="text-slate-600">Ley de Faraday (electrólisis)</span>
            </div>
        </div>
    </div>

    <h3>3.5. Química orgánica</h3>

    <table>
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
                <td><strong>Alquino</strong></td>
                <td>CₙH₂ₙ₋₂</td>
                <td>-ino</td>
                <td>Adición (similar a alquenos)</td>
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
            <tr>
                <td><strong>Éster</strong></td>
                <td>R-COO-R'</td>
                <td>-oato de ...-ilo</td>
                <td>Hidrólisis</td>
            </tr>
            <tr>
                <td><strong>Amina</strong></td>
                <td>R-NH₂</td>
                <td>-amina</td>
                <td>Basicidad, formación de amidas</td>
            </tr>
            <tr>
                <td><strong>Amida</strong></td>
                <td>R-CO-NH₂</td>
                <td>-amida</td>
                <td>Hidrólisis</td>
            </tr>
        </tbody>
    </table>

    <div class="bg-purple-50 p-6 rounded-2xl border border-purple-200 my-6">
        <h4 class="font-bold text-purple-800 mb-3">🔁 Reacciones orgánicas importantes</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h5 class="font-semibold text-purple-700 mb-2">Oxidación de alcoholes:</h5>
                <ul class="text-sm space-y-1">
                    <li>• Alcohol primario → Aldehído → Ácido</li>
                    <li>• Alcohol secundario → Cetona</li>
                    <li>• Alcohol terciario → NO se oxida</li>
                </ul>
            </div>
            <div>
                <h5 class="font-semibold text-purple-700 mb-2">Esterificación:</h5>
                <ul class="text-sm space-y-1">
                    <li>• Ácido + Alcohol → Éster + H₂O</li>
                    <li>• Reacción reversible</li>
                    <li>• Catalizada por H₂SO₄</li>
                </ul>
            </div>
            <div>
                <h5 class="font-semibold text-purple-700 mb-2">Adición a alquenos:</h5>
                <ul class="text-sm space-y-1">
                    <li>• Regla de Markovnikov</li>
                    <li>• El H va al C con más H</li>
                </ul>
            </div>
            <div>
                <h5 class="font-semibold text-purple-700 mb-2">Sustitución aromática:</h5>
                <ul class="text-sm space-y-1">
                    <li>• Halogenación, nitración, sulfonación</li>
                    <li>• El benceno mantiene su aromaticidad</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="callout callout-warning my-6">
        <div class="callout-title">
            <span>⚠️</span>
            <span>Errores comunes en orgánica</span>
        </div>
        <ul>
            <li><strong>Contar mal la cadena principal</strong> → debe ser la más larga CON el grupo funcional</li>
            <li><strong>Numerar desde el extremo equivocado</strong> → el grupo funcional debe tener el localizador más bajo</li>
            <li><strong>Olvidar los localizadores</strong> → siempre indica posición (2-butanol, no butanol)</li>
            <li><strong>Confundir aldehído y cetona</strong> → aldehído: terminal; cetona: interno</li>
            <li><strong>Oxidar alcohol terciario</strong> → NO se puede oxidar</li>
        </ul>
    </div>
  `
};
