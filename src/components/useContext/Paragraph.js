import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Paragraph() {
    // useContext để nhận dữ liệu
    const context = useContext(ThemeContext)
    return (
        <p className={context.theme}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, obcaecati? Doloremque deleniti neque accusamus? Culpa ipsa repellat est, itaque porro debitis? Et architecto temporibus distinctio accusamus doloribus animi odio quia.
        </p>
    )
}

export default Paragraph