//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstname="sanidhya";
const lastname="varshney";
const country="India";
const age=20;
const isMarried=false;
const year=2022;

console.log(typeof(firstname));
console.log(typeof(lastname));
console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(isMarried));

//Check if type of '10' is equal to 10

var val='10';
var val2=10;

if(typeof(val)==typeof(val2)){
    console.log(true);
}
else{
    console.log(false);
}


//Check if parseInt('9.8') is equal to 10

if(parseInt('9.8')==10){
    console.log(true);
}
else{
    console.log(false);
}
