window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['ejercicios'] = {
  title: "8. Ejercicios prácticos",
  content: `
    <h2>8. Ejercicios prácticos</h2>

    <div class="callout callout-info">
      <div class="callout-title">
        <span>🎯</span>
        <span>Objetivos</span>
      </div>
      <p>Los siguientes ejercicios te permitirán aplicar todos los conocimientos adquiridos sobre el cálculo de nóminas. Intenta resolverlos sin mirar las soluciones.</p>
    </div>

    <h3>Ejercicio 1: Nómina básica</h3>
    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
      <p><strong>Datos:</strong></p>
      <ul>
        <li>Categoría: Auxiliar administrativo (Grupo 7)</li>
        <li>Salario base: 1.200 €/mes</li>
        <li>Plus de convenio: 90 €/mes</li>
        <li>Pagas extra: 2 (prorrateadas)</li>
        <li>IRPF: 10%</li>
        <li>Contrato indefinido</li>
      </ul>
      <p class="mt-4"><strong>Calcula:</strong></p>
      <ol>
        <li>Total devengado</li>
        <li>Base de cotización a CC</li>
        <li>Deducciones por Seguridad Social</li>
        <li>Retención IRPF</li>
        <li>Líquido a percibir</li>
      </ol>
    </div>

    <h3>Ejercicio 2: Nómina con horas extra</h3>
    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
      <p><strong>Datos:</strong></p>
      <ul>
        <li>Categoría: Oficial administrativo (Grupo 5)</li>
        <li>Salario base: 1.500 €/mes</li>
        <li>Plus de idiomas: 200 €/mes</li>
        <li>Horas extra: 8 horas a 25 €/hora = 200 €</li>
        <li>Pagas extra: 2 de 1.500 € (prorrateadas)</li>
        <li>IRPF: 14%</li>
        <li>Contrato temporal</li>
      </ul>
      <p class="mt-4"><strong>Calcula:</strong></p>
      <ol>
        <li>Total devengado</li>
        <li>Base de cotización CC</li>
        <li>Base de cotización AT y EP</li>
        <li>Todas las deducciones</li>
        <li>Líquido a percibir</li>
      </ol>
    </div>

    <h3>Ejercicio 3: Nómina con pagas no prorrateadas</h3>
    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
      <p><strong>Datos:</strong></p>
      <ul>
        <li>Categoría: Subalterno (Grupo 6)</li>
        <li>Salario base: 1.100 €/mes</li>
        <li>Plus de nocturnidad: 200 €/mes</li>
        <li>Plus de transporte: 60 € (no salarial)</li>
        <li>Pagas extra: 2 de 1.100 € (NO prorrateadas - este mes no toca paga extra)</li>
        <li>IRPF: 8%</li>
        <li>Contrato indefinido</li>
      </ul>
      <p class="mt-4"><strong>Calcula:</strong></p>
      <ol>
        <li>Total devengado</li>
        <li>Base de cotización CC (recuerda: sin prorrateo porque no toca paga este mes)</li>
        <li>Deducciones</li>
        <li>Líquido a percibir</li>
      </ol>
      <div class="callout callout-warning mt-4">
        <p>💡 <strong>Pista:</strong> Cuando las pagas no están prorrateadas, la base de cotización del mes solo incluye el salario de ese mes. Las pagas extra se cotizan en el mes en que se pagan.</p>
      </div>
    </div>

    <h3>Ejercicio 4: Nómina completa</h3>
    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
      <p><strong>Datos:</strong></p>
      <ul>
        <li>Categoría: Oficial de 1ª (Grupo 8)</li>
        <li>Salario base: 1.400 €/mes</li>
        <li>Plus de antigüedad: 70 € (5% por trienio)</li>
        <li>Plus de peligrosidad: 150 €</li>
        <li>Horas extra: 6 horas a 28 €/hora = 168 €</li>
        <li>Dietas: 100 € (no salarial, dentro de límites legales)</li>
        <li>Pagas extra: 2 (prorrateadas)</li>
        <li>IRPF: 13%</li>
        <li>Contrato temporal</li>
      </ul>
      <p class="mt-4"><strong>Calcula:</strong></p>
      <ol>
        <li>Total devengado (separa salarial de no salarial)</li>
        <li>Base de cotización CC</li>
        <li>Base de cotización AT y EP</li>
        <li>Deducciones (incluye horas extra)</li>
        <li>Líquido a percibir</li>
      </ol>
    </div>

    <h3>Ejercicio 5: Cálculo de IRPF</h3>
    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
      <p><strong>Datos:</strong> Un trabajador soltero sin hijos tiene un salario bruto anual de 28.000 €. Las cotizaciones a la Seguridad Social ascienden a 1.778 € anuales.</p>
      <p class="mt-4"><strong>Calcula:</strong></p>
      <ol>
        <li>Base de retención</li>
        <li>Cuota íntegra aplicando los tramos del IRPF</li>
        <li>Porcentaje de retención mensual</li>
      </ol>
    </div>

    <h3>Ejercicio 6: Nómina de un jefe de taller (grupo 3)</h3>
    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
      <p><strong>Datos:</strong></p>
      <ul>
        <li>Categoría: Jefe de taller (Grupo 3)</li>
        <li>Salario base: 1.800 €/mes</li>
        <li>Plus de responsabilidad: 300 €/mes</li>
        <li>Plus de antigüedad (3 trienios al 5%): 270 €</li>
        <li>Horas extra: 150 €</li>
        <li>Vehículo de empresa (uso particular): 200 €/mes (en especie)</li>
        <li>Pagas extra: 2 prorrateadas</li>
        <li>IRPF: 18%</li>
        <li>Contrato indefinido</li>
      </ul>
      <p class="mt-4"><strong>Calcula:</strong></p>
      <ol>
        <li>Total devengado (incluye especie)</li>
        <li>Base de cotización CC (recuerda: las retribuciones en especie también cotizan)</li>
        <li>Base AT y EP</li>
        <li>Deducciones de Seguridad Social e IRPF</li>
        <li>Líquido a percibir</li>
      </ol>
    </div>

    <h3>Ejercicio 7: Nómina de un peón (grupo 10) con baja por IT</h3>
    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
      <p><strong>Datos:</strong></p>
      <ul>
        <li>Categoría: Peón (Grupo 10)</li>
        <li>Salario base: 1.100 €/mes</li>
        <li>Plus de toxicidad: 150 €/mes</li>
        <li>Pagas extra: 2 prorrateadas (base 1.100 €)</li>
        <li>Trabajador está de <strong>baja por enfermedad común desde el día 8</strong></li>
        <li>Ha trabajado 7 días del mes</li>
        <li>IRPF: 7%</li>
        <li>Contrato indefinido</li>
      </ul>
      <p class="mt-4"><strong>Recuerda las reglas de IT por enfermedad común:</strong></p>
      <ul class="text-sm text-slate-600">
        <li>Días 1-3: no cobra</li>
        <li>Días 4-15: 60% de la base reguladora</li>
        <li>Días 16-20: 60% de la base reguladora</li>
        <li>A partir del día 21: 75%</li>
      </ul>
      <p class="mt-4"><strong>Calcula el líquido a percibir del mes.</strong></p>
      <div class="callout callout-info mt-3">
        <p>💡 <strong>Pista:</strong> Base reguladora diaria = (Salario base + complementos + prorrateo pagas) / 30</p>
      </div>
    </div>

    <hr class="my-8">

    <div class="callout callout-success">
      <div class="callout-title">
        <span>💡</span>
        <span>Soluciones (autoevaluación)</span>
      </div>
      <p><strong>Ejercicio 1:</strong> Total devengado: 1.490 € · Base CC: 1.490 € · SS: 94,61 € · IRPF: 149 € · <strong>Líquido: 1.246,39 €</strong></p>
      <p><strong>Ejercicio 2:</strong> Total devengado: 1.950 € · Base CC: 1.950 € · Base AT/EP: 2.150 € · SS: 130,69 € · IRPF: 273 € · <strong>Líquido: 1.546,31 €</strong></p>
      <p><strong>Ejercicio 3:</strong> Total devengado: 1.360 € · Base CC: 1.300 € · SS: 82,55 € · IRPF: 108,80 € · <strong>Líquido: 1.168,65 €</strong></p>
      <p><strong>Ejercicio 4:</strong> Total devengado: 1.888 € · Base CC: 1.788 € · Base AT/EP: 1.956 € · SS: 125,20 € · IRPF: 245,44 € · <strong>Líquido: 1.517,36 €</strong></p>
      <p><strong>Ejercicio 5:</strong> Base retención: 26.222 € · Cuota: 4.994,58 € · <strong>% Retención: 17,84%</strong></p>
      <p><strong>Ejercicio 6:</strong> Total devengado: 2.720 € · Base CC: 2.720 € · Base AT/EP: 2.870 € · SS: 170,38 € · IRPF: 489,60 € · <strong>Líquido: 2.060,02 €</strong></p>
      <p><strong>Ejercicio 7:</strong> Días trabajados: 7 × 41,67 = 291,69 € · Días IT 60% (4-20): 17 × 25,00 = 425,00 € · Días IT 75% (21-31): 0 (no llega) · Total devengado: 716,69 € · Base CC: 1.250,10 € · SS: 79,38 € · IRPF: 50,17 € · <strong>Líquido: 587,14 €</strong></p>
    </div>
  `
};
