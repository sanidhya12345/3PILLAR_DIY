//exercise:--->

//Declare a function fullName and it print out your full name.

function fullName(first,last){
    let full=first+" "+last;
    console.log(full);
}
let first="Sanidhya";
let last="Varshney";
fullName(first,last);

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(first,last){
    let full=first+" "+last;
    return full;
}
let ans=fullName("sanidhya","varshney");
console.log(ans);

//Declare a function addNumbers and it takes two two parameters and it returns sum.

const sum=(a,b)=>{
    return a+b;
}

console.log(sum(2,3));

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length,breadth){
    return length*breadth;
}
let calculatearea=areaOfRectangle(23,34);
console.log(`Arae of Rectangle:- ${calculatearea}`);

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle


const areaOfCircle=function(r){
    return Math.PI*r*r;
}

let calc=areaOfCircle(10);
console.log(`Area of Circle:- ${calc}`);


/* 
 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more.
*/

function calculateBMI(height,weight){
    let bmi=weight/(height*height);
    return bmi;
}

let bmi=calculateBMI(1.8,60);

switch(bmi){
    case bmi<18.5:
        console.log("Underweight");
        break;
    case bmi>=18.5 || bmi<=24.9:
        console.log("Normal Weight");
        break;
    case bmi>=25 || bmi<=29.9:
        console.log("Over Weight");
        break;
    case bmi>=30:
        console.log("Obese");
        break;
}


//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.


const checkSeason=(month)=>{
    if(month==='December' || month==='January' || month==='February' || month==='March'){
        return 'Winter';
    }
    else if(month==='April' || month==='May' || month==='June' || month==='July'){
        return 'Summer';
    }
    else if(month==='August' || month==='September'){
        return 'Spring'
    }
    else{
        return 'Autumn';
    }
}
console.log(checkSeason("January"));


//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

const maxOfThree=(a,b,c)=>{
    if(a>b || a>c){
        return a;
    }
    else if(b>c || b>a){
        return b;
    }
    else{
        return c;
    }
}

let find=maxOfThree(10,20,30);
console.log(find);
