
import React, { useEffect, useState } from 'react'
import './Pagination.css'
const renderData = data => {
    return (
        <ul >
            {data.map((todo, index) => (
                <li key={index}>{todo.title}</li>
            ))}
        </ul>
    )
}

function Pagination() {
    const itemsPerPage = 10;
    const pageNumberLimit = 5

    const [data, setData] = useState([])
    const [currentPage, setCurentPage] = useState(1)
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

    const handleClick = (e) => {
        setCurentPage(Number(e.target.id))
    }
    const handleNextPage = () => {
        setCurentPage(currentPage + 1)
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }
    const handlePrevPage = () => {
        setCurentPage(currentPage - 1)

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }
    const pages = []

    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i)
    }

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
    const renderPageNumber = pages.map(number => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    style={number === currentPage ? { backgroundColor: '#D61C4E', color: '#FFf' } : {}}
                    onClick={handleClick}
                    key={number}
                    id={number}>{number}
                </li>
            )
        }
    })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(json => setData(json))
    })
    return (
        <div className='pagination' style={{ textAlign: 'center' }}>
            <h1>Todo list</h1>
            {renderData(currentItems)}
            <ul className='page-number'>
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === pages[0] ? true : false}
                >
                    Prev
                </button>
                {renderPageNumber}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === pages[pages.length - 1] ? true : false}
                >
                    Next
                </button>
            </ul>
        </div>
    )
}

export default Pagination