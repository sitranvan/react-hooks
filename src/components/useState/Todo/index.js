import React from 'react'
import { useState } from 'react'
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Todo.css'
const colors = ['#3EC70B', '#8879B0', '#B09B71', '#F7EC09', '#898AA6', '#F637EC']

const randomColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function Todo() {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState(() => {
        const getTodos = JSON.parse(localStorage.getItem('todos')) ?? []
        return getTodos
    })
    const handleSubmit = e => {
        e.preventDefault()
        if (value === '') return
        const saveTodos =
            [
                ...todos,
                {
                    id: Math.floor(Math.random() * 6324),
                    desc: value,
                    color: randomColor()
                }]
        localStorage.setItem('todos', JSON.stringify(saveTodos))
        setTodos(saveTodos)
        setValue('')
    }
    const handleRemove = id => {
        const findIndex = todos.findIndex(todo => todo.id === id)
        const newTodos = [...todos]
        newTodos.splice(findIndex, 1)
        localStorage.setItem('todos', JSON.stringify(newTodos))
        setTodos(newTodos)
    }
    return (
        <form className='todo' onSubmit={handleSubmit}>
            <h1>Todo App</h1>
            <div className='form'>
                <input
                    placeholder='Add your new todo...'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button className='add'>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <ul className='todo-list'>
                {todos.map(todo => (
                    <li key={todo.id} className='todo-item' style={{ backgroundColor: todo.color }}>
                        <span>{todo.desc}</span>
                        <div className='remove' onClick={() => handleRemove(todo.id)}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                    </li>
                ))}
            </ul>
        </form >
    )
}
export default Todo