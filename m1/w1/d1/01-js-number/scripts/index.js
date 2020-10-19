// var myName = "Uros";

// var result = myName / 53;

// console.log(result);





// console.log(Number.MAX_SAFE_INTEGER)


// var lowest = -Infinity;
// var highest = Infinity;


// var sum = 1 + 1;
// var det = 10 - 1;
// var mult = 10 * 5;
// var div = 50 / 10;





// var price = 100;

// // price = 100 + 21;
// price += 21

// var price2 = 200;

// price2 = price2 - 21;
// // price2 -= 21

// console.log(price2)



// var myNum = 21;

// // Check if a number is even
// var result = myNum % 2;

// // If result 0 - it is event
// // else it is odd

// console.log(result)



// var result1 = Math.round(4.7); // 5
// var result2 = Math.round(4.3); // 4\

// var result3 = Math.round(4.5); // 0.5 rounds to next/higher integer

// // console.log('result1', result1)
// // console.log('result2', result2)
// // console.log('result3', result3)


// // Math.floor  Math.ceil


// var result4 = Math.floor(9.99);
// console.log('result4', result4);

// var result5 = Math.ceil(10.01);
// console.log('result5', result5);



// var max = Math.max(234, 345245, 2342, -23423, -234);
// var min = Math.min(234, 345245, 2342, -23423, -234);

// console.log('max', max);
// console.log('min', min);



// // Creating a random number
// var random = Math.random(); // 0 and 0.99 (1 is not included)
// console.log('random', random)

// var randomZeroToNine = Math.floor(Math.random() * 10);

// console.log('randomZeroToNine', randomZeroToNine);



// // var floatResult = 0.1 + 0.2; // 0.3

// // var floatResult = 0.3 + 0.6; // 0.9

// var floatResult = 0.05 + 0.01; // 0.06

// // Fixing the floating point precision issue
// var floatFixed = Number( floatResult.toFixed(2) )

// console.log('floatFixed', floatFixed)




// // Checking if a value is NaN
// console.log(Number.isNaN(123)); // false
// console.log(Number.isNaN(-12.3)); // false

// console.log(Number.isNaN(NaN)); // true




var x = 10;

var y = 5;
var z = 5;

var str = '5';

//  ==   - compares the values only by "value"

console.log(   y == z    );
console.log(   5 == 5    );

console.log(   x == y    );
console.log(   10 == 5    );


console.log(   x != y    );  // true
console.log(   10 != 5    ); // true


console.log(   5 == '5'    ); // true


//  ===   - compares the values by "value" and "data type"


console.log(   5 === '5'    ); // false



console.log(   10 > 1   ); // true


console.log(   10 < 1   ); // false

console.log(   10 >= 10   ); // true


console.log(   10 <= 20   ); // true