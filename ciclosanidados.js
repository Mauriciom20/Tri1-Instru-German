/*CICLOS - FINAL
Parte 1:
Usted es contratado por la empresa BioGenetics S.A. para crear un conjunto de programas de
experimentación para su unidad de desarrollo e investigación llamada LabSADN (Laboratorio de
Secuenciación del ADN). Como ellos saben que usted no es un experto conocedor del tema, ellos le dicen
que no se preocupe, que para crear los programas solamente necesita saber lo siguiente:
El ADN es la sigla de Ácido DesoxirriboNucleico, el cual es el material que almacena toda la
información genética de un ser vivo.
La información en el ADN se almacena como un código compuesto por cuatro bases químicas:
Adenina (A), Timina (T), Citosina (C) y Guanina (G), para formar unidades llamadas pares de bases.
https://medlineplus.gov/spanish/genetica/entender/basica/adn/
Para resolver el literal b, y hacer una selección aleatoria de las dos bases solicitadas, básese en el
siguiente artículo: https://www.w3schools.com/js/js_random.asp
Cristiana, una joven investigadora del LabSADN, necesita un conjunto de programas que le ayuden a
generar e imprimir cadenas de ADN de una longitud indicada por ella y además que dichas cadenas
cumplan ciertas condiciones. Cada uno de los siguientes puntos debe ser un programa diferente.
a. La cadena está formada por una única base: Adenina (A), Timina (T), Citosina (C) o Guanina (G),
según se indique al momento de ejecutar el programa.
b. La cadena tiene únicamente dos de las cuatro bases (seleccionadas aleatoriamente) y ubicadas en
cualquier posición y orden dentro de la cadena.
c. La cadena tiene una longitud múltiplo de 10 y la distribución de las bases debe respetar que: la
cantidad de Citosina (C) es cuatro veces la cantidad de Guanina, Timina (T) es dos veces la cantidad de
Guanina y Adenina (A) es tres veces la cantidad de Guanina. La cadena debe tener cuatro bases.
El programa debe garantizar que el usuario ingrese una longitud múltiplo de 10. Si esta condición no se
cumple, el programa debe informar y solicitar nuevamente los datos.*/

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

function baseSolicitada(){
    let baseSolicitada = random(1, 4);
    console.log(`b: ${baseSolicitada}`);
    if (baseSolicitada >= 1 && baseSolicitada <= 4){
        baseSolicitada == 1? baseSolicitada = adenina : baseSolicitada == 2? baseSolicitada = citosina : baseSolicitada == 3? baseSolicitada = guanina : baseSolicitada == 4? baseSolicitada = guanina
    : "ERROR"};
}

let adenina = "A";//1
let citosina = "C";//2
let guanina = "G";//3
let timina = "T";//4

let baseSolicitada1 = random(1, 4);
console.log(`b1: ${baseSolicitada1}`);
let baseSolicitada2 = random(1, 4);
console.log(`b1: ${baseSolicitada2}`);
let baseSolicitada3 = random(1, 4);
console.log(`b1: ${baseSolicitada2}`);
let baseSolicitada4 = random(1, 4);
console.log(`b1: ${baseSolicitada2}`);

if (baseSolicitada1 >= 1 && baseSolicitada1 <= 4){
    baseSolicitada1 == 1? baseSolicitada1 = adenina : baseSolicitada1 == 2? baseSolicitada1 = citosina : baseSolicitada1 == 3? baseSolicitada1 = guanina : baseSolicitada1 == 4? baseSolicitada1 = guanina
: "ERROR"};

if (baseSolicitada2 >= 1 && baseSolicitada2 <= 4){
    baseSolicitada2 == 1? baseSolicitada2 = adenina : baseSolicitada2 == 2? baseSolicitada2 = citosina : baseSolicitada2 == 3? baseSolicitada2 = guanina : baseSolicitada2 == 4? baseSolicitada2 = guanina
: "ERROR"};

if (baseSolicitada3 >= 1 && baseSolicitada3 <= 4){
    baseSolicitada3 == 1? baseSolicitada3 = adenina : baseSolicitada3 == 2? baseSolicitada3 = citosina : baseSolicitada3 == 3? baseSolicitada3 = guanina : baseSolicitada3 == 4? baseSolicitada3 = guanina
: "ERROR"};

if (baseSolicitada4 >= 1 && baseSolicitada4 <= 4){
    baseSolicitada4 == 1? baseSolicitada4 = adenina : baseSolicitada4 == 2? baseSolicitada4 = citosina : baseSolicitada4 == 3? baseSolicitada4 = guanina : baseSolicitada4 == 4? baseSolicitada4 = guanina
: "ERROR"};

let programaQueSeDeseaEjecutar = prompt("Ingresa el programa que desea ejecutar(1(cadena de una base), 2(cadena de 2 bases) o 3(cadena de 4 bases))");
let longitudCadena = prompt("indique la longitud de la cadena");
switch(programaQueSeDeseaEjecutar == Number) {
    case programaQueSeDeseaEjecutar == 1:{
        let cadenaA = baseSolicitada1;

        for (let index = 1; index < longitudCadena; index++) {
            cadenaA = cadenaA + baseSolicitada1;
        }
        console.log(`La primera cadena ejecuta: `, cadenaA);
        break;
    }
    case programaQueSeDeseaEjecutar == 2:{
        let cadenaB1 = baseSolicitada1;
        let cadenaB2 = baseSolicitada2;
        let cadenaB = ""
        for (let index = 1; index < longitudCadena; index++) {
            cadenaB1 = cadenaB1 + baseSolicitada1;
            cadenaB2 = cadenaB2 + baseSolicitada2;
            cadenaB = (cadenaB1 + cadenaB2)
        }
        
        console.log(`La primera cadena ejecuta: `, cadenaB);
    break;
    }
    case programaQueSeDeseaEjecutar == 3:{
        let cadenaC = " "
        console.log(cadenaC);
    break;
    }
    default:
        console.log("Error");
        break;
}

