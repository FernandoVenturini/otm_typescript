"use strict";
// ETAPA 1: Declaração de Variáveis Básicas
// 1. Declaração de string com type annotation
const nome = "João Silva";
const nome2 = "Fernando";
// A variável 'nome' e 'nome2' só podem receber valores do tipo string
// 2. Declaração de number com type annotation
const idade = 30;
const age = 45;
// A variável 'idade' e 'age' só podem receber valores numéricos
// 3. Declaração de boolean com type annotation
const ativo = true;
const inativo = false;
// A variável 'ativo' e ' inativo só podem receber true ou false
// ETAPA 2: Arrays e Tipos Complexos
// 4. Array de números com type annotation
const numeros = [1, 2, 3, 4, 5];
// O array só pode conter elementos do tipo number
// 5. Array de strings com type annotation
const frutas = ["maçã", "banana", "laranja"];
// Sintaxe alternativa usando Array<tipo>
// 6. Tupla - array com tipos específicos em cada posição
const pessoa = ["Maria", 25, true];
// 8. Criando objeto que segue a interface Usuario
const usuario1 = {
    id: 1,
    nome: "Ana Costa",
    email: "ana@email.com"
    // A propriedade 'idade' é opcional, então pode ser omitida
};
// 8.1 Criando segundo objeto que segue a interface Usuario
const usuario2 = {
    id: 2,
    nome: "Fernando",
    email: "fernando@email.com",
    idade: 45
};
// ETAPA 4: Funções com Type Annotations
// 9. Função com parâmetros e retorno tipados
function somar(a, b) {
    // Parâmetros a e b devem ser números, retorno também deve ser número
    return a + b;
}
// 10. Função que não retorna valor (void)
function exibirMensagem(mensagem) {
    // O tipo 'void' indica que a função não retorna nenhum valor
    console.log(mensagem);
}
// 11. Arrow function com type annotations
const multiplicar = (x, y) => {
    return x * y;
};
// ETAPA 5: Union Types e Type Aliases
// 12. Union type - variável que pode ser de mais de um tipo
let id;
// 'id' pode ser tanto string quanto number
id = "ABC123"; // Válido
id = 123; // Também válido
// 14. Usando o type alias
const StatusDoPedido = "pendente";
// 16. Função que processa produtos
function calcularTotal(produtos) {
    // Recebe um array de Produtos e retorna um número
    return produtos.reduce((total, produto) => total + produto.preco, 0); // Soma os preços dos produtos
}
// 17. Criando e usando os dados
const carrinho = [
    {
        id: 1,
        nome: "Notebook",
        preco: 2500,
        categorias: ["eletrônicos", "computadores"],
        emEstoque: true
    },
    {
        id: 2,
        nome: "Mouse",
        preco: 50,
        categorias: ["eletrônicos", "acessórios"],
        emEstoque: true
    }
];
// 18. Chamando a função com type safety
const totalCompra = calcularTotal(carrinho); // Retorno é do tipo number
console.log(`Total: R$ ${totalCompra}`);
// Fim do código com TypeScript e Type Annotations
