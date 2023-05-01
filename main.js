let producto = prompt("ingrese el producto");
while (
 producto != "zapatos" &&
 producto != "camisas" &&
 producto != "vestidos" &&
 producto != "sombreros"
) {
 alert("artículo sin promoción");
 usuario = prompt("ingrese el producto");
}
alert("artículo con descuento");

let color = prompt("ingrese color de la etiqueta");
if (color === "rojo") {
 alert("50% de descuento");
} else if (color === "verde") {
 alert("30% de descuento");
} else if (color === "amarillo") {
 alert("15% de descuento");
} else {
 alert("sin descuento");
}
function calculadora(precio, porcentajeDescuento, operacion) {
 switch (operacion) {
  case "*":
   return precio * porcentajeDescuento;
   break;
  case "-":
   var descuento = precio * (porcentajeDescuento / 100);
   return precio - descuento;
 }
}
let precio = parseInt(prompt("precio"));
let porcentajeDescuento = Number(prompt("descuento"));
let operacion = prompt("Ingrese la operacion");
let resultado = calculadora(precio, porcentajeDescuento, operacion);
alert(`Total : ${resultado}`);
