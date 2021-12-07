/* Tipos literales, puedes especificar que este valor nunca va a cambiar */

/* Es una restriccion de cuales string puedo utilizar */
type answer = 'yes' | 'no' | 'maybe' | 'follow midudev to learn typescript'
let result: answer = 'yes'

type dice = 1 | 2 | 3 | 4 | 5 | 6
let diceRoll: dice;
diceRoll = 1;  // OK
diceRoll = 2; // OK
// diceRoll = 7 => es un valor no valido porque no esta en mi tipo dice



