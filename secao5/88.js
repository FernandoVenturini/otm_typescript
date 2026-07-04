// REVISANDO OBJETOS

const pessoa = {
    nome:'Fernando',
    sobrenome: 'Venturini',
    idade: 45,
}

console.log(pessoa.nome) // Fernando
console.log(pessoa['sobrenome']) // Venturini
console.log(pessoa.idade) // 45



const pessoa1 = new Object() // Cria um objeto vazio
pessoa1.idade = 45;
pessoa1.getDataDeNascimento = function () { // Método que retorna a data de nascimento
    const dataAtual = new Date(); // Objeto que representa a data atual
    return dataAtual.getFullYear() - this.idade; // Retorna o ano atual menos a idade
}
console.log(pessoa1.getDataDeNascimento()) // 1978;