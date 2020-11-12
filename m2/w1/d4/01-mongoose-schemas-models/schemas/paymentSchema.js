const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATE THE SMALLER SCHEMA (for one field)
const paymentSchema = new Schema({ 
  date: { type: Date, default: Date.now },
  amount: { type: Number, default: 0 }
})


// EXPORT
module.exports = paymentSchema;