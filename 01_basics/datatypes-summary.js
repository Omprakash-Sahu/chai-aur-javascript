// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 345654395482378993n;

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"];
let myObj = {
    name: "Hitesh",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof anotherId);