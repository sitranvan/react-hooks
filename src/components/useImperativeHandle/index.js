import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import edm from './video/edm.mp4'
function Video(props, ref) {
  const videoRef = useRef()
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play()
    },
    pause() {
      videoRef.current.pause()
    }
  }))
  return (
    <video
      // ref={ref} dùng useImperativeHandle ẩn bỏ ref không truyền ra bên ngoài nữa
      ref={videoRef} // Vì videoRef nằm trong function Video nên có toàn quyền truy cập đến video không ảnh hưởng gì 
      // dùng forwardRef để chuyển tiếp lúc này sẽ sinh ra đối số ref
      src={edm}
    // controls => không dùng controls vì tùy dự án thiết kế khác nhau controls là mặc định
    />
  )
}

export default forwardRef(Video)