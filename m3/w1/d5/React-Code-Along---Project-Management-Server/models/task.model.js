//      models/task.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATE SCHEMA
const taskSchema = new Schema({
  title: String,
  description: String,
  project: { type: Schema.Types.ObjectId, ref: 'Project' }
})

// CREATE MODEL
//                           tasks
const Task = mongoose.model('Task', taskSchema);

// EXPORT
module.exports = Task;