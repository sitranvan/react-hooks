import React, { useReducer, useState } from 'react'
// - useReducer: được sử dụng trong trường hợp component có state phức tạp và có nhiều action type làm thay đổi state đó.
// - Tất cả trường hợp dùng state thì điều có thể thay thế bằng useReducer
// - Trong tất cả trường hợp thường dùng state với kiểu dữ liệu đơn giản số, chuỗi, luận lí, array, object 1 cấp
// - Phù hợp state phức tạp kiểu dữ liệu array object nhiều tầng nhiều lớp... nếu dùng useState update phức tạp
// - Hoặc trường hợp nhiều state xét nhiều state cùng lúc , hoặc các state phụ thuộc dữ liệu lẫn nhau

/**
    * useState
        1. Init state: 0
        2. Actions: Up(state + 1), Down(state - 1)

    * useReducer
        1. Init state: 0
        2. Actions: Up(state + 1), Down(state - 1)
        3. Reducer
        4. Dispatch
 */
// 1. Init state: 0
const initState = 0

// 2. Actions: Up(state + 1), Down(state - 1)
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// 3. Reducer
const reducer = (state, action) => {
    console.log('Lần đầu ứng dụng chạy reducer chưa được gọi...')
    // Mỗi lần reducer được gọi ta dựa vào state hiện tại và action để quyết định trả ra state mới 
    switch (action) {
        case UP_ACTION:
            return state + 1 // Luôn return theo kiểu dữ liệu initState
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}


function UseReducer() {
    // Nhận vào 3 đối số nhưng thực tế chỉ dùng 2
    const [count, dispatch] = useReducer(reducer, initState)
    /**
     * Nguyên lí hoạt đôngk
     * - Khi component lần đầu được chạy => sẽ chạy useReducer nhận reducer nhưng chưa gọi, nhận initState lúc này count = 0
     * - dispatch dùng để kích hoạt action 
     * - Khi gọi dispatch cần truyền vào 1 action => useReducer xử lí lấy action sau đó gọi hàm reducer lấy state hiện tại (count)
     *  trả ra đối số state của reducer và lấy luôn action truyền vào đối số action của hàm reducer để xử lí trả ra state mới
     * - State mới sẽ được update trả về component => count sẽ nhận và render
     */
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        </div>
    )
}

export default UseReducer