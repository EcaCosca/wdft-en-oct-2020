const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  text: { type: String, maxlength: 280 },
  usersWhoLiked: [ { type: mongoose.SchemaTypes.ObjectId, ref: 'User' } ],
  comments: [ 
    {
      commentText: { type: String, maxlength: 100 },
      user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' }
    }
  ],
  creator: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' }
});


const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;

