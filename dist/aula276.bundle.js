/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/secao19/aula276/index.ts ***!
  \**************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// // Type: unknown
// The unknown type is a type-safe counterpart of any.
// It's the type-safe way to say "this could be anything, so you must perform some type of checking before you use it".

// Key differences between unknown and any:
// unknown must be type-checked before use
// You can't access properties on an unknown type without type assertion
// You can't call or construct values of type unknown
// TypeScript will prevent unknown types from being used without proper type checking

var w = 30;
w = "Hello, World!";
w = {
  runANonExistentMethod: function runANonExistentMethod() {
    // This method does not exist on type unknown
    console.log("This method does not exist on type unknown");
  }
}; // Type assertion to inform TypeScript about the method
if (_typeof(w) === "object" && w !== null) {
  w.runANonExistentMethod(); // Now it's safe to call the method
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVsYTI3Ni5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNJO0FBQ0E7O0FBRUo7QUFDSTtBQUNBO0FBQ0E7QUFDQTs7QUFFSixJQUFJQSxDQUFVLEdBQUcsRUFBRTtBQUNuQkEsQ0FBQyxHQUFHLGVBQWU7QUFDbkJBLENBQUMsR0FBRztFQUNGQyxxQkFBcUIsRUFBRSxTQUF2QkEscUJBQXFCQSxDQUFBLEVBQVE7SUFBRTtJQUM3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsNENBQTRDLENBQUM7RUFDM0Q7QUFDRixDQUEwQyxDQUFDLENBQUM7QUFDNUMsSUFBSUMsT0FBQSxDQUFPSixDQUFDLE1BQUssUUFBUSxJQUFJQSxDQUFDLEtBQUssSUFBSSxFQUFFO0VBQ3BDQSxDQUFDLENBQTJDQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlY2FvMTkvYXVsYTI3Ni9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyBUeXBlOiB1bmtub3duXG4gICAgLy8gVGhlIHVua25vd24gdHlwZSBpcyBhIHR5cGUtc2FmZSBjb3VudGVycGFydCBvZiBhbnkuXG4gICAgLy8gSXQncyB0aGUgdHlwZS1zYWZlIHdheSB0byBzYXkgXCJ0aGlzIGNvdWxkIGJlIGFueXRoaW5nLCBzbyB5b3UgbXVzdCBwZXJmb3JtIHNvbWUgdHlwZSBvZiBjaGVja2luZyBiZWZvcmUgeW91IHVzZSBpdFwiLlxuXG4vLyBLZXkgZGlmZmVyZW5jZXMgYmV0d2VlbiB1bmtub3duIGFuZCBhbnk6XG4gICAgLy8gdW5rbm93biBtdXN0IGJlIHR5cGUtY2hlY2tlZCBiZWZvcmUgdXNlXG4gICAgLy8gWW91IGNhbid0IGFjY2VzcyBwcm9wZXJ0aWVzIG9uIGFuIHVua25vd24gdHlwZSB3aXRob3V0IHR5cGUgYXNzZXJ0aW9uXG4gICAgLy8gWW91IGNhbid0IGNhbGwgb3IgY29uc3RydWN0IHZhbHVlcyBvZiB0eXBlIHVua25vd25cbiAgICAvLyBUeXBlU2NyaXB0IHdpbGwgcHJldmVudCB1bmtub3duIHR5cGVzIGZyb20gYmVpbmcgdXNlZCB3aXRob3V0IHByb3BlciB0eXBlIGNoZWNraW5nXG5cbmxldCB3OiB1bmtub3duID0gMzA7XG53ID0gXCJIZWxsbywgV29ybGQhXCI7XG53ID0ge1xuICBydW5BTm9uRXhpc3RlbnRNZXRob2Q6ICgpID0+IHsgLy8gVGhpcyBtZXRob2QgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSB1bmtub3duXG4gICAgY29uc29sZS5sb2coXCJUaGlzIG1ldGhvZCBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIHVua25vd25cIik7XG4gIH1cbn0gYXMgeyBydW5BTm9uRXhpc3RlbnRNZXRob2Q6ICgpID0+IHZvaWQgfTsgLy8gVHlwZSBhc3NlcnRpb24gdG8gaW5mb3JtIFR5cGVTY3JpcHQgYWJvdXQgdGhlIG1ldGhvZFxuaWYgKHR5cGVvZiB3ID09PSBcIm9iamVjdFwiICYmIHcgIT09IG51bGwpIHtcbiAgICAodyBhcyB7IHJ1bkFOb25FeGlzdGVudE1ldGhvZDogKCkgPT4gdm9pZCB9KS5ydW5BTm9uRXhpc3RlbnRNZXRob2QoKTsgLy8gTm93IGl0J3Mgc2FmZSB0byBjYWxsIHRoZSBtZXRob2Rcbn0iXSwibmFtZXMiOlsidyIsInJ1bkFOb25FeGlzdGVudE1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJfdHlwZW9mIl0sInNvdXJjZVJvb3QiOiIifQ==