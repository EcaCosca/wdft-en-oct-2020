"use strict";

class Signup {
  constructor() {
    // store all of the input elements
    this.nameInput = document.querySelector("#name");
    this.pokemonInput = document.querySelector("#pokemon");
    this.typeInput = document.querySelector("#type");
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeat-password");

    this.buttonInput = document.querySelector("#signup-button");
    this.errorsWrapper = document.querySelector(".message-container");
  }

  // handle the email input
  handleEmailInput = (event) => {
    const emailInput = event.target;
    const email = emailInput.value;

    // console.log("email", email);
  };

  // handle the password input
  handlePasswordInput = (event) => {
    const passwordInput = event.target;
    const password = passwordInput.value;

    // console.log("password", password);
  };

  // handle the repeat-password input
  // password confirmation
  handleRepeatPasswordInput = (event) => {
    const repeatPasswordInput = event.target;
    const repeatPassword = repeatPasswordInput.value;

    // console.log("repeatPassword", repeatPassword);
  };

  // handle the sending of the data ( on submit )
  saveData = (event) => {
    // Prevent the default behaviour of the form submit button
    // which reloads the page

    event.preventDefault();

    // get the value from all of the inputs
    const name = this.nameInput.value;
    const pokemon = this.pokemonInput.value;
    const type = this.typeInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    // create the new user
    const newUser = new User(name, pokemon, type, email, password);

    // Save the user in the database
    db.saveNewUser(newUser);

    // empty the form
    this.nameInput.value = "";
    this.pokemonInput.value = "";
    this.typeInput.value = "";
    this.emailInput.value = "";
    this.passwordInput.value = "";
  };

  addListeners = () => {
    this.emailInput.addEventListener("input", this.handleEmailInput);
    this.passwordInput.addEventListener("input", this.handlePasswordInput);
    this.repeatPasswordInput.addEventListener(
      "input",
      this.handleRepeatPasswordInput
    );

    this.buttonInput.addEventListener("click", this.saveData);
  };
}

// create an instance of the Signup (object)
const signup = new Signup();

// console.log("signup", signup);

// Add event listeners once the page and all the resources are loaded
window.addEventListener("load", signup.addListeners);
