// Tipos basicos:
let nome:string = 'João';
let idade:number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('simbolo');
let big: bigint = 10n;

// Arrays:
let arrayDeNumeros: Array<number> = [1, 2, 3]; // Generics
let arrayDeNumeros2: number[] = [4, 5, 6]; // Notação de colchetes

let arrayDeStrings2: Array<string> = ['a', 'b', 'c']; // Generics
let arrayDeStrings: string[] = ['a', 'b', 'c']; // Notação de colchetes

// Objetos:
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
	nome: 'Maria',
	idade: 25
};


// Funções:
function soma(x: number, y: number): number {
	return x + y;
}
const result = soma(5, 10);