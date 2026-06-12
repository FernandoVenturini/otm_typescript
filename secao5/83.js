// CONCATENANDO ARRAYS:

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = [...array1, ...array2];
const array4 = array1.concat(array2, ['g', 'h', 'i'], 'Luiz');

console.log(array3); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(array4); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'Luiz']