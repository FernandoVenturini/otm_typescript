"use strict";
// ETAPA 1: Introdução ao Tipo Object
// 1. Declarando variáveis do tipo object
const pessoa = {
    nome: "João",
    idade: 30
};
// Aceita qualquer objeto, mas não pode acessar propriedades diretamente
// 2. Object vs any
const dadosAny = { chave: "valor" };
console.log(dadosAny.chave); // Funciona - any permite acesso
const dadosObject = { chave: "valor" };
// console.log(dadosObject.chave); // ERRO: Property 'chave' does not exist on type 'object'
// ETAPA 2: Diferença entre object, Object e {}
// 3. object (minúsculo) - tipo mais restrito
const obj1 = { a: 1 }; // Válido
// const obj2: object = 42;     // ERRO: number não é object
// const obj3: object = "texto"; // ERRO: string não é object
// 4. Object (maiúsculo) - inclui tipos primitivos
const obj4 = { a: 1 }; // Válido
const obj5 = 42; // Válido - number wrapper
const obj6 = "texto"; // Válido - string wrapper
// 5. {} - objeto vazio (mais comum)
const obj7 = { a: 1 }; // Válido
const obj8 = 42; // Válido
const obj9 = "texto"; // Válido
// ETAPA 3: Uso Básico do Tipo Object
// 6. Função que aceita qualquer objeto
function processarObjeto(obj) {
    console.log("Tipo do objeto:", typeof obj);
    // Para acessar propriedades, precisamos de type guards
}
// 7. Chamadas válidas
processarObjeto({}); // Objeto vazio
processarObjeto({ nome: "Ana" }); // Objeto com propriedades
processarObjeto([]); // Array (é um objeto)
processarObjeto(new Date()); // Instância de classe
// 8. Chamadas inválidas
// processarObjeto(42);                // ERRO: number não é object
// processarObjeto("texto");           // ERRO: string não é object
// processarObjeto(null);              // ERRO: null não é object
// processarObjeto(undefined);         // ERRO: undefined não é object
// ETAPA 4: Type Guards com Object
// 9. Verificando tipo antes de acessar propriedades
function exibirNome(obj) {
    if ('nome' in obj && typeof obj.nome === 'string') {
        console.log(obj.nome); // Precisamos de type assertion
    }
    else {
        console.log("Objeto não possui propriedade 'nome'");
    }
}
// 10. Usando type predicates para segurança
function temPropriedade(obj, chave) {
    return chave in obj;
}
function acessarComSeguranca(obj, chave) {
    if (temPropriedade(obj, chave)) {
        console.log(obj[chave]); // Agora seguro - TypeScript sabe que existe
    }
}
// ETAPA 5: Object em Arrays e Estruturas Complexas
// 11. Array de objetos genéricos
const objetos = [
    { id: 1, nome: "Item 1" },
    { data: new Date(), valor: 100 },
    [1, 2, 3], // Array também é object
    new Map() // Map também é object
];
// 12. Função que processa array de objetos
function processarObjetos(objs) {
    objs.forEach((obj, index) => {
        console.log(`Objeto ${index}:`, obj);
    });
}
// 13. Object com index signature
const config = {
    database: { host: "localhost", port: 5432 },
    api: { endpoint: "/api", timeout: 5000 },
    ui: { theme: "dark", language: "pt-BR" }
};
// ETAPA 6: Object em Funções e Callbacks
// 14. Função que retorna object
function criarConfiguracao() {
    return {
        versao: "1.0.0",
        ambiente: "production",
        debug: false
    };
}
const duplicarObjeto = (obj) => {
    return { ...obj, copia: true };
};
// 16. Função de alta ordem com object
function comTiming(operacao) {
    return (obj) => {
        console.time("operacao");
        const resultado = operacao(obj);
        console.timeEnd("operacao");
        return resultado;
    };
}
// ETAPA 7: Casos de Uso Específicos do Object
// 17. Quando a estrutura do objeto não importa
function clonarObjeto(obj) {
    return JSON.parse(JSON.stringify(obj));
}
// 18. Para objetos de configuração dinâmica
function mesclarConfiguracoes(base, sobreposicao) {
    return { ...base, ...sobreposicao };
}
// 19. Em bibliotecas que trabalham com objetos genéricos
function validarObjetoNaoVazio(obj) {
    return Object.keys(obj).length > 0;
}
// ETAPA 8: Limitações e Alternativas ao Object
// 20. PROBLEMA: object é muito genérico
function processarUsuario(usuario) {
    // Não podemos acessar propriedades sem type guards
    // console.log(usuario.nome); // ERRO!
}
function processarUsuarioMelhor(usuario) {
    console.log(usuario.nome); // Válido - TypeScript conhece a estrutura
    console.log(usuario.email); // Válido
}
const configApp = {
    timeout: 5000,
    hostname: "localhost",
    ssl: true
};
// ETAPA 9: Object em Generics
// 23. Generic constraint com object
function obterPropriedades(obj) {
    return Object.keys(obj);
}
// 24. Função que trabalha com qualquer objeto
function congelarObjeto(obj) {
    return Object.freeze(obj);
}
// 25. Merge genérico de objetos
function mergeObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
// ETAPA 10: Exemplos Práticos
// 26. Sistema de logging com objetos genéricos
class Logger {
    static log(mensagem, metadata = {}) {
        console.log(`${mensagem}`, metadata);
    }
    static erro(mensagem, erro) {
        console.error(`${mensagem}`, erro);
    }
}
// 27. Uso do logger
Logger.log("Usuário logado", { usuario: "ana", hora: new Date() });
Logger.erro("Falha na conexão", {
    code: "ECONNREFUSED",
    stack: new Error().stack
});
// 28. Factory de objetos
function criarObjetoDinamico(tipo, props) {
    const base = { tipo, dataCriacao: new Date() };
    return { ...base, ...props };
}
const widget = criarObjetoDinamico("widget", {
    x: 100,
    y: 200,
    cor: "blue"
});
// Resumo do Tipo Object:
// 29. QUANDO USAR OBJECT:
// - Quando você precisa aceitar qualquer objeto, mas não primitivos
// - Em funções genéricas que processam objetos desconhecidos
// - Para parâmetros onde a estrutura não importa
// 30. QUANDO EVITAR OBJECT:
// - Quando você conhece a estrutura do objeto (use interfaces)
// - Para acessar propriedades específicas
// - Em APIs públicas onde tipos específicos são melhores
// 31. ALTERNATIVAS RECOMENDADAS:
// - Interfaces para objetos com estrutura conhecida
// - Record<string, unknown> para objetos com chaves string
// - { [key: string]: any } para objetos dinâmicos
// - unknown com type guards para máxima segurança
