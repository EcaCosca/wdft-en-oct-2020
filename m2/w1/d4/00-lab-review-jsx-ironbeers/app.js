const express = require('express');
const erv = require('express-react-views');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

// VIEW ENGINE SETUP
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine());

// MIDDLEWARE
app.use(express.static(__dirname + '/public'));

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('Home');
});

app.get('/beers', (req, res) => {
  punkAPI
    .getBeers()
    .then(beersFromApi => {
      console.log('All the Beers from the API: ', beersFromApi);

      // Prepare the object to be passed/injected to `Beers` view
      const data = { beersFromApi: beersFromApi };

      // Render the `Beers` view and pass/inject to it the object containing the `beersFromApi`
      res.render('Beers', data);
    })
    .catch(error => console.log(error));
});




app.get('/random-beer', (req, res) => {
  punkAPI
    .getRandom()
    .then((beersFromApi) => {
      const oneBeer = beersFromApi[0];

      // Prepare object with `props` that you want to inject to the view
      const props = {
        oneBeer: oneBeer
      };

      res.render('RandomBeer', props);
    })
    .catch(error => console.log(error));
});



// Iteration 6 - req.params example
app.get('/beers/:beerId' , (req, res, next) =>{

  const beerId = req.params.beerId;

  // Call punkAPI and get one beer by id
  punkAPI
    .getBeer( beerId )
    .then( (responseFromApi) => {
      // console.log('responseFromApi', responseFromApi);
      const oneBeer = responseFromApi[0];

      const props = {
        oneBeer: oneBeer
      }

      res.render('RandomBeer', props)
    })
})






app.listen(3000, () => {
  console.log('🏃‍ on port 3000');
});
