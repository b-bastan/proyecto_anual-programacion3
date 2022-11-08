const contenedor = document.getElementById("contenedorItems")

fetch("datos.json")
.then(res => res.json())
.then(data => setTimeout(() => {
    const productos = data.productos;
    console.log(productos);
    productos.forEach(element => {
        console.log(element);
        createElementDOM(element);
    });
    document.getElementById("recuento").innerHTML = productos.length;
}, 3000));

function createElementDOM(element) {
    contenedor.innerHTML += `<div class="item"><p>Producto: ${element.nombre}</p><p>ID: ${element.id}</p><p>Precio: ${element.precio}</p><p>Categoría: ${element.categoria}</p></div>`
}
