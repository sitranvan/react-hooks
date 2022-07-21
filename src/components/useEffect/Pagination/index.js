
import React, { useEffect, useState } from 'react'
import './Pagination.css'

function Pagination() {
    const LIMIT_PAGE = 5 // Số lượng page number
    const itemPage = 5 // Số lượng nội dung trên 1 trang (hiển thị 5 todo)
    const limitPage = LIMIT_PAGE
    const [data, setData] = useState([])
    const [curentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(LIMIT_PAGE)
    const [minPage, setMinPage] = useState(1)

    // Call API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(json => setData(json))
    }, [])

    // Pagination number , phân chia đồng diều toàn bộ data, mỗi 1 page number tương ứng với itemPage
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(data.length / itemPage); i++) {
        pageNumber.push(i)
    }

    // Cắt số lượng item theo itemPage
    const lastItemPage = curentPage * itemPage
    const firstItemPage = lastItemPage - itemPage
    const newData = data.slice(firstItemPage, lastItemPage)


    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id))
    }

    const handleNext = () => {
        setCurrentPage(curentPage + 1)
        // Nếu mỗi lần curentPage + 1 lớn hơn maxPage thì hiển thị thêm page number 
        if (curentPage + 1 > maxPage) {
            setMaxPage(maxPage + limitPage)
            // minPage cần cộng thêm để ẩn đi page number trước đó 
            setMinPage(minPage + limitPage)
        }
    }
    const handlePrev = () => {
        setCurrentPage(curentPage - 1)
        // Nếu mỗi lần  curentPage + 1 bằng với limitPage thì hiển thị thêm
        if ((curentPage - 1) % limitPage === 0) {
            setMinPage(minPage - limitPage)
            // minPage cần trừ đi để ẩn đi page number trước đó 
            setMaxPage(maxPage - limitPage)
        }
    }
    return (
        <div className='pagination'>
            <h1>Pagination</h1>
            <ul className='pagination-list'>
                {newData.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <div className='number'>
                <button
                    disabled={curentPage === pageNumber[0] ? true : false}
                    onClick={handlePrev}>
                    Prev
                </button>
                {pageNumber.map(number => {
                    if (number <= maxPage && number >= minPage) {
                        return (
                            <span
                                onClick={handleClick}
                                className={number === curentPage ? 'active' : ''}
                                id={number}
                                key={number}>{number}
                            </span>
                        )
                    }
                })}
                <button
                    disabled={curentPage === pageNumber[pageNumber.length - 1] ? true : false}
                    onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pagination