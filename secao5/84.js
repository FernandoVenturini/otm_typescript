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

const pessoas = [
    { nome: 'Alice', idade: 55 },
    { nome: 'Bob', idade: 51 },
    { nome: 'Charlie', idade: 35 },
    {nome: 'Otavio', idade: 28},
    {nome: 'Maria', idade: 48},
];
 // RETORNAR AS PESSOAS COM MAIS DE 30 ANOS:
const pessoasFiltradas = pessoas.filter((pessoa) => pessoa.idade > 30);
console.log('Pessoas filtradas:', pessoasFiltradas); // [{ nome: 'Charlie', idade: 35 }]

// RETORNAR AS PESSOAS COM NOME GRANDE (MAIOR OU IGUAL A 5 CARACTERES):
const pessoasComNomeGrande = pessoas.filter((pessoa) => pessoa.nome.length >=  5);
console.log('Pessoas com nome grande:', pessoasComNomeGrande); // [{ nome: 'Alice', idade: 25 }, { nome: 'Charlie', idade: 35 }]

// RETORNAR AS PESSOAS COM MAIS DE 50 ANOS:
const pessoasComMaisDe50Anos = pessoas.filter((pessoa) => pessoa.idade > 50);
console.log('Pessoas com mais de 50 anos:', pessoasComMaisDe50Anos); // [{ nome: 'Alice', idade: 55 }, { nome: 'Bob', idade: 51 }]

// RETORNAR AS PESSOAS COM NOME QUE COMEÇA COM A LETRA 'A':
const pessoasComNomeA = pessoas.filter((pessoa) => pessoa.nome.startsWith('A')); // [{ nome: 'Alice', idade: 55 }]
console.log('Pessoas com nome que começa com A:', pessoasComNomeA); // [{ nome: 'Alice', idade: 55 }]

const nomeTerminaComA = pessoas.filter((pessoa) => {
    return pessoa.nome.toLowerCase().endsWith('a'); // [{ nome: 'Alice', idade: 55 }]
});
console.log('Pessoas com nome que termina com a:', nomeTerminaComA); // [{ nome: 'Alice', idade: 55 }]