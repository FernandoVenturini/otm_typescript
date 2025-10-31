// Tipo void
function semRetorno(...args: string[]): void { // A função não retorna nenhum valor
	console.log(args.join(' ')); // Imprime os argumentos concatenados como uma string
}

const pessoa = {
	nome: 'Ana',
	sobrenome: 'Silva',

	exibirNome(): void { // Método que não retorna nenhum valor
		console.log(`${this.nome} ${this.sobrenome}`); // Imprime o nome completo da pessoa
	}
}

semRetorno('Olá', 'mundo!'); // Output: Olá mundo!
pessoa.exibirNome(); // Output: Ana Silva