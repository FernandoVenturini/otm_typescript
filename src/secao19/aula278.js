"use strict";
// TIPOS LITERAIS
// Literal types in TypeScript allow you to specify exact values that variables can hold, providing more precision than broader types like string or number.
// They are the building blocks for creating precise and type-safe applications.
// Key Concepts
// String Literals: Exact string values like "success" | "error"
// Numeric Literals: Specific numbers like 1 | 2 | 3
// Boolean Literals: Either true or false
// Template Literal Types: String literal types built using template string syntax
// Common Use Cases
// Defining specific sets of allowed values
// Creating discriminated unions
// Type-safe event handling
// API response typing
// Configuration objects
// Example 1: String Literal Types
let direction;
// Valid assignment
direction = "north";
// Invalid assignments would cause errors
// direction = "northeast"; // Error: Type '"northeast"' is not assignable to type '"north" | "south" | "east" | "west"'
// direction = "up"; // Error: Type '"up"' is not assignable to type '"north" | "south" | "east" | "west"'
// Using string literal types in functions
function move(direction) {
    console.log(`Moving ${direction}`);
}
// Numeric Literal Types
// Similar to string literals, numeric literal types represent specific numeric values:
let diceRoll;
// Valid assignments
diceRoll = 1;
diceRoll = 6;
// Invalid assignments would cause errors
// diceRoll = 0; // Error: Type '0' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'
// diceRoll = 7; // Error: Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'
// diceRoll = 2.5; // Error: Type '2.5' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'
// Using numeric literal types in functions:
function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}
const result = rollDice();
console.log(`You rolled a ${result}`);
// A function that must return true
function alwaysSucceed() {
    // Always returns the literal value 'true'
    return true;
}
function processResult(result) {
    if (result === true || result === "success" || result === 1) {
        console.log("Operation succeeded");
    }
    else {
        console.log("Operation failed");
    }
}
;
processResult(true); // "Operation succeeded"
processResult("success"); // "Operation succeeded"
processResult(1); // "Operation succeeded"
processResult(false); // "Operation failed"
function handleResponse(response) {
    if (response.status >= 200 && response.status < 300) {
        console.log(`Success: ${response.status} - ${response.statusText}`);
    }
    else {
        console.log(`Error: ${response.status} - ${response.statusText}`);
    }
}
// Example usage
const successResponse = {
    status: 200,
    statusText: "OK",
    data: { username: "john_doe", email: "john@example.com" }
};
const errorResponse = {
    status: 404,
    statusText: "Not Found",
    error: "User not found in database"
};
handleResponse(successResponse);
handleResponse(errorResponse);
