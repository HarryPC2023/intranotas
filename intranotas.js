/* ============================================================
   NOMBRES DE CARRERAS Y CICLOS
   ============================================================ */
const NOMBRES_CARRERAS = {
    sistemas: 'Ingeniería de Sistemas',
    industrial: 'Ingeniería Industrial',
    software: 'Ingeniería de Software'
};

const NOMBRES_CICLOS = {
    1: 'PRIMER CICLO', 2: 'SEGUNDO CICLO', 3: 'TERCER CICLO',
    4: 'CUARTO CICLO', 5: 'QUINTO CICLO', 6: 'SEXTO CICLO',
    7: 'SÉPTIMO CICLO', 8: 'OCTAVO CICLO', 9: 'NOVENO CICLO',
    10: 'DÉCIMO CICLO'
};

/* Ciclos verificados — todos los ciclos de todas las carreras (sin badge) */
const CICLOS_VERIFICADOS = {
    sistemas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    industrial: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    software: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

/* ============================================================
   LAYOUT DE COMPONENTES POR TIPO DE FÓRMULA
   ============================================================ */
const COMPONENT_LAYOUT = {
    'ESTANDAR_1_1_1': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'COMPUTACION_1_1_2': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'ALGEBRA': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'ALGORITMIA': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'REDACCION_BASE': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' },
        { comps: ['Monografia1', 'Monografia2'], grid: 'grid-2-cols' }
    ],
    'REALIDAD_NACIONAL': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' },
        { comps: ['Monografia1', 'Monografia2'], grid: 'grid-2-cols' }
    ],
    'REALIDAD_NACIONAL_4PC': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' }
    ],
    'SOLO_PC': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' }
    ],
    'SOLO_EXAMENES': [
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'ETICA': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' },
        { comps: ['Monografia1'], grid: 'grid-2-cols' }
    ],
    'METODOLOGIA_INV': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' },
        { comps: ['Monografia1'], grid: 'grid-2-cols' }
    ],
    'PSICOLOGIA': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' },
        { comps: ['Monografia1'], grid: 'grid-2-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'TCS': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' },
        { comps: ['Monografia1', 'Monografia2'], grid: 'grid-2-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'TCS_APLICADA': [
        { comps: ['PC1', 'PC2'], grid: 'grid-4-cols' },
        { comps: ['Monografia1', 'Monografia2'], grid: 'grid-2-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'BIOLOGICO': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4', 'PC5'], grid: 'grid-5-cols' },
        { comps: ['Monografia1'], grid: 'grid-2-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'SISTEMAS_BLANDOS': [
        { comps: ['PC1'], grid: 'grid-2-cols' },
        { comps: ['Monografia1', 'Monografia2'], grid: 'grid-2-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'MODELADO_DATOS': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' },
        { comps: ['Monografia1'], grid: 'grid-2-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'INGENIERIA_DATOS': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' },
        { comps: ['Monografia1'], grid: 'grid-2-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'TEORIA_ORGANIZACIONAL': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' },
        { comps: ['Monografia1', 'Monografia2'], grid: 'grid-2-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'QUIMICA': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4'], grid: 'grid-4-cols' },
        { comps: ['Lab1', 'Lab2', 'Lab3', 'Lab4'], grid: 'grid-4-cols' },
        { comps: ['Lab5', 'Lab6', 'Lab7', 'Lab8'], grid: 'grid-4-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'FISICA_I': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4', 'PC5'], grid: 'grid-5-cols' },
        { comps: ['Lab1', 'Lab2', 'Lab3', 'Lab4', 'Lab5'], grid: 'grid-5-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ],
    'FISICA_II': [
        { comps: ['PC1', 'PC2', 'PC3', 'PC4', 'PC5'], grid: 'grid-5-cols' },
        { comps: ['Lab1', 'Lab2', 'Lab3', 'Lab4', 'Lab5'], grid: 'grid-5-cols' },
        { comps: ['EP', 'EF', 'ES'], grid: 'grid-4-cols' }
    ]
};

/* ============================================================
   VARIABLES GLOBALES DE ESTADO
   ============================================================ */
let carreraSeleccionada = null;
let cicloSeleccionado = null;
let cursosSeleccionados = [];

/* ============================================================
   NAVEGACIÓN ENTRE PANTALLAS
   ============================================================ */
function irAPantalla(num) {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
    const pantalla = document.getElementById('pantalla-' + num);
    if (pantalla) pantalla.classList.add('activa');
    window.scrollTo(0, 0);
    const botones = document.getElementById('botones-flotantes');
    if (botones) botones.style.display = num === 4 ? 'flex' : 'none';
    /* Mostrar barra de temas solo en pantallas 3 y 4 */
    const contTema = document.getElementById('contenedor-tema');
    if (contTema) contTema.style.display = (num === 3 || num === 4) ? 'block' : 'none';
}

/* ============================================================
   SELECCIÓN DE CARRERA (PANTALLA 2)
   ============================================================ */
function seleccionarCarrera(carrera) {
    carreraSeleccionada = carrera;
    cicloSeleccionado = null;
    cursosSeleccionados = [];

    const labelCarrera = document.getElementById('nombre-carrera-activa');
    if (labelCarrera) labelCarrera.textContent = NOMBRES_CARRERAS[carrera];

    irAPantalla(3);

    setTimeout(() => {
        generarAcordeones();
        inicializarSelectoresCiclo();
        restaurarSeleccionGuardada();
    }, 50);
}

/* ============================================================
   GENERACIÓN DE ACORDEONES (PANTALLA 3)
   ============================================================ */
function generarAcordeones() {
    const contenedor = document.getElementById('contenedor-acordeones');
    const cursosCarrera = CURSOS_POR_CICLO[carreraSeleccionada];
    let html = '';

    for (let ciclo = 1; ciclo <= 10; ciclo++) {
        const cursos = cursosCarrera[ciclo] || [];
        const nombreCiclo = NOMBRES_CICLOS[ciclo];
        const esVerificado = (CICLOS_VERIFICADOS[carreraSeleccionada] || []).includes(ciclo);
        const badgeHTML = !esVerificado
            ? `<span class="badge-criterio-oficial">CRITERIO DE EVALUACIÓN OFICIAL</span>`
            : '';

        html += `
            <div class="acordeon" id="acordeon-ciclo-${ciclo}">
                <div class="acordeon-header" onclick="toggleAcordeon(${ciclo})">
                    <span class="acordeon-icono">▶</span>
                    <span class="acordeon-titulo">${nombreCiclo}${badgeHTML}</span>
                    <span class="acordeon-contador" id="contador-ciclo-${ciclo}">0</span>
                </div>
                <div class="acordeon-contenido">
                    <div class="acordeon-lista">
                        ${generarListaCursos(cursos, ciclo)}
                    </div>
                </div>
            </div>
        `;
    }

    // Sección de cursos electivos
    const electivos = cursosCarrera['electivos'] || [];
    if (electivos.length > 0) {
        html += `
            <div class="acordeon acordeon-electivos" id="acordeon-electivos">
                <div class="acordeon-header acordeon-header-electivos" onclick="toggleAcordeonElectivos()">
                    <span class="acordeon-icono">▶</span>
                    <span class="acordeon-titulo">CURSOS ELECTIVOS</span>
                    <span class="acordeon-contador" id="contador-electivos">0</span>
                </div>
                <div class="acordeon-contenido">
                    <div class="acordeon-lista">
                        ${generarListaCursos(electivos, 'electivos')}
                    </div>
                </div>
            </div>
        `;
    }

    contenedor.innerHTML = html;
}

function generarListaCursos(cursos, ciclo) {
    if (!cursos || cursos.length === 0) {
        return `<p style="font-size:0.8rem; color:#9ca3af; padding: 8px 0;">No hay cursos registrados para este ciclo.</p>`;
    }
    return cursos.map(curso => `
        <label class="curso-item" id="item-${curso.id}" onclick="event.stopPropagation()">
            <input
                type="checkbox"
                class="curso-checkbox"
                data-curso-id="${curso.id}"
                data-ciclo="${ciclo}"
                onchange="toggleCurso('${curso.id}', '${ciclo}')"
            >
            <div class="curso-info">
                <div class="curso-nombre">${curso.name}</div>
                <div class="curso-detalles">
                    <span class="curso-codigo">${curso.code}</span>
                    <span class="curso-creditos">${curso.credits} créditos</span>
                </div>
            </div>
        </label>
    `).join('');
}

function toggleAcordeon(ciclo) {
    const acordeon = document.getElementById(`acordeon-ciclo-${ciclo}`);
    const estabAbierto = acordeon.classList.contains('abierto');
    document.querySelectorAll('.acordeon').forEach(a => a.classList.remove('abierto'));
    if (!estabAbierto) acordeon.classList.add('abierto');
}

function toggleAcordeonElectivos() {
    const acordeon = document.getElementById('acordeon-electivos');
    if (!acordeon) return;
    const estabAbierto = acordeon.classList.contains('abierto');
    document.querySelectorAll('.acordeon').forEach(a => a.classList.remove('abierto'));
    if (!estabAbierto) acordeon.classList.add('abierto');
}

/* ============================================================
   SELECCIÓN DE CURSOS Y CICLO (PANTALLA 3)
   ============================================================ */
function toggleCurso(cursoId, ciclo) {
    const checkbox = document.querySelector(`input[data-curso-id="${cursoId}"]`);
    const item = document.getElementById(`item-${cursoId}`);

    /* Buscar el curso tanto en ciclos numéricos como en electivos */
    const cursosList = CURSOS_POR_CICLO[carreraSeleccionada][parseInt(ciclo)] || CURSOS_POR_CICLO[carreraSeleccionada][ciclo] || [];
    let curso = cursosList.find(c => c.id === cursoId);
    if (!curso) {
        const electivos = CURSOS_POR_CICLO[carreraSeleccionada]['electivos'] || [];
        curso = electivos.find(c => c.id === cursoId);
    }

    if (checkbox.checked) {
        if (!cursosSeleccionados.find(c => c.id === cursoId)) {
            cursosSeleccionados.push({ ...curso, cicloOrigen: ciclo });
        }
        item.classList.add('seleccionado');
    } else {
        cursosSeleccionados = cursosSeleccionados.filter(c => c.id !== cursoId);
        item.classList.remove('seleccionado');
    }

    actualizarContadores();
    ocultarMensajeValidacion();
}

function actualizarContadores() {
    for (let ciclo = 1; ciclo <= 10; ciclo++) {
        const contador = document.getElementById(`contador-ciclo-${ciclo}`);
        if (!contador) continue;
        const cantidad = cursosSeleccionados.filter(c => String(c.cicloOrigen) === String(ciclo)).length;
        contador.textContent = cantidad;
        contador.style.backgroundColor = cantidad > 0 ? '#10b981' : '#00bcd4';
    }
    const contadorEl = document.getElementById('contador-electivos');
    if (contadorEl) {
        const cantEl = cursosSeleccionados.filter(c => c.cicloOrigen === 'electivos').length;
        contadorEl.textContent = cantEl;
        contadorEl.style.backgroundColor = cantEl > 0 ? '#10b981' : '#00bcd4';
    }
}

function seleccionarCiclo(num) {
    document.querySelectorAll('.btn-ciclo').forEach(b => b.classList.remove('seleccionado'));
    const btn = document.querySelector(`.btn-ciclo[data-ciclo="${num}"]`);
    if (btn) btn.classList.add('seleccionado');
    cicloSeleccionado = num;
    ocultarMensajeValidacion();
}

function inicializarSelectoresCiclo() {
    document.querySelectorAll('.btn-ciclo').forEach(b => b.classList.remove('seleccionado'));
    cicloSeleccionado = null;
}

/* ============================================================
   VALIDACIÓN Y NAVEGACIÓN AL SIMULADOR
   ============================================================ */
function irAlSimulador() {
    if (!cicloSeleccionado) {
        mostrarMensajeValidacion('⚠️ Debes seleccionar en qué ciclo te encuentras');
        return;
    }
    if (cursosSeleccionados.length === 0) {
        mostrarMensajeValidacion('⚠️ Debes seleccionar al menos un curso');
        return;
    }
    guardarConfiguracion();
    irAPantalla(4);
    generarSimulador();
}

function mostrarMensajeValidacion(msg) {
    const el = document.getElementById('mensaje-validacion');
    el.textContent = msg;
    el.classList.add('visible');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function ocultarMensajeValidacion() {
    document.getElementById('mensaje-validacion').classList.remove('visible');
}

/* ============================================================
   MODAL DE INFORMACIÓN (PANTALLA 3)
   ============================================================ */
function abrirModalInfo() {
    document.getElementById('modal-info-overlay').classList.add('visible');
}

function cerrarModalInfo() {
    document.getElementById('modal-info-overlay').classList.remove('visible');
}

/* ============================================================
   GENERACIÓN DEL SIMULADOR (PANTALLA 4)
   ============================================================ */
function generarSimulador() {
    const contenedor = document.getElementById('contenedor-simulador');
    const cursosOrdenados = [...cursosSeleccionados].sort((a, b) => a.name.localeCompare(b.name));

    let html = `
        <div class="cabecera-simulador">
            <div class="titulo-ciclo-simulador">
                <span class="carrera-label">${NOMBRES_CARRERAS[carreraSeleccionada]}</span>
                ${NOMBRES_CICLOS[cicloSeleccionado]}
            </div>
            <button class="btn-volver" onclick="irAPantalla(3)">← Cambiar cursos</button>
        </div>

        <div class="banner-ponderado">
            <span class="banner-ponderado-label">PONDERADO CICLO</span>
            <span class="banner-ponderado-valor" id="ponderado-ciclo">--</span>
        </div>

        <div class="banner-alertas" id="banner-alertas">
            <div class="banner-alertas-titulo">⚠️ CURSOS EN RIESGO</div>
            <div class="banner-alertas-lista" id="lista-alertas"></div>
        </div>

        <div id="lista-cursos-simulador">
    `;

    cursosOrdenados.forEach(curso => { html += generarTarjetaCurso(curso); });
    html += `</div>`;
    contenedor.innerHTML = html;
    cargarNotasGuardadas();
}

function generarTarjetaCurso(curso) {
    const layout = COMPONENT_LAYOUT[curso.formula_type] || COMPONENT_LAYOUT['ESTANDAR_1_1_1'];
    return `
        <div class="tarjeta-curso" id="tarjeta-${curso.id}">
            <div class="tarjeta-header" onclick="togglePanelNotas('${curso.id}')">
                <div class="tarjeta-curso-info">
                    <div class="tarjeta-curso-nombre">
                        ${curso.name}
                        <span class="badge-estado" id="badge-${curso.id}" style="display:none;"></span>
                    </div>
                    <div class="tarjeta-curso-meta">
                        <span class="tarjeta-curso-codigo">${curso.code}</span>
                        <span class="tarjeta-curso-creditos">${curso.credits} créditos</span>
                    </div>
                    <button class="btn-ingresar-notas" onclick="event.stopPropagation(); togglePanelNotas('${curso.id}')">
                        Ingresar Notas
                    </button>
                </div>
                <div class="caja-promedio">
                    <span class="caja-promedio-label">Promedio<br>Curso</span>
                    <span class="caja-promedio-valor" id="promedio-${curso.id}">--</span>
                </div>
            </div>
            <div class="panel-notas" id="panel-${curso.id}" onclick="event.stopPropagation()">
                ${generarInputsNotas(curso, layout)}
            </div>
        </div>
    `;
}

function generarInputsNotas(curso, layout) {
    let html = `
        <div style="display:flex; justify-content:flex-end; margin-bottom:10px;">
            <button onclick="event.stopPropagation(); limpiarNotasCurso('${curso.id}')"
                style="font-size:0.7rem; padding:4px 10px; background:#fee2e2; color:#dc2626;
                       border:1px solid #fca5a5; border-radius:4px; cursor:pointer; font-weight:600;">
                🗑️ Limpiar notas
            </button>
        </div>
    `;

    html += layout.map(row => `
        <div class="${row.grid}">
            ${row.comps.map(comp => `
                <div class="input-group">
                    <label class="input-label">${comp}</label>
                    <input type="number" class="input-nota"
                        id="input-${curso.id}-${comp}"
                        placeholder="--" min="0" max="20" step="1"
                        oninput="validarNota(this); calcularTodo()"
                        onkeydown="moverFoco(event, '${curso.id}', '${comp}')">
                </div>
            `).join('')}
        </div>
    `).join('');

    html += `
        <div class="fila-promedios-panel">
            <div class="promedio-item">
                <span class="promedio-item-label">Prom. PC:</span>
                <span class="promedio-item-valor" id="prom-pc-${curso.id}">--</span>
            </div>
        </div>
        <div class="seccion-simulador-nota" id="simulador-${curso.id}" style="display:none;">
            <div class="simulador-titulo">🎯 ¿QUÉ NOTA NECESITO PARA APROBAR?</div>
            <div class="simulador-contenido" id="simulador-contenido-${curso.id}"></div>
        </div>
    `;
    return html;
}

function togglePanelNotas(cursoId) {
    const panel = document.getElementById(`panel-${cursoId}`);
    const estabAbierto = panel.classList.contains('abierto');
    document.querySelectorAll('.panel-notas').forEach(p => p.classList.remove('abierto'));
    if (!estabAbierto) panel.classList.add('abierto');
}

function moverFoco(event, cursoId, compActual) {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    const curso = cursosSeleccionados.find(c => c.id === cursoId);
    const index = curso.components.indexOf(compActual);
    if (index < curso.components.length - 1) {
        const sig = document.getElementById(`input-${cursoId}-${curso.components[index + 1]}`);
        if (sig) sig.focus();
    }
}

/* ============================================================
   VALIDACIÓN DE NOTAS (0–20)
   ============================================================ */
function validarNota(input) {
    let val = parseFloat(input.value);
    if (input.value === '' || input.value === '-') return;
    if (isNaN(val) || val < 0) { input.value = 0; return; }
    if (val > 20) { input.value = 20; return; }
    // Truncar a máximo 2 decimales para evitar valores raros
    input.value = Math.round(val * 100) / 100;
}

/* ============================================================
   FUNCIONES MATEMÁTICAS BASE
   ============================================================ */
function truncar(valor, decimales) {
    if (valor === null || isNaN(valor)) return null;
    const f = Math.pow(10, decimales);
    return Math.trunc(valor * f) / f;
}

function manejarVacio(v) {
    return (v === null || isNaN(v) || v === '') ? 0 : parseFloat(v);
}

/* ============================================================
   CÁLCULO DE PROMEDIOS DE PC
   ============================================================ */
function calcularPromPCComun(pc1, pc2, pc3, pc4) {
    const notas = [pc1, pc2, pc3, pc4].map(manejarVacio);
    return truncar((notas.reduce((a, b) => a + b, 0) - Math.min(...notas)) / 3, 3);
}

function calcularPromPCRedaccion(pc1, pc2, pc3, pc4, mon1, mon2) {
    const pcs = [pc1, pc2, pc3, pc4].map(manejarVacio);
    const mons = [mon1, mon2].map(manejarVacio);
    return truncar((pcs.reduce((a, b) => a + b, 0) - Math.min(...pcs) + mons.reduce((a, b) => a + b, 0)) / 5, 3);
}

function calcularPromPC4PC1Mon(pc1, pc2, pc3, pc4, mon1) {
    const pcs = [pc1, pc2, pc3, pc4].map(manejarVacio);
    return truncar((pcs.reduce((a, b) => a + b, 0) - Math.min(...pcs) + manejarVacio(mon1)) / 4, 3);
}

function calcularPromPCSistemasBlandos(pc1, mon1, mon2) {
    return truncar((manejarVacio(pc1) + manejarVacio(mon1) + manejarVacio(mon2)) / 3, 3);
}

function calcularPromPCTCSEspecial(pc1, pc2, mon1, mon2) {
    return truncar([pc1, pc2, mon1, mon2].map(manejarVacio).reduce((a, b) => a + b, 0) / 4, 3);
}

function calcularPromPCBiologico(pc_raw, mon1) {
    const pcs = pc_raw.map(manejarVacio);
    return truncar((pcs.reduce((a, b) => a + b, 0) - Math.min(...pcs) + manejarVacio(mon1)) / 5, 3);
}

function calcularPromPCQuimica(pc_raw, lab_raw) {
    const pcs = pc_raw.map(manejarVacio);
    const labs = [...lab_raw.map(manejarVacio)].sort((a, b) => a - b);
    return truncar((pcs.reduce((a, b) => a + b, 0) - Math.min(...pcs) + labs.slice(2).reduce((a, b) => a + b, 0)) / 9, 3);
}

function calcularPromPCFisica(pc_raw, lab_raw) {
    const pcs = pc_raw.map(manejarVacio);
    const labs = lab_raw.map(manejarVacio);
    return truncar((pcs.reduce((a, b) => a + b, 0) - Math.min(...pcs) + labs.reduce((a, b) => a + b, 0) - Math.min(...labs)) / 8, 3);
}

function calcularPromPCPsicologia(pc1, pc2, pc3, pc4, mon1) {
    const pcsRaw = [pc1, pc2, pc3, pc4];
    const validas = pcsRaw.filter(p => p !== null && p !== '' && !isNaN(p));
    const tieneMon = mon1 !== null && mon1 !== '' && !isNaN(mon1);
    if (!validas.length && !tieneMon) return null;
    const pcsNum = validas.map(p => parseFloat(p));
    const mon = manejarVacio(mon1);
    if (tieneMon) {
        const sumPC = validas.length === 4
            ? pcsNum.reduce((a, b) => a + b, 0) - Math.min(...pcsNum)
            : pcsNum.reduce((a, b) => a + b, 0);
        return truncar((sumPC + mon) / 4, 3);
    } else {
        if (!validas.length) return null;
        const sumPC = validas.length === 4
            ? pcsNum.reduce((a, b) => a + b, 0) - Math.min(...pcsNum)
            : pcsNum.reduce((a, b) => a + b, 0);
        return truncar(sumPC / 3, 3);
    }
}

function calcularPromPCTeoriaOrganizacional(pc1, pc2, pc3, pc4, mon1, mon2) {
    const pcsRaw = [pc1, pc2, pc3, pc4];
    const validas = pcsRaw.filter(p => p !== null && p !== '' && !isNaN(p));
    const m1ok = mon1 !== null && mon1 !== '' && !isNaN(mon1);
    const m2ok = mon2 !== null && mon2 !== '' && !isNaN(mon2);
    if (!validas.length && !m1ok && !m2ok) return null;
    const pcsNum = validas.map(p => parseFloat(p));
    const sumMon = manejarVacio(mon1) + manejarVacio(mon2);
    const sumPC = validas.length === 4
        ? pcsNum.reduce((a, b) => a + b, 0) - Math.min(...pcsNum)
        : pcsNum.reduce((a, b) => a + b, 0);
    return truncar((sumPC + sumMon) / 5, 3);
}

/* ============================================================
   SUSTITUTORIO Y NOTAS FINALES
   ============================================================ */
function aplicarSustitutorio(ep_raw, ef_raw, es_raw) {
    let EP = manejarVacio(ep_raw), EF = manejarVacio(ef_raw);
    if (es_raw === null || es_raw === '' || es_raw === undefined) return { ep_final: EP, ef_final: EF };
    const ES = manejarVacio(es_raw);
    if (EP <= EF) EP = ES; else EF = ES;
    return { ep_final: EP, ef_final: EF };
}

function calcularNotaFinalEstandar(prom_pc, ep, ef, es) {
    if (prom_pc === null) return null;
    const { ep_final, ef_final } = aplicarSustitutorio(ep, ef, es);
    return truncar((manejarVacio(prom_pc) + ep_final + ef_final) / 3, 1);
}

function calcularNotaFinalDobleEF(prom_pc, ep, ef, es) {
    if (prom_pc === null) return null;
    const { ep_final, ef_final } = aplicarSustitutorio(ep, ef, es);
    return truncar((manejarVacio(prom_pc) + ep_final + 2 * ef_final) / 4, 1);
}

function calcularNotaFinalSoloPC(prom_pc) {
    return prom_pc === null ? null : truncar(prom_pc, 1);
}

function calcularNotaFinalSoloExamenes(ep, ef, es) {
    const { ep_final, ef_final } = aplicarSustitutorio(ep, ef, es);
    return truncar((ep_final + 2 * ef_final) / 3, 1);
}/* ============================================================
   SIMULADOR "¿QUÉ NOTA NECESITO?"
   ============================================================ */
function calcularNotaNecesaria(curso, prom_pc, ep, ef, es, notaFinalReal) {
    const meta = 10;
    const simulador = document.getElementById(`simulador-${curso.id}`);
    const contenido = document.getElementById(`simulador-contenido-${curso.id}`);
    if (!simulador || !contenido) return;

    const esDobleEF = ['COMPUTACION_1_1_2', 'ALGORITMIA', 'FISICA_I', 'QUIMICA',
        'MODELADO_DATOS', 'INGENIERIA_DATOS', 'TEORIA_ORGANIZACIONAL', 'TCS'].includes(curso.formula_type);
    const soloPC = ['REDACCION_BASE', 'REALIDAD_NACIONAL', 'ETICA', 'METODOLOGIA_INV',
        'REALIDAD_NACIONAL_4PC', 'SOLO_PC'].includes(curso.formula_type);
    const soloExam = curso.formula_type === 'SOLO_EXAMENES';

    let html = '';

    // Cursos solo PC
    if (soloPC) {
        if (prom_pc === null) { simulador.style.display = 'none'; return; }
        html = prom_pc >= meta
            ? `<div class="simulador-mensaje-ok">✅ ¡Ya aprobaste! Tu promedio es ${prom_pc.toFixed(1)}</div>`
            : `<div class="simulador-fila"><span class="simulador-label">Necesitas subir tu Prom. PC a:</span><span class="simulador-valor">${meta.toFixed(1)}</span></div>`;
        simulador.style.display = 'block';
        contenido.innerHTML = html;
        return;
    }

    // Cursos solo exámenes (criterio B)
    if (soloExam) {
        const tieneEP = ep !== null && ep !== '' && !isNaN(ep);
        const tieneEF = ef !== null && ef !== '' && !isNaN(ef);
        const tieneES = es !== null && es !== '' && !isNaN(es);
        const epVal = manejarVacio(ep), efVal = manejarVacio(ef);

        if (tieneES) {
            html = notaFinalReal >= meta
                ? `<div class="simulador-mensaje-ok">✅ ¡Aprobaste con ${notaFinalReal.toFixed(1)}!</div>`
                : `<div class="simulador-fila" style="background:#7f1d1d;border-radius:6px;padding:10px;text-align:center;"><span class="simulador-label" style="color:#fff;font-weight:700;">❌ Curso desaprobado con ${notaFinalReal.toFixed(1)}</span></div>`;
        } else if (tieneEP && tieneEF) {
            const nota = truncar((epVal + 2 * efVal) / 3, 1);
            if (nota >= meta) {
                html = `<div class="simulador-mensaje-ok">✅ ¡Ya aprobaste con ${nota.toFixed(1)}!</div>`;
            } else {
                const esNec = Math.ceil(((meta * 3) - Math.max(epVal, efVal)) * 10) / 10;
                html = `<div class="simulador-fila" style="background:#fef3c7;border-radius:6px;padding:8px;margin-bottom:8px;"><span class="simulador-label" style="color:#d97706;">⚠️ Nota actual: ${nota.toFixed(1)} (desaprobado)</span></div>`;
                html += esNec <= 20
                    ? `<div class="simulador-fila"><span class="simulador-label">Con ES necesitas mínimo:</span><span class="simulador-valor">${esNec.toFixed(1)}</span></div>`
                    : `<div class="simulador-fila" style="background:#fee2e2;border-radius:6px;padding:8px;"><span class="simulador-label" style="color:#dc2626;">No es posible aprobar con sustitutorio</span></div>`;
            }
        } else if (tieneEP) {
            const efNec = Math.ceil(((meta * 3) - epVal) / 2 * 10) / 10;
            html = efNec <= 20
                ? `<div class="simulador-fila"><span class="simulador-label">Para aprobar necesitas en EF mínimo:</span><span class="simulador-valor">${efNec.toFixed(1)}</span></div>`
                : `<div class="simulador-fila" style="background:#fee2e2;border-radius:6px;padding:8px;"><span class="simulador-label" style="color:#dc2626;">Necesitarás el sustitutorio para aprobar</span></div>`;
        } else {
            html = `<div class="simulador-fila"><span class="simulador-label">Si sacas EP = 10:</span><span class="simulador-valor">EF mínimo = 10.0</span></div>`;
        }
        simulador.style.display = 'block';
        contenido.innerHTML = html;
        return;
    }

    // Cursos con PC + exámenes
    if (prom_pc === null) { simulador.style.display = 'none'; return; }

    const tieneEP = ep !== null && ep !== '' && !isNaN(ep);
    const tieneEF = ef !== null && ef !== '' && !isNaN(ef);
    const tieneES = es !== null && es !== '' && !isNaN(es);
    const epVal = manejarVacio(ep), efVal = manejarVacio(ef);

    if (tieneES) {
        html = notaFinalReal !== null && notaFinalReal >= meta
            ? `<div class="simulador-mensaje-ok">✅ ¡Aprobaste con ${notaFinalReal.toFixed(1)}!</div>`
            : `<div class="simulador-fila" style="background:#7f1d1d;border-radius:6px;padding:10px;text-align:center;"><span class="simulador-label" style="color:#fff;font-weight:700;">❌ Curso desaprobado con ${notaFinalReal.toFixed(1)}</span></div>`;
    } else if (tieneEP && tieneEF) {
        const nota = esDobleEF
            ? truncar((prom_pc + epVal + 2 * efVal) / 4, 1)
            : truncar((prom_pc + epVal + efVal) / 3, 1);
        if (nota >= meta) {
            html = `<div class="simulador-mensaje-ok">✅ ¡Ya aprobaste con ${nota.toFixed(1)}!</div>`;
        } else {
            let esNec = esDobleEF
                ? (epVal <= efVal ? (meta * 4) - prom_pc - 2 * efVal : ((meta * 4) - prom_pc - epVal) / 2)
                : (meta * 3) - prom_pc - Math.max(epVal, efVal);
            esNec = Math.ceil(esNec * 10) / 10;
            html = `<div class="simulador-fila" style="background:#fef3c7;border-radius:6px;padding:8px;margin-bottom:8px;"><span class="simulador-label" style="color:#d97706;">⚠️ Nota actual: ${nota.toFixed(1)} (desaprobado)</span></div>`;
            html += esNec <= 0
                ? `<div class="simulador-fila"><span class="simulador-label">¡Con cualquier nota en ES apruebas!</span><span class="simulador-valor">0+</span></div>`
                : esNec <= 20
                    ? `<div class="simulador-fila"><span class="simulador-label">Con ES necesitas mínimo:</span><span class="simulador-valor">${esNec.toFixed(1)}</span></div>`
                    : `<div class="simulador-fila" style="background:#fee2e2;border-radius:6px;padding:8px;"><span class="simulador-label" style="color:#dc2626;">No es posible aprobar con sustitutorio</span></div>`;
        }
    } else if (tieneEP) {
        let efNec = esDobleEF
            ? ((meta * 4) - prom_pc - epVal) / 2
            : (meta * 3) - prom_pc - epVal;
        efNec = Math.ceil(efNec * 10) / 10;
        html = efNec <= 0
            ? `<div class="simulador-fila"><span class="simulador-label">¡Con cualquier nota en EF apruebas!</span><span class="simulador-valor">0+</span></div>`
            : efNec <= 20
                ? `<div class="simulador-fila"><span class="simulador-label">Para aprobar necesitas en EF mínimo:</span><span class="simulador-valor">${efNec.toFixed(1)}</span></div>`
                : `<div class="simulador-fila" style="background:#fee2e2;border-radius:6px;padding:8px;"><span class="simulador-label" style="color:#dc2626;">Necesitarás el sustitutorio para aprobar</span></div>`;
    } else {
        const sugerencias = [8, 10, 12, 14, 16, 18, 20].reduce((acc, epS) => {
            if (acc.length >= 3) return acc;
            const efN = esDobleEF ? ((meta * 4) - prom_pc - epS) / 2 : (meta * 3) - prom_pc - epS;
            const efC = Math.ceil(efN * 10) / 10;
            if (efC >= 0 && efC <= 20) acc.push({ ep: epS, ef: efC });
            return acc;
        }, []);
        html = sugerencias.length === 0
            ? `<div class="simulador-fila" style="background:#fee2e2;border-radius:6px;padding:10px;text-align:center;"><span class="simulador-label" style="color:#dc2626;">Necesitas mejorar tu Prom. PC para poder aprobar</span></div>`
            : sugerencias.map(s => `<div class="simulador-fila"><span class="simulador-label">Si sacas EP = ${String(s.ep).padStart(2, '0')}:</span><span class="simulador-valor">EF mínimo = ${s.ef.toFixed(1)}</span></div>`).join('');
    }

    simulador.style.display = 'block';
    contenido.innerHTML = html;
}

/* ============================================================
   ACTUALIZACIÓN DE ESTADOS DE TARJETAS
   ============================================================ */
function actualizarEstadoCurso(cursoId, notaFinal, tieneNotas, evaluacionesCompletas) {
    const tarjeta = document.getElementById(`tarjeta-${cursoId}`);
    const badge = document.getElementById(`badge-${cursoId}`);
    if (!tarjeta || !badge) return;

    tarjeta.classList.remove('aprobado', 'en-riesgo', 'critico', 'pendiente', 'desaprobado');
    badge.className = 'badge-estado';
    badge.style.display = 'none';

    if (!tieneNotas || notaFinal === null) {
        tarjeta.classList.add('pendiente');
        badge.classList.add('badge-pendiente');
        badge.textContent = '📝 Pendiente';
        badge.style.display = 'inline';
        return;
    }

    if (notaFinal >= 10) {
        tarjeta.classList.add('aprobado');
        badge.classList.add('badge-aprobado');
        badge.textContent = '✓ Aprobado';
    } else if (evaluacionesCompletas) {
        tarjeta.classList.add('desaprobado');
        badge.classList.add('badge-desaprobado');
        badge.textContent = '❌ Desaprobado';
    } else if (notaFinal >= 7) {
        tarjeta.classList.add('en-riesgo');
        badge.classList.add('badge-riesgo');
        badge.textContent = '⚠️ En riesgo';
    } else {
        tarjeta.classList.add('critico');
        badge.classList.add('badge-critico');
        badge.textContent = '🚨 Crítico';
    }
    badge.style.display = 'inline';
}

function actualizarBannerAlertas(enRiesgo, desaprobados) {
    const banner = document.getElementById('banner-alertas');
    const lista = document.getElementById('lista-alertas');
    if (!banner || !lista) return;

    if (!enRiesgo.length && !desaprobados.length) { banner.classList.remove('visible'); return; }

    let html = '';
    if (desaprobados.length) {
        html += `<div style="font-weight:700;color:#dc2626;margin-bottom:4px;">❌ Desaprobados:</div>`;
        html += desaprobados.map(c => `<div class="banner-alertas-item" style="color:#dc2626;">• ${c.name} - Nota final: ${c.nota.toFixed(1)}</div>`).join('');
    }
    if (enRiesgo.length) {
        if (desaprobados.length) html += `<div style="margin-top:8px;"></div>`;
        html += `<div style="font-weight:700;color:#d97706;margin-bottom:4px;">⚠️ En riesgo:</div>`;
        html += enRiesgo.map(c => `<div class="banner-alertas-item">• ${c.name} - Promedio: ${c.nota.toFixed(1)}</div>`).join('');
    }
    lista.innerHTML = html;
    banner.classList.add('visible');
}

/* ============================================================
   MOTOR DE CÁLCULOS PRINCIPAL
   ============================================================ */
function calcularTodo() {
    let sumaPonderada = 0, sumaCreditos = 0;
    let cursosEnRiesgo = [], cursosDesaprobados = [];

    cursosSeleccionados.forEach(curso => {
        const gn = comp => {
            const el = document.getElementById(`input-${curso.id}-${comp}`);
            if (!el) return null;
            const v = el.value.trim();
            return v === '' ? null : parseFloat(v);
        };

        const pc = ['PC1', 'PC2', 'PC3', 'PC4', 'PC5'].map(gn);
        const lab = ['Lab1', 'Lab2', 'Lab3', 'Lab4', 'Lab5', 'Lab6', 'Lab7', 'Lab8'].map(gn);
        const mon = ['Monografia1', 'Monografia2'].map(gn);
        const ep = gn('EP'), ef = gn('EF'), es = gn('ES');

        const tieneNotas = [...pc, ...lab, ...mon, ep, ef, es].some(n => n !== null);
        const tieneES = es !== null && es !== '' && !isNaN(es);

        const soloPC = ['REDACCION_BASE', 'REALIDAD_NACIONAL', 'ETICA', 'METODOLOGIA_INV', 'REALIDAD_NACIONAL_4PC', 'SOLO_PC'].includes(curso.formula_type);
        const soloExam = curso.formula_type === 'SOLO_EXAMENES';
        const evaluacionesCompletas = tieneES || (soloPC && tieneNotas) || (soloExam && tieneES);

        let prom_pc = null, nota_final = null;

        switch (curso.formula_type) {
            case 'REDACCION_BASE':
            case 'REALIDAD_NACIONAL':
                prom_pc = calcularPromPCRedaccion(pc[0], pc[1], pc[2], pc[3], mon[0], mon[1]);
                nota_final = calcularNotaFinalSoloPC(prom_pc); break;

            case 'ETICA':
            case 'METODOLOGIA_INV':
                prom_pc = calcularPromPC4PC1Mon(pc[0], pc[1], pc[2], pc[3], mon[0]);
                nota_final = calcularNotaFinalSoloPC(prom_pc); break;

            case 'SOLO_PC':
            case 'REALIDAD_NACIONAL_4PC':
                prom_pc = calcularPromPCComun(pc[0], pc[1], pc[2], pc[3]);
                nota_final = calcularNotaFinalSoloPC(prom_pc); break;

            case 'SOLO_EXAMENES':
                prom_pc = null;
                nota_final = calcularNotaFinalSoloExamenes(ep, ef, es); break;

            case 'QUIMICA':
                prom_pc = calcularPromPCQuimica(pc.slice(0, 4), lab);
                nota_final = calcularNotaFinalDobleEF(prom_pc, ep, ef, es); break;

            case 'COMPUTACION_1_1_2':
            case 'ALGORITMIA':
                prom_pc = calcularPromPCComun(pc[0], pc[1], pc[2], pc[3]);
                nota_final = calcularNotaFinalDobleEF(prom_pc, ep, ef, es); break;

            case 'FISICA_I':
                prom_pc = calcularPromPCFisica(pc.slice(0, 5), lab.slice(0, 5));
                nota_final = calcularNotaFinalDobleEF(prom_pc, ep, ef, es); break;

            case 'FISICA_II':
                prom_pc = calcularPromPCFisica(pc.slice(0, 5), lab.slice(0, 5));
                nota_final = calcularNotaFinalEstandar(prom_pc, ep, ef, es); break;

            case 'ESTANDAR_1_1_1':
            case 'ALGEBRA':
                prom_pc = calcularPromPCComun(pc[0], pc[1], pc[2], pc[3]);
                nota_final = calcularNotaFinalEstandar(prom_pc, ep, ef, es);
                break;

            case 'PSICOLOGIA':
                prom_pc = calcularPromPCPsicologia(pc[0], pc[1], pc[2], pc[3], mon[0]);
                nota_final = calcularNotaFinalEstandar(prom_pc, ep, ef, es); break;

            case 'BIOLOGICO':
                prom_pc = calcularPromPCBiologico(pc.slice(0, 5), mon[0]);
                nota_final = calcularNotaFinalEstandar(prom_pc, ep, ef, es); break;

            case 'MODELADO_DATOS':
            case 'INGENIERIA_DATOS':
                prom_pc = calcularPromPC4PC1Mon(pc[0], pc[1], pc[2], pc[3], mon[0]);
                nota_final = calcularNotaFinalDobleEF(prom_pc, ep, ef, es); break;

            case 'TEORIA_ORGANIZACIONAL':
                prom_pc = calcularPromPCTeoriaOrganizacional(pc[0], pc[1], pc[2], pc[3], mon[0], mon[1]);
                nota_final = calcularNotaFinalDobleEF(prom_pc, ep, ef, es); break;

            case 'TCS':
                prom_pc = calcularPromPCRedaccion(pc[0], pc[1], pc[2], pc[3], mon[0], mon[1]);
                nota_final = calcularNotaFinalDobleEF(prom_pc, ep, ef, es); break;

            case 'TCS_APLICADA':
                prom_pc = calcularPromPCTCSEspecial(pc[0], pc[1], mon[0], mon[1]);
                nota_final = calcularNotaFinalEstandar(prom_pc, ep, ef, es); break;

            case 'SISTEMAS_BLANDOS':
                prom_pc = calcularPromPCSistemasBlandos(pc[0], mon[0], mon[1]);
                nota_final = calcularNotaFinalEstandar(prom_pc, ep, ef, es); break;

            default:
                prom_pc = calcularPromPCComun(pc[0], pc[1], pc[2], pc[3]);
                nota_final = calcularNotaFinalEstandar(prom_pc, ep, ef, es);
        }

        // Prom PC display
        const promPCEl = document.getElementById(`prom-pc-${curso.id}`);
        if (promPCEl) {
            if (prom_pc !== null) {
                promPCEl.textContent = prom_pc.toFixed(3);
                promPCEl.classList.add('tiene-valor');
                promPCEl.style.color = prom_pc >= 10 ? '#2196f3' : '#ef4444';
                promPCEl.style.backgroundColor = prom_pc >= 10 ? '#dbeafe' : '#fee2e2';
            } else {
                promPCEl.textContent = '--';
                promPCEl.classList.remove('tiene-valor');
                promPCEl.style.color = '#1f2937';
                promPCEl.style.backgroundColor = '#e2e8f0';
            }
        }

        // Nota final display
        const notaEl = document.getElementById(`promedio-${curso.id}`);
        if (notaEl) {
            if (nota_final !== null) {
                notaEl.textContent = nota_final.toFixed(1);
                notaEl.classList.add('tiene-valor');
                notaEl.style.color = nota_final >= 10 ? '#2196f3' : '#ef4444';
            } else {
                notaEl.textContent = '--';
                notaEl.classList.remove('tiene-valor');
                notaEl.style.color = '#d1d5db';
            }
        }

        actualizarEstadoCurso(curso.id, nota_final, tieneNotas, evaluacionesCompletas);
        calcularNotaNecesaria(curso, prom_pc, ep, ef, es, nota_final);

        if (tieneNotas && nota_final !== null && nota_final < 10) {
            if (evaluacionesCompletas) cursosDesaprobados.push({ name: curso.name, nota: nota_final });
            else cursosEnRiesgo.push({ name: curso.name, nota: nota_final });
        }

        if (nota_final !== null) {
            sumaPonderada += nota_final * curso.credits;
            sumaCreditos += curso.credits;
        }
    });

    actualizarBannerAlertas(cursosEnRiesgo, cursosDesaprobados);

    const ponderadoEl = document.getElementById('ponderado-ciclo');
    if (ponderadoEl) {
        if (sumaCreditos > 0) {
            const p = truncar(sumaPonderada / sumaCreditos, 3);
            ponderadoEl.textContent = p.toFixed(3);
            ponderadoEl.style.color = p >= 10 ? '#2196f3' : '#ef4444';
        } else {
            ponderadoEl.textContent = '--';
            ponderadoEl.style.color = '#2196f3';
        }
    }
}

/* ============================================================
   PERSISTENCIA EN LOCALSTORAGE
   ============================================================ */
function guardarConfiguracion() {
    localStorage.setItem('intranotas_carrera', carreraSeleccionada);
    localStorage.setItem('intranotas_ciclo', cicloSeleccionado);
    localStorage.setItem('intranotas_cursos', JSON.stringify(cursosSeleccionados));
    limpiarNotasCursosNoSeleccionados();
}

function restaurarSeleccionGuardada() {
    const carreraG = localStorage.getItem('intranotas_carrera');
    const cicloG = localStorage.getItem('intranotas_ciclo');
    const cursosG = localStorage.getItem('intranotas_cursos');

    // Solo restaurar si coincide con la carrera activa
    if (!carreraG || carreraG !== carreraSeleccionada) return;

    if (cicloG) {
        cicloSeleccionado = parseInt(cicloG);
        const btn = document.querySelector(`.btn-ciclo[data-ciclo="${cicloSeleccionado}"]`);
        if (btn) btn.classList.add('seleccionado');
    }

    if (cursosG) {
        const cursosGuardados = JSON.parse(cursosG);
        cursosGuardados.forEach(curso => {
            const cb = document.querySelector(`input[data-curso-id="${curso.id}"]`);
            const item = document.getElementById(`item-${curso.id}`);
            if (cb && item) {
                cb.checked = true;
                item.classList.add('seleccionado');
                if (!cursosSeleccionados.find(c => c.id === curso.id)) {
                    cursosSeleccionados.push(curso);
                }
            }
        });
        actualizarContadores();
    }
}

function limpiarNotasCursosNoSeleccionados() {
    const guardadas = localStorage.getItem('intranotas_notas');
    if (!guardadas) return;
    const notas = JSON.parse(guardadas);
    const ids = cursosSeleccionados.map(c => c.id);
    const filtradas = {};
    Object.keys(notas).forEach(id => { if (ids.includes(id)) filtradas[id] = notas[id]; });
    localStorage.setItem('intranotas_notas', JSON.stringify(filtradas));
}

function guardarNotas() {
    const notas = {};
    cursosSeleccionados.forEach(curso => {
        notas[curso.id] = {};
        curso.components.forEach(comp => {
            const el = document.getElementById(`input-${curso.id}-${comp}`);
            if (el) notas[curso.id][comp] = el.value.trim();
        });
    });
    localStorage.setItem('intranotas_notas', JSON.stringify(notas));
    mostrarToast('✅ Notas guardadas correctamente');
}

function cargarNotasGuardadas() {
    const guardadas = localStorage.getItem('intranotas_notas');
    if (!guardadas) return;
    const notas = JSON.parse(guardadas);
    const ids = cursosSeleccionados.map(c => c.id);
    Object.keys(notas).forEach(cursoId => {
        if (!ids.includes(cursoId)) return;
        Object.keys(notas[cursoId]).forEach(comp => {
            const el = document.getElementById(`input-${cursoId}-${comp}`);
            if (el) el.value = notas[cursoId][comp];
        });
    });
    calcularTodo();
}

function limpiarTodo() {
    document.getElementById('modal-overlay').classList.add('visible');
}

function cerrarModal() {
    document.getElementById('modal-overlay').classList.remove('visible');
}

function confirmarLimpiarTodo() {
    cerrarModal();
    cursosSeleccionados.forEach(curso => {
        curso.components.forEach(comp => {
            const el = document.getElementById(`input-${curso.id}-${comp}`);
            if (el) el.value = '';
        });
    });
    localStorage.removeItem('intranotas_notas');
    calcularTodo();
    mostrarToast('🗑️ Todas las notas han sido borradas');
}

function limpiarNotasCurso(cursoId) {
    const curso = cursosSeleccionados.find(c => c.id === cursoId);
    if (!curso) return;
    curso.components.forEach(comp => {
        const el = document.getElementById(`input-${cursoId}-${comp}`);
        if (el) el.value = '';
    });
    const guardadas = localStorage.getItem('intranotas_notas');
    if (guardadas) {
        const notas = JSON.parse(guardadas);
        delete notas[cursoId];
        localStorage.setItem('intranotas_notas', JSON.stringify(notas));
    }
    calcularTodo();
    mostrarToast('🗑️ Notas del curso borradas');
}

/* ============================================================
   RESETEAR APP COMPLETA (botón pantalla 3)
   ============================================================ */
function resetearApp() {
    document.getElementById('modal-reset-overlay').classList.add('visible');
}

function cerrarModalReset() {
    document.getElementById('modal-reset-overlay').classList.remove('visible');
}

function confirmarResetearApp() {
    cerrarModalReset();
    localStorage.removeItem('intranotas_carrera');
    localStorage.removeItem('intranotas_ciclo');
    localStorage.removeItem('intranotas_cursos');
    localStorage.removeItem('intranotas_notas');
    carreraSeleccionada = null;
    cicloSeleccionado = null;
    cursosSeleccionados = [];
    irAPantalla(2);
    mostrarToast('🔄 App reiniciada. ¡Elige tu carrera de nuevo!');
}

/* ============================================================
   UTILIDADES
   ============================================================ */
function mostrarToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 2500);
}

/* ============================================================
   SISTEMA DE TEMAS DE COLOR
   ============================================================ */
const TEMAS = {
    light: {
        label: '☀️ Light',
        vars: {
            '--color-cian': '#00bcd4',
            '--color-cian-hover': '#0097a7',
            '--color-cian-light': '#e0f7fa',
            '--color-verde-oscuro': '#004d40',
            '--color-azul': '#2196f3',
            '--color-azul-claro': '#e3f2fd',
            '--color-gris-texto': '#4b5563',
            '--color-gris-claro': '#d1d5db',
            '--color-verde-btn': '#10b981',
            '--color-rojo-btn': '#ef4444',
            '--color-fondo-input': '#f0faff',
            '--color-fondo-body': '#f8fafc',
            '--color-fondo-tarjeta': '#ffffff',
            '--color-texto-principal': '#1f2937',
            '--color-texto-nombre': '#1f2937',
            '--color-fondo-gradiente-inicio': '#f8fafc',
            '--color-fondo-gradiente-fin': '#e0f7fa',
        }
    },
    dark: {
        label: '🌙 Dark',
        vars: {
            '--color-cian': '#4dd0e1',
            '--color-cian-hover': '#00bcd4',
            '--color-cian-light': '#1e3a3f',
            '--color-verde-oscuro': '#80cbc4',
            '--color-azul': '#64b5f6',
            '--color-azul-claro': '#1a2a3a',
            '--color-gris-texto': '#9ca3af',
            '--color-gris-claro': '#374151',
            '--color-verde-btn': '#34d399',
            '--color-rojo-btn': '#f87171',
            '--color-fondo-input': '#1f2937',
            '--color-fondo-body': '#111827',
            '--color-fondo-tarjeta': '#1f2937',
            '--color-texto-principal': '#f9fafb',
            '--color-texto-nombre': '#f3f4f6',
            '--color-fondo-gradiente-inicio': '#111827',
            '--color-fondo-gradiente-fin': '#1e3a3f',
        }
    },
    ocean: {
        label: '🌊 Ocean',
        vars: {
            '--color-cian': '#0369a1',
            '--color-cian-hover': '#075985',
            '--color-cian-light': '#bae6fd',
            '--color-verde-oscuro': '#0c4a6e',
            '--color-azul': '#6d28d9',
            '--color-azul-claro': '#ddd6fe',
            '--color-gris-texto': '#1e3a5f',
            '--color-gris-claro': '#bfdbfe',
            '--color-verde-btn': '#0284c7',
            '--color-rojo-btn': '#be123c',
            '--color-fondo-input': '#e0f2fe',
            '--color-fondo-body': '#dbeafe',
            '--color-fondo-tarjeta': '#f0f9ff',
            '--color-texto-principal': '#0c1f3f',
            '--color-texto-nombre': '#0c1f3f',
            '--color-fondo-gradiente-inicio': '#dbeafe',
            '--color-fondo-gradiente-fin': '#bae6fd',
        }
    },
    forest: {
        label: '🌿 Forest',
        vars: {
            '--color-cian': '#15803d',
            '--color-cian-hover': '#166534',
            '--color-cian-light': '#bbf7d0',
            '--color-verde-oscuro': '#14532d',
            '--color-azul': '#b45309',
            '--color-azul-claro': '#fde68a',
            '--color-gris-texto': '#1f3a1f',
            '--color-gris-claro': '#bbf7d0',
            '--color-verde-btn': '#15803d',
            '--color-rojo-btn': '#b91c1c',
            '--color-fondo-input': '#dcfce7',
            '--color-fondo-body': '#d1fae5',
            '--color-fondo-tarjeta': '#f0fdf4',
            '--color-texto-principal': '#0f2e0f',
            '--color-texto-nombre': '#0f2e0f',
            '--color-fondo-gradiente-inicio': '#d1fae5',
            '--color-fondo-gradiente-fin': '#bbf7d0',
        }
    }
};

let temaActual = 'light';

function aplicarTema(tema) {
    temaActual = tema;
    const vars = TEMAS[tema].vars;
    const root = document.documentElement;
    Object.entries(vars).forEach(([prop, val]) => root.style.setProperty(prop, val));

    const ini = vars['--color-fondo-gradiente-inicio'];
    const fin = vars['--color-fondo-gradiente-fin'];
    const gradiente = `linear-gradient(135deg, ${ini} 0%, ${fin} 100%)`;

    document.querySelectorAll('.pantalla-bienvenida, .pantalla-seleccion-carrera').forEach(p => {
        p.style.background = gradiente;
    });
    document.querySelectorAll('.pantalla-configuracion, .pantalla-simulador').forEach(p => {
        p.style.backgroundColor = vars['--color-fondo-body'];
    });
    document.body.style.backgroundColor = vars['--color-fondo-body'];

    document.querySelectorAll('.tarjeta-curso, .acordeon, .seccion-selector-ciclo').forEach(el => {
        el.style.backgroundColor = vars['--color-fondo-tarjeta'];
    });
    document.querySelectorAll('.tarjeta-curso-nombre, .curso-nombre').forEach(el => {
        el.style.color = vars['--color-texto-nombre'];
    });

    /* Actualizar ícono y label del botón trigger */
    const info = TEMAS[tema];
    const partes = info.label.split(' ');
    const icono = partes[0];
    const nombre = partes.slice(1).join(' ');
    const elIcono = document.getElementById('tema-icono-activo');
    const elLabel = document.getElementById('tema-label-activo');
    if (elIcono) elIcono.textContent = icono;
    if (elLabel) elLabel.textContent = nombre;

    /* Marcar opción activa en el dropdown */
    document.querySelectorAll('.tema-opcion').forEach(b => {
        b.classList.toggle('activo', b.dataset.tema === tema);
    });

    localStorage.setItem('intranotas_tema', tema);
}

function toggleDropdownTema() {
    const contenedor = document.getElementById('contenedor-tema');
    contenedor.classList.toggle('abierto');
}

function seleccionarTema(tema) {
    aplicarTema(tema);
    document.getElementById('contenedor-tema').classList.remove('abierto');
}

function inicializarTema() {
    const guardado = localStorage.getItem('intranotas_tema') || 'light';
    aplicarTema(guardado);
}

/* ============================================================
   INICIALIZACIÓN
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    inicializarTema();
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(r => console.log('SW registrado:', r.scope))
            .catch(e => console.log('SW error:', e));
    }
});