let articulosFilter = [
    {nombre:'bici', costo:3000}, 
    {nombre:'Tv', costo: 2500}, 
    {nombre:'libro',costo:320},
    {nombre:'celular',costo:10000},
    {nombre:'laptop',costo:20000},
    {nombre:'teclado',costo:500},
    {nombre:'audifonos',costo:1700},
]
let articulosFiltrados = articulosFilter.filter(function(articulo) {
return articulo.nombre === 'audifonos'
})


/*************************************************************** */

let articulosMap = [
    {nombre:'bici', costo:3000}, 
    {nombre:'Tv', costo: 2500}, 
    {nombre:'libro',costo:320},
    {nombre:'celular',costo:10000},
    {nombre:'laptop',costo:20000},
    {nombre:'teclado',costo:500},
    {nombre:'audifonos',costo:1700},
]

let nombreArticulos = articulosMap.map(function(articulo){
    return articulo.costo
})


/******************************************************************** */


let articulosFind = [
    {nombre:'bici', costo:3000}, 
    {nombre:'Tv', costo: 2500}, 
    {nombre:'libro',costo:320},
    {nombre:'celular',costo:10000},
    {nombre:'laptop',costo:20000},
    {nombre:'teclado',costo:500},
    {nombre:'audifonos',costo:1700},
]

let encuentraArticulo = articulosFind.find(function(articulo){ 
return articulo.nombre === 'laptop'
})


/******************************************************************* */

let articulosForEach = [
    {nombre:'bici', costo:3000}, 
    {nombre:'Tv', costo: 2500}, 
    {nombre:'libro',costo:320},
    {nombre:'celular',costo:10000},
    {nombre:'laptop',costo:20000},
    {nombre:'teclado',costo:500},
    {nombre:'audifonos',costo:1700},
]


articulosForEach.forEach(function(articulo){
console.log(articulo.nombre)
})


/*************************************************************** */

let articulosSome = [
    {nombre:'bici', costo:3000}, 
    {nombre:'Tv', costo: 2500}, 
    {nombre:'libro',costo:320},
    {nombre:'celular',costo:10000},
    {nombre:'laptop',costo:20000},
    {nombre:'teclado',costo:500},
    {nombre:'audifonos',costo:1700},
]

let articulosBaratos = articulosSome.some(function(articulo){
return articulo.costo <= 700
})

/* find() : Devuelve el primer elemento del array que cumpla con la condición dada
foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
filter() : Devuelve todos los elementos del array que cumplan con la condición dada
*/



