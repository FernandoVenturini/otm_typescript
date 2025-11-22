// ETAPA 1: Sintaxes Básicas de Array
// 1. Sintaxe com colchetes (mais comum)
const numeros: number[] = [1, 2, 3, 4, 5];
const numeros2: number[] = [6, 7, 8, 9, 10];
// Array que só pode conter números

// 2. Sintaxe com generic Array<T>
const frutas: Array<string> = ["maçã", "banana", "laranja"];
const carros: Array<string> = ["BMW", "Mercedes", "Ford"];
// Array que só pode conter strings - equivalente à sintaxe anterior

// 3. Array vazio com tipo explícito
const vazios: string[] = [];
// Array vazio que só aceitará strings no futuro


// ETAPA 2: Arrays de Diferentes Tipos
// 4. Array de booleanos
const flags: boolean[] = [true, false, true];

// 5. Array de objetos com interface
interface Usuario {
    id: number;
    nome: string;
}

const usuarios: Usuario[] = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Carlos" }
];

interface Usuario2 {
    id: number;
    nome: string;
}
const usuarios2: Usuario2[] = [
    { id: 1, nome: "Fernando"}, 
    { id: 2, nome: "Lavinia" }
];

// 6. Array de arrays (matriz)
const matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


// ETAPA 3: Arrays com Union Types
// 7. Array que aceita múltiplos tipos
const misto: (string | number)[] = ["texto", 42, "outro", 100];
// Pode conter strings E números em qualquer ordem

// 8. Array com vários tipos
const diverso: (string | number | boolean)[] = [
    "hello", 
    123, 
    true, 
    "world"
];

// 9. Array com tipos complexos
type Resposta = string | { erro: string } | null;
const respostas: Resposta[] = [
    "sucesso",
    { erro: "falha na conexão" },
    null,
    "ok"
];


// ETAPA 4: Arrays Readonly
// 10. Array somente leitura - não pode ser modificado
const constantes: readonly number[] = [1, 2, 3];
// constantes.push(4); // ERRO: Property 'push' does not exist on type 'readonly number[]'
// constantes[0] = 10; // ERRO: Index signature in type 'readonly number[]' only permits reading

// 11. Sintaxe alternativa com ReadonlyArray
const imutavel: ReadonlyArray<string> = ["a", "b", "c"];
// imutavel.pop(); // ERRO: Cannot mutate readonly array

// 12. Usando const assertions para arrays readonly
const cores = ["red", "green", "blue"] as const;
// cores[0] = "yellow"; // ERRO: Cannot assign to readonly property


// ETAPA 5: Métodos de Array com Type Safety
// 13. Map com tipo de retorno inferido
const numerosDobrados = numeros.map(num => num * 2);
// TypeScript infere que numerosDobrados é number[]

// 14. Map com tipo explícito de retorno
const comprimentos: number[] = frutas.map((fruta: string): number => {
    return fruta.length;
});

// 15. Filter com type guards
const valores = [1, "texto", 2, "outro", 3];
const apenasNumeros = valores.filter((valor): valor is number => {
    return typeof valor === "number";
});
// TypeScript sabe que apenasNumeros é number[]

// 16. Reduce com tipo explícito
const soma = numeros.reduce((acc: number, curr: number): number => {
    return acc + curr;
}, 0);

// ETAPA 6: Tuplas - Arrays com Posições Específicas
// 17. Tupla básica - array com tipos específicos em cada posição
const pessoa: [string, number, boolean] = ["João", 30, true];
// Posição 0: string, Posição 1: number, Posição 2: boolean

// 18. Tupla com elementos opcionais
const config: [string, number?] = ["localhost"];
// Segundo elemento é opcional

// 19. Tupla com rest operator
const endereco: [string, ...number[]] = ["Rua A", 123, 456, 789];
// Primeiro elemento string, resto números

// 20. Tupla nomeada (TypeScript 4.0+)
type PessoaTuple = [nome: string, idade: number, ativo: boolean];
const pessoa2: PessoaTuple = ["Maria", 25, false];


// ETAPA 7: Arrays em Funções
// 21. Parâmetro de função como array
function processarNumeros(numeros: number[]): number {
    return numeros.reduce((sum, num) => sum + num, 0);
}

// 22. Função que retorna array
function criarSequencia(tamanho: number): number[] {
    return Array.from({ length: tamanho }, (_, i) => i + 1);
}

// 23. Função com array de parâmetros rest
function juntarStrings(...palavras: string[]): string {
    return palavras.join(" ");
}

// 24. Função com tupla como parâmetro
function processarPessoa([nome, idade, ativo]: [string, number, boolean]): void {
    console.log(`${nome}, ${idade} anos, ${ativo ? "ativo" : "inativo"}`);
}


// ETAPA 8: Generics com Arrays
// 25. Função genérica com array
function obterPrimeiroElemento<T>(array: T[]): T | undefined {
    return array[0];
}

// 26. Uso da função genérica
const primeiroNumero = obterPrimeiroElemento([1, 2, 3]);        // Tipo: number
const primeiraString = obterPrimeiroElemento(["a", "b", "c"]);  // Tipo: string

// 27. Classe com array genérico
class Pilha<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }
}

// 28. Uso da pilha genérica
const pilhaNumeros = new Pilha<number>();
pilhaNumeros.push(1);
pilhaNumeros.push(2);


// ETAPA 9: Arrays com Type Assertions
// 29. Type assertion quando TypeScript não consegue inferir
const dados = JSON.parse('[1, 2, 3, 4, 5]') as number[];
// Afirmamos que o resultado é um array de números

// 30. Type assertion com any
const elementos: any[] = [1, "texto", true, { nome: "obj" }];
const apenasStrings = elementos.filter(e => typeof e === "string") as string[];

// 31. Non-null assertion com arrays
const arrayPossivelmenteNull: number[] | null = [1, 2, 3];
const comprimento = arrayPossivelmenteNull!.length;
// ! afirma que o array não é null/undefined


// ETAPA 10: Casos de Uso Avançados
// 32. Array como tipo de propriedade em interface
interface Departamento {
    nome: string;
    funcionarios: string[];
    projetos: Array<{ nome: string; prazo: Date }>;
}

// 33. Array em tipos condicionais
type ArrayOrSingle<T> = T | T[];

function garantirArray<T>(input: ArrayOrSingle<T>): T[] {
    return Array.isArray(input) ? input : [input];
}

// 34. Array com chaves dinâmicas
type Dicionario = Array<{ [key: string]: any }>;

const registros: Dicionario = [
    { id: 1, nome: "A", valor: 100 },
    { id: 2, nome: "B", valor: 200 }
];

// 35. Array com tipos mapeados
type Coordenadas = [number, number, number];
type CoordenadasRotacionadas = [Coordenadas, Coordenadas, Coordenadas];

const cubo: CoordenadasRotacionadas = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
];


// ETAPA 11: Exemplos Práticos
// 36. Sistema de carrinho de compras
interface ItemCarrinho {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
}

class Carrinho {
    private itens: ItemCarrinho[] = [];

    adicionarItem(item: ItemCarrinho): void {
        this.itens.push(item);
    }

    calcularTotal(): number {
        return this.itens.reduce((total, item) => {
            return total + (item.preco * item.quantidade);
        }, 0);
    }

    listarItens(): ReadonlyArray<ItemCarrinho> {
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