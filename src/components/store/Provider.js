import { useReducer } from "react"
import Context from "./Context"
import reducer, { initState } from "./reducer"
function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)
    // Tất cả component con điều nhận được [state, dispatch], children chính là component App
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider

