// TypeScript Union Types
    // Union types are used when a value can be more than a single type.
    // Such as when a property would be string or number.

let valor: string | number;
valor = "Olá";
valor = 42;
// valor = true; // Error: Type 'boolean' is not assignable to type 'string | number'.
console.log(`Valor: ${valor}`);

function printStatusCode(code: number | string) {
    console.log(`O código é: ${code}`);
}
printStatusCode(200);
printStatusCode('200');

function addOrConcat(
    a: number | string | boolean,
    b: number | string | boolean
): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return `${a}${b}`;
}
console.log(addOrConcat(10, 20)); // 30
console.log(addOrConcat('Hello, ', 'world!')); // Hello, world!
console.log(addOrConcat(true, false)); // undefined


