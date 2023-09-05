alert("Bienvenidos a CITYCELL - Cotizamos tu celular");
function cotizador() {
alert("Cotizamos tu celular");

let precio = 0;
let desperfectos = true;
let quitaValor = 0;
let repetir = true;

do{
let marca = prompt("Que celular tenes? IPHONE SAMSUNG");
let memoria = prompt("Que memoria tenes? 250 512");
if (marca === "IPHONE" && memoria === "250") {
    precio = 600;
} else if (marca === "IPHONE" && memoria === "512") {
    precio = 1000;
} else if (marca === "SAMSUNG" && memoria === "250") {
    precio = 500;
} else if (marca === "SAMSUNG" && memoria === "512") {
    precio = 900;
} else {
    alert("No trabajamos ese celular");
}
alert("El precio de tu celular es " + precio);

if (precio !=0) {
desperfectos = confirm("Tiene desperfectos?");
switch(desperfectos){
case desperfectos = true:
    let pantalla = prompt("tiene la pantalla rota? SI - NO")
    if(pantalla === "SI"){
        quitaValor = 300;
        break;
    }
    else{
        quitaValor = 0;
        break;
    }
case desperfectos = false:
    quitaValor = 0;
    break;
}
}
let valor = precio - quitaValor;

alert("El valor final de tu celular es " + valor);
repetir = confirm("¿Queres cotizar otro celular?")
}
while (repetir)
}

cotizador()
