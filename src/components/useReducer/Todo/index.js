import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useReducer } from 'react'
import './Todo.css'

// Khởi tạo giá trị gồm 2 state, input: nhập dữ liệu, todos: render dữ liệu
const initState = {
    input: '',
    todos: []
}

// Action
const SET_INPUT = 'set_input'
const ADD_TODO = 'add_todo'
const REMOVE_TODO = 'remove_todo'

// Vì cần truyền dữ liệu ngoài vào nên cần viết hàm nhận dữ liêu
const setInput = data => {
    return {
        type: SET_INPUT,
        data
    }
}
const addTodo = data => {
    return {
        type: ADD_TODO,
        data
    }
}
const removeTodo = index => {
    return {
        type: REMOVE_TODO,
        index
    }
}

// Reducer
const reducer = (state, action) => {

    switch (action.type) {
        case SET_INPUT:
            return {
                ...state, // state.input => vì ở dưới có dùng destructuring lấy ra
                input: action.data
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.data] // Bảo toàn lại tất cả giá trị trong mảng todos và add giá trị input mới 
                // thông qua action.data
            }
        case REMOVE_TODO:
            const newTodos = [...state.todos] // vì state là object nên cần phải lấy ra todos trong đó
            newTodos.splice(action.index, 1) // lấy ra index đã truyền từ bên ngoài
            return {
                ...state,
                todos: newTodos
            }
        default:
            throw new Error('Invalid action')
    }

}
function Todo() {
    // State chứa input và todos
    const [state, dispatch] = useReducer(reducer, initState)
    const { input, todos } = state

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }
    const handleRemove = index => {
        dispatch(removeTodo(index))
    }
    return (
        <form className="todo" style={{ marginTop: 50 }} onSubmit={handleSubmit}>
            <h1>Todo App</h1>
            <div className='form'>
                <input
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