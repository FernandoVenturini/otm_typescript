// ============================================================================
// REDUZINDO ARRAY — método reduce()
// ============================================================================
// O reduce() percorre o array elemento a elemento e "acumula" um único resultado.
// Sintaxe: array.reduce((acumulador, valorAtual, indice, arrayOriginal) => { ... }, valorInicial)
// ============================================================================


// Cria um array com os números de 1 a 10
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Cria um array de objetos representando pessoas com nome e idade
const pessoas = [
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 25 },
    { nome: "Charlie", idade: 35 },
    { nome: "David", idade: 20 }
];


// ----------------------------------------------------------------------------
// EXEMPLO 1: Somar todos os números com reduce()
// ----------------------------------------------------------------------------
// Chama reduce() no array numeros
const soma = numeros.reduce(
    // Função executada a cada iteração — recebe o acumulador e o valor atual
    (acumulador, valor) => {
        // Soma o valor atual ao acumulador e devolve o novo total parcial
        return acumulador + valor;
    },
    // Valor inicial do acumulador (começa em 0 antes de somar o primeiro número)
    0
);
// Exibe o resultado final da soma no console
console.log("Soma:", soma); // Saída: Soma: 55


// ----------------------------------------------------------------------------
// EXEMPLO 2: filter() vs reduce() — filtrar números pares
// ----------------------------------------------------------------------------
// filter() é a forma mais direta: cria um novo array só com os pares
const paresComFilter = numeros.filter((numero) => numero % 2 === 0);
// Exibe o array de pares obtido com filter
console.log("Pares (filter):", paresComFilter); // Saída: Pares (filter): [2, 4, 6, 8, 10]

// O mesmo resultado pode ser obtido com reduce(), acumulando em um array vazio
const paresComReduce = numeros.reduce((acumulador, valor) => {
    // Verifica se o valor atual é par (resto da divisão por 2 é zero)
    if (valor % 2 === 0) {
        // Adiciona o número par ao array acumulador
        acumulador.push(valor);
    }
    // Sempre retorna o acumulador (com ou sem o novo valor) para a próxima iteração
    return acumulador;
}, []); // Valor inicial: array vazio que será preenchido aos poucos
// Exibe o array de pares obtido com reduce
console.log("Pares (reduce):", paresComReduce); // Saída: Pares (reduce): [2, 4, 6, 8, 10]


// ----------------------------------------------------------------------------
// EXEMPLO 3: map() vs reduce() — multiplicar cada número por 2
// ----------------------------------------------------------------------------
// map() é a forma mais direta: transforma cada elemento e retorna um novo array
const multiplicadosComMap = numeros.map((numero) => numero * 2);
// Exibe o array com cada número multiplicado por 2
console.log("Multiplicados (map):", multiplicadosComMap); // Saída: Multiplicados (map): [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Com reduce() também é possível, acumulando os resultados em um novo array
const multiplicadosComReduce = numeros.reduce((acumulador, valor) => {
    // Multiplica o valor atual por 2 e adiciona ao array acumulador
    acumulador.push(valor * 2);
    // Retorna o acumulador atualizado
    return acumulador;
}, []); // Começa com array vazio
// Exibe o mesmo resultado, mas construído com reduce
console.log("Multiplicados (reduce):", multiplicadosComReduce);


// ----------------------------------------------------------------------------
// EXEMPLO 4: Filtrar ímpares com reduce()
// ----------------------------------------------------------------------------
// Percorre o array e acumula apenas os números ímpares
const impares = numeros.reduce((acumulador, valor) => {
    // Verifica se o valor NÃO é par (resto da divisão por 2 é diferente de zero)
    if (valor % 2 !== 0) {
        // Adiciona o ímpar ao array acumulador
        acumulador.push(valor);
    }
    // Retorna o acumulador para continuar a próxima iteração
    return acumulador;
}, []); // Inicia com array vazio
// Exibe os números ímpares encontrados
console.log("Ímpares:", impares); // Saída: Ímpares: [1, 3, 5, 7, 9]


// ----------------------------------------------------------------------------
// EXEMPLO 5: Encontrar a pessoa mais velha com reduce()
// ----------------------------------------------------------------------------
// Sem valor inicial, o reduce() usa o primeiro elemento como acumulador
const maisVelha = pessoas.reduce((pessoaMaisVelha, pessoaAtual) => {
    // Compara: se a pessoa acumulada for mais velha, mantém ela
    if (pessoaMaisVelha.idade > pessoaAtual.idade) {
        return pessoaMaisVelha;
    }
    // Caso contrário, a pessoa atual é mais velha — passa a ser o novo acumulador
    return pessoaAtual;
});
// Exibe o objeto da pessoa com maior idade
console.log("Mais velha:", maisVelha); // Saída: Mais velha: { nome: "Charlie", idade: 35 }


// ----------------------------------------------------------------------------
// EXEMPLO 6: Encadeamento — filter + map + reduce (pipeline)
// ----------------------------------------------------------------------------
// Cria um segundo array de números para o exemplo encadeado
const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Encadeia três métodos: cada um recebe o resultado do anterior
const somaDosParesDobrados = numeros2
    // 1º passo: mantém apenas os números pares → [50, 80, 2, 8, 22]
    .filter((valor) => valor % 2 === 0)
    // 2º passo: multiplica cada par por 2 → [100, 160, 4, 16, 44]
    .map((valor) => valor * 2)
    // 3º passo: soma todos os valores do array resultante
    .reduce((acumulador, valor) => acumulador + valor, 0); // Valor inicial 0 evita bugs

// Exibe a soma final do pipeline
console.log("Soma dos pares dobrados:", somaDosParesDobrados); // Saída: Soma dos pares dobrados: 324
