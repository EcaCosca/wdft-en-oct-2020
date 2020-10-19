// Basic example
// var age = 22;

// if ( age >= 18 && age <= 65 ) {
//   // execute this code if condition is true
//   console.log('You are an adult');
// }
// else if ( age > 18  && age > 65) {
//   console.log('You are ready to retire');
// }
// else if ( age < 18  && age > 4) {
//   console.log('You are a minor');
// }
// else {
//   // execute this code if previous condition/s are false
//   console.log('You are a baby');
// }



// Nested conditionals
var favoriteMovie = 'Gladiator';
var isDeveloper = true;

if (isDeveloper) {
  console.log('You are a developer');

  if (favoriteMovie === 'Star Wars') {
    console.log(' and yes we can see it!');
  }
  else if (favoriteMovie === 'Gladiator') {
    console.log(' and it is not so obvious!');
  }
}
else if (! isDeveloper) {
  console.log('We don\'t care what is your favourite movie');
}




// Multiple conditions with logic operators

// var name = prompt("Favorite Game of Thrones character?");

// var house = '';

// if (name === 'Khal Drogo') {
//   house = "Dothraki Horselord";
// }
// else if ( 
//     name === "Jon Snow" ||
//     name ===  "Sansa" || 
//     name ===  "Arya"
//   ) {
//     house = "Stark";
// }
// else {
//   house = "Other";
// }

// console.log('house', house)



// switch(name) {
//   case "Khal Drogo":
//     house = "Dothraki Horselord";
//     break;

//   case "Jon Snow":
//   case "Sansa":
//   case "Arya":
//     house = "Stark";
//     break;

//   default:
//     house = "Other";

// }

// console.log('house', house)



// Ternary operator   -  ?


//    expression  ?  "RUNS IF TRUE" :  "RUNS IF FALSE"


// var isDeveloper = true;


// var result =   isDeveloper ? 'IS TRUE' : 'IS FALSE';

// console.log('result', result)



// var likesCookies = true;
// var isBlue = false;


// var isCookieMonster = !isBlue ? 'Not a cookie monster'  : likesCookies ? 'It is a cookie monster' : 'Not a cookie monster'

// // var isCookieMonster = 
// // !isBlue
// //   ? 'Not a cookie monster' 
// //   : likesCookies
// //     ? 'It is a cookie monster'
// //     : 'Not a cookie monster'


//     console.log('isCookieMonster', isCookieMonster)



// var i = 0;


// while ( i <= 20 ) {
//   console.log(i);
//   i = i + 1;

//   // i+=1
//   // i++
// }


// do {
//   console.log(i);
//   i = i + 1;
// } while (i <= 20)




/* 

for ( “0 - runs only once";  “1"  ; “3" ) {
  "2"
}
*/


for ( var i = 0 ; i < 100 ;  i++ ) {
  var isOddNumber = (i % 2) !== 0;

  if (i === 50) {
    break;
  }
  if ( isOddNumber) {
    console.log(i);
  }
  else {
    continue;
  }
}

// for ( var i = 100 ; i > 0 ;  i-- ) {
//   console.log('counter is', i)
// }





