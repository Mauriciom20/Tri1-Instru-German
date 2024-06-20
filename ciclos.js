/*CICLOS: SIRVEN PARA REPETIR INSTRUCCIONES 
EL CICLO FOR FUNCIONA CON UN ITERADOR QUE 
GENERALEMNTE SE LLAMA index(puede tern cualquier nombre)
este , iterador o variable del ciclo tiene un
valor inicial, luego va aumentando o disminuyendo,
de tal menera que la condicion(va en el centro,
después del primer ;). Mientras la condición se
cumpla, el ciclo iterará(se ejecutará). Si la
condición siempre es verdadera el ciclo es infinito.
*/
//mostrar los números del 1 al 9

for (let index = 1; index <= 9; index++) {
    //bloque de instrucciones del ciclo
    console.log(index);
}

//un programa que imprima los números
// entre n y m, con n < m, n m enteros
let n = parseInt(prompt("Ingrese n"));
let m = parseInt(prompt("Ingrese m"));

if (n < m){
    for (let index = n; index <= m; index++) {
        console.log(index);
    }
}else{
    console.log("Ingrese un n menor que m");
}

//un programa que muestre los números entre 50 y 1 en
//orden descendente
for (let index = 50; index >= 1 ; index--) {
    console.log(index);
}*/

/*for (let index = 1; index <= 0; index++) {
    console.log(index);
};*/


// Ejercicio # 1
//Cree un programa que imprima los números enteros entre 0 y 100 en orden ascendente y descendente(puede usar dos ciclos)
/*let x = 0
let y = 100

if (x <= y){
    for (let index = x; index <= y; index++) {
        console.log(index);
    };
} else {
    console.log("Error, x no es menor o igual que y");
}


if (y >= x){
    for (let index = y; index >= x; index++) {
        console.log(index);
    };
} else {
    console.log("Error, y no es mayor o igual que x");
}*/

// Ejercicio # 2
//Cree un programa que imprima la tabla de multiplicar del 3, del 0 al 50.

/*let x = 3
let y = 1
if (x >= y){
    for (let index = x; index <= 50; y++) {
        console.log(index);
        index = x * y;
    };
} else {
    console.log("Error, x no es menor o igual que y");
}*/

// Ejercicio # 3
//Cree un programa que calcule el promedio de tres notas para n estudiantes.
