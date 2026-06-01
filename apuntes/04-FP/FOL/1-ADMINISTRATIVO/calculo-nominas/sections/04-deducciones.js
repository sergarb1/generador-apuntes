window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['deducciones'] = {
  title: "4. Deducciones: Seguridad Social e IRPF",
  content: `
    <h2>4. Deducciones: Seguridad Social e IRPF</h2>

    <div class="callout callout-info">
      <div class="callout-title">
        <span>🎯</span>
        <span>Objetivos de aprendizaje</span>
      </div>
      <ul>
        <li>Identificar las distintas deducciones que se aplican en una nómina</li>
        <li>Calcular las aportaciones del trabajador a la Seguridad Social</li>
        <li>Comprender el sistema de retención del IRPF</li>
        <li>Diferenciar entre las deducciones del trabajador y las del empresario</li>
      </ul>
    </div>

    <h3>4.1. Conceptos generales</h3>
    <p>Las <strong>deducciones</strong> son las cantidades que se descuentan del total devengado para obtener el líquido a percibir. Se dividen en:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-red-50 p-4 rounded-xl border border-red-200">
        <span class="text-2xl">🛡️</span>
        <h4 class="font-bold mt-2 text-sm">Aportaciones a la Seguridad Social</h4>
        <p class="text-xs text-slate-600 mt-1">Cotizaciones del trabajador por contingencias comunes, desempleo, formación, etc.</p>
      </div>
      <div class="bg-amber-50 p-4 rounded-xl border border-amber-200">
        <span class="text-2xl">💰</span>
        <h4 class="font-bold mt-2 text-sm">IRPF</h4>
        <p class="text-xs text-slate-600 mt-1">Retención a cuenta del Impuesto sobre la Renta de las Personas Físicas</p>
      </div>
    </div>

    <h3>4.2. Aportaciones del trabajador a la Seguridad Social</h3>
    <p>El trabajador contribuye a la financiación de la Seguridad Social mediante los siguientes porcentajes aplicados sobre su <strong>base de cotización</strong>:</p>
    <table>
      <thead>
        <tr>
          <th>Concepto</th>
          <th class="text-right">% Trabajador</th>
          <th class="text-right">% Empresa</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Contingencias comunes</td>
          <td class="text-right">4,70%</td>
          <td class="text-right">23,60%</td>
        </tr>
        <tr>
          <td>Desempleo (contrato indefinido)</td>
          <td class="text-right">1,55%</td>
          <td class="text-right">5,50%</td>
        </tr>
        <tr>
          <td>Desempleo (contrato temporal)</td>
          <td class="text-right">1,60%</td>
          <td class="text-right">6,70%</td>
        </tr>
        <tr>
          <td>Formación profesional</td>
          <td class="text-right">0,10%</td>
          <td class="text-right">0,60%</td>
        </tr>
        <tr>
          <td>Fondo de Garantía Salarial (Fogasa)</td>
          <td class="text-right">—</td>
          <td class="text-right">0,20%</td>
        </tr>
        <tr>
          <td>Horas extra comunes</td>
          <td class="text-right">4,70%</td>
          <td class="text-right">23,60%</td>
        </tr>
        <tr>
          <td>Horas extra fuerza mayor</td>
          <td class="text-right">2,00%</td>
          <td class="text-right">12,00%</td>
        </tr>
      </tbody>
    </table>

    <div class="callout callout-warning">
      <div class="callout-title">
        <span>⚠️</span>
        <span>Importante</span>
      </div>
      <p>El trabajador solo paga el porcentaje correspondiente a su parte. La empresa paga un porcentaje mucho mayor para cubrir la mayor parte del coste de la Seguridad Social.</p>
    </div>

    <h3>4.3. Retención del IRPF</h3>
    <p>El IRPF es un impuesto <strong>progresivo</strong> que grava la renta de las personas físicas. La empresa actúa como <strong>retenedora</strong>, descontando un porcentaje del salario y entregándolo a Hacienda.</p>

    <h4>Factores que determinan el % de retención</h4>
    <ul>
      <li><strong>Salario bruto anual</strong>: a mayor salario, mayor porcentaje</li>
      <li><strong>Situación personal y familiar</strong>: estado civil, número de hijos, discapacidad</li>
      <li><strong>Tipo de contrato</strong> y duración prevista</li>
    </ul>

    <div class="callout callout-success">
      <div class="callout-title">
        <span>💡</span>
        <span>Tabla orientativa de retenciones IRPF (2025)</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Salario bruto anual</th>
            <th class="text-right">% Retención aprox.</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Hasta 12.450 €</td><td class="text-right">0% - 9,50%</td></tr>
          <tr><td>12.450 € - 20.200 €</td><td class="text-right">9,50% - 12,00%</td></tr>
          <tr><td>20.200 € - 35.200 €</td><td class="text-right">12,00% - 15,00%</td></tr>
          <tr><td>35.200 € - 60.000 €</td><td class="text-right">15,00% - 18,50%</td></tr>
          <tr><td>Más de 60.000 €</td><td class="text-right">18,50% - 23,50%</td></tr>
        </tbody>
      </table>
    </div>

    <h3>4.4. Otras deducciones</h3>
    <ul>
      <li><strong>Anticipos</strong>: cantidades adelantadas al trabajador</li>
      <li><strong>Embargos</strong>: retenciones judiciales sobre el salario</li>
      <li><strong>Cuotas sindicales</strong>: si el trabajador está afiliado a un sindicato</li>
      <li><strong>Productos en especie</strong>: valor de productos o servicios recibidos</li>
    </ul>

    <hr class="my-8">

    <h3>4.5. Ejemplo de cálculo de deducciones</h3>
    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
      <h4 class="font-bold mb-4">📝 Cálculo de deducciones</h4>
      <p class="mb-3"><strong>Base de cotización:</strong> 1.560,00 € · <strong>IRPF:</strong> 12%</p>
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th class="text-right">%</th>
            <th class="text-right">Importe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contingencias comunes</td>
            <td class="text-right">4,70%</td>
            <td class="text-right">73,32 €</td>
          </tr>
          <tr>
            <td>Desempleo</td>
            <td class="text-right">1,55%</td>
            <td class="text-right">24,18 €</td>
          </tr>
          <tr>
            <td>Formación profesional</td>
            <td class="text-right">0,10%</td>
            <td class="text-right">1,56 €</td>
          </tr>
          <tr>
            <td>IRPF</td>
            <td class="text-right">12%</td>
            <td class="text-right">187,20 €</td>
          </tr>
          <tr class="bg-red-50 font-bold">
            <td>Total deducciones</td>
            <td class="text-right"></td>
            <td class="text-right">286,26 €</td>
          </tr>
          <tr class="bg-green-50 font-bold">
            <td>Líquido a percibir</td>
            <td class="text-right"></td>
            <td class="text-right">1.273,74 €</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>4.6. Ejemplo comparativo: contrato indefinido vs temporal</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-green-50 p-5 rounded-xl border border-green-200">
        <h4 class="font-bold text-green-800 mb-3">✅ Contrato indefinido</h4>
        <p class="text-sm mb-2">Base de cotización: 1.800 €</p>
        <table class="text-xs">
          <tr><td>Contingencias comunes</td><td class="text-right">4,70%</td><td class="text-right">84,60 €</td></tr>
          <tr><td>Desempleo</td><td class="text-right">1,55%</td><td class="text-right">27,90 €</td></tr>
          <tr><td>Formación profesional</td><td class="text-right">0,10%</td><td class="text-right">1,80 €</td></tr>
          <tr class="font-bold"><td>Total SS</td><td class="text-right">6,35%</td><td class="text-right">114,30 €</td></tr>
        </table>
      </div>
      <div class="bg-amber-50 p-5 rounded-xl border border-amber-200">
        <h4 class="font-bold text-amber-800 mb-3">⚠️ Contrato temporal</h4>
        <p class="text-sm mb-2">Base de cotización: 1.800 €</p>
        <table class="text-xs">
          <tr><td>Contingencias comunes</td><td class="text-right">4,70%</td><td class="text-right">84,60 €</td></tr>
          <tr><td>Desempleo</td><td class="text-right">1,60%</td><td class="text-right">28,80 €</td></tr>
          <tr><td>Formación profesional</td><td class="text-right">0,10%</td><td class="text-right">1,80 €</td></tr>
          <tr class="font-bold"><td>Total SS</td><td class="text-right">6,40%</td><td class="text-right">115,20 €</td></tr>
        </table>
      </div>
    </div>
    <p class="text-sm text-slate-500">Diferencia: 0,90 €/mes más para el trabajador temporal en desempleo.</p>

    <h3>4.7. Ejemplo de embargo de salario</h3>
    <div class="bg-red-50 p-6 rounded-2xl border border-red-200 my-6">
      <h4 class="font-bold text-red-800 mb-3">⚖️ Embargo judicial sobre la nómina</h4>
      <p class="mb-3">El SMI (1.184 €/mes en 14 pagas) es <strong>inembargable</strong>. Sobre el exceso se aplican tramos progresivos:</p>
      <table>
        <thead>
          <tr>
            <th>Tramo (sobre exceso)</th>
            <th class="text-right">% Embargo</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Hasta el doble del SMI (0 - 1.184 € extra)</td><td class="text-right">30%</td></tr>
          <tr><td>Del doble al triple (1.184 - 2.368 € extra)</td><td class="text-right">50%</td></tr>
          <tr><td>Del triple al cuádruple (2.368 - 3.552 € extra)</td><td class="text-right">60%</td></tr>
          <tr><td>Del cuádruple en adelante</td><td class="text-right">75%</td></tr>
        </tbody>
      </table>
      <div class="bg-white p-4 rounded-lg mt-4">
        <p class="font-bold">Ejemplo: trabajador con nómina líquida de 1.800 €</p>
        <p class="text-sm">SMI inembargable: 1.184 € · Exceso: 616 € · Embargo: 30% × 616 = <strong>184,80 €</strong></p>
        <p class="text-sm">Líquido a percibir tras embargo: 1.800 - 184,80 = <strong>1.615,20 €</strong></p>
      </div>
    </div>
  `
};
