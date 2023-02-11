# Curso-JS-Basico
APUNTES
1.- JavaScript tiene una comunidad enorme de desarrolladores que te pueden ir ayudando a generar diferentes cosas.

Si solo estuvieras interesado en trabajar aplicaciones web tienes muchos frameworks y librerías construidas en JavaScript que te van a ayudar a hacer proyectos de forma mucho mas rápida, eficiente y robusta (Angular, View, React,entre otros)

Si no quieres trabajar solo en aplicaciones Web puedes utilizar JavaScript con un framework que se llama React Native para poder construir aplicaciones nativas como Android y IOS.

Puedes construir aplicaciones de escritorio con JavaScript, usando un framework llamado Electron, pueden correr en Mac o Windows.

También puedes trabajar en la parte del Back-end o **IOT **(Internet Od Things) es un concepto que se refiere a una interconexion digital de objetos cotidianos con Internet. Esto con un Framework llamado NodeJS, el cual es un entorno de ejecución de JavaScript que corre directamente en el Back-end.

<img src="https://imgur.com/bfqmMoy.png" alt="js">
--------------------------------------------------------------------------

<h1>Resumen</h1>

¿Cómo nace Javascript?
Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros.

¿Qué es Javascript?
Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.

Débilmente tipado
Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc). Ejemplo:

4 + "7"; // 47
4 * "7"; // 28
2 + true; // 3
false - 3; // -3

Dinámico
Corre directamente en la etapa de Runetime sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores se muestren hasta que se ejecuta el programa.

¿Realmente es Javascript un lenguaje interpretado?
Si, y la razón es que le navegador lee linea por linea nuestro código el cuál le indica lo que tiene que hacer, sin la necesidad de compilar. Todo esto es controlado por el motor de Javascript V8 del navegador
Javascript es Basckwards Compatible
Todas las funciones nuevas que salen de Javascript no dañarán el trabajo ya hecho, pero no se podrá utilizar en nuestro entorno de trabajo inmediatamente. Para solucionar esto está Babel que permite utilizar las nuevas características del lenguaje pero lo transforma a una versión que el navegador pueda entender.

–

Espero les sea de utilidad 😉

--------------------------------------------------------------------------

<h1>VALORES</h1>

PRIMITIVOS: son los valores básicos que se utilizan para poder generar códigos.

Número: data sólo de tipo numérico, ejem: 1 2 3 4, etc.

Strig: texto, se utiliza entre comillas dobles. “Haciendo esto”, “Diego Hernández”

Boolean o Booleano: son valores creados por George Boolean dentro de lenguajes de programación para poder validar cosas y/o desiciones, por ello se utilizan: true (1) o false (0).

Empty values: null o undefined, se les conoce como valores “placeholders”, pero son valores reservados para un tipo de valor que queda faltante en memoria. También pueden ser tomados como valores de errores.

NO PRIMITIVOS O VALORES TIPO OBJETOS:

Array: se genera ocupando corchetes, los cuales dentro ocupan valores primitivos, ejem: [1,2,3] convirtiéndolos en valores tipo objeto.

Valor tipo Objeto: se generan con corchetes, los cuales dentro ocupan una data que se transforma en objeto, ejem de sintaxis: { nombre: “Diego”}.

--------------------------------------------------------------------------
<h1>Formas de declarar una variable</h1>

Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: var, const y let.

Var: Era la forma en que se declaraban las variables hasta ECMAScript 5. Casi ya no se usa porque es de forma global y tiene las siguientes características:

o Se puede reinicializar: osea todas las variables se inicializan, por ejemplo:
Var pokemonType = ‘electric’ entonces reinicializar es:
Var pokemonType = ‘grass’ osea la misma variable con diferentes datos el último dato predomina.
o Se puede reasignar: osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: Var pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’ ya no va var
o Su alcance es función global: osea inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar VAR.

const y let es la forma en que se declaran las variables a partir de ECMAScript 6,

const: sirve para declarar variables que nunca van a ser modificadas:
o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. const pokemonType = ‘electric’ no puede haber:
const pokemonType = ‘grass’
o No se pude re asignar: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre: const pokemonType = ‘electric’ no puede ejecutarse:
pokemonType = ‘grass’
o No es inmutable: osea no puede cambiar con objetos:

Let: Son variables que pueden ser modificadas, se pueden cambiar:
o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. let pokemonType = ‘electric’ no puede haber:
let pokemonType = ‘grass’
o Se puede reasignar: Osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: let pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’
o Su contexto de es bloque: Solo funciona dentro de un bloque {}, fuera de ello no.

--------------------------------------------------------------------------

<h1>Diferencias entre var, const y let:</h1>

var: Es una variable que puede cambiar su valor en un futuro y su alcance es local. Surgió en ECMAScript5.
Ejemplo:
var name = 'Freddy Mercurio';
var age = 28;
name= 'Freddy Mercury'; // Suponemos que freddy se equivoco de nombre y luego lo quiso cambiar


const: Es una variable constante que no puede cambiar nunca su valor en un futuro.
Ejemplo:
const name = 'Kurt Cobaño'; // Kurt ya no puede cambiar el valor de const name


let: Es una variable que puede cambiar su valor pero solo funciona en un bloque donde se declare ( {let} )
let age= 28; // let se puede cambiar por otro valor
let age = 20;
Es un resumen muy básico de las diferencias entre estas variables.

--------------------------------------------------------------------------
<h1>funciones</h1>

Las funciones son bloques de código que solucionan un problema específico para ser reutilizados. Existen dos tipos de funciones: declarativas y expresivas.

Qué son las funciones declarativas
En JavaScript, las funciones declarativas se las declara con la palabra reservada function.

Cómo declarar una función declarativa
La declaración de una función declarativa está constituido por las siguientes partes:

La palabra reservada function.
El nombre de la función: el cual será guardado como referencia en memoria.
Los parámetros: están envueltas en paréntesis (), son variables propias de la función y deberán utilizarse en el contenido. Hacen referencia a los argumentos en la invocación.
El contenido: está envuelto por llaves {}, contendrá las líneas de código correspondientes a la lógica del problema.
El valor retornado: es un único valor que devuelve la función cuando es llamada. Se lo especifica por la palabra reservada return. Si no existe, la función devolverá un valor undefined por defecto.

// Declaración
function suma (a,b){
    return a + b
}
/* 
function nombre (parámetros) {
    contenido
    return valor
} 
*/

De esta manera, definimos la lógica de la función, pero no la estamos utilizando. Para generar los valores es necesario invocar la función en el código según sea necesario.

Cómo invocar una función declarativa
La invocación o llamada es la manera que utilizamos las funciones para utilizar el valor de retorno (return) según ciertos argumentos. La invocación de la función declarativa está constituido por dos partes:

El nombre de la función especificada en la declaración.
Los argumentos, son los valores para cada uno de parámetros de la función envueltos entre paréntesis.

// Invocación
suma(2,3)
// nombre(argumentos)
La invocación sirve para emplear una función con diferentes argumentos y guardarlos en una variable.

var resultado1 = suma(2,3)
var resultado2 = suma(4,6)
var resultado3 = suma(10,12)

console.log(resultado1) //5
console.log(resultado2) //10
console.log(resultado3) //22

También existen funciones que simplemente se invocan, pero debes tener en cuenta que retornan por defecto undefined.

// Declaración
function saludar(nombre){
    console.log("Hola " + nombre) 
}
// Invocaciones
saludar("JavaScript") //"Hola JavaScript"
saludar("Platzi") // "Hola Platzi"

Plantillas literales
También puedes utilizar las plantillas literales, una nueva característica del lenguaje para utilizar las variables dentro de ${variable} entre las tildes invertidas ( `` ),

console.log(`Hola ${nombre}`)

Qué son las funciones expresivas o anónimas
Las funciones expresivas o anónimas consisten en guardar la función en una variable. Tienen la misma declaración e invocación que las funciones declarativas. La diferencia consiste en no especificar un nombre en la función, sino que utiliza el nombre de la variable.

// Declaración
var suma = function (a, b) {
  return a + b
}
// Invocación
var resultado = suma(2, 2)

console.log(resultado) //4

--------------------------------------------------------------------------
<h1>Funciones 2</h1>

Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

Funciones Declarativas:
En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');

Expresión de función:
En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);

En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

Diferencias:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

**LAS FUNCIONES DECLARATIVAS SON CONSIDERADAS MALA PRACTICAR POR LA CANTIDAD DE PROBABILIDADES EN LAS CUALES PUEDES COMETER UN ERROR 
ES MEJOR USAR LAS EXPRESIVAS Y SEGUIR UN ORDEN DESCENDENTE** 
CONST/VAR/LET = miFuncion() {

}

--------------------------------------------------------------------------
<h1>El Scope</h1>

El scope es cada uno de los entornos donde las variables tienen alcance dentro del código de JavaScript. En otras palabras, determina que valor tendrá la variable dependiendo dónde se encuentre.

Imagina que pierdes algo importante (llaves, dinero, celular), comienzas a buscar este objeto por los lugares más cercanos en que te encuentras; si no lo encuentras, buscas en los lugares más lejanos y así sucesivamente hasta encontrarlo. Las llaves son las variables y tú eres JavaScript.

Si haces referencia a una variable, el motor de JavaScript buscará su declaración en el entorno más cercano, y seguirá buscando en entornos más lejanos hasta llegar a la línea de código que la variable esté declarada, pero no en viceversa. A este proceso se lo denomina cadena de scope (scope chaining).

Tipos de scope
Existen dos tipos de scope: global y local. El scope local puede ser de función o de bloque. Un bloque es toda porción de código que está encerrada entre llaves {}, estos pueden ser los bloques: función, if, else, while, y for.

<img src="https://imgur.com/Qz6km8t.png" alt="scope"> 

En la imagen anterior, el entorno más cercano para la variable saludo es el scope de bloque, le sigue el scope de función y finalmente el scope global. Este es un ejemplo del recorrido que sigue JavaScript hasta encontrar la variable referenciada.

Qué es el scope global
Las variables globales son aquellas que se encuentran declaradas fuera de los bloques de código o funciones .El scope global es el entorno donde las variables globales pueden ser accedidas desde cualquier lugar de nuestro programa.

En el siguiente ejemplo, mira el código y piensa qué mostrará en consola. Una vez tengas las respuestas, abre la consola. ¿Qué sucedió?

<img src="https://imgur.com/B7zjvK2.png" alt="code">

Con este ejemplo podemos concluir que la función saludar tiene acceso a la variable nombre. ¿Por qué? Porque la variable nombre está en un scope global.

Volviendo al ejemplo de las llaves, JavaScript busca la variable en el contexto más cercano (scope local de función) ¿la encontró? No, entonces sigue buscando en el scope global ¿la encontró? Sí, entonces la utiliza. Ten en cuenta que JavaScript busca de un scope cercano a uno lejano, pero no en viceversa, esto es importante para el scope local.

Entonces, una variable global puede ser accedida en cualquier parte, porque el scope global es el último entorno en el que JavaScript busca una variable. Recuerda esto cuándo se hable de scope local.

Qué es el scope local
Las variables locales son aquellas que se encuentran declaradas dentro de los bloques de código o funciones. El scope local es el entorno donde las variables locales solo se pueden acceder desde una función o bloque del programa.

Observa el siguiente código y piensa cuál será el resultado.

<img src="https://imgur.com/dc8V2kP.png" alt="code">

Primeramente, al invocarse la función saludo imprimirá "Andres" por consola, pero inmediatamente después, existirá un error de referencia.
Esto sucede porque la variable nombre tiene un scope local, por lo que solo se puede acceder dentro de la misma. Volviendo al ejemplo de las llaves, JavaScript busca la variable en el contexto más cercano (scope global) ¿la encontró? No, entonces no lo encontrará en ningún lado y arroja un error de referencia.

Esto sucede porque JavaScript no puede volver a buscar a una función que no sabe si encontrará la variable o no, teniendo en cuenta que puede haber una variedad ilimitada de funciones, ¿cuál buscar? Por eso, el alcance de una función local es el lugar donde fue declarada.

--------------------------------------------------------------------------

<h1>Hoisting</h1> 

Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con var.

Hoisting en variables declaradas con var
Mira el siguiente código, ¿qué crees que sea el resultado del console.log?

<img src="https://imgur.com/f3SA9r7.png" alt="code">

La respuesta del console.log es undefined, porque al hacer referencia a una variable que no está declarada aún, JavaScript crea esta variable antes de declararla y le asigna un valor de undefined.

Lo que JavaScript está haciendo sería lo siguiente:

<img src="https://imgur.com/XYmVP3v.png" alt="code">

<h1>Hoisting en funciones</h1>

Mira el siguiente código, ¿qué crees que sea el resultado del console.log?

<img src="https://imgur.com/05VCz9t.png" alt="code">

La respuesta es "Hola", porque al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla.

<img src="https://imgur.com/9NTlyaG.png" alt="code"> 

Pero, lo que realmente sucede es que JavaScript guarda la función en memoria en la fase de creación de un contexto de ejecución, no asigna undefined como con las variables.

Buenas prácticas
El tema de Hoisting solo sucede con las declaraciones de variables y funciones, por lo que se** recomienda declarar las variables y las funciones lo más arriba posible del código**, para evitar errores.

También, el tema de hoisting ya está solucionado con las nuevas formas de declarar variables con let y const.

--------------------------------------------------------------------------
