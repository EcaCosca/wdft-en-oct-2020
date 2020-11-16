const express = require("express");
const erv = require("express-react-views");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

// SET THE VIEW ENGINE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", erv.createEngine());

function checkPasswordLength(req, res, next) {
  console.log("DO SOMETHING");
  next();
}
// GET  /search
// MIDDLEWARE:
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(checkPasswordLength);

//
//
// ROUTES:
//  localhost:3000/users/anna/books/f2e34a012f398
app.get("/users/:username/books/:bookId", (req, res, next) => {
  console.log("req.params", req.params);
  res.send();
});

// Render the Search form
app.get("/", (req, res, next) => {
  res.render("Search");
});

// Receive the data from "GET form"
app.get("/search", (req, res, next) => {
  console.log("req.query", req.query);

  res.send();
});

// Render the Signup form
app.get("/signup", (req, res, next) => {
  res.render("Signup");
});

// Receive the data from "POST form"
// Data of POST requests is available on req.body
app.post("/signup-form-data", (req, res, next) => {
  console.log("req.body", req.body);

  res.send();
});

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
