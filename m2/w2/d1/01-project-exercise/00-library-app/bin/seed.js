const mongoose = require('mongoose');
const Book = require('./../models/Book.model');
const Author = require('./../models/Author.model');

const books = require('./books-mock-data');
const authors = require('./authors-mock-data');

const DB_NAME = 'library';


// SEED SEQUENCE:

    // CONNECT TO MONGO DB (MONGOOSE)
mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then( (x) => {
    // AFTER CONNECTION , DROP THE EXISTING DATABASE
    console.log("Connected to DB" + DB_NAME);

    const pr = x.connection.dropDatabase();

    return pr;
  })
  .then( () => {
    // CREATE THE AUTHORS

    const pr = Author.create( authors );
    return pr;
  })
  .then( (createdAuthors) => {
    console.log(`Created ${createdAuthors.length} authors`);


    // UPDATE THE BOOKS - SET THE `authors` field and add the id of the author
    const updatedBooks = books.map( ( bookObj, i) => {
      const authorObj = createdAuthors[i];
      bookObj.authors = [ authorObj._id ];

      return bookObj;
    })

    console.log('updatedBooks', updatedBooks)

    // CREATE THE BOOKS
    const pr = Book.create( updatedBooks);

    return pr;
  })
  .then( (createdBooks) => {
    console.log(`Created ${createdBooks.length} books`);

    // CLOSE THE DB CONNECTION
    mongoose.connection.close();
  })



