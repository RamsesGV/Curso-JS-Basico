let  estudiantes = ['ramiro','ramses','alexia','kata']

let saludarEstudiantes = (estudiante) =>  console.log(`hola ${estudiante}`)

//for (let i = 0; i < estudiantes.length; i++) { 
   //saludarEstudiantes(estudiantes[i]);
//}

for (let estudiante of estudiantes) { 
    saludarEstudiantes(estudiante)
}

