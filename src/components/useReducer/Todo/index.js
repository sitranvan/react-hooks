import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import { setInput, addTodo, removeTodo } from './action'
import './Todo.css'

function Todo() {
    // State chứa input và todos
    const [state, dispatch] = useReducer(reducer, initState)
    const inputRef = useRef()
    const { input, todos } = state

    const handleSubmit = (e) => {
        e.preventDefault()
        input !== '' && dispatch(addTodo(input))
        dispatch(setInput(''))
        inputRef.current.focus()
    }
    const handleRemove = index => {
        dispatch(removeTodo(index))
    }
    return (
        <form className="todo" style={{ marginTop: 50 }} onSubmit={handleSubmit}>
            <h1>Todo App</h1>
            <div className='form'>
                <input
                    ref={inputRef}
                    placeholder='Add your new todo...'
                    value={input}
                    onChange={e => dispatch(setInput(e.target.value))}
                />
                <button className='add'>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <ul className='todo-list'>
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        <span>{todo}</span>
                        <div className='remove' onClick={() => handleRemove(index)}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                    </li>
                ))}
            </ul>
        </form>
    )
}

export default Todo