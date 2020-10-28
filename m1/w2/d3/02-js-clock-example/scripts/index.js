let counter = 0;

function concatZero (num) {
  const timeStr = '0' + num;  

  return timeStr.slice(-2);
}


// function updateClock() {
//   // Get the current date every second
//   const dateObj = new Date();   // 12:02:15

//   const seconds = dateObj.getSeconds();
//   const minutes = dateObj.getMinutes();
//   const hours = dateObj.getHours();

//   const timeNow = concatZero(hours) + " : " + concatZero(minutes) + " : " + concatZero(seconds);

//   console.log('timeNow', timeNow)
//   // print the formatted time on the console
// }


// setInterval( updateClock, 1000 );





// ELEMENTS
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');


// FUNCTIONS
function updateClock() {
  // Get the current date every second
  const dateObj = new Date(); // create the current date instance

  console.dir(dateObj)

  const seconds = dateObj.getSeconds();
  const minutes = dateObj.getMinutes();
  const hours = dateObj.getHours();

  hoursEl.textContent = concatZero(hours);
  minutesEl.textContent = concatZero(minutes);
  secondsEl.textContent = concatZero(seconds);
}

// CODE
// setInterval( updateClock, 1000 );

updateClock()


// EVENT LISTENERS