/*comentario de bloque
Cree un programa que tome la base y la altura de un triángulo e imprima su área*/

//comentario de una línea

/*parseFloat toma un string y lo convierte a un numero flotante
o sea decimal
por qué la base es flotante? porque, la base de un triángulo 
puede ser entera o decimal*/
//ENTRADA DE DATOS
let base = ""
base =parseFloat(prompt("Ingrese la base"));
    if (base < 0) {
        alert("la base no puede ser negativa.");
    } else {
        alert("La base de tu triangulo es: " + base)
    }

let altura = ""
altura = parseFloat(prompt("Ingrese la altura"));
    if (altura < 0) {
        alert("la altura no puede ser negativa.");
    } else {
        alert("La altura de tu triangulo es: " + altura)
   
    //PROCESO
    const area = base * altura / 2;
    //SALIDA
    alert("El area del triangulo es: " + area + " U cuadradas");
    }

