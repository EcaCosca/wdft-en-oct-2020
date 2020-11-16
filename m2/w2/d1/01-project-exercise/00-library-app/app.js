require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const mongoose = require("mongoose");
const erv = require("express-react-views");

const booksRouter = require('./routes/booksRouter');

const DB_NAME = "library";

const app = express();

// DB CONNECTION
mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then( () => {
    console.log("Connected to DB" + DB_NAME);
  })
  .catch((err) => console.log("Error connecting to DB", err));



// SET THE VIEW ENGINE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine());

// GET /books

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


// ROUTES
app.use('/books', booksRouter);




app.get('/', (req, res, next) => {
  res.render('Home');
})



module.exports = app;
