let case1 = 'piedra'
let case2 = 'papel'
let case3 = 'tijera'

let resultado = function (user,ai) {
if  (user === case1 && ai === case2) {  // usuario pierde con piedra contra el papel
console.log('Gano la ai con ' + case2)
} else if (user === case2 && ai === case1) { // gano el usuario con papel contra la piedra 
    console.log('gano el usuario con ' + case2)
} else if (user === case3 && ai === case1) { //  gano la ia con piedra contra tijera
    console.log('gano la ai con ' +case1)
} else if (user === case1 && ai === case3){// gano el usuario con piedra contra tijera
    console.log('gano el usuario con ' + case1) 
} else { 
    console.log('es un ejemplo de codigo basico con condicionales, para practicar deberias acabar de escribir las opciones o buscar una manera mas optima de hacerlo..')

}
}

