let estudiantes = ['ramses','alexia','kata','fuze']

let saludarEstudiantes = (estudiante) => console.log(`hola, ${estudiante}`); 

while(estudiantes.length > 0) { 
let estudiante = estudiantes.shift()
saludarEstudiantes(estudiante)
}

/* Este código en JavaScript crea un arreglo llamado estudiantes que contiene cuatro elementos de tipo string.

Luego define una función llamada saludarEstudiantes que toma un parámetro llamado estudiante, y utiliza el método console.log() para imprimir un saludo personalizado al estudiante.

La última parte del código es un bucle while que se ejecuta mientras la longitud del arreglo estudiantes es mayor que cero. En cada iteración del bucle, se utiliza el método shift() para eliminar y devolver el primer elemento del arreglo estudiantes, y luego se llama a la función saludarEstudiantes pasando el elemento eliminado como argumento.

En resumen, este código recorre el arreglo estudiantes uno por uno, y para cada uno de ellos, imprime un saludo personalizado utilizando la función saludarEstudiantes. En otras palabras, este código simula un saludo personalizado para cada estudiante del arreglo.
*/