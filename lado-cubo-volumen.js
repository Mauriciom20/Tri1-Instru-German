//1.Cree un programa que tome el lado de un cubo e imprima su volumen.
/*let ladoCubo = parseFloat(prompt("Ingrese valor del lado del cubo"))
    alert('los lados del cubo valen: ' + ladoCubo)
    const volumen = ladoCubo**3
    alert('el volumen del cubo es: ' + volumen)*/


//Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de 19%.
/*const iva = 0.19
let precioProducto = parseFloat(prompt("Ingrese valor del precio del producto"))
alert('el precio del producto es: ' + precioProducto)
let ivaDelProducto = precioProducto * iva
const precioFinal = precioProducto + ivaDelProducto
alert('el precio final del producto es: ' + precioFinal)*/

//Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de edad o no.
/*let edad = parseInt(prompt("Ingresa la edad"))
let esMayor = (edad >= 18? alert(`usted tiene ` + edad + ` es mayor de edad`) : alert(`usted tiene ` + edad + ` es menor de edad`))*/

//En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos mencionados y muestre si el producto paga IVA o no.

const compra = prompt("Ingrese el producto del que desea ver si tiene iva(lentejas, crema, arroz, vino)")
let lentejas = "las lentejas si pagan IVA"
if (compra == "lentejas") {
    alert(lentejas)
    } else {
        ("ingrese un producto valido")
    }
let crema = "la crema no paga IVA"
if (compra == "crema") {
    alert(crema)
    } else {
    ("ingrese un producto valido")
    }
let arroz = "el arroz si paga IVA"
if (compra == "arroz") {
    alert(arroz)
    } else {
        ("ingrese un producto valido")
    }
let vino = "el vino no paga IVA"
if (compra == "vino") {
    alert(vino)
    } else {
        ("ingrese un producto valido")
    }
