const TaskModel = require('../models/taskModel')

module.exports.getTasks = async (req, res) => {
  const task = await TaskModel.find()
  res.send(task)
}
module.exports.saveTask = (req, res) => {
  const { task } = req.body

  TaskModel.create({ task })
    .then((data) => {
      console.log('Saved Successfully...')
      res.status(201).send(data)
    })
    .catch((err) => {
      console.log(err)
      res.send({ error: err, msg: 'Someting went wrong!' })
    })
}
module.exports.updateTask = (req, res) => {
  const { id } = req.params
  const { task } = req.body

  TaskModel.findByIdAndUpdate(id, { task })
    .then(() => res.send('Updated successfully'))
    .catch((err) => {
      console.log(err)
      res.send({ error: err, msg: 'Someting went wrong!' })
    })
}
module.exports.deleteTask = (req, res) => {
  const { id } = req.params

  TaskModel.findByIdAndDelete(id)
    .then(() => res.send('Deleted successfully'))
    .catch((err) => {
      console.log(err)
      res.send({ error: err, msg: 'Someting went wrong!' })
    })
}
