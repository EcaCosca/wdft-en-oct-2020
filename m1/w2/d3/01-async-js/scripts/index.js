// // setTimeout() - used to create a timer, and run code after
// // certaint amount of ms passed


// function sayHello() {
//   console.log('Hello there!');
// }


// // setTimeout( function() {}, delay  )

// setTimeout( sayHello, 0 );

// console.log('1');

// setTimeout( sayHello, 0 );


// console.log('2');






// let counter = 1;
// let timeoutId;

// function printCounter () {
//   console.log(counter);
  
//   counter++;
//   // calling the function recursively again
//   timeoutId = setTimeout( printCounter, 1000);
// }

// const button = document.querySelector('#btn');

// button.addEventListener('click', function() {
//   // stop the last created timeout
//   clearTimeout(timeoutId)
// })


// // starts the function initially
// printCounter();


// setInterval(  funciton() {}, delay)
// It keeps calling the function repedately in set time intervals



// setInterval(  function() {
//   console.log('Hello');
// }, 500)

let counter = 1;

function printCounter () {
  console.log(counter);
  
  counter++;
}

const intervalId = setInterval( printCounter, 1000);


const button = document.querySelector('#btn');
button.addEventListener('click', function() {
  // stop the last created interval
  clearInterval(intervalId);
})


// setTimeout()  -  executes the funciton only once
// setInterval() - executes the function repeatedly