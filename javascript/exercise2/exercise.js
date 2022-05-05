//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

const string="30 Days Of JavaScript";

console.log(string);

//Print the length of the string on the browser console using console.log()

console.log(string.length);

//Change all the string characters to capital letters using toUpperCase() method

console.log(string.toUpperCase());

//Change all the string characters to capital letters using toUpperCase() method

console.log(string.toLowerCase());

//Cut (slice) out the first word of the string using substr() or substring() method

const str="Hello World";

console.log(str.substring(0,6));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

console.log(string.substring(2));

//Check if the string contains a word Script using includes() method

console.log(string.includes("Script"));

//Split the string into an array using split() method

console.log(string.split(" "));

//Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

const val="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(val.split(","));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

string.replace("JavaScript","Python");

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

console.log(string.charAt(15));

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

console.log(string.charCodeAt(12));

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log(string.indexOf('a'));

