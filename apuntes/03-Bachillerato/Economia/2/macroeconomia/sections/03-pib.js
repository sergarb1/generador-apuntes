window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['pib'] = {
  title: "3. El Producto Interior Bruto (PIB)",
  content: `
<h2>3. El Producto Interior Bruto (PIB)</h2>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🎯</span>
        <span>Objetivos de aprendizaje</span>
    </div>
    <ul>
        <li>Definir correctamente el concepto de PIB</li>
        <li>Conocer los métodos de cálculo del PIB</li>
        <li>Diferenciar entre PIB nominal y real</li>
        <li>Entender las limitaciones del PIB como indicador</li>
    </ul>
</div>

<h3>3.1. Definición de PIB</h3>

<p>El <strong>Producto Interior Bruto (PIB)</strong> es el valor monetario de todos los <strong>bienes y servicios finales</strong> producidos en un país durante un <strong>período determinado</strong> (normalmente un año o un trimestre).</p>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>💡</span>
        <span>Desglosando el concepto</span>
    </div>
    <ul class="space-y-2">
        <li><strong>Producto:</strong> Bienes y servicios producidos</li>
        <li><strong>Interior:</strong> Dentro de las fronteras del país (independientemente de quién produzca)</li>
        <li><strong>Bruto:</strong> Sin descontar la depreciación del capital</li>
    </ul>
</div>

<h3>3.2. Métodos de cálculo del PIB</h3>

<p>Existen tres métodos equivalentes para calcular el PIB:</p>

<div class="grid grid-cols-3 gap-4 my-6">
    <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
        <div class="text-2xl mb-2">🏭</div>
        <h4 class="font-bold text-blue-800 mb-2">Método de la Producción</h4>
        <p class="text-xs mb-2">Suma del valor añadido de todas las empresas</p>
        <p class="text-sm font-semibold">PIB = Σ Valor Añadido</p>
    </div>
    <div class="bg-green-50 p-4 rounded-xl border border-green-200">
        <div class="text-2xl mb-2">💰</div>
        <h4 class="font-bold text-green-800 mb-2">Método del Gasto</h4>
        <p class="text-xs mb-2">Suma del gasto de los agentes económicos</p>
        <p class="text-sm font-semibold">PIB = C + I + G + (X - M)</p>
    </div>
    <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
        <div class="text-2xl mb-2">📊</div>
        <h4 class="font-bold text-purple-800 mb-2">Método de la Renta</h4>
        <p class="text-xs mb-2">Suma de las rentas generadas</p>
        <p class="text-sm font-semibold">PIB = Salarios + Beneficios + Alquileres + Impuestos</p>
    </div>
</div>

<h3>3.3. La ecuación del gasto</h3>

<p>La fórmula más utilizada es la del <strong>método del gasto</strong>:</p>

<div class="bg-slate-800 text-white p-6 rounded-2xl my-6 text-center">
    <p class="text-2xl font-bold mb-4">PIB = C + I + G + (X - M)</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div class="bg-slate-700 p-3 rounded-lg">
            <p class="font-bold text-blue-300">C</p>
            <p>Consumo de las familias</p>
        </div>
        <div class="bg-slate-700 p-3 rounded-lg">
            <p class="font-bold text-green-300">I</p>
            <p>Inversión empresarial</p>
        </div>
        <div class="bg-slate-700 p-3 rounded-lg">
            <p class="font-bold text-purple-300">G</p>
            <p>Gasto público</p>
        </div>
        <div class="bg-slate-700 p-3 rounded-lg">
            <p class="font-bold text-amber-300">(X - M)</p>
            <p>Exportaciones netas</p>
        </div>
    </div>
</div>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📝</span>
        <span>Ejemplo numérico</span>
    </div>
    <p>Si en un país:</p>
    <ul class="mt-2 space-y-1">
        <li>Consumo (C) = 500.000 millones €</li>
        <li>Inversión (I) = 150.000 millones €</li>
        <li>Gasto público (G) = 200.000 millones €</li>
        <li>Exportaciones (X) = 100.000 millones €</li>
        <li>Importaciones (M) = 120.000 millones €</li>
    </ul>
    <p class="mt-3 font-bold bg-white p-3 rounded-lg inline-block">PIB = 500.000 + 150.000 + 200.000 + (100.000 - 120.000) = <span class="text-blue-600">830.000 millones €</span></p>
</div>

<h3>3.4. PIB nominal vs. PIB real</h3>

<table class="my-6">
    <thead>
        <tr>
            <th>Concepto</th>
            <th>Características</th>
            <th>Utilidad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>PIB Nominal</strong></td>
            <td>A precios corrientes del año</td>
            <td>Medir el tamaño económico en euros</td>
        </tr>
        <tr>
            <td><strong>PIB Real</strong></td>
            <td>A precios constantes (ajustado)</td>
            <td>Medir el crecimiento real de la producción</td>
        </tr>
    </tbody>
</table>

<div class="bg-amber-50 p-6 rounded-2xl border border-amber-200 my-6">
    <h4 class="font-bold text-amber-800 mb-3">🧮 Cálculo del PIB Real</h4>
    <p class="mb-3">Para eliminar el efecto de los precios, usamos el <strong>deflactor del PIB</strong>:</p>
    <div class="bg-white p-4 rounded-lg text-center">
        <p class="text-lg font-bold mb-2">PIB Real = PIB Nominal ÷ Deflactor × 100</p>
    </div>
    <p class="text-sm mt-3 text-slate-600">El deflactor es un índice de precios que mide la inflación de todos los bienes producidos.</p>
</div>

<h3>3.5. Limitaciones del PIB</h3>

<p>Aunque el PIB es el indicador más utilizado, tiene importantes limitaciones:</p>

<div class="grid grid-cols-2 gap-4 my-6">
    <div class="bg-red-50 p-4 rounded-xl border border-red-200">
        <h4 class="font-bold text-red-800 mb-2">❌ No mide</h4>
        <ul class="text-sm space-y-1">
            <li>La distribución de la renta</li>
            <li>La economía sumergida</li>
            <li>El trabajo doméstico no remunerado</li>
            <li>La calidad de vida</li>
            <li>El daño medioambiental</li>
        </ul>
    </div>
    <div class="bg-green-50 p-4 rounded-xl border border-green-200">
        <h4 class="font-bold text-green-800 mb-2">✅ Alternativas</h4>
        <ul class="text-sm space-y-1">
            <li>IDH (Índice de Desarrollo Humano)</li>
            <li>PIB per cápita</li>
            <li>Indicadores de sostenibilidad</li>
            <li>Encuestas de satisfacción vital</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Pregunta tipo EBAU</span>
    </div>
    <p><strong>"Explique por qué un aumento del PIB no siempre implica mejora del bienestar social."</strong></p>
    <p class="text-sm mt-2">Debes mencionar: distribución desigual, externalidades negativas, exclusión de actividades no mercantiles.</p>
</div>

<h3>3.6. El PIB per cápita</h3>

<p>El <strong>PIB per cápita</strong> es el PIB dividido entre el número de habitantes. Es un indicador del nivel de vida medio:</p>

<div class="bg-blue-50 p-6 rounded-2xl border border-blue-200 my-6">
    <p class="text-center text-lg font-bold">PIB per cápita = PIB Total ÷ Población</p>
    <p class="text-sm text-center mt-3 text-slate-600">España: ~23.000 € por habitante (2024)</p>
</div>
`
};
