"use strict"

// disallow unnamed variables
// eliminates silent errors in JS by throwing actual errors


function canYouSpotTheProblem () {
  
  for ( let counter = 0; counter < 10; counter++) {
    // console.log('Happy happy')
  }
}


canYouSpotTheProblem();



function checkNumber (x) {


  try {
    // Used to gracefuly handle errors

    if (typeof x === 'string') {
      throw new Error();
    }
    else {
      console.log('It is a number')
    }
  
  } catch (error) {
    console.log('error', error)
  }


}

checkNumber("5")


console.log('AFTER');
