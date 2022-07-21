
import React, { useEffect, useLayoutEffect, useState } from 'react'
/**
    * useEffect
        1. Cập nhật state
        2. Cập nhật DOM
        3. Render lại UI
        4. Gọi cleanup nếu desp thay đổi
        5 .Gọi useEffect callback
    * useLayoutEffect
        1. Cập nhật state
        2. Cập nhật DOM
        3. Gọi cleanup nếu desp thay đổi sync (đồng bộ)
        4. Gọi useLayoutEffect callback sync (đồng bộ)
        5. Render UI
 */
function UseLayoutEffect() {
    const [count, setCount] = useState(0)

    // Nó sẽ bị nhấp nháy vì setCount(0) được gọi sau khi re-render, sau khi re-render lúc này count = 4 > 3 
    // Nên nó re-render rất nhật lên 4 rồi về 0
    // useEffect(() => {
    //     if (count > 3) {
    //         setCount(0)
    //     }
    // }, [count])

    // Khắc phục dùng useLayoutEffect nó sẽ đưa phần re - render về cuối cùng
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    }, [count])
    const handleRun = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Click me</button>
        </div>
    )
}

export default UseLayoutEffect