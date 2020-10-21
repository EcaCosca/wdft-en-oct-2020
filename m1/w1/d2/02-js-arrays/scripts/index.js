


// var students2 = [
  //   "Niklas",      // 0
  //   "Alvaro",      // 1
  //   "Jaime",       // 2
  //   "Yang"        // 3
  // ]
  

// // Acessing elements
// var students = [ "Niklas", "Alvaro", "Jaime", "Yang" ]


// var niklas = students[0];
// var jaime = students[2];
// var yang = students[3];

// var whatHappens = students[5];

// console.log(whatHappens);




// // Declaring arrays
// var arrayNames = [];


// var arrayNames2 = ["Pedro", "Jake", "Joan", "Mike"];


// // Less common
// var emptyArray = new Array();
// var filledArray = new Array('Apple', 'Banana');

// var arrayOfUndefined = new Array(5);


// // We can assign any value to an array
// var mixedArray = [ "Pedro", 2232, true, null, function() {}, {} ]


// console.log('arrayNames', arrayNames)
// console.log('arrayNames2', arrayNames2)
// console.log('emptyArray', emptyArray)
// console.log('filledArray', filledArray)

// console.log('arrayOfUndefined', arrayOfUndefined)




// // Length
// var students3 = ['Anna', 'Bob', 'Joan', 'Ely'];

// console.log('students3.length', students3.length)



// Removing the last element - arr.pop()
var students4 = ['Anna', 'Bob', 'Joan', 'Ely', 'Marco'];

var marco = students4.pop();

console.log('marco', marco);



// Removing the first element - arr.shift()

var anna = students4.shift();

console.log('anna', anna);

console.log('students4', students4)



// // Adding elements to the end - arr.push()
// students4.push('Enrique', 'Juliane', 'Claudia');



// // Adding elements to the begining - arr.unshift()
// students4.unshift("Jamie")


// console.log('students4', students4)


// // Add or change an element on the specific index
// students4[1] = "Better Bob";
// students4[7] = "Monica";

// students4[10] = "Mirko";

// console.log('students4', students4)



// Array to string
// arr.join("joiningCharacter")
// var students5 = ['Anna', 'Bob', 'Joan', 'Ely', 'Marco'];


// var str = students5.join("$$$");

// console.log('str', str)


// // String to array
// // str.split("splitCharacter")

// var nameString = "Mark Susan Luca Jennifer Hanna Ross Anna";

// var namesArray = nameString.split(" ");

// console.log('namesArray', namesArray)


// Copying the array or array values

// arr.slice( startIndex, endIndex  )   -- non-mutating


// var fruits = [ 'Apple', 'Banana', 'Coconut', 'Watermelon']
// var fruitsCopy = fruits.slice();


// console.log('fruitsCopy', fruitsCopy);


// var firstTwo = fruits.slice(0, 2);
// console.log('firstTwo', firstTwo)


// var lastTwo = fruits.slice(-2);
// console.log('lastTwo', lastTwo)

// console.log('original array fruits', fruits)




// Copying the array or array values
// arr.splice(start, removeCount)     -- mutating (it mutates the original array)


// var fruits = [ 'Apple', 'Banana', 'Coconut', 'Watermelon', 'Melon'];

// // var firstThree = fruits.splice(0, 3);
// // console.log('firstThree', firstThree);

// var coco = fruits.splice(2, 1);
// console.log('coco', coco);


// var melon = fruits.splice(-1, 1, "Tomato", "Guayaba");

// // Insert without removing existing elements
// fruits.splice(1, 0, "Avocado")


// console.log('original array fruits', fruits)





var students = ['Anna', 'Bob','Joan', 'Ely', 'Tom'];


for (var i = 0; i < students.length; i++) {
  var el = students[i];

  console.log('el', el)
}


// arr.forEach( function(el, index, originalArr ) {}  )



students.forEach( function(el ) {

  console.log( `${i + 1}.`, el);
  
}  )