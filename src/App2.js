import React, { useEffect, useRef } from 'react'
import Video from './components/useImperativeHandle'
import './index.css'

// <Video ref={videoRef} /> vì Video là 1 function compoment nên không có ref, useRef chỉ lấy được thông qua react element
// => Khắc phục react cung cấp HOC forwardRef giúp chuyển tiếp ref
function App2() {
    const videoRef = useRef()
    // callback của useImperativeHandle bên component video được gán cho videoRef

    // vấn đề chúng ta đang public videoRef ra ngoài bên ngoài trong khi đó ref này nó chỉ là 1 thành phần của component Video
    // Nhưng chúng ta public ra ngoài tất cả trong khi đó chỉ cần play và pause => gây ra tính an toàn dữ liệu, tính rủi ro
    const handlePlay = () => {
        // videoRef.current.remove() vô tình remove phá vỡ cấu trúc và không hoạt động được nữa
        // console.log(videoRef.current) giờ chỉ có 2 methob là play và pause
        videoRef.current.play()
    }
    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <div className='video'>
            <Video ref={videoRef} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default App2