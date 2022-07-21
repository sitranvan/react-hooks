import { useState } from "react"

const colors = ['#FFF80A', '#CA4E79', '#ECB390', '#66BFBF', '#3330E4', '#610C63']

function ColorBox() {
    const [color, setColor] = useState('#3EC70B')
    const handleRandom = () => {
        const index = Math.floor(Math.random() * colors.length)
        setColor(colors[index])
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ width: 200, height: 200, backgroundColor: color }}></div>
            <button onClick={handleRandom}>Random</button>
        </div>
    )
}

export default ColorBox