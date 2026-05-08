// ==========================================
//  INTERFACES Y TIPOS
//  En TS definimos la "forma" de los datos antes de usarlos.
//  JS no tiene esto — TS lo añade para detectar errores antes de ejecutar.
// ==========================================

// Interface: define exactamente qué propiedades tiene un Producto y de qué tipo
// En JS esto no existe — cualquier objeto podía tener cualquier propiedad
interface Producto {
    id: string;      // Solo puede ser texto, nunca número ni boolean
    nombre: string;
    precio: number;  // Solo puede ser número, nunca texto
}

// Record<string, Producto>: tipo para el objeto "carrito"
// Equivale a { [clave: string]: Producto } — un objeto cuyas claves son strings y valores son Producto
// En JS era simplemente {} sin ninguna garantía de qué contenía
type Carrito = Record<string, Producto>;


// ==========================================
//  DATOS
// ==========================================

// TS infiere automáticamente que esto es Producto[] (array de Producto)
// gracias a la interface definida arriba
const productos: Producto[] = [
    { id: 'p1', nombre: 'Camiseta básica',    precio: 19.99 },
    { id: 'p2', nombre: 'Pantalón chino',     precio: 39.99 },
    { id: 'p3', nombre: 'Zapatillas urbanas', precio: 59.99 },
    { id: 'p4', nombre: 'Sudadera',           precio: 34.99 },
];

// Tipado explícito: TS sabe que seleccionados es un Carrito (objeto de Productos)
// En JS era solo {} — aquí TS garantiza que solo entran objetos Producto
let seleccionados: Carrito = {};


// ==========================================
//  REFERENCIAS AL DOM
//  En JS: getElementById devuelve HTMLElement | null (cualquier elemento)
//  En TS: usamos "as HTMLTipoConcreto" para decirle al compilador el tipo exacto
//         Esto nos da acceso a propiedades específicas (.value, .checked, etc.)
// ==========================================

// "as HTMLElement" — elemento genérico (tiene .innerHTML, .classList, .textContent...)
const prodGrid       = document.getElementById('prod-grid')       as HTMLElement;
const cartItems      = document.getElementById('cart-items')      as HTMLElement;
const emptyMsg       = document.getElementById('empty-msg')       as HTMLElement;
const summarySection = document.getElementById('summary-section') as HTMLElement;
const counter        = document.getElementById('counter')         as HTMLElement;
const palabrasCount  = document.getElementById('palabras-count')  as HTMLElement;
const okBadge        = document.getElementById('ok-badge')        as HTMLElement;
const pedidoResumen  = document.getElementById('pedido-resumen')  as HTMLElement;

// "as HTMLTextAreaElement" — específico de textarea: tiene .value, .rows, .cols...
// Sin el cast, TS no sabría que tiene .value y marcaría error al usarlo
const notasTextarea  = document.getElementById('notas')           as HTMLTextAreaElement;

// "as HTMLButtonElement" — específico de button: tiene .disabled, .type...
const btnComprar     = document.getElementById('btn-comprar')     as HTMLButtonElement;


// ==========================================
//  RENDERIZAR PRODUCTOS
// ==========================================

function renderProductos(): void {
    // ": void" significa que la función no devuelve ningún valor
    // En JS las funciones sin return devuelven undefined implícitamente
    prodGrid.innerHTML = '';

    productos.forEach((producto: Producto) => {
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

function toggleProducto(id: string): void {
    // "id: string" — TS garantiza que solo se puede llamar con un string
    // Si intentaras llamar toggleProducto(123) TS marcaría error en tiempo de compilación
    if (seleccionados[id]) {
        delete seleccionados[id];
    } else {
        // find() devuelve Producto | undefined en TS
        // El operador "!" al final (non-null assertion) le dice a TS: "confía en mí, no es undefined"
        // porque sabemos que el id siempre existe en el array productos
        seleccionados[id] = productos.find(p => p.id === id)!;
    }

    renderProductos();
    actualizarResumen();
    (document.getElementById('prod-error') as HTMLElement).classList.remove('show');
}


// ==========================================
//  ACTUALIZAR RESUMEN DEL CARRITO
// ==========================================

function actualizarResumen(): void {
    // Object.values con un Record<string, Producto> devuelve Producto[]
    // TS lo infiere automáticamente — en JS no había ninguna garantía del tipo
    const items: Producto[] = Object.values(seleccionados);

    counter.textContent = String(items.length);
    // String() convierte el number a string — TS es más estricto: textContent solo acepta string | null

    if (items.length === 0) {
        emptyMsg.style.display = 'block';
        summarySection.classList.add('hidden');
        cartItems.querySelectorAll('.cart-item').forEach((el: Element) => el.remove());
        return;
    }

    emptyMsg.style.display = 'none';
    summarySection.classList.remove('hidden');
    cartItems.querySelectorAll('.cart-item').forEach((el: Element) => el.remove());

    items.forEach((producto: Producto) => {
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

    const subtotal: number = items.reduce((acumulado: number, p: Producto) => acumulado + p.precio, 0);

    // querySelector devuelve Element | null — el cast "as HTMLInputElement" da acceso a .value
    const radioEnvio = document.querySelector('input[name="envio"]:checked') as HTMLInputElement | null;
    const cargoExpress: number = radioEnvio?.value === 'express' ? 4.99 : 0;
    // radioEnvio?.value — optional chaining: si radioEnvio es null, devuelve undefined (no lanza error)

    const total: number = subtotal + cargoExpress;

    (document.getElementById('subtotal')     as HTMLElement).textContent = formatPrecio(subtotal);
    (document.getElementById('envio-precio') as HTMLElement).textContent = cargoExpress > 0 ? '4,99€' : 'Gratis';
    (document.getElementById('total')        as HTMLElement).textContent = formatPrecio(total);
}


// ==========================================
//  EVENTOS EN TIEMPO REAL
// ==========================================

// "this" en una función normal tiene tipo implícito — en TS lo declaramos explícitamente
// "this: HTMLInputElement" indica que dentro de la función, this es un input
(document.getElementById('nombre') as HTMLInputElement).addEventListener('input', function (this: HTMLInputElement) {
    const valido: boolean = this.value.length >= 4;
    this.classList.toggle('inp-error', !valido && this.value.length > 0);
    (document.getElementById('nombre-err') as HTMLElement).classList.toggle('show', !valido && this.value.length > 0);
});

notasTextarea.addEventListener('input', function (this: HTMLTextAreaElement) {
    // "this: HTMLTextAreaElement" — TS sabe que tiene .value, .rows, .cols...
    const texto: string = this.value.trim();
    const numPalabras: number = texto === '' ? 0 : texto.split(/\s+/).length;
    palabrasCount.textContent = numPalabras + ' palabras';
});

// NodeListOf<HTMLInputElement> — tipo específico para querySelectorAll de inputs
const radiosEnvio = document.querySelectorAll('input[name="envio"]') as NodeListOf<HTMLInputElement>;
radiosEnvio.forEach((radio: HTMLInputElement) => {
    radio.addEventListener('change', actualizarResumen);
});


// ==========================================
//  VALIDACIÓN AL ENVIAR
// ==========================================

btnComprar.addEventListener('click', () => {
    let formularioValido: boolean = true;

    if (Object.keys(seleccionados).length === 0) {
        (document.getElementById('prod-error') as HTMLElement).classList.add('show');
        formularioValido = false;
    }

    // getValue: función auxiliar tipada que evita repetir el cast en cada campo
    const nombre    = getValue('nombre');
    const email     = getValue('email');
    const direccion = getValue('direccion');
    const ciudad    = getValue('ciudad');
    const pago      = (document.getElementById('pago') as HTMLSelectElement).value;
    // HTMLSelectElement — tipo específico para <select>, tiene .value, .options, .selectedIndex

    if (nombre.length < 4)                            { mostrarError('nombre', 'nombre-err');   formularioValido = false; }
    else                                              { limpiarError('nombre', 'nombre-err'); }

    if (!email.includes('@') || !email.includes('.')) { mostrarError('email', 'email-err');     formularioValido = false; }
    else                                              { limpiarError('email', 'email-err'); }

    if (!direccion)                                   { mostrarError('direccion', 'dir-err');   formularioValido = false; }
    else                                              { limpiarError('direccion', 'dir-err'); }

    if (!ciudad)                                      { mostrarError('ciudad', 'ciudad-err');   formularioValido = false; }
    else                                              { limpiarError('ciudad', 'ciudad-err'); }

    if (!pago)                                        { mostrarError('pago', 'pago-err');       formularioValido = false; }
    else                                              { limpiarError('pago', 'pago-err'); }

    const radioEnvio = document.querySelector('input[name="envio"]:checked') as HTMLInputElement | null;
    if (!radioEnvio) {
        (document.getElementById('envio-err') as HTMLElement).classList.add('show');
        formularioValido = false;
    } else {
        (document.getElementById('envio-err') as HTMLElement).classList.remove('show');
    }

    // HTMLInputElement — tipo específico para <input>, da acceso a .checked, .value, .type...
    const terminosEl = document.getElementById('terminos') as HTMLInputElement;
    if (!terminosEl.checked) {
        (document.getElementById('terminos-err') as HTMLElement).classList.add('show');
        formularioValido = false;
    } else {
        (document.getElementById('terminos-err') as HTMLElement).classList.remove('show');
    }

    if (formularioValido && radioEnvio) {
        // "radioEnvio" aquí ya está garantizado como no-null por la condición de arriba
        // TS lo sabe gracias al "type narrowing" — infiere que si llegamos aquí, no es null
        okBadge.classList.remove('hidden');

        const items: Producto[] = Object.values(seleccionados);
        const nombreProductos: string = items.map((p: Producto) => p.nombre).join(', ');
        const tipoEnvio: string = radioEnvio.value === 'express' ? 'Express (24h)' : 'Estándar (3-5 días)';

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
                <strong>Total:</strong> ${(document.getElementById('total') as HTMLElement).textContent}
            </p>
        `;
    }
});


// ==========================================
//  FUNCIONES AUXILIARES
// ==========================================

// Tipos en parámetros: TS garantiza que solo se puede llamar con strings
// Si intentas mostrarError(123, true) → error en compilación, nunca llega al navegador
function mostrarError(inputId: string, errorId: string): void {
    const input = document.getElementById(inputId) as HTMLElement | null;
    if (input) input.classList.add('inp-error');
    (document.getElementById(errorId) as HTMLElement).classList.add('show');
}

function limpiarError(inputId: string, errorId: string): void {
    const input = document.getElementById(inputId) as HTMLElement | null;
    if (input) input.classList.remove('inp-error');
    (document.getElementById(errorId) as HTMLElement).classList.remove('show');
}

// ": number" en parámetro y ": string" como tipo de retorno
// TS verificará que la función SIEMPRE devuelva un string — si no, error de compilación
function formatPrecio(numero: number): string {
    return numero.toFixed(2).replace('.', ',') + '€';
}

// Función auxiliar: obtiene el .value de un input dado su id
// Retorna string — TS garantiza que siempre devuelve texto, nunca null/undefined
function getValue(id: string): string {
    return (document.getElementById(id) as HTMLInputElement).value.trim();
}


// ==========================================
//  INICIALIZACIÓN
// ==========================================

renderProductos();
