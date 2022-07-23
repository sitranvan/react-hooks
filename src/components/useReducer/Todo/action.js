import { SET_INPUT, ADD_TODO, REMOVE_TODO } from './constants'
// Vì cần truyền dữ liệu ngoài vào nên cần viết hàm nhận dữ liêu
export const setInput = data => {
    return {
        type: SET_INPUT,
        data
    }
}
export const addTodo = data => {
    return {
        type: ADD_TODO,
        data
    }
}
export const removeTodo = index => {
    return {
        type: REMOVE_TODO,
        index
    }
}
