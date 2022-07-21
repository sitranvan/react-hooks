import React from 'react'

function Content({ onIncrease }) {
    console.log("Content-render")
    return (
        <div>
            <div>Content</div>
            <button onClick={onIncrease}>Click me</button>
        </div>
    )
}

export default React.memo(Content)
// Mặc dù Content không hề sử dụng dữ liệu gì, mà vẫn bị render một cách không cần thiết mặc dù có react memo