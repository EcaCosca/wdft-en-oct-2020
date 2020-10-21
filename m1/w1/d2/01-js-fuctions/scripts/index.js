// // Routine SUM-NUMBERS ( Takes 2 numbers ): 
// //   Steps:
// //   - Sums the 2 numbers
// //   - Prints the sum



// function sumNumbers ( num1, num2 ){
//   var sum = num1 + num2;
//   console.log(sum)
// }


// // Call / invoke / run

// sumNumbers(10, 33);
// sumNumbers(59, 1);


// // Function return
// // Function always returns something.
// // Be default function returns `undefined`

// var result = sumNumbers(100, 200);


// console.log('result', result)



// function divideNumbers (num1, num2) {
//   var total = num1 / num2;

//   console.log('BEFORE');
  
//   return total;
//   console.log('AFTER');

// }


// var result2 = divideNumbers(20, 2);

// console.log('result2', result2)




// // Function declaration Syntax
// function sayHello ( name ) {
//   return 'Hello ' + name; 
// }


// // Function expression Syntax
// var sayHello = function ( name ) {
//   return 'Hello ' + name; 
// }


// // Arrow function ES6
// var sayHello2 = ( name ) => {
//   return 'Hello ' + name; 
// }


// // Concise Arrow function ES6
// var sayHello3 = ( name, lName ) => 'Hello ' + name + " " + lName;


// // Concise Arrow function ES6 - with only 1 parameter
// var sayHello4 = name => 'Hello ' + name;

// // Concise Arrow function ES6 - with no parameters
// var sayHello4 = () => 'Hello';


// var greetJoe = sayHello('Joe');
// var greetLucy = sayHello2('Lucy');
// var greetHelene = sayHello3('Helene');

// console.log('greetHelene', greetHelene)







// function outer() {

//   function inner1() {
//     var i = 4;

//     console.log("o", o);
//     console.log("g", g);
//   }

//   function inner2 () {
//     inner()
//   }

//   var o = 3;

// }

// var g = 1;



// Lifetime of a variable
// var globalVar = 'llalala';

// function incrementInside() {
//   var num = 0;

//   console.log('local scope - num:', num);
  
//   num++;
//   num++;

//   console.log('local scope - num:', num);
// }


// incrementInside();
// incrementInside();
// incrementInside();


// Variable shadowing

// var x = 5; // in global scope


// function scopeTest() {
//   var x = 100; // in local scope

//   console.log('local scope - x', x);
// }



// console.log('global scope x', x);




// Parameters - Internal function variables

// function sum(a, b) {
//   // var a = 3
//   // var b = 7

//   console.log(a + b)
// }

// sum(3, 7)




// var num = 100;


// function changeNum (num) {
//   // var num = 999
//   num = 999;

//   console.log(num); // 999
// }


// changeNum(5);


// Automatically global variable - bad practice


// // Overwritting issue
// var x = 5;


// function example() {
//   x = 100;
// }

// example();

// console.log('x', x)




// function example2() {
//   // Variables declared without keyword, become automatically global
//   innerVar = 'Bananarama';
// }


// example2();


// console.log(innerVar); // ==> 




// Function hoisting

// function subtractNumbers(num1, num2) {
//   console.log(num1 - num2);
// }


// subtractNumbers(50, 10)


// function subtractNumbers(num1, num2) {
//   console.log(num1 - num2);
// }



// var hoisting


// var cat = undefined

// console.log(cat);

// var cat = "Marshmallow";




// Function that receives another function as argument/parameter

// function eatDessert() {
//   console.log("Eating the dessert 🍰");
// }

// function startEatingDinner( func  ){
//   // var func = eatDessert
//   console.log("Eating the dinner 🍽");
//   console.log("Finished eating dinner!");

//   func()

// }


// startEatingDinner( eatDessert  )





// Function that returns another function

// function higherFunc() {

//   return function() {
//     console.log('Hello there')
//   } 
// }


// var returnedFunc = higherFunc();

// returnedFunc();







// var sayHello = function() {}




// function printFoo() {
//   console.log('foo');
// }


// function printBuz () {
//   console.log('buz')
// }

// printFoo();

// printBuz();



// console.log('AFTER')


// Blow the call stack

// function chicken() {
//   console.log('chicken');

//   egg();
// }

// function egg() {
//   console.log('egg');
//   chicken()
// }


// debugger;
// chicken();


// var sayGoodbye = undefined





function sumNumbers (a , b) {
  // var a = 10
  // var b = 20

  var total = a + b;

  return total;
}


sumNumbers(10, 20)