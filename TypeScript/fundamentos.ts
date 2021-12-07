/* TypeScript es de tipado estatico, tambien puede ser dinamico, porque el debe detectar que tipo de datos es una variable */

let names: string = "Andres Jaramillo"; // string
let age: number = 23; // number es un tipo de datos
let work: string = 'Programador'; // string
let hobbies: string[] = ["Estudiar programación", " escuchar musica", " jugar Fortnite"];   // Arreglo de strings
const PersonStatus: boolean = true; //constante

console.log(`Mi nombre es: ${names}, tengo ${age} años y soy ${work}, me gusta hacer en mi dia a dia: ${hobbies}`);

