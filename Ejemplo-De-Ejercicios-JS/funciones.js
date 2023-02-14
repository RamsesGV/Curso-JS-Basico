// funciones declarativas 

function miFuncion () { 
    return 3
}

// funciones de expresion 
var miFuncion = function(a,b) {
    return a + b;
}


// Ejemplo funcion declarativa
function saludarEstudiantes (estudiante) {
     console.log(`hola ${estudiante}`)
}

function saludarEstudiantes (estudiante) {
    console.log(estudiante)
}

function sumar (a,b) { 
    return a + b 
}