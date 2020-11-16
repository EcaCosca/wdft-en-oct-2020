const express = require('express');
const booksRouter = express.Router();

// GET     /books
booksRouter.get('/', (req, res, next) => {
  res.render('Books');
})


module.exports = booksRouter;