const express = require("express");
const erv = require("express-react-views");
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// SET THE VIEW ENGINE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", erv.createEngine());

// MIDDLEWARE
// SET THE STATIC FOLDER FOR PUBLIC FILES
app.use(express.static(__dirname + "/public"));

// PARSE FORM DATA:
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// ROUTES
// Example: route with a single param ( dynamic part of the URL/route)
app.get("/users/:username", (req, res, next) => {
  console.log("req.params", req.params);

  res.send();
});



app.get("/users/:userId/booking/:bookingId", (req, res, next) => {
  console.log(" req.params", req.params);

  // Get the id values from the URL
  const userId = req.params.userId;
  const bookingId = req.params.bookingId;


  res.send();
});



// REQUEST QUERY STRING - Used to pass additional data through the URL string
// https://expressjs.com/en/api.html#req.query
// localhost:3000/search?city=Barcelona&bootcamp=webdev
// app.get('/search', (req, res, next) => {
//   console.log('req.query', req.query);

//   res.send();
// })


app.get('/test', (req, res, next) => {
  console.log('req.path', req.path);
  console.log('req.query', req.query);
  console.log('req.params', req.params);
  console.log('req.method', req.method);
  console.log('req.headers', req.headers);

  res.send();
})


// Render the page with the Search form
app.get('/search', (req, res, next) => {
  res.render('Search')
})


// Route that is receiving the data coming from the "GET form"
app.get('/search-form-data', (req, res, next) => {
  // Form data sent by "GET" form is being passed throught the URL string 
  // becomes available in the req.query object

  console.log('req.query', req.query)
  res.send();
})




// Render the Signup form
app.get('/signup', (req, res, next) => {
  res.render('Signup')
})


// Get the data coming from the signup "POST form"
app.post('/signup-form-data', (req, res, next) => {
  // POST request data is sent through the HTTP message body
  // HTTP message body = req.body
  console.log('req.body', req.body);

  res.send();
})


// START THE SERVER
app.listen(PORT, () => {
  console.log("Server is running at port " + PORT);
});
