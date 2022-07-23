import { SET_INPUT, ADD_TODO, REMOVE_TODO } from './constants'
// Khởi tạo giá trị gồm 2 state, input: nhập dữ liệu, todos: render dữ liệu
export const initState = {
    input: '',
    todos: []
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

export default reducer