// REQUIRE PACKAGES
const express = require("express");
const erv = require('express-react-views');

// CREATE THE SERVER
const app = express();


// SET THE VIEW ENGINE
// Set the folder containing the view/templates `.jsx` files
app.set('views', __dirname + '/views');
// Set `express-react-views` as the view engine use for rendering HTML
app.set('view engine', 'jsx');
app.engine('jsx',  erv.createEngine() );


// MIDDLEWARE
app.use( express.static('public') );


// ROUTES
app.get('/home', (req, res, next) => {
  res.render('Home');
})


app.get('/about', (req, res, next) => {
  res.render('About');
})

// Example: Injecting data to a smaller component
app.get('/students', (req, res, next) => {
  res.render('StudentsPanel');
})


// Example: Exercise
app.get('/dashboard', (req, res, next) => {
  res.render('Dashboard');
})


// Example: Injecting data to the Template
app.get('/welcome', (req, res, next) => {
  const data = {
    name: 'Bob The Ironhacker',
    bootcamp: 'WebDev Ironhack Barcelona'
  }

  res.render('Welcome', data);
})


// Example: conditionals in JSX
app.get('/conditional', (req, res, next) => {
  res.render('Conditionals')
})

// Example: creating lists out of arrays with `map`
app.get('/lists', (req,res, next) => {
  res.render('List');
})



// START THE SERVER
app.listen( 3000, () => {
  console.log("Server is listening on the port 3000");
});
