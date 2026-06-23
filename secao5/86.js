// REDUZINDO ARRAY

// O método reduce() executa uma função para cada elemento do array, resultando em um único valor.


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array de números

const pessoas =[
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 25 },
    { nome: "Charlie", idade: 35 },
    { nome: "David", idade: 20 }
];

// SOMAE TODOS OS NUMEROS DO ARRAY(REDUCE):
const soma = numeros.reduce((acumulador, valor, indice, array) => { // A função de callback recebe quatro argumentos: acumulador, valor atual, índice e o array original
    return acumulador + valor; // Retorna a soma de todos os elementos do array
}, 0); // O segundo argumento do reduce() é o valor inicial do acumulador, que neste caso é 0
console.log(soma); // Saída: 15

// RETORNE UM ARRAY COM OS PARES DO ARRAY ORIGINAL(FILTER):
const pares = numeros.filter((numero) => numero % 2 === 0); // O método filter() cria um novo array com todos os elementos que passam no teste implementado pela função fornecida
console.log(pares); // Saída: [2, 4]

// RETORNE UM ARRAY COM OS NUMEROS MULTIPLICADOS POR 2(MAP):
const multiplicadosPorDois = numeros.map((numero) => numero * 2); // O método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array original
console.log(multiplicadosPorDois); // Saída: [2, 4, 6, 8, 10]

const total = numeros.reduce(function(acumulador, valor, indice, array) { // A função de callback recebe quatro argumentos: acumulador, valor atual, índice e o array original
    if (valor % 2 === 0) acumulador.push(valor) // Se for par, adiciona o valor ao acumulador
        return acumulador; // Se for par, retorna o acumulador sem alterações    
}, []);
console.log(total); // Saída: [2, 4]

const totalImpar = numeros.reduce(function(acumulador, valor, indice, array) { // A função de callback recebe quatro argumentos: acumulador, valor atual, índice e o array original
    if (valor % 2 !== 0) acumulador.push(valor) // Se for ímpar, adiciona o valor ao acumulador
        return acumulador; // Se for ímpar, retorna o acumulador sem alterações
}, []);
console.log(totalImpar); // Saída: [1, 3, 5, 7, 9]

// RETORNE A PESSOA MAIS VELHA:
const maisVelha = pessoas.reduce((acumulador, pessoa) => {
    if (acumulador.idade > pessoa.idade) return acumulador; // Compara a idade da pessoa atual com a idade da pessoa mais velha encontrada até agora
    return pessoa; // Retorna a pessoa mais velha comparando as idades
});
console.log(maisVelha); // Saída: { nome: "Charlie", idade: 35 }


const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros2
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);

console.log(numerosPares);