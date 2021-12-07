/* TypeScript es de tipado estatico, tambien puede ser dinamico, porque el debe detectar que tipo de datos es una variable, typeScript se comprueba en tiempo de compilacion, no en ejecucion */

let dato: any = 'Esto es un dato any' //Los tipo any son para variables que no sabemos que tipo de datos son
let datoRandom: unknown = 'Esto es un dato unknown' //Los tipo unknown son para variables que no sabemos que tipo de datos son, pero no podemos acceder a sus propiedades, ni construir una instancia de ellas
let names: string = "Andres Jaramillo"; // string
let age: number = 23; // number es un tipo de datos
let work: string = 'Programador'; // string
let hobbies: string[] = ["Estudiar programación", " escuchar musica", " jugar Fortnite"]; // Arreglo de strings
const PersonStatus: boolean = true; //constante

console.log(`Mi nombre es: ${names}, tengo ${age} años y soy ${work}, me gusta hacer en mi dia a dia: ${hobbies}`);



