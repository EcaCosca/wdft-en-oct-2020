'use strict'

// `document` is an interface (a way of accessing) to work with DOM and HTML elements. 
console.log('document', document); // shows the DOM tree of elements
console.dir(document);             // shows all properties that `document` object has



// ACCESSING HTML ELEMENTS
// Getting DOM elements and saving their reference for later use (for adding style, content, interactivity)


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

console.log('divsArray', divsArray)

divsArray.forEach( function(el) {
  el.style.background = 'red';
})



//