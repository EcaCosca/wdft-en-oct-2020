
var hacker1 = 'David'; // driver

var hacker2 = 'Marta'; // navigator



// 3.1
var driver = hacker1;
var newDriverName = "";

for ( var i = 0; i < driver.length; i++) {
  var char = driver[i];

  if (i < driver.length - 1) {  // for every other char  
    newDriverName += char.toUpperCase() + " ";
  }
  else {  // if on the last char
    newDriverName += char.toUpperCase()
  }
}

console.log('driver:');
console.log(  ` "${newDriverName}"   `);


// 3.2
var newNavigatorName = "";
var navigatorA = hacker2; // Marta   --> atraM


var lastIndex = navigatorA.length - 1;

for (var i = lastIndex; i >= 0; i-- ) {
  var char = navigatorA[i];
  newNavigatorName += char;
}

console.log('newNavigatorName', newNavigatorName);

// Cleaner way
var reversedNav = navigatorA.split('').reverse().join('');

console.log('reversedNav', reversedNav)

// ['M', 'a', 'r', 't', 'a' ]
// ["a", "t", "r", "a", "M"]
// "atraM"


// 3.3
var hacker1 = 'AAA'; // driver
var hacker2 = 'AAB'; // navigator

// if (hacker1 === hacker2) {
//   console.log('What?! You both have the same name?');
// }
// else if (hacker1 > hacker2) {
//   console.log("Yo, the navigator goes first definitely.");
// }
// else if (hacker1 < hacker2) {
//   console.log("The driver's name goes first.");
// } 


var driverA = hacker1;
var navigatorA = hacker2;


// returns -1  -  if driverA occurs alphabetically before navigatorA
// returns 1   -   if navigatorA occurs alphabetically before driverA
// returns 0   - if both strings are the same
var compareResult = driverA.localeCompare(navigatorA);

if (compareResult === -1) {
  console.log("The driver's name goes first.");
}
else if (compareResult === 1) {
  console.log("Yo, the navigator goes first definitely.");
}
else {
  console.log('What?! You both have the same name?');
}


// Bonus 1
var paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut tincidunt nibh, nec efficitur lorem. Cras sit amet augue vitae leo mattis tempus. Sed nisi orci, maximus ac volutpat sed, ultrices sed lectus. Aliquam lorem nisl, auctor id nulla a, maximus efficitur purus. Phasellus blandit purus erat, sit amet vestibulum risus dictum sit amet. Etiam et malesuada lacus. Nunc euismod vehicula massa ac interdum. Nunc congue justo sed dolor interdum, laoreet pellentesque est egestas. Fusce iaculis tristique maximus. Sed ornare metus molestie nisl pretium cursus. Donec ultricies convallis tellus pulvinar ullamcorper. Proin auctor eu mauris nec blandit. Sed ex lectus, lacinia in congue tincidunt, bibendum eu quam. Sed tempor ante quam, sed ultricies augue efficitur eget.
Vestibulum bibendum feugiat ante, nec dictum ligula lacinia sed. Etiam dui justo, sagittis quis vehicula et, lacinia vitae enim. Quisque nulla velit, posuere nec commodo eu, bibendum id orci. Nam ligula quam, mollis ut feugiat et, sollicitudin eget orci. Phasellus condimentum elit in lacus mollis pharetra. Phasellus nec gravida ante. Maecenas eu orci pellentesque, posuere orci sit amet, auctor arcu. Fusce pharetra porta diam ac suscipit. Aliquam tempor elit justo, a commodo elit ultrices ut. Aliquam accumsan iaculis sapien eu iaculis. Curabitur non eros non nisi lacinia sollicitudin. Curabitur at lacinia nisl. In nisl turpis, eleifend et enim vel, fermentum iaculis nunc. Suspendisse bibendum interdum dolor ultrices gravida. Mauris consequat posuere felis, ut feugiat est luctus dapibus.
Donec tempus ligula non lacus laoreet, efficitur tempor neque suscipit. Vivamus in elit et ligula ullamcorper iaculis sed non orci. Integer non metus imperdiet, interdum nibh at, venenatis odio. Donec a ultricies nulla. Phasellus nec felis eget velit congue porttitor. Nunc tortor augue, maximus ut scelerisque non, sodales id urna. Donec eu lacus vel odio tincidunt sollicitudin sed et sem. Quisque fringilla sem felis. Vivamus ac diam faucibus, aliquet mi aliquet, vehicula lacus. Praesent eget cursus neque, vitae ullamcorper justo. Nam consectetur enim id rutrum porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque a convallis turpis, et maximus lectus. Nulla viverra tellus quis tristique eleifend.`

var words = 1;
var etCount = 0;


for (var i = 0; i < paragraphs.length; i++) {
  var currentChar = paragraphs[i];

 // " et"
  var previousChar = paragraphs[i - 1];
  var nextChar = paragraphs[i + 1];
  var lastChar = paragraphs[i + 2];

  if( currentChar === ' ' || currentChar === '\n') {
    words++;
  }
  else if ( 
    (previousChar === ' ' && currentChar === 'e' && nextChar === 't') 
    && ( lastChar === ' '  ||  lastChar === ',' )
  ) {
    etCount++;
  }
}

console.log("words", words);

console.log('etCount', etCount)



/*
"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

// Bonus 2
var stringToCheck = "step on no pets";   // OK
var stringToCheck = "race car";
var stringToCheck = "A man, a plan, a canal, Panama!";

var reversedString = stringToCheck.toLowerCase().split('').reverse().join('');

console.log(reversedString);

if (stringToCheck === reversedString) {
   console.log('String is a palindrome');
}
else {
  console.log('Not a palindrome');
}