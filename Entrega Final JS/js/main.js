let ingresarPedido = prompt ("Que te gustaria pedir? \n 1- Picada para 1 \n 2- Picada para 2 \n 3- Picada para 3 \n 4- Picada para 4 \n Para salir escribir SALIR")

let agregarPedido = prompt ("Te gustaria sumar otro pedido? \n 1- Picada para 1 \n 2- Picada para 2 \n 3- Picada para 3 \n 4- Picada para 4 \n Para salir escribir SALIR");

function sumar (n1, n2){
    resultado = n1 + n2;
    alert (`El total de su pedido es $ ${resultado}`)
}

let opcion1 = 0
let opcion2 = 0

if (ingresarPedido != "SALIR") {
    if (ingresarPedido == 1) {
        alert ("La Picada para 1 vale $2190");
        opcion1 = 2190
    }
    else if (ingresarPedido == 2) {
        alert ("La Picada para 2 vale $2990");
        opcion1 = 2990
    }
    else if (ingresarPedido == 3) {
        alert ("La Picada para 3 vale $3590");
        opcion1 = 3590
    }
    else if (ingresarPedido == 4) {
        alert ("La Picada para 4 vale $4090");
        opcion1 = 4090
    }
    else if (ingresarPedido == "SALIR") {
        alert ("Gracias, hasta la proxima"); 
    }
    else {
        alert ("Valor no válido");
    }
}

if (agregarPedido != "SALIR") {
    if (agregarPedido == 1) {
        alert ("La Picada para 1 vale $2190");
        opcion2 = 2190
    }
    else if (agregarPedido == 2) {
        alert ("La Picada para 2 vale $2990");
        opcion2 = 2990
    }
    else if (agregarPedido == 3) {
        alert ("La Picada para 3 vale $3590");
        opcion2 = 3590
    }
    else if (agregarPedido == 4) {
        alert ("La Picada para 4 vale $4090");
        opcion2 = 4090
    }
    else if (agregarPedido == "SALIR") {
        alert ("Gracias, hasta la proxima"); 
    }
    else {
        alert ("Valor no válido");
    }
}

let total = sumar (opcion1, opcion2)
//alert (`El total de su pedido es ${total}`)