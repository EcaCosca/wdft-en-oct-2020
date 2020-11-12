const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
  name: String,
  nickname: String,
  catchphrase: String,
  votes: { type: Number, min: 0, default: 0 },
});

//                               `candidates`
const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
