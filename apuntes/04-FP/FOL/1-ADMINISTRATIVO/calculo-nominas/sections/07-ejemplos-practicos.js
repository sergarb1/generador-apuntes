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

    <h3>7.4. Caso 4: Nómina mensual con paga extra en el mes</h3>
    <div class="bg-green-50 p-6 rounded-2xl border border-green-200 my-6">
      <h4 class="font-bold text-green-800 mb-4">💼 Caso práctico 4: Mes de paga extra (sin prorrateo)</h4>
      <p><strong>Datos:</strong></p>
      <ul class="mb-4">
        <li>Nombre: Marta Sánchez López</li>
        <li>Grupo cotización: 5 (Oficial administrativo)</li>
        <li>Salario base: 1.300 €/mes</li>
        <li>Plus de antigüedad: 65 €</li>
        <li>Pagas extra: NO prorrateadas (julio y diciembre de 1.300 €)</li>
        <li><strong>Mes de julio:</strong> le corresponde la paga extra de verano</li>
        <li>IRPF: 11%</li>
        <li>Contrato indefinido</li>
      </ul>

      <p class="font-bold mb-2">Paso 1: Total devengado</p>
      <table>
        <thead><tr><th>Concepto</th><th class="text-right">Importe</th></tr></thead>
        <tbody>
          <tr><td>Salario base</td><td class="text-right">1.300,00 €</td></tr>
          <tr><td>Plus antigüedad</td><td class="text-right">65,00 €</td></tr>
          <tr><td>Paga extra julio</td><td class="text-right">1.300,00 €</td></tr>
          <tr class="bg-blue-50 font-bold"><td>Total devengado</td><td class="text-right">2.665,00 €</td></tr>
        </tbody>
      </table>

      <p class="font-bold mt-3 mb-2">Paso 2: Base de cotización CC</p>
      <p>Prorrateo = 0 (pagas no prorrateadas)</p>
      <p>Base CC = 1.300 + 65 + 1.300 (paga extra) = <strong>2.665,00 €</strong></p>
      <p class="text-sm text-slate-500">✓ Dentro del rango del grupo 5 (máx: 4.720,50)</p>

      <p class="font-bold mt-3 mb-2">Paso 3: Deducciones</p>
      <table>
        <thead><tr><th>Concepto</th><th class="text-right">%</th><th class="text-right">Importe</th></tr></thead>
        <tbody>
          <tr><td>Contingencias comunes</td><td class="text-right">4,70%</td><td class="text-right">125,26 €</td></tr>
          <tr><td>Desempleo (indefinido)</td><td class="text-right">1,55%</td><td class="text-right">41,31 €</td></tr>
          <tr><td>Formación profesional</td><td class="text-right">0,10%</td><td class="text-right">2,67 €</td></tr>
          <tr><td>IRPF (11%)</td><td class="text-right">11,00%</td><td class="text-right">293,15 €</td></tr>
          <tr class="bg-red-50 font-bold"><td>Total deducciones</td><td class="text-right"></td><td class="text-right">462,39 €</td></tr>
          <tr class="bg-green-50 font-bold"><td>Líquido a percibir</td><td class="text-right"></td><td class="text-right"><strong>2.202,61 €</strong></td></tr>
        </tbody>
      </table>
      <div class="callout callout-warning mt-4">
        <p>⚠️ Observa que al ser un mes con paga extra, el IRPF sube a 293 € y las deducciones de SS también. El trabajador cobrará 2.202 € líquidos en julio, frente a ~1.300 € en un mes normal.</p>
      </div>
    </div>

    <h3>7.5. Caso 5: Nómina de un comercial con comisiones</h3>
    <div class="bg-blue-50 p-6 rounded-2xl border border-blue-200 my-6">
      <h4 class="font-bold text-blue-800 mb-4">💼 Caso práctico 5: Comercial con retribución variable</h4>
      <p><strong>Datos:</strong></p>
      <ul class="mb-4">
        <li>Categoría: Agente comercial (grupo 5)</li>
        <li>Salario base: 1.100 €/mes</li>
        <li>Comisiones sobre ventas (marzo): 850 €</li>
        <li>Plus de transporte: 80 € (no salarial)</li>
        <li>Dietas: 150 € (manutención, dentro límite legal)</li>
        <li>Pagas extra: 2 prorrateadas (base prorrateo solo sobre salario base)</li>
        <li>IRPF: 15% (mayor por ingresos variables altos)</li>
        <li>Contrato indefinido</li>
      </ul>

      <p class="font-bold mb-2">Paso 1: Total devengado</p>
      <table>
        <thead><tr><th>Concepto</th><th class="text-right">Tipo</th><th class="text-right">Importe</th></tr></thead>
        <tbody>
          <tr><td>Salario base</td><td class="text-right">Salarial</td><td class="text-right">1.100,00 €</td></tr>
          <tr><td>Comisiones</td><td class="text-right">Salarial</td><td class="text-right">850,00 €</td></tr>
          <tr><td>Prorrateo pagas (2 × 1.100 / 12)</td><td class="text-right">Salarial</td><td class="text-right">183,33 €</td></tr>
          <tr><td>Plus transporte</td><td class="text-right">No salarial</td><td class="text-right">80,00 €</td></tr>
          <tr><td>Dietas (manutención)</td><td class="text-right">No salarial</td><td class="text-right">150,00 €</td></tr>
          <tr class="bg-blue-50 font-bold"><td>Total devengado</td><td class="text-right"></td><td class="text-right">2.363,33 €</td></tr>
        </tbody>
      </table>

      <p class="font-bold mt-3 mb-2">Paso 2: Base de cotización CC</p>
      <p>Base CC = 1.100 + 850 + 183,33 = <strong>2.133,33 €</strong></p>
      <p>(Las dietas y transporte no salarial no cotizan)</p>

      <p class="font-bold mt-3 mb-2">Paso 3: Deducciones</p>
      <table>
        <thead><tr><th>Concepto</th><th class="text-right">%</th><th class="text-right">Importe</th></tr></thead>
        <tbody>
          <tr><td>Contingencias comunes</td><td class="text-right">4,70%</td><td class="text-right">100,27 €</td></tr>
          <tr><td>Desempleo</td><td class="text-right">1,55%</td><td class="text-right">33,07 €</td></tr>
          <tr><td>Formación profesional</td><td class="text-right">0,10%</td><td class="text-right">2,13 €</td></tr>
          <tr><td>IRPF (15%)</td><td class="text-right">15,00%</td><td class="text-right">354,50 €</td></tr>
          <tr class="bg-red-50 font-bold"><td>Total deducciones</td><td class="text-right"></td><td class="text-right">489,97 €</td></tr>
          <tr class="bg-green-50 font-bold"><td>Líquido a percibir</td><td class="text-right"></td><td class="text-right">1.873,36 €</td></tr>
        </tbody>
      </table>
      <div class="callout callout-success mt-4">
        <p>💡 Las comisiones son salariales y cotizan. Los meses sin comisiones, este trabajador tendría una nómina mucho más baja (~1.200 € líquidos). La <strong>irregularidad de ingresos</strong> es una característica típica de los perfiles comerciales.</p>
      </div>
    </div>

    <h3>7.6. Caso 6: Nómina con baja por accidente laboral</h3>
    <div class="bg-red-50 p-6 rounded-2xl border border-red-200 my-6">
      <h4 class="font-bold text-red-800 mb-4">💼 Caso práctico 6: Incapacidad temporal por accidente de trabajo</h4>
      <p><strong>Datos:</strong></p>
      <ul class="mb-4">
        <li>Salario base: 1.500 €</li>
        <li>Plus peligrosidad: 200 €</li>
        <li>Prorrateo pagas: 250 €</li>
        <li>Base CC: 1.950 €</li>
        <li>Base AT y EP: 1.950 €</li>
        <li>Trabajador sufre un accidente laboral el día 10 (ha trabajado 9 días)</li>
        <li>Contrato indefinido · IRPF 12%</li>
      </ul>

      <p class="font-bold mb-2">Reglas de IT por accidente de trabajo (AT)</p>
      <ul class="mb-3">
        <li><strong>Día del accidente:</strong> lo paga la empresa (salario normal)</li>
        <li><strong>A partir del día siguiente:</strong> 75% de la base reguladora desde el día 1</li>
        <li><strong>Paga:</strong> la Seguridad Social o la empresa (por colaboración voluntaria)</li>
      </ul>

      <p class="font-bold mb-2">Cálculo de base reguladora diaria (AT)</p>
      <p>Base reguladora diaria = Base AT y EP / 30 = 1.950 / 30 = <strong>65 €/día</strong></p>
      <p>Prestación diaria = 75% × 65 = <strong>48,75 €/día</strong></p>

      <p class="font-bold mt-3 mb-2">Devengos del mes</p>
      <table>
        <thead><tr><th>Concepto</th><th class="text-right">Días</th><th class="text-right">Importe</th></tr></thead>
        <tbody>
          <tr><td>Salario por días trabajados (1-10)</td><td class="text-right">10</td><td class="text-right">650,00 €</td></tr>
          <tr><td>Prestación IT 75% (11-31)</td><td class="text-right">21</td><td class="text-right">1.023,75 €</td></tr>
          <tr class="bg-blue-50 font-bold"><td>Total devengado</td><td class="text-right">31</td><td class="text-right">1.673,75 €</td></tr>
        </tbody>
      </table>

      <p class="font-bold mt-3 mb-2">Deducciones</p>
      <p class="text-sm mb-2">Aplican los mismos porcentajes sobre la base de cotización del mes.</p>
      <table>
        <thead><tr><th>Concepto</th><th class="text-right">%</th><th class="text-right">Importe</th></tr></thead>
        <tbody>
          <tr><td>Contingencias comunes</td><td class="text-right">4,70%</td><td class="text-right">91,65 €</td></tr>
          <tr><td>Desempleo</td><td class="text-right">1,55%</td><td class="text-right">30,23 €</td></tr>
          <tr><td>Formación profesional</td><td class="text-right">0,10%</td><td class="text-right">1,95 €</td></tr>
          <tr><td>IRPF (12%)</td><td class="text-right">12,00%</td><td class="text-right">200,85 €</td></tr>
          <tr class="bg-red-50 font-bold"><td>Total deducciones</td><td class="text-right"></td><td class="text-right">324,68 €</td></tr>
          <tr class="bg-green-50 font-bold"><td>Líquido a percibir</td><td class="text-right"></td><td class="text-right"><strong>1.349,07 €</strong></td></tr>
        </tbody>
      </table>
      <div class="callout callout-warning mt-3">
        <p>⚠️ En accidente de trabajo, la prestación es del 75% desde el día 1, a diferencia de la enfermedad común donde hay 3 días sin cobrar y luego un 60%.</p>
      </div>
    </div>

    <h3>7.7. Plantilla de nómina completa (resumen visual)</h3>
    <div class="bg-white p-6 rounded-2xl border-2 border-slate-300 my-6 font-mono text-sm">
      <h4 class="font-bold text-center text-slate-800 mb-4">📋 MODELO DE NÓMINA</h4>
      <div class="border-b pb-3 mb-3">
        <p><strong>Empresa:</strong> [Razón social] · <strong>CIF:</strong> [CIF]</p>
        <p><strong>Trabajador:</strong> [Nombre] · <strong>NIF:</strong> [NIF] · <strong>NAF:</strong> [N. Afiliación]</p>
        <p><strong>Grupo:</strong> [1-11] · <strong>Categoría:</strong> [Puesto] · <strong>Período:</strong> [Fecha]</p>
      </div>
      <table class="w-full">
        <tr class="bg-blue-100"><th class="p-1 text-left" colspan="2">1. DEVENGOS</th><th class="p-1 text-right">Importe</th></tr>
        <tr><td class="pl-4" colspan="2">Salario base</td><td class="text-right">_____ €</td></tr>
        <tr><td class="pl-4" colspan="2">Complementos salariales</td><td class="text-right">_____ €</td></tr>
        <tr><td class="pl-4" colspan="2">Horas extraordinarias</td><td class="text-right">_____ €</td></tr>
        <tr><td class="pl-4" colspan="2">Prorrateo pagas extra</td><td class="text-right">_____ €</td></tr>
        <tr><td class="pl-4" colspan="2">Percepciones no salariales</td><td class="text-right">_____ €</td></tr>
        <tr class="font-bold bg-blue-50"><td colspan="2">A) TOTAL DEVENGADO</td><td class="text-right">_____ €</td></tr>
        <tr class="bg-red-100"><th class="p-1 text-left" colspan="2">2. DEDUCCIONES</th><th class="p-1 text-right">Importe</th></tr>
        <tr><td class="pl-4" colspan="2">Contingencias comunes (4,70%)</td><td class="text-right">_____ €</td></tr>
        <tr><td class="pl-4" colspan="2">Desempleo (1,55% / 1,60%)</td><td class="text-right">_____ €</td></tr>
        <tr><td class="pl-4" colspan="2">Formación profesional (0,10%)</td><td class="text-right">_____ €</td></tr>
        <tr><td class="pl-4" colspan="2">Horas extra (4,70%)</td><td class="text-right">_____ €</td></tr>
        <tr><td class="pl-4" colspan="2">IRPF (__%)</td><td class="text-right">_____ €</td></tr>
        <tr class="font-bold bg-red-50"><td colspan="2">B) TOTAL DEDUCCIONES</td><td class="text-right">_____ €</td></tr>
        <tr class="font-bold bg-green-100 text-lg"><td colspan="2">LÍQUIDO A PERCIBIR (A - B)</td><td class="text-right">_____ €</td></tr>
      </table>
    </div>
  `
};
