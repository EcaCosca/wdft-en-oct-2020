
// `this` special keyword and value found in functions (function, class)

// `this` represents the context/place from which the function was called.

// `this` changes depending on how the function is called

// In the class `this` represents the new instance of the object that will be created
// It works only when we use keyword `new`
class Toy {
  constructor(name, desc) {
    // this = {}
    this.name = name;
    this.desc = desc;
    // return this
  }
}

const toy1 = new Toy('car', 'red car');


// 1. `this` in free functions ( a function that is not a method )
// In free funcitons, when run/invoked, value of `this` is the Global scope (window)

function printThis() {
  console.log(this);
}

printThis();



// 2. `this` in methods (a function stored inside of an object)
// The value of `this` in method, when run/invoked, is whatever is on the left of the dot
// when the method is run/invoked.


const myObj = {
  name: 'myObj',
  favNum: 14,
  printThis: function() {
    console.log(this);
  },

  nestedObj: {
    printThisNested: function() {
      console.log(this);
    },
  }
}

myObj.printThis();

// myObj.nestedObj.printThisNested();


// 3. `this` in arrow functions (it doesn't exist)
//  As arrow functions don't have `this` value, they take the value of `this`
// * from the surrounding scope in which they were created


function outer() {
  // this
  const innerArrow = () => {  // Takes the value of `this` from "outer"
    console.log('innerArrow this', this); 
  }

  innerArrow();
}

outer();  // window


const person = {
  name: 'John Carr',
  outer: function() {
    const innerArrow = () => {  // Takes the value of `this` from "outer"
      console.log('innerArrow this', this); 
    }

    innerArrow();
  }
}

person.outer(); // person {}

