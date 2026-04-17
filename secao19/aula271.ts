// ETAPA 1: Introdução ao Tipo Any
// 1. Declarando uma variável com tipo 'any'
let dados: any = "Texto inicial";
// 'any' desativa a verificação de tipos - aceita qualquer valor

// 2. Reatribuindo com diferentes tipos (algo que daria erro com outros tipos)
dados = 42;        // Número - válido com 'any'
dados = true;      // Boolean - válido com 'any'
dados = [1, 2, 3]; // Array - válido com 'any'

// ETAPA 2: Any vs Tipos Específicos
// 3. Comparação: variável tipada vs any
let nome: string = "João";
// nome = 123; // ERRO: Type 'number' not assignable to type 'string'

let informacao: any = "Maria";
informacao = 456; // VÁLIDO: 'any' permite qualquer atribuição

// 4. Usando any com objetos
let usuario: any = {
    nome: "Carlos",
    idade: 30
};

// 5. Modificando propriedades livremente
usuario.email = "carlos@email.com";     // Adicionando nova propriedade
usuario.idade = "trinta";               // Mudando tipo da propriedade

// ETAPA 3: Any em Funções
// 6. Função com parâmetro any - aceita qualquer tipo de argumento
function processarDados(entrada: any): any {
    console.log(`Processando: ${entrada}`);
    return entrada; // Pode retornar qualquer tipo
}

// 7. Chamadas válidas com diferentes tipos
processarDados("texto");        // String
processarDados(123);            // Number  
processarDados({ chave: "valor" }); // Object

// 8. Função que retorna any - perdemos a informação do tipo
function obterDados(): any {
    return Math.random() > 0.5 ? "sucesso" : 404;
}

const resultado = obterDados();
// resultado pode ser string ou number - TypeScript não sabe qual

// ETAPA 4: Any com Arrays
// 9. Array com tipo any - pode misturar tipos diferentes
const listaMista: any[] = ["texto", 42, true, { nome: "obj" }];
// Diferente de arrays normais que exigem tipos consistentes

// 10. Adicionando qualquer tipo ao array
listaMista.push(null);
listaMista.push([1, "dois", false]);

// 11. Acessando elementos sem verificação de tipo
const primeiro = listaMista[0]; // Tipo: any - pode ser qualquer coisa

// ETAPA 5: Problemas e Riscos do Any
// 12. PERIGO: Operações sem verificação de tipo
let valor: any = "isso é um texto";

// 13. TypeScript não previne operações inválidas
let comprimento = valor.length;        // Funciona - valor é string
valor = 123;                           // Mudou para number
let comprimento2 = valor.length;       // UNDEFINED! number não tem .length

// 14. PERIGO: Chamadas de método sem verificação
let objeto: any = { x: 10 };
// objeto.metodoInexistente(); // ERRO em tempo de execução!

// 15. PERIGO: Operações matemáticas com tipos incompatíveis
let numero: any = "100";
let resultado2 = numero + 50; // "10050" (concatenação em vez de soma)

// ETAPA 6: Casos de Uso Legítimos do Any
// 16. Migração de JavaScript para TypeScript
const dadosLegados: any = obterDadosDeBibliotecaJavaScript();
// Útil quando não sabemos o tipo retornado por bibliotecas externas

// 17. Trabalhando com APIs dinâmicas
function parseJson(jsonString: string): any {
    return JSON.parse(jsonString); // O tipo do JSON pode variar
}

const dadosApi = parseJson('{"nome": "João", "idade": 30}');
// TypeScript não sabe a estrutura do objeto retornado

// 18. Quando precisamos de flexibilidade temporária
let config: any = carregarConfiguracao();
// Mais tarde podemos refinar para tipos específicos

// ETAPA 7: Alternativas Melhores que Any
// 19. Em vez de any, use union types quando possível
let id: string | number = "ABC123";
id = 123; // Válido, mas mais seguro que any

// 20. Unknown - alternativa mais segura ao any
let dadosSeguros: unknown = "texto";
// dadosSeguros.toUpperCase(); // ERRO: precisa de type guard

// 21. Type guards com unknown
if (typeof dadosSeguros === "string") {
    dadosSeguros.toUpperCase(); // Agora seguro - TypeScript sabe que é string
}

// 22. Interfaces para objetos dinâmicos
interface DadosDinamicos {
    [key: string]: any; // Propriedades com chave string e valor qualquer
}

const dadosFlexiveis: DadosDinamicos = {
    nome: "Maria",
    idade: 25,
    ativo: true
};

// 23. QUANDO USAR ANY:
// - Migração gradual de JS para TS
// - Dados de fontes externas desconhecidas  
// - Prototipagem rápida

// 24. QUANDO EVITAR ANY:
// - Código de produção
// - Quando tipos podem ser inferidos
// - Para manter a segurança de tipos

// 25. LEMBRETE: Any remove todos os benefícios do TypeScript!
// Use com moderação e prefira tipos específicos quando possível