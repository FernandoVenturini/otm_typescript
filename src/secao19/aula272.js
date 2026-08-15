"use strict";
// ETAPA 1: Introdução ao Tipo Void
// 1. Void em funções que não retornam valor
function cumprimentar(nome) {
    console.log(`Olá, ${nome}!`);
    // Função não retorna nada - implicitamente retorna undefined
}
// 2. Chamando função void
cumprimentar("Maria"); // Executa a função mas não captura retorno
// ETAPA 2: Funções com Retorno Void
// 3. Função que apenas modifica estado externo
let contador = 0;
function incrementarContador() {
    contador++;
    // Altera variável externa, mas não retorna valor
}
// 4. Função void com operações side-effect
function logarErro(mensagem) {
    console.log(`ERRO: ${mensagem}`);
}
// 5. Arrow function com void
const exibirLoading = (mostrar) => {
    if (mostrar) {
        console.log("Carregando...");
    }
    else {
        console.log("Concluido!");
    }
};
// ETAPA 3: Diferença entre Void e Outros Tipos
// 6. Void vs Undefined
function semRetorno() {
    console.log("Esta função não retorna nada");
    // Retorno implícito: undefined
}
function retornaUndefined() {
    console.log("Esta função explicitamente retorna undefined");
    return undefined; // Obrigatório com tipo undefined
}
// 7. Void vs Never
function lancarErro(mensagem) {
    throw new Error(mensagem);
    // Never = função que NUNCA termina normalmente
}
function processoInfinite() {
    while (true) {
        // Loop infinito - nunca retorna
    }
}
// ETAPA 4: Void em Callbacks e Event Handlers
// 8. Callback com retorno void
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero) => {
    console.log(`Numero: ${numero}`);
});
// // 9. Event handler - tipicamente void
function handleClick(event) {
    event.preventDefault();
    console.log("Botão clicado!");
    // Handlers de evento geralmente não retornam valores
}
// 10. Função que aceita callback void
function executarComRetry(acao, tentativas) {
    for (let i = 0; i < tentativas; i++) {
        try {
            acao(); // Callback que não retorna valor
            break; // Sucesso - para as tentativas
        }
        catch (erro) {
            console.log(`Tentativa ${i + 1} falhou`);
        }
    }
}
// ETAPA 5: Void em Contextos de Variáveis
// 11. ATENÇÃO: void em variáveis é praticamente inútil
let resultadoVoid;
// resultadoVoid = "texto"; // ERRO: Type 'string' not assignable to type 'void'
// resultadoVoid = 123;     // ERRO: Type 'number' not assignable to type 'void'
resultadoVoid = undefined; // ÚNICA atribuição permitida (às vezes void também)
// resultadoVoid = null;    // Depende da configuração strictNullChecks
// 12. Uso raro de void em variáveis
function processar() {
    console.log("Processando...");
}
const resultado = processar();
// resultado só pode ser undefined (ou null com configurações específicas)
// ETAPA 6: Void em Promises e Async
// 13. Função async que não retorna valor
async function carregarDados() {
    console.log("Iniciando carregamento...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Dados carregados!");
    // Async functions sempre retornam Promise, mas o valor pode ser void
}
// 14. Usando Promise<void>
async function enviarEmail(destinatario) {
    // Simulação de envio de email
    await fetch(`https://api.email.com/send`, {
        method: "POST",
        body: JSON.stringify({ to: destinatario })
    });
    console.log(`Email enviado para ${destinatario}`);
}
// 15. Consumindo Promise<void>
async function processoPrincipal() {
    await carregarDados(); // Não espera valor de retorno
    await enviarEmail("user@example.com");
    console.log("Processo concluído");
}
// ETAPA 7: Casos de Uso Comuns do Void
// 16. Métodos de classe que não retornam valor
class Usuario {
    constructor(nome) {
        this.nome = nome;
    }
    // Método void - altera estado interno
    alterarNome(novoNome) {
        this.nome = novoNome;
    }
    // Método void - exibe informação
    exibirInfo() {
        console.log(`Usuário: ${this.nome}`);
    }
}
// 18. Implementação da interface
class RepositorioMemoria {
    constructor() {
        this.dados = [];
    }
    salvar(dados) {
        this.dados.push(dados);
    }
    excluir(id) {
        this.dados = this.dados.filter(item => item.id !== id);
    }
    limpar() {
        this.dados = [];
    }
}
const acoes = [
    () => console.log("Ação 1"),
    () => console.log("Ação 2"),
    () => console.log("Ação 3")
];
// 20. Executando array de funções void
function executarAcoes(acoes) {
    acoes.forEach(acao => acao());
}
// 21. QUIRK: TypeScript permite ignorar retorno em callbacks void
const numeros2 = [1, 2, 3];
const strings = numeros2.map((num) => {
    console.log(num);
    // Mesmo retornando número, TypeScript não reclama em contexto void
    return num.toString(); // Isso é permitido! Quirk do TypeScript
});
// ETAPA 9: Boas Práticas com Void
// 22. SEMPRE use void para funções que não retornam valor
function atualizarInterface() {
    // Claramente comunica a intenção
    document.getElementById("status").textContent = "Atualizado";
}
// 23. EVITE usar void em variáveis - é quase sempre desnecessário
// ❌ Ruim:
let valor = undefined;
// ✅ Bom:
function acao() {
    // lógica aqui
}
// Resumo do Tipo Void:
// 25. PRINCIPAIS PONTOS:
// - Usado principalmente para funções que não retornam valor
// - Representa a ausência de um valor de retorno
// - Diferente de undefined: void é para funções, undefined é um valor
// - Diferente de never: void termina, never nunca termina
// - Em variáveis é muito restritivo (só aceita undefined/null)
// - Essencial para callbacks, event handlers e métodos sem retorno
