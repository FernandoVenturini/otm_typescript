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
let direction: "north" | "south" | "east" | "west";

// Valid assignment
direction = "north";

// Invalid assignments would cause errors
// direction = "northeast"; // Error: Type '"northeast"' is not assignable to type '"north" | "south" | "east" | "west"'
// direction = "up"; // Error: Type '"up"' is not assignable to type '"north" | "south" | "east" | "west"'

// Using string literal types in functions
function move(direction: "north" | "south" | "east" | "west") {
    console.log(`Moving ${direction}`);
}

// Numeric Literal Types
// Similar to string literals, numeric literal types represent specific numeric values:
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
// Valid assignments
diceRoll = 1;
diceRoll = 6;

// Invalid assignments would cause errors
// diceRoll = 0; // Error: Type '0' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'
// diceRoll = 7; // Error: Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'
// diceRoll = 2.5; // Error: Type '2.5' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'

// Using numeric literal types in functions:
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return Math.floor(Math.random() * 6 + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();
console.log(`You rolled a ${result}`);

// Boolean Literal Types
    // Boolean literal types are less commonly used since there are only two boolean values, but they can be useful in specific scenarios:
// // A type that can only be the literal value 'true':
type YesOnly = true;

// A function that must return true
function alwaysSucceed(): true {
  // Always returns the literal value 'true'
  return true;
}

// Boolean literal combined with other types:
type SuccessFlag = true | "success" | 1;
type FailureFlag = false | "failure" | 0

function processResult(result: SuccessFlag | FailureFlag) {
    if (result === true || result === "success" || result === 1) {
        console.log("Operation succeeded");
    } else {
        console.log("Operation failed");
    }
};
processResult(true); // "Operation succeeded"
processResult("success"); // "Operation succeeded"
processResult(1); // "Operation succeeded"
processResult(false); // "Operation failed"

// Literal Types with Objects
    // Object with literal property values:
type HTTPSuccess = {
    status: 200 | 201 | 204;
    statusText: "OK" | "Created" | " No Content";
    data: any;
};

type HTTPError = {
    status: 400 | 401 | 403 | 404 | 500;
    statusText: "Bad Request" | "Unauthorized" | "Forbidden" | "Not Found" | "Internal Server Error";
    error: string;
}

type HTTPResponse = HTTPSuccess | HTTPError;

function handleResponse(response: HTTPResponse) {
    if (response.status >= 200 && response.status < 300) {
        console.log(`Success: ${response.status} - ${response.statusText}`);    
    } else {
        console.log(`Error: ${response.status} - ${response.statusText}`);
    }
}

// Example usage
const successResponse: HTTPSuccess = {
  status: 200,
  statusText: "OK",
  data: { username: "john_doe", email: "john@example.com" }
};

const errorResponse: HTTPError = {
  status: 404,
  statusText: "Not Found",
  error: "User not found in database"
};

handleResponse(successResponse);
handleResponse(errorResponse);