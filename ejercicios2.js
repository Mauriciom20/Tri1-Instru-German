//1.Cree un programa que tome el lado de un cubo e imprima su volumen.
/*let ladoCubo = parseFloat(prompt("Ingrese valor del lado del cubo"));
    alert('los lados del cubo valen: ' + ladoCubo);
    const volumen = ladoCubo**3;
    alert('el volumen del cubo es: ' + volumen);*/


//Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de 19%.
/*const iva = 0.19;
let precioProducto = parseFloat(prompt("Ingrese valor del precio del producto"));
alert('el precio del producto es: ' + precioProducto);
let ivaDelProducto = precioProducto * iva;
const precioFinal = precioProducto + ivaDelProducto;
alert('el precio final del producto es: ' + precioFinal);*/

//Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de edad o no.
/*let edad = parseInt(prompt("Ingresa la edad"));
let esMayor = (edad >= 18? alert(`usted tiene ` + edad + ` es mayor de edad`) : alert(`usted tiene ` + edad + ` es menor de edad`));*/

//En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos mencionados y muestre si el producto paga IVA o no.

/*const compra = prompt("Ingrese el producto del que desea ver si tiene iva(lentejas, crema, arroz, vino)")
let lentejas = "las lentejas no pagan IVA";
if (compra == "lentejas") {
    alert(lentejas)
    } else {
        ("ingrese un producto valido")
    };
let crema = "la crema paga IVA"
if (compra == "crema") {
    alert(crema)
    } else {
    ("ingrese un producto valido")
    };
let arroz = "el arroz no paga IVA"
if (compra == "arroz") {
    alert(arroz)
    } else {
        ("ingrese un producto valido")
    };
let vino = "el vino paga IVA"
if (compra == "vino") {
    alert(vino)
    } else {
        ("ingrese un producto valido")
    };*/

//Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales también se debe mostrar al usuario.

/*alert("Escribe dos numero para diferenciar cual es mayor o si son iguales");
let x = Number(prompt("Ingrese el primer Numero"));
let y = Number(prompt("Ingrese el segundo Numero"));

if (x > y) {
    alert(`${x} es mayor que ${y}`) 
} else if (y > x){
    alert(`${y} es mayor que ${x}`)
} else if ( x == y){
    alert(`${x} es igual que ${y}`)
} else {
    alert("los datos son incorrectos, ingrese valores numericos")
};*/

//Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un triángulo o no.

/*let angulo1 = parseInt(prompt("Ingrese el valor del primer angulo"));
let angulo2 = parseInt(prompt("Ingrese el valor del segundo angulo"));
let angulo3 = parseInt(prompt("Ingrese el valor del tercer angulo"));

let triangulo = (angulo1 + angulo2 + angulo3) == 180? alert("es un triangulo"): alert("no es un triangulo");*/

//Cree un programa que lea un número y muestre si éste es par o impar (con un modulo)


/*let numero = parseFloat(prompt("Ingrese un numero para identificar si es par o impar"));
let espar = numero % 2 === 0? "es par": "es impar";
    alert(espar);*/

//Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera: 
//Si trabaja 40 horas o menos se le paga $16000 pesos por hora, 
//si trabaja más de 40 horas se le paga $16000 por cada una de las primeras 40 horas y 
//$20000 por cada hora extra.

/*alert("ingrese las horas que a trabajado para saber su salario, si supera las 40 horas se consideran horas extra, (primero se agregan las primeras 40horas y despues se agregan las horas extra)")
let salarioSemanal = ""
let horasTrabajadas = parseInt(prompt("Ingrese el numero de horas trabajadas(1-40)"))
let horasExtra = parseInt(prompt("Ingrese el numero de horas Extra trabajadas")) 
let horasTotales = horasTrabajadas + horasExtra
let valorHorasTrabajadas = horasTrabajadas * 16000
let valorHorasExtra = horasExtra * 20000 
let valorHorasTotales = valorHorasTrabajadas + valorHorasExtra
salarioSemanal = alert(`Su salario semanal es ${valorHorasTotales}`)*/
