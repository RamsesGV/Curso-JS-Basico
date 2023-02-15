let miAuto = {
    marca: 'toyota', 
    modelo:'corolla',
    annio: 2020,
    detalleDelAuto: function () { 
        console.log(`auto ${this.modelo} ${this.annio}`)
    }
}

miAuto.marca
miAuto.annio
miAuto.detalleDelAuto()
