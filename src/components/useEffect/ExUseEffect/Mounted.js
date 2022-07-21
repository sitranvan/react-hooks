import React, { useState } from 'react'
import ExUseEffect from '.'

function Mounted() {
    const [show, setShow] = useState(false)
    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <ExUseEffect />}
        </div>
    )
}

export default Mounted