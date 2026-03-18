window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['inflacion'] = {
  title: "4. La inflación",
  content: `
<h2>4. La inflación</h2>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🎯</span>
        <span>Objetivos de aprendizaje</span>
    </div>
    <ul>
        <li>Definir el concepto de inflación y sus tipos</li>
        <li>Comprender cómo se mide el IPC</li>
        <li>Identificar las causas de la inflación</li>
        <li>Analizar los efectos económicos y sociales</li>
    </ul>
</div>

<h3>4.1. ¿Qué es la inflación?</h3>

<p>La <strong>inflación</strong> es el aumento <strong>generalizado y sostenido</strong> de los precios de los bienes y servicios en una economía durante un período determinado.</p>

<div class="grid grid-cols-3 gap-4 my-6">
    <div class="bg-green-50 p-4 rounded-xl border border-green-200 text-center">
        <div class="text-2xl mb-2">📈</div>
        <h4 class="font-bold text-green-800 mb-2">Inflación</h4>
        <p class="text-xs">Subida general de precios</p>
        <p class="text-sm font-semibold mt-2">IPC > 0</p>
    </div>
    <div class="bg-blue-50 p-4 rounded-xl border border-blue-200 text-center">
        <div class="text-2xl mb-2">📉</div>
        <h4 class="font-bold text-blue-800 mb-2">Deflación</h4>
        <p class="text-xs">Bajada general de precios</p>
        <p class="text-sm font-semibold mt-2">IPC < 0</p>
    </div>
    <div class="bg-amber-50 p-4 rounded-xl border border-amber-200 text-center">
        <div class="text-2xl mb-2">🐢</div>
        <h4 class="font-bold text-amber-800 mb-2">Desinflación</h4>
        <p class="text-xs">La inflación baja, pero sigue positiva</p>
        <p class="text-sm font-semibold mt-2">IPC ↓ pero > 0</p>
    </div>
</div>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>🎯</span>
        <span>Objetivo del BCE</span>
    </div>
    <p>El Banco Central Europeo tiene como objetivo mantener una inflación <strong>próxima al 2%</strong> a medio plazo. Este nivel se considera óptimo para el crecimiento económico.</p>
</div>

<h3>4.2. El Índice de Precios al Consumo (IPC)</h3>

<p>El <strong>IPC</strong> es el indicador más utilizado para medir la inflación. Se calcula comparando el coste de una <strong>cesta de la compra</strong> representativa en dos momentos diferentes.</p>

<div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
    <h4 class="font-bold mb-4">🛒 La cesta de la compra del IPC</h4>
    <p class="mb-4">El INE elabora una cesta con más de 500 productos y servicios que representa el consumo medio de las familias españolas:</p>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div class="bg-white p-3 rounded-lg text-sm">
            <span class="font-bold">🏠</span> Vivienda (30%)
        </div>
        <div class="bg-white p-3 rounded-lg text-sm">
            <span class="font-bold">🍽️</span> Alimentación (19%)
        </div>
        <div class="bg-white p-3 rounded-lg text-sm">
            <span class="font-bold">🚗</span> Transporte (15%)
        </div>
        <div class="bg-white p-3 rounded-lg text-sm">
            <span class="font-bold">🍽️</span> Restauración (9%)
        </div>
        <div class="bg-white p-3 rounded-lg text-sm">
            <span class="font-bold">👗</span> Vestido (6%)
        </div>
        <div class="bg-white p-3 rounded-lg text-sm">
            <span class="font-bold">📺</span> Ocio (5%)
        </div>
    </div>
    <p class="text-xs text-slate-600 mt-4">* Porcentajes aproximados. La cesta se actualiza periódicamente.</p>
</div>

<h3>4.3. Cálculo de la tasa de inflación</h3>

<div class="bg-blue-800 text-white p-6 rounded-2xl my-6">
    <p class="text-center font-bold text-lg mb-4">Tasa de inflación = [(IPC₂ - IPC₁) ÷ IPC₁] × 100</p>
    <div class="bg-blue-700 p-4 rounded-lg">
        <p class="text-sm mb-2"><strong>Ejemplo:</strong></p>
        <p class="text-sm">Si el IPC era 110 en 2023 y es 115 en 2024:</p>
        <p class="text-sm mt-2">Tasa = [(115 - 110) ÷ 110] × 100 = <strong>4,54%</strong></p>
    </div>
</div>

<h3>4.4. Causas de la inflación</h3>

<table class="my-6">
    <thead>
        <tr>
            <th>Tipo</th>
            <th>Causa</th>
            <th>Ejemplo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Inflación de demanda</strong></td>
            <td>La demanda supera a la oferta</td>
            <td>Boom económico, exceso de consumo</td>
        </tr>
        <tr>
            <td><strong>Inflación de costes</strong></td>
            <td>Aumento de costes de producción</td>
            <td>Subida del petróleo, salarios</td>
        </tr>
        <tr>
            <td><strong>Inflación estructural</strong></td>
            <td>Problemas estructurales de la economía</td>
            <td>Monopolios, rigideces del mercado</td>
        </tr>
        <tr>
            <td><strong>Inflación importada</strong></td>
            <td>Subida de precios de importaciones</td>
            <td>Depreciación de la moneda</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>🌍</span>
        <span>Inflación en la eurozona (2022-2024)</span>
    </div>
    <p>Tras la pandemia y la guerra en Ucrania, la inflación alcanzó máximos históricos:</p>
    <ul class="mt-2 space-y-1">
        <li>2022: 8,4% (máximo desde los años 80)</li>
        <li>2023: 5,6% (tendencia descendente)</li>
        <li>2024: ~2,5% (acercándose al objetivo del BCE)</li>
    </ul>
</div>

<h3>4.5. Efectos de la inflación</h3>

<div class="grid grid-cols-2 gap-4 my-6">
    <div class="bg-red-50 p-4 rounded-xl border border-red-200">
        <h4 class="font-bold text-red-800 mb-2">❌ Efectos negativos</h4>
        <ul class="text-sm space-y-1">
            <li>Pérdida de poder adquisitivo</li>
            <li>Incertidumbre económica</li>
            <li>Perjudica a ahorradores</li>
            <li>Distorsiona la inversión</li>
            <li>Reduce competitividad exterior</li>
        </ul>
    </div>
    <div class="bg-green-50 p-4 rounded-xl border border-green-200">
        <h4 class="font-bold text-green-800 mb-2">✅ Efectos positivos (moderada)</h4>
        <ul class="text-sm space-y-1">
            <li>Incentiva el consumo (no esperar)</li>
            <li>Reduce el valor real de las deudas</li>
            <li>Evita la deflación (peligrosa)</li>
            <li>Permite ajustes salariales reales</li>
        </ul>
    </div>
</div>

<h3>4.6. IPC subyacente</h3>

<div class="bg-amber-50 p-6 rounded-2xl border border-amber-200 my-6">
    <h4 class="font-bold text-amber-800 mb-3">📊 ¿Qué es el IPC subyacente?</h4>
    <p class="mb-3">Es el IPC <strong>sin incluir</strong> los alimentos no elaborados ni los productos energéticos (electricidad, combustibles).</p>
    <div class="bg-white p-4 rounded-lg">
        <p class="font-semibold">¿Por qué se usa?</p>
        <p class="text-sm">Porque elimina componentes muy volátiles y muestra la tendencia inflacionista real.</p>
    </div>
</div>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Pregunta tipo EBAU</span>
    </div>
    <p><strong>"Explique las consecuencias de una inflación alta para los pensionistas."</strong></p>
    <p class="text-sm mt-2">Debes mencionar: pérdida de poder adquisitivo, importancia de la revalorización de pensiones según IPC.</p>
</div>
`
};
