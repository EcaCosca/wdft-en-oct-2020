

// var obj = {}


// var person = {
//   name: "Sarah",
//   name2: "Anne",
//   age: 30,
//   isStudent: true,
//   favMovies: ['Star Wars', 'Star Trek'],
//   isSmart: null,
//   address: {
//     city: "Barcelona",
//     street: "Pamplona"
//   },

//   sayHello: function() {
//     console.log('Hello there');
//   },
// }


// Accessing values
// Dot notation

// console.log(person.name)
// console.log(person.age)

// person.sayHello()

// // Bracket notation - dynamic evaluation
// console.log(person["name"]);   // person.name
// console.log(  person[ "name" + 2 ]  );   // person.name2


// // Update or create new values on an object
// person.address.city = "Girona";
// person.address.number = 198;

// console.log(person);


// // Deleting properties

// delete person.isSmart;
// delete person["name2"]


// person.favMovies.pop();  //  person["favMovies"].pop();


// console.log(person);


var movie = {
  title: 'Gladiator',
  year: 2000,
  score: 7.3,
  cast: [ 'Bob', 'Sarah']
}


var field = "year";

function getFieldName() {
  return "score";
}

movie[field]

movie[ getFieldName()  ]



var simpleObj = {
  a: 15,
  b: 30,
  c: 53,
  xyz: 333
}


// Object.keys( obj )  ==> returns an array of key names
var oKeys = Object.keys( simpleObj );

console.log('oKeys', oKeys)


// Object.values(  obj  )

var oValues = Object.values( simpleObj );

console.log('oValues', oValues)




// Iteration with for..in loop 

var simpleObj = {
  a: 15,
  b: 30,
  c: 53,
  xyz: 333
}


for ( var key in  simpleObj) {

  console.log( key );
  var value = simpleObj[ key ]; // use key with square bracket notation to get the value

  console.log(value);
}


for ( var propertyName in  simpleObj) {

  console.log( propertyName );

  // simpleObj.a
  // simpleObj["a"]

  var value = simpleObj[ propertyName ]; 

  console.log(value);
}



