/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/secao19/aula272/index.ts ***!
  \**************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// ETAPA 1: Introdução ao Tipo Void
// 1. Void em funções que não retornam valor
function cumprimentar(nome) {
  console.log("Ol\xE1, ".concat(nome, "!"));
  // Função não retorna nada - implicitamente retorna undefined
}

// 2. Chamando função void
cumprimentar("Maria"); // Executa a função mas não captura retorno

// ETAPA 2: Funções com Retorno Void
// 3. Função que apenas modifica estado externo
var contador = 0;
function incrementarContador() {
  contador++;
  // Altera variável externa, mas não retorna valor
}

// 4. Função void com operações side-effect
function logarErro(mensagem) {
  console.log("ERRO: ".concat(mensagem));
}

// 5. Arrow function com void
var exibirLoading = function exibirLoading(mostrar) {
  if (mostrar) {
    console.log("Carregando...");
  } else {
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
var numeros = [1, 2, 3, 4, 5];
numeros.forEach(function (numero) {
  console.log("Numero: ".concat(numero));
});

// // 9. Event handler - tipicamente void
function handleClick(event) {
  event.preventDefault();
  console.log("Botão clicado!");
  // Handlers de evento geralmente não retornam valores
}

// 10. Função que aceita callback void
function executarComRetry(acao, tentativas) {
  for (var i = 0; i < tentativas; i++) {
    try {
      acao(); // Callback que não retorna valor
      break; // Sucesso - para as tentativas
    } catch (erro) {
      console.log("Tentativa ".concat(i + 1, " falhou"));
    }
  }
}

// ETAPA 5: Void em Contextos de Variáveis
// 11. ATENÇÃO: void em variáveis é praticamente inútil
var resultadoVoid;
// resultadoVoid = "texto"; // ERRO: Type 'string' not assignable to type 'void'
// resultadoVoid = 123;     // ERRO: Type 'number' not assignable to type 'void'
resultadoVoid = undefined; // ÚNICA atribuição permitida (às vezes void também)
// resultadoVoid = null;    // Depende da configuração strictNullChecks

// 12. Uso raro de void em variáveis
function processar() {
  console.log("Processando...");
}
var resultado = processar();
// resultado só pode ser undefined (ou null com configurações específicas)

// ETAPA 6: Void em Promises e Async
// 13. Função async que não retorna valor
function carregarDados() {
  return _carregarDados.apply(this, arguments);
} // 14. Usando Promise<void>
function _carregarDados() {
  _carregarDados = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          console.log("Iniciando carregamento...");
          _context.n = 1;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 1000);
          });
        case 1:
          console.log("Dados carregados!");
          // Async functions sempre retornam Promise, mas o valor pode ser void
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _carregarDados.apply(this, arguments);
}
function enviarEmail(_x) {
  return _enviarEmail.apply(this, arguments);
} // 15. Consumindo Promise<void>
function _enviarEmail() {
  _enviarEmail = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(destinatario) {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return fetch("https://api.email.com/send", {
            method: "POST",
            body: JSON.stringify({
              to: destinatario
            })
          });
        case 1:
          console.log("Email enviado para ".concat(destinatario));
        case 2:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _enviarEmail.apply(this, arguments);
}
function processoPrincipal() {
  return _processoPrincipal.apply(this, arguments);
} // ETAPA 7: Casos de Uso Comuns do Void
// 16. Métodos de classe que não retornam valor
function _processoPrincipal() {
  _processoPrincipal = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return carregarDados();
        case 1:
          _context3.n = 2;
          return enviarEmail("user@example.com");
        case 2:
          console.log("Processo concluído");
        case 3:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _processoPrincipal.apply(this, arguments);
}
var Usuario = /*#__PURE__*/function () {
  function Usuario(nome) {
    _classCallCheck(this, Usuario);
    this.nome = nome;
  }

  // Método void - altera estado interno
  return _createClass(Usuario, [{
    key: "alterarNome",
    value: function alterarNome(novoNome) {
      this.nome = novoNome;
    }

    // Método void - exibe informação
  }, {
    key: "exibirInfo",
    value: function exibirInfo() {
      console.log("Usu\xE1rio: ".concat(this.nome));
    }
  }]);
}(); // 17. Interface com métodos void
// 18. Implementação da interface
var RepositorioMemoria = /*#__PURE__*/function () {
  function RepositorioMemoria() {
    _classCallCheck(this, RepositorioMemoria);
    _defineProperty(this, "dados", []);
  }
  return _createClass(RepositorioMemoria, [{
    key: "salvar",
    value: function salvar(dados) {
      this.dados.push(dados);
    }
  }, {
    key: "excluir",
    value: function excluir(id) {
      this.dados = this.dados.filter(function (item) {
        return item.id !== id;
      });
    }
  }, {
    key: "limpar",
    value: function limpar() {
      this.dados = [];
    }
  }]);
}(); // ETAPA 8: Comportamentos Específicos do Void
// 19. Void em contextos de tipo função
var acoes = [function () {
  return console.log("Ação 1");
}, function () {
  return console.log("Ação 2");
}, function () {
  return console.log("Ação 3");
}];

// 20. Executando array de funções void
function executarAcoes(acoes) {
  acoes.forEach(function (acao) {
    return acao();
  });
}

// 21. QUIRK: TypeScript permite ignorar retorno em callbacks void
var numeros2 = [1, 2, 3];
var strings = numeros2.map(function (num) {
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
var valor = undefined;

// ✅ Bom:
function acao() {
  // lógica aqui
}

// 24. USE void em interfaces para métodos sem retorno

// Resumo do Tipo Void:
// 25. PRINCIPAIS PONTOS:
// - Usado principalmente para funções que não retornam valor
// - Representa a ausência de um valor de retorno
// - Diferente de undefined: void é para funções, undefined é um valor
// - Diferente de never: void termina, never nunca termina
// - Em variáveis é muito restritivo (só aceita undefined/null)
// - Essencial para callbacks, event handlers e métodos sem retorno
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQzs7QUFFRjtBQUNBO0FBQ0EsU0FBU0Msa0JBQWtCQSxDQUFBLEVBQVM7RUFDaEM7RUFDQUMsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUVDLFdBQVcsR0FBRyxZQUFZO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQSxJQUFJQyxLQUFXLEdBQUc5RCxTQUFTOztBQUUzQjtBQUNBLFNBQVNXLElBQUlBLENBQUEsRUFBUztFQUNsQjtBQUFBOztBQUdKOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjYW8xOS9hdWxhMjcyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEVUQVBBIDE6IEludHJvZHXDp8OjbyBhbyBUaXBvIFZvaWRcbi8vIDEuIFZvaWQgZW0gZnVuw6fDtWVzIHF1ZSBuw6NvIHJldG9ybmFtIHZhbG9yXG5mdW5jdGlvbiBjdW1wcmltZW50YXIobm9tZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coYE9sw6EsICR7bm9tZX0hYCk7XG4gICAgLy8gRnVuw6fDo28gbsOjbyByZXRvcm5hIG5hZGEgLSBpbXBsaWNpdGFtZW50ZSByZXRvcm5hIHVuZGVmaW5lZFxufVxuXG4vLyAyLiBDaGFtYW5kbyBmdW7Dp8OjbyB2b2lkXG5jdW1wcmltZW50YXIoXCJNYXJpYVwiKTsgLy8gRXhlY3V0YSBhIGZ1bsOnw6NvIG1hcyBuw6NvIGNhcHR1cmEgcmV0b3Jub1xuXG4vLyBFVEFQQSAyOiBGdW7Dp8O1ZXMgY29tIFJldG9ybm8gVm9pZFxuLy8gMy4gRnVuw6fDo28gcXVlIGFwZW5hcyBtb2RpZmljYSBlc3RhZG8gZXh0ZXJub1xubGV0IGNvbnRhZG9yOiBudW1iZXIgPSAwO1xuXG5mdW5jdGlvbiBpbmNyZW1lbnRhckNvbnRhZG9yKCk6IHZvaWQge1xuICAgIGNvbnRhZG9yKys7XG4gICAgLy8gQWx0ZXJhIHZhcmnDoXZlbCBleHRlcm5hLCBtYXMgbsOjbyByZXRvcm5hIHZhbG9yXG59XG5cbi8vIDQuIEZ1bsOnw6NvIHZvaWQgY29tIG9wZXJhw6fDtWVzIHNpZGUtZWZmZWN0XG5mdW5jdGlvbiBsb2dhckVycm8obWVuc2FnZW06IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGBFUlJPOiAke21lbnNhZ2VtfWApO1xufVxuXG4vLyA1LiBBcnJvdyBmdW5jdGlvbiBjb20gdm9pZFxuY29uc3QgZXhpYmlyTG9hZGluZyA9IChtb3N0cmFyOiBib29sZWFuKTp2b2lkID0+IHtcbiAgICBpZiAobW9zdHJhcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhcnJlZ2FuZG8uLi5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25jbHVpZG8hXCIpO1xuICAgIH1cbn1cblxuLy8gRVRBUEEgMzogRGlmZXJlbsOnYSBlbnRyZSBWb2lkIGUgT3V0cm9zIFRpcG9zXG4vLyA2LiBWb2lkIHZzIFVuZGVmaW5lZFxuZnVuY3Rpb24gc2VtUmV0b3JubygpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcIkVzdGEgZnVuw6fDo28gbsOjbyByZXRvcm5hIG5hZGFcIik7XG4gICAgLy8gUmV0b3JubyBpbXBsw61jaXRvOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gcmV0b3JuYVVuZGVmaW5lZCgpOiB1bmRlZmluZWQge1xuICAgIGNvbnNvbGUubG9nKFwiRXN0YSBmdW7Dp8OjbyBleHBsaWNpdGFtZW50ZSByZXRvcm5hIHVuZGVmaW5lZFwiKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkOyAvLyBPYnJpZ2F0w7NyaW8gY29tIHRpcG8gdW5kZWZpbmVkXG59XG5cbi8vIDcuIFZvaWQgdnMgTmV2ZXJcbmZ1bmN0aW9uIGxhbmNhckVycm8obWVuc2FnZW06IHN0cmluZyk6IG5ldmVyIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVuc2FnZW0pO1xuICAgIC8vIE5ldmVyID0gZnVuw6fDo28gcXVlIE5VTkNBIHRlcm1pbmEgbm9ybWFsbWVudGVcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc29JbmZpbml0ZSgpOiBuZXZlciB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgLy8gTG9vcCBpbmZpbml0byAtIG51bmNhIHJldG9ybmFcbiAgICB9XG59XG5cbi8vIEVUQVBBIDQ6IFZvaWQgZW0gQ2FsbGJhY2tzIGUgRXZlbnQgSGFuZGxlcnNcbi8vIDguIENhbGxiYWNrIGNvbSByZXRvcm5vIHZvaWRcbmNvbnN0IG51bWVyb3M6IG51bWJlcltdID0gWzEsIDIsIDMsIDQsIDVdO1xubnVtZXJvcy5mb3JFYWNoKChudW1lcm86IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBOdW1lcm86ICR7bnVtZXJvfWApO1xufSlcblxuLy8gLy8gOS4gRXZlbnQgaGFuZGxlciAtIHRpcGljYW1lbnRlIHZvaWRcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnNvbGUubG9nKFwiQm90w6NvIGNsaWNhZG8hXCIpO1xuICAvLyBIYW5kbGVycyBkZSBldmVudG8gZ2VyYWxtZW50ZSBuw6NvIHJldG9ybmFtIHZhbG9yZXNcbn1cblxuLy8gMTAuIEZ1bsOnw6NvIHF1ZSBhY2VpdGEgY2FsbGJhY2sgdm9pZFxuZnVuY3Rpb24gZXhlY3V0YXJDb21SZXRyeShcbiAgICBhY2FvOiAoKSA9PiB2b2lkLCBcbiAgICB0ZW50YXRpdmFzOiBudW1iZXJcbik6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVudGF0aXZhczsgaSsrKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhY2FvKCk7IC8vIENhbGxiYWNrIHF1ZSBuw6NvIHJldG9ybmEgdmFsb3JcbiAgICAgICAgICAgIGJyZWFrOyAvLyBTdWNlc3NvIC0gcGFyYSBhcyB0ZW50YXRpdmFzXG4gICAgICAgIH0gY2F0Y2ggKGVycm8pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUZW50YXRpdmEgJHtpICsgMX0gZmFsaG91YCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEVUQVBBIDU6IFZvaWQgZW0gQ29udGV4dG9zIGRlIFZhcmnDoXZlaXNcbi8vIDExLiBBVEVOw4fDg086IHZvaWQgZW0gdmFyacOhdmVpcyDDqSBwcmF0aWNhbWVudGUgaW7DunRpbFxubGV0IHJlc3VsdGFkb1ZvaWQ6IHZvaWQ7XG4vLyByZXN1bHRhZG9Wb2lkID0gXCJ0ZXh0b1wiOyAvLyBFUlJPOiBUeXBlICdzdHJpbmcnIG5vdCBhc3NpZ25hYmxlIHRvIHR5cGUgJ3ZvaWQnXG4vLyByZXN1bHRhZG9Wb2lkID0gMTIzOyAgICAgLy8gRVJSTzogVHlwZSAnbnVtYmVyJyBub3QgYXNzaWduYWJsZSB0byB0eXBlICd2b2lkJ1xucmVzdWx0YWRvVm9pZCA9IHVuZGVmaW5lZDsgIC8vIMOaTklDQSBhdHJpYnVpw6fDo28gcGVybWl0aWRhICjDoHMgdmV6ZXMgdm9pZCB0YW1iw6ltKVxuLy8gcmVzdWx0YWRvVm9pZCA9IG51bGw7ICAgIC8vIERlcGVuZGUgZGEgY29uZmlndXJhw6fDo28gc3RyaWN0TnVsbENoZWNrc1xuXG4vLyAxMi4gVXNvIHJhcm8gZGUgdm9pZCBlbSB2YXJpw6F2ZWlzXG5mdW5jdGlvbiBwcm9jZXNzYXIoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coXCJQcm9jZXNzYW5kby4uLlwiKTtcbn1cblxuY29uc3QgcmVzdWx0YWRvOiB2b2lkID0gcHJvY2Vzc2FyKCk7XG4vLyByZXN1bHRhZG8gc8OzIHBvZGUgc2VyIHVuZGVmaW5lZCAob3UgbnVsbCBjb20gY29uZmlndXJhw6fDtWVzIGVzcGVjw61maWNhcylcblxuLy8gRVRBUEEgNjogVm9pZCBlbSBQcm9taXNlcyBlIEFzeW5jXG4vLyAxMy4gRnVuw6fDo28gYXN5bmMgcXVlIG7Do28gcmV0b3JuYSB2YWxvclxuYXN5bmMgZnVuY3Rpb24gY2FycmVnYXJEYWRvcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zb2xlLmxvZyhcIkluaWNpYW5kbyBjYXJyZWdhbWVudG8uLi5cIik7XG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcbiAgICBjb25zb2xlLmxvZyhcIkRhZG9zIGNhcnJlZ2Fkb3MhXCIpO1xuICAgIC8vIEFzeW5jIGZ1bmN0aW9ucyBzZW1wcmUgcmV0b3JuYW0gUHJvbWlzZSwgbWFzIG8gdmFsb3IgcG9kZSBzZXIgdm9pZFxufVxuXG4vLyAxNC4gVXNhbmRvIFByb21pc2U8dm9pZD5cbmFzeW5jIGZ1bmN0aW9uIGVudmlhckVtYWlsKGRlc3RpbmF0YXJpbzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gU2ltdWxhw6fDo28gZGUgZW52aW8gZGUgZW1haWxcbiAgICBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZW1haWwuY29tL3NlbmRgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdG86IGRlc3RpbmF0YXJpbyB9KVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGBFbWFpbCBlbnZpYWRvIHBhcmEgJHtkZXN0aW5hdGFyaW99YCk7XG59XG5cbi8vIDE1LiBDb25zdW1pbmRvIFByb21pc2U8dm9pZD5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NvUHJpbmNpcGFsKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IGNhcnJlZ2FyRGFkb3MoKTsgICAgLy8gTsOjbyBlc3BlcmEgdmFsb3IgZGUgcmV0b3Jub1xuICAgIGF3YWl0IGVudmlhckVtYWlsKFwidXNlckBleGFtcGxlLmNvbVwiKTtcbiAgICBjb25zb2xlLmxvZyhcIlByb2Nlc3NvIGNvbmNsdcOtZG9cIik7XG59XG5cbi8vIEVUQVBBIDc6IENhc29zIGRlIFVzbyBDb211bnMgZG8gVm9pZFxuLy8gMTYuIE3DqXRvZG9zIGRlIGNsYXNzZSBxdWUgbsOjbyByZXRvcm5hbSB2YWxvclxuY2xhc3MgVXN1YXJpbyB7XG4gICAgcHJpdmF0ZSBub21lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihub21lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ub21lID0gbm9tZTtcbiAgICB9XG5cbiAgICAvLyBNw6l0b2RvIHZvaWQgLSBhbHRlcmEgZXN0YWRvIGludGVybm9cbiAgICBhbHRlcmFyTm9tZShub3ZvTm9tZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9tZSA9IG5vdm9Ob21lO1xuICAgIH1cblxuICAgIC8vIE3DqXRvZG8gdm9pZCAtIGV4aWJlIGluZm9ybWHDp8Ojb1xuICAgIGV4aWJpckluZm8oKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBVc3XDoXJpbzogJHt0aGlzLm5vbWV9YCk7XG4gICAgfVxufVxuXG4vLyAxNy4gSW50ZXJmYWNlIGNvbSBtw6l0b2RvcyB2b2lkXG5pbnRlcmZhY2UgUmVwb3NpdG9yaW8ge1xuICAgIHNhbHZhcihkYWRvczogYW55KTogdm9pZDtcbiAgICBleGNsdWlyKGlkOiBudW1iZXIpOiB2b2lkO1xuICAgIGxpbXBhcigpOiB2b2lkO1xufVxuXG4vLyAxOC4gSW1wbGVtZW50YcOnw6NvIGRhIGludGVyZmFjZVxuY2xhc3MgUmVwb3NpdG9yaW9NZW1vcmlhIGltcGxlbWVudHMgUmVwb3NpdG9yaW8ge1xuICAgIHByaXZhdGUgZGFkb3M6IGFueVtdID0gW107XG5cbiAgICBzYWx2YXIoZGFkb3M6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmRhZG9zLnB1c2goZGFkb3MpO1xuICAgIH1cblxuICAgIGV4Y2x1aXIoaWQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmRhZG9zID0gdGhpcy5kYWRvcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBpZCk7XG4gICAgfVxuXG4gICAgbGltcGFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRhZG9zID0gW107XG4gICAgfVxufVxuXG4vLyBFVEFQQSA4OiBDb21wb3J0YW1lbnRvcyBFc3BlY8OtZmljb3MgZG8gVm9pZFxuLy8gMTkuIFZvaWQgZW0gY29udGV4dG9zIGRlIHRpcG8gZnVuw6fDo29cbnR5cGUgQcOnw6NvID0gKCkgPT4gdm9pZDtcblxuY29uc3QgYWNvZXM6IEHDp8Ojb1tdID0gW1xuICAgICgpID0+IGNvbnNvbGUubG9nKFwiQcOnw6NvIDFcIiksXG4gICAgKCkgPT4gY29uc29sZS5sb2coXCJBw6fDo28gMlwiKSxcbiAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkHDp8OjbyAzXCIpXG5dO1xuXG4vLyAyMC4gRXhlY3V0YW5kbyBhcnJheSBkZSBmdW7Dp8O1ZXMgdm9pZFxuZnVuY3Rpb24gZXhlY3V0YXJBY29lcyhhY29lczogQcOnw6NvW10pOiB2b2lkIHtcbiAgICBhY29lcy5mb3JFYWNoKGFjYW8gPT4gYWNhbygpKTtcbn1cblxuLy8gMjEuIFFVSVJLOiBUeXBlU2NyaXB0IHBlcm1pdGUgaWdub3JhciByZXRvcm5vIGVtIGNhbGxiYWNrcyB2b2lkXG5jb25zdCBudW1lcm9zMiA9IFsxLCAyLCAzXTtcbmNvbnN0IHN0cmluZ3MgPSBudW1lcm9zMi5tYXAoKG51bSk6IHZvaWQgPT4ge1xuICAgIGNvbnNvbGUubG9nKG51bSk7XG4gICAgLy8gTWVzbW8gcmV0b3JuYW5kbyBuw7ptZXJvLCBUeXBlU2NyaXB0IG7Do28gcmVjbGFtYSBlbSBjb250ZXh0byB2b2lkXG4gICAgcmV0dXJuIG51bS50b1N0cmluZygpOyAvLyBJc3NvIMOpIHBlcm1pdGlkbyEgUXVpcmsgZG8gVHlwZVNjcmlwdFxufSk7XG5cbi8vIEVUQVBBIDk6IEJvYXMgUHLDoXRpY2FzIGNvbSBWb2lkXG4vLyAyMi4gU0VNUFJFIHVzZSB2b2lkIHBhcmEgZnVuw6fDtWVzIHF1ZSBuw6NvIHJldG9ybmFtIHZhbG9yXG5mdW5jdGlvbiBhdHVhbGl6YXJJbnRlcmZhY2UoKTogdm9pZCB7XG4gICAgLy8gQ2xhcmFtZW50ZSBjb211bmljYSBhIGludGVuw6fDo29cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKSEudGV4dENvbnRlbnQgPSBcIkF0dWFsaXphZG9cIjtcbn1cblxuLy8gMjMuIEVWSVRFIHVzYXIgdm9pZCBlbSB2YXJpw6F2ZWlzIC0gw6kgcXVhc2Ugc2VtcHJlIGRlc25lY2Vzc8OhcmlvXG4vLyDinYwgUnVpbTpcbmxldCB2YWxvcjogdm9pZCA9IHVuZGVmaW5lZDtcblxuLy8g4pyFIEJvbTpcbmZ1bmN0aW9uIGFjYW8oKTogdm9pZCB7XG4gICAgLy8gbMOzZ2ljYSBhcXVpXG59XG5cbi8vIDI0LiBVU0Ugdm9pZCBlbSBpbnRlcmZhY2VzIHBhcmEgbcOpdG9kb3Mgc2VtIHJldG9ybm9cbmludGVyZmFjZSBOb3RpZmljYWRvciB7XG4gICAgbm90aWZpY2FyKG1lbnNhZ2VtOiBzdHJpbmcpOiB2b2lkO1xuICAgIGluaWNpYWxpemFyKCk6IHZvaWQ7XG4gICAgZmluYWxpemFyKCk6IHZvaWQ7XG59XG5cbi8vIFJlc3VtbyBkbyBUaXBvIFZvaWQ6XG4vLyAyNS4gUFJJTkNJUEFJUyBQT05UT1M6XG4vLyAtIFVzYWRvIHByaW5jaXBhbG1lbnRlIHBhcmEgZnVuw6fDtWVzIHF1ZSBuw6NvIHJldG9ybmFtIHZhbG9yXG4vLyAtIFJlcHJlc2VudGEgYSBhdXPDqm5jaWEgZGUgdW0gdmFsb3IgZGUgcmV0b3Jub1xuLy8gLSBEaWZlcmVudGUgZGUgdW5kZWZpbmVkOiB2b2lkIMOpIHBhcmEgZnVuw6fDtWVzLCB1bmRlZmluZWQgw6kgdW0gdmFsb3Jcbi8vIC0gRGlmZXJlbnRlIGRlIG5ldmVyOiB2b2lkIHRlcm1pbmEsIG5ldmVyIG51bmNhIHRlcm1pbmFcbi8vIC0gRW0gdmFyacOhdmVpcyDDqSBtdWl0byByZXN0cml0aXZvIChzw7MgYWNlaXRhIHVuZGVmaW5lZC9udWxsKVxuLy8gLSBFc3NlbmNpYWwgcGFyYSBjYWxsYmFja3MsIGV2ZW50IGhhbmRsZXJzIGUgbcOpdG9kb3Mgc2VtIHJldG9ybm8iXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiY3VtcHJpbWVudGFyIiwibm9tZSIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJjb250YWRvciIsImluY3JlbWVudGFyQ29udGFkb3IiLCJsb2dhckVycm8iLCJtZW5zYWdlbSIsImV4aWJpckxvYWRpbmciLCJtb3N0cmFyIiwic2VtUmV0b3JubyIsInJldG9ybmFVbmRlZmluZWQiLCJ1bmRlZmluZWQiLCJsYW5jYXJFcnJvIiwiRXJyb3IiLCJwcm9jZXNzb0luZmluaXRlIiwibnVtZXJvcyIsImZvckVhY2giLCJudW1lcm8iLCJoYW5kbGVDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJleGVjdXRhckNvbVJldHJ5IiwiYWNhbyIsInRlbnRhdGl2YXMiLCJlcnJvIiwicmVzdWx0YWRvVm9pZCIsInByb2Nlc3NhciIsInJlc3VsdGFkbyIsImNhcnJlZ2FyRGFkb3MiLCJfY2FycmVnYXJEYWRvcyIsIl9jYWxsZWUiLCJfY29udGV4dCIsInNldFRpbWVvdXQiLCJlbnZpYXJFbWFpbCIsIl94IiwiX2VudmlhckVtYWlsIiwiX2NhbGxlZTIiLCJkZXN0aW5hdGFyaW8iLCJfY29udGV4dDIiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidG8iLCJwcm9jZXNzb1ByaW5jaXBhbCIsIl9wcm9jZXNzb1ByaW5jaXBhbCIsIl9jYWxsZWUzIiwiX2NvbnRleHQzIiwiVXN1YXJpbyIsImFsdGVyYXJOb21lIiwibm92b05vbWUiLCJleGliaXJJbmZvIiwiUmVwb3NpdG9yaW9NZW1vcmlhIiwic2FsdmFyIiwiZGFkb3MiLCJwdXNoIiwiZXhjbHVpciIsImlkIiwiZmlsdGVyIiwiaXRlbSIsImxpbXBhciIsImFjb2VzIiwiZXhlY3V0YXJBY29lcyIsIm51bWVyb3MyIiwic3RyaW5ncyIsIm1hcCIsIm51bSIsInRvU3RyaW5nIiwiYXR1YWxpemFySW50ZXJmYWNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50IiwidmFsb3IiXSwic291cmNlUm9vdCI6IiJ9