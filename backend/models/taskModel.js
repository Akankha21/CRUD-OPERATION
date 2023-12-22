const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    requied: true,
  },
})

module.exports = mongoose.model('Task', taskSchema)
