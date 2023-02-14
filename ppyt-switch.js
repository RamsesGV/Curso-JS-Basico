
const juego = function (user,ia) { 
 
switch(true) { 
case user === ia: 
console.log ('empate')
break; 

case user === piedra && ia === 2: 
console.log('gano la pc con papel')
break;

case user === papel && ia === 3:
console.log('gano la Pc con tijeras')
break;

case user === tijera && ia === 1: 
console.log('gano la pc con piedra')

case ia === 1 && user === papel: 
console.log('gano el usuario con papel')
break;

case ia === 2 && user === tijera:
console.log('gano el usuario con tijeras')
break;

case ia === 3 && user === piedra: 
console.log('gano el usuario con piedra')
break

default:
console.log('no tienes ni idea de que estas haciendo')
}


}
juego(2,PC)

