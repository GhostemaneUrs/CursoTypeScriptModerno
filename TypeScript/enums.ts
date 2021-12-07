/* Enums en TypeScript */
/* Sirve para crear estados, enum actua como constante son datos que no van a cambiar */
enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

const employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log((ContractStatus[employeeStatus]));