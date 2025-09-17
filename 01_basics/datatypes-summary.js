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

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);
// console.log(typeof anotherId);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory
// Stack, Heap
// Stack is used for primitive data types.
// Heap is used for non-primitive or reference data types.

let myYoutubename = "hiteshchoudharydotcom";
let anothername = myYoutubename;
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);