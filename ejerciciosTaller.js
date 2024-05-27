//Ejercicio # 1 
//Dados el sueldo acual y la categoria de un empleao, calcular el aumento correspondiente de acuerdo a la tabla: /Categoria - aumento/ 1 - 12% / 2 - 10 %/ 3 / 8% / 4 - 5 %/

/*let sueldoActual = Number(prompt("Ingrese el sueldo actual"));
let categoriaEmpleado = Number(prompt("Ingrese su categoria (1 a 4)"));
let aumento = categoriaEmpleado == 1? sueldoActual * 0.12 : categoriaEmpleado == 2? sueldoActual * 0.1 : categoriaEmpleado == 3? sueldoActual * 0.08 : categoriaEmpleado == 4? sueldoActual * 0.05 : alert(`Error, digite una categoria valida (1 a 4)`);
let sueldoConAumento = sueldoActual + aumento;
if(categoriaEmpleado == 1 && sueldoActual == Number && sueldoActual >= 0){
    alert(`Su aumento es ${sueldoConAumento}`);
    } else if(categoriaEmpleado == 2 && sueldoActual == Number){
    alert(`Su aumento es ${sueldoConAumento}`);
    } else if(categoriaEmpleado == 3 && sueldoActual == Number){
    alert(`Su aumento es ${sueldoConAumento}`);
    } else if(categoriaEmpleado == 4 && sueldoActual == Number){
    alert(`Su aumento es ${sueldoConAumento}`);
    } else if(sueldoActual != Number){
        alert(`Error, Ingrese el sueldo en digitos numericos`);
    } else if(sueldoActual < 0){
        alert(`Error, Ingrese el sueldo con valores positivo`);
    } else alert(`Error`)*/

//Ejercicio # 2
//Escriba un programa que, dado el sueldo de un empleado, aplique un aumento del 12% si su sueldo es infeior a $300.000, o aplique un aumento del 10% si su trabajo es inferior a $500.000 y 5 % en caso contrario. Se debe mostrar el nuevo sueldo del trabajador

/*let sueldoEmpleado = Number(prompt("Ingrese el sueldo actual"));
let aumento = sueldoEmpleado >=0 && sueldoEmpleado <= 300000? sueldoEmpleado * 0.12 : sueldoEmpleado <= 500000? sueldoEmpleado * 0.1 : sueldoEmpleado > 500000? sueldoEmpleado * 0.08 : alert(`Error, ingrese el sueldo en digitos numericos positivos`);
let sueldoTrabajador = sueldoEmpleado + aumento;
alert(`Su aumento es ${sueldoTrabajador}`);*/

//Ejercicio # 3
//Un agricultor desea saber el costo de produccion de un cultivo de acuerdo a la semilla seleccionada, conociendo el numero de semillas que utilizara y el costo de cada semilla para seleccionar la semilla. (tabla. / tipo - valor cada semilla / cebolla larga - 1500 / cebolla de huevo - 1300 / papa ciolla - 8000 / papa pastusa - 9000 / papa salentuna - 1100 / tomate chonto - 1500)
//Si el valor de produccion del producto seleccionado es mayor a 30000 el gobierno subsidiara 32%, pero si es mayor o igual a 50000 el gobierno subsidiara el 68%.

/*let costoDeProduccionCultivoSemilla;
let seleccionarSemilla = prompt("seleccione el tipo de semilla que desea: \ncebolla larga o cebolla de huevo \npapa criolla, papa pastusa o papa salentuna \ntomate chonto").toLocaleLowerCase();
let cantidadSemillas = Number(prompt("seleccione la cantidad de semillas que desea"));
let costoCadaSemilla = seleccionarSemilla == "cebolla larga"? costoDeProduccionCultivoSemilla = 1500 * cantidadSemillas : seleccionarSemilla == "cebolla de huevo"? costoDeProduccionCultivoSemilla = 1300 * cantidadSemillas : seleccionarSemilla == "papa criolla"? costoDeProduccionCultivoSemilla = 8000 * cantidadSemillas : seleccionarSemilla == "papa pastusa"? costoDeProduccionCultivoSemilla = 9000 * cantidadSemillas : seleccionarSemilla == "papa salentuna"? costoDeProduccionCultivoSemilla = 1100 * cantidadSemillas : seleccionarSemilla == "tomate chonto"? costoDeProduccionCultivoSemilla = 1500 * cantidadSemillas : alert(`Error, digite valores validos`);
console.log(costoDeProduccionCultivoSemilla);
let descuento = costoDeProduccionCultivoSemilla >= 50000? costoDeProduccionCultivoSemilla * 0.68 : costoDeProduccionCultivoSemilla >= 30000? costoDeProduccionCultivoSemilla * 0.32 : 0;

costoDeProduccionCultivoSemilla = costoDeProduccionCultivoSemilla >= 50000? costoDeProduccionCultivoSemilla - descuento : costoDeProduccionCultivoSemilla + console.log("No hay descuento");
alert(costoDeProduccionCultivoSemilla);*/

//Ejercicio # 4
//De un estudiante se tienen 3 notas parciales. Se desea obtener la nota definitiva aplicando los porcentajes 30%, 30% y 40% respectivamente(funcionalidad 1). De acuerdo a la definitiva en este curso, recibira un descuento para el proximo curso (si lo gana) o una multa (si lo pierde), de acuerdo a la siguiente tabla. Debe solicitar el valor del curso. /Definitiva - Descuento - Multa/ 0.0 a 0.9 - 0 - 40% / 1.0 a 1.9 - 0 - 20% / 2.0 a 2.9 - 0 - 10% / 3.0 a 3.9 - 20% - 0 / 4.0 a 4.4 - 30% - 0 / 4.5 a 5.0 - 40% - 0 /

/*let validacionNotas;
let validacionValorCurso;
let ValidacionValorCursoTotal;
let nota1 = parseFloat(prompt("Ingrese el valor de la nota 1(0 a 5)"));
let nota2 = parseFloat(prompt("Ingrese el valor de la nota 2(0 a 5)"));
let nota3 = parseFloat(prompt("Ingrese el valor de la nota 3(0 a 5)"));
let notaDefinitiva = (nota1 >= 0 && nota1 <= 5 ? nota1 * 0.30: alert('Error, ingrese valores de nota valido(nota 1)')) + (nota2 >= 0 && nota2 <= 5 ? nota2 * 0.30: alert('Error, ingrese valores de nota valido(nota 2)')) + (nota3 >= 0 && nota3 <= 5 ? nota3 * 0.40 : alert('Error, ingrese valores de nota valido(nota 3)'));

validacionNotas = notaDefinitiva >= 0 && notaDefinitiva <= 5 ? true : false;
if(validacionNotas == true) {
    alert(`Su nota definitiva es ${notaDefinitiva}`);
    } else {
        console.log('Error, ingrese valores de nota valido');
    };

let valorCurso = parseInt(prompt("Ingrese el valor del curso"));
validacionValorCurso = valorCurso >= 0 ? true :  + false;
if(validacionNotas == true) {
    alert(`El valor del curso es ${valorCurso}`);
    } else {
        console.log('Error, ingrese un valor de curso valido');
    };

let descuento = notaDefinitiva >=0.0 && notaDefinitiva <= 0.9 ? valorCurso * 0.40 : notaDefinitiva <= 1.9 ? valorCurso * 0.20 : notaDefinitiva <= 2.9 ? valorCurso * 0.10 : notaDefinitiva <= 3.9 ? valorCurso * 0.30 : notaDefinitiva <= 4.4 ? valorCurso * 0.30 : notaDefinitiva <= 5.0 ? valorCurso * 0.40 : console.log('Error en notas y/o en valor del curso(descuento)');
console.log('Su descuento es ' + descuento);

let valorTotal = notaDefinitiva <= 2.9 ? valorCurso + descuento : notaDefinitiva <= 5.0? valorCurso - descuento : console.log('Error en notas y/o en valor del curso(valorTotal)');
console.log(`El valor del curso es ${valorCurso}`);

if (ValidacionValorCursoTotal = validacionNotas == true && validacionValorCurso == true) {
        alert(`El valor a pagar por el proximo curso es ${valorTotal}`);
    } else if (ValidacionValorCursoTotal = validacionNotas == true && validacionValorCurso == false) {
        alert('Error, ingrese un valor de curso valido');
    } else if(ValidacionValorCursoTotal = validacionNotas == false && validacionValorCurso == true) {
        alert('Error, ingrese valores de nota valido');
    } else {
        console.log("Error, ingrese valores validos");
    }*/
