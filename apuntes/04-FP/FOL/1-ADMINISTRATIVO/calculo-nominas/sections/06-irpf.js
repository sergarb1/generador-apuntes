window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['irpf'] = {
  title: "6. Retención del IRPF",
  content: `
    <h2>6. Retención del IRPF</h2>

    <div class="callout callout-info">
      <div class="callout-title">
        <span>🎯</span>
        <span>Objetivos de aprendizaje</span>
      </div>
      <ul>
        <li>Comprender el funcionamiento de la retención del IRPF</li>
        <li>Calcular el porcentaje de retención aplicable</li>
        <li>Conocer los tramos del IRPF y su progresividad</li>
        <li>Identificar las situaciones personales que afectan a la retención</li>
      </ul>
    </div>

    <h3>6.1. ¿Qué es el IRPF?</h3>
    <p>El <strong>Impuesto sobre la Renta de las Personas Físicas (IRPF)</strong> es un tributo de carácter personal y progresivo que grava la renta obtenida por las personas físicas en un año natural. La empresa actúa como <strong>retenedora</strong>, descontando mensualmente una cantidad a cuenta del impuesto.</p>

    <div class="callout callout-success">
      <div class="callout-title">
        <span>⚖️</span>
        <span>Base legal</span>
      </div>
      <p>Artículos 76 al 90 del <strong>Reglamento del IRPF</strong> (Real Decreto 439/2007) y Ley 35/2006 del IRPF.</p>
    </div>

    <h3>6.2. Tramos del IRPF estatal (2025)</h3>
    <p>El IRPF es un impuesto <strong>progresivo por tramos</strong>. A cada parte de la base imponible se le aplica un tipo diferente:</p>
    <table>
      <thead>
        <tr>
          <th>Base liquidable</th>
          <th class="text-right">Tipo estatal</th>
          <th class="text-right">Tipo autonómico</th>
          <th class="text-right">Tipo total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hasta 12.450 €</td>
          <td class="text-right">9,50%</td>
          <td class="text-right">9,50%</td>
          <td class="text-right"><strong>19,00%</strong></td>
        </tr>
        <tr>
          <td>12.450 € - 20.200 €</td>
          <td class="text-right">12,00%</td>
          <td class="text-right">12,00%</td>
          <td class="text-right"><strong>24,00%</strong></td>
        </tr>
        <tr>
          <td>20.200 € - 35.200 €</td>
          <td class="text-right">15,00%</td>
          <td class="text-right">15,00%</td>
          <td class="text-right"><strong>30,00%</strong></td>
        </tr>
        <tr>
          <td>35.200 € - 60.000 €</td>
          <td class="text-right">18,50%</td>
          <td class="text-right">18,50%</td>
          <td class="text-right"><strong>37,00%</strong></td>
        </tr>
        <tr>
          <td>Más de 60.000 €</td>
          <td class="text-right">23,50%</td>
          <td class="text-right">23,50%</td>
          <td class="text-right"><strong>47,00%</strong></td>
        </tr>
      </tbody>
    </table>

    <h3>6.3. Cálculo de la retención</h3>
    <p>Para calcular la retención del IRPF se sigue este proceso:</p>
    <ol>
      <li><strong>Calcular el salario bruto anual</strong> estimado</li>
      <li><strong>Aplicar reducciones</strong> (seguridad social, otros gastos)</li>
      <li><strong>Calcular la base de retención</strong> = Salario bruto - reducciones</li>
      <li><strong>Aplicar la escala del IRPF</strong> sobre la base de retención</li>
      <li><strong>Restar las deducciones</strong> personales y familiares</li>
      <li><strong>Obtener el porcentaje</strong> de retención = Cuota resultante / Salario bruto</li>
    </ol>

    <h3>6.4. Factores personales que reducen la retención</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
        <span class="text-2xl">👶</span>
        <h4 class="font-bold mt-2 text-sm">Hijos</h4>
        <p class="text-xs text-slate-600 mt-1">1er hijo: 2.400 € · 2º hijo: 2.700 € · 3º hijo: 4.000 €</p>
      </div>
      <div class="bg-green-50 p-4 rounded-xl border border-green-200">
        <span class="text-2xl">👴</span>
        <h4 class="font-bold mt-2 text-sm">Ascendientes</h4>
        <p class="text-xs text-slate-600 mt-1">Mayores de 65 años o con discapacidad a cargo</p>
      </div>
      <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
        <span class="text-2xl">♿</span>
        <h4 class="font-bold mt-2 text-sm">Discapacidad</h4>
        <p class="text-xs text-slate-600 mt-1">Del 33% al 65%: 3.000 € · Superior al 65%: 9.000 €</p>
      </div>
    </div>

    <h3>6.5. Ejemplo de cálculo de retención</h3>
    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
      <h4 class="font-bold mb-4">📝 Cálculo de retención IRPF</h4>
      <p><strong>Datos:</strong> Salario bruto anual: 22.000 € · Soltero, sin hijos</p>
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th class="text-right">Importe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salario bruto anual</td>
            <td class="text-right">22.000,00 €</td>
          </tr>
          <tr>
            <td>(-) Cotizaciones SS (6,35%)</td>
            <td class="text-right">-1.397,00 €</td>
          </tr>
          <tr>
            <td>(=) Base de retención</td>
            <td class="text-right">20.603,00 €</td>
          </tr>
          <tr>
            <td>(-) Mínimo personal</td>
            <td class="text-right">-5.550,00 €</td>
          </tr>
          <tr>
            <td>(=) Base liquidable</td>
            <td class="text-right">15.053,00 €</td>
          </tr>
          <tr class="bg-blue-50">
            <td>Hasta 12.450 € × 19%</td>
            <td class="text-right">2.365,50 €</td>
          </tr>
          <tr class="bg-blue-50">
            <td>Resto 2.603 € × 24%</td>
            <td class="text-right">624,72 €</td>
          </tr>
          <tr class="font-bold">
            <td>Cuota IRPF anual</td>
            <td class="text-right">2.990,22 €</td>
          </tr>
          <tr class="bg-green-50 font-bold">
            <td>% Retención mensual (2.990,22 / 22.000)</td>
            <td class="text-right"><strong>13,59%</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout callout-warning">
      <div class="callout-title">
        <span>⚠️</span>
        <span>Importante</span>
      </div>
      <p>La retención es <strong>a cuenta</strong>. Al año siguiente, el trabajador presenta la declaración de la Renta y se regulariza: si se retuvo de menos, paga la diferencia; si se retuvo de más, Hacienda devuelve el exceso.</p>
    </div>
  `
};
