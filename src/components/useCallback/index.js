import React, { useCallback, useState } from 'react'
import Content from './Content'
// useCallback => Tránh tạo ra hàm mới không cần thiết trong function component , dẫn đến component con bị render không cần thiết
// mặc dùng đã áp dụng React.memo
// => LƯU Ý useCallback chỉ hoạt động khi component con có React.memo
function UseCallBack() {
    const [count, setCount] = useState(0)
    const handleIncrease = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])
    // Khi ứng dụng được chạy lần đầu tiên component được mounted lúc đó chạy qua useCallback, useCallback sẽ nhận 
    // Được callback sẽ tạo ra hàm handleIncrease nhận tham chiếu và lưu ra ngoài phạm vi component và return tham chiếu đó
    // Nếu re-render mà desc là empty array thì sẽ trả về tham chiếu trước đó thay vì tạo ra hàm mới => tham chiếu không bị thay đổi

    // Trong 1 số tình huống callback của useCallback có sử dụng biến bên ngoài có khả năng bị thay đổi sau mỗi lần bị re-render
    // thì chúng ta có thể đưa vào desp => giống useEffect , lúc này callback sẽ tạo ra 1 hàm mới return về tham chiếu mới
    // còn desp không thay đổi thì luôn return về tham chiếu lần đầu tiên ứng dụng chạy
    return (
        <div>
            {/* 
                Lần đầu chạy tạo ra hàm handleIncrease và lưu vào bộ nhớ trả ra tham chiếu cho handleIncrease và truyền tham chiếu
                của hàm vào props của content
                Khi click vào nó sẽ setCount và render lại gọi hàn và tạo ra phạm vi mới không liên quan đến phạm vi trước đó
                nó sẽ truyền vào props 1 tham chiếu mới 
                => Sang bên component Content thấy 2 props hoàn toàn khác nhau nên re-render lại Content (So sánh địa chỉ vùng nhớ)
             */}
            <Content onIncrease={handleIncrease} />
            <h1>{count}</h1>
        </div>
    )
}

export default UseCallBack