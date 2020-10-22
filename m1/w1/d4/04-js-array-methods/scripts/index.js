
const arr = ['a', 'b', 'c'];


arr.forEach( function (char , charIndex ) {
  console.log(char, charIndex);
});


// ES6 arrow function
// arr.forEach(  (char , charIndex ) => {
  
//   console.log(char, charIndex);
// });



// map() - Used to create a new array from returned values
// Always returns a new array
// const arr1 = ['a', 'b', 'c', 'd'];

// //           ['A', 'B', 'C', 'D']



// const uppercased = arr1.map( function (char ) {
//   console.log(char);

//   const upper = char.toUpperCase();
//   return upper;

// })

// console.log('uppercased', uppercased)



// arr.reduce(function() {}, intitalValue)

//                                *
// const numbers = [10, 19, 41, 30, 450];


// const reducedNumbers = numbers.reduce( function(total, el) {
//   const updatedTotal = total + el; //  550

//   return updatedTotal;
// }, 0)


// console.log('reducedNumbers', reducedNumbers);



// const listItems = [
//   { name: 'Edward', age: 42},
//   { name: 'Marc', age: 38}, 
//   { name: 'Luca', age:21 },
//   { name: 'Natalia', age:32 },
//   { name: 'Anna', age:24 },
//   { name: 'Amy', age:25 }
// ];


// // "Edward Marc Luca Natalia Anna Amy"

// const namesString = listItems.reduce( function(total, el, i) {
//   let updatedTotal;
//   if (i === 0) {
//     updatedTotal = total + el.name;
//   }
//   else {
//     updatedTotal = total + " " + el.name;
//   }

//   return updatedTotal;
// }, "")


// console.log('namesString', namesString)





// arr.filter(function(el, i , arr) {})
// Always returns a new array 

const numbers2 = [1, 2, 3, 4, 5, 6];

//               [ 2, 4, 6];


const filteredNums = numbers2.filter( function (el) {

  // when functions returns true (or truthy value), the element will be included in new array
  // when function returns false (or falsy value) element will be skipped

  const isEven = (el % 2) === 0; // true or false
  return isEven;

  // return  el % 2 === 0   // Shorter way, all in one line
})




console.log('filteredNums', filteredNums)
