//TALLER EVALUATIVO LÓGICA CON JAVASCRIPT
//El siguiente taller evaluativo está dividido en dos secciones, una teórica y otra práctica. Ambas deben ser sustentadas.
//Parte teórica:
//Usted deberá hacer un resumen de estudio sobre los siguientes temas:
//Tipos de datos, variables, constantes, conversiones, operadores aritméticos-relacionales-lógicos, expresiones, jerarquías, condicionales, switch-case, ciclos. Sobre tal resumen se le preguntará y evaluará. El resumen lo debe presentar el día de la sustentación en formato pdf.
//Parte práctica:
//1. Dada el siguiente algoritmo:

/*let edad = 21;
if (edad == 15){
 console.log("Tiene 15");
}
if (edad == 20){
 console.log("Tiene 20");
}
if (edad == 30){
 console.log("Tiene 30");
}
if (edad != 15 && edad != 20 && edad != 30){
 console.log("Introduzca una edad válida");
}*/

//realice el mismo algoritmo usando otra estructura de control más conveniente.

/*let edad = 21;
switch (edad) {
    case 15:{
        if (edad == 15){
            console.log("Tiene 15");
           }
        break;
    }
    case 20:{
        if (edad == 20){
            console.log("Tiene 20");
           }
        break;
    }
    case 30:{
        if (edad == 30){
            console.log("Tiene 30");
           }
        break;
    }
    default:{
        if (edad != 15 && edad != 20 && edad != 30){
            console.log("Introduzca una edad válida")
           }
        break;
    }
}*/

//2. Use ciclo for para imprimir los números de -28 a 222 de forma ascendente. Use otro ciclo for para imprimir los números de -28 a 222 de forma descendente. Use incremento y decremento en la variable control del ciclo for.

/*let x = -28
let y = 222

if (x <= y){
    for (let index = x; index <= y; index++) {
        console.log(index);
    };
} else {
    console.log("Error, x no es menor o igual que y");
}


if (y >= x){
    for (let index = y; index >= x; index--) {
        console.log(index);
    };
} else {
    console.log("Error, y no es mayor o igual que x");
}*/

//3. Use ciclo while para imprimir los números entre n y m (n, m dados por el usuario).

/*let n = parseInt(prompt("Ingrese el valor de n"))
let m = parseInt(prompt("Ingrese el valor de m"))
if(n <= m){while(n <= m){
    console.log(n)
    n+=1
    };
} else if (n >= m){while(n >= m){
    console.log(n)
    n-=1
    };
}*/

//4. En una tienda de ropa si un cliente compra un pantalón que vale $80000 obtiene un descuento del 10%, si el cliente compra el pantalón más una camisa que cuesta $90000, entonces el descuento sobre el total de la compra será del 25%. Cree un programa que cumpla con los requerimientos de la tienda. Use condicionales y operadores lógicos.

/*const pantalón = 80000;
const camisa = 90000;
console.log(`cada pantalón vale: ${pantalón} y cada camisa vale: ${camisa}`);
let cantidadPantalones = parseInt(prompt("Ingrese la cantidad de pantalones que desea comprar"));
let cantidadCamisas = parseInt(prompt("Ingrese la cantidad de camisas que desea comprar"));
let valorPantalones = cantidadPantalones * pantalón;
let valorCamisas = cantidadCamisas * camisa;
let valorCompra = valorPantalones + valorCamisas;

if (cantidadPantalones > 0 && cantidadCamisas > 0) {
    console.log(` El valor de la compra es: ${valorCompra * 0.75}`);
} else if (cantidadPantalones > 0) {
    console.log(` El valor de la compra es: ${valorCompra * 0.90}`);
} else if (cantidadCamisas > 0){
    console.log(` El valor de la compra es: ${valorCompra}`);
} else {
    console.log("Error, no se agregaron productos al carro");
}*/

//5. En una empresa, los empleados trabajan en horario normal de 08:00 a.m. a 12:00 p.m. y de 02:00 p.m. a 06:00 p.m. Sin embargo, algunos trabajadores trabajan horas nocturnas (después de las 06:00 p.m.), por las cuales tienen derecho a una bonificación de $2.000 (dos mil pesos) por hora nocturna trabajada. Cree en un programa que, primero pregunte al usuario si el trabajador ha trabajado horas nocturnas este mes, en caso de no haberlas trabajado el programa debe mostrar el siguiente mensaje: “usted no tiene derecho a bonificación este mes”. Si el trabajador ha trabajado horas nocturnas durante el mes, entonces el programa debe solicitar al usuario el número de horas nocturnas trabajadas y luego mostrar un mensaje con el valor de la bonificación a la que tiene derecho el trabajador, por ejemplo: “su bonificación este mes es de: 80000 pesos”. Use funciones.

/*function valorHoraNocturna(cantidadHorasNocturnas) {
    const valorBonificacionPorHoraNocturna = 2000
    let valorHorasNocturnas = cantidadHorasNocturnas * valorBonificacionPorHoraNocturna
    return valorHorasNocturnas
}


function valorBonificacionMes(){
    let preguntaTrabajoHorasNocturnas = prompt("Trabajo en horas nocturnas este mes? si/no")
    if (preguntaTrabajoHorasNocturnas.toLowerCase() === "si"){
        let cantidadHorasNocturnas = parseInt(prompt("Ingrese la cantidad de horas trabajadas en horas nocturnas(despues de las 06:00p.m)"));
        if (cantidadHorasNocturnas > 0) {
            console.log(`El valor de la Bonificacion de este mes es de ${valorHoraNocturna(cantidadHorasNocturnas)} pesos`);
        } else console.log("usted no tiene derecho a bonificación de este mes");
    } else if (preguntaTrabajoHorasNocturnas.toLowerCase() === "no") {
        console.log("Usted no tiene derecho a bonificación este mes.");
    } else {
        console.log("Error, ingrese si o no.");
    }
}

valorBonificacionMes();*/

//6. Un número perfecto es aquel cuya suma de sus divisores(no se incluye el mismo número)es igual a él mismo. Por ejemplo, 6 es un número perfecto, ya que los divisores de 6 son el 1, el 2 , y el 3 y al sumar estos divisores obtenemos el mismo número: 1 + 2 + 3 = 6. Cree un programa que obtenga los números perfectos entre 1 y n(n introducido por el usuario), y los muestre. Use funciones.

/*function esNumeroPerfecto(numero) {
    if (numero <= 1) {
        return false;
    }
    
    let sumaDivisores = 1; // Comenzamos con 1 porque todo número es divisible por 1
    
    // Se itera desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
            if (i !== numero / i) {
                sumaDivisores += numero / i;
            }
        }
    }
    
    // Si la suma de divisores es igual al número, es perfecto
    return sumaDivisores === numero;
}

function encontrarNumerosPerfectos(n) {
    let numerosPerfectos = "";
    let primero = true;
    
    for (let numero = 1; numero <= n; numero++) {
        if (esNumeroPerfecto(numero)) {
            if (!primero) {
                numerosPerfectos += ", ";
            }
            numerosPerfectos += numero;
            primero = false;
        }
    }
    
    return numerosPerfectos;
}

function mostrarNumerosPerfectosHastaN() {
    let n = parseInt(prompt("Introduce un número entero positivo para encontrar los números perfectos hasta ese número:"));
    
    if (n != Number || n <= 0) {
        console.log("Debes introducir un número entero positivo válido.");
        return;
    } else {
    
    let numerosPerfectos = encontrarNumerosPerfectos(n);
    
    console.log(`Los números perfectos hasta ${n} son: ${numerosPerfectos}`);
    }
}

mostrarNumerosPerfectosHastaN();*/