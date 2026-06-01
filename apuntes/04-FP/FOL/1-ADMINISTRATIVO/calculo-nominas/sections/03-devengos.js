window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['devengos'] = {
  title: "3. Devengos: percepciones salariales y no salariales",
  content: `
    <h2>3. Devengos: percepciones salariales y no salariales</h2>

    <div class="callout callout-info">
      <div class="callout-title">
        <span>🎯</span>
        <span>Objetivos de aprendizaje</span>
      </div>
      <ul>
        <li>Diferenciar entre percepciones salariales y no salariales</li>
        <li>Calcular los distintos complementos salariales</li>
        <li>Identificar las percepciones no salariales más comunes</li>
        <li>Conocer los límites legales de cada concepto</li>
      </ul>
    </div>

    <h3>3.1. Percepciones salariales</h3>
    <p>Son aquellas cantidades que retribuyen el <strong>trabajo efectivo</strong> del trabajador. Cotizan a la Seguridad Social y tributan en el IRPF.</p>

    <h4>Salario base</h4>
    <p>Es la retribución fijada por unidad de tiempo o de obra. Se establece en el <strong>convenio colectivo</strong> aplicable o en el contrato de trabajo. No puede ser inferior al SMI.</p>

    <div class="callout callout-success">
      <div class="callout-title">
        <span>💡</span>
        <span>Fórmula</span>
      </div>
      <p class="text-center text-lg"><code class="bg-white px-6 py-3 rounded-lg border">Salario base mensual = Salario base anual / 12 (o 14 pagas)</code></p>
    </div>

    <h4>Complementos salariales</h4>
    <p>Son cantidades que se añaden al salario base en función de circunstancias concretas:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
        <span class="text-2xl">📈</span>
        <h4 class="font-bold mt-2 text-sm">Plus de antigüedad</h4>
        <p class="text-xs text-slate-600 mt-1">Por años de servicio en la empresa. Suelen aplicarse porcentajes (5%, 10%) por trienios o quinquenios.</p>
      </div>
      <div class="bg-green-50 p-4 rounded-xl border border-green-200">
        <span class="text-2xl">🌙</span>
        <h4 class="font-bold mt-2 text-sm">Plus de nocturnidad</h4>
        <p class="text-xs text-slate-600 mt-1">Por trabajo en horario nocturno (22:00 a 06:00). Mínimo del 25% sobre salario base.</p>
      </div>
      <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
        <span class="text-2xl">📅</span>
        <h4 class="font-bold mt-2 text-sm">Plus de toxicidad</h4>
        <p class="text-xs text-slate-600 mt-1">Por trabajos penosos, tóxicos o peligrosos. Se fija en convenio colectivo.</p>
      </div>
      <div class="bg-amber-50 p-4 rounded-xl border border-amber-200">
        <span class="text-2xl">🏆</span>
        <h4 class="font-bold mt-2 text-sm">Plus de productividad</h4>
        <p class="text-xs text-slate-600 mt-1">Vinculado al rendimiento o cumplimiento de objetivos. Puede ser fijo o variable.</p>
      </div>
    </div>

    <h4>Horas extraordinarias</h4>
    <p>Son las horas de trabajo que exceden de la jornada ordinaria. Se pagan con un recargo sobre el valor de la hora ordinaria:</p>
    <ul>
      <li><strong>Horas extra comunes:</strong> recargo mínimo del 25% sobre el valor de la hora ordinaria</li>
      <li><strong>Horas extra fuerza mayor:</strong> para prevenir o reparar siniestros</li>
    </ul>

    <div class="callout callout-warning">
      <div class="callout-title">
        <span>⚠️</span>
        <span>Límite legal</span>
      </div>
      <p>No se pueden realizar más de <strong>80 horas extraordinarias al año</strong> (salvo fuerza mayor). Las horas extra cotizan de forma especial.</p>
    </div>

    <h4>Gratificaciones extraordinarias (pagas extra)</h4>
    <p>En España es habitual tener <strong>2 pagas extraordinarias al año</strong> (normalmente en verano y Navidad). El convenio puede establecer su prorrateo en 12 mensualidades.</p>

    <div class="callout callout-success">
      <div class="callout-title">
        <span>💡</span>
        <span>Ejemplo de prorrateo</span>
      </div>
      <p>Salario base: 1.200 €/mes · Pagas extra: 2 × 1.200 € = 2.400 €/año</p>
      <p><strong>Prorrateo:</strong> 2.400 € / 12 = 200 €/mes → Salario base prorrateado: 1.200 + 200 = 1.400 €/mes</p>
    </div>

    <h3>3.2. Percepciones no salariales (suplidos)</h3>
    <p>Son cantidades que <strong>no retribuyen el trabajo</strong>, sino que compensan gastos realizados por el trabajador o son prestaciones de la Seguridad Social. <strong>No cotizan</strong> a la Seguridad Social (o lo hacen de forma parcial).</p>
    <table>
      <thead>
        <tr>
          <th>Concepto</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dietas y gastos de viaje</td>
          <td>Compensación por desplazamientos, manutención y alojamiento</td>
        </tr>
        <tr>
          <td>Plus de transporte</td>
          <td>Compensación por gastos de transporte urbano</td>
        </tr>
        <tr>
          <td>Indemnizaciones por despido</td>
          <td>Cantidades percibidas por extinción del contrato</td>
        </tr>
        <tr>
          <td>Prestaciones de la Seguridad Social</td>
          <td>Incapacidad temporal, desempleo, etc.</td>
        </tr>
      </tbody>
    </table>

    <hr class="my-8">

    <h3>3.3. Ejemplo de cálculo de devengos</h3>
    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
      <h4 class="font-bold mb-4">📝 Cálculo de devengos mensuales</h4>
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th class="text-right">Importe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salario base</td>
            <td class="text-right">1.200,00 €</td>
          </tr>
          <tr>
            <td>Plus de antigüedad (trienio 5%)</td>
            <td class="text-right">60,00 €</td>
          </tr>
          <tr>
            <td>Plus de convenio</td>
            <td class="text-right">100,00 €</td>
          </tr>
          <tr>
            <td>Prorrateo pagas extra</td>
            <td class="text-right">200,00 €</td>
          </tr>
          <tr class="bg-blue-50 font-bold">
            <td>Total devengado</td>
            <td class="text-right">1.560,00 €</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>3.4. Más ejemplos de complementos salariales</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-white p-5 rounded-xl border border-slate-200">
        <h4 class="font-bold text-blue-700 mb-3">💶 Plus de idiomas</h4>
        <p class="text-sm">Se cobra por tener conocimientos de idiomas extranjeros y usarlos en el puesto.</p>
        <div class="bg-slate-50 p-3 rounded-lg mt-2">
          <p class="text-xs font-bold">Ejemplo:</p>
          <p class="text-xs">Convenio banca: 120 €/mes por idioma acreditado (B2 o superior)</p>
        </div>
      </div>
      <div class="bg-white p-5 rounded-xl border border-slate-200">
        <h4 class="font-bold text-blue-700 mb-3">🌍 Plus de residencia</h4>
        <p class="text-sm">Compensación por trabajar en zonas geográficas especiales (Ceuta, Melilla, Baleares, Canarias).</p>
        <div class="bg-slate-50 p-3 rounded-lg mt-2">
          <p class="text-xs font-bold">Ejemplo:</p>
          <p class="text-xs">Canarias: 20% del salario base como plus de residencia</p>
        </div>
      </div>
      <div class="bg-white p-5 rounded-xl border border-slate-200">
        <h4 class="font-bold text-blue-700 mb-3">🔄 Plus de turnicidad</h4>
        <p class="text-sm">Por trabajar a turnos rotativos (mañana/tarde/noche).</p>
        <div class="bg-slate-50 p-3 rounded-lg mt-2">
          <p class="text-xs font-bold">Ejemplo:</p>
          <p class="text-xs">Convenio metal: 15% del salario base por trabajar en turno rotatorio</p>
        </div>
      </div>
      <div class="bg-white p-5 rounded-xl border border-slate-200">
        <h4 class="font-bold text-blue-700 mb-3">📞 Plus de disponibilidad</h4>
        <p class="text-sm">Por estar localizable fuera del horario laboral para posibles incidencias.</p>
        <div class="bg-slate-50 p-3 rounded-lg mt-2">
          <p class="text-xs font-bold">Ejemplo:</p>
          <p class="text-xs">Convenio TIC: 150 €/mes por guardia de disponibilidad semanal</p>
        </div>
      </div>
    </div>

    <h3>3.5. Ejemplo completo con varios complementos</h3>
    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
      <h4 class="font-bold mb-4">📝 Devengos de un oficial administrativo con complementos</h4>
      <p class="mb-3"><strong>Puesto:</strong> Oficial administrativo (grupo 5) en una empresa del metal</p>
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th class="text-right">Importe</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Salario base (convenio metal)</td><td class="text-right">1.400,00 €</td></tr>
          <tr><td>Plus de antigüedad (2 trienios al 5%)</td><td class="text-right">140,00 €</td></tr>
          <tr><td>Plus de turnicidad (15%)</td><td class="text-right">210,00 €</td></tr>
          <tr><td>Plus de idiomas (inglés B2)</td><td class="text-right">100,00 €</td></tr>
          <tr><td>Prorrateo pagas extra (2 × 1.400 / 12)</td><td class="text-right">233,33 €</td></tr>
          <tr class="bg-blue-50 font-bold">
            <td>Total devengado</td>
            <td class="text-right">2.083,33 €</td>
          </tr>
        </tbody>
      </table>
      <div class="callout callout-success mt-4">
        <p>💡 <strong>Observa</strong> cómo los complementos pueden aumentar significativamente el salario base. Este trabajador cobra casi 700 € más que su salario base gracias a los complementos.</p>
      </div>
    </div>

    <h3>3.6. Percepciones no salariales: ejemplos con límites</h3>
    <table>
      <thead>
        <tr>
          <th>Concepto</th>
          <th>Límite exento SS/IRPF</th>
          <th>Ejemplo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dietas (dentro España)</td>
          <td>26,67 €/día (pernocta) · 11,50 €/día (sin pernocta)</td>
          <td>Viaje de 3 días con pernocta: 80,01 € exentos</td>
        </tr>
        <tr>
          <td>Dietas (extranjero)</td>
          <td>Hasta 91,35 €/día según país</td>
          <td>Viaje a Londres 2 días: hasta 182,70 € exentos</td>
        </tr>
        <tr>
          <td>Gastos de locomoción</td>
          <td>0,26 €/km si se justifica</td>
          <td>300 km/mes: 78 € exentos</td>
        </tr>
        <tr>
          <td>Plus de transporte</td>
          <td>Límite convenio colectivo</td>
          <td>Transporte urbano: 60-100 €/mes</td>
        </tr>
      </tbody>
    </table>

    <div class="callout callout-warning">
      <div class="callout-title">
        <span>⚠️</span>
        <span>Cuidado con los límites</span>
      </div>
      <p>Si las dietas o gastos de viaje superan los límites legales, el exceso se considera <strong>percepción salarial</strong> y cotiza a la Seguridad Social y tributa en el IRPF.</p>
    </div>
  `
};
