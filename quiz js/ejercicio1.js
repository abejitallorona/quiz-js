// Tienes un arreglo de objetos que representan tareas, cada una con un id, nombre, y completada (un booleano).
// Escribe una función que tome el id de una tarea y marque esa tarea como completada (es decir, completada debe ser true).

const tareas = [
    {
        id: 3,
        nombre: "algoritmos",
        completada: false
    },
    {
        id: 2,
        nombre: "comer",
        completada: false
    },
    {
        id: 1,
        nombre: "aseo",
        completada: false
    },
];

function marcarComoCompletada(id) {
    tareas.forEach(tarea => {
        if (tarea.id === id) {
            tarea.completada = true;
        }
    });
}


marcarComoCompletada(2);
console.log(tareas);





// Dado un arreglo de objetos que representan ciudades con su respectiva población, escribe una función que encuentre y devuelva la ciudad con la mayor población.



const ciudades = [
    {
        ciudad: "Jamundí",
        poblacion: 13
    },
    {
        ciudad: "Tuluá",
        poblacion: 2
    },
    {
        ciudad: "Sevilla",
        poblacion: 16
    },
    {
        ciudad: "Bogotá",
        poblacion: 70
    },
    {
        ciudad: "Cali",
        poblacion: 20
    },
]

ciudades.forEach(ciudad => {
    let 
});