const contenedorTarjetas = document.getElementById("productos-container")

function crearTarjetasProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoProdD = document.createElement("div");
        nuevoProdD.classList = "tarjeta-producto";
        nuevoProdD.innerHTML =  
            /*<img src="./img/dulce/${producto.id}.jpg">   (otra opcion para mostrar las imagenes cuando todas tienen la misma extencion)*/
        `<img src=${producto.img}> 
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button>Agregar al carrito</button>`
        /*backticks*/
        
            
        contenedorTarjetas.appendChild(nuevoProdD);
        nuevoProdD
            .getElementsByTagName("button")[0]
            .addEventListener("click", () => agregarAlCarrito(producto));
        
            
    });
}

crearTarjetasProductosInicio(productosDulces)