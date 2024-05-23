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

//3. Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera: 
//Si trabaja 40 horas o menos se le paga $16000 pesos por hora, 
//si trabaja más de 40 horas se le paga $16000 por cada una de las primeras 40 horas y 
//$20000 por cada hora extra.

/*alert("ingrese las horas que a trabajado esta semana para saber su salario, si supera las 40 horas se consideran horas extra, (primero se agregan las primeras 40horas y despues se agregan las horas extra)")
let salarioSemanal = ""
let horasTrabajadasSemana = parseInt(prompt("Ingrese el numero de horas trabajadas(1-40)"))
let horasExtraSemana = parseInt(prompt("Ingrese el numero de horas Extra trabajadas")) 
let horasTotalesSemana = horasTrabajadasSemana + horasExtraSemana
alert(`Trabajo un total de ${horasTotalesSemana} horas`)
let valorHorasTrabajadasSemana = horasTrabajadasSemana * 16000
let valorHorasExtraSemana = horasExtraSemana * 20000 
let valorHorasTotales = valorHorasTrabajadasSemana + valorHorasExtraSemana
salarioSemanal = alert(`Su salario semanal es ${valorHorasTotales}`)*/

//4. Escriba un programa que dado el sueldo de un empleado aplique un aumento del 12% si su sueldo es inferior a $300.000, o aplique un aumento del 10% si su sueldo es infrior a $500.000 y 5% en caso contrario. Se debe mostrar el nuevo sueldo del trabajador.

//Ejercicio #4

/*let sueldoEmpleado = parseInt(prompt("Ingrese el sueldo del empleado"))
let aumentoSueldo = sueldoEmpleado >= 0 && sueldoEmpleado <= 300000? sueldoEmpleado * 0.12 : sueldoEmpleado <= 500000? sueldoEmpleado * 0.10 : sueldoEmpleado > 500000? sueldoEmpleado * 0.05 : 0
let sueldoTotal = sueldoEmpleado + aumentoSueldo 
let validacion = sueldoEmpleado >= 0 && sueldoEmpleado != Number? alert(`El sueldo del trabajador es ${sueldoTotal}`) : alert('Error, ingrese un valor valido')*/

//5. De un estudiante se tienen 3 notas parciales. Se desea obtener la nota definitiva aplicando los porcentajes 30%, 30% y 40% respectivamente. De acuedo a la definitiva en este curso, recibirá un descuento para el próximo curso (si lo gana) o una multa (si lo pierde), de acuerdo a la siguiente tabla. Debe solicitar el valor del curso. Definitiva - Descuento o Multa / 0.0 - 1.9 - +40% / 2.0 - 2.9 - +20% / 3.0 - 4.4 - -30% / 4.5 - 5.0 - -40% /

/*let validacionNotas
let validacionValorCurso
let ValidacionValorCursoTotal
let nota1 = parseFloat(prompt("Ingrese el valor de la nota 1(0 a 5)"))
let nota2 = parseFloat(prompt("Ingrese el valor de la nota 2(0 a 5)"))
let nota3 = parseFloat(prompt("Ingrese el valor de la nota 3(0 a 5)"))
let notaDefinitiva = (nota1 >= 0 && nota1 <= 5 && nota1 != Number? nota1 * 0.30: alert('Error, ingrese valores de nota valido(nota 1)')) + (nota2 >= 0 && nota2 <= 5 && nota2 != Number? nota2 * 0.30: alert('Error, ingrese valores de nota valido(nota 2)')) + (nota3 >= 0 && nota3 <= 5 && nota3 != Number? nota3 * 0.40 : alert('Error, ingrese valores de nota valido(nota 3)'))
validacionNotas = notaDefinitiva >= 0 && notaDefinitiva <= 5 && notaDefinitiva != Number? true : console.log('Error, ingrese valores de nota valido') + false

let valorCurso = parseInt(prompt("Ingrese el valor del curso"))
validacionValorCurso = valorCurso >= 0 && valorCurso != Number? true : alert('Error, ingrese un valor de curso valido') + false

let descuento = notaDefinitiva <= 1.9 ? valorCurso * 0.40 : notaDefinitiva <= 2.9 ? valorCurso * 0.20 : notaDefinitiva <= 4.4 ? valorCurso * 0.30 : notaDefinitiva <= 5.0? valorCurso * 0.40 : console.log('Error en notas y/o en valor del curso(descuento)')

let valorTotal = notaDefinitiva <= 1.9 ? valorCurso + descuento : notaDefinitiva <= 2.9 ? valorCurso + descuento : notaDefinitiva <= 4.4 ? valorCurso - descuento : notaDefinitiva <= 5.0? valorCurso - descuento : console.log('Error en notas y/o en valor del curso(valorTotal)')
if (ValidacionValorCursoTotal = validacionNotas == true && validacionValorCurso == true) 
    {alert(`El valor a pagar por el curso es ${valorTotal}`) 
    } else if (ValidacionValorCursoTotal = validacionNotas == true && validacionValorCurso == false) {
        alert('Error, ingrese un valor de curso valido')
    } else if(ValidacionValorCursoTotal = validacionNotas == false && validacionValorCurso == true) {
        alert('Error, ingrese valores de nota valido')
    } else console.log("Error, ingrese valores validos")
console.log(ValidacionValorCursoTotal)*/
