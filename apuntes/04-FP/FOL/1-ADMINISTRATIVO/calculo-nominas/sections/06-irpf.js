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

    <h3>6.6. Ejemplo: dos trabajadores con el mismo salario, distinta retención</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
        <h4 class="font-bold text-blue-800 mb-3">👤 Trabajador A: soltero, sin hijos</h4>
        <p class="text-sm">Salario bruto anual: 30.000 €</p>
        <div class="bg-white p-3 rounded-lg mt-2 text-xs">
          <p>Base retención: 30.000 - 1.905 (SS) = 28.095 €</p>
          <p>Mínimo personal: 5.550 €</p>
          <p>Base liquidable: 22.545 €</p>
          <p>Hasta 12.450 × 19% = 2.365,50 €</p>
          <p>Resto 7.750 × 24% = 1.860,00 €</p>
          <p>Siguiente 2.345 × 30% = 703,50 €</p>
          <p class="font-bold mt-1">Cuota: 4.929 € → <strong>16,43%</strong></p>
        </div>
      </div>
      <div class="bg-green-50 p-5 rounded-xl border border-green-200">
        <h4 class="font-bold text-green-800 mb-3">👨‍👩‍👧‍👦 Trabajador B: casado, 2 hijos</h4>
        <p class="text-sm">Salario bruto anual: 30.000 €</p>
        <div class="bg-white p-3 rounded-lg mt-2 text-xs">
          <p>Base retención: 30.000 - 1.905 (SS) = 28.095 €</p>
          <p>Mínimo personal: 5.550 €</p>
          <p>Mínimo 1er hijo: 2.400 €</p>
          <p>Mínimo 2º hijo: 2.700 €</p>
          <p>Base liquidable: 17.445 €</p>
          <p>Hasta 12.450 × 19% = 2.365,50 €</p>
          <p>Resto 4.995 × 24% = 1.198,80 €</p>
          <p class="font-bold mt-1">Cuota: 3.564,30 € → <strong>11,88%</strong></p>
        </div>
      </div>
    </div>
    <p class="text-sm text-slate-500">💡 Diferencia de casi 5 puntos porcentuales por la situación familiar. El trabajador B ahorra 1.364,70 €/año en IRPF.</p>

    <h3>6.7. Ejemplo: impacto de un segundo pagador</h3>
    <div class="bg-amber-50 p-6 rounded-2xl border border-amber-200 my-6">
      <h4 class="font-bold text-amber-800 mb-3">⚠️ Cuando tienes dos trabajos</h4>
      <p>Si un trabajador tiene <strong>dos pagadores</strong> y el segundo le paga más de 1.500 €/año, está obligado a declarar y puede tener que pagar en la Renta porque cada pagador le retiene por separado aplicando un tipo menor del que le corresponde globalmente.</p>
      <div class="bg-white p-4 rounded-lg mt-3">
        <p class="font-bold">Ejemplo:</p>
        <p class="text-sm">Trabajo principal: 22.000 € (retención 13,59%)</p>
        <p class="text-sm">Segundo trabajo: 5.000 € (retención 2% por ser bajo)</p>
        <p class="text-sm">Total: 27.000 € → la retención real debería ser ~16%</p>
        <p class="text-red-600 font-bold text-sm mt-1">En la declaración de la Renta, tendría que pagar la diferencia.</p>
      </div>
    </div>

    <h3>6.8. Tabla de retenciones orientativas por tramos</h3>
    <table>
      <thead>
        <tr>
          <th>Salario bruto anual</th>
          <th class="text-right">Soltero sin hijos</th>
          <th class="text-right">Casado 2 hijos</th>
          <th class="text-right">Con discapacidad 65%</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>15.000 €</td><td class="text-right">~8,50%</td><td class="text-right">~0%</td><td class="text-right">~0%</td></tr>
        <tr><td>20.000 €</td><td class="text-right">~12,00%</td><td class="text-right">~6,50%</td><td class="text-right">~2,00%</td></tr>
        <tr><td>25.000 €</td><td class="text-right">~14,50%</td><td class="text-right">~9,50%</td><td class="text-right">~5,50%</td></tr>
        <tr><td>30.000 €</td><td class="text-right">~16,50%</td><td class="text-right">~12,00%</td><td class="text-right">~8,00%</td></tr>
        <tr><td>35.000 €</td><td class="text-right">~18,00%</td><td class="text-right">~14,00%</td><td class="text-right">~10,50%</td></tr>
        <tr><td>45.000 €</td><td class="text-right">~21,50%</td><td class="text-right">~18,00%</td><td class="text-right">~15,00%</td></tr>
      </tbody>
    </table>
    <p class="text-xs text-slate-400 mt-2">* Porcentajes orientativos y aproximados. Cada caso debe calcularse individualmente.</p>
  `
};
