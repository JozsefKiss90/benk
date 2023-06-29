// JavaScript Data Types

// 1. Numbers
// In JavaScript, numbers are used to represent numerical values. They can be integers or floating-point numbers.
let age = 25;
let price = 9.99;

// 2. Strings
// Strings are sequences of characters enclosed in single or double quotes. They are used to represent text.
let name = "John Doe";
let message = 'Hello, world!';

// 3. Booleans
// Boolean values represent either `true` or `false`. They are used for logical operations and conditional statements.
let isReady = true;
let isLoggedIn = false;

// 4. Undefined
// The `undefined` value represents the absence of a value or an uninitialized variable.
let address;
console.log(address); // Output: undefined

// 5. Null
// The `null` value represents the intentional absence of any object value.
let data = null;

// 6. Objects
// Objects are collections of key-value pairs. They are used to represent complex data structures and can contain functions, properties, and other objects.
let person = {
  name: "John",
  age: 25,
  address: "123 Main St"
};
console.log(person.name); // Output: John

// 7. Arrays
// Arrays are used to store multiple values in a single variable. They can contain elements of any data type.
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
console.log(numbers[0]); // Output: 1
console.log(fruits.length); // Output: 3

// 8. Symbols (ES6)
// Symbols are unique and immutable values that can be used as keys in JavaScript objects.
const key1 = Symbol();
const key2 = Symbol("description");

// Summary
console.log(typeof age); // Output: number
console.log(typeof name); // Output: string
console.log(typeof isReady); // Output: boolean
console.log(typeof address); // Output: undefined
console.log(typeof data); // Output: object
console.log(typeof person); // Output: object
console.log(typeof numbers); // Output: object
console.log(typeof key1); // Output: symbol

// JavaScript provides the `typeof` operator to determine the type of a value. Note that `typeof null` returns "object" due to a historical bug.

// Additional Examples
// Arithmetic Operations
let sum = 10 + 5; // Addition
let difference = 10 - 5; // Subtraction
let product = 10 * 5; // Multiplication
let quotient = 10 / 5; // Division
let remainder = 10 % 3; // Modulo

// Concatenating Strings
let greeting = "Hello, ";
let personName = "John";
let welcomeMessage = greeting + personName; // Output: Hello, John

// Comparisons
let x = 5;
let y = 10;
console.log(x === y); // Output: false
console.log(x !== y); // Output: true
console.log(x > y); // Output: false
console.log(x < y); // Output: true
console.log(x >= y); // Output: false
console.log(x <= y); // Output: true

// Boolean Logic
let hasMoney = true;
let hasJob = true;
let canBuyCar = hasMoney && hasJob; // Logical AND
let canBuyHouse = hasMoney || hasJob; // Logical OR
let cannotBuyComputer = !hasMoney; // Logical NOT

// Conditional Statements
let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature > 20) {
  console.log("It's warm outside.");
} else {
  console.log("It's cool outside.");
}

// Loops
let counter = 0;
while (counter < 5) {
  console.log("Count: " + counter);
  counter++;
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Functions
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!

// It's important to note that JavaScript is a dynamically-typed language, meaning you don't need to explicitly declare the data type of a variable. The type is determined automatically based on the value assigned to it.
