import React from 'react'
import { useState } from 'react'
import './Increase.css'
function Increase() {

    const [count, setCount] = useState(0)
    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div className='increase'>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default Increase