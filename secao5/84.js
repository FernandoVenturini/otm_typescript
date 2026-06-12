// FILTRANDO UM ARRAY:

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log('Numeros pares:', numerosPares); // [2, 4, 6, 8, 10]

const numerosImpares = numeros.filter((numero) => numero % 2 !== 0);
console.log('Numeros impares:', numerosImpares); // [1, 3, 5, 7, 9]

const numerosFiltrados = numeros.filter( (valor)  => {
    return valor > 5;
});
console.log('Numeros filtrados:', numerosFiltrados); // [6, 7, 8, 9, 10]