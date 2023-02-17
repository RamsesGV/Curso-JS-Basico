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

<h1>Coercion</h1>

La coerción consiste en transformar de un tipo de dato a otro de una variable. Existen dos tipos de coerción: implícita y explícita.

Qué es la coerción implícita
La coerción implícita consiste en la transformación de tipos mediante la ayuda de JavaScript. Esto ocurre en operaciones de diferentes tipos, ya que es un lenguaje débil y dinámicamente tipado.

Al momento de compilar el código, el motor de JavaScript, si encuentra alguna incoherencia (una suma de un número con un string), el motor lo interpreta a su manera y arroja un valor que puede ser erróneo.

Algunos de los ejemplos de coerción implícita son los siguientes:

<img src="https://imgur.com/KwlmyDr.png" alt="code">

Para evitar esto realiza la coerción explícita para manejar tipos de datos iguales antes de realizar cualquier operación.

Qué es la coerción explícita
La coerción explícita es la transformación de tipos de datos que controlamos el resultado. Para realizar estas transformaciones utiliza las funciones Number(), String() y Boolean(), para convertir a tipo número, string y lógico, respectivamente.

<img src="https://imgur.com/fGchWMo.png" alt="code">

Puedes utilizar la palabra reservada typeof para comprobar el tipo de dato transformado.

--------------------------------------------------------------------------

<h1>Valores: Truthy y Falsy</h1>

Los valores truthy y falsy son valores verdaderos y falsos cuando se realiza una coerción de cualquier tipo a booleano, respectivamente. Esto es importante para manejar condicionales, ya que una estructura condicional evalúa si un valor es verdadero o falso en un contexto booleano.

Qué son los valores falsy
Un valor falsy es aquel que es falso en un contexto booleano, estos son: 0, "" (string vacío), false, NaN, undefined o null.

<img src="https://imgur.com/qDXToYY.png" alt="code">

También puedes realizar una coerción implícita con el operador de negación (!), pero solo es para que la conozcas, no es recomendable.

<img src="https://imgur.com/ehhhaee.png" alt="code">

Qué son los valores truthy
Un valor truthy es aquel que es verdadero en un contexto booleano, son todos los valores que no sean falsy, que especificamos en la anterior sección.

<img src="https://imgur.com/pnJudOa.png" alt="code">

Cabe recalcar que en JavaScript todo valor que no sea falsy es truthy incluyendo las estructuras vacías de array y objetos.

--------------------------------------------------------------------------

<h1>Operadores: Asignación, Comparación y Aritméticos.</h1>

Para realizar operaciones en JavaScript es necesario conocer los diferentes tipos de operadores que necesitarás. Los tipos de operadores en el lenguaje son: aritméticos, asignación y comparación.

Qué son los operadores aritméticos
Los operadores aritméticos se utilizan para efectuar operaciones matemáticas.Para realizar las operaciones básicas, como suma, resta, multiplicación y división; utiliza los siguientes operadores:

<img src="https://imgur.com/Y37qAEr.png" alt="code"> 

Recuerda que no existe la división entre 0. En ese caso JavaScript devolverá el valor Infinity.

Qué es el operador de residuo
El operador de residuo ( % ), el signo de porcentaje, devuelve el residuo de una división.

<img src="https://imgur.com/wfRYZ0L.png" alt="code">

Esto es importante para saber los múltiplos de cualquier número o si un número es par.

Qué es el operador de concatenación
El operador de concatenación consiste en unir dos o más strings.

<img src="https://imgur.com/eDKMz1z.png" alt="code">

El operador de concatenación es semejando al operador de suma, pero no es el mismo. Si utilizas este operador con diferentes tipos de datos, JavaScript ejecutará una coerción implícita.

Cómo utilizar el operador de incremento y decremento
El operador de incremento (++) y decremento (--) consiste en aumentar o disminuir una unidad a una variable, respectivamente. Estos operadores se pueden emplear antes y después de la variable.

<img src="https://imgur.com/0Zo2BBU.png" alt="code">

Sin embargo, si se emplea antes o después, el comportamiento es diferente. Si está previamente, el valor de la variable aumenta y devuelve el valor actual. Si está después, el valor de la variable aumenta, pero devuelve el valor anterior.

<img src="https://imgur.com/wsWThIQ.png" alt="code">

Qué son los operadores de asignación
En la clase de variables aprendiste un operador de asignación (=). Este operador es diferente a los operadores de igualdad (== y ===).

El operador de asignación (=) consiste en asignar un valor a una variable.

<img src="https://imgur.com/EhOfSy8.png" alt="code">

Operadores de asignación combinada
En ciertos casos, reasignarás la misma variable más otro valor. Estas variables pueden utilizarse como acumuladores o contadores.

<img src="https://imgur.com/XFkTD55.png" alt="code">

Una forma para evitar estar repitiendo la variable en la reasignación, es combinarlas con los operadores aritméticos antes del operador de asignación.

<img src="https://imgur.com/QXHHAyk.png" alt="code">

Ejercicio de operadores de asignación
Observa el siguiente código, ¿cuál será el resultador del console.log?

<img src="https://imgur.com/YmqseY6.png" alt="code">

La respuesta es 5. ¿Tienes la misma respuesta?

Qué son los operadores de comparación
Un operador de comparación compara dos o más valores y devuelve un valor lógico (verdadero o falso).

Qué son los operadores de igualdad
Existen dos tipos de igualdad:

Igualdad por valor (==): compara dos variables solamente por su valor. Por ejemplo: "3" de tipo string y 3 de tipo número son iguales.
Igualdad por valor y tipo de dato (===): compara dos variables por su valor y tipo de dato. Por ejemplo: "3" de tipo string y 3 de tipo número no son iguales. Solamente 3 y 3, ambos de tipo número son iguales.

<img src="https://imgur.com/hGeo9QY.png" alt="code">

En conclusión, siempre utiliza la comparación por valor y tipo de dato para evitar errores. Los operadores de igualdad son diferentes al operador de asignación (=).

Qué son los operadores de desigualdad
Igualmente que los operadores de igualdad, existen dos tipos:

Desigualdad por valor (!=)
Desigualdad por valor y tipo de dato (!==)

<img src="https://imgur.com/QEABK36.png" alt="code">

Qué son los operadores de mayor o menor
Los operadores de mayor o menor evalúan intervalos, dependiendo si el valor especificado está incluido o no incluido.

<img src="https://imgur.com/DIls0qA.png" alt="code">

Qué son los operadores lógicos
Los operadores lógicos comparan dos o más expresiones y devuelve un valor lógico (verdadero o falso). Las expresiones son comparaciones entre valores, se utiliza en conjunto con los operadores de comparación.

Qué es el operador disyunción lógico
El operador de disyunción o AND (&&) devuelve verdadero, si y solo si ambas expresiones son verdadero. Se lee de la siguiente manera: “La expresión 1 es verdadero Y la expresión 2 es verdadero, entonces es verdadero”.

<img src="https://imgur.com/eCLIINB.png" alt="code">

Por ejemplo, si queremos saber si un número está entre 10 y 20. Es decir, un número que es mayor o igual que 10 Y menor o igual que 20.

<img src="https://imgur.com/5zE7PG7.png" alt="code">

Qué es el operador unión lógico
El operador de unión u OR (||) devuelve verdadero, si y solo si, alguna expresión es verdadero. Se lee de la siguiente manera: “La expresión 1 es verdadero O la expresión 2 es verdadero, entonces es verdadero”.

<img src="https://imgur.com/U1l61V9.png" alt="code">

Por ejemplo, si queremos saber si un número no está entre 10 y 20. Es decir, un número que es menor o igual que 10 O mayor o igual que 20

<img src="https://imgur.com/TbjHNmB.png" alt="code">

Qué es el operador negación lógico
El operador de negación o NOT (!) devuelve el valor lógico contrario a la expresión. Se lee de la siguiente manera: “La expresión es verdadero, entonces es falso”.

<img src="https://imgur.com/QoB0ZZx.png" alt="code">

Por ejemplo, si queremos saber si un número no es menor que 0. Es decir, la negación de que un número es menor que 0.

<img src="https://imgur.com/gYBQjRe.png" alt="code">

También se puede escribir únicamente a > 0, sin embargo, es únicamente para entender el propósito del operador de negación.

--------------------------------------------------------------------------

<h1>Condicionales: If, Else, else if</h1>

Los condicionales son estructuras de control que te permiten evaluar diferentes expresiones y realizar determinadas acciones en JavasScript.

Cómo utilizar el condicional ifen JavaScript

Un condicional evalúa si una expresión o condición es verdadera. Por ejemplo, si mi edad es mayor o igual que 18, puedo conducir.

<img src="https://imgur.com/sFyqWke.png" alt="code"> 

La palabra reservada else evalúa cuando la expresión del if es falsa, pero no es obligatorio colocarlo. En el ejemplo anterior, la condición contraria del if es la edad menor que 18, entonces no puedes conducir.

<img src="https://imgur.com/kV2OOxy.png" alt="code">

En otras palabras, si (if) una acción (expresión) es verdadera (true) hago una acción (bloques de código). En el caso contrario (else) efectúo otra acción.

Cómo anidar condicionales al programar

Has aprendido a usar un condicional, pero ¿y si tenemos varias condiciones? Entonces empleamos las palabras reservadas else if junto a la condición a ejecutar, puedes utilizar varias condiciones que necesites. Sin embargo, JavaScript evalúa la primera condición, luego a la segunda, y así sucesivamente. Esto es importante para ordenar las condiciones correctamente y no sobreescribirlas.

<img src="https://imgur.com/igzRKoC.png" alt="code"> 

Por ejemplo, un cliente solicita un descuento según el número de artículos que ha comprado, la tienda ofrece 3 descuentos: 10% si ha comprado más de 5 artículos, 15% si son más de 10 artículos, y todo por encima de 15 artículos recibe un 20% de descuento.

<img src="https://imgur.com/ZFPFjuC.png" alt="code">

Operador ternario
El operador ternario consiste en evaluar si una expresión es verdadera o falsa. Parecido a un condicional, pero en una línea de código. Esto sirve para evaluar una condición de manera rápida. La estructura que sigue es la siguiente y se lee como: "La condición es verdadera (?), si es así ejecuta el “Bloque verdadero”, caso contrario (:), ejecuta el “Bloque falso”.

Por ejemplo, guardemos en una variable un mensaje si un número es par o impar.

<img src="https://imgur.com/JX7yzkd.png" alt="code">

--------------------------------------------------------------------------
<h1>Switch</h1>


La **estructura switch es otra manera de evaluar condiciones, la diferencia con if es que las condiciones deben ser iguales a un caso o algo específico.

Cómo utilizar el condicional switch
Colocamos la palabra reservada switch y seguido de la variable o expresión a evaluar, pero sin ningún operador de comparación.

<img src = 'https://imgur.com/Tk8uXPF.png' alt='code'> 

Después colocamos cada caso con la palabra reservada case y el valor que deberá ser igual a la expresión. Seguido colocamos el bloque de código a ejecutar y al final la palabra reservada break para que no vuelva a evaluar otra condición si ya se cumplió.

<img src='https://imgur.com/NCDe8AL.png' alt='code'>

Finalmente, colocamos la condición por defecto con la palabra reservada default que se ejecutará si ninguno de los casos fue el correcto. Esto es semejante al bloque else.

<img src='https://imgur.com/77pb1HP.png' alt='code'>

Esto se leería de la siguiente manera: evalúa (switch) la variable expresion, en el caso de que sea igual a uno (case 1), entonces ejecuta el bloque 1 y termina (break), en el caso de que sea igual a dos (case 2), entonces ejecuta el bloque 2 y termina (break), si no se cumple ninguna, ejecuta un bloque por defecto (default).

Ejemplo utilizando switch
Por ejemplo, creemos un semáforo.

<img src='https://imgur.com/KK7EnsF.png' alt='code'>


Cuándo utilizar switch
Deberías utilizar switch cuando tengas una gran cantidad de casos, que con el condicional if produciría más cantidad de código. El problema con switch es que no es muy utilizado y todo se resuelve con if. Sin embargo, conocer esta estructura te puede permitir escribir código más legible en ciertos casos.

--------------------------------------------------------------------------

<h1>¿Qué es un array?</h1>

Un array es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas.

Qué son los índices
El índice es la forma en que accedemos a los elementos de los arrays. En JavaScript, los índices empiezan desde 0, es decir, la primera posición es el índice 0. Un array se inicia mediante la sintaxis de corchetes [] y es tipo de dato objeto.

<img src='https://imgur.com/fejvarG.png' alt='code'> 

Cómo acceder a los elementos del array
Para acceder a los elementos del array se utiliza la siguiente estructura:

<img src='https://imgur.com/IcrWMWP.png' alt='code'>

Para saber la cantidad de elementos de un array se utiliza la propiedad length.

<img src='https://imgur.com/glg63u9.png' atl='code'>

Ten en cuenta que la posición del elemento es diferente al índice del mismo.

Entonces, para acceder a un elemento del array, únicamente podrás utilizar los índices desde el 0 hasta array.length -1. Si se accede a un índice que no existe, devolverá undefined.

<img src='https://imgur.com/BwgzKwD.png' alt='code'>

Qué es la mutabilidad en los arrays
La mutabilidad hace referencia a la capacidad de una estructura de datos a cambiar. Esto permite cambiar los valores de los elementos de un array cuando accedemos a sus elementos mediante un índice.

Por ejemplo, cambiemos el segundo elemento con índice 1 al valor de “Platzi”:

<img src='https://imgur.com/rY0sCST.png' alt='code'>

Qué son los métodos de arrays
Los métodos de arrays son funcionalidades extra. Es semejante a las funciones, pero se accede mediante la notación punto array.metodo(argumentos).

Existen métodos mutables, es decir, que cambian el array original. Estos métodos son:

push
unshift
pop
shift

Cómo utilizar el método push
El método push agrega uno o varios elementos al final del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.


<img src='https://imgur.com/nTUHmfv.png' alt='code'> 

Cómo utilizar el método unshift
El método unshift agrega uno o varios elementos al inicio del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

<img src='https://imgur.com/zX3wxiC.png' alt='code'>

Cómo utilizar el método pop
El método pop extrae el elemento del final del array original.

<img src='https://imgur.com/LyNzu0V.png' alt='code'>

Cómo utilizar el método shift
El método shift extrae el elemento del inicio del array original.

<img src='https://imgur.com/ZmHKHqz.png' alt='code'>

Cómo utilizar el método indexOf
El método indexOf muestra el índice del elemento especificado como argumento.

<img src='https://imgur.com/QB8JIvQ.png' alt='code'>

Si el elemento no se encuentra en el array, el método devuelve el valor -1.

<img src='https://imgur.com/0VYzyTx.png' alt='code'>

--------------------------------------------------------------------------
<h1>Loops: for y for of</h1>


Un bucle (loop) o ciclo repetitivo es una estructura de control que te permite realizar una o varias instrucciones mientras una condición sea verdadera.

Existen dos tipos de ciclos repetitivos:

For (para)
While (mientras)
Qué es un ciclo for
Para el ciclo for conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones.

Por ejemplo, si queremos los 10 primeros números, sabemos que el ciclo se repetirá 10 veces. Si accedemos a los elementos de un array, sabemos que el ciclo se repetirá length veces.

Cómo utilizar el ciclo for
La estructura del ciclo for es la siguiente:

<img src ='https://imgur.com/FIRC5j8.png' alt='code'>

La condición consta de tres partes:

Inicio: se debe inicializar una variable que será evaluada en la expresión a comparar. Esta variable puede ser declarada dentro o fuera de la condición.
Comparación: es una expresión que debe cumplir la variable inicial, cuando no se cumpla, el ciclo termina.
Pasos: son los intervalos que cambiará la variable inicial, mientras cumpla con la expresión de comparación.
Cada una de las partes debe estar separada por un punto y coma ( ;).

Practiquemos el uso del bucle for
Por ejemplo, generemos los números del 1 al 10:

Inicio: inicializamos una variable con el valor de 1, generalmente se utiliza i (índice) como variable para el bucle, pero no es obligatorio. En este caso usaremos var num = 1.
Condición: La condición será mientras sea menor o igual que 10 (num <= 10),
Pasos: Debemos aumentar la variable en una unidad, por lo tanto, podemos utilizar num = num +1, num += 1 o num++. Este último únicamente cuando la variable aumente una unidad.
La estructura es la siguiente:

<img src='https://imgur.com/4r1hP88.png' alt="code">


Esto se leería como: “Para (for) la variable num que inicia en 1 (num = 1) mientras sea menor o igual que 10 (num <= 10) en pasos de 1 (num++) ejecuta una o varias instrucciones (console.log)”.

Mira la siguiente tabla que muestra cómo cambia la variable num en cada ciclo.

<img src='https://imgur.com/oPz7WDK.png' alt='code'>

Cómo recorrer arrays con el ciclo for
En el anterior ejemplo aprendiste a generar números del 1 al 10, utilicemos la misma lógica para recorrer un array.

¿Qué debemos usar para acceder a los elementos de un array? Exactamente, sus índices (variable i). Debemos generar los índices desde 0 hasta length (que no debe estar incluido). Con esto, empleamos la misma variable i para acceder a cada elemento con la sintaxis de corchetes array[i].

La estructura sería siguiente:

<img src='https://imgur.com/H17D9EY.png' alt="code">

La variable elemento es la referencia a cada uno de los elementos del array. Este puede tener cualquier nombre, por eso se inicia con var, debido a que es una variable como el índice i en el bucle for.

<img src='https://imgur.com/3EbFsoC.png' alt='code'>

Por convención, se escribe la variable elemento en singular con respecto al nombre del array. Por ejemplo, si el nombre del array es datos, el nombre de la variable de cada elemento sería dato, y así sucesivamente.

<img src='https://imgur.com/yTzCWZB.png' alt='code'>

Limitaciones del ciclo for … of
El ciclo for ... of solo accede al valor de cada uno de los elementos del array. Por consiguiente, si quieres cambiar el array original, no podrás, porque necesitas su índice para acceder y cambiar su valor.

Por ejemplo, si quieres duplicar el valor de cada elemento del array, necesitarás su índice.

<img src='https://imgur.com/UXN9SsO.png' alt='code'>

Sin embargo, esto no es malo, depende del problema que estés afrontando. Una forma de solucionar el anterior problema utilizando for ... of, es creando otro array vacío para llenarlo con los nuevos valores, de esta manera no cambiará el array original.

<img src='https://imgur.com/Cj7JE4d.png' alt='code'>

--------------------------------------------------------------------------
<h1>Loops While</h1>

Para el ciclo while no conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones. Aunque también se puede acoplar para que realice un determinado número de repeticiones.

Por ejemplo, si queremos que un usuario ingrese un valor mayor a 0, no sabremos cuántas veces se equivocará. También, si queremos que un programa se ejecute hasta que el usuario ingrese una opción para salir.

Cómo utilizar el ciclo while
La estructura del ciclo while es la siguiente:

<img src='https://imgur.com/XTmEDg8.png' alt='code'>

En este caso la condición es una expresión lógica a evaluar, si es verdadero repite el bloque de código, si es falso el ciclo termina. Debido a esto, necesitas cambiar la variable de la condición, para que no existe un bucle infinito.

Generación de números con el bucle while
Por ejemplo, generemos los números del 1 al 10, ahora con el bucle while.

La estructura es la siguiente:

<img src='https://imgur.com/fovlRLi.png' alt='code'>

Esto se leería como: “Mientras (while) la variable numero sea menor o igual que 10 (numero <= 10) ejecuta una o varias instrucciones (console.log); finalmente, aumenta la variable en uno (numero++) para que no exista un bucle infinito”.

Control de variables con el bucle while
Otro ejemplo, tenemos un programa únicamente para estudiantes, queremos controlar que un usuario ingrese una edad menor de 18 (y mayor que 0 porque no existe edades negativas). Entonces utilizamos while debido a que no conocemos cuántas veces se equivocará el usuario.

Ejecuta el siguiente código en la terminal de tu navegador, e intenta ingresar un valor incorrecto y observa lo que sucede. Se utiliza la condición contraria a lo que queremos, porque es lo que controlaremos, al cambiar la variable edad evitamos el ciclo infinito.

<img src='https://imgur.com/BV0VZAR.png' alt='code'>

--------------------------------------------------------------------------
<h1>Objetos</h1>

Un objeto es una estructura de datos que permite almacenar valores mediante propiedad - valor a través de la sintaxis de llaves ({}) y separados por comas.

En las propiedades del objeto es opcional colocar las comillas. En el caso de que haya espacios, es obligatorio.

<img src='https://imgur.com/NojGmHC.png' alt='code'>

Excepto por los primitivos y las funciones, todo es un objeto en JavaScript.

Qué son los atributos y métodos
En programación orientada a objetos, un objeto es una representación de la realidad, en el cual sus características propias se definen como atributos y sus acciones se definen como métodos.

En otras palabras, los atributos son las variables y los métodos son las funciones propias de cada objeto.

Por ejemplo, definamos el objeto miAuto. Se coloca entre comillas la propiedad año porque el lenguaje no admite caracteres especiales del español. Aunque en ciertas situaciones si admite.


<img src='https://imgur.com/5RrpyNQ.png' alt='code'>

Las propiedades marca, modelo y "año" son los atributos del objeto miAuto. La propiedad detalle es un método del objeto miAuto.

Cómo acceder a los valores de un objeto
A diferencia de los arrays, únicamente es necesario saber la propiedad del objeto para acceder a su valor.

Existen tres formas para acceder al valor de un objeto:

Mediante la notación de corchetes
Mediante la notación de punto
Qué es la notación de corchetes
La notación de corchetes ya ese familiar para ti, similar a los arrays, indicamos entre corchetes la propiedad del objeto entre comillas.

objeto["propiedad"]

Por ejemplo, accedamos a las propiedades del objeto miAuto creado anteriormente.

<img src='https://imgur.com/kTjjLop.png' alt='code'>

Observa que cuando accedes a un método, únicamente muestra la función, esto sucede porque la propiedad guarda dicha función que aún no es ejecutada. Para ejecutarla hay que utilizar los paréntesis.

<img src='https://imgur.com/RQHoI57.png' alt='code'>

Finalmente, ten cuidado con las comillas, si nos las usas, estás haciendo referencia a una variable. En este caso existirán tres posibilidades:

Si existe la variable y su valor coincide con una propiedad del objeto, entonces mostrará su respectivo valor.
Si existe la variable, pero su valor no coincide con una propiedad del objeto, entonces mostrará undefined.
Si no existe la variable, entonces mostrará un error de referencia.

<img src='https://imgur.com/ScLMVZE.png' alt='code'>

Qué es la notación de punto
La notación de punto indicamos con un punto la propiedad del objeto. Si existen espacios, la única forma de acceder a esa propiedad es mediante la notación de corchetes.

objeto.propiedad

Por ejemplo, accedamos a las propiedades del objeto miAuto creado anteriormente.


<img src='https://imgur.com/uzqohXb.png' alt='code'>

Igualmente, para ejecutar el método hay que utilizar los paréntesis.

<img src='https://imgur.com/R0vAaeu.png' alt='code'>

Los arrays también son objetos
La notación punto te debe de parecer familiar, ya que así usábamos los diferentes atributos y métodos de los arrays, como length o map.

Esto es debido a que los arrays también son objetos en JavaScript. Por esta razón, también podemos utilizar la notación de corchetes, pero no es recomendable.

<img src='https://imgur.com/9SCmwPT.png' alt='code'>

Cómo añadir propiedades de un objeto
Para añadir propiedades de un objeto, utilizamos la notación de corchetes o de punto con la nueva propiedad, asignándole su respectivo valor.

Por ejemplo, añadamos la propiedad color del objeto miAuto.

<img src='https://imgur.com/dP9c2Mg.png' alt='code'>

Cómo modificar propiedades de un objeto
Para modificar propiedades de un objeto, utilizamos la notación de corchetes o de punto con la propiedad específica, asignándole su nuevo valor.

Por ejemplo, modifiquemos la propiedad marca, de "Toyota" a "Ford", del objeto miAuto.

<img src='https://imgur.com/0lv4p2S.png' alt='code'>

Cómo eliminar propiedades de un objeto
Para eliminar propiedades de un objeto, utilizamos la palabra reservada delete seguido de la propiedad del objeto.

Por ejemplo, eliminemos la propiedad marca del objeto miAuto.

<img src='https://imgur.com/B6ImnK5.png' alt='code'>

El objeto contexto this
En JavaScript, el objeto contexto this hace referencia a diferentes valores según su contexto de ejecución. Como es un tema complejo de programación orientada a objetos, no profundizaré.

En objetos, el contexto this hace referencia al propio objeto. Esto sirve para acceder a los atributos y métodos propios del objeto.

Por ejemplo, cambiemos la función detalle del objeto miAuto para mostrar un mensaje personalizado.

<img src='https://imgur.com/fZv4Qzd.png' alt='code'>

Si ejecutamos la función miAuto.detalle() mostrará un error de referencia, que modelo no está definido.

Hagamos un pequeño cambio, utilicemos la notación de punto para acceder a los valores de la propiedad.

<img src='https://imgur.com/KHqUXu7.png' alt='code'> 

¡Funcionó! Sin embargo, necesito crear otro objeto con el mismo código.

<img src='https://imgur.com/gRtENpm.png' alt='code'>

Ahora muestra nuevamente un error de referencia del objeto miAuto. ¿Pero cambio miAuto por otroAuto y problema resuelto? Sí, pero como programador no debemos cambiar manualmente el código que puede ser reutilizado.

Realicemos otro cambio, utilicemos el objeto contexto this para hacer referencia a nuestro objeto.

<img src='https://imgur.com/sp9PGYd.png' alt='code'>

¡Funcionó! Ahora creemos otro objeto.

<img src='https://imgur.com/dFRu8Oi.png' alt='code'>

¡Volvió a funcionar! Ahora podremos crear varios objetos sin cambiar una y otra vez la referencia al objeto this. En el objeto miAuto, this es igual a miAuto; mientras que en el objeto otroAuto, this es igual a otroAuto. Por eso podemos acceder a los atributos y métodos, independientemente del objeto creado.

Crear varios objetos a partir de un código base se denomina crear una instancia.

----------------------------------------------------------------------------------------------

<h1>Objetos: funcion constructora</h1>

Existe un problema al momento de construir varios objetos a partir de un código base, los atributos deben cambiar con respecto a la nueva información. Para esto se utiliza una función constructora.

Una función constructora sirve para crear varios objetos a partir de nueva información, esto es recibido argumentos.

Cómo generar varios objetos a partir de una función constructora
Para crear una función constructora, debemos definir los parámetros correspondientes, que serán los atributos del objeto, que cambiarán con la nueva información mediante argumentos. Estos argumentos deben hacer referencia a cada uno del nuevo objeto, esto mediante el objeto contexto this.

Ten en cuenta que los parámetros de la función son diferentes a los atributos del objeto 😄.


<img src='https://imgur.com/aXIg1TD.png' code='alt'>

Si ejecutamos la función Auto mostrará un error, necesitamos especificar que vamos a construir una instancia mediante la palabra reservada new.

<img src='https://imgur.com/xdPRyCn.png' alt='code'> 

De esta manera, puedes crear varios objetos a partir de una función constructora que permita especificar atributos y métodos personalizados.

<img src='https://imgur.com/znzVEno.png' alt='code'>

Puede que observes la propiedad __proto__, no te preocupes, ya lo aprenderás.

----------------------------------------------------------------------------------------------

<h1>Metodos de recorridos de Arrays</h1>

Existen métodos de arrays para recorrerlos, y devolver un valor o un array con nuevos resultados. Entre estos están dos muy importantes: map y filter.

Utilizaremos el siguiente array de objetos para los ejemplos de los métodos:

<img src='https://imgur.com/mjnVzau.png' alt='code'> 

Cómo utilizar el método filter
El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

El método filter recibe dos argumentos:

La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.

<img src='https://imgur.com/qNYdwBF.png' alt='code'>

La función, que recibe como argumento el método filter, utiliza tres parámetros:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.


<img src='https://imgur.com/9EPIv6e.png' alt='code'>

Practiquemos el uso del método filter
Utilicemos el array articulos que definimos para filtrar en un nuevo array los artículos cuyo costo sea menor o igual que 500.

Entonces utilizamos el método filter que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

<img src='https://imgur.com/Z79KTE2.png' alt='code'>

Cómo utilizar el método map
El método map es inmutable y consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback).

El método map recibe dos argumentos:

La función que itera y transforma cada elemento del array (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.

<img src='https://imgur.com/3fRAOh8.png' alt='code'>

La función, que recibe como argumento el método map, utiliza tres parámetros opcionales:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.

<img src='https://imgur.com/rTLUXyK.png' alt='code'>

Practiquemos el uso del método map
Utilicemos el array articulos que definimos para crear un nuevo array con el nombre de cada uno de los artículos.

Entonces utilizamos el método map que retorne el nombre de cada artículo. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

<img src='https://imgur.com/9GV4WO2.png' alt='code'>

----------------------------------------------------------------------------------------------

<h1>Recorriendo Arrays con .find(), .foreach() y .some()</h1>

Para continuar con otros métodos para recorrer arrays, aprenderás find, forEach y some.Utilizaremos el siguiente array de objetos para los ejemplos de los métodos:
----------------------------------------------------------------------------------------------
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
]
----------------------------------------------------------------------------------------------
Cómo utilizar el método find
El método find consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). Si ningún elemento cumpla con la condición, retornará undefined.

El método find recibe dos argumentos:

La función que itera y evalúa cada elemento del array hasta encuentre uno que cumpla con la condición especificada (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.
----------------------------------------------------------------------------------------------
array.find(function(), thisArg)
----------------------------------------------------------------------------------------------
La función, que recibe como argumento, utiliza tres parámetros opcionales:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.
----------------------------------------------------------------------------------------------
array.find(function(element, index, array))
----------------------------------------------------------------------------------------------

Practiquemos el uso del método find
Utilicemos el array articulos que definimos para encontrar algún artículo que su nombre sea Laptop.

Entonces utilizamos el método find que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.
----------------------------------------------------------------------------------------------
var algunArticulo = articulos.find(function (articulo) {
  return (articulo.nombre = "Laptop")
})
console.log(algunArticulo)
/* 
{ nombre: 'Laptop', costo: 3000 }
*/
----------------------------------------------------------------------------------------------

Cómo utilizar el método forEach
El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.

Este método recibe dos argumentos:

La función que itera cada elemento del array (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.
----------------------------------------------------------------------------------------------
array.forEach(function(), thisArg)
----------------------------------------------------------------------------------------------
La función, que recibe como argumento el método forEach, utiliza tres parámetros opcionales:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.
---------------------------------------------------------------------------------------------
array.forEach(function(element, index, array))
---------------------------------------------------------------------------------------------
Practiquemos el uso del método forEach
Utilicemos el array articulos que definimos para mostrar todos los artículos.

Entonces utilizamos el método forEach y que ejecute la función console.log para cada uno de los elementos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.
---------------------------------------------------------------------------------------------
articulos.forEach(function (articulo) {
  console.log(articulo)
})
/* 
{ nombre: 'Bici', costo: 3000 }
{ nombre: 'TV', costo: 2500 }
...
{ nombre: 'Audifonos', costo: 1700 }
*/
---------------------------------------------------------------------------------------------
Cómo utilizar el método some
El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

El método some recibe dos argumentos:

La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.
---------------------------------------------------------------------------------------------
array.some(function(), thisArg)
---------------------------------------------------------------------------------------------
La función, que recibe como argumento el método some, utiliza tres parámetros:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.
---------------------------------------------------------------------------------------------
array.some(function(element, index, array))
---------------------------------------------------------------------------------------------
Practiquemos el uso del método some
Utilicemos el array articulos que definimos para saber si existe al menos un artículo con el costo menor o igual que 700.

Entonces utilizamos el método some que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.
---------------------------------------------------------------------------------------------
var existeArticulo = articulos.some(function (articulo) {
  return articulo.costo <= 700
})
console.log(existeArticulo) // true
---------------------------------------------------------------------------------------------



LordSith.
















