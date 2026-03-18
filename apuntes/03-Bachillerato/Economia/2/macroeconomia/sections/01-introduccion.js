window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['introduccion'] = {
  title: "1. Introducción a la macroeconomía",
  content: `
<h2>1. Introducción a la macroeconomía</h2>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🎯</span>
        <span>Objetivos de aprendizaje</span>
    </div>
    <ul>
        <li>Comprender la diferencia entre microeconomía y macroeconomía</li>
        <li>Identificar los principales problemas macroeconómicos</li>
        <li>Entender el papel de las políticas económicas</li>
        <li>Reconocer la importancia de los indicadores económicos</li>
    </ul>
</div>

<h3>1.1. ¿Qué es la macroeconomía?</h3>

<p>La <strong>macroeconomía</strong> es la rama de la economía que estudia el comportamiento de los <strong>agregados económicos</strong>, es decir, las variables que reflejan la situación de una economía en su conjunto.</p>

<div class="grid grid-cols-2 gap-4 my-6">
    <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
        <h4 class="font-bold text-blue-800 mb-2">🔬 Microeconomía</h4>
        <ul class="text-sm space-y-1">
            <li>Estudia agentes individuales</li>
            <li>Analiza empresas y consumidores</li>
            <li>Se centra en mercados específicos</li>
            <li>Ejemplo: precio del pan</li>
        </ul>
    </div>
    <div class="bg-green-50 p-4 rounded-xl border border-green-200">
        <h4 class="font-bold text-green-800 mb-2">🌍 Macroeconomía</h4>
        <ul class="text-sm space-y-1">
            <li>Estudia la economía global</li>
            <li>Analiza países y regiones</li>
            <li>Se centra en agregados</li>
            <li>Ejemplo: inflación nacional</li>
        </ul>
    </div>
</div>

<h3>1.2. Principales problemas macroeconómicos</h3>

<p>La macroeconomía se ocupa de resolver cuatro problemas fundamentales que afectan al bienestar de una nación:</p>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
    <div class="bg-amber-50 p-4 rounded-xl border border-amber-200 text-center">
        <div class="text-3xl mb-2">📈</div>
        <h4 class="font-bold text-amber-800 mb-2">Crecimiento</h4>
        <p class="text-xs">Aumento de la producción de bienes y servicios</p>
    </div>
    <div class="bg-red-50 p-4 rounded-xl border border-red-200 text-center">
        <div class="text-3xl mb-2">💰</div>
        <h4 class="font-bold text-red-800 mb-2">Inflación</h4>
        <p class="text-xs">Subida generalizada de los precios</p>
    </div>
    <div class="bg-purple-50 p-4 rounded-xl border border-purple-200 text-center">
        <div class="text-3xl mb-2">👥</div>
        <h4 class="font-bold text-purple-800 mb-2">Desempleo</h4>
        <p class="text-xs">Personas que buscan trabajo activamente</p>
    </div>
    <div class="bg-blue-50 p-4 rounded-xl border border-blue-200 text-center">
        <div class="text-3xl mb-2">🌐</div>
        <h4 class="font-bold text-blue-800 mb-2">Sector Exterior</h4>
        <p class="text-xs">Relaciones comerciales con otros países</p>
    </div>
</div>

<h3>1.3. Políticas económicas</h3>

<p>Los gobiernos utilizan diferentes herramientas para influir en la economía y alcanzar sus objetivos:</p>

<table class="my-6">
    <thead>
        <tr>
            <th>Política</th>
            <th>Instrumentos</th>
            <th>Objetivo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Fiscal</strong></td>
            <td>Impuestos y gasto público</td>
            <td>Estimular o frenar la economía</td>
        </tr>
        <tr>
            <td><strong>Monetaria</strong></td>
            <td>Tipos de interés y oferta monetaria</td>
            <td>Controlar la inflación</td>
        </tr>
        <tr>
            <td><strong>De oferta</strong></td>
            <td>Reformas estructurales</td>
            <td>Mejorar la productividad</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>💡</span>
        <span>Para saber más</span>
    </div>
    <p>El <strong>Banco Central Europeo (BCE)</strong> es el responsable de la política monetaria en la eurozona. Su objetivo principal es mantener la estabilidad de precios, es decir, una inflación cercana al 2%.</p>
</div>

<h3>1.4. El flujo circular de la renta</h3>

<p>El <strong>flujo circular de la renta</strong> es un modelo que muestra cómo circulan los bienes, servicios y dinero entre los diferentes agentes económicos:</p>

<div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
    <h4 class="font-bold mb-4">🔄 Agentes económicos</h4>
    <div class="space-y-3">
        <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">🏠</div>
            <div>
                <p class="font-bold">Economías domésticas</p>
                <p class="text-sm text-slate-600">Ofrecen trabajo y consumen bienes</p>
            </div>
        </div>
        <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">🏢</div>
            <div>
                <p class="font-bold">Empresas</p>
                <p class="text-sm text-slate-600">Producen bienes y contratan trabajo</p>
            </div>
        </div>
        <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">🏛️</div>
            <div>
                <p class="font-bold">Sector público</p>
                <p class="text-sm text-slate-600">Recauda impuestos y ofrece servicios</p>
            </div>
        </div>
        <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">🌍</div>
            <div>
                <p class="font-bold">Sector exterior</p>
                <p class="text-sm text-slate-600">Exportaciones e importaciones</p>
            </div>
        </div>
    </div>
</div>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>⚠️</span>
        <span>¡Atención!</span>
    </div>
    <p>En la EBAU es fundamental distinguir claramente entre variables <strong>reales</strong> (cantidad de bienes producidos) y variables <strong>nominales</strong> (valor monetario de esos bienes). La inflación puede distorsionar las comparaciones temporales.</p>
</div>
`
};

