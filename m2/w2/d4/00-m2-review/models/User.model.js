// Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATE SCHEMA
const userSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: String },
  image: { type: String },
  layoutColor: { type: String, enum: [ 'dark', 'light', 'system' ] },
  tweets: [ 
    {type: mongoose.SchemaTypes.ObjectId, ref: 'Tweet'}
  ],
  favoriteTwees: [
    {type: mongoose.SchemaTypes.ObjectId, ref: 'Tweet'}
  ]
})


// CREATE MODEL
const User = mongoose.model('User', userSchema);

// EXPORT
module.exports = User;

