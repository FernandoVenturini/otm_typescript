"use strict";
// Tipos Literais
const person = {
    name: 'John',
    age: 30,
    isStudent: false
};
person.name = 'Jane'; // válido
// person.name = 123; // inválido, pois name é do tipo string
function printPerson(person) {
    return `Name: ${person.name}, Age: ${person.age}, Is Student: ${person.isStudent}`;
}
console.log(printPerson(person)); // Name: Jane, Age: 30, Is Student: false
