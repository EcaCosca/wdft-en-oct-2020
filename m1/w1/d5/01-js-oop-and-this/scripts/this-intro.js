// this - Special function's keyword 
// Special value that exists only in functions (and class)


// this is used to represent the context of the function.
// context - the space/scope from which the function was called/invoked.

// Depending on how the function is being called, the context (value of this) changes.


// 1. In a free function invocation/call/run ( function delcaration or function expression)
// The value of `this` will be Global Scope (Window)
function print () {
  console.log(  this  ); // points to the Global scope - Window
}



// print(); // free function invocation - no preceeding object


// 2. `this` in methods (function in an object)
// value of this is whatever is on the left of the dot, when function is called
const person = {
  name: 'John',
  lName: 'Carr',
  age: 30,
  country: "Scotland",
  copyOfPrint: print,
  printThis: function () {
    console.log(this);
  },
  nested: {
    objName: "I am nested",
    printNestedThis: function () {
      console.log(this);
    },
  }
}


// person.printThis();

// person.nested.printNestedThis();

// person.copyOfPrint();





// 3. Exception - `this` in arrow funcitons
// Arrow function doesn't have the value `this` inside of it (it doesn't have this fucntionality like `function`).

// Arrow function takes the value of `this` from the closest surrounding scope
// at the time/place when it is created.


function outer () {

  const arrowFunc = () => {
    console.log('arrowFunc this', this);
  }

  arrowFunc();
}

// outer(); // window


const company = {
  name: 'Ironhack',
  founders: 2,
  city: 'Madrid',
  outer: function () {
    // this = company
    const arrowFunc = () => {
      console.log('arrowFunc this', this);
    }
    arrowFunc();
  }
}

// company.outer(); // arrowFunc this --> 




// 4. `apply`,`call`,`bind` - 
// can be used to change the value (give custom value) of this in a function, when called/run/invoked
// Can't be used with arrow function

const myObj = {
  name: 'My object',
  printThis: function( name, city) {
    console.log(name, city);
    console.log( this );
  }
}

myObj.printThis('uros', 'barcelona');  // myObj {}


// `call(context, arg1, arg2, ....)` used to give custom value of this to a function during one call/invocation

const randomObj = {
  name: "I aM RanDoM",
  price: 234234
}


myObj.printThis.call(randomObj, 'lucia', 'barcelona');  //  randomObj {}

// myObj.printThis('steven', 'barcelona');  // myObj {}





// `bind(context, arg1, arg2, ....)` used to give a permanent custom value of this to a function
// and it can be used to set permanent paramter values

const newPrintThis = myObj.printThis.bind(randomObj, 'david');

newPrintThis('barcelona');


