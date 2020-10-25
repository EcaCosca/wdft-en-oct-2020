class Car {
  constructor(brand, model){
    this.brand = brand;
    this.model = model;
  }

  start () {
    console.log(this.brand + " start engine.")
  }

}     // Car.prototype = { start f()  }
      // {}  __proto__  - Every object in JS has this hidden property 


class HybridCar extends Car {
  constructor(brand, model, engineType) {

    super(brand, model);  // this = { brand: "", model: ""}
    this.engineType = engineType;
  }

  description () {
    console.log(`Brand  ${this.brand} - Engine ${this.engineType}`);
  }

  static getClassName () {   console.log('HybridCar') }   // HybridCar.getClassName()

} // HybridCar.prototype = { description f(), __proto__: Car.prototype }
const hybridToyota = new HybridCar('toyota', 'prius', 'electric');

hybridToyota.start();








class TeslaCar extends Car {
  constructor(model, engineType) {
    
    super("Tesla", model);  // this = { brand: "", model: ""}
    this.engineType = engineType;
  }

}


const tesla1 = new TeslaCar('model 1', 'electric')
