//Object:- Everything can be an object and objects do have properties and properties have values, so an object is a key value pair. The order of the key is not reserved, or there is no order. To create an object literal, we use two curly brackets.

//Creating an empty object
//An empty object

const person = {}

//Creating an objecting with values

const rectange={
    width:100,
    height:200
}

console.log(rectange);

const person = {
    firstName: 'Sanidhya',
    lastName: 'Varshney',
    age: 20,
    country: 'India',
    city: 'Aligarh',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'Java'
    ],
    isMarried: false
  }
console.log(person)


/* 
 Getting values from an object
We can access values of object using two methods:

using . followed by key name if the key-name is a one word
using square bracket and a quote.
*/


const person = {
    firstName: 'Sanidhya',
    lastName: 'Varshney',
    age: 20,
    country: 'India',
    city: 'Aligarh',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'Java'
    ],
    getFullName: function() {
      return `${this.firstName}${this.lastName}`
    },
    'phone number': '+91367662368'
  }
  
  // accessing values using .
  console.log(person.firstName)
  console.log(person.lastName)
  console.log(person.age)
  console.log(person.location) // undefined
  
  // value can be accessed using square bracket and key name
  console.log(person['firstName'])
  console.log(person['lastName'])
  console.log(person['age'])
  console.log(person['age'])
  console.log(person['location']) // undefined
  
  // for instance to access the phone number we only use the square bracket method
  console.log(person['phone number'])


/* 
Creating object methods
Now, the person object has getFullName properties. The getFullName is function inside the person object and we call it an object method. The this key word refers to the object itself. We can use the word this to access the values of different properties of the object. We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself. Example of object:

const person = {
  firstName: 'Sanidhya',
  lastName: 'Varshney',
  age: 20,
  country: 'India',
  city: 'Aligarh',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'Java'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getFullName())
*/


//Getting object keys using Object.keys()
//Object.keys: To get the keys or properties of an object as an array

const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

//Getting object values using Object.values()
//Object.values:To get values of an object as an array

const values = Object.values(copyPerson)
console.log(values)

//Getting object keys and values using Object.entries()
//Object.entries:To get the keys and values in an array

const entries = Object.entries(copyPerson)
console.log(entries)

//Checking properties using hasOwnProperty()
//hasOwnProperty: To check if a specific key or property exist in an object

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))


