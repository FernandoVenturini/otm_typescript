// ETAPA 1: Declaração de Variáveis Básicas

// 1. Declaração de string com type annotation
const nome: string = "João Silva";
const nome2: string = "Fernando";
// A variável 'nome' e 'nome2' só podem receber valores do tipo string

// 2. Declaração de number com type annotation
const idade: number = 30;
const age: number = 45;
// A variável 'idade' e 'age' só podem receber valores numéricos

// 3. Declaração de boolean com type annotation
const ativo: boolean = true;
const inativo: boolean = false;
// A variável 'ativo' e ' inativo só podem receber true ou false


// ETAPA 2: Arrays e Tipos Complexos
// 4. Array de números com type annotation
const numeros: number[] = [1, 2, 3, 4, 5];
// O array só pode conter elementos do tipo number

// 5. Array de strings com type annotation
const frutas: Array<string> = ["maçã", "banana", "laranja"];
// Sintaxe alternativa usando Array<tipo>

// 6. Tupla - array com tipos específicos em cada posição
const pessoa: [string, number, boolean] = ["Maria", 25, true];
// Posição 0: string, Posição 1: number, Posição 2: boolean

// ETAPA 3: Interfaces e Objetos
// 7. Definição de interface para um objeto
interface Usuario {
    id: number;
    nome: string;
    email: string;
    idade?: number; // O '?' indica que a propriedade é opcional
}

// 8. Criando objeto que segue a interface Usuario
const usuario1: Usuario = {
    id: 1,
    nome: "Ana Costa",
    email: "ana@email.com"
    // A propriedade 'idade' é opcional, então pode ser omitida
};
// 8.1 Criando segundo objeto que segue a interface Usuario
const usuario2: Usuario = {
    id: 2,
    nome: "Fernando",
    email: "fernando@email.com",
    idade: 45
}

// ETAPA 4: Funções com Type Annotations
// 9. Função com parâmetros e retorno tipados
function somar(a: number, b: number): number {
    // Parâmetros a e b devem ser números, retorno também deve ser número
    return a + b;
}

// 10. Função que não retorna valor (void)
function exibirMensagem(mensagem: string): void {
    // O tipo 'void' indica que a função não retorna nenhum valor
    console.log(mensagem);
}

// 11. Arrow function com type annotations
const multiplicar = (x: number, y: number): number => {
    return x * y;
};

// ETAPA 5: Union Types e Type Aliases
// 12. Union type - variável que pode ser de mais de um tipo
let id: string | number;
// 'id' pode ser tanto string quanto number
id = "ABC123"; // Válido
id = 123;      // Também válido

// 13. Type alias - criando um tipo personalizado
type StatusPedido = "pendente" | "processando" | "concluido" | "cancelado";

// 14. Usando o type alias
const StatusDoPedido: StatusPedido = "pendente";
// Só pode receber um dos valores definidos no type alias


// ETAPA 6: Exemplo Prático Integrado
// 15. Interface complexa para um sistema de e-commerce
interface Produto {
    id: number;
    nome: string;
    preco: number;
    categorias: string[];
    emEstoque: boolean;
}

// 16. Função que processa produtos
function calcularTotal(produtos: Produto[]): number {
    // Recebe um array de Produtos e retorna um número
    return produtos.reduce((total, produto) => total + produto.preco, 0); // Soma os preços dos produtos
}

// 17. Criando e usando os dados
const carrinho: Produto[] = [ // Array de Produtos
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
const totalCompra: number = calcularTotal(carrinho); // Retorno é do tipo number
console.log(`Total: R$ ${totalCompra}`);

// Fim do código com TypeScript e Type Annotations