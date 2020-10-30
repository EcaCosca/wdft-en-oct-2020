
// const pr = new Promise( function(resolve, reject) {
//   // `resolve` is used if the operation is successful/fulfilled
//   resolve("HELLO FROM RESOLVE");


//   // `reject` is used if the operation is unsuccessful
//   reject("Something went wrong :/ ");
// })



// console.log('pr', pr);

// pr
//   .then((valueFromResolve) => {
//     console.log('valueFromResolve: \n', valueFromResolve);
//   })
//   .catch((valueFromReject) => {
//     console.log('valueFromReject: \n', valueFromReject)
//   })



// function checkIfUserExercised () {
//   const options = [true, false];
//   const randomIndex = Math.floor(Math.random() * 2);
//   const randomOption = options[randomIndex];

//   return randomOption;
// }

// const promiseToExerciseToday = new Promise(function (resolve, reject) {
//   // Try to exercise
//   const userDidExercise = checkIfUserExercised();

//   if (userDidExercise) {
//     resolve('Exercised Today!');
//   }
//   else if (! userDidExercise) {
//     reject('Did not Exercise! Such Lazy!')
//   }
// })



// promiseToExerciseToday
//   .then(  (valueFromResolve) => {
//     console.log('valueFromResolve: \n', valueFromResolve)
//   })
//   .catch( (valueFromReject) => {
//     console.log('valueFromReject: \n', valueFromReject)
//   } )



const ourFetch = new Promise( function(resolve, reject) {

  // Fake getting data from the server    https://apple.com/mac-16
  
  // Simulate successful request
  // const data = { item: "MacBook Pro 16", price: 2600, year: 2020, img: "https://i.imgur.com/wDasLdD.jpg"}
  
  
  // Simulate failed request
  const data = null;
  const error = new Error("Unable to get data");

  if (data) {
    resolve(data); 
  }
  else if (error) {
    reject(error);
  }
})


ourFetch
  .then( (data) => {

    console.log('data', data)
    document.body.innerHTML = `
      <div>
      <article>
        <img src="${data.img}" style="width: 300px; height: auto">
        <h3>${data.item}</h3>
        <h3>Price: ${data.price}</h3>
        <h4>Year: ${data.year}</h4>
      </article>
    </div>
    `
  } )
  .catch( (error) => {
    document.body.innerHTML = `
      <div>
        <h1>ERROR</h1>
        <h2>${error}</h2>
        <img src="https://i.imgur.com/s525Tvp.png" />
    </div>
    `
  }  )