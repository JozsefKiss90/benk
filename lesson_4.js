// Operators in JavaScript

// Operators allow you to perform operations on variables and values, manipulate data, and make comparisons. Understanding operators is crucial for performing calculations, implementing logic, and working with different data types in JavaScript.

// 1. Arithmetic Operators:
// Addition (+), subtraction (-), multiplication (*), division (/), and modulus (%) operators.
// Increment (++) and decrement (--) operators.

let a = 5;
let b = 2;

let sum = a + b; // Addition
console.log(sum); // Output: 7

let difference = a - b; // Subtraction
console.log(difference); // Output: 3

let product = a * b; // Multiplication
console.log(product); // Output: 10

let quotient = a / b; // Division
console.log(quotient); // Output: 2.5

let remainder = a % b; // Modulus (remainder)
console.log(remainder); // Output: 1

let counter = 0;
counter++; // Increment
console.log(counter); // Output: 1

counter--; // Decrement
console.log(counter); // Output: 0

// 2. Assignment Operators:
// Simple assignment (=) operator.
// Compound assignment operators: +=, -=, *=, /=, %=.

let x = 5;
x += 3; // Equivalent to x = x + 3
console.log(x); // Output: 8

let y = 10;
y -= 5; // Equivalent to y = y - 5
console.log(y); // Output: 5

let z = 3;
z *= 4; // Equivalent to z = z * 4
console.log(z); // Output: 12

let w = 10;
w /= 2; // Equivalent to w = w / 2
console.log(w); // Output: 5

let q = 7;
q %= 4; // Equivalent to q = q % 4
console.log(q); // Output: 3

// 3. Comparison Operators:
// Equality (==, ===) and inequality (!=, !==) operators.
// Relational operators: <, >, <=, >=.

let p = 5;
console.log(p == 5); // Output: true (equality)
console.log(p === "5"); // Output: false (strict equality, type check)

console.log(p != 3); // Output: true (inequality)
console.log(p !== "5"); // Output: true (strict inequality, type check)

let r = 10;
console.log(r > 8); // Output: true
console.log(r < 5); // Output: false
console.log(r >= 10); // Output: true
console.log(r <= 7); // Output: false

// 4. Logical Operators:
// Logical AND (&&), logical OR (||), and logical NOT (!) operators.
// Short-circuit evaluation.

let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // Output: false (logical AND)
console.log(isTrue || isFalse); // Output: true (logical OR)
console.log(!isTrue); // Output: false (logical NOT)

// Short-circuit evaluation

let isTruthy = true;
let result = isTruthy && "Hello";
console.log(result); // Output: Hello (short-circuit evaluation)

let isFalsy = false;
let output = isFalsy || "World";
console.log(output); // Output: World (short-circuit evaluation)

// 5. String Operators:
// Concatenation (+) operator for combining strings.
// String interpolation using template literals.

let greeting = "Hello";
let name = "John";

let message = greeting + " " + name; // Concatenation
console.log(message); // Output: Hello John

let age = 25;
let info = `My name is ${name} and I am ${age} years old.`; // String interpolation
console.log(info); // Output: My name is John and I am 25 years old.

// 6. Type Operators:
// typeof operator to determine the type of a value.
// instanceof operator to check if an object is an instance of a specific class or constructor.

console.log(typeof 5); // Output: number
console.log(typeof "Hello"); // Output: string
console.log(typeof true); // Output: boolean
console.log(typeof undefined); // Output: undefined
console.log(typeof null); // Output: object
console.log(typeof [1, 2, 3]); // Output: object
console.log(typeof { name: "John" }); // Output: object
console.log(typeof Symbol("description")); // Output: symbol

class Person {
  constructor(name) {
    this.name = name;
  }
}

let person = new Person("John");
console.log(person instanceof Person); // Output: true

// 7. Ternary Operator:
// The ternary operator (condition ? expression1 : expression2) provides a shorthand for conditional statements.

let num = 5;
let result = num > 0 ? "Positive" : "Negative";
console.log(result); // Output: Positive

// 8. Operator Precedence:
// Explain the order of operations when multiple operators are used in an expression.
// Parentheses can be used to control the precedence of operations.

let expression = 2 + 3 * 4;
console.log(expression); // Output: 14 (multiplication has higher precedence)

let expression2 = (2 + 3) * 4;
console.log(expression2); // Output: 20 (parentheses control the precedence)

// 9. Practice Exercises:
// Provide coding exercises to reinforce the concepts learned, such as performing arithmetic calculations, making comparisons, and using logical operators.

// Exercise 1: Calculate the area of a rectangle using variables for length and width.
let length = 5;
let width = 3;
let area = length * width;
console.log("The area of the rectangle is " + area);

// Exercise 2: Check if a number is even or odd using the modulus operator.
let num2 = 7;
let isEven = num2 % 2 === 0;
console.log(num2 + " is even? " + isEven);

// Exercise 3: Concatenate two strings using the concatenation operator.
let string1 = "Hello";
let string2 = "World";
let resultString = string1 + " " + string2;
console.log(resultString);