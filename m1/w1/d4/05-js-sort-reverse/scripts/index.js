// const students = ['Lucy', 'Alvaro', 'Sergi', 'Emma', 'Monica'];

// students.reverse();

// console.log('students', students);

// Sorting an array of strings - works fine
const fruits = [
  "Watermelon",
  "Banana",
  "Orange",
  "Apple",
  "Dragon Fruit",
  "Mango",
  "Cheries",
];

fruits.sort();
// fruits.sort().reverse();

console.log("fruits", fruits);

const numbers1 = [22, 23, 68, 1, 99, 0, 9, 112, 223, 64, 18];

// numbers.sort();

// sort ascending .o:0
numbers1.sort(function (a, b) {
  // order formula
  // compare function should return 1, -1, 0

  // if 1 returned: b is sorted before a
  // if -1 returned: a stays before b (leave a and b unchanged)
  // if 0 returned: a stays before b (leave a and b unchanged)

  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

console.log("numbers1", numbers1);

const numbers2 = [22, 23, 68, 1, 99, 0, 9, 112, 223, 64, 18];

//               [22, 23, 1, 68, 0, 99, 9, 112, 223, 64, 18];

// sort descending 0:o.
numbers2.sort(function (a, b) {
  // order formula
  // compare function should return 1, -1, 0

  // if 1 returned: b is sorted before a
  // if -1 returned: a stays before b (leave a and b unchanged)
  // if 0 returned: a stays before b (leave a and b unchanged)

  if (a > b) {
    return -1;
  } else if (b > a) {
    return 1;
  } else {
    return 0;
  }
});

console.log("numbers2", numbers2);

// sort ascending shorthand
const numbers3 = [22, 23, 68, 1, 99, 0, 9, 112, 223, 64, 18];

numbers3.sort(function (a, b) {
  return a - b; // shorthand for ascending sort
});

// numbers3.sort( (a, b) => a - b); // shorter short way - arrow function

console.log("numbers3", numbers3);

// sort descending shorthand
const numbers4 = [22, 23, 68, 1, 99, 0, 9, 112, 223, 64, 18];

numbers4.sort(function (a, b) {
  return b - a; // shorthand for descending sort
});

// numbers4.sort( (a, b) => b - a); // shorter short way - arrow function

console.log("numbers4", numbers4);

//  sort, splice , reverse - mutate the original array
