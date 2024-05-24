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

/*let costoDeProduccionCultivoSemilla
let seleccionarSemilla = prompt("seleccione el tipo de semilla que desea: \ncebolla: larga o de huevo \npapa: criolla, pastusa o salentuna \ntomate: chonto").toLocaleLowerCase()
let cantidadSemillas = Number(prompt("seleccione la cantidad de semillas que desea"))
let costoCadaSemilla = seleccionarSemilla == "cebolla larga"? costoDeProduccionCultivoSemilla = 1500 * cantidadSemillas : seleccionarSemilla == "cebolla de huevo"? costoDeProduccionCultivoSemilla = 1300 * cantidadSemillas : seleccionarSemilla == "papa criolla"? costoDeProduccionCultivoSemilla = 8000 * cantidadSemillas : seleccionarSemilla == "papa pastusa"? costoDeProduccionCultivoSemilla = 9000 * cantidadSemillas : seleccionarSemilla == "papa salentuna"? costoDeProduccionCultivoSemilla = 1100 * cantidadSemillas : seleccionarSemilla == "tomate chonto"? costoDeProduccionCultivoSemilla = 1500 * cantidadSemillas : alert(`Error, digite valores validos`)
alert(costoDeProduccionCultivoSemilla)*/
