"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object


//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3  //no decimal or floar --->Numbers only

const isLogged_In = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof anotherId);

console.log(id === anotherId);  //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  //arrays
let myObj = {   //objects(key:value pair) 
    name: "hitesh",
    age: 22,
}

const myFunction = function(){     //fucntion
    console.log("Hello world");
}
console.log(typeof myFunction);  //function


// https://262.ecma-international.org/5.1/#sec-11.4.3