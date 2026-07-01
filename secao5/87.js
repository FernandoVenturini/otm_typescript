// FOR EACH - Método de array que executa uma função para cada elemento do array

// Declara um array chamado 'numeros' contendo os valores de 1 a 5
const numeros = [1, 2, 3, 4, 5];

// Aplica o método forEach no array 'numeros'
// A função callback recebe três parâmetros:
// - valor: o elemento atual do array sendo processado
// - indice: a posição (índice) do elemento atual no array
// - array: uma referência ao array completo que está sendo percorrido
numeros.forEach(function (valor, indice, array) {
    // Exibe no console: o valor atual, seu índice e o array completo
    // Serve para depuração e visualização de todos os dados durante a iteração
    console.log(valor, indice, array);
});

// Declara um segundo array chamado 'numeros2' com valores de 6 a 10
const numeros2 = [6, 7, 8, 9, 10];

// Aplica forEach usando arrow function (sintaxe mais concisa)
// Neste caso, apenas o parâmetro 'valor' é utilizado
// Os outros parâmetros (indice e array) são omitidos por não serem necessários
// Serve para executar uma ação simples com cada elemento (neste caso, exibir no console)
numeros2.forEach(valor => console.log(valor));

// Declara um terceiro array chamado 'numero3' com valores de 11 a 15
const numero3 = [11, 12, 13, 14, 15];

// Inicializa a variável 'total' com valor 0
// Esta variável servirá para acumular a soma de todos os elementos do array
let total = 0;

// Aplica forEach com arrow function que recebe cada 'valor' do array
// A função adiciona o valor atual à variável 'total' a cada iteração
// Serve para somar todos os elementos do array (operações de acumulação/redução)
numero3.forEach((valor) => {
    total += valor;  // total = total + valor - acumula a soma dos elementos
});

// Exibe o valor final da soma de todos os elementos do array 'numero3'
// Neste caso, será exibido: 65 (pois 11+12+13+14+15 = 65)
// Serve para mostrar o resultado da operação de soma realizada
console.log(total);