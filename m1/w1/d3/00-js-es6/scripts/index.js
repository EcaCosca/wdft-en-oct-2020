// // Hoisting

// sayHello("Monica");

// sayBye("Emma");

// function sayHello( name ){
//   console.log('hello ' + name);
// }


// function sayBye( name ){
//   console.log('bye ' + name);
// }

// // var hoisting

// console.log(user);

// var user = "Julien";







// Scope

// Variable available in global scope
var globalVar = 'I am global';


function print() {
  // var variable is locally scoped only when in function
  // Variable available in local(function) scope
  var localVar = 'I am a local var';

  // Automatically global - bad practice
  imposter = 'I am an imposter';

  // Accessing variable from the global scope
  console.log('globalVar', globalVar);
}

print();

//  window object - is the global scope

console.log('window', window);





// let & const
// Block scope     { }
// function, arrow function, for, while, if/else, switch


// if ( 2 == 2 ) {
//   let user1 = 'Bob';
//   const user2 = 'Sarah';

//   console.log('user1', user1); // only available in the block scope of if(){ }
//   console.log('user2', user2);
// }


// var counter = 100000;

// console.log('BEFORE in global scope --> counter:',  counter)

// for (let counter = 0; counter < 10; counter++) {
//   console.log(counter);
// }

// console.log('in global scope --> counter:',  counter)




// Accessing let and const before they are declared


// console.log(favMovie); //! ReferenceError: Cannot access 'favMovie' before initialization


// let favMovie = 'Transformers';

// const favCountry = 'Iceland';

// console.log(favMovie);


// const - is used for the value that will not be changed in future
// const doesn't allow us to re-declare (change) value

// const password = '123abc';

// password = 'asdfasdf2234';


// let - is used to create variables that will be updated in the future (counter, result, date, flags)
// let allows us to re-declare (change) value

// let title = 'Ironhackers 2';

// title = 'irOnhacKers 3'

// let isLoggedIn = true;




// Redeclaring (creating again with the keyword) let and const
// is not allowed with let and const --> Error: Identifier 'x' has already been declared

// let schoolName = "Ironahack WebDev";

// let schoolName = "Something";


// const city = 'Barcelona';

// const city = 'Girona';





// const Mutability

const obj = {
  age: 30,
  name: "Ironhacker"
};

// obj = {
//   name: "Marc"
// };  // > Error: Uncaught TypeError: Assignment to constant variable.


// We can mutate objects - we can change the content inside of it



const str = 'Nanananana Batman';




// Not found
// if ( str.indexOf("Robin") === -1  ) {
//   console.log('Substring not found');
// }


// str.includes( substring )  ==> returns true or false
// if (str.includes('Batman')) {
//   console.log('Substring is included');
// }

// if ( !str.includes('Robin') ) {
//   console.log('Substring is not included');
// }



// const str2 = "To be, or not to be, that is the question.";


// console.log(  str2.startsWith("to be")  ); // false
// console.log(  str2.startsWith("To be")  ); // true


// console.log(  str2.endsWith("to be")  ); // false
// console.log(  str2.endsWith("question.") ); // true




// // Arrow funcitons

// const greeting1 = (name) => {
//   return `Hello ${name}`;
// }



// // Concise arrow syntax
// const greeting2 = (name) => 'Hello ' + name;


// const result = greeting1("Bob");
// console.log('result', result);


// Default function argument

// function times(num, timesHowMuch = 1) {


//   console.log( num * timesHowMuch);
// }

// times(3, 10);
// times(5)


// const arr1 = ['bob', 'sarah', 'anna'];

// function convertToObj (arr = [] ) {
//   const obj = {};

//   arr.forEach(function (el, i) {
//     obj[i] = el;
//   })

//   return obj;
// }


// console.log(   convertToObj()  );


// Spread operator    ...
// copy arrays and objects


// With arrays 
// const numbers = [1, 2, 3];

// const updatedNumbers = [ ...numbers ,5 ,6 ,7 ];
// const updatedNumbers2 = [-3, -2, -1, 0, ...numbers ];

// console.log('updatedNumbers', updatedNumbers);

// console.log('updatedNumbers2', updatedNumbers2);

// const max = Math.max(...numbers);
// console.log('max', max)

// // Math.max(1, 2, 3);


// // With objects

// const obj1 = { firstName: 'Foo', age: 22 };
// const obj2 = { lastName: 'Baz', gender: 'M'};

// const obj1Updated = { ...obj1, age: 100 };

// const person = { ...obj1, ...obj2, planet: "Earth" };


// console.log('person', person)


// // Enhanced object literal

// const fName = 'Bob';
// const age = 20;


// const userObj = {
//   fName: fName,
//   age: age,
// }


// const userObjShort = {
//   fName,
//   age
// }

// console.log('userObjShort', userObjShort)


// Destructuring
// Create variables easily out of objects or arrays


const student = {
  name: "Ironhacker",
  age: 25,
  favoriteMusic: "Pop"
}


// const name = student.name;
// const age = student.age;
// const favoriteMusic = student.favoriteMusic;


// const { name, age, favoriteMusic } = student;



// console.log('name', name)
// console.log('age', age)
// console.log('favoriteMusic', favoriteMusic)


// Array destructuring

// const names = ["Ben Afleck", "WD", "ABC", "Bob"];


// const [ actor, , , developer ] = names;

// console.log('actor', actor)

// console.log('developer', developer)




// REST  ... operator - used in functions


function sumNumbers ( ...allArgs ) {

  let total = 0;

  allArgs.forEach( function(arg) {
    total += arg;
  })

  return total;
}

console.log(  sumNumbers(7, 4,5,6,7,8,8,9,0,0,34,5345,34534)   )



// Collecting rest of arguments the function receives
let value = undefined;

function storeFirstValue(valueToStore, ...restOfArgs ) {
  value = valueToStore;

  console.log("The following values were not stored", restOfArgs);
  
}


storeFirstValue("I like cookies", "I don't like Jasmine", "ABC");

console.log('value', value)