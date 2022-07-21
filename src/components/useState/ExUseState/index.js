
import { useState } from "react"

function ExUseState() {

    const [info, setInfo] = useState({
        name: 'Trần Văn Sĩ',
        age: 20
    })
    const handleClick = () => {
        setInfo((prevInfo) => {
            return {
                ...prevInfo,
                bio: 'Yêu màu xanh'
            }
        })
    }
    return (
        <div>
            <p>{JSON.stringify(info)}</p>
            <button onClick={handleClick}>Add Info</button>
        </div>
    )
}
export default ExUseState


/** setState với number, Component được re - render sau khi setState, Initial state chỉ xử dụng cho lần đầu
    const handleClick = () => {
    setCount(count + 1)
    }
 */

/**  setState với dạng callback nó sẽ trả về cho callback là giá trị trước đó của state
    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
    }
 */

/** Initial state với callback nó sẽ nhận giá trị hàm đó return làm initial state trảnh re-render tính toán lại initial state
    const orders = [100, 200, 300]
    // Nếu viết bên ngoài mỗi lần setState total sẽ được tính lại trong khi đó chúng ta chỉ cần tính toán 1 lần giá trị khởi tạo
    // const total = orders.reduce((total, curr) => total + curr)
    // => Truyền callback vào setState
    const [count, setCount] = useState(() => {
        const total = orders.reduce((total, curr) => total + curr)
        return total
    })
    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
    }
 */

/**  Set state là thay thế state bằng giá trị mới, vì useState là thay thế giá trị mới nên muốn bảo lưu giá trị cũ dùng rest...
    const [info, setInfo] = useState({
        name: 'Trần Văn Sĩ',
        age: 20
    })
    Cách 1
    const handleClick = () => {
        setInfo({
            ...info,
            bio: 'Yêu màu xanh'
        })
    }
    Cách 2
    const handleClick = () => {
        setInfo((prevInfo) => {
            return {
                ...prevInfo,
                bio: 'Yêu màu xanh'
            }
        })
    }
 */