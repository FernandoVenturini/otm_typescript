// REDUZINDO ARRAY

// O método reduce() executa uma função para cada elemento do array, resultando em um único valor.

const numeros = [1, 2, 3, 4, 5]; // Array de números

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