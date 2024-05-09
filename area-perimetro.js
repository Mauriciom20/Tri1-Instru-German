/*
Cree un programa que tome el radio de un círculo e imprima su área y perímetro de tal manera que no admita longitudes negativas.
*/
//DATOS DE ENTRADA
const pi = 3.1416;


let radio = ""
radio = parseFloat(prompt("Ingrese radio"));
    if (radio < 0) {
        alert("El radio no puede ser negativo.");
    } else {
    
    alert("tu radio es: " + radio)
    //PROCESO
    let area = pi*radio**2;
    let perimetro = 2*pi*radio;
    //SALIDA
    alert("Area: " + area + " Perimetro: " + perimetro);
    }