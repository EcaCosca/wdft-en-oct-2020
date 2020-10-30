

fetch(" https://api.spacexdata.com/v3/launches")
  .then( (response) => {
    // response data is initially encoded and we have to convert it to
    // JS object
    const pr = response.json();   // response.json() creates a promise
    return pr;
  } )
  .then( (data) => {

    data.forEach( (obj) => {
      const newImg = document.createElement('img');
      newImg.setAttribute('src', obj.links.mission_patch);
      newImg.style.width = "200px";

      document.body.appendChild(newImg)
    })

  })
  .catch( (error) => {

    document.body.innerHTML = `
      <h1>ELON IS SORRY!</h1>
      <img src="https://i.blogs.es/b7be04/elon-musk/450_1000.jpg"  style="width: 400px"/>
    `;
    
  } )
