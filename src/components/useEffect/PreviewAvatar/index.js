import React, { useEffect, useState } from 'react'

function PreviewAvatar() {
    const [avatar, setAvatar] = useState()
    // Mỗi lần change input tạo ra URL mới, trong khi đó ta chỉ cần URL mới URL cũ cần được xóa đi
    // nếu không xóa nó sẽ lưu vào bộ nhớ tạm, trong khi đó chúng ta không cần xài đến chúng nữa
    const handlePreview = (e) => {
        const file = e.target.files[0]
        // Tạo ra URL tạm
        file.preview = URL.createObjectURL(file)
        setAvatar(file.preview)
    }
    useEffect(() => {
        // Cleaup function vẫn luôn được gọi trước khi function component unmounted nên nếu người dùng unmounted thì avatar.preview cũng sẽ được "dọn dẹp"
        return () => {
            // Xóa bỏ URL tạm trước khi mounted
            URL.revokeObjectURL(avatar)
        }
    }, [avatar])

    console.log(avatar)

    return (
        <div style={{ textAlign: 'center' }}>
            <input
                type='file'
                onChange={handlePreview}
            />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <img src={avatar} style={{ width: '60%', display: 'block', borderRadius: 5 }} />
            </div>
        </div>
    )
}

export default PreviewAvatar