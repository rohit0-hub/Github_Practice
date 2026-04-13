// Basic JavaScript Practice Code

// 1. Variables and Data Types
console.log("=== Variables and Data Types ===");

let name = "John Doe"; // String
const age = 25; // Number
var isStudent = true; // Boolean

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// 2. Arrays
console.log("\n=== Arrays ===");

let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log("Fruits:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Array length:", fruits.length);

// Adding to array
fruits.push("Grape");
console.log("After adding Grape:", fruits);

// 3. Objects
console.log("\n=== Objects ===");

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    }
};

console.log("Person:", person);
console.log("Full name:", person.firstName + " " + person.lastName);
console.log("First hobby:", person.hobbies[0]);

// 4. Functions
console.log("\n=== Functions ===");

// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression
const calculateArea = function(width, height) {
    return width * height;
};

// Arrow function
const multiply = (a, b) => a * b;

console.log(greet("Alice"));
console.log("Area of 5x10 rectangle:", calculateArea(5, 10));
console.log("5 * 7 =", multiply(5, 7));

// 5. Conditionals
console.log("\n=== Conditionals ===");

let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside!");
} else if (temperature > 20) {
    console.log("It's warm outside!");
} else {
    console.log("It's cool outside!");
}

// Ternary operator
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log("Age status:", isAdult);

// 6. Loops
console.log("\n=== Loops ===");

// For loop
console.log("Counting with for loop:");
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// While loop
console.log("Counting with while loop:");
let count = 1;
while (count <= 3) {
    console.log("While count:", count);
    count++;
}

// For...of loop (for arrays)
console.log("Fruits with for...of:");
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// For...in loop (for objects)
console.log("Person properties with for...in:");
for (let key in person) {
    if (typeof person[key] !== 'object') {
        console.log(key + ":", person[key]);
    }
}

// 7. Array Methods
console.log("\n=== Array Methods ===");

let numbers = [1, 2, 3, 4, 5];

// Map - transform each element
let doubled = numbers.map(num => num * 2);
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);

// Filter - filter elements
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Reduce - reduce to single value
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of numbers:", sum);

// 8. String Methods
console.log("\n=== String Methods ===");

let message = "Hello, World!";
console.log("Original message:", message);
console.log("Uppercase:", message.toUpperCase());
console.log("Lowercase:", message.toLowerCase());
console.log("Length:", message.length);
console.log("Substring:", message.substring(0, 5));
console.log("Replace:", message.replace("World", "JavaScript"));

