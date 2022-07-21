// useRef lưu các giá trị qua một tham chiếu bên ngoài function component

import React, { useEffect, useRef, useState } from 'react'

// Nếu đưa ra bên ngoài vẫn sẽ hoạt động bình thường, nhưng code theo react chúng ta cần trình bày mỗi file là 1 component 
// Nếu phải định nghĩa bên trong component, không đưa ra bên ngoài,nếu 1 số trường hợp cần dùng const, hoặc function thì viết file
// Ra bên ngoài và import
// let timeID
function UseRef() {

    const [count, setCount] = useState(60)
    // Vì mỗi lần state thay đổi sẽ re-render gọi component mỗi lần gọi hàm nó sẽ tạo ra 1 phạm vi hoàn toàn mới 
    // không liên quan đến phạm vi trước đó, lúc đó biến timerID mới là undefined
    // let timerID

    // useRef(init): Nó chỉ sử dụng giá trị khởi tạo trong lần đầu tiên component được mounted, khi componet được re-render 
    // sau các thao tác xử lí logic sẽ không dùng lại giá trị khởi tạo nữa mà mang giá trị mới
    const timerID = useRef()

    // Lấy giá trị trước đó của count
    const prevCount = useRef()
    useEffect(() => {
        prevCount.current = count
    }, [count])

    const handleStart = () => {
        timerID.current = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000);
    }

    // Cần phải lấy được timeID để clean 
    const handleStop = () => {
        clearInterval(timerID.current)
    }

    // Lấy giá trị trước đó và giá trị hiện tại của count
    // Lần đầu khi component được mounted thì count mang giá trị 60, khi start set count-1 = 59
    // gọi lại component lúc này count = 59, và useEffect chưa được chạy vì nó chờ 59 được render vào DOM
    // Sau khi render useEffect được chạy và prevCount được gán bằng 59
    // useEffect luôn được gọi khi count thay đổi và re-render nên chậm hơn 1 nhịp 

    // Get element với useRef
    // Thường dùng để lấy tọa độ kích thước, còn lắng nghe event thì viết trực tiếp
    // Nếu tình huống nào dẫn đến render component dẫn đến update DOM element thì useRef luôn được update theo
    const h1Ref = useRef()
    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect()
        console.log(rect)
    })
    return (
        <div style={{ marginTop: 50 }}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default UseRef