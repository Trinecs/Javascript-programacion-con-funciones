let ingreso = prompt (
    "Que picada te gustaria pedir? \n 1-Picada para 1 \n 2-Picada para 2 \n 3-Picada para 3 \n 4-Picada para 4 \n Para salir ingresa SALIR"
);
while (ingreso != "SALIR") {
    switch (ingreso) {
        case "1":
            alert ("La Picada para 1 vale $2190");
            break;
        case "2":
            alert ("La Picada para 2 vale $2990");
            break;
        case "3":
            alert ("La Picada para 3 vale $3590");
            break;
        case "4":
            alert ("La Picada para 4 vale $4090");
            break;

        default:
            alert ("Opción no válida");
            break;
    }
    ingreso = prompt (
        "Que picada te gustaria pedir? \n 1-Picada para 1 \n 2-Picada para 2 \n 3-Picada para 3 \n 4-Picada para 4"
    );
    if (ingreso == "SALIR") alert ("Gracias, hasta la proxima");
}