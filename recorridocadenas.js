/*Ejercicio # 1
Dada la cadena “Javascript es un buen lenguaje”:
a) Leer e imprimir los elementos de índices 3, 6, 8
b) Recorra la cadena usando ciclo for*/

/*let mensaje1 = "Javascript es un buen lenguaje"

console.log("Longitud: ", mensaje1[3]);
console.log("Longitud: ", mensaje1[6]);
console.log("Longitud: ", mensaje1[8]);
console.log("Longitud: ", mensaje1.length);

for (let index = 0; index < mensaje1.length; index++) {
    console.log(mensaje1[index]);
    
}*/

/*Ejercicio # 2

Dada la cadena “Somos SENA”:
c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”
d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
variable contadora para contar el número de veces que se encuentra la letra “o*/

/*let mensaje2 = "Somos SENA"
let letraO = 0

console.log("Longitud: ", mensaje2.length);

for (let index = 0; index < mensaje2.length; index++) {
    let caracter = mensaje2[index];
    console.log(caracter);
    if (caracter === "E"|| caracter === "e"){
        console.log("La cadena contiene la letra E");
    } else (console.log(""))
}

for (let i = 0; i < mensaje2.length; i++) {
    caracter = mensaje2[i];
    if(caracter === "O" || caracter === "o"){
        letraO++
    }
}
console.log(`La letra O aparece ${letraO} veces`);*/

/*Ejercicio # 3
Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está
compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d.*/

/*let mensaje3 = "Javascript es genial";
let cantidadPalabras = 1;

console.log("Longitud: ", mensaje3.length);

for (let index = 0; index < mensaje3.length; index++) {
    let caracter = mensaje3[index];
    if (caracter == " ") {
        cantidadPalabras++;
    }
    console.log(caracter);
}

console.log(`La cadena contiene ${cantidadPalabras} palabras`);*/
