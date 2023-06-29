// Variables and Variable Assignment in JavaScript

// Variables are used to store and manipulate data in JavaScript. They provide a way to refer to values by a specific name and can be assigned different values throughout the program's execution.

// 1. Variable Declaration and Initialization:
// Declare a variable using the `let`, `const`, or `var` keyword.
// Assign a value to a variable using the assignment operator (`=`).

let age; // Variable declaration (age is undefined)
age = 25; // Variable initialization (assigning a value to age)

let name = "John"; // Declare and initialize a variable in a single statement

const PI = 3.14; // Constants are declared using the `const` keyword and cannot be reassigned

// 2. Variable Naming Rules:
// Variables must start with a letter, underscore (_), or dollar sign ($).
// They can contain letters, digits, underscores, or dollar signs.
// JavaScript is case-sensitive, so `myVariable` and `myvariable` are different.

let myVariable; // Valid variable name
let _temp; // Valid variable name
let $count; // Valid variable name
// let 1abc; // Invalid variable name (starts with a digit)
// let my-variable; // Invalid variable name (contains a hyphen)

// 3. Variable Assignment and Reassignment:
// Assign a value to a variable using the assignment operator (`=`).
// Variables can be reassigned by assigning a new value to them.

let quantity = 10;
quantity = 5; // Reassigning the value of quantity

// 4. Variable Scope:
// Scope determines where a variable is accessible.
// JavaScript has function scope and block scope (introduced with `let` and `const`).

let globalVariable = "I am a global variable"; // Global scope

function myFunction() {
  let localVariable = "I am a local variable"; // Local scope (function scope)
  console.log(localVariable); // Output: I am a local variable

  if (true) {
    let blockVariable = "I am a block variable"; // Block scope (inside if block)
    console.log(blockVariable); // Output: I am a block variable
  }

  console.log(blockVariable); // ReferenceError: blockVariable is not defined
}

console.log(globalVariable); // Output: I am a global variable
// console.log(localVariable); // ReferenceError: localVariable is not defined

// 5. Constants:
// Constants are declared using the `const` keyword.
// They cannot be reassigned after initialization.

const gravity = 9.8; // Declare and initialize a constant
// gravity = 10; // TypeError: Assignment to a constant variable

// 6. Variable Types and Data Type Inference:
// JavaScript uses dynamic typing, allowing variables to hold values of different types.
// The type of a variable is determined by its assigned value.

let myNumber = 10; // Number data type
let myString = "Hello"; // String data type
let myBoolean = true; // Boolean data type
let myUndefined; // Undefined data type
let myNull = null; // Null data type
let myObject = { name: "John", age: 25 }; // Object data type
let myArray = [1, 2, 3]; // Array data type
let mySymbol = Symbol("description"); // Symbol data type

console.log(typeof myNumber); // Output: number
console.log(typeof myString); // Output: string
console.log(typeof myBoolean); // Output: boolean
console.log(typeof myUndefined); // Output: undefined
console.log(typeof myNull); // Output: object
console.log(typeof myObject); // Output: object
console.log(typeof myArray); // Output: object
console.log(typeof mySymbol); // Output: symbol

// 7. Variable Naming Conventions:
// Follow best practices for variable naming to write clean and readable code.
// Use descriptive names that convey the purpose of the variable.
// Follow camelCase or snake_case conventions for multi-word variable names.

let firstName; // camelCase convention
let last_name; // snake_case convention

// 8. Outputting Variables:
// Use `console.log()` to output variables for debugging purposes.

let x = 5;
let y = 10;
console.log(x + y); // Output: 15

// 9. Variable Manipulation:
// Variables can be used in arithmetic operations and string concatenation.

let a = 5;
let b = 3;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let modulo = a % b; // Modulo

let greeting = "Hello, ";
let name = "John";
let message = greeting + name; // String concatenation

// 10. Practice Exercises:
// Provide coding exercises to reinforce the concepts learned, such as creating variables, performing operations, and displaying the results.

// Exercise 1: Create a variable to store your age and display it on the console.
let myAge = 30;
console.log("My age is " + myAge);

// Exercise 2: Calculate the area of a rectangle using variables for length and width.
let length = 5;
let width = 3;
let area = length * width;
console.log("The area of the rectangle is " + area);

// Exercise 3: Convert temperature from Celsius to Fahrenheit using variables and formulas.
let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.");