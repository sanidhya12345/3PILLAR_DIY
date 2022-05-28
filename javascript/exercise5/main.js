//Excercise:---


//Declare an empty array

const array=Array();
console.log(array);

//Declare an array with more than 5 number of elements

array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);

//Find the length of your array

console.log(array.length);

//Get the first item, the middle item and the last item of the array.
middle=(array.length)/2;
console.log(array[0]);
console.log(array[middle]);
console.log(array[array.length-1]);


//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes=[];
mixedDataTypes.push("sanidhya");
mixedDataTypes.push(1);
mixedDataTypes.push(true);
mixedDataTypes.push(null);
mixedDataTypes.push('x');
mixedDataTypes.push({"01": "sanidhya", "02": "varshney"});

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itComapnies=[];

itComapnies.push("Facebook");
itComapnies.push("Google");
itComapnies.push("Microsoft");
itComapnies.push("Apple");
itComapnies.push("IBM");

//Print the array using console.log()

console.log(itComapnies);

//Change each company name to uppercase one by one and print them out

itComapnies[0]=itComapnies[0].toUpperCase();
itComapnies[1]=itComapnies[1].toUpperCase();
itComapnies[2]=itComapnies[2].toUpperCase();
itComapnies[3]=itComapnies[3].toUpperCase();
itComapnies[4]=itComapnies[4].toUpperCase();


