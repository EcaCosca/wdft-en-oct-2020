'use strict'

// Getting attributes of the elements

const googleLink = document.querySelector("#google-link");
const h1 = document.querySelector('h1');

// console.log('googleLink', googleLink);

const linkHref = googleLink.getAttribute("href");
const headlineId = h1.getAttribute("id");
const headlineClass = h1.getAttribute("class");

// console.log('headlineId', headlineId);
// console.log('headlineClass', headlineClass);



// Setting the attributes of the elements
const contentDiv = document.querySelector("#content");

contentDiv.setAttribute('id', 'main-content');


// console.log('contentDiv', contentDiv);



// Removing the attribute of the element
const listOfItems = document.querySelector("#item-list");


listOfItems.removeAttribute('id');
// console.log('listOfItems', listOfItems);




// CREATING DOM ELEMENTS

// Create an element - (created outside of DOM tree (stand-by) )
const h2Tag = document.createElement("h2");

console.log('h2Tag', h2Tag);

// Add content to the element
h2Tag.textContent = "Sub Title";
// h2Tag.innerHTML = "Sub Title";


// Add the element to the DOM Tree
const body = document.querySelector('body');

body.appendChild(h2Tag);  // Add the element to the DOM tree by appedning it to the specific element



// Creating element and text node and appending all to the DOM

const articleBrief = document.createElement('h3');
const articleContent = document.createElement('p');


const textContent1 = document.createTextNode('Mumbai-based startup that has built a video creation and editing platform, has raised $15 million');
const textContent2 = document.createTextNode('The startup offers a freemium web-based editing tool that allows users to create videos that are fit to be published on popular social media platforms (such as Twitter, Facebook, YouTube). It has amassed over 800,000 users in a year since its launch who have created videos in over 75 languages.' );


// Append text nodes to the elements
articleBrief.appendChild(textContent1);
articleContent.appendChild(textContent2);


// Append new elements (with text nodes) to the DOM

body.appendChild(articleBrief);
body.appendChild(articleContent);




// EXERCISE
// 1. Create an image element
const articleImage = document.createElement('img');

// 2. Add the src attribute with the link to an image
articleImage.setAttribute('src', 'https://techcrunch.com/wp-content/uploads/2020/10/GettyImages-1182408018-1.jpg')

// 3. Add style.width and style.height to the image node
articleImage.style.width = '80%';
articleImage.style.display = 'block';       // Image is an inline-element
articleImage.style.margin = '0 auto';        // display: block is needed for this to work


// 4. Append the image before the `articleBrief`
// parentNode.insertBefore(newNode, referenceNode)
body.insertBefore( articleImage, articleBrief );


// body.appendChild( articleImage);


// EVENTS

// addEventListener()  - it adds a function that should run on specific event


const button = document.querySelector('#add-item-button');


function changeBackgroundToRed () {
  button.style.backgroundColor = 'red';
  button.style.fontSize = "40px";
}

function changeBackgroundToWhite () {
  button.style.backgroundColor = 'white';
  button.style.fontSize = "20px";
}

function removeMouseEvents () {
  button.style.backgroundColor = 'aquamarine';
  button.removeEventListener('mouseover', changeBackgroundToRed);
  button.removeEventListener('mouseout', changeBackgroundToWhite)
}

button.addEventListener('mouseover', changeBackgroundToRed);

button.addEventListener('mouseout', changeBackgroundToWhite);

button.addEventListener('click',  removeMouseEvents);


const dropdownSection = document.querySelector("#dropdown-section");
const toggleButton = document.querySelector("#hide-div");


//  .classList.add()    - add the new class to existing class names
//  .classList.remove() - remove the class name if it exists 
//  .classList.toggle() - will remove or add class name depending if it exists or not



toggleButton.addEventListener('click', function () {
  dropdownSection.classList.toggle('closed'); // Removing or adding class `closed`

  // Chaning the text that is shown in the button
  if ( toggleButton.textContent === 'Hide') {
    toggleButton.textContent = 'Show';
  }
  else if (toggleButton.textContent === 'Show') {
    toggleButton.textContent = 'Hide';
  }


  // const updatedButtonText = toggleButton.textContent === 'Hide' ? "Show" : "Hide";
  // toggleButton.textContent = updatedButtonText;
})