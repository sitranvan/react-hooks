import React, { createContext, useState } from 'react'

// Create Context
const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const value = {
        theme,
        toggleTheme
    }
    return (
        // Ôm component cha, có 1 props là value nhận 1 dữ liệu cần truyền => toàn bộ children của ThemeContext.Provider
        // có thể nhận được dữ liệu
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }