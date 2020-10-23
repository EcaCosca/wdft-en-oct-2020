// Object literal

const bmw = {
  brand: 'BMW',
  color: 'red',
  model: '530 m3',
  averageSpeed: 140,
  year: 2020,
  mileage: 0
}

const toyota = {
  brand: 'Toyota',
  color: 'black',
  model: 'Corolla',
  averageSpeed: 80,
  year: 2018,
  mileage: 0
}

// console.log('bmw', bmw);
// console.log('toyota', toyota);


// Factory function  - just a function that returns objects of specific shape
function carFactory (brand, color, model, averageSpeed, year) {
  const newObj = {
    brand: brand,
    color: color,
    model: model,
    averageSpeed: averageSpeed,
    year: year,
    mileage: 0
  }

  return newObj
}


const seat = carFactory('Seat', 'red', 'Ibiza', 60, 2020);
const opel = carFactory('Opel', 'balck', 'Astra', 60, 2020);
const merc = carFactory('Mercedes Benz', 'red', '200', 60, 2020);


// console.log('seat', seat);
// console.log('opel', opel);
// console.log('merc', merc);




// Class - always named with Capital cased letter first
// Enables prototypal inheritance - avoid code duplication and you can extend classes

class Car {
  constructor(brand, color, model, averageSpeed, year) {
    // specify the shape of the object, and how it is created
    // this - represent the new objrct that will be created
    this.brand = brand;
    this.color = color;
    this.model = model;
    this.averageSpeed = averageSpeed;
    this.year = year;
    this.mileage = 0;
  }
}


const seat1 = new Car('Seat', 'red', 'Ibiza', 60, 2020);
const opel1 = new Car('Opel', 'balck', 'Astra', 60, 2020);
const merc1 = new Car('Mercedes Benz', 'red', '200', 60, 2020);


seat1.interior = "leather";
delete seat1.averageSpeed;

console.log('seat1', seat1);
// console.log('opel1', opel1);
// console.log('merc1', merc1);



