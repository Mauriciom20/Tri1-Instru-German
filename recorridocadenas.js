//las cadenas son inmutables
let mensaje1 = "somos adso";
//saber la longitud de la cadean(número de carateres)
console.log("Longitud: ", mensaje1.length);
let mensaje2 = "";
console.log("Longitud: ", mensaje2.length);
//lectura de caracteres. Se leen mediante su índice
//cada caracter se encuentra indexado, siendo el índice del
//primer caracter el 0, el índice del segundo carater el 1...
//el último índice siempre es uno menos que la longitud
console.log("Primer caracter: ", mensaje1[0]);
console.log("último caracter: ", mensaje1[9]);
console.log("caracter cinco: ", mensaje1[5]);
console.log("caracter siete: ", mensaje1[7]);
console.log("caracter no existente: ", mensaje1[15]);
//NO SE PUEDEN MODIFICAR CADENAS, SON INMUTABLES
//mensaje1[2] = "t";

//RECORRIDO DE UNA CADENA
let mensaje = "Somos programadores";
for (let index = 0; index < mensaje.length; index++) {
    console.log(mensaje[index]);//imprimirá cada caracter de la cadena
}

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
