const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// CREATE THE SCHEMA
const authorSchema = new Schema({
  name: String,
  lastName: String,
  nationality: String,
  birthday: Date,
  pictureUrl: String,
});

// CREATE THE MODEL
const Author = mongoose.model("Author", authorSchema);

// EXPORT THE MODEL
module.exports = Author;