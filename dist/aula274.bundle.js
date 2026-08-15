/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/secao19/aula274/index.ts ***!
  \**************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// ETAPA 1: Sintaxes Básicas de Array
// 1. Sintaxe com colchetes (mais comum)
var numeros = [1, 2, 3, 4, 5];
var numeros2 = [6, 7, 8, 9, 10];
// Array que só pode conter números

// 2. Sintaxe com generic Array<T>
var frutas = ["maçã", "banana", "laranja"];
var carros = ["BMW", "Mercedes", "Ford"];
// Array que só pode conter strings - equivalente à sintaxe anterior

// 3. Array vazio com tipo explícito
var vazios = [];
// Array vazio que só aceitará strings no futuro

// ETAPA 2: Arrays de Diferentes Tipos
// 4. Array de booleanos
var flags = [true, false, true];

// 5. Array de objetos com interface

var usuarios = [{
  id: 1,
  nome: "Ana"
}, {
  id: 2,
  nome: "Carlos"
}];
var usuarios2 = [{
  id: 1,
  nome: "Fernando"
}, {
  id: 2,
  nome: "Lavinia"
}];

// 6. Array de arrays (matriz)
var matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// ETAPA 3: Arrays com Union Types
// 7. Array que aceita múltiplos tipos
var misto = ["texto", 42, "outro", 100];
// Pode conter strings E números em qualquer ordem

// 8. Array com vários tipos
var diverso = ["hello", 123, true, "world"];

// 9. Array com tipos complexos

var respostas = ["sucesso", {
  erro: "falha na conexão"
}, null, "ok"];

// ETAPA 4: Arrays Readonly
// 10. Array somente leitura - não pode ser modificado
var constantes = [1, 2, 3];
// constantes.push(4); // ERRO: Property 'push' does not exist on type 'readonly number[]'
// constantes[0] = 10; // ERRO: Index signature in type 'readonly number[]' only permits reading

// 11. Sintaxe alternativa com ReadonlyArray
var imutavel = ["a", "b", "c"];
// imutavel.pop(); // ERRO: Cannot mutate readonly array

// 12. Usando const assertions para arrays readonly
var cores = ["red", "green", "blue"];
// cores[0] = "yellow"; // ERRO: Cannot assign to readonly property

// ETAPA 5: Métodos de Array com Type Safety
// 13. Map com tipo de retorno inferido
var numerosDobrados = numeros.map(function (num) {
  return num * 2;
});
// TypeScript infere que numerosDobrados é number[]

// 14. Map com tipo explícito de retorno
var comprimentos = frutas.map(function (fruta) {
  return fruta.length;
});

// 15. Filter com type guards
var valores = [1, "texto", 2, "outro", 3];
var apenasNumeros = valores.filter(function (valor) {
  return typeof valor === "number";
});
// TypeScript sabe que apenasNumeros é number[]

// 16. Reduce com tipo explícito
var soma = numeros.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

// ETAPA 6: Tuplas - Arrays com Posições Específicas
// 17. Tupla básica - array com tipos específicos em cada posição
var pessoa = ["João", 30, true];
// Posição 0: string, Posição 1: number, Posição 2: boolean

// 18. Tupla com elementos opcionais
var config = ["localhost"];
// Segundo elemento é opcional

// 19. Tupla com rest operator
var endereco = ["Rua A", 123, 456, 789];
// Primeiro elemento string, resto números

// 20. Tupla nomeada (TypeScript 4.0+)

var pessoa2 = ["Maria", 25, false];

// ETAPA 7: Arrays em Funções
// 21. Parâmetro de função como array
function processarNumeros(numeros) {
  return numeros.reduce(function (sum, num) {
    return sum + num;
  }, 0);
}

// 22. Função que retorna array
function criarSequencia(tamanho) {
  return Array.from({
    length: tamanho
  }, function (_, i) {
    return i + 1;
  });
}

// 23. Função com array de parâmetros rest
function juntarStrings() {
  for (var _len = arguments.length, palavras = new Array(_len), _key = 0; _key < _len; _key++) {
    palavras[_key] = arguments[_key];
  }
  return palavras.join(" ");
}

// 24. Função com tupla como parâmetro
function processarPessoa(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
    nome = _ref2[0],
    idade = _ref2[1],
    ativo = _ref2[2];
  console.log("".concat(nome, ", ").concat(idade, " anos, ").concat(ativo ? "ativo" : "inativo"));
}

// ETAPA 8: Generics com Arrays
// 25. Função genérica com array
function obterPrimeiroElemento(array) {
  return array[0];
}

// 26. Uso da função genérica
var primeiroNumero = obterPrimeiroElemento([1, 2, 3]); // Tipo: number
var primeiraString = obterPrimeiroElemento(["a", "b", "c"]); // Tipo: string

// 27. Classe com array genérico
var Pilha = /*#__PURE__*/function () {
  function Pilha() {
    _classCallCheck(this, Pilha);
    _defineProperty(this, "items", []);
  }
  return _createClass(Pilha, [{
    key: "push",
    value: function push(item) {
      this.items.push(item);
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.items.pop();
    }
  }]);
}(); // 28. Uso da pilha genérica
var pilhaNumeros = new Pilha();
pilhaNumeros.push(1);
pilhaNumeros.push(2);

// ETAPA 9: Arrays com Type Assertions
// 29. Type assertion quando TypeScript não consegue inferir
var dados = JSON.parse('[1, 2, 3, 4, 5]');
// Afirmamos que o resultado é um array de números

// 30. Type assertion com any
var elementos = [1, "texto", true, {
  nome: "obj"
}];
var apenasStrings = elementos.filter(function (e) {
  return typeof e === "string";
});

// 31. Non-null assertion com arrays
var arrayPossivelmenteNull = [1, 2, 3];
var comprimento = arrayPossivelmenteNull.length;
// ! afirma que o array não é null/undefined

// ETAPA 10: Casos de Uso Avançados
// 32. Array como tipo de propriedade em interface

// 33. Array em tipos condicionais

function garantirArray(input) {
  return Array.isArray(input) ? input : [input];
}

// 34. Array com chaves dinâmicas

var registros = [{
  id: 1,
  nome: "A",
  valor: 100
}, {
  id: 2,
  nome: "B",
  valor: 200
}];

// 35. Array com tipos mapeados

var cubo = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];

// ETAPA 11: Exemplos Práticos
// 36. Sistema de carrinho de compras
var Carrinho = /*#__PURE__*/function () {
  function Carrinho() {
    _classCallCheck(this, Carrinho);
    _defineProperty(this, "itens", []);
  }
  return _createClass(Carrinho, [{
    key: "adicionarItem",
    value: function adicionarItem(item) {
      this.itens.push(item);
    }
  }, {
    key: "calcularTotal",
    value: function calcularTotal() {
      return this.itens.reduce(function (total, item) {
        return total + item.preco * item.quantidade;
      }, 0);
    }
  }, {
    key: "listarItens",
    value: function listarItens() {
      return _toConsumableArray(this.itens); // Retorna cópia readonly
    }
  }]);
}(); // 37. Uso do carrinho
var carrinho = new Carrinho();
carrinho.adicionarItem({
  id: 1,
  nome: "Notebook",
  preco: 2500,
  quantidade: 1
});
carrinho.adicionarItem({
  id: 2,
  nome: "Mouse",
  preco: 50,
  quantidade: 2
});
console.log("Total:", carrinho.calcularTotal());

// Resumo do Tipo Array:
// 38. SÍNTASES PRINCIPAIS:
// - number[] - array de números
// - Array<string> - array de strings (generic)
// - (string | number)[] - array de strings ou números
// - readonly number[] - array imutável

// 39. RECOMENDAÇÕES:
// - Prefira a sintaxe number[] (mais comum e legível)
// - Use readonly para arrays que não devem ser modificados
// - Use tuplas para arrays com estrutura fixa
// - Use generics para funções que trabalham com qualquer array

// 40. MÉTODOS COMUNS COM TYPE SAFETY:
// - map, filter, reduce - mantêm a informação de tipo
// - find, some, every - também preservam tipos
// - Type guards ajudam a refinar tipos em filter
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qy9FRyxRQUFRLENBQUNSLGFBQWEsQ0FBQztFQUFFakYsRUFBRSxFQUFFLENBQUM7RUFBRUMsSUFBSSxFQUFFLE9BQU87RUFBRW9GLEtBQUssRUFBRSxFQUFFO0VBQUVDLFVBQVUsRUFBRTtBQUFFLENBQUMsQ0FBQztBQUUxRXJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBRXVDLFFBQVEsQ0FBQ04sYUFBYSxDQUFDLENBQUMsQ0FBQzs7QUFHL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjYW8xOS9hdWxhMjc0L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEVUQVBBIDE6IFNpbnRheGVzIELDoXNpY2FzIGRlIEFycmF5XG4vLyAxLiBTaW50YXhlIGNvbSBjb2xjaGV0ZXMgKG1haXMgY29tdW0pXG5jb25zdCBudW1lcm9zOiBudW1iZXJbXSA9IFsxLCAyLCAzLCA0LCA1XTtcbmNvbnN0IG51bWVyb3MyOiBudW1iZXJbXSA9IFs2LCA3LCA4LCA5LCAxMF07XG4vLyBBcnJheSBxdWUgc8OzIHBvZGUgY29udGVyIG7Dum1lcm9zXG5cbi8vIDIuIFNpbnRheGUgY29tIGdlbmVyaWMgQXJyYXk8VD5cbmNvbnN0IGZydXRhczogQXJyYXk8c3RyaW5nPiA9IFtcIm1hw6fDo1wiLCBcImJhbmFuYVwiLCBcImxhcmFuamFcIl07XG5jb25zdCBjYXJyb3M6IEFycmF5PHN0cmluZz4gPSBbXCJCTVdcIiwgXCJNZXJjZWRlc1wiLCBcIkZvcmRcIl07XG4vLyBBcnJheSBxdWUgc8OzIHBvZGUgY29udGVyIHN0cmluZ3MgLSBlcXVpdmFsZW50ZSDDoCBzaW50YXhlIGFudGVyaW9yXG5cbi8vIDMuIEFycmF5IHZhemlvIGNvbSB0aXBvIGV4cGzDrWNpdG9cbmNvbnN0IHZhemlvczogc3RyaW5nW10gPSBbXTtcbi8vIEFycmF5IHZhemlvIHF1ZSBzw7MgYWNlaXRhcsOhIHN0cmluZ3Mgbm8gZnV0dXJvXG5cblxuLy8gRVRBUEEgMjogQXJyYXlzIGRlIERpZmVyZW50ZXMgVGlwb3Ncbi8vIDQuIEFycmF5IGRlIGJvb2xlYW5vc1xuY29uc3QgZmxhZ3M6IGJvb2xlYW5bXSA9IFt0cnVlLCBmYWxzZSwgdHJ1ZV07XG5cbi8vIDUuIEFycmF5IGRlIG9iamV0b3MgY29tIGludGVyZmFjZVxuaW50ZXJmYWNlIFVzdWFyaW8ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbm9tZTogc3RyaW5nO1xufVxuXG5jb25zdCB1c3VhcmlvczogVXN1YXJpb1tdID0gW1xuICAgIHsgaWQ6IDEsIG5vbWU6IFwiQW5hXCIgfSxcbiAgICB7IGlkOiAyLCBub21lOiBcIkNhcmxvc1wiIH1cbl07XG5cbmludGVyZmFjZSBVc3VhcmlvMiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBub21lOiBzdHJpbmc7XG59XG5jb25zdCB1c3VhcmlvczI6IFVzdWFyaW8yW10gPSBbXG4gICAgeyBpZDogMSwgbm9tZTogXCJGZXJuYW5kb1wifSwgXG4gICAgeyBpZDogMiwgbm9tZTogXCJMYXZpbmlhXCIgfVxuXTtcblxuLy8gNi4gQXJyYXkgZGUgYXJyYXlzIChtYXRyaXopXG5jb25zdCBtYXRyaXo6IG51bWJlcltdW10gPSBbXG4gICAgWzEsIDIsIDNdLFxuICAgIFs0LCA1LCA2XSxcbiAgICBbNywgOCwgOV1cbl07XG5cblxuLy8gRVRBUEEgMzogQXJyYXlzIGNvbSBVbmlvbiBUeXBlc1xuLy8gNy4gQXJyYXkgcXVlIGFjZWl0YSBtw7psdGlwbG9zIHRpcG9zXG5jb25zdCBtaXN0bzogKHN0cmluZyB8IG51bWJlcilbXSA9IFtcInRleHRvXCIsIDQyLCBcIm91dHJvXCIsIDEwMF07XG4vLyBQb2RlIGNvbnRlciBzdHJpbmdzIEUgbsO6bWVyb3MgZW0gcXVhbHF1ZXIgb3JkZW1cblxuLy8gOC4gQXJyYXkgY29tIHbDoXJpb3MgdGlwb3NcbmNvbnN0IGRpdmVyc286IChzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuKVtdID0gW1xuICAgIFwiaGVsbG9cIiwgXG4gICAgMTIzLCBcbiAgICB0cnVlLCBcbiAgICBcIndvcmxkXCJcbl07XG5cbi8vIDkuIEFycmF5IGNvbSB0aXBvcyBjb21wbGV4b3NcbnR5cGUgUmVzcG9zdGEgPSBzdHJpbmcgfCB7IGVycm86IHN0cmluZyB9IHwgbnVsbDtcbmNvbnN0IHJlc3Bvc3RhczogUmVzcG9zdGFbXSA9IFtcbiAgICBcInN1Y2Vzc29cIixcbiAgICB7IGVycm86IFwiZmFsaGEgbmEgY29uZXjDo29cIiB9LFxuICAgIG51bGwsXG4gICAgXCJva1wiXG5dO1xuXG5cbi8vIEVUQVBBIDQ6IEFycmF5cyBSZWFkb25seVxuLy8gMTAuIEFycmF5IHNvbWVudGUgbGVpdHVyYSAtIG7Do28gcG9kZSBzZXIgbW9kaWZpY2Fkb1xuY29uc3QgY29uc3RhbnRlczogcmVhZG9ubHkgbnVtYmVyW10gPSBbMSwgMiwgM107XG4vLyBjb25zdGFudGVzLnB1c2goNCk7IC8vIEVSUk86IFByb3BlcnR5ICdwdXNoJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICdyZWFkb25seSBudW1iZXJbXSdcbi8vIGNvbnN0YW50ZXNbMF0gPSAxMDsgLy8gRVJSTzogSW5kZXggc2lnbmF0dXJlIGluIHR5cGUgJ3JlYWRvbmx5IG51bWJlcltdJyBvbmx5IHBlcm1pdHMgcmVhZGluZ1xuXG4vLyAxMS4gU2ludGF4ZSBhbHRlcm5hdGl2YSBjb20gUmVhZG9ubHlBcnJheVxuY29uc3QgaW11dGF2ZWw6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPiA9IFtcImFcIiwgXCJiXCIsIFwiY1wiXTtcbi8vIGltdXRhdmVsLnBvcCgpOyAvLyBFUlJPOiBDYW5ub3QgbXV0YXRlIHJlYWRvbmx5IGFycmF5XG5cbi8vIDEyLiBVc2FuZG8gY29uc3QgYXNzZXJ0aW9ucyBwYXJhIGFycmF5cyByZWFkb25seVxuY29uc3QgY29yZXMgPSBbXCJyZWRcIiwgXCJncmVlblwiLCBcImJsdWVcIl0gYXMgY29uc3Q7XG4vLyBjb3Jlc1swXSA9IFwieWVsbG93XCI7IC8vIEVSUk86IENhbm5vdCBhc3NpZ24gdG8gcmVhZG9ubHkgcHJvcGVydHlcblxuXG4vLyBFVEFQQSA1OiBNw6l0b2RvcyBkZSBBcnJheSBjb20gVHlwZSBTYWZldHlcbi8vIDEzLiBNYXAgY29tIHRpcG8gZGUgcmV0b3JubyBpbmZlcmlkb1xuY29uc3QgbnVtZXJvc0RvYnJhZG9zID0gbnVtZXJvcy5tYXAobnVtID0+IG51bSAqIDIpO1xuLy8gVHlwZVNjcmlwdCBpbmZlcmUgcXVlIG51bWVyb3NEb2JyYWRvcyDDqSBudW1iZXJbXVxuXG4vLyAxNC4gTWFwIGNvbSB0aXBvIGV4cGzDrWNpdG8gZGUgcmV0b3Jub1xuY29uc3QgY29tcHJpbWVudG9zOiBudW1iZXJbXSA9IGZydXRhcy5tYXAoKGZydXRhOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBmcnV0YS5sZW5ndGg7XG59KTtcblxuLy8gMTUuIEZpbHRlciBjb20gdHlwZSBndWFyZHNcbmNvbnN0IHZhbG9yZXMgPSBbMSwgXCJ0ZXh0b1wiLCAyLCBcIm91dHJvXCIsIDNdO1xuY29uc3QgYXBlbmFzTnVtZXJvcyA9IHZhbG9yZXMuZmlsdGVyKCh2YWxvcik6IHZhbG9yIGlzIG51bWJlciA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWxvciA9PT0gXCJudW1iZXJcIjtcbn0pO1xuLy8gVHlwZVNjcmlwdCBzYWJlIHF1ZSBhcGVuYXNOdW1lcm9zIMOpIG51bWJlcltdXG5cbi8vIDE2LiBSZWR1Y2UgY29tIHRpcG8gZXhwbMOtY2l0b1xuY29uc3Qgc29tYSA9IG51bWVyb3MucmVkdWNlKChhY2M6IG51bWJlciwgY3VycjogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gYWNjICsgY3Vycjtcbn0sIDApO1xuXG4vLyBFVEFQQSA2OiBUdXBsYXMgLSBBcnJheXMgY29tIFBvc2nDp8O1ZXMgRXNwZWPDrWZpY2FzXG4vLyAxNy4gVHVwbGEgYsOhc2ljYSAtIGFycmF5IGNvbSB0aXBvcyBlc3BlY8OtZmljb3MgZW0gY2FkYSBwb3Npw6fDo29cbmNvbnN0IHBlc3NvYTogW3N0cmluZywgbnVtYmVyLCBib29sZWFuXSA9IFtcIkpvw6NvXCIsIDMwLCB0cnVlXTtcbi8vIFBvc2nDp8OjbyAwOiBzdHJpbmcsIFBvc2nDp8OjbyAxOiBudW1iZXIsIFBvc2nDp8OjbyAyOiBib29sZWFuXG5cbi8vIDE4LiBUdXBsYSBjb20gZWxlbWVudG9zIG9wY2lvbmFpc1xuY29uc3QgY29uZmlnOiBbc3RyaW5nLCBudW1iZXI/XSA9IFtcImxvY2FsaG9zdFwiXTtcbi8vIFNlZ3VuZG8gZWxlbWVudG8gw6kgb3BjaW9uYWxcblxuLy8gMTkuIFR1cGxhIGNvbSByZXN0IG9wZXJhdG9yXG5jb25zdCBlbmRlcmVjbzogW3N0cmluZywgLi4ubnVtYmVyW11dID0gW1wiUnVhIEFcIiwgMTIzLCA0NTYsIDc4OV07XG4vLyBQcmltZWlybyBlbGVtZW50byBzdHJpbmcsIHJlc3RvIG7Dum1lcm9zXG5cbi8vIDIwLiBUdXBsYSBub21lYWRhIChUeXBlU2NyaXB0IDQuMCspXG50eXBlIFBlc3NvYVR1cGxlID0gW25vbWU6IHN0cmluZywgaWRhZGU6IG51bWJlciwgYXRpdm86IGJvb2xlYW5dO1xuY29uc3QgcGVzc29hMjogUGVzc29hVHVwbGUgPSBbXCJNYXJpYVwiLCAyNSwgZmFsc2VdO1xuXG5cbi8vIEVUQVBBIDc6IEFycmF5cyBlbSBGdW7Dp8O1ZXNcbi8vIDIxLiBQYXLDom1ldHJvIGRlIGZ1bsOnw6NvIGNvbW8gYXJyYXlcbmZ1bmN0aW9uIHByb2Nlc3Nhck51bWVyb3MobnVtZXJvczogbnVtYmVyW10pOiBudW1iZXIge1xuICAgIHJldHVybiBudW1lcm9zLnJlZHVjZSgoc3VtLCBudW0pID0+IHN1bSArIG51bSwgMCk7XG59XG5cbi8vIDIyLiBGdW7Dp8OjbyBxdWUgcmV0b3JuYSBhcnJheVxuZnVuY3Rpb24gY3JpYXJTZXF1ZW5jaWEodGFtYW5obzogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0YW1hbmhvIH0sIChfLCBpKSA9PiBpICsgMSk7XG59XG5cbi8vIDIzLiBGdW7Dp8OjbyBjb20gYXJyYXkgZGUgcGFyw6JtZXRyb3MgcmVzdFxuZnVuY3Rpb24ganVudGFyU3RyaW5ncyguLi5wYWxhdnJhczogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIHJldHVybiBwYWxhdnJhcy5qb2luKFwiIFwiKTtcbn1cblxuLy8gMjQuIEZ1bsOnw6NvIGNvbSB0dXBsYSBjb21vIHBhcsOibWV0cm9cbmZ1bmN0aW9uIHByb2Nlc3NhclBlc3NvYShbbm9tZSwgaWRhZGUsIGF0aXZvXTogW3N0cmluZywgbnVtYmVyLCBib29sZWFuXSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGAke25vbWV9LCAke2lkYWRlfSBhbm9zLCAke2F0aXZvID8gXCJhdGl2b1wiIDogXCJpbmF0aXZvXCJ9YCk7XG59XG5cblxuLy8gRVRBUEEgODogR2VuZXJpY3MgY29tIEFycmF5c1xuLy8gMjUuIEZ1bsOnw6NvIGdlbsOpcmljYSBjb20gYXJyYXlcbmZ1bmN0aW9uIG9idGVyUHJpbWVpcm9FbGVtZW50bzxUPihhcnJheTogVFtdKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIGFycmF5WzBdO1xufVxuXG4vLyAyNi4gVXNvIGRhIGZ1bsOnw6NvIGdlbsOpcmljYVxuY29uc3QgcHJpbWVpcm9OdW1lcm8gPSBvYnRlclByaW1laXJvRWxlbWVudG8oWzEsIDIsIDNdKTsgICAgICAgIC8vIFRpcG86IG51bWJlclxuY29uc3QgcHJpbWVpcmFTdHJpbmcgPSBvYnRlclByaW1laXJvRWxlbWVudG8oW1wiYVwiLCBcImJcIiwgXCJjXCJdKTsgIC8vIFRpcG86IHN0cmluZ1xuXG4vLyAyNy4gQ2xhc3NlIGNvbSBhcnJheSBnZW7DqXJpY29cbmNsYXNzIFBpbGhhPFQ+IHtcbiAgICBwcml2YXRlIGl0ZW1zOiBUW10gPSBbXTtcblxuICAgIHB1c2goaXRlbTogVCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgcG9wKCk6IFQgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5wb3AoKTtcbiAgICB9XG59XG5cbi8vIDI4LiBVc28gZGEgcGlsaGEgZ2Vuw6lyaWNhXG5jb25zdCBwaWxoYU51bWVyb3MgPSBuZXcgUGlsaGE8bnVtYmVyPigpO1xucGlsaGFOdW1lcm9zLnB1c2goMSk7XG5waWxoYU51bWVyb3MucHVzaCgyKTtcblxuXG4vLyBFVEFQQSA5OiBBcnJheXMgY29tIFR5cGUgQXNzZXJ0aW9uc1xuLy8gMjkuIFR5cGUgYXNzZXJ0aW9uIHF1YW5kbyBUeXBlU2NyaXB0IG7Do28gY29uc2VndWUgaW5mZXJpclxuY29uc3QgZGFkb3MgPSBKU09OLnBhcnNlKCdbMSwgMiwgMywgNCwgNV0nKSBhcyBudW1iZXJbXTtcbi8vIEFmaXJtYW1vcyBxdWUgbyByZXN1bHRhZG8gw6kgdW0gYXJyYXkgZGUgbsO6bWVyb3NcblxuLy8gMzAuIFR5cGUgYXNzZXJ0aW9uIGNvbSBhbnlcbmNvbnN0IGVsZW1lbnRvczogYW55W10gPSBbMSwgXCJ0ZXh0b1wiLCB0cnVlLCB7IG5vbWU6IFwib2JqXCIgfV07XG5jb25zdCBhcGVuYXNTdHJpbmdzID0gZWxlbWVudG9zLmZpbHRlcihlID0+IHR5cGVvZiBlID09PSBcInN0cmluZ1wiKSBhcyBzdHJpbmdbXTtcblxuLy8gMzEuIE5vbi1udWxsIGFzc2VydGlvbiBjb20gYXJyYXlzXG5jb25zdCBhcnJheVBvc3NpdmVsbWVudGVOdWxsOiBudW1iZXJbXSB8IG51bGwgPSBbMSwgMiwgM107XG5jb25zdCBjb21wcmltZW50byA9IGFycmF5UG9zc2l2ZWxtZW50ZU51bGwhLmxlbmd0aDtcbi8vICEgYWZpcm1hIHF1ZSBvIGFycmF5IG7Do28gw6kgbnVsbC91bmRlZmluZWRcblxuXG4vLyBFVEFQQSAxMDogQ2Fzb3MgZGUgVXNvIEF2YW7Dp2Fkb3Ncbi8vIDMyLiBBcnJheSBjb21vIHRpcG8gZGUgcHJvcHJpZWRhZGUgZW0gaW50ZXJmYWNlXG5pbnRlcmZhY2UgRGVwYXJ0YW1lbnRvIHtcbiAgICBub21lOiBzdHJpbmc7XG4gICAgZnVuY2lvbmFyaW9zOiBzdHJpbmdbXTtcbiAgICBwcm9qZXRvczogQXJyYXk8eyBub21lOiBzdHJpbmc7IHByYXpvOiBEYXRlIH0+O1xufVxuXG4vLyAzMy4gQXJyYXkgZW0gdGlwb3MgY29uZGljaW9uYWlzXG50eXBlIEFycmF5T3JTaW5nbGU8VD4gPSBUIHwgVFtdO1xuXG5mdW5jdGlvbiBnYXJhbnRpckFycmF5PFQ+KGlucHV0OiBBcnJheU9yU2luZ2xlPFQ+KTogVFtdIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCkgPyBpbnB1dCA6IFtpbnB1dF07XG59XG5cbi8vIDM0LiBBcnJheSBjb20gY2hhdmVzIGRpbsOibWljYXNcbnR5cGUgRGljaW9uYXJpbyA9IEFycmF5PHsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuXG5jb25zdCByZWdpc3Ryb3M6IERpY2lvbmFyaW8gPSBbXG4gICAgeyBpZDogMSwgbm9tZTogXCJBXCIsIHZhbG9yOiAxMDAgfSxcbiAgICB7IGlkOiAyLCBub21lOiBcIkJcIiwgdmFsb3I6IDIwMCB9XG5dO1xuXG4vLyAzNS4gQXJyYXkgY29tIHRpcG9zIG1hcGVhZG9zXG50eXBlIENvb3JkZW5hZGFzID0gW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xudHlwZSBDb29yZGVuYWRhc1JvdGFjaW9uYWRhcyA9IFtDb29yZGVuYWRhcywgQ29vcmRlbmFkYXMsIENvb3JkZW5hZGFzXTtcblxuY29uc3QgY3VibzogQ29vcmRlbmFkYXNSb3RhY2lvbmFkYXMgPSBbXG4gICAgWzEsIDEsIDFdLFxuICAgIFsyLCAyLCAyXSxcbiAgICBbMywgMywgM11cbl07XG5cblxuLy8gRVRBUEEgMTE6IEV4ZW1wbG9zIFByw6F0aWNvc1xuLy8gMzYuIFNpc3RlbWEgZGUgY2FycmluaG8gZGUgY29tcHJhc1xuaW50ZXJmYWNlIEl0ZW1DYXJyaW5obyB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBub21lOiBzdHJpbmc7XG4gICAgcHJlY286IG51bWJlcjtcbiAgICBxdWFudGlkYWRlOiBudW1iZXI7XG59XG5cbmNsYXNzIENhcnJpbmhvIHtcbiAgICBwcml2YXRlIGl0ZW5zOiBJdGVtQ2FycmluaG9bXSA9IFtdO1xuXG4gICAgYWRpY2lvbmFySXRlbShpdGVtOiBJdGVtQ2FycmluaG8pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVucy5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIGNhbGN1bGFyVG90YWwoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbnMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgKGl0ZW0ucHJlY28gKiBpdGVtLnF1YW50aWRhZGUpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBsaXN0YXJJdGVucygpOiBSZWFkb25seUFycmF5PEl0ZW1DYXJyaW5obz4ge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuaXRlbnNdOyAvLyBSZXRvcm5hIGPDs3BpYSByZWFkb25seVxuICAgIH1cbn1cblxuLy8gMzcuIFVzbyBkbyBjYXJyaW5ob1xuY29uc3QgY2FycmluaG8gPSBuZXcgQ2FycmluaG8oKTtcbmNhcnJpbmhvLmFkaWNpb25hckl0ZW0oeyBpZDogMSwgbm9tZTogXCJOb3RlYm9va1wiLCBwcmVjbzogMjUwMCwgcXVhbnRpZGFkZTogMSB9KTtcbmNhcnJpbmhvLmFkaWNpb25hckl0ZW0oeyBpZDogMiwgbm9tZTogXCJNb3VzZVwiLCBwcmVjbzogNTAsIHF1YW50aWRhZGU6IDIgfSk7XG5cbmNvbnNvbGUubG9nKFwiVG90YWw6XCIsIGNhcnJpbmhvLmNhbGN1bGFyVG90YWwoKSk7XG5cblxuLy8gUmVzdW1vIGRvIFRpcG8gQXJyYXk6XG4vLyAzOC4gU8ONTlRBU0VTIFBSSU5DSVBBSVM6XG4vLyAtIG51bWJlcltdIC0gYXJyYXkgZGUgbsO6bWVyb3Ncbi8vIC0gQXJyYXk8c3RyaW5nPiAtIGFycmF5IGRlIHN0cmluZ3MgKGdlbmVyaWMpXG4vLyAtIChzdHJpbmcgfCBudW1iZXIpW10gLSBhcnJheSBkZSBzdHJpbmdzIG91IG7Dum1lcm9zXG4vLyAtIHJlYWRvbmx5IG51bWJlcltdIC0gYXJyYXkgaW11dMOhdmVsXG5cbi8vIDM5LiBSRUNPTUVOREHDh8OVRVM6XG4vLyAtIFByZWZpcmEgYSBzaW50YXhlIG51bWJlcltdIChtYWlzIGNvbXVtIGUgbGVnw612ZWwpXG4vLyAtIFVzZSByZWFkb25seSBwYXJhIGFycmF5cyBxdWUgbsOjbyBkZXZlbSBzZXIgbW9kaWZpY2Fkb3Ncbi8vIC0gVXNlIHR1cGxhcyBwYXJhIGFycmF5cyBjb20gZXN0cnV0dXJhIGZpeGFcbi8vIC0gVXNlIGdlbmVyaWNzIHBhcmEgZnVuw6fDtWVzIHF1ZSB0cmFiYWxoYW0gY29tIHF1YWxxdWVyIGFycmF5XG5cbi8vIDQwLiBNw4lUT0RPUyBDT01VTlMgQ09NIFRZUEUgU0FGRVRZOlxuLy8gLSBtYXAsIGZpbHRlciwgcmVkdWNlIC0gbWFudMOqbSBhIGluZm9ybWHDp8OjbyBkZSB0aXBvXG4vLyAtIGZpbmQsIHNvbWUsIGV2ZXJ5IC0gdGFtYsOpbSBwcmVzZXJ2YW0gdGlwb3Ncbi8vIC0gVHlwZSBndWFyZHMgYWp1ZGFtIGEgcmVmaW5hciB0aXBvcyBlbSBmaWx0ZXIiXSwibmFtZXMiOlsibnVtZXJvcyIsIm51bWVyb3MyIiwiZnJ1dGFzIiwiY2Fycm9zIiwidmF6aW9zIiwiZmxhZ3MiLCJ1c3VhcmlvcyIsImlkIiwibm9tZSIsInVzdWFyaW9zMiIsIm1hdHJpeiIsIm1pc3RvIiwiZGl2ZXJzbyIsInJlc3Bvc3RhcyIsImVycm8iLCJjb25zdGFudGVzIiwiaW11dGF2ZWwiLCJjb3JlcyIsIm51bWVyb3NEb2JyYWRvcyIsIm1hcCIsIm51bSIsImNvbXByaW1lbnRvcyIsImZydXRhIiwibGVuZ3RoIiwidmFsb3JlcyIsImFwZW5hc051bWVyb3MiLCJmaWx0ZXIiLCJ2YWxvciIsInNvbWEiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwicGVzc29hIiwiY29uZmlnIiwiZW5kZXJlY28iLCJwZXNzb2EyIiwicHJvY2Vzc2FyTnVtZXJvcyIsInN1bSIsImNyaWFyU2VxdWVuY2lhIiwidGFtYW5obyIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwianVudGFyU3RyaW5ncyIsIl9sZW4iLCJhcmd1bWVudHMiLCJwYWxhdnJhcyIsIl9rZXkiLCJqb2luIiwicHJvY2Vzc2FyUGVzc29hIiwiX3JlZiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJpZGFkZSIsImF0aXZvIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsIm9idGVyUHJpbWVpcm9FbGVtZW50byIsImFycmF5IiwicHJpbWVpcm9OdW1lcm8iLCJwcmltZWlyYVN0cmluZyIsIlBpbGhhIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnR5IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwdXNoIiwiaXRlbSIsIml0ZW1zIiwicG9wIiwicGlsaGFOdW1lcm9zIiwiZGFkb3MiLCJKU09OIiwicGFyc2UiLCJlbGVtZW50b3MiLCJhcGVuYXNTdHJpbmdzIiwiZSIsImFycmF5UG9zc2l2ZWxtZW50ZU51bGwiLCJjb21wcmltZW50byIsImdhcmFudGlyQXJyYXkiLCJpbnB1dCIsImlzQXJyYXkiLCJyZWdpc3Ryb3MiLCJjdWJvIiwiQ2FycmluaG8iLCJhZGljaW9uYXJJdGVtIiwiaXRlbnMiLCJjYWxjdWxhclRvdGFsIiwidG90YWwiLCJwcmVjbyIsInF1YW50aWRhZGUiLCJsaXN0YXJJdGVucyIsIl90b0NvbnN1bWFibGVBcnJheSIsImNhcnJpbmhvIl0sInNvdXJjZVJvb3QiOiIifQ==