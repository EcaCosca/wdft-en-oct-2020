const express = require("express");
const authRouter = express.Router();
const User = require('./../models/User.model');

const bcrypt = require('bcrypt');
const saltRounds = 10;


// GET      /auth/signup  - Render the Signup form
authRouter.get('/signup', (req, res, next) => {
  res.render('Signup');
});

// GET     /auth/login  - Render the Login form
authRouter.get('/login', (req, res, next) => {
  res.render('Login');
});

// POST      /auth/signup  - Receiving data from the Signup form
authRouter.post('/signup', (req, res, next) => {
  // Get username and password from req.body
  const { username, password, image } = req.body;

  // Validate that username and password are not empty strings
  if ( username === '' || password === '') {
    const props = { errorMessage: 'Provide username and password!'};
    res.render('Singup', props);
    return;
  }

  // Check if username is unique
  User.findOne( { username } )
    .then( (user) => {
      if (user) {
        // If username is taken:
        const props = { errorMessage: 'Username is taken. Choose another one.'};
        res.render('Singup', props);
        return;
      }
      // If username is available:
        // Hash the password
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPassword = bcrypt.hashSync(password, salt);
        
        // Create new user and redirect
        User.create( {
          username, 
          password: hashPassword, 
          layout: "light", 
          tweets: [],
          favoriteTweets: []  
        } )
        .then((createdUser) => {
          console.log('createdUser', createdUser)
          // Create session (this logs in the user and creates the cookie)
          createdUser.password = "***";
          req.session.currentUser = createdUser;

          res.redirect('/');
        })




    })

})


// POST /auth/login  - Receiving data from the Login form


// GET /auth/logout  - Logout the user and destroy the session


module.exports = authRouter;
