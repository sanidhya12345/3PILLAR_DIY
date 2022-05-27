//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const age=30;
if(age>=18){
    console.log("You are old enough to drive..");
}
else{
    console.log(`You are left with ${18-age} years..`);
}

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

const value=20;
if(value%2==0){
    console.log(`${value} is even number`);
}
else{
    console.log(`${value} is odd number`);
}

//Check if a day is weekend day or a working day. Your script will take day as an input.

const weekday="saturDay";

if(weekday.toUpperCase()==="SATURDAY" || weekday.toUpperCase()==="SUNDAY"){
    console.log(`${weekday} is a weekend`);
}
else{
    console.log("It is not a weekend");
}

//Write a program which tells the number of days in a month.

const month=prompt("tell me the month value.");

var changetouppercase=month.toUpperCase();

switch(changetouppercase){
    case "JANUARY":
        console.log("January has 31 days.");
        break;
    case "FEBRUARY":
        console.log("February has 28 days.");
        break;
    case "MARCH":
        console.log("March has 31 days.");
        break;
    case "APRIL":
        console.log("April has 30 days.");
        break;
    case "MAY":
        console.log("May has 31 days.");
        break;
    case "JUNE":
        console.log("June has 28 days.");
        break;
    case "JULY":
        console.log("July has 31 days.");
        break;
    case "AUGUST":
        console.log("August has 31 days.");
        break;
    case "SEPTEMBER":
        console.log("September has 30 days.");
        break;
    case "OCTOBER":
        console.log("October has 31 days.");
        break;
    case "NOVEMBER":
        console.log("November has 30 days.");
        break;
    case "DECEMBER":
        console.log("December has 31 days.");
        break;
    default:
        console.log("Wrong Choice!!!");
}