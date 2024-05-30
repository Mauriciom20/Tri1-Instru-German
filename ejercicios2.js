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

//Crear un programa en Javascript que matricule a un aspirante en un programa del SENA. Los programas disponibles son >: ADSO, SEGURIDAD DIGITAL, ANALITICA DE DATOS. 
//Los requisitos son: Ser bachiller para el ADSO, para el resto de programas el requisito es tener hasta 9 grado aprobado. También, tener cédula o cédula de extranjería. También, estar de acuerdo con el reglamento del aprendiz.

/*let programas = prompt("Escriba el programa al que desea maricularse: ADSO, SEGURIDAD DIGITAL, ANALITICA DE DATOS")
alert(`Antes de empezar la matricula debes cumplir con los siguientes requisitos: Tener cedula o cedula de extranjeria, estar de acuerdo con el reglamento del aprendiz,tener hasta 9° aprobado(SEGURIDAD DIGITAL, ANALITICA DE DATOS), ser bachiller(ADSO)`)
let documentoDeIdentificacion = Number(prompt("Escriba su cedula o cédula de extranjería"))
let reglamentoDelAprendiz = prompt("Esta de acuerdo con el reglamento del aprendiz?(Si / No)")
let novenoGrado = prompt("Tienes hasta 9° aprobado?(Si / No)")
let bachiller = prompt("Eres Bachiller?(Si / No)")

let requisitosAdso = (documentoDeIdentificacion == Number? true : false) + (reglamentoDelAprendiz == "si" || "Si"? true : false) + (bachiller == "si" || "Si"? true : false) 
let requisitosSeguridadDigital = (documentoDeIdentificacion == Number? true : false) + (reglamentoDelAprendiz == "si" || "Si"? true : false) + (novenoGrado || bachiller == "si" || "Si"? true : false) 
let requisitosAnaliticaDeDatos= (documentoDeIdentificacion == Number? true : false) + (reglamentoDelAprendiz == "si" || "Si"? true : false) + (novenoGrado || bachiller == "si" || "Si"? true : false) 

let matricula = programas == "adso" || "ADSO"? requisitosAdso : programas == "seguridad digital" || "Seguridad digital" || "SEGURIDAD DIGITAL"? requisitosSeguridadDigital : programas == "analitica de datos" || "Analitica de datos" ||"ANALITICA DE DATOS"? requisitosAnaliticaDeDatos : alert(`No se Escogio ningun programa`)
if(matricula == requisitosAdso){
    alert(`estas matriculado en ADSO`)
    } else if (matricula == requisitosSeguridadDigital){
        alert(`estas matriculado en SEGURIDAD DIGITAL`)
    } else if(matricula == requisitosAnaliticaDeDatos) {
        alert(`estas matriculado en ANALITICA DE DATOS`)
    } else console.log("Error")*/

//El batallon de Alta montaña necesita un programa que informe si un aspirante es apto o no para entrar a las fuerzas militares y de ser apto, debe calcular el valor que debe pagar el aspirante. De cada aspirante se tienen cuatro atributos: genero, dad, estatura, resultado del Icfes. Se considera que una persona es apta si cumple las siguienes consiciones:
//Hombres / Genero: M - Estatura: 1.70 en adelante - Edad: 18 a 25 - Resultado Icfes: 60 puntos en adelante / Mujeres / Genero: F - Estatura: 1.50 en adelante - Edad: 18 a 28 - Resultado Icfes: 60 puntos en adelante
//El valor de la matricula es 11.800.000 y se aplica un descuento o un aumento que esta dado por el resultado de los ICFES: / Hombres y Mujeres / Datos: - D: Descuento y A: Aumento/ Menor de 65pto - A: 25% / Entre 66 y 70pto. edad>22 - N/A / Entre 66 y 70pto. edad<=22 - D: 25% / Mayor 70pto - D: 50%

/*alert("Si desea saber si es apt@ para las fuerzas militares llene los datos a continuacion");
let genero = prompt("Cual es su genero? ('M' para Hombres), ('F' para Mujeres)").toUpperCase();
let edad = parseInt(prompt("Ingrese su edad"));
let estatura = parseFloat(prompt("Ingrese su estatura"));
let resultadoIcfes = Number(prompt("Ingrese el resultado de su prueba ICFES(0-100)"));
let valorMatricula = 11800000;


let validaconResultadoIcfes = resultadoIcfes >=0 && resultadoIcfes <=100? true : alert("Error, Ingrese un valor valido de prueba ICFES(0-100)") + false;
let requisitosHombres = (estatura >= 1.70? true : false) + (edad >= 18 && edad <= 25? true : false) + (resultadoIcfes >= 60? true : false);
let requisitosMujeres = (estatura >= 1.50? true : false) + (edad >= 18 && edad <= 28? true : false) + (resultadoIcfes >= 60? true : false);
let validacionGenero = genero == "M"? requisitosHombres : genero == "F"? requisitosMujeres : alert("Error, ingrese un valor valido (M - Hombres) o (F - Mujeres)")
console.log(`Vg: ${validacionGenero}`)
let aumento
if(resultadoIcfes < 65 && (requisitosHombres == true || requisitosMujeres == true)){
    aumento = valorMatricula * 0.25;
    } else {aumento = 0}
console.log(`Aumento: ${aumento}`)
let descuento
if(resultadoIcfes >= 66 && resultadoIcfes <= 70 && edad > 22 && (requisitosHombres == true || requisitosMujeres == true)){
    descuento = valorMatricula * 0;
    } else if(resultadoIcfes >= 66 && resultadoIcfes <= 70 && edad <= 22 && (requisitosHombres == true || requisitosMujeres == true)){
    descuento = valorMatricula * 0.25;
    } else if(resultadoIcfes > 70 && (requisitosHombres == true || requisitosMujeres == true)){
    descuento = valorMatricula * 0.5;
    } else { 
    descuento = 0
    }
console.log(`Descuento: ${descuento}`);

let ValorPagoAspirante = aumento + valorMatricula - descuento;

if(genero == "M"){
    alert(`eres apto para las fuerzas militares, debes pagar: ${ValorPagoAspirante}`);
    } else if(genero == "F"){
    alert(`eres apta para las fuerzas militares, debes pagar: ${ValorPagoAspirante}`);
    } else console.log("Error");*/
