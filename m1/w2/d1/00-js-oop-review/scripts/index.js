// Difference between creating the method in constructor and outside of it ?

class Product  {
  constructor(name, desc, price) {
    // this = {  }
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.getFormattedPrice = function () {
      console.log(this.price + " €");
    }
    // return this
  }

  getDescription () {
    console.log(`${this.name}: ${this.desc}. It costs: ${this.price}eur`);
    
  }
}


const laptop = new Product('Mac', 'nice', 1500);

class Toy extends Product {
  constructor(name, desc, price, brand, minAge) {
    super(name, desc, price);
    this.brand = brand;
    this.minAge = minAge;
  }

  static getClassName () {  console.log('Class name is Toy') };


  getInstructions() {  console.log('Toy instructions....'); }
}  


const toyCar = new Toy('red car', 'a lot of fun', 10, 'Disney', 5);
console.log('toyCar', toyCar)

console.log(toyCar);

toyCar.getInstructions();