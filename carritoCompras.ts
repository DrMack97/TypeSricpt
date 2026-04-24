/**
 * Carrito de Compras Simple
 * 
 * Un usuario puede:
 * 1. Ver productos disponibles
 * 2. Agregar productos al carrito
 * 3. Ver el carrito
 * 4. Calcular el total
 * 5. Aplicar descuento si el total > 100€
 */

// Define los productos
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
}

interface ItemCarrito {
    productoId: number;
    cantidad: number;
}

const productos: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 800, stock: 5 },
    { id: 2, nombre: "Mouse", precio: 25, stock: 15 },
    { id: 3, nombre: "Teclado", precio: 70, stock: 8 },
    { id: 4, nombre: "Monitor", precio: 300, stock: 3 }
];

// Carrito: array de {productoId, cantidad}
const carrito: ItemCarrito[] = [];

// ===== FUNCIONES =====

function mostrarProductos(): void {
    console.log("\n=== PRODUCTOS DISPONIBLES ===");
    productos.forEach(p => {
        console.log(`[${p.id}] ${p.nombre} - ${p.precio}€ (Stock: ${p.stock})`);
    });
}

function agregarAlCarrito(productoId: number, cantidad: number): void {
    console.log(`== agg al carrito ==`)

    //let productoEncontrado = null
    let productoEncontrado: Producto | null = null;
    
    productos.forEach(producto  => {     //  productos.forEach //element = producti
        if (productoId === producto.id )
            
            productoEncontrado = producto;   //asi se asigna 
    });
    
        // ¿El producto existe?
    if (productoEncontrado === null) {
        console.log("Producto no encontrado");
        return;     
        // Al usar return, TypeScript sabe que si el código sigue, ya no es null
    }
    
        // ¿Hay stock suficiente?
    if(cantidad > productoEncontrado.stock){
        console.log(" no lo hay")
        return;
    }
    

    // ¿Ya está en el carrito? (actualizar cantidad o agregar)
        //arreglo
    const itemEnCarrito = carrito.find(item => item.productoId === productoId);  
    
    // actializar (ya existe)
    if(itemEnCarrito){
        itemEnCarrito.cantidad += cantidad;
        console.log("cantidad actualizada en el carrito");
    
    }else{//o agregar
        carrito.push({ productoId, cantidad})
        console.log("Producto nuevo agregado al carrito");
    }

    productoEncontrado.stock -= cantidad;
    console.log("stock actualizado")
                
        

}
    
    
    
    


function calcularTotal(): number {
    // Recorre el carrito
    // Por cada item: busca el producto, multiplica precio × cantidad
    // Suma todo
    
    // AQUÍ TIENES QUE ESCRIBIR LA LÓGICA
    return 0;
}

function aplicarDescuento(total: number): number {
    // Si total > 100, aplica 10% de descuento
    // Si total > 200, aplica 15% de descuento
    
    // AQUÍ TIENES QUE ESCRIBIR LA LÓGICA
    return total;
}

// PRUEBA
mostrarProductos();
agregarAlCarrito(1, 1);      // 1 laptop
agregarAlCarrito(2, 2);      // 2 mouses
agregarAlCarrito(3, 1);      // 1 teclado

console.log("\n=== CARRITO ===");
console.log(carrito);

const totalSinDescuento = calcularTotal();
const totalFinal = aplicarDescuento(totalSinDescuento);

console.log(`\nTotal sin descuento: ${totalSinDescuento}€`);
console.log(`Total final: ${totalFinal}€`);