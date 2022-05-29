//Iterate 0 to 10 using for loop, do the same using while and do while loop

for(let i=0;i<10;i++){
    console.log(i);
}

let i=0;
while(i<10){
    console.log(i);
    i++;
}

let i = 0
    do {
    console.log(i)
    i++
  } while (i <= 10)

//Iterate 10 to 0 using for loop, do the same using while and do while loop

for(let i=10;i>=0;i--){
    console.log(i);
}

let val=10;
while(val>=0){
    console.log(val);
    val--;
}

do{
    console.log(val);
    val--;
}
while(i>=0)

//Write a loop that makes the following pattern using console.log():

const num=5;
let stringpat=""
for(let i=0;i<num;i++){
  for(let j=0;j<=i;j++){
    stringpat+="#";
  }
  stringpat+="\n";
}

/*
Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/ 


for(let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i * i}`)
  }


/*Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000*/
 
 console.log("i"+" "+"i^2"+" "+"i^3");
 for(let i=0;i<=10;i++){
     console.log(`${i} ${i*i} ${i*i*i}`);
 }

 //Use for loop to iterate from 0 to 100 and print only even numbers

for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

//Use for loop to iterate from 0 to 100 and print only odd numbers

for(let i=0;i<=100;i++){
    if(i%2!=0){
        console.log(i);
    }
}

//Use for loop to iterate from 0 to 100 and print only prime numbers..

function primecheck(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

for(let i=2;i<=100;i++){
    if(primecheck(i)){
        console.log(i);
    }
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum=0;

for(let i=0;i<=100;i++){
    sum+=i;
}
console.log(sum);

//Using the above countries array, create an array for countries length'.
const array=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const length=[];

for(let i=0;i<array.length;i++){
    length.push(array[i].length());
}

//Reverse the countries array and capitalize each country and stored it as an array


const ans=[];

for(let i=array.length;i>=0;i--){
    ans.push(array[i].toUpperCase());
}

