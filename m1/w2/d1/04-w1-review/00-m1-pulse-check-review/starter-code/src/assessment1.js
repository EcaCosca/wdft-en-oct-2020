// Write a function that returns the product of 2 numbers
function product(x, y) {
  const result = x * y;
  return result;

  // return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    // check if the number is event
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return a;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //   3 5
  let max;

  if (a >= b) {
    // if a is bigger or equal to b
    max = a;
  }

  if (b > a) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}

// Shorter way
// function maxOfThreeNumbers(a, b, c) {
//   return Math.max(a, b, c);
// }

// Calculate the sum of an array of numbers
// [34, 56, 7, 9]

// function sumArray(numbers) {
//   let total = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     const currentNum = numbers[i];
//     total = total + currentNum; //   total += currentNum;
//   }

//   return total;
// }

//             *
// [34, 56, 7, 9]                         //  total =  106
function sumArray(numbers) {
  const result = numbers.reduce(function (total, el) {
    const updatedTotal = total + el; // 106
    return updatedTotal;
  }, 0);

  return result;
}

// Return the largest number of a non-empty array
// [-34, -56, -7, -9,]
function maxOfArray(numbers) {
  let biggest = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    if (currentNum > biggest) {
      biggest = currentNum;
    }
  }

  return biggest;
}

// function maxOfArray(numbers) {
//   const max = Math.max(...numbers);
//   return max;
// }

// Return the longest string in an array
//    ['a', 'ab', 'abc']
function longestString(strings) {
  let longest = ""; // 0

  for (let i = 0; i < strings.length; i++) {
    const currentStr = strings[i];

    if (currentStr.length > longest.length) {
      longest = currentStr;
    }
  }

  return longest;
}

//    ['a', 'ab', 'abc']
function longestString(strings) {
  let longest = ""; // 0

  strings.forEach(function (str) {
    if (str.length > longest.length) {
      longest = str;
    }
  });

  return longest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  const exists = wordsArr.includes(word);
  return exists;

  // return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
//  ['foo', 'bar', 'foo', 'bar', 'baz', 'fizz', 'foo' ]

function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false;
  }

  const uniqueStrings = [];

  wordsArr.forEach(function (word) {
    // if word is not in uniqueStrings
    if (!uniqueStrings.includes(word)) {
      uniqueStrings.push(word);
    } else if (uniqueStrings.includes(word)) {
      const repeatedStringIndex = uniqueStrings.indexOf(word);
      uniqueStrings.splice(repeatedStringIndex, 1);
    }
  });

  console.log("uniqueStrings[0]", uniqueStrings[0]);
  return uniqueStrings[0];
}

function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  var highestNum = 0;

  // We are using nested a loop to iterate over nested arrays
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > highestNum) {
        highestNum = matrix[i][j];
      }
    }
  }
  return highestNum;
}
// We could also use a `.flat()` method or `reduce()` together with `concat()`
