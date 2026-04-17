// TYPE ASSERTIONS: Use type assertion quando você tem certeza do tipo, não para “calar” erros sem pensar.

const body = document.querySelector("body"); // Type: HTMLElement | null
if (body) body.style.background = "red"; // Type guard


// Type assertion básica (as:
let valor: any = "isso é um texto"; // Type: any
let tamanho = (valor as string).length; // Type assertion para string
console.log(`Tamanho: ${tamanho}`);

// Type assertion com sintaxe alternativa (<tipo>):
let valor2: any = 'Teste';
let tamanho2 = (<string>valor2).length; // Type assertion para string
console.log(`Tamanho: ${tamanho2}`);

// Type assertion em objetos:
type Usuario = {
    nome: string;
    idade: number;
};

let usuario = {} as Usuario; // Type assertion para o tipo Usuario
usuario.nome = "Fernando";
usuario.idade = 45;
console.log(`Usuario: ${usuario.nome}, Idade: ${usuario.idade}`);

// Type assertion com unknown:Boa prática quando você recebe algo genérico (API, JSON, etc.):
let resposta: unknown = '123'; // Type: unknown
let numero = resposta as string // Type assertion para string
console.log(numero.toUpperCase());
// unknown força você a validar ou afirmar o tipo antes de usar.

// Type assertion em DOM (bem comum!):
const input = document.querySelector("#email") as HTMLInputElement; // Afirmando que é um input
input.value = "fernando@otm.com";
//Sem o as HTMLInputElement, o TypeScript não sabe que existe .value.

// Type assertion NÃO faz conversão de tipos: Isso aqui não transforma o valor em outro tipo:
let valor = "123" as unknown as number; // Ainda é uma string, mas o TypeScript pensa que é number
//Isso só engana o TypeScript — em runtime continua sendo string.
// Para converter de verdade, use:
let valor = Number("123"); // Agora é realmente um number
console.log(`Valor convertido: ${valor}, Tipo: ${typeof valor}`);

//Type assertion com union types:
function mostrarId(id: number | string) {
    if (typeof id === "string") {
        console.log((id as string).toUpperCase()); // Type assertion para string
    }
}
// Nesse caso, o as string é até redundante, mas aparece bastante.