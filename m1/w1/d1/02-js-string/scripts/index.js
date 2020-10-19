// var string1 = "string one";
// var string2 = 'string one';

// var string3 = `string three`; // template literals - interpolation


// var greeting1 = "Hello there Bob from 'Outter Space Inc' ";
// var greeting2 = 'Hello there Bob from "Outter Space Inc" ';


// console.log('greeting1', greeting1)
// console.log('greeting2', greeting2)


// var student = 'Uros';
// var bootcamp = 'Barcelona';

// var greeting3 = `Hello there ${student} welcome to IH - ${bootcamp}.`;


// console.log('greeting3', greeting3);


// var fruits = `
//   1. banana 🍌
//   2. apple 🍎
//   3. orange 🍊
//   4. cherry 🍒
// `;

// console.log('fruits', fruits);

// // potential use case, saving HTML as a string
// var myHTMLTemplate = `
//   <!DOCTYPE html>
//   <html lang='en'>
//     <head>
//       <meta charset='UTF-8' />
//       <meta name='viewport' content='width=device-width, initial-scale=1.0' />
//       <title>Document</title>
//     </head>
//     <body>
//       <script src='./scripts/index.js'></script>
//     </body>
//   </html>
// `;


// // Escaping characters or special characters
// var favActor = "My favourite actor \n is \"T.Hanks\" \uF916 ";

// console.log('favActor', favActor);


// var name = 'Ana';

// console.log('name.length',  name.length);


// // String concatenation   +
// var emptyContainer = '';

// // console.log('emptyContainer.length', emptyContainer.length);

// emptyContainer = emptyContainer + "Hello";

// emptyContainer += ", welcome to ironhack."


// console.log('emptyContainer', emptyContainer)



// var container = 123;

// container =  "abcde" + 12345; // converts the result to a string

// console.log('container',  container)



// // Accessing characters
// var myString = "Bananarama";
// //              0123456789

// console.log('myString[6]', myString[6]);

// console.log('myString[10]', myString[10]);


// // Getting the Last character in the string
// var lastIndex = myString.length - 1;
// console.log('myString[lastIndex]', myString[ lastIndex ]);



// // indexOf() - check if the substring exists
// // returns index of a found substrin
// // or -1 if substring was not found in the string
// var message = "Don't be sad, be happy!";

// var result = message.indexOf("be");
// var result2 = message.indexOf("worried"); // -1  substring not found


// console.log('result', result);
// console.log('result2', result2);


// // str.lastIndexOf(substr) - starts searching from the back of the string

// var result3 = message.lastIndexOf('be');

// console.log('result3', result3)



// // str.repeat(times)

// var myStr = "Na";

// console.log( myStr.repeat(10) + " Batman!" );

// console.log( "$".repeat(5)     );



// // str.includes( substr )   -   returns a boolean

// var animal = "Hippopotamus";

// var includesPop = animal.includes("pop");

// console.log('includesPop', includesPop);

// console.log(  animal.includes("pot")   );
// console.log(  animal.includes("dog")   );


// Copy a string / a part of string


// str.substring( startIndex, endIndex  )

var message = "Don't be sad, be happy!";

var beHappy = message.substring(17, 23 );

console.log('beHappy:', beHappy)



// str.slice( startIndex, endIndex )

var beSad = message.slice(6,12);

console.log('beSad: ', beSad);

// var happy = message.slice(-6);
var happy = message.slice(-6, -1);


console.log('happy: ', happy)
