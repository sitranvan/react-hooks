import { useContext } from 'react'
import Content from './Content'
import { ThemeContext } from './ThemeContext'
import './UseContext.css'
// useContext: Giúp truyền dữ liêu từ component cha xuống các component con không cần xử dụng props
// compA => compB => compC, nếu truyền qua props từ A xuống C phải thông qua B nếu vô tính mất B thì component C sẽ không nhận được dữ liệu

/*
    useContext 
        1. Create context
        2. Provider (cung cấp dữ liệu) dùng ở component cha
        3. Consumer (nhận dữ liệu) dùng ở component con
 */
// Trong 1 component có thể tạo ra vô số context khác nhau


function UseContext() {
    const context = useContext(ThemeContext)
    // Vì là provider ôm toàn bộ component UseContext nên có thể nhận tất cả dữ liệu từ cha truyền xuống
    return (
        <div>
            <button onClick={context.toggleTheme}>Toggle Theme</button>
            <Content />
        </div>
    )
}

export default UseContext