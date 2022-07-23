import { useContext, useRef } from 'react'
import { setValueInput, addTodoList, deleteTodoList, editTodoList } from './components/store/action';
import { faPen, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Context from './components/store/Context';
import './index.css'
function App() {
  // Lấy dữ liệu từ component cha truyền xuống
  const [state, dispatch] = useContext(Context)
  const { valueInput, todoList } = state
  const inputRef = useRef()
  const editRef = useRef(-1)

  const handleAdd = () => {
    dispatch(addTodoList(valueInput))
    dispatch(setValueInput(''))
    inputRef.current.focus()
    editRef.current = -1
  }
  const handleDelete = index => {
    dispatch(deleteTodoList(index))
    editRef.current = -1
  }

  const handleEdit = (todo, index) => {
    editRef.current = index
    dispatch(setValueInput(todo))
    inputRef.current.focus()

  }
  const handleUpdate = () => {
    dispatch(editTodoList(valueInput, editRef.current))
    dispatch(setValueInput(''))
    inputRef.current.focus()
    editRef.current = -1
  }
  return (
    <div className='todo-app'>
      <div className="todo-form">
        <input
          ref={inputRef}
          placeholder='Enter todo...'
          value={valueInput}
          onChange={e => dispatch(setValueInput(e.target.value))}
        />
        {editRef.current !== -1 ? <button onClick={handleUpdate}>Update</button> : <button onClick={handleAdd}>Add</button>}
      </div>
      <ul className='todo-list'>
        {todoList.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <div>
              <FontAwesomeIcon onClick={() => handleEdit(todo, index)} icon={faPen} />
              <FontAwesomeIcon onClick={() => handleDelete(index)} icon={faX} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
