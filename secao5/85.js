// MAPEANDO ARRAYS COM MAP:

// O método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array.

// Exemplo 1:
const numeros = [1, 2, 3, 4, 5]; // Array original
const numerosDobrados = numeros.map((numero) => { // A função de callback recebe cada elemento do array original
    return numero * 2; // Retorna um novo array com os números dobrados
});
//console.log(numerosDobrados); // Saída: [2, 4, 6, 8, 10]

// Exemplo 2:
const numeros2 = [5, 10,20, 30,40, 50]; // Array original
const numerosDObrados2 = numeros2.map((function(valor) {
    return valor * 2; // Retorna um novo array com os números dobrados
}));
//console.log(numerosDObrados2); // Saída: [10, 20, 40, 60, 80, 100]

// PARA CADA ELEMENTO:
    // RETORNE APENAS UMA STRING COM O NOME DA PESSOA
    const pessoas = [
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 30 },
        { nome: "Pedro", idade: 35 },
        { nome: "Ana", idade: 28 },
        { nome: "Lucas", idade: 22 }
    ];
    const nomes = pessoas.map((pessoa) => {
        return pessoa.nome; // Retorna apenas o nome de cada pessoa
    });
    console.log(nomes); // Saída: ["João", "Maria", "Pedro", "Ana", "Lucas"]


    // REMOVA APENAS A CHAVE "nome" DE CADA OBJETO
    const idades = pessoas.map(obj => ({ idade: obj.idade })); // Retorna apenas a idade de cada pessoa
    console.log(idades); // Saída: [{ idade: 25 }, { idade: 30 }, { idade: 35 }, { idade: 28 }, { idade: 22 }]

    const pessoasSemNome = pessoas.map((pessoa) => {
        const {nome, ...pessoasSemNome} = pessoa; // Desestruturação para remover a chave "nome"
            return pessoasSemNome; // Retorna o objeto sem a chave "nome"
    });
    console.log(pessoasSemNome); // Saída: [{ idade: 25 }, { idade: 30 }, { idade: 35 }, { idade: 28 }, { idade: 22 }]


    // ADICIONE UMA CHAVE id EM CADA OBJETO
    const pessoasComId = pessoas.map((pessoa) => {
        return { ...pessoa, id: Math.floor(Math.random() * 1000) }; // Adiciona uma chave "id" com um valor aleatório
    });
    console.log(pessoasComId); // Saída: [{ nome: "João", idade: 25, id: 123 }, { nome: "Maria", idade: 30, id: 456 }, ...]

    const comIds = pessoas.map(function(obj, indice) { // Adiciona uma chave "id" com o índice do elemento no array
        obj.id = indice; // Adiciona a chave "id" com o índice do elemento
        return obj; // Retorna o objeto com a nova chave "id"
    });
    console.log(comIds); // Saída: [{ nome: "João", idade: 25, id: 0 }, { nome: "Maria", idade: 30, id: 1 }, ...]
