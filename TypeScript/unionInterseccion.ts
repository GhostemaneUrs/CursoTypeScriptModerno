/* Union o interseccion en TypeScript */


/* Esto es una union en TypeScript */

let multiType: string | number = 20; // Esto puede ser de tipo string o number
multiType = "veinte"; // Esto puede ser de tipo string
const add = (numberOne: string | number, numberTwo: string | number) => {
    /* Esta linea de codigo solo sirve si es de tipo numerico */
    if (typeof numberOne === "number" && typeof numberTwo === "number") {
        let result: number = numberOne + numberTwo;
        console.log(`resultado: ${result}`);
    }
    /* Esta linea de codigo solo sirve si es de tipo string */
    if (typeof numberOne === "string" && typeof numberTwo === "string") {
        let result: string = numberOne + numberTwo;
        console.log(`resultado: ${result}`);
    }

    throw new Error("No se pueden mezclar los tipos de datos!!!");
}

add(4, 4); // 8
add('one', 'two'); //onetow
add(4, 'two'); // Error


/* Esto es una interseccion sirve para crear uno un tipo de dato que tenga varios */

type EmployeeManager = Employee & Manager; /* Esto es una interseccion, sirve para cumplir uno dos tipos*/

interface Employee {
    employeeId: number;
    age: number;
}

interface Manager {
    stookPlan: boolean;
}

const person: EmployeeManager = {
    employeeId: 1,
    age: 22,
    stookPlan: true
};

