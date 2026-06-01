window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['ejemplos-practicos'] = {
  title: "7. Ejemplos prácticos de cálculo de nóminas",
  content: `
    <h2>7. Ejemplos prácticos de cálculo de nóminas</h2>

    <div class="callout callout-info">
      <div class="callout-title">
        <span>🎯</span>
        <span>Objetivos de aprendizaje</span>
      </div>
      <ul>
        <li>Aplicar todos los conceptos anteriores en casos reales</li>
        <li>Calcular una nómina completa paso a paso</li>
        <li>Interpretar correctamente cada partida de la nómina</li>
        <li>Verificar que los cálculos son correctos</li>
      </ul>
    </div>

    <h3>7.1. Caso 1: Nómina mensual con pagas prorrateadas</h3>
    <div class="bg-green-50 p-6 rounded-2xl border border-green-200 my-6">
      <h4 class="font-bold text-green-800 mb-4">💼 Caso práctico 1: Oficial administrativo</h4>
      <p><strong>Datos del trabajador:</strong></p>
      <ul class="mb-4">
        <li>Nombre: Laura García Pérez</li>
        <li>Grupo cotización: 5 (Oficial administrativo)</li>
        <li>Salario base: 1.350 €/mes</li>
        <li>Plus de antigüedad: 67,50 € (5% por trienio)</li>
        <li>Plus de convenio: 120 €</li>
        <li>Pagas extra: 2 (verano y Navidad) de 1.350 € cada una</li>
        <li>IRPF: 12%</li>
        <li>Contrato indefinido</li>
      </ul>

      <p class="font-bold mb-2">Paso 1: Calcular total devengado</p>
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th class="text-right">Importe</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Salario base</td><td class="text-right">1.350,00 €</td></tr>
          <tr><td>Plus antigüedad</td><td class="text-right">67,50 €</td></tr>
          <tr><td>Plus convenio</td><td class="text-right">120,00 €</td></tr>
          <tr><td>Prorrateo pagas extra (2 × 1.350 / 12)</td><td class="text-right">225,00 €</td></tr>
          <tr class="bg-blue-50 font-bold"><td>Total devengado</td><td class="text-right">1.762,50 €</td></tr>
        </tbody>
      </table>

      <p class="font-bold mt-4 mb-2">Paso 2: Calcular base de cotización (CC)</p>
      <p>Base CC = Total devengado (sin horas extra) = 1.762,50 €</p>
      <p class="text-sm text-slate-600">✓ Dentro del rango del grupo 5 (mín: 1.327,80 / máx: 4.720,50)</p>

      <p class="font-bold mt-4 mb-2">Paso 3: Calcular deducciones</p>
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th class="text-right">%</th>
            <th class="text-right">Importe</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Contingencias comunes</td><td class="text-right">4,70%</td><td class="text-right">82,84 €</td></tr>
          <tr><td>Desempleo (indefinido)</td><td class="text-right">1,55%</td><td class="text-right">27,32 €</td></tr>
          <tr><td>Formación profesional</td><td class="text-right">0,10%</td><td class="text-right">1,76 €</td></tr>
          <tr><td>IRPF (12%)</td><td class="text-right">12,00%</td><td class="text-right">211,50 €</td></tr>
          <tr class="bg-red-50 font-bold"><td>Total deducciones</td><td class="text-right"></td><td class="text-right">323,42 €</td></tr>
          <tr class="bg-green-50 font-bold"><td>Líquido a percibir</td><td class="text-right"></td><td class="text-right"><strong>1.439,08 €</strong></td></tr>
        </tbody>
      </table>
    </div>

    <h3>7.2. Caso 2: Nómina con horas extra y sin prorrateo</h3>
    <div class="bg-blue-50 p-6 rounded-2xl border border-blue-200 my-6">
      <h4 class="font-bold text-blue-800 mb-4">💼 Caso práctico 2: Auxiliar administrativo</h4>
      <p><strong>Datos del trabajador:</strong></p>
      <ul class="mb-4">
        <li>Nombre: Carlos Martínez Ruiz</li>
        <li>Grupo cotización: 7 (Auxiliar administrativo)</li>
        <li>Salario base: 1.200 €/mes</li>
        <li>Plus de transporte: 80 € (no salarial)</li>
        <li>Horas extra: 120 € (4 horas a 30 €/hora)</li>
        <li>Pagas extra: 2 (no prorrateadas, se pagan en julio y diciembre)</li>
        <li>IRPF: 10%</li>
        <li>Contrato temporal</li>
      </ul>

      <p class="font-bold mb-2">Paso 1: Calcular total devengado</p>
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th class="text-right">Tipo</th>
            <th class="text-right">Importe</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Salario base</td><td class="text-right">Salarial</td><td class="text-right">1.200,00 €</td></tr>
          <tr><td>Horas extra</td><td class="text-right">Salarial</td><td class="text-right">120,00 €</td></tr>
          <tr><td>Plus transporte</td><td class="text-right">No salarial</td><td class="text-right">80,00 €</td></tr>
          <tr class="bg-blue-50 font-bold"><td>Total devengado</td><td class="text-right"></td><td class="text-right">1.400,00 €</td></tr>
        </tbody>
      </table>

      <p class="font-bold mt-4 mb-2">Paso 2: Calcular base de cotización CC</p>
      <p>Base CC = Salario base + Horas extra * + Prorrateo pagas extra</p>
      <p>No hay prorrateo (pagas no prorrateadas) → Base CC = 1.200,00 €</p>
      <p class="text-sm text-slate-600">* Las horas extra no se incluyen en la base CC, se cotizan aparte</p>

      <p class="font-bold mt-4 mb-2">Paso 3: Calcular base de cotización AT y EP</p>
      <p>Base AT y EP = Base CC + Horas extra del mes = 1.200 + 120 = 1.320 €</p>

      <p class="font-bold mt-4 mb-2">Paso 4: Calcular deducciones</p>
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th class="text-right">Base</th>
            <th class="text-right">%</th>
            <th class="text-right">Importe</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Contingencias comunes</td><td class="text-right">1.200,00</td><td class="text-right">4,70%</td><td class="text-right">56,40 €</td></tr>
          <tr><td>Desempleo (temporal)</td><td class="text-right">1.320,00</td><td class="text-right">1,60%</td><td class="text-right">21,12 €</td></tr>
          <tr><td>Formación profesional</td><td class="text-right">1.320,00</td><td class="text-right">0,10%</td><td class="text-right">1,32 €</td></tr>
          <tr><td>Horas extra (comunes)</td><td class="text-right">120,00</td><td class="text-right">4,70%</td><td class="text-right">5,64 €</td></tr>
          <tr><td>IRPF (10%)</td><td class="text-right">1.320,00</td><td class="text-right">10,00%</td><td class="text-right">132,00 €</td></tr>
          <tr class="bg-red-50 font-bold"><td>Total deducciones</td><td class="text-right"></td><td class="text-right"></td><td class="text-right">216,48 €</td></tr>
          <tr class="bg-green-50 font-bold"><td>Líquido a percibir</td><td class="text-right"></td><td class="text-right"></td><td class="text-right"><strong>1.183,52 €</strong></td></tr>
        </tbody>
      </table>
    </div>

    <h3>7.3. Caso 3: Nómina con incapacidad temporal</h3>
    <div class="bg-purple-50 p-6 rounded-2xl border border-purple-200 my-6">
      <h4 class="font-bold text-purple-800 mb-4">💼 Caso práctico 3: Baja por enfermedad común</h4>
      <p><strong>Datos:</strong></p>
      <ul class="mb-4">
        <li>Salario base: 1.400 €</li>
        <li>Antigüedad: 70 €</li>
        <li>Base CC: 1.600 €</li>
        <li>Trabajador de baja desde el día 15 (ha trabajado 14 días)</li>
      </ul>
      <p><strong>Reglas de IT por enfermedad común:</strong></p>
      <ul>
        <li>Días 1-3: No cobra (salvo mejora voluntaria en convenio)</li>
        <li>Días 4-15: 60% de la base reguladora (paga la empresa)</li>
        <li>Días 16-20: 60% de la base reguladora (paga la SS/empresa)</li>
        <li>A partir del día 21: 75% de la base reguladora (paga la SS)</li>
      </ul>
    </div>

    <div class="callout callout-success">
      <div class="callout-title">
        <span>💡</span>
        <span>Consejo práctico</span>
      </div>
      <p>Para calcular cualquier nómina, sigue siempre este orden: <strong>1. Devengos → 2. Base de cotización → 3. Deducciones → 4. Líquido a percibir</strong>. Respeta este orden y no te saltarás ningún paso.</p>
    </div>
  `
};
