let autos = [] 
let autosnuevos = 0
let cantResgister = 0

function Auto (marca,modelo,annio) {
     this.marca = marca
     this.modelo = modelo 
     this.annio = annio 

}
autosnuevos = prompt('cuantos autos desea registrar')

while(cantResgister < autosnuevos) { 
    let marca = prompt('marca: ')
    let modelo = prompt('modelo: ')
    let annio = prompt ('annio: ')

    var autoNuevo = new Auto(marca,modelo,annio)

    autos.unshift(autoNuevo)
    cantResgister++
}
console.log(autos)