const express = require('express');
const books = require('../bin/books-mock-data');
const Author = require('../models/Author.model');
const booksRouter = express.Router();
const Book = require('./../models/Book.model');

// GET     /books
booksRouter.get('/', (req, res, next) => {
  Book.find()
    .then( (allBooksFromDB) => {
      
      const props = { books: allBooksFromDB };

      res.render('Books', props);
    })
    .catch( (err) => console.log(err));
})

// GET     /books/add  - Render the AddBook form
booksRouter.get('/add', ( req, res, next) => {
  res.render('AddBook');
});



// POST     /books/add  -  Data coming from the AddBook form
booksRouter.post('/add', (req, res, next) => {
  
  const { title, author, description, rating } = req.body;
  // Same as:
  // const title = req.body.title;
  // const author = req.body.author;
  // const description = req.body.description;
  // const rating = req.body.rating;


  Book.create( { title, author, description, rating }  )
    .then( (book) => {
      res.redirect('/books');
    })
    .catch( (err) => console.log(err));

})



// GET     /books/edit - Render the EditBook form
booksRouter.get('/edit', (req, res, next) => {
  // req.query   {  bookid:  "5fb38aa9f585d69d4886d81e"  }
  // const bookid = req.query.bookid;

  const { bookid } = req.query;

  Book.findById( bookid )
    .then( (oneBook) => {
      const props = { oneBook: oneBook };

      res.render('EditBook', props)
    })
    .catch( (err) => console.log(err));

})


// POST      /books/edit
booksRouter.post('/edit', (req, res, next) => {
  const { bookid } = req.query;
  const { title, author, description, rating } = req.body;

  Book.findByIdAndUpdate( bookid, { title, author, description, rating }, { new: true } )
    .then( (updatedBook) => {
      res.redirect('/books')
    })
    .catch((err) => console.log(err));
})



// GET     /books/details/:bookId
booksRouter.get('/details/:bookId', (req, res, next) => {
  const { bookId } = req.params;
  // const bookId = req.params.bookId;

  Book.findById(bookId)
    .populate('authors')
    .then( (oneBook) => {

      const props = { oneBook: oneBook };

      console.log('oneBook', oneBook)

      res.render('BookDetails', props );
    })
    .catch( (err) => console.log(err));
})

module.exports = booksRouter;