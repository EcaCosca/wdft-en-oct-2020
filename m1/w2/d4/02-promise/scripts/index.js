

/* 
  Promise is a wrapper object used to handle async operations
  A Promise can be in one of 3 states:
    - Pending
    - Fullfiled
    - Rejected
 */


const pr = new Promise( (resolve, reject) => {
  // resolve("EVERYHTING WENT FINE");  // this will activate `then` block

  // reject(" THERE WAS AN ERROR ");  // this will activate `catch` block
} );





pr
  .then((response) => {         // This code runs if Promise was successful
    console.log(response);
  })
  .catch((rejection) => {       // This code runs if Promise was rejected
    console.log(rejection);  
  })




