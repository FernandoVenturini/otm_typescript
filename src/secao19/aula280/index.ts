// Union types

function addOrConcat(a: string | number, b: string | number): string | number {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a} ${b}`;
};

console.log(addOrConcat(1, 2)); // 3
console.log(addOrConcat('Hello', 'World')); // Hello World
console.log(addOrConcat(1, 'World')); // 1 World
console.log(addOrConcat('Hello', 2)); // Hello 2