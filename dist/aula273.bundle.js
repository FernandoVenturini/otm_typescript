/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/secao19/aula273/index.ts ***!
  \**************************************/
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// ETAPA 1: Introdução ao Tipo Object
// 1. Declarando variáveis do tipo object
var pessoa = {
  nome: "João",
  idade: 30
};
// Aceita qualquer objeto, mas não pode acessar propriedades diretamente

// 2. Object vs any
var dadosAny = {
  chave: "valor"
};
console.log(dadosAny.chave); // Funciona - any permite acesso

var dadosObject = {
  chave: "valor"
};
// console.log(dadosObject.chave); // ERRO: Property 'chave' does not exist on type 'object'

// ETAPA 2: Diferença entre object, Object e {}
// 3. object (minúsculo) - tipo mais restrito
var obj1 = {
  a: 1
}; // Válido
// const obj2: object = 42;     // ERRO: number não é object
// const obj3: object = "texto"; // ERRO: string não é object

// 4. Object (maiúsculo) - inclui tipos primitivos
var obj4 = {
  a: 1
}; // Válido
var obj5 = 42; // Válido - number wrapper
var obj6 = "texto"; // Válido - string wrapper

// 5. {} - objeto vazio (mais comum)
var obj7 = {
  a: 1
}; // Válido
var obj8 = 42; // Válido
var obj9 = "texto"; // Válido

// ETAPA 3: Uso Básico do Tipo Object
// 6. Função que aceita qualquer objeto
function processarObjeto(obj) {
  console.log("Tipo do objeto:", _typeof(obj));
  // Para acessar propriedades, precisamos de type guards
}

// 7. Chamadas válidas
processarObjeto({}); // Objeto vazio
processarObjeto({
  nome: "Ana"
}); // Objeto com propriedades
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
  } else {
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
var objetos = [{
  id: 1,
  nome: "Item 1"
}, {
  data: new Date(),
  valor: 100
}, [1, 2, 3],
// Array também é object
new Map() // Map também é object
];

// 12. Função que processa array de objetos
function processarObjetos(objs) {
  objs.forEach(function (obj, index) {
    console.log("Objeto ".concat(index, ":"), obj);
  });
}

// 13. Object com index signature
var config = {
  database: {
    host: "localhost",
    port: 5432
  },
  api: {
    endpoint: "/api",
    timeout: 5000
  },
  ui: {
    theme: "dark",
    language: "pt-BR"
  }
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

// 15. Callback com object

var duplicarObjeto = function duplicarObjeto(obj) {
  return _objectSpread(_objectSpread({}, obj), {}, {
    copia: true
  });
};

// 16. Função de alta ordem com object
function comTiming(operacao) {
  return function (obj) {
    console.time("operacao");
    var resultado = operacao(obj);
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
  return _objectSpread(_objectSpread({}, base), sobreposicao);
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

// 21. SOLUÇÃO: Use interfaces ou types específicos

function processarUsuarioMelhor(usuario) {
  console.log(usuario.nome); // Válido - TypeScript conhece a estrutura
  console.log(usuario.email); // Válido
}

// 22. SOLUÇÃO: Record para objetos com chaves conhecidas

var configApp = {
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
  return _objectSpread(_objectSpread({}, obj1), obj2);
}

// ETAPA 10: Exemplos Práticos
// 26. Sistema de logging com objetos genéricos
var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }
  return _createClass(Logger, null, [{
    key: "log",
    value: function log(mensagem) {
      var metadata = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      console.log("".concat(mensagem), metadata);
    }
  }, {
    key: "erro",
    value: function erro(mensagem, _erro) {
      console.error("".concat(mensagem), _erro);
    }
  }]);
}(); // 27. Uso do logger
Logger.log("Usuário logado", {
  usuario: "ana",
  hora: new Date()
});
Logger.erro("Falha na conexão", {
  code: "ECONNREFUSED",
  stack: new Error().stack
});

// 28. Factory de objetos
function criarObjetoDinamico(tipo, props) {
  var base = {
    tipo: tipo,
    dataCriacao: new Date()
  };
  return _objectSpread(_objectSpread({}, base), props);
}
var widget = criarObjetoDinamico("widget", {
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVsYTI3My5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxNQUFjLEdBQUc7RUFDbkJDLElBQUksRUFBRSxNQUFNO0VBQ1pDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFDRDs7QUFFQTtBQUNBLElBQU1DLFFBQWEsR0FBRztFQUFFQyxLQUFLLEVBQUU7QUFBUSxDQUFDO0FBQ3hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztBQUU3QixJQUFNRyxXQUFtQixHQUFHO0VBQUVILEtBQUssRUFBRTtBQUFRLENBQUM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBLElBQU1JLElBQVksR0FBRztFQUFFQyxDQUFDLEVBQUU7QUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQjtBQUNBOztBQUVBO0FBQ0EsSUFBTUMsSUFBWSxHQUFHO0VBQUVELENBQUMsRUFBRTtBQUFFLENBQUMsQ0FBQyxDQUFLO0FBQ25DLElBQU1FLElBQVksR0FBRyxFQUFFLENBQUMsQ0FBVztBQUNuQyxJQUFNQyxJQUFZLEdBQUcsT0FBTyxDQUFDLENBQU07O0FBRW5DO0FBQ0EsSUFBTUMsSUFBUSxHQUFHO0VBQUVKLENBQUMsRUFBRTtBQUFFLENBQUMsQ0FBQyxDQUFTO0FBQ25DLElBQU1LLElBQVEsR0FBRyxFQUFFLENBQUMsQ0FBZTtBQUNuQyxJQUFNQyxJQUFRLEdBQUcsT0FBTyxDQUFDLENBQVU7O0FBRW5DO0FBQ0E7QUFDQSxTQUFTQyxlQUFlQSxDQUFDQyxHQUFXLEVBQVE7RUFDeENaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFBWSxPQUFBLENBQVNELEdBQUcsRUFBQztFQUMxQztBQUNKOztBQUVBO0FBQ0FELGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQW9CO0FBQ3hDQSxlQUFlLENBQUM7RUFBRWYsSUFBSSxFQUFFO0FBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBTTtBQUN2Q2UsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQW1CO0FBQ3ZDQSxlQUFlLENBQUMsSUFBSUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQVc7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBLFNBQVNDLFVBQVVBLENBQUNILEdBQVcsRUFBUTtFQUNuQyxJQUFJLE1BQU0sSUFBSUEsR0FBRyxJQUFJLE9BQVFBLEdBQUcsQ0FBU2hCLElBQUksS0FBSyxRQUFRLEVBQUU7SUFDeERJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFVyxHQUFHLENBQVNoQixJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3BDLENBQUMsTUFBTTtJQUNISSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQztFQUN2RDtBQUNKOztBQUVBO0FBQ0EsU0FBU2UsY0FBY0EsQ0FDbkJKLEdBQU0sRUFDTmIsS0FBUSxFQUNxQjtFQUM3QixPQUFPQSxLQUFLLElBQUlhLEdBQUc7QUFDdkI7QUFFQSxTQUFTSyxtQkFBbUJBLENBQUNMLEdBQVcsRUFBRWIsS0FBYSxFQUFRO0VBQzNELElBQUlpQixjQUFjLENBQUNKLEdBQUcsRUFBRWIsS0FBSyxDQUFDLEVBQUU7SUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxHQUFHLENBQUNiLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM3QjtBQUNKOztBQUdBO0FBQ0E7QUFDQSxJQUFNbUIsT0FBaUIsR0FBRyxDQUN0QjtFQUFFQyxFQUFFLEVBQUUsQ0FBQztFQUFFdkIsSUFBSSxFQUFFO0FBQVMsQ0FBQyxFQUN6QjtFQUFFd0IsSUFBSSxFQUFFLElBQUlOLElBQUksQ0FBQyxDQUFDO0VBQUVPLEtBQUssRUFBRTtBQUFJLENBQUMsRUFDaEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUFFO0FBQ1gsSUFBSUMsR0FBRyxDQUFDLENBQUMsQ0FBRTtBQUFBLENBQ2Q7O0FBRUQ7QUFDQSxTQUFTQyxnQkFBZ0JBLENBQUNDLElBQWMsRUFBUTtFQUM1Q0EsSUFBSSxDQUFDQyxPQUFPLENBQUMsVUFBQ2IsR0FBRyxFQUFFYyxLQUFLLEVBQUs7SUFDekIxQixPQUFPLENBQUNDLEdBQUcsV0FBQTBCLE1BQUEsQ0FBV0QsS0FBSyxRQUFLZCxHQUFHLENBQUM7RUFDeEMsQ0FBQyxDQUFDO0FBQ047O0FBRUE7QUFDQSxJQUFNZ0IsTUFBaUMsR0FBRztFQUN0Q0MsUUFBUSxFQUFFO0lBQUVDLElBQUksRUFBRSxXQUFXO0lBQUVDLElBQUksRUFBRTtFQUFLLENBQUM7RUFDM0NDLEdBQUcsRUFBRTtJQUFFQyxRQUFRLEVBQUUsTUFBTTtJQUFFQyxPQUFPLEVBQUU7RUFBSyxDQUFDO0VBQ3hDQyxFQUFFLEVBQUU7SUFBRUMsS0FBSyxFQUFFLE1BQU07SUFBRUMsUUFBUSxFQUFFO0VBQVE7QUFDM0MsQ0FBQzs7QUFJRDtBQUNBO0FBQ0EsU0FBU0MsaUJBQWlCQSxDQUFBLEVBQVc7RUFDakMsT0FBTztJQUNIQyxNQUFNLEVBQUUsT0FBTztJQUNmQyxRQUFRLEVBQUUsWUFBWTtJQUN0QkMsS0FBSyxFQUFFO0VBQ1gsQ0FBQztBQUNMOztBQUVBOztBQUdBLElBQU1DLGNBQW1DLEdBQUcsU0FBdENBLGNBQW1DQSxDQUFJOUIsR0FBRyxFQUFLO0VBQ2pELE9BQUErQixhQUFBLENBQUFBLGFBQUEsS0FBWS9CLEdBQUc7SUFBRWdDLEtBQUssRUFBRTtFQUFJO0FBQ2hDLENBQUM7O0FBRUQ7QUFDQSxTQUFTQyxTQUFTQSxDQUFDQyxRQUFpQyxFQUFFO0VBQ2xELE9BQU8sVUFBQ2xDLEdBQVcsRUFBSztJQUNwQlosT0FBTyxDQUFDK0MsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ2xDLEdBQUcsQ0FBQztJQUMvQlosT0FBTyxDQUFDaUQsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUMzQixPQUFPRCxTQUFTO0VBQ3BCLENBQUM7QUFDTDs7QUFHQTtBQUNBO0FBQ0EsU0FBU0UsWUFBWUEsQ0FBQ3RDLEdBQVcsRUFBVTtFQUN2QyxPQUFPdUMsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDekMsR0FBRyxDQUFDLENBQUM7QUFDMUM7O0FBRUE7QUFDQSxTQUFTMEMsb0JBQW9CQSxDQUN6QkMsSUFBWSxFQUNaQyxZQUFvQixFQUNkO0VBQ04sT0FBQWIsYUFBQSxDQUFBQSxhQUFBLEtBQVlZLElBQUksR0FBS0MsWUFBWTtBQUNyQzs7QUFFQTtBQUNBLFNBQVNDLHFCQUFxQkEsQ0FBQzdDLEdBQVcsRUFBVztFQUNqRCxPQUFPOEMsTUFBTSxDQUFDQyxJQUFJLENBQUMvQyxHQUFHLENBQUMsQ0FBQ2dELE1BQU0sR0FBRyxDQUFDO0FBQ3RDOztBQUdBO0FBQ0E7QUFDQSxTQUFTQyxnQkFBZ0JBLENBQUNDLE9BQWUsRUFBUTtFQUM3QztFQUNBO0FBQUE7O0FBR0o7O0FBT0EsU0FBU0Msc0JBQXNCQSxDQUFDRCxPQUFnQixFQUFRO0VBQ3BEOUQsT0FBTyxDQUFDQyxHQUFHLENBQUM2RCxPQUFPLENBQUNsRSxJQUFJLENBQUMsQ0FBQyxDQUFFO0VBQzVCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQzZELE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNoQzs7QUFFQTs7QUFHQSxJQUFNQyxTQUF1QixHQUFHO0VBQzVCL0IsT0FBTyxFQUFFLElBQUk7RUFDYmdDLFFBQVEsRUFBRSxXQUFXO0VBQ3JCQyxHQUFHLEVBQUU7QUFDVCxDQUFDOztBQUdEO0FBQ0E7QUFDQSxTQUFTQyxpQkFBaUJBLENBQW1CeEQsR0FBTSxFQUFlO0VBQzlELE9BQU84QyxNQUFNLENBQUNDLElBQUksQ0FBQy9DLEdBQUcsQ0FBQztBQUMzQjs7QUFFQTtBQUNBLFNBQVN5RCxjQUFjQSxDQUFtQnpELEdBQU0sRUFBSztFQUNqRCxPQUFPOEMsTUFBTSxDQUFDWSxNQUFNLENBQUMxRCxHQUFHLENBQUM7QUFDN0I7O0FBRUE7QUFDQSxTQUFTMkQsWUFBWUEsQ0FDakJwRSxJQUFPLEVBQ1BxRSxJQUFPLEVBQ0Y7RUFDTCxPQUFBN0IsYUFBQSxDQUFBQSxhQUFBLEtBQVl4QyxJQUFJLEdBQUtxRSxJQUFJO0FBQzdCOztBQUdBO0FBQ0E7QUFBQSxJQUNNQyxNQUFNO0VBQUEsU0FBQUEsT0FBQTtJQUFBQyxlQUFBLE9BQUFELE1BQUE7RUFBQTtFQUFBLE9BQUFFLFlBQUEsQ0FBQUYsTUFBQTtJQUFBRyxHQUFBO0lBQUFDLEtBQUEsRUFDUixTQUFPNUUsR0FBR0EsQ0FBQzZFLFFBQWdCLEVBQStCO01BQUEsSUFBN0JDLFFBQWdCLEdBQUFDLFNBQUEsQ0FBQXBCLE1BQUEsUUFBQW9CLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQzlDaEYsT0FBTyxDQUFDQyxHQUFHLElBQUEwQixNQUFBLENBQUltRCxRQUFRLEdBQUlDLFFBQVEsQ0FBQztJQUN4QztFQUFDO0lBQUFILEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQU9LLElBQUlBLENBQUNKLFFBQWdCLEVBQUVJLEtBQVksRUFBUTtNQUM5Q2xGLE9BQU8sQ0FBQ21GLEtBQUssSUFBQXhELE1BQUEsQ0FBSW1ELFFBQVEsR0FBSUksS0FBSSxDQUFDO0lBQ3RDO0VBQUM7QUFBQSxLQUdMO0FBQ0FULE1BQU0sQ0FBQ3hFLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRTtFQUFFNkQsT0FBTyxFQUFFLEtBQUs7RUFBRXNCLElBQUksRUFBRSxJQUFJdEUsSUFBSSxDQUFDO0FBQUUsQ0FBQyxDQUFDO0FBQ2xFMkQsTUFBTSxDQUFDUyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7RUFDNUJHLElBQUksRUFBRSxjQUFjO0VBQ3BCQyxLQUFLLEVBQUUsSUFBSUMsS0FBSyxDQUFDLENBQUMsQ0FBQ0Q7QUFDdkIsQ0FBQyxDQUFDOztBQUVGO0FBQ0EsU0FBU0UsbUJBQW1CQSxDQUN4QkMsSUFBWSxFQUNaQyxLQUFhLEVBQ1A7RUFDTixJQUFNbkMsSUFBUyxHQUFHO0lBQUVrQyxJQUFJLEVBQUpBLElBQUk7SUFBRUUsV0FBVyxFQUFFLElBQUk3RSxJQUFJLENBQUM7RUFBRSxDQUFDO0VBQ25ELE9BQUE2QixhQUFBLENBQUFBLGFBQUEsS0FBWVksSUFBSSxHQUFLbUMsS0FBSztBQUM5QjtBQUVBLElBQU1FLE1BQU0sR0FBR0osbUJBQW1CLENBQUMsUUFBUSxFQUFFO0VBQ3pDSyxDQUFDLEVBQUUsR0FBRztFQUNOQyxDQUFDLEVBQUUsR0FBRztFQUNOQyxHQUFHLEVBQUU7QUFDVCxDQUFDLENBQUM7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlY2FvMTkvYXVsYTI3My9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFVEFQQSAxOiBJbnRyb2R1w6fDo28gYW8gVGlwbyBPYmplY3Rcbi8vIDEuIERlY2xhcmFuZG8gdmFyacOhdmVpcyBkbyB0aXBvIG9iamVjdFxuY29uc3QgcGVzc29hOiBvYmplY3QgPSB7XG4gICAgbm9tZTogXCJKb8Ojb1wiLFxuICAgIGlkYWRlOiAzMFxufTtcbi8vIEFjZWl0YSBxdWFscXVlciBvYmpldG8sIG1hcyBuw6NvIHBvZGUgYWNlc3NhciBwcm9wcmllZGFkZXMgZGlyZXRhbWVudGVcblxuLy8gMi4gT2JqZWN0IHZzIGFueVxuY29uc3QgZGFkb3NBbnk6IGFueSA9IHsgY2hhdmU6IFwidmFsb3JcIiB9O1xuY29uc29sZS5sb2coZGFkb3NBbnkuY2hhdmUpOyAvLyBGdW5jaW9uYSAtIGFueSBwZXJtaXRlIGFjZXNzb1xuXG5jb25zdCBkYWRvc09iamVjdDogb2JqZWN0ID0geyBjaGF2ZTogXCJ2YWxvclwiIH07XG4vLyBjb25zb2xlLmxvZyhkYWRvc09iamVjdC5jaGF2ZSk7IC8vIEVSUk86IFByb3BlcnR5ICdjaGF2ZScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnb2JqZWN0J1xuXG4vLyBFVEFQQSAyOiBEaWZlcmVuw6dhIGVudHJlIG9iamVjdCwgT2JqZWN0IGUge31cbi8vIDMuIG9iamVjdCAobWluw7pzY3VsbykgLSB0aXBvIG1haXMgcmVzdHJpdG9cbmNvbnN0IG9iajE6IG9iamVjdCA9IHsgYTogMSB9OyAvLyBWw6FsaWRvXG4vLyBjb25zdCBvYmoyOiBvYmplY3QgPSA0MjsgICAgIC8vIEVSUk86IG51bWJlciBuw6NvIMOpIG9iamVjdFxuLy8gY29uc3Qgb2JqMzogb2JqZWN0ID0gXCJ0ZXh0b1wiOyAvLyBFUlJPOiBzdHJpbmcgbsOjbyDDqSBvYmplY3RcblxuLy8gNC4gT2JqZWN0IChtYWnDunNjdWxvKSAtIGluY2x1aSB0aXBvcyBwcmltaXRpdm9zXG5jb25zdCBvYmo0OiBPYmplY3QgPSB7IGE6IDEgfTsgICAgIC8vIFbDoWxpZG9cbmNvbnN0IG9iajU6IE9iamVjdCA9IDQyOyAgICAgICAgICAgLy8gVsOhbGlkbyAtIG51bWJlciB3cmFwcGVyXG5jb25zdCBvYmo2OiBPYmplY3QgPSBcInRleHRvXCI7ICAgICAgLy8gVsOhbGlkbyAtIHN0cmluZyB3cmFwcGVyXG5cbi8vIDUuIHt9IC0gb2JqZXRvIHZhemlvIChtYWlzIGNvbXVtKVxuY29uc3Qgb2JqNzoge30gPSB7IGE6IDEgfTsgICAgICAgICAvLyBWw6FsaWRvXG5jb25zdCBvYmo4OiB7fSA9IDQyOyAgICAgICAgICAgICAgIC8vIFbDoWxpZG9cbmNvbnN0IG9iajk6IHt9ID0gXCJ0ZXh0b1wiOyAgICAgICAgICAvLyBWw6FsaWRvXG5cbi8vIEVUQVBBIDM6IFVzbyBCw6FzaWNvIGRvIFRpcG8gT2JqZWN0XG4vLyA2LiBGdW7Dp8OjbyBxdWUgYWNlaXRhIHF1YWxxdWVyIG9iamV0b1xuZnVuY3Rpb24gcHJvY2Vzc2FyT2JqZXRvKG9iajogb2JqZWN0KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coXCJUaXBvIGRvIG9iamV0bzpcIiwgdHlwZW9mIG9iaik7XG4gICAgLy8gUGFyYSBhY2Vzc2FyIHByb3ByaWVkYWRlcywgcHJlY2lzYW1vcyBkZSB0eXBlIGd1YXJkc1xufVxuXG4vLyA3LiBDaGFtYWRhcyB2w6FsaWRhc1xucHJvY2Vzc2FyT2JqZXRvKHt9KTsgICAgICAgICAgICAgICAgICAgIC8vIE9iamV0byB2YXppb1xucHJvY2Vzc2FyT2JqZXRvKHsgbm9tZTogXCJBbmFcIiB9KTsgICAgICAvLyBPYmpldG8gY29tIHByb3ByaWVkYWRlc1xucHJvY2Vzc2FyT2JqZXRvKFtdKTsgICAgICAgICAgICAgICAgICAgLy8gQXJyYXkgKMOpIHVtIG9iamV0bylcbnByb2Nlc3Nhck9iamV0byhuZXcgRGF0ZSgpKTsgICAgICAgICAgIC8vIEluc3TDom5jaWEgZGUgY2xhc3NlXG5cbi8vIDguIENoYW1hZGFzIGludsOhbGlkYXNcbi8vIHByb2Nlc3Nhck9iamV0byg0Mik7ICAgICAgICAgICAgICAgIC8vIEVSUk86IG51bWJlciBuw6NvIMOpIG9iamVjdFxuLy8gcHJvY2Vzc2FyT2JqZXRvKFwidGV4dG9cIik7ICAgICAgICAgICAvLyBFUlJPOiBzdHJpbmcgbsOjbyDDqSBvYmplY3Rcbi8vIHByb2Nlc3Nhck9iamV0byhudWxsKTsgICAgICAgICAgICAgIC8vIEVSUk86IG51bGwgbsOjbyDDqSBvYmplY3Rcbi8vIHByb2Nlc3Nhck9iamV0byh1bmRlZmluZWQpOyAgICAgICAgIC8vIEVSUk86IHVuZGVmaW5lZCBuw6NvIMOpIG9iamVjdFxuXG5cbi8vIEVUQVBBIDQ6IFR5cGUgR3VhcmRzIGNvbSBPYmplY3Rcbi8vIDkuIFZlcmlmaWNhbmRvIHRpcG8gYW50ZXMgZGUgYWNlc3NhciBwcm9wcmllZGFkZXNcbmZ1bmN0aW9uIGV4aWJpck5vbWUob2JqOiBvYmplY3QpOiB2b2lkIHtcbiAgICBpZiAoJ25vbWUnIGluIG9iaiAmJiB0eXBlb2YgKG9iaiBhcyBhbnkpLm5vbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKChvYmogYXMgYW55KS5ub21lKTsgLy8gUHJlY2lzYW1vcyBkZSB0eXBlIGFzc2VydGlvblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT2JqZXRvIG7Do28gcG9zc3VpIHByb3ByaWVkYWRlICdub21lJ1wiKTtcbiAgICB9XG59XG5cbi8vIDEwLiBVc2FuZG8gdHlwZSBwcmVkaWNhdGVzIHBhcmEgc2VndXJhbsOnYVxuZnVuY3Rpb24gdGVtUHJvcHJpZWRhZGU8VCBleHRlbmRzIG9iamVjdCwgSyBleHRlbmRzIHN0cmluZz4oXG4gICAgb2JqOiBULCBcbiAgICBjaGF2ZTogS1xuKTogb2JqIGlzIFQgJiBSZWNvcmQ8SywgdW5rbm93bj4ge1xuICAgIHJldHVybiBjaGF2ZSBpbiBvYmo7XG59XG5cbmZ1bmN0aW9uIGFjZXNzYXJDb21TZWd1cmFuY2Eob2JqOiBvYmplY3QsIGNoYXZlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGVtUHJvcHJpZWRhZGUob2JqLCBjaGF2ZSkpIHtcbiAgICAgICAgY29uc29sZS5sb2cob2JqW2NoYXZlXSk7IC8vIEFnb3JhIHNlZ3VybyAtIFR5cGVTY3JpcHQgc2FiZSBxdWUgZXhpc3RlXG4gICAgfVxufVxuXG5cbi8vIEVUQVBBIDU6IE9iamVjdCBlbSBBcnJheXMgZSBFc3RydXR1cmFzIENvbXBsZXhhc1xuLy8gMTEuIEFycmF5IGRlIG9iamV0b3MgZ2Vuw6lyaWNvc1xuY29uc3Qgb2JqZXRvczogb2JqZWN0W10gPSBbXG4gICAgeyBpZDogMSwgbm9tZTogXCJJdGVtIDFcIiB9LFxuICAgIHsgZGF0YTogbmV3IERhdGUoKSwgdmFsb3I6IDEwMCB9LFxuICAgIFsxLCAyLCAzXSwgLy8gQXJyYXkgdGFtYsOpbSDDqSBvYmplY3RcbiAgICBuZXcgTWFwKCkgIC8vIE1hcCB0YW1iw6ltIMOpIG9iamVjdFxuXTtcblxuLy8gMTIuIEZ1bsOnw6NvIHF1ZSBwcm9jZXNzYSBhcnJheSBkZSBvYmpldG9zXG5mdW5jdGlvbiBwcm9jZXNzYXJPYmpldG9zKG9ianM6IG9iamVjdFtdKTogdm9pZCB7XG4gICAgb2Jqcy5mb3JFYWNoKChvYmosIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBPYmpldG8gJHtpbmRleH06YCwgb2JqKTtcbiAgICB9KTtcbn1cblxuLy8gMTMuIE9iamVjdCBjb20gaW5kZXggc2lnbmF0dXJlXG5jb25zdCBjb25maWc6IHsgW2tleTogc3RyaW5nXTogb2JqZWN0IH0gPSB7XG4gICAgZGF0YWJhc2U6IHsgaG9zdDogXCJsb2NhbGhvc3RcIiwgcG9ydDogNTQzMiB9LFxuICAgIGFwaTogeyBlbmRwb2ludDogXCIvYXBpXCIsIHRpbWVvdXQ6IDUwMDAgfSxcbiAgICB1aTogeyB0aGVtZTogXCJkYXJrXCIsIGxhbmd1YWdlOiBcInB0LUJSXCIgfVxufTtcblxuXG5cbi8vIEVUQVBBIDY6IE9iamVjdCBlbSBGdW7Dp8O1ZXMgZSBDYWxsYmFja3Ncbi8vIDE0LiBGdW7Dp8OjbyBxdWUgcmV0b3JuYSBvYmplY3RcbmZ1bmN0aW9uIGNyaWFyQ29uZmlndXJhY2FvKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2FvOiBcIjEuMC4wXCIsXG4gICAgICAgIGFtYmllbnRlOiBcInByb2R1Y3Rpb25cIixcbiAgICAgICAgZGVidWc6IGZhbHNlXG4gICAgfTtcbn1cblxuLy8gMTUuIENhbGxiYWNrIGNvbSBvYmplY3RcbnR5cGUgVHJhbnNmb3JtYWRvck9iamV0byA9IChvYmo6IG9iamVjdCkgPT4gb2JqZWN0O1xuXG5jb25zdCBkdXBsaWNhck9iamV0bzogVHJhbnNmb3JtYWRvck9iamV0byA9IChvYmopID0+IHtcbiAgICByZXR1cm4geyAuLi5vYmosIGNvcGlhOiB0cnVlIH07XG59O1xuXG4vLyAxNi4gRnVuw6fDo28gZGUgYWx0YSBvcmRlbSBjb20gb2JqZWN0XG5mdW5jdGlvbiBjb21UaW1pbmcob3BlcmFjYW86IChvYmo6IG9iamVjdCkgPT4gb2JqZWN0KSB7XG4gICAgcmV0dXJuIChvYmo6IG9iamVjdCkgPT4ge1xuICAgICAgICBjb25zb2xlLnRpbWUoXCJvcGVyYWNhb1wiKTtcbiAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gb3BlcmFjYW8ob2JqKTtcbiAgICAgICAgY29uc29sZS50aW1lRW5kKFwib3BlcmFjYW9cIik7XG4gICAgICAgIHJldHVybiByZXN1bHRhZG87XG4gICAgfTtcbn1cblxuXG4vLyBFVEFQQSA3OiBDYXNvcyBkZSBVc28gRXNwZWPDrWZpY29zIGRvIE9iamVjdFxuLy8gMTcuIFF1YW5kbyBhIGVzdHJ1dHVyYSBkbyBvYmpldG8gbsOjbyBpbXBvcnRhXG5mdW5jdGlvbiBjbG9uYXJPYmpldG8ob2JqOiBvYmplY3QpOiBvYmplY3Qge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG4vLyAxOC4gUGFyYSBvYmpldG9zIGRlIGNvbmZpZ3VyYcOnw6NvIGRpbsOibWljYVxuZnVuY3Rpb24gbWVzY2xhckNvbmZpZ3VyYWNvZXMoXG4gICAgYmFzZTogb2JqZWN0LCBcbiAgICBzb2JyZXBvc2ljYW86IG9iamVjdFxuKTogb2JqZWN0IHtcbiAgICByZXR1cm4geyAuLi5iYXNlLCAuLi5zb2JyZXBvc2ljYW8gfTtcbn1cblxuLy8gMTkuIEVtIGJpYmxpb3RlY2FzIHF1ZSB0cmFiYWxoYW0gY29tIG9iamV0b3MgZ2Vuw6lyaWNvc1xuZnVuY3Rpb24gdmFsaWRhck9iamV0b05hb1ZhemlvKG9iajogb2JqZWN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID4gMDtcbn1cblxuXG4vLyBFVEFQQSA4OiBMaW1pdGHDp8O1ZXMgZSBBbHRlcm5hdGl2YXMgYW8gT2JqZWN0XG4vLyAyMC4gUFJPQkxFTUE6IG9iamVjdCDDqSBtdWl0byBnZW7DqXJpY29cbmZ1bmN0aW9uIHByb2Nlc3NhclVzdWFyaW8odXN1YXJpbzogb2JqZWN0KTogdm9pZCB7XG4gICAgLy8gTsOjbyBwb2RlbW9zIGFjZXNzYXIgcHJvcHJpZWRhZGVzIHNlbSB0eXBlIGd1YXJkc1xuICAgIC8vIGNvbnNvbGUubG9nKHVzdWFyaW8ubm9tZSk7IC8vIEVSUk8hXG59XG5cbi8vIDIxLiBTT0xVw4fDg086IFVzZSBpbnRlcmZhY2VzIG91IHR5cGVzIGVzcGVjw61maWNvc1xuaW50ZXJmYWNlIFVzdWFyaW8ge1xuICAgIG5vbWU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIGlkYWRlPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzYXJVc3VhcmlvTWVsaG9yKHVzdWFyaW86IFVzdWFyaW8pOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyh1c3VhcmlvLm5vbWUpOyAgLy8gVsOhbGlkbyAtIFR5cGVTY3JpcHQgY29uaGVjZSBhIGVzdHJ1dHVyYVxuICAgIGNvbnNvbGUubG9nKHVzdWFyaW8uZW1haWwpOyAvLyBWw6FsaWRvXG59XG5cbi8vIDIyLiBTT0xVw4fDg086IFJlY29yZCBwYXJhIG9iamV0b3MgY29tIGNoYXZlcyBjb25oZWNpZGFzXG50eXBlIENvbmZpZ3VyYWNhbyA9IFJlY29yZDxzdHJpbmcsIG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW4+O1xuXG5jb25zdCBjb25maWdBcHA6IENvbmZpZ3VyYWNhbyA9IHtcbiAgICB0aW1lb3V0OiA1MDAwLFxuICAgIGhvc3RuYW1lOiBcImxvY2FsaG9zdFwiLFxuICAgIHNzbDogdHJ1ZVxufTtcblxuXG4vLyBFVEFQQSA5OiBPYmplY3QgZW0gR2VuZXJpY3Ncbi8vIDIzLiBHZW5lcmljIGNvbnN0cmFpbnQgY29tIG9iamVjdFxuZnVuY3Rpb24gb2J0ZXJQcm9wcmllZGFkZXM8VCBleHRlbmRzIG9iamVjdD4ob2JqOiBUKTogKGtleW9mIFQpW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopIGFzIChrZXlvZiBUKVtdO1xufVxuXG4vLyAyNC4gRnVuw6fDo28gcXVlIHRyYWJhbGhhIGNvbSBxdWFscXVlciBvYmpldG9cbmZ1bmN0aW9uIGNvbmdlbGFyT2JqZXRvPFQgZXh0ZW5kcyBvYmplY3Q+KG9iajogVCk6IFQge1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKG9iaik7XG59XG5cbi8vIDI1LiBNZXJnZSBnZW7DqXJpY28gZGUgb2JqZXRvc1xuZnVuY3Rpb24gbWVyZ2VPYmpldG9zPFQgZXh0ZW5kcyBvYmplY3QsIFUgZXh0ZW5kcyBvYmplY3Q+KFxuICAgIG9iajE6IFQsIFxuICAgIG9iajI6IFVcbik6IFQgJiBVIHtcbiAgICByZXR1cm4geyAuLi5vYmoxLCAuLi5vYmoyIH07XG59XG5cblxuLy8gRVRBUEEgMTA6IEV4ZW1wbG9zIFByw6F0aWNvc1xuLy8gMjYuIFNpc3RlbWEgZGUgbG9nZ2luZyBjb20gb2JqZXRvcyBnZW7DqXJpY29zXG5jbGFzcyBMb2dnZXIge1xuICAgIHN0YXRpYyBsb2cobWVuc2FnZW06IHN0cmluZywgbWV0YWRhdGE6IG9iamVjdCA9IHt9KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke21lbnNhZ2VtfWAsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXJybyhtZW5zYWdlbTogc3RyaW5nLCBlcnJvOiBvYmplY3QpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgJHttZW5zYWdlbX1gLCBlcnJvKTtcbiAgICB9XG59XG5cbi8vIDI3LiBVc28gZG8gbG9nZ2VyXG5Mb2dnZXIubG9nKFwiVXN1w6FyaW8gbG9nYWRvXCIsIHsgdXN1YXJpbzogXCJhbmFcIiwgaG9yYTogbmV3IERhdGUoKSB9KTtcbkxvZ2dlci5lcnJvKFwiRmFsaGEgbmEgY29uZXjDo29cIiwgeyBcbiAgICBjb2RlOiBcIkVDT05OUkVGVVNFRFwiLCBcbiAgICBzdGFjazogbmV3IEVycm9yKCkuc3RhY2sgXG59KTtcblxuLy8gMjguIEZhY3RvcnkgZGUgb2JqZXRvc1xuZnVuY3Rpb24gY3JpYXJPYmpldG9EaW5hbWljbyhcbiAgICB0aXBvOiBzdHJpbmcsIFxuICAgIHByb3BzOiBvYmplY3Rcbik6IG9iamVjdCB7XG4gICAgY29uc3QgYmFzZTogYW55ID0geyB0aXBvLCBkYXRhQ3JpYWNhbzogbmV3IERhdGUoKSB9O1xuICAgIHJldHVybiB7IC4uLmJhc2UsIC4uLnByb3BzIH07XG59XG5cbmNvbnN0IHdpZGdldCA9IGNyaWFyT2JqZXRvRGluYW1pY28oXCJ3aWRnZXRcIiwge1xuICAgIHg6IDEwMCxcbiAgICB5OiAyMDAsXG4gICAgY29yOiBcImJsdWVcIlxufSk7XG5cblxuLy8gUmVzdW1vIGRvIFRpcG8gT2JqZWN0OlxuLy8gMjkuIFFVQU5ETyBVU0FSIE9CSkVDVDpcbi8vIC0gUXVhbmRvIHZvY8OqIHByZWNpc2EgYWNlaXRhciBxdWFscXVlciBvYmpldG8sIG1hcyBuw6NvIHByaW1pdGl2b3Ncbi8vIC0gRW0gZnVuw6fDtWVzIGdlbsOpcmljYXMgcXVlIHByb2Nlc3NhbSBvYmpldG9zIGRlc2NvbmhlY2lkb3Ncbi8vIC0gUGFyYSBwYXLDom1ldHJvcyBvbmRlIGEgZXN0cnV0dXJhIG7Do28gaW1wb3J0YVxuXG4vLyAzMC4gUVVBTkRPIEVWSVRBUiBPQkpFQ1Q6XG4vLyAtIFF1YW5kbyB2b2PDqiBjb25oZWNlIGEgZXN0cnV0dXJhIGRvIG9iamV0byAodXNlIGludGVyZmFjZXMpXG4vLyAtIFBhcmEgYWNlc3NhciBwcm9wcmllZGFkZXMgZXNwZWPDrWZpY2FzXG4vLyAtIEVtIEFQSXMgcMO6YmxpY2FzIG9uZGUgdGlwb3MgZXNwZWPDrWZpY29zIHPDo28gbWVsaG9yZXNcblxuLy8gMzEuIEFMVEVSTkFUSVZBUyBSRUNPTUVOREFEQVM6XG4vLyAtIEludGVyZmFjZXMgcGFyYSBvYmpldG9zIGNvbSBlc3RydXR1cmEgY29uaGVjaWRhXG4vLyAtIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHBhcmEgb2JqZXRvcyBjb20gY2hhdmVzIHN0cmluZ1xuLy8gLSB7IFtrZXk6IHN0cmluZ106IGFueSB9IHBhcmEgb2JqZXRvcyBkaW7Dom1pY29zXG4vLyAtIHVua25vd24gY29tIHR5cGUgZ3VhcmRzIHBhcmEgbcOheGltYSBzZWd1cmFuw6dhIl0sIm5hbWVzIjpbInBlc3NvYSIsIm5vbWUiLCJpZGFkZSIsImRhZG9zQW55IiwiY2hhdmUiLCJjb25zb2xlIiwibG9nIiwiZGFkb3NPYmplY3QiLCJvYmoxIiwiYSIsIm9iajQiLCJvYmo1Iiwib2JqNiIsIm9iajciLCJvYmo4Iiwib2JqOSIsInByb2Nlc3Nhck9iamV0byIsIm9iaiIsIl90eXBlb2YiLCJEYXRlIiwiZXhpYmlyTm9tZSIsInRlbVByb3ByaWVkYWRlIiwiYWNlc3NhckNvbVNlZ3VyYW5jYSIsIm9iamV0b3MiLCJpZCIsImRhdGEiLCJ2YWxvciIsIk1hcCIsInByb2Nlc3Nhck9iamV0b3MiLCJvYmpzIiwiZm9yRWFjaCIsImluZGV4IiwiY29uY2F0IiwiY29uZmlnIiwiZGF0YWJhc2UiLCJob3N0IiwicG9ydCIsImFwaSIsImVuZHBvaW50IiwidGltZW91dCIsInVpIiwidGhlbWUiLCJsYW5ndWFnZSIsImNyaWFyQ29uZmlndXJhY2FvIiwidmVyc2FvIiwiYW1iaWVudGUiLCJkZWJ1ZyIsImR1cGxpY2FyT2JqZXRvIiwiX29iamVjdFNwcmVhZCIsImNvcGlhIiwiY29tVGltaW5nIiwib3BlcmFjYW8iLCJ0aW1lIiwicmVzdWx0YWRvIiwidGltZUVuZCIsImNsb25hck9iamV0byIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIm1lc2NsYXJDb25maWd1cmFjb2VzIiwiYmFzZSIsInNvYnJlcG9zaWNhbyIsInZhbGlkYXJPYmpldG9OYW9WYXppbyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwcm9jZXNzYXJVc3VhcmlvIiwidXN1YXJpbyIsInByb2Nlc3NhclVzdWFyaW9NZWxob3IiLCJlbWFpbCIsImNvbmZpZ0FwcCIsImhvc3RuYW1lIiwic3NsIiwib2J0ZXJQcm9wcmllZGFkZXMiLCJjb25nZWxhck9iamV0byIsImZyZWV6ZSIsIm1lcmdlT2JqZXRvcyIsIm9iajIiLCJMb2dnZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIm1lbnNhZ2VtIiwibWV0YWRhdGEiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJlcnJvIiwiZXJyb3IiLCJob3JhIiwiY29kZSIsInN0YWNrIiwiRXJyb3IiLCJjcmlhck9iamV0b0RpbmFtaWNvIiwidGlwbyIsInByb3BzIiwiZGF0YUNyaWFjYW8iLCJ3aWRnZXQiLCJ4IiwieSIsImNvciJdLCJzb3VyY2VSb290IjoiIn0=