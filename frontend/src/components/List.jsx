import axios from 'axios'
import { BiEditAlt } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import { baseURl } from '../utils/constant'

const List = ({ id, task, setUpdateUI, updateMode }) => {
  const removeTask = () => {
    axios.delete(`${baseURl}/delete/${id}`).then((res) => {
      console.log(res)
      setUpdateUI((prevState) => !prevState)
    })
  }
  return (
    <li className="grid border-2 p-2 m-2">
      {task}

      <div className="flex m-2 cursor-pointer">
        <BiEditAlt
          className="text-green-700 m-2"
          onClick={() => updateMode(id, task)}
        />
        <BsTrash className="text-red-600 m-2" onClick={removeTask} />
      </div>
    </li>
  )
}
export default List
