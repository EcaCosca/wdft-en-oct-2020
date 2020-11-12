const express = require("express");
const mongoose = require("mongoose");
const Candidate = require("./models/Candidate");

const app = express();

const DB_NAME = "elections-2020";

// CONNECT TO MONGO
mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Connected to the DB ${DB_NAME}`));

//
// ROUTES
app.get("/trump", (req, res, next) => {
  console.log("Someone just voted");

  Candidate.findOneAndUpdate({ name: "Donald Trump" }, { $inc: { votes: 20 } })
    .then((result) => {
      res.send("<h1>Thanks for Voting Donny!</h1>");
    })
    .catch((err) => console.log(err));
});

app.get("/biden", (req, res, next) => {
  console.log("Someone just voted");

  Candidate.findOneAndUpdate({ name: "Joseph Biden" }, { $inc: { votes: 1 } })
    .then((result) => {
      res.send("<h1>Thanks for Voting Biden!</h1>");
    })
    .catch((err) => console.log(err));
});

// START THE SERVER
app.listen(3000, () => {
  console.log("Voting server is running !!!!!");
});
