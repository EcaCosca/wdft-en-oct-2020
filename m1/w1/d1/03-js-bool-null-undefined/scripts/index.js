


var data = ['Mirko', 'Uros', 'David'];

var data = null;


// if (!data) {
//   console.log('data is a falsy value');
// }


// Truthy
// if (data) {
//   for(var i = 0; i < data.length; i++) {
//     console.log(data[i]);
//   }
// }


// var userInput = prompt("enter your name?");

// if (userInput) {
//   console.log('Your name is: ' + userInput);
// }
// else if ( !userInput ) {
//   console.log('Please provide your name');
// }




// AND

//   expr1 && expr2     ==>  true or false

// console.log(true && true);   // true only when both sides are true

// console.log( false && true); // false
// console.log( true && false); // false
// console.log( false && false); // false



// // OR ||


// console.log(  false || false );  // false only when both sides are false

// console.log( false || true); // true

// console.log( true  || false); // true



console.log(( 4 > 2) && ( 10 === 10))

console.log(( 4 > 2) && ( 10 === 3))


console.log((4 > 2) || (10 === 'bob'))

console.log((4 > 1000) || (10 === 'bob'))



// Short circuit evaluation

// AND operator &&
// true && true  ==>  true


//  false && (anything else) ==> it short circuits the value to false



// OR operator ||
// false || false ==>  false


// true || (anything else) ==> short circut the value to true

true || false



var a = false;
var b = 'foo' === 'abc'; // false
var c = 10 === 5; //  false

var d = 4;      // true
var e = 'five'; // true


var result = a || b || c || d || e;
// result = true || e;

// console.log(result);


// // Example: Using && short circuting to return a value

// var input = prompt('What is the secret of life?');
// var result2 =  (input == 'beer') && 'Evaluated Truthy';

// console.log('result2', result2)

// 

// var controlV = false;



// if ( controlV == false ) {
//   console.log('Value is false');
// }


// // check if value is falsy
// if ( ! controlV ) {
//   console.log('Value is false as well!!');
// }

// // check if value is falsy
// var input = prompt('What is the secret of life?');

// if ( ! ( input === 'beer' ) ) {
//   console.log('Input was wrong');
// }



var myVar;


console.log(myVar); // undefined


// console.log(  secretOfTheUniverse  ); // Error: is not defined






var obj = null


console.log(  typeof obj  ); // object



