const students = ['Alvaro', 'Emma', 'Jaime', 'Alvaro', 'Lucy', 'Irene'];

// Check if item exists in an array:


// arr.indexOf( value  )
// returns the first index where element is found
// or -1 if element doesn't exist in the array


// console.log(  students.indexOf( 'Alvaro' )  )
// console.log(  students.indexOf( 'Bob' )  )



// console.log(  students.lastIndexOf( 'Alvaro' )  )




// arr.includes(  value )
// returns `true` if elements exists in the array
// or `false` if elements doesn't exist in the array

// console.log(  students.includes('Alvaro')  )
// console.log(  students.includes('Bob')  )



function eatDinner(  func  ) {
  // var func = eatDessert
  console.log('Eating dinner');
  console.log('Finished eating dinner.');
  
  func();

}


function eatDessert() {
  console.log('\n Eating cake');
}

function goExercise(){
  console.log('\n Go for a walk!');
}



eatDinner(  eatDessert   );

eatDinner(  goExercise   );
