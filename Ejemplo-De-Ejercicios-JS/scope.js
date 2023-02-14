var nombre = 'ramses' //scope global 

function saludo () { 
    var apellido = 'Garay'    //scope local o scope de bloque 
    console.log(`hola ${nombre} ${apellido}`)
}

saludo()