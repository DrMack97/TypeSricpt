"use strict";
// ==========================================
//  INTERFACES Y TIPOS
//  En TS definimos la "forma" de los datos antes de usarlos.
//  JS no tiene esto — TS lo añade para detectar errores antes de ejecutar.
// ==========================================
// ==========================================
//  DATOS
// ==========================================
// TS infiere automáticamente que esto es Producto[] (array de Producto)
// gracias a la interface definida arriba
const productos = [
    { id: 'p1', nombre: 'Camiseta básica', precio: 19.99 },
    { id: 'p2', nombre: 'Pantalón chino', precio: 39.99 },
    { id: 'p3', nombre: 'Zapatillas urbanas', precio: 59.99 },
    { id: 'p4', nombre: 'Sudadera', precio: 34.99 },
];
// Tipado explícito: TS sabe que seleccionados es un Carrito (objeto de Productos)
// En JS era solo {} — aquí TS garantiza que solo entran objetos Producto
let seleccionados = {};
// ==========================================
//  REFERENCIAS AL DOM
//  En JS: getElementById devuelve HTMLElement | null (cualquier elemento)
//  En TS: usamos "as HTMLTipoConcreto" para decirle al compilador el tipo exacto
//         Esto nos da acceso a propiedades específicas (.value, .checked, etc.)
// ==========================================
// "as HTMLElement" — elemento genérico (tiene .innerHTML, .classList, .textContent...)
const prodGrid = document.getElementById('prod-grid');
const cartItems = document.getElementById('cart-items');
const emptyMsg = document.getElementById('empty-msg');
const summarySection = document.getElementById('summary-section');
const counter = document.getElementById('counter');
const palabrasCount = document.getElementById('palabras-count');
const okBadge = document.getElementById('ok-badge');
const pedidoResumen = document.getElementById('pedido-resumen');
// "as HTMLTextAreaElement" — específico de textarea: tiene .value, .rows, .cols...
// Sin el cast, TS no sabría que tiene .value y marcaría error al usarlo
const notasTextarea = document.getElementById('notas');
// "as HTMLButtonElement" — específico de button: tiene .disabled, .type...
const btnComprar = document.getElementById('btn-comprar');
// ==========================================
//  RENDERIZAR PRODUCTOS
// ==========================================
function renderProductos() {
    // ": void" significa que la función no devuelve ningún valor
    // En JS las funciones sin return devuelven undefined implícitamente
    prodGrid.innerHTML = '';
    productos.forEach((producto) => {
        // "producto: Producto" — TS sabe exactamente qué propiedades tiene cada item
        // En JS era solo "producto" sin garantías de qué contenía
        const card = document.createElement('div');
        card.className = 'prod-card' + (seleccionados[producto.id] ? ' selected' : '');
        card.id = 'card-' + producto.id;
        card.innerHTML = `
            <div class="prod-name">${producto.nombre}</div>
            <div class="prod-price">${formatPrecio(producto.precio)}</div>
        `;
        card.addEventListener('click', () => toggleProducto(producto.id));
        prodGrid.appendChild(card);
    });
}
// ==========================================
//  TOGGLE PRODUCTO
// ==========================================
function toggleProducto(id) {
    // "id: string" — TS garantiza que solo se puede llamar con un string
    // Si intentaras llamar toggleProducto(123) TS marcaría error en tiempo de compilación
    if (seleccionados[id]) {
        delete seleccionados[id];
    }
    else {
        // find() devuelve Producto | undefined en TS
        // El operador "!" al final (non-null assertion) le dice a TS: "confía en mí, no es undefined"
        // porque sabemos que el id siempre existe en el array productos
        seleccionados[id] = productos.find(p => p.id === id);
    }
    renderProductos();
    actualizarResumen();
    document.getElementById('prod-error').classList.remove('show');
}
// ==========================================
//  ACTUALIZAR RESUMEN DEL CARRITO
// ==========================================
function actualizarResumen() {
    // Object.values con un Record<string, Producto> devuelve Producto[]
    // TS lo infiere automáticamente — en JS no había ninguna garantía del tipo
    const items = Object.values(seleccionados);
    counter.textContent = String(items.length);
    // String() convierte el number a string — TS es más estricto: textContent solo acepta string | null
    if (items.length === 0) {
        emptyMsg.style.display = 'block';
        summarySection.classList.add('hidden');
        cartItems.querySelectorAll('.cart-item').forEach((el) => el.remove());
        return;
    }
    emptyMsg.style.display = 'none';
    summarySection.classList.remove('hidden');
    cartItems.querySelectorAll('.cart-item').forEach((el) => el.remove());
    items.forEach((producto) => {
        const fila = document.createElement('div');
        fila.className = 'cart-item';
        fila.dataset.id = producto.id;
        fila.innerHTML = `
            <span>${producto.nombre}</span>
            <span style="display:flex;align-items:center;gap:8px">
                <span style="color:#666;font-size:13px">${formatPrecio(producto.precio)}</span>
                <button class="remove-btn">quitar</button>
            </span>
        `;
        // querySelector devuelve Element | null en TS
        // El operador "?" (optional chaining) evita el error si fuera null:
        // si querySelector devuelve null, no llama a addEventListener — simplemente no hace nada
        fila.querySelector('.remove-btn')?.addEventListener('click', () => toggleProducto(producto.id));
        cartItems.insertBefore(fila, emptyMsg);
    });
    const subtotal = items.reduce((acumulado, p) => acumulado + p.precio, 0);
    // querySelector devuelve Element | null — el cast "as HTMLInputElement" da acceso a .value
    const radioEnvio = document.querySelector('input[name="envio"]:checked');
    const cargoExpress = radioEnvio?.value === 'express' ? 4.99 : 0;
    // radioEnvio?.value — optional chaining: si radioEnvio es null, devuelve undefined (no lanza error)
    const total = subtotal + cargoExpress;
    document.getElementById('subtotal').textContent = formatPrecio(subtotal);
    document.getElementById('envio-precio').textContent = cargoExpress > 0 ? '4,99€' : 'Gratis';
    document.getElementById('total').textContent = formatPrecio(total);
}
// ==========================================
//  EVENTOS EN TIEMPO REAL
// ==========================================
// "this" en una función normal tiene tipo implícito — en TS lo declaramos explícitamente
// "this: HTMLInputElement" indica que dentro de la función, this es un input
document.getElementById('nombre').addEventListener('input', function () {
    const valido = this.value.length >= 4;
    this.classList.toggle('inp-error', !valido && this.value.length > 0);
    document.getElementById('nombre-err').classList.toggle('show', !valido && this.value.length > 0);
});
notasTextarea.addEventListener('input', function () {
    // "this: HTMLTextAreaElement" — TS sabe que tiene .value, .rows, .cols...
    const texto = this.value.trim();
    const numPalabras = texto === '' ? 0 : texto.split(/\s+/).length;
    palabrasCount.textContent = numPalabras + ' palabras';
});
// NodeListOf<HTMLInputElement> — tipo específico para querySelectorAll de inputs
const radiosEnvio = document.querySelectorAll('input[name="envio"]');
radiosEnvio.forEach((radio) => {
    radio.addEventListener('change', actualizarResumen);
});
// ==========================================
//  VALIDACIÓN AL ENVIAR
// ==========================================
btnComprar.addEventListener('click', () => {
    let formularioValido = true;
    if (Object.keys(seleccionados).length === 0) {
        document.getElementById('prod-error').classList.add('show');
        formularioValido = false;
    }
    // getValue: función auxiliar tipada que evita repetir el cast en cada campo
    const nombre = getValue('nombre');
    const email = getValue('email');
    const direccion = getValue('direccion');
    const ciudad = getValue('ciudad');
    const pago = document.getElementById('pago').value;
    // HTMLSelectElement — tipo específico para <select>, tiene .value, .options, .selectedIndex
    if (nombre.length < 4) {
        mostrarError('nombre', 'nombre-err');
        formularioValido = false;
    }
    else {
        limpiarError('nombre', 'nombre-err');
    }
    if (!email.includes('@') || !email.includes('.')) {
        mostrarError('email', 'email-err');
        formularioValido = false;
    }
    else {
        limpiarError('email', 'email-err');
    }
    if (!direccion) {
        mostrarError('direccion', 'dir-err');
        formularioValido = false;
    }
    else {
        limpiarError('direccion', 'dir-err');
    }
    if (!ciudad) {
        mostrarError('ciudad', 'ciudad-err');
        formularioValido = false;
    }
    else {
        limpiarError('ciudad', 'ciudad-err');
    }
    if (!pago) {
        mostrarError('pago', 'pago-err');
        formularioValido = false;
    }
    else {
        limpiarError('pago', 'pago-err');
    }
    const radioEnvio = document.querySelector('input[name="envio"]:checked');
    if (!radioEnvio) {
        document.getElementById('envio-err').classList.add('show');
        formularioValido = false;
    }
    else {
        document.getElementById('envio-err').classList.remove('show');
    }
    // HTMLInputElement — tipo específico para <input>, da acceso a .checked, .value, .type...
    const terminosEl = document.getElementById('terminos');
    if (!terminosEl.checked) {
        document.getElementById('terminos-err').classList.add('show');
        formularioValido = false;
    }
    else {
        document.getElementById('terminos-err').classList.remove('show');
    }
    if (formularioValido && radioEnvio) {
        // "radioEnvio" aquí ya está garantizado como no-null por la condición de arriba
        // TS lo sabe gracias al "type narrowing" — infiere que si llegamos aquí, no es null
        okBadge.classList.remove('hidden');
        const items = Object.values(seleccionados);
        const nombreProductos = items.map((p) => p.nombre).join(', ');
        const tipoEnvio = radioEnvio.value === 'express' ? 'Express (24h)' : 'Estándar (3-5 días)';
        pedidoResumen.classList.remove('hidden');
        pedidoResumen.innerHTML = `
            <p>Pedido confirmado</p>
            <p>
                <strong>Cliente:</strong> ${nombre}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Dirección:</strong> ${direccion}, ${ciudad}<br>
                <strong>Productos:</strong> ${nombreProductos}<br>
                <strong>Pago:</strong> ${pago}<br>
                <strong>Envío:</strong> ${tipoEnvio}<br>
                <strong>Total:</strong> ${document.getElementById('total').textContent}
            </p>
        `;
    }
});
// ==========================================
//  FUNCIONES AUXILIARES
// ==========================================
// Tipos en parámetros: TS garantiza que solo se puede llamar con strings
// Si intentas mostrarError(123, true) → error en compilación, nunca llega al navegador
function mostrarError(inputId, errorId) {
    const input = document.getElementById(inputId);
    if (input)
        input.classList.add('inp-error');
    document.getElementById(errorId).classList.add('show');
}
function limpiarError(inputId, errorId) {
    const input = document.getElementById(inputId);
    if (input)
        input.classList.remove('inp-error');
    document.getElementById(errorId).classList.remove('show');
}
// ": number" en parámetro y ": string" como tipo de retorno
// TS verificará que la función SIEMPRE devuelva un string — si no, error de compilación
function formatPrecio(numero) {
    return numero.toFixed(2).replace('.', ',') + '€';
}
// Función auxiliar: obtiene el .value de un input dado su id
// Retorna string — TS garantiza que siempre devuelve texto, nunca null/undefined
function getValue(id) {
    return document.getElementById(id).value.trim();
}
// ==========================================
//  INICIALIZACIÓN
// ==========================================
renderProductos();
