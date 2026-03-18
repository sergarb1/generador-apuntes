window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['desempleo'] = {
  title: "5. El desempleo",
  content: `
<h2>5. El desempleo</h2>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🎯</span>
        <span>Objetivos de aprendizaje</span>
    </div>
    <ul>
        <li>Definir los conceptos de población activa, ocupada y parada</li>
        <li>Calcular la tasa de paro correctamente</li>
        <li>Identificar los tipos de desempleo</li>
        <li>Conocer las políticas de empleo</li>
    </ul>
</div>

<h3>5.1. Conceptos básicos del mercado de trabajo</h3>

<p>Para entender el desempleo, primero debemos definir los conceptos clave:</p>

<div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
    <h4 class="font-bold mb-4">👥 Población y mercado laboral</h4>
    <div class="space-y-3">
        <div class="bg-white p-4 rounded-lg border">
            <p class="font-bold text-lg">🔹 Población en edad de trabajar (16+ años)</p>
            <p class="text-sm text-slate-600">Todas las personas en edad laboral</p>
        </div>
        <div class="flex justify-center text-slate-400">↓</div>
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p class="font-bold">Población Activa</p>
                <p class="text-xs text-slate-600">Trabajan o buscan trabajo</p>
            </div>
            <div class="bg-slate-100 p-4 rounded-lg border border-slate-200">
                <p class="font-bold">Población Inactiva</p>
                <p class="text-xs text-slate-600">No trabajan ni buscan (estudiantes, jubilados, tareas del hogar)</p>
            </div>
        </div>
        <div class="flex justify-center text-slate-400">↓</div>
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                <p class="font-bold">Ocupados</p>
                <p class="text-xs text-slate-600">Tienen empleo</p>
            </div>
            <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                <p class="font-bold">Parados</p>
                <p class="text-xs text-slate-600">Sin empleo y buscan activamente</p>
            </div>
        </div>
    </div>
</div>

<h3>5.2. La tasa de paro</h3>

<p>La <strong>tasa de paro</strong> es el porcentaje de personas activas que están desempleadas:</p>

<div class="bg-blue-800 text-white p-6 rounded-2xl my-6 text-center">
    <p class="text-xl font-bold">Tasa de paro = (Parados ÷ Población Activa) × 100</p>
</div>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>📝</span>
        <span>Ejemplo de cálculo</span>
    </div>
    <p>En un país con:</p>
    <ul class="mt-2 space-y-1">
        <li>Población activa: 25 millones</li>
        <li>Ocupados: 21 millones</li>
        <li>Parados: 4 millones</li>
    </ul>
    <p class="mt-3 font-bold bg-white text-blue-800 p-3 rounded-lg inline-block">Tasa de paro = (4 ÷ 25) × 100 = <span class="text-blue-600">16%</span></p>
</div>

<h3>5.3. Fuentes de datos en España</h3>

<table class="my-6">
    <thead>
        <tr>
            <th>Fuente</th>
            <th>Organismo</th>
            <th>Características</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>EPA</strong></td>
            <td>INE</td>
            <td>Encuesta trimestral a hogares. Más amplia</td>
        </tr>
        <tr>
            <td><strong>Paro registrado</strong></td>
            <td>SEPE</td>
            <td>Personas inscritas en oficinas de empleo</td>
        </tr>
        <tr>
            <td><strong>Afiliación a la SS</strong></td>
            <td>Seguridad Social</td>
            <td>Trabajadores dados de alta</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Diferencia EPA vs. Paro registrado</span>
    </div>
    <p>La <strong>EPA</strong> incluye a todos los parados (también quienes no tienen derecho a prestación). El <strong>paro registrado</strong> solo incluye quienes se inscriben en el SEPE. Por eso la EPA suele dar cifras más altas.</p>
</div>

<h3>5.4. Tipos de desempleo</h3>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
    <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
        <div class="text-2xl mb-2">🔄</div>
        <h4 class="font-bold text-blue-800 mb-2">Friccional</h4>
        <p class="text-xs">Búsqueda temporal de empleo (cambios voluntarios)</p>
        <p class="text-sm font-semibold mt-2">Inevitable y necesario</p>
    </div>
    <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
        <div class="text-2xl mb-2">📉</div>
        <h4 class="font-bold text-purple-800 mb-2">Cíclico</h4>
        <p class="text-xs">Por recesión económica (falta de demanda)</p>
        <p class="text-sm font-semibold mt-2">El más preocupante</p>
    </div>
    <div class="bg-amber-50 p-4 rounded-xl border border-amber-200">
        <div class="text-2xl mb-2">🏗️</div>
        <h4 class="font-bold text-amber-800 mb-2">Estructural</h4>
        <p class="text-xs">Desajuste entre oferta y demanda de trabajo</p>
        <p class="text-sm font-semibold mt-2">Requiere formación</p>
    </div>
    <div class="bg-green-50 p-4 rounded-xl border border-green-200">
        <div class="text-2xl mb-2">🌾</div>
        <h4 class="font-bold text-green-800 mb-2">Estacional</h4>
        <p class="text-xs">Por variaciones estacionales (turismo, agricultura)</p>
        <p class="text-sm font-semibold mt-2">Típico en España</p>
    </div>
    <div class="bg-red-50 p-4 rounded-xl border border-red-200">
        <div class="text-2xl mb-2">🤖</div>
        <h4 class="font-bold text-red-800 mb-2">Tecnológico</h4>
        <p class="text-xs">Sustitución de trabajadores por máquinas</p>
        <p class="text-sm font-semibold mt-2">Parte del estructural</p>
    </div>
    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div class="text-2xl mb-2">🌍</div>
        <h4 class="font-bold text-slate-800 mb-2">De larga duración</h4>
        <p class="text-xs">Más de 12 meses sin empleo</p>
        <p class="text-sm font-semibold mt-2">Muy difícil de resolver</p>
    </div>
</div>

<h3>5.5. El desempleo en España</h3>

<div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
    <h4 class="font-bold mb-4">📊 Evolución reciente</h4>
    <table class="w-full">
        <thead>
            <tr>
                <th>Año</th>
                <th>Tasa de paro</th>
                <th>Contexto</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2008</td>
                <td>11,3%</td>
                <td>Inicio crisis financiera</td>
            </tr>
            <tr>
                <td>2013</td>
                <td>26,1%</td>
                <td>Máximo histórico</td>
            </tr>
            <tr>
                <td>2019</td>
                <td>14,7%</td>
                <td>Pre-pandemia</td>
            </tr>
            <tr>
                <td>2021</td>
                <td>15,3%</td>
                <td>Pandemia COVID-19</td>
            </tr>
            <tr class="bg-blue-50">
                <td>2024</td>
                <td>~11,5%</td>
                <td>Recuperación económica</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>🇪🇺</span>
        <span>Comparación europea</span>
    </div>
    <p>España tiene una de las tasas de paro más altas de la UE:</p>
    <ul class="mt-2 space-y-1">
        <li>Alemania: ~3%</li>
        <li>Francia: ~7%</li>
        <li>Italia: ~8%</li>
        <li>España: ~11,5%</li>
        <li>Media UE: ~6%</li>
    </ul>
</div>

<h3>5.6. Políticas de empleo</h3>

<div class="grid grid-cols-2 gap-4 my-6">
    <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
        <h4 class="font-bold text-blue-800 mb-2">📈 Políticas Activas</h4>
        <p class="text-xs mb-2">Mejoran la empleabilidad:</p>
        <ul class="text-sm space-y-1">
            <li>Formación profesional</li>
            <li>Orientación laboral</li>
            <li>Bonus de contratación</li>
            <li>Fomento del emprendimiento</li>
        </ul>
    </div>
    <div class="bg-green-50 p-4 rounded-xl border border-green-200">
        <h4 class="font-bold text-green-800 mb-2">💰 Políticas Pasivas</h4>
        <p class="text-xs mb-2">Protegen económicamente:</p>
        <ul class="text-sm space-y-1">
            <li>Seguro de desempleo</li>
            <li>Subsidios por desempleo</li>
            <li>Ayudas asistenciales</li>
            <li>IMV (Ingreso Mínimo Vital)</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Pregunta tipo EBAU</span>
    </div>
    <p><strong>"Explique la diferencia entre población activa y población ocupada. ¿Qué ocurre con la tasa de paro si muchos parados se desaniman y dejan de buscar?"</strong></p>
    <p class="text-sm mt-2">La tasa de paro puede <strong>bajar artificialmente</strong> porque los desanimados salen de la población activa.</p>
</div>
`
};
