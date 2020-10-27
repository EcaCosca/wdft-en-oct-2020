'use strict'


const todoInput = document.querySelector('#todo-input');
const button = document.querySelector('#add-todo-button');

const list = document.querySelector('#item-list');


button.addEventListener('click', function( event ) {
    // Form button event should be prevented, to stop reloading the page (and reloading the entire app)
    // Stop the default page reload on form button submit
    event.preventDefault();


  // Getting the value written in the input    `el.value`
  const todoText = todoInput.value;

  // Creating the new element and adding text (from input) to it
  const newLi = document.createElement('li');
  newLi.textContent = todoText;

  // Adding the new li element to the list
  list.appendChild(newLi);
  
  // Clear the input field at the end
  todoInput.value = "";
});