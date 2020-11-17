// models/Book.model.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Author = require('./Author.model');

// CREATE	THE SCHEMA
const bookSchema = new Schema(
  {
    title: String,
    description: String,
    rating: Number,
    authors: [  
      { type: Schema.Types.ObjectId , ref: "Author" }
    ],
  },
  {
    timestamps: {
      // https://mongoosejs.com/docs/guide.html#timestamps
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

// CREATE THE MODEL
const Book = mongoose.model("Book", bookSchema);

// EXPORT THE MODEL
module.exports = Book;