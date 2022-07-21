import React, { useState } from 'react'
import Content from './Content'

/**
    * memo -> Higher Order Component (HOC)
        1. Giúp ghi nhớ lại 1 props của component để quyết định có render không để tối ưu hiệu năng
        2. Tóm lại memo giúp tránh việc render component 1 cách không cần thiết
        3. Nó không phải là 1 hooks
        4. Tình huống dùng memo => có nhiều state ,có state render lại mà component con không cần dùng tới state đó
        nên dùng memo để tránh trường hợp re-render không cần thiết
 */
function Memory() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    const handleClick2 = () => {
        setCount2(count2 + 1)
    }
    return (
        <div>
            {
                /* Count đang được sử dụng ở component cha không được sử dụng ở componet con(Content)
                Nhưng vì Componet cha bao bên ngoài nên mỗi khi render componet cha thì conponet con cũng bị re-render  
                */
            }
            <h1>{count}</h1>
            <h2>{count2}</h2>
            <Content count={count} />
            <button onClick={handleClick}>Click Me</button>
            <button onClick={handleClick2}>Click Me2</button>
        </div>
    )
}

export default Memory