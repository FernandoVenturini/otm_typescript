// 📚 REVISÃO DO BÁSICO — ARRAYS EM JAVASCRIPT
// 1️⃣ Criando Arrays

// 🔹 Forma antiga (com construtor)
const nomes = new Array('Eduardo', 'Maria', 'Joana');

// 🔹 Forma moderna e mais usada (literal)
//                            0             1         2         3        4         5
const nomes2 = ['Eduardo', 'Maria', 'Joana', 'João', 'Ana', 'Beatriz'];

// ✅ Preferência: Use sempre a forma moderna com colchetes [].

// 2️⃣ Manipulando elementos
// Método	    O que faz	                                                            Exemplo
/*shift()	       Remove o primeiro elemento do array	                    nomes2.shift()
unshift()	      Adiciona um elemento no início do array	               nomes2.unshift('João')
push()	          Adiciona um elemento no final do array	               nomes2.push('Ana')
pop()	           Remove o último elemento do array	                    nomes2.pop()
slice(início, fim)	Remove elementos entre os índices	                  nomes2.slice(1, 2)
splice(início, qtd, el1, el2)	Remove elementos e adiciona novos elementos	nomes2.splice(1, 2, 'Novo Nome')
*/

// 3️⃣ Exemplo prático passo a passo

// Remove o primeiro elemento (Eduardo)
nomes2.shift(0, 1);

// Adiciona 'INICIO DO ARRAY' no início
nomes2.unshift('INICIO DO ARRAY');

// Adiciona elementos no final
nomes2.push('FINAL DO ARRAY');
nomes2.push('FINAL DO ARRAY 2');

// Remove o último elemento
nomes2.pop();

// Remove elementos a partir do índice 1, removendo 2 elementos
nomes2.slice(1, 2);

// Remove elementos a partir do índice 1, removendo 2 elementos e adicionando 'NOVO NOME' no lugar
nomes2.splice(1, 2, 'NOVO NOME');

// Exibe o resultado no console
console.log(nomes2);


// 🔹 Cria um NOVO array com os elementos de nomes2 + 'NOVO NOME' no final
const novoNome = [...nomes2, 'NOVO NOME'];

console.log(novoNome);
// ⚠️ Importante: O spread operator (...) não altera o array original. Ele cria uma cópia.