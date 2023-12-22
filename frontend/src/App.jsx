import { useEffect, useState } from 'react'
import List from './components/List'
import axios from 'axios'
import { baseURl } from './utils/constant'

const App = () => {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])
  const [updateUI, setUpdateUI] = useState(false)
  const [updateId, setUpdateId] = useState(null)

  useEffect(() => {
    axios.get(`${baseURl}/get`).then((res) => {
      console.log(res.data)
      setTasks(res.data)
    })
  }, [updateUI])

  const addTask = () => {
    axios.post(`${baseURl}/save`, { task: input }).then((res) => {
      console.log(res.data)
      setInput('')
      setUpdateUI((prevState) => !prevState)
    })
  }

  const updateMode = (id, text) => {
    console.log(text)
    setInput(text)
    setUpdateId(id)
  }

  const updateTask = () => {
    axios.put(`${baseURl}/update/${updateId}`, { task: input }).then((res) => {
      console.log(res.data)

      setUpdateUI((prevState) => !prevState)
      setUpdateId(null)
      setInput('')
    })
  }
  return (
    <main>
      <h1 className="text-green-500">CRUD Operations</h1>

      <div>
        <input
          className="border-2"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className="border-2"
          type="submit"
          onClick={updateId ? updateTask : addTask}
        >
          {updateId ? 'Update task' : 'Add task'}
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <List
            key={task._id}
            id={task._id}
            task={task.task}
            setUpdateUI={setUpdateUI}
            updateMode={updateMode}
          />
        ))}
      </ul>
    </main>
  )
}
export default App
