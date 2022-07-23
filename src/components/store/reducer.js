import { ADD_TODO_LIST, DELETE_TODO_LIST, EDIT_TODO_LIST, SET_VALUE_INPUT } from "./constans";

export const initState = {
    valueInput: '',
    todoList: []
}
function reducer(state, action) {
    switch (action.type) {
        case SET_VALUE_INPUT:
            return {
                ...state,
                valueInput: action.payload
            }
        case ADD_TODO_LIST:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case DELETE_TODO_LIST:
            // Cần clone ra để thao tác tránh thao tác lên mảng cũ 
            const newTodoDelete = [...state.todoList]
            newTodoDelete.splice(action.index, 1)
            return {
                ...state,
                todoList: newTodoDelete
            }
        case EDIT_TODO_LIST:
            const newTodoEdit = [...state.todoList]
            newTodoEdit[action.index] = action.payload
            return {
                ...state,
                todoList: newTodoEdit
            }
        default:
            throw new Error('Invalid action')
    }
}

export default reducer