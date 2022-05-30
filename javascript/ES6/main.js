/*
New Features in ES6
The let keyword
The const keyword
Arrow Functions
For/of
Map Objects
Set Objects
Classes
Promises
Symbol
Default Parameters
Function Rest Parameter
String.includes()
String.startsWith()
String.endsWith()
Array.from()
Array keys()
Array find()
Array findIndex()
New Math Methods
New Number Properties
New Number Methods
New Global Methods
Object entries
JavaScript Modules
*/


//1.let Keyword:-the let keyword allows you to declare a variable with block scope.

var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10



//2.const keyword:-The const keyword allows you to declare a constant (a JavaScript variable with a constant value).

//Constants are similar to let variables, except that the value cannot be changed.

var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10


//3.Arrow function:-Arrow functions allows a short syntax for writing function expressions.

const af=(x,y)=>x*y;


//4.For/of loop:-The JavaScript for/of statement loops through the values of an iterable objects.


const array=["sanidhya","varshney"];
let text="";

for(let i of array){
    text+=i+" ";
}
console.log(text);


//5.Javascript maps:-

const fruits=new Map();
fruits.set(apple,500);
fruits.set(banana,300);
fruits.set(orange,100);


//6.Javascript sets:-

const names=new Set();
names.add("sanidhya");
names.add("mayank");
names.add("ayush");

console.log(names);


//7.Javascript classes:-

/*
JavaScript Classes are templates for JavaScript Objects.

Use the keyword class to create a class.

Always add a method named constructor():
*/

//syntax:-

/* 
class ClassName {
  constructor() { ... }
}
*/

class name{
    constructor(first,last){
        this.first=first;
        this.last=last;
    }
}

//8.Javascript promises:-A Promise is a JavaScript object that links "Producing Code" and "Consuming Code"."Producing Code" can take some time and "Consuming Code" must wait for the result.

//syntax:-

/* 
const myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then(
  function(value) { /* code if successful */ 
   //},
  //function(error) { /* code if some error */ }
//);

const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  });


/*
The Symbol Type
A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.

It represents a unique "hidden" identifier that no other code can accidentally access.

For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.

Using Symbol() to create a unique identifiers, solves this problem:
*/

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  let id = Symbol('id');
  person[id] = 140353;
  // Now person[id] = 140353
  // but person.id is still undefined


//default parameter values:-

function myfunc(a,b=10){
    return a+b;
}
console.log(myfunc(5));


//String.includes():-

let string="hello world";
string.includes("world") //returns true.


//String.startsWith():-The startsWith() method returns true if a string begins with a specified value, otherwise false:

let text = "Hello world, welcome to the universe.";

text.startsWith("Hello")   // Returns true


//String.endsWith():-The endsWith() method returns true if a string ends with a specified value, otherwise false:

var text = "John Doe";
text.endsWith("Doe")    // Returns true


//Array.from():-The Array.from() method returns an Array object from any object with a length property or any iterable object.


Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]


//Array keys():-The keys() method returns an Array Iterator object with the keys of an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}


//Array find():-The find() method returns the value of the first array element that passes a test function.


const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//Array findIndex():-The findIndex() method returns the index of the first array element that passes a test function.

const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}


/*
New Math Methods
ES6 added the following methods to the Math object:

Math.trunc()
Math.sign()
Math.cbrt()
Math.log2()
Math.log10()
*/


//The Math.trunc() Method:-Math.trunc(x) returns the integer part of x:

let value=10.23;
console.log(Math.trunc(value));
Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);    // returns -4


//The Math.sign() Method:-Math.sign(x) returns if x is negative, null or positive:

Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1


//The Math.cbrt() Method:-Math.cbrt(x) returns the cube root of x:

Math.cbrt(8);    // returns 2
Math.cbrt(64);    // returns 4
Math.cbrt(125);    // returns 5

//The Math.log2() Method:-Math.log2(x) returns the base 2 logarithm of x:

Math.log2(2);    // returns 1


//The Math.log10() Method:-Math.log10(x) returns the base 10 logarithm of x:

Math.log10(10); //return 1


/*
New Number Properties
ES6 added the following properties to the Number object:

EPSILON
MIN_SAFE_INTEGER
MAX_SAFE_INTEGER
*/

//Epsilon:-

let x = Number.EPSILON; // 2.220446049250313e-16


//MIN_SAFE_INTEGER:-

let  x = Number.MIN_SAFE_INTEGER; // -9007199254740991

//MAX_SAFE_INTEGER:-

let  x = Number.MAX_SAFE_INTEGER; // 9007199254740991


/*
New Number Methods
ES6 added 2 new methods to the Number object:

Number.isInteger()
Number.isSafeInteger()
*/

//The Number.isInteger() Method:- The Number.isInteger() method returns true if the argument is an integer.

Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false

//The Number.isSafeInteger() Method:-A safe integer is an integer that can be exactly represented as a double precision number. The Number.isSafeInteger() method returns true if the argument is a safe integer.

Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false

//Safe integers are all integers from -(253 - 1) to +(253 - 1).
//This is safe: 9007199254740991. This is not safe: 9007199254740992.


/**
 New Global Methods
ES6 added 2 new global number methods:

isFinite()
isNaN()
 */

//The isFinite() Method
//The global isFinite() method returns false if the argument is Infinity or NaN.Otherwise it returns true:


isFinite(10/0);       // returns false
isFinite(10/1);       // returns true


//The isNaN() Method:- The global isNaN() method returns true if the argument is NaN. Otherwise it returns false:

isNaN("Hello");       // returns true


//Object Entries():-

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}

/*
The entries() method returns an Array Iterator object with key/value pairs:

[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]

The entries() method does not change the original array.
*/


