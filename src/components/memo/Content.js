
import React from 'react'

function Content({ count }) {
    console.log('Content Re-render')
    return (
        <h2>Hello {count}</h2>
    )
}

export default React.memo(Content)
// Lúc này content không bị re-render nữa
// memo nhận vào 1 component sau đó kiểm tra các props của componet sau mỗi lần render có bị thay đổi không
// chỉ cần 1 props bị thay đổi nó sẽ quyết định cho component re-render
// nếu không có props nào thay đổi thì sẽ không re-render
// trong trường hợp này content không có props nào nên không thay đổi nên không re-render

// Nếu truyền qua props cụ thể count thì chỉ khi count thay đổi mới re-render
// Nếu click vào count 2 thì sẽ không render vì props truyền vào content là count, nên không ảnh hưởng đến content