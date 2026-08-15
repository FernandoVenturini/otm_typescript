"use strict";
// ETAPA 1: Sintaxes Básicas de Array
// 1. Sintaxe com colchetes (mais comum)
const numeros = [1, 2, 3, 4, 5];
const numeros2 = [6, 7, 8, 9, 10];
// Array que só pode conter números
// 2. Sintaxe com generic Array<T>
const frutas = ["maçã", "banana", "laranja"];
const carros = ["BMW", "Mercedes", "Ford"];
// Array que só pode conter strings - equivalente à sintaxe anterior
// 3. Array vazio com tipo explícito
const vazios = [];
// Array vazio que só aceitará strings no futuro
// ETAPA 2: Arrays de Diferentes Tipos
// 4. Array de booleanos
const flags = [true, false, true];
const usuarios = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Carlos" }
];
const usuarios2 = [
    { id: 1, nome: "Fernando" },
    { id: 2, nome: "Lavinia" }
];
// 6. Array de arrays (matriz)
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// ETAPA 3: Arrays com Union Types
// 7. Array que aceita múltiplos tipos
const misto = ["texto", 42, "outro", 100];
// Pode conter strings E números em qualquer ordem
// 8. Array com vários tipos
const diverso = [
    "hello",
    123,
    true,
    "world"
];
const respostas = [
    "sucesso",
    { erro: "falha na conexão" },
    null,
    "ok"
];
// ETAPA 4: Arrays Readonly
// 10. Array somente leitura - não pode ser modificado
const constantes = [1, 2, 3];
// constantes.push(4); // ERRO: Property 'push' does not exist on type 'readonly number[]'
// constantes[0] = 10; // ERRO: Index signature in type 'readonly number[]' only permits reading
// 11. Sintaxe alternativa com ReadonlyArray
const imutavel = ["a", "b", "c"];
// imutavel.pop(); // ERRO: Cannot mutate readonly array
// 12. Usando const assertions para arrays readonly
const cores = ["red", "green", "blue"];
// cores[0] = "yellow"; // ERRO: Cannot assign to readonly property
// ETAPA 5: Métodos de Array com Type Safety
// 13. Map com tipo de retorno inferido
const numerosDobrados = numeros.map(num => num * 2);
// TypeScript infere que numerosDobrados é number[]
// 14. Map com tipo explícito de retorno
const comprimentos = frutas.map((fruta) => {
    return fruta.length;
});
// 15. Filter com type guards
const valores = [1, "texto", 2, "outro", 3];
const apenasNumeros = valores.filter((valor) => {
    return typeof valor === "number";
});
// TypeScript sabe que apenasNumeros é number[]
// 16. Reduce com tipo explícito
const soma = numeros.reduce((acc, curr) => {
    return acc + curr;
}, 0);
// ETAPA 6: Tuplas - Arrays com Posições Específicas
// 17. Tupla básica - array com tipos específicos em cada posição
const pessoa = ["João", 30, true];
// Posição 0: string, Posição 1: number, Posição 2: boolean
// 18. Tupla com elementos opcionais
const config = ["localhost"];
// Segundo elemento é opcional
// 19. Tupla com rest operator
const endereco = ["Rua A", 123, 456, 789];
const pessoa2 = ["Maria", 25, false];
// ETAPA 7: Arrays em Funções
// 21. Parâmetro de função como array
function processarNumeros(numeros) {
    return numeros.reduce((sum, num) => sum + num, 0);
}
// 22. Função que retorna array
function criarSequencia(tamanho) {
    return Array.from({ length: tamanho }, (_, i) => i + 1);
}
// 23. Função com array de parâmetros rest
function juntarStrings(...palavras) {
    return palavras.join(" ");
}
// 24. Função com tupla como parâmetro
function processarPessoa([nome, idade, ativo]) {
    console.log(`${nome}, ${idade} anos, ${ativo ? "ativo" : "inativo"}`);
}
// ETAPA 8: Generics com Arrays
// 25. Função genérica com array
function obterPrimeiroElemento(array) {
    return array[0];
}
// 26. Uso da função genérica
const primeiroNumero = obterPrimeiroElemento([1, 2, 3]); // Tipo: number
const primeiraString = obterPrimeiroElemento(["a", "b", "c"]); // Tipo: string
// 27. Classe com array genérico
class Pilha {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
// 28. Uso da pilha genérica
const pilhaNumeros = new Pilha();
pilhaNumeros.push(1);
pilhaNumeros.push(2);
// ETAPA 9: Arrays com Type Assertions
// 29. Type assertion quando TypeScript não consegue inferir
const dados = JSON.parse('[1, 2, 3, 4, 5]');
// Afirmamos que o resultado é um array de números
// 30. Type assertion com any
const elementos = [1, "texto", true, { nome: "obj" }];
const apenasStrings = elementos.filter(e => typeof e === "string");
// 31. Non-null assertion com arrays
const arrayPossivelmenteNull = [1, 2, 3];
const comprimento = arrayPossivelmenteNull.length;
function garantirArray(input) {
    return Array.isArray(input) ? input : [input];
}
const registros = [
    { id: 1, nome: "A", valor: 100 },
    { id: 2, nome: "B", valor: 200 }
];
const cubo = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
];
class Carrinho {
    constructor() {
        this.itens = [];
    }
    adicionarItem(item) {
        this.itens.push(item);
    }
    calcularTotal() {
        return this.itens.reduce((total, item) => {
            return total + (item.preco * item.quantidade);
        }, 0);
    }
    listarItens() {
        return [...this.itens]; // Retorna cópia readonly
    }
}
// 37. Uso do carrinho
const carrinho = new Carrinho();
carrinho.adicionarItem({ id: 1, nome: "Notebook", preco: 2500, quantidade: 1 });
carrinho.adicionarItem({ id: 2, nome: "Mouse", preco: 50, quantidade: 2 });
console.log("Total:", carrinho.calcularTotal());
// Resumo do Tipo Array:
// 38. SÍNTASES PRINCIPAIS:
// - number[] - array de números
// - Array<string> - array de strings (generic)
// - (string | number)[] - array de strings ou números
// - readonly number[] - array imutável
// 39. RECOMENDAÇÕES:
// - Prefira a sintaxe number[] (mais comum e legível)
// - Use readonly para arrays que não devem ser modificados
// - Use tuplas para arrays com estrutura fixa
// - Use generics para funções que trabalham com qualquer array
// 40. MÉTODOS COMUNS COM TYPE SAFETY:
// - map, filter, reduce - mantêm a informação de tipo
// - find, some, every - também preservam tipos
// - Type guards ajudam a refinar tipos em filter
