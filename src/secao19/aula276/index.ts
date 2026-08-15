// // Type: unknown
    // The unknown type is a type-safe counterpart of any.
    // It's the type-safe way to say "this could be anything, so you must perform some type of checking before you use it".

// Key differences between unknown and any:
    // unknown must be type-checked before use
    // You can't access properties on an unknown type without type assertion
    // You can't call or construct values of type unknown
    // TypeScript will prevent unknown types from being used without proper type checking

let w: unknown = 30;
w = "Hello, World!";
w = {
  runANonExistentMethod: () => { // This method does not exist on type unknown
    console.log("This method does not exist on type unknown");
  }
} as { runANonExistentMethod: () => void }; // Type assertion to inform TypeScript about the method
if (typeof w === "object" && w !== null) {
    (w as { runANonExistentMethod: () => void }).runANonExistentMethod(); // Now it's safe to call the method
}