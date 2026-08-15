/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/secao19/aula277/index.ts ***!
  \**************************************/
// TypeScript Union Types
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

var valor;
valor = "Olá";
valor = 42;
// valor = true; // Error: Type 'boolean' is not assignable to type 'string | number'.
console.log("Valor: ".concat(valor));
function printStatusCode(code) {
  console.log("O c\xF3digo \xE9: ".concat(code));
}
printStatusCode(200);
printStatusCode('200');
function addOrConcat(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return "".concat(a).concat(b);
}
console.log(addOrConcat(10, 20)); // 30
console.log(addOrConcat('Hello, ', 'world!')); // Hello, world!
console.log(addOrConcat(true, false)); // undefined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVsYTI3Ny5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0k7QUFDQTs7QUFFSixJQUFJQSxLQUFzQjtBQUMxQkEsS0FBSyxHQUFHLEtBQUs7QUFDYkEsS0FBSyxHQUFHLEVBQUU7QUFDVjtBQUNBQyxPQUFPLENBQUNDLEdBQUcsV0FBQUMsTUFBQSxDQUFXSCxLQUFLLENBQUUsQ0FBQztBQUU5QixTQUFTSSxlQUFlQSxDQUFDQyxJQUFxQixFQUFFO0VBQzVDSixPQUFPLENBQUNDLEdBQUcsc0JBQUFDLE1BQUEsQ0FBZ0JFLElBQUksQ0FBRSxDQUFDO0FBQ3RDO0FBQ0FELGVBQWUsQ0FBQyxHQUFHLENBQUM7QUFDcEJBLGVBQWUsQ0FBQyxLQUFLLENBQUM7QUFFdEIsU0FBU0UsV0FBV0EsQ0FDaEJDLENBQTRCLEVBQzVCQyxDQUE0QixFQUNiO0VBQ2YsSUFBSSxPQUFPRCxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU9DLENBQUMsS0FBSyxRQUFRLEVBQUU7SUFDaEQsT0FBT0QsQ0FBQyxHQUFHQyxDQUFDO0VBQ2hCO0VBQ0EsVUFBQUwsTUFBQSxDQUFVSSxDQUFDLEVBQUFKLE1BQUEsQ0FBR0ssQ0FBQztBQUNuQjtBQUNBUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbENMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxXQUFXLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQ0wsT0FBTyxDQUFDQyxHQUFHLENBQUNJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjYW8xOS9hdWxhMjc3L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFR5cGVTY3JpcHQgVW5pb24gVHlwZXNcbiAgICAvLyBVbmlvbiB0eXBlcyBhcmUgdXNlZCB3aGVuIGEgdmFsdWUgY2FuIGJlIG1vcmUgdGhhbiBhIHNpbmdsZSB0eXBlLlxuICAgIC8vIFN1Y2ggYXMgd2hlbiBhIHByb3BlcnR5IHdvdWxkIGJlIHN0cmluZyBvciBudW1iZXIuXG5cbmxldCB2YWxvcjogc3RyaW5nIHwgbnVtYmVyO1xudmFsb3IgPSBcIk9sw6FcIjtcbnZhbG9yID0gNDI7XG4vLyB2YWxvciA9IHRydWU7IC8vIEVycm9yOiBUeXBlICdib29sZWFuJyBpcyBub3QgYXNzaWduYWJsZSB0byB0eXBlICdzdHJpbmcgfCBudW1iZXInLlxuY29uc29sZS5sb2coYFZhbG9yOiAke3ZhbG9yfWApO1xuXG5mdW5jdGlvbiBwcmludFN0YXR1c0NvZGUoY29kZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coYE8gY8OzZGlnbyDDqTogJHtjb2RlfWApO1xufVxucHJpbnRTdGF0dXNDb2RlKDIwMCk7XG5wcmludFN0YXR1c0NvZGUoJzIwMCcpO1xuXG5mdW5jdGlvbiBhZGRPckNvbmNhdChcbiAgICBhOiBudW1iZXIgfCBzdHJpbmcgfCBib29sZWFuLFxuICAgIGI6IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW5cbik6IG51bWJlciB8IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBhID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cbiAgICByZXR1cm4gYCR7YX0ke2J9YDtcbn1cbmNvbnNvbGUubG9nKGFkZE9yQ29uY2F0KDEwLCAyMCkpOyAvLyAzMFxuY29uc29sZS5sb2coYWRkT3JDb25jYXQoJ0hlbGxvLCAnLCAnd29ybGQhJykpOyAvLyBIZWxsbywgd29ybGQhXG5jb25zb2xlLmxvZyhhZGRPckNvbmNhdCh0cnVlLCBmYWxzZSkpOyAvLyB1bmRlZmluZWRcblxuXG4iXSwibmFtZXMiOlsidmFsb3IiLCJjb25zb2xlIiwibG9nIiwiY29uY2F0IiwicHJpbnRTdGF0dXNDb2RlIiwiY29kZSIsImFkZE9yQ29uY2F0IiwiYSIsImIiXSwic291cmNlUm9vdCI6IiJ9