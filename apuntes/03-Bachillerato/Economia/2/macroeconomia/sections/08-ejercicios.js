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
    <ul>
        <li>Aplicar los conceptos teóricos a casos reales</li>
        <li>Practicar cálculos macroeconómicos básicos</li>
        <li>Preparar ejercicios tipo EBAU</li>
        <li>Desarrollar el razonamiento económico</li>
    </ul>
</div>

<h3>8.1. Cálculo del PIB</h3>

<div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
    <h4 class="font-bold mb-4">📝 Ejercicio 1: Método del gasto</h4>
    <p class="mb-4">La economía del país "Economilandia" presenta los siguientes datos (en miles de millones de €):</p>
    <ul class="space-y-2 mb-4">
        <li>Consumo de las familias (C): 500</li>
        <li>Inversión empresarial (I): 150</li>
        <li>Gasto público (G): 200</li>
        <li>Exportaciones (X): 80</li>
        <li>Importaciones (M): 90</li>
    </ul>
    <p class="font-semibold mb-2">Se pide:</p>
    <ol class="list-decimal list-inside space-y-2">
        <li>Calcule el PIB usando la ecuación del gasto</li>
        <li>Determine si hay superávit o déficit comercial</li>
        <li>Explique qué pasaría si las exportaciones suben a 100</li>
    </ol>
    
    <div class="mt-6 bg-green-50 p-4 rounded-xl border border-green-200">
        <p class="font-bold text-green-800 mb-2">✅ Solución:</p>
        <ol class="space-y-3 text-sm">
            <li><strong>PIB = C + I + G + (X - M)</strong><br>
                PIB = 500 + 150 + 200 + (80 - 90) = <strong>840 miles de millones €</strong></li>
            <li><strong>Saldo comercial = X - M = 80 - 90 = -10</strong><br>
                Hay <strong>déficit comercial</strong> de 10 miles de millones €</li>
            <li>Si X = 100: PIB = 500 + 150 + 200 + (100 - 90) = <strong>860</strong><br>
                El PIB aumenta en 20 miles de millones €</li>
        </ol>
    </div>
</div>

<h3>8.2. Cálculo de la tasa de inflación</h3>

<div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
    <h4 class="font-bold mb-4">📝 Ejercicio 2: IPC y inflación</h4>
    <p class="mb-4">Los datos del IPC en España son:</p>
    <ul class="space-y-2 mb-4">
        <li>IPC enero 2023: 117,5</li>
        <li>IPC enero 2024: 121,8</li>
    </ul>
    <p class="font-semibold mb-2">Se pide:</p>
    <ol class="list-decimal list-inside space-y-2">
        <li>Calcule la tasa de inflación interanual</li>
        <li>Si un producto costaba 100€ en 2023, ¿cuánto costaría en 2024?</li>
        <li>Explique el significado del resultado</li>
    </ol>
    
    <div class="mt-6 bg-green-50 p-4 rounded-xl border border-green-200">
        <p class="font-bold text-green-800 mb-2">✅ Solución:</p>
        <ol class="space-y-3 text-sm">
            <li><strong>Tasa de inflación = [(IPC₂ - IPC₁) ÷ IPC₁] × 100</strong><br>
                Inflación = [(121,8 - 117,5) ÷ 117,5] × 100 = <strong>3,66%</strong></li>
            <li><strong>Nuevo precio = 100€ × (1 + 0,0366) = 103,66€</strong></li>
            <li>Los precios han subido un 3,66% de media. El poder adquisitivo de las familias disminuye si los salarios no suben igual.</li>
        </ol>
    </div>
</div>

<h3>8.3. Cálculo de la tasa de paro</h3>

<div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
    <h4 class="font-bold mb-4">📝 Ejercicio 3: Mercado laboral</h4>
    <p class="mb-4">Datos de la EPA de una región (en miles de personas):</p>
    <ul class="space-y-2 mb-4">
        <li>Población en edad de trabajar: 2.500</li>
        <li>Población inactiva: 900</li>
        <li>Ocupados: 1.400</li>
    </ul>
    <p class="font-semibold mb-2">Se pide:</p>
    <ol class="list-decimal list-inside space-y-2">
        <li>Calcule la población activa</li>
        <li>Calcule el número de parados</li>
        <li>Calcule la tasa de paro</li>
        <li>Calcule la tasa de actividad</li>
    </ol>
    
    <div class="mt-6 bg-green-50 p-4 rounded-xl border border-green-200">
        <p class="font-bold text-green-800 mb-2">✅ Solución:</p>
        <ol class="space-y-3 text-sm">
            <li><strong>Población activa = Población total - Inactivos</strong><br>
                Activa = 2.500 - 900 = <strong>1.600 miles</strong></li>
            <li><strong>Parados = Activa - Ocupados</strong><br>
                Parados = 1.600 - 1.400 = <strong>200 miles</strong></li>
            <li><strong>Tasa de paro = (Parados ÷ Activa) × 100</strong><br>
                Tasa = (200 ÷ 1.600) × 100 = <strong>12,5%</strong></li>
            <li><strong>Tasa de actividad = (Activa ÷ Población total) × 100</strong><br>
                Tasa = (1.600 ÷ 2.500) × 100 = <strong>64%</strong></li>
        </ol>
    </div>
</div>

<h3>8.4. Política fiscal: déficit y deuda</h3>

<div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
    <h4 class="font-bold mb-4">📝 Ejercicio 4: Presupuesto público</h4>
    <p class="mb-4">El gobierno de un país tiene los siguientes datos presupuestarios (en miles de millones de €):</p>
    <ul class="space-y-2 mb-4">
        <li>Ingresos por impuestos: 450</li>
        <li>Gasto en educación y sanidad: 200</li>
        <li>Gasto en pensiones: 150</li>
        <li>Otros gastos: 180</li>
        <li>PIB del país: 1.200</li>
    </ul>
    <p class="font-semibold mb-2">Se pide:</p>
    <ol class="list-decimal list-inside space-y-2">
        <li>Calcule el total de gastos públicos</li>
        <li>Determine si hay déficit o superávit</li>
        <li>Calcule el déficit como porcentaje del PIB</li>
        <li>¿Cumple con la norma europea del 3%?</li>
    </ol>
    
    <div class="mt-6 bg-green-50 p-4 rounded-xl border border-green-200">
        <p class="font-bold text-green-800 mb-2">✅ Solución:</p>
        <ol class="space-y-3 text-sm">
            <li><strong>Gastos totales = 200 + 150 + 180 = 530 miles de millones €</strong></li>
            <li><strong>Saldo = Ingresos - Gastos = 450 - 530 = -80</strong><br>
                Hay <strong>déficit público</strong> de 80 miles de millones €</li>
            <li><strong>Déficit % PIB = (Déficit ÷ PIB) × 100</strong><br>
                = (80 ÷ 1.200) × 100 = <strong>6,67%</strong></li>
            <li><strong>NO cumple</strong> la norma europea. El 6,67% supera ampliamente el límite del 3%.</li>
        </ol>
    </div>
</div>

<h3>8.5. Política monetaria: tipos de interés</h3>

<div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
    <h4 class="font-bold mb-4">📝 Ejercicio 5: Decisiones del BCE</h4>
    <p class="mb-4">Lea la siguiente situación:</p>
    <div class="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-4">
        <p class="text-sm">"La inflación en la eurozona ha alcanzado el 8,5%, muy por encima del objetivo del 2% del BCE. El crecimiento económico es moderado (1,2%) y el desempleo se mantiene estable."</p>
    </div>
    <p class="font-semibold mb-2">Se pide:</p>
    <ol class="list-decimal list-inside space-y-2">
        <li>¿Qué tipo de política monetaria debería aplicar el BCE?</li>
        <li>¿Qué debería hacer con los tipos de interés?</li>
        <li>Explique dos efectos de esta medida en la economía</li>
        <li>¿Qué pasaría si el BCE no hace nada?</li>
    </ol>
    
    <div class="mt-6 bg-green-50 p-4 rounded-xl border border-green-200">
        <p class="font-bold text-green-800 mb-2">✅ Solución:</p>
        <ol class="space-y-3 text-sm">
            <li><strong>Política monetaria CONTRACTIVA</strong> (para frenar la inflación)</li>
            <li><strong>Subir los tipos de interés</strong> de forma significativa</li>
            <li><strong>Efectos:</strong><br>
                • Los créditos serán más caros → menos consumo e inversión<br>
                • La economía se frena → la inflación disminuye</li>
            <li>Si no hace nada, la inflación puede dispararse más, perdiendo poder adquisitivo las familias y generando incertidumbre económica.</li>
        </ol>
    </div>
</div>

<h3>8.6. Test de repaso rápido</h3>

<div class="bg-blue-50 p-6 rounded-2xl border border-blue-200 my-6">
    <h4 class="font-bold text-blue-800 mb-4">❓ Preguntas tipo test</h4>
    
    <div class="space-y-4">
        <div>
            <p class="font-semibold mb-2">1. El PIB mide:</p>
            <ul class="space-y-1 text-sm">
                <li>a) La riqueza acumulada de un país</li>
                <li>b) La producción de bienes y servicios en un período ✅</li>
                <li>c) El bienestar de la población</li>
            </ul>
        </div>
        
        <div>
            <p class="font-semibold mb-2">2. Si el IPC sube un 5% y tu salario un 3%:</p>
            <ul class="space-y-1 text-sm">
                <li>a) Tu poder adquisitivo mejora</li>
                <li>b) Tu poder adquisitivo empeora ✅</li>
                <li>c) Tu poder adquisitivo se mantiene</li>
            </ul>
        </div>
        
        <div>
            <p class="font-semibold mb-2">3. La política fiscal expansiva consiste en:</p>
            <ul class="space-y-1 text-sm">
                <li>a) Subir impuestos y bajar gasto</li>
                <li>b) Bajar impuestos y/o subir gasto ✅</li>
                <li>c) Subir los tipos de interés</li>
            </ul>
        </div>
        
        <div>
            <p class="font-semibold mb-2">4. El objetivo principal del BCE es:</p>
            <ul class="space-y-1 text-sm">
                <li>a) Crecimiento económico máximo</li>
                <li>b) Desempleo cero</li>
                <li>c) Estabilidad de precios ✅</li>
            </ul>
        </div>
        
        <div>
            <p class="font-semibold mb-2">5. La tasa de paro se calcula como:</p>
            <ul class="space-y-1 text-sm">
                <li>a) Parados ÷ Población total</li>
                <li>b) Parados ÷ Población activa ✅</li>
                <li>c) Parados ÷ Ocupados</li>
            </ul>
        </div>
    </div>
</div>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejo para la EBAU</span>
    </div>
    <p>En los ejercicios numéricos, <strong>siempre muestra el procedimiento</strong>. Aunque el resultado final sea incorrecto, puedes obtener puntos por el planteamiento correcto.</p>
</div>
`
};
