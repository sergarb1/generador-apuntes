window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['estructura-nomina'] = {
  title: "2. Estructura de la nómina: encabezado y datos básicos",
  content: `
    <h2>2. Estructura de la nómina: encabezado y datos básicos</h2>

    <div class="callout callout-info">
      <div class="callout-title">
        <span>🎯</span>
        <span>Objetivos de aprendizaje</span>
      </div>
      <ul>
        <li>Identificar los datos de empresa y trabajador que figuran en la nómina</li>
        <li>Comprender el sistema de grupos de cotización</li>
        <li>Conocer los distintos períodos de liquidación</li>
        <li>Interpretar correctamente el encabezado de un recibo de salarios</li>
      </ul>
    </div>

    <h3>2.1. Datos de la empresa</h3>
    <p>En la parte superior de la nómina deben figurar los siguientes datos del empleador:</p>
    <table>
      <thead>
        <tr>
          <th>Campo</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Razón social</td>
          <td>Nombre completo de la empresa</td>
        </tr>
        <tr>
          <td>Domicilio</td>
          <td>Dirección fiscal de la empresa</td>
        </tr>
        <tr>
          <td>CIF/NIF</td>
          <td>Código de Identificación Fiscal de la empresa</td>
        </tr>
        <tr>
          <td>Código de cuenta de cotización</td>
          <td>Código asignado por la Seguridad Social (CCC)</td>
        </tr>
      </tbody>
    </table>

    <h3>2.2. Datos del trabajador</h3>
    <table>
      <thead>
        <tr>
          <th>Campo</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nombre y apellidos</td>
          <td>Nombre completo del trabajador</td>
        </tr>
        <tr>
          <td>NIF/NIE</td>
          <td>Número de Identificación Fiscal</td>
        </tr>
        <tr>
          <td>Número de afiliación a la SS</td>
          <td>Número de afiliación del trabajador (NAF)</td>
        </tr>
        <tr>
          <td>Grupo de cotización</td>
          <td>Categoría profesional (1 al 11)</td>
        </tr>
        <tr>
          <td>Categoría profesional</td>
          <td>Denominación del puesto de trabajo</td>
        </tr>
        <tr>
          <td>Antigüedad</td>
          <td>Fecha de ingreso en la empresa</td>
        </tr>
      </tbody>
    </table>

    <h3>2.3. Grupos de cotización</h3>
    <p>Los <strong>grupos de cotización</strong> clasifican a los trabajadores según su categoría profesional. Existen 11 grupos:</p>
    <table>
      <thead>
        <tr>
          <th>Grupo</th>
          <th>Categoría</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Ingenieros y licenciados</td></tr>
        <tr><td>2</td><td>Ingenieros técnicos, peritos y ayudantes titulados</td></tr>
        <tr><td>3</td><td>Jefes administrativos y de taller</td></tr>
        <tr><td>4</td><td>Ayudantes no titulados</td></tr>
        <tr><td>5</td><td>Oficiales administrativos</td></tr>
        <tr><td>6</td><td>Subalternos</td></tr>
        <tr><td>7</td><td>Auxiliares administrativos</td></tr>
        <tr><td>8</td><td>Oficiales de primera y segunda</td></tr>
        <tr><td>9</td><td>Oficiales de tercera y especialistas</td></tr>
        <tr><td>10</td><td>Peones</td></tr>
        <tr><td>11</td><td>Trabajadores menores de 18 años</td></tr>
      </tbody>
    </table>

    <h3>2.4. Período de liquidación</h3>
    <p>La nómina debe indicar el período al que corresponde la liquidación:</p>
    <ul>
      <li><strong>Mensual:</strong> del día 1 al último día del mes</li>
      <li><strong>Quincenal:</strong> del día 1 al 15 o del 16 al último día</li>
      <li><strong>Semanal:</strong> de lunes a domingo</li>
    </ul>

    <div class="callout callout-success">
      <div class="callout-title">
        <span>💡</span>
        <span>Ejemplo de encabezado</span>
      </div>
      <div class="bg-white p-4 rounded-lg border border-slate-200">
        <p class="font-bold">Empresa: Administraciones SL</p>
        <p>CIF: B-12345678 · CCC: 12/123456789/12</p>
        <p class="mt-2"><strong>Trabajador:</strong> Antonio Martínez López</p>
        <p>NIF: 12345678A · NAF: 12/12345678/12</p>
        <p><strong>Grupo cotización:</strong> 5 (Oficial administrativo)</p>
        <p><strong>Período:</strong> 1 al 31 de enero de 2025</p>
        <p><strong>Días trabajados:</strong> 31</p>
      </div>
    </div>
  `
};
