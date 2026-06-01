window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['bases-cotizacion'] = {
  title: "5. Bases de cotización a la Seguridad Social",
  content: `
    <h2>5. Bases de cotización a la Seguridad Social</h2>

    <div class="callout callout-info">
      <div class="callout-title">
        <span>🎯</span>
        <span>Objetivos de aprendizaje</span>
      </div>
      <ul>
        <li>Comprender qué es la base de cotización y cómo se calcula</li>
        <li>Diferenciar entre base de contingencias comunes y profesionales</li>
        <li>Conocer los topes mínimos y máximos de cotización</li>
        <li>Aplicar las reglas de cálculo en casos prácticos</li>
      </ul>
    </div>

    <h3>5.1. ¿Qué es la base de cotización?</h3>
    <p>La <strong>base de cotización</strong> es la cantidad sobre la que se aplican los porcentajes para calcular las aportaciones a la Seguridad Social. Representa la <strong>remuneración total</strong> que percibe el trabajador, con algunas inclusiones y exclusiones.</p>

    <div class="callout callout-success">
      <div class="callout-title">
        <span>📋</span>
        <span>Regla general</span>
      </div>
      <p>La base de cotización incluye <strong>todas las percepciones salariales</strong> (salario base, complementos, horas extra, pagas extra prorrateadas) y <strong>excluye</strong> las percepciones no salariales (dietas, gastos de transporte, indemnizaciones).</p>
    </div>

    <h3>5.2. Base de cotización por contingencias comunes</h3>
    <p>Se calcula sumando la retribución mensual del trabajador más la parte proporcional de las pagas extra:</p>

    <div class="callout callout-info">
      <div class="callout-title">
        <span>📐</span>
        <span>Fórmula</span>
      </div>
      <p class="text-center font-bold"><code class="bg-white px-6 py-3 rounded-lg border">Base CC = Remuneración mensual + (Pagas extra anuales / 12)</code></p>
    </div>

    <p>La base así calculada debe estar comprendida entre los <strong>topes mínimo y máximo</strong> del grupo de cotización:</p>
    <table>
      <thead>
        <tr>
          <th>Grupo</th>
          <th>Categoría</th>
          <th class="text-right">Base mínima €/mes</th>
          <th class="text-right">Base máxima €/mes</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Ingenieros y licenciados</td><td class="text-right">1.854,60</td><td class="text-right">4.720,50</td></tr>
        <tr><td>2</td><td>Ingenieros técnicos</td><td class="text-right">1.537,80</td><td class="text-right">4.720,50</td></tr>
        <tr><td>3</td><td>Jefes administrativos</td><td class="text-right">1.337,70</td><td class="text-right">4.720,50</td></tr>
        <tr><td>4</td><td>Ayudantes no titulados</td><td class="text-right">1.327,80</td><td class="text-right">4.720,50</td></tr>
        <tr><td>5</td><td>Oficiales administrativos</td><td class="text-right">1.327,80</td><td class="text-right">4.720,50</td></tr>
        <tr><td>6</td><td>Subalternos</td><td class="text-right">1.327,80</td><td class="text-right">4.720,50</td></tr>
        <tr><td>7</td><td>Auxiliares administrativos</td><td class="text-right">1.327,80</td><td class="text-right">4.720,50</td></tr>
        <tr><td>8</td><td>Oficiales 1ª y 2ª</td><td class="text-right">1.327,80</td><td class="text-right">4.720,50</td></tr>
        <tr><td>9</td><td>Oficiales 3ª y especialistas</td><td class="text-right">1.327,80</td><td class="text-right">4.720,50</td></tr>
        <tr><td>10</td><td>Peones</td><td class="text-right">1.327,80</td><td class="text-right">4.720,50</td></tr>
        <tr><td>11</td><td>Menores de 18 años</td><td class="text-right">1.327,80</td><td class="text-right">4.720,50</td></tr>
      </tbody>
    </table>

    <div class="callout callout-warning">
      <div class="callout-title">
        <span>⚠️</span>
        <span>Límites de cotización</span>
      </div>
      <p>Si la base calculada está por debajo del mínimo, se cotiza por el mínimo. Si supera el máximo, se cotiza por el máximo. Estas cuantías se actualizan anualmente en la Ley de Presupuestos Generales del Estado.</p>
    </div>

    <h3>5.3. Base de cotización por contingencias profesionales (AT y EP)</h3>
    <p>Se calcula de forma similar a la de contingencias comunes, pero <strong>incluyendo las horas extraordinarias</strong>:</p>

    <div class="callout callout-info">
      <div class="callout-title">
        <span>📐</span>
        <span>Fórmula</span>
      </div>
      <p class="text-center font-bold"><code class="bg-white px-6 py-3 rounded-lg border">Base AT y EP = Base CC + Horas extra del mes</code></p>
    </div>

    <h3>5.4. Ejemplo de cálculo de bases</h3>
    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
      <h4 class="font-bold mb-4">📝 Cálculo paso a paso</h4>
      <p><strong>Datos:</strong></p>
      <ul class="mb-4">
        <li>Salario base: 1.200 €</li>
        <li>Plus antigüedad: 60 €</li>
        <li>Plus convenio: 100 €</li>
        <li>Horas extra: 50 €</li>
        <li>Pagas extra: 2 × 1.200 € = 2.400 €/año</li>
      </ul>
      <p><strong>Paso 1:</strong> Retribución mensual = 1.200 + 60 + 100 = 1.360 €</p>
      <p><strong>Paso 2:</strong> Prorrateo pagas extra = 2.400 / 12 = 200 €</p>
      <p><strong>Paso 3:</strong> Base CC = 1.360 + 200 = 1.560 €</p>
      <p><strong>Paso 4:</strong> Base AT y EP = 1.560 + 50 = 1.610 €</p>
      <div class="callout callout-success mt-4">
        <p>✅ La base CC (1.560 €) está dentro del rango del grupo 5 (mín: 1.327,80 / máx: 4.720,50)</p>
      </div>
    </div>
  `
};
