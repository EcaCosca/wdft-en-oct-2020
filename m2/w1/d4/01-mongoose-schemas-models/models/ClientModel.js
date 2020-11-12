const mongoose = require('mongoose');
const Schema = mongoose.Schema;   // Schema constructor

const paymentSchema = require('./../schemas/paymentSchema');


// CREATE THE SCHEMA - The structure rules for each document
const clientSchema = new Schema({
  name: { type: String, required: true, unique: true },

  age: { type: Number, required: true, min: 18, max: 99 },

  accountActive: {  type: Boolean, default: true },

  balance: { type: Number, required: true },

  payments: { type: [ paymentSchema ],  required: true }
})


// CREATE THE MODEL
//                            `clients`
const Client = mongoose.model('Client', clientSchema);


// EXPORT THE MODEL
module.exports = Client;
