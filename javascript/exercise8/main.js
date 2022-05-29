//Create an empty object called dog

const dog={};

//Print the the dog object on the console

console.log(dog);

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog={
    name:"Tiger",
    legs:4,
    color:"black",
    age:10,
    bark:function(){
        return "woof woof"
    }
}
console.log(dog);


//Get name, legs, color, age and bark value from the dog object.

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

//Set new properties the dog object: breed, getDogInfo

dog.breed="German Shephard";
dog.getDogInfo=function(){
    return `${dog.name} ${dog.color} ${dog.age} ${dog.breed}`
}


const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

//Exercise:Level-2------>

//Find the person who has many skills in the users object.

const usersarray=Object.keys(users);
let maxval=users[usersarray[0]].skills.length;
let personval=usersarray[0];
for(let i=0;i<usersarray.length;i++){
    if(maxval<users[usersarray[i]].skills.length){
        maxval=users[usersarray[i]].skills.length;
        personval=usersarray[i];
    }
}
console.log(personval);

//Count logged in users, count users having greater than equal to 50 points

let count=0;
for(let i=0;i<usersarray.length;i++){
    if(users[usersarray[i]].points>=50){
        count++;
    }
}
console.log(count);

//Find people who are MERN stack developer from the users object

const usersarray=Object.keys(users);
let ans=[];
for(let i=0;i<usersarray.length;i++){
    let skillslength=users[usersarray[i]].skills.length;
    let count=0;
    for(let j=0;j<skillslength;j++){
        let skillsvalue=users[usersarray[i]].skills[j].toUpperCase();
        if(skillsvalue==='MONGODB'){
            count++;
        }
        if(skillsvalue==='REACT'){
          count++;
        }
       if(skillsvalue==='EXPRESS'){
         count++;
       }
       if(skillsvalue==='NODE'){
         count++;
       }
    }
    if(count===4){
        ans.push(usersarray[i]);
    }
  count=0;
}
console.log(ans);

