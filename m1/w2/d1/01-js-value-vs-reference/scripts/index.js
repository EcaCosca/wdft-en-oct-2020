
// Primitive values - string, number, boolean, null, undefined
// are copied 

var a = 10;   //
var b = 'abc';


var aCopy = a; // 
var bCopy = b;

// console.log('a', a);
// console.log('aCopy', aCopy);


a = 99;


// console.log('a', a);
// console.log('aCopy', aCopy);

/*
Changing one does not change the other.
Think of the variables as having no relationship to each other, 
as primitive value was copied.
Each primitive value is copied to the new place in the memory.
*/



// Objects - non-primitives (array, object, function)
// only their memory reference address is stored or passed around.

const myArr = [];  // <987yyy>



const arr1 = [1, 2]; // <123abc>
const arr2 = [1, 2]; // <390xyz>


//  ==       ===   - with objects they compare the reference address, 
// not value inside

// console.log(  arr1 == arr2  );  // false
// console.log(  arr1 === arr2  );  // false

//        <123abc>  ==  <390xyz>





const obj1 = { name: 'John', age: 25}; // <555baz>
const obj2 = { name: 'John', age: 25}; // <777foo>


// console.log(obj1 == obj2); // false
//      <555baz> ==  <777foo>

// console.log(obj1 === obj2); // false
//      <555baz> ===  <777foo>



// Objects are stored and passed by reference.
// Their memory address is being stored and passed.

const obj3 = obj1;

// will it store the copy of the object ?
// or the address where the object is in memory ?   << Will store address

obj3.name = "Bob";
// console.log('obj1', obj1);   //  obj1.name ??  Bob



// Copying objects and arrays

// SHALLOW
// Spread

const description = { brand: 'Apple', color: 'silver' };

const newDescription = { ...description };

// console.log('description', description);
// console.log('newDescription', newDescription);
// console.log(description == newDescription); // false


const users = ['Bob', 'Sarah', 'Anna'];

const newUsers = [ ...users  ];

// console.log('users', users);
// console.log('newUsers', newUsers);
// console.log(users == newUsers); // false


// Object.assign( newObject, sourceObject)


const newDescription2 = Object.assign({}, description );

// console.log('newDescription2', newDescription2);





const book = {
  author: "Charlotte Bronte",
  publishers: [ "Penguin", "Audible" ]
}

const bookCopy = { ...book };
// const bookCopy = Object.assign({}, book);


bookCopy.publishers[0] = "Other Publisher";

console.log('book.publishers', book.publishers); // book.publishers[0]

console.log('bookCopy.publishers', bookCopy.publishers);


/* 
const book = {
    author: "Charlotte Bronte",
    publishers: <567vvv>
}


const bookCopy = {
  author: "Charlotte Bronte",
  publishers: <567vvv>
}
*/


// DEEP COPY OBJECTS

// Poor man copy   -   JSON.parse(  JSON.stringify( objToCopy  )   )

const movie = {
  name: 'Sponge Bob',
  imdb: 7,
  actors: [ 'Sponge Bob', 'Patrick the Star' ]
}

// Deep copy
const movieCopy = JSON.parse(   JSON.stringify( movie ) );


movie.actors[0] = 'Spongebob square pants';

console.log('movie', movie);
console.log('movieCopy', movieCopy)



// JSON.stringify - converts an object/array to a string
// JSON.parse - converts a string that looks like array/object to an array/object


// console.log(  JSON.stringify( movie )  )
// console.log(  JSON.parse('{"name":"Sponge Bob","imdb":7,"actors":["Spongebob square pants","Patrick the Star"]}')  )