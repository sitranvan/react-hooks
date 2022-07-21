import React, { useMemo, useState } from 'react'

// useMemo: tránh thực hiện logic nào đó không cần thiết
function UseMemo() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const handleSubmit = () => {
        setProducts([
            ...products,
            { id: products.length + 1, name, price: Number(price) }])
    }

    // Mỗi lần state thay đổi thì total tính toán lại 1 cách không cần thiết, vì chúng ta chỉ cần tính toán khi đã nhập hết 
    // dữ liệu vào và products thay đổi
    // const total = useMemo(() => {
    //     const resultMemo = products.reduce((result, prod) => {
    //         console.log("Tính toán lại... ")
    //         return result + prod.price
    //     }, 0)
    //     return resultMemo
    // }, [products])
    const total = products.reduce((result, prod) => {
        console.log("Tính toán lại... ")
        return result + prod.price
    }, 0)

    // desp rỗng thực hiện tính toán 1 lần tất cả lần render sau đó nó trả về kết quả trước đó
    // desp có giá trị mỗi lần render sẽ tính toán lại nếu desp thay đổi, desp không thay đổi trả về kết quả trước đó
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 50 }}>
            <input type="text"
                placeholder='Enter name...'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input type="text"
                placeholder='Enter name...'
                value={price}
                onChange={e => setPrice(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
            <h3>Total: {total}</h3>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseMemo