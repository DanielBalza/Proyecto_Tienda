// 1. se definen variables 
console.log("¡El archivo JS se cargo correctamente!");

let cantidadCarrito = 0;
let totalPrecio = 0;

// 2. se definen funciones
function agregarAlJuego(nombre, precio) {
    // Sumamos 1 a la cantidad
    cantidadCarrito++;

    // Sumamos el precio al total
    totalPrecio += precio;

    // monstramos un mensaje al usuario
    console.log(`Has añadido ${nombre} al carrito.`);

    // Actualizamos la interfaz
    actualizarInterfaz();

    // validamos el total para que nunca sea valor negativo
    if(totalPrecio < 0) {
        totalPrecio = 0;
        alert("Error en el calculo del precio.");
    }
}

// 3. funcion para monstrar los cambios en la pantalla 
function actualizarInterfaz() {
    const contador =document.getElementById('contador-carrito');
    const visualTotal = document.getElementById('total-precio');

    if(contador) contador.innerText = cantidadCarrito;
    if(visualTotal) visualTotal.innerText = totalPrecio.toFixed(2);
}