'use strict'

// `document` is an interface (a way of accessing) to work with DOM and HTML elements. 
console.log('document', document); // shows the DOM tree of elements
console.dir(document);             // shows all properties that `document` object has



// ACCESSING HTML ELEMENTS
// Getting DOM elements and saving their reference for later use (for adding style, content, interactivity)

// Summary:
// getElementById - returns one element
// getElementsByClassName and getElementsByTagName - return HTMLCollection (must be converted to array)
//
// * querySelector - returns one element (we select it with CSS syntax)
// * querySelectorAll - returns an iterable/loopable list of elements (we selecti it with CSS syntax)


// 1. Getting one element by it's 'id'
const firstDiv = document.getElementById("first");
const secondDiv = document.getElementById("second");

const title = document.getElementById("title");

// console.log('firstDiv', firstDiv);
// console.log('secondDiv', secondDiv);
// console.log('title', title);


// After saving an element reference we can add style, content or functionality
firstDiv.innerHTML = "I am the first div. Let the world now";
secondDiv.innerHTML = "I am the second div.";
title.innerHTML = "Intro to DOM";




// 2. Getting all elements that have a particular 'class' name (returns HTMLCollection that should converted to a regular array)
const htmlCollection = document.getElementsByClassName('third');

// console.log('htmlCollection', htmlCollection);

// HTMLCollection is a special array-like object.
// HTMLColleciton doesn't allow use of `forEach`, `map`, `reduce`, etc. (usuall array methods are unavailable)


//! this will not work - because HTMLCollection is not iterable/loopable
// htmlCollection.forEach(  function (el) {
//   console.log(el);
// })



// Convert HTMLCollection to regular array

const elementsArr = [ ...htmlCollection ];
// Array(htmlCollection);  // Boxing

elementsArr.forEach(function(el) {
  el.innerHTML = "Content inside";
})



// 3. Getting all elements by their tag name (element type) (returns HTMLCollection that should converted to a regular array)

const divsHTMLCollection = document.getElementsByTagName('div');

// Convert HTMLCollection to regular array
const divsArray = [ ...divsHTMLCollection ];

// console.log('divsArray', divsArray)

divsArray.forEach( function(el) {
  el.style.background = 'red';
})



// 4. Get the first found element by CSS selector - select only one element

const firstClassDiv = document.querySelector('.third');


const headline = document.querySelector('body h1');

// const headline = document.querySelector('#title');
// const headline = document.querySelector('h1');


// console.log('headline', headline);



// 5. Get all of the elements by CSS selector - returns a iterable list (no need to convert it to an array)
const allDivs = document.querySelectorAll('#first, #second, .third');
// const allDivs = document.querySelectorAll('div:nth-child(odd)');


// console.log('allDivs', allDivs);

// No need to convert to an array (iterable right away)
allDivs.forEach(function(el) {
  // el.style.background = "cornflowerblue";
})



// ADDING CONTENT TO HTML ELEMENT

// .innerHTML  - Adds content between element's tags

const divOne = document.querySelector("#first");

// Add text only
// divOne.innerHTML = "NEW CONTENT";

// Or add html elements by passing HTML-like string
divOne.innerHTML = `
  <h2>NEW CONTENT</h2>
  <p>Hola Mundo</p>
`;



// .textContent - used to add text to an element
const divTwo = document.querySelector("#second");

// console.log('divTwo', divTwo);

divTwo.textContent = "THIS IS DIV No TWO";

// It reads HTML-like string like a regular piece of text 
divTwo.textContent = "<h1>THIS IS DIV No TWO</h1>";




// ADDING STYLES FROM JS    .style


// background-color
divOne.style.backgroundColor = 'pink';
divOne.style.border = "4px solid blue";
divOne.style.marginBottom = "30px";
divOne.style.paddingTop = "30px";



// Accessing or changing `class` or `id`

const myDiv = document.querySelector(".third");

// Adding or updating the `class` of an element
// myDiv.className = myDiv.className + " active";
myDiv.className += " active";


console.log('myDiv', myDiv);

// Adding or updating an `id` of the element
myDiv.id = "i-am-a-banana";

