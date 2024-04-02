let vendedor = "Ulises"
let vendedorId = "Ulises123"
let vendedorIdIngresado
let vendedorIngresado
let sesionIniciada = false

do {
    let vendedorIngresado = prompt("Ingrese nombre de vendedor")
    let vendedorIdIngresado = prompt("Ingrese ID") 
    if (vendedorIngresado === vendedor && vendedorIdIngresado === vendedorId) {sesionIniciada = true}
    
} while (sesionIniciada === false)


if (sesionIniciada) {
    alert("Bienvenido al sistema")
}
alert ("Calcule el monto del margen de su negocio")
let mensaje = "1 para Elastic Engineering\n2 para Servicios Profesionales\n3 para renventa de Infraestructura\n0 para salir"
let servicio = Number(prompt(mensaje))
let monto
const EE = .45
const PS = .50
const REVENTA = .05
while (servicio !== 0) {
    let monto = Number(prompt("Ingrese monto de venta"))
    if (servicio === 1) {
        alert("El resultado " + ((monto / (1-EE)) - (monto)))
    } else if (servicio === 2) {
        alert("El resultado " + ((monto / (1-PS)) - (monto)))
    } else if (servicio === 3) {
        alert("El resultado " + ((monto / (1-REVENTA)) - (monto)))}
    servicio = Number(prompt(mensaje))
}