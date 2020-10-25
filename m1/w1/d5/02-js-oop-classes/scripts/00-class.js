// Class names start with capital letter
// ES6 are syntactic sugar (they are functions)
// ES6 classes are not hoisted

class Car {
  constructor(brand, model){
    // this - new object (instance) that will be created
    // this = { }
    this.brand = brand;
    this.model = model;

    // return this
  }

  // Methods created after the `constructor` block are automatically created on the prototype
  start () {
    console.log(this.brand + " start engine.")
  }

}
// Car.prototype = { start f()   }   // created automatically by JS
// Used to share properties and methods with all the children/instance objects




const bmw = new Car("BMW", "X5");
// { brand: "BMW", model: "X5", __proto__: 🔗  }
const lexus = new Car("Lexus", "L300");
// { brand: "Lexus", model: "L300", __proto__: 🔗 }



console.log('bmw', bmw);
console.log('lexus', lexus);

bmw.start(); // method is borrowed from Car.prototype (prototypal inheritance -  bmw.__proto__ -> Car.prototype)

console.log(bmw.__proto__ === Car.prototype); // true - __proto__ connects the instance to the parent's/class prototype object


// console.log('Car.prototype', Car.prototype);


