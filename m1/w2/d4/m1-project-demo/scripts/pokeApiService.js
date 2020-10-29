"use strict";

const pokemonList = document.querySelector('.pokemon-list');



for (let index = 1; index <= 20; index++) {
  // Make a request to the server (API) using the URL
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
  .then( (response) => {
    console.log('response', response);

    // converts the response.body to a JS object
    return response.json();  
  })
  .then((data) => {
    console.log('data', data)


    const article = document.createElement('article');
    article.innerHTML = `
      <img src="${data.sprites.front_default}" />
      <h3>${data.name}</h3>
    `

    pokemonList.appendChild(article);

  })
  
}


