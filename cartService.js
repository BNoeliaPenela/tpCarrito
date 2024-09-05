function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("productosDulces")); /* JSON.parse sirve para converir el string del LocalStorage a su tipo de dato original, array, objeto, etc.*/
    console.log(memoria);
    let cuenta = 0;
    if (!memoria){
        const nuevoProd = getNuevoProdMemoria(producto);       
        localStorage.setItem("productosDulces", JSON.stringify([nuevoProd]));/* En el localSotrage no se pueden guardar arrays u objetos, slo se pueden guardar strings. Hay que transformar el objeto de nuevoProd y el array que contiene el objeto enun String. JSON.stringify te permite hacer eso.*/
        cuenta = 1;

    }else{
        const indiceProd = memoria.findIndex(productoDulce => productoDulce.id === producto.id);
        console.log(indiceProd);
        const nuevaMemoria = memoria;
        if(indiceProd === -1){            
            nuevaMemoria.push(getNuevoProdMemoria(producto));
            cuenta = 1;
        } else{
            nuevaMemoria[indiceProd].cantidad++;    
            cuenta = nuevaMemoria[indiceProd].cantidad;      
        }
        localStorage.setItem("productosDulces", JSON.stringify(nuevaMemoria));
        
    }
    actualizarNumeroCarrito();
    return cuenta;
}

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("productosDulces"));
    const indiceProd = memoria.findIndex(productoDulce => productoDulce.id === producto.id);
    if(memoria[indiceProd].cantidad === 1){
        memoria.splice(indiceProd, 1);
        
    } else{
        memoria[indiceProd].cantidad--;
    }
    localStorage.setItem("productosDulces", JSON.stringify(memoria));
    actualizarNumeroCarrito();

}
/** toma un producto, le agregar cantidad 1 y lo devuelve*/

function getNuevoProdMemoria(producto){
    const nuevoProd = producto;
    nuevoProd.cantidad = 1;
    return nuevoProd;
}

const cuentaCarritoElement = document.getElementById("cuenta-carrito");

function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("productosDulces"));
    if(memoria && memoria.length > 0){
        const cuenta = memoria.reduce((acum, current) => acum+ current.cantidad,0);/**reduce() sirve para agarrar un array de cosas y reducirlas a un solo valor. Tiene dos argumentos (valorAcumulado, valorActual)*/
        cuentaCarritoElement.innerText = cuenta;  
    
    } else{
        cuentaCarritoElement.innerText = 0;
    }
    
    

}

actualizarNumeroCarrito()
