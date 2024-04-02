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

let mensaje = "1 para Elastic Engineering\n2 para Servicios Profesionales\n3 para renventa de Infraestructura\n0 para salir"
let servicio = Number(prompt(mensaje))
let monto
while (servicio > 0) {
    let monto = Number(prompt("Ingrese monto de venta"))

    if (opcion === 1) {
        alert("Resultado" + (monto * 1.45))
    } else if (opcion === 2) {
        alert("Resultado" + (monto * 1.667))
    } else if (opcion === 3) {
        alert("Resultado" + (monto * 1.07))}
    servicio = Number(prompt(mensaje))
}