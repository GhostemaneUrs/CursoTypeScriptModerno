/* Excepciones de tipo en TypeScript */
/* Las excepciones de tipo en TypeScript sirven para verificar que tipo sea */

let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Andres';
(randomValue as string).toUpperCase(); /* Esto fuerza a que sea un string, se utiliza cuando sabemos que tipo de dato tenemos */

/* Esto comprueba que sea un string, y si lo es haga esto, es para tener mas control */
if (typeof randomValue === 'string') {
    console.log(randomValue.toUpperCase());
}