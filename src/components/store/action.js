import { ADD_TODO_LIST, DELETE_TODO_LIST, EDIT_TODO_LIST, SET_VALUE_INPUT } from './constans'
export const setValueInput = payload => {
    return {
        type: SET_VALUE_INPUT,
        payload
    }
}
export const addTodoList = payload => {
    return {
        type: ADD_TODO_LIST,
        payload
    }
}
export const deleteTodoList = index => {
    return {
        type: DELETE_TODO_LIST,
        index
    }
}
export const editTodoList = (payload, index) => {
    return {
        type: EDIT_TODO_LIST,
        payload,
        index
    }
}